import React, { useState } from 'react';
import {
    ArrowRight, ArrowLeft, TrendingUp, TrendingDown, DollarSign,
    Activity, Brain, Target, Send, Info, BookOpen,
    Smartphone, BarChart2, Scale, Sun, CloudRain, Search, FileText,
    Shield, Users, Zap, Briefcase, LogOut, Award
} from 'lucide-react';

// --- DATOS FASE 2: ANÁLISIS FUNDAMENTAL ---

const courseData = [
    {
        id: 1,
        title: "Módulo 1: Análisis Fundamental",
        description: "El arte de saber si una empresa es buena, bonita y barata.",
        lessons: [
            {
                title: "Lectura de Estados Financieros",
                content: "Los estados financieros son como el chequeo médico de un negocio.",
                details: "No compres a ciegas. Hay tres documentos clave: 1. Balance General (La foto de lo que tienen vs lo que deben). 2. Estado de Resultados (El video de sus ventas y ganancias). 3. Flujo de Caja (El oxígeno real que entra a la caja).",
                visualType: "financial_statements",
                speakerNotes: "Si una empresa declara muchas ganancias pero su 'Flujo de Caja' está vacío, ten cuidado. Es como alguien que dice ser rico pero no trae efectivo en la cartera.",
                concepts: [
                    { term: "Balance General", def: "Muestra la salud financiera en un momento exacto: Activos (lo que tiene) vs Pasivos (lo que debe)." },
                    { term: "Estado de Resultados", def: "Reporte de pérdidas y ganancias. Muestra cuánto vendió y cuánto gastó en un periodo." },
                    { term: "Flujo de Caja", def: "Dinero real en efectivo que entra y sale. Es vital para pagar deudas y operar." },
                    { term: "Activos", def: "Todo lo que posee la empresa que tiene valor (Efectivo, Edificios, Patentes, Inventario)." },
                    { term: "Pasivos", def: "Todas las deudas y obligaciones que la empresa debe pagar a otros (Préstamos, Salarios, Proveedores)." },
                    { term: "Patrimonio Neto", def: "La riqueza real de los dueños. Es lo que queda si vendes todos los Activos y pagas todos los Pasivos." }
                ]
            },
            {
                title: "Métricas de Valoración",
                content: "¿Caro o Barato? El precio no es lo mismo que el valor.",
                details: "Usa ratios para comparar. El P/E (Price/Earnings) te dice cuántos años tardarías en recuperar tu inversión con las utilidades actuales. El Dividend Yield es como la 'renta' anual que te paga la empresa solo por tener la acción.",
                visualType: "valuation_metrics",
                speakerNotes: "Un P/E de 15 suele ser promedio. Si ves un P/E de 100, la acción está 'cara' (hay mucha expectativa). Si ves un P/E de 5, puede estar 'barata' o tener problemas serios.",
                concepts: [
                    { term: "P/E Ratio", def: "Precio sobre Utilidad. Mide qué tan cara es la acción respecto a las ganancias de la empresa." },
                    { term: "Dividend Yield", def: "Porcentaje de rendimiento que recibes anualmente en efectivo (dividendos) respecto al precio que pagaste." },
                    { term: "ROE", def: "Return on Equity. Mide qué tan eficientes son los directivos usando el dinero de los accionistas para generar ganancias." },
                    { term: "EPS (BPA)", def: "Beneficio Por Acción. Cuánto dinero ganó la empresa dividido entre cada una de sus acciones. Fundamental para ver crecimiento." },
                    { term: "P/B Ratio", def: "Precio sobre Valor en Libros. Compara el precio de mercado con el valor contable de los fierros y activos de la empresa." }
                ]
            },
            {
                title: "El Foso Económico (Moat)",
                content: "Protegiendo el castillo de los invasores.",
                details: "Una buena empresa necesita defensas. El 'Moat' es la ventaja competitiva que impide que la competencia le robe clientes. Puede ser una Marca potente (Coca-Cola), Costos de Cambio (Apple) o Efecto Red (Meta). Sin foso, las ganancias duran poco.",
                visualType: "moat_types",
                speakerNotes: "Pregúntate: ¿Qué tan difícil sería para Amazon destruir a esta empresa mañana? Si la respuesta es 'muy difícil', tiene un buen Moat.",
                concepts: [
                    { term: "Moat (Foso)", def: "Ventaja Competitiva duradera. Es la barrera que protege los márgenes de ganancia de la competencia." },
                    { term: "Pricing Power", def: "Poder de fijación de precios. La capacidad de subir precios sin perder clientes (señal de un foso fuerte)." },
                    { term: "Efecto Red", def: "Cuando un producto se vuelve más valioso mientras más gente lo usa (ej. WhatsApp, Visa)." }
                ]
            },
            {
                title: "El Equipo Directivo (Management)",
                content: "No apuestes al caballo, apuesta al jinete.",
                details: "Una gran empresa con malos directivos quebrará. Busca CEOs que tengan 'Skin in the game' (acciones propias) y que sean honestos en sus cartas anuales. Huye de los que se pagan sueldos millonarios mientras la acción cae.",
                visualType: "management_analysis",
                speakerNotes: "Investiga al CEO. ¿Es el fundador? (Suele ser mejor). ¿Tiene un historial de éxito? ¿Cómo asigna el capital (dividendos vs adquisiciones)?",
                concepts: [
                    { term: "Skin in the game", def: "Jugarse la piel. Cuando los directivos son dueños de muchas acciones de la empresa, sus intereses están alineados con los tuyos." },
                    { term: "Capital Allocation", def: "Asignación de Capital. La habilidad del CEO para decidir qué hacer con el dinero que gana la empresa (Reinvertir, Pagar deuda, Comprar acciones propias)." },
                    { term: "Insider Trading", def: "Operaciones de los internos. Si el CEO está comprando acciones con su propio dinero, es una señal muy alcista." }
                ]
            },
            {
                title: "Análisis Macroeconómico",
                content: "No salgas a navegar en medio de una tormenta.",
                details: "Las decisiones de los gobiernos afectan tu dinero. Si Banxico sube las tasas de interés, los préstamos se vuelven caros y las empresas ganan menos (malo para acciones). Si las bajan, hay más dinero y consumo (bueno para acciones).",
                visualType: "macro_analysis",
                speakerNotes: "Invertir contra la corriente es difícil. Si la inflación está alta, busca empresas que puedan subir precios sin perder clientes (como las de consumo básico).",
                concepts: [
                    { term: "Tasa de Interés", def: "El 'costo' del dinero. Si sube, conviene ahorrar (CETES). Si baja, conviene invertir en riesgo (Acciones)." },
                    { term: "PIB", def: "Producto Interno Bruto. La suma de todo lo que produce un país. Si crece, la economía está sana." },
                    { term: "IPC (Inflación)", def: "Índice de Precios al Consumidor. Mide cuánto han subido los precios de la canasta básica." },
                    { term: "Tipo de Cambio", def: "El valor del dólar vs peso. Si el dólar sube, beneficia a exportadores pero perjudica a quienes importan insumos." }
                ]
            },
            {
                title: "Estilos: Growth vs Value",
                content: "¿Autos de carreras o autos clásicos?",
                details: "Existen dos filosofías principales. 'Growth' (Crecimiento): Empresas que crecen ventas rapidísimo pero son caras y volátiles (ej. Tecnología). 'Value' (Valor): Empresas estables, maduras y baratas que pagan dividendos (ej. Bancos, Energía).",
                visualType: "growth_vs_value",
                speakerNotes: "Tu portafolio debe tener equilibrio. Growth te da potencial de multiplicar x10. Value te da seguridad y flujo de efectivo.",
                concepts: [
                    { term: "Growth Investing", def: "Invertir en empresas con alto potencial de crecimiento futuro, aunque hoy parezcan caras (P/E alto)." },
                    { term: "Value Investing", def: "Invertir en empresas sólidas que el mercado está subestimando (P/E bajo), esperando que suban a su precio justo." },
                    { term: "PEG Ratio", def: "P/E dividido entre el crecimiento. Ayuda a saber si una acción de crecimiento está cara o barata." }
                ]
            },
            {
                title: "Valuación de Empresas",
                content: "Precio es lo que pagas, Valor es lo que obtienes.",
                details: "No necesitas matemáticas complejas. La idea básica es comprar 'billetes de a $100 pesos' pagando solo $80. Usamos modelos de 'valoración' para estimar cuánto debería valer la empresa en el futuro y compararlo con el precio de hoy.",
                visualType: "price_vs_value",
                speakerNotes: "Nunca compres una acción solo porque está subiendo. Cómprala porque hiciste la tarea y sabes que vale más de lo que cuesta hoy.",
                concepts: [
                    { term: "Valor Intrínseco", def: "El valor real estimado de una empresa basado en sus fundamentos, independientemente de su precio en bolsa." },
                    { term: "Margen de Seguridad", def: "Comprar una acción mucho más barata de lo que crees que vale, para tener un 'colchón' en caso de equivocarte." },
                    { term: "DCF", def: "Flujo de Caja Descontado. Un modelo matemático para calcular cuánto vale hoy el dinero que la empresa generará en el futuro." },
                    { term: "Free Cash Flow", def: "Flujo de Caja Libre. El dinero que realmente sobra para pagar a los accionistas después de reinvertir en el negocio." }
                ]
            },
            {
                title: "El Arte de Vender",
                content: "Comprar es fácil, vender es lo difícil.",
                details: "Muchos saben entrar, pocos saben salir. Vende solo por 3 razones: 1. Cometiste un error en tu análisis. 2. La empresa cambió fundamentalmente (se deterioró). 3. Encontraste una oportunidad mucho mejor. ¡Nunca vendas solo porque el precio bajó!",
                visualType: "sell_strategy",
                speakerNotes: "El peor error es vender las ganadoras demasiado pronto y quedarte con las perdedoras esperando que se recuperen ('Regar la hierba mala y cortar las flores').",
                concepts: [
                    { term: "Tesis de Inversión", def: "La razón fundamental escrita por la cual compraste la acción. Si la tesis se rompe, vendes." },
                    { term: "Costo de Oportunidad", def: "El beneficio que pierdes al tener tu dinero atorado en una mala acción en lugar de una buena." },
                    { term: "Stop Loss", def: "Una orden para vender automáticamente si el precio cae a cierto nivel (útil para proteger capital, pero peligroso en inversión a largo plazo)." }
                ]
            }
        ]
    }
];

