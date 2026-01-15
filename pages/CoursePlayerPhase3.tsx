import React, { useState } from 'react';
import {
    ArrowRight, ArrowLeft, TrendingUp, TrendingDown, Activity,
    Target, Send, Info, BookOpen, BarChart2,
    Maximize2, Minimize2, Crosshair, Anchor, ShieldAlert,
    CandlestickChart, Zap, Layers, AlertCircle, Percent,
    Brain // Agregado: Faltaba este componente
} from 'lucide-react';

// --- DATOS FASE 3: ANÁLISIS TÉCNICO Y TRADING ---

const courseData = [
    {
        id: 1,
        title: "Módulo 3: Análisis Técnico y Gestión de Riesgo",
        description: "Deja de adivinar. Aprende a leer la psicología del mercado a través de los gráficos.",
        lessons: [
            {
                title: "El Lenguaje de las Velas Japonesas",
                content: "Cada vela cuenta una batalla entre compradores (Toros) y vendedores (Osos).",
                details: "Olvídate de los gráficos de línea simples. Las Velas Japonesas nos dan 4 datos clave en un solo vistazo: Precio de Apertura, Cierre, Máximo y Mínimo. El 'Cuerpo' nos dice quién ganó la sesión; la 'Mecha' (sombra) nos dice hasta dónde intentaron llegar pero fracasaron.",
                visualType: "candlestick_anatomy",
                speakerNotes: "Si la vela es verde y grande, los compradores tienen el control total. Si tiene una mecha superior muy larga, significa rechazo: intentaron subir y los golpearon hacia abajo.",
                concepts: [
                    { term: "OHLC", def: "Open, High, Low, Close. Los 4 precios que forman una vela." },
                    { term: "Doji", def: "Una vela donde el precio de apertura y cierre son casi iguales. Significa indecisión total en el mercado." },
                    { term: "Mecha (Sombra)", def: "Las líneas finas que salen del cuerpo. Indican precios que fueron rechazados por el mercado." },
                    { term: "Marubozu", def: "Una vela con mucho cuerpo y sin mechas. Indica una fuerza brutal en esa dirección." }
                ]
            },
            {
                title: "Estructura de Mercado: Soportes y Resistencias",
                content: "El mercado tiene memoria. Donde rebotó ayer, puede rebotar hoy.",
                details: "El precio no se mueve en línea recta. Se mueve en zig-zag. Un 'Soporte' es un piso donde el precio ha rebotado hacia arriba antes (hay compradores esperando). Una 'Resistencia' es un techo donde el precio ha caído antes (hay vendedores esperando).",
                visualType: "support_resistance",
                speakerNotes: "Regla de oro: Cuando una Resistencia se rompe, se convierte en Soporte (el techo se vuelve piso). Y viceversa.",
                concepts: [
                    { term: "Soporte (Piso)", def: "Zona de precios debajo del actual donde la fuerza de compra supera a la de venta." },
                    { term: "Resistencia (Techo)", def: "Zona de precios por encima del actual donde la fuerza de venta supera a la de compra." },
                    { term: "Breakout (Ruptura)", def: "Cuando el precio atraviesa con fuerza un soporte o resistencia. Es una señal de entrada potente." },
                    { term: "Pullback (Retroceso)", def: "Cuando el precio rompe un nivel y regresa a 'testearlo' antes de seguir su camino." }
                ]
            },
            {
                title: "Tendencias: ¿Quién Manda?",
                content: "The Trend is your Friend (La tendencia es tu amiga).",
                details: "Nunca operes contra la corriente. Una Tendencia Alcista se define por 'Altos más Altos' (HH) y 'Bajos más Altos' (HL). Una Tendencia Bajista es lo contrario. Si no hay tendencia clara, el mercado está 'Lateral' (consolidando) y es peligroso operar.",
                visualType: "trend_structure",
                speakerNotes: "Muchos pierden dinero tratando de adivinar el cambio de tendencia ('cachar el cuchillo cayendo'). Es más seguro esperar confirmación y unirte a la fuerza dominante.",
                concepts: [
                    { term: "HH (Higher High)", def: "Alto más Alto. El punto máximo actual es mayor que el anterior." },
                    { term: "HL (Higher Low)", def: "Bajo más Alto. El retroceso no cae tanto como el anterior." },
                    { term: "Tendencia Lateral", def: "Cuando el precio se mueve de lado, atrapado en un rango. Es zona de 'ruido'." }
                ]
            },
            {
                title: "Indicadores Técnicos: RSI y Medias Móviles",
                content: "El tablero de control de tu nave.",
                details: "Los indicadores ayudan a filtrar el ruido. Las Medias Móviles (SMA/EMA) suavizan el precio para mostrar la tendencia real. El RSI (Índice de Fuerza Relativa) nos dice si el precio ha subido demasiado rápido (Sobrecompra) o bajado demasiado (Sobreventa).",
                visualType: "indicators_dashboard",
                speakerNotes: "Cuidado: Los indicadores van con retraso (lag). No predicen el futuro, solo resumen el pasado. Úsalos como confirmación, no como bola de cristal.",
                concepts: [
                    { term: "Media Móvil (SMA)", def: "El promedio del precio de los últimos X días. Funciona como un soporte/resistencia dinámico." },
                    { term: "RSI > 70", def: "Sobrecompra. El precio podría estar caro y listo para caer." },
                    { term: "RSI < 30", def: "Sobreventa. El precio podría estar barato y listo para rebotar." },
                    { term: "Cruce Dorado", def: "Cuando una media móvil rápida (ej. 50) cruza hacia arriba a una lenta (ej. 200). Señal muy alcista." }
                ]
            },
            {
                title: "Gestión de Riesgo: El Santo Grial",
                content: "Puedes perder el 50% de las veces y aun así ser millonario.",
                details: "La magia no está en adivinar el futuro, sino en las matemáticas. Si cuando ganas, ganas $3, y cuando pierdes, pierdes $1 (Ratio 3:1), solo necesitas acertar el 30% de las veces para ser rentable. Nunca arriesgues más del 1-2% de tu capital en una sola operación.",
                visualType: "risk_calculator",
                speakerNotes: "Los novatos se enfocan en cuánto pueden ganar. Los profesionales se enfocan en cuánto pueden perder. Protege tu capital a toda costa con Stop Loss.",
                concepts: [
                    { term: "Risk/Reward Ratio", def: "Ratio Riesgo/Beneficio. Cuánto arriesgo vs Cuánto espero ganar. Busca siempre mínimo 1:2 o 1:3." },
                    { term: "Stop Loss", def: "Tu cinturón de seguridad. Una orden automática para salir si la operación sale mal y evitar desastres." },
                    { term: "Position Sizing", def: "El tamaño de tu apuesta. Calculado matemáticamente para que si pierdes, solo sea el 1% de tu cuenta." }
                ]
            },
            {
                title: "Psicología del Trading",
                content: "Tu peor enemigo eres tú mismo.",
                details: "El mercado está diseñado para transferir dinero del impaciente al paciente. El FOMO (miedo a perderse algo) te hará comprar caro. El miedo te hará vender barato. El 'Revenge Trading' (vengarse del mercado) te hará perder todo.",
                visualType: "trading_psychology",
                speakerNotes: "Escribe un plan de trading y síguelo como un robot. Si operas por emoción o 'corazonada', estás apostando, no invirtiendo.",
                concepts: [
                    { term: "FOMO", def: "Fear Of Missing Out. Comprar impulsivamente porque ves que el precio sube rápido." },
                    { term: "Revenge Trading", def: "Intentar recuperar una pérdida inmediatamente con una operación más grande y arriesgada. Receta para el desastre." },
                    { term: "Trading Plan", def: "Un conjunto de reglas escritas que define cuándo entras, cuándo sales y cuánto arriesgas antes de abrir el gráfico." }
                ]
            }
        ]
    }
];

