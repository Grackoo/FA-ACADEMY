import React, { useState } from 'react';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, Calculator,
  ShieldCheck, Landmark, Brain, Quote, 
  AlertTriangle, Layers, UserCheck, Newspaper,
  CheckCircle, ChevronRight, Book, Scale
} from 'lucide-react';

// --- DATOS FA ACADEMY: MERCADO MEXICANO 2026 ---

const courseData = [
  {
    id: 1,
    title: "FA Academy: Fundamentos del Mercado Mexicano",
    description: "Domina el entorno local. Estrategias, matemáticas y regulación en el México de 2026.",
    lessons: [
      {
        title: "El Perfil del Inversionista 2026",
        content: "Tu perfil no es estático; es la intersección entre tu cartera y tu mente.",
        details: "Según la AMIB, el mayor error del inversionista retail en México es saltarse este paso por 'FOMO' (miedo a quedarse fuera). Tu perfil evoluciona con la edad y tus objetivos. Para metas a corto plazo (ej. pago de impuestos SIATEC), usa deuda gubernamental. Para el retiro, la renta variable es vital. En 2025-2026, el IPC demostró que un perfil 'Agresivo' debe soportar caídas del 20% sin vender.",
        visualType: "investor_profile",
        quote: { 
            text: "Antes de invertir, debes realizar un diagnóstico de tu salud financiera. No puedes invertir dinero que vas a necesitar para pagar la renta el próximo mes. El perfil se define por la intersección entre tu capacidad financiera y tu estabilidad psicológica.", 
            author: "Guía de Educación Financiera, CONDUSEF" 
        },
        speakerNotes: "El FOMO te hace comprar cuando todo está caro. Conocer tu perfil te da la disciplina para apagar el celular cuando el mercado entra en pánico.",
        concepts: [
          { term: "AMIB", def: "Asociación Mexicana de Instituciones Bursátiles. Representa y certifica a los profesionales del mercado de valores." },
          { term: "FOMO", def: "Fear Of Missing Out. Comprar impulsivamente por miedo a perderte una ganancia que otros están teniendo." },
          { term: "Horizonte de Inversión", def: "El tiempo exacto en el que necesitarás usar el dinero invertido. Define qué tanto riesgo puedes tomar." }
        ]
      },
      {
        title: "Matemáticas: El Poder del Interés Compuesto",
        content: "El lenguaje del dinero. Protege tu capital del enemigo silencioso.",
        details: "En 2026, Banxico mantiene la inflación cerca del 3%. Si tu inversión nominal da 9%, y la inflación es 4.5%, tu riqueza real crece mucho menos. Pero aquí entra la Octava Maravilla: el Interés Compuesto. No solo ganas sobre tu capital, sino que ganas intereses sobre los intereses ya ganados. Es el motor de la riqueza generacional.",
        visualType: "financial_math",
        speakerNotes: "Entender la 'Tasa Real' te salvará de inversiones engañosas. Un pagaré bancario del 5% cuando la inflación es del 6%, te está haciendo perder dinero silenciosamente.",
        concepts: [
          { term: "Inflación (Banxico)", def: "El aumento de precios. Banxico tiene el mandato de mantenerla en un objetivo del 3% (+/- 1%)." },
          { term: "Tasa Nominal", def: "El porcentaje de ganancia que te promete el banco o la plataforma, sin descontar inflación ni impuestos." },
          { term: "Tasa Real", def: "Tu ganancia VERDADERA. Se calcula restando la inflación a tu tasa nominal." }
        ]
      },
      {
        title: "El Ecosistema: Sistema Financiero Mexicano",
        content: "Conoce a los árbitros que protegen tu capital.",
        details: "El sistema está diseñado para proteger al ahorrador, pero solo si usas instituciones autorizadas. Si una plataforma no está regulada por la CNBV o no aparece en el SIPRES, huye. Además, México cuenta con dos bolsas (BMV y BIVA), compitiendo para traer mejores opciones, incluyendo a las PYMES.",
        visualType: "mexican_system_table",
        newsSnippet: {
            title: "Boom de Inversionistas Retail",
            text: "La CNBV reporta un incremento del 15% en cuentas de inversión minoristas en el primer trimestre de 2026, impulsado por plataformas tecnológicas que facilitan el acceso a la Bolsa Mexicana de Valores desde montos mínimos de $100 pesos.",
            source: "El Economista (Sección Mercados, 2026)"
        },
        speakerNotes: "Nunca entregues tu dinero a plataformas extranjeras de dudosa procedencia o a 'gurús' en redes sociales. Usa el SIPRES, es tu escudo anti-estafas.",
        concepts: [
          { term: "SIPRES", def: "Sistema de Registro de Prestadores de Servicios Financieros (CONDUSEF). El buscador oficial para saber si una empresa es legal." },
          { term: "BIVA", def: "Bolsa Institucional de Valores. La segunda bolsa del país, impulsó la modernización y entrada de nuevas empresas al mercado." }
        ]
      }
    ]
  }
];

