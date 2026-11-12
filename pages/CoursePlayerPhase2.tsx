import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, Calculator,
  Building2, Landmark, Brain, Quote, 
  AlertTriangle, Layers, Newspaper, BarChart3,
  LineChart, PieChart, CheckCircle, ChevronRight, Book, Scale,
  Factory, Globe, Coins, UserCheck, ShieldCheck,
  PlayCircle, Clock, ExternalLink, FileText, CheckCircle2, XCircle, HelpCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FA ACADEMY: MÓDULO 2 (EL ECOSISTEMA DE INVERSIÓN - 9 LECCIONES) ---

const courseData = [
  {
    id: 2,
    title: "FA Academy: El Ecosistema de Inversión",
    description: "Conoce el tablero de juego profesional. Aprende a operar a través de casas de bolsa reguladas por la CNBV, domina la renta fija soberana, el SIC y los vehículos de diversificación indexada.",
    lessons: [
      {
        title: "La Anatomía de una Acción: Series Bursátiles y Títulos CPO",
        content: "No compras un 'ticker' en una pantalla; adquieres una fracción del capital social con derechos patrimoniales y corporativos.",
        details: "En la Bolsa Mexicana de Valores (BMV), una acción representa la parte alícuota del capital social de una empresa pública regulada por la Ley del Mercado de Valores. Es fundamental dominar las 'Series' accionarias: la Serie A confiere plenos derechos de voto en asambleas ordinarias y extraordinarias (históricamente reservada a nacionales para resguardar el control corporativo); las Series B y L otorgan voto limitado o nulo a cambio de preferencias económicas en dividendos. Los CPOs (Certificados de Participación Ordinaria) agrupan paquetes de acciones (por ejemplo, 2 Serie A y 1 Serie B) en un único título fiduciario negociable para dotar de liquidez internacional al mercado sin diluir el control corporativo nacional, tal como opera CEMEX ($CEMEXCPO).",
        visualType: "action_anatomy",
        videoUrls: ["kwVUlQIKJVs"],
        videoTitle: "Anatomía de una Acción: Series Bursátiles (A, B, L) y Títulos CPO",
        videoDuration: "14 min",
        disclaimer: "Educación, no asesoría financiera. Toda inversión bursátil conlleva riesgo de fluctuación y pérdida de capital.",
        quote: { 
          text: "El inversionista debe distinguir con precisión técnica entre la ganancia de capital (plusvalía por apreciación de mercado) y el dividendo (distribución de utilidades netas). Las empresas con alto ROE a menudo reinvierten utilidades para multiplicar el valor intrínseco.", 
          author: "Guía para el Inversionista Institucional, CNBV" 
        },
        speakerNotes: "Ser accionista te convierte en socio residual: cobras después de acreedores, proveedores y fisco. Esa prelación de pago es la razón económica por la que la renta variable ofrece un premio por riesgo superior en el largo plazo.",
        concepts: [
          { term: "CPO", def: "Certificado de Participación Ordinaria emitido por un fideicomiso bancario que ampara un paquete indivisible de acciones de distintas series." },
          { term: "Serie A vs B/L", def: "Serie A: voto pleno y control corporativo. Series B/L: voto limitado o sin voto, orientadas a participación financiera." },
          { term: "Ganancia de Capital", def: "Diferencia positiva entre el precio de venta liquidado y el costo promedio ponderado de adquisición fiscal." },
          { term: "Dividendo", def: "Cuota de utilidades retenidas que la asamblea general de accionistas aprueba pagar en efectivo o en acciones." }
        ],
        realExample: {
          asset: "Estructura Corporativa de CEMEX, S.A.B. de C.V. ($CEMEXCPO)",
          date: "Registro Nacional de Valores (RNV) 2026",
          source: "Bolsa Mexicana de Valores (BMV)",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Cada CPO de CEMEX en la BMV ampara 2 acciones Serie A y 1 acción Serie B. Esto permite cotizar simultáneamente en Wall Street como ADR (New York Stock Exchange: CX) representando 10 CPOs por ADR, manteniendo el gobierno corporativo conforme a la legislación mexicana."
        },
        deliverableExercise: {
          title: "Auditoría de Series Bursátiles en tu Portafolio",
          description: "Ingresa a tu casa de bolsa o al portal de la BMV. Elige una emisora mexicana (ej. AMXB, BIMBOA, CEMEXCPO, ALFAA) e identifica: 1) Serie del título, 2) Si es CPO o acción directa, 3) Si la emisora pagó dividendos en el último ejercicio fiscal."
        },
        quizzes: [
          {
            question: "¿Cuál es la función técnica fundamental de un CPO (Certificado de Participación Ordinaria) en la BMV?",
            options: [
              "Garantizar rendimientos fijos mensuales libres de riesgo.",
              "Agrupar varias acciones de distintas series (ej. Serie A y B) en un solo título negociable para facilitar la liquidez bursátil sin perder control corporativo.",
              "Evadir el pago de ISR ante el Servicio de Administración Tributaria (SAT).",
              "Permitir el retiro de efectivo en cajeros automáticos bancarios."
            ],
            correct: 1,
            explanation: "El CPO es un mecanismo fiduciario que combina derechos patrimoniales y de voto para permitir que inversionistas institucionales y globales operen títulos de alta liquidez."
          },
          {
            question: "¿Qué diferencia a una acción Serie A de una Serie B o L en emisoras mexicanas?",
            options: [
              "La Serie A otorga plenos derechos de voto en asambleas, mientras que las Series B o L tienen voto restringido o nulo con enfoque financiero.",
              "La Serie A solo se puede pagar en dólares estadounidenses.",
              "La Serie B nunca puede cotizar en el mercado secundario.",
              "No existe ninguna diferencia legal ni patrimonial."
            ],
            correct: 0,
            explanation: "La Serie A resguarda los derechos políticos y de control de la sociedad, mientras que las series restringidas suelen otorgar ventajas patrimoniales en liquidación o dividendos."
          },
          {
            question: "¿En qué orden de cobro se encuentran los accionistas en caso de liquidación o quiebra de una empresa?",
            options: [
              "Son los primeros en cobrar antes que empleados y proveedores.",
              "Cobran al mismo tiempo que los tenedores de bonos de deuda senior.",
              "Son reclamantes residuales: cobran al final, únicamente si queda remanente tras pagar a trabajadores, SAT y acreedores.",
              "El gobierno mexicano les reembolsa el 100% de su capital de inmediato."
            ],
            correct: 2,
            explanation: "El capital accionario es el riesgo residual. Por asumir la última posición de cobro, los inversionistas exigen una prima de riesgo superior a la tasa libre de riesgo."
          }
        ]
      },
      {
        title: "Renta Fija Soberana y Escudos Fiscales: CETES, Bonos M, Udibonos y SOFIPOs",
        content: "La base defensiva del patrimonio: deuda soberana de Banxico, blindaje inflacionario y exenciones fiscales de ley.",
        details: "Ningún inversionista profesional expone capital a renta variable sin estructurar previamente su ancla de renta fija. En México, los CETES (Certificados de la Tesorería) son títulos soberanos a descuento emitidos por la Secretaría de Hacienda y colocados por el Banco de México (tasa libre de riesgo, 28 a 364 días). Los Bonos M pagan cupones fijos semestrales a horizontes de hasta 30 años. Los Udibonos protegen el poder adquisitivo calculando intereses sobre el valor de la Unidad de Inversión (UDI), asegurando una tasa real positiva sobre la inflación. En el ámbito de intermediarios financieros populares, las Sociedades Financieras Populares (SOFIPOs) reguladas por la CNBV ofrecen una exención de ISR hasta por el equivalente a 5 UMAs anuales (~$206,000 MXN en 2026 según el Art. 93 Fracción XX de la LISR) y cuentan con el seguro PROSOFIPO por hasta 25,000 UDIs (~$215,000 MXN en 2026).",
        visualType: "fixed_income_tool",
        disclaimer: "Educación, no asesoría financiera. Las tasas de CETES fluctúan semanalmente en las subastas primarias del Banco de México.",
        speakerNotes: "Los CETES a 28 días son la herramienta óptima para el fondo de reserva de liquidez. Para horizontes mayores a 5 años, los Udibonos aseguran que jamás perderás poder de compra sin importar qué pase con la inflación.",
        concepts: [
          { term: "CETES", def: "Certificados de la Tesorería colocados a descuento por Banxico; representan la tasa soberana libre de riesgo en México." },
          { term: "Udibonos", def: "Títulos soberanos referenciados a la UDI que pagan cupón real fijo semestral, protegiendo contra shocks inflacionarios." },
          { term: "Exención 5 UMAs (SOFIPO)", def: "Beneficio del Art. 93 LISR que exime de ISR los rendimientos en SOFIPOs con saldo promedio menor a 5 UMAs anualizadas (~$206,000 MXN)." },
          { term: "PROSOFIPO (25,000 UDIs)", def: "Fondo de protección al ahorro del sector popular que cubre hasta ~215,000 MXN por usuario ante revocación de licencia o liquidación." }
        ],
        realExample: {
          asset: "Subasta Primaria de Valores Gubernamentales Banxico",
          date: "Tasa representativa 2026: CETES 28D ~10.20% anual",
          source: "Banco de México (Banxico) / Cetesdirecto",
          url: "https://www.banxico.org.mx/",
          caseDescription: "Inversionista coloca $100,000 MXN en CETES a 28 días renovables con tasa del 10.20% anual. Con una inflación anual del 3.5%, obtiene un rendimiento real neto estimado superior al 6.0%, con liquidez mensual garantizada por el Estado mexicano y sin intermediación bancaria onerosa."
        },
        deliverableExercise: {
          title: "Plan de Cobertura de Renta Fija y Escudos Fiscales",
          description: "Calcula tu límite exento para 2026: 5 UMAs anualizadas (~$206,000 MXN). Escribe: 1) Cuánto de tu fondo de emergencia asignarías a CETES 28D directo, 2) Si utilizas una SOFIPO regulada, verifica que esté dada de alta ante el SIPRES de CONDUSEF con seguro PROSOFIPO activo."
        },
        quizzes: [
          {
            question: "¿Cuál es el beneficio fiscal que establece el Artículo 93 de la LISR para los ahorradores en SOFIPOs reguladas?",
            options: [
              "Exención total de ISR sin límite de capital para siempre.",
              "Exención de ISR en rendimientos siempre que el saldo promedio diario no supere 5 UMAs anualizadas (~$206,000 MXN en 2026).",
              "Devolución en efectivo del 50% de las pérdidas en acciones.",
              "Crédito fiscal directo aplicable para comprar vehículos."
            ],
            correct: 1,
            explanation: "El beneficio fiscal de las 5 UMAs promueve el ahorro popular eximiendo de retención de ISR los rendimientos generados bajo ese umbral patrimonial."
          },
          {
            question: "¿Por qué los Udibonos garantizan que tu dinero no perderá poder adquisitivo ante la inflación?",
            options: [
              "Porque su valor nominal se actualiza diariamente conforme al crecimiento del valor de la UDI (inflación) y pagan una tasa de interés real adicional.",
              "Porque el Banco Mundial subsidia su rendimiento en dólares.",
              "Porque invierten en empresas de tecnología espacial.",
              "Porque no cobran comisiones bancarias."
            ],
            correct: 0,
            explanation: "Al ajustar el valor principal mediante la UDI y pagar un cupón sobre ese saldo actualizado, el inversionista obtiene rendimiento real asegurado."
          },
          {
            question: "¿Hasta qué monto protege el Fondo PROSOFIPO a cada ahorrador en caso de quiebra de una SOFIPO autorizada?",
            options: [
              "Hasta 10 millones de pesos.",
              "Hasta 25,000 UDIs (~$215,000 MXN en 2026).",
              "No ofrece ninguna garantía de protección.",
              "Hasta el 100% de cualquier monto sin tope."
            ],
            correct: 1,
            explanation: "El Fondo de Protección de Sociedades Financieras Populares cubre hasta 25,000 UDIs por persona física en cada entidad facultada."
          }
        ]
      },
      {
        title: "Caso Práctico 2026: CEMEX ($CEMEXCPO) y Análisis de Emisoras Cíclicas",
        content: "Análisis de una emisora industrial global: desapalancamiento financiero, múltiplos EV/EBITDA y grado de inversión.",
        details: "CEMEX ($CEMEXCPO) es uno de los conglomerados de materiales de construcción más relevantes del mundo y un componente clave del índice S&P/BMV IPC. Al ser una compañía cíclica, sus ingresos y márgenes están correlacionados con el ciclo de gasto en infraestructura, tasas de interés y nearshoring en América del Norte. En el análisis institucional de empresas de capital intensivo con deuda, el múltiplo rey es el EV/EBITDA (Enterprise Value / EBITDA): EV = Capitalización de Mercado + Deuda Financiera Neta. Durante los últimos ejercicios, el agresivo plan de 'desapalancamiento' de CEMEX redujo su ratio Deuda Neta / EBITDA a menos de 2.0x, recuperando la calificación de Grado de Inversión (Investment Grade) por agencias como S&P y Fitch, lo que disminuye sustancialmente su costo financiero de deuda.",
        visualType: "cemex_case",
        disclaimer: "Educación, no asesoría financiera. CEMEXCPO se utiliza como caso de estudio didáctico de estados financieros y no representa recomendación de compra o venta.",
        newsSnippet: {
          title: "CEMEX Consolida Grado de Inversión y Expansión en Norteamérica",
          text: "CEMEX reporta flujo de operación (EBITDA) superior a 3,300 millones de dólares gracias a la demanda industrial de infraestructura y relocalización de cadenas de suministro (Nearshoring) en México y EE.UU.",
          source: "Reporte Trimestral a Inversionistas BMV / SEC"
        },
        speakerNotes: "En empresas cíclicas, los múltiplos P/E suelen parecer engañosamente bajos en el pico del ciclo de bonanza y altos en el fondo de la recesión. Por ello, el EV/EBITDA y la generación de Flujo de Caja Libre son los indicadores rectores.",
        concepts: [
          { term: "Empresa Cíclica", def: "Negocio cuyo flujo de ventas y rentabilidad se expande durante el auge económico y se contrae durante recesiones (cemento, acero, automotriz)." },
          { term: "EV/EBITDA", def: "Múltiplo de valuación que evalúa el valor total de la firma (capital más deuda) respecto a su generación operativa de efectivo antes de partidas no monetarias." },
          { term: "Grado de Inversión", def: "Calificación crediticia igual o superior a BBB- / Baa3 que certifica bajo riesgo de incumplimiento y habilita fondos de pensiones para adquirir su deuda." }
        ],
        realExample: {
          asset: "CEMEX, S.A.B. de C.V. (BMV: CEMEXCPO)",
          date: "Métricas consolidadas de mercado 2026",
          source: "Bolsa Mexicana de Valores / Reporte Integrado CEMEX",
          url: "https://www.cemex.com/es/inversionistas",
          caseDescription: "Evaluación del múltiplo EV/EBITDA ~6.5x en comparación con pares globales como Holcim y Heidelberg Materials. La recuperación del Grado de Inversión permitió a la emisora refinanciar notas senior a tasas sustancialmente más reducidas, expandiendo el margen neto disponible para accionistas."
        },
        deliverableExercise: {
          title: "Cálculo de Múltiplos Industriales: CEMEX",
          description: "Revisa el último reporte de resultados de CEMEX. Localiza: 1) EBITDA anualizado, 2) Deuda Neta reportada, 3) Capitalización de mercado actual. Comprueba la fórmula EV = Cap. Bursátil + Deuda Neta y reflexiona sobre el impacto del Grado de Inversión."
        },
        quizzes: [
          {
            question: "¿Por qué el múltiplo EV/EBITDA es superior al ratio Precio/Utilidad (P/E) para analizar empresas industriales pesadas como CEMEX?",
            options: [
              "Porque ignora por completo los impuestos y las ganancias.",
              "Porque incorpora la estructura de endeudamiento total de la empresa (Enterprise Value) y no se distorsiona por las depreciaciones contables de plantas y maquinaria.",
              "Porque garantiza que la acción nunca bajará de precio.",
              "Porque es un requisito exclusivo de la Bolsa de Nueva York."
            ],
            correct: 1,
            explanation: "Al sumar la deuda neta al valor accionario y medirlo contra el flujo operativo bruto (EBITDA), el múltiplo permite comparar firmas con diferente estructura financiera de capital."
          },
          {
            question: "¿Qué efecto económico produce en una emisora como CEMEX la recuperación de la calificación de 'Grado de Inversión' (Investment Grade)?",
            options: [
              "Tiene que pagar el doble de comisiones a la CNBV.",
              "Reduce el costo de financiamiento al emitir bonos y permite que grandes fondos de pensiones e institucionales globales inviertan en sus instrumentos.",
              "La obliga a liquidar inmediatamente a todos sus empleados.",
              "Impide que los inversionistas extranjeros compren sus CPOs."
            ],
            correct: 1,
            explanation: "El Grado de Inversión amplía el universo de inversionistas elegibles institucionalmente y disminuye drásticamente el sobreprecio o spread de tasa en sus emisiones."
          },
          {
            question: "¿Cómo se define una empresa de naturaleza 'cíclica' en el mercado de valores?",
            options: [
              "Una empresa que solo opera durante las noches.",
              "Una emisora cuyos ingresos y utilidades aumentan fuertemente en expansiones económicas y caen sensiblemente en desaceleraciones o recesiones.",
              "Una empresa que no emite estados financieros auditados.",
              "Una compañía que por estatutos reparte el 100% de dividendos cada mes."
            ],
            correct: 1,
            explanation: "Las firmas cíclicas (construcción, aerolíneas, metales) dependen directamente del nivel de actividad y consumo del ciclo macroeconómico general."
          }
        ]
      },
      {
        title: "Puente Metodológico: Análisis Técnico vs. Análisis Fundamental",
        content: "El Análisis Fundamental define QUÉ comprar; el Análisis Técnico determina CUÁNDO ejecutar la orden con precisión y bajo riesgo.",
        details: "Uno de los debates más estériles entre principiantes es pretender que una metodología anula a la otra. El inversionista profesional domina el enfoque híbrido o puente: 1) Con el Análisis Fundamental diagnostica la solvencia intrínseca, los márgenes operativos, el retorno sobre capital invertido (ROIC) y los vientos de cola del negocio (responde: ¿Vale la pena ser copropietario de esta emisora?). 2) Con el Análisis Técnico audita el rastro de la liquidez institucional en el gráfico: estructura de precio, medias móviles de referencia institucional (SMA 50 y SMA 200) y lecturas de agotamiento o sobrecompra en osciladores como el RSI (responde: ¿Es el precio actual una entrada con ratio riesgo/beneficio favorable o el mercado descuenta euforia irracional?). Comprar una empresa con fundamentos de excelencia justo cuando el RSI diario supera 80 y cotiza con extensión parabólica respecto a su media móvil expone al inversionista a correcciones dolorosas del -15% al -25% de corto plazo por pura psicología de masas (miedo y codicia).",
        visualType: "technical_psychology",
        disclaimer: "Educación, no asesoría financiera. Ni el análisis técnico ni el fundamental aseguran predecir el futuro; son herramientas de control de probabilidades.",
        speakerNotes: "El análisis técnico sin fundamentos es jugar a adivinar garabatos. El análisis fundamental sin técnica es ignorar el timing y la liquidez del mercado. Usa ambos como una tenaza profesional.",
        concepts: [
          { term: "Análisis Fundamental", def: "Metodología de valuación que investiga estados financieros, ventaja competitiva (moat), calidad de directivos y flujos de efectivo futuros descontados." },
          { term: "Análisis Técnico", def: "Estudio de la acción del precio y volumen en los gráficos para inferir la oferta y demanda institucional y optimizar el punto de entrada y salida." },
          { term: "Enfoque Híbrido", def: "Estrategia que selecciona activos mediante rigor fundamental y ejecuta compras escalonadas en soportes técnicos relevantes con riesgo controlado." }
        ],
        realExample: {
          asset: "Divergencia Fundamental vs Técnica: Corrección Tecnológica 2024",
          date: "Verificación de mercado Julio - Agosto 2024",
          source: "TradingView / Bloomberg Market Data",
          url: "https://www.tradingview.com/",
          caseDescription: "Nvidia y Apple mantenían fundamentos operativos extraordinarios con crecimiento récord en ingresos; sin embargo, en julio de 2024 el RSI semanal superaba 82 con extensiones atípicas sobre la SMA de 200 días. Sobrevinieron correcciones técnicas rápidas del -18% al -22% en cuestión de semanas antes de reanudar la tendencia alcista estructural, demostrando que el timing técnico importa incluso en los mejores negocios del mundo."
        },
        deliverableExercise: {
          title: "Matriz Comparativa de Decisión de Inversión Híbrida",
          description: "Escoge una empresa de tu interés. Responde en dos columnas breves: 1) Fundamental: ¿Tiene ganancias crecientes y deuda controlada? 2) Técnico: ¿El precio se encuentra cerca de un soporte o cotiza en máximos verticales sobrecomprado?"
        },
        quizzes: [
          {
            question: "¿Cuál es la función complementaria del Análisis Fundamental y del Análisis Técnico en un proceso de inversión riguroso?",
            options: [
              "El Fundamental es solo para bancos y el Técnico es solo para influencers.",
              "El Fundamental define la calidad del negocio (QUÉ comprar) y el Técnico ayuda a optimizar el precio y momento de entrada (CUÁNDO comprar).",
              "Ambos garantizan ganar el 100% de las operaciones sin necesidad de stop loss.",
              "Ninguno de los dos tiene sustento en los mercados bursátiles modernos."
            ],
            correct: 1,
            explanation: "El análisis fundamental evalúa el valor intrínseco de la compañía, mientras que el análisis técnico gestiona el timing y el ratio riesgo/beneficio."
          },
          {
            question: "¿Qué riesgo asume un inversionista que compra una excelente empresa cuando su RSI diario supera 80 en gráficos de precio?",
            options: [
              "Que el SAT le cancele su cuenta bursátil.",
              "Sufrir una corrección o retroceso de corto plazo por toma de utilidades y agotamiento de compradores, a pesar de que la empresa sea sólida a largo plazo.",
              "Que la empresa no pague dividendos nunca más.",
              "Que la divisa del país se convierta en bonos gubernamentales."
            ],
            correct: 1,
            explanation: "Un RSI superior a 70-80 señala condición de sobrecompra técnica, aumentando las probabilidades de retroceso correctivo inmediato."
          },
          {
            question: "¿Cuál es el error común de basar las inversiones exclusivamente en gráficos técnicos sin revisar fundamentales?",
            options: [
              "Pagar demasiadas comisiones a la BMV.",
              "Arriesgar capital en empresas quebradas, fraudulentas o con deuda insostenible guiándose solo por patrones temporales sin respaldo económico.",
              "Comprar acciones a precios demasiado baratos.",
              "Tener que presentar declaraciones fiscales mensuales."
            ],
            correct: 1,
            explanation: "El análisis técnico aislado puede inducir a operar 'trampas de valor' o acciones meme que carecen de flujos de efectivo reales para respaldar el precio."
          }
        ]
      },
      {
        title: "El Ecosistema de Diversificación",
        content: "El único 'almuerzo gratis' en finanzas: cómo la correlación imperfecta reduce la volatilidad total de tu portafolio.",
        details: "Harry Markowitz demostró matemáticamente en su Teoría Moderna de Portafolios (premio Nobel de Economía) que combinar activos con coeficientes de correlación inferiores a 1.0 reduce la desviación estándar (volatilidad) total del portafolio sin penalizar necesariamente el rendimiento esperado en la misma proporción. Es vital distinguir entre: 1) Riesgo No Sistemático (específico o diversificable): el riesgo inherente a una sola compañía (ej. escándalo contable, fallo en un producto, huelga); este riesgo se neutraliza distribuyendo el capital en un número suficiente de emisoras y sectores. 2) Riesgo Sistemático (no diversificable o de mercado): shocks macroeconómicos que afectan a todos los activos (ej. subida generalizada de tasas de interés de bancos centrales, recesiones globales o crisis geopolíticas); este riesgo solo se gestiona mediante asignación estratégica entre diferentes clases de activos (acciones, bonos gubernamentales, metales y liquidez).",
        visualType: "diversification_eco",
        disclaimer: "Educación, no asesoría financiera. La diversificación disminuye el riesgo de ruina, pero no garantiza inmunidad frente a caídas generalizadas de mercado.",
        speakerNotes: "Tener 10 acciones de bancos mexicanos no es estar diversificado; si el sector financiero sufre una reforma regulatoria, todas caerán juntas. Diversificar significa combinar geografías, sectores y clases de activos no correlacionadas.",
        concepts: [
          { term: "Riesgo No Sistemático", def: "Riesgo propio e individual de una emisora o industria específica. Se elimina prácticamente mediante la diversificación en una canasta de activos." },
          { term: "Riesgo Sistemático", def: "Riesgo inherente al sistema económico y mercado global en su conjunto. No se puede eliminar diversificando solo en acciones." },
          { term: "Coeficiente de Correlación", def: "Métrica estadística entre -1.0 y +1.0 que mide cómo se mueven dos activos entre sí; valores cercanos a 0 o negativos aportan máxima protección." }
        ],
        realExample: {
          asset: "Portafolio Tradicional 60/40 en Mercados Internacionales",
          date: "Estudio empírico de retornos 1970 - 2026",
          source: "Vanguard Research / CFA Institute",
          url: "https://corporate.vanguard.com/",
          caseDescription: "Durante la crisis financiera de 2008, mientras el mercado accionario cayó más del -37%, los bonos soberanos de largo plazo subieron más de un +14%, amortiguando el impacto patrimonial y permitiendo rebalancear comprando renta variable a valoraciones deprimidas."
        },
        deliverableExercise: {
          title: "Diagnóstico de Concentración de Portafolio",
          description: "Haz una lista de tus activos o inversiones planificadas: 1) ¿Qué porcentaje total está en una sola empresa o país? 2) ¿Qué activo de tu portafolio subiría o se mantendría estable si la bolsa mexicana cayera un 20%?"
        },
        quizzes: [
          {
            question: "¿Qué tipo de riesgo financiero se puede eliminar prácticamente mediante una correcta diversificación?",
            options: [
              "El riesgo sistemático de mercado.",
              "El riesgo no sistemático o específico de una compañía o sector.",
              "El riesgo de inflación nacional.",
              "El riesgo de cambio de divisas de Banxico."
            ],
            correct: 1,
            explanation: "Al poseer una cartera amplia, los problemas individuales de una compañía se diluyen frente al desempeño del resto de la economía."
          },
          {
            question: "¿Por qué tener acciones de 8 bancos diferentes en México no constituye una diversificación profesional?",
            options: [
              "Porque los bancos no cotizan en bolsa.",
              "Porque todos pertenecen al mismo sector y comparten los mismos factores de riesgo regulatorio, crediticio y macroeconómico (alta correlación positiva).",
              "Porque las casas de bolsa cobran doble comisión por acciones financieras.",
              "Porque la BMV prohíbe tener más de tres bancos en cartera."
            ],
            correct: 1,
            explanation: "Cuando los activos pertenecen a la misma industria, sus rendimientos están altamente correlacionados, reaccionando idénticamente ante un mismo shock sectorial."
          },
          {
            question: "¿Qué significa que dos activos tengan un coeficiente de correlación cercano a 0 o ligeramente negativo?",
            options: [
              "Que ambos activos quebrarán simultáneamente.",
              "Que sus movimientos de precio son independientes o se mueven en sentidos contrarios, aportando estabilización y reducción de volatilidad al portafolio.",
              "Que pagan el doble de dividendos.",
              "Que no pagan comisiones de custodia bursátil."
            ],
            correct: 1,
            explanation: "La correlación nula o negativa suaviza la curva de capital del portafolio porque las ganancias de uno amortiguan las caídas del otro."
          }
        ]
      },
      {
        title: "Diferenciación de Mercados: BMV vs. Sistema Internacional de Cotizaciones (SIC)",
        content: "El SIC democratizó la inversión en Wall Street: cómo comprar empresas globales en pesos mexicanos y con custodia en INDEVAL.",
        details: "Históricamente, un inversionista mexicano requería transferencias internacionales y cuentas bancarias en el extranjero para adquirir títulos de empresas globales. En 2003, la Bolsa Mexicana de Valores creó el Sistema Internacional de Cotizaciones (SIC). A través del SIC, emisoras extranjeras (como Apple, Microsoft, Amazon o ETFs globales) listan sus valores en el mercado local previa autorización de la CNBV. Los títulos quedan custodiados en la institución depositaria central de México (S.D. INDEVAL), se compran y venden en pesos mexicanos (MXN) a través de cualquier casa de bolsa nacional autorizada y gozan de la ventaja fiscal del Artículo 129 de la Ley del Impuesto sobre la Renta (LISR), que grava las ganancias de capital con una tasa preferencial definitiva del 10% anual, en lugar de acumular al régimen general de personas físicas de hasta el 35%.",
        visualType: "market_diff_tab",
        videoUrls: ["ShzU8qRjTE"],
        videoTitle: "Sistema Internacional de Cotizaciones (SIC): Comprando Wall Street desde México",
        videoDuration: "16 min",
        disclaimer: "Educación, no asesoría financiera. Los títulos en el SIC conllevan exposición al tipo de cambio USD/MXN además del riesgo accionario propio.",
        quote: { 
          text: "El SIC no es una bolsa distinta, es la plataforma dentro de la Bolsa Mexicana de Valores que te permite acceder a empresas globales sin abrir cuentas extranjeras ni mandar dólares por transferencia.", 
          author: "Guía FA Academy sobre el Mercado Global" 
        },
        speakerNotes: "En el SIC, el precio que ves en pantalla en pesos mexicanos refleja dos componentes: el precio del activo en su mercado de origen en dólares y el tipo de cambio interbancario USD/MXN. Utiliza siempre órdenes 'Limitadas' para evitar comprar con sobreprecio en horarios de bajo volumen.",
        concepts: [
          { term: "SIC", def: "Sistema Internacional de Cotizaciones; mecanismo de la BMV y BIVA para negociar valores extranjeros en pesos." },
          { term: "INDEVAL", def: "S.D. INDEVAL, Institución para el Depósito de Valores que custodia de forma electrónica los títulos cotizados en el mercado mexicano." },
          { term: "Efecto Cambiario en SIC", def: "Si el activo sube en dólares pero el peso mexicano se aprecia fuertemente, tu rendimiento en pesos puede atenuarse, y viceversa." }
        ],
        realExample: {
          asset: "Negociación de Vanguard S&P 500 ETF ($VOO) a través del SIC",
          date: "Registro de operaciones BMV 2026",
          source: "Bolsa Mexicana de Valores / Indeval",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Un inversionista en Guadalajara compra 5 títulos de VOO a través de su casa de bolsa mexicana. Los títulos se liquidan en plazo estándar T+1, se registran a su nombre en INDEVAL y se pagan en pesos mexicanos, manteniendo el derecho a recibir dividendos trimestrales en su cuenta."
        },
        deliverableExercise: {
          title: "Búsqueda y Cotización de Valores en el SIC",
          description: "Entra a la plataforma de tu casa de bolsa o a bmv.com.mx. Busca los tickers de 3 activos globales en el SIC (ej. VOO, AAPL, MSFT) y anota: 1) Precio en pesos mexicanos, 2) Volumen promedio negociado, 3) Si el spread entre precio de compra (Bid) y venta (Ask) es estrecho."
        },
        quizzes: [
          {
            question: "¿Cuál es el tratamiento fiscal de las ganancias de capital obtenidas al vender acciones en el SIC conforme al Art. 129 de la LISR?",
            options: [
              "Tasa preferencial definitiva del 10% sobre la ganancia neta anualizada calculada y pagada en la Declaración Anual ante el SAT.",
              "Exención total de impuestos sin declarar nada.",
              "Tasa fija del 50% retenida en cada operación diaria.",
              "Se cobra el 16% de IVA sobre el valor total de las acciones vendidas."
            ],
            correct: 0,
            explanation: "La legislación bursátil mexicana otorga una tasa preferencial del 10% a los valores negociados en bolsas reconocidas (BMV/BIVA/SIC), liquidándose en abril en la declaración anual."
          },
          {
            question: "¿Qué institución mexicana tiene la responsabilidad legal de custodiar los títulos accionarios que adquieres en el SIC?",
            options: [
              "La sucursal bancaria donde tienes tu tarjeta de débito.",
              "S.D. INDEVAL (Institución para el Depósito de Valores).",
              "El Servicio Postal Mexicano.",
              "La casa matriz de la empresa en Nueva York."
            ],
            correct: 1,
            explanation: "INDEVAL es el depositario central de valores en México; lleva el registro electrónico fiduciario de todas las acciones, bonos y ETFs."
          },
          {
            question: "¿Qué dos factores determinan el precio en pesos mexicanos de una acción de Wall Street que cotiza en el SIC?",
            options: [
              "El precio en dólares del activo en EE.UU. y el tipo de cambio USD/MXN.",
              "El precio del petróleo y la tasa de desempleo en Europa.",
              "La tasa de inflación en Japón y el costo del transporte público.",
              "Únicamente el precio del Cete a 28 días."
            ],
            correct: 0,
            explanation: "El valor en pesos en el SIC es el producto del precio en moneda de origen por la paridad cambiaria en tiempo real."
          }
        ]
      },
      {
        title: "Casas de Bolsa y Seguridad Operativa: Brókers CNBV, Tipos de Órdenes y W-8BEN",
        content: "El puente de intermediación legal: selección de casas de bolsa reguladas, tipos de órdenes y optimización fiscal internacional.",
        details: "Para comprar un valor regulado no se deposita dinero en plataformas opacas en el extranjero; se apertura un Contrato de Intermediación Bursátil con una Casa de Bolsa constituida y supervisada por la Comisión Nacional Bancaria y de Valores (CNBV) y el Banco de México (como GBM, Bursanet, Actinver o Vector, con comisiones promedio de corretaje en torno al 0.25% por transacción). Es vital dominar la mecánica de ejecución: 1) Órdenes a Mercado: ejecutan inmediatamente al mejor precio disponible en el libro de posturas, pero asumen el riesgo de 'slippage' (deslizamiento de precio) y spreads amplios. 2) Órdenes Limitadas: fijan el precio máximo que estás dispuesto a pagar o el mínimo que aceptas recibir; no se ejecutan si el precio no alcanza tu nivel establecido (innegociables para operar en el SIC). 3) Órdenes Stop Loss: cortan pérdidas automáticamente al cruzar un nivel fijado. En el plano de comisiones y dividendos internacionales, el Formulario W-8BEN (Certificate of Foreign Status of Beneficial Owner) suscrito ante el IRS de EE.UU. a través de tu casa de bolsa reduce la retención en origen sobre dividendos estadounidenses del 30% al 10%, gracias al tratado bilateral para evitar la doble tributación entre México y Estados Unidos. Los horarios oficiales de operación de la BMV y el SIC son de lunes a viernes de 08:30 a 15:00 horas (tiempo del Centro de México), coordinados con el horario bursátil de Nueva York.",
        visualType: "broker_security",
        disclaimer: "Educación, no asesoría financiera. La apertura de cuentas y firma del formato W-8BEN se realiza directamente en la plataforma de cada casa de bolsa autorizada.",
        speakerNotes: "Jamás operes en el SIC con órdenes a mercado a primera hora del día. Usa órdenes limitadas con vigencia de varios días para asegurar que compras exactamente al precio justo sin regalar el spread al formador de mercado.",
        concepts: [
          { term: "Casa de Bolsa Regulada", def: "Intermediario financiero vigilado por la CNBV, auditado y registrado en el Padrón de Entidades Financieras (SIPRES)." },
          { term: "Orden Limitada", def: "Instrucción bursátil donde fijas el precio límite exacto de compra o venta; protege contra spreads amplios y deslizamientos de mercado." },
          { term: "Formulario W-8BEN", def: "Documento fiscal del IRS tramitado en tu bróker que reduce la retención de dividendos de emisoras de EE.UU. del 30% al 10% por tratado fiscal." },
          { term: "Horario Bursátil (BMV/SIC)", def: "Jornada operativa oficial de 08:30 a 15:00 hrs (tiempo de CDMX), sincronizada con el mercado de Nueva York (09:30 a 16:00 EST)." }
        ],
        realExample: {
          asset: "Apertura de Contrato de Intermediación Bursátil Digital",
          date: "Registro de Entidades Reguladas CNBV 2026",
          source: "Comisión Nacional Bancaria y de Valores (CNBV)",
          url: "https://www.gob.mx/cnbv",
          caseDescription: "Inversionista verifica la clave de registro de su intermediario en el Padrón de Supervisión de la CNBV. Firma contrato no discrecional digital con biométricos, activa el formato W-8BEN en la sección fiscal del bróker y programa órdenes limitadas para adquirir títulos de bajo costo con comisión de corretaje del 0.25% más IVA."
        },
        deliverableExercise: {
          title: "Checklist de Verificación de tu Casa de Bolsa",
          description: "Verifica en tu plataforma o cuenta bursátil: 1) ¿Está tu casa de bolsa listada en el portal oficial de la CNBV? 2) ¿Tienes activo el formato W-8BEN para retención reducida de dividendos? 3) Configura una orden de compra Limitada simulada identificando el Bid y el Ask."
        },
        quizzes: [
          {
            question: "¿Por qué el formato W-8BEN es una herramienta indispensable para un inversionista mexicano que cobra dividendos de emisoras en EE.UU.?",
            options: [
              "Porque exenta a la persona de pagar la luz y el internet.",
              "Porque reduce la retención del impuesto en Estados Unidos sobre los dividendos del 30% al 10% en virtud del tratado para evitar la doble tributación entre México y EE.UU.",
              "Porque le otorga la nacionalidad estadounidense de forma automática.",
              "Porque elimina las comisiones de corretaje de la casa de bolsa."
            ],
            correct: 1,
            explanation: "El tratado fiscal bilateral reconoce la residencia fiscal en México y reduce la retención en origen del 30% al 10% para personas físicas debidamente acreditadas."
          },
          {
            question: "¿Cuál es la diferencia crítica entre una orden de compra 'A Mercado' y una orden 'Limitada' al operar en el SIC?",
            options: [
              "La orden a mercado se cobra al doble de comisión.",
              "La orden a mercado compra inmediatamente al precio que pida el vendedor (asumiendo riesgo de sobreprecio por spread amplio), mientras que la limitada solo compra al precio máximo que tú defines.",
              "La orden limitada no se puede cancelar nunca.",
              "No hay ninguna diferencia en la ejecución bursátil."
            ],
            correct: 1,
            explanation: "En mercados con menor liquidez relativa como el SIC, una orden a mercado puede cruzar contra posturas desfavorables; la orden limitada protege el capital exigiendo un precio exacto."
          },
          {
            question: "¿Cuál es el horario habitual de negociación continua en la Bolsa Mexicana de Valores y el SIC?",
            options: [
              "Las 24 horas del día los 7 días de la semana, incluyendo fines de semana.",
              "De lunes a viernes de 08:30 a 15:00 horas (tiempo del Centro de México).",
              "Únicamente los domingos por la tarde.",
              "De 06:00 a 09:00 horas."
            ],
            correct: 1,
            explanation: "La sesión regular opera de 08:30 a 15:00 hrs tiempo de la Ciudad de México, coincidiendo con la jornada operativa de los parqués de Nueva York."
          }
        ]
      },
      {
        title: "Vehículos de Inversión Indexada: ETFs Globales y FIBRAS Inmobiliarias",
        content: "Construcción eficiente de portafolios: fondos indexados pasivos (VOO, IVVPESO) frente al reparto obligatorio de rentas en FIBRAS.",
        details: "Para la inmensa mayoría de los inversionistas, el intento de seleccionar acciones individuales una por una (stock picking) destruye valor frente al mercado en horizontes de 10 a 20 años. Los ETFs (Exchange Traded Funds o Fondos Cotizados) resuelven este desafío replicando índices enteros con costos administrativos mínimos. El índice S&P 500 puede adquirirse a través de ETFs como VOO (Vanguard S&P 500 ETF, con un ratio de gastos de apenas 0.03% anual) o IVVPESO (con cobertura cambiaria peso-dólar). En el terreno de la renta y los bienes raíces, las FIBRAS (Fideicomisos de Inversión en Bienes Raíces, como FMTY14 o FUNO11) adquieren portafolios de bodegas industriales, centros de distribución y oficinas. Por legislación fiscal mexicana (Art. 187 y 188 de la LISR), las FIBRAS están obligadas a distribuir anualmente al menos el 95% de su resultado fiscal entre los tenedores de certificados bursátiles (CBFIs), lo que genera un flujo de efectivo constante y periódico.",
        visualType: "asset_types",
        disclaimer: "Educación, no asesoría financiera. Los rendimientos por distribución de FIBRAS y los precios de los ETFs fluctúan según el mercado inmobiliario y financiero.",
        speakerNotes: "Los ETFs son la base de tu crecimiento patrimonial pasivo. Las FIBRAS son la fábrica de flujo de efectivo para reinvertir mes tras mes o complementar tus ingresos corrientes.",
        concepts: [
          { term: "ETF (Exchange Traded Fund)", def: "Fondo de inversión indexado que cotiza exactamente como una acción en bolsa con comisiones de administración ultrabajas." },
          { term: "TER (Total Expense Ratio)", def: "Porcentaje anualizado que el gestor del ETF descuenta del valor liquidativo para cubrir costos operativos y de custodia." },
          { term: "FIBRA (CBFIs)", def: "Vehículo inmobiliario público que cobra rentas y reparte por ley al menos el 95% del resultado fiscal a sus tenedores." },
          { term: "Tracking Error", def: "Divergencia entre la rentabilidad real entregada por el ETF y la rentabilidad del índice subyacente que replica." }
        ],
        realExample: {
          asset: "Comparativa de Costo TER: VOO (0.03%) vs. Fondos Activos Bancarios (2.50%)",
          date: "Análisis comparativo de comisiones 2026",
          source: "Morningstar Direct / SPIVA Scorecard",
          url: "https://www.spglobal.com/spdji/en/research-insights/spiva/",
          caseDescription: "En un plazo de 25 años con aportaciones continuas de $5,000 MXN mensuales, la diferencia de pagar un 0.03% de TER en un ETF indexado versus un 2.50% de comisión de administración en un fondo tradicional bancario representa una merma patrimonial de más de $1.2 millones de pesos exclusivamente en comisiones y costo de oportunidad devorado por intermediarios."
        },
        deliverableExercise: {
          title: "Estructura de Núcleo Indexado e Inmobiliario",
          description: "Diseña la distribución porcentual inicial de tu núcleo patrimonial: 1) Asigna un porcentaje a ETFs globales (ej. 60% S&P 500 / Todo el Mundo), 2) Asigna un porcentaje a FIBRAS industriales o comerciales para flujo de rentas, 3) Justifica por qué evitas el stock picking para tu fondo principal."
        },
        quizzes: [
          {
            question: "¿Cuál es el mandato fiscal obligatorio que deben cumplir las FIBRAS en México según los artículos 187 y 188 de la LISR?",
            options: [
              "Vender todas sus propiedades cada 3 años.",
              "Distribuir entre los tenedores de certificados al menos el 95% de su resultado fiscal neto al menos una vez al año.",
              "Pagar un 30% de interés garantizado mensual.",
              "Invertir exclusivamente en construcciones residenciales de lujo."
            ],
            correct: 1,
            explanation: "La ley exige que los fideicomisos inmobiliarios distribuyan prácticamente la totalidad de sus utilidades fiscales en forma de dividendos/rentas a los inversionistas."
          },
          {
            question: "¿Qué es el TER (Total Expense Ratio) de un ETF y por qué impacta drásticamente en la riqueza a 20 años?",
            options: [
              "Es la cuota que cobra el banco por transferir dinero a tu tarjeta.",
              "Es el costo anualizado de administración del fondo; mantenerlo ultrabajo (ej. 0.03% en VOO) evita que las comisiones devoren el efecto del interés compuesto en el tiempo.",
              "Es un impuesto municipal sobre la compra de acciones.",
              "Es la tasa de rendimiento que promete el gestor del fondo."
            ],
            correct: 1,
            explanation: "Comisiones de apenas 1.5% o 2% anual en fondos tradicionales pueden consumir más del 40% del capital acumulado final en plazos largos de 25 a 30 años."
          },
          {
            question: "¿Qué ventaja ofrece un ETF indexado como el S&P 500 frente a intentar adivinar qué acción individual ganará?",
            options: [
              "Garantiza que ninguna empresa de EE.UU. tendrá pérdidas operativas.",
              "Diversifica automáticamente en las 500 compañías líderes de mayor capitalización, eliminando el riesgo no sistemático de quiebra de una empresa individual.",
              "Permite no pagar comisiones al SAT.",
              "Duplica el dinero en menos de 6 meses."
            ],
            correct: 1,
            explanation: "La indexación pasiva captura el crecimiento agregado de la economía y autolimpia el portafolio sacando a las empresas decadentes e integrando a las ganadoras."
          }
        ]
      },
      {
        title: "Análisis Fundamental Práctico: Estados Financieros y Ratios Clave de Solvencia",
        content: "Aprende a leer la etiqueta nutricional de un negocio: Balance General, Estado de Resultados y Estado de Flujo de Efectivo.",
        details: "Invertir en una empresa sin revisar sus estados financieros es como comprar un automóvil usado sin levantar el cofre ni revisar el motor. El Análisis Fundamental se cimenta en los tres reportes contables oficiales auditados: 1) Estado de Resultados: detalla los ingresos, el margen bruto, el EBITDA operativo y la Utilidad Neta final. 2) Balance General: es una fotografía estática que mide la ecuación contable: Activos = Pasivos + Capital Contable. Permite auditar el apalancamiento mediante la Deuda Financiera Neta y el ratio Deuda Neta / EBITDA (ratios superiores a 3.0x encienden alertas de riesgo crediticio). 3) Estado de Flujo de Efectivo: la métrica suprema de supervivencia; mientras la utilidad neta está sujeta a convenciones contables y estimaciones, el Flujo de Caja Libre (Free Cash Flow = Flujo Operativo - Gastos de Capital / CapEx) mide el efectivo real y contante que ingresa a la tesorería de la compañía y que puede destinarse a dividendos, recompras de acciones o reducción de pasivos.",
        visualType: "fundamental_basics",
        newsSnippet: {
          title: "El Espejismo de las Utilidades Contables sin Flujo de Efectivo",
          text: "Analistas advierten sobre empresas con utilidades reportadas positivas pero flujo de caja operativo negativo durante varios trimestres consecutivos. La acumulación artificial de inventarios o cuentas por cobrar tarde o temprano fuerza diluciones de capital o reestructuras de deuda.",
          source: "Reporte de Calidad Contable, CFA Institute 2026"
        },
        disclaimer: "Educación, no asesoría financiera. El análisis de razones financieras debe contrastarse siempre contra las empresas competidoras del mismo sector.",
        speakerNotes: "Las ventas son vanidad, las utilidades son opinión contable, pero el Flujo de Caja Libre es la única realidad económica. Si a una compañía no le sobra dinero en el banco tras pagar inversiones de capital, no puede pagarte dividendos sostenibles.",
        concepts: [
          { term: "EBITDA", def: "Earnings Before Interest, Taxes, Depreciation, and Amortization; flujo generado por las operaciones comerciales ordinarias antes de partidas no monetarias." },
          { term: "Free Cash Flow (FCF)", def: "Flujo de Efectivo Operativo menos CapEx; el dinero contante disponible para recompensar a los accionistas o amortizar deuda." },
          { term: "Deuda Neta / EBITDA", def: "Años que tardaría la compañía en liquidar su deuda total utilizando exclusivamente su flujo operativo anual; por debajo de 2.0x denota fortaleza financiera." },
          { term: "ROE (Return on Equity)", def: "Utilidad Neta dividida entre el Capital Contable; evalúa cuántos pesos de beneficio genera el equipo directivo por cada peso aportado por los accionistas." }
        ],
        realExample: {
          asset: "Auditoría de Estados Financieros Consolidados en la BMV",
          date: "Revisión trimestral bajo normas IFRS 2026",
          source: "Bolsa Mexicana de Valores / CNBV",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Evaluación de una emisora de consumo básico en México (ej. Walmart de México $WALMEX o Arca Continental $AC). Ambas compañías mantienen ratios Deuda Neta / EBITDA inferiores a 1.2x y márgenes de Free Cash Flow superiores al 7% de las ventas, lo que les permite sostener dividendos crecientes y resistir shocks de tasas altas sin estrés financiero."
        },
        deliverableExercise: {
          title: "Auditoría Fundamental de una Emisora Mexicana",
          description: "Descarga el reporte trimestral de una emisora de la BMV. Localiza en sus estados financieros: 1) Ventas netas y Margen EBITDA (EBITDA / Ventas), 2) Deuda Financiera Neta en el Balance, 3) Flujo Libre de Efectivo en el reporte de flujos. Concluye si la empresa es financieramente solvente."
        },
        quizzes: [
          {
            question: "¿Por qué el Flujo de Caja Libre (Free Cash Flow) es considerado por analistas institucionales la métrica más confiable de salud financiera?",
            options: [
              "Porque es el dinero en efectivo real que queda libre después de pagar los costos operativos y el gasto en maquinaria/inversiones de capital (CapEx).",
              "Porque es un cálculo secreto que solo conocen los contadores públicos.",
              "Porque no toma en cuenta los salarios de los empleados.",
              "Porque se calcula exclusivamente sumando las deudas del banco."
            ],
            correct: 0,
            explanation: "A diferencia de las utilidades contables que pueden verse afectadas por ajustes devengados, el FCF representa el dinero físico y disponible que la empresa efectivamente generó."
          },
          {
            question: "¿Qué ratio financiero mide la capacidad de una compañía para pagar sus obligaciones de deuda utilizando su generación operativa ordinaria?",
            options: [
              "El número de seguidores en redes sociales.",
              "Deuda Neta / EBITDA.",
              "El precio de la acción dividido entre los años del director general.",
              "El volumen de tickets vendidos en la tienda."
            ],
            correct: 1,
            explanation: "El ratio Deuda Neta / EBITDA mide cuántos años de generación operativa requeriría la empresa para pagar su deuda neta; cifras bajas denotan desahogo crediticio."
          },
          {
            question: "¿Qué representa el Balance General de una empresa cotizada en bolsa?",
            options: [
              "Una lista de los productos que saldrán a la venta el próximo año.",
              "Una fotografía estática a una fecha determinada que muestra los Activos que posee la firma, los Pasivos (deudas) que debe y el Capital Contable de los accionistas.",
              "El registro de las ventas minuto a minuto en las tiendas.",
              "El pronóstico meteorológico de las ciudades donde opera la compañía."
            ],
            correct: 1,
            explanation: "El Balance General resume la posición patrimonial de la entidad en un instante específico conforme a la ecuación contable fundamental."
          }
        ]
      }
    ]
  }
];

