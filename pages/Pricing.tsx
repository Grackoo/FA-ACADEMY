import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Inversión Transparente</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sin suscripciones ocultas. Elige cómo quieres empezar tu camino hacia la libertad financiera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Plan 1: Cimientos */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col relative overflow-hidden hover:border-slate-600 transition-colors">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-300 mb-2">Plan Cimientos</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-slate-500">/ de por vida</span>
              </div>
              <p className="text-slate-400 mt-4 text-sm">
                Perfecto para conocer la plataforma y entender si el mundo de las inversiones es para ti.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-slate-300 text-sm">Acceso a Fase 1: Fundamentos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-slate-300 text-sm">Acceso a Fase 2: Análisis Fundamental Básico</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-slate-300 text-sm">Comunidad de Discord (Solo lectura)</span>
              </li>
              <li className="flex items-start gap-3 opacity-50">
                <X className="text-slate-600 shrink-0" size={20} />
                <span className="text-slate-500 text-sm line-through">Estrategias Avanzadas (Opciones)</span>
              </li>
              <li className="flex items-start gap-3 opacity-50">
                <X className="text-slate-600 shrink-0" size={20} />
                <span className="text-slate-500 text-sm line-through">Plantillas de Excel para Gestión</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl border border-slate-600 text-white font-bold hover:bg-slate-800 transition-colors">
              Crear Cuenta Gratis
            </button>
          </div>

          {/* Plan 2: Inversor Pro */}
          <div className="bg-slate-900 rounded-3xl p-8 border-2 border-primary-500 flex flex-col relative overflow-hidden shadow-2xl shadow-primary-900/20 transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              MÁS POPULAR
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Inversor Pro (Bundle)</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">$2,490</span>
                <span className="text-xl text-slate-500 line-through decoration-red-500">$3,600</span>
                <span className="text-sm text-slate-400">MXN</span>
              </div>
              <p className="text-emerald-400 text-xs font-bold mt-2 bg-emerald-900/30 inline-block px-2 py-1 rounded">
                AHORRAS 30% - PAGO ÚNICO
              </p>
              <p className="text-slate-400 mt-4 text-sm">
                El paquete completo para dominar los mercados. Incluye todo lo necesario para gestionar un portafolio real.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-white text-sm font-medium">Todo lo del Plan Cimientos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-white text-sm">Acceso a Fases 3, 4 y 5 (Técnico, Riesgo, Experto)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-white text-sm">Plantilla Excel Profesional de Gestión</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-white text-sm">Acceso de Por Vida (Sin mensualidades)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary-500 shrink-0" size={20} />
                <span className="text-white text-sm">Soporte Prioritario por WhatsApp</span>
              </li>
            </ul>

            <a href="https://mpago.li/1GFn4gU" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20">
              Obtener Acceso Total
            </a>
            <p className="text-center text-xs text-slate-500 mt-4">Garantía de devolución de 7 días.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;