const quizQuestions = [
    { id: 1, question: "Si una empresa tiene un 'Flujo de Caja' negativo, significa que...", options: ["Gana mucho dinero.", "Está perdiendo efectivo real.", "Es una gran oportunidad.", "Ya pagó impuestos."], correct: 1 },
    { id: 2, question: "¿Qué indica un P/E Ratio muy alto (ej. 100)?", options: ["Que la acción está muy barata.", "Que la empresa está en quiebra.", "Que la acción es cara o hay mucha expectativa de crecimiento.", "Que paga muchos dividendos."], correct: 2 },
    { id: 3, question: "¿Cuál es un ejemplo de 'Moat' o Ventaja Competitiva?", options: ["Tener oficinas bonitas.", "Tener muchos empleados.", "Tener una marca fuerte que permite subir precios.", "Tener deudas bajas."], correct: 2 },
    { id: 4, question: "¿Qué significa que un CEO tenga 'Skin in the game'?", options: ["Que le gusta apostar.", "Que posee muchas acciones de su propia empresa.", "Que tiene mucha experiencia.", "Que va a renunciar pronto."], correct: 1 },
    { id: 5, question: "Según la filosofía 'Value Investing', buscas empresas que...", options: ["Crezcan explosivamente sin importar el precio.", "Estén baratas respecto a su valor real.", "Sean muy populares en noticias.", "Tengan logotipos azules."], correct: 1 },
    { id: 6, question: "¿Cuándo deberías vender una acción a largo plazo?", options: ["Cuando el precio baja un 5%.", "Cuando necesitas dinero para una fiesta.", "Cuando la tesis de inversión original ya no se cumple.", "Cuando sube un poquito."], correct: 2 }
];