const quizQuestions = [
    { id: 1, question: "En una Vela Japonesa, ¿qué indica una mecha superior muy larga?", options: ["Fuerza de compra imparable.", "Rechazo de precios altos (fuerza de venta).", "Indecisión total.", "Que el mercado está cerrado."], correct: 1 },
    { id: 2, question: "Si una resistencia se rompe con fuerza hacia arriba, ¿en qué se convierte?", options: ["En una resistencia más fuerte.", "En un soporte (piso).", "En un vacío.", "En una tendencia bajista."], correct: 1 },
    { id: 3, question: "¿Qué define una Tendencia Alcista?", options: ["Velas rojas grandes.", "Bajos más bajos (Lower Lows).", "Altos más altos (Higher Highs) y Bajos más altos (Higher Lows).", "Que el RSI esté en 90."], correct: 2 },
    { id: 4, question: "Si arriesgo $100 para ganar $300, ¿cuál es mi Ratio Riesgo/Beneficio?", options: ["1:1", "1:2", "1:3", "3:1"], correct: 2 },
    { id: 5, question: "¿Qué es el FOMO?", options: ["Un indicador técnico.", "El miedo a perderse una oportunidad que te hace comprar mal.", "Una estrategia de salida.", "Un tipo de vela japonesa."], correct: 1 },
    { id: 6, question: "¿Cuánto capital deberías arriesgar máximo por operación?", options: ["El 50% para ganar rápido.", "Todo (All-in).", "Entre el 1% y 2%.", "Lo que te sobre de la quincena."], correct: 2 }
];

