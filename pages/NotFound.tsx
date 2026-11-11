import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, BookOpen, ArrowRight } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-slate-950 flex items-center justify-center px-4 py-16">
      <Helmet>
        <title>Página no encontrada (Error 404) | FA Academy</title>
        <meta name="description" content="La página que buscas no existe o ha sido reubicada en FA Academy." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800">
          Error 404
        </span>

        <h1 className="text-3xl font-display font-extrabold text-white mt-4 mb-2">
          Página no encontrada
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          La ruta solicitada no existe, ha cambiado de dirección o requiere credenciales de acceso activas.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3.5 px-6 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary-950 flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Ir a la Página Principal
          </Link>
          <Link
            to="/#catalog"
            className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-semibold text-xs transition-all border border-slate-700 flex items-center justify-center gap-2"
          >
            <BookOpen size={16} />
            Explorar Catálogo de Cursos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
