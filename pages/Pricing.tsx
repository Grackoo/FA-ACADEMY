import React from 'react';
import { Check, X, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden py-20">
      <SEO 
        title="Precios y Planes de Inversión | FA Academy"
        description="Planes transparentes para dominar la bolsa de valores. Empieza gratis con el Plan Básico (Fases 1, 2 y 6) o accede al Master Completo de 8 Fases (73 lecciones)." 
        url="https://fa-academy.vercel.app/pricing"
      />
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-400/10 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 border border-amber-400/20">
            Planes y Membresías FA Academy
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
            Educación Bursátil Transparente
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sin suscripciones mensuales ocultas. Aprende a tu propio ritmo con acceso de por vida y acompañamiento institucional en 8 fases formativas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Plan 1: Básico / Cimientos (Gratuito) */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden hover:border-slate-700 transition-all">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                  Acceso Gratuito
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-2">Plan Básico</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">$0</span>
                  <span className="text-slate-400 text-sm">MXN / de por vida</span>
                </div>
                <p className="text-slate-400 mt-4 text-xs leading-relaxed">
                  Los fundamentos esenciales para sanar finanzas, entender la regulación mexicana e iniciar en renta fija soberana.
                </p>
              </div>

              <ul className="space-y-3.5 mb-8 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 1:</strong> Fundamentos y Mentalidad (7 lecciones)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 2:</strong> Ecosistema y Renta Fija (9 lecciones)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 6:</strong> Finanzas Personales Operativas (9 lecciones)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                  <span>Acceso ilimitado a las 9 calculadoras en <strong>/tools</strong></span>
                </li>
                <li className="flex items-start gap-2.5 opacity-40">
                  <X className="text-slate-600 shrink-0 mt-0.5" size={16} />
                  <span className="line-through">Análisis Técnico y Estación TradingView (Fase 3)</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-40">
                  <X className="text-slate-600 shrink-0 mt-0.5" size={16} />
                  <span className="line-through">Valuación DCF, Opciones y Macroeconomía</span>
                </li>
              </ul>
            </div>

            <Link 
              to="/course/phase/1" 
              className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-800 text-white font-bold text-center text-xs hover:bg-slate-750 hover:border-slate-600 transition-colors block"
            >
              Comenzar con Fase 1 Gratis
            </Link>
          </div>

          {/* Plan 2: Trader & Analista ($1,490 MXN) */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700 flex flex-col justify-between relative overflow-hidden hover:border-indigo-500/50 transition-all">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
                  Operativa y Portafolios
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-2">Trader & Analista</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">$1,490</span>
                  <span className="text-slate-400 text-sm">MXN / pago único</span>
                </div>
                <p className="text-slate-400 mt-4 text-xs leading-relaxed">
                  Para quienes buscan dominar la lectura de gráficos, gestión de riesgo con esperanza matemática y estructurar carteras Core-Satellite.
                </p>
              </div>

              <ul className="space-y-3.5 mb-8 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Todo el Plan Básico</strong> (Fases 1, 2 y 6 - 25 lecciones)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 3:</strong> Análisis Técnico y Fibonacci (12 lecciones)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 4:</strong> Gestión de Riesgo y Portafolio (9 lecciones)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                  <span>Plantilla Excel de Trading Journal y Rebalanceo Anual</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                  <span>Exámenes y Certificados de Analista Técnico y Portafolios</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-40">
                  <X className="text-slate-600 shrink-0 mt-0.5" size={16} />
                  <span className="line-through">Valuación DCF, FIBRAS Avanzadas y Macro Global</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://wa.me/527711960057?text=Hola,%20me%20interesa%20inscribirme%20al%20Plan%20Trader%20y%20Analista%20($1,490%20MXN)%20en%20FA%20Academy." 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-center text-xs transition-colors block shadow-lg shadow-indigo-900/30"
            >
              Inscribirme al Plan Trader
            </a>
          </div>

          {/* Plan 3: Master Cuantitativo / Acceso Total ($2,490 MXN) */}
          <div className="bg-slate-900 rounded-3xl p-8 border-2 border-primary-500 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-primary-900/20 transform lg:-translate-y-2">
            <div className="absolute top-0 right-0 bg-primary-500 text-slate-950 text-xs font-black px-4 py-1 rounded-bl-xl tracking-wider">
              ACCESO TOTAL A LAS 8 FASES
            </div>
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-primary-400 bg-primary-950/60 px-3 py-1 rounded-full border border-primary-800 flex items-center gap-1.5 w-fit">
                  <Sparkles size={12} /> Máxima Formación
                </span>
                <h3 className="text-2xl font-bold text-primary-400 mt-3 mb-2">Master Institucional</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">$2,490</span>
                  <span className="text-xl text-slate-500 line-through decoration-rose-500">$4,800</span>
                  <span className="text-slate-400 text-sm">MXN / pago único</span>
                </div>
                <p className="text-emerald-400 text-xs font-bold mt-2 bg-emerald-950/60 border border-emerald-800/60 inline-block px-2.5 py-1 rounded">
                  AHORRAS 48% · ACCESO DE POR VIDA
                </p>
                <p className="text-slate-400 mt-4 text-xs leading-relaxed">
                  El programa definitivo con las 8 fases completas (73 lecciones), simuladores avanzados, valuación por flujos descontados, FIBRAS, dividendos y macroeconomía global.
                </p>
              </div>

              <ul className="space-y-3 mb-8 text-xs text-white">
                <li className="flex items-start gap-2.5">
                  <Check className="text-primary-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Acceso Total a las 8 Fases</strong> (73 lecciones especializadas)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-primary-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 5:</strong> Estrategias Especializadas, DCF y Opciones con Griegas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-primary-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 7:</strong> Ingreso Pasivo, Dividendos, FIBRAS y Coberturas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-primary-400 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fase 8:</strong> Macroeconomía Aplicada, Banxico, Fed e Informe Institucional</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-primary-400 shrink-0 mt-0.5" size={16} />
                  <span>Plantillas profesionales de Tesis de Inversión y Memorándum Macroeconómico</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-primary-400 shrink-0 mt-0.5" size={16} />
                  <span>Soporte prioritario y canal directo para resolución de dudas</span>
                </li>
              </ul>
            </div>

            <div>
              <a 
                href="https://mpago.li/1GFn4gU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center w-full py-4 rounded-xl bg-primary-600 text-white font-bold text-xs hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20"
              >
                Adquirir Acceso Total al Master ($2,490 MXN)
              </a>
              <p className="text-center text-[11px] text-slate-500 mt-3">Garantía total de satisfacción por 7 días.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