// --- EVALUACIÓN DE CERTIFICACIÓN FINAL FASE 2: 10 PREGUNTAS RIGUROSAS ---
const quizQuestions = [
  { 
    id: 1, 
    question: "¿Qué función técnica fundamental cumple un Certificado de Participación Ordinaria (CPO) como CEMEXCPO en la Bolsa Mexicana de Valores?", 
    options: [
      "Garantizar el pago de un rendimiento fijo en dólares.",
      "Agrupar paquetes de acciones de distintas series (ej. Serie A y B) en un solo título bursátil para facilitar la liquidez sin que los fundadores pierdan el control corporativo.",
      "Evitar por completo las auditorías de la Comisión Nacional Bancaria y de Valores.",
      "Permitir la liquidación de transacciones sin contrato bancario."
    ], 
    correct: 1 
  },
  { 
    id: 2, 
    question: "En el análisis de Renta Fija mexicana, ¿cuál es el beneficio fiscal que otorga el Art. 93 Frac. XX de la LISR para inversiones en SOFIPOs reguladas?", 
    options: [
      "Exención total de ISR sin límite de capital para siempre.",
      "Exención de retención de ISR sobre rendimientos siempre que el saldo promedio diario no supere 5 UMAs anualizadas (~$206,000 MXN en 2026).",
      "Devolución del 100% del IVA en compras de supermercado.",
      "Crédito fiscal canjeable por acciones de Wall Street."
    ], 
    correct: 1 
  },
  { 
    id: 3, 
    question: "¿Por qué el múltiplo EV/EBITDA es el ratio de valuación de referencia para comparar empresas industriales cíclicas de capital intensivo?", 
    options: [
      "Porque no toma en cuenta los impuestos de la empresa.",
      "Porque incorpora el valor total de la firma (capitalización bursátil más deuda neta) y mide la capacidad operativa bruta antes de distorsiones por depreciación contable de plantas.",
      "Porque garantiza que la acción subirá un 20% anual.",
      "Porque solo se utiliza en empresas de tecnología."
    ], 
    correct: 1 
  },
  { 
    id: 4, 
    question: "Dentro del enfoque híbrido de inversión, ¿cuál es la función precisa del Análisis Técnico y del Análisis Fundamental?", 
    options: [
      "El Fundamental se usa para bonos y el Técnico para cuentas bancarias.",
      "El Fundamental define la calidad y el valor intrínseco del negocio (QUÉ comprar) y el Técnico ayuda a optimizar el momento y precio de entrada con riesgo controlado (CUÁNDO comprar).",
      "Ambos predicen el futuro con certeza matemática del 100%.",
      "El Técnico sustituye por completo la necesidad de que una empresa gane dinero."
    ], 
    correct: 1 
  },
  { 
    id: 5, 
    question: "¿Cuál es el régimen fiscal definitivo aplicable a las ganancias de capital obtenidas en acciones del SIC y BMV según el Artículo 129 de la Ley del ISR en México?", 
    options: [
      "Están totalmente exentas sin necesidad de reportarlas en ninguna parte.",
      "Tasa preferencial definitiva del 10% sobre la ganancia neta anual, calculada con constancia fiscal de la casa de bolsa y liquidada en la Declaración Anual en abril.",
      "Retención obligatoria mensual del 35% no acreditable.",
      "Se paga el 16% de IVA sobre el monto total de cada orden de venta ejecutada."
    ], 
    correct: 1 
  },
  { 
    id: 6, 
    question: "¿Cuál es la función del Sistema Internacional de Cotizaciones (SIC) en el ecosistema bursátil mexicano?", 
    options: [
      "Permitir a inversionistas nacionales comprar acciones extranjeras y ETFs globales en pesos mexicanos con custodia electrónica en INDEVAL.",
      "Obligar a todos los ciudadanos a tener cuentas bancarias en Nueva York.",
      "Eliminar el pago de impuestos ante la Secretaría de Hacienda.",
      "Vender bonos de deuda emitidos exclusivamente por el FMI."
    ], 
    correct: 0 
  },
  { 
    id: 7, 
    question: "¿Qué beneficio legal y económico otorga el Formulario W-8BEN firmado a través de tu casa de bolsa regulada en México?", 
    options: [
      "Permite solicitar un crédito hipotecario en Estados Unidos.",
      "Reduce la retención del impuesto estadounidense en origen sobre dividendos de emisoras de EE.UU. del 30% al 10% en virtud del tratado bilateral para evitar la doble tributación.",
      "Exenta a la empresa estadounidense de reportar ingresos ante la SEC.",
      "Elimina la comisión de corretaje del intermediario bursátil local."
    ], 
    correct: 1 
  },
  { 
    id: 8, 
    question: "¿Por qué se aconseja utilizar órdenes 'Limitadas' en lugar de órdenes 'A Mercado' al operar títulos en el SIC?", 
    options: [
      "Porque las órdenes limitadas no pagan comisiones a la casa de bolsa.",
      "Porque en instrumentos con menor volumen relativo, las órdenes a mercado pueden ejecutarse con deslizamientos de precio (slippage) o spreads amplios desfavorables.",
      "Porque las órdenes limitadas garantizan que la emisora repartirá más dividendos.",
      "Porque la CNBV sanciona a los inversionistas que usan órdenes a mercado."
    ], 
    correct: 1 
  },
  { 
    id: 9, 
    question: "¿Qué obligación legal distingue a los Fideicomisos de Inversión en Bienes Raíces (FIBRAS) en México conforme a los Artículos 187 y 188 de la LISR?", 
    options: [
      "Deben construir únicamente casas de interés social.",
      "Están legalmente obligados a distribuir anualmente al menos el 95% de su resultado fiscal neto entre los tenedores de certificados (CBFIs).",
      "No pueden cotizar en la Bolsa Mexicana de Valores.",
      "Deben reinvertir el 100% de las rentas cobradas sin repartir un solo peso a los inversionistas."
    ], 
    correct: 1 
  },
  { 
    id: 10, 
    question: "En la lectura institucional del Estado de Flujo de Efectivo, ¿cómo se define el Flujo de Caja Libre (Free Cash Flow)?", 
    options: [
      "El saldo inicial que tenía la empresa en caja al inicio del año.",
      "El efectivo generado por las operaciones comerciales ordinarias menos las inversiones de capital en activos fijos (CapEx).",
      "El total de ventas antes de pagar los sueldos a los trabajadores.",
      "La suma de todas las deudas contratadas con bancos comerciales."
    ], 
    correct: 1 
  }
];