// --- COMPONENTES VISUALES FASE 2 ---

const FinancialStatements = () => (
    <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-blue-500/30">
            <div className="bg-blue-500/20 p-3 rounded-full"><Scale className="text-blue-400" size={24} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Balance General</h5>
                <p className="text-[10px] text-slate-400">¿Qué tengo? (Activos) vs ¿Qué debo? (Pasivos). FOTO ESTÁTICA.</p>
            </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-teal-500/30">
            <div className="bg-teal-500/20 p-3 rounded-full"><FileText className="text-teal-400" size={24} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Estado de Resultados</h5>
                <p className="text-[10px] text-slate-400">¿Cuánto vendí? vs ¿Cuánto gasté? VIDEO DEL AÑO.</p>
            </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-green-500/30 border-l-4 border-l-green-500">
            <div className="bg-green-500/20 p-3 rounded-full"><DollarSign className="text-green-400" size={24} /></div>
            <div>
                <h5 className="font-bold text-white text-sm">Flujo de Caja</h5>
                <p className="text-[10px] text-slate-400">EFECTIVO REAL. La sangre del negocio.</p>
            </div>
        </div>
    </div>
);

const ValuationMetrics = () => (
    <div className="mt-6 flex flex-col items-center">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center relative w-full max-w-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-700 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-600">Termómetro P/E</div>
            <div className="flex justify-between items-end mb-2 h-24 border-b border-slate-600 pb-2">
                <div className="text-center w-1/3"><div className="h-12 w-8 bg-green-500 mx-auto rounded-t opacity-50"></div><span className="text-[10px] text-green-400 font-bold block mt-1">Barata</span><span className="text-[9px] text-slate-500">P/E bajo</span></div>
                <div className="text-center w-1/3"><div className="h-16 w-8 bg-blue-500 mx-auto rounded-t"></div><span className="text-[10px] text-blue-400 font-bold block mt-1">Justa</span><span className="text-[9px] text-slate-500">Promedio</span></div>
                <div className="text-center w-1/3"><div className="h-24 w-8 bg-red-500 mx-auto rounded-t opacity-80 animate-pulse"></div><span className="text-[10px] text-red-400 font-bold block mt-1">Cara</span><span className="text-[9px] text-slate-500">P/E Alto</span></div>
            </div>
            <p className="text-xs text-slate-400 mt-2"><strong>P/E Ratio:</strong> Años para recuperar tu inversión con las ganancias actuales.</p>
        </div>
    </div>
);

