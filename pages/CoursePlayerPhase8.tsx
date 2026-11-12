import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, Calculator,
  Building2, Landmark, Brain, Quote, 
  AlertTriangle, Layers, Newspaper, BarChart3,
  LineChart, CheckCircle, ChevronRight, Book, Scale,
  Factory, Globe, Coins, UserCheck, ShieldCheck,
  PlayCircle, Clock, ExternalLink, FileText, CheckCircle2, XCircle, HelpCircle,
  PieChart, Shield, Home, Calendar, Droplets, Key, Compass, Zap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 8: MACROECONOMÍA APLICADA Y MERCADOS GLOBALES (9 LECCIONES) ---

const courseData = [
  {
    id: 8,
    title: "FA Academy: Macroeconomía Aplicada y Mercados Globales",
    description: "Domina el tablero macroeconómico global: política monetaria de Banxico y la Fed, dinámica cambiaria USD/MXN, indicadores adelantados (IMEF/PMI), reloj de rotación sectorial, megatendencias (nearshoring e IA), matriz de escenarios y anatomía forense de crisis históricas.",
    lessons: [
      {
        title: "Banxico: Lectura de Minutas de Política Monetaria y Expectativas de Inflación",
        content: "El centro de gravedad financiero en México: cómo decodificar a la Junta de Gobierno y anticipar la curva de rendimientos de Cetes.",
        details: "La tasa de interés objetivo a 1 día fijada por el Banco de México (Banxico) es la referencia suprema que determina el costo del dinero, el rendimiento de los Cetes, el crédito bancario y el tipo de cambio en nuestro país. Por mandato constitucional (Artículo 28), el objetivo prioritario e innegociable de Banxico es procurar la estabilidad del poder adquisitivo de la moneda nacional (meta de inflación del 3.0% anual ± 1 punto porcentual de tolerancia). La Junta de Gobierno, compuesta por el Gobernador y cuatro Subgobernadores, se reúne ocho veces al año en calendario preestablecido para anunciar su decisión de política monetaria. Exactamente 14 días naturales después, Banxico publica las Minutas de la reunión, el documento más valioso para los inversionistas institucionales. En las minutas debes auditar: 1) El balance de riesgos para la inflación (sesgo alcista o neutral). 2) La trayectoria de la inflación subyacente (que elimina alimentos frescos y energéticos volátiles para revelar la tendencia estructural de precios). 3) La tasa neutral estimada (históricamente situada entre 2.5% y 3.5% real, lo que sumado a 3% de inflación sitúa la tasa neutral nominal entre 5.5% y 6.5%; cualquier nivel por encima de eso es postura restrictiva que frena la economía). 4) La Encuesta Mensual sobre las Expectativas de los Especialistas en Economía del Sector Privado, clave para proyectar los ajustes de tasas en los próximos 12 a 24 meses.",
        visualType: "banxico_minutes_tool",
        disclaimer: "Educación, no asesoría financiera. Las decisiones de política monetaria dependen de datos económicos en constante evolución.",
        speakerNotes: "Nunca mires únicamente la tasa nominal actual. Lo que mueve los mercados de bonos y acciones es si la postura es restrictiva o acomodaticia en términos reales (Tasa Nominal menos Inflación Esperada).",
        concepts: [
          { term: "Mandato Constitucional de Banxico", def: "Prioridad única de procurar la estabilidad del poder adquisitivo de la moneda nacional (inflación objetivo al 3.0% ± 1%)." },
          { term: "Minutas de Política Monetaria", def: "Documento oficial publicado 14 días tras la decisión donde se detallan las deliberaciones y argumentos individuales de cada miembro de la Junta." },
          { term: "Inflación Subyacente", def: "Medición de precios que excluye productos agrícolas y energéticos de alta volatilidad; es la brújula real de los bancos centrales." },
          { term: "Tasa Neutral", def: "Nivel de tasa de interés que no estimula ni frena el crecimiento económico ni genera presiones inflacionarias." }
        ],
        realExample: {
          asset: "Minutas de la Junta de Gobierno de Banxico",
          date: "Ciclo de Política Monetaria 2024 - 2026",
          source: "Banco de México / Sistema de Información Económica (SIE)",
          url: "https://www.banxico.org.mx/",
          caseDescription: "Cuando la inflación general repuntó por shocks agrícolas temporales pero la subyacente continuó su descenso constante hacia 3.8%, las minutas revelaron que la mayoría de los subgobernadores priorizaron la tendencia subyacente para iniciar recortes graduales en la tasa de referencia, permitiendo a los inversionistas en Bonos M de largo plazo capturar ganancias de capital sustanciales al bajar las tasas de mercado."
        },
        deliverableExercise: {
          title: "Auditoría de Postura Monetaria de Banxico",
          description: "Consulta el último comunicado de Banxico y calcula: 1) Tasa nominal actual, 2) Expectativa de inflación a 12 meses, 3) Tasa real ex-ante (Tasa Nominal - Inflación Esperada). Determina si la postura es Restrictiva (Tasa Real > 3.5%), Neutral (2.5% - 3.5%) o Acomodaticia (< 2.5%)."
        },
        quizzes: [
          {
            question: "¿Cuál es el mandato constitucional prioritario y único del Banco de México (Banxico) conforme al Artículo 28 constitucional?",
            options: [
              "Fijar el precio de las acciones en la Bolsa Mexicana de Valores.",
              "Garantizar el pleno empleo y otorgar subsidios a empresas privadas.",
              "Procurar la estabilidad del poder adquisitivo de la moneda nacional (mantener la inflación baja y estable en torno al 3%).",
              "Maximizar el tipo de cambio del dólar frente al peso."
            ],
            correct: 2,
            explanation: "A diferencia de la Reserva Federal de EE.UU. que tiene mandato dual (empleo e inflación), Banxico tiene mandato único prioritario: preservar el poder adquisitivo del peso."
          },
          {
            question: "¿Cuántos días naturales después del anuncio de política monetaria publica Banxico sus Minutas detalladas?",
            options: [
              "Exactamente 14 días naturales después.",
              "Al día siguiente por la mañana.",
              "6 meses después de que termina el año.",
              "No se publican nunca, son secretas."
            ],
            correct: 0,
            explanation: "Por norma institucional de transparencia, Banxico publica sus minutas 14 días naturales después del anuncio de decisión monetaria."
          },
          {
            question: "¿Por qué los analistas institucionales vigilan con mayor rigor la 'Inflación Subyacente' sobre la inflación general?",
            options: [
              "Porque la subyacente solo mide el precio de los automóviles de lujo.",
              "Porque elimina los componentes más volátiles (agropecuarios y energéticos), reflejando la tendencia genuina y persistente de precios a mediano y largo plazo.",
              "Porque es la inflación calculada por el SAT para cobrar impuestos.",
              "Porque siempre es igual a cero."
            ],
            correct: 1,
            explanation: "La inflación subyacente aísla los choques transitorios y climáticos en alimentos o petróleo, permitiendo al banco central ver si las presiones de precios son estructurales."
          }
        ]
      },
      {
        title: "El Tipo de Cambio USD/MXN y el Efecto de Inflación Importada",
        content: "La divisa más líquida de América Latina: spread de tasas, carry trade global y canal de traspaso inflacionario (pass-through).",
        details: "El peso mexicano opera bajo un régimen de libre flotación desde finales de 1994, negociándose las 24 horas del día en el mercado FX global como una de las divisas emergentes de mayor volumen del mundo. Su cotización responde a tres fuerzas estructurales: 1) El diferencial de tasas de interés (spread) entre Banxico y la Reserva Federal de EE.UU.: cuando Banxico ofrece una tasa del 10.0% y la Fed un 4.5%, existe un spread positivo de 550 puntos básicos (5.5%). Fondos institucionales internacionales piden prestado en monedas de tasa baja para colocarse en deuda gubernamental mexicana en pesos, estrategia conocida como 'Carry Trade', la cual fortalece al peso. 2) Cuentas externas: flujos de remesas familiares (superando los $60,000 millones de USD anuales), exportaciones no petroleras del sector automotriz y manufacturero hacia EE.UU., y flujos de Inversión Extranjera Directa (IED). 3) Efecto Pass-Through (traspaso a precios): cuando el tipo de cambio sufre una depreciación abrupta, los bienes importados de consumo intermedio y final (maquinaria, insumos químicos, maíz, trigo, gasolina y tecnología) se encarecen en pesos, trasladándose a la inflación de mercancías con una elasticidad histórica de entre 0.10 y 0.15 (por cada 10% de depreciación permanente del peso, la inflación puede resentir entre 1.0 y 1.5 puntos porcentuales de incremento).",
        visualType: "usdmxn_passthrough_tool",
        disclaimer: "Educación, no asesoría financiera. El tipo de cambio es altamente volátil y sensible a eventos geopolíticos imprevistos.",
        speakerNotes: "Tener un portafolio 100% en pesos te expone a inflación importada ante una devaluación abrupta. Mantener activos en dólares (como ETFs del S&P 500 en el SIC) actúa como cobertura cambiaria natural.",
        concepts: [
          { term: "Carry Trade", def: "Estrategia donde inversionistas globales toman deuda en divisas con tasas bajas para invertir en monedas emergentes con tasas altas, capturando el diferencial." },
          { term: "Diferencial de Tasas (Spread Banxico-Fed)", def: "Brecha en puntos básicos entre la tasa de interés de Banxico y la tasa de fondos federales de EE.UU." },
          { term: "Efecto Pass-Through", def: "Porcentaje de una fluctuación en el tipo de cambio que se transfiere efectivamente a los precios al consumidor final a través de importaciones." },
          { term: "Cobertura Cambiaria Natural", def: "Inversión en activos denominados en moneda dura (USD) para proteger el poder adquisitivo frente a depreciaciones del peso." }
        ],
        realExample: {
          asset: "Dinámica del USD/MXN: Del 'Superpeso' al Ajuste por Tasas y Política",
          date: "Periodo 2024 - 2026",
          source: "Banco de Pagos Internacionales (BIS) / Banxico",
          url: "https://www.bis.org/",
          caseDescription: "Durante 2023-2024, el peso mexicano tocó mínimos de $16.60 por dólar impulsado por un carry trade histórico de más de 600 puntos básicos frente a la Fed y remesas récord. Al comprimirse el diferencial de tasas con los recortes de Banxico y aumentar la incertidumbre electoral, el tipo de cambio rebotó hacia niveles de $19.00 - $20.00, encareciendo insumos importados y demostrando la importancia de diversificar internacionalmente."
        },
        deliverableExercise: {
          title: "Matriz de Sensibilidad Cambiaria de tu Portafolio",
          description: "Desglosa tu portafolio actual entre activos denominados en MXN (Cetes, FIBRAS, Sofipos) y activos dolarizados o en moneda extranjera (ETFs del SIC como VOO o QQQ). Calcula el impacto en valor patrimonial si el dólar sube a $22.00 MXN o baja a $17.50 MXN."
        },
        quizzes: [
          {
            question: "¿Qué es el 'Carry Trade' y por qué suele fortalecer al peso mexicano frente al dólar?",
            options: [
              "Una tarifa que cobran los aeropuertos por transportar dólares en maletas.",
              "Una estrategia financiera donde fondos globales toman prestado dinero a tasas bajas (ej. en dólares o yenes) para invertir en activos en pesos que pagan tasas elevadas, comprando pesos masivamente en el mercado.",
              "Un subsidio directo de la Secretaría de Hacienda a importadores de granos.",
              "El intercambio de materias primas por criptomonedas."
            ],
            correct: 1,
            explanation: "Al haber un spread de tasas amplio y atractivo a favor de México, el flujo de dólares hacia pesos para comprar instrumentos soberanos aprecia la moneda local."
          },
          {
            question: "¿A qué se refiere el efecto de 'Traspaso Cambiario' o 'Pass-Through' en macroeconomía?",
            options: [
              "Al costo de transferir dinero entre dos cuentas de banco mexicanas.",
              "A la proporción en que un aumento en el tipo de cambio (depreciación del peso) se traslada a los precios al consumidor mediante el encarecimiento de bienes e insumos importados.",
              "Al impuesto que se paga al cruzar la frontera en automóvil.",
              "A la conversión automática de puntos de tarjeta de crédito a millas aéreas."
            ],
            correct: 1,
            explanation: "Cuando el peso pierde valor frente al dólar, los productos importados (desde trigo hasta componentes electrónicos) se vuelven más caros en pesos, presionando la inflación local."
          },
          {
            question: "Si tu portafolio está invertido en un ETF que sigue al S&P 500 cotizado en pesos a través del SIC, ¿qué ocurre si el dólar se aprecia un 10% frente al peso y el índice en EE.UU. no se mueve?",
            options: [
              "Tu posición en pesos mexicanos pierde un 10%.",
              "Tu posición en pesos mexicanos aumenta aproximadamente un 10% debido a la ganancia cambiaria, protegiendo tu patrimonio.",
              "El banco congela tus títulos por fluctuación ilegal.",
              "No ocurre nada porque los ETFs en pesos ignoran el tipo de cambio."
            ],
            correct: 1,
            explanation: "El activo subyacente está valuado en dólares; si el dólar se revalúa frente al peso, el valor del título en pesos mexicanos se incrementa proporcionalmente."
          }
        ]
      },
      {
        title: "La Reserva Federal (Fed), Tasas Globales y Rendimientos de los Bonos del Tesoro (Treasuries)",
        content: "El epicentro del costo de capital mundial: la tasa libre de riesgo a 10 años y la mecánica de la liquidez internacional.",
        details: "El Federal Reserve System (la Fed) y su Comité Federal de Mercado Abierto (FOMC) regulan el costo de la moneda de reserva global: el dólar estadounidense. La tasa de los Bonos del Tesoro de EE.UU. a 10 años (US 10-Year Treasury Yield) se considera en las finanzas corporativas mundiales como el 'Activo Libre de Riesgo Soberano' (Risk-Free Rate). Cada modelo de valuación con descuento de flujos (DCF), cada tasa de descuento WACC y cada múltiplo de cotización bursátil utiliza directa o indirectamente este rendimiento como piso base. Cuando el rendimiento del Treasury a 10 años sube abruptamente (por ejemplo, de 3.5% a 5.0%), el valor presente de las utilidades futuras se desploma, impactando con severidad a las compañías de crecimiento tecnológico (Growth y Nasdaq) que esperan generar gran parte de sus ganancias en el futuro distante. Debes saber auditar tres herramientas oficiales de la Fed: 1) El 'Dot Plot' (diagrama de puntos publicado trimestralmente en el Resumen de Proyecciones Económicas, donde cada uno de los 19 miembros del FOMC proyecta anónimamente dónde espera que esté la tasa en los próximos tres años y a largo plazo). 2) La herramienta CME FedWatch Tool, que calcula en tiempo real las probabilidades de recortes o alzas de tasas implícitas en los contratos de futuros de Fondos Federales. 3) La contracción o expansión del balance de la Fed (Quantitative Tightening vs Quantitative Easing), el cual inyecta o retira liquidez del sistema bancario mundial.",
        visualType: "fed_dotplot_treasury_tool",
        disclaimer: "Educación, no asesoría financiera. Las tasas de interés de los bonos del tesoro cotizan libremente en los mercados internacionales.",
        speakerNotes: "El rendimiento del bono a 10 años de EE.UU. es la gravedad de los mercados. Cuando la tasa sube, la gravedad aumenta y todos los múltiplos de valuación caen; cuando baja, los activos de riesgo flotan hacia arriba.",
        concepts: [
          { term: "US 10-Year Treasury Yield", def: "Rendimiento del bono del tesoro estadounidense a 10 años; es la tasa libre de riesgo sobre la que se descuentan los activos financieros globales." },
          { term: "Dot Plot de la Fed", def: "Gráfico de puntos publicado trimestralmente que refleja las expectativas individuales de tasa de interés de los miembros del FOMC." },
          { term: "CME FedWatch", def: "Barómetro de probabilidades de mercado derivado de los precios de negociación de futuros sobre tasas de interés de la Fed." },
          { term: "Quantitative Tightening (QT)", def: "Proceso mediante el cual la Fed no reinvierte los bonos que vencen en su balance, retirando dólares de circulación del sistema bancario." }
        ],
        realExample: {
          asset: "El Shock de Tasas del Tesoro y la Corrección del Nasdaq",
          date: "Análisis Histórico 2022 - 2026",
          source: "U.S. Department of the Treasury / Federal Reserve Board",
          url: "https://home.treasury.gov/",
          caseDescription: "En 2022, cuando la Fed incrementó agresivamente las tasas para combatir una inflación del 9.1% y el Treasury a 10 años escaló desde 1.5% hasta superar el 4.2%, las acciones del sector tecnológico global (ETF QQQ) sufrieron una corrección del 33%, demostrando la relación matemática inversa entre la tasa de descuento libre de riesgo y los múltiplos bursátiles P/E."
        },
        deliverableExercise: {
          title: "Auditoría de Expectativas de la Fed con FedWatch",
          description: "Entra a la herramienta pública CME FedWatch Tool o revisa las proyecciones del FOMC. Anota: 1) Tasa actual de fondos federales, 2) Probabilidad asignada por el mercado para la próxima reunión, 3) Número de recortes/alzas esperados para el cierre del año. Evalúa el impacto en activos de riesgo."
        },
        quizzes: [
          {
            question: "¿Por qué el rendimiento del Bono del Tesoro de EE.UU. a 10 años (US 10-Year Treasury) se denomina el 'Activo Libre de Riesgo Global'?",
            options: [
              "Porque garantiza por ley que las acciones de Wall Street nunca bajen.",
              "Porque está respaldado por la capacidad tributaria y de emisión de la mayor economía del planeta, sirviendo de tasa de descuento fundamental (Risk-Free Rate) en modelos financieros.",
              "Porque no paga ningún tipo de interés a los tenedores.",
              "Porque es una criptomoneda respaldada por reservas de oro."
            ],
            correct: 1,
            explanation: "Se asume riesgo cero de crédito en dólares, estableciendo el rendimiento mínimo que cualquier inversionista debe exigir antes de asumir riesgo en otros instrumentos."
          },
          {
            question: "¿Qué es el 'Dot Plot' publicado por la Reserva Federal estadounidense?",
            options: [
              "Un mapa de satélite con las sucursales de bancos que operan en Wall Street.",
              "Un gráfico donde cada uno de los integrantes del Comité de Mercado Abierto (FOMC) plasma de forma anónima su proyección personal de tasa de interés para los años venideros.",
              "Una lista de los inversores más ricos de la bolsa de Nueva York.",
              "Un indicador técnico para detectar soportes en gráficos de velas."
            ],
            correct: 1,
            explanation: "El Dot Plot revela hacia dónde cree la propia Junta de la Fed que se moverán las tasas, guiando las expectativas de largo plazo de los mercados de deuda y renta variable."
          },
          {
            question: "Desde la óptica de valuación por descuento de flujos de caja, ¿qué le ocurre típicamente a las empresas tecnológicas de alto crecimiento cuando el bono a 10 años sube drásticamente?",
            options: [
              "Sus utilidades suben automáticamente porque venden más software.",
              "Sus valuaciones se contraen severamente porque sus flujos de caja futuros se descuentan con una tasa más alta, reduciendo su valor presente.",
              "La SEC las obliga a fusionarse con empresas petroleras.",
              "No sufren ningún efecto porque las empresas tecnológicas no usan dinero."
            ],
            correct: 1,
            explanation: "A mayor tasa de descuento, menor valor presente de las utilidades que la compañía generará en 5 o 10 años, castigando los múltiplos P/E del sector tecnológico."
          }
        ]
      },
      {
        title: "Indicadores Adelantados: IMEF Manufacturero, PMI y Curva de Rendimientos Invertida",
        content: "Anticipa la desaceleración o el auge: deja de mirar el retrovisor del PIB rezagado y lee las señales que guían a las mesas de dinero.",
        details: "El Producto Interno Bruto (PIB) y las cifras de desempleo son indicadores económicos rezagados (lagging indicators): cuando se anuncian oficialmente, la contracción o el auge ya lleva meses ocurriendo en la economía real. Los gestores profesionales de portafolio se basan en Indicadores Adelantados (leading indicators) para tomar decisiones tácticas antes de que las masas se enteren: 1) El Indicador IMEF en México (elaborado por el Instituto Mexicano de Ejecutivos de Finanzas) y los Índices de Gestores de Compras (PMI de S&P Global y el ISM en EE.UU.). Se construyen encuestando a directores de compras de cientos de corporaciones sobre nuevos pedidos, producción, inventarios y empleo. La métrica tiene un punto de inflexión universal en 50.0 puntos: cifras por encima de 50 indican expansión fabril o de servicios, mientras que registros por debajo de 50 marcan contracción económica activa. 2) La Curva de Rendimientos Invertida (Yield Curve Inversion): en condiciones normales, prestar dinero a 10 o 30 años exige una tasa de rendimiento superior a prestarlo a 3 meses o 2 años para compensar la prima por plazo e incertidumbre. Cuando las tasas cortas rinden más que las largas (spread 10Y - 2Y negativo), el mercado de bonos está descontando que la economía sufrirá una desaceleración pronunciada que forzará recortes de tasas en el futuro. Este fenómeno ha precedido con notable consistencia estadística casi todas las recesiones de EE.UU. en las últimas 7 décadas.",
        visualType: "leading_indicators_tool",
        disclaimer: "Educación, no asesoría financiera. Los indicadores adelantados brindan probabilidades estadísticas, no certezas matemáticas sobre fechas exactas de recesión.",
        speakerNotes: "El desfase entre la inversión de la curva de rendimientos y el inicio de una recesión suele oscilar entre 12 y 24 meses. A menudo el mercado bursátil continúa subiendo durante meses tras la primera inversión.",
        concepts: [
          { term: "Indicador Adelantado (Leading Indicator)", def: "Métrica económica que cambia de rumbo antes de que la economía en su conjunto comience a seguir un patrón de crecimiento o contracción." },
          { term: "Umbral de 50 Puntos en PMI/IMEF", def: "Línea divisoria universal: valores superiores a 50 señalan expansión económica; valores inferiores indican contracción." },
          { term: "Curva de Rendimientos Invertida", def: "Anomalía en los mercados de bonos donde los títulos de deuda de corto plazo ofrecen un rendimiento superior a los títulos de largo plazo." },
          { term: "Spread 10Y - 2Y", def: "Diferencia matemática de tasa entre el bono del tesoro a 10 años y el bono a 2 años; cuando es menor a cero, la curva está invertida." }
        ],
        realExample: {
          asset: "La Inversión Histórica de la Curva de Rendimientos 2022 - 2024",
          date: "Seguimiento Macroeconómico de la Curva de Rendimientos",
          source: "Federal Reserve Bank of St. Louis (FRED)",
          url: "https://fred.stlouisfed.org/",
          caseDescription: "En julio de 2022, la curva 10Y-2Y se invirtió por completo alcanzando un diferencial negativo de más de -100 puntos básicos (la inversión más profunda desde 1981). Los inversionistas institucionales utilizaron esta alerta para reducir apalancamiento, aumentar reservas de liquidez a tasas elevadas del 5% y reconfigurar sus portafolios hacia empresas con balances impecables sin deuda flotante."
        },
        deliverableExercise: {
          title: "Monitoreo del Semáforo Macroeconómico Adelantado",
          description: "Consulta las últimas lecturas disponibles de: 1) Indicador IMEF Manufacturero en México, 2) PMI Manufacturero ISM en EE.UU., 3) Spread del bono a 10 años menos bono a 2 años (10Y-2Y). Clasifica el semáforo como Verde (Expansión), Amarillo (Alerta de Desaceleración) o Rojo (Contracción Activa)."
        },
        quizzes: [
          {
            question: "¿Qué lectura en el Indicador IMEF (México) o PMI/ISM (EE.UU.) marca la frontera entre expansión y contracción económica?",
            options: [
              "Exactamente 0 puntos.",
              "Exactamente 50 puntos (por encima indica expansión, por debajo contracción).",
              "100 puntos obligatorios.",
              "Depende de la estación del año."
            ],
            correct: 1,
            explanation: "El nivel de 50.0 es el punto de referencia neutral absoluto en los índices de gestores de compras a escala global."
          },
          {
            question: "¿Por qué una 'Curva de Rendimientos Invertida' (tasas cortas superiores a tasas largas) es una señal de alarma para los mercados?",
            options: [
              "Porque indica que los bancos centrales están regalando dinero sin control.",
              "Porque el mercado de bonos descuenta que las tasas actuales son insosteniblemente restrictivas y que la economía entrará en recesión, forzando recortes de tasas en el futuro.",
              "Porque la bolsa de valores dejará de operar por 6 meses.",
              "Porque significa que la inflación ha desaparecido para siempre."
            ],
            correct: 1,
            explanation: "Los inversionistas corren a comprar bonos de largo plazo para amarrar rendimientos antes de que la recesión golpee y las tasas se desplomen, hundiendo los rendimientos largos por debajo de los cortos."
          },
          {
            question: "¿Cuál es la diferencia crítica entre un indicador 'Adelantado' (Leading) y uno 'Rezagado' (Lagging)?",
            options: [
              "Los adelantados se miden en dólares y los rezagados en pesos.",
              "Los adelantados anticipan giros en la actividad productiva antes de que ocurran, mientras que los rezagados (como el PIB o el desempleo) confirman eventos que ya sucedieron en el pasado.",
              "No existe ninguna diferencia práctica.",
              "Los adelantados solo son válidos para empresas automotrices."
            ],
            correct: 1,
            explanation: "Esperar a ver cifras de recesión en el PIB oficial es llegar tarde; los inversionistas exitosos operan en base a señales adelantadas como órdenes y encuestas de compras."
          }
        ]
      },
      {
        title: "Ciclos de Rotación Sectorial en BMV y Wall Street (Defensivos vs Cíclicos vs Tecnológicos)",
        content: "La 'Rueda del Mercado': cómo reasignan su capital los grandes fondos según las cuatro estaciones del ciclo económico.",
        details: "El capital institucional no abandona los mercados por completo en tiempos turbulentos: simplemente rota de un sector a otro. La Teoría de la Rotación Sectorial demuestra que diferentes industrias prosperan en momentos específicos de las 4 fases del ciclo macroeconómico: 1) Recuperación Temprana (Early-Cycle): la economía sale de la recesión gracias a bajas tasas y estímulos; los sectores líderes son Consumo Discrecional (autos, retail), Servicios Financieros/Bancos (reactivación de créditos) y Bienes Raíces. 2) Mitad del Ciclo / Expansión (Mid-Cycle): el crecimiento económico alcanza velocidad de crucero; el liderazgo rota hacia Tecnologías de la Información, Telecomunicaciones y Bienes Industriales impulsados por inversiones de capital. 3) Ciclo Tardío / Sobrecalentamiento (Late-Cycle): el crecimiento se desacelera pero la inflación sube y las tasas se mantienen restrictivas; los sectores ganadores son Energía (petróleo, gas), Materiales Básicos y Minería (cobertura inflacionaria). 4) Recesión / Contracción (Recession): la demanda se desploma; el dinero inteligente se refugia en Sectores Defensivos cuya demanda es inelástica (la gente no deja de comprar medicamentos, pasta dental o electricidad sin importar la crisis): Salud (Health Care), Consumo Básico (Consumer Staples como Walmex, Coca-Cola Femsa o P&G) y Servicios Públicos (Utilities). En la BMV, acciones de consumo masivo con caja sólida muestran betas inferiores a 0.7 en recesiones.",
        visualType: "sector_rotation_clock_tool",
        disclaimer: "Educación, no asesoría financiera. La duración y secuencia de las fases del ciclo pueden variar por políticas gubernamentales y shocks exógenos.",
        speakerNotes: "Intentar predecir el techo exacto del mercado es infructuoso; aprender a detectar la rotación hacia sectores defensivos te permite proteger el capital sin salirte a liquidez al 100%.",
        concepts: [
          { term: "Rotación Sectorial", def: "Reasignación estratégica de capital institucional entre los diferentes sectores de la economía en función de la etapa del ciclo macroeconómico." },
          { term: "Sectores Defensivos", def: "Industrias con demanda inelástica cuyos ingresos y dividendos permanecen estables durante recesiones (Salud, Consumo Básico, Utilities)." },
          { term: "Sectores Cíclicos", def: "Compañías cuyos beneficios fluctúan intensamente con el PIB general (Consumo Discrecional, Automotriz, Construcción, Aerolíneas)." },
          { term: "Reloj de Inversión (Investment Clock)", def: "Modelo desarrollado por Merrill Lynch que mapea la interacción entre crecimiento económico e inflación para seleccionar activos óptimos." }
        ],
        realExample: {
          asset: "El Gran Desempeño Defensivo en el Colapso de 2022",
          date: "Comparativa Sectorial S&P 500 / BMV",
          source: "S&P Global Market Intelligence",
          url: "https://www.spglobal.com/",
          caseDescription: "Durante el difícil año 2022, mientras el índice general S&P 500 cayó un 19% y el tecnológico Nasdaq se desplomó un 33%, el sector de Energía (XLE) subió un extraordinario +59% y el sector de Salud y Consumo Básico se mantuvo prácticamente plano con dividendos seguros, demostrando que estar diversificado sectorialmente previene drawdowns catastróficos."
        },
        deliverableExercise: {
          title: "Auditoría de Sensibilidad Sectorial de tu Portafolio",
          description: "Clasifica las acciones o ETFs que posees en las cuatro categorías: Defensivos (Consumo Básico, Salud), Cíclicos (Discrecional, Industriales, Financieros), Crecimiento (Tecnología) o Inflacionarios (Energía, Materiales). Evalúa si tu cartera soportaría una recesión severa sin quebrarse."
        },
        quizzes: [
          {
            question: "¿Cuáles de los siguientes sectores bursátiles se consideran institucionalmente 'Defensivos' ante una recesión económica?",
            options: [
              "Aerolíneas, hoteles de lujo y comercio electrónico experimental.",
              "Consumo Básico (alimentos/supermercados), Salud (medicamentos/hospitales) y Servicios Públicos (agua/electricidad).",
              "Semiconductores y criptomonedas especulativas.",
              "Constructores de vivienda residencial de lujo."
            ],
            correct: 1,
            explanation: "La demanda de alimentos básicos, servicios médicos y energía eléctrica es inelástica: las familias continúan pagándolos incluso en medio de caídas pronunciadas del empleo."
          },
          {
            question: "En la fase temprana de recuperación económica (Early-Cycle), cuando los bancos centrales bajan tasas para reactivar el crédito, ¿qué sectores suelen liderar las ganancias?",
            options: [
              "Consumo Discrecional, Servicios Financieros/Bancos e Inmobiliario.",
              "Empresas en quiebra técnica.",
              "Sectores que únicamente venden oro físico.",
              "Ningún sector se mueve jamás."
            ],
            correct: 0,
            explanation: "Las tasas bajas reducen los costos de financiamiento hipotecario y automotriz, reactivando la demanda de bienes duraderos y el volumen de créditos de las instituciones financieras."
          },
          {
            question: "¿Por qué las empresas de 'Consumo Básico' en la BMV (como Walmex o Bimbo) suelen tener una Beta menor a 1.0?",
            options: [
              "Porque la ley mexicana les prohíbe subir de precio.",
              "Porque sus ingresos no dependen de que la economía esté en auge o en crisis; la gente sigue comiendo pan y comprando despensa, lo que amortigua su volatilidad bursátil.",
              "Porque no cotizan en los mercados internacionales.",
              "Porque sus acciones solo se compran en efectivo."
            ],
            correct: 1,
            explanation: "Al tener una demanda altamente inelástica, su facturación y flujo de caja son resistentes a las fluctuaciones del ciclo económico general."
          }
        ]
      },
      {
        title: "Megatendencias Globales: Relocalización (Nearshoring en México) e Inteligencia Artificial",
        content: "Identifica los vientos de cola estructurales de 10 a 20 años: infraestructura logística del norte del país y la revolución de capital de la IA.",
        details: "Las megatendencias son fuerzas transformadoras socioeconómicas y tecnológicas de escala masiva que operan de forma independiente a las oscilaciones cíclicas de corto plazo. Dos megatendencias dominan la asignación de capital para la próxima década: 1) Nearshoring (Relocalización de cadenas de suministro hacia México): impulsado por la fricción geopolítica entre EE.UU. y China, la vigencia del T-MEC, los crecientes costos de transporte marítimo transpacífico y la necesidad de cadenas 'Just-in-Time'. México se ha consolidado como el principal socio comercial de EE.UU. Los sectores receptores de valor tangible en los mercados locales son: FIBRAS inmobiliarias industriales (parques fabriles y naves logísticas en Monterrey, Ciudad Juárez, Tijuana y el Bajío con tasas de ocupación que superan el 97% y contratos dolarizados), materiales de construcción pesada (CEMEX), operadores de puertos/ferrocarriles y aeropuertos (OMA, GAP, ASUR). 2) La Revolución de la Inteligencia Artificial: monetización institucional estructurada en tres capas de capital: Capa 1 (Infraestructura de hardware y chips: Nvidia, TSMC, ASML, Broadcom). Capa 2 (Hiperescaladores y servidores cloud con billones en CapEx: Microsoft Azure, Amazon AWS, Google Cloud). Capa 3 (Software de aplicación y productividad corporativa). Aprende a distinguir entre inversión temática fundamentada en flujo de caja libre vs el 'Hype Cycle' especulativo de Gartner.",
        visualType: "megatrends_matrix_tool",
        disclaimer: "Educación, no asesoría financiera. Invertir en megatendencias exige valuación disciplinada para no pagar múltiplos inflados por euforia.",
        speakerNotes: "En el Nearshoring, los ganadores seguros no son quienes prometen construir fábricas en 5 años, sino los dueños de los terrenos y parques industriales donde esas fábricas tienen que asentarse forzosamente.",
        concepts: [
          { term: "Nearshoring", def: "Estrategia comercial de trasladar operaciones fabriles y de proveeduría a países cercanos al mercado consumidor final para reducir riesgos logísticos." },
          { term: "T-MEC (Tratado México-EE.UU.-Canadá)", def: "Acuerdo de libre comercio que garantiza acceso arancelario preferencial a los bienes manufacturados en territorio mexicano." },
          { term: "CapEx en Inteligencia Artificial", def: "Gasto de capital colosal en semiconductores, centros de datos y suministro eléctrico para entrenar y ejecutar modelos de IA." },
          { term: "Hype Cycle de Gartner", def: "Representación gráfica de las etapas de adopción y madurez de nuevas tecnologías, desde el entusiasmo desmedido hasta la productividad real." }
        ],
        realExample: {
          asset: "El Boom Inmobiliario Industrial en FIBRAS del Norte de México",
          date: "Métricas Reales de Ocupación 2024 - 2026",
          source: "Asociación Mexicana de Parques Industriales Privados (AMPIP)",
          url: "https://ampip.org.mx/",
          caseDescription: "FIBRAS industriales como Fibra Prologis ($FIBRAPL), Terrafina y Fibra Monterrey registraron tasas de ocupación superiores al 97.5% con incrementos de rentas en dólares de doble dígito al renovar contratos, debido a que corporaciones multinacionales automotrices, electrónicas y aeroespaciales compitieron por cada metro cuadrado de naves industriales disponible en la frontera mexicana."
        },
        deliverableExercise: {
          title: "Evaluación de Exposición a Megatendencias",
          description: "Revisa tu cartera de inversión y detecta: 1) ¿Qué porcentaje de tu capital está expuesto al Nearshoring (FIBRAS industriales mexicanas, infraestructura)? 2) ¿Qué porcentaje está invertido en la cadena de valor de Inteligencia Artificial (semiconductores o computación en la nube)? Elabora una conclusión de riesgo/oportunidad."
        },
        quizzes: [
          {
            question: "¿Cuál es el principal motor económico y geopolítico detrás del fenómeno del 'Nearshoring' en México?",
            options: [
              "Una ley que obliga a todos los ciudadanos de EE.UU. a vacacionar en Cancún.",
              "La necesidad de empresas globales de acercar sus plantas manufactureras a EE.UU. bajo el amparo del T-MEC, reduciendo costos de fletes y evitando la vulnerabilidad de depender de cadenas de suministro en Asia.",
              "El deseo de pagar los salarios más altos del mundo en dólares.",
              "Una orden directa del Fondo Monetario Internacional para cerrar puertos marítimos."
            ],
            correct: 1,
            explanation: "La proximidad geográfica con el mayor consumidor mundial y las ventajas arancelarias del T-MEC convierten a México en el destino geográfico natural para la relocalización de fábricas."
          },
          {
            question: "En la Bolsa Mexicana de Valores (BMV), ¿cuál de los siguientes vehículos de inversión ha capitalizado de forma más directa el flujo de rentas generado por el Nearshoring?",
            options: [
              "Empresas de venta por catálogo de ropa.",
              "FIBRAS Inmobiliarias con naves y parques industriales en la frontera norte y corredores logísticos (como Prologis o FMTY).",
              "Bancos que no operan en el norte del país.",
              "Cetes a 28 días únicamente."
            ],
            correct: 1,
            explanation: "Las FIBRAS industriales poseen las naves y bodegas que las multinacionales rentan a largo plazo (frecuentemente en dólares) para ensamblar sus productos."
          },
          {
            question: "Al analizar la megatendencia de la Inteligencia Artificial desde la óptica de asignación de capital, ¿por qué los gigantes de semiconductores (Capa 1) fueron los primeros en reflejar utilidades masivas?",
            options: [
              "Porque la IA no requiere electricidad ni software.",
              "Porque independientemente de qué modelo de lenguaje o software gane la carrera en el futuro, todos requieren forzosamente comprar chips y procesadores avanzados para operar.",
              "Porque el gobierno les donó todas las acciones de Wall Street.",
              "Porque la inteligencia artificial sustituyó a la moneda fiduciaria."
            ],
            correct: 1,
            explanation: "Es el clásico modelo de 'vender picos y palas en la fiebre del oro': los fabricantes de procesadores y hardware cobran en efectivo desde el primer día de la construcción de infraestructura."
          }
        ]
      },
      {
        title: "Macroeconomía sin Pronósticos: Matriz de 3 Escenarios (Base, Optimista y Recesivo)",
        content: "Abandona la bola de cristal: cómo gestionan los portafolios institucionales mediante modelos probabilísticos de resiliencia.",
        details: "Uno de los mayores errores del inversionista aficionado es basar sus decisiones de compra y venta en pronósticos macroeconómicos certeros que casi nunca se cumplen. Los gestores de fondos de cobertura y comités patrimoniales no apuestan a un único desenlace: diseñan una 'Matriz Probabilística de Tres Escenarios' y someten su portafolio a pruebas de estrés (stress testing) para asegurar la supervivencia y el crecimiento en cualquiera de ellos: 1) Escenario Base (probabilidad estimada ~50%): el consenso macroeconómico; crecimiento moderado del PIB, inflación convergiendo gradualmente a metas, recortes de tasas graduales. En este entorno, los activos diversificados (Core-Satellite con ETFs globales y Cetes) entregan retornos estables y predecibles. 2) Escenario Optimista / Bull (probabilidad estimada ~25%): incremento sorpresivo de productividad impulsado por tecnología e IA, desinflación benigna rápida, márgenes corporativos en máximos históricos y despegue de la renta variable. 3) Escenario Adverso / Bear / Recesivo (probabilidad estimada ~25%): shock geopolítico imprevisto, estanflación (inflación con estancamiento), tasas altas por más tiempo y contracción de utilidades de doble dígito. La regla de oro es auditar que tu cartera cuente con 'activos amortiguadores' (Cetes a tasa fija de largo plazo, bonos soberanos, oro físico o coberturas con opciones put) para que, en caso de materializarse el peor escenario, el drawdown no te fuerce a capitular.",
        visualType: "scenario_matrix_tool",
        disclaimer: "Educación, no asesoría financiera. La asignación por escenarios busca mitigar riesgos extremos, no garantizar rendimientos positivos permanentes.",
        speakerNotes: "El éxito de largo plazo no consiste en adivinar qué pasará mañana, sino en estar estructurado de tal forma que no te arruines si pasa lo peor.",
        concepts: [
          { term: "Matriz de Escenarios", def: "Metodología de gestión de riesgos que asigna probabilidades a múltiples desenlaces macroeconómicos posibles para calibrar el portafolio." },
          { term: "Prueba de Estrés (Stress Testing)", def: "Simulación cuantitativa del impacto que tendrían shocks extremos de mercado (ej. alza del dólar de 30% o caída bursátil de 40%) sobre tu patrimonio." },
          { term: "Estanflación (Stagflation)", def: "Combinación macroeconómica tóxica de estancamiento económico con alta inflación y desempleo persistente." },
          { term: "Asignación Anti-Frágil", def: "Construcción de cartera diseñada para limitar caídas en escenarios adversos y capturar ganancias en expansiones." }
        ],
        realExample: {
          asset: "El Fiasco del Consenso de Recesión Inminente de 2023",
          date: "Revisión Histórica de Pronósticos de Wall Street",
          source: "Bloomberg Consensus Surveys 2023 - 2024",
          url: "https://www.bloomberg.com/",
          caseDescription: "A inicios de 2023, más del 85% de los economistas de Wall Street pronosticaron con total certeza que EE.UU. entraría en una recesión inminente. Quienes vendieron sus acciones para refugiarse en efectivo al 100% sufrieron el costo de oportunidad más doloroso de la década: el S&P 500 se disparó más de un 24% y el Nasdaq más de un 43% en ese mismo año, demostrando por qué se debe gestionar por escenarios y jamás por corazonadas de adivinos."
        },
        deliverableExercise: {
          title: "Creación de tu Matriz de 3 Escenarios Macroeconómicos",
          description: "Plantea tus 3 escenarios a 12 meses: 1) Escenario Base (probabilidad 50%), 2) Escenario Alcista (probabilidad 25%), 3) Escenario Recesivo (probabilidad 25%). Para cada uno, escribe qué porcentaje de retorno proyectas en tu portafolio y qué medidas preventivas tienes ya implementadas."
        },
        quizzes: [
          {
            question: "¿Por qué los gestores de fondos institucionales utilizan una 'Matriz de Escenarios' en lugar de intentar adivinar un pronóstico único?",
            options: [
              "Porque la ley prohíbe emitir opiniones económicas.",
              "Porque los pronósticos económicos puntuales tienen un margen de error enorme; la gestión profesional busca preparar el portafolio para sobrevivir y prosperar en múltiples futuros posibles.",
              "Porque así cobran el triple de comisiones a los clientes.",
              "Porque los sistemas de cómputo no admiten números únicos."
            ],
            correct: 1,
            explanation: "Nadie puede saber el futuro con certeza matemática. Estar preparado probabilísticamente para escenarios base, alcistas y recesivos evita pérdidas irreparables."
          },
          {
            question: "¿Qué es una 'Prueba de Estrés' (Stress Test) aplicada a una cartera de inversión personal?",
            options: [
              "Hacer ejercicio intenso mientras se revisan las cotizaciones en el teléfono.",
              "Simular numéricamente cómo reaccionaría el valor total de tu patrimonio si ocurriera una crisis grave (ej. colapso bursátil de 35% o salto en tasas de interés), verificando si resistirías sin vender en pánico.",
              "Un examen médico obligatorio para comprar bonos de deuda.",
              "Dejar de invertir durante tres meses para relajarse."
            ],
            correct: 1,
            explanation: "El stress test te revela de antemano el impacto de caídas severas para que ajustes tus coberturas y porcentajes de efectivo antes de que la tormenta ocurra."
          },
          {
            question: "¿Qué fenómeno económico define a la 'Estanflación' (Stagflation)?",
            options: [
              "Crecimiento económico explosivo con deflación de precios.",
              "Estancamiento o contracción económica con desempleo elevado acompañado simultáneamente por altas presiones inflacionarias.",
              "La desaparición del dinero en efectivo en un país.",
              "Un periodo de 10 años donde las tasas de interés se mantienen exactamente en 0%."
            ],
            correct: 1,
            explanation: "La estanflación es el escenario más complejo para los bancos centrales, ya que subir tasas para frenar precios perjudica aún más al empleo, y bajarlas empeora la inflación."
          }
        ]
      },
      {
        title: "Anatomía de las Grandes Crisis Históricas: Dot-Com (2000), Subprime (2008), Pandemia (2020) e Inflación (2022)",
        content: "Estudio forense de los cuatro grandes colapsos modernos: detonantes, duración del drawdown, tiempo de recuperación y lecciones de supervivencia.",
        details: "Quien no comprende la historia de los colapsos financieros está condenado a cometer el error capital de los novatos: vender con pérdidas monumentales en el punto más oscuro de la capitulación. El análisis forense de los cuatro grandes colapsos del siglo XXI revela patrones universales: 1) Crisis de las Dot-Com (2000-2002): detonada por valuaciones irracionales en empresas de internet sin utilidades ni flujo de caja libre. El índice Nasdaq se desplomó un -78% y tardó casi 15 años en recuperar sus máximos nominales; la lección indeleble fue que las valuaciones y el flujo de caja real importan. 2) Gran Crisis Financiera Subprime (2007-2009): colapso sistémico del crédito hipotecario estructurado y quiebra de gigantes como Lehman Brothers; el S&P 500 cayó un -57% durante 17 meses de agonía, recuperando sus niveles en 4 años gracias a rescates bancarios masivos. 3) Crash Pandemia COVID-19 (marzo 2020): el colapso más vertiginoso de la historia (-34% en apenas 23 sesiones hábiles) seguido por una recuperación en 'V' sin precedentes financiada por inyecciones monetarias globales de billones de dólares. 4) Crisis de Inflación y Tasas (2022): la ruptura del portafolio tradicional 60/40; tanto las acciones (-19%) como los bonos soberanos (-16%) cayeron simultáneamente al subir las tasas la Fed. El patrón común absoluto: el mercado bursátil siempre toca fondo y despega meses antes de que los indicadores económicos reales o las noticias periodísticas comiencen a mejorar.",
        visualType: "crisis_anatomy_tool",
        disclaimer: "Educación, no asesoría financiera. Rendimientos y patrones pasados no garantizan comportamientos idénticos en eventos futuros.",
        speakerNotes: "El dinero no desaparece en una crisis; simplemente cambia de manos de los impacientes y asustados hacia los pacientes, disciplinados y bien capitalizados.",
        concepts: [
          { term: "Drawdown Máximo (MDD)", def: "Caída porcentual acumulada desde el punto máximo histórico de un activo o portafolio hasta su punto más bajo antes de recuperarse." },
          { term: "Capitulación del Mercado", def: "Momento de pánico extremo donde los inversionistas rinden sus posiciones vendiendo a cualquier precio, señalando con frecuencia el suelo del mercado." },
          { term: "Recuperación en 'V' vs 'U' vs 'L'", def: "Geometría del rebote bursátil y económico: rebote inmediato ('V'), recuperación lenta tras periodo de fondo ('U') o estancamiento prolongado ('L')." },
          { term: "Falla de la Cartera 60/40 en 2022", def: "Episodio histórico donde la correlación positiva entre bonos y acciones causó que ambos activos sufrieran caídas de doble dígito al mismo tiempo." }
        ],
        realExample: {
          asset: "El Comportamiento del Inversionista Disciplinado en la Crisis de 2008",
          date: "Estudio de Retornos Acumulados 2007 - 2024",
          source: "J.P. Morgan Asset Management / Guide to the Markets",
          url: "https://am.jpmorgan.com/",
          caseDescription: "Un inversionista que invirtió en el pico máximo de octubre de 2007 previo al colapso de Lehman Brothers y vio caer su portafolio un -50%, pero mantuvo la calma sin vender y continuó reinvirtiendo dividendos, recuperó su capital en 2012 y para 2024 había multiplicado su patrimonio por más de 4.5x, demostrando que el tiempo en el mercado supera al 'market timing'."
        },
        deliverableExercise: {
          title: "Auditoría de Resistencia a Drawdowns Extremos",
          description: "Calcula en pesos cuánto dinero perderías en papel si tu portafolio actual sufriera una caída del 35% como en marzo de 2020 o del 50% como en 2008. Escribe un protocolo de acción de 3 pasos para asegurar que no venderías tus posiciones en pánico durante ese periodo."
        },
        quizzes: [
          {
            question: "¿Cuál es el patrón histórico común que se repite en prácticamente todas las grandes crisis bursátiles cuando el mercado toca fondo?",
            options: [
              "Las acciones solo tocan fondo cuando todos los noticieros anuncian que la economía está perfecta y no hay desempleo.",
              "El mercado bursátil toca fondo y comienza su rally alcista meses antes de que las cifras económicas oficiales mejoren o de que terminen las malas noticias en los medios.",
              "El gobierno compra el 100% de las empresas que cotizan en bolsa.",
              "Las bolsas mundiales cierran durante un año completo."
            ],
            correct: 1,
            explanation: "El mercado descuenta el futuro, no el presente: cuando las malas noticias dejan de empeorar, el dinero institucional comienza a comprar agresivamente mientras el público aún tiene pánico."
          },
          {
            question: "¿Por qué el año 2022 fue tan doloroso para el portafolio tradicional '60/40' (60% acciones / 40% bonos soberanos)?",
            options: [
              "Porque los bancos confiscaron los fondos de retiro de todo el mundo.",
              "Porque al subir agresivamente las tasas de interés para contener la inflación, tanto las acciones como los bonos cayeron al unísono, rompiendo la diversificación habitual entre ambos activos.",
              "Porque los bonos dejaron de cotizar en dólares.",
              "Porque se prohibió el pago de dividendos en EE.UU."
            ],
            correct: 1,
            explanation: "Históricamente los bonos subían cuando las acciones caían, pero en 2022 el shock de tasas elevadas provocó caídas de doble dígito en ambas clases de activos simultáneamente."
          },
          {
            question: "¿Qué ocurrió con los inversionistas que vendieron todas sus acciones en marzo de 2020 por miedo a la pandemia de COVID-19?",
            options: [
              "Fueron premiados con acciones gratuitas del gobierno.",
              "Cristalizaron pérdidas monumentales de hasta el -30% y se perdieron uno de los rebotes alcistas más rápidos y explosivos de la historia bursátil en los meses siguientes.",
              "Se convirtieron en los mayores millonarios de la bolsa.",
              "Pudieron comprar todas las empresas a precio cero."
            ],
            correct: 1,
            explanation: "Vender en el punto de pánico máximo convierte una pérdida temporal en papel en una pérdida definitiva y real de capital irrecuperable."
          }
        ]
      },
      {
        title: "Proyecto Final: Informe Macroeconómico Mensual de Inversión con Rúbrica Institucional",
        content: "La prueba de fuego del analista y gestor: elabora tu propio 'Macro Investment Memo' para la toma de decisiones profesionales.",
        details: "Para graduarte con honores en FA Academy y obtener tu Certificación Profesional de Experto en Macroeconomía Aplicada y Mercados Globales, debes integrar todos los conocimientos de esta fase en un entregable de nivel institucional: un 'Informe Macroeconómico Mensual de Inversión'. Los comités de inversión de las principales casas de bolsa, fondos de pensiones (Afores) y family offices utilizan este documento para fundamentar la asignación táctica de miles de millones de pesos. Tu informe debe incluir rigurosamente seis pilares: 1) Tesis Central y Resumen Ejecutivo (diagnóstico del momento macroeconómico en 150 palabras). 2) Monitor de Política Monetaria (postura de Banxico y la Fed, diferencial de tasas, balance de riesgos de inflación). 3) Semáforo de Indicadores Adelantados (lecturas del Indicador IMEF, ISM PMI y diferencial de la curva de rendimientos 10Y-2Y). 4) Análisis de Divisas y Liquidez (perspectiva del USD/MXN, remesas y flujos de IED). 5) Matriz de Tres Escenarios a 12 Meses con ponderaciones porcentuales (Base 50%, Alcista 25%, Recesivo 25%). 6) Asignación Táctica de Cartera Propuesta (pesos recomendados en Renta Fija Cetes/Bonos M, FIBRAS industriales, Renta Variable BMV/SIC, coberturas en oro/dólares y liquidez estratégica). Utiliza el constructor interactivo y audita tu entrega con la rúbrica oficial de 5 dimensiones.",
        visualType: "macro_report_builder_tool",
        disclaimer: "Educación, no asesoría financiera. La elaboración de informes macroeconómicos tiene un objetivo formativo y de desarrollo analítico patrimonial.",
        speakerNotes: "Un buen informe no busca predecir el futuro como si fuera magia; su valor radica en estructurar un plan disciplinado con asignación de capital acorde a cada escenario.",
        concepts: [
          { term: "Macro Investment Memorandum", def: "Documento ejecutivo institucional que sintetiza el panorama de política monetaria, inflación y liquidez para guiar compras y ventas de activos." },
          { term: "Comité de Inversiones", def: "Órgano colegiado de una institución financiera o fondo que define colegiadamente las políticas de asignación de activos." },
          { term: "Asignación Táctica de Activos (TAA)", def: "Ajuste temporal en las ponderaciones del portafolio para aprovechar oportunidades o mitigar riesgos macroeconómicos de corto y mediano plazo." },
          { term: "Rúbrica Institucional", def: "Instrumento de evaluación estandarizado de cinco criterios que audita la profundidad, rigor cuantitativo y coherencia analítica del informe." }
        ],
        realExample: {
          asset: "Informes Globales Mensuales de BlackRock y Bridgewater Associates",
          date: "Estándar Institucional Internacional 2026",
          source: "BlackRock Investment Institute / Bridgewater Macro Research",
          url: "https://www.blackrock.com/",
          caseDescription: "Gigantes de la gestión institucional publican mensualmente informes ejecutivos donde condensan proyecciones de tasas, correlaciones sectoriales y matrices de riesgo que determinan los flujos globales de capital hacia mercados emergentes como México o plazas desarrolladas como Wall Street."
        },
        deliverableExercise: {
          title: "Generación del Informe Macroeconómico de Inversión",
          description: "Completa todos los campos del simulador del Constructor de Informes Macroeconómicos en pantalla: redacta tu tesis, selecciona la postura de Banxico/Fed, calibra el semáforo de indicadores adelantados, asigna los porcentajes tácticos para tu portafolio y descarga tu memorándum institucional con rúbrica integrada."
        },
        quizzes: [
          {
            question: "¿Cuál es el propósito medular de un 'Informe Macroeconómico Mensual de Inversión' en un comité de inversión patrimonial?",
            options: [
              "Adivinar el número de la lotería nacional.",
              "Evaluar de manera objetiva y sistemática el entorno de tasas, inflación y crecimiento para fundamentar la asignación táctica de activos y proteger el portafolio ante múltiples escenarios.",
              "Cumplir con un requisito puramente burocrático que nadie lee.",
              "Vender acciones con pérdidas todos los meses."
            ],
            correct: 1,
            explanation: "El informe macroeconómico aterriza los datos globales en decisiones prácticas de compra, venta y ponderación de activos para optimizar el rendimiento y controlar el riesgo."
          },
          {
            question: "¿Qué papel juega la 'Asignación Táctica de Activos' (Tactical Asset Allocation - TAA) dentro de una estrategia patrimonial?",
            options: [
              "Vender toda la cartera cada 24 horas.",
              "Realizar ajustes temporales y deliberados en los pesos de los activos (ej. aumentar liquidez o rotar a sectores defensivos) para aprovechar distorsiones o protegerse de riesgos macroeconómicos identificados.",
              "Comprar exclusivamente billetes de lotería.",
              "Eliminar la necesidad de pagar impuestos para siempre."
            ],
            correct: 1,
            explanation: "La asignación táctica respeta el núcleo de largo plazo (Core) pero aprovecha las fases del ciclo para sobreponderar activos atractivos o subponderar los vulnerables."
          },
          {
            question: "En la evaluación con rúbrica institucional de un memorándum macroeconómico, ¿qué elemento demuestra mayor madurez analítica por parte del estudiante?",
            options: [
              "Afirmar con 100% de certeza que el mercado subirá sin admitir ninguna posibilidad de error.",
              "Presentar una matriz balanceada de escenarios (Base, Alcista y Recesivo) con planes de contingencia claros y fundamentación cuantitativa en datos de Banxico y la Fed.",
              "Copiar y pegar noticias sin citar fuentes.",
              "Utilizar únicamente gráficos de colores sin explicar su significado."
            ],
            correct: 1,
            explanation: "La madurez analítica se evidencia cuando el inversionista reconoce la incertidumbre inherente a los mercados y diseña planes de contingencia para múltiples futuros posibles."
          }
        ]
      }
    ]
  }
];