// --- COMPONENTES VISUALES FASE 3 (AVANZADOS) ---

const CandlestickAnatomy = () => (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8 animate-fade-in">
        {/* Vela Verde (Bullish) */}
        <div className="relative group">
            <div className="flex flex-col items-center">
                <span className="text-[10px] text-slate-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Máximo (High)</span>
                <div className="w-0.5 h-8 bg-slate-400"></div> {/* Mecha Superior */}
                <div className="w-16 h-24 bg-green-500 rounded-sm relative flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <span className="text-green-900 font-bold text-xs rotate-[-90deg]">Cuerpo</span>
                    {/* Precios */}
                    <div className="absolute -left-12 bottom-0 text-[10px] text-green-400">Apertura</div>
                    <div className="absolute -left-12 top-0 text-[10px] text-green-400">Cierre</div>
                </div>
                <div className="w-0.5 h-8 bg-slate-400"></div> {/* Mecha Inferior */}
                <span className="text-[10px] text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Mínimo (Low)</span>
            </div>
            <p className="text-center text-green-400 font-bold mt-4">Vela Alcista (Bullish)</p>
            <p className="text-center text-[10px] text-slate-500">Los compradores ganaron</p>
        </div>

        {/* Vela Roja (Bearish) */}
        <div className="relative group">
            <div className="flex flex-col items-center">
                <span className="text-[10px] text-slate-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Máximo (High)</span>
                <div className="w-0.5 h-8 bg-slate-400"></div> {/* Mecha Superior */}
                <div className="w-16 h-24 bg-red-500 rounded-sm relative flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <span className="text-red-900 font-bold text-xs rotate-[-90deg]">Cuerpo</span>
                    {/* Precios */}
                    <div className="absolute -right-12 top-0 text-[10px] text-red-400">Apertura</div>
                    <div className="absolute -right-12 bottom-0 text-[10px] text-red-400">Cierre</div>
                </div>
                <div className="w-0.5 h-8 bg-slate-400"></div> {/* Mecha Inferior */}
                <span className="text-[10px] text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Mínimo (Low)</span>
            </div>
            <p className="text-center text-red-400 font-bold mt-4">Vela Bajista (Bearish)</p>
            <p className="text-center text-[10px] text-slate-500">Los vendedores ganaron</p>
        </div>
    </div>
);

