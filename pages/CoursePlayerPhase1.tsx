import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    ArrowLeft,
    TrendingUp,
    TrendingDown,
    DollarSign,
    PieChart,
    Shield,
    Smartphone,
    Landmark,
    Users,
    Activity,
    Brain,
    Target,
    CheckCircle,
    AlertTriangle,
    Send,
    HelpCircle,
    Info,
    BookOpen,
    Globe,
    Briefcase,
    Layers,
    Sun,
    CloudRain
} from 'lucide-react';

// --- CONFIGURACIÓN DE DATOS DEL CURSO (FASE 1) ---

const courseData = [
    {
        id: 1,
        title: "Módulo 1: El Sistema Financiero",
        description: "Entenderemos el flujo de capital y la estructura base del mercado global.",
        lessons: [
            {
                title: "¿Por qué existe la Bolsa?",
                content: "La bolsa no es mágica. Es simplemente un mecanismo para conectar a quienes tienen dinero con quienes lo necesitan.",
                details: "Imagina que una empresa necesita construir una fábrica nueva. Tiene dos opciones: pedirle prestado al banco (y pagar intereses caros) o invitarte a ti a ser socio. Cuando compras una acción, estás financiando el crecimiento de esa empresa y, a cambio, compartes sus ganancias futuras.",
                visualType: "flowchart_tortilleria",
                speakerNotes: "Olvida las películas de Wall Street por un momento. Piensa en esto como un mercado de abastos: aquí no se venden frutas, se venden pedacitos de negocios productivos.",
                concepts: [
                    { term: "Flujo de Capital", def: "Es el movimiento del dinero. Viaja desde los ahorradores (tú) hacia las empresas productivas para generar valor." },
                    { term: "Accionista", def: "Alguien que posee al menos una acción. Eres literalmente dueño de una fracción de la empresa." },
                    { term: "Financiamiento", def: "Obtener recursos para crecer. Las empresas usan tu dinero para comprar máquinas, abrir tiendas o crear tecnología." }
                ]
            },
            {
                title: "Estructura del Mercado Global",
                content: "El dinero no duerme: Un sistema interconectado.",
                details: "El mercado financiero es global. Aunque tú estés en México, tu dinero puede comprar empresas en China, EE.UU. o Europa a través del Sistema Internacional de Cotizaciones (SIC). No estás limitado a tu país; el flujo de capital es mundial.",
                visualType: "market_structure",
                speakerNotes: "Hoy en día, con un clic en tu celular, puedes ser dueño de empresas en todo el mundo. Entenderemos cómo tu dinero cruza fronteras de forma segura.",
                concepts: [
                    { term: "Mercado Global", def: "La red mundial de bolsas de valores que permite comprar y vender activos de cualquier país." },
                    { term: "SIC", def: "Sistema Internacional de Cotizaciones. Es la 'puerta' que te permite comprar acciones extranjeras (como Apple o Tesla) desde México en pesos." }
                ]
            },
            {
                title: "Los Participantes del Juego",
                content: "¿Quién es quién en tu inversión?",
                details: "Para invertir seguro, debes conocer a los tres jugadores. 1. La Bolsa: El lugar físico/digital (el edificio). 2. El Bróker: Tu aplicación o banco que lleva tu orden. 3. El Regulador: La policía que vigila que nadie robe tu dinero.",
                visualType: "triangle_system",
                speakerNotes: "Tú no puedes ir directo a la Bolsa. Necesitas un Bróker (intermediario). Y para dormir tranquilo, necesitas saber que el Regulador está vigilando.",
                concepts: [
                    { term: "Bróker", def: "La institución financiera (App o Banco) que te da acceso al mercado. Es el único autorizado para ejecutar tus compras." },
                    { term: "Casa de Bolsa", def: "Institución regulada en México encargada de intermediar la oferta y demanda de valores." },
                    { term: "Indeval", def: "Es la 'bóveda' central en México donde se guardan digitalmente todas las acciones. El bróker no tiene tus acciones, las tiene el Indeval a tu nombre." }
                ]
            },
            {
                title: "Instituciones Clave en México",
                content: "Conoce a tus protectores y facilitadores locales.",
                details: "En México, la máxima autoridad es la Secretaría de Hacienda (SHCP). Ella se apoya en la CNBV para vigilar a los bancos y casas de bolsa. Las bolsas donde cotizan las empresas son la BMV (Bolsa Mexicana de Valores) y BIVA (Bolsa Institucional de Valores).",
                visualType: "mx_institutions",
                speakerNotes: "Es vital saber que hay instituciones reales y leyes respaldando tu inversión. No le estás dando dinero a una app desconocida, sino entrando a un sistema regulado por el gobierno.",
                concepts: [
                    { term: "CNBV", def: "Comisión Nacional Bancaria y de Valores. Es el organismo que supervisa y sanciona a las entidades financieras en México." },
                    { term: "BMV", def: "Bolsa Mexicana de Valores. La plaza bursátil más antigua de México donde se compran y venden acciones." },
                    { term: "BIVA", def: "Bolsa Institucional de Valores. La segunda bolsa de México, creada para dar más tecnología y competencia al mercado." }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Módulo 2: Psicología del Dinero",
        description: "Cómo dominar tu mente y entender el valor del tiempo.",
        lessons: [
            {
                title: "El Enemigo Silencioso: Inflación",
                content: "¿Por qué guardar dinero bajo el colchón es perder dinero?",
                details: "El dinero pierde valor con el tiempo porque las cosas se vuelven más caras. $100 pesos de hoy no compran lo mismo que $100 pesos de hace 10 años. Invertir es la única forma de proteger tu poder de compra.",
                visualType: "inflation_monster",
                speakerNotes: "Si dejas tu dinero quieto, se 'pudre' por la inflación. Invertir no es solo para ganar más, es necesario para no empobrecerse.",
                concepts: [
                    { term: "Inflación", def: "El aumento general de los precios. Es el fenómeno que hace que tu dinero valga menos cada año." },
                    { term: "Poder Adquisitivo", def: "La cantidad de bienes o servicios que puedes comprar con una cantidad de dinero determinada." }
                ]
            },
            {
                title: "Interés Compuesto: Tu Mejor Amigo",
                content: "Hacer que el dinero trabaje por ti.",
                details: "Es el efecto bola de nieve. Cuando inviertes, ganas rendimientos. Si reinviertes esos rendimientos, ellos también generan ganancias. A largo plazo, esto crece de forma exponencial, no lineal.",
                visualType: "graph_compound",
                speakerNotes: "Albert Einstein lo llamaba la octava maravilla del mundo. No necesitas ser millonario para empezar, necesitas tiempo y constancia.",
                concepts: [
                    { term: "Interés Simple", def: "Ganancia solo sobre el dinero original que pusiste." },
                    { term: "Interés Compuesto", def: "Ganancia sobre el dinero original MÁS las ganancias acumuladas. Intereses sobre intereses." }
                ]
            },
            {
                title: "Ciclos de Mercado: Miedo y Euforia",
                content: "La bolsa sube y baja, y eso es normal.",
                details: "Los mercados se mueven por emociones humanas. A veces hay euforia (todos compran caro) y a veces hay pánico (todos venden barato). Tu trabajo es mantener la calma. Las crisis son temporales; el crecimiento suele ser permanente a largo plazo.",
                visualType: "market_cycles",
                speakerNotes: "No te asustes cuando veas noticias rojas. Históricamente, después de cada caída fuerte, el mercado se ha recuperado y ha seguido creciendo.",
                concepts: [
                    { term: "Volatilidad", def: "Qué tanto cambia el precio de una inversión. Si sube y baja mucho y muy rápido, es muy volátil." },
                    { term: "Corrección", def: "Una caída temporal en el precio de las acciones (generalmente 10-20%) que sirve para 'ajustar' precios exagerados." }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Módulo 3: Vehículos de Inversión",
        description: "El menú de opciones: Deuda vs. Acciones.",
        lessons: [
            {
                title: "Renta Fija: Convertirte en el Banco",
                content: "Prestar dinero a cambio de un interés seguro.",
                details: "Cuando inviertes en Renta Fija (como CETES o Bonos), le estás prestando dinero al gobierno o a una empresa. Ellos se comprometen a devolverte tu dinero en una fecha exacta con un interés extra. Es la opción más segura.",
                visualType: "renta_fija_detail",
                speakerNotes: "Ideal para tu fondo de emergencia o dinero que vas a necesitar pronto. Sabes cuánto ganarás desde el día uno.",
                concepts: [
                    { term: "CETES", def: "Certificados de la Tesorería. Le prestas dinero al gobierno de México. Es la inversión con menor riesgo en el país." },
                    { term: "Plazo", def: "El tiempo que pactas dejar tu dinero (ej. 28 días, 1 año). Generalmente, a mayor plazo, mayor tasa de interés." }
                ]
            },
            {
                title: "Renta Variable: Ser Dueño de Negocios",
                content: "Comprar acciones para ganar cuando la empresa crece.",
                details: "Aquí no prestas dinero, aquí compras una parte del negocio. No hay promesa de pago fijo. Ganas de dos formas: 1. Si la acción sube de precio (Plusvalía). 2. Si la empresa reparte sus ganancias contigo (Dividendos).",
                visualType: "renta_variable_detail",
                speakerNotes: "Es más riesgoso porque el precio cambia todos los días, pero históricamente genera muchas más ganancias que la renta fija en periodos largos (5, 10, 20 años).",
                concepts: [
                    { term: "Plusvalía", def: "Ganancia que obtienes cuando vendes algo más caro de lo que lo compraste." },
                    { term: "Dividendo", def: "Pago en efectivo que hacen algunas empresas a sus accionistas como reparto de las utilidades generadas." }
                ]
            },
            {
                title: "Fondos y ETFs: La Canasta Inteligente",
                content: "No pongas todos los huevos en la misma canasta.",
                details: "Elegir una sola empresa es difícil y riesgoso. ¿Qué tal si compras todas? Un ETF (Fondo Cotizado) es una canasta que contiene cientos o miles de empresas. Con una sola compra, te vuelves dueño de una pequeña parte de las 500 mejores empresas del mundo (como el S&P 500).",
                visualType: "etf_basket",
                speakerNotes: "Esta es la estrategia recomendada para principiantes. En lugar de buscar la aguja en el pajar, compras el pajar entero. Diversificas tu riesgo automáticamente.",
                concepts: [
                    { term: "Diversificación", def: "Estrategia de invertir en muchas cosas diferentes para reducir el riesgo de perder dinero si una falla." },
                    { term: "S&P 500", def: "Un índice (o lista) de las 500 empresas más grandes de Estados Unidos. Es el estándar mundial de referencia." },
                    { term: "Gestión Pasiva", def: "Invertir siguiendo al mercado (comprando todo el índice) en lugar de tratar de adivinar qué empresa ganará." }
                ]
            },
            {
                title: "¿Qué perfil de inversionista eres?",
                content: "Tu estrategia depende de tus metas y tus nervios.",
                details: "No hay una 'mejor inversión' universal. Todo depende de: 1. Tu horizonte (¿Cuándo necesitas el dinero?). 2. Tu tolerancia al riesgo (¿Te quita el sueño si ves números rojos?).",
                visualType: "risk_profiler",
                speakerNotes: "Si necesitas el dinero en un mes, usa Renta Fija (CETES). Si es para tu retiro en 20 años, la Renta Variable (Acciones/ETFs) es mejor opción para crecer.",
                concepts: [
                    { term: "Horizonte de Inversión", def: "El tiempo que planeas mantener tu dinero invertido antes de usarlo." },
                    { term: "Liquidez", def: "La facilidad y rapidez con la que puedes convertir tu inversión en dinero en efectivo disponible." }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Módulo 4: Tu Primera Plataforma",
        description: "De la teoría a la práctica: abriendo tu cuenta.",
        lessons: [
            {
                title: "Seguridad y Regulación",
                content: "Tu dinero está protegido por la ley.",
                details: "Al invertir en instituciones reguladas, tienes protecciones como el IPAB (para bancos) o la supervisión de la CNBV. Además, tus acciones no las tiene el bróker, están custodiadas centralmente. Si la app del bróker desaparece, tus acciones siguen siendo tuyas.",
                visualType: "security_shields",
                speakerNotes: "Lo más importante es nunca usar plataformas no reguladas (como las que prometen rendimientos mágicos en redes sociales). Si está regulado por la CNBV, es seguro operar.",
                concepts: [
                    { term: "IPAB", def: "Instituto para la Protección al Ahorro Bancario. Seguro gratuito que protege tu dinero en el banco hasta por ~3 millones de pesos." },
                    { term: "Custodia", def: "El servicio de guardia y custodia de valores. En México, el Indeval es quien realmente 'guarda' los registros de que tú eres el dueño." }
                ]
            },
            {
                title: "Tipos de Órdenes: Market vs Limit",
                content: "Cómo decirle al sistema lo que quieres hacer.",
                details: "Cuando presionas 'Comprar', debes especificar cómo. Una 'Orden a Mercado' compra al precio que esté en ese segundo (rápido pero precio incierto). Una 'Orden Limitada' establece un precio máximo que estás dispuesto a pagar (más control).",
                visualType: "order_types",
                speakerNotes: "Regla de oro para principiantes: Usa Órdenes Limitadas. Así evitas sorpresas si el precio se mueve bruscamente justo cuando das clic.",
                concepts: [
                    { term: "Orden de Mercado", def: "Instrucción de compra/venta inmediata al mejor precio disponible en ese instante." },
                    { term: "Orden Limitada", def: "Instrucción de compra/venta solo si el activo llega a un precio específico que tú defines." }
                ]
            }
        ]
    }
];

// ... (Resto de la lógica y componentes de la Fase 1 sin cambios) ...
// (Para ahorrar espacio, asume que aquí van los componentes visuales ya definidos en la versión anterior para los módulos 1-4)

// --- COMPONENTES VISUALES PERSONALIZADOS (FASE 1) ---

const ConceptsBar = ({ concepts }: { concepts: any[] }) => {
    const [activeConcept, setActiveConcept] = useState<number | null>(null);

    if (!concepts || concepts.length === 0) return null;

    return (
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-teal-400 text-sm font-bold uppercase mb-3 flex items-center gap-2">
                <BookOpen size={16} />
                Diccionario (Toca para aprender)
            </h4>
            <div className="flex flex-wrap gap-2">
                {concepts.map((concept, idx) => (
                    <div key={idx} className="relative group">
                        <button
                            onClick={() => setActiveConcept(activeConcept === idx ? null : idx)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx
                                    ? 'bg-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)] scale-105'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600 hover:border-teal-500/50'
                                }`}
                        >
                            <Info size={14} />
                            {concept.term}
                        </button>
                        {activeConcept === idx && (
                            <div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-teal-500 shadow-2xl z-20 animate-fade-in-up">
                                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-teal-500 transform rotate-45"></div>
                                <h5 className="text-teal-400 font-bold mb-2 text-lg">{concept.term}</h5>
                                <p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }}
                                    className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center"
                                >
                                    ×
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// ... (Incluye aquí TortilleriaFlow, MarketStructure, TriangleSystem, MxInstitutions, InflationMonster, CompoundGraph, MarketCycles, RentaFijaDetail, RentaVariableDetail, EtfBasket, RiskProfiler, SecurityShields, OrderTypes tal cual estaban) ...
const TortilleriaFlow = () => (<div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 animate-fade-in"><div className="bg-slate-800 p-6 rounded-xl border border-teal-500/30 text-center w-64 relative shadow-lg"><div className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs px-3 py-1 rounded-full animate-bounce shadow-[0_0_10px_rgba(20,184,166,0.5)]">Necesita Dinero</div><div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-700"><span className="text-4xl">🌽</span></div><h3 className="font-bold text-white text-lg">Empresa Productiva</h3><p className="text-sm text-slate-400">Quiere crecer</p></div><div className="flex flex-col gap-6 w-full md:w-auto"><div className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity bg-slate-800/50 p-3 rounded-lg border border-transparent hover:border-red-500/30"><div className="bg-red-900/20 p-2 rounded-full"><Briefcase className="text-red-400" size={20} /></div><div className="h-1 bg-red-500/50 flex-1 w-16 md:w-24 group-hover:bg-red-500 transition-all rounded-full"></div><ArrowRight className="text-red-500" /><div className="text-left"><p className="font-bold text-red-300 text-sm">Banco</p><p className="text-[10px] text-slate-400">Préstamo (Paga Interés)</p></div></div><div className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity bg-slate-800/50 p-3 rounded-lg border border-transparent hover:border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.1)]"><div className="bg-teal-900/20 p-2 rounded-full"><Users className="text-teal-400" size={20} /></div><div className="h-1 bg-teal-500/50 flex-1 w-16 md:w-24 group-hover:bg-teal-500 transition-all rounded-full"></div><ArrowRight className="text-teal-500" /><div className="text-left"><p className="font-bold text-teal-300 text-sm">Inversionistas (Tú)</p><p className="text-[10px] text-slate-400">Socios (Comparten Ganancias)</p></div></div></div></div>);
const MarketStructure = () => (<div className="relative h-72 w-full max-w-lg mx-auto mt-4 bg-slate-900 rounded-full border border-slate-800 overflow-hidden flex items-center justify-center"><div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">{[...Array(36)].map((_, i) => <div key={i} className="border border-teal-900/30"></div>)}</div><div className="relative z-10 flex flex-col items-center"><div className="bg-teal-600 p-4 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.4)] animate-pulse-slow"><Globe size={48} className="text-white" /></div><h3 className="text-white font-bold mt-4 text-xl tracking-wider">MERCADO GLOBAL</h3><p className="text-slate-400 text-xs mt-1 text-center max-w-[200px]">Tu dinero viaja desde México al mundo</p></div><div className="absolute w-full h-full animate-spin-slow-hover"><div className="absolute top-10 left-1/2 -translate-x-1/2 bg-slate-800 px-3 py-1 rounded-full border border-slate-600 text-xs font-bold text-slate-300 shadow-lg flex items-center gap-1"><span className="text-blue-400">🇺🇸</span> Apple</div><div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 px-3 py-1 rounded-full border border-slate-600 text-xs font-bold text-slate-300 shadow-lg flex items-center gap-1"><span className="text-red-400">🇨🇳</span> Alibaba</div><div className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-800 px-3 py-1 rounded-full border border-slate-600 text-xs font-bold text-slate-300 shadow-lg flex items-center gap-1"><span className="text-yellow-400">🇩🇪</span> Adidas</div><div className="absolute top-1/2 left-4 -translate-y-1/2 bg-slate-800 px-3 py-1 rounded-full border border-slate-600 text-xs font-bold text-slate-300 shadow-lg flex items-center gap-1"><span className="text-green-400">🇲🇽</span> Bimbo</div></div></div>);
const TriangleSystem = () => (<div className="relative h-72 w-full max-w-md mx-auto mt-6"><svg className="absolute top-12 left-0 w-full h-48 -z-10 pointer-events-none"><path d="M 200 20 L 60 160" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" /><path d="M 200 20 L 340 160" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" /><path d="M 80 180 L 320 180" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" /></svg><div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer w-32"><div className="bg-teal-500 p-4 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)] group-hover:scale-110 transition-transform z-10"><Landmark className="text-white w-8 h-8" /></div><div className="mt-2 bg-slate-800 p-3 rounded-lg text-center border border-teal-500/30 shadow-lg z-20"><span className="text-teal-300 font-bold block text-sm">La Bolsa</span><span className="text-[10px] text-slate-400 leading-tight block mt-1">El Mercado</span></div></div><div className="absolute bottom-0 left-0 flex flex-col items-center group cursor-pointer w-28"><div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.5)] z-10"><Smartphone className="text-white w-6 h-6" /></div><div className="mt-2 bg-slate-800 p-2 rounded-lg text-center border border-blue-500/30 shadow-lg z-20"><span className="text-blue-300 font-bold block text-sm">Bróker</span><span className="text-[10px] text-slate-400 leading-tight block mt-1">Tu App</span></div></div><div className="absolute bottom-0 right-0 flex flex-col items-center group cursor-pointer w-28"><div className="bg-purple-600 p-4 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(147,51,234,0.5)] z-10"><Shield className="text-white w-6 h-6" /></div><div className="mt-2 bg-slate-800 p-2 rounded-lg text-center border border-purple-500/30 shadow-lg z-20"><span className="text-purple-300 font-bold block text-sm">Regulador</span><span className="text-[10px] text-slate-400 leading-tight block mt-1">La Ley</span></div></div></div>);
const MxInstitutions = () => (<div className="flex flex-col gap-4 mt-4"><div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-yellow-500 flex items-center gap-4 hover:bg-slate-800 transition-colors"><div className="bg-yellow-500/20 p-3 rounded-full"><Landmark className="text-yellow-500" size={24} /></div><div><h4 className="font-bold text-white">SHCP & CNBV</h4><p className="text-xs text-slate-400">Las autoridades. Vigilan que los bancos y brókers no desaparezcan con tu dinero.</p></div></div><div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-green-500 flex items-center gap-4 hover:bg-slate-800 transition-colors"><div className="bg-green-500/20 p-3 rounded-full"><TrendingUp className="text-green-500" size={24} /></div><div><h4 className="font-bold text-white">BMV & BIVA</h4><p className="text-xs text-slate-400">Las Bolsas. Son los "supermercados" donde las empresas ponen sus acciones a la venta.</p></div></div><div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-blue-500 flex items-center gap-4 hover:bg-slate-800 transition-colors"><div className="bg-blue-500/20 p-3 rounded-full"><Layers className="text-blue-500" size={24} /></div><div><h4 className="font-bold text-white">INDEVAL</h4><p className="text-xs text-slate-400">La Bóveda Digital. Aquí es donde realmente se guardan tus acciones.</p></div></div></div>);
const InflationMonster = () => (<div className="relative bg-slate-800 rounded-xl p-6 mt-4 overflow-hidden border border-slate-700"><div className="flex justify-between items-center relative z-10"><div className="text-center"><p className="text-xs text-slate-400 mb-1">Año 2010</p><div className="bg-green-500/20 text-green-400 px-3 py-1 rounded font-bold border border-green-500/30">$1,000</div><p className="text-[10px] text-slate-500 mt-2">Alcanzaba para<br />un carrito lleno</p></div><div className="flex flex-col items-center"><ArrowRight className="text-red-500 animate-pulse" /><span className="text-[10px] text-red-400 font-bold uppercase mt-1">Efecto Inflación</span></div><div className="text-center"><p className="text-xs text-slate-400 mb-1">Hoy</p><div className="bg-green-500/20 text-green-400 px-3 py-1 rounded font-bold border border-green-500/30">$1,000</div><p className="text-[10px] text-slate-500 mt-2">Solo alcanza para<br />medio carrito</p></div></div><div className="absolute -bottom-4 -right-4 opacity-10 text-red-500 transform rotate-12 pointer-events-none"><TrendingDown size={150} /></div></div>);
const CompoundGraph = () => (<div className="h-64 flex items-end justify-around gap-4 p-4 border-l border-b border-slate-600 mt-6 relative bg-slate-800/20 rounded-tr-xl"><div className="w-8 bg-slate-600 h-1/4 rounded-t relative group flex flex-col justify-end items-center"><span className="mb-2 text-[10px] text-slate-400 rotate-90 md:rotate-0 whitespace-nowrap">Ahorro Normal</span></div><div className="w-8 bg-slate-600 h-2/4 rounded-t"></div><div className="w-8 bg-slate-600 h-3/4 rounded-t"></div><div className="w-8 bg-teal-500 h-1/4 rounded-t relative group shadow-[0_0_10px_rgba(20,184,166,0.4)]"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-teal-300 font-bold whitespace-nowrap">Inversión</span></div><div className="w-8 bg-teal-500 h-2/3 rounded-t shadow-[0_0_10px_rgba(20,184,166,0.4)]"></div><div className="w-8 bg-teal-500 h-full rounded-t shadow-[0_0_10px_rgba(20,184,166,0.4)] relative"><div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] px-2 py-1 rounded shadow-lg animate-bounce">¡Crecimiento!</div></div></div>);
const MarketCycles = () => (<div className="relative mt-6 p-4 bg-slate-800 rounded-xl border border-slate-700"><h4 className="text-center text-white font-bold mb-4">El Ciclo de Emociones</h4><div className="relative h-40 w-full"><svg viewBox="0 0 300 100" className="w-full h-full drop-shadow-lg"><path d="M 0 80 Q 40 80, 75 30 T 150 80 T 225 30 T 300 10" fill="none" stroke="#14B8A6" strokeWidth="3" /><circle cx="75" cy="30" r="4" fill="#fbbf24" /><circle cx="150" cy="80" r="4" fill="#ef4444" /><circle cx="225" cy="30" r="4" fill="#fbbf24" /><text x="75" y="20" fill="#fbbf24" fontSize="8" textAnchor="middle">Euforia (Caro)</text><text x="150" y="95" fill="#ef4444" fontSize="8" textAnchor="middle">Pánico (Barato)</text><text x="225" y="20" fill="#fbbf24" fontSize="8" textAnchor="middle">Recuperación</text></svg></div><p className="text-xs text-center text-slate-400 mt-2">La mayoría compra en la Euforia y vende en el Pánico. <br /> <strong className="text-teal-400">Tú debes hacer lo contrario.</strong></p></div>);
const RentaFijaDetail = () => (<div className="bg-slate-800 p-6 rounded-xl border border-blue-500/30 flex flex-col items-center text-center mt-4"><div className="bg-blue-500/20 p-4 rounded-full mb-4"><DollarSign className="text-blue-400 w-10 h-10" /></div><h3 className="text-xl font-bold text-white mb-2">Prestamista</h3><p className="text-sm text-slate-300 mb-4">Le prestas tu dinero al Gobierno (CETES) o a Bancos (Pagarés).</p><div className="w-full bg-slate-700/50 rounded-lg p-3 text-left space-y-2"><div className="flex justify-between text-xs"><span className="text-slate-400">Riesgo:</span><span className="text-green-400 font-bold">Muy Bajo 🛡️</span></div><div className="flex justify-between text-xs"><span className="text-slate-400">Ganancia:</span><span className="text-blue-300 font-bold">Fija y Conocida</span></div><div className="flex justify-between text-xs"><span className="text-slate-400">Ideal para:</span><span className="text-white font-bold">Fondo de Emergencia</span></div></div></div>);
const RentaVariableDetail = () => (<div className="bg-slate-800 p-6 rounded-xl border border-teal-500/30 flex flex-col items-center text-center mt-4"><div className="bg-teal-500/20 p-4 rounded-full mb-4"><PieChart className="text-teal-400 w-10 h-10" /></div><h3 className="text-xl font-bold text-white mb-2">Dueño (Socio)</h3><p className="text-sm text-slate-300 mb-4">Compras pedacitos de empresas como Bimbo, Google o Tesla.</p><div className="w-full bg-slate-700/50 rounded-lg p-3 text-left space-y-2"><div className="flex justify-between text-xs"><span className="text-slate-400">Riesgo:</span><span className="text-yellow-400 font-bold">Medio/Alto ⚠️</span></div><div className="flex justify-between text-xs"><span className="text-slate-400">Ganancia:</span><span className="text-teal-300 font-bold">Potencial Ilimitado</span></div><div className="flex justify-between text-xs"><span className="text-slate-400">Ideal para:</span><span className="text-white font-bold">Crecer Patrimonio (+5 años)</span></div></div></div>);
const EtfBasket = () => (<div className="flex flex-col gap-6 mt-6"><div className="flex justify-center"><div className="relative w-40 h-40 bg-slate-800 rounded-full flex items-center justify-center border-4 border-dashed border-teal-500/50 animate-spin-slow-hover cursor-pointer shadow-[0_0_30px_rgba(20,184,166,0.2)]"><div className="text-center z-10"><p className="font-bold text-white text-xl">ETF</p><p className="text-xs text-teal-400">La Canasta</p></div><div className="absolute top-4 left-6 bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-[8px] border border-teal-500/30 text-slate-300">AAPL</div><div className="absolute bottom-6 right-6 bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-[8px] border border-teal-500/30 text-slate-300">GOOG</div><div className="absolute top-8 right-4 bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-[8px] border border-teal-500/30 text-slate-300">AMZN</div><div className="absolute bottom-4 left-8 bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-[8px] border border-teal-500/30 text-slate-300">TSLA</div></div></div><div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-4 rounded-xl border border-slate-700 text-center"><h5 className="font-bold text-teal-400 mb-2">Diversificación Instantánea</h5><p className="text-xs text-slate-300 leading-relaxed">Al comprar 1 título de un ETF (como el VOO o IVVPESO), automáticamente estás comprando una fracción de las 500 empresas más grandes.</p></div></div>);
const RiskProfiler = () => { const [profile, setProfile] = useState('moderado'); const profiles: any = { conservador: { color: 'bg-green-500', text: 'text-green-400', title: 'Conservador', desc: 'Prefieres dormir tranquilo. Tu prioridad es no perder ni un centavo, aunque ganes poco.', mix: { rf: '80%', rv: '20%' }, example: "CETES y Bonos" }, moderado: { color: 'bg-blue-500', text: 'text-blue-400', title: 'Moderado', desc: 'Buscas un equilibrio. Quieres crecer tu dinero pero sin sufrir infartos con las caídas.', mix: { rf: '50%', rv: '50%' }, example: "Mezcla Balanceada" }, agresivo: { color: 'bg-orange-500', text: 'text-orange-400', title: 'Agresivo', desc: 'Vas a largo plazo (más de 10 años). Entiendes que las caídas son ofertas para comprar más.', mix: { rf: '10%', rv: '90%' }, example: "Acciones y ETFs" } }; const current = profiles[profile]; return (<div className="bg-slate-800 p-4 rounded-xl border border-slate-700 mt-4"><h3 className="text-white font-bold text-center mb-4 text-sm uppercase tracking-widest">Brújula de Riesgo</h3><div className="flex justify-center gap-2 mb-6">{Object.keys(profiles).map((key) => (<button key={key} onClick={() => setProfile(key)} className={`px-3 py-2 rounded text-xs uppercase font-bold transition-all ${profile === key ? 'bg-slate-200 text-slate-900 shadow-lg scale-105' : 'bg-slate-700 text-slate-400'}`}>{key}</button>))}</div><div className="flex flex-col items-center animate-fade-in"><div className={`text-3xl font-bold mb-2 ${current.text}`}>{current.title}</div><p className="text-center text-slate-400 text-sm mb-6 px-4 leading-relaxed">{current.desc}</p><div className="w-full max-w-xs space-y-3 bg-slate-900/50 p-4 rounded-xl border border-slate-700"><p className="text-xs text-slate-500 uppercase tracking-wide font-bold text-center">Tu mezcla ideal</p><div className="flex h-6 rounded-full overflow-hidden w-full"><div className="bg-blue-600 h-full flex items-center justify-center text-[9px] text-white font-bold transition-all duration-500" style={{ width: current.mix.rf }}>{current.mix.rf}</div><div className="bg-teal-500 h-full flex items-center justify-center text-[9px] text-white font-bold transition-all duration-500" style={{ width: current.mix.rv }}>{current.mix.rv}</div></div><div className="flex justify-between text-[10px] text-slate-400 px-1 font-medium"><span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Seguro (Deuda)</span><span className="flex items-center gap-1"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Crecimiento (Acciones)</span></div></div></div></div>); };
const SecurityShields = () => (<div className="flex flex-col gap-4 mt-6"><div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border-l-4 border-green-500 shadow-lg"><div className="bg-green-500/20 p-3 rounded-full"><Shield className="text-green-500" size={24} /></div><div><h3 className="font-bold text-white">IPAB (Bancos)</h3><p className="text-xs text-slate-400 leading-tight">Si el banco quiebra, el gobierno te devuelve hasta 400 mil UDIs (aprox 3 millones de pesos).</p></div></div><div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500 shadow-lg"><div className="bg-blue-500/20 p-3 rounded-full"><Layers className="text-blue-500" size={24} /></div><div><h3 className="font-bold text-white">Indeval (Inversiones)</h3><p className="text-xs text-slate-400 leading-tight">Tus acciones están centralizadas aquí. Si la casa de bolsa (el intermediario) quiebra, tus acciones se mueven a otra casa de bolsa.</p></div></div></div>);
const OrderTypes = () => (<div className="bg-slate-800 p-5 rounded-xl mt-6 max-w-sm mx-auto border border-slate-700 shadow-xl"><div className="flex justify-between mb-6 border-b border-slate-700 pb-2"><span className="text-slate-400 text-sm font-medium">Comprar Acción de:</span><span className="text-white font-bold">Ejemplo S.A.</span></div><div className="space-y-4"><div className="bg-slate-700/30 p-4 rounded-lg flex items-center justify-between cursor-pointer border border-transparent hover:border-red-500/50 opacity-60 hover:opacity-100 transition-all group"><div><p className="text-red-400 font-bold text-sm mb-1 group-hover:text-red-300">A Mercado (Market)</p><p className="text-[10px] text-slate-400">"Cómpralo YA al precio que sea"</p><span className="text-[9px] text-red-400/80 mt-1 block">Riesgo: Puede salir más caro de lo que ves.</span></div><Activity size={20} className="text-red-400 group-hover:scale-110 transition-transform" /></div><div className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between cursor-pointer border-2 border-teal-500 relative overflow-hidden shadow-[0_0_15px_rgba(20,184,166,0.15)]"><div className="absolute top-0 right-0 bg-teal-500 text-white text-[9px] px-2 py-0.5 rounded-bl font-bold tracking-wide">RECOMENDADO</div><div><p className="text-teal-400 font-bold text-sm mb-1">Limitada (Limit)</p><p className="text-[10px] text-slate-400">"Cómpralo SOLO si cuesta $X o menos"</p><span className="text-[9px] text-teal-400/80 mt-1 block">Ventaja: Control total de tu dinero.</span></div><CheckCircle size={20} className="text-teal-400 animate-pulse" /></div></div></div>);

const quizQuestions = [
    { id: 1, question: "¿Qué significa ser accionista de una empresa?", options: ["Que le prestaste dinero a la empresa.", "Que eres dueño de una pequeña parte.", "Que trabajas para la empresa.", "Que te deben intereses."], correct: 1 },
    { id: 2, question: "¿Por qué es importante la inflación?", options: ["No importa.", "Porque hace que mi dinero valga menos con el tiempo.", "Porque baja los precios.", "Porque el gobierno me paga."], correct: 1 },
    { id: 3, question: "¿Cuál es la inversión más segura en México?", options: ["Bitcoin.", "Startups.", "CETES.", "Bajo el colchón."], correct: 2 },
    { id: 4, question: "¿Qué es un ETF?", options: ["Un impuesto.", "Una 'canasta' de muchas acciones.", "Una criptomoneda.", "Un banco."], correct: 1 },
    { id: 5, question: "¿Qué institución supervisa a los brókers en México?", options: ["FIFA.", "CNBV.", "INE.", "PROFECO."], correct: 1 }
];

// --- COMPONENTE PRINCIPAL APP (LÓGICA IGUAL, SOLO RENDERIZA HASTA MOD 4) ---
export default function CoursePlayerPhase1() {
    const [currentModule, setCurrentModule] = useState(0);
    const [currentLesson, setCurrentLesson] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<any>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const moduleData = courseData[currentModule];
    const lessonData = moduleData.lessons[currentLesson];
    const totalModules = courseData.length;

    // ... (Mismos handlers handleNext, handlePrev, submitQuiz, generateWhatsAppLink, renderVisual) ...
    // Para ahorrar espacio en esta respuesta, asume que la lógica es idéntica al archivo anterior.

    const handleNext = () => {
        if (currentLesson < moduleData.lessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        } else if (currentModule < totalModules - 1) {
            setCurrentModule(currentModule + 1);
            setCurrentLesson(0);
        } else {
            setShowQuiz(true);
        }
    };

    const handlePrev = () => {
        if (currentLesson > 0) {
            setCurrentLesson(currentLesson - 1);
        } else if (currentModule > 0) {
            setCurrentModule(currentModule - 1);
            setCurrentLesson(courseData[currentModule - 1].lessons.length - 1);
        }
    };

    const handleQuizAnswer = (questionId: number, optionIndex: number) => {
        setQuizAnswers({ ...quizAnswers, [questionId]: optionIndex });
    };

    const submitQuiz = () => {
        let calculatedScore = 0;
        quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correct) calculatedScore++; });
        setScore(calculatedScore);
        setQuizSubmitted(true);
    };

    const generateWhatsAppLink = () => {
        const phoneNumber = "527711960057";
        let message = `🚀 *Resultados FASE 1* 🚀%0A%0A`;
        message += `Calificación: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    const renderVisual = (type: string) => {
        switch (type) {
            case 'flowchart_tortilleria': return <TortilleriaFlow />;
            case 'market_structure': return <MarketStructure />;
            case 'triangle_system': return <TriangleSystem />;
            case 'mx_institutions': return <MxInstitutions />;
            case 'inflation_monster': return <InflationMonster />;
            case 'graph_compound': return <CompoundGraph />;
            case 'market_cycles': return <MarketCycles />;
            case 'renta_fija_detail': return <RentaFijaDetail />;
            case 'renta_variable_detail': return <RentaVariableDetail />;
            case 'etf_basket': return <EtfBasket />;
            case 'risk_profiler': return <RiskProfiler />;
            case 'security_shields': return <SecurityShields />;
            case 'order_types': return <OrderTypes />;
            default: return null;
        }
    };

    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <div className="max-w-2xl w-full animate-fade-in">
                    <h1 className="text-3xl font-bold text-teal-400 mb-2 text-center">Examen Fase 1</h1>
                    <p className="text-slate-400 text-center mb-8">Conceptos Básicos</p>
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
                            <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Terminar Fase 1</button></div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-10">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-teal-500/50 mb-8 max-w-md mx-auto shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                                <Target className="w-24 h-24 text-teal-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-bold text-white">¡Fase 1 Completada!</h2>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 my-6">{score} / {quizQuestions.length}</div>
                            </div>
                            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados</a>
                            <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentModule(0); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-teal-400 text-sm underline">Reiniciar</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
            {/* HEADER FASE 1 */}
            <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-teal-500/10 p-2 rounded-lg"><TrendingUp className="text-teal-400" size={20} /></div>
                        <div><span className="font-bold text-white tracking-wider text-sm md:text-base block">MERCADOS<span className="text-teal-400">101</span></span><span className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">Fase 1: Introducción</span></div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Módulo {currentModule + 1} <span className="text-slate-600">/</span> {totalModules}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out" style={{ width: `${((currentModule * 100) / totalModules) + ((currentLesson + 1) * (100 / totalModules) / moduleData.lessons.length)}%` }}></div></div>
            </header>

            {/* CONTENT FASE 1 */}
            <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2"><span className="bg-teal-500/10 text-teal-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-teal-500/20">{moduleData.title}</span></div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Activity size={120} className="text-slate-500" /></div>
                    {renderVisual(lessonData.visualType)}
                </div>
                <div className="space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-teal-500 shadow-lg"><p className="text-lg md:text-xl text-teal-100 font-medium leading-relaxed">{lessonData.content}</p></div>
                    <div className="flex gap-4 items-start"><div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300" /></div><div><p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p><p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-teal-500 font-bold not-italic">💡 Tip:</span>{lessonData.speakerNotes}</p></div></div>
                    <ConceptsBar concepts={lessonData.concepts} />
                </div>
            </main>

            <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <button onClick={handlePrev} disabled={currentModule === 0 && currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
                    <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-teal-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
                    <button onClick={handleNext} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95"><span className="hidden md:inline">{currentModule === totalModules - 1 && currentLesson === moduleData.lessons.length - 1 ? 'Ir al Examen' : 'Siguiente'}</span><span className="md:hidden">{currentModule === totalModules - 1 && currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
                </div>
            </footer>
            <style>{`@keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}@keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}.animate-fade-in {animation: fade-in 0.5s ease-out forwards;}.animate-fade-in-up {animation: fade-in-up 0.2s ease-out forwards;}.animate-pulse-slow {animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;}.animate-spin-slow-hover:hover {animation: spin 8s linear infinite;}@keyframes spin {from { transform: rotate(0deg); }to { transform: rotate(360deg); }}`}</style>
        </div>
    );
}