// --- COMPONENTES VISUALES EDUCATIVOS PARA FASE 2 ---

const ActionAnatomy = () => (
  <div className="flex flex-col md:flex-row gap-4 mt-6">
    <div className="bg-slate-800 p-5 rounded-xl border border-purple-500/30 flex-1 relative overflow-hidden group hover:border-purple-400 transition-colors">
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
        <UserCheck size={48} className="text-purple-400"/>
      </div>
      <h4 className="text-purple-400 font-bold text-lg mb-1">Serie A</h4>
      <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Capital Ordinario y Control</p>
      <ul className="text-xs text-slate-400 space-y-2">
        <li className="flex gap-2"><CheckCircle size={14} className="text-purple-500 shrink-0"/> Plenos derechos de voto en asambleas ordinarias y extraordinarias.</li>
        <li className="flex gap-2"><CheckCircle size={14} className="text-purple-500 shrink-0"/> Históricamente reservadas para inversionistas y fundadores nacionales.</li>
      </ul>
    </div>
    <div className="bg-slate-800 p-5 rounded-xl border border-indigo-500/30 flex-1 relative overflow-hidden group hover:border-indigo-400 transition-colors">
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
        <Scale size={48} className="text-indigo-400"/>
      </div>
      <h4 className="text-indigo-400 font-bold text-lg mb-1">Serie B o L</h4>
      <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Voto Restringido / Financiero</p>
      <ul className="text-xs text-slate-400 space-y-2">
        <li className="flex gap-2"><CheckCircle size={14} className="text-indigo-500 shrink-0"/> Restringen el control en la toma de decisiones corporativas.</li>
        <li className="flex gap-2"><CheckCircle size={14} className="text-indigo-500 shrink-0"/> Otorgan preferencia patrimonial o prioridad en distribución de dividendos.</li>
      </ul>
    </div>
    <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-5 rounded-xl border border-violet-500/50 flex-1 shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all">
      <div className="flex items-center gap-2 mb-2">
        <Layers className="text-violet-400" size={24}/>
        <h4 className="text-violet-300 font-bold text-lg">CPO Bursátil</h4>
      </div>
      <p className="text-xs text-violet-200 font-bold uppercase tracking-wider mb-2">Fideicomiso de Paquete Accionario</p>
      <p className="text-xs text-slate-300 leading-relaxed">
        Certificado de Participación Ordinaria. Agrupa títulos de varias series (ej. 2 Serie A + 1 Serie B) en un solo título transable. <br/><br/>
        <strong className="text-violet-400">Objetivo:</strong> Facilita la liquidez en bolsa y la inversión institucional internacional sin diluir el control societario nacional.
      </p>
    </div>
  </div>
);

