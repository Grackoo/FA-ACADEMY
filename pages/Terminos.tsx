import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

const Terminos: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Términos y Condiciones | FA Academy</title>
        <meta 
          name="description" 
          content="Términos y condiciones de uso de la plataforma educativa FA Academy. Declaración de riesgos, carácter formativo y propiedad intelectual." 
        />
        <link rel="canonical" href="https://fa-academy.vercel.app/terminos" />
        <meta property="og:title" content="Términos y Condiciones | FA Academy" />
        <meta property="og:description" content="Términos y condiciones del servicio educativo de FA Academy." />
        <meta property="og:url" content="https://fa-academy.vercel.app/terminos" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-semibold mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary-500/10 rounded-2xl border border-primary-500/20 text-primary-400">
              <FileText size={28} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-400 font-bold">Aviso Legal</span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Términos y Condiciones</h1>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-8 pb-4 border-b border-slate-800">
            Última actualización: 10 de noviembre de 2026. Vigente para todos los usuarios y suscriptores de FA Academy.
          </p>

          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                1. Naturaleza Estrictamente Educativa
              </h2>
              <p>
                FA Academy es una plataforma digital de educación financiera, investigación bursátil y entrenamiento técnico. Todo el material provisto —incluyendo lecciones interactivas, calculadoras de valuación (DCF), diarios de trading, exámenes formativos y plantillas de análisis— tiene fines <strong>exclusivamente didácticos y formativos</strong>.
              </p>
              <p className="mt-2 text-slate-400">
                Ninguna parte de este contenido debe ser interpretada como asesoría financiera personalizada, recomendación de compra o venta de valores, o gestión discrecional de inversiones bajo los términos de la Ley del Mercado de Valores en México o jurisdicciones afines.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                2. Declaración de Riesgo de Mercado
              </h2>
              <p>
                Invertir en los mercados financieros (acciones, ETFs, FIBRAS, opciones y derivados) conlleva riesgo inherente de pérdida parcial o total del capital aportado. Los rendimientos históricos mostrados en casos prácticos y ejercicios de backtesting no garantizan ni constituyen promesa de rentabilidad futura.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                3. Cuentas de Usuario y Acceso
              </h2>
              <p>
                El acceso a las fases avanzadas y certificaciones acreditadas es personal e intransferible. El usuario se compromete a salvaguardar sus credenciales de acceso y reportar cualquier uso no autorizado. FA Academy se reserva el derecho de revocar el acceso ante intentos de piratería, scraping o redistribución ilícita de contenidos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                4. Propiedad Intelectual
              </h2>
              <p>
                Las metodologías, estructuras de lecciones, algoritmos de cálculo, plantillas y marcas de FA Academy están protegidas por las leyes de propiedad intelectual y derechos de autor en México e internacionalmente. Queda prohibida su reproducción o comercialización sin autorización expresa por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                5. Jurisdicción y Contacto
              </h2>
              <p>
                Para cualquier duda o aclaración sobre estos términos, los usuarios pueden comunicarse con el equipo de soporte legal y académico mediante <a href="mailto:soporte@fa-academy.com" className="text-primary-400 underline">soporte@fa-academy.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
