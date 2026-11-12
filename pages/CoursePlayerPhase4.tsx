import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  Percent, Award, PlayCircle, Clock, ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadAssetAllocationTemplate, downloadFiscalDeclarationTemplate } from '../utils/resources';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 4: GESTIÓN DE RIESGO, PORTAFOLIO Y FISCALIDAD SAT 2026 (9 LECCIONES) ---

const courseData = [
  {
    id: 1,
    title: "Módulo 4: Gestión de Riesgo, Portafolio y Fiscalidad",
    description: "El Arte del Asset Allocation, Core-Satellite, Control de Drawdown, Fiscalidad SAT 2026 y Money Management.",
    lessons: [
      {
        title: "Caso de Estudio: Bimbo vs Flowers Foods (BMV / NYSE)",
        content: "Aprende a leer el lenguaje de los estados financieros: por qué una corrección del -18% en BIMBOA fue una oportunidad de acumulación histórica.",
        details: "El 19 de febrero de 2024, Grupo Bimbo (BIMBOA.MX) presentó su reporte anual y 4T23 ante la Bolsa Mexicana de Valores (BMV). El precio de la acción corrigió rápidamente desde los $82.50 MXN hasta los $67.80 MXN (-17.8%). Para el inversor novato que solo miraba el gráfico, fue pánico puro. Para el estratega fundamental, fue una oportunidad excepcional: las ventas anuales alcanzaron $399,879 millones de MXN y el margen EBITDA se mantuvo sólido en 13.9%, demostrando que la caída temporal obedeció a la volatilidad en el costo del trigo y materias primas y al efecto contable del 'superpeso' en Norteamérica, manteniendo su grado de inversión con Deuda/EBITDA de 2.4x frente a Flowers Foods (FLO:NYSE) en EE.UU.",
        visualType: "bimbo_flowers_case",
        videoUrls: ["e5YgKlsio_w"],
        videoTitle: "Análisis Fundamental de BIMBOA y Reportes Financieros BMV",
        videoDuration: "19 min",
        disclaimer: "Educación, no asesoría financiera. El desempeño histórico no garantiza rendimientos futuros.",
        speakerNotes: "Pregunta siempre: ¿La caída proviene de un deterioro permanente del negocio o de una compresión temporal de múltiplos por factores macroeconómicos? Si el negocio mantiene su foso económico y flujo de caja, el pánico es tu mejor aliado.",
        concepts: [
          { term: "Reporte 4T BMV", def: "Informe financiero auditado del cuarto trimestre y cierre anual presentado ante la CNBV y el público inversionista." },
          { term: "Margen EBITDA (13.9%)", def: "Porcentaje de ventas convertido en flujo operativo antes de intereses, impuestos y depreciaciones; métrica reina de eficiencia panadera." },
          { term: "Razón Deuda Neta / EBITDA (2.4x)", def: "Años de flujo requeridos para cubrir pasivos; Bimbo mantiene rango conservador grado de inversión." },
          { term: "Costo de Materias Primas", def: "Fluctuación en insumos agrícolas (trigo, maíz, aceites) que impacta transitoriamente el costo de ventas." }
        ],
        realExample: {
          asset: "Grupo Bimbo S.A.B. de C.V. (BMV: BIMBOA)",
          date: "Reporte auditado 4T23 presentado el 19 de febrero de 2024",
          source: "Bolsa Mexicana de Valores (BMV) / Reportes Financieros Bimbo",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Ventas netas de $399,879 MDP y EBITDA de $54,942 MDP. Pese a la caída en bolsa a $67.80 MXN por el superpeso, su posición competitiva global en 34 países demostró que el valor intrínseco del negocio superaba con creces la cotización bursátil momentánea."
        },
        deliverableExercise: {
          title: "Auditoría de Margen Operativo y Deuda en una Emisora",
          description: "Descarga el reporte trimestral más reciente de una empresa de la BMV o SIC (ej. Walmart de México WALMEX o Bimbo) y calcula su margen EBITDA y su razón Deuda Neta / EBITDA. Define si la cotización actual representa una compresión de múltiplos o deterioro real."
        },
        quizzes: [
          {
            question: "En el reporte 4T23 de Grupo Bimbo, ¿cuál fue la razón principal de la corrección de $82.50 a $67.80 MXN pese a mantener un margen EBITDA del 13.9%?",
            options: [
              "Que la empresa se declaró en bancarrota fraudulenta.",
              "Factores temporales: volatilidad en el costo del trigo e impacto cambiario del superpeso en ventas de Norteamérica, sin daño estructural al negocio.",
              "Que suspendieron el reparto de pan en todo México.",
              "Un error tipográfico de la Bolsa Mexicana de Valores."
            ],
            correct: 1,
            explanation: "Los estados financieros mostraron que el foso económico y el flujo de Bimbo seguían intactos; la presión fue transitoria por materias primas y conversión cambiaria."
          },
          {
            question: "¿Qué indica una razón Deuda Neta / EBITDA de 2.4x en una corporación industrial multinacional como Bimbo?",
            options: [
              "Que la empresa quebrará en menos de tres meses.",
              "Un nivel de apalancamiento prudente y conservador con grado de inversión, que permite cubrir la deuda neta en 2.4 años de flujo operativo.",
              "Que no tiene obligaciones financieras con ningún banco.",
              "Que el 100% de sus ventas se destinan a pagar intereses."
            ],
            correct: 1,
            explanation: "En finanzas corporativas, una razón Deuda Neta / EBITDA por debajo de 3.0x suele calificar como grado de inversión sólido según las agencias calificadoras (Fitch, S&P, Moody's)."
          },
          {
            question: "¿Por qué el inversor con enfoque fundamental compara BIMBOA (BMV) contra Flowers Foods FLO (NYSE)?",
            options: [
              "Para verificar múltiplos relativos (P/E, margen EBITDA) entre pares de la misma industria en distintas geografías y detectar subvaluaciones.",
              "Porque es obligatorio por la Ley del Mercado de Valores.",
              "Para comprar ambas empresas en la misma orden de mercado.",
              "Porque Flowers Foods es dueña de Bimbo."
            ],
            correct: 0,
            explanation: "El análisis de empresas comparables (Comps) permite evaluar la eficiencia de gestión de costos, fosos de mercado y valuación relativa entre líderes del mismo sector."
          }
        ]
      },
      {
        title: "Asset Allocation y la Frontera Eficiente",
        content: "El 90% de la variabilidad de tus rendimientos a largo plazo depende de la mezcla de activos, no de la selección de acciones individuales.",
        details: "El célebre estudio empírico de Brinson, Hood y Beebower (1986, confirmado en 1991 en el Financial Analysts Journal) demostró rigurosamente que más del 91.5% al 93.6% de la variabilidad de los rendimientos a lo largo del tiempo de un portafolio proviene de la Asignación de Activos (Asset Allocation), y no de la selección de valores individuales (stock picking) ni del momento de entrada (market timing). La Frontera Eficiente de Harry Markowitz demuestra que combinar activos no correlacionados reduce el riesgo sin sacrificar retorno esperado.",
        visualType: "asset_allocation_master",
        source: "Estudio: Brinson, Hood & Beebower — Determinants of Portfolio Performance",
        quote: { text: "La diversificación es la única comida gratis en las finanzas.", author: "Harry Markowitz (Premio Nobel de Economía)" },
        disclaimer: "Educación, no asesoría financiera. La diversificación aminora el riesgo no sistemático pero no elimina el riesgo general de mercado.",
        speakerNotes: "El estudio de Brinson demostró que los gestores que pasan semanas intentando adivinar el momento exacto de compra aportan menos del 5% de la varianza del rendimiento frente a quienes eligen una asignación de activos estratégica.",
        concepts: [
          { term: "Estudio Brinson (1986/1991)", def: "Investigación que probó que más del 90% de la variabilidad temporal de los retornos depende del Asset Allocation." },
          { term: "Frontera Eficiente", def: "Curva matemática de carteras que maximizan el rendimiento esperado para cada nivel de volatilidad dado." },
          { term: "Correlación Negativa", def: "Comportamiento donde dos activos se compensan entre sí (ej. bonos subiendo cuando las acciones corrigen)." },
          { term: "Varianza de Portafolio", def: "Medida del riesgo conjunto de los activos, amortiguada gracias a la covarianza entre clases." }
        ],
        realExample: {
          asset: "Portafolio Institucional Multi-Activo (Estudio Brinson et al.)",
          date: "Revisión histórica de 82 grandes fondos de pensiones estadounidenses (1977-1987 y actualización 1991)",
          source: "Financial Analysts Journal / CFA Institute",
          url: "https://www.cfainstitute.org/en/research/financial-analysts-journal",
          caseDescription: "La política de inversión estratégica (Asset Allocation) explicó el 93.6% de la variación de rendimientos trimestrales. La selección de acciones particulares aportó apenas el 4.6% y el market timing el 1.8%."
        },
        deliverableExercise: {
          title: "Diseño de Política de Asignación Estratégica (IPS)",
          description: "Escribe tu propia declaración de política de inversión: define tu porcentaje objetivo en renta variable global, renta fija gubernamental y bienes raíces (ej. 60/30/10) justificando tu horizonte temporal en años."
        },
        quizzes: [
          {
            question: "¿Qué demostró exactamente el estudio seminal de Brinson, Hood y Beebower sobre el rendimiento de las inversiones?",
            options: [
              "Que el 90% de tus ganancias provienen de comprar opciones especulativas.",
              "Que más del 90% de la variabilidad de los retornos a lo largo del tiempo se explica por la Asignación de Activos (Asset Allocation).",
              "Que el análisis técnico intradía siempre bate al mercado.",
              "Que no se deben comprar bonos gubernamentales nunca."
            ],
            correct: 1,
            explanation: "Brinson, Hood y Beebower concluyeron que la política de asignación entre clases de activos explica más del 90% de la variación del rendimiento temporal de una cartera."
          },
          {
            question: "En la teoría moderna de portafolios de Harry Markowitz, ¿qué define a la 'Frontera Eficiente'?",
            options: [
              "El conjunto de carteras que ofrecen el máximo rendimiento esperado para cada nivel determinado de riesgo o volatilidad.",
              "Las acciones que cotizan únicamente en la Bolsa de Nueva York.",
              "El límite legal de títulos que un extranjero puede comprar en México.",
              "Una línea que separa las empresas rentables de las que tienen deudas."
            ],
            correct: 0,
            explanation: "La frontera eficiente representa el límite matemático donde no es posible obtener mayor rendimiento esperado sin asumir mayor volatilidad."
          },
          {
            question: "Si combinas en tu portafolio dos activos con coeficiente de correlación de -0.40, ¿qué ocurre con el riesgo total del portafolio?",
            options: [
              "El riesgo total se multiplica por dos.",
              "La volatilidad total del portafolio disminuye por efecto de compensación mutua sin reducir necesariamente el retorno esperado.",
              "La cartera queda bloqueada por la CNBV.",
              "El SAT cobra el doble de impuestos."
            ],
            correct: 1,
            explanation: "La correlación negativa o baja entre clases de activos reduce la varianza de la cartera gracias al efecto de covarianza, que es la base matemática de la diversificación."
          }
        ]
      },
      {
        title: "Modelo Core-Satellite con Portafolio Real",
        content: "Estructura tu capital con arquitectura institucional: 70% Núcleo de bajo costo y 30% Satélites de alta convicción.",
        details: "El modelo Core-Satellite combina la eficiencia pasiva con la búsqueda de alfa activo. El Núcleo (Core, 70% del portafolio) se asigna a vehículos indexados globales de muy bajo costo y renta fija soberana para asegurar el interés compuesto: ej. 40% en renta variable global indexada (VOO / IVVPESO), 20% en deuda soberana en pesos (Cetes / Mbonos) y 10% en bienes raíces (FIBRAS). Los Satélites (30% restante) buscan rendimientos asimétricos: 15% en empresas individuales de alta convicción (Bimbo, Google), 10% en temáticas de expansión (nearshoring/semiconductores) y 5% en reservas tácticas u oro.",
        visualType: "core_satellite_visual",
        disclaimer: "Educación, no asesoría financiera. Las ponderaciones del modelo deben ajustarse a la capacidad real de absorción de pérdidas del alumno.",
        speakerNotes: "El Núcleo protege tu futuro financiero pase lo que pase en el mercado. Los Satélites te permiten explotar oportunidades sin poner en riesgo tu patrimonio principal.",
        concepts: [
          { term: "Núcleo (Core 70%)", def: "Base indexada diversificada de bajo costo que captura el crecimiento económico mundial sin riesgo de selección individual." },
          { term: "Satélites (30%)", def: "Posiciones activas tácticas en acciones individuales, sectores en disrupción o coberturas asimétricas." },
          { term: "Generación de Alfa (α)", def: "Rendimiento adicional generado por encima del índice de referencia gracias a la selección táctica de satélites." },
          { term: "Beta del Portafolio (β)", def: "Sensibilidad del núcleo respecto a los movimientos globales del mercado general." }
        ],
        realExample: {
          asset: "Portafolio Mexicano Core-Satellite 2026",
          date: "Cierre de mercado 2026-11-07",
          source: "TradingView / Banco de México / BMV",
          url: "https://www.banxico.org.mx/",
          caseDescription: "Estructura con Núcleo: 40% IVVPESO (S&P 500 cubierto), 20% CETES 28D (tasa 10.20%), 10% FIBRA Monterrey (FMTY14 yield mensual). Satélites: 15% BIMBOA + FEMSAUBD, 10% ETF Semiconductores (SMH), 5% Oro físico/IAU. Rendimiento con volatilidad 40% menor al S&P 500 puro."
        },
        deliverableExercise: {
          title: "Matriz de Asignación Core-Satellite para tu Capital",
          description: "Llena la plantilla con los tickers reales de tu elección para el 70% Núcleo (mínimo 2 activos indexados/renta fija) y para el 30% Satélite (máximo 4 activos tácticos), indicando el objetivo de cada uno."
        },
        quizzes: [
          {
            question: "En una estrategia Core-Satellite estructurada al 70/30, ¿cuál es el objetivo primordial del Núcleo (Core)?",
            options: [
              "Hacer Day Trading apalancado todas las mañanas.",
              "Proveer una base indexada y de renta fija sólida, de bajo costo y diversificada, que garantice la captura del mercado.",
              "Comprar únicamente criptomonedas recién creadas.",
              "Pagar la comisión del asesor sin importar el rendimiento."
            ],
            correct: 1,
            explanation: "El Núcleo actúa como el ancla de estabilidad patrimonial mediante índices globales y renta fija, evitando errores de concentración individual."
          },
          {
            question: "¿Qué porcentaje máximo se recomienda asignar a las posiciones tácticas individuales (Satélites) para evitar poner en jaque el patrimonio?",
            options: [
              "Entre el 20% y el 30% del portafolio total, limitando cada acción individual al 5%-10%.",
              "El 100% en una sola acción que sea tendencia en redes sociales.",
              "El 0%, está prohibido invertir fuera de Cetes.",
              "El 80% en instrumentos derivados."
            ],
            correct: 0,
            explanation: "Limitar los satélites al 20%-30% garantiza que incluso si una empresa quiebra por completo, el daño sobre el portafolio total sea marginal y absorbible."
          },
          {
            question: "¿Qué papel cumple el vehículo indexado IVVPESO en el Núcleo de un inversionista con gastos en pesos mexicanos?",
            options: [
              "Otorga exposición al índice S&P 500 cotizando en pesos en la BMV con cobertura cambiaria peso-dólar.",
              "Es un pagaré bancario emitido por el gobierno de EE.UU.",
              "Es una acción individual de una empresa mexicana de software.",
              "Es un fondo de deuda que solo invierte en Cetes."
            ],
            correct: 0,
            explanation: "IVVPESO es el ETF de iShares que replica el S&P 500 con cobertura cambiaria a pesos (hedged), aislando el rendimiento bursátil de las fluctuaciones USD/MXN."
          }
        ]
      },
      {
        title: "Rebalanceo Práctico Anual de Cartera",
        content: "La disciplina matemática que te obliga a comprar barato y vender caro de forma sistemática y sin emoción.",
        details: "A medida que los mercados se mueven, las ponderaciones originales de tu portafolio se distorsionan. Si tus acciones suben con fuerza, pueden pasar de representar el 40% al 55% de tu capital, incrementando tu riesgo inadvertidamente. El Rebalanceo es el proceso periódico (anual o ante desviaciones mayores al 5%) de vender una fracción de lo que ha subido (tomando ganancias en máximos) para reinvertirlo en las clases rezagadas que cotizan a precios de descuento.",
        visualType: "rebalancing_calculator",
        disclaimer: "Educación, no asesoría financiera. Al rebalancear vendiendo activos se deben considerar los costos de corretaje y el impacto fiscal del 10% LISR.",
        speakerNotes: "El rebalanceo es psicológicamente contraintuitivo porque te exige vender el activo estrella del año para comprar el activo que peor se comportó. Pero esa es exactamente la definición de comprar barato.",
        concepts: [
          { term: "Rebalanceo por Calendario", def: "Revisión en fecha fija (ej. cada diciembre o abril) para restituir los porcentajes objetivo de la política de inversión." },
          { term: "Banda de Tolerancia (±5%)", def: "Regla que activa compras o ventas solo cuando un activo se desvía más de 5 puntos porcentuales de su meta." },
          { term: "Rebalanceo por Flujo de Caja", def: "Inyectar nuevo ahorro mensual directamente a los activos rezagados para rebalancear sin necesidad de vender ni pagar comisiones." },
          { term: "Deriva de Cartera (Drift)", def: "Desviación progresiva de los pesos de la cartera provocada por el rendimiento dispar entre activos." }
        ],
        realExample: {
          asset: "Cartera 60/40 en el Mercado Mexicano (Renta Variable / CETES)",
          date: "Periodo Anual 2024-2025",
          source: "Bolsa Mexicana de Valores / CetesDirecto",
          url: "https://www.cetesdirecto.com/",
          caseDescription: "Un portafolio inicial de $100,000 MXN (60% acciones / 40% Cetes) termina el año en $118,000 MXN con las acciones pesando 68.6% y Cetes 31.4%. El inversionista disciplinado vende $6,000 de acciones para comprar Cetes, capturando utilidades en máximos y restableciendo la meta 60/40."
        },
        deliverableExercise: {
          title: "Cálculo de Órdenes de Rebalanceo en Plantilla Excel",
          description: "Descarga la plantilla de rebalanceo de FA Academy, ingresa las ponderaciones actuales de tus cuentas de inversión y calcula las órdenes exactas de compra o venta requeridas para volver a tus bandas de tolerancia."
        },
        quizzes: [
          {
            question: "¿Por qué el rebalanceo sistemático de portafolio elimina el sesgo emocional del inversionista?",
            options: [
              "Porque te obliga mecánicamente a recortar los activos sobreponderados que cotizan caros y añadir a los rezagados infravalorados.",
              "Porque cancela la cuenta bancaria si no compras acciones.",
              "Porque garantiza rendimientos diarios superiores al 10%.",
              "Porque se realiza a través de un robot que no cobra comisiones."
            ],
            correct: 0,
            explanation: "El rebalanceo sustituye el juicio emocional por una regla matemática estricta: reasignar capital desde los activos que se encarecieron hacia los que ofrecen mejor valoración."
          },
          {
            question: "En lugar de vender activos y generar comisiones bursátiles o hechos imponibles ante el SAT, ¿cuál es el método más eficiente de rebalanceo?",
            options: [
              "Pedir un préstamo bancario caro.",
              "Rebalancear con flujos de nuevo ahorro mensual, dirigiendo las aportaciones a los activos rezagados.",
              "Dejar de invertir para siempre.",
              "Vender todo y esperar a que el mercado caiga a cero."
            ],
            correct: 1,
            explanation: "El rebalanceo con aportaciones periódicas de ahorro permite restaurar las ponderaciones meta comprando los activos rezagados sin vender ni pagar corretaje o ISR."
          },
          {
            question: "Si fijaste una banda de tolerancia de ±5% y tu ponderación objetivo de acciones es 50%, ¿cuándo se dispara una orden de rebalanceo?",
            options: [
              "Cuando las acciones lleguen a 51%.",
              "Únicamente cuando el peso de las acciones caiga por debajo de 45% o suba por encima de 55%.",
              "Cada vez que cambie el presidente de México.",
              "Todos los días a las 8:30 am."
            ],
            correct: 1,
            explanation: "Las bandas de tolerancia evitan el exceso de operaciones (overtrading); solo se actúa cuando la deriva de la cartera excede el umbral pactado (±5 puntos porcentuales)."
          }
        ]
      },
      {
        title: "Métricas de Riesgo: Volatilidad, Beta, Sharpe y Sortino",
        content: "Aprende a medir con precisión matemática si el rendimiento de tu cartera justifica el riesgo asumido.",
        details: "El retorno por sí solo no dice nada: ganar 15% con volatilidad del 40% es inferior a ganar 13% con volatilidad del 8%. La Volatilidad anualizada (desviación estándar $\\sigma$) mide la dispersión del precio. La Beta ($\\beta$) mide la sensibilidad respecto al mercado (Beta > 1 es más volátil que el índice). El Ratio de Sharpe ($S = \\frac{R_p - R_f}{\\sigma_p}$) calcula el exceso de retorno obtenido por unidad de riesgo total. El Ratio de Sortino perfecciona a Sharpe al penalizar únicamente la volatilidad bajista perjudicial (downside deviation), ignorando la volatilidad alcista favorable.",
        visualType: "risk_metrics_tool",
        disclaimer: "Educación, no asesoría financiera. Los ratios cuantitativos se calculan sobre datos históricos y no garantizan estabilidad futura.",
        speakerNotes: "Un Ratio de Sharpe superior a 1.0 se considera bueno; por encima de 1.5 es excelente. Siempre compara estrategias descontando la tasa libre de riesgo local (Cetes a 28 días).",
        concepts: [
          { term: "Volatilidad Anualizada (σ)", def: "Desviación estándar de los retornos diarios multiplicada por la raíz de 252 días hábiles bursátiles." },
          { term: "Beta (β)", def: "Covarianza del activo con el mercado dividida entre la varianza del mercado; Beta 1.2 implica 20% más volatilidad que el IPC." },
          { term: "Ratio de Sharpe", def: "Rendimiento del portafolio menos la tasa libre de riesgo dividido entre la volatilidad total: (Rp - Rf) / σ." },
          { term: "Ratio de Sortino", def: "Retorno en exceso dividido únicamente entre la desviación estándar de los retornos negativos: no castiga las ganancias inesperadas." }
        ],
        realExample: {
          asset: "Cemex ($CEMEXCPO) vs IPC BMV vs CETES 28D",
          date: "Cierre anual 2026-11-07",
          source: "TradingView / Banco de México",
          url: "https://es.tradingview.com/symbols/BMV-CEMEXCPO/",
          caseDescription: "Cemex con retorno del 16.5% y volatilidad anualizada del 24.2% frente a CETES 28D al 10.20%. Ratio de Sharpe de Cemex: (16.5% - 10.2%) / 24.2% = 0.26. En contraste, un portafolio diversificado Core-Satellite con retorno del 15.0% y volatilidad de 9.5% ofrece un Sharpe de 0.51, demostrando superioridad por unidad de riesgo."
        },
        deliverableExercise: {
          title: "Cálculo del Ratio de Sharpe de tu Estrategia",
          description: "Calcula el Ratio de Sharpe de tu portafolio personal: toma tu rendimiento anual proyectado, resta la tasa actual de CETES 28D (10.20%) y divide entre la volatilidad anualizada estimada. Evalúa si tu exceso de retorno compensa el riesgo."
        },
        quizzes: [
          {
            question: "¿Cuál es la diferencia analítica fundamental entre el Ratio de Sharpe y el Ratio de Sortino?",
            options: [
              "Sharpe se calcula en pesos y Sortino en dólares estadounidenses.",
              "Sharpe penaliza la volatilidad total (tanto subidas como bajadas), mientras que Sortino solo penaliza la volatilidad a la baja (downside risk).",
              "Sortino no toma en cuenta la tasa libre de riesgo.",
              "Sharpe solo sirve para fondos de inversión europeos."
            ],
            correct: 1,
            explanation: "Sortino aísla la volatilidad negativa perjudicial, reconociendo que los inversores temen a las pérdidas, no a los saltos alcistas repentinos."
          },
          {
            question: "Si una acción mexicana tiene una Beta (β) de 1.4 respecto al índice S&P/BMV IPC, ¿qué se espera que ocurra si el índice cae un 10%?",
            options: [
              "Que la acción suba un 14%.",
              "Que la acción caiga aproximadamente un 14% (es 40% más volátil que el mercado general).",
              "Que el precio no sufra ninguna alteración.",
              "Que la empresa pague un dividendo del 1.4%."
            ],
            correct: 1,
            explanation: "Una Beta superior a 1.0 amplifica sistemáticamente las variaciones del mercado: ante una caída de 10% en el índice, el activo tiende a corregir 1.4 × 10% = 14%."
          },
          {
            question: "En la fórmula del Ratio de Sharpe: (Rp - Rf) / σ, ¿qué representa el término 'Rf'?",
            options: [
              "El rendimiento libre de riesgo (Risk-Free Rate), representado en México por la tasa de CETES a 28 días.",
              "El cobro de comisiones del intermediario bursátil.",
              "La tasa de inflación reportada por el INEGI.",
              "El dividendo trimestral pagado por Bimbo."
            ],
            correct: 0,
            explanation: "Rf es la tasa libre de riesgo soberana del país; solo el rendimiento que supera a Rf califica como prima de riesgo real ganada por invertir en bolsa."
          }
        ]
      },
      {
        title: "Marco Fiscal en México: Art. 129 LISR y Dividendos",
        content: "Maximiza tu rendimiento real DESPUÉS de impuestos: conoce las reglas oficiales del SAT para bolsa y FIBRAS.",
        details: "En México, la Ley del Impuesto Sobre la Renta (LISR) otorga un régimen altamente favorable para el mercado bursátil regulado. De acuerdo con el Artículo 129 de la LISR, las personas físicas tributan a una tasa preferencial del 10% sobre la ganancia neta anual obtenida por la enajenación de acciones en BMV, BIVA o vía el SIC. Es crucial entender que NO es una retención definitiva mensual del bróker: el intermediario bursátil emite una constancia anual y el impuesto se calcula y paga en la Declaración Anual en abril. En dividendos (Art. 140), la empresa retiene un 10% definitivo y el dividendo bruto acumulable permite acreditar el ISR corporativo. En FIBRAS, las distribuciones por 'Reembolso de Capital' son 100% libres de impuestos.",
        visualType: "fiscal_rules",
        disclaimer: "Educación, no asesoría fiscal personalizada. Consulta a un Contador Público certificado para tu situación tributaria particular ante el SAT.",
        speakerNotes: "Nunca utilices el término 'impuesto cedular' para la bolsa en México: los impuestos cedulares son gravámenes estatales específicos. La ganancia en bolsa es de competencia federal bajo el Art. 129 LISR.",
        concepts: [
          { term: "Art. 129 LISR (Tasa 10%)", def: "Régimen fiscal federal preferencial para enajenación de acciones en bolsa, liquidado en la Declaración Anual." },
          { term: "Constancia Fiscal Anual", def: "Documento oficial que el intermediario bursátil emite en febrero/marzo con la ganancia o pérdida neta real." },
          { term: "Dividendos (Art. 140 LISR)", def: "Retención definitiva del 10% más acumulación a ingresos ordinarios con derecho al acreditamiento del ISR pagado por la emisora." },
          { term: "FIBRAS: Reembolso de Capital", def: "Distribución fiscalmente exenta de impuestos que disminuye el costo promedio de adquisición del certificado." }
        ],
        realExample: {
          asset: "Constancia Fiscal Anual emitida por Casa de Bolsa Mexicana (GBM / Bursanet)",
          date: "Ejercicio Fiscal SAT 2025/2026",
          source: "Servicio de Administración Tributaria (SAT) / Art. 129 LISR",
          url: "https://www.sat.gob.mx/",
          caseDescription: "Inversionista obtiene $50,000 MXN en ganancias de capital vendiendo acciones del SIC y $15,000 en pérdidas en otros títulos. Base gravable neta en la constancia: $35,000 MXN. En su Declaración Anual de abril, ingresa al renglón de Enajenación de Acciones en Bolsa y liquida el 10% ($3,500 MXN de ISR)."
        },
        deliverableExercise: {
          title: "Simulación de Liquidación Fiscal de Portafolio en Constancia",
          description: "Utilizando la plantilla de cálculo fiscal SAT de FA Academy, ingresa 3 compras y 3 ventas hipotéticas en BMV/SIC, determina la ganancia neta consolidada y calcula el 10% de ISR a pagar en la Declaración Anual."
        },
        quizzes: [
          {
            question: "Respecto al Artículo 129 de la LISR en México para ganancias de capital en bolsa (BMV / SIC), ¿cuál afirmación es correcta ante el SAT?",
            options: [
              "El bróker retiene un 10% mensual definitivo y no se vuelve a reportar nada al SAT.",
              "El contribuyente calcula y paga el 10% sobre la ganancia neta en su Declaración Anual en abril, con base en la constancia emitida por el bróker.",
              "Pagas el 35% de ISR como si fuera sueldo ordinario.",
              "Es un impuesto estatal denominado comúnmente impuesto cedular."
            ],
            correct: 1,
            explanation: "El Art. 129 LISR establece que la persona física declara la ganancia de capital anual en su Declaración Anual y aplica la tasa preferencial del 10% sobre la utilidad real neta."
          },
          {
            question: "¿Por qué las distribuciones de FIBRAS inmobiliarias catalogadas como 'Reembolso de Capital' son tan atractivas fiscalmente?",
            options: [
              "Porque no pagan ISR en el momento de recibirlas (son 100% libres de impuestos), disminuyendo el costo fiscal de los certificados.",
              "Porque el SAT devuelve dinero en efectivo automáticamente.",
              "Porque duplican el valor de las rentas cada mes.",
              "Porque no exigen tener RFC activo."
            ],
            correct: 0,
            explanation: "El Reembolso de Capital devuelve patrimonio contable de la FIBRA sin generar hecho imponible inmediato para el inversionista."
          },
          {
            question: "En el régimen de dividendos de personas físicas (Art. 140 LISR), ¿qué derecho tiene el inversionista respecto al ISR corporativo pagado por la empresa emisora?",
            options: [
              "Ninguno, pierde todo el impuesto pagado.",
              "El derecho de acreditar contra su impuesto personal el ISR que la empresa ya liquidó al 30% a nivel corporativo.",
              "El derecho a no presentar declaración anual.",
              "El derecho a solicitar la devolución en dólares."
            ],
            correct: 1,
            explanation: "El mecanismo de dividendo acumulable con factor de piramidación permite acreditar el ISR corporativo pagado por la emisora para evitar la doble tributación económica."
          }
        ]
      },
      {
        title: "Declaración Anual ante el SAT, Pérdidas y PPR",
        content: "El escudo fiscal definitivo: compensación de pérdidas a 10 años y deducción del Plan Personal de Retiro (Art. 151).",
        details: "Si sufriste pérdidas en bolsa durante el ejercicio fiscal, el Artículo 129 Fracción VI de la LISR te permite un beneficio clave: amortizar esa pérdida fiscal contra las ganancias bursátiles de los siguientes diez ejercicios fiscales consecutivos, impidiendo que pagues impuestos hasta absorber el saldo negativo. Por su parte, el Plan Personal de Retiro (PPR bajo el Art. 151 Fracción V de la LISR) te permite deducir hasta el 10% de tus ingresos anuales acumulables con un tope de 5 UMAs anuales (~$206,000 MXN en 2026), generando cuantiosos saldos a favor en tu declaración anual de abril.",
        visualType: "sat_operations",
        disclaimer: "Educación, no asesoría fiscal. Las deducciones personales están sujetas a los topes fijados en el Código Fiscal de la Federación y la LISR.",
        speakerNotes: "Al combinar la compensación de pérdidas bursátiles con tu deducción personal de PPR, puedes convertir tu declaración anual ante el SAT en una fuente líquida de devolución de saldo a favor.",
        concepts: [
          { term: "Amortización de Pérdidas (10 Años)", def: "Derecho a descontar pérdidas netas en acciones contra ganancias bursátiles en los siguientes 10 años fiscales." },
          { term: "PPR (Art. 151 Fracc. V LISR)", def: "Plan Personal de Retiro deducible en la Declaración Anual hasta 10% de ingresos o 5 UMAs anuales." },
          { term: "Saldo a Favor SAT", def: "Devolución en efectivo de impuestos retenidos en exceso gracias a la aplicación de deducciones personales." },
          { term: "Discrepancia Fiscal", def: "Situación donde los gastos o inversiones declaradas superan los ingresos comprobables ante la autoridad." }
        ],
        realExample: {
          asset: "Plan Personal de Retiro (PPR) no discrecional bajo Art. 151 LISR",
          date: "Declaración Anual SAT Personas Físicas 2026",
          source: "SAT / Ley del Impuesto Sobre la Renta Art. 151 Fracc. V",
          url: "https://www.sat.gob.mx/declaracion/54334/declaracion-anual-de-personas-fisicas",
          caseDescription: "Contribuyente con ingresos brutos de $600,000 MXN anuales aporta $60,000 MXN a su PPR (10% de su ingreso, sin exceder 5 UMAs). Con una tasa marginal del 30%, genera una deducción personal que detona una devolución de saldo a favor de $18,000 MXN en su cuenta CLABE en abril."
        },
        deliverableExercise: {
          title: "Auditoría de Deducciones Personales y Cálculo de Devolución PPR",
          description: "Estima tu ingreso bruto anual, calcula tu tope de deducción del 10% (comparado contra 5 UMAs = ~$206,000 MXN) y determina el monto exacto de devolución en efectivo que recibirías del SAT según tu tasa marginal de ISR."
        },
        quizzes: [
          {
            question: "Si tuviste una pérdida fiscal de $30,000 MXN vendiendo acciones en bolsa en un año, ¿qué beneficio te concede la LISR?",
            options: [
              "Ninguno, el dinero se pierde por completo.",
              "Puedes compensar esa pérdida contra ganancias de capital futuras en bolsa durante los siguientes 10 ejercicios fiscales.",
              "El SAT te reembolsa los $30,000 MXN en efectivo al día siguiente.",
              "Debes pagar una multa del 10% por perder dinero."
            ],
            correct: 1,
            explanation: "El Art. 129 Fracc. VI LISR permite amortizar pérdidas netas por enajenación de acciones contra ganancias del mismo régimen en los siguientes 10 años fiscales."
          },
          {
            question: "¿Cuál es el límite legal de deducción anual para aportaciones a un PPR según el Artículo 151 Fracción V de la LISR en México?",
            options: [
              "Hasta el 10% de los ingresos acumulables del contribuyente, sin que exceda el equivalente a 5 UMAs anuales.",
              "El 100% de todo el dinero que ganes en el año sin límite.",
              "Máximo $10,000 pesos mexicanos sin importar el ingreso.",
              "Solo se puede deducir si compras acciones de empresas extranjeras."
            ],
            correct: 0,
            explanation: "La ley topa la deducción al menor entre el 10% de los ingresos acumulables o el valor de 5 UMAs elevadas al año (~$206,000 MXN en 2026)."
          },
          {
            question: "¿Qué documento oficial debes solicitar a tu bróker en febrero para presentar tu declaración bursátil ante el SAT?",
            options: [
              "La Constancia de Percepciones y Retenciones por Enajenación de Acciones en Bolsa.",
              "Un recibo de luz de las oficinas del bróker.",
              "Una carta de recomendación de tu asesor.",
              "El estado de cuenta de tu tarjeta de crédito."
            ],
            correct: 0,
            explanation: "La constancia fiscal oficial consolida el costo promedio de adquisición actualizado por inflación, las enajenaciones y la ganancia o pérdida fiscal neta anual."
          }
        ]
      },
      {
        title: "Ética Profesional y Deber Fiduciario",
        content: "La integridad y el alineamiento de intereses son el activo de mayor duración en el mundo de las inversiones.",
        details: "El Deber Fiduciario (Fiduciary Duty) es la máxima obligación legal, profesional y moral de colocar los intereses del patrimonio familiar y de los clientes por encima de cualquier comisión, intermediación o incentivo propio. En el mercado bursátil moderno, la revelación oportuna de Conflictos de Interés y la transparencia total en costos de transacción y comisiones de corretaje constituyen la línea divisoria entre el verdadero gestor patrimonial y el vendedor de productos financieros.",
        visualType: "ethics_and_closing",
        quote: { text: "Se necesitan 20 años para construir una reputación financiera y solo cinco minutos para destruirla.", author: "Warren Buffett" },
        disclaimer: "Educación, no asesoría financiera. La gestión patrimonial exige independencia analítica y rechazo a productos con comisiones opacas.",
        speakerNotes: "Tu reputación como inversionista y asesor es tu activo más valioso. Si una operación no supera el test ético del deber fiduciario, no se ejecuta.",
        concepts: [
          { term: "Deber Fiduciario (Fiduciary Duty)", def: "Obligación legal y ética de administrar el capital con el máximo grado de lealtad, prudencia y cuidado hacia el beneficiario." },
          { term: "Conflicto de Interés", def: "Situación donde el interés personal o una comisión externa sesga la objetividad de una recomendación financiera." },
          { term: "Transparencia Total (TER)", def: "Total Expense Ratio: cómputo exhaustivo de todas las comisiones implícitas y explícitas de un fondo o ETF." },
          { term: "Independencia Asesora", def: "Capacidad de elegir los mejores instrumentos globales sin compromisos de colocación con ninguna institución." }
        ],
        realExample: {
          asset: "Auditoría de Comisiones Ocultas en Fondos de Inversión Tradicionales en México",
          date: "Reporte de Comisiones CONDUSEF / CNBV 2025-2026",
          source: "CONDUSEF / CNBV",
          url: "https://www.gob.mx/condusef",
          caseDescription: "Fondos de renta variable bancarios en México con comisiones de administración del 2.5% al 3.5% anual frente a ETFs globales indexados con comisiones del 0.03% (VOO). A lo largo de 30 años, esa diferencia de comisiones drena más del 40% del patrimonio final del inversionista."
        },
        deliverableExercise: {
          title: "Auditoría de Costos Totales (TER) de tus Inversiones Actuales",
          description: "Revisa los prospectos de información al público inversionista de los fondos o activos que tienes contratados. Suma la comisión por administración, custodia y corretaje, y calcula el costo anual compuesto en pesos que pagas por mantenerlos."
        },
        quizzes: [
          {
            question: "¿En qué consiste el principio del Deber Fiduciario (Fiduciary Duty) en la gestión de capitales?",
            options: [
              "En priorizar la comisión del banco por encima de la rentabilidad del cliente.",
              "En la obligación estricta de anteponer siempre el mejor interés del inversionista y su patrimonio sobre cualquier incentivo propio.",
              "En delegar la declaración anual a un tercero sin supervisar.",
              "En prometer rendimientos garantizados sin riesgo."
            ],
            correct: 1,
            explanation: "El estándar fiduciario es el nivel más alto de responsabilidad ética: exige actuar con total lealtad y cuidado exclusivo en favor del dueño del capital."
          },
          {
            question: "¿Qué impacto tiene a largo plazo pagar una comisión de administración (TER) del 2.5% anual en un fondo frente a un ETF del 0.03%?",
            options: [
              "Ninguno, las comisiones no afectan el interés compuesto.",
              "Una erosión que supera el 40% del capital acumulado final al cabo de 25 o 30 años de inversión constante.",
              "Que el SAT premia al fondo con menores impuestos.",
              "Que el fondo rinde el doble por pagar comisiones altas."
            ],
            correct: 1,
            explanation: "Las comisiones altas restan rentabilidad año tras año; debido al interés compuesto inverso, un 2.5% anual de comisión termina devorando más de una tercera parte de la riqueza final acumulable."
          },
          {
            question: "¿Cómo se define un Conflicto de Interés en el asesoramiento financiero?",
            options: [
              "Cuando el asesor recomienda un instrumento financiero no porque sea el mejor para el cliente, sino porque le paga una comisión o bono mayor a él o a su banco.",
              "Cuando dos inversionistas compran la misma acción.",
              "Cuando una empresa cotiza simultáneamente en la BMV y en el SIC.",
              "Cuando una orden de compra tarda más de 5 segundos en ejecutarse."
            ],
            correct: 0,
            explanation: "El conflicto de interés surge cuando los incentivos económicos del intermediario divergen o chocan con el objetivo patrimonial del inversionista."
          }
        ]
      },
      {
        title: "Money Management: Gestión Monetaria del Portafolio",
        content: "El arte matemático del dimensionamiento de posiciones: nunca arriesgues más del 1% del capital total en una sola idea de inversión.",
        details: "Money Management es el conjunto de reglas cuantitativas que definen el tamaño exacto de cada posición y blindan tu cartera contra el riesgo de ruina. La Regla del 1% (o máximo 2% en cuentas pequeñas) establece que la pérdida en caso de tocar Stop Loss jamás debe superar el 1% del patrimonio total. La fórmula matemática es: Títulos = (Capital Total × Riesgo %) / (Precio Entrada - Precio Stop Loss). Para evitar la concentración catastrófica, se fijan límites estrictos por escrito: ninguna acción individual debe superar el 10% del portafolio total y ningún sector de la economía (ej. financiero, retail o minero) debe superar el 25%. El drawdown mide la caída desde el pico patrimonial; debido a la asimetría del porcentaje, una pérdida del 50% exige una ganancia del 100% únicamente para empatar.",
        visualType: "money_management_tool",
        disclaimer: "Educación, no asesoría financiera. Toda inversión en renta variable conlleva riesgo de fluctuación y pérdida de capital.",
        speakerNotes: "Los inversores aficionados se concentran exclusivamente en qué comprar; los operadores institucionales sobreviven porque calculan el tamaño de la posición antes de presionar el botón de compra.",
        concepts: [
          { term: "Regla del 1% de Riesgo", def: "Pérdida máxima permitida en una sola operación calculada como el 1% del valor total de la cuenta." },
          { term: "Fórmula de Tamaño de Posición", def: "Títulos = (Capital × Riesgo %) / (Entrada - Stop Loss); adapta el número de acciones a la volatilidad del activo." },
          { term: "Asimetría del Drawdown", def: "Propiedad matemática donde las pérdidas exigen ganancias exponencialmente mayores para recuperar el capital (ej. -33% exige +50%, -50% exige +100%)." },
          { term: "Límites de Concentración", def: "Topes máximos fijados por escrito: máximo 10% en una acción individual y 25% en un mismo sector económico." }
        ],
        realExample: {
          asset: "Fomento Económico Mexicano ($FEMSAUBD.MX)",
          date: "Cierre de mercado 2026-11-07",
          source: "TradingView / Bolsa Mexicana de Valores (BMV)",
          url: "https://es.tradingview.com/symbols/BMV-FEMSAUBD/",
          caseDescription: "Inversionista con capital de $100,000 MXN aplica la Regla del 1% ($1,000 MXN de riesgo máximo). Precio de entrada en $198.50 MXN con Stop Loss en $188.50 MXN (riesgo de $10.00 MXN por título). Tamaño de posición: 100 títulos (inversión total $19,850 MXN, 19.85% de la cuenta). Si salta el Stop Loss, la pérdida monetaria real es de exactamente $1,000 MXN (1.00% del portafolio)."
        },
        deliverableExercise: {
          title: "Hoja de Reglas de Money Management Personal",
          description: "Calcula el tamaño de posición para un activo de tu elección y define por escrito tus límites de riesgo: capital disponible, riesgo por operación (1%), stop loss técnico, pérdida máxima en pesos y exposición máxima por sector."
        },
        quizzes: [
          {
            question: "Si tu portafolio total es de $200,000 MXN y aplicas la regla estricta del 1% de riesgo por operación, ¿cuánto dinero estás dispuesto a perder como máximo si salta tu Stop Loss?",
            options: [
              "$20,000 MXN.",
              "$2,000 MXN.",
              "$200 MXN.",
              "Todo el dinero invertido en la empresa."
            ],
            correct: 1,
            explanation: "$200,000 MXN × 1% = $2,000 MXN. Ese es el límite absoluto de riesgo tolerado en esa posición individual."
          },
          {
            question: "Deseas comprar acciones de Walmex ($WALMEX.MX) a $65.00 MXN con Stop Loss en $60.00 MXN. Si tu riesgo máximo permitido es de $1,500 MXN, ¿cuántos títulos debes comprar según la fórmula de Money Management?",
            options: [
              "300 títulos ($1,500 / $5 de riesgo por acción = 300 títulos, total invertido $19,500 MXN).",
              "1,500 títulos.",
              "100 títulos.",
              "65 títulos."
            ],
            correct: 0,
            explanation: "Riesgo por acción: $65 - $60 = $5 MXN. Títulos: $1,500 / $5 = 300 títulos. Si el precio cae a $60, vendes 300 títulos y pierdes exactamente $1,500 MXN."
          },
          {
            question: "Si un portafolio experimenta un Drawdown severo del -50%, ¿qué rendimiento porcentual requiere generar a partir de ese punto para recuperar su máximo histórico?",
            options: [
              "+50% de ganancia.",
              "+100% de ganancia (duplicar el capital restante).",
              "+25% de ganancia.",
              "+75% de ganancia."
            ],
            correct: 1,
            explanation: "Fórmula de recuperación: D / (1 - D) = 0.50 / (1 - 0.50) = 1.00 (+100%). Si $100,000 caen a $50,000, necesitas ganar $50,000 sobre los $50,000 restantes (+100%) para volver a $100,000."
          },
          {
            question: "¿Por qué tener 4 acciones distintas pero del mismo sector bancario (ej. Banorte, BBVA, Santander, Inbursa) NO ofrece una diversificación real del riesgo?",
            options: [
              "Porque los bancos no cotizan en la BMV.",
              "Porque comparten una correlación cercana a +1.0 ante shocks regulatorios o variaciones en la tasa de Banxico, sufriendo caídas simultáneas.",
              "Porque pagan dividendos en efectivo.",
              "Porque el bróker prohíbe comprar más de un banco."
            ],
            correct: 1,
            explanation: "Activos del mismo sector tienen factores de riesgo sistemático idénticos; si Banxico recorta tasas o se deteriora la morosidad crediticia, todos los bancos caen al unísono."
          }
        ]
      }
    ]
  }
];

