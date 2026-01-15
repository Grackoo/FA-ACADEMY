import React, { useState } from 'react';
import {
    ArrowRight, ArrowLeft, TrendingUp, TrendingDown, Activity,
    Target, Send, Info, BookOpen, PieChart,
    Shield, Anchor, Percent, RefreshCw, Briefcase,
    Wallet, Globe, BarChart, Lock, Sliders, DollarSign,
    Layers, AlertTriangle, CheckCircle, Brain
} from 'lucide-react';

// --- DATOS FASE 4: PORTFOLIO MANAGEMENT & WEALTH STRATEGY ---

const courseData = [
    {
        id: 1,
        title: "Módulo 4: Maestría de Portafolio",
        description: "No busques la aguja en el pajar, compra el pajar entero. Aprende a gestionar el riesgo sistémico.",
        lessons: [
            {
                title: "Arquitectura de Portafolios (Asset Allocation)",
                content: "El 90% de tus rendimientos a largo plazo dependen de tu mezcla de activos, no de qué acciones individuales eliges.",
                details: "No pongas todos los huevos en la misma canasta. Un portafolio profesional equilibra activos 'Ofensivos' (Acciones, Crypto, REITs) con activos 'Defensivos' (Bonos, Oro, Efectivo). La clave es la 'Descorrelación': tener cosas que suban cuando otras bajan.",
                visualType: "asset_allocation_pie",
                speakerNotes: "El error novato es tener 10 acciones tecnológicas y creer que estás diversificado. Si el sector tecnológico cae, todo tu portafolio cae. Necesitas activos que se comporten diferente.",
                concepts: [
                    { term: "Asset Allocation", def: "La estrategia de dividir tu dinero entre diferentes clases de activos (Renta Variable, Renta Fija, Bienes Raíces) según tu perfil." },
                    { term: "Correlación", def: "Medida de cómo se mueven dos activos entre sí. +1 se mueven igual, -1 se mueven opuesto. Buscamos correlación baja o negativa." },
                    { term: "Core-Satellite", def: "Estrategia donde el núcleo (80%) son ETFs indexados seguros y los satélites (20%) son apuestas individuales de alto riesgo." },
                    { term: "Rebalanceo", def: "El acto de vender lo que subió mucho y comprar lo que bajó para volver a tu mezcla original. Obliga a 'vender caro y comprar barato'." }
                ]
            },
            {
                title: "FIBRAs y Bienes Raíces (REITs)",
                content: "Ser dueño de rascacielos y centros comerciales con poco dinero.",
                details: "No necesitas millones para invertir en inmuebles. Las FIBRAs (Fideicomisos de Infraestructura y Bienes Raíces) te permiten cobrar 'rentas' periódicas de propiedades comerciales, industriales y hoteleras. Son un híbrido entre acción y bono: pagan dividendos altos y protegen contra la inflación.",
                visualType: "reit_structure",
                speakerNotes: "Las FIBRAs son excelentes para generar flujo de efectivo (Cashflow). A diferencia de una casa física, no tienes que perseguir inquilinos ni arreglar tuberías.",
                concepts: [
                    { term: "Dividend Yield", def: "En FIBRAs, suele ser alto (6-10%). Es la renta anual que recibes dividida por el precio del título." },
                    { term: "AFFO", def: "Adjusted Funds From Operations. La métrica real de ganancias para FIBRAs (el 'Net Income' contable no sirve aquí por la depreciación)." },
                    { term: "NAV (Net Asset Value)", def: "El valor real de todas las propiedades menos la deuda. Si el precio de mercado es menor al NAV, compras con descuento." }
                ]
            },
            {
                title: "Estrategias de Cobertura (Hedging)",
                content: "El seguro contra catástrofes: Cómo sobrevivir a un mercado bajista (Bear Market).",
                details: "Los mercados caen, es un hecho. Un inversor avanzado no entra en pánico, tiene 'Hedges' (coberturas). Esto incluye tener Oro (reserva de valor), Bonos del Tesoro (refugio seguro) o incluso ETFs Inversos (ganan cuando la bolsa cae) en pequeñas proporciones.",
                visualType: "hedging_shield",
                speakerNotes: "No se trata de apostar a que el mundo se acabe, sino de tener un paracaídas. Si tu portafolio de acciones cae 20%, tu cobertura de Oro/Bonos podría subir y suavizar el golpe.",
                concepts: [
                    { term: "Oro", def: "Activo refugio histórico. No produce flujo de caja, pero mantiene poder adquisitivo en crisis extremas o alta inflación." },
                    { term: "ETF Inverso", def: "Un fondo diseñado para subir cuando el índice baja (ej. SH sube si el S&P500 baja). Solo para corto plazo." },
                    { term: "VIX", def: "Índice del Miedo. Mide la volatilidad esperada. Suele dispararse cuando hay pánico en el mercado." }
                ]
            },
            {
                title: "La Regla del 4% y Libertad Financiera",
                content: "¿Cuánto dinero necesito para no trabajar nunca más?",
                details: "El número mágico. Estudios históricos (Trinity Study) sugieren que si tienes un portafolio diversificado, puedes retirar el 4% anual ajustado a la inflación sin que el dinero se te acabe en 30 años. Tu meta es llegar a un monto donde el 4% cubra tus gastos anuales.",
                visualType: "fire_calculator",
                speakerNotes: "Ejemplo: Si gastas $20,000 al mes ($240k al año), necesitas $6 millones invertidos (240k / 0.04). Ese es tu 'Número de Libertad'.",
                concepts: [
                    { term: "FIRE", def: "Financial Independence, Retire Early. Movimiento que busca maximizar el ahorro para retirarse joven." },
                    { term: "Tasa de Retiro Seguro", def: "El porcentaje máximo que puedes sacar de tu portafolio anualmente sin riesgo de quedarte en cero." },
                    { term: "Secuencia de Retornos", def: "El riesgo de que el mercado caiga justo cuando te retiras. Afecta drásticamente la duración de tu dinero." }
                ]
            },
            {
                title: "Psicología de la Riqueza (Wealth Mindset)",
                content: "Ganar dinero requiere riesgo; mantenerlo requiere humildad.",
                details: "Hacerse rico y mantenerse rico son habilidades diferentes. La primera requiere optimismo y toma de riesgos. La segunda requiere paranoia y diversificación. El interés compuesto solo funciona si nunca interrumpes el proceso innecesariamente.",
                visualType: "wealth_mindset",
                speakerNotes: "La mayor amenaza para tu portafolio no es el mercado, eres tú vendiendo en el peor momento o gastando de más. La disciplina vence a la inteligencia.",
                concepts: [
                    { term: "Interés Compuesto", def: "La octava maravilla. Ganancias sobre ganancias. Requiere TIEMPO y NO INTERRUPCIÓN." },
                    { term: "Lifestyle Creep", def: "Inflación de estilo de vida. Gastar más solo porque ganas más, lo que te impide construir riqueza real." },
                    { term: "Largo Plazo", def: "En inversiones, hablamos de décadas, no de meses. El tiempo en el mercado supera al 'timing' del mercado." }
                ]
            }
        ]
    }
];