const SupportResistance = () => (
    <div className="relative h-64 w-full bg-slate-900/50 rounded-xl border border-slate-700 mt-6 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
            {[...Array(24)].map((_, i) => <div key={i} className="border border-slate-500"></div>)}
        </div>

        {/* Resistencia */}
        <div className="absolute top-8 left-0 w-full h-8 bg-red-500/10 border-y border-red-500/30 flex items-center justify-center">
            <span className="text-red-400 text-xs font-bold tracking-widest">ZONA DE RESISTENCIA (TECHO)</span>
        </div>

        {/* Soporte */}
        <div className="absolute bottom-8 left-0 w-full h-8 bg-green-500/10 border-y border-green-500/30 flex items-center justify-center">
            <span className="text-green-400 text-xs font-bold tracking-widest">ZONA DE SOPORTE (PISO)</span>
        </div>

        {/* Price Line */}
        <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
                d="M0,80 L20,30 L40,75 L60,25 L80,80 L100,50"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]"
            />
            {/* Bounce Points */}
            <circle cx="20" cy="30" r="1.5" fill="#EF4444" className="animate-ping" />
            <circle cx="60" cy="25" r="1.5" fill="#EF4444" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="40" cy="75" r="1.5" fill="#22C55E" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="80" cy="80" r="1.5" fill="#22C55E" className="animate-ping" style={{ animationDelay: '1.5s' }} />
        </svg>

        <div className="absolute top-2 right-2 text-[9px] text-slate-500">El precio rebota en las zonas clave</div>
    </div>
);

const TrendStructure = () => (
    <div className="relative h-64 w-full bg-slate-900/50 rounded-xl border border-slate-700 mt-6 p-4">
        <h4 className="text-center text-teal-400 font-bold mb-2">Estructura Alcista (Uptrend)</h4>

        <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* Trend Line */}
            <line x1="20" y1="130" x2="280" y2="30" stroke="#14B8A6" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />

            {/* Price Action */}
            <path d="M 20 130 L 60 90 L 90 110 L 140 60 L 170 80 L 230 20" fill="none" stroke="white" strokeWidth="2" />

            {/* Labels */}
            <text x="60" y="85" fill="#F59E0B" fontSize="10" textAnchor="middle" fontWeight="bold">HH</text>
            <text x="140" y="55" fill="#F59E0B" fontSize="10" textAnchor="middle" fontWeight="bold">HH</text>
            <text x="230" y="15" fill="#F59E0B" fontSize="10" textAnchor="middle" fontWeight="bold">HH</text>

            <text x="90" y="125" fill="#8B5CF6" fontSize="10" textAnchor="middle" fontWeight="bold">HL</text>
            <text x="170" y="95" fill="#8B5CF6" fontSize="10" textAnchor="middle" fontWeight="bold">HL</text>
        </svg>

        <div className="flex justify-center gap-4 text-[10px] mt-2">
            <span className="text-amber-400 font-bold">HH: Alto más Alto</span>
            <span className="text-violet-400 font-bold">HL: Bajo más Alto</span>
        </div>
    </div>
);

const IndicatorsDashboard = () => (
    <div className="mt-6 space-y-4">
        {/* RSI Visual */}
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">RSI (Fuerza Relativa)</span>
                <span className="text-[10px] bg-slate-700 px-2 py-1 rounded text-purple-300">Valor Actual: 82</span>
            </div>
            <div className="relative h-12 bg-slate-900 rounded-lg overflow-hidden flex items-center px-2">
                {/* Zones */}
                <div className="absolute top-0 left-0 h-full w-[30%] bg-green-500/10 border-r border-green-500/30 flex items-center justify-center">
                    <span className="text-[8px] text-green-500/50 rotate-90 md:rotate-0">Sobreventa</span>
                </div>
                <div className="absolute top-0 right-0 h-full w-[30%] bg-red-500/10 border-l border-red-500/30 flex items-center justify-center">
                    <span className="text-[8px] text-red-500/50 rotate-90 md:rotate-0">Sobrecompra</span>
                </div>
                {/* Indicator Point */}
                <div className="absolute top-1/2 left-[82%] w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(239,68,68,0.8)] transform -translate-y-1/2 animate-pulse"></div>
            </div>
            <p className="text-[10px] text-red-400 mt-2 text-center font-bold">¡ALERTA! RSI en 82 = Sobrecompra Extrema. Posible caída.</p>
        </div>

        {/* Moving Average Visual */}
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">Medias Móviles (SMA)</span>
            </div>
            <div className="h-24 w-full bg-slate-900 rounded-lg relative overflow-hidden">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                    {/* Slow MA */}
                    <path d="M0,40 Q50,35 100,20" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2,1" />
                    {/* Fast MA */}
                    <path d="M0,45 Q40,40 60,28 T100,5" fill="none" stroke="#F59E0B" strokeWidth="2" />
                    {/* Cross */}
                    <circle cx="75" cy="24" r="3" fill="#F59E0B" className="animate-ping" style={{ animationDuration: '3s' }} />
                </svg>
                <div className="absolute bottom-2 left-2 flex gap-2 text-[9px]">
                    <span className="text-blue-400">--- SMA 200 (Lenta)</span>
                    <span className="text-amber-400">___ SMA 50 (Rápida)</span>
                </div>
                <div className="absolute top-2 right-2 text-[9px] bg-amber-900/30 text-amber-200 px-2 rounded border border-amber-500/30">
                    Cruce Dorado Detectado
                </div>
            </div>
        </div>
    </div>
);

