import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, PieChart,  
  Shield, Anchor, Brain, Quote, 
  AlertTriangle, Layers, Crosshair, 
  CheckCircle, ChevronRight, Book, RefreshCw, 
  TrendingDown, Landmark, Scale, FileText, 
  Calculator, UserCheck, Newspaper, ShieldAlert,
  Zap, Search, BarChart2, Globe, Building2,
  Download, FileSpreadsheet, CheckCircle2, XCircle, HelpCircle,
  Percent, Award
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadAssetAllocationTemplate, downloadFiscalDeclarationTemplate } from '../utils/resources';

// --- DATOS FASE 4: GESTIÓN DE RIESGO, PORTAFOLIO Y FISCALIDAD SAT 2026 ---

const courseData = [
  {
    id: 1,
    title: "Módulo 4: Gestión de Riesgo, Portafolio y Fiscalidad",
    description: "El Arte del Asset Allocation, Core-Satellite, Control de Drawdown y el SAT como tu socio silencioso.",
    lessons: [
      {
        title: "Caso de Estudio: Bimbo vs Flowers Foods (BMV / NYSE)",
        content: "Aprende a leer el lenguaje de los estados financieros: por qué una corrección del -18% en BIMBOA fue una oportunidad de acumulación histórica.",
        details: "El 19 de febrero de 2024, Grupo Bimbo (BIMBOA.MX) presentó su reporte anual y 4T23 ante la Bolsa Mexicana de Valores (BMV). El precio de la acción corrigió rápidamente desde los $82.50 MXN hasta los $67.80 MXN (-17.8%). Para el inversor novato que solo miraba el gráfico, fue pánico puro. Para el estratega fundamental, fue una oportunidad excepcional: las ventas anuales alcanzaron $399,879 millones de MXN y el margen EBITDA se mantuvo sólido en 13.9%, demostrando que la caída temporal obedeció a la volatilidad en el costo del trigo y materias primas y al efecto contable del 'superpeso' en Norteamérica, manteniendo su grado de inversión con Deuda/EBITDA de 2.4x frente a Flowers Foods (FLO:NYSE) en EE.UU.",
        visualType: "bimbo_flowers_case",
        videoUrls: ["e5YgKlsio_w"],
        videoTitle: "Análisis Fundamental de BIMBOA y Reportes Financieros BMV",
        videoDuration: "19 min",
        speakerNotes: "Pregunta siempre: ¿La caída proviene de un deterioro permanente del negocio o de una compresión temporal de múltiplos por factores macroeconómicos? Si el negocio mantiene su foso económico y flujo de caja, el pánico es tu mejor aliado.",
        concepts: [
          { term: "Reporte 4T BMV", def: "Informe financiero auditado del cuarto trimestre y cierre anual presentado ante la CNBV y el público inversionista." },
          { term: "Margen EBITDA (13.9%)", def: "Porcentaje de ventas convertido en flujo operativo antes de intereses, impuestos y depreciaciones; métrica reina de eficiencia panadera." },
          { term: "Razón Deuda Neta / EBITDA (2.4x)", def: "Años de flujo requeridos para cubrir pasivos; Bimbo mantiene rango conservador grado de inversión." },
          { term: "Costo de Materias Primas", def: "Fluctuación en insumos agrícolas (trigo, maíz, aceites) que impacta transitoriamente el costo de ventas." }
        ],
        miniQuiz: {
          question: "En el reporte 4T23 de Grupo Bimbo, ¿cuál fue la razón principal de la corrección de $82.50 a $67.80 MXN pese a mantener un margen EBITDA del 13.9%?",
          options: [
            "Que la empresa se declaró en bancarrota fraudulenta.",
            "Factores temporales: volatilidad en el costo del trigo e impacto cambiario del superpeso en ventas de Norteamérica, sin daño estructural al negocio.",
            "Que suspendieron el reparto de pan en todo México.",
            "Un error tipográfico de la Bolsa Mexicana de Valores."
          ],
          correct: 1,
          explanation: "Los estados financieros mostraron que el foso económico y el flujo de Bimbo seguían intactos; la presión fue transitoria por materias primas y conversión cambiaria."
        }
      },
      {
        title: "Asset Allocation y la Frontera Eficiente",
        content: "El 90% de la variabilidad de tus rendimientos a largo plazo depende de la mezcla de activos, no de la selección de acciones individuales.",
        details: "El célebre estudio empírico de Brinson, Hood y Beebower (1986, confirmado en 1991 en el Financial Analysts Journal) demostró rigurosamente que más del 91.5% al 93.6% de la variabilidad de los rendimientos a lo largo del tiempo de un portafolio proviene de la Asignación de Activos (Asset Allocation), y no de la selección de valores individuales (stock picking) ni del momento de entrada (market timing). La Frontera Eficiente de Harry Markowitz demuestra que combinar activos no correlacionados reduce el riesgo sin sacrificar retorno esperado.",
        visualType: "asset_allocation_master",
        source: "Estudio: Brinson, Hood & Beebower — Determinants of Portfolio Performance",
        quote: { text: "La diversificación es la única comida gratis en las finanzas.", author: "Harry Markowitz (Premio Nobel de Economía)" },
        speakerNotes: "El estudio de Brinson demostró que los gestores que pasan semanas intentando adivinar el momento exacto de compra aportan menos del 5% de la varianza del rendimiento frente a quienes eligen una asignación de activos estratégica.",
        concepts: [
          { term: "Estudio Brinson (1986/1991)", def: "Investigación que probó que más del 90% de la variabilidad temporal de los retornos depende del Asset Allocation." },
          { term: "Frontera Eficiente", def: "Curva matemática de carteras que maximizan el rendimiento esperado para cada nivel de volatilidad dado." },
          { term: "Correlación Negativa", def: "Comportamiento donde dos activos se compensan entre sí (ej. bonos subiendo cuando las acciones corrigen)." },
          { term: "Varianza de Portafolio", def: "Medida del riesgo conjunto de los activos, amortiguada gracias a la covarianza entre clases." }
        ],
        miniQuiz: {
          question: "¿Qué demostró exactamente el estudio seminal de Brinson, Hood y Beebower sobre el rendimiento de las inversiones?",
          options: [
            "Que el 90% de tus ganancias provienen de comprar opciones especulativas.",
            "Que más del 90% de la variabilidad de los retornos a lo largo del tiempo se explica por la Asignación de Activos (Asset Allocation).",
            "Que el análisis técnico intradía siempre bate al mercado.",
            "Que no se deben comprar bonos gubernamentales nunca."
          ],
          correct: 1,
          explanation: "Brinson, Hood y Beebower concluyeron que la política de asignación entre clases de activos explica más del 90% de la variación del rendimiento temporal de una cartera."
        }
      },
      {
        title: "Modelo Core-Satellite con Portafolio Real",
        content: "Estructura tu capital con arquitectura institucional: 70% Núcleo de bajo costo y 30% Satélites de alta convicción.",
        details: "El modelo Core-Satellite combina la eficiencia pasiva con la búsqueda de alfa activo. El Núcleo (Core, 70% del portafolio) se asigna a vehículos indexados globales de muy bajo costo y renta fija soberana para asegurar el interés compuesto: ej. 40% en renta variable global indexada (VOO / IVVPESO), 20% en deuda soberana en pesos (Cetes / Mbonos) y 10% en bienes raíces (FIBRAS). Los Satélites (30% restante) buscan rendimientos asimétricos: 15% en empresas individuales de alta convicción (Bimbo, Google), 10% en temáticas de expansión (nearshoring/semiconductores) y 5% en reservas tácticas u oro.",
        visualType: "core_satellite_visual",
        speakerNotes: "El Núcleo protege tu futuro financiero pase lo que pase en el mercado. Los Satélites te permiten explotar oportunidades sin poner en riesgo tu patrimonio principal.",
        concepts: [
          { term: "Núcleo (Core 70%)", def: "Base indexada diversificada de bajo costo que captura el crecimiento económico mundial sin riesgo de selección individual." },
          { term: "Satélites (30%)", def: "Posiciones activas tácticas en acciones individuales, sectores en disrupción o coberturas asimétricas." },
          { term: "Generación de Alfa (α)", def: "Rendimiento adicional generado por encima del índice de referencia gracias a la selección táctica de satélites." },
          { term: "Beta del Portafolio (β)", def: "Sensibilidad del núcleo respecto a los movimientos globales del mercado general." }
        ],
        miniQuiz: {
          question: "En una estrategia Core-Satellite estructurada al 70/30, ¿cuál es el objetivo primordial del Núcleo (Core)?",
          options: [
            "Hacer Day Trading apalancado todas las mañanas.",
            "Proveer una base indexada y de renta fija sólida, de bajo costo y diversificada, que garantice la captura del mercado.",
            "Comprar únicamente criptomonedas recién creadas.",
            "Pagar la comisión del asesor sin importar el rendimiento."
          ],
          correct: 1,
          explanation: "El Núcleo actúa como el ancla de estabilidad patrimonial mediante índices globales y renta fija, evitando errores de concentración individual."
        }
      },
      {
        title: "Rebalanceo Práctico Anual de Cartera",
        content: "La disciplina matemática que te obliga a comprar barato y vender caro de forma sistemática y sin emoción.",
        details: "A medida que los mercados se mueven, las ponderaciones originales de tu portafolio se distorsionan. Si tus acciones suben con fuerza, pueden pasar de representar el 40% al 55% de tu capital, incrementando tu riesgo inadvertidamente. El Rebalanceo es el proceso periódico (anual o ante desviaciones mayores al 5%) de vender una fracción de lo que ha subido (tomando ganancias en máximos) para reinvertirlo en las clases rezagadas que cotizan a precios de descuento.",
        visualType: "rebalancing_calculator",
        speakerNotes: "El rebalanceo es psicológicamente contraintuitivo porque te exige vender el activo estrella del año para comprar el activo que peor se comportó. Pero esa es exactamente la definición de comprar barato.",
        concepts: [
          { term: "Rebalanceo por Calendario", def: "Revisión en fecha fija (ej. cada diciembre o abril) para restituir los porcentajes objetivo de la política de inversión." },
          { term: "Banda de Tolerancia (±5%)", def: "Regla que activa compras o ventas solo cuando un activo se desvía más de 5 puntos porcentuales de su meta." },
          { term: "Rebalanceo por Flujo de Caja", def: "Inyectar nuevo ahorro mensual directamente a los activos rezagados para rebalancear sin necesidad de vender ni pagar comisiones." },
          { term: "Deriva de Cartera (Drift)", def: "Desviación progresiva de los pesos de la cartera provocada por el rendimiento dispar entre activos." }
        ],
        miniQuiz: {
          question: "¿Por qué el rebalanceo sistemático de portafolio elimina el sesgo emocional del inversionista?",
          options: [
            "Porque te obliga mecánicamente a recortar los activos sobreponderados que cotizan caros y añadir a los rezagados infravalorados.",
            "Porque cancela la cuenta bancaria si no compras acciones.",
            "Porque garantiza rendimientos diarios superiores al 10%.",
            "Porque se realiza a través de un robot que no cobra comisiones."
          ],
          correct: 0,
          explanation: "El rebalanceo sustituye el juicio emocional por una regla matemática estricta: reasignar capital desde los activos que se encarecieron hacia los que ofrecen mejor valoración."
        }
      },
      {
        title: "Métricas de Riesgo: Volatilidad, Beta, Sharpe y Sortino",
        content: "Aprende a medir con precisión matemática si el rendimiento de tu cartera justifica el riesgo asumido.",
        details: "El retorno por sí solo no dice nada: ganar 15% con volatilidad del 40% es inferior a ganar 13% con volatilidad del 8%. La Volatilidad anualizada (desviación estándar $\\sigma$) mide la dispersión del precio. La Beta ($\\beta$) mide la sensibilidad respecto al mercado (Beta > 1 es más volátil que el índice). El Ratio de Sharpe ($S = \\frac{R_p - R_f}{\\sigma_p}$) calcula el exceso de retorno obtenido por unidad de riesgo total. El Ratio de Sortino perfecciona a Sharpe al penalizar únicamente la volatilidad bajista perjudicial (downside deviation), ignorando la volatilidad alcista favorable.",
        visualType: "risk_metrics_tool",
        speakerNotes: "Un Ratio de Sharpe superior a 1.0 se considera bueno; por encima de 1.5 es excelente. Siempre compara estrategias descontando la tasa libre de riesgo local (Cetes a 28 días).",
        concepts: [
          { term: "Volatilidad Anualizada (σ)", def: "Desviación estándar de los retornos diarios multiplicada por la raíz de 252 días hábiles bursátiles." },
          { term: "Beta (β)", def: "Covarianza del activo con el mercado dividida entre la varianza del mercado; Beta 1.2 implica 20% más volatilidad que el IPC." },
          { term: "Ratio de Sharpe", def: "Rendimiento del portafolio menos la tasa libre de riesgo dividido entre la volatilidad total: (Rp - Rf) / σ." },
          { term: "Ratio de Sortino", def: "Retorno en exceso dividido únicamente entre la desviación estándar de los retornos negativos: no castiga las ganancias inesperadas." }
        ],
        miniQuiz: {
          question: "¿Cuál es la diferencia analítica fundamental entre el Ratio de Sharpe y el Ratio de Sortino?",
          options: [
            "Sharpe se calcula en pesos y Sortino en dólares estadounidenses.",
            "Sharpe penaliza la volatilidad total (tanto subidas como bajadas), mientras que Sortino solo penaliza la volatilidad a la baja (downside risk).",
            "Sortino no toma en cuenta la tasa libre de riesgo.",
            "Sharpe solo sirve para fondos de inversión europeos."
          ],
          correct: 1,
          explanation: "Sortino aísla la volatilidad negativa perjudicial, reconociendo que los inversores temen a las pérdidas, no a los saltos alcistas repentinos."
        }
      },
      {
        title: "Marco Fiscal en México: Art. 129 LISR y Dividendos",
        content: "Maximiza tu rendimiento real DESPUÉS de impuestos: conoce las reglas oficiales del SAT para bolsa y FIBRAS.",
        details: "En México, la Ley del Impuesto Sobre la Renta (LISR) otorga un régimen altamente favorable para el mercado bursátil regulado. De acuerdo con el Artículo 129 de la LISR, las personas físicas tributan a una tasa preferencial del 10% sobre la ganancia neta anual obtenida por la enajenación de acciones en BMV, BIVA o vía el SIC. Es crucial entender que NO es una retención definitiva mensual del bróker: el intermediario bursátil emite una constancia anual y el impuesto se calcula y paga en la Declaración Anual en abril. En dividendos (Art. 140), la empresa retiene un 10% definitivo y el dividendo bruto acumulable permite acreditar el ISR corporativo. En FIBRAS, las distribuciones por 'Reembolso de Capital' son 100% libres de impuestos.",
        visualType: "fiscal_rules",
        speakerNotes: "Nunca utilices el término 'impuesto cedular' para la bolsa en México: los impuestos cedulares son gravámenes estatales específicos. La ganancia en bolsa es de competencia federal bajo el Art. 129 LISR.",
        concepts: [
          { term: "Art. 129 LISR (Tasa 10%)", def: "Régimen fiscal federal preferencial para enajenación de acciones en bolsa, liquidado en la Declaración Anual." },
          { term: "Constancia Fiscal Anual", def: "Documento oficial que el intermediario bursátil emite en febrero/marzo con la ganancia o pérdida neta real." },
          { term: "Dividendos (Art. 140 LISR)", def: "Retención definitiva del 10% más acumulación a ingresos ordinarios con derecho al acreditamiento del ISR pagado por la emisora." },
          { term: "FIBRAS: Reembolso de Capital", def: "Distribución fiscalmente exenta de impuestos que disminuye el costo promedio de adquisición del certificado." }
        ],
        miniQuiz: {
          question: "Respecto al Artículo 129 de la LISR en México para ganancias de capital en bolsa (BMV / SIC), ¿cuál afirmación es correcta ante el SAT?",
          options: [
            "El bróker retiene un 10% mensual definitivo y no se vuelve a reportar nada al SAT.",
            "El contribuyente calcula y paga el 10% sobre la ganancia neta en su Declaración Anual en abril, con base en la constancia emitida por el bróker.",
            "Pagas el 35% de ISR como si fuera sueldo ordinario.",
            "Es un impuesto estatal denominado comúnmente impuesto cedular."
          ],
          correct: 1,
          explanation: "El Art. 129 LISR establece que la persona física declara la ganancia de capital anual en su Declaración Anual y aplica la tasa preferencial del 10% sobre la utilidad real neta."
        }
      },
      {
        title: "Declaración Anual ante el SAT, Pérdidas y PPR",
        content: "El escudo fiscal definitivo: compensación de pérdidas a 10 años y deducción del Plan Personal de Retiro (Art. 151).",
        details: "Si sufriste pérdidas en bolsa durante el ejercicio fiscal, el Artículo 129 Fracción VI de la LISR te permite un beneficio clave: amortizar esa pérdida fiscal contra las ganancias bursátiles de los siguientes diez ejercicios fiscales consecutivos, impidiendo que pagues impuestos hasta absorber el saldo negativo. Por su parte, el Plan Personal de Retiro (PPR bajo el Art. 151 Fracción V de la LISR) te permite deducir hasta el 10% de tus ingresos anuales acumulables con un tope de 5 UMAs anuales (~$200,000 MXN en 2026), generando cuantiosos saldos a favor en tu declaración anual de abril.",
        visualType: "sat_operations",
        speakerNotes: "Al combinar la compensación de pérdidas bursátiles con tu deducción personal de PPR, puedes convertir tu declaración anual ante el SAT en una fuente líquida de devolución de saldo a favor.",
        concepts: [
          { term: "Amortización de Pérdidas (10 Años)", def: "Derecho a descontar pérdidas netas en acciones contra ganancias bursátiles en los siguientes 10 años fiscales." },
          { term: "PPR (Art. 151 Fracc. V LISR)", def: "Plan Personal de Retiro deducible en la Declaración Anual hasta 10% de ingresos o 5 UMAs anuales." },
          { term: "Saldo a Favor SAT", def: "Devolución en efectivo de impuestos retenidos en exceso gracias a la aplicación de deducciones personales." },
          { term: "Discrepancia Fiscal", def: "Situación donde los gastos o inversiones declaradas superan los ingresos comprobables ante la autoridad." }
        ],
        miniQuiz: {
          question: "Si tuviste una pérdida fiscal de $30,000 MXN vendiendo acciones en bolsa en un año, ¿qué beneficio te concede la LISR?",
          options: [
            "Ninguno, el dinero se pierde por completo.",
            "Puedes compensar esa pérdida contra ganancias de capital futuras en bolsa durante los siguientes 10 ejercicios fiscales.",
            "El SAT te reembolsa los $30,000 MXN en efectivo al día siguiente.",
            "Debes pagar una multa del 10% por perder dinero."
          ],
          correct: 1,
          explanation: "El Art. 129 Fracc. VI LISR permite amortizar pérdidas netas por enajenación de acciones contra ganancias del mismo régimen en los siguientes 10 años fiscales."
        }
      },
      {
        title: "Ética, Transparencia y Deber Fiduciario",
        content: "La integridad y el alineamiento de intereses son el activo de mayor duración en el mundo de las inversiones.",
        details: "El Deber Fiduciario (Fiduciary Duty) es la máxima obligación legal, profesional y moral de colocar los intereses del patrimonio familiar y de los clientes por encima de cualquier comisión, intermediación o incentivo propio. En el mercado bursátil moderno, la revelación oportuna de Conflictos de Interés y la transparencia total en costos de transacción y comisiones de corretaje constituyen la línea divisoria entre el verdadero gestor patrimonial y el vendedor de productos financieros.",
        visualType: "ethics_and_closing",
        quote: { text: "Se necesitan 20 años para construir una reputación financiera y solo cinco minutos para destruirla.", author: "Warren Buffett" },
        speakerNotes: "Tu reputación como inversionista y asesor es tu activo más valioso. Si una operación no supera el test ético del deber fiduciario, no se ejecuta.",
        concepts: [
          { term: "Deber Fiduciario (Fiduciary Duty)", def: "Obligación legal y ética de administrar el capital con el máximo grado de lealtad, prudencia y cuidado hacia el beneficiario." },
          { term: "Conflicto de Interés", def: "Situación donde el interés personal o una comisión externa sesga la objetividad de una recomendación financiera." },
          { term: "Transparencia Total (TER)", def: "Total Expense Ratio: cómputo exhaustivo de todas las comisiones implícitas y explícitas de un fondo o ETF." },
          { term: "Independencia Asesora", def: "Capacidad de elegir los mejores instrumentos globales sin compromisos de colocación con ninguna institución." }
        ],
        miniQuiz: {
          question: "¿En qué consiste el principio del Deber Fiduciario (Fiduciary Duty) en la gestión de capitales?",
          options: [
            "En priorizar la comisión del banco por encima de la rentabilidad del cliente.",
            "En la obligación estricta de anteponer siempre el mejor interés del inversionista y su patrimonio sobre cualquier incentivo propio.",
            "En delegar la declaración anual a un tercero sin supervisar.",
            "En prometer rendimientos garantizados sin riesgo."
          ],
          correct: 1,
          explanation: "El estándar fiduciario es el nivel más alto de responsabilidad ética: exige actuar con total lealtad y cuidado exclusivo en favor del dueño del capital."
        }
      }
    ]
  }
];

