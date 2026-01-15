import React, { useState } from 'react';
import {
    ArrowRight, ArrowLeft, TrendingUp, Activity,
    Target, Send, Info, BookOpen, PieChart,
    Shield, Anchor, Brain, Library, Quote,
    AlertTriangle, BarChart2, Layers, Zap, Crosshair,
    CheckCircle, ChevronRight, Book, RefreshCw, TrendingDown
} from 'lucide-react';

// --- DATOS FASE 5: MAESTRÍA Y ESTRATEGIA AVANZADA ---

const courseData = [
    {
        id: 1,
        title: "Módulo 5: Ingeniería de Portafolio & Psicología Maestra",
        description: "Ya sabes operar. Ahora aprende a sobrevivir y prosperar durante décadas.",
        lessons: [
            {
                title: "Asignación Táctica: El Modelo Yale",
                content: "No intentes ganar al mercado, intenta ser más inteligente que él.",
                details: "David Swensen, gestor del fondo de la Universidad de Yale, demostró que la diversificación real no es tener 20 acciones, sino tener activos que no se muevan igual. El 'Modelo Yale' introduce activos alternativos (Bienes Raíces, Materias Primas) para reducir la volatilidad sin sacrificar retornos.",
                visualType: "yale_model",
                source: "Libro: 'Unconventional Success' - David Swensen",
                quote: { text: "La diversificación es la única comida gratis en las finanzas.", author: "Harry Markowitz (Premio Nobel)" },
                speakerNotes: "El objetivo no es tener el rendimiento más alto un año, sino evitar la ruina todos los años. La consistencia crea el interés compuesto.",
                concepts: [
                    { term: "Correlación Negativa", def: "Cuando el Activo A sube, el Activo B baja. Tener ambos reduce los 'baches' en tu camino." },
                    { term: "Rebalanceo Automático", def: "La disciplina de vender lo que ha subido (vender caro) para comprar lo que ha bajado (comprar barato). Es contraintuitivo pero vital." },
                    { term: "Clases de Activos", def: "Categorías generales: Acciones, Bonos, Efectivo, Bienes Raíces, Commodities (Oro/Petróleo)." }
                ]
            },
            {
                title: "La Máquina Económica (Ray Dalio)",
                content: "La economía funciona como una máquina simple, pero muchos no la entienden.",
                details: "Ray Dalio explica que la economía se mueve por ciclos de deuda. Hay un 'Ciclo de Corto Plazo' (5-8 años) y un 'Ciclo de Largo Plazo' (50-75 años). Entender en qué parte del ciclo estamos te dice si debes tener más riesgo (Acciones) o más seguridad (Oro/Cash).",
                visualType: "dalio_cycles",
                source: "Libro: 'Principles for Navigating Big Debt Crises' - Ray Dalio",
                quote: { text: "El dolor más la reflexión es igual al progreso.", author: "Ray Dalio" },
                speakerNotes: "No luches contra la Fed (Banco Central). Si están imprimiendo dinero, los activos suben. Si lo están retirando, los activos bajan.",
                concepts: [
                    { term: "Desalancamiento", def: "Cuando la deuda es demasiado alta y la economía debe reducir gastos para pagarla. Suele causar recesiones." },
                    { term: "Impresión de Dinero", def: "Cuando el Banco Central crea dinero para comprar deuda y estimular la economía (Quantitative Easing)." }
                ]
            },
            {
                title: "Sesgos Cognitivos: Tu Cerebro te Engaña",
                content: "El 99% de los errores de inversión son emocionales, no matemáticos.",
                details: "Daniel Kahneman (Nobel de Economía) nos enseñó que somos irracionales. El 'Sesgo de Confirmación' te hace leer solo noticias que apoyan tu inversión. La 'Aversión a la Pérdida' te hace mantener acciones perdedoras esperando que se recuperen (El efecto 'Break-even').",
                visualType: "cognitive_biases",
                source: "Libro: 'Thinking, Fast and Slow' - Daniel Kahneman",
                quote: { text: "El principal problema del inversor, e incluso su peor enemigo, es probablemente él mismo.", author: "Benjamin Graham" },
                speakerNotes: "Escribe un diario de trading. Anota por qué compraste y cómo te sentías. Al leerlo meses después, verás tus errores emocionales.",
                concepts: [
                    { term: "Sesgo de Recencia", def: "Creer que lo que pasó ayer (ej. mercado alcista) seguirá pasando para siempre." },
                    { term: "Efecto Manada", def: "Comprar porque 'todos están comprando'. Suele ser la señal del fin de una burbuja." },
                    { term: "Falacia del Costo Hundido", def: "Seguir invirtiendo en algo que no funciona solo porque ya has invertido mucho tiempo o dinero en ello." }
                ]
            },
            {
                title: "Cisnes Negros y Antifragilidad",
                content: "Prepárate para lo imposible.",
                details: "Nassim Taleb introduce el concepto de 'Cisne Negro': eventos impredecibles de impacto masivo (Covid-19, Crisis 2008). No puedes predecirlos, pero puedes ser 'Antifrágil': construir un portafolio que se beneficie del caos (teniendo efectivo listo para comprar cuando hay sangre en las calles).",
                visualType: "antifragile_chart",
                source: "Libro: 'Antifragile' - Nassim Nicholas Taleb",
                quote: { text: "Invierte en la preparación, no en la predicción.", author: "Nassim Taleb" },
                speakerNotes: "Tener un 10-20% de tu portafolio en 'Caja' (Efectivo/Bonos cortos) no es perder dinero, es comprar la opción de aprovechar la próxima crisis.",
                concepts: [
                    { term: "Cisne Negro", def: "Evento raro, de impacto extremo y explicable solo retrospectivamente." },
                    { term: "Antifrágil", def: "Algo que mejora con el estrés y el desorden. Un sistema frágil se rompe; uno antifrágil se hace más fuerte." }
                ]
            },
            {
                title: "Cobertura Avanzada: Opciones (Puts)",
                content: "El seguro de auto para tu portafolio.",
                details: "Los inversores profesionales no solo diversifican, usan derivados para protegerse. Comprar una opción 'PUT' te da el derecho de vender tus acciones a un precio fijo, incluso si el mercado colapsa. Es como pagar una prima de seguro: pierdes un poco de rendimiento, pero duermes tranquilo.",
                visualType: "hedging_puts",
                source: "Libro: 'Options as a Strategic Investment' - Lawrence McMillan",
                quote: { text: "Los amateurs se enfocan en cuánto pueden ganar. Los profesionales, en cuánto pueden perder.", author: "George Soros" },
                speakerNotes: "No uses opciones para especular (apostar). Úsalas para proteger (hedging) capitales grandes durante tiempos de incertidumbre.",
                concepts: [
                    { term: "Opción PUT", def: "Contrato que sube de valor cuando el mercado baja. Sirve para compensar las pérdidas de tus acciones." },
                    { term: "Prima (Premium)", def: "El costo que pagas por comprar la opción. Es el precio del 'seguro'." }
                ]
            },
            {
                title: "Estrategias de Salida (Exit Strategy)",
                content: "Saber cuándo levantarse de la mesa.",
                details: "Philip Fisher decía: 'Si hiciste bien el trabajo al comprar, el momento de vender es casi nunca'. Sin embargo, hay excepciones: 1. Deterioro fundamental. 2. Sobrevaloración extrema (Burbuja). 3. Mejor oportunidad. Peter Lynch vendía cuando la 'historia' de la empresa cambiaba.",
                visualType: "exit_checklist",
                source: "Libro: 'Common Stocks and Uncommon Profits' - Philip Fisher",
                quote: { text: "Vende cuando tus acciones suban tanto que no puedas dormir, o cuando bajen tanto que no puedas dormir.", author: "Jesse Livermore" },
                speakerNotes: "Nunca vendas una empresa excelente solo para tomar ganancias pequeñas ('Cortar las flores'). Deja correr a los ganadores.",
                concepts: [
                    { term: "Trailing Stop", def: "Una orden de venta que 'persigue' el precio hacia arriba. Si la acción cae un X% desde su máximo, vende automáticamente." },
                    { term: "Costo de Oportunidad", def: "Mantener una acción mediocre te cuesta el dinero que podrías ganar en una acción excelente." }
                ]
            }
        ]
    }
];