const RiskCalculator = () => (
    <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-violet-500 mt-6 shadow-xl">
        <h4 className="font-bold text-white text-center mb-4 text-sm uppercase tracking-widest">Calculadora de Riesgo Mental</h4>

        <div className="flex items-center justify-between gap-4 mb-6">
            <div className="text-center bg-red-900/20 p-3 rounded-lg border border-red-500/30 flex-1">
                <ShieldAlert className="text-red-500 mx-auto mb-1" size={20} />
                <p className="text-[10px] text-slate-400">Riesgo (1 R)</p>
                <p className="text-xl font-bold text-red-400">-$100</p>
            </div>
            <div className="text-slate-500 font-bold">VS</div>
            <div className="text-center bg-green-900/20 p-3 rounded-lg border border-green-500/30 flex-1">
                <Target className="text-green-500 mx-auto mb-1" size={20} />
                <p className="text-[10px] text-slate-400">Beneficio (3 R)</p>
                <p className="text-xl font-bold text-green-400">+$300</p>
            </div>
        </div>

        <div className="bg-slate-900 p-4 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-red-500/10"></div>
            <div className="absolute top-0 left-1/3 w-2/3 h-full bg-green-500/10"></div>

            <div className="flex justify-between relative z-10 text-[10px] text-slate-300">
                <span>Stop Loss</span>
                <span>Entrada</span>
                <span>Take Profit</span>
            </div>

            <div className="w-full h-2 bg-slate-700 rounded-full mt-2 relative">
                <div className="absolute left-1/3 w-2/3 h-full bg-green-500 rounded-r-full"></div>
                <div className="absolute left-0 w-1/3 h-full bg-red-500 rounded-l-full"></div>
                <div className="absolute left-1/3 w-1 h-4 bg-white -top-1"></div>
            </div>
            <p className="text-center text-xs mt-3 font-bold text-violet-300">Ratio 1:3 (Excelente)</p>
            <p className="text-center text-[9px] text-slate-500 mt-1">Solo necesitas ganar el 25% de las veces para no perder dinero.</p>
        </div>
    </div>
);

const TradingPsychology = () => (
    <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="bg-purple-900/20 p-3 rounded-xl border border-purple-500/30 flex flex-col items-center text-center">
            <Zap className="text-purple-400 mb-2" size={24} />
            <h5 className="font-bold text-white text-xs">FOMO</h5>
            <p className="text-[9px] text-slate-400 mt-1">"¡Todos están ganando menos yo!" &rarr; Compras caro y pierdes.</p>
        </div>
        <div className="bg-red-900/20 p-3 rounded-xl border border-red-500/30 flex flex-col items-center text-center">
            <ShieldAlert className="text-red-400 mb-2" size={24} />
            <h5 className="font-bold text-white text-xs">Miedo</h5>
            <p className="text-[9px] text-slate-400 mt-1">"¡Va a seguir bajando!" &rarr; Vendes en el fondo y pierdes el rebote.</p>
        </div>
        <div className="col-span-2 bg-green-900/20 p-3 rounded-xl border border-green-500/30 flex items-center gap-4">
            <div className="bg-green-500 rounded-full p-2"><Brain className="text-white" size={20} /></div>
            <div className="text-left">
                <h5 className="font-bold text-white text-xs">La Mente del Trader</h5>
                <p className="text-[9px] text-slate-300">
                    Acepta que no puedes predecir el futuro. Solo gestionas probabilidades. Si pierdes, no te enojes; es el costo de hacer negocios (como pagar la luz en una tienda).
                </p>
            </div>
        </div>
    </div>
);

