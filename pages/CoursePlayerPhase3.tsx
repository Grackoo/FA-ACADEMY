import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight, ArrowLeft, TrendingUp, TrendingDown, Activity,
    Target, Send, Info, BookOpen, BarChart2,
    Maximize2, Minimize2, Crosshair, Anchor, ShieldAlert,
    CandlestickChart, Zap, Layers, AlertCircle, Percent,
    Brain, Download, FileSpreadsheet, CheckCircle2, XCircle, HelpCircle,
    RotateCcw, Sliders, Check, PlayCircle, Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadTradingJournalTemplate } from '../utils/resources';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 3: ANÁLISIS TÉCNICO Y GESTIÓN DE RIESGO PROFESIONAL ---

const courseData = [
    {
        id: 1,
        title: "Módulo 3: Análisis Técnico y Gestión de Riesgo",
        description: "Deja de apostar al azar. Aprende a leer la huella del dinero institucional y aplicar modelos matemáticos de riesgo.",
        lessons: [
            {
                title: "El Lenguaje de las Velas Japonesas",
                content: "Cada vela cuenta la batalla en tiempo real entre compradores (Toros) y vendedores (Osos).",
                details: "Olvídate de los gráficos de línea simples que solo muestran el precio de cierre. Las Velas Japonesas nos revelan 4 datos fundamentales en un instante (OHLC): Open (Apertura), High (Máximo), Low (Mínimo) y Close (Cierre). El cuerpo refleja la convicción del movimiento, mientras que las sombras o mechas revelan niveles de precios que fueron enérgicamente rechazados por el mercado.",
                visualType: "candlestick_anatomy",
                videoUrls: ["khSSR5xN4HQ"],
                videoTitle: "Curso Completo de Velas Japonesas y Psicología OHLC",
                videoDuration: "25 min",
                speakerNotes: "Una mecha superior muy larga en zona de resistencia indica rechazo bajista: los compradores intentaron empujar el precio hacia arriba pero los vendedores institucionales tomaron el control.",
                concepts: [
                    { term: "OHLC", def: "Open, High, Low, Close. Los cuatro precios clave que estructuran cada sesión temporal." },
                    { term: "Doji", def: "Vela donde el precio de apertura y cierre son prácticamente iguales; refleja equilibrio transitorio o indecisión." },
                    { term: "Mecha de Rechazo", def: "Línea fina que sobresale del cuerpo; evidencia que el mercado no toleró cotizar en esos niveles." },
                    { term: "Marubozu", def: "Vela con cuerpo extenso y sin mechas; demuestra dominio unilateral y fuerte convicción de tendencia." }
                ],
                miniQuiz: {
                    question: "¿Qué nos indica una vela con cuerpo pequeño en la base y una mecha superior muy larga en una zona de resistencia?",
                    options: [
                        "Fuerza de compra institucional acelerada.",
                        "Rechazo de precios altos: los vendedores tomaron el control de la sesión.",
                        "Un error del bróker en la gráfica.",
                        "Que no hubo volumen en toda la jornada."
                    ],
                    correct: 1,
                    explanation: "La mecha superior larga representa precios que fueron alcanzados temporalmente pero fuertemente rechazados por la fuerza vendedora antes del cierre."
                }
            },
            {
                title: "Estructura de Mercado: Soportes y Resistencias",
                content: "El mercado tiene memoria institucional. Donde hubo liquidez ayer, habrá interés hoy.",
                details: "El precio nunca avanza en línea recta; oscila en ondas de impulso y retroceso. Un Soporte es un suelo de cotización donde la fuerza de compra supera a la oferta disponible. Una Resistencia es un techo donde la presión vendedora frena el avance. Cuando una resistencia es superada con volumen, los vendedores atrapados buscan cerrar sus pérdidas en el testeo, convirtiendo el antiguo techo en nuevo suelo.",
                visualType: "support_resistance",
                speakerNotes: "Regla de oro de la polaridad: Un nivel de resistencia vulnerado con volumen se transforma automáticamente en soporte potencial para la siguiente onda.",
                concepts: [
                    { term: "Soporte (Piso)", def: "Nivel de precios donde se concentra la liquidez de compra que detiene una corrección bajista." },
                    { term: "Resistencia (Techo)", def: "Zona donde la oferta de papel supera la demanda, provocando el retroceso del precio." },
                    { term: "Breakout (Ruptura)", def: "Perforación decisiva de un nivel clave con aumento del volumen negociado." },
                    { term: "Pullback (Testeo)", def: "Movimiento de retroceso hacia el nivel perforado previo para confirmar el cambio de polaridad." }
                ],
                miniQuiz: {
                    question: "Según el principio de polaridad técnica, ¿qué ocurre cuando una resistencia histórica es rota con fuerte volumen?",
                    options: [
                        "El mercado se vuelve lateral para siempre.",
                        "Esa zona pasa a funcionar como un nuevo soporte en los retrocesos posteriores.",
                        "El activo debe venderse inmediatamente en corto.",
                        "La resistencia se vuelve el doble de fuerte."
                    ],
                    correct: 1,
                    explanation: "El principio de polaridad dicta que un nivel de oferta roto se convierte en un nivel de demanda (soporte) en pullbacks posteriores."
                }
            },
            {
                title: "Acción del Precio y Estructura (HH/LL/BOS/CHoCH)",
                content: "Aprende a leer la estructura pura del precio antes de colocar cualquier indicador en tu pantalla.",
                details: "La estructura de mercado es el fundamento del Price Action profesional. Una tendencia alcista se caracteriza por una secuencia ininterrumpida de Máximos Más Altos (Higher Highs - HH) y Mínimos Más Altos (Higher Lows - HL). Una tendencia bajista imprime Máximos Más Bajos (Lower Highs - LH) y Mínimos Más Bajos (Lower Lows - LL). La superación de un máximo estructural valida una Continuación de Estructura (Break of Structure - BOS), mientras que la pérdida del último mínimo alcista señala un Cambio de Carácter (CHoCH).",
                visualType: "market_structure_hh_ll",
                speakerNotes: "Stanley Druckenmiller enseñaba: 'Nunca pelees con la cinta'. Si la estructura dibuja LH y LL, comprar solo porque el oscilador RSI está en sobreventa es una trampa mortal.",
                concepts: [
                    { term: "Higher High (HH)", def: "Máximo más alto que el anterior; confirma que la presión compradora sigue superando la resistencia previa." },
                    { term: "Higher Low (HL)", def: "Mínimo más alto que el anterior; demuestra que los vendedores claudican a precios cada vez mayores." },
                    { term: "BOS (Break of Structure)", def: "Ruptura del último extremo en la misma dirección de la tendencia primaria." },
                    { term: "CHoCH (Change of Character)", def: "Primera señal de alerta: el precio rompe el último mínimo estructural en una tendencia alcista." }
                ],
                miniQuiz: {
                    question: "¿Cuál es la diferencia técnica entre un BOS (Break of Structure) y un CHoCH (Change of Character)?",
                    options: [
                        "El BOS es para Forex y el CHoCH es para acciones mexicanas.",
                        "El BOS confirma la continuación de la tendencia actual; el CHoCH es el primer quiebre que alerta de un posible cambio de tendencia.",
                        "Son sinónimos exactos y significan lo mismo.",
                        "El BOS solo ocurre con medias móviles."
                    ],
                    correct: 1,
                    explanation: "BOS valida la continuación de la tendencia reinante, mientras que CHoCH es la ruptura estructural en contra de la tendencia previa que avisa de una reversión."
                }
            },
            {
                title: "Indicadores Técnicos: RSI y Medias Móviles",
                content: "Utiliza herramientas matemáticas para filtrar el ruido y confirmar la tendencia dominante.",
                details: "Los indicadores nunca deben liderar tus decisiones, sino confirmar lo que la estructura del precio ya anticipó. Las Medias Móviles (SMA/EMA) suavizan la volatilidad: la SMA de 200 días actúa como el límite institucional entre mercados alcistas y bajistas de largo plazo. El Índice de Fuerza Relativa (RSI de 14 periodos) mide la velocidad y magnitud de los cambios de precio: lecturas por encima de 70 sugieren sobrecompra, mientras que niveles por debajo de 30 denotan sobreventa.",
                visualType: "indicators_dashboard",
                speakerNotes: "El 'Cruce Dorado' ocurre cuando la media móvil de 50 periodos cruza al alza la media de 200 periodos; históricamente anticipa rallies sostenidos de mediano plazo.",
                concepts: [
                    { term: "SMA 200 Días", def: "Promedio móvil simple de las últimas 200 sesiones; referencia institucional de tendencia estructural." },
                    { term: "RSI (14)", def: "Oscilador de momento normalizado entre 0 y 100 que evalúa el vigor relativo de compras y ventas." },
                    { term: "Divergencia RSI", def: "Cuando el precio marca un nuevo mínimo pero el RSI marca un mínimo más alto; aviso de pérdida de impulso." },
                    { term: "Cruce Dorado", def: "Cruce alcista de la media rápida (ej. 50) sobre la media lenta (ej. 200); señal de fortaleza técnica." }
                ],
                miniQuiz: {
                    question: "Si una acción cotiza por debajo de su SMA de 200 días y su RSI marca 25, ¿cuál es la lectura técnica profesional?",
                    options: [
                        "Comprar todo inmediatamente porque está regalada.",
                        "El activo está en tendencia bajista de fondo; la sobreventa del RSI puede ser una trampa si no hay cambio de estructura en el precio.",
                        "El indicador RSI no funciona para acciones.",
                        "Vender en corto sin Stop Loss."
                    ],
                    correct: 1,
                    explanation: "En tendencias bajistas fuertes bajo la SMA 200, los osciladores pueden permanecer en sobreventa prolongada mientras el precio sigue cayendo."
                }
            },
            {
                title: "Retrocesos y Extensiones de Fibonacci",
                content: "La geometría de la naturaleza aplicada a las zonas de recarga del dinero institucional.",
                details: "Descubierta por Leonardo de Pisa en el siglo XIII, la secuencia de Fibonacci revela proporciones armónicas que gobiernan los mercados financieros. El cociente clave es el 61.8% (Número Áureo o Golden Ratio). En un movimiento impulsivo, los retrocesos del 38.2%, 50.0% y 61.8% representan las zonas de máxima confluencia donde los fondos institucionales añaden posiciones a precios de descuento.",
                visualType: "fibonacci_tool",
                speakerNotes: "El nivel 61.8% no es mágico por sí solo; cobra máxima probabilidad cuando coincide exactamente con un soporte previo o una media móvil relevante.",
                concepts: [
                    { term: "Nivel 61.8% (Golden Ratio)", def: "El retroceso porcentual más observado por algoritmos institucionales para buscar giros tendenciales." },
                    { term: "Nivel 38.2%", def: "Retroceso superficial típico de tendencias con altísimo momento alcista o bajista." },
                    { term: "Confluencia de Fibonacci", def: "Coincidencia de un nivel de retroceso con un soporte horizontal o línea de tendencia dinámica." },
                    { term: "Extensión 161.8%", def: "Proyección matemática del objetivo de beneficios tras completar un impulso y su posterior retroceso." }
                ],
                miniQuiz: {
                    question: "¿Por qué el retroceso del 61.8% de Fibonacci es considerado la 'Zona Áurea' en el trading?",
                    options: [
                        "Porque garantiza que el precio nunca volverá a caer.",
                        "Porque representa la proporción armónica donde históricamente convergen algoritmos y fondos institucionales para reanudar la tendencia.",
                        "Porque es el promedio de las tasas de interés de Banxico.",
                        "Porque solo se utiliza en activos de oro y materias primas."
                    ],
                    correct: 1,
                    explanation: "El 61.8% es la proporción áurea derivada de la serie de Fibonacci, ampliamente programada en algoritmos de ejecución institucional como zona óptima de descuento."
                }
            },
            {
                title: "Volumen Real vs. Volumen de Tick: Rupturas Institucionales",
                content: "El volumen es el combustible del mercado: un avance sin volumen es solo una trampa.",
                details: "El volumen representa el número total de acciones o contratos negociados en una sesión. Una ruptura de resistencia requiere un volumen significativamente superior al promedio diario (ADV - Average Daily Volume) para considerarse genuina. Si el precio supera un techo pero el volumen es anémico, nos encontramos ante una 'Bull Trap' (trampa alcista): los operadores institucionales inducen compras minoristas para colocar su papel a precios inflados antes de provocar la caída.",
                visualType: "volume_analysis",
                speakerNotes: "En septiembre de 2024, el lanzamiento del iPhone 16 generó picos de volumen institucional de más de 3.2x el volumen promedio de Apple, validando la fuerza compradora.",
                concepts: [
                    { term: "ADV (Average Daily Volume)", def: "Volumen promedio diario negociado en las últimas 20 o 50 sesiones bursátiles." },
                    { term: "Bull Trap (Trampa Alcista)", def: "Ruptura de resistencia sin volumen que seduce a compradores minoristas antes de un colapso súbito." },
                    { term: "Volumen de Tick", def: "Proxy basado en cantidad de cambios de precio usado en Forex; a diferencia del mercado bursátil de acciones, no mide títulos reales." },
                    { term: "Divergencia de Volumen", def: "Precios marcando nuevos máximos acompañados de volumen decreciente; anticipa agotamiento de liquidez." }
                ],
                miniQuiz: {
                    question: "Si una acción supera su resistencia anual con un volumen del 40% respecto a su ADV de 20 sesiones, ¿cuál es el mayor riesgo?",
                    options: [
                        "Que sea un Bull Trap (trampa alcista) por falta de respaldo institucional.",
                        "Que la acción sea suspendida de cotización en la bolsa.",
                        "Que el volumen no tenga ninguna relación con el precio.",
                        "Que el dividendo se incremente al doble."
                    ],
                    correct: 0,
                    explanation: "Las rupturas sin volumen suelen ser trampas de liquidez generadas por falta de compradores institucionales, provocando regresos rápidos al rango previo."
                }
            },
            {
                title: "Gestión de Riesgo y Esperanza Matemática",
                content: "El secreto de la rentabilidad a largo plazo no es adivinar el futuro, sino la asimetría matemática.",
                details: "Muchos principiantes creen erróneamente que para ser rentables necesitan acertar el 80% o 90% de sus operaciones. Matemáticamente, con un Ratio Riesgo:Beneficio de 1:3 (arriesgar $1 para ganar $3), el punto de equilibrio (Breakeven Win Rate) es exactamente del 25% (Fórmula: 1 / [1 + 3] = 0.25). Esto significa que acertando únicamente el 35% o 40% de tus operaciones con ratios asimétricos, tu sistema genera una sólida Esperanza Matemática positiva (E = [WinRate × Ganancia] - [LossRate × Pérdida]).",
                visualType: "risk_calculator",
                speakerNotes: "Nunca arriesgues más del 1% al 2% de tu capital total en una sola posición. Controlar el tamaño de la posición elimina el riesgo de ruina.",
                concepts: [
                    { term: "Ratio Riesgo:Beneficio (R:B)", def: "Relación entre el capital expuesto en el Stop Loss y el beneficio objetivo esperado en el Take Profit." },
                    { term: "Punto de Equilibrio (Breakeven)", def: "Tasa de acierto mínima requerida para no perder capital: 1 / (1 + Ratio R:B). Para 1:3 es 25.0%." },
                    { term: "Esperanza Matemática (E)", def: "Ganancia o pérdida promedio esperada por cada peso o dólar arriesgado en una muestra amplia de operaciones." },
                    { term: "Regla del 1-2%", def: "Norma estricta de asignación: la pérdida máxima al tocar el Stop Loss nunca debe superar el 1% o 2% de la cartera." }
                ],
                miniQuiz: {
                    question: "Si operas consistentemente con un Ratio Riesgo:Beneficio de 1:3, ¿cuál es el porcentaje mínimo de operaciones ganadoras para alcanzar el punto de equilibrio?",
                    options: [
                        "50.0% de aciertos.",
                        "30.0% de aciertos.",
                        "25.0% de aciertos.",
                        "75.0% de aciertos."
                    ],
                    correct: 2,
                    explanation: "La fórmula de breakeven es 1 / (1 + R:B). Con R:B de 1:3, 1 / (1 + 3) = 1/4 = 0.25 (25.0%). Con solo ganar 1 de cada 4 operaciones no pierdes dinero."
                }
            },
            {
                title: "Gestión Visual de R:B con Apple (AAPL)",
                content: "La entrada es solo el 20% del éxito; el 80% restante depende de la ubicación del Stop Loss y el Take Profit.",
                details: "Analicemos el caso real de Apple Inc. (AAPL) tras su corrección en el soporte de doble fondo en $165 USD. El trader profesional estructura su trade con 3 coordenadas técnicas: (1) ENTRADA: $168 USD tras confirmación de vela envolvente. (2) STOP LOSS: $158 USD (debajo del soporte estructural, riesgo de $10 USD). (3) TAKE PROFIT: $195 USD (resistencia histórica previa, potencial de $27 USD). Esto arroja un Ratio R:B de 1:2.7. El punto de equilibrio es del 27.02% (1 / 3.7). Con una tasa de acierto conservadora del 37%, el trade genera una ventaja estadística sobresaliente.",
                visualType: "risk_reward_bimbo",
                speakerNotes: "Paul Tudor Jones lo resumió con maestría: 'Busco un ratio 5:1. Cinco a uno significa que arriesgo un dólar para ganar cinco. Eso me permite tener una tasa de acierto de solo el 20% y aun así no perder dinero'.",
                concepts: [
                    { term: "Stop Loss Técnico", def: "Orden automática ubicada detrás de un nivel estructural invalidante, no en una cifra redonda arbitraria." },
                    { term: "Take Profit Escalonado", def: "Toma parcial de beneficios (ej. 50% en primer objetivo y dejar correr el resto con trailing stop)." },
                    { term: "Trailing Stop", def: "Stop Loss dinámico que se desplaza protegiendo ganancias a medida que el precio avanza a favor." },
                    { term: "Ventaja Estadística (Edge)", def: "Combinación de ratio R:B y tasa de aciertos que produce rendimientos acumulados positivos a largo plazo." }
                ],
                miniQuiz: {
                    question: "En la operación analizada de Apple con riesgo de $10 USD y objetivo de $27 USD (Ratio 1:2.7), ¿cuál es el porcentaje de breakeven aproximado?",
                    options: [
                        "50.0%",
                        "27.0%",
                        "10.0%",
                        "65.0%"
                    ],
                    correct: 1,
                    explanation: "Breakeven = 1 / (1 + 2.7) = 1 / 3.7 = 27.02%. Ganando al menos el 27.02% de las veces con este ratio se amortiza todo el riesgo del sistema."
                }
            },
            {
                title: "Uso de Temporalidades: El Marco Manda (Multi-Timeframe)",
                content: "Una corrección bajista en 15 minutos puede ser una simple oportunidad de compra en el gráfico diario.",
                details: "El análisis Multi-Timeframe (MTF) es la técnica institucional de sincronización de marcos temporales. La regla de oro dicta que el marco temporal mayor siempre subordina al menor. El método clásico de Stan Weinstein categoriza la evolución de todo activo en 4 etapas: Etapa 1 (Acumulación/Base), Etapa 2 (Avance Alcista sostenido sobre la media), Etapa 3 (Distribución/Techo) y Etapa 4 (Declive Bajista bajo la media). El marco Semanal define el sesgo de fondo, el Diario identifica la estructura y el marco de 4H/1H calibra el timing de entrada.",
                visualType: "multi_timeframe",
                speakerNotes: "El error más costoso del operador novato es mirar únicamente el gráfico de 5 minutos: cree ver una ruptura alcista cuando en el gráfico diario es simplemente una trampa de rechazo.",
                concepts: [
                    { term: "Análisis Top-Down", def: "Metodología de inspección descendente: Semanal (contexto) → Diario (tendencia) → 4H/1H (ejecución)." },
                    { term: "Confluencia Temporal", def: "Alineación de señales en la misma dirección a través de múltiples temporalidades simultáneas." },
                    { term: "Etapas de Weinstein", def: "Ciclo económico de 4 fases: Acumulación (1), Avance (2), Distribución (3) y Declive (4)." },
                    { term: "Ruido Intradía", def: "Fluctuaciones menores en marcos de 1 a 15 minutos que carecen de trascendencia estructural institucional." }
                ],
                miniQuiz: {
                    question: "Si el gráfico semanal muestra una Etapa 4 de Declive bajo la SMA de 30 semanas, ¿cómo debes interpretar una señal de compra en gráfico de 15 minutos?",
                    options: [
                        "Como una oportunidad irrepetible para entrar con todo el capital.",
                        "Como un rebote temporal o ruido intradía contra la tendencia mayor; operar largos conlleva un riesgo sumamente elevado.",
                        "Las etapas de Weinstein solo aplican a materias primas.",
                        "El gráfico de 15 minutos tiene más peso que el semanal."
                    ],
                    correct: 1,
                    explanation: "La temporalidad mayor manda. Un rebote en 15 minutos en plena Etapa 4 semanal suele ser un retroceso menor antes de reanudar la caída."
                }
            },
            {
                title: "Trading Journal y Backtesting Cuantitativo",
                content: "Lo que no se mide, no se puede mejorar. El diario de operaciones es el espejo de tu disciplina.",
                details: "Ningún trader profesional opera sin auditar sistemáticamente sus resultados. El Backtesting consiste en probar un conjunto explícito de reglas técnicas sobre datos históricos del mercado para verificar si posee una ventaja estadística real antes de arriesgar dinero en vivo. El Trading Journal registra metódicamente la fecha, ticker, timeframe, precio de entrada, Stop Loss, Take Profit, ratio R:B, resultado monetario en 'R' y el estado psicológico al ejecutar.",
                visualType: "trading_journal_tool",
                speakerNotes: "Un trader con un sistema con expectativa positiva pero sin diario de operaciones terminará saboteándose por indisciplina o exceso de apalancamiento.",
                concepts: [
                    { term: "Backtesting", def: "Simulación rigurosa de una estrategia de trading sobre series de precios históricas pasadas." },
                    { term: "Resultado en R", def: "Medición normalizada del resultado en múltiplos del riesgo inicial (ej. +2.5R significa ganar 2.5 veces lo arriesgado)." },
                    { term: "Maximum Drawdown", def: "La mayor racha de pérdidas acumuladas consecutivas desde el punto máximo del capital." },
                    { term: "Curva de Capital (Equity Curve)", def: "Gráfica acumulativa del balance de la cuenta a lo largo del tiempo que evidencia la consistencia del sistema." }
                ],
                miniQuiz: {
                    question: "¿Cuál es la principal ventaja de medir el rendimiento de tus trades en unidades 'R' en tu Trading Journal?",
                    options: [
                        "Permite evaluar la calidad técnica de las decisiones de forma normalizada, con independencia del dinero exacto de la cuenta.",
                        "Garantiza que el bróker te devuelva las comisiones.",
                        "Evita pagar impuestos ante el SAT.",
                        "Hace que todas las operaciones sean ganadoras por defecto."
                    ],
                    correct: 0,
                    explanation: "Medir en 'R' normaliza el análisis: ganar 3R siempre refleja una excelente ejecución con ratio 1:3, sin importar si 1R equivalía a $100 MXN o $10,000 MXN."
                }
            },
            {
                title: "Estación TradingView y Psicología del Trading",
                content: "Tu mayor obstáculo y tu mayor activo en el mercado no es el gráfico, sino tu propia mente.",
                details: "El mercado financiero es un mecanismo implacable que transfiere capital del impaciente al paciente. Los dos grandes destructores de cuentas son el FOMO (miedo a perderse una subida, que induce compras en máximos) y el Revenge Trading (operar compulsivamente con mayor tamaño tras una pérdida para intentar desquitarse). Utiliza la estación de trabajo integrada con herramientas de TradingView para practicar la ejecución desapasionada conforme a reglas escritas.",
                visualType: "tradingview_station",
                speakerNotes: "El trading exitoso es aburrido y metódico. Si sientes adrenalina o euforia al operar, estás apostando como en un casino, no gestionando capital.",
                concepts: [
                    { term: "FOMO", def: "Fear Of Missing Out: impulso emocional de comprar un activo vertical por temor a quedarse fuera." },
                    { term: "Revenge Trading", def: "Aumentar el riesgo de forma impulsiva tras una pérdida para intentar recuperar el dinero de inmediato." },
                    { term: "Plan de Trading", def: "Protocolo por escrito que especifica qué condiciones exactas deben cumplirse para entrar, gestionar y salir de un activo." },
                    { term: "Overtrading", def: "Operar en exceso por ansiedad o aburrimiento en lugar de aguardar pacientemente los setups de alta probabilidad." }
                ],
                miniQuiz: {
                    question: "¿Qué conducta define al 'Revenge Trading' y cómo debe prevenirse según la psicología profesional?",
                    options: [
                        "Comprar acciones de empresas que compiten entre sí.",
                        "Duplicar el tamaño de la posición tras una pérdida para intentar recuperarse rápidamente; se previene apagando la pantalla y siguiendo el límite diario de pérdida.",
                        "Revisar el informe anual de la empresa.",
                        "Dejar correr las ganancias con trailing stop."
                    ],
                    correct: 1,
                    explanation: "El Revenge Trading nace del ego herido por una pérdida; la única protección es el cese inmediato de operativa conforme al límite de riesgo diario establecido."
                }
            }
        ]
    }
];

