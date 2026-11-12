import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MODULES, getIcon } from '../constants';
import SEO from '../components/SEO';
import { 
  ArrowLeft, BookOpen, BarChart3, Lock, PlayCircle, 
  Download, FileSpreadsheet, Printer, CheckCircle2, Award, 
  ShieldCheck, ArrowRight, Clock, Star 
} from 'lucide-react';
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
import { 
  downloadTradingJournalTemplate, 
  downloadAssetAllocationTemplate, 
  downloadFiscalDeclarationTemplate, 
  downloadInvestmentThesisTemplate, 
  openPrintableStudyGuide 
} from '../utils/resources';

// Datos para gráficos interactivos
const CHART_DATA_GROWTH = [
  { name: 'Año 1', value: 1000 },
  { name: 'Año 2', value: 1250 },
  { name: 'Año 3', value: 1600 },
  { name: 'Año 4', value: 2100 },
  { name: 'Año 5', value: 2800 },
  { name: 'Año 6', value: 3900 },
];

const CHART_DATA_FUNDAMENTALS = [
  { name: 'CEMEX', ebitda: 18.5, roe: 9.8, pe: 11.2 },
  { name: 'BIMBO', ebitda: 13.9, roe: 13.2, pe: 16.5 },
  { name: 'WALMEX', ebitda: 10.4, roe: 24.1, pe: 22.0 },
  { name: 'FEMSA', ebitda: 14.1, roe: 14.5, pe: 18.2 },
];

const CHART_DATA_EFFICIENT_FRONTIER = [
  { name: '100% Cetes', riesgo: 3.5, retorno: 10.2 },
  { name: 'Conservador (80/20)', riesgo: 6.2, retorno: 12.0 },
  { name: 'Balanceado (50/50)', riesgo: 10.5, retorno: 14.5 },
  { name: 'Óptimo Sharpe (70/30)', riesgo: 12.8, retorno: 16.8 },
  { name: 'Agresivo (90/10)', riesgo: 17.5, retorno: 18.5 },
  { name: '100% Acciones', riesgo: 21.0, retorno: 19.8 },
];

