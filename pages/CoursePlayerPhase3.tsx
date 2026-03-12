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
                title: "Price Action: Estructura de Mercado (HH / LL)",
                content: "Antes de cualquier indicador: aprende a leer la huella que dejan compradores y vendedores.",
                details: "La Estructura de Mercado es el fundamento de todo análisis técnico. Si el mercado hace Máximos Más Altos (Higher Highs) y Mínimos Más Altos (Higher Lows), está en tendencia ALCISTA. Si hace Máximos Más Bajos (Lower Highs) y Mínimos Más Bajos (Lower Lows), está en tendencia BAJISTA. Un cambio en esta estructura (denominado 'Break of Structure' o BOS) es la primera señal real de un cambio de dirección — antes que cualquier indicador. En BIMBOA.MX durante el primer trimestre de 2024, el precio comenzó a hacer LH y LL desde los $82, señal de debilidad estructural antes del crash del -18%.",
                visualType: "market_structure_hh_ll",
                speakerNotes: "Stanley Druckenmiller dijo: 'Never fight the tape.' Si la estructura es bajista, no hay RSI en sobreventa que justifique comprar. Primero espera el BOS (cambio de estructura), luego el pullback, luego la entrada.",
                concepts: [
                    { term: "Higher High (HH)", def: "Máximo Más Alto. El precio supera el techo anterior. Señal de que los compradores siguen empujando." },
                    { term: "Higher Low (HL)", def: "Mínimo Más Alto. El precio no cae tan bajo como antes. Señal de que los vendedores se debilitan." },
                    { term: "Break of Structure (BOS)", def: "Ruptura de estructura: el precio rompe el último máximo (alcista) o el último mínimo (bajista). Es la primera señal real de cambio de tendencia." },
                    { term: "Quiebre de Estructura (CHoCH)", def: "Change of Character. El primer HH que rompe en una tendencia bajista (o primer LL en alcista). Es la señal de alerta temprana." }
                ]
            },
            {
                title: "Volumen Real vs. Volumen de Tick: Confirmando Rupturas",
                content: "Un precio que sube sin volumen es un globo de helio: bonito, pero vacío.",
                details: "El Volumen es el número de acciones/contratos negociados en un periodo. Es el combustible del mercado. Una ruptura (Breakout) necesita volumen alto para ser válida. Si Meta (META) rompe una resistencia de $500 con volumen 3x mayor al promedio, es señal real. Si lo hace con 30% del volumen normal, hay altas probabilidades de que sea un 'Bull Trap' (trampa alcista): el precio rompe para arriba, atrae compradores, y luego colapsa. En BIMBOA, los días de mayor volumen correlacionan históricamente con noticias fundamentales (resultados trimestrales), lo que crea divergencia entre precio y volumen.",
                visualType: "volume_analysis",
                speakerNotes: "Jesse Livermore: 'El volumen es la huella de los grandes jugadores.' Si el precio sube pero el volumen baja (divergencia bajista de volumen), los institucionales están vendiendo discretamente mientras los minoristas compran.",
                concepts: [
                    { term: "Volumen Promedio (ADV)", def: "Average Daily Volume. La media de contratos negociados en una ventana de tiempo (comúnmente 20 sesiones). Es la referencia para detectar anomalías." },
                    { term: "Bull Trap", def: "Trampa alcista. El precio supera una resistencia con poco volumen, atrae compradores, y luego regresa al rango original dejando a los compradores atrapados en pérdida." },
                    { term: "Volumen de Tick", def: "En mercados Forex/CFDs, el volumen real no existe. Se usa el 'tick volume' (número de cambios de precio), que es un proxy imperfecto del volumen real." },
                    { term: "Divergencia de Volumen", def: "Cuando el precio sube (o baja) pero el volumen va en dirección contraria. Es señal temprana de debilitamiento de la tendencia." }
                ]
            },
            {
                title: "Gestión de Riesgo Visual: Ratio Riesgo:Beneficio con BIMBOA",
                content: "La entrada es solo el 20% del éxito. El 80% está en dónde pones el Stop y el Target.",
                details: "Caso real BIMBOA (BMV). El precio cayó a $65 MXN (zona de soporte doble fondo). Antes de entrar, el trader profesional dibuja 3 líneas: (1) ENTRADA: $66.50 en cierre por encima del doble fondo. (2) STOP-LOSS: $60.00 — debajo del soporte, si lo pierde el tesis es incorrecto. (3) TAKE PROFIT: $82.00 — resistencia histórica de largo plazo. Esto da: Riesgo = $6.50 / Beneficio = $15.50 → Ratio R:B = 1:2.38. Con solo el 42% de operaciones ganadoras con este ratio, el sistema es RENTABLE. Esta es la matemática que los institucionales aplican en cada operación.",
                visualType: "risk_reward_bimbo",
                speakerNotes: "Paul Tudor Jones: 'La clave no es acertar, sino cuánto ganas cuando aciertas vs cuánto pierdes cuando te equivocas.' Un sistema con 40% de aciertos y ratio 1:3 bate a uno con 70% de aciertos y ratio 1:1.",
                concepts: [
                    { term: "Ratio R:B (Risk:Reward)", def: "Riesgo vs Beneficio esperado. Con ratio 1:2 necesitas acertar solo el 34% para ser rentable. Con 1:3, solo el 26%." },
                    { term: "Stop Loss inteligente", def: "Debe ir detrás de un nivel técnico (soporte, resistencia, media móvil). Un stop de 'precio redondo' no tiene lógica técnica." },
                    { term: "Take Profit escalonado", def: "Salida en 2 o 3 partes: 1/3 en primer objetivo, 1/3 en punto medio, 1/3 dejar correr. Optimiza la captura de tendencia." },
                    { term: "Expectativa Matemática", def: "E = (P_ganar × Ganancia_media) - (P_perder × Pérdida_media). Si es positiva, el sistema es rentable a largo plazo." }
                ]
            },
            {
                title: "Uso de Temporalidades: El Marco Manda",
                content: "Una tendencia alcista diaria puede tener una corrección bajista de 4 horas. Saber cuál frame domina evita errores costosos.",
                details: "El análisis Multi-Timeframe (MTF) es la técnica que usan los traders institucionales. La regla: el marco mayor siempre domina al marco menor. Si en el Daily de BIMBOA hay tendencia bajista (LH/LL) pero en el de 15 minutos parece alcista, es un rebote dentro de una caída mayor — no un cambio real. La metodología clásica de Stan Weinstein usa el Weekly para definir la 'fase' (Acumulación, Ascenso, Distribución, Descenso). El Daily para la entrada. El 1H o 4H para el timing exacto y el Stop preciso.",
                visualType: "multi_timeframe",
                speakerNotes: "Riesgo del novato: ver solo el gráfico de 5 minutos y creer que tiene el panorama completo. Es como navegaren un barco mirando solo el suelo del barco. Necesitas ver el mapa completo antes.",
                concepts: [
                    { term: "Top-Down Analysis", def: "Análisis de arriba hacia abajo. Empieza en el Weekly/Monthly para el contexto macro, baja al Daily para la tendencia, entra con el H4 o H1." },
                    { term: "Confluencia de Marcos", def: "La señal más poderosa ocurre cuando 3 temporalidades diferentes muestran la misma dirección al mismo tiempo." },
                    { term: "Fase Weinstein (Stage 1-4)", def: "Stan Weinstein clasificó el ciclo de toda acción en 4 etapas: Acumulación (base), Avance (compra), Distribución (techo), Declive (evitar)." },
                    { term: "Trap en Marco Menor", def: "Una señal falsa en 15min que parece breakout pero es ruido desde el Daily. Solo visible con análisis multi-marco." }
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

// ── 1. MARKET STRUCTURE HH/LL ──────────────────────
const MarketStructureHHLL = () => {
    const [phase, setPhase] = useState<'alcista'|'bajista'>('alcista');
    const bullPoints = [
        {x:20,y:110},{x:50,y:80},{x:80,y:60},{x:110,y:85},{x:140,y:45},{x:170,y:65},{x:200,y:28},{x:230,y:50}
    ];
    const bearPoints = [
        {x:20,y:30},{x:50,y:55},{x:80,y:45},{x:110,y:70},{x:140,y:58},{x:170,y:85},{x:200,y:72},{x:230,y:100}
    ];
    const pts = phase === 'alcista' ? bullPoints : bearPoints;
    const polyline = pts.map(p=>`${p.x},${p.y}`).join(' ');
    const labels = phase === 'alcista'
        ? [{x:80,y:53,t:'HH',c:'#22c55e'},{x:140,y:38,t:'HH',c:'#22c55e'},{x:200,y:21,t:'HH',c:'#22c55e'},{x:50,y:73,t:'HL',c:'#86efac'},{x:110,y:78,t:'HL',c:'#86efac'},{x:170,y:58,t:'HL',c:'#86efac'}]
        : [{x:50,y:48,t:'LH',c:'#ef4444'},{x:110,y:63,t:'LH',c:'#ef4444'},{x:170,y:78,t:'LH',c:'#ef4444'},{x:80,y:38,t:'LL',c:'#fca5a5'},{x:140,y:51,t:'LL',c:'#fca5a5'},{x:200,y:65,t:'LL',c:'#fca5a5'}];
    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest">Estructura de Mercado — BIMBOA.MX</h4>
                <div className="flex gap-1">
                    {(['alcista','bajista'] as const).map(p=>(
                        <button key={p} onClick={()=>setPhase(p)} className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${phase===p?(p==='alcista'?'bg-emerald-600 text-white':'bg-red-600 text-white'):'bg-slate-700 text-slate-400'}`}>{p==='alcista'?'📈 Alcista':'📉 Bajista'}</button>
                    ))}
                </div>
            </div>
            <svg viewBox="0 0 260 130" className="w-full h-48 bg-slate-950 rounded-lg border border-slate-800">
                {[30,60,90,120].map(y=><line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#1e293b" strokeWidth="1"/>)}
                <polyline points={polyline} fill="none" stroke={phase==='alcista'?'#22c55e':'#ef4444'} strokeWidth="2.5" strokeLinejoin="round"/>
                {pts.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="4" fill={phase==='alcista'?'#22c55e':'#ef4444'}/>)}
                {labels.map((l,i)=><text key={i} x={l.x-8} y={l.y-8} fill={l.c} fontSize="9" fontWeight="bold">{l.t}</text>)}
                {phase==='alcista' && <text x="160" y="20" fill="#22c55e" fontSize="8">BOS →</text>}
                {phase==='bajista' && <text x="160" y="115" fill="#ef4444" fontSize="8">BOS ↓</text>}
                <text x="5" y="12" fill="#64748b" fontSize="7">BIMBOA Estructura {phase==='alcista'?'Alcista':'Bajista'}</text>
            </svg>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                {(phase==='alcista'
                    ? [{l:'HH',d:'Máximo más alto',c:'text-emerald-400'},{l:'HL',d:'Mínimo más alto',c:'text-emerald-300'},{l:'BOS ↑',d:'Ruptura de estructura alcista',c:'text-emerald-400'},{l:'Señal',d:'Tendencia confirmada al subir',c:'text-white'}]
                    : [{l:'LH',d:'Máximo más bajo',c:'text-red-400'},{l:'LL',d:'Mínimo más bajo',c:'text-red-300'},{l:'BOS ↓',d:'Ruptura de estructura bajista',c:'text-red-400'},{l:'Señal',d:'Salir / no comprar',c:'text-white'}]
                ).map((item,i)=>(
                    <div key={i} className="bg-slate-800 p-2 rounded-lg">
                        <p className={`text-xs font-black ${item.c}`}>{item.l}</p>
                        <p className="text-[10px] text-slate-400">{item.d}</p>
                    </div>
                ))}
            </div>
            <div className="mt-3 bg-amber-900/20 border border-amber-500/30 p-2 rounded-lg">
                <p className="text-[10px] text-amber-200"><strong className="text-amber-400">📖 Bibliografía:</strong> Al Brooks — "Trading Price Action Trends" (2011) · Stan Weinstein — "Secrets for Profiting in Bull and Bear Markets" · Wyckoff Market Cycle Theory (1930s, vigente)</p>
            </div>
        </div>
    );
};

// ── 2. VOLUMEN ANALYSIS ─────────────────────────────
const VolumeAnalysis = () => {
    const bars = [
        {m:'Ene',p:72,v:1.2,bull:true},{m:'Feb',p:75,v:0.9,bull:true},{m:'Mar',p:78,v:1.5,bull:true},
        {m:'Abr',p:82,v:2.8,bull:true},{m:'May',p:85,v:1.1,bull:false},{m:'Jun',p:80,v:0.7,bull:false},
        {m:'Jul',p:76,v:0.6,bull:false},{m:'Ago',p:68,v:3.1,bull:false},{m:'Sep',p:65,v:1.3,bull:false},
        {m:'Oct',p:67,v:0.8,bull:true},{m:'Nov',p:71,v:1.4,bull:true},{m:'Dic',p:73,v:1.0,bull:true},
    ];
    const maxV=Math.max(...bars.map(b=>b.v));
    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest">Volumen vs Precio — BIMBOA.MX 2024</h4>
                <span className="text-[10px] text-amber-400 bg-amber-900/20 px-2 py-1 rounded-full font-bold">⚠️ Bull Trap → Ago</span>
            </div>
            {/* Price line */}
            <svg viewBox="0 0 300 80" className="w-full h-20 bg-slate-950 rounded-t-lg border border-b-0 border-slate-800">
                {bars.map((b,i)=>{
                    const x=i*(300/bars.length)+5;
                    const h=80-(b.p-60)*1.2;
                    return <rect key={i} x={x} y={h} width="18" height={80-h} fill={b.bull?'#22c55e':'#ef4444'} opacity="0.85"/>;
                })}
                <text x="5" y="12" fill="#64748b" fontSize="7">Precio BIMBOA (MXN)</text>
                {/* Bull trap marker */}
                <line x1="116" y1="0" x2="116" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>
                <text x="118" y="10" fill="#f59e0b" fontSize="7">Bull Trap</text>
            </svg>
            {/* Volume bars */}
            <svg viewBox="0 0 300 50" className="w-full h-16 bg-slate-900 rounded-b-lg border border-t-0 border-slate-800">
                {bars.map((b,i)=>{
                    const x=i*(300/bars.length)+5;
                    const h=50-(b.v/maxV)*42;
                    const isAnom=b.v>2;
                    return <g key={i}>
                        <rect x={x} y={h} width="18" height={50-h} fill={isAnom?'#f59e0b':b.bull?'#22c55e20':'#ef444420'} stroke={isAnom?'#f59e0b':b.bull?'#22c55e':'#ef4444'} strokeWidth="0.5"/>
                        {isAnom && <text x={x-2} y={h-3} fill="#f59e0b" fontSize="6">📊</text>}
                    </g>;
                })}
                {bars.map((b,i)=><text key={i} x={i*(300/bars.length)+6} y={49} fill="#64748b" fontSize="5">{b.m}</text>)}
                <text x="5" y="10" fill="#64748b" fontSize="7">Volumen (relativo al ADV)</text>
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div className="bg-emerald-900/20 border border-emerald-500/20 p-2 rounded-lg">
                    <p className="text-emerald-400 font-bold">✅ Ruptura válida</p>
                    <p className="text-[10px] text-slate-400">Abr: precio sube + volumen 2.8x ADV</p>
                </div>
                <div className="bg-amber-900/20 border border-amber-500/20 p-2 rounded-lg">
                    <p className="text-amber-400 font-bold">⚠️ Bull Trap</p>
                    <p className="text-[10px] text-slate-400">May $85: rompe máximo pero volumen cae</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/20 p-2 rounded-lg">
                    <p className="text-red-400 font-bold">🔴 Distribución</p>
                    <p className="text-[10px] text-slate-400">Ago: pánico vendedor → 3.1x ADV</p>
                </div>
            </div>
            <div className="mt-2 bg-slate-800 p-2 rounded-lg">
                <p className="text-[10px] text-slate-300"><strong className="text-amber-400">💡 Regla Jesse Livermore:</strong> "El volumen es la huella de los grandes jugadores." Un rally sin volumen es una invitación a una trampa. Siempre compara el volumen del día con el ADV de 20 sesiones.</p>
            </div>
        </div>
    );
};

// ── 3. RISK/REWARD BIMBO ────────────────────────────
const RiskRewardBimbo = () => {
    const entrada=66.5, stop=60, tp=82, riesgo=entrada-stop, beneficio=tp-entrada, ratio=(beneficio/riesgo);
    const winRate=Math.round(1/(1+ratio)*100);
    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest">Caso Real: BIMBOA — Riesgo:Beneficio</h4>
                <div className="bg-emerald-900/20 border border-emerald-500/30 px-2 py-1 rounded-full">
                    <span className="text-emerald-400 text-xs font-black">R:B = 1:{ratio.toFixed(2)}</span>
                </div>
            </div>
            {/* Chart con zonas */}
            <svg viewBox="0 0 300 140" className="w-full h-48 bg-slate-950 rounded-lg border border-slate-800 mb-3">
                {/* Fondo zonas */}
                <rect x="0" y="0" width="300" height="45" fill="#22c55e11"/>
                <rect x="0" y="45" width="300" height="45" fill="#64748b11"/>
                <rect x="0" y="90" width="300" height="50" fill="#ef444411"/>
                {/* Líneas clave */}
                <line x1="0" y1="10" x2="300" y2="10" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="5,3"/>
                <text x="5" y="8" fill="#22c55e" fontSize="8" fontWeight="bold">🎯 TAKE PROFIT: ${tp} MXN</text>
                <line x1="0" y1="72" x2="300" y2="72" stroke="#3b82f6" strokeWidth="2"/>
                <text x="5" y="70" fill="#3b82f6" fontSize="8" fontWeight="bold">📍 ENTRADA: ${entrada} MXN</text>
                <line x1="0" y1="120" x2="300" y2="120" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,3"/>
                <text x="5" y="118" fill="#ef4444" fontSize="8" fontWeight="bold">🛑 STOP LOSS: ${stop} MXN</text>
                {/* Flecha beneficio */}
                <line x1="270" y1="72" x2="270" y2="10" stroke="#22c55e" strokeWidth="2"/>
                <polygon points="270,5 266,14 274,14" fill="#22c55e"/>
                <text x="200" y="45" fill="#22c55e" fontSize="8">+${beneficio.toFixed(1)} MXN</text>
                {/* Flecha riesgo */}
                <line x1="270" y1="72" x2="270" y2="120" stroke="#ef4444" strokeWidth="2"/>
                <polygon points="270,125 266,116 274,116" fill="#ef4444"/>
                <text x="200" y="100" fill="#ef4444" fontSize="8">-${riesgo.toFixed(1)} MXN</text>
                {/* Candlestick simulado */}
                <line x1="70" y1="30" x2="70" y2="130" stroke="#64748b" strokeWidth="0.5"/>
                <rect x="65" y="60" width="10" height="25" fill="#ef4444"/>
                <line x1="90" y1="40" x2="90" y2="125" stroke="#64748b" strokeWidth="0.5"/>
                <rect x="85" y="65" width="10" height="20" fill="#ef4444"/>
                {/* Doble fondo */}
                <circle cx="130" cy="85" r="4" fill="#22c55e"/>
                <circle cx="160" cy="83" r="4" fill="#22c55e"/>
                <text x="122" y="100" fill="#22c55e" fontSize="7">Doble Fondo</text>
                {/* Entry candle */}
                <rect x="185" y="60" width="12" height="20" fill="#22c55e"/>
                <text x="180" y="57" fill="#22c55e" fontSize="7">Entrada</text>
            </svg>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                    {l:'Entrada',v:`$${entrada}`,c:'text-blue-400'},
                    {l:'Stop Loss',v:`$${stop}`,c:'text-red-400'},
                    {l:'Take Profit',v:`$${tp}`,c:'text-emerald-400'},
                    {l:'Ratio R:B',v:`1:${ratio.toFixed(2)}`,c:'text-amber-400'},
                    {l:'Riesgo por op.',v:`$${riesgo.toFixed(1)} MXN`,c:'text-red-400'},
                    {l:'Beneficio potencial',v:`$${beneficio.toFixed(1)} MXN`,c:'text-emerald-400'},
                    {l:'WinRate mínimo',v:`${winRate}% para positivo`,c:'text-white'},
                    {l:'Potencial retorno',v:`+${((beneficio/entrada)*100).toFixed(1)}%`,c:'text-emerald-400'},
                ].map((s,i)=>(
                    <div key={i} className="bg-slate-800 p-2 rounded-lg">
                        <p className="text-[9px] text-slate-500 uppercase">{s.l}</p>
                        <p className={`text-sm font-bold ${s.c}`}>{s.v}</p>
                    </div>
                ))}
            </div>
            <div className="mt-3 bg-blue-900/20 border border-blue-500/30 p-2 rounded-lg">
                <p className="text-[10px] text-blue-200"><strong className="text-blue-400">📖 Paul Tudor Jones:</strong> "The secret to being successful in trading is to have an insatiable and an undying and unquenchable thirst for information and knowledge." — Pero también: Si el riesgo:beneficio no es mínimo 1:2, la operación no se hace.</p>
            </div>
        </div>
    );
};

// ── 4. MULTI-TIMEFRAME ──────────────────────────────
const MultiTimeframe = () => {
    const [activeFrame, setActiveFrame] = useState<'weekly'|'daily'|'h4'>('weekly');
    const frames = {
        weekly: {
            label:'SEMANAL (Contexto Macro)',color:'#f59e0b',
            trend:'Bajista → Fase Weinstein 4 (Declive)',
            signal:'❌ NO COMPRAR — La estructura mayor dice BAJISTA',
            desc:'En el Weekly, BIMBOA hizo LH→LL desde Ene 2024. Esto define el sesgo macro: vendedor. Cualquier rebote en temporalidades menores es ruido.',
            weinstein:'Stage 4: Declive — El precio está por debajo de la SMA 30 semanal. Regla Weinstein: no operar largos.',
        },
        daily: {
            label:'DIARIO (Tendencia)',color:'#3b82f6',
            trend:'Estructura: Consolidación + señal de reversión',
            signal:'⚠️ VIGILAR — Posible doble fondo, esperar BOS alcista',
            desc:'En el Daily, el precio formó un doble fondo en $64-65. El RSI(14) mostró divergencia alcista. Aún no hay BOS alcista confirmado, pero hay setup en formación.',
            weinstein:'Stage 1: Acumulación — Base formándose. Volumen decrece. Riesgo de trampa alcista si no supera $76 con volumen.',
        },
        h4: {
            label:'4 HORAS (Timing de Entrada)',color:'#22c55e',
            trend:'Alcista de corto plazo dentro de correctivo mayor',
            signal:'✅ ENTRADA — Si Daily confirma BOS y Weekly no tiene momentum bajista fuerte',
            desc:'En H4, hay estructura de mínimos crecientes desde el soporte $65. El cruce EMA 9/21 fue alcista. Este es el marco para calcular el Stop Loss preciso y la entrada escalonada.',
            weinstein:'Timing: Entrada en H4 después de pullback a EMA 21. Stop: bajo el último HL en $62. Target: resistencia diaria $76.',
        }
    };
    const f=frames[activeFrame];
    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex border-b border-slate-700">
                {Object.entries(frames).map(([k,v])=>(
                    <button key={k} onClick={()=>setActiveFrame(k as any)}
                        className={`flex-1 py-2.5 text-xs font-bold transition-all ${activeFrame===k?'border-b-2 text-white bg-slate-800':'text-slate-500 hover:text-slate-300'}`}
                        style={activeFrame===k?{borderColor:v.color}:{}}>{v.label}</button>
                ))}
            </div>
            <div className="p-4">
                <div className="flex gap-2 items-center mb-3">
                    <div className="w-3 h-3 rounded-full" style={{background:f.color}}/>
                    <span className="text-xs font-bold text-white">{f.trend}</span>
                </div>
                {/* Chart representativo */}
                <svg viewBox="0 0 300 90" className="w-full h-28 bg-slate-950 rounded-lg border border-slate-800 mb-3">
                    {activeFrame==='weekly' && <>
                        <path d="M10,20 L50,15 L90,25 L130,40 L170,35 L210,55 L250,65 L290,75" fill="none" stroke="#f59e0b" strokeWidth="2"/>
                        <text x="10" y="88" fill="#64748b" fontSize="7">Weekly BIMBOA — Estructura Bajista (LH/LL)</text>
                        <text x="200" y="30" fill="#ef4444" fontSize="8">LH ↓</text>
                        <text x="240" y="58" fill="#ef4444" fontSize="8">LL ↓</text>
                        <line x1="0" y1="20" x2="300" y2="20" stroke="#ef444440" strokeWidth="1" strokeDasharray="3,2"/>
                    </>}
                    {activeFrame==='daily' && <>
                        <path d="M10,60 L50,40 L90,70 L130,80 L150,75 L170,72 L210,65 L260,55 L290,50" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                        <line x1="130" y1="0" x2="130" y2="90" stroke="#22c55e40" strokeWidth="1" strokeDasharray="3,2"/>
                        <text x="10" y="88" fill="#64748b" fontSize="7">Daily — Doble fondo + divergencia RSI alcista</text>
                        <circle cx="130" cy="80" r="4" fill="#22c55e"/>
                        <circle cx="155" cy="74" r="4" fill="#22c55e"/>
                        <text x="125" y="88" fill="#22c55e" fontSize="7">2F</text>
                    </>}
                    {activeFrame==='h4' && <>
                        <path d="M10,70 L40,65 L70,55 L100,60 L130,48 L160,42 L190,35 L220,30 L260,22 L290,18" fill="none" stroke="#22c55e" strokeWidth="2"/>
                        <line x1="0" y1="57" x2="300" y2="57" stroke="#3b82f630" strokeWidth="1" strokeDasharray="3,2"/>
                        <text x="10" y="88" fill="#64748b" fontSize="7">H4 — Mínimos Crecientes (HL) → Tendencia alcista</text>
                        <text x="220" y="18" fill="#22c55e" fontSize="8">BOS ↑</text>
                    </>}
                    <text x="5" y="10" fill="#475569" fontSize="6">BIMBOA.MX / TradingView</text>
                </svg>
                {/* TradingView link card — BMV requiere cuenta premium para embed */}
                <a
                    href={`https://www.tradingview.com/chart/?symbol=BMV%3ABIMBO%2FA&interval=${activeFrame==='weekly'?'W':activeFrame==='daily'?'D':'240'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3"
                >
                    <div className="bg-slate-950 rounded-xl border border-slate-700 hover:border-blue-500/60 transition-all group overflow-hidden">
                        {/* Fake chart top bar */}
                        <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800 bg-[#131722]">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"/>
                            <span className="text-[11px] text-slate-300 font-mono font-bold">BMV:BIMBO/A</span>
                            <span className="text-[10px] text-slate-500 ml-1">·</span>
                            <span className="text-[10px] text-slate-500">{activeFrame==='weekly'?'1W':activeFrame==='daily'?'1D':'4H'}</span>
                            <span className="ml-auto text-[10px] text-blue-400 group-hover:text-blue-300 font-bold transition-colors">
                                Ver gráfico en vivo ↗
                            </span>
                        </div>
                        {/* Simulated chart area with CTA */}
                        <div className="relative h-[160px] flex flex-col items-center justify-center gap-3 bg-[#131722]">
                            {/* Background lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 160">
                                {[40,80,120].map(y=><line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#334155" strokeWidth="1"/>)}
                                {[60,120,180,240].map(x=><line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#334155" strokeWidth="1"/>)}
                                {activeFrame==='weekly' && <path d="M10,140 L50,130 L90,120 L150,100 L200,110 L260,95 L290,80" fill="none" stroke="#f59e0b" strokeWidth="2"/>}
                                {activeFrame==='daily' && <path d="M10,120 L70,90 L130,140 L160,135 L200,115 L260,100 L290,90" fill="none" stroke="#3b82f6" strokeWidth="2"/>}
                                {activeFrame==='h4'   && <path d="M10,140 L60,125 L110,105 L160,110 L210,85 L260,60 L290,45" fill="none" stroke="#22c55e" strokeWidth="2"/>}
                            </svg>
                            {/* CTA */}
                            <div className="relative z-10 flex items-center gap-2 bg-slate-800/90 border border-slate-600 group-hover:border-blue-500/80 rounded-lg px-4 py-2 transition-all backdrop-blur-sm">
                                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span className="text-xs font-bold text-white">Abrir gráfico BIMBO/A en TradingView</span>
                            </div>
                            <p className="relative z-10 text-[10px] text-slate-500">La BMV requiere cuenta TradingView para el gráfico embebido</p>
                        </div>
                    </div>
                </a>

                <div className={`p-2 rounded-lg border text-xs ${f.color==='#f59e0b'?'bg-amber-900/20 border-amber-500/30 text-amber-200':f.color==='#3b82f6'?'bg-blue-900/20 border-blue-500/30 text-blue-200':'bg-emerald-900/20 border-emerald-500/30 text-emerald-200'}`}>
                    <p className="font-bold mb-1">{f.signal}</p>
                    <p className="text-[10px] opacity-80">{f.desc}</p>
                    <p className="text-[10px] opacity-70 mt-1">📖 Weinstein: <em>{f.weinstein}</em></p>
                </div>
            </div>
            <div className="px-4 pb-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-[10px] text-slate-400"><strong className="text-white">📚 Bibliografía:</strong> Stan Weinstein — "Secrets for Profiting in Bull and Bear Markets" (1988) · Mark Douglas — "Trading in the Zone" (2000) · Al Brooks — "Reading Price Charts Bar by Bar" · ICT (Inner Circle Trader) — Multi-Timeframe Analysis methodology</p>
                </div>
            </div>
        </div>
    );
};

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
            case 'market_structure_hh_ll': return <MarketStructureHHLL />;
            case 'volume_analysis': return <VolumeAnalysis />;
            case 'risk_reward_bimbo': return <RiskRewardBimbo />;
            case 'multi_timeframe': return <MultiTimeframe />;
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