// --- BANCO DE PREGUNTAS DEL EXAMEN DE CERTIFICACIÓN DE FASE 3 ---
const quizQuestions = [
    { 
        id: 1, 
        question: "En el análisis de Velas Japonesas (OHLC), ¿qué significa una mecha superior muy larga en una zona de resistencia?", 
        options: [
            "Fuerza compradora imparable que continuará al alza.", 
            "Fuerte rechazo de precios altos: la fuerza vendedora tomó el control antes del cierre.", 
            "Indecisión absoluta sin volumen de negociación.", 
            "Que el mercado está cerrado por feriado bancario."
        ], 
        correct: 1 
    },
    { 
        id: 2, 
        question: "Según el principio de polaridad técnica de soportes y resistencias, ¿qué sucede cuando una resistencia histórica es superada con volumen?", 
        options: [
            "Se convierte en un soporte potencial (suelo) en futuros testeos o pullbacks.", 
            "Desaparece permanentemente del gráfico.", 
            "Se vuelve una resistencia el doble de fuerte.", 
            "Indica obligatoriamente un cambio a tendencia bajista."
        ], 
        correct: 0 
    },
    { 
        id: 3, 
        question: "¿Qué combinación de oscilaciones define formalmente a una Tendencia Alcista en Acción del Precio (Price Action)?", 
        options: [
            "Lower Highs (LH) y Lower Lows (LL).", 
            "Higher Highs (HH - Máximos Más Altos) y Higher Lows (HL - Mínimos Más Altos).", 
            "Velas rojas consecutivas con poco volumen.", 
            "Oscilador RSI situado permanentemente por debajo de 30."
        ], 
        correct: 1 
    },
    { 
        id: 4, 
        question: "¿Cuál es la diferencia entre un BOS (Break of Structure) y un CHoCH (Change of Character)?", 
        options: [
            "BOS confirma la continuación de la tendencia; CHoCH es la primera ruptura contra la tendencia que avisa de un cambio de dirección.", 
            "BOS es un indicador matemático y CHoCH es una vela japonesa.", 
            "No existe ninguna diferencia; son términos intercambiables.", 
            "CHoCH solo se utiliza en temporalidades semanales."
        ], 
        correct: 0 
    },
    { 
        id: 5, 
        question: "En la teoría de retrocesos de Fibonacci, ¿cuál es el porcentaje derivado del Número Áureo (Golden Ratio) más vigilado por fondos e instituciones?", 
        options: [
            "23.6%", 
            "50.0%", 
            "61.8%", 
            "99.0%"
        ], 
        correct: 2 
    },
    { 
        id: 6, 
        question: "Si el precio de una acción supera una resistencia pero el volumen negociado es solo el 35% del promedio diario (ADV), ¿a qué fenómeno nos enfrentamos?", 
        options: [
            "A un Bull Trap (trampa alcista) por ausencia de demanda institucional real.", 
            "A una compra institucional masiva y encubierta.", 
            "A un split de acciones inminente.", 
            "A una señal de compra libre de riesgo."
        ], 
        correct: 0 
    },
    { 
        id: 7, 
        question: "Si tu estrategia de trading opera estrictamente con un Ratio Riesgo:Beneficio de 1:3, ¿cuál es tu tasa de acierto de equilibrio (Breakeven)?", 
        options: [
            "50.0%", 
            "33.3%", 
            "25.0% (1 / [1 + 3] = 0.25)", 
            "75.0%"
        ], 
        correct: 2 
    },
    { 
        id: 8, 
        question: "En el caso analizado de Apple (Entrada $168, Stop $158, Target $195, Ratio 1:2.7), ¿qué tasa de acierto requieres para estar en punto de equilibrio?", 
        options: [
            "27.02% (1 / [1 + 2.7])", 
            "50.0%", 
            "10.0%", 
            "60.0%"
        ], 
        correct: 0 
    },
    { 
        id: 9, 
        question: "Según el análisis Multi-Timeframe y las etapas de Stan Weinstein, ¿qué temporalidad subordina a las demás al planificar un trade?", 
        options: [
            "El gráfico de 5 minutos porque muestra los movimientos más rápidos.", 
            "La temporalidad mayor (Semanal/Diario) porque establece el contexto institucional y la dirección de fondo.", 
            "Cualquier temporalidad tiene exactamente el mismo peso estadístico.", 
            "El gráfico de 1 minuto."
        ], 
        correct: 1 
    },
    { 
        id: 10, 
        question: "¿Qué es el 'Revenge Trading' y cuál es la regla psicológica fundamental para evitarlo?", 
        options: [
            "Operar impulsivamente con mayor volumen tras una pérdida para desquitarse; se previene respetando el límite diario de pérdida y pausando la sesión.", 
            "Vender acciones cuando una empresa presenta utilidades récord.", 
            "Abrir una cuenta en un bróker extranjero sin avisar.", 
            "Comprar opciones Call de protección."
        ], 
        correct: 0 
    }
];

