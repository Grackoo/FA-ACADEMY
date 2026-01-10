import React, { useState, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line
} from 'recharts';
import { Calculator, PieChart as PieIcon, Activity, TrendingUp } from 'lucide-react';

// --- Components for Tools ---

const PortfolioSimulator: React.FC = () => {
  const [allocation, setAllocation] = useState({
    stocks: 60,
    bonds: 30,
    crypto: 5,
    cash: 5
  });

  const data = [
    { name: 'Acciones (S&P 500)', value: allocation.stocks, color: '#10b981' },
    { name: 'Bonos (Renta Fija)', value: allocation.bonds, color: '#3b82f6' },
    { name: 'Criptomonedas', value: allocation.crypto, color: '#f59e0b' },
    { name: 'Efectivo', value: allocation.cash, color: '#94a3b8' },
  ];

  const calculateReturn = () => {
    // Estimated annual returns: Stocks 10%, Bonds 4%, Crypto 20%, Cash 2%
    const weightedReturn = (
      (allocation.stocks * 0.10) + 
      (allocation.bonds * 0.04) + 
      (allocation.crypto * 0.20) + 
      (allocation.cash * 0.02)
    );
    return weightedReturn.toFixed(2);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const val = parseInt(e.target.value);
    setAllocation(prev => ({
      ...prev,
      [type]: val
    }));
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-8">
      <div className="flex items-center gap-2 mb-6">
        <PieIcon className="text-primary-500" />
        <h2 className="text-2xl font-bold text-white">Simulador de Portafolio</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-300 mb-2">
              Acciones ({allocation.stocks}%)
              <span className="text-emerald-400 font-bold">~10% APY</span>
            </label>
            <input 
              type="range" min="0" max="100" value={allocation.stocks} 
              onChange={(e) => handleSliderChange(e, 'stocks')}
              className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-300 mb-2">
              Bonos ({allocation.bonds}%)
              <span className="text-blue-400 font-bold">~4% APY</span>
            </label>
            <input 
              type="range" min="0" max="100" value={allocation.bonds} 
              onChange={(e) => handleSliderChange(e, 'bonds')}
              className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-300 mb-2">
              Cripto ({allocation.crypto}%)
              <span className="text-amber-400 font-bold">~20% APY</span>
            </label>
            <input 
              type="range" min="0" max="100" value={allocation.crypto} 
              onChange={(e) => handleSliderChange(e, 'crypto')}
              className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-300 mb-2">
              Efectivo ({allocation.cash}%)
              <span className="text-slate-400 font-bold">~2% APY</span>
            </label>
            <input 
              type="range" min="0" max="100" value={allocation.cash} 
              onChange={(e) => handleSliderChange(e, 'cash')}
              className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-slate-500"
            />
          </div>
          
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
            <p className="text-sm text-slate-400 mb-1">Retorno Esperado Anual (Estimado)</p>
            <p className="text-3xl font-bold text-primary-500">+{calculateReturn()}%</p>
          </div>
        </div>

        <div className="h-64 lg:h-auto flex flex-col items-center justify-center relative">
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
             <span className="text-xs text-slate-500 font-bold">ASSET</span>
             <br/>
             <span className="text-sm font-bold text-white">MIX</span>
          </div>
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
       <div className="flex items-center gap-2 mb-6">
        <Calculator className="text-primary-500" />
        <h2 className="text-2xl font-bold text-white">Interés Compuesto Avanzado</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Inversión Inicial ($)</label>
              <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full p-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Aporte Mensual ($)</label>
              <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full p-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Tasa Anual (%)</label>
              <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full p-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-1">Años</label>
              <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full p-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
            </div>
         </div>

         <div className="lg:col-span-2 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" fontSize={12} stroke="#94a3b8" />
                <YAxis fontSize={12} stroke="#94a3b8" tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} formatter={(value: number) => `$${value.toLocaleString()}`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <Area type="monotone" dataKey="balance" stroke="#0d9488" fillOpacity={1} fill="url(#colorBalance)" name="Total con Interés" />
                <Area type="monotone" dataKey="principal" stroke="#64748b" fillOpacity={0.3} fill="#64748b" name="Tu Dinero" />
              </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>
      <div className="mt-6 text-center">
         <p className="text-lg text-slate-400">En {years} años tendrías:</p>
         <p className="text-4xl font-display font-bold text-white">${chartData[chartData.length - 1]?.balance.toLocaleString()}</p>
      </div>
    </div>
  );
}

const TechnicalAnalysis: React.FC = () => {
  // Mock data for random walk chart
  const data = Array.from({ length: 50 }, (_, i) => ({
    name: i,
    price: 150 + Math.random() * 50 - 25,
    ma: 150 + Math.random() * 20 - 10
  }));

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-8">
       <div className="flex items-center gap-2 mb-6">
        <Activity className="text-primary-500" />
        <h2 className="text-2xl font-bold text-white">Análisis Técnico Integrado</h2>
      </div>
      
      <div className="bg-slate-900 rounded-xl p-4 overflow-hidden relative border border-slate-700">
         <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="bg-slate-700 text-white text-xs px-2 py-1 rounded border border-slate-600">RSI: 64.5</span>
            <span className="bg-slate-700 text-white text-xs px-2 py-1 rounded border border-slate-600">MACD: Bullish</span>
         </div>
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis hide />
                <YAxis domain={['auto', 'auto']} hide />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: 'white' }} />
                <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ma" stroke="#f59e0b" strokeWidth={1} dot={false} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
           <p className="text-xs text-slate-500 font-bold uppercase">Tendencia</p>
           <p className="text-emerald-500 font-bold flex items-center justify-center gap-1"><TrendingUp size={16}/> Alcista</p>
        </div>
        <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
           <p className="text-xs text-slate-500 font-bold uppercase">Volatilidad</p>
           <p className="text-amber-500 font-bold">Media</p>
        </div>
        <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
           <p className="text-xs text-slate-500 font-bold uppercase">Volumen</p>
           <p className="text-white font-bold">1.2M</p>
        </div>
        <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
           <p className="text-xs text-slate-500 font-bold uppercase">Próx. Soporte</p>
           <p className="text-white font-bold">142.50</p>
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
          <h1 className="text-4xl font-display font-bold text-white mb-4">Herramientas del Inversor</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Utiliza estas herramientas profesionales para planificar tu libertad financiera y analizar el mercado.
          </p>
        </div>

        <div className="space-y-12">
          <PortfolioSimulator />
          <CompoundInterestCalculator />
          <TechnicalAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Tools;