const FixedIncomeTool = () => (
  <div className="mt-6 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 border-b border-slate-800 pb-3">
      <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
        <Landmark size={18} />
        Renta Fija Soberana y Escudos Fiscales en México (2026)
      </h4>
      <span className="text-xs bg-teal-500/20 text-teal-300 font-bold px-2.5 py-1 rounded-full border border-teal-500/30">
        Riesgo Soberano & Escudos Fiscales
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs mb-3">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-emerald-500">
        <p className="font-bold text-white text-sm">CETES (28-364d)</p>
        <p className="text-emerald-400 font-bold mt-1 text-xs">Tasa Libre de Riesgo ~10.20%</p>
        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Deuda directa respaldada por Banxico. Herramienta primordial para el fondo de reserva y liquidez inmediata.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
        <p className="font-bold text-white text-sm">Udibonos (3-30 años)</p>
        <p className="text-blue-400 font-bold mt-1 text-xs">Tasa Real Fija + UDI</p>
        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Títulos indizados a la inflación. Blindaje definitivo contra la pérdida de poder adquisitivo del peso en plazos largos.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <p className="font-bold text-white text-sm">Bonos M (3-30 años)</p>
        <p className="text-amber-400 font-bold mt-1 text-xs">Cupón Fijo Semestral</p>
        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Pagan intereses cada 182 días a una tasa fija pactada desde el día de emisión, ideales para flujos conocidos.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-500">
        <p className="font-bold text-white text-sm">SOFIPOs Reguladas</p>
        <p className="text-purple-400 font-bold mt-1 text-xs">Exención 5 UMAs (~$206k MXN)</p>
        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Rendimientos libres de ISR bajo el Art. 93 LISR y garantía del Fondo PROSOFIPO por hasta 25,000 UDIs (~$215k MXN).</p>
      </div>
    </div>
  </div>
);