// --- BANCO DE PREGUNTAS DEL EXAMEN DE CERTIFICACIÓN DE FASE 4 ---
const quizQuestions = [
  { 
    id: 1, 
    question: "En el análisis del reporte 4T23 de Grupo Bimbo ante la BMV, ¿qué factor sustentó que la corrección a $67.80 MXN fuera una oportunidad de acumulación y no un deterioro permanente?", 
    options: [
      "Que el margen EBITDA se mantuvo sólido en 13.9% y la deuda en 2.4x, siendo la presión originada por costos transitorios de materias primas y tipo de cambio.", 
      "Que la empresa dejó de pagar impuestos ante el SAT.", 
      "Que la BMV canceló todas las deudas de la compañía.", 
      "Que el trigo se volvió gratis en todo el mundo."
    ], 
    correct: 0 
  },
  { 
    id: 2, 
    question: "¿Qué conclusión fundamental estableció el célebre estudio empírico de Brinson, Hood y Beebower respecto a los portafolios de inversión?", 
    options: [
      "Que el 90% de las ganancias se logran con trading diario de noticias.", 
      "Que más del 90% de la variabilidad de los rendimientos en el tiempo proviene de la Asignación de Activos (Asset Allocation).", 
      "Que las acciones individuales siempre baten a los fondos indexados.", 
      "Que la inflación nunca afecta a la renta fija."
    ], 
    correct: 1 
  },
  { 
    id: 3, 
    question: "En una arquitectura de portafolio Core-Satellite estructurada al 70/30, ¿cómo se distribuyen típicamente las funciones?", 
    options: [
      "70% en criptoactivos volátiles y 30% en préstamos familiares.", 
      "70% Núcleo pasivo de bajo costo (índices globales, renta fija, FIBRAS) y 30% Satélites tácticos activos de alta convicción.", 
      "100% en opciones de compra sin coberturas.", 
      "50% en efectivo debajo del colchón y 50% en lotería."
    ], 
    correct: 1 
  },
  { 
    id: 4, 
    question: "¿Cuál es el beneficio primordial del Rebalanceo Periódico de Cartera según la teoría financiera moderna?", 
    options: [
      "Eliminar el sesgo emocional al vender sistemáticamente lo sobrevalorado para comprar las clases rezagadas a precios de descuento.", 
      "Duplicar el pago de comisiones bancarias.", 
      "Evitar que el SAT sepa cuántos títulos posees.", 
      "Asegurar que todas las posiciones tengan idéntico precio en pesos."
    ], 
    correct: 0 
  },
  { 
    id: 5, 
    question: "¿Qué mide específicamente el Ratio de Sharpe en una estrategia de inversión?", 
    options: [
      "El número de acciones que posee una empresa.", 
      "El exceso de rendimiento obtenido por encima de la tasa libre de riesgo por cada unidad de volatilidad total asumida: (Rp - Rf) / σ.", 
      "La ganancia neta en pesos mexicanos sin descontar comisiones.", 
      "El porcentaje de dividendos cobrados en efectivo."
    ], 
    correct: 1 
  },
  { 
    id: 6, 
    question: "¿Por qué el Ratio de Sortino es preferido por muchos gestores profesionales sobre el Ratio de Sharpe?", 
    options: [
      "Porque no utiliza números decimales.", 
      "Porque solo penaliza la volatilidad bajista (downside risk), reconociendo que los saltos alcistas benefician al inversionista.", 
      "Porque se calcula solo en días festivos bursátiles.", 
      "Porque ignora por completo las pérdidas del portafolio."
    ], 
    correct: 1 
  },
  { 
    id: 7, 
    question: "Conforme al Artículo 129 de la LISR en México, ¿cómo tributan las ganancias de capital obtenidas en bolsa (BMV / SIC)?", 
    options: [
      "A una tasa preferencial del 10% que se calcula y paga anualmente en la Declaración Anual de abril con base en la constancia del bróker.", 
      "A una retención mensual definitiva del 35% sin derecho a compensar nada.", 
      "Están 100% exentas de cualquier reporte ante el SAT.", 
      "Mediante un impuesto estatal denominado comúnmente impuesto cedular."
    ], 
    correct: 0 
  },
  { 
    id: 8, 
    question: "Si un inversionista registra pérdidas netas en acciones en su constancia bursátil del ejercicio, ¿durante cuántos años puede amortizarlas?", 
    options: [
      "Solo durante los siguientes 6 meses.", 
      "Hasta por los siguientes 10 ejercicios fiscales consecutivos contra futuras ganancias bursátiles (Art. 129 Fracc. VI LISR).", 
      "No se pueden amortizar en ningún caso.", 
      "Hasta por 50 años pero pagando una penalización del 20%."
    ], 
    correct: 1 
  },
  { 
    id: 9, 
    question: "¿Cuál es el beneficio fiscal de realizar aportaciones a un Plan Personal de Retiro (PPR) bajo el Artículo 151 Fracción V de la LISR?", 
    options: [
      "Deducir hasta el 10% de los ingresos acumulables del año (tope 5 UMAs anuales), generando una devolución de saldo a favor en abril.", 
      "Retirar el dinero en cualquier momento sin pagar ningún tipo de impuesto.", 
      "Comprar acciones de Wall Street sin pasar por la casa de bolsa.", 
      "Pagar menos IVA al comprar mercancías en el supermercado."
    ], 
    correct: 0 
  },
  { 
    id: 10, 
    question: "¿En qué consiste el Deber Fiduciario (Fiduciary Duty) en la asesoría y gestión patrimonial?", 
    options: [
      "En vender únicamente los productos financieros que paguen la comisión más elevada.", 
      "En la obligación legal y moral absoluta de anteponer el interés del cliente y su patrimonio por encima de cualquier beneficio propio.", 
      "En garantizar retornos positivos todos los meses sin riesgo.", 
      "En mantener el dinero guardado en cuentas corrientes de banco comercial."
    ], 
    correct: 1 
  }
];

