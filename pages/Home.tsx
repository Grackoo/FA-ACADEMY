import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MODULES, getIcon } from '../constants';
import { Star, Clock, ArrowRight, ShieldCheck, CheckCircle, X, ChevronRight, MessageCircle, Search, TrendingDown, Sprout, Rocket, CheckCircle2, AlertCircle, AlertTriangle, TrendingUp, Coins, Info } from 'lucide-react';
import SEO from '../components/SEO';

const TradingViewHeatmap: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      // Limpiar el contenedor antes de inyectar para evitar duplicados en re-renders
      container.current.innerHTML = '';

      // 1. Crear el div del widget
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "tradingview-widget-container__widget";
      widgetDiv.style.height = "100%";
      widgetDiv.style.width = "100%";
      container.current.appendChild(widgetDiv);

      // 2. Crear el div de copyright (Requerido por TradingView para funcionar correctamente muchas veces)
      const copyrightDiv = document.createElement("div");
      copyrightDiv.className = "tradingview-widget-copyright";
      copyrightDiv.innerHTML = `<a href="https://es.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Rastree todos los mercados en TradingView</span></a>`;
      copyrightDiv.style.display = "none"; // Ocultamos el texto si prefieres limpieza, pero debe existir en el DOM
      container.current.appendChild(copyrightDiv);

      // 3. Inyectar el script
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "exchanges": [],
        "dataSource": "SPX500",
        "grouping": "sector",
        "blockSize": "market_cap_basic",
        "blockColor": "change",
        "locale": "es",
        "symbolUrl": "",
        "colorTheme": "dark",
        "hasTopBar": false,
        "isDataSetEnabled": false,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "width": "100%",
        "height": "100%"
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ width: "100%", height: "100%" }}>
      {/* El contenido se inyecta via useEffect */}
    </div>
  );
};

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
                  <div className="h-full bg-primary-600 rounded-full transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                {questions[step - 1].q}
              </h3>
              <div className="space-y-3">
                {questions[step - 1].options.map((opt, idx) => (
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

const StepCard = ({ step, index, total }: { step: any, index: number, total: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [
    <Search className="w-8 h-8" />,
    <TrendingDown className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
    <Sprout className="w-8 h-8" />,
    <Rocket className="w-8 h-8" />
  ];

  return (
    <div 
      className={`relative flex flex-col items-center group transition-all duration-500 ease-in-out ${
        index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {index !== total - 1 && (
        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent -translate-y-1/2 z-0" />
      )}

      <div className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full border-2 transition-all duration-300 ${
        isHovered 
        ? 'bg-amber-400 border-white text-slate-900 scale-110 shadow-[0_0_20px_rgba(251,191,36,0.6)]' 
        : 'bg-slate-900 border-amber-400 text-amber-400'
      }`}>
        {icons[index]}
        <div className="absolute -top-2 -right-2 bg-white text-slate-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-slate-900">
          {index + 1}
        </div>
      </div>

      <div className={`mt-6 text-center max-w-xs transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-90'}`}>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);

  // --- Financial Health Test State ---
  const [showFinancialTest, setShowFinancialTest] = useState(false);
  const [currentTestStep, setCurrentTestStep] = useState(0);
  const [testAnswers, setTestAnswers] = useState<Record<string, { value: string; score: number }>>({});
  const [isTestFinished, setIsTestFinished] = useState(false);

  const testQuestions = [
    {
      id: 'deuda',
      question: '¿Cuál es tu situación actual con las deudas?',
      options: [
        { label: 'Tengo deudas de tarjetas/préstamos que me agobian', value: 'Critica', score: 1 },
        { label: 'Tengo deudas controladas pero me quitan liquidez', value: 'Moderada', score: 2 },
        { label: 'No tengo deudas o son mínimas', value: 'Saludable', score: 3 }
      ]
    },
    {
      id: 'ahorro',
      question: '¿Tienes un fondo de emergencia (colchón de paz)?',
      options: [
        { label: 'No tengo nada ahorrado', value: 'Sin Ahorro', score: 1 },
        { label: 'Tengo ahorrado menos de un mes de gastos', value: 'Ahorro Mínimo', score: 2 },
        { label: 'Tengo 3 meses o más de gastos cubiertos', value: 'Ahorro Sólido', score: 3 }
      ]
    },
    {
      id: 'inversion',
      question: '¿Cuánto podrías destinar al mes para invertir/pagar deuda?',
      options: [
        { label: 'Menos de $1,000 MXN', value: 'Bajo', score: 1 },
        { label: 'Entre $1,000 y $5,000 MXN', value: 'Medio', score: 2 },
        { label: 'Más de $5,000 MXN', value: 'Alto', score: 3 }
      ]
    }
  ];

  const handleTestAnswer = (questionId: string, value: string, score: number) => {
    const newAnswers = { ...testAnswers, [questionId]: { value, score } };
    setTestAnswers(newAnswers);
    if (currentTestStep < testQuestions.length - 1) {
      setCurrentTestStep(currentTestStep + 1);
    } else {
      setIsTestFinished(true);
    }
  };

  const getHealthStatus = () => {
    const totalScore = Object.values(testAnswers).reduce((acc, curr) => acc + curr.score, 0);
    if (totalScore <= 4) return { color: 'bg-red-500', label: 'Estado Crítico', icon: <AlertCircle className="w-12 h-12 text-red-500" />, text: 'Es urgente detener el sangrado financiero. Prioriza liquidar deudas antes de cualquier otra cosa.' };
    if (totalScore <= 7) return { color: 'bg-yellow-500', label: 'Estado de Alerta', icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />, text: 'Vas por buen camino pero tus deudas frenan tu crecimiento. Necesitas una estrategia de optimización.' };
    return { color: 'bg-green-500', label: 'Estado Saludable', icon: <CheckCircle2 className="w-12 h-12 text-green-500" />, text: '¡Excelente! Estás listo para potenciar tus inversiones y hacer crecer tu patrimonio de forma agresiva.' };
  };

  const sendToWhatsApp = () => {
    const status = getHealthStatus();
    const message = encodeURIComponent(
      `¡Hola! 👋\n\nAcabo de realizar mi Test de Salud Financiera en FA Academy.\n\n` +
      `*Mis Resultados:*\n` +
      `- Situación de deuda: ${testAnswers.deuda?.value || ''}\n` +
      `- Fondo de ahorro: ${testAnswers.ahorro?.value || ''}\n` +
      `- Capacidad mensual: ${testAnswers.inversion?.value || ''}\n` +
      `- Mi diagnóstico: ${status.label}\n\n` +
      `*Quiero una asesoría* para trazar mi plan perfecto. ¿Podemos hablar?`
    );
    window.open(`https://wa.me/527711960057?text=${message}`, '_blank');
  };

  const methodSteps = [
    { title: 'Diagnóstico de "Sangrado" Financiero', description: 'Analizamos tus tasas de interés actuales para saber cuáles deudas te están quitando más dinero.' },
    { title: 'Estrategia de Salida Personalizada', description: 'Creamos un plan de pagos (Bola de Nieve vs. Avalancha) adaptado a tu capacidad real.' },
    { title: 'Construcción del "Colchón de Paz"', description: 'Establecemos un fondo de emergencia para que nunca más vuelvas a depender de las tarjetas.' },
    { title: 'Tu Primera Inversión', description: '¡Aquí empieza la magia! Aprendes a poner a trabajar tus primeros $100 pesos en instrumentos seguros.' },
    { title: 'Expansión y Portafolio Pro', description: 'Diversificamos en SOFIPOs, ETFs y acciones para que tu patrimonio sea imparable.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <SEO 
        title="Cursos de Inversiones y Trading | FA Academy"
        description="Domina tu capital y diseña tu futuro. Cursos certificados de finanzas personales, análisis técnico y construcción de portafolios de inversión en bolsa." 
      />

      {showQuiz && <InvestorQuizModal onClose={() => setShowQuiz(false)} />}

      {/* 1. Hero Section */}
      <section className="relative bg-transparent pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-800 text-primary-300 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Nuevas Vacantes Abiertas 2026
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
                Toma el control de tu capital y diseña <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">tu propio futuro.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Domina tu capital. Cursos de finanzas personales, Diagnostico de sangrado financiero y construcción de portafolios de inversion sólidos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  aria-label="Abrir test de inversionista y empezar gratis"
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
            {/* Visual Hero Image - Updated to TradingView Heatmap */}
            <div className="lg:col-span-6 relative h-[450px] lg:h-[500px]">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 w-full h-full z-10">
                <TradingViewHeatmap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 Sección El Camino / Metodología FA Academy */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto bg-transparent">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-400/10 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 border border-amber-400/20">
            Metodología FA Academy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
            Tu Ruta hacia la Libertad Financiera
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            No importa dónde estés hoy, lo que importa es el primer paso. Así es como transformaremos tus finanzas paso a paso.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400/50 via-amber-400/10 to-transparent md:hidden transform -translate-x-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 items-start relative">
            {methodSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} total={methodSteps.length} />
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 hover:scale-105 transition-transform duration-300">
            <button 
              onClick={() => setShowFinancialTest(true)}
              className="px-10 py-4 bg-slate-950 rounded-full font-bold text-lg flex items-center gap-3 group text-white hover:bg-slate-900 transition-colors"
            >
              Quiero trazar mi camino hoy mismo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL DEL TEST DE SALUD FINANCIERA */}
      {showFinancialTest && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => { setShowFinancialTest(false); setTestAnswers({}); setCurrentTestStep(0); setIsTestFinished(false); }}></div>
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl p-8 relative z-10 shadow-2xl overflow-hidden animate-fade-in-up">
            <button 
              onClick={() => { setShowFinancialTest(false); setTestAnswers({}); setCurrentTestStep(0); setIsTestFinished(false); }}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!isTestFinished ? (
              <div className="space-y-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">Paso {currentTestStep + 1} de {testQuestions.length}</span>
                  <div className="flex gap-2">
                    {testQuestions.map((_, idx) => (
                      <div key={idx} className={`h-1.5 w-8 rounded-full transition-all ${idx <= currentTestStep ? 'bg-amber-400' : 'bg-slate-700'}`} />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  {testQuestions[currentTestStep].question}
                </h3>

                <div className="grid gap-4">
                  {testQuestions[currentTestStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTestAnswer(testQuestions[currentTestStep].id, option.label, option.score)}
                      className="text-left p-5 rounded-2xl border border-slate-700 bg-slate-800/50 hover:border-amber-400 hover:bg-slate-800 transition-all group"
                    >
                      <span className="text-lg text-slate-200 group-hover:text-white">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 animate-fade-in-up">
                <div className="flex justify-center mb-6">
                  {getHealthStatus().icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Tu Resultado</h3>
                <div className={`inline-block px-4 py-1 rounded-full ${getHealthStatus().color} text-slate-900 font-bold mb-6`}>
                  {getHealthStatus().label}
                </div>
                <p className="text-slate-300 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  {getHealthStatus().text}
                </p>
                
                <button 
                  onClick={sendToWhatsApp}
                  className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xl rounded-2xl shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-3"
                >
                  Tengo el plan perfecto para ti
                  <ArrowRight className="w-6 h-6 border-slate-900 text-slate-900" />
                </button>
                <p className="mt-4 text-slate-500 text-sm italic">
                  Al dar clic, se enviará tu diagnóstico para agendar tu asesoría.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Roadmap Section */}
      <section className="py-20 bg-transparent">
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
      <section id="catalog" className="py-20 bg-transparent">
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
      <section className="py-16 bg-slate-900/40 text-white border-t border-slate-800">
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
      <section className="py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                No solo aprendes.<br />
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
      <section className="bg-transparent py-16 border-t border-slate-800">
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