const quizQuestions = [
    { id: 1, question: "¿Cuál es la filosofía central del 'Modelo Yale' de David Swensen?", options: ["Apostar todo a acciones tecnológicas.", "Diversificar en activos alternativos con baja correlación.", "Hacer Day Trading.", "Comprar solo Bonos del Tesoro."], correct: 1 },
    { id: 2, question: "Según Ray Dalio, ¿qué mueve la 'Máquina Económica'?", options: ["La suerte.", "Los ciclos de deuda y la productividad.", "Solo las acciones.", "El precio del oro."], correct: 1 },
    { id: 3, question: "Según Daniel Kahneman, ¿qué es la 'Aversión a la Pérdida'?", options: ["El miedo a invertir.", "El dolor de perder es psicológicamente 2 veces más fuerte que el placer de ganar.", "Vender todo cuando el mercado baja.", "No revisar tu portafolio."], correct: 1 },
    { id: 4, question: "¿Para qué sirve comprar una opción PUT en un portafolio de inversión?", options: ["Para apostar al alza.", "Para cobrar dividendos.", "Como seguro para protegerse de caídas del mercado.", "Para reducir impuestos."], correct: 2 },
    { id: 5, question: "¿Qué significa ser 'Antifrágil'?", options: ["Ser muy resistente y no cambiar nunca.", "Beneficiarse del caos y la volatilidad.", "Predecir el futuro con exactitud.", "Evitar todo tipo de riesgo."], correct: 1 },
    { id: 6, question: "Según Philip Fisher, ¿cuál es la mejor razón para vender?", options: ["Porque el precio subió un 10%.", "Porque necesito dinero para vacaciones.", "Porque los fundamentos de la empresa se han deteriorado permanentemente.", "Porque me aburrí."], correct: 2 }
];

