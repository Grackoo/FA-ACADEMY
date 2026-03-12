import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Calculator, Target, PiggyBank, ArrowDownToLine, Flame, TrendingUp } from 'lucide-react';

// --- Components for Tools ---

const fmt = (n: number) => n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const DebtAmortization: React.FC = () => {
  const [capital, setCapital]         = useState<number>(35000);
  const [annualRate, setAnnualRate]   = useState<number>(48);   // Annual % — Nu example: 4%/mes = 48%/año
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
    if (capital <= 0 || annualRate <= 0 || plazo <= 0) { setErrorMSG('Ingresa valores válidos mayores a cero.'); setResult(null); return; }

    // Monthly base rate (before IVA)
    const monthlyBase = rateMode === 'annual' ? (annualRate / 100) / 12 : annualRate / 100;
    // Effective rate including IVA on interest
    const r = applyIVA ? monthlyBase * 1.16 : monthlyBase;
    const n = plazo;

    // PMT formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const pmt = capital * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    if (!isFinite(pmt) || pmt <= 0) { setErrorMSG('Los parámetros generan un préstamo inviable. Revisa la tasa o el plazo.'); setResult(null); return; }
    setErrorMSG('');

    const schedule: typeof result extends null ? never : NonNullable<typeof result>['schedule'] = [];
    const chartData: Array<{ month: string; balance: number }> = [];
    let balance = capital;
    let totalInt = 0;
    let totalIVA = 0;

    for (let i = 1; i <= n; i++) {
      const interestRaw = balance * monthlyBase;
      const iva = applyIVA ? interestRaw * 0.16 : 0;
      const interestTotal = interestRaw + iva;
      let principal = pmt - interestTotal;
      if (i === n) principal = balance; // last payment clears balance
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

  const inputCls = "w-full p-2.5 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none text-sm";
  const labelCls = "text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1.5";

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-8">
      <div className="flex items-center gap-2 mb-2 text-red-400">
        <Flame size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora "Mata Deudas"</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Ingresa los datos de tu préstamo y descubre exactamente cuánto pagas de capital, intereses e IVA mes a mes.</p>

      {/* Inputs + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* --- LEFT: Inputs --- */}
        <div className="lg:col-span-4 space-y-4">

          {/* Rate mode toggle */}
          <div className="flex gap-1 p-1 bg-slate-900 rounded-lg border border-slate-700">
            {(['annual','monthly'] as const).map(m => (
              <button key={m} onClick={() => setRateMode(m)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${rateMode === m ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'}`}>
                {m === 'annual' ? 'Tasa Anual (CAT)' : 'Tasa Mensual'}
              </button>
            ))}
          </div>

          <div>
            <label className={labelCls}>Capital / Monto del crédito ($)</label>
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

          {/* IVA Toggle */}
          <button onClick={() => setApplyIVA(v => !v)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${applyIVA ? 'bg-amber-900/20 border-amber-500/40 text-amber-300' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${applyIVA ? 'bg-amber-500' : 'bg-slate-600'}`}>
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${applyIVA ? 'left-5' : 'left-0.5'}`}/>
            </div>
            <span className="text-xs font-bold">Aplicar IVA 16% sobre intereses (México)</span>
          </button>

          {errorMSG && (
            <div className="bg-red-900/40 border border-red-500 p-3 rounded-lg text-red-400 text-xs font-bold">⚠️ {errorMSG}</div>
          )}
        </div>

        {/* --- RIGHT: Summary + Chart --- */}
        <div className="lg:col-span-8 space-y-4">
          {result && !errorMSG && (
            <>
              {/* Summary cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Pago Mensual</p>
                  <p className="text-xl font-black text-white">${fmt(result.pmt)}</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 p-3 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Intereses + IVA</p>
                  <p className="text-xl font-black text-red-400">${fmt(result.totalInterest + result.totalIVA)}</p>
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

              {/* Breakdown bar */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Desglose del Total a Pagar</span>
                  <span className="text-white font-bold">${fmt(result.totalPay)}</span>
                </div>
                <div className="flex h-5 rounded-full overflow-hidden gap-px mb-2">
                  <div className="bg-blue-500 transition-all" style={{ width: `${(capital / result.totalPay) * 100}%` }} title="Capital" />
                  <div className="bg-red-500 transition-all" style={{ width: `${(result.totalInterest / result.totalPay) * 100}%` }} title="Intereses" />
                  {applyIVA && <div className="bg-amber-400 transition-all" style={{ width: `${(result.totalIVA / result.totalPay) * 100}%` }} title="IVA" />}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block"/>Capital: <strong className="text-white">${fmt(capital)}</strong></span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-red-500 inline-block"/>Intereses: <strong className="text-red-400">${fmt(result.totalInterest)}</strong></span>
                  {applyIVA && <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block"/>IVA: <strong className="text-amber-400">${fmt(result.totalIVA)}</strong></span>}
                </div>
              </div>

              {/* Chart */}
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={result.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDebt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" fontSize={10} stroke="#64748b" interval={Math.floor(plazo/8)} />
                  <YAxis fontSize={10} stroke="#64748b" tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }}
                    formatter={(v: number) => [`$${fmt(v)}`, 'Saldo Restante']} labelStyle={{ color: '#94a3b8' }} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <Area type="monotone" dataKey="balance" stroke="#ef4444" fillOpacity={1} fill="url(#colorDebt)" />
                </AreaChart>
              </ResponsiveContainer>
            </>
          )}
          {!result && !errorMSG && (
            <div className="w-full h-full min-h-[300px] border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500 text-sm">
              Ingresa los datos del préstamo para ver el análisis
            </div>
          )}
        </div>
      </div>

      {/* Amortization Table */}
      {result && !errorMSG && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calculator size={18} className="text-red-400" />
              Tabla de Amortización Detallada
            </h3>
            <button onClick={() => setShowTable(v => !v)}
              className="text-xs font-bold px-4 py-2 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-colors">
              {showTable ? '▲ Ocultar tabla' : '▼ Ver tabla completa'}
            </button>
          </div>

          {showTable && (
            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-700">
                    {['Mes','Cuota','Interés','IVA (16%)','Capital','Saldo Restante'].map(h => (
                      <th key={h} className="p-4 text-right first:text-left text-slate-400 font-semibold uppercase tracking-widest text-xs">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row, idx) => (
                    <tr key={idx} className={`border-b border-slate-700/50 transition-colors hover:bg-slate-700/40 ${row.balance === 0 ? 'bg-emerald-900/10' : idx % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                      <td className="p-4 font-bold text-slate-300">{row.month}</td>
                      <td className="p-4 text-right font-bold text-white">${fmt(row.payment)}</td>
                      <td className="p-4 text-right font-semibold text-red-400">${fmt(row.interest)}</td>
                      <td className="p-4 text-right font-semibold text-amber-400">{applyIVA ? `$${fmt(row.iva)}` : '—'}</td>
                      <td className="p-4 text-right font-semibold text-emerald-400">${fmt(row.principal)}</td>
                      <td className="p-4 text-right text-slate-300">${fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-900 border-t-2 border-slate-600">
                    <td className="p-4 font-bold text-slate-300 text-xs uppercase">Totales</td>
                    <td className="p-4 text-right font-bold text-white">${fmt(result.totalPay)}</td>
                    <td className="p-4 text-right font-bold text-red-400">${fmt(result.totalInterest)}</td>
                    <td className="p-4 text-right font-bold text-amber-400">{applyIVA ? `$${fmt(result.totalIVA)}` : '—'}</td>
                    <td className="p-4 text-right font-bold text-emerald-400">${fmt(capital)}</td>
                    <td className="p-4 text-right text-emerald-400 font-bold">$0.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};




const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(2000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(10);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    let balance = principal;
    const data = [];
    for (let i = 0; i <= years; i++) {
        // Simple compounding visually distinct for basic educational purpose
      data.push({
        year: `Año ${i}`,
        balance: Math.round(balance),
        principal: principal + (monthly * 12 * i)
      });
      balance = (balance + (monthly * 12)) * (1 + rate / 100);
    }
    setChartData(data);
  }, [principal, monthly, rate, years]);

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-8">
       <div className="flex items-center gap-2 mb-6 text-emerald-400">
        <TrendingUp size={28} />
        <h2 className="text-2xl font-bold text-white">Interés Compuesto Avanzado</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">La "Magia" de la Bolsa. Observa cómo en los últimos años la curva se despega agresivamente, tu dinero trabajando por ti.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Inversión Inicial ($)</label>
              <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Aporte Mensual Ahorrado ($)</label>
              <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Tasa Anual Estimada (%)</label>
              <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Años Invirtiendo</label>
              <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
         </div>

         <div className="lg:col-span-2 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" fontSize={11} stroke="#64748b" />
                <YAxis fontSize={11} stroke="#64748b" tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }} 
                   formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'balance' ? 'Capital Total' : 'Tus Aportaciones']} 
                   labelStyle={{color: '#94a3b8'}}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <Area type="monotone" dataKey="balance" stroke="#10b981" fillOpacity={1} fill="url(#colorBalance)" name="balance" />
                <Area type="monotone" dataKey="principal" stroke="#64748b" fillOpacity={0.5} fill="#64748b" name="principal" />
              </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-700 pt-6">
          <div className="text-center">
             <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Capital Puesto por Ti</p>
             <p className="text-xl font-bold text-slate-300">${chartData[chartData.length - 1]?.principal.toLocaleString()}</p>
          </div>
          <div className="text-center">
             <p className="text-emerald-500 text-xs uppercase tracking-widest mb-1">Intereses Ganados (Puros)</p>
             <p className="text-xl font-bold text-emerald-400">
               + ${(chartData[chartData.length - 1]?.balance - chartData[chartData.length - 1]?.principal).toLocaleString()}
             </p>
          </div>
          <div className="text-center col-span-2 md:col-span-1 bg-emerald-900/20 rounded-lg p-2 border border-emerald-900/50">
             <p className="text-emerald-400 text-xs uppercase tracking-widest mb-1">Total Final</p>
             <p className="text-2xl font-display font-bold text-white">${chartData[chartData.length - 1]?.balance.toLocaleString()}</p>
          </div>
      </div>
    </div>
  );
}

const FinancialFreedomSimulator: React.FC = () => {
    const [monthlyExpense, setMonthlyExpense] = useState<number>(30000);
    const [withdrawalRate, setWithdrawalRate] = useState<number>(4); // Default 4% rule
    const [portfolioSize, setPortfolioSize] = useState<number>(0);
    const [monthlyPassive, setMonthlyPassive] = useState<number>(0);

    useEffect(() => {
        // Regla del 4% (o la que se ingrese) a la inversa para calcular el tamaño del portafolio objetivo
        const annualExpense = monthlyExpense * 12;
        // Portfolio = Annual Expenses / (Withdrawal Rate / 100)
        const targetPortfolio = annualExpense / (withdrawalRate / 100);
        setPortfolioSize(targetPortfolio);

        // Ingreso pasivo mensual basado en el portafolio generado y la tasa (es igual al gasto ingresado)
        setMonthlyPassive((targetPortfolio * (withdrawalRate / 100)) / 12);
    }, [monthlyExpense, withdrawalRate]);

    return (
        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900/80 rounded-2xl shadow-xl border border-indigo-500/30 p-8 relative overflow-hidden">
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="flex items-center gap-2 mb-6 text-indigo-400 relative z-10">
                <Target size={28} />
                <h2 className="text-2xl font-bold text-white">Simulador "Regla del 4%" (Libertad Financiera)</h2>
            </div>
            
            <p className="text-indigo-200/70 text-sm mb-8 relative z-10 max-w-2xl">
                ¿Cuánto dinero necesitas tener invertido para vivir de tus rendimientos sin que se acabe el capital? Esta calculadora usa la famosa "Regla del 4%" del Trinity Study.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-6">
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700">
                        <label className="text-sm font-bold text-indigo-300 block mb-2 flex items-center justify-between">
                            ¿Cuánto cuesta tu vida ideal mensualmente?
                            <span className="text-white">${monthlyExpense.toLocaleString()}</span>
                        </label>
                        <input 
                            type="range" min="10000" max="200000" step="1000" value={monthlyExpense} 
                            onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                            <span>$10k</span><span>$100k</span><span>$200k+</span>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700">
                        <label className="text-sm font-bold text-slate-300 block mb-2 flex items-center justify-between">
                            Tasa de Retiro Seguro Anual
                            <span className="text-white border-b border-dashed border-slate-500">{withdrawalRate}%</span>
                        </label>
                         <p className="text-[10px] text-slate-500 mb-2 leading-tight">4% asume un portafolio híbrido (Acciones/Bonos). Un retiro menor (3%) es más seguro en crisis largas.</p>
                        <input 
                            type="range" min="2" max="6" step="0.5" value={withdrawalRate} 
                            onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center p-6 bg-slate-900 border border-indigo-500/20 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.1)] text-center">
                    <PiggyBank size={48} className="text-indigo-400 mb-4 opacity-50" />
                    <p className="text-sm text-indigo-200 uppercase tracking-widest font-bold mb-2">Tu Número FIRE Objetivo</p>
                    <p className="text-4xl md:text-5xl font-display font-black text-white mb-4 drop-shadow-md">
                        ${Math.round(portfolioSize).toLocaleString()}
                    </p>
                    <div className="bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 px-4 py-2 rounded-lg text-sm max-w-sm">
                        Retirando un <strong className="text-white">{withdrawalRate}%</strong> al año de ese portafolio, obtendrás exactamente <strong className="text-emerald-400">${Math.round(monthlyPassive).toLocaleString()} MXN / mes</strong> brutos, y teóricamente el capital nunca se agotará.
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tools: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Laboratorio Financiero</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Herramientas precisas para diagnosticar deudas, proyectar interés compuesto y calcular tu verdadero retiro (Libertad Financiera).
          </p>
        </div>

        <div className="space-y-12">
          {/* Orden Lógico de Educación Financiera: 1. Pagar Deuda, 2. Ahorrar/Invertir, 3. Libertad */}
          <DebtAmortization />
          <CompoundInterestCalculator />
          <FinancialFreedomSimulator />
        </div>
      </div>
    </div>
  );
};

export default Tools;