const MoatTypes = () => (
    <div className="relative mt-6 h-48 w-full max-w-xs mx-auto bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
        {/* Castle */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="w-16 h-12 bg-slate-700 rounded-t-lg flex items-end justify-center border border-slate-500"><Shield size={24} className="text-yellow-400 mb-2" /></div>
            <div className="w-24 h-12 bg-slate-800 rounded-b-lg border border-slate-600 flex items-center justify-center text-[10px] font-bold text-white">EMPRESA</div>
        </div>
        {/* Water (Moat) */}
        <div className="absolute bottom-0 w-full h-24 bg-blue-500/20 border-t border-blue-500/50 flex items-center justify-around px-2">
            <div className="flex flex-col items-center gap-1 group">
                <div className="bg-blue-600 p-2 rounded-full group-hover:scale-110 transition-transform"><Award size={16} className="text-white" /></div>
                <span className="text-[8px] text-blue-200 font-bold">MARCA</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="bg-blue-600 p-2 rounded-full group-hover:scale-110 transition-transform"><Users size={16} className="text-white" /></div>
                <span className="text-[8px] text-blue-200 font-bold">RED</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="bg-blue-600 p-2 rounded-full group-hover:scale-110 transition-transform"><LogOut size={16} className="text-white" /></div>
                <span className="text-[8px] text-blue-200 font-bold">COSTOS</span>
            </div>
        </div>
        <div className="absolute top-2 right-2 text-[9px] text-slate-500">Invasores (Competencia)</div>
    </div>
);

const ManagementAnalysis = () => (
    <div className="flex gap-4 mt-6 justify-center">
        <div className="bg-slate-800 p-4 rounded-xl border border-green-500/50 w-1/2 text-center group hover:bg-slate-750 transition-colors">
            <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <Users className="text-green-400" />
            </div>
            <h5 className="font-bold text-white text-sm">El Fundador</h5>
            <p className="text-[10px] text-slate-400 mt-1">Piensa en décadas. Tiene todo su dinero en la empresa.</p>
            <span className="text-green-400 text-xs font-bold mt-2 block">IDEAL ✅</span>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-red-500/50 w-1/2 text-center group hover:bg-slate-750 transition-colors">
            <div className="bg-red-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <Briefcase className="text-red-400" />
            </div>
            <h5 className="font-bold text-white text-sm">El Mercenario</h5>
            <p className="text-[10px] text-slate-400 mt-1">Piensa en el bono anual. No tiene acciones. Se va si le pagan más.</p>
            <span className="text-red-400 text-xs font-bold mt-2 block">CUIDADO ❌</span>
        </div>
    </div>
);

const MacroAnalysis = () => (
    <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/30 text-center">
            <Sun className="mx-auto text-yellow-400 mb-2" size={32} />
            <h5 className="font-bold text-white text-sm">Tasas Bajan 📉</h5>
            <p className="text-[10px] text-slate-300 mt-1">Dinero barato = Crédito fácil.</p>
            <div className="mt-2 bg-green-500/20 text-green-400 text-[10px] py-1 rounded font-bold">Bolsa Sube 🚀</div>
        </div>
        <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 text-center">
            <CloudRain className="mx-auto text-blue-400 mb-2" size={32} />
            <h5 className="font-bold text-white text-sm">Tasas Suben 📈</h5>
            <p className="text-[10px] text-slate-300 mt-1">Dinero caro = Menos consumo.</p>
            <div className="mt-2 bg-red-500/20 text-red-400 text-[10px] py-1 rounded font-bold">Bolsa Baja 🔻</div>
        </div>
    </div>
);

const GrowthVsValue = () => (
    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 mt-6">
        <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-wide">
            <span>Estilos de Inversión</span>
        </div>
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg"><Zap className="text-purple-400" size={20} /></div>
                <div className="flex-1">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold text-white text-sm">GROWTH (Crecimiento)</span>
                        <span className="text-[10px] bg-purple-500 text-white px-1 rounded">Riesgo Alto</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full"><div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '80%' }}></div></div>
                    <p className="text-[9px] text-slate-400 mt-1">Ej: Tesla, Nvidia. Suben rápido, caen fuerte.</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg"><DollarSign className="text-blue-400" size={20} /></div>
                <div className="flex-1">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold text-white text-sm">VALUE (Valor)</span>
                        <span className="text-[10px] bg-blue-500 text-white px-1 rounded">Riesgo Medio</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full"><div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '40%' }}></div></div>
                    <p className="text-[9px] text-slate-400 mt-1">Ej: Coca-Cola, Bancos. Estables, pagan dividendos.</p>
                </div>
            </div>
        </div>
    </div>
);

const PriceVsValue = () => (
    <div className="flex flex-col items-center mt-6">
        <div className="relative w-full max-w-xs h-32 bg-slate-800 rounded-xl border-b-4 border-slate-700 flex items-center justify-center gap-8">
            <div className="text-center group"><div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow transform rotate-[-10deg] group-hover:scale-110 transition-transform">Precio</div><div className="text-2xl font-bold text-white mt-2">$80</div><p className="text-[10px] text-slate-500">Lo que pagas</p></div>
            <div className="h-16 w-px bg-slate-600"></div>
            <div className="text-center group"><div className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded shadow group-hover:scale-110 transition-transform">Valor</div><div className="text-2xl font-bold text-teal-400 mt-2">$100</div><p className="text-[10px] text-slate-500">Lo que recibes</p></div>
        </div>
        <div className="mt-4 bg-green-500/10 text-green-400 px-4 py-2 rounded-lg text-xs border border-green-500/30"><strong>Margen de Seguridad:</strong> Ganancia inmediata al comprar barato.</div>
    </div>
);

const SellStrategy = () => (
    <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 bg-red-900/20 p-3 rounded-lg border border-red-500/30 opacity-50">
            <TrendingDown className="text-red-500" />
            <div>
                <p className="text-xs font-bold text-red-300 line-through">El precio bajó</p>
                <p className="text-[9px] text-slate-400">¡NO VENDAS POR PÁNICO!</p>
            </div>
        </div>
        <div className="flex items-center gap-3 bg-green-900/20 p-3 rounded-lg border border-green-500/50">
            <FileText className="text-green-500" />
            <div>
                <p className="text-xs font-bold text-green-300">La Tesis cambió</p>
                <p className="text-[9px] text-slate-400">Ej: La empresa perdió su ventaja competitiva.</p>
            </div>
        </div>
        <div className="flex items-center gap-3 bg-green-900/20 p-3 rounded-lg border border-green-500/50">
            <Target className="text-green-500" />
            <div>
                <p className="text-xs font-bold text-green-300">Mejor Oportunidad</p>
                <p className="text-[9px] text-slate-400">Encontraste otra acción mucho más barata y mejor.</p>
            </div>
        </div>
    </div>
);

const ConceptsBar = ({ concepts }: { concepts: any[] }) => {
    const [activeConcept, setActiveConcept] = useState<number | null>(null);
    if (!concepts || concepts.length === 0) return null;
    return (
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-purple-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Conceptos Clave</h4>
            <div className="flex flex-wrap gap-2">
                {concepts.map((concept, idx) => (
                    <div key={idx} className="relative group">
                        <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
                        {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-purple-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-purple-500 transform rotate-45"></div><h5 className="text-purple-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL APP FASE 2 ---

export default function CoursePlayerPhase2() {
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
        let message = `📈 *Resultados FASE 2 (Intermedio)* 📈%0A%0A`;
        message += `Calificación: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    const renderVisual = (type: string) => {
        switch (type) {
            case 'financial_statements': return <FinancialStatements />;
            case 'valuation_metrics': return <ValuationMetrics />;
            case 'moat_types': return <MoatTypes />;
            case 'management_analysis': return <ManagementAnalysis />;
            case 'macro_analysis': return <MacroAnalysis />;
            case 'growth_vs_value': return <GrowthVsValue />;
            case 'price_vs_value': return <PriceVsValue />;
            case 'sell_strategy': return <SellStrategy />;
            default: return null;
        }
    };

    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <div className="max-w-2xl w-full animate-fade-in">
                    <h1 className="text-3xl font-bold text-purple-400 mb-2 text-center">Examen Fase 2</h1>
                    <p className="text-slate-400 text-center mb-8">Análisis Fundamental</p>
                    {!quizSubmitted ? (
                        <div className="space-y-6">
                            {quizQuestions.map((q, index) => (
                                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                                    <p className="font-bold text-lg mb-4 text-white"><span className="text-purple-500 mr-2">#{index + 1}</span> {q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt, i) => (
                                            <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-purple-600 border-purple-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Terminar Fase 2</button></div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-10">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-purple-500/50 mb-8 max-w-md mx-auto shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                <Target className="w-24 h-24 text-purple-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-bold text-white">¡Nivel Intermedio Superado!</h2>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 my-6">{score} / {quizQuestions.length}</div>
                            </div>
                            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados</a>
                            <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-purple-400 text-sm underline">Reiniciar</button>
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
                        <div className="bg-purple-500/10 p-2 rounded-lg"><Search className="text-purple-400" size={20} /></div>
                        <div><span className="font-bold text-white tracking-wider text-sm md:text-base block">MERCADOS<span className="text-purple-400">201</span></span><span className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">Fase 2: Intermedio</span></div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500 ease-out" style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}></div></div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2"><span className="bg-purple-500/10 text-purple-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-purple-500/20">{moduleData.title}</span></div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><BarChart2 size={120} className="text-slate-500" /></div>
                    {renderVisual(lessonData.visualType)}
                </div>
                <div className="space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg"><p className="text-lg md:text-xl text-purple-100 font-medium leading-relaxed">{lessonData.content}</p></div>
                    <div className="flex gap-4 items-start"><div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300" /></div><div><p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p><p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-purple-500 font-bold not-italic">💡 Tip:</span>{lessonData.speakerNotes}</p></div></div>
                    <ConceptsBar concepts={lessonData.concepts} />
                </div>
            </main>

            <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
                    <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-purple-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
                    <button onClick={handleNext} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95"><span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Ir al Examen' : 'Siguiente'}</span><span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
                </div>
            </footer>
            <style>{`@keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}@keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}.animate-fade-in {animation: fade-in 0.5s ease-out forwards;}.animate-fade-in-up {animation: fade-in-up 0.2s ease-out forwards;}`}</style>
        </div>
    );
}
