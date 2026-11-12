import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, TrendingUp, TrendingDown, Activity,
  Target, Send, Info, BookOpen, BarChart2,
  Maximize2, Minimize2, Crosshair, Anchor, ShieldAlert,
  CandlestickChart, Zap, Layers, AlertCircle, Percent,
  Brain, Download, FileSpreadsheet, CheckCircle2, XCircle, HelpCircle,
  RotateCcw, Sliders, Check, PlayCircle, Clock, ExternalLink, FileText,
  LineChart, PieChart, ShieldCheck, Landmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadTradingJournalTemplate } from '../utils/resources';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 3: ANÁLISIS TÉCNICO Y GESTIÓN DE RIESGO (12 LECCIONES) ---

const courseData = [
  {
    id: 3,
    title: "FA Academy: Análisis Técnico y Gráficos",
    description: "Deja de apostar al azar. Domina la lectura del rastro institucional: velas japonesas (OHLC), estructura de mercado (HH/LL), Fibonacci, patrones chartistas, gestión matemática de riesgo y tesis técnica estructurada.",
    lessons: [
      {
        title: "El Lenguaje de las Velas Japonesas (OHLC)",
        content: "Cada vela cuenta la batalla en tiempo real entre compradores (Toros) y vendedores (Osos).",
        details: "Olvídate de los gráficos de línea simples que solo muestran el precio de cierre. Las Velas Japonesas revelan cuatro coordenadas fundamentales en cada intervalo temporal (OHLC): Open (Apertura), High (Máximo), Low (Mínimo) y Close (Cierre). El cuerpo refleja la convicción direccional del movimiento, mientras que las sombras o mechas revelan niveles de precios que fueron enérgicamente rechazados por el mercado. Una mecha superior extensa en resistencia denota rechazo bajista institucional; una mecha inferior prolongada en soporte evidencia absorción compradora.",
        visualType: "candlestick_anatomy",
        videoUrls: ["khSSR5xN4HQ"],
        videoTitle: "Curso Completo de Velas Japonesas y Psicología OHLC",
        videoDuration: "25 min",
        disclaimer: "Educación, no asesoría financiera. La interpretación de patrones de velas requiere confirmación contextual en soporte o resistencia.",
        speakerNotes: "El tamaño relativo del cuerpo y la longitud de las mechas son el pulso del mercado. Una vela Marubozu verde sin mechas refleja convicción absoluta; un Doji señala indecisión temporal.",
        concepts: [
          { term: "OHLC", def: "Open, High, Low, Close. Los cuatro precios clave que estructuran cada sesión temporal en el gráfico." },
          { term: "Doji", def: "Vela donde apertura y cierre coinciden casi exactamente; refleja equilibrio transitorio o indecisión entre compradores y vendedores." },
          { term: "Mecha de Rechazo", def: "Línea fina que sobresale del cuerpo; evidencia que el mercado no toleró cotizar en esos niveles y fue empujado hacia atrás." },
          { term: "Marubozu", def: "Vela con cuerpo extenso y sin mechas; demuestra dominio unilateral y fuerte convicción de tendencia institucional." }
        ],
        realExample: {
          asset: "Vela Martillo de Absorción en Walmart de México ($WALMEX)",
          date: "Rebote técnico en soporte BMV 2024",
          source: "TradingView / BMV Market Data",
          url: "https://www.tradingview.com/",
          caseDescription: "Tras una corrección bajista de 4 semanas hacia la zona de $62.00 MXN, WALMEX imprimió una vela Martillo (Hammer) con mecha inferior de más de 3x el tamaño del cuerpo y volumen de absorción 2.2x superior al promedio diario, confirmando defensa institucional e iniciando un rally del +14%."
        },
        deliverableExercise: {
          title: "Identificación de Velas Institucionales en Gráficos Reales",
          description: "Abre TradingView con un activo líquido (ej. CEMEXCPO o AAPL). Localiza en gráfico Diario: 1) Una vela con mecha de rechazo superior en resistencia, 2) Una vela con mecha de absorción inferior en soporte, 3) Describe qué ocurrió con el precio en las 3 sesiones posteriores."
        },
        quizzes: [
          {
            question: "¿Qué nos indica una vela con cuerpo pequeño en la base y una mecha superior muy larga en una zona de resistencia?",
            options: [
              "Fuerza compradora acelerada que continuará subiendo de inmediato.",
              "Rechazo enérgico de precios altos: la fuerza vendedora institucional tomó el control antes del cierre.",
              "Un error en la gráfica del bróker.",
              "Que el mercado estuvo cerrado sin volumen."
            ],
            correct: 1,
            explanation: "La mecha superior larga representa precios que fueron alcanzados temporalmente pero fuertemente rechazados por la fuerza vendedora antes del cierre."
          },
          {
            question: "¿Qué información aporta la anatomía OHLC que un gráfico de línea simple oculta por completo?",
            options: [
              "El saldo en cuenta bancaria del director de la empresa.",
              "La apertura, el máximo alcanzado y el mínimo tocado en la sesión, permitiendo evaluar la volatilidad intraperiodo y el rechazo de precios.",
              "El monto de impuestos que la empresa pagará el próximo año.",
              "El número de seguidores que la acción tiene en redes sociales."
            ],
            correct: 1,
            explanation: "El gráfico de línea solo conecta cierres; las velas OHLC revelan los extremos de batalla (altos y bajos) y el rechazo en mechas."
          },
          {
            question: "¿Qué caracteriza a una vela Marubozu alcista y qué mensaje transmite al mercado?",
            options: [
              "Tiene mechas enormes y cuerpo diminuto, indicando duda.",
              "Cuerpo verde largo sin mechas (o casi nulas), indicando que los compradores dominaron la sesión desde la apertura hasta el cierre.",
              "Es una vela exclusiva del mercado de bonos gubernamentales.",
              "Indica que el mercado va a quebrar al día siguiente."
            ],
            correct: 1,
            explanation: "El Marubozu refleja convicción total y flujo unidireccional de compras institucionales sin dar tregua a retrocesos."
          }
        ]
      },
      {
        title: "Estructura de Mercado: Soportes y Resistencias",
        content: "El mercado tiene memoria institucional. Donde hubo liquidez ayer, habrá interés hoy.",
        details: "El precio nunca avanza en línea recta; oscila en ondas de impulso y retroceso. Un Soporte es un suelo de cotización donde la fuerza de compra supera a la oferta disponible. Una Resistencia es un techo donde la presión vendedora frena el avance. Cuando una resistencia es superada con volumen, los vendedores atrapados buscan cerrar sus pérdidas en el testeo, convirtiendo el antiguo techo en nuevo suelo mediante el Principio de Polaridad Técnica.",
        visualType: "support_resistance",
        disclaimer: "Educación, no asesoría financiera. Los niveles de soporte y resistencia representan zonas de probabilidad, no garantías matemáticas infalibles.",
        speakerNotes: "Regla de oro de la polaridad: Un nivel de resistencia vulnerado con volumen se transforma automáticamente en soporte potencial para la siguiente onda.",
        concepts: [
          { term: "Soporte (Piso)", def: "Nivel de precios donde se concentra la liquidez de compra que detiene una corrección bajista." },
          { term: "Resistencia (Techo)", def: "Zona donde la oferta de papel supera la demanda, provocando el retroceso del precio." },
          { term: "Breakout (Ruptura)", def: "Perforación decisiva de un nivel clave con aumento del volumen negociado." },
          { term: "Polaridad Técnica", def: "Principio por el cual un techo superado se convierte en piso de demanda en el siguiente retroceso (pullback)." }
        ],
        realExample: {
          asset: "Cambio de Polaridad en Tesla Inc. ($TSLA)",
          date: "Ruptura de rango $200 USD en 2024",
          source: "Nasdaq / TradingView",
          url: "https://www.tradingview.com/",
          caseDescription: "El nivel de $200 USD actuó como resistencia férrea durante 6 meses. Tras romperlo al alza con volumen récord institucional, la acción retrocedió (pullback) hacia los $202 USD exactos, validando el antiguo techo como soporte y despegando hacia los $260 USD."
        },
        deliverableExercise: {
          title: "Trazado de Zonas de Soporte y Resistencia",
          description: "Selecciona un activo (ej. CEMEXCPO, BIMBOA o QQQ). Traza en gráfico Diario: 1) Las dos zonas de soporte más claras de los últimos 12 meses, 2) Las dos zonas de resistencia clave, 3) Identifica si hubo algún cambio de polaridad reciente."
        },
        quizzes: [
          {
            question: "Según el principio de polaridad técnica, ¿qué ocurre cuando una resistencia histórica es rota con fuerte volumen?",
            options: [
              "El mercado se vuelve lateral para siempre.",
              "Esa zona pasa a funcionar como un nuevo soporte potencial en los retrocesos (pullbacks) posteriores.",
              "El activo debe venderse inmediatamente en corto sin revisar nada.",
              "La resistencia se vuelve el doble de fuerte."
            ],
            correct: 1,
            explanation: "El principio de polaridad dicta que un nivel de oferta roto se convierte en un nivel de demanda (soporte) en pullbacks posteriores."
          },
          {
            question: "¿Por qué los traders profesionales hablan de 'zonas' de soporte y resistencia en lugar de líneas exactas al milímetro?",
            options: [
              "Porque los gráficos tienen errores de redondeo.",
              "Porque las órdenes institucionales se ejecutan en rangos de precios con absorción y liquidez distribuida, no en un solo centavo.",
              "Porque no saben usar las herramientas de dibujo.",
              "Porque la bolsa mexicana prohíbe fijar precios exactos."
            ],
            correct: 1,
            explanation: "Las manos fuertes acumulan y distribuyen en bandas de precios; tratar los niveles como franjas elásticas evita ser barrido por mechas de volatilidad."
          },
          {
            question: "¿Qué es un 'Pullback' en el contexto de una ruptura técnica?",
            options: [
              "Una orden de compra cancelada por el bróker.",
              "El movimiento correctivo donde el precio regresa a testear el nivel recientemente perforado para validar el cambio de polaridad.",
              "El pago de dividendos en efectivo.",
              "Una suspensión de cotización por quiebra."
            ],
            correct: 1,
            explanation: "El pullback es el retesteo del nivel roto que ofrece la entrada de menor riesgo y mejor ratio riesgo/beneficio para sumarse a la nueva tendencia."
          }
        ]
      },
      {
        title: "Acción del Precio y Estructura de Mercado (HH/LL, BOS y CHoCH)",
        content: "Aprende a leer la estructura pura del precio antes de colocar cualquier indicador en tu pantalla.",
        details: "La estructura de mercado es el fundamento del Price Action profesional. Una tendencia alcista se caracteriza por una secuencia ininterrumpida de Máximos Más Altos (Higher Highs - HH) y Mínimos Más Altos (Higher Lows - HL). Una tendencia bajista imprime Máximos Más Bajos (Lower Highs - LH) y Mínimos Más Bajos (Lower Lows - LL). La superación de un máximo estructural valida una Continuación de Estructura (Break of Structure - BOS), mientras que la pérdida del último mínimo alcista señala un Cambio de Carácter (Change of Character - CHoCH), alertando sobre el fin del ciclo tendencial.",
        visualType: "market_structure_hh_ll",
        disclaimer: "Educación, no asesoría financiera. La estructura de mercado se analiza siempre de mayor a menor temporalidad.",
        speakerNotes: "Stanley Druckenmiller enseñaba: 'Nunca pelees con la cinta'. Si la estructura dibuja LH y LL, comprar solo porque un oscilador está en sobreventa es una trampa mortal.",
        concepts: [
          { term: "Higher High (HH)", def: "Máximo más alto que el anterior; confirma que la presión compradora sigue superando la resistencia previa." },
          { term: "Higher Low (HL)", def: "Mínimo más alto que el anterior; demuestra que los vendedores claudican a precios cada vez mayores." },
          { term: "BOS (Break of Structure)", def: "Ruptura del último extremo en la misma dirección de la tendencia primaria, validando su continuación." },
          { term: "CHoCH (Change of Character)", def: "Primera señal de alerta estructural: el precio rompe el último mínimo en tendencia alcista o el último máximo en bajista." }
        ],
        realExample: {
          asset: "Estructura Alcista en Invesco QQQ Trust ($QQQ)",
          date: "Ciclo estructural tecnológico 2023 - 2024",
          source: "Nasdaq / TradingView",
          url: "https://www.tradingview.com/",
          caseDescription: "Durante 18 meses consecutivos en el gráfico Diario de QQQ, cada retroceso respetó el Higher Low previo, marcando BOS continuos en cada ruptura de máximos. El primer CHoCH se produjo en julio de 2024 al perforar el HL de $485 USD, anunciando la corrección estival del -12%."
        },
        deliverableExercise: {
          title: "Mapeo de Estructura BOS y CHoCH",
          description: "En un gráfico diario de un activo a tu elección: 1) Etiqueta los últimos 3 máximos y mínimos con HH, HL, LH o LL, 2) Marca el último BOS confirmado, 3) Identifica en qué nivel exacto de precio se produciría un CHoCH si el mercado cayera."
        },
        quizzes: [
          {
            question: "¿Cuál es la diferencia técnica entre un BOS (Break of Structure) y un CHoCH (Change of Character)?",
            options: [
              "El BOS es para divisas y el CHoCH es solo para materias primas.",
              "El BOS confirma la continuación de la tendencia reinante; el CHoCH es el primer quiebre estructural contra la tendencia que alerta de un posible cambio de rumbo.",
              "Son términos sinónimos que significan exactamente lo mismo.",
              "El BOS solo ocurre con medias móviles de 200 días."
            ],
            correct: 1,
            explanation: "BOS valida la continuidad de la tendencia actual, mientras que CHoCH es la ruptura del swing previo que anticipa una transición o reversión."
          },
          {
            question: "¿Qué secuencia gráfica define formalmente a una tendencia bajista sana?",
            options: [
              "Máximos Más Altos (HH) y Mínimos Más Bajos (LL).",
              "Máximos Más Bajos (Lower Highs - LH) y Mínimos Más Bajos (Lower Lows - LL).",
              "Oscilador RSI siempre superior a 80.",
              "Velas Doji consecutivas durante 30 días."
            ],
            correct: 1,
            explanation: "En tendencia bajista, los compradores claudican en techos sucesivamente más bajos (LH) y los vendedores marcan nuevos suelos descendentes (LL)."
          },
          {
            question: "Si el precio de una acción viene dibujando LH y LL, ¿qué error comete un trader que compra solo porque el RSI está en 22?",
            options: [
              "Pagar comisiones excesivas a la bolsa.",
              "Operar contra la estructura de mercado dominante (atrapar un cuchillo que cae) sin esperar confirmación de un CHoCH o cambio estructural.",
              "Comprar a un precio demasiado barato.",
              "Tener que presentar una declaración complementaria ante el SAT."
            ],
            correct: 1,
            explanation: "En tendencias bajistas fuertes, los osciladores pueden permanecer sobrevendidos por semanas mientras el precio continúa marcando nuevos mínimos."
          }
        ]
      },
      {
        title: "Indicadores Técnicos: RSI, Medias Móviles (SMA 50/200) y Cruce Dorado",
        content: "Utiliza herramientas matemáticas para filtrar el ruido y confirmar la tendencia institucional dominante.",
        details: "Los indicadores nunca deben liderar tus decisiones, sino confirmar lo que la estructura del precio ya anticipó. Las Medias Móviles Simples (SMA) suavizan la volatilidad: la SMA de 200 días actúa como el límite institucional entre mercados alcistas y bajistas de largo plazo; la SMA de 50 días refleja la tendencia de mediano plazo. El 'Cruce Dorado' (Golden Cross) ocurre cuando la SMA 50 cruza al alza la SMA 200, validando regímenes alcistas institucionales; el 'Cruce de la Muerte' (Death Cross) marca lo opuesto. El Índice de Fuerza Relativa (RSI de 14 periodos) mide la velocidad del movimiento: sobrecompra (>70) y sobreventa (<30), siendo las divergencias RSI la señal más potente de agotamiento.",
        visualType: "indicators_dashboard",
        disclaimer: "Educación, no asesoría financiera. Los indicadores son derivados rezagados del precio; nunca sustituyen a la acción del precio.",
        speakerNotes: "El 'Cruce Dorado' no es una señal de compra para mañana por la mañana; es la confirmación macro de que los grandes fondos han reposicionado sus carteras a favor del activo.",
        concepts: [
          { term: "SMA 200 Días", def: "Promedio móvil simple de 200 sesiones; referencia institucional rectora entre mercado alcista y bajista." },
          { term: "RSI (14)", def: "Oscilador de momento normalizado entre 0 y 100 que evalúa el vigor relativo de compras y ventas recientes." },
          { term: "Divergencia RSI", def: "Cuando el precio marca un nuevo máximo pero el RSI marca un máximo menor; aviso técnico de agotamiento del impulso comprador." },
          { term: "Cruce Dorado", def: "Cruce alcista de la media de 50 sesiones por encima de la media de 200 sesiones; señal de fortaleza estructural institucional." }
        ],
        realExample: {
          asset: "Cruce Dorado y Divergencia en Cemex ($CEMEXCPO)",
          date: "BMV ciclo bursátil 2023 - 2024",
          source: "Bolsa Mexicana de Valores / TradingView",
          url: "https://www.tradingview.com/",
          caseDescription: "Cemex confirmó un Cruce Dorado en la BMV a inicios de 2023 con el precio superando los $9.50 MXN. Posteriormente, al alcanzar los $15.80 MXN en 2024, el precio marcó un nuevo máximo pero el RSI marcó una divergencia bajista clara (RSI bajando de 76 a 64), anticipando una corrección saludable del -15% hacia la SMA 200."
        },
        deliverableExercise: {
          title: "Auditoría de SMA 50/200 y RSI en tu Lista de Seguimiento",
          description: "Elige 2 activos en TradingView: 1) ¿Cotizan por encima o por debajo de su SMA de 200 días? 2) ¿Cuál es la lectura actual del RSI de 14 periodos? 3) ¿Existe alguna divergencia entre el precio y el oscilador en las últimas 4 semanas?"
        },
        quizzes: [
          {
            question: "Si una acción cotiza por debajo de su SMA de 200 días y su RSI marca 25, ¿cuál es la lectura técnica profesional?",
            options: [
              "Comprar todo inmediatamente porque está regalada y no puede caer más.",
              "El activo está en tendencia bajista de fondo; la sobreventa del RSI puede ser una trampa si no hay confirmación de cambio de estructura en el precio.",
              "El indicador RSI está descompuesto para ese activo.",
              "Vender en corto sin Stop Loss."
            ],
            correct: 1,
            explanation: "Bajo la SMA 200, la inercia macro es vendedora. La sobreventa por sí sola no garantiza un rebote sostenido sin cambio estructural en la acción del precio."
          },
          {
            question: "¿Qué es una Divergencia Bajista Regular en el RSI y qué advierte?",
            options: [
              "Cuando el precio baja y el RSI sube.",
              "Cuando el precio marca un nuevo Máximo Más Alto (HH) pero el RSI imprime un Máximo Más Bajo (LH), alertando de que el impulso comprador se está debilitando.",
              "Cuando el volumen diario supera los 10 millones de acciones.",
              "Cuando Banxico sube la tasa de interés en México."
            ],
            correct: 1,
            explanation: "La divergencia bajista revela pérdida de fuerza interna en el movimiento alcista, anticipando corrección o consolidación."
          },
          {
            question: "¿Qué fenómeno técnico describe el 'Cruce Dorado' (Golden Cross)?",
            options: [
              "Cuando el oro sube de precio en Londres.",
              "El cruce alcista de una media móvil rápida (típicamente SMA 50) por encima de una media móvil lenta (SMA 200).",
              "El pago de dividendos en acciones preferentes.",
              "Una orden de compra ejecutada en el horario de apertura de la BMV."
            ],
            correct: 1,
            explanation: "El cruce de la SMA 50 sobre la SMA 200 señala transición de mediano plazo hacia un régimen de mercado con sesgo alcista institucional."
          }
        ]
      },
      {
        title: "Gestión de Riesgo y Esperanza Matemática: Breakeven al 25% con Ratio 1:3",
        content: "El secreto de la rentabilidad a largo plazo no es adivinar el futuro, sino la asimetría matemática del riesgo.",
        details: "Muchos novatos creen erróneamente que para ser rentables necesitan acertar el 80% o 90% de sus operaciones. Matemáticamente, con un Ratio Riesgo:Beneficio de 1:3 (arriesgar $1 para ganar $3), el punto de equilibrio (Breakeven Win Rate) es exactamente del 25.0% (Fórmula: 1 / [1 + 3] = 0.25). Esto significa que acertando únicamente el 35% o 40% de tus operaciones con ratios asimétricos, tu sistema genera una sólida Esperanza Matemática positiva (E = [WinRate × Ganancia] - [LossRate × Pérdida]). Quien domina la asimetría y arriesga como máximo el 1% de su cartera por operación erradica por completo la probabilidad de ruina patrimonial.",
        visualType: "risk_calculator",
        disclaimer: "Educación, no asesoría financiera. La esperanza matemática solo funciona si se respetan estrictamente los Stop Loss sin moverlos.",
        speakerNotes: "El trading profesional es un negocio de probabilidades, no de tener la razón todo el tiempo. Puedes equivocarte 6 de cada 10 veces y aun así ver crecer tu patrimonio sostenidamente si tus pérdidas son pequeñas y tus ganancias son grandes.",
        concepts: [
          { term: "Ratio Riesgo:Beneficio (R:B)", def: "Relación entre el capital expuesto en el Stop Loss y el beneficio objetivo esperado en el Take Profit." },
          { term: "Punto de Equilibrio (Breakeven)", def: "Tasa de acierto mínima requerida para no perder capital: 1 / (1 + Ratio R:B). Con 1:3 es exactamente 25.0%." },
          { term: "Esperanza Matemática (E)", def: "Ganancia o pérdida promedio esperada por cada peso o dólar arriesgado en una muestra amplia de operaciones." },
          { term: "Regla del 1%", def: "Norma de asignación: la pérdida máxima al tocar el Stop Loss nunca debe superar el 1% del capital total de la cuenta." }
        ],
        realExample: {
          asset: "Simulación de 100 Operaciones con Ratio 1:3 y 35% de Acierto",
          date: "Matriz cuantitativa de esperanza matemática",
          source: "FA Academy Quantitative Risk Lab",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "En 100 operaciones arriesgando $1,000 MXN por trade (1R): con 35 operaciones ganadoras (+3R = +$3,000 MXN c/u) y 65 operaciones perdedoras (-1R = -$1,000 MXN c/u), el resultado bruto es: Ganancias $105,000 MXN - Pérdidas $65,000 MXN = Ganancia Neta de +$40,000 MXN (+40R) a pesar de haber perdido casi dos tercios de las operaciones."
        },
        deliverableExercise: {
          title: "Cálculo de Breakeven y Esperanza de tu Estrategia",
          description: "Calcula en el recuadro: 1) Con un ratio 1:2.5, ¿cuál es tu tasa de breakeven mínima? (Fórmula: 1 / [1 + 2.5]), 2) Si tu capital total es de $50,000 MXN, ¿cuál es el monto exacto en pesos que representa tu riesgo del 1% por operación?"
        },
        quizzes: [
          {
            question: "Si operas consistentemente con un Ratio Riesgo:Beneficio de 1:3, ¿cuál es el porcentaje mínimo de operaciones ganadoras para alcanzar el punto de equilibrio?",
            options: [
              "50.0% de aciertos.",
              "30.0% de aciertos.",
              "25.0% de aciertos (1 / [1 + 3] = 0.25).",
              "75.0% de aciertos."
            ],
            correct: 2,
            explanation: "La fórmula de breakeven es 1 / (1 + R:B). Con R:B de 1:3, 1 / (1 + 3) = 1/4 = 0.25 (25.0%). Con solo ganar 1 de cada 4 operaciones no pierdes dinero."
          },
          {
            question: "¿Por qué la regla del 1% de riesgo por operación protege contra la ruina matemática del inversionista?",
            options: [
              "Porque asegura que la casa de bolsa no te cobre comisión de corretaje.",
              "Porque necesitarías una racha inédita de decenas de pérdidas consecutivas para comprometer una parte sustancial del capital, manteniendo intacta tu capacidad operativa.",
              "Porque te garantiza una tasa fija en CETES.",
              "Porque la BMV reembolsa el 1% de todas las pérdidas."
            ],
            correct: 1,
            explanation: "Arriesgar el 1% permite resistir rachas de 10 o 15 pérdidas consecutivas perdiendo apenas una fracción manejable del capital, evitando el abismo del drawdown asimétrico."
          },
          {
            question: "¿Qué ocurre con la esperanza matemática si un trader no respeta su Stop Loss y deja correr las pérdidas esperando que el precio 'se recupere'?",
            options: [
              "La esperanza matemática se vuelve infinitamente positiva.",
              "Destruye la asimetría del sistema: una sola pérdida catastrófica de -5R o -10R borra las ganancias acumuladas de múltiples operaciones disciplinadas.",
              "El bróker le otorga un premio por paciencia.",
              "No tiene ningún impacto si el activo es de buena calidad."
            ],
            correct: 1,
            explanation: "El ratio R:B solo protege si el Stop Loss corta la pérdida en 1R sin excepciones; dejar correr pérdidas destruye la ventaja matemática del sistema."
          }
        ]
      },
      {
        title: "Volumen Real vs. Volumen de Tick: Rupturas Institucionales y Bull Traps",
        content: "El volumen es el combustible del mercado: un avance sin volumen es solo una trampa de liquidez.",
        details: "El volumen representa la cantidad real de acciones o contratos liquidados en una sesión. Una ruptura de resistencia requiere un volumen significativamente superior al promedio diario (ADV - Average Daily Volume) para considerarse institucionalmente respaldada. Si el precio supera un techo pero el volumen es anémico, nos encontramos ante una 'Bull Trap' (trampa alcista): los operadores institucionales inducen compras minoristas para distribuir su inventario a precios inflados antes de provocar la caída. En septiembre de 2024, el lanzamiento del iPhone 16 generó picos de volumen institucional de más de 3.2x el volumen promedio diario de Apple en el Nasdaq, validando la fuerza compradora de la ruptura.",
        visualType: "volume_analysis",
        disclaimer: "Educación, no asesoría financiera. En mercados extrabursátiles como Forex solo existe volumen de tick (actividad); en bolsas reguladas (BMV, NYSE, Nasdaq) existe volumen real de acciones.",
        speakerNotes: "El volumen valida la acción del precio. Una vela verde gigante con volumen bajo es sospechosa; una vela verde superando resistencia con volumen 3x es la huella digital del dinero institucional.",
        concepts: [
          { term: "ADV (Average Daily Volume)", def: "Volumen promedio diario negociado en las últimas 20 o 50 sesiones bursátiles." },
          { term: "Bull Trap (Trampa Alcista)", def: "Ruptura de resistencia sin volumen que seduce a compradores minoristas antes de un colapso súbito del precio." },
          { term: "Volumen Real vs. Tick", def: "Volumen real = títulos accionarios efectivamente intercambiados (BMV/SIC); volumen de tick = frecuencia de cambios de precio (Forex)." },
          { term: "Absorción Institucional", def: "Volumen muy alto con rango de vela estrecho en soporte; indica que las instituciones están comprando toda la oferta disponible sin dejar caer el precio." }
        ],
        realExample: {
          asset: "Ruptura Institucional de Apple Inc. ($AAPL) con iPhone 16",
          date: "Septiembre de 2024",
          source: "Nasdaq Market Data / SEC Filings",
          url: "https://www.nasdaq.com/",
          caseDescription: "Durante la presentación del iPhone 16 en septiembre de 2024, Apple rompió la resistencia de $228 USD con un volumen de negociación que superó en 3.2x su ADV de 30 días, confirmando acumulación de fondos institucionales y despegando hacia nuevos máximos históricos en los meses siguientes."
        },
        deliverableExercise: {
          title: "Auditoría de Volumen en Rupturas Recientes",
          description: "Busca en el gráfico diario de una emisora mexicana o de Wall Street (ej. CEMEXCPO o TSLA) una ruptura reciente de soporte o resistencia. Registra: 1) El volumen de la sesión de ruptura vs el ADV de 20 días, 2) ¿Fue una ruptura válida con volumen o un falso rompimiento (trap)?"
        },
        quizzes: [
          {
            question: "Si una acción supera su resistencia anual con un volumen del 35% respecto a su ADV de 20 sesiones, ¿cuál es el mayor riesgo técnico?",
            options: [
              "Que sea un Bull Trap (trampa alcista) por falta de respaldo institucional real.",
              "Que la acción sea suspendida de cotización en la bolsa de inmediato.",
              "Que el volumen no tenga ninguna relación con el precio.",
              "Que el dividendo se incremente al triple."
            ],
            correct: 0,
            explanation: "Las rupturas con volumen bajo carecen de demanda institucional; suelen ser movimientos fabricados para capturar liquidez de compradores atrapados."
          },
          {
            question: "¿Qué diferencia existe entre el volumen real de la BMV/NYSE y el volumen de tick utilizado en Forex no regulado?",
            options: [
              "No hay ninguna diferencia.",
              "El volumen real mide el número exacto de acciones negociadas y liquidadas en el mercado; el volumen de tick solo cuenta la cantidad de veces que el precio parpadeó o cambió de cotización.",
              "El volumen de tick es auditado por el Banco Mundial.",
              "El volumen real solo se publica una vez al año."
            ],
            correct: 1,
            explanation: "En mercados bursátiles organizados (BMV/SIC/NYSE), cada transacción se registra en títulos reales; en mercados descentralizados solo se mide el tick activity."
          },
          {
            question: "En el caso real de Apple con el lanzamiento del iPhone 16 en septiembre de 2024, ¿qué factor de volumen validó la continuidad alcista?",
            options: [
              "El volumen fue de cero.",
              "Registró un pico de volumen superior a 3.2x su volumen diario promedio (ADV), confirmando demanda institucional masiva.",
              "El volumen cayó un 80%.",
              "La empresa prohibió comprar acciones."
            ],
            correct: 1,
            explanation: "El volumen 3.2x superior al promedio diario confirmó el respaldo de grandes fondos a la ruptura de la resistencia."
          }
        ]
      },
      {
        title: "Gestión Visual de Riesgo:Beneficio con Caso Apple ($AAPL)",
        content: "La entrada es solo el 20% del éxito; el 80% restante depende de la ubicación del Stop Loss y el Take Profit.",
        details: "Analicemos la estructura de trade real en Apple Inc. ($AAPL) tras la confirmación de soporte en $165.00 USD. El plan de trading profesional define tres coordenadas antes de pulsar el botón de compra: 1) Entrada: $168.00 USD tras confirmación de vela envolvente alcista. 2) Stop Loss: $158.00 USD (ubicado holgadamente debajo del soporte estructural invalidante, arriesgando $10.00 USD por acción). 3) Take Profit: $195.00 USD (resistencia técnica previa, con potencial de ganancia de $27.00 USD por acción). Esto produce un Ratio R:B de 1:2.7. El punto de equilibrio (Breakeven) se calcula: 1 / (1 + 2.7) = 1 / 3.7 = 27.02%. Con una tasa de acierto conservadora del 37%, este trade genera una ventaja estadística institucional sobresaliente.",
        visualType: "risk_reward_bimbo",
        disclaimer: "Educación, no asesoría financiera. AAPL se utiliza como caso de estudio didáctico de gestión de riesgo técnico.",
        speakerNotes: "Paul Tudor Jones lo resumió con maestría: 'Busco un ratio 5:1. Cinco a uno significa que arriesgo un dólar para ganar cinco. Eso me permite tener una tasa de acierto de solo el 20% y aun así no perder dinero. Si el riesgo:beneficio no es asimétrico, la operación se descarta'.",
        concepts: [
          { term: "Stop Loss Estructural", def: "Orden automática ubicada detrás de un nivel técnico que invalida la hipótesis del trade, no en una cifra arbitraria." },
          { term: "Take Profit Escalonado", def: "Estrategia de cerrar el 50% de la posición en primer objetivo y proteger el resto con trailing stop." },
          { term: "Trailing Stop", def: "Stop Loss dinámico que avanza protegiendo beneficios a medida que el precio se mueve a favor." },
          { term: "Ratio 1:2.7", def: "Estructura donde arriesgas $10 USD para ir a buscar $27 USD de recompensa potencial." }
        ],
        realExample: {
          asset: "Trade de Rebote Técnico en Apple Inc. (NASDAQ: AAPL)",
          date: "Rebote técnico en soporte $165 - $195 USD",
          source: "Nasdaq / Bloomberg Market Data",
          url: "https://www.nasdaq.com/",
          caseDescription: "Configuración de entrada en $168 USD con stop en $158 USD y objetivo en $195 USD. La relación de riesgo:beneficio de 1:2.7 requirió un breakeven de 27.02%, alcanzando el objetivo en 8 semanas tras la presentación de Apple Intelligence con un retorno de +2.7R sobre el riesgo asumido."
        },
        deliverableExercise: {
          title: "Plan de Trade Asimétrico con 3 Coordenadas",
          description: "Selecciona una acción o ETF. Define por escrito: 1) Precio exacto de Entrada, 2) Precio de Stop Loss técnico justificando qué nivel estructural lo respalda, 3) Precio de Take Profit objetivo, 4) Calcula el ratio R:B resultante y comprueba que sea superior a 1:2.5."
        },
        quizzes: [
          {
            question: "En la operación analizada de Apple con riesgo de $10 USD y objetivo de $27 USD (Ratio 1:2.7), ¿cuál es el porcentaje de acierto de breakeven exacto?",
            options: [
              "50.00%",
              "27.02% (1 / [1 + 2.7] = 1 / 3.7)",
              "10.00%",
              "65.00%"
            ],
            correct: 1,
            explanation: "Breakeven = 1 / (1 + 2.7) = 1 / 3.7 = 27.02%. Con ganar al menos el 27.02% de las operaciones con este ratio, el sistema no pierde capital."
          },
          {
            question: "¿Por qué el Stop Loss debe colocarse detrás de un nivel estructural (soporte/mínimo) y no en un porcentaje arbitrario (ej. -2%)?",
            options: [
              "Porque la casa de bolsa cobra penalización si usas números enteros.",
              "Porque los niveles estructurales representan zonas donde la tesis técnica queda verdaderamente invalidada; un porcentaje arbitrario puede cerrarte por simple ruido intradía.",
              "Porque los porcentajes solo aplican para criptomonedas.",
              "Porque el SAT exige fijar stops en soporte."
            ],
            correct: 1,
            explanation: "El Stop técnico se ubica donde la premisa de compra deja de tener sentido; un porcentaje fijo suele ser barrido por la volatilidad normal del activo."
          },
          {
            question: "¿Qué afirmaba Paul Tudor Jones sobre la relación entre el ratio riesgo/beneficio y la tasa de acierto?",
            options: [
              "Que se debe acertar el 95% de las veces para ser millonario.",
              "Que con ratios asimétricos altos (ej. 5:1), puedes tener la razón solo el 20% de las veces y aun así proteger tu capital y ganar dinero consistentemente.",
              "Que el análisis técnico no funciona en mercados modernos.",
              "Que solo se debe operar sin stop loss."
            ],
            correct: 1,
            explanation: "La asimetría positiva permite que los pocos aciertos paguen con creces todas las pequeñas pérdidas inevitables del proceso."
          }
        ]
      },
      {
        title: "Uso de Temporalidades: El Marco Manda (Multi-Timeframe y Etapas de Weinstein)",
        content: "Una corrección bajista en 15 minutos puede ser una simple oportunidad de compra en el gráfico diario.",
        details: "El análisis Multi-Timeframe (MTF) es la técnica institucional de sincronización de marcos temporales. La regla de oro dicta que el marco temporal mayor siempre subordina al menor. El método clásico de Stan Weinstein categoriza la evolución de todo activo en 4 etapas: Etapa 1 (Acumulación/Base lateral sobre soporte), Etapa 2 (Avance Alcista sostenido por encima de la media de 30 semanas), Etapa 3 (Distribución/Techo con alta volatilidad) y Etapa 4 (Declive Bajista por debajo de la media). El análisis descendente (Top-Down) revisa el gráfico Semanal para determinar el contexto macro y la etapa de Weinstein, el gráfico Diario para identificar la estructura y soportes clave, y el gráfico de 4H/1H para calibrar el gatillo de entrada con el menor stop posible.",
        visualType: "multi_timeframe",
        disclaimer: "Educación, no asesoría financiera. Nunca operes en temporalidades bajas (5 min) en contra de la tendencia estructural del gráfico diario o semanal.",
        speakerNotes: "El error más destructivo del operador principiante es mirar únicamente el gráfico de 5 minutos: cree ver una ruptura alcista cuando en el gráfico diario es simplemente una trampa de rechazo contra la media móvil.",
        concepts: [
          { term: "Análisis Top-Down", def: "Metodología de inspección descendente: Semanal (contexto macro) → Diario (tendencia/estructura) → 4H/1H (ejecución)." },
          { term: "Etapas de Weinstein", def: "Ciclo de 4 fases de mercado: Acumulación (1), Avance alcista (2), Distribución (3) y Declive bajista (4)." },
          { term: "Confluencia Temporal", def: "Alineación de señales en la misma dirección a través de múltiples temporalidades simultáneas." },
          { term: "Ruido Intradía", def: "Fluctuaciones menores en marcos de 1 a 15 minutos que carecen de trascendencia estructural para los grandes fondos." }
        ],
        realExample: {
          asset: "Transición de Etapas de Weinstein en Tesla ($TSLA)",
          date: "Ciclo técnico 2021 - 2024",
          source: "TradingView / Weinstein Stage Analysis",
          url: "https://www.tradingview.com/",
          caseDescription: "En el gráfico semanal, TSLA vivió su Etapa 2 de Avance alcista en 2020-2021 cotizando sobre la media de 30 semanas; entró en Etapa 3 de Distribución en finales de 2021 y se precipitó en Etapa 4 de Declive en 2022 cayendo de $400 a $100 USD. Los traders que operaban rebotes intradía en 15 minutos sufrieron pérdidas severas al ignorar la Etapa 4 semanal."
        },
        deliverableExercise: {
          title: "Diagnóstico Top-Down de un Activo",
          description: "Abre el gráfico de un activo en TradingView y completa el diagnóstico: 1) Gráfico Semanal: ¿En qué Etapa de Weinstein (1, 2, 3 o 4) se encuentra? 2) Gráfico Diario: ¿La tendencia es alcista (HH/HL) o bajista (LH/LL)? 3) Define si tu sesgo operativo es Comprador o Esperar."
        },
        quizzes: [
          {
            question: "Si el gráfico semanal muestra una Etapa 4 de Declive por debajo de la media móvil de 30 semanas, ¿cómo debes interpretar una señal de compra en gráfico de 15 minutos?",
            options: [
              "Como una oportunidad irrepetible para entrar con todo el capital disponible.",
              "Como un simple rebote temporal o contratendencia con altísimo riesgo de ser aplastado por la tendencia bajista mayor.",
              "Las etapas de Weinstein solo aplican al mercado de metales.",
              "El gráfico de 15 minutos tiene mayor jerarquía que el semanal."
            ],
            correct: 1,
            explanation: "La temporalidad mayor manda. Operar compras en marcos menores en plena Etapa 4 semanal es nadar contra una corriente institucional devastadora."
          },
          {
            question: "¿Cuál es la secuencia lógica del análisis técnico Top-Down profesional?",
            options: [
              "Gráfico de 1 minuto → Gráfico de 5 minutos → Comprar.",
              "Semanal (contexto macro y fase) → Diario (estructura y soportes) → 4H/1H (gatillo de entrada y calibración de Stop Loss).",
              "Revisar Twitter → Ver el gráfico de 15 minutos → Ejecutar.",
              "Solo mirar el precio de cierre en las noticias."
            ],
            correct: 1,
            explanation: "El análisis descendente filtra el ruido menor subordinando las decisiones tácticas de corto plazo al sesgo direccional del marco mayor."
          },
          {
            question: "¿En cuál de las 4 etapas de Stan Weinstein se generan las mayores ganancias sostenidas para posiciones compradoras?",
            options: [
              "Etapa 1 (Acumulación lateral).",
              "Etapa 2 (Avance Alcista sostenido sobre la media móvil).",
              "Etapa 3 (Distribución volátil).",
              "Etapa 4 (Declive bajista acelerado)."
            ],
            correct: 1,
            explanation: "La Etapa 2 es la fase donde la demanda institucional impulsa el precio sostenidamente al alza superando resistencias consecutivas."
          }
        ]
      },
      {
        title: "Estación TradingView y Psicología Operativa: Superación de FOMO y Revancha",
        content: "Tu mayor obstáculo y tu mayor activo en el mercado no es el gráfico, sino tu propia mente.",
        details: "El mercado financiero es un mecanismo implacable que transfiere capital del impaciente al paciente. Los dos grandes sesgos emocionales que destruyen cuentas de trading son el FOMO (Fear Of Missing Out, miedo a quedarse fuera, que induce a comprar activos verticales en máximos históricos) y el Revenge Trading (operativa por revancha: aumentar impulsivamente el tamaño de la posición tras una pérdida para intentar desquitarse del mercado). La disciplina profesional exige operar exclusivamente mediante un Plan de Trading escrito que especifique las condiciones objetivas de entrada, invalidación y salida, estableciendo un límite estricto de pérdida diaria máxima tras el cual las pantallas se apagan.",
        visualType: "tradingview_station",
        disclaimer: "Educación, no asesoría financiera. La psicología no sustituye a la ventaja matemática; ambas son indispensables.",
        speakerNotes: "El trading exitoso es aburrido y metódico. Si sientes adrenalina o euforia al operar, estás apostando como en un casino, no gestionando capital profesional.",
        concepts: [
          { term: "FOMO (Fear Of Missing Out)", def: "Sesgo emocional que empuja a comprar precipitadamente en techos de mercado por temor a perderse una subida." },
          { term: "Revenge Trading (Revancha)", def: "Conducta destructiva de duplicar el riesgo o sobreoperar tras una pérdida para intentar recuperar el dinero de inmediato." },
          { term: "Plan de Trading", def: "Protocolo formal por escrito que define setups válidos, gestión de riesgo, invalidación y reglas de salida antes de operar." },
          { term: "Límite de Pérdida Diaria", def: "Monto máximo en R o porcentaje (ej. -2R) tras el cual se detiene por completo la operativa del día." }
        ],
        realExample: {
          asset: "El Colapso Psicológico del FOMO en la Burbuja de Acciones Meme",
          date: "Estudio conductual de mercado 2021 - 2024",
          source: "FINRA Investor Education Foundation",
          url: "https://www.finra.org/",
          caseDescription: "Cientos de miles de operadores minoristas compraron acciones con euforia en máximos de cotización impulsados por foros y redes sociales. Al iniciarse la corrección del -80%, el sesgo de aversión a la pérdida y el trading por revancha provocaron liquidaciones masivas de cuentas, mientras los operadores disciplinados esperaron pacientemente zonas de soporte institucional."
        },
        deliverableExercise: {
          title: "Redacción de tu Protocolo Psicológico de Emergencia",
          description: "Escribe tus 3 reglas de hierro: 1) ¿Cuál es tu límite máximo de pérdida diaria antes de apagar pantallas? (ej. 2 pérdidas consecutivas o -2R), 2) ¿Qué harás si sientes euforia o rabia tras un trade?, 3) Escribe la frase que leerás antes de pulsar comprar."
        },
        quizzes: [
          {
            question: "¿Qué conducta define al 'Revenge Trading' y cómo debe prevenirse según la psicología profesional?",
            options: [
              "Comprar acciones de dos empresas que compiten entre sí.",
              "Duplicar el tamaño de la posición o sobreoperar impulsivamente tras una pérdida para intentar recuperarse; se previene respetando el límite diario de pérdida y apagando pantallas.",
              "Revisar el informe financiero anual de la compañía.",
              "Dejar correr las ganancias con trailing stop dinámico."
            ],
            correct: 1,
            explanation: "El Revenge Trading nace del ego herido por una pérdida; la única protección es el cese inmediato de operativa conforme al límite de riesgo diario."
          },
          {
            question: "¿Por qué el FOMO (miedo a perderse una subida) destruye sistemáticamente el capital de los principiantes?",
            options: [
              "Porque los hace vender con ganancias demasiado pronto.",
              "Porque los empuja a comprar con euforia en el extremo superior de velas parabólicas agotadas, justo donde los fondos institucionales distribuyen su papel.",
              "Porque Banxico sanciona las compras en máximos.",
              "Porque la bolsa cobra comisiones más altas en subidas."
            ],
            correct: 1,
            explanation: "El FOMO desactiva el pensamiento racional e induce compras impulsivas en techos de mercado con el peor ratio riesgo/beneficio posible."
          },
          {
            question: "¿Cuál es la función primordial de un Plan de Trading escrito antes de iniciar una sesión de mercado?",
            options: [
              "Asegurar que nunca tendrás una operación perdedora.",
              "Eliminar la improvisación emocional, transformando la operativa en un conjunto objetivo y medible de reglas de ejecución y gestión de riesgo.",
              "Adivinar qué noticias saldrán en la televisión.",
              "Garantizar que el bróker te dé crédito sin intereses."
            ],
            correct: 1,
            explanation: "El plan de trading escrito blinda la mente contra sesgos emocionales al definir con antelación entradas, stops y salidas."
          }
        ]
      },
      {
        title: "Retrocesos de Fibonacci y Patrones Chartistas de Precio",
        content: "La geometría de las zonas de recarga institucional y las figuras clásicas de continuación y reversión.",
        details: "Descubierta por Leonardo de Pisa en el siglo XIII, la secuencia de Fibonacci revela proporciones matemáticas que gobiernan la psicología de masas y los algoritmos institucionales. En una onda impulsiva, el retroceso del 61.8% (Golden Ratio o Número Áureo) y los niveles complementarios de 38.2% y 50.0% representan zonas de descuento óptimo donde el dinero inteligente recarga posiciones. Al combinarse con Patrones Chartistas clásicos como el Hombro-Cabeza-Hombro (reversión bajista), el Doble Suelo (reversión alcista) o los Banderines y Banderas (continuación de tendencia con contracción de volumen), la probabilidad estadística de éxito se maximiza sustancialmente.",
        visualType: "fibonacci_tool",
        disclaimer: "Educación, no asesoría financiera. Los niveles de Fibonacci y patrones chartistas requieren confluencia con soportes y volumen real.",
        speakerNotes: "El nivel 61.8% no es mágico de forma aislada; cobra máxima efectividad cuando confluye exactamente con un soporte horizontal previo o una media móvil relevante.",
        concepts: [
          { term: "Nivel 61.8% (Golden Ratio)", def: "Proporción áurea derivada de la serie de Fibonacci; zona óptima de recarga tendencial en algoritmos institucionales." },
          { term: "Hombro-Cabeza-Hombro (HCH)", def: "Patrón chartista de reversión que marca agotamiento de tendencia alcista con ruptura de la línea de cuello (neckline)." },
          { term: "Doble Suelo (W)", def: "Figura de cambio donde el precio testea dos veces el mismo nivel de soporte sin poder perforarlo, superando la resistencia intermedia." },
          { term: "Banderín (Pennant)", def: "Patrón de continuación caracterizado por consolidación triangular con volumen decreciente tras un fuerte impulso vertical." }
        ],
        realExample: {
          asset: "Retroceso del 61.8% y Doble Suelo en Tesla ($TSLA)",
          date: "Primavera de 2024",
          source: "TradingView / Nasdaq Data",
          url: "https://www.tradingview.com/",
          caseDescription: "Tras caer desde $268 a $138 USD, TSLA formó un Doble Suelo en la zona de $140 USD con divergencia alcista en RSI. El posterior rally impulsivo corrigió exactamente al nivel del 61.8% de Fibonacci ($172 USD) antes de expandir hacia la proyección del 161.8% superando los $220 USD."
        },
        deliverableExercise: {
          title: "Trazado de Retroceso de Fibonacci y Detección de Patrones",
          description: "En TradingView: 1) Traza la herramienta de Retroceso de Fibonacci desde el Swing Low hasta el Swing High de un impulso reciente, 2) Identifica si el precio rebotó en la zona del 38.2%, 50% o 61.8%, 3) Describe si se formó algún patrón chartista (Doble Suelo, Bandera o HCH)."
        },
        quizzes: [
          {
            question: "¿Por qué el retroceso del 61.8% de Fibonacci es considerado la 'Zona Áurea' en el trading cuantitativo?",
            options: [
              "Porque garantiza que el precio nunca volverá a caer en la historia.",
              "Porque representa la proporción matemática armónica donde convergen masivamente órdenes y algoritmos institucionales para buscar giros de descuento.",
              "Porque es el promedio de la tasa de inflación en México.",
              "Porque solo se utiliza en activos de oro y joyería."
            ],
            correct: 1,
            explanation: "El 61.8% es la proporción áurea ampliamente integrada en algoritmos de ejecución institucional como zona óptima de retroceso tendencial."
          },
          {
            question: "¿Qué nos indica la formación de un patrón chartista de Hombro-Cabeza-Hombro (HCH) en el techo de una tendencia alcista?",
            options: [
              "Continuación alcista vertical inmediata.",
              "Agotamiento del impulso comprador y potencial cambio hacia una tendencia bajista al perforarse la línea de cuello (neckline) con volumen.",
              "Que la empresa duplicará el pago de sus dividendos.",
              "Que el activo carece de liquidez bursátil."
            ],
            correct: 1,
            explanation: "El HCH refleja la incapacidad de los compradores para sostener un nuevo máximo (hombro derecho menor que la cabeza), avisando de distribución bajista."
          },
          {
            question: "¿Cómo debe comportarse el volumen durante la formación de un Banderín o Bandera de continuación alcista?",
            options: [
              "Debe aumentar descontroladamente en cada vela.",
              "Debe disminuir progresivamente durante la consolidación (secado de oferta) y expandirse fuertemente en el momento de la ruptura.",
              "El volumen debe ser de cero durante semanas.",
              "No tiene ninguna relevancia en patrones chartistas."
            ],
            correct: 1,
            explanation: "La contracción de volumen en la bandera denota que los vendedores no tienen fuerza; la expansión de volumen en la ruptura confirma la reanudación del impulso."
          }
        ]
      },
      {
        title: "Trading Journal y Backtesting Manual: Auditoría Estadística en Excel",
        content: "Lo que no se mide, no se puede mejorar. El diario de operaciones es el espejo objetivo de tu disciplina.",
        details: "Ningún trader profesional arriesga dinero real sin auditar sistemáticamente sus resultados. El Backtesting consiste en probar un conjunto explícito de reglas técnicas sobre 30 a 50 operaciones históricas pasadas para verificar si el sistema posee una ventaja estadística verificable (Edge). El Trading Journal registra metódicamente la fecha, ticker, timeframe, precio de entrada, Stop Loss, Take Profit, resultado en unidades 'R' y el estado psicológico al operar. Las métricas esenciales a auditar son: Win Rate (% de acierto), Profit Factor (Ganancias brutas / Pérdidas brutas; debe ser > 1.5) y el Maximum Drawdown (la mayor racha de pérdidas consecutivas desde el pico de capital).",
        visualType: "trading_journal_tool",
        disclaimer: "Educación, no asesoría financiera. Los resultados de backtesting histórico no garantizan rendimientos futuros en vivo.",
        speakerNotes: "Un trader con un sistema con expectativa positiva pero sin diario de operaciones terminará saboteándose por indisciplina o exceso de apalancamiento.",
        concepts: [
          { term: "Backtesting Manual", def: "Revisión histórica vela por vela de una estrategia para validar su rentabilidad estadística antes de operarla en vivo." },
          { term: "Resultado en 'R'", def: "Medición normalizada del resultado en múltiplos del riesgo asumido (ej. +2.5R significa ganar 2.5 veces el monto arriesgado en Stop Loss)." },
          { term: "Profit Factor", def: "Cociente entre la suma de ganancias brutas y la suma de pérdidas brutas; valores superiores a 1.5 señalan sistemas robustos." },
          { term: "Maximum Drawdown", def: "Máxima caída porcentual acumulada del balance de la cuenta desde su punto más alto antes de alcanzar un nuevo récord." }
        ],
        realExample: {
          asset: "Auditoría de 50 Operaciones en Excel del Setup 'Pullback 61.8% + Vela Martillo'",
          date: "Muestra estadística auditada 2024",
          source: "FA Academy Trading Journal Template",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Registro de 50 operaciones con ratio objetivo 1:2.5. Resultados: 22 ganadoras (+55R), 28 perdedoras (-28R). Tasa de acierto: 44.0%. Ganancia neta: +27R. Profit Factor: 1.96. Maximum Drawdown: -4R. Demostró matemáticamente la solidez del sistema a pesar de tener más trades perdedores que ganadores."
        },
        deliverableExercise: {
          title: "Auditoría de tus Primeros 10 Trades en la Plantilla de Excel",
          description: "Descarga la plantilla oficial de Trading Journal (.csv). Registra 10 operaciones simuladas o de backtesting anotando: Ticker, Entrada, Stop, Target, Resultado en R y calcula tu Win Rate y Profit Factor preliminar."
        },
        quizzes: [
          {
            question: "¿Cuál es la principal ventaja de medir los resultados de tus operaciones en unidades 'R' en tu Trading Journal?",
            options: [
              "Permite evaluar la calidad técnica y la expectativa matemática del sistema de forma normalizada, sin distorsión por el capital exacto de la cuenta.",
              "Garantiza que la casa de bolsa devuelva las comisiones de corretaje.",
              "Evita el pago de ISR ante el SAT.",
              "Hace que todas las operaciones se conviertan en ganadoras automáticamente."
            ],
            correct: 0,
            explanation: "Medir en 'R' normaliza el análisis: ganar +3R refleja una ejecución impecable con ratio 1:3, sin importar si 1R equivalía a $200 MXN o $20,000 MXN."
          },
          {
            question: "¿Cómo se calcula el 'Profit Factor' de una estrategia de trading y qué valor se considera institucionalmente aceptable?",
            options: [
              "Multiplicando el saldo de la cuenta por dos; debe dar más de 100.",
              "Dividiendo la suma total de ganancias brutas entre la suma total de pérdidas brutas; un valor superior a 1.5 se considera robusto y saludable.",
              "Sumando todas las velas verdes del gráfico.",
              "Dividiendo la tasa de interés de Cetes entre la inflación."
            ],
            correct: 1,
            explanation: "El Profit Factor mide cuántos pesos o dólares ganas por cada peso o dólar perdido; valores mayores a 1.5 indican que el sistema genera suficiente colchón."
          },
          {
            question: "¿Por qué el Backtesting manual sobre 30 a 50 operaciones es indispensable antes de arriesgar capital real?",
            options: [
              "Porque es un requisito burocrático de la BMV.",
              "Porque verifica empíricamente si tus reglas técnicas poseen una ventaja estadística positiva y te prepara psicológicamente para tolerar rachas de pérdidas inevitables.",
              "Porque permite conocer de antemano el precio exacto de mañana.",
              "Porque exime de presentar declaración anual."
            ],
            correct: 1,
            explanation: "El backtesting demuestra la viabilidad del método y otorga la confianza necesaria para ejecutar sin dudas durante los periodos de drawdown."
          }
        ]
      },
      {
        title: "Proyecto Final Integrador: Tesis Técnica Estructurada de un Activo",
        content: "Sintetiza todo lo aprendido: elabora una tesis técnica completa con marco multi-timeframe, ratio R:B asimétrico y rúbrica profesional.",
        details: "Para graduarte de la Fase 3, no basta con responder preguntas teóricas; debes estructurar una Tesis Técnica Profesional de Inversión sobre un activo real cotizado en la BMV o el SIC (ej. CEMEXCPO, BIMBOA, AAPL, TSLA o QQQ). Tu tesis debe cumplir con los 6 criterios innegociables de la Rúbrica Institucional FA Academy: 1) Contexto Semanal: Identificación de la Etapa de Weinstein (1, 2, 3 o 4) y relación con la SMA de 30 semanas. 2) Estructura Diaria: Mapeo de HH/HL o LH/LL con último BOS confirmado. 3) Zona de Valor y Confluencia: Soporte horizontal o nivel de Fibonacci (38.2%, 50% o 61.8%). 4) Gatillo de Entrada: Vela de confirmación (Martillo, Envolvente o ruptura con volumen superior a 1.5x ADV). 5) Invalidación Técnica: Stop Loss justificado detrás del soporte estructural con riesgo no mayor al 1% del capital. 6) Proyección Asimétrica: Take Profit con Ratio Riesgo:Beneficio igual o superior a 1:2.5.",
        visualType: "technical_thesis_rubric",
        disclaimer: "Educación, no asesoría financiera. La tesis técnica es un ejercicio académico riguroso de estructuración de hipótesis bajo control de riesgo.",
        speakerNotes: "Una tesis profesional no dice 'creo que va a subir porque tiene buen producto'. Una tesis técnica define con precisión matemática: 'Si el precio llega a X tras confirmar Y, compro con stop en Z y objetivo en W con ratio 1:3'.",
        concepts: [
          { term: "Tesis Técnica", def: "Documento estructurado que formula una hipótesis de trade con contexto, confluencia, gatillo, invalidación y ratio R:B." },
          { term: "Rúbrica Institucional", def: "Conjunto de 6 estándares de calidad técnica que validan si una operación cumple con las directrices profesionales de FA Academy." },
          { term: "Gatillo de Entrada (Trigger)", def: "Señal específica e inequívoca (ej. cierre de vela envolvente con volumen) que autoriza la ejecución de la orden." },
          { term: "Invalidación Innegociable", def: "Nivel de precio que, al ser perforado, demuestra que la hipótesis inicial era errónea y exige cerrar la posición de inmediato." }
        ],
        realExample: {
          asset: "Tesis Técnica Modelo: Posición Larga en CEMEX ($CEMEXCPO)",
          date: "Caso modelo de certificación FA Academy",
          source: "Comité Técnico FA Academy",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Contexto semanal: Etapa 2 de Avance sobre SMA de 30 semanas. Estructura diaria: Ruptura de BOS en $13.50 MXN con pullback al retroceso del 61.8% de Fibonacci ($13.80 MXN). Gatillo: Vela Martillo con volumen 2.1x ADV. Entrada: $14.10 MXN. Stop Loss: $13.40 MXN (Riesgo: $0.70 MXN). Take Profit: $16.20 MXN (Beneficio: $2.10 MXN). Ratio R:B: 1:3.0. Breakeven: 25.0%. Tesis aprobada con distinción de 100 puntos en rúbrica."
        },
        deliverableExercise: {
          title: "Entregable Oficial: Tesis Técnica de Certificación Fase 3",
          description: "Redacta en el recuadro tu Tesis Técnica para 1 activo real cubriendo los 6 puntos de la rúbrica: 1) Contexto semanal, 2) Estructura diaria HH/LL, 3) Zona de valor/Fibonacci, 4) Gatillo de entrada, 5) Stop Loss estructural (1R), 6) Take Profit objetivo con ratio R:B >= 1:2.5."
        },
        quizzes: [
          {
            question: "¿Cuál es el Ratio Riesgo:Beneficio mínimo exigido por la Rúbrica Institucional de FA Academy para validar una Tesis Técnica?",
            options: [
              "1:0.5 (arriesgar $2 para ganar $1).",
              "Al menos 1:2.5 (arriesgar $1 para buscar al menos $2.5 de recompensa potencial).",
              "No importa el ratio mientras el gráfico tenga colores bonitos.",
              "1:1 sin importar el activo."
            ],
            correct: 1,
            explanation: "Ratios iguales o superiores a 1:2.5 garantizan que el punto de equilibrio se mantenga por debajo del 28.5%, asegurando ventaja estadística matemática."
          },
          {
            question: "¿Por qué una tesis técnica profesional debe definir el nivel exacto de Stop Loss ANTES de abrir la posición?",
            options: [
              "Porque la casa de bolsa no permite comprar si no pones stop.",
              "Porque define objetivamente la invalidación de la hipótesis y el tamaño exacto de la posición para no arriesgar más del 1% del capital.",
              "Porque así la acción sube más rápido.",
              "Para pagar menos impuestos ante el SAT."
            ],
            correct: 1,
            explanation: "El Stop Loss predefinido determina el riesgo en pesos/dólares, lo que a su vez dicta cuántas acciones exactas comprar según la regla del 1% de capital."
          },
          {
            question: "¿Qué elemento constituye el 'Gatillo de Entrada' (Trigger) en una tesis técnica rigurosa?",
            options: [
              "Un presentimiento o corazonada por la mañana.",
              "Una confirmación gráfica objetiva (ej. cierre de vela envolvente alcista o superación de mecha con volumen sobre soporte) que autoriza la ejecución.",
              "Un comentario positivo en un video de redes sociales.",
              "Que el mercado esté abierto en fin de semana."
            ],
            correct: 1,
            explanation: "El gatillo es la señal objetiva que confirma la reacción del precio en la zona de valor antes de arriesgar el capital."
          }
        ]
      }
    ]
  }
];