const quizQuestions = [
    { id: 1, question: "¿Cuál es el objetivo principal del Asset Allocation?", options: ["Ganar el máximo dinero posible en un mes.", "Equilibrar riesgo y retorno diversificando en clases de activos.", "Comprar solo acciones tecnológicas.", "Evitar pagar impuestos."], correct: 1 },
    { id: 2, question: "¿Qué es el Rebalanceo de portafolio?", options: ["Vender todo cuando hay pánico.", "Ajustar los porcentajes de tus activos vendiendo lo que subió y comprando lo que bajó.", "Meter más dinero a la acción que más ha subido.", "Cambiar de bróker."], correct: 1 },
    { id: 3, question: "Según la Regla del 4%, si gastas $400,000 al año, ¿cuánto necesitas invertido?", options: ["$1 millón.", "$4 millones.", "$10 millones.", "$40 millones."], correct: 2 },
    { id: 4, question: "¿Para qué sirve invertir en FIBRAs?", options: ["Para especular con criptomonedas.", "Para obtener rentas periódicas de bienes raíces sin comprar propiedades físicas.", "Para no tener riesgo.", "Para comprar oro."], correct: 1 },
    { id: 5, question: "¿Qué es un activo 'Defensivo'?", options: ["Bitcoin.", "Acciones de Tesla.", "Bonos del Tesoro u Oro.", "Opciones binarias."], correct: 2 },
    { id: 6, question: "¿Cuál es el riesgo de secuencia de retornos?", options: ["Que el mercado caiga justo al inicio de tu retiro.", "Que los bancos cierren.", "Que se te olvide tu contraseña.", "Que ganes demasiado dinero."], correct: 0 }
];