const quizQuestions = [
  { id: 1, question: "Según CONDUSEF, ¿qué define tu perfil de inversión?", options: ["Tu edad y tu signo zodiacal.", "La intersección entre tu capacidad financiera y tu estabilidad psicológica.", "Cuánto dinero quieres ganar en un mes.", "Tu nivel de estudios."], correct: 1 },
  { id: 2, question: "Si inviertes a una tasa del 9% y la inflación es del 4.5%, ¿qué estás calculando si ajustas esa diferencia?", options: ["La Tasa Nominal.", "La Tasa Real.", "El Interés Compuesto.", "El CAT."], correct: 1 },
  { id: 3, question: "¿Qué hace la 'Octava Maravilla' (El Interés Compuesto)?", options: ["Te cobra impuestos mensuales.", "Genera intereses solo sobre tu capital inicial.", "Genera intereses sobre los intereses ya ganados, creando una curva exponencial.", "Evita que la bolsa caiga."], correct: 2 },
  { id: 4, question: "¿Qué institución garantiza tus ahorros bancarios hasta por ~3.2 millones de pesos en México?", options: ["BANXICO", "CNBV", "IPAB", "BMV"], correct: 2 },
  { id: 5, question: "¿Qué debes hacer si una plataforma de inversión NO aparece en el SIPRES?", options: ["Invertir poco a poco.", "Evitarla completamente, es una estafa potencial.", "Pedirles su RFC.", "Confiar si tienen muchos seguidores en Instagram."], correct: 1 }
];

// --- COMPONENTES VISUALES FA ACADEMY ---

const InvestorProfile = () => (
    <div className="flex flex-col items-center mt-6 bg-slate-900 p-6 rounded-xl border border-teal-500/20 shadow-lg">
        <h4 className="text-teal-400 font-bold mb-6 text-sm tracking-widest uppercase">La Intersección del Perfil</h4>
        
        <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
            {/* Circle 1: Financial Capacity */}
            <div className="absolute left-8 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/80 bg-blue-500/10 flex items-center justify-start pl-4 md:pl-8">
                <div className="text-center">
                    <span className="block text-blue-400 font-bold text-xs md:text-sm">Capacidad<br/>Financiera</span>
                </div>
            </div>
            
            {/* Circle 2: Psychological Stability */}
            <div className="absolute right-8 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-500/80 bg-amber-500/10 flex items-center justify-end pr-4 md:pr-8">
                <div className="text-center">
                    <span className="block text-amber-400 font-bold text-xs md:text-sm">Estabilidad<br/>Psicológica</span>
                </div>
            </div>

            {/* Intersection */}
            <div className="z-10 bg-slate-800 p-3 rounded-xl border-2 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.4)] text-center animate-pulse-slow">
                <UserCheck className="mx-auto text-teal-400 mb-1" size={24}/>
                <span className="block text-white font-bold text-xs">TU PERFIL</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-slate-800/80 p-4 rounded-lg border-l-2 border-teal-500">
                <p className="text-teal-400 font-bold text-xs mb-1">Horizonte Corto (Impuestos)</p>
                <p className="text-slate-300 text-[10px]">Cetes / Deuda. Cero volatilidad. Capacidad de liquidez inmediata.</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border-l-2 border-red-500">
                <p className="text-red-400 font-bold text-xs mb-1">Horizonte Largo (Retiro)</p>
                <p className="text-slate-300 text-[10px]">Renta Variable (IPC). Soportar caídas del -20% sin pánico.</p>
            </div>
        </div>
    </div>
);