const CemexCase = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
      <div className="flex items-center gap-2">
        <Factory className="text-purple-400" size={20} />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Métricas Financieras: CEMEX, S.A.B. de C.V. ($CEMEXCPO)</h4>
      </div>
      <span className="bg-purple-500/20 text-purple-300 text-xs px-2.5 py-0.5 rounded-full font-bold border border-purple-500/30">
        BMV / S&P IPC
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <p className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">Múltiplo EV / EBITDA</p>
        <p className="text-2xl font-extrabold text-purple-300">~6.5x</p>
        <p className="text-[11px] text-slate-400 mt-1">Valuación atractiva respecto al promedio de la industria de materiales en mercados emergentes.</p>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <p className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">Apalancamiento Deuda / EBITDA</p>
        <p className="text-2xl font-extrabold text-emerald-400">&lt; 2.0x</p>
        <p className="text-[11px] text-slate-400 mt-1">Desapalancamiento exitoso que devolvió la calificación de Grado de Inversión (Investment Grade).</p>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <p className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">Catalizador Estratégico</p>
        <p className="text-xl font-bold text-teal-300">Nearshoring</p>
        <p className="text-[11px] text-slate-400 mt-1">Fuerte demanda de concreto y cemento para parques industriales en el corredor norte de México.</p>
      </div>
    </div>
  </div>
);

