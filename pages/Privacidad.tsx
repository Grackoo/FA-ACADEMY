import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';

const Privacidad: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Política de Privacidad | FA Academy</title>
        <meta 
          name="description" 
          content="Aviso de privacidad y protección de datos personales de FA Academy conforme a la LFPDPPP en México." 
        />
        <link rel="canonical" href="https://fa-academy.vercel.app/privacidad" />
        <meta property="og:title" content="Política de Privacidad | FA Academy" />
        <meta property="og:description" content="Aviso de privacidad y protección de datos personales de FA Academy." />
        <meta property="og:url" content="https://fa-academy.vercel.app/privacidad" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-semibold mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400">
              <ShieldCheck size={28} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Protección de Datos</span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Política de Privacidad</h1>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-8 pb-4 border-b border-slate-800">
            En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) en México.
          </p>

          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                1. Datos Recabados
              </h2>
              <p>
                FA Academy únicamente recaba los datos necesarios para brindar acceso a las lecciones, emitir constancias de acreditación y gestionar el progreso académico de los alumnos:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                <li>Nombre o nombre de usuario institucional.</li>
                <li>Correo electrónico de contacto y confirmación.</li>
                <li>Progreso de avance lección por lección y resultados de evaluaciones.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                FA Academy <strong>no almacena contraseñas bancarias, números de tarjeta de crédito ni cuentas de casas de bolsa</strong>. Toda transacción se realiza mediante pasarelas de pago seguras cifradas de extremo a extremo.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                2. Finalidad del Tratamiento
              </h2>
              <p>
                Los datos personales son tratados para:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                <li>Habilitar el reproductor de lecciones y persistencia del avance del estudiante.</li>
                <li>Calificar y certificar los exámenes de grado al concluir cada fase.</li>
                <li>Enviar actualizaciones académicas críticas y avisos sobre nuevas herramientas analíticas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                3. Derechos ARCO
              </h2>
              <p>
                Como titular de los datos personales, tienes derecho en todo momento a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tu información (Derechos ARCO). Para ejercer este derecho, envía una solicitud formal a <a href="mailto:privacidad@fa-academy.com" className="text-primary-400 underline">privacidad@fa-academy.com</a> con tu identificación y requerimiento.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                4. Seguridad y Cifrado
              </h2>
              <p>
                Implementamos estándares de seguridad SSL/TLS de 256 bits, hashing criptográfico SHA-256 para credenciales de acceso y protocolos de aislamiento de sesiones para proteger la integridad de tus datos personales.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