// --- COMPONENTES VISUALES TÉCNICOS FASE 4 ---

// ── 1. CASO BIMBO VS FLOWERS FOODS ─────────────────
const BimboFlowersCase = () => {
  const [activeTab, setActiveTab] = useState<'fundamental' | 'bmv_vs_nyse' | 'tecnico'>('fundamental');
  return (
    <div className="mt-4 bg-slate-900 rounded-xl border border-amber-500/20 overflow-hidden">
      <div className="flex border-b border-slate-700 bg-slate-800/60 overflow-x-auto">
        {[
          { id: 'fundamental', label: '📊 Fundamentales 4T23' },
          { id: 'bmv_vs_nyse', label: '🌎 BIMBOA (BMV) vs FLO (NYSE)' },
          { id: 'tecnico', label: '📈 Caída $82.50 → $67.80' },
        ].map(tab => (
          <button 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id 
                ? 'text-amber-400 border-b-2 border-amber-400 bg-slate-800' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 text-xs">
        {activeTab === 'fundamental' && (
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="bg-amber-500/20 text-amber-400 font-bold px-2 py-0.5 rounded">Fuente: Reporte Anual BMV 2023-2024</span>
              <span className="text-slate-400 text-[11px]">Auditado ante la CNBV</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Ventas Netas Consolidadas</p>
                <p className="text-sm font-bold text-white">$399,879 MDP</p>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Margen EBITDA</p>
                <p className="text-sm font-bold text-emerald-400">13.9% (Muy Sólido)</p>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Deuda Neta / EBITDA</p>
                <p className="text-sm font-bold text-amber-400">2.4x (Investment Grade)</p>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Impacto Transitorio</p>
                <p className="text-sm font-bold text-rose-400">Trigo + Superpeso</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              💡 <strong>Diagnóstico de Valor:</strong> El negocio panadero mantuvo intacto su poder de fijación de precios y volumen de ventas. La caída bursátil del -17.8% representó una oportunidad de compra inmejorable para inversores con visión de 3 a 5 años.
            </p>
          </div>
        )}

        {activeTab === 'bmv_vs_nyse' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-800 text-slate-400 uppercase text-[9px]">
                <tr>
                  <th className="p-2.5">Métrica Financiera</th>
                  <th className="p-2.5 text-amber-400">BIMBOA (BMV México)</th>
                  <th className="p-2.5 text-blue-400">FLO (NYSE EE.UU.)</th>
                  <th className="p-2.5">Conclusión FA Academy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-2.5 font-bold text-white">Escala Global</td>
                  <td className="p-2.5 text-amber-300 font-bold">Líder Mundial (34 países)</td>
                  <td className="p-2.5 text-blue-300">Líder Regional EE.UU.</td>
                  <td className="p-2.5 text-emerald-400">✅ Mayor foso defensivo en Bimbo</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white">Margen EBITDA</td>
                  <td className="p-2.5 font-bold text-emerald-400">13.9%</td>
                  <td className="p-2.5 font-bold text-blue-400">10.2%</td>
                  <td className="p-2.5 text-emerald-400">✅ Bimbo supera en 370 bps a FLO</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white">Múltiplo P/E</td>
                  <td className="p-2.5 font-bold text-amber-400">16.5x</td>
                  <td className="p-2.5 font-bold text-blue-400">18.2x</td>
                  <td className="p-2.5 text-emerald-400">✅ Bimbo cotizaba con descuento atractivo</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'tecnico' && (
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Máximo previo al reporte: <strong className="text-white">$82.50 MXN</strong></span>
              <span className="text-rose-400 font-bold">Mínimo de corrección: $67.80 MXN (-17.8%)</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden relative">
              <div className="absolute left-0 w-[82%] h-full bg-amber-500"></div>
              <div className="absolute left-[68%] w-1 h-full bg-white"></div>
            </div>
            <p className="text-[11px] text-slate-400">
              Soporte estructural histórico respetado en los $67.50 - $68.00 MXN. Coincidencia con zona de rebote fundamental institucional.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// ── 2. ASSET ALLOCATION MASTER (BRINSON STUDY) ─────
const AssetAllocationMaster = () => (
  <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Estudio Brinson, Hood & Beebower: Variabilidad Temporal</h4>
      <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">91.5% - 93.6%</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
      <div className="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl text-center">
        <p className="text-2xl font-black text-emerald-400">91.5%</p>
        <p className="font-bold text-white mt-1">Asset Allocation</p>
        <p className="text-[10px] text-slate-400 mt-0.5">La mezcla estratégica de clases de activos explica la varianza del portafolio en el tiempo.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-center">
        <p className="text-2xl font-black text-slate-400">4.6%</p>
        <p className="font-bold text-white mt-1">Stock Picking</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Selección de acciones individuales dentro de cada clase.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-center">
        <p className="text-2xl font-black text-slate-400">1.8%</p>
        <p className="font-bold text-white mt-1">Market Timing</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Intentar adivinar el momento exacto de entrada o salida.</p>
      </div>
    </div>
    <p className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
      🎯 <strong>Conclusión Matemática:</strong> No desgastes tu energía buscando la próxima acción milagrosa. Diseña una política de asignación coherente con tu horizonte de vida y mantén la disciplina.
    </p>
  </div>
);

// ── 3. CORE-SATELLITE VISUAL ───────────────────────
const CoreSatelliteVisual = () => (
  <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Arquitectura Core-Satellite: Asignación Real 70/30</h4>
      <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Equilibrio Eficiente</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800/80 p-3.5 rounded-xl border-l-4 border-emerald-500 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-emerald-400 text-sm">NÚCLEO (Core 70%)</span>
          <span className="text-slate-400 text-[10px]">Crecimiento Seguro</span>
        </div>
        <ul className="space-y-1.5 text-slate-300 text-[11px]">
          <li className="flex justify-between"><span>• 40% Renta Variable Global (VOO / IVVPESO)</span><strong className="text-white">Motor</strong></li>
          <li className="flex justify-between"><span>• 20% Renta Fija Gubernamental (Cetes / Mbonos)</span><strong className="text-white">Freno</strong></li>
          <li className="flex justify-between"><span>• 10% FIBRAS Inmobiliarias (FMTY14, FUNO)</span><strong className="text-white">Flujo</strong></li>
        </ul>
      </div>

      <div className="bg-slate-800/80 p-3.5 rounded-xl border-l-4 border-violet-500 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-violet-400 text-sm">SATÉLITES (30%)</span>
          <span className="text-slate-400 text-[10px]">Búsqueda de Alfa</span>
        </div>
        <ul className="space-y-1.5 text-slate-300 text-[11px]">
          <li className="flex justify-between"><span>• 15% Acciones Individuales de Convicción (Bimbo/Google)</span><strong className="text-white">Valor</strong></li>
          <li className="flex justify-between"><span>• 10% ETFs Temáticos (Nearshoring / Semiconductores)</span><strong className="text-white">Tendencia</strong></li>
          <li className="flex justify-between"><span>• 5% Coberturas Asimétricas / Oro / Efectivo</span><strong className="text-white">Colchón</strong></li>
        </ul>
      </div>
    </div>
  </div>
);

// ── 4. REBALANCING CALCULATOR ──────────────────────
const RebalancingCalculator = () => {
  const [currentStock, setCurrentStock] = useState(48000);
  const [currentBond, setCurrentBond] = useState(22000);
  const total = currentStock + currentBond;
  const targetStockPct = 0.60;
  const targetBondPct = 0.40;

  const targetStock = total * targetStockPct;
  const targetBond = total * targetBondPct;
  const stockDiff = targetStock - currentStock;

  return (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <RefreshCw size={16} className="text-amber-400" />
            Calculadora de Rebalanceo Anual Paso a Paso
          </h4>
          <p className="text-[11px] text-slate-400">Caso 60% Acciones / 40% Deuda en cartera de $70,000 MXN</p>
        </div>
        <button
          onClick={downloadAssetAllocationTemplate}
          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
        >
          <Download size={14} />
          Descargar Plantilla Excel
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">Acciones Actuales</p>
          <p className="text-sm font-bold text-amber-400">${currentStock.toLocaleString()} ({((currentStock/total)*100).toFixed(1)}%)</p>
        </div>
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">Renta Fija Actual</p>
          <p className="text-sm font-bold text-blue-400">${currentBond.toLocaleString()} ({((currentBond/total)*100).toFixed(1)}%)</p>
        </div>
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">Meta Acciones (60%)</p>
          <p className="text-sm font-bold text-white">${targetStock.toLocaleString()}</p>
        </div>
        <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/40">
          <p className="text-[10px] text-emerald-300 font-semibold">Acción Requerida</p>
          <p className="text-xs font-bold text-emerald-400">
            {stockDiff < 0 ? `Vender $${Math.abs(stockDiff).toLocaleString()} de acciones` : `Comprar $${stockDiff.toLocaleString()}`}
          </p>
        </div>
      </div>
      <p className="text-[11px] text-slate-400">
        📌 <strong>Regla de Ejecución:</strong> Se venden $6,000 MXN de acciones (que subieron al 68.6%) y se transfieren a Cetes para regresar con precisión a la meta original 60/40.
      </p>
    </div>
  );
};

// ── 5. RISK METRICS TOOL ───────────────────────────
const RiskMetricsTool = () => (
  <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Métricas Matemáticas de Evaluación de Riesgo</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-[10px] text-slate-400 font-mono">Volatilidad (σ)</p>
        <p className="text-sm font-bold text-white">12.4% Anual</p>
        <p className="text-[9px] text-slate-500 mt-0.5">Dispersión de retornos</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-[10px] text-slate-400 font-mono">Beta (β)</p>
        <p className="text-sm font-bold text-blue-400">0.85</p>
        <p className="text-[9px] text-slate-500 mt-0.5">15% menos sensible que el IPC</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-[10px] text-slate-400 font-mono">Ratio de Sharpe</p>
        <p className="text-sm font-bold text-emerald-400">1.42 (Excelente)</p>
        <p className="text-[9px] text-slate-500 mt-0.5">(Rp - Rf) / σ</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-[10px] text-slate-400 font-mono">Ratio de Sortino</p>
        <p className="text-sm font-bold text-violet-400">2.15 (Sobresaliente)</p>
        <p className="text-[9px] text-slate-500 mt-0.5">Solo penaliza caída</p>
      </div>
    </div>
  </div>
);

// ── 6. FISCAL RULES SAT ────────────────────────────
const FiscalRules = () => (
  <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Marco Fiscal en México: Art. 129 LISR y Declaración Anual</h4>
      <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Fuente: SAT / LISR</span>
    </div>
    <div className="space-y-2 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-emerald-500">
        <div className="flex justify-between items-center mb-1">
          <strong className="text-emerald-400">Enajenación de Acciones (BMV / SIC) — Art. 129 LISR</strong>
          <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">Tasa 10% Anual</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Las personas físicas pagan una tasa preferencial del 10% sobre la ganancia neta anual obtenida en bolsa. <strong>No es retención mensual definitiva del bróker</strong>: la casa de bolsa emite tu constancia anual en febrero y el impuesto se calcula y liquida en la Declaración Anual de abril.
        </p>
      </div>

      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <div className="flex justify-between items-center mb-1">
          <strong className="text-amber-400">Régimen de Dividendos — Art. 140 LISR</strong>
          <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">Retención 10% + Acreditamiento</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          La emisora retiene un 10% definitivo sobre el dividendo pagado. El monto bruto acumulable se integra a tu declaración anual, permitiendo acreditar el ISR que ya pagó la empresa a nivel corporativo.
        </p>
      </div>

      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
        <div className="flex justify-between items-center mb-1">
          <strong className="text-blue-400">FIBRAS Inmobiliarias (Fideicomisos de Bienes Raíces)</strong>
          <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">Reembolso Exento</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Las distribuciones etiquetadas como 'Reembolso de Capital' son <strong>100% libres de impuestos</strong> para el inversionista. Las distribuidas como 'Resultado Fiscal' tributan a tu tasa personal ordinaria.
        </p>
      </div>
    </div>
  </div>
);

// ── 7. SAT OPERATIONS, LOSS OFFSET & PPR ───────────
const SatOperations = () => (
  <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
      <div>
        <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <FileText size={16} className="text-emerald-400" />
          Operatividad de la Declaración Anual: Pérdidas a 10 Años y PPR
        </h4>
        <p className="text-[11px] text-slate-400">Escudo fiscal y optimización de saldo a favor ante el SAT</p>
      </div>
      <button
        onClick={downloadFiscalDeclarationTemplate}
        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
      >
        <Download size={14} />
        Descargar Calculadora Fiscal SAT
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
      <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1.5">
        <p className="font-bold text-emerald-400">🛡️ Amortización de Pérdidas Bursátiles (10 Años)</p>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Art. 129 Fracc. VI LISR: Si un año cierras con pérdidas en bolsa, el SAT te permite restar esa pérdida contra ganancias de capital futuras durante los <strong>siguientes 10 ejercicios fiscales</strong>.
        </p>
        <div className="bg-slate-950 p-2 rounded text-[10px] font-mono text-emerald-300">
          Ejemplo: Ganancia $50k - Pérdida previa $20k = Base neta $30k (Pagas $3,000 en vez de $5,000).
        </div>
      </div>

      <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1.5">
        <p className="font-bold text-blue-400">🎯 Deducción del PPR (Art. 151 Fracc. V LISR)</p>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Puedes deducir aportaciones al retiro de hasta el <strong>10% de tus ingresos anuales</strong> o 5 UMAs anuales (~$200,000 MXN), generando una devolución de saldo a favor líquida en tu cuenta bancaria.
        </p>
        <div className="bg-slate-950 p-2 rounded text-[10px] font-mono text-blue-300">
          Con tasa marginal de 30%, una aportación de $50,000 devuelve $15,000 MXN en efectivo.
        </div>
      </div>
    </div>
  </div>
);

// ── 8. ETHICS & FIDUCIARY CLOSING ──────────────────
const EthicsAndClosing = () => (
  <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-3 text-xs">
    <div className="flex items-center gap-2 text-amber-400 font-bold">
      <ShieldAlert size={18} />
      <span>El Estándar Fiduciario y la Integridad Profesional</span>
    </div>
    <p className="text-slate-300 text-[11px] leading-relaxed">
      El Deber Fiduciario te obliga a anteponer el beneficio del inversionista a cualquier incentivo económico personal. Gestionar un patrimonio no es vender productos con altas comisiones; es diseñar portafolios eficientes en costos y fiscalidad que resistan las crisis económicas.
    </p>
  </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 4 ---

export default function CoursePlayerPhase4() {
  const { user, updateProgress, submitTestResult } = useAuth();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Mini-quiz interactivo por lección
  const [lessonQuizAnswer, setLessonQuizAnswer] = useState<number | null>(null);
  const [showLessonFeedback, setShowLessonFeedback] = useState(false);

  const moduleData = courseData[0];
  const lessonData = moduleData.lessons[currentLesson];

  // Cargar progreso guardado al iniciar
  useEffect(() => {
    try {
      const saved = localStorage.getItem('fa_phase_4_progress');
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
      localStorage.setItem('fa_phase_4_progress', currentLesson.toString());
      localStorage.setItem('fa_phase_4_total', moduleData.lessons.length.toString());
    } catch (e) {
      // ignore
    }
    if (user) {
      updateProgress(4, currentLesson, moduleData.lessons.length);
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
      submitTestResult(4, calculatedScore, quizQuestions.length);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📊 *Certificación Aprobada - Fase 4 (Portafolios y Fiscalidad SAT)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Aprobado en Modelo Core-Satellite, Rebalanceo y Declaración Anual Art. 129 LISR. Solicitud de diploma oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'bimbo_flowers_case': return <BimboFlowersCase />;
      case 'asset_allocation_master': return <AssetAllocationMaster />;
      case 'core_satellite_visual': return <CoreSatelliteVisual />;
      case 'rebalancing_calculator': return <RebalancingCalculator />;
      case 'risk_metrics_tool': return <RiskMetricsTool />;
      case 'fiscal_rules': return <FiscalRules />;
      case 'sat_operations': return <SatOperations />;
      case 'ethics_and_closing': return <EthicsAndClosing />;
      default: return null;
    }
  };

  // VISTA DE EXAMEN DE CERTIFICACIÓN
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <div className="max-w-3xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 4: Portafolio, Riesgo & Fiscalidad
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas de validación sobre el caso Bimbo, Asset Allocation, Core-Satellite, Rebalanceo y LISR ante el SAT.
            </p>
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
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
                            ? 'bg-amber-500 border-amber-300 text-slate-950 font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-amber-900/30 cursor-pointer"
                >
                  Calificar Certificación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-amber-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(245,158,11,0.25)]">
                <Award className="w-20 h-20 text-amber-400 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-extrabold text-white">¡Examen de Fase 4 Calificado!</h2>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 my-6">
                  {score} / {quizQuestions.length}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {score >= 7 
                    ? '¡Felicidades! Has demostrado dominio riguroso de la frontera eficiente, el modelo Core-Satellite y el régimen fiscal del Art. 129 ante el SAT.' 
                    : 'Te sugerimos repasar la amortización de pérdidas a 10 años y el rebalanceo de portafolio antes de solicitar tu certificado.'}
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
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/10 p-2 rounded-xl border border-amber-500/20">
              <Shield className="text-amber-400" size={22} />
            </div>
            <div>
              <span className="font-extrabold text-white tracking-wider text-sm md:text-base block">
                FA ACADEMY <span className="text-amber-400 font-normal">| Fase 4</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden md:block">
                Gestión de Riesgo, Portafolio y Fiscalidad
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadAssetAllocationTemplate}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium border border-slate-700 transition-colors"
            >
              <FileSpreadsheet size={14} className="text-amber-400" />
              Plantilla Rebalanceo
            </button>
            <div className="text-xs md:text-sm font-bold text-slate-300 bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700">
              Lección {currentLesson + 1} <span className="text-slate-500">/</span> {moduleData.lessons.length}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out" 
            style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-500/15 text-amber-400 font-bold text-[10px] md:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-500/30">
              Lección {currentLesson + 1}: {lessonData.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
            {lessonData.title}
          </h1>
        </div>

        {lessonData.videoUrls && lessonData.videoUrls.map((videoId: string, i: number) => (
          <div key={i} className="mb-6 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title={lessonData.videoTitle || "Clase de Portafolio y Fiscalidad"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}

        <div className="bg-slate-900/60 rounded-2xl p-4 md:p-6 border border-slate-800 shadow-xl mb-6 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          {renderVisual(lessonData.visualType)}
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-slate-800 to-slate-850 p-6 rounded-2xl border-l-4 border-amber-500 shadow-lg">
            <p className="text-base md:text-lg text-amber-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {lessonData.details}
            </p>
            {lessonData.speakerNotes && (
              <div className="text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <Brain size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 not-italic block mb-0.5">Directriz Estratégica FA Academy:</strong>
                  {lessonData.speakerNotes}
                </div>
              </div>
            )}
          </div>

          {lessonData.concepts && (
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-amber-400" />
                Conceptos Clave de la Lección
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lessonData.concepts.map((c, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-xs font-bold text-amber-300 mb-1">{c.term}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lessonData.miniQuiz && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-amber-500/30 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle size={18} className="text-amber-400" />
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
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
                    btnStyle = 'bg-amber-500 border-amber-300 text-slate-950 font-bold';
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
                  idx === currentLesson ? 'bg-amber-400 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Ir a Lección ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95"
          >
            <span>{currentLesson === moduleData.lessons.length - 1 ? 'Ir al Examen de Certificación' : 'Siguiente Lección'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}