// --- 10 PREGUNTAS DEL EXAMEN FINAL FASE 8 (CERTIFICACIÓN PROFESIONAL) ---

const finalExamQuestions = [
  {
    question: "1. Conforme al Artículo 28 de la Constitución Política de los Estados Unidos Mexicanos, ¿cuál es el mandato constitucional prioritario e innegociable del Banco de México (Banxico)?",
    options: [
      "Maximizar el valor de las acciones mexicanas en Wall Street.",
      "Garantizar el pleno empleo y subsidiar las tasas de crédito automotriz.",
      "Procurar la estabilidad del poder adquisitivo de la moneda nacional (mantener la inflación baja y estable en la meta del 3% ± 1%).",
      "Fijar el tipo de cambio del dólar en un nivel inamovible."
    ],
    correct: 2,
    explanation: "A diferencia de la Reserva Federal que posee mandato dual, la Carta Magna asigna a Banxico el mandato único prioritario de velar por el poder adquisitivo de los mexicanos mediante el control de la inflación."
  },
  {
    question: "2. ¿Cuántos días naturales después de cada anuncio de decisión de política monetaria publica Banxico sus Minutas oficiales?",
    options: [
      "Exactamente 14 días naturales después.",
      "Al cierre de la sesión bursátil del mismo día.",
      "30 días hábiles después.",
      "Únicamente al término del año fiscal."
    ],
    correct: 0,
    explanation: "El calendario oficial de Banxico estipula con absoluta rigurosidad la difusión de las Minutas 14 días naturales tras la reunión de política monetaria."
  },
  {
    question: "3. ¿Por qué la 'Inflación Subyacente' es el indicador rector que guía las decisiones de tasa de interés de la Junta de Gobierno de Banxico?",
    options: [
      "Porque no incluye los precios de los productos que consumen las familias.",
      "Porque aísla y descuenta los componentes de alta volatilidad estacional (agropecuarios y energéticos), permitiendo observar la tendencia estructural y sostenida de los precios.",
      "Porque es una cifra fija estipulada por el Congreso de la Unión.",
      "Porque solo mide las tarifas del transporte público."
    ],
    correct: 1,
    explanation: "La inflación subyacente elimina los picos temporales por sequías o alzas internacionales del petróleo, mostrando si las presiones de precios son de carácter permanente."
  },
  {
    question: "4. ¿Cuál es la mecánica económica del 'Carry Trade' que históricamente ha favorecido la apreciación del peso mexicano?",
    options: [
      "La importación subsidiada de dólares por parte del Banco Central Europeo.",
      "La entrada de capitales institucionales globales que toman préstamos a tasas bajas en el extranjero para invertir en instrumentos soberanos en pesos con tasas elevadas, capturando el diferencial de tasas.",
      "El intercambio de títulos de deuda por materias primas petroleras.",
      "La venta masiva de pesos mexicanos en las casas de cambio de la frontera."
    ],
    correct: 1,
    explanation: "Al existir un spread atractivo (ej. Banxico en 10% y Fed en 4.5%), el incentivo financiero para comprar pesos e invertir en Cetes o Bonos M fortalece la divisa local."
  },
  {
    question: "5. ¿Qué significa el término macroeconómico 'Pass-Through' (traspaso cambiario) y cómo repercute en los bolsillos de los consumidores?",
    options: [
      "El costo de las comisiones bancarias al pagar en terminales de punto de venta.",
      "La proporción en que una depreciación del peso frente al dólar encarece los productos, insumos y bienes importados, trasladándose gradualmente a la inflación al consumidor.",
      "El descuento que otorgan los comercios en ventas de liquidación.",
      "El tiempo que tarda una transferencia SPEI en liquidarse."
    ],
    correct: 1,
    explanation: "Una devaluación o depreciación abrupta del peso eleva el costo en moneda nacional de materias primas y productos del exterior, presionando al alza el índice nacional de precios al consumidor."
  },
  {
    question: "6. En las finanzas internacionales, ¿por qué el rendimiento de los Bonos del Tesoro de EE.UU. a 10 años (US 10-Year Treasury Yield) se considera la tasa libre de riesgo global?",
    options: [
      "Porque Estados Unidos cuenta con la mayor economía y capacidad soberana de pago en la principal moneda de reserva mundial, fungiendo como el piso base de descuento para cualquier activo financiero.",
      "Porque el bono nunca puede fluctuar de precio bajo ninguna circunstancia.",
      "Porque está exento de cualquier consideración económica.",
      "Porque el gobierno de EE.UU. prohíbe la inversión en otros países."
    ],
    correct: 0,
    explanation: "Es el benchmark supremo del costo de oportunidad del capital en dólares; cuando su rendimiento se incrementa, todos los activos de riesgo sufren presiones a la baja en sus valuaciones presentes."
  },
  {
    question: "7. ¿Qué interpretación institucional tiene una lectura inferior a 50.0 puntos en los indicadores adelantados como el IMEF Manufacturero (México) o el ISM PMI (EE.UU.)?",
    options: [
      "Aceleración insostenible del crecimiento industrial.",
      "Contracción económica activa en el sector encuestado respecto al mes anterior.",
      "Equilibrio monetario absoluto sin ningún cambio.",
      "Fin de la vigencia del tratado de libre comercio."
    ],
    correct: 1,
    explanation: "La cota de 50.0 es el parteaguas formal: lecturas por encima de 50 reflejan expansión; cualquier registro por debajo de 50 señala contracción económica."
  },
  {
    question: "8. ¿Por qué la 'Inversión de la Curva de Rendimientos' (cuando las tasas soberanas de corto plazo superan a las de largo plazo) es temida en los mercados bursátiles?",
    options: [
      "Porque históricamente ha precedido con notable consistencia estadística a las recesiones económicas en EE.UU., descontando desaceleración pronunciada y futuros recortes de tasas.",
      "Porque anula de forma automática el pago de dividendos en todas las emisoras.",
      "Porque obliga a los bancos centrales a cerrar sus operaciones crediticias.",
      "Porque indica que el desempleo caerá a cero de inmediato."
    ],
    correct: 0,
    explanation: "La curva invertida evidencia que los inversionistas prevén una caída económica que obligará a recortar tasas agresivamente, buscando amarrar rendimientos largos antes de que la recesión estalle."
  },
  {
    question: "9. ¿Cuáles sectores de la Bolsa de Valores se clasifican como 'Defensivos' durante una recesión debido a la demanda inelástica de sus productos?",
    options: [
      "Automotriz de lujo, joyería fina y aerolíneas comerciales.",
      "Salud (farmacéuticas/hospitales), Consumo Básico (alimentos/supermercados como Walmex) y Servicios Públicos (Utilities).",
      "Compañías de exploración minera sin utilidades demostradas.",
      "Empresas de tecnología en fase temprana de desarrollo."
    ],
    correct: 1,
    explanation: "Los consumidores continúan alimentándose, comprando medicinas y utilizando electricidad aun en las peores recesiones, dotando a estas emisoras de flujos de caja y dividendos defensivos."
  },
  {
    question: "10. Ante las grandes crisis bursátiles de la historia (como la crisis subprime de 2008 o la pandemia de 2020), ¿cuál ha sido la conducta comprobada de los inversionistas patrimoniales más exitosos?",
    options: [
      "Vender todo en pánico cuando los titulares de noticias anuncian el fin del sistema financiero.",
      "Comprender que el mercado bursátil descuenta el futuro y toca fondo meses antes de que la economía mejore, manteniendo la disciplina, conservando reservas de liquidez y no liquidando posiciones a precios de remate.",
      "Pedir créditos personales al 60% de interés para comprar opciones altamente apalancadas.",
      "Cancelar sus cuentas bursátiles para siempre."
    ],
    correct: 1,
    explanation: "Los mejores retornos de la historia se han cosechado comprando y sosteniendo posiciones de negocios de alta calidad cuando reina el pesimismo extremo, pues la recuperación comienza mucho antes de que las noticias periodísticas se tornen positivas."
  }
];

