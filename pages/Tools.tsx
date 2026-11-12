import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  Calculator, Target, PiggyBank, Flame, TrendingUp, TrendingDown, 
  Coins, Info, ArrowRight, AlertCircle, DollarSign, Percent, 
  ShieldCheck, Home, Landmark, BarChart3, PieChart, RefreshCw, 
  Scale, ArrowUpRight, CheckCircle2, FileText, ChevronDown, 
  ChevronUp, Layers, HelpCircle, Briefcase, ExternalLink, Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

// Formato de moneda mexicana
const fmt = (n: number) => n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtInt = (n: number) => Math.round(n).toLocaleString('es-MX');

const inputCls = "w-full p-2.5 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm transition-all";
const labelCls = "text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1.5";

// ==========================================
// 1. CALCULADORA: MATA DEUDAS (EXISTENTE)
// ==========================================
const DebtAmortization: React.FC = () => {
  const [capital, setCapital]         = useState<number>(35000);
  const [annualRate, setAnnualRate]   = useState<number>(48);
  const [plazo, setPlazo]             = useState<number>(12);
  const [applyIVA, setApplyIVA]       = useState<boolean>(true);
  const [rateMode, setRateMode]       = useState<'annual'|'monthly'>('annual');

  const [result, setResult] = useState<{
    pmt: number;
    totalPay: number;
    totalInterest: number;
    totalIVA: number;
    extraPct: number;
    schedule: Array<{ month: number; payment: number; interest: number; iva: number; principal: number; balance: number }>;
    chartData: Array<{ month: string; balance: number; }>;
  } | null>(null);

  const [showTable, setShowTable] = useState<boolean>(false);
  const [errorMSG, setErrorMSG]   = useState<string>('');

  useEffect(() => { calculate(); }, [capital, annualRate, plazo, applyIVA, rateMode]);

  const calculate = () => {
    if (capital <= 0 || annualRate <= 0 || plazo <= 0) { 
      setErrorMSG('Ingresa valores válidos mayores a cero.'); 
      setResult(null); 
      return; 
    }

    const monthlyBase = rateMode === 'annual' ? (annualRate / 100) / 12 : annualRate / 100;
    const r = applyIVA ? monthlyBase * 1.16 : monthlyBase;
    const n = plazo;

    const pmt = capital * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    if (!isFinite(pmt) || pmt <= 0) { 
      setErrorMSG('Los parámetros generan un préstamo inviable. Revisa la tasa o el plazo.'); 
      setResult(null); 
      return; 
    }
    setErrorMSG('');

    const schedule: NonNullable<typeof result>['schedule'] = [];
    const chartData: Array<{ month: string; balance: number }> = [];
    let balance = capital;
    let totalInt = 0;
    let totalIVA = 0;

    for (let i = 1; i <= n; i++) {
      const interestRaw = balance * monthlyBase;
      const iva = applyIVA ? interestRaw * 0.16 : 0;
      const interestTotal = interestRaw + iva;
      let principal = pmt - interestTotal;
      if (i === n) principal = balance;
      balance = Math.max(0, balance - principal);
      totalInt += interestRaw;
      totalIVA += iva;

      schedule.push({ month: i, payment: pmt, interest: interestRaw, iva, principal, balance });
      chartData.push({ month: `Mes ${i}`, balance });
    }

    const totalPay   = pmt * n;
    const extraPct   = ((totalPay - capital) / capital) * 100;

    setResult({ pmt, totalPay, totalInterest: totalInt, totalIVA, extraPct, schedule, chartData });
  };

  return (
    <div id="tool-mata-deudas" className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-rose-400">
        <Flame size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora "Mata Deudas"</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Ingresa los datos de tu préstamo o tarjeta y descubre exactamente cuánto pagas de capital, intereses e IVA mes a mes.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div className="flex gap-1 p-1 bg-slate-900 rounded-lg border border-slate-700">
            {(['annual','monthly'] as const).map(m => (
              <button key={m} onClick={() => setRateMode(m)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${rateMode === m ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}>
                {m === 'annual' ? 'Tasa Anual (CAT)' : 'Tasa Mensual'}
              </button>
            ))}
          </div>

          <div>
            <label className={labelCls}>Capital / Monto del crédito ($ MXN)</label>
            <input type="number" value={capital} onChange={e => setCapital(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>{rateMode === 'annual' ? 'Tasa de Interés Anual (CAT) %' : 'Tasa de Interés Mensual %'}</label>
            <input type="number" step="0.01" value={annualRate} onChange={e => setAnnualRate(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Plazo (número de meses)</label>
            <input type="number" value={plazo} min={1} max={360} onChange={e => setPlazo(Number(e.target.value))} className={inputCls} />
          </div>

          <button onClick={() => setApplyIVA(v => !v)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${applyIVA ? 'bg-amber-900/20 border-amber-500/40 text-amber-300' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${applyIVA ? 'bg-amber-500' : 'bg-slate-600'}`}>
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${applyIVA ? 'left-5' : 'left-0.5'}`}/>
            </div>
            <span className="text-xs font-bold">Aplicar IVA 16% sobre intereses (México)</span>
          </button>

          {errorMSG && (
            <div className="bg-rose-950/40 border border-rose-500 p-3 rounded-lg text-rose-400 text-xs font-bold">⚠️ {errorMSG}</div>
          )}
        </div>

        <div className="lg:col-span-8 space-y-4">
          {result && !errorMSG && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Pago Mensual</p>
                  <p className="text-xl font-black text-white">${fmt(result.pmt)}</p>
                </div>
                <div className="bg-rose-900/20 border border-rose-500/30 p-3 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-1">Intereses + IVA</p>
                  <p className="text-xl font-black text-rose-400">${fmt(result.totalInterest + result.totalIVA)}</p>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Total a Pagar</p>
                  <p className="text-xl font-black text-white">${fmt(result.totalPay)}</p>
                </div>
                <div className="bg-amber-900/20 border border-amber-500/30 p-3 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">Costo Extra</p>
                  <p className="text-xl font-black text-amber-400">+{result.extraPct.toFixed(1)}%</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Desglose del Total a Pagar</span>
                  <span className="text-white font-bold">${fmt(result.totalPay)}</span>
                </div>
                <div className="flex h-5 rounded-full overflow-hidden gap-px mb-2">
                  <div className="bg-blue-500 transition-all" style={{ width: `${(capital / result.totalPay) * 100}%` }} title="Capital" />
                  <div className="bg-rose-500 transition-all" style={{ width: `${(result.totalInterest / result.totalPay) * 100}%` }} title="Intereses" />
                  {applyIVA && <div className="bg-amber-400 transition-all" style={{ width: `${(result.totalIVA / result.totalPay) * 100}%` }} title="IVA" />}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block"/>Capital: <strong className="text-white">${fmt(capital)}</strong></span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block"/>Intereses: <strong className="text-rose-400">${fmt(result.totalInterest)}</strong></span>
                  {applyIVA && <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block"/>IVA: <strong className="text-amber-400">${fmt(result.totalIVA)}</strong></span>}
                </div>
              </div>

              <div className="h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={result.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorDebt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" fontSize={10} stroke="#64748b" interval={Math.floor(plazo/8)} />
                    <YAxis fontSize={10} stroke="#64748b" tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }}
                      formatter={(v: number) => [`$${fmt(v)}`, 'Saldo Restante']} labelStyle={{ color: '#94a3b8' }} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                    <Area type="monotone" dataKey="balance" stroke="#f43f5e" fillOpacity={1} fill="url(#colorDebt)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
      </div>

      {result && !errorMSG && (
        <div className="mt-6 border-t border-slate-700/80 pt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calculator size={16} className="text-rose-400" />
              Tabla de Amortización Detallada
            </h3>
            <button onClick={() => setShowTable(v => !v)}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-colors">
              {showTable ? '▲ Ocultar tabla' : '▼ Ver tabla completa'}
            </button>
          </div>

          {showTable && (
            <div className="overflow-x-auto rounded-xl border border-slate-700 max-h-72">
              <table className="w-full text-xs min-w-[550px]">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-700 sticky top-0">
                    {['Mes','Cuota','Interés','IVA (16%)','Capital','Saldo Restante'].map(h => (
                      <th key={h} className="p-3 text-right first:text-left text-slate-400 font-semibold uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {result.schedule.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-700/30">
                      <td className="p-3 font-bold text-slate-300">{row.month}</td>
                      <td className="p-3 text-right font-bold text-white">${fmt(row.payment)}</td>
                      <td className="p-3 text-right text-rose-400">${fmt(row.interest)}</td>
                      <td className="p-3 text-right text-amber-400">{applyIVA ? `$${fmt(row.iva)}` : '—'}</td>
                      <td className="p-3 text-right text-emerald-400">${fmt(row.principal)}</td>
                      <td className="p-3 text-right text-slate-300">${fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2">
        <Info size={14} className="text-rose-400 shrink-0" />
        <span>Estimación con fines estrictamente educativos. Los cálculos de CAT y comisiones exactas deben corroborarse en el contrato de crédito de tu entidad financiera.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 2. CALCULADORA: LA TRAMPA DEL MÍNIMO VS INVERTIR (EXISTENTE)
// =========================================================================
const DebtVsInvestmentTool: React.FC = () => {
  const [debtAmount, setDebtAmount] = useState(25000);
  const [cardRate, setCardRate] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState(1500);
  const [investRate, setInvestRate] = useState(11);
  const [timeHorizon, setTimeHorizon] = useState(24);

  const [results, setResults] = useState({
    totalDebtInterest: 0,
    totalInvested: 0,
    gap: 0,
    monthsToPay: 0
  });

  useEffect(() => {
    let currentDebt = debtAmount;
    let totalInterestPaid = 0;
    let months = 0;
    const monthlyRate = (cardRate / 100) / 12;

    while (currentDebt > 0 && months < 360) {
      const interestThisMonth = currentDebt * monthlyRate;
      totalInterestPaid += interestThisMonth;
      currentDebt = currentDebt + interestThisMonth - monthlyPayment;
      months++;
      if (interestThisMonth >= monthlyPayment) {
        months = 999;
        break;
      }
    }

    const r = (investRate / 100) / 12;
    const n = timeHorizon;
    const p = monthlyPayment;
    const finalInvestment = p * ((Math.pow(1 + r, n) - 1) / r);

    setResults({
      totalDebtInterest: totalInterestPaid,
      totalInvested: finalInvestment,
      gap: finalInvestment + totalInterestPaid,
      monthsToPay: months
    });
  }, [debtAmount, cardRate, monthlyPayment, investRate, timeHorizon]);

  return (
    <div id="tool-trampa-minimo" className="bg-slate-800 rounded-2xl shadow-xl border border-amber-500/30 p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2 text-amber-400">
        <Coins size={28} />
        <h2 className="text-2xl font-bold text-white">La Trampa del Mínimo vs. El Poder de Invertir</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Descubre cuánto te cuesta realmente "pagar poquito" cada mes frente a canalizar ese mismo flujo a inversión con interés compuesto.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 border border-slate-700 p-6 rounded-2xl space-y-4">
          <div>
            <label className={labelCls}>Deuda en Tarjeta ($ MXN)</label>
            <input type="number" value={debtAmount} onChange={e => setDebtAmount(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Tasa Anual Tarjeta (CAT: {cardRate}%)</label>
            <input type="range" min="10" max="120" step="5" value={cardRate} onChange={e => setCardRate(Number(e.target.value))} className="w-full accent-amber-400 cursor-pointer" />
          </div>
          <div>
            <label className={labelCls}>Pago Mensual ($ MXN)</label>
            <input type="number" value={monthlyPayment} onChange={e => setMonthlyPayment(Number(e.target.value))} className={inputCls} />
            {(debtAmount * (cardRate/100/12)) >= monthlyPayment && (
              <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-semibold">
                <AlertCircle size={13} /> Tu pago no cubre ni los intereses. Deuda impagable.
              </p>
            )}
          </div>
          <div>
            <label className={labelCls}>Horizonte de Proyección ({timeHorizon} meses)</label>
            <input type="range" min="6" max="60" step="6" value={timeHorizon} onChange={e => setTimeHorizon(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-950/20 border border-rose-500/30 p-5 rounded-2xl">
              <span className="text-rose-400 font-bold uppercase tracking-wider text-[11px] block mb-1">Escenario A: Pagar Deuda Lenta</span>
              <p className="text-3xl font-black text-white mb-1">
                {results.monthsToPay === 999 ? "Deuda Eterna" : `$${fmt(results.totalDebtInterest)}`}
              </p>
              <p className="text-slate-400 text-xs">
                {results.monthsToPay === 999 ? "El interés mensual supera tu abono. Nunca terminarás." : `Solo intereses pagados al banco en ${timeHorizon} meses.`}
              </p>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-500/30 p-5 rounded-2xl">
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block mb-1">Escenario B: Invertir Ese Abono ({investRate}%)</span>
              <p className="text-3xl font-black text-white mb-1">${fmt(results.totalInvested)}</p>
              <p className="text-slate-400 text-xs">Capital acumulado si canalizaras los ${fmt(monthlyPayment)}/mes a inversión.</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-amber-500/40 p-6 rounded-2xl">
            <h4 className="text-amber-300 font-bold text-sm mb-1 flex items-center gap-2">
              <Info size={16} /> Costo de Oportunidad (Brecha de Riqueza)
            </h4>
            <p className="text-4xl font-extrabold text-white mb-2">${fmt(results.gap)}</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              La diferencia neta entre transferir riqueza a los bancos y construir tu propio patrimonio financiero.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2">
        <Info size={14} className="text-amber-400 shrink-0" />
        <span>El CAT bancario promedio supera el 60% anual en México. Pagar deudas caras siempre rinde más que invertir a tasas de renta fija.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 3. CALCULADORA: INTERÉS COMPUESTO AVANZADO (EXISTENTE)
// =========================================================================
const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly]     = useState(2000);
  const [rate, setRate]           = useState(10);
  const [years, setYears]         = useState(10);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    let balance = principal;
    const data = [];
    for (let i = 0; i <= years; i++) {
      data.push({
        year: `Año ${i}`,
        balance: Math.round(balance),
        principal: principal + (monthly * 12 * i)
      });
      balance = (balance + (monthly * 12)) * (1 + rate / 100);
    }
    setChartData(data);
  }, [principal, monthly, rate, years]);

  const lastItem = chartData[chartData.length - 1] || { balance: 0, principal: 0 };

  return (
    <div id="tool-interes-compuesto" className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-emerald-400">
        <TrendingUp size={28} />
        <h2 className="text-2xl font-bold text-white">Interés Compuesto Avanzado</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">La "Magia" de la Bolsa. Observa cómo en los últimos años la curva exponencial despega agresivamente: tu dinero trabajando por ti.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Inversión Inicial ($ MXN)</label>
            <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Aporte Mensual ($ MXN)</label>
            <input type="number" value={monthly} onChange={e => setMonthly(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Tasa Anual Estimada (%)</label>
            <input type="number" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Años de Inversión</label>
            <input type="number" value={years} min={1} max={50} onChange={e => setYears(Number(e.target.value))} className={inputCls} />
          </div>
        </div>

        <div className="lg:col-span-2 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" fontSize={11} stroke="#64748b" />
              <YAxis fontSize={11} stroke="#64748b" tickFormatter={val => `$${val/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }} 
                formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'balance' ? 'Capital Total' : 'Tus Aportaciones']} 
                labelStyle={{color: '#94a3b8'}}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
              <Area type="monotone" dataKey="balance" stroke="#10b981" fillOpacity={1} fill="url(#colorBalance)" name="balance" />
              <Area type="monotone" dataKey="principal" stroke="#64748b" fillOpacity={0.4} fill="#64748b" name="principal" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-700 pt-5">
        <div className="text-center p-3 bg-slate-900/50 rounded-xl">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">Aportado por ti</p>
          <p className="text-lg font-bold text-slate-200">${fmt(lastItem.principal)}</p>
        </div>
        <div className="text-center p-3 bg-slate-900/50 rounded-xl">
          <p className="text-emerald-400 text-[10px] uppercase tracking-widest mb-1">Intereses Puros</p>
          <p className="text-lg font-bold text-emerald-400">+${fmt(Math.max(0, lastItem.balance - lastItem.principal))}</p>
        </div>
        <div className="text-center col-span-2 md:col-span-1 bg-emerald-950/40 rounded-xl p-3 border border-emerald-500/30">
          <p className="text-emerald-300 text-[10px] uppercase tracking-widest mb-1">Patrimonio Total</p>
          <p className="text-xl font-bold text-white">${fmt(lastItem.balance)}</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2">
        <Info size={14} className="text-emerald-400 shrink-0" />
        <span>Rendimiento proyectado con fines educativos. Los retornos históricos de bolsa no garantizan rentabilidad futura idéntica.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 4. CALCULADORA: SIMULADOR REGLA DEL 4% / FIRE (EXISTENTE)
// =========================================================================
const FinancialFreedomSimulator: React.FC = () => {
  const [monthlyExpense, setMonthlyExpense] = useState<number>(30000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

  const targetPortfolio = (monthlyExpense * 12) / (withdrawalRate / 100);
  const monthlyPassive = (targetPortfolio * (withdrawalRate / 100)) / 12;

  return (
    <div id="tool-regla-4" className="bg-gradient-to-br from-indigo-950/40 to-slate-900 rounded-2xl shadow-xl border border-indigo-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-indigo-400">
        <Target size={28} />
        <h2 className="text-2xl font-bold text-white">Simulador "Regla del 4%" (Libertad Financiera / FIRE)</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Basado en el célebre estudio Trinity: calcula cuánto dinero necesitas acumular para vivir eternamente de tus rentas sin extinguir el capital.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
            <label className="text-xs font-bold text-indigo-300 block mb-2 flex items-center justify-between">
              ¿Cuánto cuesta tu vida mensual ideal?
              <span className="text-white text-base">${fmt(monthlyExpense)} MXN</span>
            </label>
            <input 
              type="range" min="10000" max="200000" step="1000" value={monthlyExpense} 
              onChange={e => setMonthlyExpense(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>

          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
            <label className="text-xs font-bold text-slate-300 block mb-2 flex items-center justify-between">
              Tasa de Retiro Seguro (SWR)
              <span className="text-indigo-400 font-bold">{withdrawalRate}% anual</span>
            </label>
            <input 
              type="range" min="2.5" max="6" step="0.5" value={withdrawalRate} 
              onChange={e => setWithdrawalRate(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 mt-2">La regla del 4% contempla horizontes de 30 años; un 3.5% ofrece protección ante crisis prolongadas.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-6 bg-slate-900/80 border border-indigo-500/30 rounded-2xl text-center">
          <PiggyBank size={40} className="text-indigo-400 mb-2 opacity-80" />
          <p className="text-xs text-indigo-300 uppercase tracking-widest font-bold mb-1">Tu Número FIRE Objetivo</p>
          <p className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            ${fmtInt(targetPortfolio)} MXN
          </p>
          <div className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-4 py-3 rounded-xl text-xs leading-relaxed max-w-sm">
            Retirando el <strong className="text-white">{withdrawalRate}% anual</strong> obtienes <strong className="text-emerald-400">${fmt(monthlyPassive)} MXN/mes</strong> y la inflación es absorbida por el crecimiento del portafolio.
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2">
        <Info size={14} className="text-indigo-400 shrink-0" />
        <span>El estudio Trinity asume carteras 50% acciones y 50% bonos en mercados estadounidenses. En México debe integrarse el impacto fiscal del Art. 129 LISR.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 5. RESTAURADA: CALCULADORA DCF (FLUJO DE CAJA DESCONTADO - FASE 5 L2)
// =========================================================================
const DcfCalculator: React.FC = () => {
  const [fcf0, setFcf0]                     = useState<number>(10000);
  const [growthRate, setGrowthRate]         = useState<number>(12);
  const [terminalGrowth, setTerminalGrowth] = useState<number>(3);
  const [wacc, setWacc]                     = useState<number>(10);
  const [netDebt, setNetDebt]               = useState<number>(5000);
  const [shares, setShares]                 = useState<number>(1000);
  const [currentPrice, setCurrentPrice]     = useState<number>(120);

  // Proyecciones
  const projectedYears = [];
  let sumPvFcf = 0;
  for (let i = 1; i <= 5; i++) {
    const fcf = fcf0 * Math.pow(1 + growthRate / 100, i);
    const pv = fcf / Math.pow(1 + wacc / 100, i);
    sumPvFcf += pv;
    projectedYears.push({ year: `Año ${i}`, fcf, pv });
  }

  const fcf5 = fcf0 * Math.pow(1 + growthRate / 100, 5);
  const fcf6 = fcf5 * (1 + terminalGrowth / 100);
  const terminalVal = (wacc - terminalGrowth > 0) ? (fcf6 / ((wacc - terminalGrowth) / 100)) : 0;
  const pvTerminalVal = terminalVal / Math.pow(1 + wacc / 100, 5);

  const enterpriseValue = sumPvFcf + pvTerminalVal;
  const equityValue = enterpriseValue - netDebt;
  const intrinsicPerShare = shares > 0 ? (equityValue / shares) : 0;
  const marginOfSafety = intrinsicPerShare > 0 ? ((intrinsicPerShare - currentPrice) / intrinsicPerShare) * 100 : 0;

  return (
    <div id="tool-dcf" className="bg-slate-800 rounded-2xl shadow-xl border border-indigo-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-indigo-400">
        <BarChart3 size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora DCF (Flujo de Caja Descontado)</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta institucional de la Fase 5 (Lección 2). Estima el valor intrínseco de una empresa descontando sus flujos de efectivo futuros a valor presente.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>FCF Último Año ($ MXN/USD)</label>
              <input type="number" value={fcf0} onChange={e => setFcf0(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Crecimiento FCF Años 1–5 (%)</label>
              <input type="number" step="0.5" value={growthRate} onChange={e => setGrowthRate(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Crecimiento Terminal (%)</label>
              <input type="number" step="0.1" value={terminalGrowth} onChange={e => setTerminalGrowth(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Tasa Descuento WACC (%)</label>
              <input type="number" step="0.1" value={wacc} onChange={e => setWacc(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Deuda Neta ($ MXN/USD)</label>
              <input type="number" value={netDebt} onChange={e => setNetDebt(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Acciones en Circulación</label>
              <input type="number" value={shares} onChange={e => setShares(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Precio Actual de Mercado ($)</label>
            <input type="number" step="0.5" value={currentPrice} onChange={e => setCurrentPrice(Number(e.target.value))} className={inputCls} />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">VP FCF 5 Años</span>
              <span className="text-base font-bold text-slate-200">${fmt(sumPvFcf)}</span>
            </div>
            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">VP Valor Terminal</span>
              <span className="text-base font-bold text-slate-200">${fmt(pvTerminalVal)}</span>
            </div>
            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 text-center col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Enterprise Value (EV)</span>
              <span className="text-base font-bold text-indigo-300">${fmt(enterpriseValue)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-950/60 to-slate-900 p-5 rounded-2xl border border-indigo-500/40 text-center">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">Valor Intrínseco por Acción</span>
              <p className="text-3xl md:text-4xl font-black text-white">${fmt(intrinsicPerShare)}</p>
              <p className="text-[11px] text-slate-400 mt-1">Capital neto / número de acciones</p>
            </div>

            <div className={`p-5 rounded-2xl border text-center flex flex-col justify-center ${
              marginOfSafety >= 20 ? 'bg-emerald-950/40 border-emerald-500/40' :
              marginOfSafety > 0 ? 'bg-amber-950/40 border-amber-500/40' : 'bg-rose-950/40 border-rose-500/40'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-300">Margen de Seguridad</span>
              <p className={`text-3xl md:text-4xl font-black ${
                marginOfSafety >= 20 ? 'text-emerald-400' : marginOfSafety > 0 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {marginOfSafety.toFixed(1)}%
              </p>
              <span className="text-[11px] text-slate-300 mt-1">
                {marginOfSafety >= 20 ? '✅ Descuento Atractivo' : marginOfSafety > 0 ? '⚠️ Precio Justo / Sin Margen' : '❌ Cotiza con Sobreprecio'}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-xs">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  <th className="p-2.5 text-left">Periodo</th>
                  <th className="p-2.5 text-right">FCF Proyectado</th>
                  <th className="p-2.5 text-right">Valor Presente Descontado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {projectedYears.map((y, idx) => (
                  <tr key={idx} className="hover:bg-slate-750">
                    <td className="p-2.5 font-bold text-indigo-300">{y.year}</td>
                    <td className="p-2.5 text-right">${fmt(y.fcf)}</td>
                    <td className="p-2.5 text-right font-medium">${fmt(y.pv)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-900/70 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2.5">
        <AlertCircle size={15} className="text-indigo-400 shrink-0" />
        <span><strong>Advertencia visible:</strong> Estimación educativa. El DCF depende de supuestos; cambia el crecimiento 1 punto y el resultado cambia mucho. No es recomendación de compra.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 6. RESTAURADA: VALOR INTRÍNSECO MÉTODO GRAHAM (MÚLTIPLOS)
// =========================================================================
const GrahamValuationCalculator: React.FC = () => {
  const [eps, setEps]                   = useState<number>(8);
  const [growthRate, setGrowthRate]     = useState<number>(7);
  const [rf, setRf]                     = useState<number>(8);
  const [currentPrice, setCurrentPrice] = useState<number>(68);
  const [historicalPe, setHistoricalPe] = useState<number>(15);

  // Fórmula de Graham ajustada: V = EPS * (8.5 + 2g) * (4.4 / rf)
  const intrinsicGraham = (rf > 0) ? eps * (8.5 + 2 * growthRate) * (4.4 / rf) : 0;
  const marginOfSafety = intrinsicGraham > 0 ? ((intrinsicGraham - currentPrice) / intrinsicGraham) * 100 : 0;
  const currentPe = eps > 0 ? (currentPrice / eps) : 0;

  return (
    <div id="tool-graham" className="bg-slate-800 rounded-2xl shadow-xl border border-blue-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-blue-400">
        <Scale size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de Valor Intrínseco (Método Graham)</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Valuación cuantitativa rápida de Benjamin Graham (padre del Value Investing) para comparar si una acción cotiza barata frente a sus utilidades.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label className={labelCls}>Utilidad por Acción (EPS Actual - $)</label>
            <input type="number" step="0.1" value={eps} onChange={e => setEps(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Crecimiento Esperado de Ganancias (%)</label>
            <input type="number" step="0.5" value={growthRate} onChange={e => setGrowthRate(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Tasa Libre de Riesgo (CETES 28D %)</label>
            <input type="number" step="0.1" value={rf} onChange={e => setRf(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500 block mt-1">Referencia Banxico actual: 9.00% (Noviembre 2026)</span>
          </div>
          <div>
            <label className={labelCls}>Precio Actual en Bolsa ($ MXN/USD)</label>
            <input type="number" step="0.5" value={currentPrice} onChange={e => setCurrentPrice(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>P/E Histórico Promedio de la Empresa</label>
            <input type="number" step="0.5" value={historicalPe} onChange={e => setHistoricalPe(Number(e.target.value))} className={inputCls} />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-950/60 to-slate-900 p-6 rounded-2xl border border-blue-500/40 text-center">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block mb-1">Valor Intrínseco de Graham (V)</span>
              <p className="text-4xl font-extrabold text-white">${fmt(intrinsicGraham)}</p>
              <p className="text-[11px] text-slate-400 mt-2 font-mono">V = EPS × (8.5 + 2g) × (4.4 / rf)</p>
            </div>

            <div className={`p-6 rounded-2xl border text-center flex flex-col justify-center ${
              marginOfSafety >= 20 ? 'bg-emerald-950/40 border-emerald-500/40' :
              marginOfSafety > 0 ? 'bg-amber-950/40 border-amber-500/40' : 'bg-rose-950/40 border-rose-500/40'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-300">Margen de Seguridad</span>
              <p className={`text-4xl font-extrabold ${
                marginOfSafety >= 20 ? 'text-emerald-400' : marginOfSafety > 0 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {marginOfSafety.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-300 mt-1">Precio actual: ${fmt(currentPrice)}</p>
            </div>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Comparativa de Múltiplos (P/E)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5">P/E Actual</span>
                <span className="text-xl font-bold text-white">{currentPe.toFixed(1)}x</span>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5">P/E Histórico</span>
                <span className="text-xl font-bold text-blue-300">{historicalPe.toFixed(1)}x</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              {currentPe < historicalPe 
                ? `La empresa cotiza con un descuento del ${((1 - currentPe/historicalPe)*100).toFixed(1)}% frente a su múltiplo histórico medio.`
                : `La empresa cotiza con una prima del ${(((currentPe/historicalPe) - 1)*100).toFixed(1)}% sobre su múltiplo histórico.`}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-900/70 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2.5">
        <AlertCircle size={15} className="text-blue-400 shrink-0" />
        <span><strong>Advertencia visible:</strong> La fórmula de Graham es una regla práctica, no una valuación completa. Úsala junto al DCF y al análisis del negocio.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 7. RESTAURADA: CALCULADORA DE INFLACIÓN Y TASA REAL (BANXICO)
// =========================================================================
const InflationRealRateCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<number>(100000);
  const [nominalRate, setNominalRate]     = useState<number>(9.00);
  const [inflationRate, setInflationRate] = useState<number>(4.32);
  const [years, setYears]                 = useState<number>(10);

  // Ecuación de Fisher: Tasa Real = (1 + nominal) / (1 + inflacion) - 1
  const realRate = ((1 + nominalRate / 100) / (1 + inflationRate / 100) - 1) * 100;
  const futureNominal = initialAmount * Math.pow(1 + nominalRate / 100, years);
  const futureRealPurchasingPower = initialAmount * Math.pow(1 + realRate / 100, years);
  const cashAtZero = initialAmount / Math.pow(1 + inflationRate / 100, years);
  const purchasingPowerLoss = ((initialAmount - cashAtZero) / initialAmount) * 100;

  const chartData = [];
  for (let i = 0; i <= years; i++) {
    chartData.push({
      year: `Año ${i}`,
      nominal: Math.round(initialAmount * Math.pow(1 + nominalRate / 100, i)),
      real: Math.round(initialAmount * Math.pow(1 + realRate / 100, i)),
      cash: Math.round(initialAmount / Math.pow(1 + inflationRate / 100, i)),
    });
  }

  return (
    <div id="tool-tasa-real" className="bg-slate-800 rounded-2xl shadow-xl border border-teal-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-teal-400">
        <Landmark size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de Inflación y Tasa Real (Banxico)</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Convierte el rendimiento nominal en ganancia de poder adquisitivo real aplicando la Ecuación de Fisher y constata la erosión silenciosa del efectivo.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div>
            <label className={labelCls}>Monto Inicial ($ MXN)</label>
            <input type="number" value={initialAmount} onChange={e => setInitialAmount(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Rendimiento Nominal Anual (%)</label>
            <input type="number" step="0.05" value={nominalRate} onChange={e => setNominalRate(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Inflación Anual Estimada (INPC %)</label>
            <input type="number" step="0.05" value={inflationRate} onChange={e => setInflationRate(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Plazo (Años: {years})</label>
            <input type="range" min="1" max="30" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-teal-400 cursor-pointer" />
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700 text-[11px] text-slate-400 space-y-1">
            <span className="font-bold text-teal-300 block">Datos Oficiales de Referencia:</span>
            <p>• CETES 28D: <strong>9.00% anual</strong> (12/Nov/2026)</p>
            <p>• Inflación INPC: <strong>4.32% anual</strong> (12/Nov/2026)</p>
            <a href="https://www.banxico.org.mx/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline inline-flex items-center gap-1 font-semibold mt-1">
              Ver datos en Banxico.org.mx <ExternalLink size={10} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider block mb-1">Tasa Real de Fisher</span>
              <p className="text-2xl font-black text-teal-300">+{realRate.toFixed(2)}%</p>
              <span className="text-[10px] text-slate-500">Ganancia pura sobre inflación</span>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block mb-1">Valor Nominal Final</span>
              <p className="text-2xl font-black text-white">${fmt(futureNominal)}</p>
              <span className="text-[10px] text-slate-500">Cifra numérica en cuenta</span>
            </div>
            <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/30 text-center">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">En Pesos de Hoy</span>
              <p className="text-2xl font-black text-emerald-300">${fmt(futureRealPurchasingPower)}</p>
              <span className="text-[10px] text-slate-400">Poder adquisitivo real</span>
            </div>
          </div>

          <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-xl flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Dinero Parado al 0% (Bajo el Colchón)</span>
              <p className="text-sm text-slate-300 mt-0.5">Tus ${fmt(initialAmount)} equivaldrán a solo <strong className="text-white">${fmt(cashAtZero)} en poder de compra</strong> en {years} años.</p>
            </div>
            <span className="text-xl font-bold text-rose-400 shrink-0">-{purchasingPowerLoss.toFixed(1)}%</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorNominal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" fontSize={10} stroke="#64748b" />
                <YAxis fontSize={10} stroke="#64748b" tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }}
                  formatter={(v: number, name: string) => [`$${fmt(v)}`, name === 'nominal' ? 'Nominal' : name === 'real' ? 'Poder Adquisitivo Real' : 'Dinero Parado']} labelStyle={{ color: '#94a3b8' }} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <Area type="monotone" dataKey="nominal" stroke="#3b82f6" fillOpacity={1} fill="url(#colorNominal)" name="nominal" />
                <Area type="monotone" dataKey="real" stroke="#10b981" fillOpacity={1} fill="url(#colorReal)" name="real" />
                <Area type="monotone" dataKey="cash" stroke="#ef4444" fillOpacity={0} strokeDasharray="4 4" name="cash" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 8. RESTAURADA: CALCULADORA DE AHORRO Y METAS (FASE 6)
// =========================================================================
const SavingsGoalsCalculator: React.FC = () => {
  const [targetAmount, setTargetAmount]     = useState<number>(60000);
  const [months, setMonths]                 = useState<number>(24);
  const [annualReturn, setAnnualReturn]     = useState<number>(8);
  const [initialSavings, setInitialSavings] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome]   = useState<number>(20000);
  const [showSchedule, setShowSchedule]     = useState<boolean>(false);

  const r = (annualReturn / 100) / 12;
  const n = months;
  const futureInitial = initialSavings * Math.pow(1 + r, n);
  const remainingTarget = Math.max(0, targetAmount - futureInitial);
  const monthlyDeposit = r > 0 ? (remainingTarget * r) / (Math.pow(1 + r, n) - 1) : (remainingTarget / n);
  const totalContributed = initialSavings + (monthlyDeposit * n);
  const interestEarned = Math.max(0, targetAmount - totalContributed);
  const pctOfIncome = monthlyIncome > 0 ? (monthlyDeposit / monthlyIncome) * 100 : 0;

  const schedule = [];
  let currentBal = initialSavings;
  for (let i = 1; i <= n; i++) {
    const interestMonth = currentBal * r;
    currentBal = currentBal + interestMonth + monthlyDeposit;
    schedule.push({ month: i, deposit: monthlyDeposit, interest: interestMonth, balance: currentBal });
  }

  return (
    <div id="tool-metas" className="bg-slate-800 rounded-2xl shadow-xl border border-cyan-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-cyan-400">
        <Target size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de Ahorro y Metas (¿Cuánto apartar al mes?)</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta clave de la Fase 6 (Presupuesto y Plan Financiero). Define tu objetivo con fecha límite y calcula la cuota mensual exacta aprovechando rendimientos.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label className={labelCls}>Monto Objetivo de la Meta ($ MXN)</label>
            <input type="number" value={targetAmount} onChange={e => setTargetAmount(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Plazo para Lograrla ({months} meses / {(months/12).toFixed(1)} años)</label>
            <input type="range" min="6" max="120" step="6" value={months} onChange={e => setMonths(Number(e.target.value))} className="w-full accent-cyan-400 cursor-pointer" />
          </div>
          <div>
            <label className={labelCls}>Rendimiento Anual del Instrumento (%)</label>
            <input type="number" step="0.5" value={annualReturn} onChange={e => setAnnualReturn(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500 block mt-1">Ej. CETES Directo: ~9%, Cuentas de Ahorro: 8% a 10%</span>
          </div>
          <div>
            <label className={labelCls}>Ahorro Inicial Acumulado ($ MXN)</label>
            <input type="number" value={initialSavings} onChange={e => setInitialSavings(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Ingreso Mensual Neto Opcional ($ MXN)</label>
            <input type="number" value={monthlyIncome} onChange={e => setMonthlyIncome(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500 block mt-1">Para verificar la regla del 20% de ahorro e inversión</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="bg-gradient-to-br from-cyan-950/60 to-slate-900 p-6 rounded-2xl border border-cyan-500/40 text-center">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">Aportación Mensual Necesaria</span>
            <p className="text-4xl font-black text-white">${fmt(monthlyDeposit)}</p>
            <p className="text-xs text-slate-400 mt-2">
              Durante {months} meses al {annualReturn}% anual para alcanzar <strong>${fmt(targetAmount)} MXN</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Aportado de tu Bolsillo</span>
              <p className="text-xl font-bold text-slate-200">${fmt(totalContributed)}</p>
            </div>
            <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/30 text-center">
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">Rendimientos Ganados</span>
              <p className="text-xl font-bold text-emerald-300">+${fmt(interestEarned)}</p>
            </div>
          </div>

          {monthlyIncome > 0 && pctOfIncome > 20 && (
            <div className="bg-rose-950/30 border border-rose-500/40 p-4 rounded-xl text-rose-300 text-xs flex items-start gap-3">
              <AlertCircle size={18} className="text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">La meta no cabe en tu presupuesto recomendado:</strong>
                Representa el {pctOfIncome.toFixed(1)}% de tu ingreso neto mensual (el límite sano sugerido es 20%). Te sugerimos alargar el plazo o reajustar el monto objetivo.
              </div>
            </div>
          )}

          <div className="border-t border-slate-700/80 pt-3">
            <button onClick={() => setShowSchedule(v => !v)} className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1">
              {showSchedule ? '▲ Ocultar proyección mensual' : '▼ Ver desglose mes a mes'}
            </button>
            {showSchedule && (
              <div className="mt-3 overflow-x-auto rounded-xl border border-slate-700 max-h-56">
                <table className="w-full text-xs">
                  <thead className="bg-slate-900 text-slate-400 sticky top-0">
                    <tr>
                      <th className="p-2 text-left">Mes</th>
                      <th className="p-2 text-right">Aporte</th>
                      <th className="p-2 text-right">Interés Ganado</th>
                      <th className="p-2 text-right">Saldo Acumulado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {schedule.map(s => (
                      <tr key={s.month}>
                        <td className="p-2 font-bold">{s.month}</td>
                        <td className="p-2 text-right">${fmt(s.deposit)}</td>
                        <td className="p-2 text-right text-emerald-400">+${fmt(s.interest)}</td>
                        <td className="p-2 text-right font-medium text-white">${fmt(s.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 9. RESTAURADA: CALCULADORA DEL COSTO DE ESPERAR (FASE 1 L6)
// =========================================================================
const CostOfWaitingCalculator: React.FC = () => {
  const [monthly, setMonthly]         = useState<number>(2000);
  const [rate, setRate]               = useState<number>(10);
  const [totalYears, setTotalYears]   = useState<number>(30);
  const [delayYears, setDelayYears]   = useState<number>(5);

  const r = (rate / 100) / 12;
  const nNow = totalYears * 12;
  const nDelayed = Math.max(1, (totalYears - delayYears) * 12);

  const fvNow = monthly * ((Math.pow(1 + r, nNow) - 1) / r);
  const fvDelayed = monthly * ((Math.pow(1 + r, nDelayed) - 1) / r);
  const difference = fvNow - fvDelayed;
  const missedContributions = delayYears * 12 * monthly;

  const chartData = [];
  for (let y = 0; y <= totalYears; y++) {
    const monthsNow = y * 12;
    const monthsDelayed = Math.max(0, (y - delayYears) * 12);
    const valNow = monthsNow > 0 ? monthly * ((Math.pow(1 + r, monthsNow) - 1) / r) : 0;
    const valDelayed = monthsDelayed > 0 ? monthly * ((Math.pow(1 + r, monthsDelayed) - 1) / r) : 0;
    chartData.push({
      year: `Año ${y}`,
      empezarHoy: Math.round(valNow),
      esperarN: Math.round(valDelayed)
    });
  }

  return (
    <div id="tool-costo-esperar" className="bg-slate-800 rounded-2xl shadow-xl border border-rose-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-rose-400">
        <TrendingDown size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora del Costo de Esperar</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta fundamental de la Fase 1 (Lección 6). Descubre en pesos contantes y sonantes el colosal impacto de posponer el inicio de tus inversiones.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div>
            <label className={labelCls}>Aportación Mensual ($ MXN)</label>
            <input type="number" value={monthly} onChange={e => setMonthly(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Rendimiento Anual Estimado (%)</label>
            <input type="number" step="0.5" value={rate} onChange={e => setRate(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Horizonte Total de Inversión ({totalYears} años)</label>
            <input type="range" min="10" max="45" step="1" value={totalYears} onChange={e => setTotalYears(Number(e.target.value))} className="w-full accent-rose-400 cursor-pointer" />
          </div>
          <div>
            <label className={labelCls}>Años de Retraso a Comparar ({delayYears} años)</label>
            <input type="range" min="1" max={Math.min(15, totalYears - 5)} step="1" value={delayYears} onChange={e => setDelayYears(Number(e.target.value))} className="w-full accent-rose-400 cursor-pointer" />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-950/30 border border-emerald-500/40 p-5 rounded-2xl text-center">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Empezando Hoy ({totalYears} años)</span>
              <p className="text-3xl font-extrabold text-white">${fmt(fvNow)}</p>
              <p className="text-slate-400 text-xs mt-1">Aporte acumulado: ${fmt(monthly * totalYears * 12)}</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Esperando {delayYears} años ({totalYears - delayYears} años)</span>
              <p className="text-3xl font-extrabold text-slate-300">${fmt(fvDelayed)}</p>
              <p className="text-slate-500 text-xs mt-1">Aporte acumulado: ${fmt(monthly * (totalYears - delayYears) * 12)}</p>
            </div>
          </div>

          <div className="bg-rose-950/40 border border-rose-500/50 p-6 rounded-2xl">
            <span className="text-xs font-bold text-rose-300 uppercase tracking-widest block mb-1">El Costo Real de Esperar {delayYears} Años</span>
            <p className="text-4xl md:text-5xl font-black text-rose-400 mb-2">-${fmt(difference)}</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Durante esos {delayYears} años solo "ahorraste" no poner <strong>${fmt(missedContributions)} MXN</strong>, pero el costo de oportunidad final por perder el interés compuesto supera los <strong>${fmt(difference)} MXN</strong>.
            </p>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                <XAxis dataKey="year" fontSize={10} stroke="#64748b" interval={Math.floor(totalYears/6)} />
                <YAxis fontSize={10} stroke="#64748b" tickFormatter={v => `$${(v/1000000).toFixed(1)}M`} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }}
                  formatter={(v: number, name: string) => [`$${fmt(v)}`, name === 'empezarHoy' ? 'Empezar Hoy' : `Esperar ${delayYears} años`]} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <Area type="monotone" dataKey="empezarHoy" stroke="#10b981" fill="#10b981" fillOpacity={0.2} name="empezarHoy" />
                <Area type="monotone" dataKey="esperarN" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.2} name="esperarN" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-900/70 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2.5">
        <AlertCircle size={15} className="text-rose-400 shrink-0" />
        <span><strong>Advertencia visible:</strong> Rendimiento hipotético, no garantizado. El punto no es el número exacto, es el orden de magnitud: esperar cuesta mucho más que lo que se 'ahorra' no aportando.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 10. NUEVA: CALCULADORA DE HIPOTECA: COMPRAR VS RENTAR (FASE 6 L4)
// =========================================================================
const MortgageBuyVsRentCalculator: React.FC = () => {
  const [homePrice, setHomePrice]               = useState<number>(2500000);
  const [downPaymentPct, setDownPaymentPct]     = useState<number>(20);
  const [mortgageRate, setMortgageRate]         = useState<number>(10.5);
  const [termYears, setTermYears]               = useState<number>(20);
  const [rentMonthly, setRentMonthly]           = useState<number>(11000);
  const [appreciationRate, setAppreciationRate] = useState<number>(5.0);
  const [initialCostsPct, setInitialCostsPct]   = useState<number>(5.0);
  const [maintenancePct, setMaintenancePct]     = useState<number>(1.5);
  const [altInvestRate, setAltInvestRate]       = useState<number>(9.0);

  // Crédito
  const downPayment = homePrice * (downPaymentPct / 100);
  const closingCosts = homePrice * (initialCostsPct / 100);
  const initialCashNeeded = downPayment + closingCosts;
  const loanAmount = homePrice - downPayment;
  const monthlyRate = (mortgageRate / 100) / 12;
  const nMonths = termYears * 12;

  const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, nMonths)) / (Math.pow(1 + monthlyRate, nMonths) - 1);
  const monthlyMaintenance = (homePrice * (maintenancePct / 100)) / 12;
  const totalMonthlyBuy = monthlyMortgage + monthlyMaintenance;

  // Análisis a 10 años (120 meses)
  const evalMonths = 120;
  let remainingLoan = loanAmount;
  for (let m = 1; m <= evalMonths; m++) {
    const interestM = remainingLoan * monthlyRate;
    const principalM = monthlyMortgage - interestM;
    remainingLoan = Math.max(0, remainingLoan - principalM);
  }

  const futureHomeValue10 = homePrice * Math.pow(1 + appreciationRate / 100, 10);
  const buyNetWorth10 = futureHomeValue10 - remainingLoan;

  // Escenario Rentar: invertir el desembolso inicial + la diferencia de flujo
  const rAlt = (altInvestRate / 100) / 12;
  let rentPortfolio = initialCashNeeded;
  for (let m = 1; m <= evalMonths; m++) {
    rentPortfolio = rentPortfolio * (1 + rAlt);
    // Si comprar cuesta más al mes que rentar, el inquilino invierte la diferencia
    const cashFlowDiff = totalMonthlyBuy - rentMonthly;
    if (cashFlowDiff > 0) {
      rentPortfolio += cashFlowDiff;
    }
  }

  const netDifference = buyNetWorth10 - rentPortfolio;

  return (
    <div id="tool-hipoteca" className="bg-slate-800 rounded-2xl shadow-xl border border-indigo-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-indigo-400">
        <Home size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora Hipotecaria: Comprar vs. Rentar e Invertir</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta de la Fase 6 (Lección 4: Infonavit y Crédito Bancario). Modela la decisión patrimonial más importante comparando el costo de comprar vs. rentar e invertir el excedente en bolsa a 10 años.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Valor Inmueble ($ MXN)</label>
              <input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Enganche ({downPaymentPct}%)</label>
              <input type="number" value={downPaymentPct} onChange={e => setDownPaymentPct(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Tasa Hipotecaria (%)</label>
              <input type="number" step="0.25" value={mortgageRate} onChange={e => setMortgageRate(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Plazo (Años)</label>
              <input type="number" value={termYears} onChange={e => setTermYears(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Renta Equivalente ($)</label>
              <input type="number" value={rentMonthly} onChange={e => setRentMonthly(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Plusvalía Anual (%)</label>
              <input type="number" step="0.5" value={appreciationRate} onChange={e => setAppreciationRate(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Escrituración / Gastos (%)</label>
              <input type="number" step="0.5" value={initialCostsPct} onChange={e => setInitialCostsPct(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Rendimiento Alterno (%)</label>
              <input type="number" step="0.5" value={altInvestRate} onChange={e => setAltInvestRate(Number(e.target.value))} className={inputCls} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Mensualidad Crédito</span>
              <p className="text-xl font-bold text-white">${fmt(monthlyMortgage)}</p>
              <span className="text-[10px] text-slate-500">+${fmt(monthlyMaintenance)} mantto/predial</span>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Desembolso Inicial</span>
              <p className="text-xl font-bold text-indigo-300">${fmt(initialCashNeeded)}</p>
              <span className="text-[10px] text-slate-500">Enganche + gastos notariales</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-indigo-500/30 text-center">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">Patrimonio Comprando (Año 10)</span>
              <p className="text-3xl font-extrabold text-white">${fmt(buyNetWorth10)}</p>
              <p className="text-[11px] text-slate-400 mt-1">Valor inmueble ${fmt(futureHomeValue10)} − Saldo deuda ${fmt(remainingLoan)}</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/30 text-center">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">Patrimonio Rentando (Año 10)</span>
              <p className="text-3xl font-extrabold text-white">${fmt(rentPortfolio)}</p>
              <p className="text-[11px] text-slate-400 mt-1">Inversión inicial + diferencia mensual capitalizada al {altInvestRate}%</p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border ${
            netDifference >= 0 ? 'bg-indigo-950/40 border-indigo-500/40' : 'bg-emerald-950/40 border-emerald-500/40'
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-1 text-slate-300">Veredicto Financiero a 10 Años:</h4>
            <p className="text-base text-white font-medium">
              {netDifference >= 0 
                ? `🏆 Comprar genera un patrimonio neto $${fmt(netDifference)} MXN superior gracias a la plusvalía esperada del ${appreciationRate}%.`
                : `🏆 Rentar e Invertir en Bolsa genera un patrimonio neto $${fmt(Math.abs(netDifference))} MXN superior evitando intereses hipotecarios.`}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-900/70 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2.5">
        <Info size={15} className="text-indigo-400 shrink-0" />
        <span>Estimación educativa. En México los gastos notariales oscilan entre 4% y 7% según el estado. Revisa las condiciones de crédito Infonavit o bancario antes de contratar.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 11. NUEVA: CALCULADORA DE FONDO DE EMERGENCIA (FASE 6 L2)
// =========================================================================
const EmergencyFundCalculator: React.FC = () => {
  const [fixedExp, setFixedExp]           = useState<number>(18000);
  const [variableExp, setVariableExp]     = useState<number>(6000);
  const [dependents, setDependents]       = useState<number>(1);
  const [jobStability, setJobStability]   = useState<'empleado'|'freelance'|'empresario'>('empleado');
  const [currentSaved, setCurrentSaved]   = useState<number>(25000);
  const cetesYield = 9.00; // Banxico Noviembre 2026

  // Meses sugeridos
  let recommendedMonths = 3;
  if (jobStability === 'empleado') {
    recommendedMonths = dependents > 0 ? 5 : 3;
  } else if (jobStability === 'freelance') {
    recommendedMonths = dependents > 0 ? 8 : 6;
  } else {
    recommendedMonths = dependents > 0 ? 9 : 6;
  }

  const monthlyBase = fixedExp + variableExp;
  const targetFund = monthlyBase * recommendedMonths;
  const missingAmount = Math.max(0, targetFund - currentSaved);
  const progressPct = Math.min(100, (currentSaved / targetFund) * 100);
  const monthlyYieldIfFull = (targetFund * (cetesYield / 100)) / 12;

  return (
    <div id="tool-emergencia" className="bg-slate-800 rounded-2xl shadow-xl border border-emerald-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-emerald-400">
        <ShieldCheck size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de Fondo de Emergencia</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta esencial de la Fase 6 (Lección 2). Determina tu colchón de liquidez antes de arriesgar capital en bolsa para evitar malvender posiciones en imprevistos.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label className={labelCls}>Gastos Fijos Mensuales ($ MXN)</label>
            <input type="number" value={fixedExp} onChange={e => setFixedExp(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500">Renta/hipoteca, servicios, despensa, transporte indispensable</span>
          </div>
          <div>
            <label className={labelCls}>Gastos Variables Esenciales ($ MXN)</label>
            <input type="number" value={variableExp} onChange={e => setVariableExp(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500">Colegiaturas, seguros, medicamentos recurrentes</span>
          </div>
          <div>
            <label className={labelCls}>Número de Dependientes Económicos</label>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map(d => (
                <button key={d} onClick={() => setDependents(d)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
                    dependents === d ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                  {d === 3 ? '3 o más' : d}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className={labelCls}>Tipo de Ingreso / Estabilidad</label>
            <div className="flex gap-2">
              {[
                { id: 'empleado', label: 'Nómina / Empleado' },
                { id: 'freelance', label: 'Freelance / Honorarios' },
                { id: 'empresario', label: 'Negocio / Socio' },
              ].map(t => (
                <button key={t.id} onClick={() => setJobStability(t.id as any)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
                    jobStability === t.id ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className={labelCls}>Ahorro Actual Acumulado ($ MXN)</label>
            <input type="number" value={currentSaved} onChange={e => setCurrentSaved(Number(e.target.value))} className={inputCls} />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900 p-6 rounded-2xl border border-emerald-500/40 text-center">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">Fondo Recomendado ({recommendedMonths} Meses)</span>
              <p className="text-4xl font-black text-white">${fmt(targetFund)}</p>
              <p className="text-xs text-slate-400 mt-1">Costo mensual de vida: ${fmt(monthlyBase)} MXN</p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700 text-center flex flex-col justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Faltante para la Meta</span>
              <p className="text-3xl font-extrabold text-amber-400">${fmt(missingAmount)}</p>
              <p className="text-xs text-slate-400 mt-1">Avance actual: {progressPct.toFixed(1)}%</p>
            </div>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-3">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Nivel de Protección Financiera</span>
              <span className="font-bold text-emerald-400">{progressPct.toFixed(0)}% cubierto</span>
            </div>
            <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Guardado en CETES 28D (9.00%):</span>
              <strong className="text-white">+${fmt(monthlyYieldIfFull)} MXN al mes de intereses líquidos</strong>
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-emerald-400 block">¿Dónde resguardar este dinero?</span>
            <p>• Instrumentos con liquidez diaria o 28 días: <strong>CETES Directo (BONDDIA)</strong> o Sofipos reguladas con seguro <strong>PROSOFIPO</strong>.</p>
            <p>• Nunca en pagarés bancarios al 2% ni arriesgado en acciones volátiles de bolsa.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 12. NUEVA: CALCULADORA DE INGRESO POR DIVIDENDOS Y FIBRAS (FASE 7)
// =========================================================================
const DividendIncomeCalculator: React.FC = () => {
  const [initialCapital, setInitialCapital]       = useState<number>(200000);
  const [monthlyAdd, setMonthlyAdd]               = useState<number>(3000);
  const [dividendYield, setDividendYield]         = useState<number>(7.5);
  const [dividendGrowth, setDividendGrowth]       = useState<number>(4.0);
  const [years, setYears]                         = useState<number>(10);
  const [reinvest, setReinvest]                   = useState<boolean>(true);
  const [targetMonthlyDiv, setTargetMonthlyDiv]   = useState<number>(10000);

  // Capital necesario para meta
  const capitalNeededForTarget = (targetMonthlyDiv * 12) / (dividendYield / 100);

  // Simulación año a año
  const projection = [];
  let currentCap = initialCapital;
  let currentYield = dividendYield / 100;

  for (let y = 1; y <= years; y++) {
    const annualContrib = monthlyAdd * 12;
    const annualDiv = currentCap * currentYield;
    if (reinvest) {
      currentCap = currentCap + annualContrib + annualDiv;
    } else {
      currentCap = currentCap + annualContrib;
    }
    currentYield = currentYield * (1 + dividendGrowth / 100);
    projection.push({
      year: `Año ${y}`,
      capital: Math.round(currentCap),
      annualDividend: Math.round(annualDiv),
      monthlyDividend: Math.round(annualDiv / 12),
    });
  }

  const finalYear = projection[projection.length - 1] || { capital: 0, annualDividend: 0, monthlyDividend: 0 };

  return (
    <div id="tool-dividendos" className="bg-slate-800 rounded-2xl shadow-xl border border-amber-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-amber-400">
        <Coins size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de Ingreso por Dividendos y FIBRAS</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta reina de la Fase 7 (Ingreso Pasivo y Rentas Inmobiliarias). Proyecta tu flujo mensual de dividendos con reinversión automática (DRIP) y crecimiento anual de distribuciones.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Capital Inicial ($ MXN)</label>
              <input type="number" value={initialCapital} onChange={e => setInitialCapital(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Aporte Mensual ($ MXN)</label>
              <input type="number" value={monthlyAdd} onChange={e => setMonthlyAdd(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Dividend Yield Inicial (%)</label>
              <input type="number" step="0.25" value={dividendYield} onChange={e => setDividendYield(Number(e.target.value))} className={inputCls} />
              <span className="text-[10px] text-slate-500">FMTY14: ~8.5%, FUNO: ~9%</span>
            </div>
            <div>
              <label className={labelCls}>Crecimiento Dividendo (%)</label>
              <input type="number" step="0.5" value={dividendGrowth} onChange={e => setDividendGrowth(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Años de Proyección ({years} años)</label>
            <input type="range" min="1" max="30" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-amber-400 cursor-pointer" />
          </div>

          <button onClick={() => setReinvest(v => !v)}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
              reinvest ? 'bg-amber-950/30 border-amber-500/50 text-amber-300 font-bold' : 'bg-slate-900 border-slate-700 text-slate-400'
            }`}>
            <span>Reinvertir Dividendos Automáticamente (DRIP)</span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800">{reinvest ? 'ACTIVADO' : 'DESACTIVADO'}</span>
          </button>

          <div>
            <label className={labelCls}>Meta de Ingreso Mensual Deseado ($ MXN)</label>
            <input type="number" value={targetMonthlyDiv} onChange={e => setTargetMonthlyDiv(Number(e.target.value))} className={inputCls} />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-950/60 to-slate-900 p-5 rounded-2xl border border-amber-500/40 text-center">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">Ingreso Mensual en Año {years}</span>
              <p className="text-3xl font-extrabold text-white">${fmt(finalYear.monthlyDividend)}</p>
              <p className="text-xs text-amber-400 mt-1">${fmt(finalYear.annualDividend)} MXN al año</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 text-center flex flex-col justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Capital Requerido para Meta (${fmtInt(targetMonthlyDiv)}/mes)</span>
              <p className="text-2xl md:text-3xl font-black text-slate-200">${fmtInt(capitalNeededForTarget)}</p>
              <p className="text-[11px] text-slate-500 mt-1">Con rendimiento promedio del {dividendYield}%</p>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projection} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="year" fontSize={10} stroke="#64748b" />
                <YAxis fontSize={10} stroke="#64748b" tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }}
                  formatter={(v: number, name: string) => [`$${fmt(v)}`, name === 'monthlyDividend' ? 'Dividendo Mensual' : 'Capital Portafolio']} />
                <Bar dataKey="monthlyDividend" fill="#f59e0b" name="monthlyDividend" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-900/70 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2.5">
        <Info size={15} className="text-amber-400 shrink-0" />
        <span>Las distribuciones de FIBRAS como Reembolso de Capital están exentas de ISR (Art. 187 LISR), aumentando el flujo neto libre frente a rentas residenciales.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 13. NUEVA: CALCULADORA DE RETIRO CON AFORE Y PPR (FASE 4 L7)
// =========================================================================
const RetirementAforePprCalculator: React.FC = () => {
  const [age, setAge]                         = useState<number>(30);
  const [retireAge, setRetireAge]             = useState<number>(65);
  const [salary, setSalary]                   = useState<number>(30000);
  const [aforeBal, setAforeBal]               = useState<number>(120000);
  const [pprMonthly, setPprMonthly]           = useState<number>(2000);
  const [realYield, setRealYield]             = useState<number>(6.5);

  const yearsLeft = Math.max(1, retireAge - age);
  const monthsLeft = yearsLeft * 12;
  const r = (realYield / 100) / 12;

  // Aportación obligatoria Afore promedio patronal/obrera (reforma gradual ~12% SBC)
  const aforeMonthlyContribution = salary * 0.12;

  // Crecimiento Afore
  const futureAforeInitial = aforeBal * Math.pow(1 + r, monthsLeft);
  const futureAforeContributions = aforeMonthlyContribution * ((Math.pow(1 + r, monthsLeft) - 1) / r);
  const totalAfore = futureAforeInitial + futureAforeContributions;

  // Crecimiento PPR
  const totalPpr = pprMonthly * ((Math.pow(1 + r, monthsLeft) - 1) / r);

  const totalPot = totalAfore + totalPpr;
  // Retiro durante 20 años (240 meses) con rendimiento remanente conservador
  const monthlyPension = totalPot / 240 + (totalPot * 0.002);
  const replacementRate = salary > 0 ? (monthlyPension / salary) * 100 : 0;

  // Beneficio fiscal PPR (Art. 151 LISR: deducción hasta 10% del ingreso anual)
  const annualPpr = pprMonthly * 12;
  const deductibleMax = salary * 12 * 0.10;
  const actualDeduction = Math.min(annualPpr, deductibleMax);
  const taxRefundEstimate = actualDeduction * 0.30; // Supuesto tasa marginal 30%

  return (
    <div id="tool-afore-ppr" className="bg-slate-800 rounded-2xl shadow-xl border border-purple-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-purple-400">
        <Briefcase size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de Retiro con Afore y PPR</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta de la Fase 4 (Lección 7: Siefores y PPRs). Descubre de cuánto será tu pensión mensual real y cuánto necesitas aportar a un Plan Personal de Retiro para alcanzar la tasa de reemplazo recomendada del 70%.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Edad Actual</label>
              <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Edad de Retiro</label>
              <input type="number" value={retireAge} onChange={e => setRetireAge(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Salario Mensual Bruto ($ MXN)</label>
            <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className={inputCls} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Saldo Actual Afore ($)</label>
              <input type="number" value={aforeBal} onChange={e => setAforeBal(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Aporte Voluntario PPR ($/mes)</label>
              <input type="number" value={pprMonthly} onChange={e => setPprMonthly(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Rendimiento Real Anual (%)</label>
            <input type="number" step="0.5" value={realYield} onChange={e => setRealYield(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500 block mt-1">Rendimiento por encima de inflación (Siefores generacionales)</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-950/60 to-slate-900 p-5 rounded-2xl border border-purple-500/40 text-center">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">Pensión Mensual Proyectada</span>
              <p className="text-3xl font-black text-white">${fmt(monthlyPension)}</p>
              <p className="text-xs text-slate-400 mt-1">Bolsa total al retiro: ${fmtInt(totalPot)} MXN</p>
            </div>

            <div className={`p-5 rounded-2xl border text-center flex flex-col justify-center ${
              replacementRate >= 70 ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-amber-950/40 border-amber-500/40'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-300">Tasa de Reemplazo</span>
              <p className={`text-4xl font-black ${replacementRate >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {replacementRate.toFixed(1)}%
              </p>
              <span className="text-[11px] text-slate-300 mt-1">
                {replacementRate >= 70 ? '✅ Cumple estándar OCDE (70%)' : '⚠️ Insuficiente: Aumenta tu PPR'}
              </span>
            </div>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} /> Beneficio Fiscal Art. 151 LISR (Devolución SAT)
            </h4>
            <p className="text-sm text-slate-300">
              Aportando ${fmt(annualPpr)}/año al PPR, puedes recibir un saldo a favor estimado de <strong className="text-emerald-400">${fmt(taxRefundEstimate)} MXN</strong> en tu Declaración Anual de impuestos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 14. NUEVA: CALCULADORA DE ISR SOBRE INVERSIONES (ART. 129 LISR)
// =========================================================================
const InvestmentTaxCalculator: React.FC = () => {
  const [assetType, setAssetType]   = useState<'bmv'|'fibras_reembolso'|'fibras_resultado'|'cetes'|'cripto'>('bmv');
  const [gain, setGain]             = useState<number>(50000);
  const [taxBracket, setTaxBracket] = useState<number>(30); // Tasa marginal para acumulables

  let taxRate = 10;
  let isr = 0;
  let explanation = '';
  let legalBasis = '';

  if (assetType === 'bmv') {
    taxRate = 10;
    isr = gain * 0.10;
    legalBasis = 'Art. 129 de la Ley del ISR';
    explanation = 'Tasa definitiva preferencial del 10% sobre la ganancia neta en acciones cotizadas en BMV o SIC. Las pérdidas fiscales se pueden amortizar durante 10 ejercicios posteriores.';
  } else if (assetType === 'fibras_reembolso') {
    taxRate = 0;
    isr = 0;
    legalBasis = 'Art. 187 y 188 de la Ley del ISR';
    explanation = 'Las distribuciones de FIBRAS etiquetadas como Reembolso de Capital están 100% EXENTAS de ISR. Además, la venta de CBFIs en bolsa también está exenta para personas físicas.';
  } else if (assetType === 'fibras_resultado') {
    taxRate = 30;
    isr = gain * 0.30;
    legalBasis = 'Art. 187 de la Ley del ISR';
    explanation = 'El broker realiza una retención provisional del 30% que se acredita contra el ISR en la Declaración Anual como ingreso acumulable.';
  } else if (assetType === 'cetes') {
    // Retención provisional 2026 sobre capital + acumulación de interés real
    taxRate = 5.0;
    isr = gain * (taxBracket / 100) * 0.5; // Aproximación sobre interés real
    legalBasis = 'Art. 54 y 135 de la Ley del ISR';
    explanation = 'En deuda soberana pagas impuestos solo sobre la tasa real (rendimiento menos inflación). La retención anual provisional se ajusta en abril.';
  } else {
    taxRate = taxBracket;
    isr = gain * (taxBracket / 100);
    legalBasis = 'Art. 126 LISR (Enajenación de Bienes)';
    explanation = 'Los criptoactivos no cuentan con régimen preferencial bursátil en México: tributan a tasa marginal ordinaria (hasta 35%) como enajenación de bienes.';
  }

  const netGain = Math.max(0, gain - isr);

  return (
    <div id="tool-isr" className="bg-slate-800 rounded-2xl shadow-xl border border-teal-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-teal-400">
        <FileText size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora de ISR sobre Inversiones (Fiscalidad Bursátil)</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta de la Fase 4 (Lección 6: Fiscalidad y LISR Art. 129). Conoce con certeza el impacto tributario ante el SAT para calcular tu verdadero rendimiento neto de impuestos.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label className={labelCls}>Tipo de Activo Financiero</label>
            <div className="space-y-2">
              {[
                { id: 'bmv', label: 'Acciones BMV / SIC (Art. 129 LISR)' },
                { id: 'fibras_reembolso', label: 'FIBRAS: Reembolso de Capital (Exento)' },
                { id: 'fibras_resultado', label: 'FIBRAS: Resultado Fiscal (Retención 30%)' },
                { id: 'cetes', label: 'CETES / Renta Fija Soberana' },
                { id: 'cripto', label: 'Criptoactivos (Tasa Ordinaria SAT)' },
              ].map(opt => (
                <button key={opt.id} onClick={() => setAssetType(opt.id as any)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                    assetType === opt.id ? 'bg-teal-950/60 border-teal-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}>
                  <span>{opt.label}</span>
                  {assetType === opt.id && <CheckCircle2 size={15} className="text-teal-400" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelCls}>Ganancia Bruta o Rendimiento Obtenido ($ MXN)</label>
            <input type="number" value={gain} onChange={e => setGain(Number(e.target.value))} className={inputCls} />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 text-center">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">ISR Estimado a Pagar</span>
              <p className="text-3xl font-black text-rose-400">${fmt(isr)}</p>
              <p className="text-xs text-slate-500 mt-1">Tasa efectiva estimada: {((isr/gain)*100).toFixed(1)}%</p>
            </div>

            <div className="bg-gradient-to-br from-teal-950/60 to-slate-900 p-5 rounded-2xl border border-teal-500/40 text-center">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-1">Ganancia Neta en tu Bolsillo</span>
              <p className="text-3xl font-black text-white">${fmt(netGain)}</p>
              <p className="text-xs text-emerald-400 mt-1">Rendimiento libre de polvo y paja</p>
            </div>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Fundamento Jurídico:</span>
              <span className="text-xs bg-slate-800 px-2.5 py-0.5 rounded text-slate-300 font-mono">{legalBasis}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{explanation}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-900/70 rounded-xl border border-slate-700 text-slate-400 text-xs italic flex items-center gap-2.5">
        <Info size={15} className="text-teal-400 shrink-0" />
        <span>Herramienta educativa. La determinación exacta del ISR depende de tus ingresos anuales y deducciones personales. Consulta a tu asesor fiscal.</span>
      </div>
    </div>
  );
};

// =========================================================================
// 15. NUEVA: SIMULADOR DE REBALANCEO DE PORTAFOLIO (FASE 4 L4 & L9)
// =========================================================================
const PortfolioRebalanceSimulator: React.FC = () => {
  const [positions, setPositions] = useState([
    { name: 'Acciones Globales (VOO/VT)', target: 50, current: 120000, color: '#3b82f6' },
    { name: 'Renta Fija (CETES/Bonos)', target: 20, current: 30000, color: '#10b981' },
    { name: 'FIBRAS Inmobiliarias (FMTY/FUNO)', target: 20, current: 35000, color: '#f59e0b' },
    { name: 'Oro / Coberturas / Efectivo', target: 10, current: 15000, color: '#8b5cf6' },
  ]);
  const [newCash, setNewCash] = useState<number>(20000);
  const brokerFeePct = 0.25;

  const currentTotal = positions.reduce((acc, p) => acc + p.current, 0);
  const newTotal = currentTotal + newCash;

  const analyzed = positions.map(p => {
    const currentPct = currentTotal > 0 ? (p.current / currentTotal) * 100 : 0;
    const targetValWithoutCash = currentTotal * (p.target / 100);
    const targetValWithCash = newTotal * (p.target / 100);
    const diffClassic = targetValWithoutCash - p.current; // positivo = comprar, negativo = vender
    
    // Smart Rebalance: cuánto asignar de newCash sin vender nada
    const idealCashAllocation = Math.max(0, targetValWithCash - p.current);
    
    return {
      ...p,
      currentPct,
      targetValWithCash,
      diffClassic,
      idealCashAllocation,
      drift: currentPct - p.target
    };
  });

  const totalIdealCash = analyzed.reduce((acc, p) => acc + p.idealCashAllocation, 0);
  const smartAllocations = analyzed.map(p => {
    const allocated = totalIdealCash > 0 ? (p.idealCashAllocation / totalIdealCash) * newCash : (newCash * (p.target / 100));
    return { ...p, smartDeposit: allocated };
  });

  const totalRebalanceVolume = analyzed.reduce((acc, p) => acc + Math.abs(p.diffClassic), 0) / 2;
  const estimatedCommissions = totalRebalanceVolume * (brokerFeePct / 100) * 1.16;

  return (
    <div id="tool-rebalanceo" className="bg-slate-800 rounded-2xl shadow-xl border border-purple-500/30 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2 text-purple-400">
        <RefreshCw size={28} />
        <h2 className="text-2xl font-bold text-white">Simulador de Rebalanceo de Portafolio</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Herramienta de la Fase 4 (Lección 4: Rebalanceo y Control de Varianza). Audita la desviación de tu cartera y ejecuta un "Smart Rebalance" con dinero nuevo para evitar el pago de comisiones y de ISR por ventas.</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
            <span>Activo</span>
            <span>Objetivo % / Valor Actual ($)</span>
          </div>
          {positions.map((pos, idx) => (
            <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 space-y-2">
              <span className="text-xs font-bold text-white block">{pos.name}</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block">Objetivo %</label>
                  <input type="number" value={pos.target} onChange={e => {
                    const next = [...positions];
                    next[idx].target = Number(e.target.value);
                    setPositions(next);
                  }} className={inputCls} />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block">Valor Actual ($ MXN)</label>
                  <input type="number" value={pos.current} onChange={e => {
                    const next = [...positions];
                    next[idx].current = Number(e.target.value);
                    setPositions(next);
                  }} className={inputCls} />
                </div>
              </div>
            </div>
          ))}

          <div>
            <label className={labelCls}>Inyección de Capital Nuevo ($ MXN)</label>
            <input type="number" value={newCash} onChange={e => setNewCash(Number(e.target.value))} className={inputCls} />
            <span className="text-[10px] text-slate-500">Para rebalancear comprando los rezagados sin vender los ganadores</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Valor Portafolio Actual</span>
              <p className="text-2xl font-bold text-white">${fmt(currentTotal)}</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <span className="text-[10px] text-purple-400 uppercase tracking-widest block mb-1">Valor con Inyección</span>
              <p className="text-2xl font-bold text-purple-300">${fmt(newTotal)}</p>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-3 bg-slate-950 border-b border-slate-800 flex justify-between items-center text-xs">
              <span className="font-bold text-white">Estrategia "Smart Rebalance" con los ${fmt(newCash)} Nuevos</span>
              <span className="text-emerald-400 font-semibold">Cero Ventas · Cero ISR</span>
            </div>
            <div className="p-4 space-y-3">
              {smartAllocations.map((a, i) => (
                <div key={i} className="flex items-center justify-between text-xs pb-2 border-b border-slate-800 last:border-0 last:pb-0">
                  <div>
                    <span className="font-medium text-slate-200 block">{a.name}</span>
                    <span className="text-[10px] text-slate-500">
                      Actual: {a.currentPct.toFixed(1)}% | Meta: {a.target}% ({a.drift > 0 ? `+${a.drift.toFixed(1)}% sobrepeso` : `${a.drift.toFixed(1)}% infraponderado`})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 block">+${fmt(a.smartDeposit)}</span>
                    <span className="text-[10px] text-slate-400">asignar de nuevo capital</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-xs text-slate-400 space-y-1">
            <div className="flex justify-between items-center">
              <span>Si hicieras un rebalanceo tradicional vendiendo y comprando:</span>
              <strong className="text-rose-400">${fmt(estimatedCommissions)} MXN de comisiones</strong>
            </div>
            <p className="text-[11px] text-slate-500">El rebalanceo con aportaciones periódicas protege tu rentabilidad y evita eventos fiscales gravables.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// PÁGINA PRINCIPAL TOOLS (15 HERRAMIENTAS COMPLETAS)
// =========================================================================
const Tools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [selectedToolId, setSelectedToolId] = useState<string>('all');

  const toolsCatalog = [
    // Deuda y Presupuesto (3)
    { id: 'tool-mata-deudas', name: 'Calculadora "Mata Deudas"', category: 'deuda', icon: Flame, color: 'text-rose-400', badge: 'Fase 6' },
    { id: 'tool-trampa-minimo', name: 'La Trampa del Mínimo vs. Invertir', category: 'deuda', icon: Coins, color: 'text-amber-400', badge: 'Fase 6' },
    { id: 'tool-emergencia', name: 'Fondo de Emergencia Institucional', category: 'deuda', icon: ShieldCheck, color: 'text-emerald-400', badge: 'Fase 6' },

    // Inversión y Retiro (4)
    { id: 'tool-interes-compuesto', name: 'Interés Compuesto Avanzado', category: 'inversion', icon: TrendingUp, color: 'text-emerald-400', badge: 'Fase 1' },
    { id: 'tool-costo-esperar', name: 'Calculadora del Costo de Esperar', category: 'inversion', icon: TrendingDown, color: 'text-rose-400', badge: 'Fase 1 L6' },
    { id: 'tool-regla-4', name: 'Simulador Regla del 4% (FIRE)', category: 'inversion', icon: Target, color: 'text-indigo-400', badge: 'Fase 4' },
    { id: 'tool-afore-ppr', name: 'Retiro con Afore y PPR (Pensión)', category: 'inversion', icon: Briefcase, color: 'text-purple-400', badge: 'Fase 4 L7' },

    // Valuación y Bolsa (4)
    { id: 'tool-dcf', name: 'Valuación DCF (Flujo Descontado)', category: 'valuacion', icon: BarChart3, color: 'text-indigo-400', badge: 'Fase 5 L2' },
    { id: 'tool-graham', name: 'Valor Intrínseco Método Graham', category: 'valuacion', icon: Scale, color: 'text-blue-400', badge: 'Fase 5' },
    { id: 'tool-dividendos', name: 'Ingreso por Dividendos y FIBRAS', category: 'valuacion', icon: Coins, color: 'text-amber-400', badge: 'Fase 7' },
    { id: 'tool-rebalanceo', name: 'Simulador de Rebalanceo de Cartera', category: 'valuacion', icon: RefreshCw, color: 'text-purple-400', badge: 'Fase 4 L4' },

    // Planeación e Impuestos (4)
    { id: 'tool-hipoteca', name: 'Hipoteca: Comprar vs. Rentar', category: 'planeacion', icon: Home, color: 'text-indigo-400', badge: 'Fase 6 L4' },
    { id: 'tool-tasa-real', name: 'Inflación y Tasa Real (Banxico)', category: 'planeacion', icon: Landmark, color: 'text-teal-400', badge: 'Fase 2' },
    { id: 'tool-metas', name: 'Calculadora de Ahorro y Metas', category: 'planeacion', icon: Target, color: 'text-cyan-400', badge: 'Fase 6' },
    { id: 'tool-isr', name: 'Calculadora de ISR Bursátil (Art. 129)', category: 'planeacion', icon: FileText, color: 'text-teal-400', badge: 'Fase 4 L6' },
  ];

  const categories = [
    { id: 'todas', label: 'Todas las Calculadoras (15)' },
    { id: 'deuda', label: 'Deuda y Presupuesto (3)' },
    { id: 'inversion', label: 'Inversión y Retiro (4)' },
    { id: 'valuacion', label: 'Valuación y Bolsa (4)' },
    { id: 'planeacion', label: 'Planeación e Impuestos (4)' },
  ];

  const filteredTools = toolsCatalog.filter(t => {
    if (activeCategory === 'todas') return true;
    return t.category === activeCategory;
  });

  const scrollToTool = (id: string) => {
    setSelectedToolId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent relative overflow-hidden pb-24 pt-8">
      <SEO 
        title="15 Calculadoras Financieras y Simuladores Bursátiles | FA Academy"
        description="Laboratorio financiero completo de FA Academy: DCF, valor intrínseco Graham, inflación y tasa real Banxico, regla del 4% FIRE, hipoteca comprar vs rentar, ISR en bolsa y amortización de deuda." 
        url="https://fa-academy.vercel.app/tools"
      />

      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs md:text-sm font-bold tracking-wider uppercase mb-3 border border-amber-400/20">
            Laboratorio Financiero Oficial · 15 Herramientas
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
            Simuladores y Calculadoras Bursátiles
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Diagnostica deudas, descuenta flujos a valor presente, audita el impacto de la inflación de Banxico y proyecta tu independencia financiera con rigor matemático.
          </p>
        </div>

        {/* Barra de Filtros por Categoría */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setSelectedToolId('all'); }}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg shadow-amber-500/20' 
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Acceso Rápido / Navegación por Chips */}
        <div className="mb-12 p-4 bg-slate-900/60 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center sm:text-left">
            ⚡ Acceso Rápido Directo:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {filteredTools.map(t => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => scrollToTool(t.id)}
                  className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/70 hover:border-amber-400 hover:bg-slate-750 transition-all text-left flex items-start gap-2 group"
                >
                  <Icon size={16} className={`${t.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                  <div className="truncate">
                    <span className="text-[11px] font-bold text-slate-200 block truncate group-hover:text-amber-300 transition-colors">
                      {t.name}
                    </span>
                    <span className="text-[9px] text-slate-500 font-mono block">
                      {t.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de Calculadoras */}
        <div className="space-y-12">
          {/* Deuda y Presupuesto */}
          {(activeCategory === 'todas' || activeCategory === 'deuda') && (
            <>
              <DebtAmortization />
              <DebtVsInvestmentTool />
              <EmergencyFundCalculator />
            </>
          )}

          {/* Inversión y Retiro */}
          {(activeCategory === 'todas' || activeCategory === 'inversion') && (
            <>
              <CompoundInterestCalculator />
              <CostOfWaitingCalculator />
              <FinancialFreedomSimulator />
              <RetirementAforePprCalculator />
            </>
          )}

          {/* Valuación y Bolsa */}
          {(activeCategory === 'todas' || activeCategory === 'valuacion') && (
            <>
              <DcfCalculator />
              <GrahamValuationCalculator />
              <DividendIncomeCalculator />
              <PortfolioRebalanceSimulator />
            </>
          )}

          {/* Planeación e Impuestos */}
          {(activeCategory === 'todas' || activeCategory === 'planeacion') && (
            <>
              <MortgageBuyVsRentCalculator />
              <InflationRealRateCalculator />
              <SavingsGoalsCalculator />
              <InvestmentTaxCalculator />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