const TechnicalPsychology = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <LineChart className="text-purple-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">El Ciclo Emocional y la Señal Técnica</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
        <span className="text-rose-400 font-bold uppercase tracking-wider text-[11px] block mb-1">Peligro: Sobrecompra Extrema (RSI &gt; 70)</span>
        <p className="text-slate-300 leading-relaxed mb-2">
          La euforia minorista impulsa compras indiscriminadas. Los inversores compran sin margen de seguridad; las manos fuertes institucionales comienzan a distribuir títulos.
        </p>
        <p className="text-[11px] text-slate-400 italic">Acción sugerida: Evitar compras agresivas, asegurar ganancias parciales y esperar retroceso hacia soportes.</p>
      </div>
      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
        <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block mb-1">Oportunidad: Sobreventa y Soporte (RSI &lt; 30)</span>
        <p className="text-slate-300 leading-relaxed mb-2">
          El pánico y la capitulación dominan el mercado. Empresas con balances sanos cotizan con descuento temporal; las manos fuertes acumulan posiciones con paciencia.
        </p>
        <p className="text-[11px] text-slate-400 italic">Acción sugerida: Iniciar compras escalonadas con stops definidos por debajo del soporte estructural.</p>
      </div>
    </div>
  </div>
);

const DiversificationEco = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
        <PieChart size={18} className="text-purple-400" />
        Matriz de Clases de Activos y Correlación
      </h4>
      <span className="text-xs bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full font-bold border border-purple-500/30">
        Portafolio Integral
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[550px] text-xs">
        <thead>
          <tr className="bg-slate-800/80 border-b border-slate-700 text-slate-400 text-[11px] uppercase tracking-wider">
            <th className="p-3">Activo</th>
            <th className="p-3">Rol en la Cartera</th>
            <th className="p-3">Nivel de Riesgo</th>
            <th className="p-3">Vehículo de Referencia</th>
          </tr>
        </thead>
        <tbody className="text-slate-300 divide-y divide-slate-800">
          <tr className="hover:bg-slate-800/40">
            <td className="p-3 font-bold text-white">Renta Fija Soberana</td>
            <td className="p-3">Preservación de capital y liquidez</td>
            <td className="p-3 text-emerald-400 font-bold">Muy Bajo</td>
            <td className="p-3 text-slate-400">CETES 28D / Udibonos</td>
          </tr>
          <tr className="hover:bg-slate-800/40">
            <td className="p-3 font-bold text-white">ETFs Indexados Globales</td>
            <td className="p-3">Crecimiento patrimonial a largo plazo</td>
            <td className="p-3 text-amber-400 font-bold">Moderado</td>
            <td className="p-3 text-slate-400">VOO / IVVPESO / VT</td>
          </tr>
          <tr className="hover:bg-slate-800/40">
            <td className="p-3 font-bold text-white">FIBRAS Inmobiliarias</td>
            <td className="p-3">Flujo de efectivo periódico (rentas)</td>
            <td className="p-3 text-amber-400 font-bold">Moderado</td>
            <td className="p-3 text-slate-400">FMTY14 / FUNO11</td>
          </tr>
          <tr className="hover:bg-slate-800/40">
            <td className="p-3 font-bold text-white">Acciones Individuales BMV/SIC</td>
            <td className="p-3">Generación de alfa (alta convicción)</td>
            <td className="p-3 text-rose-400 font-bold">Alto</td>
            <td className="p-3 text-slate-400">CEMEXCPO / BIMBOA / AAPL</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const MarketDiffTab = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Globe className="text-purple-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Comparativa Operativa: Mercado Local (BMV/BIVA) vs. SIC</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <h5 className="font-bold text-purple-300 text-sm mb-2">Mercado Local (BMV y BIVA)</h5>
        <ul className="space-y-1.5 text-slate-300">
          <li>• Emisoras mexicanas domiciliadas en el país (Bimbo, Cemex, América Móvil).</li>
          <li>• Moneda de cotización: Pesos Mexicanos (MXN).</li>
          <li>• Custodia directa electrónica en S.D. INDEVAL.</li>
          <li>• Tratamiento fiscal preferencial Art. 129 LISR (10% sobre ganancia neta).</li>
        </ul>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <h5 className="font-bold text-teal-300 text-sm mb-2">Sistema Internacional de Cotizaciones (SIC)</h5>
        <ul className="space-y-1.5 text-slate-300">
          <li>• Emisoras y ETFs extranjeros listados en México (Apple, Microsoft, VOO).</li>
          <li>• Negociación en Pesos Mexicanos vinculada al tipo de cambio USD/MXN.</li>
          <li>• Mismo régimen fiscal del 10% de ISR bajo el Art. 129 LISR.</li>
          <li>• Con formulario W-8BEN, retención de dividendos de EE.UU. reducida al 10%.</li>
        </ul>
      </div>
    </div>
  </div>
);