export default function CoursePlayerPhase8() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();

  const moduleData = courseData[0];
  const totalLessons = moduleData.lessons.length;

  // Sincronización con query param ?lesson=X (1-indexed)
  const initialLessonFromUrl = () => {
    const lParam = searchParams.get('lesson');
    if (lParam) {
      const parsed = parseInt(lParam, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= totalLessons) {
        return parsed - 1;
      }
    }
    const saved = localStorage.getItem('fa_phase_8_lesson');
    if (saved) {
      const parsedSaved = parseInt(saved, 10);
      if (!isNaN(parsedSaved) && parsedSaved >= 0 && parsedSaved < totalLessons) {
        return parsedSaved;
      }
    }
    return 0;
  };

  const [currentLesson, setCurrentLesson] = useState<number>(initialLessonFromUrl);
  const [showExam, setShowExam] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);
  const [quizState, setQuizState] = useState<Record<string, { answer: number; shown: boolean }>>({});

  // Estados interactivos para las herramientas macroeconómicas
  const [banxicoRate, setBanxicoRate] = useState<number>(10.25);
  const [expectedInflation, setExpectedInflation] = useState<number>(3.8);
  const [usdMxnRate, setUsdMxnRate] = useState<number>(19.20);
  const [fedFundsRate, setFedFundsRate] = useState<number>(4.75);
  const [treasury10Y, setTreasury10Y] = useState<number>(4.20);
  const [treasury2Y, setTreasury2Y] = useState<number>(4.35);
  const [selectedSectorPhase, setSelectedSectorPhase] = useState<'early' | 'mid' | 'late' | 'recession'>('mid');
  const [scenarioBaseProb, setScenarioBaseProb] = useState<number>(50);
  const [scenarioBullProb, setScenarioBullProb] = useState<number>(25);
  const [scenarioBearProb, setScenarioBearProb] = useState<number>(25);

  // Estados para el creador de Informe Macroeconómico de la lección 9
  const [macroReportTitle, setMacroReportTitle] = useState<string>("Informe Macroeconómico y Tesis Táctica Mensual");
  const [macroThesisText, setMacroThesisText] = useState<string>("Crecimiento moderado con desinflación ordenada en México y EE.UU. Mantener sobreponderación en Bonos soberanos y FIBRAS industriales, con posiciones satélite en tecnología global.");
  const [portfolioFixedIncome, setPortfolioFixedIncome] = useState<number>(40);
  const [portfolioFibras, setPortfolioFibras] = useState<number>(20);
  const [portfolioEquity, setPortfolioEquity] = useState<number>(30);
  const [portfolioCash, setPortfolioCash] = useState<number>(10);

  // Guardar en localStorage y searchParams al cambiar de lección
  useEffect(() => {
    localStorage.setItem('fa_phase_8_lesson', currentLesson.toString());
    localStorage.setItem('fa_phase_8_progress', currentLesson.toString());
    setSearchParams({ lesson: (currentLesson + 1).toString() }, { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLesson, setSearchParams]);

  const activeLesson = moduleData.lessons[currentLesson];
  const activeQuizzes = activeLesson?.quizzes || [];

  const handleNext = () => {
    if (currentLesson < totalLessons - 1) {
      setCurrentLesson(prev => prev + 1);
    } else {
      setShowExam(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (showExam) {
      setShowExam(false);
    } else if (currentLesson > 0) {
      setCurrentLesson(prev => prev - 1);
    }
  };

  const handleExamOptionSelect = (qIdx: number, optIdx: number) => {
    if (examSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleEvaluateExam = () => {
    let correctCount = 0;
    finalExamQuestions.forEach((q, idx) => {
      if (examAnswers[idx] === q.correct) {
        correctCount++;
      }
    });
    setExamScore(correctCount);
    setExamSubmitted(true);
    localStorage.setItem('fa_phase_8_exam_score', correctCount.toString());
    localStorage.setItem('fa_phase_8_completed', 'true');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetExam = () => {
    setExamAnswers({});
    setExamSubmitted(false);
    setExamScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadMacroReport = () => {
    const reportContent = `FA ACADEMY - INFORME MACROECONÓMICO INSTITUCIONAL
Fase 8: Macroeconomía Aplicada y Mercados Globales
Fecha de Emisión: Noviembre 2026
Estudiante / Analista: ${user?.username || 'Inversionista Independiente'}

==================================================
1. TÍTULO Y RESUMEN EJECUTIVO
==================================================
Título: ${macroReportTitle}
Tesis Central:
${macroThesisText}

==================================================
2. MONITOR DE BANCOS CENTRALES
==================================================
- Tasa Objetivo Banxico: ${banxicoRate.toFixed(2)}%
- Expectativa de Inflación a 12m: ${expectedInflation.toFixed(2)}%
- Tasa Real Ex-Ante: ${(banxicoRate - expectedInflation).toFixed(2)}% (${banxicoRate - expectedInflation > 3.5 ? 'POSTURA RESTRICTIVA' : 'POSTURA NEUTRAL'})
- Tasa Fondos Federales Fed: ${fedFundsRate.toFixed(2)}%
- Spread de Tasas Banxico - Fed: ${((banxicoRate - fedFundsRate) * 100).toFixed(0)} puntos básicos

==================================================
3. CONDICIONES CAMBIARIAS Y DE DEUDA
==================================================
- Tipo de Cambio USD/MXN: $${usdMxnRate.toFixed(2)} MXN
- Bono del Tesoro EE.UU. a 10 Años: ${treasury10Y.toFixed(2)}%
- Bono del Tesoro EE.UU. a 2 Años: ${treasury2Y.toFixed(2)}%
- Diferencial Curva 10Y - 2Y: ${(treasury10Y - treasury2Y).toFixed(2)}% (${treasury10Y - treasury2Y < 0 ? 'CURVA INVERTIDA (ALERTA DE RECESIÓN)' : 'CURVA NORMAL'})

==================================================
4. ASIGNACIÓN TÁCTICA DE ACTIVOS RECOMENDADA
==================================================
- Renta Fija Gubernamental (Cetes / Bonos M): ${portfolioFixedIncome}%
- FIBRAS Inmobiliarias Industriales / Comerciales: ${portfolioFibras}%
- Renta Variable Global & Nacional (ETFs VOO/BMV): ${portfolioEquity}%
- Reservas de Liquidez Estratégica en Moneda Dura: ${portfolioCash}%
Total Portafolio: ${portfolioFixedIncome + portfolioFibras + portfolioEquity + portfolioCash}%

==================================================
5. RÚBRICA INSTITUCIONAL DE CUMPLIMIENTO (100/100)
==================================================
[X] Rigor Cuantitativo en Tasas Reales
[X] Análisis de Sensibilidad al Tipo de Cambio
[X] Monitoreo de Curva de Rendimientos y Spread
[X] Asignación Táctica con Límites de Diversificación
[X] Plan de Contingencia ante Shocks de Mercado

Acreditado por FA Academy Institutional Research Division.`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `FA_Academy_Informe_Macro_Fase8_${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Renderizador de componentes visuales interactivos para Fase 8
  const renderVisualTool = (type: string) => {
    switch (type) {
      case 'banxico_minutes_tool': {
        const realRate = banxicoRate - expectedInflation;
        const stance = realRate > 3.5 ? 'Restrictiva (Frena Demanda e Inflación)' : realRate >= 2.5 ? 'Neutral (Equilibrio de Crecimiento)' : 'Acomodaticia (Estímulo Económico)';
        const stanceColor = realRate > 3.5 ? 'text-amber-400 bg-amber-950/60 border-amber-800' : 'text-emerald-400 bg-emerald-950/60 border-emerald-800';

        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Landmark className="text-emerald-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Simulador de Postura Monetaria: Banco de México (Banxico)</h4>
                  <p className="text-xs text-slate-400">Calcula la Tasa Real Ex-Ante y determina el sesgo de la Junta de Gobierno</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                Mandato Art. 28
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                    <span>Tasa Objetivo de Banxico (Nominal)</span>
                    <span className="font-bold text-emerald-400">{banxicoRate.toFixed(2)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={4.0} 
                    max={14.0} 
                    step={0.25}
                    value={banxicoRate}
                    onChange={(e) => setBanxicoRate(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>4.00%</span>
                    <span>Neutral: 5.50% - 6.50%</span>
                    <span>14.00%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                    <span>Expectativa de Inflación a 12 Meses (Encuesta)</span>
                    <span className="font-bold text-amber-400">{expectedInflation.toFixed(2)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={2.0} 
                    max={8.5} 
                    step={0.1}
                    value={expectedInflation}
                    onChange={(e) => setExpectedInflation(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>2.0% (Deflación)</span>
                    <span>Meta: 3.0% ± 1%</span>
                    <span>8.5% (Inflación Severa)</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Fórmula de Fisher / Tasa Real Ex-Ante
                  </span>
                  <div className="text-3xl font-extrabold text-white mb-2 flex items-baseline gap-2">
                    <span>{realRate.toFixed(2)}%</span>
                    <span className="text-xs text-slate-400 font-normal">real por encima de inflación</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Tasa Real = Tasa Nominal ({banxicoRate.toFixed(2)}%) - Inflación Esperada ({expectedInflation.toFixed(2)}%).
                  </p>
                </div>

                <div className={`p-3 rounded-lg border text-xs font-bold ${stanceColor}`}>
                  Postura de Banxico: {stance}
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-start gap-3">
              <Info className="text-emerald-400 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Implicación de Inversión Bursátil:</strong> Cuando la tasa real se ubica por encima del 3.5%, los Cetes y la deuda soberana de corto plazo absorben el flujo de capital con riesgo mínimo. Cuando Banxico inicia su ciclo de recortes, los tenedores de Bonos M a 10 y 20 años experimentan una apreciación sustancial de capital al bajar las tasas de mercado.
              </div>
            </div>
          </div>
        );
      }

      case 'usdmxn_passthrough_tool': {
        const spreadBps = Math.round((banxicoRate - fedFundsRate) * 100);
        const passThroughPct = (0.12 * 10).toFixed(1); // 1.2% inflacionaria por cada 10% depreciacion
        
        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Coins className="text-amber-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Monitor de Tipo de Cambio USD/MXN y Efecto Pass-Through</h4>
                  <p className="text-xs text-slate-400">Analiza el diferencial de tasas Banxico-Fed y el traspaso a precios de importación</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/30">
                Carry Trade & FX
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold mb-1">Tipo de Cambio Spot</span>
                <div className="text-2xl font-black text-white mb-2">${usdMxnRate.toFixed(2)} <span className="text-xs text-slate-400">MXN/USD</span></div>
                <input 
                  type="range"
                  min={16.50}
                  max={24.00}
                  step={0.10}
                  value={usdMxnRate}
                  onChange={(e) => setUsdMxnRate(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded cursor-pointer"
                />
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold mb-1">Tasa Fed (EE.UU.)</span>
                <div className="text-2xl font-black text-blue-400 mb-2">{fedFundsRate.toFixed(2)}%</div>
                <input 
                  type="range"
                  min={2.00}
                  max={6.50}
                  step={0.25}
                  value={fedFundsRate}
                  onChange={(e) => setFedFundsRate(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-2 rounded cursor-pointer"
                />
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                <span className="text-[11px] text-slate-400 block font-semibold mb-1">Spread Banxico - Fed</span>
                <div className={`text-2xl font-black ${spreadBps > 500 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  +{spreadBps} bps
                </div>
                <span className="text-[11px] text-slate-400">
                  {spreadBps >= 500 ? 'Incentivo Fuerte al Carry Trade' : 'Spread Comprimido (Mayor Volatilidad)'}
                </span>
              </div>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <div className="flex justify-between items-center text-slate-300 font-semibold">
                <span>Traspaso Cambiario Estimado (Pass-Through):</span>
                <span className="text-amber-400 font-bold">~0.12 a 0.15</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Por cada 10% que el peso se deprecie frente al dólar de forma sostenida, el costo de las importaciones traslada aproximadamente <strong>+{passThroughPct}%</strong> directo a la inflación general de mercancías, forzando a Banxico a mantener las tasas altas.
              </p>
            </div>
          </div>
        );
      }

      case 'fed_dotplot_treasury_tool': {
        const spread10Y2Y = (treasury10Y - treasury2Y).toFixed(2);
        const isInverted = treasury10Y < treasury2Y;

        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Globe className="text-blue-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">La Gravedad de los Mercados: Rendimiento de los Treasuries</h4>
                  <p className="text-xs text-slate-400">Evalúa el bono libre de riesgo a 10 años y la pendiente de la curva estadounidense</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/30">
                Risk-Free Rate
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>US 10-Year Treasury Yield (Tasa Libre de Riesgo)</span>
                    <span className="text-blue-400 font-bold">{treasury10Y.toFixed(2)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={2.00} 
                    max={6.00} 
                    step={0.05}
                    value={treasury10Y}
                    onChange={(e) => setTreasury10Y(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 bg-slate-800 h-2 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>2.00% (Dinero Barato)</span>
                    <span>4.00% (Histórico)</span>
                    <span>6.00% (Tensión Severa)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>US 2-Year Treasury Yield (Tasa Corta Sensible a Fed)</span>
                    <span className="text-indigo-400 font-bold">{treasury2Y.toFixed(2)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={2.00} 
                    max={6.00} 
                    step={0.05}
                    value={treasury2Y}
                    onChange={(e) => setTreasury2Y(parseFloat(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-800 h-2 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-bold block mb-1">Diferencial Curva 10Y - 2Y</span>
                  <div className={`text-3xl font-black mb-2 ${isInverted ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {spread10Y2Y}%
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border mb-3 ${
                    isInverted 
                      ? 'bg-rose-950/60 text-rose-300 border-rose-800' 
                      : 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                  }`}>
                    {isInverted ? 'Curva Invertida: Alerta de Recesión en EE.UU.' : 'Curva Positiva / Normal'}
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {treasury10Y > 4.5 ? 'Con el bono a 10 años por encima del 4.5%, las valuaciones de las tecnológicas de alto crecimiento sufren presión bajista debido a la elevada tasa de descuento.' : 'Un bono a 10 años en niveles moderados respalda múltiplos de valuación más elevados en Wall Street.'}
                </p>
              </div>
            </div>
          </div>
        );
      }

      case 'leading_indicators_tool': {
        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Activity className="text-indigo-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Semáforo de Indicadores Adelantados: IMEF y PMI</h4>
                  <p className="text-xs text-slate-400">La frontera de los 50 puntos para detectar expansión o recesión fabril</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-indigo-500/10 text-indigo-400 border-indigo-500/30">
                Leading Metrics
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white">Indicador IMEF México</span>
                  <span className="text-xs font-bold bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded border border-emerald-800">51.4 (Expansión)</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10"></div>
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '55%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>&lt; 50 Contracción</span>
                  <span className="font-bold text-white">50.0</span>
                  <span>&gt; 50 Expansión</span>
                </div>
                <p className="text-xs text-slate-400">
                  El indicador manufacturero y no manufacturero del IMEF en México encuesta a directores de finanzas sobre nuevos pedidos y producción.
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white">ISM PMI EE.UU.</span>
                  <span className="text-xs font-bold bg-indigo-950 text-indigo-400 px-2.5 py-1 rounded border border-indigo-800">49.8 (Zona Neutral)</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10"></div>
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '49.8%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>&lt; 50 Contracción</span>
                  <span className="font-bold text-white">50.0</span>
                  <span>&gt; 50 Expansión</span>
                </div>
                <p className="text-xs text-slate-400">
                  Lecturas continuas por debajo de 50 en el ISM alertan a los inversionistas para rotar hacia sectores defensivos antes de caídas en el PIB.
                </p>
              </div>
            </div>
          </div>
        );
      }

      case 'sector_rotation_clock_tool': {
        const sectorInfo = {
          early: {
            title: "Recuperación Temprana (Early-Cycle)",
            context: "Tasas en mínimos históricos y reactivación del crédito.",
            winners: ["Consumo Discrecional (Retail, Autos)", "Servicios Financieros (Bancos)", "Bienes Raíces / FIBRAS Comerciales"],
            losers: ["Energía y Materias Primas"],
            badge: "bg-blue-950 text-blue-300 border-blue-800"
          },
          mid: {
            title: "Media Expansión (Mid-Cycle)",
            context: "Crecimiento saludable del PIB y aceleración de utilidades.",
            winners: ["Tecnología de la Información", "Industriales y Maquinaria", "Servicios de Comunicación"],
            losers: ["Sectores Defensivos Rezago"],
            badge: "bg-emerald-950 text-emerald-300 border-emerald-800"
          },
          late: {
            title: "Fase Tardía / Sobrecalentamiento (Late-Cycle)",
            context: "Inflación elevada, tasas restrictivas y cuellos de botella.",
            winners: ["Energía (Petróleo y Gas)", "Materiales Básicos y Minería", "Cuidado de la Salud"],
            losers: ["Consumo Discrecional y Bienes Raíces"],
            badge: "bg-amber-950 text-amber-300 border-amber-800"
          },
          recession: {
            title: "Recesión / Contracción (Recession)",
            context: "Desplome de la demanda agregada y desempleo al alza.",
            winners: ["Consumo Básico (Walmex, Alimentos)", "Salud y Farmacéuticas", "Servicios Públicos (Utilities)", "Cetes y Deuda Soberana"],
            losers: ["Cíclicos, Aerolíneas y Alta Tecnología Especulativa"],
            badge: "bg-rose-950 text-rose-300 border-rose-800"
          }
        };

        const currentInfo = sectorInfo[selectedSectorPhase];

        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Compass className="text-amber-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">El Reloj de Rotación Sectorial de Mercados</h4>
                  <p className="text-xs text-slate-400">Selecciona la fase del ciclo económico para identificar sectores ganadores</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/30">
                Sector Clock
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <button 
                onClick={() => setSelectedSectorPhase('early')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  selectedSectorPhase === 'early' 
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                1. Recuperación
              </button>
              <button 
                onClick={() => setSelectedSectorPhase('mid')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  selectedSectorPhase === 'mid' 
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                2. Expansión
              </button>
              <button 
                onClick={() => setSelectedSectorPhase('late')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  selectedSectorPhase === 'late' 
                    ? 'bg-amber-600 text-white border-amber-400 shadow-lg' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                3. Tardía / Inflación
              </button>
              <button 
                onClick={() => setSelectedSectorPhase('recession')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  selectedSectorPhase === 'recession' 
                    ? 'bg-rose-600 text-white border-rose-400 shadow-lg' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                4. Recesión
              </button>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h5 className="font-bold text-white text-base">{currentInfo.title}</h5>
                <span className={`text-xs px-2.5 py-1 rounded font-bold border ${currentInfo.badge}`}>
                  Fase Activa
                </span>
              </div>
              <p className="text-xs text-slate-400">{currentInfo.context}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide block mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Sectores con Desempeño Superior:
                  </span>
                  <ul className="text-xs text-slate-200 space-y-1.5">
                    {currentInfo.winners.map((w, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wide block mb-2 flex items-center gap-1.5">
                    <XCircle size={14} /> Sectores Vulnerables / Rezagados:
                  </span>
                  <ul className="text-xs text-slate-200 space-y-1.5">
                    {currentInfo.losers.map((l, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'megatrends_matrix_tool': {
        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Zap className="text-cyan-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Matriz de Megatendencias: Nearshoring e Inteligencia Artificial</h4>
                  <p className="text-xs text-slate-400">Fuerzas transformadoras que trascienden el ciclo económico de corto plazo</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                10-Year Horizon
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 p-5 rounded-xl border border-cyan-900/40 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Factory size={18} />
                  <span>Megatendencia 1: Nearshoring en México</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Reconfiguración de cadenas de suministro Norteamericanas protegidas por el T-MEC. Empresas automotrices, electrónicas y de dispositivos médicos trasladan líneas de montaje a México.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white">Activos Mexicanos Beneficiados:</div>
                  <div>• FIBRAS Industriales (FMTY14, Prologis, Terrafina) con 98% de ocupación.</div>
                  <div>• Materiales pesados y cemento (CEMEX).</div>
                  <div>• Operadores de aeropuertos y transporte multimodal (GAP, OMA).</div>
                </div>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-purple-900/40 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <Brain size={18} />
                  <span>Megatendencia 2: Infraestructura de IA</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Más de $200,000 millones de USD en CapEx anual de los gigantes de la nube (Microsoft, Google, Amazon) en semiconductores y centros de datos.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white">Capas de Monetización:</div>
                  <div>• Capa 1 (Chips / Hardware): Nvidia, TSMC, Broadcom, ASML.</div>
                  <div>• Capa 2 (Hiperescaladores Cloud): Azure, AWS, Google Cloud.</div>
                  <div>• Capa 3 (Software de Negocios): Automatización y ciberseguridad.</div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'scenario_matrix_tool': {
        const totalProb = scenarioBaseProb + scenarioBullProb + scenarioBearProb;

        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Scale className="text-amber-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Matriz de 3 Escenarios Macroeconómicos</h4>
                  <p className="text-xs text-slate-400">Asigna probabilidades y audita la resiliencia de tu patrimonio</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${totalProb === 100 ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-rose-950 text-rose-400 border-rose-800'}`}>
                Suma: {totalProb}% {totalProb === 100 ? '✓' : '(Debe sumar 100%)'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>1. Escenario Base</span>
                  <span className="text-emerald-400">{scenarioBaseProb}%</span>
                </div>
                <input 
                  type="range"
                  min={10}
                  max={80}
                  value={scenarioBaseProb}
                  onChange={(e) => setScenarioBaseProb(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-500 bg-slate-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Crecimiento moderado, inflación convergiendo a 3.5%, recortes ordenados de tasas de Banxico.
                </p>
                <div className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/50 p-2 rounded">
                  Retorno Esperado: +12% a +15%
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>2. Escenario Optimista (Bull)</span>
                  <span className="text-blue-400">{scenarioBullProb}%</span>
                </div>
                <input 
                  type="range"
                  min={5}
                  max={60}
                  value={scenarioBullProb}
                  onChange={(e) => setScenarioBullProb(parseInt(e.target.value, 10))}
                  className="w-full accent-blue-500 bg-slate-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Boom de productividad por IA, exportaciones récord en México, rally generalizado en BMV y S&P 500.
                </p>
                <div className="text-[11px] font-semibold text-blue-300 bg-blue-950/50 p-2 rounded">
                  Retorno Esperado: +22% a +28%
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>3. Escenario Recesivo (Bear)</span>
                  <span className="text-rose-400">{scenarioBearProb}%</span>
                </div>
                <input 
                  type="range"
                  min={5}
                  max={60}
                  value={scenarioBearProb}
                  onChange={(e) => setScenarioBearProb(parseInt(e.target.value, 10))}
                  className="w-full accent-rose-500 bg-slate-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Shock de tasas persistentes, caída en utilidades de empresas y salto del dólar hacia los $21.50 MXN.
                </p>
                <div className="text-[11px] font-semibold text-rose-300 bg-rose-950/50 p-2 rounded">
                  Amortiguador: Cetes & Cobertura USD
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'crisis_anatomy_tool': {
        const crises = [
          { name: "Dot-Com (2000-2002)", drop: "-78% (Nasdaq)", time: "30 meses", recovery: "15 años", lesson: "Valuaciones irreales sin flujo de caja colapsan inevitablemente." },
          { name: "Subprime (2007-2009)", drop: "-57% (S&P 500)", time: "17 meses", recovery: "4 años", lesson: "El exceso de apalancamiento en deuda estructurada pone en jaque al sistema." },
          { name: "COVID-19 (Marzo 2020)", drop: "-34% (S&P 500)", time: "23 días", recovery: "5 meses", lesson: "El pánico masivo genera rebotes en 'V' ante inyecciones monetarias masivas." },
          { name: "Inflación y Tasas (2022)", drop: "-19% Acciones / -16% Bonos", time: "10 meses", recovery: "2 años", lesson: "El portafolio 60/40 sufre cuando la inflación fuerza subidas rápidas de tasas." }
        ];

        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-rose-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Anatomía Comparativa de los 4 Grandes Colapsos del Siglo XXI</h4>
                  <p className="text-xs text-slate-400">Lecciones forenses de drawdowns y duraciones para no vender en capitulaciones</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-rose-500/10 text-rose-400 border-rose-500/30">
                Crash Forensics
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {crises.map((c, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-white">{c.name}</span>
                    <span className="text-xs font-black text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">{c.drop}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex gap-4">
                    <span>Duración Caída: <strong className="text-slate-200">{c.time}</strong></span>
                    <span>Recuperación: <strong className="text-slate-200">{c.recovery}</strong></span>
                  </div>
                  <p className="text-xs text-slate-300 italic pt-1 border-t border-slate-900">
                    "{c.lesson}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'macro_report_builder_tool': {
        const totalAllocation = portfolioFixedIncome + portfolioFibras + portfolioEquity + portfolioCash;

        return (
          <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <FileText className="text-amber-400" size={24} />
                <div>
                  <h4 className="text-white font-bold text-base">Constructor Institucional de Informe Macroeconómico</h4>
                  <p className="text-xs text-slate-400">Redacta tu tesis táctica, define ponderaciones y genera tu informe para evaluación</p>
                </div>
              </div>
              <button
                onClick={handleDownloadMacroReport}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Descargar Informe Oficial</span>
                <ExternalLink size={14} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Título del Memorándum Institucional</label>
                <input 
                  type="text" 
                  value={macroReportTitle}
                  onChange={(e) => setMacroReportTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Tesis Macroeconómica Central (Diagnóstico Táctico)</label>
                <textarea 
                  rows={3}
                  value={macroThesisText}
                  onChange={(e) => setMacroThesisText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Asignación Táctica de Cartera Propuesta:
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${totalAllocation === 100 ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'}`}>
                    Total: {totalAllocation}% {totalAllocation === 100 ? '✓' : '(Ajusta a 100%)'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Renta Fija / Cetes: {portfolioFixedIncome}%</label>
                    <input 
                      type="range" min={0} max={80} step={5} value={portfolioFixedIncome}
                      onChange={(e) => setPortfolioFixedIncome(parseInt(e.target.value, 10))}
                      className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">FIBRAS Industriales: {portfolioFibras}%</label>
                    <input 
                      type="range" min={0} max={50} step={5} value={portfolioFibras}
                      onChange={(e) => setPortfolioFibras(parseInt(e.target.value, 10))}
                      className="w-full accent-amber-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Renta Variable (ETFs/BMV): {portfolioEquity}%</label>
                    <input 
                      type="range" min={0} max={70} step={5} value={portfolioEquity}
                      onChange={(e) => setPortfolioEquity(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Liquidez en Dólares (USD): {portfolioCash}%</label>
                    <input 
                      type="range" min={0} max={40} step={5} value={portfolioCash}
                      onChange={(e) => setPortfolioCash(parseInt(e.target.value, 10))}
                      className="w-full accent-purple-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  // Renderizador del Examen Final de Fase 8
  if (showExam) {
    const isPassed = examScore >= 8;

    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between font-sans">
        <SEO 
          title="Examen Final: Certificación en Macroeconomía Aplicada | FA Academy"
          description="Evaluación de 10 preguntas institucionales sobre política monetaria de Banxico, Fed, USD/MXN, curva de rendimientos y rotación sectorial."
          url="https://fa-academy.vercel.app/course/phase/8?exam=true"
        />

        <header className="bg-[#0f172a] border-b border-slate-800 sticky top-0 z-30 px-4 py-3 md:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button 
              onClick={handlePrev}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs md:text-sm font-semibold"
            >
              <ArrowLeft size={16} />
              <span>Volver a Lección 9</span>
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800">
              Examen de Certificación · Fase 8
            </span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-4 md:p-8 flex-1 w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Examen Oficial: Macroeconomía Aplicada y Mercados Globales
            </h1>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
              10 reactivos institucionales. Calificación mínima aprobatoria: <strong>80% (8/10)</strong> para acreditar y emitir tu diploma de nivel Experto.
            </p>
          </div>

          {examSubmitted && (
            <div className={`p-6 rounded-2xl border text-center space-y-4 animate-fade-in ${
              isPassed 
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200' 
                : 'bg-rose-950/60 border-rose-500/50 text-rose-200'
            }`}>
              <div className="text-4xl font-black">
                {examScore} / 10
              </div>
              <h3 className="text-xl font-bold">
                {isPassed ? '¡Felicidades! Has aprobado con honores la Fase 8' : 'No alcanzaste el puntaje mínimo (8/10)'}
              </h3>
              <p className="text-xs md:text-sm max-w-md mx-auto text-slate-300">
                {isPassed 
                  ? 'Has demostrado dominio completo en política monetaria, dinámica cambiaria USD/MXN, lectura de curvas de rendimiento y asignación táctica por escenarios.' 
                  : 'Revisa las explicaciones de cada reactivo marcado en rojo y vuelve a intentarlo para afianzar tus competencias analíticas.'}
              </p>

              <div className="flex justify-center gap-4 pt-2">
                {!isPassed && (
                  <button 
                    onClick={handleResetExam}
                    className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg"
                  >
                    Reintentar Evaluación
                  </button>
                )}
                {isPassed && (
                  <button 
                    onClick={handleDownloadMacroReport}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    <span>Descargar Informe y Diploma</span>
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="space-y-6">
            {finalExamQuestions.map((q, qIdx) => {
              const selectedOpt = examAnswers[qIdx];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correct;

              return (
                <div key={qIdx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-4">
                  <h4 className="text-sm md:text-base font-bold text-white leading-relaxed">
                    {q.question}
                  </h4>

                  <div className="space-y-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700';

                      if (examSubmitted) {
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
                          disabled={examSubmitted}
                          onClick={() => handleExamOptionSelect(qIdx, optIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {examSubmitted && optIdx === q.correct && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
                          {examSubmitted && isThisSelected && !isCorrect && <XCircle size={16} className="text-rose-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {examSubmitted && (
                    <div className={`p-3 rounded-xl text-xs leading-relaxed border ${
                      isCorrect 
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
                        : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                    }`}>
                      <strong>{isCorrect ? '¡Correcto!' : 'Fundamento didáctico:'}</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!examSubmitted && (
            <div className="text-center pt-4 pb-12">
              <button
                disabled={Object.keys(examAnswers).length < finalExamQuestions.length}
                onClick={handleEvaluateExam}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-full shadow-xl transition-all"
              >
                Calificar y Finalizar Examen ({Object.keys(examAnswers).length} de {finalExamQuestions.length} contestadas)
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // Renderizador principal del Reproductor de Lecciones de Fase 8
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between font-sans">
      <SEO 
        title={`Fase 8 - Lección ${currentLesson + 1}: ${activeLesson.title} | FA Academy`}
        description={activeLesson.content}
        url={`https://fa-academy.vercel.app/course/phase/8?lesson=${currentLesson + 1}`}
      />

      <header className="bg-[#0f172a] border-b border-slate-800 sticky top-0 z-30 px-4 py-3 md:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-800">
              FA Academy · Fase 8 (EXPERTO)
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Lección {currentLesson + 1} de {totalLessons}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-2">
              {Math.round(((currentLesson + 1) / totalLessons) * 100)}%
            </span>
            <div className="w-20 sm:w-28 bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-purple-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentLesson + 1) / totalLessons) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8 flex-1 w-full space-y-8">
        {/* Encabezado de la Lección */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
            <BookOpen size={15} />
            <span>Lección {currentLesson + 1} de {totalLessons}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {activeLesson.title}
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
            {activeLesson.content}
          </p>
        </div>

        {/* Detalle Profundo Institucional */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-sm text-slate-300 leading-relaxed space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <FileText size={14} className="text-purple-400" />
            <span>Marco Conceptual y Operativa Macroeconómica</span>
          </h3>
          <p>{activeLesson.details}</p>

          {/* Notas del Instructor */}
          {activeLesson.speakerNotes && (
            <div className="bg-purple-950/30 border-l-4 border-purple-500 p-4 rounded-r-xl text-xs text-purple-200 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-purple-300 uppercase tracking-wide">
                <Brain size={14} /> Regla del Gestor de Fondos:
              </span>
              <p>{activeLesson.speakerNotes}</p>
            </div>
          )}

          {/* Disclaimer Institucional */}
          <div className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800">
            {activeLesson.disclaimer}
          </div>
        </div>

        {/* Herramienta Visual Interactiva */}
        {renderVisualTool(activeLesson.visualType)}

        {/* Conceptos Clave de la Lección */}
        {activeLesson.concepts && activeLesson.concepts.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Key size={14} className="text-purple-400" />
              <span>Conceptos Clave para Dominar</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeLesson.concepts.map((c: any, idx: number) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800/80 p-3.5 rounded-xl">
                  <h4 className="text-xs font-bold text-white mb-1">{c.term}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Caso Real de Mercado con Fecha */}
        {activeLesson.realExample && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
                <Newspaper size={14} /> Caso Real de Mercado
              </span>
              <span className="text-[11px] text-slate-400">{activeLesson.realExample.date}</span>
            </div>
            <h4 className="text-sm font-bold text-white">{activeLesson.realExample.asset}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{activeLesson.realExample.caseDescription}</p>
            <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Fuente: <strong>{activeLesson.realExample.source}</strong></span>
              <a 
                href={activeLesson.realExample.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold"
              >
                <span>Portal Oficial</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}

        {/* Ejercicio Práctico Entregable */}
        {activeLesson.deliverableExercise && (
          <div className="bg-purple-950/20 border border-purple-800/50 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wide flex items-center gap-1.5">
              <Target size={14} /> Ejercicio Práctico Aplicado
            </span>
            <h4 className="text-sm font-bold text-white">{activeLesson.deliverableExercise.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{activeLesson.deliverableExercise.description}</p>
          </div>
        )}

        {/* Quizzes Interactivos por Lección con Retroalimentación Inmediata */}
        {activeQuizzes.length > 0 && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle size={18} className="text-purple-400" />
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                  Quiz de Comprobación ({activeQuizzes.length} reactivos)
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
      </main>

      {/* Footer de Navegación de Lecciones */}
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
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95"
          >
            <span className="hidden md:inline">{(currentLesson === totalLessons - 1) ? 'Examen Final' : 'Siguiente'}</span>
            <span className="md:hidden">{(currentLesson === totalLessons - 1) ? 'Examen' : 'Sig.'}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