const FinancialMath = () => (
    <div className="mt-6 space-y-6">
        {/* Formulas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-600 flex flex-col items-center justify-center group hover:border-amber-500 transition-colors">
                <h5 className="text-slate-400 text-xs font-bold uppercase mb-3">Tasa Real (Inflación)</h5>
                <div className="bg-slate-900 p-3 rounded-lg text-amber-400 font-mono text-sm md:text-base tracking-widest border border-slate-700 shadow-inner">
                    r = [(1 + i) / (1 + π)] - 1
                </div>
                <div className="flex gap-4 mt-3 text-[9px] text-slate-500">
                    <span><strong className="text-white">r:</strong> Tasa Real</span>
                    <span><strong className="text-white">i:</strong> Nominal</span>
                    <span><strong className="text-white">π:</strong> Inflación</span>
                </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-600 flex flex-col items-center justify-center group hover:border-teal-500 transition-colors">
                <h5 className="text-slate-400 text-xs font-bold uppercase mb-3">Valor Futuro (Compuesto)</h5>
                <div className="bg-slate-900 p-3 rounded-lg text-teal-400 font-mono text-sm md:text-base tracking-widest border border-slate-700 shadow-inner">
                    VF = VP × (1 + i)ⁿ
                </div>
                <div className="flex gap-4 mt-3 text-[9px] text-slate-500">
                    <span><strong className="text-white">VP:</strong> Capital</span>
                    <span><strong className="text-white">n:</strong> Años</span>
                </div>
            </div>
        </div>

        {/* Growth Example */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-teal-500/30 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10"><TrendingUp size={150} /></div>
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <Calculator size={18} className="text-teal-500"/> Ejemplo FA Academy (20 Años al 10%)
            </h4>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="text-center w-full md:w-1/3">
                    <p className="text-xs text-slate-400 mb-1">Capital Inicial (VP)</p>
                    <div className="text-xl font-bold text-white bg-slate-800 py-2 rounded-lg border border-slate-700">$10,000 MXN</div>
                </div>
                
                <div className="flex flex-col gap-2 w-full md:w-2/3">
                    <div className="relative h-10 w-full bg-slate-800 rounded-lg flex items-center border border-slate-700 overflow-hidden">
                        <div className="bg-slate-600 h-full flex items-center px-3 w-[45%] text-[10px] text-white">Int. Simple: $30,000</div>
                    </div>
                    <div className="relative h-10 w-full bg-slate-800 rounded-lg flex items-center border border-teal-500/50 overflow-hidden shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                        <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-full flex items-center px-3 w-full text-[12px] font-bold text-white">Int. Compuesto: $67,275 MXN</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MexicanSystemTable = () => (
  <div className="mt-6 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
    <div className="bg-slate-800 p-3 border-b border-slate-700">
        <h4 className="text-teal-400 font-bold text-sm text-center uppercase tracking-widest">Organigrama de Seguridad</h4>
    </div>
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
            <tr className="bg-slate-900/80">
            <th className="p-4 text-slate-400 text-xs uppercase tracking-wider w-1/4">Entidad</th>
            <th className="p-4 text-slate-400 text-xs uppercase tracking-wider w-1/3">Función Principal</th>
            <th className="p-4 text-teal-400 text-xs uppercase tracking-wider">Por qué le importa al alumno</th>
            </tr>
        </thead>
        <tbody className="text-slate-200 text-sm">
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><Landmark className="text-amber-500" size={16}/> BANXICO</td>
                <td className="p-4 text-slate-300 text-xs">Controlar la inflación y política monetaria.</td>
                <td className="p-4 text-xs">Determina cuánto rinden tus Cetes y el costo de los créditos.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><Scale className="text-blue-500" size={16}/> CNBV</td>
                <td className="p-4 text-slate-300 text-xs">Supervisar intermediarios financieros.</td>
                <td className="p-4 text-xs">Asegura que tu Casa de Bolsa siga las reglas y no desaparezca con tu dinero.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><ShieldCheck className="text-green-500" size={16}/> IPAB</td>
                <td className="p-4 text-slate-300 text-xs">Seguro de depósitos bancarios.</td>
                <td className="p-4 text-xs">Protege tus ahorros en el banco hasta ~3.2 millones de pesos (400 mil UDIs).</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors bg-slate-800/20">
                <td className="p-4 font-bold flex items-center gap-2"><Activity className="text-teal-500" size={16}/> BMV / BIVA</td>
                <td className="p-4 text-slate-300 text-xs">Mercados de intercambio.</td>
                <td className="p-4 text-xs">Son los "supermercados" donde compras las acciones de las empresas.</td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
);

const QuoteCard = ({ quote }) => (
    <div className="my-6 relative p-6 bg-slate-800/80 rounded-xl border-l-4 border-amber-500 shadow-lg">
        <Quote size={24} className="text-amber-500/30 absolute top-4 left-4" />
        <p className="text-sm md:text-base text-slate-300 font-serif italic relative z-10 pl-6 pr-2 leading-relaxed">"{quote.text}"</p>
        <p className="text-[10px] text-amber-500 mt-3 font-bold uppercase tracking-widest pl-6">— {quote.author}</p>
    </div>
);

const NewsSnippet = ({ news }) => (
    <div className="my-6 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl">
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
            <Newspaper size={16} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{news.source}</span>
        </div>
        <div className="p-5">
            <h4 className="text-lg font-bold text-white mb-2">{news.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">"{news.text}"</p>
        </div>
    </div>
);

const ConceptsBar = ({ concepts }) => {
  const [activeConcept, setActiveConcept] = useState(null);
  if (!concepts || concepts.length === 0) return null;
  return (
    <div className="mt-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
      <h4 className="text-teal-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Diccionario FA Academy</h4>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept, idx) => (
          <div key={idx} className="relative group">
            <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-teal-600 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
            {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-teal-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-teal-500 transform rotate-45"></div><h5 className="text-teal-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL APP FA ACADEMY ---

export default function AppFAAcademy() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const moduleData = courseData[0];
  const lessonData = moduleData.lessons[currentLesson];

  const handleNext = () => {
    if (currentLesson < moduleData.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) setCurrentLesson(currentLesson - 1);
  };

  const handleQuizAnswer = (qId, optionIdx) => {
    setQuizAnswers({ ...quizAnswers, [qId]: optionIdx });
  };

  const submitQuiz = () => {
    let calculatedScore = 0;
    quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correct) calculatedScore++; });
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `🎓 *Resultados FA Academy* 🎓%0A%0A`;
    message += `Calificación Final: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
    message += `He completado el módulo de Fundamentos del Mercado Mexicano.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type) => {
    switch(type) {
      case 'investor_profile': return <InvestorProfile />;
      case 'financial_math': return <FinancialMath />;
      case 'mexican_system_table': return <MexicanSystemTable />;
      default: return null;
    }
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <div className="max-w-2xl w-full animate-fade-in">
          <h1 className="text-3xl font-bold text-teal-400 mb-2 text-center">Examen FA Academy</h1>
          <p className="text-slate-400 text-center mb-8">Demuestra tu dominio del mercado local.</p>
          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                  <p className="font-bold text-lg mb-4 text-white"><span className="text-teal-500 mr-2">#{index + 1}</span> {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-teal-600 border-teal-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Terminar Evaluación</button></div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-10">
              <div className="bg-slate-800 p-8 rounded-2xl border border-teal-500/50 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(20,184,166,0.2)]">
                <Target className="w-24 h-24 text-teal-400 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-white">¡Módulo Completado!</h2>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 my-6">{score} / {quizQuestions.length}</div>
                <p className="text-slate-400 text-sm">Estás listo para operar en el sistema financiero de México.</p>
              </div>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados FA Academy</a>
              <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-teal-400 text-sm underline">Reiniciar Módulo</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 p-2 rounded-lg"><Landmark className="text-slate-900" size={20} strokeWidth={2.5}/></div>
            <div>
                <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
                <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest hidden md:block">Edición 2026</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}</div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out" style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}></div></div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2"><span className="bg-teal-500/10 text-teal-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-teal-500/20">{moduleData.title}</span></div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Layers size={120} className="text-slate-500" /></div>
          {renderVisual(lessonData.visualType)}
        </div>
        
        <div className="space-y-6 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-teal-500 shadow-lg"><p className="text-lg md:text-xl text-teal-100 font-medium leading-relaxed">{lessonData.content}</p></div>
          
          <div className="flex gap-4 items-start">
              <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300"/></div>
              <div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p>
                  <p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-teal-500 font-bold not-italic">💡 Tip FA Academy:</span>{lessonData.speakerNotes}</p>
              </div>
          </div>

          {/* Render Contextual Blocks if they exist in the lesson data */}
          {lessonData.quote && <QuoteCard quote={lessonData.quote} />}
          {lessonData.newsSnippet && <NewsSnippet news={lessonData.newsSnippet} />}
          
          <ConceptsBar concepts={lessonData.concepts} />
        </div>
      </main>

      <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
          <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-teal-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
          <button onClick={handleNext} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95"><span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Examen Final' : 'Siguiente'}</span><span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
        </div>
      </footer>
      
      <style>{`
        @keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}
        @keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}
        .animate-fade-in {animation: fade-in 0.5s ease-out forwards;}
        .animate-fade-in-up {animation: fade-in-up 0.2s ease-out forwards;}
        .animate-pulse-slow {animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;}
      `}</style>
    </div>
  );
}