// --- BANCO DE PREGUNTAS DEL EXAMEN DE CERTIFICACIÓN DE FASE 4 (10 PREGUNTAS) ---
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
    question: "¿En qué consiste el principio del Deber Fiduciario (Fiduciary Duty) en la gestión de capitales?", 
    options: [
      "En priorizar la comisión del banco por encima de la rentabilidad del cliente.", 
      "En la obligación estricta de anteponer siempre el mejor interés del inversionista y su patrimonio sobre cualquier incentivo propio.", 
      "En delegar la declaración anual a un tercero sin supervisar.", 
      "En prometer rendimientos garantizados sin riesgo."
    ], 
    correct: 1 
  },
  { 
    id: 10, 
    question: "En Money Management (Lección 4.9), si tu capital total es de $100,000 MXN, aplicas la regla del 1% de riesgo y compras una acción a $200 MXN con Stop Loss en $180 MXN, ¿cuántos títulos debes comprar exactamente?", 
    options: [
      "50 títulos (inversión de $10,000 MXN, arriesgando exactamente $1,000 MXN en el Stop Loss).", 
      "500 títulos arriesgando todo el capital de la cuenta.", 
      "10 títulos porque el precio de la acción es $200 MXN.", 
      "No se puede calcular sin conocer las ventas netas de la empresa."
    ], 
    correct: 0 
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
          Puedes deducir aportaciones al retiro de hasta el <strong>10% de tus ingresos anuales</strong> o 5 UMAs anuales (~$206,000 MXN en 2026), generando una devolución de saldo a favor líquida en tu cuenta bancaria.
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

// ── 9. MONEY MANAGEMENT TOOL ──────────────────────
const MoneyManagementTool = () => {
  const [capital, setCapital] = useState<number>(100000);
  const [riskPct, setRiskPct] = useState<number>(1.0);
  const [entryPrice, setEntryPrice] = useState<number>(198.50);
  const [stopLoss, setStopLoss] = useState<number>(188.50);
  const [takeProfit, setTakeProfit] = useState<number>(228.50);

  const riskAmount = (capital * riskPct) / 100;
  const riskPerShare = Math.max(0.01, entryPrice - stopLoss);
  const shares = Math.max(0, Math.floor(riskAmount / riskPerShare));
  const totalInvestment = shares * entryPrice;
  const allocationPct = capital > 0 ? (totalInvestment / capital) * 100 : 0;
  const rewardPerShare = Math.max(0, takeProfit - entryPrice);
  const totalProfit = shares * rewardPerShare;
  const rrRatio = riskPerShare > 0 ? (rewardPerShare / riskPerShare) : 0;

  // Drawdown simulator
  const [simDrawdown, setSimDrawdown] = useState<number>(25);
  const recoveryPct = simDrawdown < 100 ? (simDrawdown / (100 - simDrawdown)) * 100 : 0;

  return (
    <div className="mt-4 bg-slate-900 p-5 rounded-xl border border-slate-700 space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Scale size={16} className="text-amber-400" />
            Estación de Trabajo: Money Management & Dimensionamiento
          </h4>
          <p className="text-[11px] text-slate-400">Calcula el tamaño de posición exacto bajo la Regla del 1% y simula la asimetría del drawdown.</p>
        </div>
        <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2.5 py-1 rounded-full border border-amber-500/30">
          Regla Institucional
        </span>
      </div>

      {/* Simulator Inputs & Position Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Inputs */}
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">Parámetros de la Operación</p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Capital Total (MXN)</label>
              <input 
                type="number" 
                value={capital} 
                onChange={(e) => setCapital(Number(e.target.value))} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Riesgo por Operación (%)</label>
              <select 
                value={riskPct} 
                onChange={(e) => setRiskPct(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
              >
                <option value={0.5}>0.5% (Ultraconservador)</option>
                <option value={1.0}>1.0% (Estándar Institucional)</option>
                <option value={1.5}>1.5% (Moderado)</option>
                <option value={2.0}>2.0% (Máximo Tolerado)</option>
              </select>
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Precio Entrada (MXN)</label>
              <input 
                type="number" 
                step="0.5" 
                value={entryPrice} 
                onChange={(e) => setEntryPrice(Number(e.target.value))} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Precio Stop Loss (MXN)</label>
              <input 
                type="number" 
                step="0.5" 
                value={stopLoss} 
                onChange={(e) => setStopLoss(Number(e.target.value))} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div className="col-span-2">
              <label className="text-slate-400 block mb-1">Take Profit Objetivo (MXN)</label>
              <input 
                type="number" 
                step="0.5" 
                value={takeProfit} 
                onChange={(e) => setTakeProfit(Number(e.target.value))} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Orden Calculada Automáticamente</p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                <span className="text-[10px] text-slate-400 block">Títulos a Comprar</span>
                <span className="text-lg font-extrabold text-amber-400">{shares.toLocaleString()} acc.</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                <span className="text-[10px] text-slate-400 block">Inversión Total</span>
                <span className="text-lg font-extrabold text-white">${totalInvestment.toLocaleString('es-MX', { maximumFractionDigits: 0 })} MXN</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                <span className="text-[10px] text-slate-400 block">Pérdida Máxima (Stop)</span>
                <span className="text-sm font-bold text-rose-400">-${riskAmount.toLocaleString('es-MX')} MXN ({riskPct}%)</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                <span className="text-[10px] text-slate-400 block">Ratio R:B Calculado</span>
                <span className="text-sm font-bold text-emerald-400">1:{rrRatio.toFixed(2)}</span>
              </div>
            </div>
            <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-700 text-[11px] text-slate-300 space-y-1">
              <p>• Ponderación en Cartera: <strong className={allocationPct > 25 ? 'text-rose-400' : 'text-amber-300'}>{allocationPct.toFixed(1)}% del capital</strong> {allocationPct > 20 ? '(⚠️ Precaución: Excede límite sugerido del 15%)' : '(✓ Seguro)'}</p>
              <p>• Ganancia Potencial si toca Target: <strong className="text-emerald-400">+${totalProfit.toLocaleString('es-MX', { maximumFractionDigits: 0 })} MXN</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Drawdown Asymmetry Visualizer */}
      <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <TrendingDown size={14} className="text-rose-400" />
            La Ley Inflexible de la Asimetría del Drawdown
          </p>
          <span className="text-xs text-rose-400 font-mono font-bold">Caída: -{simDrawdown}%</span>
        </div>
        <input 
          type="range" 
          min="5" 
          max="80" 
          step="5" 
          value={simDrawdown} 
          onChange={(e) => setSimDrawdown(Number(e.target.value))}
          className="w-full accent-rose-500 mb-3 cursor-pointer"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-500 block">Pérdida</span>
            <span className="font-bold text-rose-400">-{simDrawdown}%</span>
          </div>
          <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-500 block">Capital Restante</span>
            <span className="font-bold text-slate-200">{(100 - simDrawdown)}%</span>
          </div>
          <div className="bg-slate-900 p-2 rounded-lg border border-emerald-500/40 col-span-2">
            <span className="text-[10px] text-slate-400 block">Ganancia Requerida para Empatar [D / (1-D)]</span>
            <span className="font-black text-emerald-400 text-sm">+{recoveryPct.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 4 ---

export default function CoursePlayerPhase4() {
  const { user, updateProgress, submitTestResult } = useAuth();
  const [searchParams] = useSearchParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Mini-quiz interactivo por lección con soporte multi-pregunta
  const [quizState, setQuizState] = useState<Record<string, { answer: number; shown: boolean }>>({});

  const moduleData = courseData[0];
  const lessonData = moduleData.lessons[currentLesson];

  // Deep linking ?lesson=X o recuperación de progreso
  useEffect(() => {
    const lessonParam = searchParams.get('lesson');
    if (lessonParam !== null) {
      const parsed = parseInt(lessonParam, 10);
      if (!isNaN(parsed)) {
        const target = parsed > 0 && parsed <= moduleData.lessons.length ? parsed - 1 : parsed >= 0 && parsed < moduleData.lessons.length ? parsed : 0;
        setCurrentLesson(target);
        return;
      }
    }
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
  }, [searchParams, moduleData.lessons.length]);

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
    let message = `📊 *Certificación Aprobada - Fase 4 (Portafolios, SAT y Money Management)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Aprobado en Modelo Core-Satellite, Rebalanceo, Declaración Anual Art. 129 LISR y Money Management. Solicitud de diploma oficial.`;
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
      case 'money_management_tool': return <MoneyManagementTool />;
      default: return null;
    }
  };

  // VISTA DE EXAMEN DE CERTIFICACIÓN
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO 
          title="Examen Final: Fase 4 - Gestión de Riesgo y Portafolio | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 4 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/4"
        />
        <div className="max-w-3xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 4: Portafolio, Riesgo & Fiscalidad
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas rigurosas sobre Frontera Eficiente, Core-Satellite, Rebalanceo, Art. 129 LISR y Money Management.
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
                    ? '¡Felicidades! Has demostrado dominio riguroso de la frontera eficiente, el modelo Core-Satellite, el régimen fiscal del Art. 129 ante el SAT y el Money Management.' 
                    : 'Te sugerimos repasar la amortización de pérdidas a 10 años, el rebalanceo y el cálculo de tamaño de posición antes de solicitar tu certificado.'}
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

  const activeQuizzes = (lessonData as any).quizzes || ((lessonData as any).miniQuiz ? [(lessonData as any).miniQuiz] : []);

  // VISTA PRINCIPAL DEL REPRODUCTOR
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
      <SEO 
        title={`Fase 4: ${lessonData.title} | FA Academy`}
        description={lessonData.content}
        url={`https://fa-academy.vercel.app/course/phase/4?lesson=${currentLesson + 1}`}
      />
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/10 p-2 rounded-xl border border-amber-500/20">
              <ShieldAlert className="text-amber-400" size={22} />
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
          <div key={i} className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-400 bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
              <span className="font-bold text-white flex items-center gap-2">
                <PlayCircle size={15} className="text-amber-400" />
                {lessonData.videoTitle || lessonData.title}
              </span>
              {lessonData.videoDuration && (
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock size={13} />
                  {lessonData.videoDuration}
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

        <div className="bg-slate-900/60 rounded-2xl p-4 md:p-6 border border-slate-800 shadow-xl mb-6 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          <ErrorBoundary fallbackMessage="Error al cargar la herramienta interactiva de portafolios">
            {renderVisual(lessonData.visualType)}
          </ErrorBoundary>
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          {/* Disclaimer visible obligatorio */}
          <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-amber-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Ninguna estrategia se presenta como infalible o segura."}</span>
          </div>

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

          {/* Caso Real Fechado de Mercado */}
          {(lessonData as any).realExample && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-amber-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
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
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {(lessonData as any).realExample.source} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* Ejercicio con Entregable Práctico */}
          {(lessonData as any).deliverableExercise && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText size={15} /> Ejercicio con Entregable Práctico
              </span>
              <h4 className="text-sm font-bold text-white mb-1">{(lessonData as any).deliverableExercise.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).deliverableExercise.description}</p>
              <textarea 
                placeholder="Escribe aquí tus cálculos, conclusiones o plan de acción para tu propio portafolio..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 outline-none focus:ring-1 focus:ring-amber-500 min-h-[70px]"
              />
            </div>
          )}

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

          {/* Quiz interactivo por lección con retroalimentación inmediata */}
          {activeQuizzes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-amber-500/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
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
                      <span className="text-xs bg-slate-800 text-amber-400 px-2 py-0.5 rounded font-bold">{qIdx + 1}</span>
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
                          btnStyle = 'bg-amber-500 border-amber-300 text-slate-950 font-bold';
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