const BrokerSecurity = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <ShieldCheck className="text-purple-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Reglas de Seguridad Operativa y Tipos de Órdenes</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-emerald-500">
        <p className="font-bold text-white">Orden Limitada</p>
        <p className="text-[11px] text-slate-300 mt-1">Fijas el precio exacto máximo de compra o mínimo de venta. Evita pagar sobreprecio en mercados con spread amplio.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <p className="font-bold text-white">Orden Stop Loss</p>
        <p className="text-[11px] text-slate-300 mt-1">Instrucción automática para liquidar la posición si el precio rompe un soporte clave, limitando la pérdida máxima asumible.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-500">
        <p className="font-bold text-white">Formato W-8BEN</p>
        <p className="text-[11px] text-slate-300 mt-1">Acredita no residencia en EE.UU. ante el IRS para reducir la retención de dividendos internacionales del 30% al 10%.</p>
      </div>
    </div>
  </div>
);

const AssetTypes = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <BarChart3 className="text-purple-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">ETFs Indexados vs. FIBRAS Inmobiliarias</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <span className="text-purple-400 font-bold uppercase text-[11px] block mb-1">ETFs Indexados (Ej. VOO / IVVPESO)</span>
        <p className="text-slate-300 leading-relaxed mb-2">
          Poseer una canasta de cientos de empresas líderes mundiales con una sola transacción. Costos de administración mínimos (0.03% anual) y reinversión automática eficiente.
        </p>
        <p className="text-[11px] text-purple-300 font-semibold">Ventaja: Crecimiento pasivo de largo plazo sin riesgo de quiebra empresarial aislada.</p>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
        <span className="text-teal-400 font-bold uppercase text-[11px] block mb-1">FIBRAS (Ej. FMTY14 / FUNO11)</span>
        <p className="text-slate-300 leading-relaxed mb-2">
          Fideicomisos que adquieren y administran portafolios de bienes raíces comerciales e industriales. Distribuyen por ley al menos el 95% del resultado fiscal a los inversionistas.
        </p>
        <p className="text-[11px] text-teal-300 font-semibold">Ventaja: Flujo de caja periódico y cobertura inmobiliaria contra la inflación.</p>
      </div>
    </div>
  </div>
);