// --- COMPONENTES VISUALES TÉCNICOS FASE 3 ---

// ── 1. FIBONACCI RETRACEMENT TOOL ──────────────────
const FibonacciTool = () => {
    const [swingHigh, setSwingHigh] = useState(200);
    const [swingLow, setSwingLow] = useState(165);
    const diff = swingHigh - swingLow;

    const levels = [
        { pct: 0, label: '0.0% (Swing High)', price: swingHigh, color: '#ef4444' },
        { pct: 0.236, label: '23.6% Retroceso Menor', price: swingHigh - diff * 0.236, color: '#f97316' },
        { pct: 0.382, label: '38.2% Retroceso Débil', price: swingHigh - diff * 0.382, color: '#f59e0b' },
        { pct: 0.500, label: '50.0% Nivel Psicológico', price: swingHigh - diff * 0.500, color: '#3b82f6' },
        { pct: 0.618, label: '61.8% Golden Ratio (Áureo)', price: swingHigh - diff * 0.618, color: '#10b981' },
        { pct: 0.786, label: '78.6% Retroceso Profundo', price: swingHigh - diff * 0.786, color: '#8b5cf6' },
        { pct: 1.0, label: '100.0% (Swing Low)', price: swingLow, color: '#ef4444' },
    ];

    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Sliders size={16} className="text-emerald-400" />
                        Calculadora Interactiva de Fibonacci: Caso Apple (AAPL)
                    </h4>
                    <p className="text-[11px] text-slate-400">Corrección real de $199.62 a $165.67 (Ene - Abr 2024)</p>
                </div>
                <div className="flex gap-2 text-xs">
                    <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-2.5 py-1 rounded-full font-bold">
                        Zona Óptima: ${(swingHigh - diff * 0.618).toFixed(2)} USD (61.8%)
                    </span>
                </div>
            </div>

            {/* Visual SVG de los niveles de Fibonacci */}
            <div className="relative bg-slate-950 rounded-xl p-3 border border-slate-800 mb-4 overflow-hidden">
                <svg viewBox="0 0 320 180" className="w-full h-52">
                    {levels.map((lvl, idx) => {
                        const y = 20 + idx * 23;
                        const isGolden = lvl.pct === 0.618;
                        return (
                            <g key={idx}>
                                {isGolden && (
                                    <rect x="0" y={y - 8} width="320" height="16" fill="#10b981" opacity="0.15" />
                                )}
                                <line 
                                    x1="10" y1={y} x2="310" y2={y} 
                                    stroke={lvl.color} 
                                    strokeWidth={isGolden ? "2" : "1"} 
                                    strokeDasharray={isGolden ? "none" : "4,2"} 
                                />
                                <text x="15" y={y - 3} fill={lvl.color} fontSize="8" fontWeight="bold">
                                    {lvl.label}
                                </text>
                                <text x="260" y={y - 3} fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="end">
                                    ${lvl.price.toFixed(2)} USD
                                </text>
                            </g>
                        );
                    })}

                    {/* Línea simulada del precio haciendo pullback al 61.8% */}
                    <path 
                        d="M 25 160 L 90 20 L 160 112 L 240 70 L 300 30" 
                        fill="none" 
                        stroke="#f8fafc" 
                        strokeWidth="2.5" 
                    />
                    <circle cx="160" cy="112" r="5" fill="#10b981" className="animate-pulse" />
                    <text x="165" y="128" fill="#10b981" fontSize="8" fontWeight="bold">Rebote en 61.8%</text>
                </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <p className="text-[10px] text-slate-400">Swing High (Máximo)</p>
                    <p className="text-sm font-bold text-white">${swingHigh.toFixed(2)} USD</p>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <p className="text-[10px] text-slate-400">Swing Low (Mínimo)</p>
                    <p className="text-sm font-bold text-white">${swingLow.toFixed(2)} USD</p>
                </div>
                <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/40">
                    <p className="text-[10px] text-emerald-300 font-semibold">61.8% (Golden Zone)</p>
                    <p className="text-sm font-bold text-emerald-400">${(swingHigh - diff * 0.618).toFixed(2)} USD</p>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <p className="text-[10px] text-slate-400">Extensión 161.8% (TP)</p>
                    <p className="text-sm font-bold text-violet-400">${(swingHigh + diff * 0.618).toFixed(2)} USD</p>
                </div>
            </div>
        </div>
    );
};

