import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MODULES, getIcon } from '../constants';
import { Star, Clock, ArrowRight, ShieldCheck, CheckCircle, X, ChevronRight, MessageCircle } from 'lucide-react';

const InvestorQuizModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: "¿Cuánto tiempo planeas mantener tu dinero invertido?",
      options: [
        { text: "Menos de 1 año", points: 1 },
        { text: "1 a 3 años", points: 2 },
        { text: "Más de 5 años", points: 3 }
      ]
    },
    {
      q: "¿Qué harías si tu inversión cae un 20% en un día?",
      options: [
        { text: "Vender todo inmediatamente", points: 1 },
        { text: "Esperar a que se recupere", points: 2 },
        { text: "Comprar más (aprovechar la oferta)", points: 3 }
      ]
    },
    {
      q: "¿Cuál es tu conocimiento actual sobre finanzas?",
      options: [
        { text: "Soy principiante absoluto", points: 1 },
        { text: "Conozco lo básico", points: 2 },
        { text: "Tengo experiencia operando", points: 3 }
      ]
    }
  ];

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(4); // Result step
    }
  };

  const getResult = () => {
    if (score <= 4) return "Conservador";
    if (score <= 7) return "Moderado";
    return "Agresivo";
  };

  const resultType = getResult();
  const whatsappUrl = `https://wa.me/527711960057?text=Hola,%20hice%20el%20test%20en%20FA%20Academy%20y%20mi%20perfil%20es%20*${resultType}*.%20Me%20interesa%20empezar%20gratis.`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up text-white">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X size={24} />
        </button>
        
        <div className="p-8">
          {step <= questions.length ? (
            <>
              <div className="flex items-center justify-between mb-6">
                 <span className="text-xs font-bold text-primary-400 tracking-wider">PASO {step} DE 3</span>
                 <div className="h-2 w-24 bg-slate-800 rounded-full">
                    <div className="h-full bg-primary-600 rounded-full transition-all duration-300" style={{ width: `${(step/3)*100}%` }}></div>
                 </div>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                {questions[step-1].q}
              </h3>
              <div className="space-y-3">
                {questions[step-1].options.map((opt, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAnswer(opt.points)}
                    className="w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-800 hover:border-primary-500 hover:bg-slate-700 transition-all flex justify-between items-center group"
                  >
                    <span className="font-medium text-slate-200 group-hover:text-primary-400">{opt.text}</span>
                    <ChevronRight size={18} className="text-slate-500 group-hover:text-primary-400" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
               <div className="w-16 h-16 bg-emerald-900/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                 <ShieldCheck size={32} />
               </div>
               <h3 className="text-2xl font-display font-bold text-white mb-2">¡Perfil Identificado!</h3>
               <p className="text-slate-400 mb-6">Basado en tus respuestas, tu perfil de inversor es:</p>
               <div className="bg-slate-800 py-3 px-6 rounded-lg inline-block mb-8 border border-slate-700">
                 <span className="text-2xl font-bold text-primary-400">{resultType}</span>
               </div>
               <p className="text-sm text-slate-500 mb-6">
                 Hemos preparado una estrategia inicial para ti. Contáctanos para recibirla.
               </p>
               <a 
                 href={whatsappUrl}
                 target="_blank"
                 rel="noreferrer"
                 className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-900/50"
               >
                 <MessageCircle size={20} />
                 Recibir Plan en WhatsApp
               </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {showQuiz && <InvestorQuizModal onClose={() => setShowQuiz(false)} />}

      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-800 text-primary-300 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Nueva Cohorte 2024 Abierta
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
                Domina tu futuro financiero, desde el primer peso hasta tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">primer portafolio</span>.
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Deja de adivinar y empieza a invertir con estrategia. Una academia diseñada para llevarte de cero a experto en los mercados financieros globales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold shadow-[0_0_25px_rgba(13,148,136,0.3)] transition-all transform hover:-translate-y-1"
                >
                  Empieza Gratis
                </button>
                <button 
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border border-slate-600 text-white hover:bg-slate-800 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Ver Catálogo
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            {/* Visual Hero Image - Updated to Chart */}
            <div className="lg:col-span-6 relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
                 <img 
                    src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800" 
                    alt="Stock Market Graph Analysis" 
                    className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
                 />
                 {/* Floating UI Elements Mockup */}
                 <div className="absolute bottom-6 left-6 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-lg shadow-xl max-w-xs animate-fade-in-up">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-900/50 text-emerald-400 rounded-full">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-semibold">Portafolio Protegido</p>
                            <p className="text-sm font-bold text-white">+12.4% Rendimiento Anual</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Roadmap Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Tu Roadmap de Aprendizaje</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">No es solo teoría, es un camino estructurado para convertirte en un inversor autónomo.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {MODULES.map((module) => (
                <div key={module.id} className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-primary-500/50 transition-all relative group hover:-translate-y-1">
                  <div className={`w-12 h-12 ${module.color} rounded-xl text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {getIcon(module.icon)}
                  </div>
                  <h3 className="font-bold text-white mb-2">Fase {module.phase}</h3>
                  <p className="text-sm font-semibold text-primary-400 mb-2">{module.title}</p>
                  <p className="text-xs text-slate-400 line-clamp-3">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses Cards */}
      <section id="catalog" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-2">Catálogo de Cursos</h2>
                <p className="text-slate-400">Material de estudio profundo y accionable.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MODULES.map((module) => (
                <Link to={`/academy/${module.id}`} key={module.id} className="group flex flex-col bg-slate-800 rounded-2xl border border-slate-700 shadow-lg overflow-hidden hover:shadow-2xl hover:border-primary-500/50 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={module.image} alt={module.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-slate-700">
                      {module.level}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {module.duration}
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        {module.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">
                      {module.description}
                    </p>
                    <div className="w-full py-3 bg-slate-700 text-white text-center rounded-lg font-semibold text-sm group-hover:bg-primary-600 transition-colors">
                      Comenzar Módulo
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Social Proof */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl font-display font-semibold mb-12 opacity-90">Datos y análisis respaldados por líderes de la industria</h2>
           
           {/* Logos */}
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 mb-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-bold font-sans">Bloomberg</span>
              <span className="text-2xl font-bold font-serif">Morningstar</span>
              <span className="text-2xl font-bold font-mono">TradingView</span>
              <span className="text-2xl font-bold tracking-tighter">YAHOO! Finance</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-800 pt-12">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-slate-400">Alumnos Activos</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-400 mb-2">20+</div>
                <div className="text-slate-400">Módulos Especializados</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-400 mb-2">$2M+</div>
                <div className="text-slate-400">Capital Simulado Gestionado</div>
              </div>
           </div>

           <div className="mt-16 max-w-3xl mx-auto">
             <blockquote className="text-xl font-medium italic text-slate-300">
               "FA Academy transformó mi manera de ver el dinero. Pasé de tener mis ahorros debajo del colchón a gestionar una cartera diversificada en solo 3 meses."
             </blockquote>
             <div className="mt-6 flex items-center justify-center gap-3">
               <div className="w-10 h-10 bg-slate-700 rounded-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="User" />
               </div>
               <div className="text-left">
                 <div className="font-bold text-white text-sm">Carlos M.</div>
                 <div className="text-xs text-slate-500">Inversor Junior</div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Dashboard Preview (The Product) */}
      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:flex items-center gap-16">
             <div className="lg:w-1/2 mb-12 lg:mb-0">
               <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                 No solo aprendes.<br/>
                 <span className="text-primary-400">Practicas con herramientas reales.</span>
               </h2>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3">
                   <CheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                   <span className="text-slate-300">Simulador de portafolio en tiempo real.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                   <span className="text-slate-300">Calculadora de interés compuesto avanzada.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                   <span className="text-slate-300">Análisis técnico integrado.</span>
                 </li>
               </ul>
               <Link to="/tools" className="text-primary-400 font-bold border-b-2 border-primary-500 pb-1 hover:text-primary-300 transition-colors">
                 Explorar las herramientas
               </Link>
             </div>
             
             {/* Mockup */}
             <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 to-purple-900 blur-3xl opacity-20 transform rotate-6 scale-90"></div>
               <div className="relative bg-slate-900 rounded-xl shadow-2xl border border-slate-700 p-2 overflow-hidden transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-800 rounded-t-lg h-6 flex items-center px-3 gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-slate-900 p-4">
                     {/* Abstract UI representation */}
                     <div className="flex justify-between mb-6">
                       <div className="h-8 w-32 bg-slate-800 rounded animate-pulse"></div>
                       <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
                     </div>
                     <div className="grid grid-cols-3 gap-4 mb-6">
                       <div className="h-24 bg-slate-800 rounded border border-slate-700"></div>
                       <div className="h-24 bg-slate-800 rounded border border-slate-700"></div>
                       <div className="h-24 bg-slate-800 rounded border border-slate-700"></div>
                     </div>
                     <div className="h-48 bg-slate-800 rounded border border-slate-700 flex items-end justify-between p-4 px-8 relative overflow-hidden">
                        {/* Fake bars */}
                        <div className="w-4 bg-emerald-500 h-[30%] rounded-t opacity-80"></div>
                        <div className="w-4 bg-emerald-500 h-[50%] rounded-t opacity-80"></div>
                        <div className="w-4 bg-emerald-500 h-[40%] rounded-t opacity-80"></div>
                        <div className="w-4 bg-emerald-500 h-[70%] rounded-t opacity-80"></div>
                        <div className="w-4 bg-emerald-500 h-[60%] rounded-t opacity-80"></div>
                        <div className="w-4 bg-emerald-500 h-[85%] rounded-t opacity-80"></div>
                        <div className="w-4 bg-emerald-400 h-[90%] rounded-t shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"></div>
                     </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 6. Lead Magnet / Newsletter */}
      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-900/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary-800 relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-600 rounded-full opacity-10"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary-600 rounded-full opacity-10"></div>

             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
               ¿No estás listo para el curso completo?
             </h2>
             <p className="text-primary-200 mb-8 max-w-xl mx-auto relative z-10">
               Descarga nuestra <span className="text-white font-bold">"Guía rápida para tu primera inversión"</span>. Un PDF de 15 páginas con los pasos exactos para abrir tu cuenta y comprar tu primera acción sin miedo.
             </p>
             
             <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Tu correo electrónico principal" 
                 className="flex-1 px-5 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder-slate-500"
               />
               <button className="px-6 py-3 bg-white text-primary-900 font-bold rounded-lg hover:bg-slate-200 transition-colors shadow-lg">
                 Quiero la Guía
               </button>
             </form>
             <p className="text-primary-300 text-xs mt-4">Libre de spam. Date de baja cuando quieras.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;