// --- BANCO DEL EXAMEN DE CERTIFICACIÓN FINAL FASE 3 (10 PREGUNTAS) ---
const quizQuestions = [
  { 
    id: 1, 
    question: "En el análisis de Velas Japonesas (OHLC), ¿qué significa una mecha superior muy larga en una zona de resistencia?", 
    options: [
      "Fuerza compradora imparable que continuará al alza.", 
      "Fuerte rechazo de precios altos: la fuerza vendedora institucional tomó el control antes del cierre.", 
      "Indecisión absoluta sin volumen de negociación.", 
      "Que el mercado está cerrado por feriado bancario."
    ], 
    correct: 1 
  },
  { 
    id: 2, 
    question: "Según el principio de polaridad técnica de soportes y resistencias, ¿qué sucede cuando una resistencia histórica es superada con volumen?", 
    options: [
      "Se convierte en un soporte potencial (suelo de demanda) en futuros testeos o pullbacks.", 
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
    question: "¿Cuál es la diferencia técnica entre un BOS (Break of Structure) y un CHoCH (Change of Character)?", 
    options: [
      "BOS confirma la continuación de la tendencia; CHoCH es la primera ruptura contra la tendencia que alerta de un cambio de dirección.", 
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
      "25.0% (Fórmula: 1 / [1 + 3] = 0.25)", 
      "75.0%"
    ], 
    correct: 2 
  },
  { 
    id: 8, 
    question: "En el caso analizado de Apple (Entrada $168, Stop $158, Target $195, Ratio 1:2.7), ¿qué tasa de acierto requieres para estar en punto de equilibrio?", 
    options: [
      "27.02% (Fórmula: 1 / [1 + 2.7] = 1 / 3.7)", 
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

// --- COMPONENTES VISUALES EDUCATIVOS FASE 3 ---

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
      <p className="text-center text-emerald-400 font-bold mt-4 text-sm">Vela Alcista (Bullish)</p>
      <p className="text-center text-[11px] text-slate-400">Cierre &gt; Apertura (Control Toro)</p>
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
      <p className="text-center text-rose-400 font-bold mt-4 text-sm">Vela Bajista (Bearish)</p>
      <p className="text-center text-[11px] text-slate-400">Cierre &lt; Apertura (Control Oso)</p>
    </div>
  </div>
);

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

const TradingJournalTool = () => {
  const [trades] = useState([
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

const TechnicalThesisRubric = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="text-indigo-400" size={20} />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Rúbrica Institucional FA Academy: Tesis Técnica</h4>
      </div>
      <span className="text-xs bg-indigo-500/20 text-indigo-300 font-bold px-2.5 py-0.5 rounded-full border border-indigo-500/30">
        Estándar Profesional
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-emerald-500">
        <p className="font-bold text-white">1. Contexto Semanal (Weinstein)</p>
        <p className="text-[11px] text-slate-300 mt-1">Identificar la fase estructural (Etapa 1, 2, 3 o 4) respecto a la media móvil mayor.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
        <p className="font-bold text-white">2. Estructura Diaria (HH/LL / BOS)</p>
        <p className="text-[11px] text-slate-300 mt-1">Confirmar la secuencia tendencial y el último nivel de ruptura estructural.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <p className="font-bold text-white">3. Confluencia en Zona de Valor</p>
        <p className="text-[11px] text-slate-300 mt-1">Soporte técnico horizontal que coincida con retroceso de Fibonacci (38.2% - 61.8%).</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-500">
        <p className="font-bold text-white">4. Gatillo de Entrada con Volumen</p>
        <p className="text-[11px] text-slate-300 mt-1">Vela de rechazo o envolvente confirmada con volumen superior a 1.5x el ADV diario.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-rose-500">
        <p className="font-bold text-white">5. Stop Loss Estructural (Máx 1%)</p>
        <p className="text-[11px] text-slate-300 mt-1">Invalidación objetiva detrás del soporte; el monto en riesgo no excede el 1% de la cuenta.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-teal-500">
        <p className="font-bold text-white">6. Proyección Asimétrica (R:B &gt;= 1:2.5)</p>
        <p className="text-[11px] text-slate-300 mt-1">Take profit en resistencia con breakeven menor al 28.5% para garantizar ventaja estadística.</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 3 ---

export default function CoursePlayerPhase3() {
  const [searchParams] = useSearchParams();
  const { user, updateProgress, submitTestResult } = useAuth();

  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Estado para quizzes interactivos por lección (pregunta -> respuesta seleccionada)
  const [quizState, setQuizState] = useState<Record<string, { answer: number; shown: boolean }>>({});

  const moduleData = courseData[0];
  const lessonData = moduleData.lessons[currentLesson];
  const activeQuizzes = (lessonData as any).quizzes || [];

  // Deep linking: sincronizar ?lesson=X
  useEffect(() => {
    try {
      const lessonParam = searchParams.get('lesson');
      if (lessonParam) {
        const parsed = parseInt(lessonParam, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= moduleData.lessons.length) {
          setCurrentLesson(parsed - 1);
          return;
        }
      }
      const saved = localStorage.getItem('fa_phase_3_progress');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < moduleData.lessons.length) {
          setCurrentLesson(parsed);
        }
      }
    } catch {
      // fallback
    }
  }, [searchParams, moduleData.lessons.length]);

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
    let message = `📊 *Certificación Aprobada - Fase 3 (Análisis Técnico y Gráficos)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Acreditado en Price Action OHLC, Estructura HH/LL, Fibonacci, Ratios Asimétricos 1:3, Trading Journal y Tesis Técnica. Solicitud de diploma oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'candlestick_anatomy': return <CandlestickAnatomy />;
      case 'support_resistance': return <SupportResistance />;
      case 'market_structure_hh_ll': return <MarketStructureHHLL />;
      case 'indicators_dashboard': return <IndicatorsDashboard />;
      case 'risk_calculator': return <RiskCalculator />;
      case 'volume_analysis': return <VolumeAnalysis />;
      case 'risk_reward_bimbo': return <RiskRewardBimbo />;
      case 'multi_timeframe': return <MultiTimeframe />;
      case 'tradingview_station': return <TradingViewStation />;
      case 'fibonacci_tool': return <FibonacciTool />;
      case 'trading_journal_tool': return <TradingJournalTool />;
      case 'technical_thesis_rubric': return <TechnicalThesisRubric />;
      default: return null;
    }
  };

  // VISTA DEL EXAMEN FINAL FASE 3
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO 
          title="Examen Final: Fase 3 - Análisis Técnico y Gráficos | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 3 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/3"
        />
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 3: Análisis Técnico y Gráficos
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas rigurosas sobre Velas OHLC, Estructura BOS/CHoCH, Fibonacci, Esperanza Matemática y Ratios R:B.
            </p>
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                    <span className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
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
                            ? 'bg-indigo-600 border-indigo-400 text-white font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-indigo-900/30 cursor-pointer"
                >
                  Terminar Evaluación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-indigo-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                <div className="text-6xl mb-4">
                  {score >= 8 ? '🏆' : score >= 6 ? '📈' : '📚'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {score >= 8 ? '¡Aprobado con Distinción!' : score >= 6 ? 'Módulo Completado' : 'Requiere Repaso'}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Calificación Oficial: <span className="text-indigo-400 font-bold text-xl">{score} / {quizQuestions.length}</span>
                </p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000" 
                    style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="space-y-3">
                  <a 
                    href={generateWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-900/30 text-sm"
                  >
                    <span>Reclamar Diploma Oficial en WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                  <button 
                    onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} 
                    className="text-xs text-slate-400 hover:text-white underline py-2 block w-full transition-colors"
                  >
                    Repasar Módulo Completo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentLesson + 1) / moduleData.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
      <SEO 
        title={`Fase 3: ${lessonData.title} | FA Academy`}
        description={`Lección ${currentLesson + 1} de la Fase 3 de FA Academy: ${lessonData.content}`}
        url="https://fa-academy.vercel.app/course/phase/3"
      />
      
      {/* HEADER CON BADGE EXACTO */}
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
              <CandlestickChart className="text-white" size={20} strokeWidth={2.5}/>
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest hidden md:block">INTERMEDIO</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-500/10 text-indigo-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-indigo-500/20">
              {moduleData.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
            {lessonData.title}
          </h1>
        </div>

        {lessonData.videoUrls && lessonData.videoUrls.map((videoId: string, i: number) => (
          <div key={i} className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-400 bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
              <span className="font-bold text-white flex items-center gap-2">
                <PlayCircle size={15} className="text-indigo-400" />
                {lessonData.videoTitle || lessonData.title}
              </span>
              {lessonData.videoDuration && (
                <span className="bg-slate-800 px-2.5 py-1 rounded-md text-indigo-400 font-semibold flex items-center gap-1">
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

        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <CandlestickChart size={120} className="text-slate-500" />
          </div>
          <ErrorBoundary fallbackMessage="Error al cargar el módulo visual">
            {renderVisual(lessonData.visualType)}
          </ErrorBoundary>
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          {/* Disclaimer visible obligatorio */}
          <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-indigo-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Toda inversión y operativa bursátil conlleva riesgo de pérdida de capital."}</span>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-indigo-500 shadow-lg">
            <p className="text-lg md:text-xl text-indigo-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="flex gap-4 items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
            <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0">
              <Brain size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {lessonData.details}
              </p>
              {lessonData.speakerNotes && (
                <p className="mt-4 text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex gap-2">
                  <span className="text-indigo-400 font-bold not-italic">💡 Tip FA Academy:</span>
                  {lessonData.speakerNotes}
                </p>
              )}
            </div>
          </div>

          {/* Caso Real Fechado de Mercado */}
          {(lessonData as any).realExample && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-indigo-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Landmark size={15} /> Caso Real Fechado de Mercado
                </span>
                <span className="text-[11px] text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                  {(lessonData as any).realExample.date}
                </span>
              </div>
              <p className="text-sm font-bold text-white mb-1.5">{(lessonData as any).realExample.asset}</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).realExample.caseDescription}</p>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>Fuente:</span>
                <a 
                  href={(lessonData as any).realExample.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {(lessonData as any).realExample.source} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* Ejercicio con Entregable Práctico */}
          {(lessonData as any).deliverableExercise && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText size={15} /> Ejercicio con Entregable Práctico
              </span>
              <h4 className="text-sm font-bold text-white mb-1">{(lessonData as any).deliverableExercise.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).deliverableExercise.description}</p>
              <textarea 
                placeholder="Escribe aquí tu análisis técnico, coordenadas de trade o hipótesis..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 outline-none focus:ring-1 focus:ring-indigo-500 min-h-[70px]"
              />
            </div>
          )}

          {lessonData.concepts && (
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-indigo-400" />
                Conceptos Clave de la Lección
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lessonData.concepts.map((c, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-xs font-bold text-indigo-300 mb-1">{c.term}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz interactivo por lección con retroalimentación inmediata */}
          {activeQuizzes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-indigo-500/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-indigo-400" />
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                    Quiz de Comprobación ({activeQuizzes.length} preguntas)
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Retroalimentación inmediata</span>
              </div>

              {activeQuizzes.map((q: any, qIdx: number) => {
                const key = `${currentLesson}_${qIdx}`;
                const userState = quizState[key];
                const isAnswered = !!userState?.shown;
                const selectedOpt = userState?.answer;
                const isCorrect = selectedOpt === q.correct;

                return (
                  <div key={qIdx} className="space-y-3 pb-4 border-b border-slate-800/60 last:border-b-0 last:pb-0">
                    <p className="text-sm font-semibold text-white flex items-start gap-2">
                      <span className="text-xs bg-slate-800 text-indigo-400 px-2 py-0.5 rounded font-bold">{qIdx + 1}</span>
                      {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt: string, optIdx: number) => {
                        const isThisSelected = selectedOpt === optIdx;
                        let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-750';

                        if (isAnswered) {
                          if (optIdx === q.correct) {
                            btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                          } else if (isThisSelected) {
                            btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold';
                          }
                        } else if (isThisSelected) {
                          btnStyle = 'bg-indigo-600 border-indigo-400 text-white font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => {
                              setQuizState(prev => ({
                                ...prev,
                                [key]: { answer: optIdx, shown: true }
                              }));
                            }}
                            className={`w-full text-left p-3 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === q.correct && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
                            {isAnswered && isThisSelected && !isCorrect && <XCircle size={16} className="text-rose-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className={`p-3 rounded-xl text-xs leading-relaxed border animate-fade-in ${
                        isCorrect 
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
                          : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                      }`}>
                        <strong>{isCorrect ? '¡Correcto!' : 'Explicación didáctica:'}</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={handlePrev} 
            disabled={currentLesson === 0} 
            className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline font-medium">Anterior</span>
          </button>
          
          <div className="flex gap-1.5">
            {moduleData.lessons.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentLesson ? 'bg-indigo-500 scale-125' : 'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95"
          >
            <span className="hidden md:inline">{(currentLesson === moduleData.lessons.length - 1) ? 'Examen Final' : 'Siguiente'}</span>
            <span className="md:hidden">{(currentLesson === moduleData.lessons.length - 1) ? 'Examen' : 'Sig.'}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