// ── 2. TRADING JOURNAL & BACKTESTING SIMULATOR ──────
const TradingJournalTool = () => {
    const [trades, setTrades] = useState([
        { id: 1, ticker: 'AAPL', r: 2.7, win: true, note: 'Rebote en 61.8% con volumen WWDC' },
        { id: 2, ticker: 'NVDA', r: -1.0, win: false, note: 'Stop loss ejecutado en corrección 4H' },
        { id: 3, ticker: 'BIMBOA', r: 2.4, win: true, note: 'Entrada en soporte de reporte trimestral' },
        { id: 4, ticker: 'TSLA', r: -1.0, win: false, note: 'Falso breakout sin volumen institucional' },
        { id: 5, ticker: 'MSFT', r: 3.0, win: true, note: 'Pullback a la media móvil de 50 días' }
    ]);

    const totalR = trades.reduce((acc, t) => acc + t.r, 0);
    const wins = trades.filter(t => t.win).length;
    const winRate = ((wins / trades.length) * 100).toFixed(1);

    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <FileSpreadsheet size={16} className="text-violet-400" />
                        Simulador de Trading Journal & Expectativa Matemática
                    </h4>
                    <p className="text-[11px] text-slate-400">Auditoría estadística de ventaja en múltiplos 'R'</p>
                </div>
                <button
                    onClick={downloadTradingJournalTemplate}
                    className="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                    <Download size={14} />
                    Descargar Plantilla Excel (.csv)
                </button>
            </div>

            {/* Métricas del Sistema */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-center">
                    <p className="text-[10px] text-slate-400">Total Operaciones</p>
                    <p className="text-lg font-bold text-white">{trades.length}</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-center">
                    <p className="text-[10px] text-slate-400">Tasa de Acierto (Win Rate)</p>
                    <p className="text-lg font-bold text-blue-400">{winRate}%</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-center">
                    <p className="text-[10px] text-slate-400">Ganancia Acumulada</p>
                    <p className="text-lg font-bold text-emerald-400">+{totalR.toFixed(1)} R</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-center">
                    <p className="text-[10px] text-slate-400">Expectativa por Trade</p>
                    <p className="text-lg font-bold text-amber-400">+{(totalR / trades.length).toFixed(2)} R</p>
                </div>
            </div>

            {/* Tabla resumida de operaciones */}
            <div className="overflow-x-auto bg-slate-950 rounded-lg border border-slate-800">
                <table className="w-full text-left text-xs">
                    <thead className="bg-slate-800 text-slate-400 uppercase text-[9px] border-b border-slate-700">
                        <tr>
                            <th className="p-2.5">Trade</th>
                            <th className="p-2.5">Ticker</th>
                            <th className="p-2.5">Resultado</th>
                            <th className="p-2.5">Múltiplo R</th>
                            <th className="p-2.5">Observación Técnica</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300">
                        {trades.map(t => (
                            <tr key={t.id} className="hover:bg-slate-800/40">
                                <td className="p-2.5 font-mono text-slate-500">#{t.id}</td>
                                <td className="p-2.5 font-bold text-white">{t.ticker}</td>
                                <td className="p-2.5">
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${t.win ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'}`}>
                                        {t.win ? 'GANADOR' : 'STOP LOSS'}
                                    </span>
                                </td>
                                <td className={`p-2.5 font-bold ${t.win ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {t.r > 0 ? `+${t.r.toFixed(1)}R` : `${t.r.toFixed(1)}R`}
                                </td>
                                <td className="p-2.5 text-slate-400 text-[11px]">{t.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// ── 3. CANDLESTICK ANATOMY ─────────────────────────
const CandlestickAnatomy = () => (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-6 animate-fade-in">
        <div className="relative group">
            <div className="flex flex-col items-center">
                <span className="text-[10px] text-slate-400 mb-1">Máximo (High)</span>
                <div className="w-0.5 h-8 bg-emerald-400"></div>
                <div className="w-16 h-24 bg-emerald-500 rounded-sm relative flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <span className="text-emerald-950 font-bold text-xs rotate-[-90deg]">Cuerpo</span>
                    <div className="absolute -left-14 bottom-0 text-[10px] text-emerald-400 font-bold">Apertura</div>
                    <div className="absolute -left-14 top-0 text-[10px] text-emerald-400 font-bold">Cierre</div>
                </div>
                <div className="w-0.5 h-8 bg-emerald-400"></div>
                <span className="text-[10px] text-slate-400 mt-1">Mínimo (Low)</span>
            </div>
            <p className="text-center text-emerald-400 font-bold mt-4">Vela Alcista (Bullish)</p>
            <p className="text-center text-[10px] text-slate-500">Cierre {'>'} Apertura (Control Toro)</p>
        </div>

        <div className="relative group">
            <div className="flex flex-col items-center">
                <span className="text-[10px] text-slate-400 mb-1">Máximo (High)</span>
                <div className="w-0.5 h-8 bg-rose-400"></div>
                <div className="w-16 h-24 bg-rose-500 rounded-sm relative flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                    <span className="text-rose-950 font-bold text-xs rotate-[-90deg]">Cuerpo</span>
                    <div className="absolute -right-14 top-0 text-[10px] text-rose-400 font-bold">Apertura</div>
                    <div className="absolute -right-14 bottom-0 text-[10px] text-rose-400 font-bold">Cierre</div>
                </div>
                <div className="w-0.5 h-8 bg-rose-400"></div>
                <span className="text-[10px] text-slate-400 mt-1">Mínimo (Low)</span>
            </div>
            <p className="text-center text-rose-400 font-bold mt-4">Vela Bajista (Bearish)</p>
            <p className="text-center text-[10px] text-slate-500">Cierre {'<'} Apertura (Control Oso)</p>
        </div>
    </div>
);

// ── 4. SUPPORT & RESISTANCE ────────────────────────
const SupportResistance = () => (
    <div className="relative h-64 w-full bg-slate-900/50 rounded-xl border border-slate-700 mt-6 overflow-hidden">
        <div className="absolute top-8 left-0 w-full h-8 bg-red-500/10 border-y border-red-500/30 flex items-center justify-center">
            <span className="text-red-400 text-xs font-bold tracking-widest">ZONA DE RESISTENCIA (OFERTA)</span>
        </div>
        <div className="absolute bottom-8 left-0 w-full h-8 bg-emerald-500/10 border-y border-emerald-500/30 flex items-center justify-center">
            <span className="text-emerald-400 text-xs font-bold tracking-widest">ZONA DE SOPORTE (DEMANDA)</span>
        </div>
        <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,80 L20,30 L40,75 L60,25 L80,80 L100,50" fill="none" stroke="#8B5CF6" strokeWidth="2.5" />
            <circle cx="20" cy="30" r="2" fill="#EF4444" className="animate-ping" />
            <circle cx="60" cy="25" r="2" fill="#EF4444" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="40" cy="75" r="2" fill="#10B981" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="80" cy="80" r="2" fill="#10B981" className="animate-ping" style={{ animationDelay: '1.5s' }} />
        </svg>
        <div className="absolute top-2 right-2 text-[10px] text-slate-400 font-medium">Rebotes de memoria técnica</div>
    </div>
);

// ── 5. MARKET STRUCTURE HH/LL/BOS ──────────────────
const MarketStructureHHLL = () => {
    const [phase, setPhase] = useState<'alcista' | 'bajista'>('alcista');
    const pts = phase === 'alcista'
        ? [{ x: 20, y: 110 }, { x: 60, y: 70 }, { x: 100, y: 90 }, { x: 150, y: 45 }, { x: 190, y: 65 }, { x: 240, y: 25 }, { x: 280, y: 45 }]
        : [{ x: 20, y: 30 }, { x: 60, y: 75 }, { x: 100, y: 55 }, { x: 150, y: 100 }, { x: 190, y: 80 }, { x: 240, y: 125 }, { x: 280, y: 105 }];

    return (
        <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Estructura de Mercado (BOS / CHoCH)</h4>
                <div className="flex gap-1.5">
                    <button 
                        onClick={() => setPhase('alcista')} 
                        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${phase === 'alcista' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                    >
                        📈 Alcista (HH/HL)
                    </button>
                    <button 
                        onClick={() => setPhase('bajista')} 
                        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${phase === 'bajista' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                    >
                        📉 Bajista (LH/LL)
                    </button>
                </div>
            </div>
            <svg viewBox="0 0 300 130" className="w-full h-44 bg-slate-950 rounded-lg border border-slate-800">
                <polyline 
                    points={pts.map(p => `${p.x},${p.y}`).join(' ')} 
                    fill="none" 
                    stroke={phase === 'alcista' ? '#10b981' : '#f43f5e'} 
                    strokeWidth="2.5" 
                />
                {pts.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="4" fill={phase === 'alcista' ? '#10b981' : '#f43f5e'} />
                ))}
            </svg>
            <div className="mt-2 text-center text-xs text-slate-400">
                {phase === 'alcista' 
                    ? 'BOS (Break of Structure): Cada superación del máximo anterior confirma la vigencia de la tendencia compradora.'
                    : 'LH/LL: Vendedores empujan precios a mínimos inferiores. Comprar contra esta estructura implica altísimo riesgo.'}
            </div>
        </div>
    );
};

// ── 6. VOLUME ANALYSIS ─────────────────────────────
const VolumeAnalysis = () => (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Volumen Institucional vs Bull Trap</h4>
            <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">iPhone 16: Septiembre 2024</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl">
                <p className="text-emerald-400 font-bold text-sm mb-1">✅ Ruptura Válida</p>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                    Superación de resistencia acompañada de volumen superior a 2.5x el ADV diario. Confirma compras institucionales masivas.
                </p>
            </div>
            <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl">
                <p className="text-rose-400 font-bold text-sm mb-1">⚠️ Bull Trap (Trampa)</p>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                    El precio perfora la resistencia con volumen bajo o decreciente. Instituciones distribuyen papel antes de una caída severa.
                </p>
            </div>
        </div>
    </div>
);

// ── 7. RISK CALCULATOR (BREAKEVEN 25%) ──────────────
const RiskCalculator = () => (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 mt-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Matemáticas del Ratio Riesgo:Beneficio</h4>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                Breakeven: 25.0%
            </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl text-center">
                <p className="text-xs text-rose-300">Riesgo en Stop Loss (1R)</p>
                <p className="text-2xl font-bold text-rose-400">-$100 USD</p>
            </div>
            <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl text-center">
                <p className="text-xs text-emerald-300">Objetivo en Take Profit (3R)</p>
                <p className="text-2xl font-bold text-emerald-400">+$300 USD</p>
            </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 text-slate-300">
            <p className="font-semibold text-white">Fórmula de Punto de Equilibrio (Breakeven):</p>
            <p className="font-mono text-emerald-400">WinRate Mínimo = 1 / (1 + Ratio) = 1 / (1 + 3) = 0.25 (25%)</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
                Si ejecutas 100 operaciones con ratio 1:3 y ganas únicamente 40 (40% de acierto), tu resultado es: (40 × $300) - (60 × $100) = $12,000 - $6,000 = <strong className="text-emerald-400">+$6,000 USD de ganancia neta</strong>.
            </p>
        </div>
    </div>
);

// ── 8. RISK/REWARD APPLE ───────────────────────────
const RiskRewardBimbo = () => (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Trade Real: Apple (AAPL) en Doble Suelo</h4>
            <span className="text-xs bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">R:B = 1:2.7</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-[10px]">Entrada Confirmada</p>
                <p className="font-bold text-blue-400">$168.00 USD</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-[10px]">Stop Loss Estructural</p>
                <p className="font-bold text-rose-400">$158.00 USD (-$10)</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-[10px]">Take Profit Resistencia</p>
                <p className="font-bold text-emerald-400">$195.00 USD (+$27)</p>
            </div>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-[11px] text-slate-300">
            <p><strong className="text-amber-400">Paul Tudor Jones:</strong> "Busco operaciones con ratio 5:1 o superior. Eso me permite tener razón solo el 20% de las veces y aun así nunca perder dinero. Si el riesgo:beneficio no es asimétrico, la operación se descarta".</p>
            <p className="mt-1 text-slate-400">Punto de equilibrio para AAPL: 1 / (1 + 2.7) = <strong>27.02%</strong>. Con un 37% de acierto, el sistema arroja alto rendimiento.</p>
        </div>
    </div>
);

// ── 9. MULTI-TIMEFRAME ─────────────────────────────
const MultiTimeframe = () => (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Análisis Top-Down: El Marco Mayor Domina</h4>
        <div className="space-y-2 text-xs">
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-500 flex justify-between items-center">
                <div>
                    <span className="font-bold text-amber-400 block">1. Semanal (Macro / Sesgo de Fondo)</span>
                    <span className="text-[11px] text-slate-400">Determina la fase de Weinstein (Etapa 1 Acumulación vs Etapa 4 Declive).</span>
                </div>
                <span className="text-amber-300 font-mono text-[10px]">Contexto</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-blue-500 flex justify-between items-center">
                <div>
                    <span className="font-bold text-blue-400 block">2. Diario (Tendencia y Estructura)</span>
                    <span className="text-[11px] text-slate-400">Identifica soportes clave, resistencias y secuencias de HH/HL o LH/LL.</span>
                </div>
                <span className="text-blue-300 font-mono text-[10px]">Estructura</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-500 flex justify-between items-center">
                <div>
                    <span className="font-bold text-emerald-400 block">3. 4H / 1H (Timing y Calibración del Stop)</span>
                    <span className="text-[11px] text-slate-400">Ajusta el gatillo de entrada tras pullback para minimizar el riesgo en Stop Loss.</span>
                </div>
                <span className="text-emerald-300 font-mono text-[10px]">Ejecución</span>
            </div>
        </div>
    </div>
);

// ── 10. TRADINGVIEW STATION ────────────────────────
const TradingViewStation = () => (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Estación de Trabajo en Tiempo Real (TradingView)</h4>
            </div>
            <span className="text-xs text-slate-400">NASDAQ:AAPL</span>
        </div>
        <div className="rounded-lg overflow-hidden border border-slate-800 h-80 w-full bg-slate-950">
            <iframe
                src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ%3AAAPL&interval=D&theme=dark&style=1&locale=es&toolbar_bg=%230f172a&hide_top_toolbar=0&hide_legend=0&saveimage=0&watchlist=0&width=100%25&height=100%25"
                className="w-full h-full border-none"
                title="TradingView AAPL Chart"
                loading="lazy"
            />
        </div>
        <p className="text-[11px] text-slate-500 mt-2 text-center">
            Aplica trazado de soportes, retrocesos de Fibonacci y confirmación de volumen antes de ejecutar cualquier posición.
        </p>
    </div>
);

// ── 11. INDICATORS DASHBOARD ───────────────────────
const IndicatorsDashboard = () => (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-4">
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-white">Oscilador RSI (14 periodos)</span>
                <span className="text-[10px] bg-slate-700 text-purple-300 px-2 py-0.5 rounded font-mono">Lectura: 78 (Sobrecompra)</span>
            </div>
            <div className="relative h-8 bg-slate-950 rounded-lg overflow-hidden flex items-center">
                <div className="w-[30%] h-full bg-emerald-500/15 border-r border-emerald-500/30 flex items-center justify-center text-[9px] text-emerald-400">{'< 30'} Sobreventa</div>
                <div className="w-[40%] h-full flex items-center justify-center text-[9px] text-slate-500">Zona Neutra</div>
                <div className="w-[30%] h-full bg-rose-500/15 border-l border-rose-500/30 flex items-center justify-center text-[9px] text-rose-400">{'> 70'} Sobrecompra</div>
                <div className="absolute left-[78%] w-3 h-3 bg-rose-500 rounded-full border border-white transform -translate-x-1/2"></div>
            </div>
            <p className="text-[10px] text-rose-300 mt-2 text-center font-semibold">Alerta: La sobrecompra avisa de desaceleración del impulso; no compres tras rallies verticales.</p>
        </div>
    </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 3 ---

export default function CoursePlayerPhase3() {
    const { user, updateProgress, submitTestResult } = useAuth();
    const [currentLesson, setCurrentLesson] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Mini-quiz por lección
    const [lessonQuizAnswer, setLessonQuizAnswer] = useState<number | null>(null);
    const [showLessonFeedback, setShowLessonFeedback] = useState(false);

    const moduleData = courseData[0];
    const lessonData = moduleData.lessons[currentLesson];

    // Cargar progreso guardado al iniciar
    useEffect(() => {
        try {
            const saved = localStorage.getItem('fa_phase_3_progress');
            if (saved) {
                const idx = parseInt(saved, 10);
                if (!isNaN(idx) && idx >= 0 && idx < moduleData.lessons.length) {
                    setCurrentLesson(idx);
                }
            }
        } catch {
            // fallback
        }
    }, [moduleData.lessons.length]);

    // Actualizar progreso persistente
    useEffect(() => {
        try {
            localStorage.setItem('fa_phase_3_progress', currentLesson.toString());
            localStorage.setItem('fa_phase_3_total', moduleData.lessons.length.toString());
        } catch (e) {
            // ignore
        }
        if (user) {
            updateProgress(3, currentLesson, moduleData.lessons.length);
        }
        setLessonQuizAnswer(null);
        setShowLessonFeedback(false);
    }, [currentLesson, user, moduleData.lessons.length]);

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
        setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    };

    const submitQuiz = () => {
        let calculatedScore = 0;
        quizQuestions.forEach(q => {
            if (quizAnswers[q.id] === q.correct) calculatedScore++;
        });
        setScore(calculatedScore);
        setQuizSubmitted(true);
        if (user) {
            submitTestResult(3, calculatedScore, quizQuestions.length);
        }
    };

    const generateWhatsAppLink = () => {
        const phoneNumber = "527711960057";
        let message = `📊 *Certificación Aprobada - Fase 3 (Análisis Técnico y Riesgo)* 📊%0A%0A`;
        message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
        message += `Aprobado con Breakeven 25% y Gestión R:B comprobada. Solicitud de diploma y acceso a Fase 4.`;
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    const renderVisual = (type: string) => {
        switch (type) {
            case 'candlestick_anatomy': return <CandlestickAnatomy />;
            case 'support_resistance': return <SupportResistance />;
            case 'market_structure_hh_ll': return <MarketStructureHHLL />;
            case 'indicators_dashboard': return <IndicatorsDashboard />;
            case 'fibonacci_tool': return <FibonacciTool />;
            case 'volume_analysis': return <VolumeAnalysis />;
            case 'risk_calculator': return <RiskCalculator />;
            case 'risk_reward_bimbo': return <RiskRewardBimbo />;
            case 'multi_timeframe': return <MultiTimeframe />;
            case 'trading_journal_tool': return <TradingJournalTool />;
            case 'tradingview_station': return <TradingViewStation />;
            default: return null;
        }
    };

    // VISTA DE EXAMEN DE CERTIFICACIÓN
    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <SEO 
                    title="Examen Final: Fase 3 - Análisis Técnico & Riesgo | FA Academy"
                    description="Evaluación de acreditación oficial para la Fase 3 de FA Academy."
                    url="https://fa-academy.vercel.app/course/phase/3"
                />
                <div className="max-w-3xl w-full animate-fade-in">
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-violet-400 bg-violet-950/60 px-3 py-1 rounded-full border border-violet-800">
                            Examen Oficial de Acreditación
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
                            Certificación Fase 3: Análisis Técnico & Riesgo
                        </h1>
                        <p className="text-sm text-slate-400">
                            10 preguntas de validación sobre lectura de velas, Fibonacci, ratios R:B y control de Drawdown.
                        </p>
                    </div>

                    {!quizSubmitted ? (
                        <div className="space-y-6">
                            {quizQuestions.map((q, index) => (
                                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                                    <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                                        <span className="bg-violet-600/30 text-violet-400 border border-violet-500/40 text-xs px-2.5 py-1 rounded-full font-bold">
                                            #{index + 1}
                                        </span>
                                        {q.question}
                                    </p>
                                    <div className="space-y-2.5">
                                        {q.options.map((opt, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => handleQuizAnswer(q.id, i)} 
                                                className={`w-full text-left p-4 rounded-xl transition-all border text-sm leading-relaxed ${
                                                    quizAnswers[q.id] === i 
                                                        ? 'bg-violet-600 border-violet-400 text-white font-bold shadow-md' 
                                                        : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-700/60 text-slate-300'
                                                }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 pb-12">
                                <button 
                                    onClick={submitQuiz} 
                                    disabled={Object.keys(quizAnswers).length < quizQuestions.length} 
                                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-violet-900/30 cursor-pointer"
                                >
                                    Calificar Certificación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-8">
                            <div className="bg-slate-800/90 p-8 rounded-3xl border border-violet-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(139,92,246,0.25)]">
                                <Target className="w-20 h-20 text-violet-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-extrabold text-white">¡Examen de Fase 3 Calificado!</h2>
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 my-6">
                                    {score} / {quizQuestions.length}
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {score >= 7 
                                        ? '¡Felicidades! Has acreditado con éxito las competencias técnicas de estructura, Fibonacci y gestión matemática de riesgo.' 
                                        : 'Te sugerimos repasar los módulos de Fibonacci y punto de equilibrio (Breakeven 25%) antes de reenviar tus resultados.'}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a 
                                    href={generateWhatsAppLink()} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-full text-base transition-transform hover:scale-105 shadow-lg"
                                >
                                    <Send size={20} /> Solicitar Diploma Oficial (WhatsApp)
                                </a>
                                <button 
                                    onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} 
                                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full text-base font-bold transition-all border border-slate-700"
                                >
                                    Reiniciar Módulo
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // VISTA PRINCIPAL DEL REPRODUCTOR
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
            <SEO 
                title={`Fase 3: ${lessonData.title} | FA Academy`}
                description={`Lección ${currentLesson + 1} de la Fase 3 de FA Academy: ${lessonData.content}`}
                url="https://fa-academy.vercel.app/course/phase/3"
            />
            {/* Header de navegación */}
            <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-violet-500/10 p-2 rounded-xl border border-violet-500/20">
                            <CandlestickChart className="text-violet-400" size={22} />
                        </div>
                        <div>
                            <span className="font-extrabold text-white tracking-wider text-sm md:text-base block">
                                FA ACADEMY <span className="text-violet-400 font-normal">| Fase 3</span>
                            </span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden md:block">
                                Análisis Técnico y Gestión de Riesgo
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={downloadTradingJournalTemplate}
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium border border-slate-700 transition-colors"
                        >
                            <FileSpreadsheet size={14} className="text-violet-400" />
                            Diario Excel
                        </button>
                        <div className="text-xs md:text-sm font-bold text-slate-300 bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700">
                            Lección {currentLesson + 1} <span className="text-slate-500">/</span> {moduleData.lessons.length}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
                    <div 
                        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500 ease-out" 
                        style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}
                    ></div>
                </div>
            </header>

            <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-violet-500/15 text-violet-400 font-bold text-[10px] md:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-violet-500/30">
                            Lección {currentLesson + 1}: {lessonData.title}
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                        {lessonData.title}
                    </h1>
                </div>

                {/* Reproductor de Video si existe */}
                {lessonData.videoUrls && lessonData.videoUrls.map((videoId: string, i: number) => (
                    <div key={i} className="mb-6">
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-400 bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
                            <span className="font-bold text-white flex items-center gap-2">
                                <PlayCircle size={15} className="text-violet-400" />
                                {lessonData.videoTitle || lessonData.title}
                            </span>
                            {lessonData.videoDuration && (
                                <span className="bg-slate-800 px-2.5 py-1 rounded-md text-violet-400 font-semibold flex items-center gap-1">
                                    <Clock size={12} /> {lessonData.videoDuration}
                                </span>
                            )}
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black relative w-full pt-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                                title={lessonData.videoTitle || "Clase Oficial FA Academy"}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}

                {/* Componente Visual Técnico */}
                <div className="bg-slate-900/60 rounded-2xl p-4 md:p-6 border border-slate-800 shadow-xl mb-6 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                    <ErrorBoundary fallbackMessage="Error al cargar la visualización técnica">
                        {renderVisual(lessonData.visualType)}
                    </ErrorBoundary>
                </div>

                {/* Contenido Teórico y Conceptos */}
                <div className="space-y-6 mb-8 animate-fade-in">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-850 p-6 rounded-2xl border-l-4 border-violet-500 shadow-lg">
                        <p className="text-base md:text-lg text-violet-100 font-medium leading-relaxed">
                            {lessonData.content}
                        </p>
                    </div>

                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4">
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                            {lessonData.details}
                        </p>
                        {lessonData.speakerNotes && (
                            <div className="text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                                <Brain size={18} className="text-violet-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-violet-300 not-italic block mb-0.5">Nota de Operativa Profesional:</strong>
                                    {lessonData.speakerNotes}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Glosario de Conceptos de la Lección */}
                    {lessonData.concepts && (
                        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                                <BookOpen size={16} className="text-violet-400" />
                                Conceptos Clave de la Lección
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {lessonData.concepts.map((c, idx) => (
                                    <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                                        <p className="text-xs font-bold text-violet-300 mb-1">{c.term}</p>
                                        <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mini-Quiz Interactivo por Lección */}
                    {lessonData.miniQuiz && (
                        <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-violet-500/30 shadow-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <HelpCircle size={18} className="text-violet-400" />
                                <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">
                                    Mini-Quiz de Comprobación
                                </span>
                            </div>
                            <p className="text-sm font-semibold text-white mb-4">
                                {lessonData.miniQuiz.question}
                            </p>
                            <div className="space-y-2 mb-4">
                                {lessonData.miniQuiz.options.map((opt, i) => {
                                    const isSelected = lessonQuizAnswer === i;
                                    const isCorrect = i === lessonData.miniQuiz!.correct;
                                    let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-750';
                                    
                                    if (showLessonFeedback) {
                                        if (isCorrect) {
                                            btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                                        } else if (isSelected) {
                                            btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold';
                                        }
                                    } else if (isSelected) {
                                        btnStyle = 'bg-violet-600 border-violet-400 text-white font-bold';
                                    }

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setLessonQuizAnswer(i);
                                                setShowLessonFeedback(true);
                                            }}
                                            className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                                        >
                                            <span>{opt}</span>
                                            {showLessonFeedback && isCorrect && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
                                            {showLessonFeedback && isSelected && !isCorrect && <XCircle size={16} className="text-rose-400 shrink-0" />}
                                        </button>
                                    );
                                })}
                            </div>

                            {showLessonFeedback && (
                                <div className={`p-3.5 rounded-xl text-xs leading-relaxed border animate-fade-in ${
                                    lessonQuizAnswer === lessonData.miniQuiz.correct 
                                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
                                        : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                                }`}>
                                    <strong>{lessonQuizAnswer === lessonData.miniQuiz.correct ? '¡Correcto!' : 'Explicación didáctica:'}</strong> {lessonData.miniQuiz.explanation}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Footer con Controles de Lección */}
            <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentLesson === 0} 
                        className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2.5 rounded-xl hover:bg-slate-800 text-sm font-semibold"
                    >
                        <ArrowLeft size={18} />
                        <span className="hidden sm:inline">Lección Anterior</span>
                    </button>

                    <div className="flex gap-1.5 overflow-x-auto max-w-[40%] px-2">
                        {moduleData.lessons.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentLesson(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0 ${
                                    idx === currentLesson ? 'bg-violet-500 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                                }`}
                                title={`Ir a Lección ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={handleNext} 
                        className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95"
                    >
                        <span>{currentLesson === moduleData.lessons.length - 1 ? 'Ir al Examen de Certificación' : 'Siguiente Lección'}</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </footer>
        </div>
    );
}