const FundamentalBasics = () => (
  <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Calculator className="text-purple-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Las Tres Piedras Angulares del Análisis Contable</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-t-2 border-purple-500">
        <p className="font-bold text-white">Estado de Resultados</p>
        <p className="text-[11px] text-slate-300 mt-1">Mide el dinamismo de ventas, costos operativos, margen EBITDA y utilidad neta en un periodo trimestral o anual.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-t-2 border-indigo-500">
        <p className="font-bold text-white">Balance General</p>
        <p className="text-[11px] text-slate-300 mt-1">Fotografía del patrimonio: Activos = Pasivos + Capital Contable. Permite evaluar liquidez corriente y apalancamiento neto.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-t-2 border-teal-500">
        <p className="font-bold text-white">Flujo de Caja Libre (FCF)</p>
        <p className="text-[11px] text-slate-300 mt-1">Efectivo operativo restante tras pagar inversiones de capital (CapEx). Es el indicador innegociable de solvencia real.</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL DEL REPRODUCTOR FASE 2 ---

export default function CoursePlayerPhase2() {
  const [searchParams] = useSearchParams();
  const { user, updateProgress, submitTestResult } = useAuth();

  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Estado para quizzes interactivos por lección (pregunta -> respuesta seleccionada)
  const [quizState, setQuizState] = useState<Record<string, { answer: number; shown: boolean }>>({});

  const moduleData = courseData[currentModule];
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
      const saved = localStorage.getItem('fa_phase_2_progress');
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
      localStorage.setItem('fa_phase_2_progress', currentLesson.toString());
      localStorage.setItem('fa_phase_2_total', moduleData.lessons.length.toString());
    } catch (e) {
      // ignore
    }
    if (user) {
      updateProgress(2, currentLesson, moduleData.lessons.length);
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
      submitTestResult(2, calculatedScore, quizQuestions.length);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📊 *Certificación Aprobada - Fase 2 (El Ecosistema de Inversión)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Acreditado en Casas de Bolsa CNBV, Renta Fija Soberana, SIC, Art. 129 LISR, Formato W-8BEN y Valuación Fundamental. Solicitud de diploma oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'action_anatomy': return <ActionAnatomy />;
      case 'fixed_income_tool': return <FixedIncomeTool />;
      case 'cemex_case': return <CemexCase />;
      case 'technical_psychology': return <TechnicalPsychology />;
      case 'diversification_eco': return <DiversificationEco />;
      case 'market_diff_tab': return <MarketDiffTab />;
      case 'broker_security': return <BrokerSecurity />;
      case 'asset_types': return <AssetTypes />;
      case 'fundamental_basics': return <FundamentalBasics />;
      default: return null;
    }
  };

  // VISTA DEL EXAMEN FINAL FASE 2
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO 
          title="Examen Final: Fase 2 - El Ecosistema de Inversión | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 2 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/2"
        />
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 2: El Ecosistema de Inversión
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas técnicas sobre Casas de Bolsa CNBV, Renta Fija Soberana, SIC, Art. 129 LISR, Formato W-8BEN y Ratios Fundamentales.
            </p>
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                    <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
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
                            ? 'bg-purple-600 border-purple-400 text-white font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-purple-900/30 cursor-pointer"
                >
                  Terminar Evaluación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-purple-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(168,85,247,0.25)]">
                <div className="text-6xl mb-4">
                  {score >= 8 ? '🏆' : score >= 6 ? '📈' : '📚'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {score >= 8 ? '¡Aprobado con Distinción!' : score >= 6 ? 'Módulo Completado' : 'Requiere Repaso'}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Calificación Oficial: <span className="text-purple-400 font-bold text-xl">{score} / {quizQuestions.length}</span>
                </p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000" 
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
        title={`Fase 2: ${lessonData.title} | FA Academy`}
        description={`Lección ${currentLesson + 1} de la Fase 2 de FA Academy: ${lessonData.content}`}
        url="https://fa-academy.vercel.app/course/phase/2"
      />
      
      {/* HEADER CON BADGE BÁSICO EXACTO */}
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-2 rounded-lg">
              <Landmark className="text-white" size={20} strokeWidth={2.5}/>
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest hidden md:block">BÁSICO</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-purple-500/10 text-purple-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-purple-500/20">
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
                <PlayCircle size={15} className="text-purple-400" />
                {lessonData.videoTitle || lessonData.title}
              </span>
              {lessonData.videoDuration && (
                <span className="bg-slate-800 px-2.5 py-1 rounded-md text-purple-400 font-semibold flex items-center gap-1">
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
            <Layers size={120} className="text-slate-500" />
          </div>
          <ErrorBoundary fallbackMessage="Error al cargar el módulo visual">
            {renderVisual(lessonData.visualType)}
          </ErrorBoundary>
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          {/* Disclaimer visible obligatorio */}
          <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-purple-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Toda inversión bursátil conlleva riesgo de fluctuación y pérdida de capital."}</span>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg">
            <p className="text-lg md:text-xl text-purple-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="flex gap-4 items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
            <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0">
              <Brain size={20} className="text-purple-400" />
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {lessonData.details}
              </p>
              {lessonData.speakerNotes && (
                <p className="mt-4 text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex gap-2">
                  <span className="text-purple-400 font-bold not-italic">💡 Tip FA Academy:</span>
                  {lessonData.speakerNotes}
                </p>
              )}
            </div>
          </div>

          {/* Caso Real Fechado de Mercado */}
          {(lessonData as any).realExample && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-purple-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
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
                  className="text-purple-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {(lessonData as any).realExample.source} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* Ejercicio con Entregable Práctico */}
          {(lessonData as any).deliverableExercise && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText size={15} /> Ejercicio con Entregable Práctico
              </span>
              <h4 className="text-sm font-bold text-white mb-1">{(lessonData as any).deliverableExercise.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).deliverableExercise.description}</p>
              <textarea 
                placeholder="Escribe aquí tu análisis, cálculos o respuestas del ejercicio..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 outline-none focus:ring-1 focus:ring-purple-500 min-h-[70px]"
              />
            </div>
          )}

          {lessonData.quote && (
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <Quote size={20} className="text-purple-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs md:text-sm text-slate-200 italic leading-relaxed">"{lessonData.quote.text}"</p>
                <p className="text-[11px] text-purple-400 font-semibold mt-1">— {lessonData.quote.author}</p>
              </div>
            </div>
          )}

          {lessonData.newsSnippet && (
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <Newspaper size={20} className="text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white">{lessonData.newsSnippet.title}</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{lessonData.newsSnippet.text}</p>
                <p className="text-[10px] text-slate-500 mt-1">Fuente: {lessonData.newsSnippet.source}</p>
              </div>
            </div>
          )}

          {lessonData.concepts && (
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-purple-400" />
                Conceptos Clave de la Lección
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lessonData.concepts.map((c, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-xs font-bold text-purple-300 mb-1">{c.term}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz interactivo por lección con retroalimentación inmediata */}
          {activeQuizzes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-purple-500/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-purple-400" />
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
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
                      <span className="text-xs bg-slate-800 text-purple-400 px-2 py-0.5 rounded font-bold">{qIdx + 1}</span>
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
                          btnStyle = 'bg-purple-600 border-purple-400 text-white font-bold';
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
                  idx === currentLesson ? 'bg-purple-500 scale-125' : 'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] active:scale-95"
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