// --- COMPONENTES VISUALES FASE 4 (ROBUSTOS) ---

const AssetAllocationPie = () => (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8 mt-6 bg-slate-800/50 p-6 rounded-2xl border border-emerald-900/50">
        <div className="relative w-48 h-48 md:w-56 md:h-56">
            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0f172a" strokeWidth="20" />
                {/* Renta Variable (Stocks) - 50% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="125.6 251.2" strokeDashoffset="0" className="hover:opacity-80 transition-opacity cursor-pointer" />
                {/* Renta Fija (Bonds) - 30% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="75.36 251.2" strokeDashoffset="-125.6" className="hover:opacity-80 transition-opacity cursor-pointer" />
                {/* Bienes Raíces (FIBRAs) - 10% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="25.12 251.2" strokeDashoffset="-200.96" className="hover:opacity-80 transition-opacity cursor-pointer" />
                {/* Alternativos/Oro - 10% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="25.12 251.2" strokeDashoffset="-226.08" className="hover:opacity-80 transition-opacity cursor-pointer" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] text-slate-400">Total</span>
            </div>
        </div>

        <div className="space-y-3 w-full md:w-auto">
            <h4 className="font-bold text-white text-sm mb-2 border-b border-slate-700 pb-2">El Modelo "All Weather"</h4>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div><span className="text-xs text-slate-300">Acciones (Crecimiento)</span></div>
                <span className="text-xs font-bold text-emerald-400">50%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded-full"></div><span className="text-xs text-slate-300">Bonos (Estabilidad)</span></div>
                <span className="text-xs font-bold text-amber-400">30%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="text-xs text-slate-300">FIBRAs (Rentas)</span></div>
                <span className="text-xs font-bold text-blue-400">10%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-violet-500 rounded-full"></div><span className="text-xs text-slate-300">Oro/Crypto (Hedge)</span></div>
                <span className="text-xs font-bold text-violet-400">10%</span>
            </div>
        </div>
    </div>
);

const ReitStructure = () => (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-slate-800 p-4 rounded-xl border border-blue-500/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="bg-blue-900/50 p-3 rounded-full mb-3"><Briefcase className="text-blue-400" size={24} /></div>
            <h5 className="font-bold text-white text-sm">Industrial</h5>
            <p className="text-[10px] text-slate-400 mt-1">Naves industriales, bodegas logísticas (Amazon, DHL). Rentas muy estables.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-slate-800 p-4 rounded-xl border border-amber-500/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="bg-amber-900/50 p-3 rounded-full mb-3"><Globe className="text-amber-400" size={24} /></div>
            <h5 className="font-bold text-white text-sm">Comercial</h5>
            <p className="text-[10px] text-slate-400 mt-1">Plazas comerciales, cines. Sufren en crisis pero pagan altos dividendos.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-slate-800 p-4 rounded-xl border border-emerald-500/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="bg-emerald-900/50 p-3 rounded-full mb-3"><Target className="text-emerald-400" size={24} /></div>
            <h5 className="font-bold text-white text-sm">Hotelero</h5>
            <p className="text-[10px] text-slate-400 mt-1">Hoteles de negocios y turismo. Muy cíclicos (dependen de la economía).</p>
        </div>

        <div className="col-span-1 md:col-span-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700 flex items-center justify-center gap-2 mt-2">
            <RefreshCw className="text-emerald-500 animate-spin-slow" size={16} />
            <span className="text-xs text-emerald-400 font-bold">¡Reinversión de Dividendos = Bola de Nieve! ❄️</span>
        </div>
    </div>
);

const HedgingShield = () => (
    <div className="flex flex-col items-center mt-6">
        <div className="relative w-48 h-48 flex items-center justify-center">
            <Shield className="w-full h-full text-slate-800 drop-shadow-2xl" strokeWidth={1} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
                <Shield className="w-24 h-24 text-emerald-600/20 absolute animate-pulse" />
                <Anchor className="text-amber-400 mb-2 z-10" size={32} />
                <h4 className="text-white font-bold text-sm z-10">Portafolio Blindado</h4>
                <div className="flex gap-2 mt-2 z-10">
                    <span className="text-[9px] bg-slate-900 px-2 py-1 rounded text-amber-200 border border-amber-500/30">Oro</span>
                    <span className="text-[9px] bg-slate-900 px-2 py-1 rounded text-blue-200 border border-blue-500/30">Bonos</span>
                    <span className="text-[9px] bg-slate-900 px-2 py-1 rounded text-slate-200 border border-slate-500/30">Cash</span>
                </div>
            </div>
        </div>
        <p className="text-center text-xs text-slate-400 max-w-sm mt-4">
            "En tiempos de paz (Mercado Alcista), los guerreros (Acciones) ganan territorio. <br />
            En tiempos de guerra (Crisis), las murallas (Bonos/Oro) evitan que pierdas el reino."
        </p>
    </div>
);

const FireCalculator = () => (
    <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/30 mt-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
            <Wallet className="text-emerald-400" size={20} />
            <h4 className="font-bold text-white text-sm">Calculadora FIRE (Regla del 4%)</h4>
        </div>

        <div className="grid grid-cols-2 gap-8 text-center">
            <div>
                <p className="text-xs text-slate-400 mb-1">Gasto Mensual Deseado</p>
                <div className="text-2xl font-bold text-white">$20,000</div>
                <p className="text-[9px] text-slate-500">($240k anuales)</p>
            </div>
            <div className="flex flex-col justify-center">
                <ArrowRight className="mx-auto text-emerald-500 rotate-90 md:rotate-0" />
            </div>
        </div>

        <div className="mt-6 bg-slate-900 p-4 rounded-xl border border-emerald-500/50 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <p className="text-xs text-emerald-300 font-bold uppercase tracking-widest mb-1 relative z-10">Tu Número de Libertad</p>
            <div className="text-3xl md:text-4xl font-black text-white relative z-10">$6,000,000</div>
            <p className="text-[10px] text-slate-400 mt-2 relative z-10">Si juntas esto, el 4% te paga tus gastos de por vida.</p>
        </div>

        <div className="mt-4 flex gap-2 justify-center">
            <span className="text-[9px] bg-slate-700 text-slate-300 px-2 py-1 rounded">25x tus gastos anuales</span>
        </div>
    </div>
);

const WealthMindset = () => (
    <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-start gap-4 bg-slate-800 p-4 rounded-xl border-l-4 border-amber-500">
            <div className="bg-amber-900/30 p-2 rounded-lg"><Brain className="text-amber-400" size={20} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">El Ego es el Enemigo</h5>
                <p className="text-xs text-slate-400 mt-1">Cuando ganas dinero, crees que eres un genio. Ese es el momento más peligroso. Mantén la humildad y no te apalanques.</p>
            </div>
        </div>
        <div className="flex items-start gap-4 bg-slate-800 p-4 rounded-xl border-l-4 border-emerald-500">
            <div className="bg-emerald-900/30 p-2 rounded-lg"><Activity className="text-emerald-400" size={20} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Aburrimiento = Éxito</h5>
                <p className="text-xs text-slate-400 mt-1">La buena inversión debe ser aburrida, como ver secarse la pintura. Si quieres emoción, ve al casino, no a la bolsa.</p>
            </div>
        </div>
        <div className="flex items-start gap-4 bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500">
            <div className="bg-blue-900/30 p-2 rounded-lg"><Lock className="text-blue-400" size={20} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Protección ante todo</h5>
                <p className="text-xs text-slate-400 mt-1">No arriesgues lo que necesitas y tienes, por lo que no necesitas y no tienes. Prioriza no perder capital.</p>
            </div>
        </div>
    </div>
);

const ConceptsBar = ({ concepts }: { concepts: any[] }) => {
    const [activeConcept, setActiveConcept] = useState<number | null>(null);
    if (!concepts || concepts.length === 0) return null;
    return (
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-emerald-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Conceptos Maestros</h4>
            <div className="flex flex-wrap gap-2">
                {concepts.map((concept, idx) => (
                    <div key={idx} className="relative group">
                        <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
                        {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-emerald-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-emerald-500 transform rotate-45"></div><h5 className="text-emerald-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL APP FASE 4 ---

export default function CoursePlayerPhase4() {
    const [currentLesson, setCurrentLesson] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<any>({});
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

    const handleQuizAnswer = (qId: number, optionIdx: number) => {
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
        let message = `💎 *Resultados FASE 4 (Maestría)* 💎%0A%0A`;
        message += `Calificación: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    const renderVisual = (type: string) => {
        switch (type) {
            case 'asset_allocation_pie': return <AssetAllocationPie />;
            case 'reit_structure': return <ReitStructure />;
            case 'hedging_shield': return <HedgingShield />;
            case 'fire_calculator': return <FireCalculator />;
            case 'wealth_mindset': return <WealthMindset />;
            default: return null;
        }
    };

    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <div className="max-w-2xl w-full animate-fade-in">
                    <h1 className="text-3xl font-bold text-emerald-400 mb-2 text-center">Examen Final Fase 4</h1>
                    <p className="text-slate-400 text-center mb-8">Maestría de Portafolio</p>
                    {!quizSubmitted ? (
                        <div className="space-y-6">
                            {quizQuestions.map((q, index) => (
                                <div key={q.id} className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
                                    <p className="font-bold text-lg mb-4 text-white"><span className="text-emerald-500 mr-2">#{index + 1}</span> {q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt, i) => (
                                            <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-emerald-700 border-emerald-500 text-white font-bold' : 'bg-slate-800/50 border-transparent hover:bg-slate-800 text-slate-300'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50 shadow-[0_0_20px_rgba(16,185,129,0.3)]">Terminar Maestría</button></div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-10">
                            <div className="bg-slate-900 p-8 rounded-2xl border border-emerald-500/50 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                                <Target className="w-24 h-24 text-emerald-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-bold text-white">¡Has Completado el Curso!</h2>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 my-6">{score} / {quizQuestions.length}</div>
                                <p className="text-slate-400 text-sm">Ahora tienes las herramientas para construir tu libertad.</p>
                            </div>
                            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Compartir Logro</a>
                            <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-emerald-400 text-sm underline">Reiniciar Fase 4</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex flex-col">
            <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-emerald-500/10 p-2 rounded-lg"><Layers className="text-emerald-400" size={20} /></div>
                        <div><span className="font-bold text-white tracking-wider text-sm md:text-base block">MERCADOS<span className="text-emerald-400">401</span></span><span className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">Fase 4: Maestría</span></div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-500 ease-out" style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}></div></div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2"><span className="bg-emerald-500/10 text-emerald-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-emerald-500/20">{moduleData.title}</span></div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Sliders size={120} className="text-slate-500" /></div>
                    {renderVisual(lessonData.visualType)}
                </div>
                <div className="space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border-l-4 border-emerald-500 shadow-lg"><p className="text-lg md:text-xl text-emerald-100 font-medium leading-relaxed">{lessonData.content}</p></div>
                    <div className="flex gap-4 items-start"><div className="bg-slate-800 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300" /></div><div><p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p><p className="mt-4 text-slate-400 text-sm italic bg-slate-900/50 p-3 rounded-lg border border-slate-700 flex gap-2"><span className="text-emerald-500 font-bold not-italic">💡 Pro Tip:</span>{lessonData.speakerNotes}</p></div></div>
                    <ConceptsBar concepts={lessonData.concepts} />
                </div>
            </main>

            <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
                    <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-emerald-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
                    <button onClick={handleNext} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"><span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Examen Final' : 'Siguiente'}</span><span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
                </div>
            </footer>
            <style>{`@keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}@keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}.animate-spin-slow {animation: spin 8s linear infinite;}@keyframes spin {from { transform: rotate(0deg); }to { transform: rotate(360deg); }}`}</style>
        </div>
    );
}