// --- COMPONENTES VISUALES AVANZADOS (FASE 5) ---

const YaleModelVisual = () => (
    <div className="flex flex-col items-center mt-6 bg-slate-900 p-6 rounded-xl border border-amber-500/20">
        <h4 className="text-amber-400 font-bold mb-4 text-sm tracking-widest uppercase">El Pastel Institucional (Yale)</h4>
        <div className="flex flex-wrap justify-center gap-4">
            {/* Pie Chart Simulado con CSS */}
            <div className="relative w-48 h-48 rounded-full border-8 border-slate-800 shadow-2xl"
                style={{ background: 'conic-gradient(#F59E0B 0% 30%, #3B82F6 30% 50%, #10B981 50% 75%, #EF4444 75% 90%, #8B5CF6 90% 100%)' }}>
                <div className="absolute inset-0 m-12 bg-slate-900 rounded-full flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-white">Divers</span>
                    <span className="text-[10px] text-slate-400">ification</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-xs w-full max-w-md">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded"></div><span className="text-slate-300">Renta Variable (30%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded"></div><span className="text-slate-300">Bienes Raíces (20%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded"></div><span className="text-slate-300">Absoluto Retorno (25%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded"></div><span className="text-slate-300">Private Equity (15%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-violet-500 rounded"></div><span className="text-slate-300">Bonos/Caja (10%)</span></div>
        </div>
        <p className="text-[10px] text-slate-500 mt-4 italic text-center">"La clave es la baja correlación: cuando uno cae, el otro te sostiene."</p>
    </div>
);

const DalioCycles = () => (
    <div className="mt-6 bg-slate-900 p-4 rounded-xl border border-slate-700">
        <h4 className="text-amber-400 font-bold text-sm mb-4 text-center">Ciclo de Deuda a Largo Plazo</h4>
        <div className="relative h-40 w-full overflow-hidden">
            <svg viewBox="0 0 300 100" className="w-full h-full">
                {/* Trend Line (Productivity) */}
                <line x1="0" y1="90" x2="300" y2="10" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" />
                <text x="280" y="20" fill="#475569" fontSize="8">Productividad</text>

                {/* Debt Cycle Wave */}
                <path d="M0,90 Q75,-10 150,50 T300,10" fill="none" stroke="#F59E0B" strokeWidth="2" />

                {/* Points */}
                <circle cx="150" cy="50" r="3" fill="#EF4444" />
                <text x="150" y="70" fill="#EF4444" fontSize="8" textAnchor="middle">Recesión</text>

                <circle cx="75" cy="20" r="3" fill="#10B981" />
                <text x="75" y="10" fill="#10B981" fontSize="8" textAnchor="middle">Burbuja</text>
            </svg>
        </div>
        <div className="flex gap-4 text-[10px] text-slate-400 mt-2 justify-center">
            <div className="flex items-center gap-1"><TrendingUp size={12} className="text-emerald-500" /> Apalancamiento</div>
            <div className="flex items-center gap-1"><TrendingDown size={12} className="text-red-500" /> Desalancamiento</div>
        </div>
    </div>
);

const CognitiveBiases = () => (
    <div className="grid grid-cols-1 gap-4 mt-6">
        <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-red-500 flex items-start gap-4">
            <div className="bg-red-900/20 p-2 rounded-full mt-1"><AlertTriangle className="text-red-500" size={20} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Sesgo de Confirmación</h5>
                <p className="text-xs text-slate-400 mt-1">Buscas en Google: <i>"Por qué Tesla va a subir"</i> en lugar de <i>"Riesgos de invertir en Tesla"</i>.</p>
                <div className="mt-2 text-[10px] bg-red-500/10 text-red-300 px-2 py-1 rounded inline-block">Antídoto: Busca activamente quien opine lo contrario.</div>
            </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-amber-500 flex items-start gap-4">
            <div className="bg-amber-900/20 p-2 rounded-full mt-1"><Anchor className="text-amber-500" size={20} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Anclaje (Anchoring)</h5>
                <p className="text-xs text-slate-400 mt-1">"La acción costaba $200, ahora cuesta $150. ¡Está barata!"... No necesariamente. Quizás ahora solo vale $100.</p>
                <div className="mt-2 text-[10px] bg-amber-500/10 text-amber-300 px-2 py-1 rounded inline-block">Antídoto: Valora la empresa por lo que es hoy, no por su precio pasado.</div>
            </div>
        </div>
    </div>
);

const AntifragileChart = () => (
    <div className="mt-6 bg-slate-900 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
        <h4 className="text-center text-white font-bold mb-6 text-sm">Frágil vs. Antifrágil</h4>

        <div className="relative h-40 w-full flex items-end justify-between px-4">
            {/* Fragil */}
            <div className="flex flex-col items-center w-1/3 group">
                <div className="h-32 w-2 bg-slate-700 rounded-full relative">
                    <div className="absolute bottom-0 w-full bg-red-500 h-[80%] rounded-full group-hover:h-0 transition-all duration-1000"></div>
                </div>
                <div className="mt-2 text-center">
                    <span className="block text-red-400 font-bold text-xs">Frágil</span>
                    <span className="text-[9px] text-slate-500">Se rompe con el estrés</span>
                </div>
            </div>

            {/* Robusto */}
            <div className="flex flex-col items-center w-1/3">
                <div className="h-32 w-2 bg-slate-700 rounded-full relative">
                    <div className="absolute bottom-0 w-full bg-blue-500 h-[80%] rounded-full"></div>
                </div>
                <div className="mt-2 text-center">
                    <span className="block text-blue-400 font-bold text-xs">Robusto</span>
                    <span className="text-[9px] text-slate-500">Aguanta el estrés</span>
                </div>
            </div>

            {/* Antifragil */}
            <div className="flex flex-col items-center w-1/3 group">
                <div className="h-32 w-2 bg-slate-700 rounded-full relative">
                    <div className="absolute bottom-0 w-full bg-emerald-500 h-[50%] group-hover:h-[100%] transition-all duration-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="mt-2 text-center">
                    <span className="block text-emerald-400 font-bold text-xs">Antifrágil</span>
                    <span className="text-[9px] text-slate-500">Crece con el estrés</span>
                </div>
            </div>
        </div>
        <div className="mt-4 p-3 bg-slate-800 rounded text-[10px] text-slate-300 italic border-l-2 border-emerald-500">
            "El viento apaga una vela (Frágil), pero aviva un incendio (Antifrágil). Quieres ser el incendio." - Nassim Taleb
        </div>
    </div>
);

const HedgingPuts = () => (
    <div className="mt-6 flex flex-col gap-4">
        <div className="bg-slate-800 p-4 rounded-xl border border-blue-500/30 flex justify-between items-center">
            <div>
                <h5 className="text-white font-bold text-sm">Tu Portafolio</h5>
                <p className="text-xs text-slate-400">Acciones (SPY)</p>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-red-400 font-bold text-sm">-20%</span>
                <span className="text-[9px] text-slate-500">Mercado cae</span>
            </div>
        </div>

        <div className="flex justify-center -my-2 z-10">
            <div className="bg-slate-700 p-1 rounded-full"><RefreshCw size={16} className="text-slate-400" /></div>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl border border-emerald-500/30 flex justify-between items-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
            <div>
                <h5 className="text-emerald-400 font-bold text-sm">Seguro (Opción PUT)</h5>
                <p className="text-xs text-slate-400">Protección</p>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-emerald-400 font-bold text-xl">+400%</span>
                <span className="text-[9px] text-slate-500">Valor se dispara</span>
            </div>
        </div>

        <p className="text-[10px] text-center text-slate-400">
            La ganancia del PUT compensa la pérdida de las Acciones. <br />
            <span className="text-amber-400">Resultado: Tu patrimonio se mantiene estable.</span>
        </p>
    </div>
);

const ExitChecklist = () => (
    <div className="mt-6 space-y-3">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2"><Crosshair size={16} className="text-red-500" /> Checklist de Venta (Fisher)</h4>
            <ul className="space-y-2">
                <li className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded border border-red-500 flex items-center justify-center text-red-500 font-bold">1</div>
                    <span>¿La empresa ha dejado de crecer? (Deterioro Fundamental)</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded border border-red-500 flex items-center justify-center text-red-500 font-bold">2</div>
                    <span>¿La gerencia ya no es honesta? (Pérdida de confianza)</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded border border-red-500 flex items-center justify-center text-red-500 font-bold">3</div>
                    <span>¿Encontré una oportunidad mucho mejor? (Costo de Oportunidad)</span>
                </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-700 text-[10px] text-amber-400 flex items-center gap-2">
                <AlertTriangle size={12} />
                <span>Advertencia: No vender solo porque el precio bajó.</span>
            </div>
        </div>
    </div>
);

const QuoteCard = ({ quote }: { quote: any }) => (
    <div className="my-6 relative p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-t-4 border-amber-500 shadow-xl">
        <Quote size={24} className="text-amber-500/20 absolute top-4 left-4" />
        <p className="text-lg text-slate-200 font-serif italic text-center relative z-10">"{quote.text}"</p>
        <p className="text-xs text-amber-500 text-center mt-3 font-bold uppercase tracking-widest">— {quote.author}</p>
    </div>
);

const BookReference = ({ source }: { source: string }) => (
    <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700 mt-4 hover:border-amber-500/50 transition-colors cursor-pointer group">
        <div className="bg-amber-500/20 p-2 rounded group-hover:bg-amber-500/40 transition-colors"><Book size={16} className="text-amber-500" /></div>
        <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Fuente Recomendada</p>
            <p className="text-xs text-white font-bold">{source}</p>
        </div>
        <ChevronRight size={16} className="ml-auto text-slate-600 group-hover:text-amber-500 transition-colors" />
    </div>
);

const ConceptsBar = ({ concepts }: { concepts: any[] }) => {
    const [activeConcept, setActiveConcept] = useState<number | null>(null);
    if (!concepts || concepts.length === 0) return null;
    return (
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-amber-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Conceptos Maestros</h4>
            <div className="flex flex-wrap gap-2">
                {concepts.map((concept, idx) => (
                    <div key={idx} className="relative group">
                        <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-amber-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
                        {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-amber-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-amber-500 transform rotate-45"></div><h5 className="text-amber-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL APP FASE 5 ---

export default function CoursePlayerPhase5() {
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
        let message = `🏆 *Resultados FASE 5 (MAESTRÍA)* 🏆%0A%0A`;
        message += `Calificación Final: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
        message += `He completado el programa completo de Inversiones.`;
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    const renderVisual = (type: string) => {
        switch (type) {
            case 'yale_model': return <YaleModelVisual />;
            case 'dalio_cycles': return <DalioCycles />;
            case 'cognitive_biases': return <CognitiveBiases />;
            case 'antifragile_chart': return <AntifragileChart />;
            case 'hedging_puts': return <HedgingPuts />;
            case 'exit_checklist': return <ExitChecklist />;
            default: return null;
        }
    };

    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <div className="max-w-2xl w-full animate-fade-in">
                    <h1 className="text-3xl font-bold text-amber-400 mb-2 text-center">Examen Final de Maestría</h1>
                    <p className="text-slate-400 text-center mb-8">Estrategia Avanzada</p>
                    {!quizSubmitted ? (
                        <div className="space-y-6">
                            {quizQuestions.map((q, index) => (
                                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                                    <p className="font-bold text-lg mb-4 text-white"><span className="text-amber-500 mr-2">#{index + 1}</span> {q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt, i) => (
                                            <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-amber-600 border-amber-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Graduarse del Curso</button></div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-10">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-amber-500/50 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                                <Target className="w-24 h-24 text-amber-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-bold text-white">¡MAESTRÍA COMPLETADA!</h2>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 my-6">{score} / {quizQuestions.length}</div>
                                <p className="text-slate-400 text-sm">Has recorrido el camino desde principiante hasta estratega.</p>
                            </div>
                            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Recibir Certificado (WhatsApp)</a>
                            <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-amber-400 text-sm underline">Reiniciar Fase 5</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans flex flex-col">
            <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-amber-500/10 p-2 rounded-lg"><Layers className="text-amber-400" size={20} /></div>
                        <div><span className="font-bold text-white tracking-wider text-sm md:text-base block">MERCADOS<span className="text-amber-400">501</span></span><span className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">Fase 5: Maestría</span></div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out" style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}></div></div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2"><span className="bg-amber-500/10 text-amber-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-amber-500/20">{moduleData.title}</span></div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Activity size={120} className="text-slate-500" /></div>
                    {renderVisual(lessonData.visualType)}
                </div>
                <div className="space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500 shadow-lg"><p className="text-lg md:text-xl text-amber-100 font-medium leading-relaxed">{lessonData.content}</p></div>
                    <div className="flex gap-4 items-start"><div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300" /></div><div><p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p><p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-amber-500 font-bold not-italic">💡 Nota del Mentor:</span>{lessonData.speakerNotes}</p></div></div>
                    {lessonData.quote && <QuoteCard quote={lessonData.quote} />}
                    {lessonData.source && <BookReference source={lessonData.source} />}
                    <ConceptsBar concepts={lessonData.concepts} />
                </div>
            </main>

            <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
                    <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-amber-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
                    <button onClick={handleNext} className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95"><span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Examen Final' : 'Siguiente'}</span><span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
                </div>
            </footer>
            <style>{`@keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}@keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}.animate-fade-in {animation: fade-in 0.5s ease-out forwards;}.animate-fade-in-up {animation: fade-in-up 0.2s ease-out forwards;}`}</style>
        </div>
    );
}
