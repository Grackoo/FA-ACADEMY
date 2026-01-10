import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MODULES, getIcon } from '../constants';
import { ArrowLeft, BookOpen, BarChart3, Lock, PlayCircle } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from 'recharts';

// Mock data for charts visualization
const CHART_DATA_GROWTH = [
  { name: 'Año 1', value: 1000 },
  { name: 'Año 2', value: 1200 },
  { name: 'Año 3', value: 1500 },
  { name: 'Año 4', value: 1900 },
  { name: 'Año 5', value: 2500 },
  { name: 'Año 6', value: 3400 },
];

const CHART_DATA_MACRO = [
  { name: '2020', inflation: 1.2, rates: 0.5 },
  { name: '2021', inflation: 4.5, rates: 0.5 },
  { name: '2022', inflation: 8.5, rates: 2.5 },
  { name: '2023', inflation: 4.1, rates: 5.25 },
  { name: '2024', inflation: 3.2, rates: 4.8 },
];

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const module = MODULES.find(m => m.id === id);

  if (!module) {
    return <div className="p-20 text-center text-white">Módulo no encontrado</div>;
  }

  // Helper to render a chart based on the phase to make it look "real"
  const renderChart = () => {
    if (module.phase === 1) {
      return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <h4 className="font-bold text-slate-200 mb-4">El Poder del Interés Compuesto</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA_GROWTH}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" tick={{fontSize: 12, fill: '#94a3b8'}} stroke="#475569" />
                <YAxis tick={{fontSize: 12, fill: '#94a3b8'}} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">Proyección de crecimiento de capital con aportes constantes.</p>
        </div>
      );
    } 
    
    if (module.phase === 2 || module.phase === 4) {
      return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <h4 className="font-bold text-slate-200 mb-4">Tasas vs. Inflación (Macroeconomía)</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA_MACRO}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" tick={{fill: '#94a3b8'}} stroke="#475569" />
                <YAxis tick={{fill: '#94a3b8'}} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Bar dataKey="inflation" fill="#ef4444" name="Inflación" />
                <Bar dataKey="rates" fill="#3b82f6" name="Tasas Interés" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }

    // Default chart (Technical / Expert)
    return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <h4 className="font-bold text-slate-200 mb-4">Análisis de Tendencia</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CHART_DATA_GROWTH}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" tick={{fill: '#94a3b8'}} stroke="#475569" />
                <YAxis tick={{fill: '#94a3b8'}} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Line type="step" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      
      {/* Module Header */}
      <div className={`${module.color} text-white pt-24 pb-12 shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/academy" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Volver a la Academia
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
               {getIcon(module.icon, "w-10 h-10 text-white")}
            </div>
            <div>
               <div className="flex items-center gap-3 mb-2">
                 <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide">Fase {module.phase}</span>
                 <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                    <BarChart3 size={12} /> {module.level}
                 </span>
               </div>
               <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{module.title}</h1>
               <p className="text-white/90 max-w-2xl text-lg leading-relaxed">{module.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
             {/* Dynamic Chart Section based on Module Type */}
             {renderChart()}

             {/* Topics List */}
             <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                   <h3 className="text-xl font-bold text-white flex items-center gap-2">
                     <BookOpen size={20} className="text-primary-500" />
                     Contenido del Módulo
                   </h3>
                   <span className="text-sm text-slate-400">{module.topics.length} Lecciones</span>
                </div>
                
                <div className="divide-y divide-slate-700">
                  {module.topics.map((topic, index) => (
                    <div key={index} className="p-6 hover:bg-slate-750 transition-colors group cursor-pointer hover:bg-slate-700/50">
                       <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-700 text-slate-400 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary-900 group-hover:text-primary-400 transition-colors">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                             <h4 className="font-bold text-slate-200 mb-2 group-hover:text-primary-400">{topic.title}</h4>
                             <p className="text-sm text-slate-400 leading-relaxed">{topic.content}</p>
                          </div>
                          <div className="self-center">
                             <PlayCircle size={24} className="text-slate-600 group-hover:text-primary-500" />
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
             {/* Progress Card */}
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                <h3 className="font-bold text-white mb-4">Tu Progreso</h3>
                <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
                  <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-sm text-slate-400 mb-6">0% completado</p>
                <button className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-colors shadow-lg shadow-primary-900/50">
                  Empezar Curso
                </button>
             </div>

             {/* Instructor / Meta */}
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                <h3 className="font-bold text-white mb-4">Incluido en este curso</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                   <li className="flex items-center gap-3">
                     <div className="w-6 flex justify-center"><PlayCircle size={18} className="text-primary-500"/></div>
                     2.5 horas de video on-demand
                   </li>
                   <li className="flex items-center gap-3">
                     <div className="w-6 flex justify-center"><BookOpen size={18} className="text-primary-500"/></div>
                     4 Guías descargables (PDF)
                   </li>
                   <li className="flex items-center gap-3">
                     <div className="w-6 flex justify-center"><BarChart3 size={18} className="text-primary-500"/></div>
                     Acceso a plantillas de Excel
                   </li>
                </ul>
             </div>

             {/* Next Module Teaser */}
             {module.phase < 5 && (
               <div className="bg-slate-900 p-6 rounded-2xl text-white relative overflow-hidden border border-slate-800">
                  <div className="relative z-10">
                    <p className="text-xs text-slate-500 font-bold uppercase mb-2">Siguiente Fase</p>
                    <h4 className="font-bold mb-4">Fase {module.phase + 1}</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                       <Lock size={14} />
                       <span>Bloqueado hasta completar fase actual</span>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-white/5 rounded-full"></div>
               </div>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;