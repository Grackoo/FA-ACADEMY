import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Calculator, Target, PiggyBank, ArrowDownToLine, Flame, TrendingUp } from 'lucide-react';

// --- Components for Tools ---

const DebtAmortization: React.FC = () => {
  const [debtAmount, setDebtAmount] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(35); // Typical credit card APY
  const [monthlyPayment, setMonthlyPayment] = useState<number>(2500);
  
  const [amortizationSchedule, setAmortizationSchedule] = useState<any[]>([]);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [monthsToPayoff, setMonthsToPayoff] = useState<number>(0);
  const [errorMSG, setErrorMSG] = useState<string>("");

  useEffect(() => {
    calculateAmortization();
    // eslint-disable-next-line
  }, [debtAmount, interestRate, monthlyPayment]);

  const calculateAmortization = () => {
    let balance = debtAmount;
    const monthlyRate = (interestRate / 100) / 12;
    let totalInt = 0;
    let months = 0;
    const schedule = [];
    
    // Check if payment is too small to cover even the interest
    const initialInterest = balance * monthlyRate;
    if (monthlyPayment <= initialInterest && balance > 0) {
       setErrorMSG("Tu pago mensual es menor a los intereses que genera la deuda. ¡La deuda crecerá al infinito!");
       setAmortizationSchedule([]);
       setTotalInterest(0);
       setMonthsToPayoff(0);
       return;
    }
    setErrorMSG("");

    while (balance > 0 && months < 360) { // Max 30 years limit for loop safety
      months++;
      const interest = balance * monthlyRate;
      let principal = monthlyPayment - interest;
      
      if (balance - principal < 0) {
        principal = balance;
      }
      
      balance -= principal;
      totalInt += interest;
      
      if (months % 6 === 0 || balance <= 0 || months === 1) { // sample data points to avoid huge arrays
        schedule.push({
          month: `Mes ${months}`,
          balance: Math.max(0, balance),
        });
      }
    }

    setAmortizationSchedule(schedule);
    setTotalInterest(totalInt);
    setMonthsToPayoff(months);
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-8">
      <div className="flex items-center gap-2 mb-6 text-red-400">
        <Flame size={28} />
        <h2 className="text-2xl font-bold text-white">Calculadora "Mata Deudas"</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">Descubre cuánto dinero le regalas al banco en intereses y cuánto tiempo te tomará ser libre de esa deudada mala (Tarjetas de crédito, préstamos personales).</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-1">Total de la Deuda ($)</label>
            <input type="number" value={debtAmount} onChange={(e) => setDebtAmount(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-1">Tasa de Interés Anual (CAT) %</label>
            <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-1">Tu Pago Mensual ($)</label>
            <input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(Number(e.target.value))} className="w-full p-2 bg-slate-900 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
          
          {errorMSG && (
              <div className="bg-red-900/40 border border-red-500 p-3 rounded-lg text-red-400 text-xs font-bold leading-relaxed">
                  ⚠️ {errorMSG}
              </div>
          )}

          {!errorMSG && monthsToPayoff > 0 && (
             <div className="grid grid-cols-2 gap-2 mt-4">
                 <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg text-center">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Tiempo</p>
                    <p className="text-lg font-bold text-white">{Math.floor(monthsToPayoff/12)} años, {monthsToPayoff%12} m</p>
                 </div>
                 <div className="bg-red-900/20 border border-red-900 p-3 rounded-lg text-center">
                    <p className="text-xs text-red-500 uppercase tracking-wider mb-1">Intereses Puros</p>
                    <p className="text-lg font-bold text-red-400">${Math.round(totalInterest).toLocaleString()}</p>
                 </div>
             </div>
          )}
        </div>

        <div className="lg:col-span-8 h-64 lg:h-auto">
             {!errorMSG && amortizationSchedule.length > 0 ? (
                 <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                 <AreaChart data={amortizationSchedule} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                   <defs>
                     <linearGradient id="colorDebt" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5}/>
                       <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="month" fontSize={11} stroke="#64748b" />
                   <YAxis fontSize={11} stroke="#64748b" tickFormatter={(val) => `$${val/1000}k`} />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }} 
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Deuda Restante']}
                      labelStyle={{color: '#94a3b8'}}
                   />
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                   <Area type="monotone" dataKey="balance" stroke="#ef4444" fillOpacity={1} fill="url(#colorDebt)" />
                 </AreaChart>
               </ResponsiveContainer>
             ) : (
                 <div className="w-full h-full min-h-[300px] border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">
                     Ajusta tus números para ver la gráfica de amortización
                 </div>
             )}
        </div>
      </div>
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