const CHART_DATA_PAYOFF_OPTIONS = [
  { precio: '$140', spot: -15, put: +20, portafolioProtegido: +5 },
  { precio: '$150', spot: -10, put: +10, portafolioProtegido: 0 },
  { precio: '$160', spot: 0, put: -5, portafolioProtegido: -5 },
  { precio: '$170', spot: +10, put: -5, portafolioProtegido: +5 },
  { precio: '$180', spot: +20, put: -5, portafolioProtegido: +15 },
];

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const module = MODULES.find(m => m.id === id);

  const [progressPercent, setProgressPercent] = useState(0);
  const [currentLessonIdx, setCurrentLessonIdx] = useState(0);

  useEffect(() => {
    if (!module) return;
    try {
      const mockProgress = JSON.parse(localStorage.getItem('fa_mock_progress') || '[]');
      const userStr = localStorage.getItem('fa_academy_user');
      const user = userStr ? JSON.parse(userStr) : null;
      
      const found = mockProgress.find((p: any) => 
        (user ? p.username === user.username : true) && Number(p.phase) === module.phase
      );
      
      const localDirect = localStorage.getItem(`fa_phase_${module.phase}_progress`);
      
      if (found) {
        const pct = Math.min(100, Math.round(((found.lesson_index + 1) / module.topics.length) * 100));
        setProgressPercent(pct);
        setCurrentLessonIdx(found.lesson_index);
      } else if (localDirect) {
        const idx = parseInt(localDirect, 10);
        const pct = Math.min(100, Math.round(((idx + 1) / module.topics.length) * 100));
        setProgressPercent(pct);
        setCurrentLessonIdx(idx);
      }
    } catch {
      // Ignorar errores de parsing
    }
  }, [module]);

  if (!module) {
    return <div className="p-20 text-center text-white">Módulo no encontrado</div>;
  }

  const handleDownloadTemplate = () => {
    if (module.phase === 3) {
      downloadTradingJournalTemplate();
    } else if (module.phase === 4) {
      downloadAssetAllocationTemplate();
    } else if (module.phase === 5) {
      downloadInvestmentThesisTemplate();
    } else {
      downloadAssetAllocationTemplate();
    }
  };

  const handleOpenStudyGuide = () => {
    openPrintableStudyGuide(
      module.phase,
      module.title,
      module.topics.map(t => ({
        title: t.title,
        content: t.content,
        details: t.content
      }))
    );
  };

  const renderChart = () => {
    if (module.phase === 1) {
      return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-200">El Poder del Interés Compuesto (Tasa Real vs Nominal)</h4>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded">Riqueza Exponencial</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA_GROWTH}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} stroke="#475569" />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" name="Capital ($)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">Proyección de reinversión automática de rendimientos con aportes disciplinados.</p>
        </div>
      );
    }

    if (module.phase === 2) {
      return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-200">Análisis Fundamental Comparado: Margen EBITDA y ROE</h4>
            <span className="text-xs bg-blue-500/20 text-blue-400 font-bold px-2 py-1 rounded">BMV vs Sector</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA_FUNDAMENTALS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} stroke="#475569" />
                <YAxis tick={{ fill: '#94a3b8' }} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Bar dataKey="ebitda" fill="#3b82f6" name="Margen EBITDA (%)" />
                <Bar dataKey="roe" fill="#10b981" name="ROE (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">Evaluación de salud operativa y eficiencia del capital accionarial en empresas líderes de la BMV.</p>
        </div>
      );
    }

    if (module.phase === 4) {
      return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-200">Frontera Eficiente de Markowitz: Riesgo ($\sigma$) vs. Retorno Esperado</h4>
            <span className="text-xs bg-amber-500/20 text-amber-400 font-bold px-2 py-1 rounded">Modelo Core-Satellite</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CHART_DATA_EFFICIENT_FRONTIER}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="riesgo" tick={{ fill: '#94a3b8' }} stroke="#475569" label={{ value: 'Volatilidad / Riesgo (%)', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 11 }} />
                <YAxis dataKey="retorno" tick={{ fill: '#94a3b8' }} stroke="#475569" label={{ value: 'Retorno (%)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Line type="monotone" dataKey="retorno" stroke="#f59e0b" strokeWidth={3} dot={{ r: 6, fill: '#f59e0b' }} name="Retorno Anual (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">Optimización de pesos para maximizar el Ratio de Sharpe y amortiguar el Maximum Drawdown.</p>
        </div>
      );
    }

    if (module.phase === 5) {
      return (
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-200">Curva de Payoff: Cobertura con Opciones Put (Protección de Portafolio)</h4>
            <span className="text-xs bg-rose-500/20 text-rose-400 font-bold px-2 py-1 rounded">Riesgo Asimétrico</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CHART_DATA_PAYOFF_OPTIONS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="precio" tick={{ fill: '#94a3b8' }} stroke="#475569" />
                <YAxis tick={{ fill: '#94a3b8' }} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
                <Line type="monotone" dataKey="portafolioProtegido" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} name="Portafolio con Cobertura Put" />
                <Line type="monotone" dataKey="spot" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="3 3" name="Portafolio Desprotegido" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">El seguro de portafolio: limitando la caída en caídas severas mientras se mantiene el potencial alcista.</p>
        </div>
      );
    }

    // Default chart (Technical)
    return (
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-slate-200">Estructura de Mercado y Ruptura de Tendencia (BOS)</h4>
          <span className="text-xs bg-indigo-500/20 text-indigo-400 font-bold px-2 py-1 rounded">Price Action</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHART_DATA_GROWTH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} stroke="#475569" />
              <YAxis tick={{ fill: '#94a3b8' }} stroke="#475569" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: 'white' }} />
              <Line type="step" dataKey="value" stroke="#818cf8" strokeWidth={3} dot={{ r: 5 }} name="Precio / Estructura" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">Identificación de Máximos Más Altos (HH) y confirmación con volumen institucional.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <SEO 
        title={`Fase ${module.phase}: ${module.title} | FA Academy`}
        description={module.description}
        url={`https://fa-academy.vercel.app/academy/${module.id}`}
      />

      {/* Module Header */}
      <div className={`${module.color} text-white pt-24 pb-12 shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#catalog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Volver al Catálogo de Cursos
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              {getIcon(module.icon, "w-10 h-10 text-white")}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide">Fase {module.phase}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                  <BarChart3 size={12} /> {module.level}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                  <Clock size={12} /> {module.duration}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 text-amber-300">
                  <Star size={12} fill="currentColor" /> {module.rating}
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
                  Contenido del Curso
                </h3>
                <span className="text-sm text-slate-300 font-semibold bg-slate-700/60 px-3 py-1 rounded-full border border-slate-600">
                  {module.topics.length} Lecciones Especializadas
                </span>
              </div>

              <div className="divide-y divide-slate-700/70">
                {module.topics.map((topic, index) => (
                  <Link 
                    to={`/course/phase/${module.phase}?lesson=${index + 1}`} 
                    key={index} 
                    className="p-5 sm:p-6 transition-all group cursor-pointer block hover:bg-slate-700/50 border-l-4 border-transparent hover:border-primary-500"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-md">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-400">Lección {index + 1}</span>
                        </div>
                        <h4 className="font-bold text-slate-100 mb-1 group-hover:text-primary-300 transition-colors group-hover:underline text-base">
                          {topic.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{topic.content}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 self-center">
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600/20 text-primary-300 border border-primary-500/30 text-xs font-semibold group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                          Iniciar Lección
                          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                        <PlayCircle size={24} className="text-primary-400 sm:hidden" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Card */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white">Tu Progreso</h3>
                <span className="text-xs font-bold text-primary-400 bg-primary-950/60 px-2.5 py-1 rounded-full border border-primary-800">
                  {progressPercent}% completado
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 mb-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary-600 to-emerald-400 h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                {progressPercent === 0 
                  ? `Inicia la lección 1 de ${module.topics.length} para avanzar en tu certificación.` 
                  : `Lección ${Math.min(currentLessonIdx + 1, module.topics.length)} de ${module.topics.length} registrada.`}
              </p>
              <Link
                to={`/course/phase/${module.phase}`}
                className="w-full py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-900/50 flex items-center justify-center gap-2"
              >
                {progressPercent === 0 ? 'Empezar Curso' : 'Continuar Curso'}
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Descargas Reales de Recursos */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Download size={18} className="text-primary-400" />
                Materiales Descargables
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Herramientas profesionales y guías de estudio creadas para aplicar los conceptos directamente en tu operativa:
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleOpenStudyGuide}
                  className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-650 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-600 transition-all hover:border-primary-500"
                >
                  <span className="flex items-center gap-2">
                    <Printer size={16} className="text-primary-400" />
                    Guía Oficial de Estudio (PDF)
                  </span>
                  <Download size={14} className="text-slate-400" />
                </button>

                <button
                  onClick={handleDownloadTemplate}
                  className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-650 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-600 transition-all hover:border-emerald-500"
                >
                  <span className="flex items-center gap-2">
                    <FileSpreadsheet size={16} className="text-emerald-400" />
                    {module.phase === 3 ? 'Plantilla Diario de Trading (Excel)' :
                     module.phase === 4 ? 'Plantilla Asset Allocation (Excel)' :
                     module.phase === 5 ? 'Plantilla Tesis de Inversión (Excel)' :
                     'Plantilla Financiera (Excel)'}
                  </span>
                  <Download size={14} className="text-slate-400" />
                </button>

                {module.phase === 4 && (
                  <button
                    onClick={downloadFiscalDeclarationTemplate}
                    className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-650 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-600 transition-all hover:border-amber-500"
                  >
                    <span className="flex items-center gap-2">
                      <FileSpreadsheet size={16} className="text-amber-400" />
                      Calculadora Fiscal SAT LISR (Excel)
                    </span>
                    <Download size={14} className="text-slate-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Certificación Acreditada */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Award size={18} className="text-amber-400" />
                Acreditación de Fase {module.phase}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Completa las {module.topics.length} lecciones especializadas y aprueba el examen final para certificar tu dominio en {module.title}.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/50">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Incluye evaluación interactiva por lección y examen final de validación.</span>
              </div>
            </div>

            {/* Next Module Teaser */}
            {module.phase < 5 && (
              <div className="bg-slate-900 p-6 rounded-2xl text-white relative overflow-hidden border border-slate-800">
                <div className="relative z-10">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-2">Siguiente Fase</p>
                  <h4 className="font-bold mb-2">Fase {module.phase + 1}</h4>
                  <p className="text-xs text-slate-400 mb-4">{MODULES[module.phase]?.title}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Lock size={14} />
                    <span>Se desbloquea al aprobar el examen de la fase actual</span>
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