const ConceptsBar = ({ concepts }: { concepts: any[] }) => {
    const [activeConcept, setActiveConcept] = useState<number | null>(null);
    if (!concepts || concepts.length === 0) return null;
    return (
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-violet-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Glosario Técnico</h4>
            <div className="flex flex-wrap gap-2">
                {concepts.map((concept, idx) => (
                    <div key={idx} className="relative group">
                        <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
                        {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-violet-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-violet-500 transform rotate-45"></div><h5 className="text-violet-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL APP FASE 3 ---

export default function CoursePlayerPhase3() {
    const [currentLesson, setCurrentLesson] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<any>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const moduleData = courseData[0]; // Solo 1 módulo en esta app
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
        let message = `📊 *Resultados FASE 3 (Técnico)* 📊%0A%0A`;
        message += `Calificación: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    const renderVisual = (type: string) => {
        switch (type) {
            case 'candlestick_anatomy': return <CandlestickAnatomy />;
            case 'support_resistance': return <SupportResistance />;
            case 'trend_structure': return <TrendStructure />;
            case 'indicators_dashboard': return <IndicatorsDashboard />;
            case 'risk_calculator': return <RiskCalculator />;
            case 'trading_psychology': return <TradingPsychology />;
            default: return null;
        }
    };

    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <div className="max-w-2xl w-full animate-fade-in">
                    <h1 className="text-3xl font-bold text-violet-400 mb-2 text-center">Examen Fase 3</h1>
                    <p className="text-slate-400 text-center mb-8">Análisis Técnico y Riesgo</p>
                    {!quizSubmitted ? (
                        <div className="space-y-6">
                            {quizQuestions.map((q, index) => (
                                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                                    <p className="font-bold text-lg mb-4 text-white"><span className="text-violet-500 mr-2">#{index + 1}</span> {q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt, i) => (
                                            <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-violet-600 border-violet-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Terminar Fase 3</button></div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-10">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-violet-500/50 mb-8 max-w-md mx-auto shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                                <Target className="w-24 h-24 text-violet-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-bold text-white">¡Nivel Avanzado Superado!</h2>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 my-6">{score} / {quizQuestions.length}</div>
                            </div>
                            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados</a>
                            <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-violet-400 text-sm underline">Reiniciar</button>
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
                    <div className="flex items-center gap-2">
                        <div className="bg-violet-500/10 p-2 rounded-lg"><Activity className="text-violet-400" size={20} /></div>
                        <div><span className="font-bold text-white tracking-wider text-sm md:text-base block">MERCADOS<span className="text-violet-400">301</span></span><span className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">Fase 3: Técnico</span></div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-violet-500 to-amber-500 transition-all duration-500 ease-out" style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}></div></div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2"><span className="bg-violet-500/10 text-violet-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-violet-500/20">{moduleData.title}</span></div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Crosshair size={120} className="text-slate-500" /></div>
                    {renderVisual(lessonData.visualType)}
                </div>
                <div className="space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-violet-500 shadow-lg"><p className="text-lg md:text-xl text-violet-100 font-medium leading-relaxed">{lessonData.content}</p></div>
                    <div className="flex gap-4 items-start"><div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300" /></div><div><p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p><p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-violet-500 font-bold not-italic">💡 Tip:</span>{lessonData.speakerNotes}</p></div></div>
                    <ConceptsBar concepts={lessonData.concepts} />
                </div>
            </main>

            <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
                    <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-violet-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
                    <button onClick={handleNext} className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95"><span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Ir al Examen' : 'Siguiente'}</span><span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
                </div>
            </footer>
            <style>{`@keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}@keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}.animate-fade-in {animation: fade-in 0.5s ease-out forwards;}.animate-fade-in-up {animation: fade-in-up 0.2s ease-out forwards;}`}</style>
        </div>
    );
}
