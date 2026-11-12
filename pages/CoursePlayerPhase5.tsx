import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, TrendingUp, Activity,
  Target, Send, Info, BookOpen, PieChart,
  Shield, Anchor, Brain, Library, Quote,
  AlertTriangle, BarChart2, Layers, Zap, Crosshair,
  CheckCircle, ChevronRight, Book, RefreshCw, TrendingDown,
  Bot, FileSpreadsheet, Download, CheckCircle2, XCircle, HelpCircle,
  Sliders, Scale, Award, PlayCircle, Clock, ExternalLink, FileText,
  ShieldCheck, Landmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadInvestmentThesisTemplate } from '../utils/resources';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 5: ESTRATEGIAS ESPECIALIZADAS, VALUACIÓN Y OPCIONES (9 LECCIONES) ---

const courseData = [
  {
    id: 5,
    title: "FA Academy: Estrategias Especializadas y Valuación Avanzada",
    description: "Venta en corto, valuación por DCF y múltiplos, opciones financieras con griegas, trading cuantitativo algorítmico, ciclos de deuda de Ray Dalio, antifragilidad de Taleb y tesis de inversión profesional.",
    lessons: [
      {
        title: "Venta en Corto (Short Selling) y Mecánica del Short Squeeze",
        content: "Aprende a monetizar mercados bajistas comprendiendo la asimetría del riesgo potencialmente infinito.",
        details: "La Venta en Corto consiste en solicitar acciones en préstamo a tu casa de bolsa mediante un contrato de préstamo bursátil, venderlas de inmediato en el mercado secundario al precio de cotización actual y recomprarlas más tarde (cubrir la posición) a una cotización inferior para restituírselas al prestamista, embolsándose la diferencia menos la tasa de préstamo diario (borrow fee). Sin embargo, su perfil de riesgo es asimétrico: mientras en una posición larga ordinaria lo máximo que puedes perder es el 100% de tu dinero (el precio cae a $0), en una venta en corto la pérdida potencial no tiene techo matemático porque el precio de una acción puede subir indefinidamente (+200%, +1,000%). Un 'Short Squeeze' se detona cuando un activo con elevado interés en corto sube con virulencia, forzando a los operadores en corto a comprar títulos en estampida para frenar pérdidas, lo que alimenta una espiral alcista vertical (casos emblemáticos: Volkswagen en 2008 y GameStop en enero de 2021).",
        visualType: "short_selling_tool",
        videoUrls: ["TauzdjHOGTE"],
        videoTitle: "Mecánica Institucional de la Venta en Corto (Short Selling)",
        videoDuration: "12 min",
        disclaimer: "Educación, no asesoría financiera. La venta en corto conlleva riesgo asimétrico infinito y solo es apta para operadores experimentados con Stop Loss automático.",
        speakerNotes: "Nunca mantengas una posición corta sin un Stop Loss automático estricto. En las posiciones largas el tiempo juega a tu favor; en las posiciones cortas el borrow fee diario y los dividendos que debes reembolsar juegan en tu contra.",
        concepts: [
          { term: "Préstamo Bursátil", def: "Contrato formal donde un tenedor institucional te transfiere títulos a cambio del pago de una tasa de interés diaria (borrow fee)." },
          { term: "Short Squeeze", def: "Rally alcista parabólico detonado cuando los vendedores en corto son forzados a recomprar títulos al mercado para cerrar pérdidas." },
          { term: "Riesgo Asimétrico Infinito", def: "Condición matemática de las ventas en corto donde la pérdida no tiene techo porque el precio puede subir sin límite." },
          { term: "Margin Call", def: "Exigencia del bróker de depositar garantías líquidas adicionales inmediatas ante el avance adverso de una posición en corto." }
        ],
        realExample: {
          asset: "El Short Squeeze Histórico de GameStop Corp. ($GME)",
          date: "Enero de 2021",
          source: "SEC Staff Report on Equity and Options Market Structure Conditions in Early 2021",
          url: "https://www.sec.gov/",
          caseDescription: "Con un interés en corto superior al 140% del flotante, fondos de cobertura como Melvin Capital mantuvieron ventas en corto masivas. La avalancha compradora coordinada disparó la acción de $18 USD a más de $480 USD en días, forzando recompras en pánico y pérdidas multimillonarias de más de $6,000 millones de dólares para los fondos bajistas."
        },
        deliverableExercise: {
          title: "Auditoría de Interés en Corto (Short Interest) de un Activo",
          description: "Consulta en Yahoo Finance o Fintel el Short Interest (% of Float) y los Days to Cover de un activo. Escribe: 1) ¿Qué porcentaje del flotante está vendido en corto?, 2) Si la métrica supera el 15%, ¿qué riesgo de Short Squeeze identificas?"
        },
        quizzes: [
          {
            question: "¿Cuál es la principal diferencia de riesgo matemático entre comprar una acción en largo (Long) y venderla en corto (Short)?",
            options: [
              "En corto no se pagan comisiones al bróker.",
              "En largo la pérdida máxima está acotada al 100% del capital invertido; en corto la pérdida potencial es teóricamente infinita porque el precio puede subir sin techo.",
              "En corto siempre ganas dinero cuando sube el mercado.",
              "No existe ninguna diferencia matemática entre ambas operativas."
            ],
            correct: 1,
            explanation: "Una acción no puede caer por debajo de $0 (pérdida máxima 100%), pero puede subir a cualquier precio superior sin límite, exponiendo al vendedor en corto a la ruina."
          },
          {
            question: "¿Qué fenómeno de mercado define a un 'Short Squeeze'?",
            options: [
              "Una suspensión programada de la bolsa por mantenimiento de servidores.",
              "Un alza violenta y parabólica provocada cuando los operadores en corto se ven obligados a recomprar títulos masivamente para limitar pérdidas, retroalimentando la subida.",
              "El reparto de dividendos en efectivo a accionistas.",
              "La quiebra de una empresa automotriz."
            ],
            correct: 1,
            explanation: "Al subir el precio, las órdenes automáticas de recompra de los cortos añaden una presión compradora colosal que dispara el precio en cascada."
          },
          {
            question: "¿Por qué el factor tiempo (Theta / costo financiero) juega en contra del vendedor en corto?",
            options: [
              "Porque la bolsa cierra más temprano para posiciones cortas.",
              "Porque el operador debe pagar una tasa de interés diaria (borrow fee) por el préstamo de títulos y reembolsar de su bolsillo cualquier dividendo que la emisora reparta.",
              "Porque las acciones en corto expiran a los 30 días obligatoriamente.",
              "Porque el SAT retiene el 50% de la cuenta cada semana."
            ],
            correct: 1,
            explanation: "El borrow fee diario y la obligación de pagar los dividendos a los dueños legítimos del papel van erosionando la cuenta del operador bajista día con día."
          }
        ]
      },
      {
        title: "Inversión en Valor (Value) vs. Crecimiento (Growth) & Valuación por DCF y Múltiplos",
        content: "Descuento de Flujos de Caja Libre (DCF) y Múltiplos Comparables: comprando un dólar a cincuenta centavos.",
        details: "La Inversión en Valor (Benjamin Graham y Warren Buffett) busca empresas con ventajas competitivas sostenibles (Economic Moats) cuyo precio cotiza con un amplio 'Margen de Seguridad' por debajo de su Valor Intrínseco. La Inversión en Crecimiento (Growth) prioriza compañías que reinvierten agresivamente su flujo de efectivo para expandir ventas y cuota de mercado a tasas del 20% al 45% anual (ej. Berkshire Hathaway vs. Nvidia). En esta lección aprenderás a dominar dos metodologías de valuación complementarias: 1) El Descuento de Flujos de Caja Libre (DCF), proyectando los FCF de los próximos 5 años y descontándolos a valor presente mediante el Costo Promedio Ponderado de Capital (WACC), sumando el Valor Terminal. 2) Múltiplos Relativos (P/E, EV/EBITDA, Price-to-FCF y el PEG Ratio, que corrige el P/E dividiéndolo entre la tasa de crecimiento estimada para detectar gangas ocultas en empresas de alto crecimiento).",
        visualType: "valuation_dcf_tool",
        disclaimer: "Educación, no asesoría financiera. El valor intrínseco resultante de un modelo DCF depende de los supuestos de crecimiento y tasa de descuento aplicados.",
        speakerNotes: "Warren Buffett enseñó: 'El precio es lo que pagas; el valor es lo que obtienes'. Un múltiplo P/E bajo no significa que la acción sea barata: si el negocio agoniza, es una 'trampa de valor' (value trap).",
        concepts: [
          { term: "DCF (Discounted Cash Flow)", def: "Método de valuación intrínseca que descuenta los flujos de caja libre futuros al valor presente utilizando el WACC." },
          { term: "Margen de Seguridad", def: "Descuento porcentual prudencial (ej. 25-30%) entre el valor intrínseco calculado y el precio de mercado para absorber errores de proyección." },
          { term: "Múltiplo PEG", def: "Price/Earnings to Growth: ratio P/E dividido entre la tasa de crecimiento estimada; un PEG < 1.0 sugiere valuación atractiva con respecto al crecimiento." },
          { term: "WACC", def: "Weighted Average Cost of Capital: tasa mínima de descuento requerida que pondera el costo de la deuda y el costo del capital accionario." }
        ],
        realExample: {
          asset: "Valuación Comparativa: Berkshire Hathaway (Value) vs. Nvidia Corp. (Growth)",
          date: "Métricas consolidadas de mercado 2024 - 2026",
          source: "Bloomberg / Morningstar Direct",
          url: "https://www.morningstar.com/",
          caseDescription: "Berkshire Hathaway cotiza a un múltiplo P/E defensivo de 17.2x y EV/EBITDA de 12.5x con un foso competitivo gigantesco en seguros y ferrocarriles. Nvidia cotiza a un P/E aparente de 42.0x; sin embargo, con un crecimiento de utilidades superior al 55% anual derivado de centros de datos de IA, su ratio PEG se sitúa en 0.76x (< 1.0), demostrando que una acción con múltiplo nominal alto puede estar razonablemente valuada si su crecimiento real es exponencial."
        },
        deliverableExercise: {
          title: "Construcción de Valuación DCF Simplificada",
          description: "Utiliza el simulador de la lección para calcular el Valor Intrínseco de una empresa con FCF inicial de $100 MXN, crecimiento del 10% a 5 años y WACC del 9.5%. Compara el resultado con el precio de mercado y anota cuál es el Margen de Seguridad resultante."
        },
        quizzes: [
          {
            question: "Al realizar una valuación por Descuento de Flujos de Caja (DCF), ¿qué representa el Margen de Seguridad propuesto por Benjamin Graham?",
            options: [
              "El dinero guardado en la cuenta de débito del banco.",
              "El descuento prudencial entre el valor intrínseco estimado de la empresa y el precio al que decides comprar en bolsa para absorber la incertidumbre y errores de cálculo.",
              "La ganancia garantizada por ley ante la CNBV.",
              "El seguro contra fraudes de la casa de bolsa."
            ],
            correct: 1,
            explanation: "El margen de seguridad exige comprar con un descuento sustancial respecto al valor intrínseco para proteger el capital contra eventuales desviaciones en las proyecciones."
          },
          {
            question: "¿Por qué el ratio PEG (Price/Earnings to Growth) es indispensable para comparar empresas de alto crecimiento frente a empresas maduras?",
            options: [
              "Porque elimina la necesidad de pagar impuestos corporativos.",
              "Porque normaliza el ratio P/E dividiéndolo entre la tasa de crecimiento esperada de las utilidades; un P/E alto de 35x puede ser barato si la firma crece al 50% anual (PEG = 0.7x).",
              "Porque solo aplica a empresas del sector bancario.",
              "Porque calcula la inflación de Banxico de forma automática."
            ],
            correct: 1,
            explanation: "El ratio PEG premia a las empresas que crecen a ritmos extraordinarios, evitando descartar compañías excepcionales solo por mostrar un P/E nominal elevado."
          },
          {
            question: "¿Qué es una 'Trampa de Valor' (Value Trap) en el mercado bursátil?",
            options: [
              "Una empresa que cotiza con múltiplos P/E o P/B aparentemente baratísimos, pero cuyo negocio fundamental está en declive permanente, perdiendo ingresos y destruyendo capital año tras año.",
              "Una orden de compra con Stop Loss dinámico.",
              "Un ETF global que cobra comisiones del 0.03%.",
              "Una acción tecnológica que reparte dividendos."
            ],
            correct: 0,
            explanation: "Una trampa de valor parece barata superficialmente, pero su bajo precio refleja el deterioro irreversible de su modelo de negocio y flujo de caja."
          }
        ]
      },
      {
        title: "Trading Algorítmico y Backtesting Cuantitativo: Prevención del Curve Fitting",
        content: "Elimina el sesgo emocional ejecutando reglas matemáticas sistemáticas y audita tus curvas de capital.",
        details: "El Trading Cuantitativo sustituye el juicio subjetivo discrecional por algoritmos basados en reglas estadísticas inequívocas de entrada, salida y dimensionamiento de posición. El mayor enemigo del desarrollador cuantitativo es el 'Curve Fitting' (sobreajuste o minería espuria de datos): calibrar los parámetros matemáticos hasta que encajen a la perfección con la serie histórica pasada, lo que garantiza el fracaso rotundo en tiempo real. Un proceso institucional riguroso divide los datos en muestras In-Sample (diseño y calibración) y Out-of-Sample (validación a ciegas sobre periodos no utilizados en el entrenamiento), auditando métricas clave como el Profit Factor (>1.6), el Ratio de Sharpe (>1.2) y el Maximum Drawdown histórico, descontando siempre el impacto real del slippage y los costos de corretaje de la casa de bolsa.",
        visualType: "algo_trading_tool",
        disclaimer: "Educación, no asesoría financiera. Los resultados históricos de backtest cuantitativo no garantizan rentabilidad futura en vivo.",
        speakerNotes: "Si tu algoritmo requiere 15 condiciones diferentes para funcionar, no tienes una estrategia; tienes un reflejo del ruido del pasado. Las estrategias robustas son conceptualmente simples y resisten distintas condiciones de mercado.",
        concepts: [
          { term: "Curve Fitting (Sobreajuste)", def: "Error fatal de sobrecalibrar parámetros para memorizar el pasado histórico en lugar de modelar una ventaja repetible." },
          { term: "Out-of-Sample Testing", def: "Validación estadística obligatoria del algoritmo sobre datos históricos jamás vistos durante la fase de optimización." },
          { term: "Profit Factor", def: "Razón matemática entre las ganancias brutas acumuladas y las pérdidas brutas totales; deseable > 1.6." },
          { term: "Slippage y Fricción", def: "Diferencia entre el precio teórico del modelo y el precio real de ejecución en el libro de posturas más las comisiones bursátiles." }
        ],
        realExample: {
          asset: "Backtest Cuantitativo Auditado: Modelo Momentum BMV / SIC 2019 - 2024",
          date: "Auditoría cuantitativa de 5 años (Enero 2019 - Diciembre 2024)",
          source: "FA Academy Quantitative Research Lab",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Estrategia basada en cruce de medias ponderadas por volatilidad y filtro de volumen en las 20 emisoras más líquidas del SIC. Resultados auditados: Profit Factor: 1.78, Ratio de Sharpe: 1.35, Maximum Drawdown: -14.2% (frente a una caída del -34% del S&P 500 en marzo de 2020), Tasa de Acierto: 51.4%, confirmando robustez estadística fuera de muestra."
        },
        deliverableExercise: {
          title: "Diseño de Reglas Cuantitativas No Discrecionales",
          description: "Escribe las reglas exactas de un sistema cuantitativo: 1) Condición matemática exacta de entrada (ej. Cruce de SMA 20 sobre SMA 50 con volumen > 1.5x ADV), 2) Regla exacta de salida con Stop Loss y Take Profit, 3) ¿Cómo verificarías que no tiene Curve Fitting?"
        },
        quizzes: [
          {
            question: "¿Por qué el 'Curve Fitting' (sobreajuste) es la principal causa de fracaso en estrategias de trading algorítmico?",
            options: [
              "Porque los ordenadores consumen demasiada energía.",
              "Porque sobreoptimiza los parámetros para encajar milimétricamente en el pasado histórico fortuito, perdiendo validez predictiva en el mercado real futuro.",
              "Porque los brókers regulados por la CNBV prohíben el uso de código.",
              "Porque solo funciona con acciones del sector salud."
            ],
            correct: 1,
            explanation: "El curve fitting memoriza el ruido aleatorio del pasado en lugar de capturar una pauta estructural repetible, colapsando inmediatamente al operar en vivo."
          },
          {
            question: "¿Qué función cumple la prueba 'Out-of-Sample' (fuera de muestra) en el desarrollo cuantitativo?",
            options: [
              "Asegurar que el algoritmo no pague comisiones bursátiles.",
              "Validar el sistema sobre un conjunto de datos históricos que jamás fueron utilizados para calibrar los parámetros, verificando si la ventaja es genuina.",
              "Duplicar el balance de la cuenta de forma virtual.",
              "Cambiar la divisa del modelo a euros."
            ],
            correct: 1,
            explanation: "La prueba fuera de muestra actúa como un examen a ciegas: demuestra si el modelo tiene capacidad de generalización sobre datos no vistos."
          },
          {
            question: "En la auditoría del modelo cuantitativo de FA Academy (2019-2024), ¿qué métricas certificaron su solidez?",
            options: [
              "100% de operaciones ganadoras y 0% de pérdidas.",
              "Profit Factor de 1.78, Ratio de Sharpe de 1.35 y Maximum Drawdown acotado a -14.2%, superando al mercado en drawdown durante el crash de 2020.",
              "Que el modelo predijo el precio de cierre de cada día al centavo.",
              "Que no requirió conexión a internet para operar."
            ],
            correct: 1,
            explanation: "Un Profit Factor > 1.6 con Sharpe > 1.2 y drawdown controlado evidencia una ventaja matemática robusta y sostenible en el tiempo."
          }
        ]
      },
      {
        title: "Opciones Financieras Completas: Calls, Puts, Las Griegas y Covered Calls",
        content: "El derivado financiero más versátil: aprende a generar ingresos pasivos y estructurar coberturas quirúrgicas.",
        details: "Las opciones financieras son contratos derivados estandarizados que otorgan al comprador el derecho (sin obligación) de comprar (CALL) o vender (PUT) 100 títulos de una acción a un precio de ejercicio fijado (Strike) antes de una fecha de vencimiento. Para operar opciones con rigor profesional debes dominar 'Las Griegas': 1) Delta (Δ): mide cuántos dólares se mueve la prima de la opción por cada $1.00 USD de variación en la acción subyacente (también actúa como probabilidad aproximada de vencimiento dentro del dinero). 2) Gamma (Γ): velocidad de aceleración de Delta. 3) Theta (Θ): el decaimiento temporal implacable que erosiona el valor de la prima cada día que pasa hacia la expiración. 4) Vega (ν): sensibilidad de la prima ante cambios en la Volatilidad Implícita (IV). Con estas herramientas puedes estructurar 'Covered Calls' (Venta de Calls Cubiertos vendiendo primas contra 100 acciones que ya posees para generar un dividendo sintético mensual) o 'Protective Puts' (seguro contra desplomes catastróficos de mercado).",
        visualType: "options_greeks_tool",
        videoUrls: ["Hdoqm6qJzU4"],
        videoTitle: "Opciones Financieras: Mecánica de Calls, Puts y Las Griegas",
        videoDuration: "24 min",
        disclaimer: "Educación, no asesoría financiera. La operativa de opciones con contratos apalancados o posiciones desnudas conlleva alto riesgo de pérdida.",
        speakerNotes: "Theta es el enemigo mortal de los compradores de opciones y el mejor aliado de los vendedores de Covered Calls: cada día que pasa sin que el precio se mueva bruscamente, el valor de la prima se evapora en beneficio del vendedor.",
        concepts: [
          { term: "Delta (Δ)", def: "Sensibilidad: cuánto varía el valor de la opción por cada $1.00 USD que se mueve el activo subyacente." },
          { term: "Theta (Θ)", def: "Decaimiento temporal: pérdida de valor monetario de la prima por el paso de cada día calendario hacia el vencimiento." },
          { term: "Vega (ν)", def: "Sensibilidad ante la Volatilidad Implícita (IV): encarece las primas cuando el pánico se apodera del mercado." },
          { term: "Covered Call (Call Cubierto)", def: "Estrategia conservadora de vender opciones Call cobrando la prima en efectivo, respaldada con 100 acciones en cartera." }
        ],
        realExample: {
          asset: "Estrategia de Covered Calls sobre Apple Inc. ($AAPL)",
          date: "Caso didáctico de generación de flujo mensual",
          source: "Chicago Board Options Exchange (CBOE)",
          url: "https://www.cboe.com/",
          caseDescription: "Inversionista posee 100 acciones de Apple a $220 USD ($22,000 USD de capital). Vende 1 contrato Call OTM con Strike de $235 USD a 30 días, ingresando una prima inmediata de $3.20 USD por acción ($320 USD netos). Si Apple no supera $235, la opción expira sin valor y el inversionista conserva sus 100 acciones más el rendimiento en efectivo del 1.45% mensual generado por Theta."
        },
        deliverableExercise: {
          title: "Diseño de un Covered Call o Protective Put",
          description: "Elige una acción que te gustaría mantener a largo plazo (ej. AAPL o TSLA). Define: 1) Strike objetivo OTM para vender un Covered Call a 30-45 días, 2) Prima estimada a ingresar, 3) Calcula el rendimiento porcentual mensual que aporta la prima a tu cartera."
        },
        quizzes: [
          {
            question: "En el mercado de opciones financieras, ¿qué mide la griega 'Theta' (Θ) y a quién beneficia su efecto?",
            options: [
              "Mide la tasa de interés de Banxico y beneficia exclusivamente a los bancos comerciales.",
              "Mide la erosión del valor de la prima por el paso implacable del tiempo y beneficia al vendedor de opciones que ingresó la prima en su cuenta.",
              "Mide el volumen de títulos negociados en el día.",
              "Es la comisión fija de corretaje del bróker."
            ],
            correct: 1,
            explanation: "Theta representa el decaimiento temporal diario; mientras el comprador sufre la pérdida de valor por el paso de los días, el vendedor captura esa depreciación como beneficio."
          },
          {
            question: "¿Qué derecho adquiere el comprador de una opción PUT?",
            options: [
              "El derecho (sin obligación) de vender 100 acciones al precio de ejercicio (Strike) fijado antes de una fecha de vencimiento determinada.",
              "El derecho a comprar 100 acciones al precio de apertura de la bolsa.",
              "La obligación de pagar los dividendos a la empresa.",
              "El derecho a nombrar un miembro en el consejo de administración."
            ],
            correct: 0,
            explanation: "La opción Put otorga el derecho de vender al strike pactado, funcionando como un seguro de cobertura contra caídas del mercado."
          },
          {
            question: "¿Cuál es el objetivo principal de la estrategia conservadora de 'Covered Calls' (Calls Cubiertos)?",
            options: [
              "Apostar a que la empresa quebrará la próxima semana.",
              "Generar un flujo recurrente de ingresos en efectivo (dividendo sintético) vendiendo primas contra acciones que ya posees en cartera.",
              "Evitar el pago del Impuesto Sobre la Renta ante el SAT.",
              "Comprar acciones al doble de su valor de mercado."
            ],
            correct: 1,
            explanation: "Los Covered Calls monetizan la posesión de acciones cobrando primas mensuales gracias al decaimiento temporal de Theta, con riesgo acotado al poseer los títulos subyacentes."
          }
        ]
      },
      {
        title: "La Máquina Económica y Ciclos de Deuda de Ray Dalio: Aplicación en BMV y SIC",
        content: "Comprende la interacción entre el crédito, la productividad y los ciclos monetarios para posicionar tu capital.",
        details: "Ray Dalio (fundador de Bridgewater Associates) sintetizó el funcionamiento de la economía mundial en una máquina de tres fuerzas principales: 1) El crecimiento de la productividad a largo plazo (tendencia secular constante). 2) El Ciclo de Deuda de Corto Plazo (de 5 a 8 años, gobernado por la política de tasas de interés de los bancos centrales como Banxico y la Reserva Federal). 3) El Ciclo de Deuda de Largo Plazo (de 50 a 75 años, que culmina en desapalancamientos estructurales). Saber en qué cuadrante del ciclo económico nos encontramos determina cuándo sobreponderar renta variable, materias primas o renta fija soberana. Durante el ciclo de ajuste monetario 2022-2024, Banxico elevó su tasa al 11.25% y la Fed al 5.50%, provocando una fuerte compresión de múltiplos bursátiles antes de abrir paso al nuevo ciclo de flexibilización.",
        visualType: "dalio_cycles",
        source: "Libro: 'Principles for Navigating Big Debt Crises' - Ray Dalio",
        quote: { text: "El dolor más la reflexión es igual al progreso.", author: "Ray Dalio" },
        disclaimer: "Educación, no asesoría financiera. Los ciclos macroeconómicos son referencias probabilísticas, no calendarios fijos.",
        speakerNotes: "No luches contra el Banco Central. Cuando Banxico o la Fed endurecen la política monetaria subiendo tasas para enfriar la inflación, los múltiplos de valuación de las acciones se comprimen de forma inevitable.",
        concepts: [
          { term: "Ciclo de Deuda de Corto Plazo", def: "Oscilación de 5 a 8 años generada por la expansión del crédito y corregida por el banco central mediante tasas de interés." },
          { term: "Desapalancamiento Hermoso", def: "Equilibrio entre austeridad, reestructuración de deuda, transferencias de riqueza y monetización controlada." },
          { term: "All Weather Strategy", def: "Asignación equilibrada de activos diseñada para resistir tanto entornos inflacionarios como recesivos sin sufrir drawdowns catastróficos." },
          { term: "Neutralidad Monetaria", def: "Nivel de tasa de interés donde la economía opera a pleno empleo sin generar presiones inflacionarias." }
        ],
        realExample: {
          asset: "Impacto del Ciclo Monetario Banxico / Fed en el Índice S&P/BMV IPC",
          date: "Ciclo restrictivo 2022 - 2024",
          source: "Banco de México / Reserva Federal / BMV",
          url: "https://www.banxico.org.mx/",
          caseDescription: "Cuando Banxico y la Fed aplicaron el endurecimiento monetario más rápido en cuatro décadas, las emisoras con alto apalancamiento sufrieron desplomes en valuación. Por el contrario, los tenedores de la estrategia All Weather (con asignación a CETES al 11.25% y activos reales) mantuvieron retornos reales positivos mientras la renta variable corregía."
        },
        deliverableExercise: {
          title: "Diagnóstico del Ciclo Económico Actual",
          description: "Consulta la tasa de referencia actual de Banxico y de la Fed. Responde: 1) ¿Los bancos centrales están subiendo, manteniendo o bajando tasas? 2) Según el modelo de Ray Dalio, ¿en qué fase del ciclo de deuda de corto plazo nos encontramos? 3) ¿Qué clase de activo se beneficia de esta fase?"
        },
        quizzes: [
          {
            question: "Según el modelo de la Máquina Económica de Ray Dalio, ¿qué ocurre en los mercados financieros cuando los bancos centrales suben agresivamente las tasas de interés?",
            options: [
              "El crédito se encarece, el gasto y la demanda se desaceleran y los múltiplos de valuación bursátiles tienden a comprimirse por el aumento en la tasa de descuento.",
              "Las acciones de empresas tecnológicas suben al doble automáticamente.",
              "Se erradica por completo cualquier riesgo de recesión económica.",
              "Las empresas públicas dejan de publicar reportes financieros trimestrales."
            ],
            correct: 0,
            explanation: "Al subir las tasas, el costo del capital se encarece y la tasa de descuento de los flujos futuros aumenta, reduciendo el valor presente de las acciones."
          },
          {
            question: "¿Cuáles son las tres fuerzas primordiales que impulsan la economía en el marco conceptual de Ray Dalio?",
            options: [
              "El precio del petróleo, el tipo de cambio y las elecciones políticas.",
              "El crecimiento de la productividad a largo plazo, el ciclo de deuda de corto plazo y el ciclo de deuda de largo plazo.",
              "El gasto del gobierno, las remesas y el turismo internacional.",
              "El volumen de transacciones de Wall Street exclusivamente."
            ],
            correct: 1,
            explanation: "Dalio explica que las fluctuaciones económicas no son aleatorias, sino la superposición de la productividad secular con los dos ciclos de crédito y deuda."
          },
          {
            question: "¿Cuál es el principio rector de la cartera 'All Weather' (Para Todo Clima) diseñada por Bridgewater Associates?",
            options: [
              "Apostar el 100% a la acción de moda en redes sociales.",
              "Equilibrar el riesgo mediante clases de activos no correlacionadas (acciones, bonos gubernamentales, materias primas y oro) que respondan bien a los cuatro entornos: inflación alta/baja y crecimiento alto/bajo.",
              "Guardar todo el dinero en efectivo debajo del colchón.",
              "Comprar exclusivamente criptomonedas de alta volatilidad."
            ],
            correct: 1,
            explanation: "La cartera All Weather busca que las ganancias de los activos favorecidos en cada cuadrante macroeconómico neutralicen las caídas de los demás."
          }
        ]
      },
      {
        title: "Sesgos Cognitivos y Aversión a la Pérdida (Kahneman & Tversky)",
        content: "La psicología del inversor: por qué el dolor de una pérdida es entre 2.0x y 2.5x más intenso que el placer de una ganancia equivalente.",
        details: "Daniel Kahneman y Amos Tversky revolucionaron la ciencia económica al formular la Teoría de las Perspectivas (Prospect Theory), galardonada con el Premio Nobel de Economía. Demostraron experimentalmente que los seres humanos padecemos de 'Aversión a la Pérdida' (Loss Aversion): el dolor psicológico y visceral de perder $10,000 MXN es entre 2.0 y 2.5 veces mayor que la satisfacción subjetiva de ganar esos mismos $10,000 MXN. Este sesgo empuja a los inversionistas a cometer los dos errores más letales: liquidar prematuramente posiciones ganadoras por miedo a perder lo acumulado ('cortar las flores') y mantener indefinidamente posiciones perdedoras ('regar las malas hierbas') con la vana esperanza de recuperar el capital en punto de equilibrio.",
        visualType: "cognitive_biases_tool",
        source: "Libro: 'Thinking, Fast and Slow' - Daniel Kahneman",
        quote: { text: "El principal problema del inversor, e incluso su peor enemigo, es probablemente él mismo.", author: "Benjamin Graham" },
        disclaimer: "Educación, no asesoría financiera. La disciplina psicológica se apuntala mediante reglas escritas y automatización operativa.",
        speakerNotes: "El antídoto contra la aversión a la pérdida es operar con órdenes automáticas de Stop Loss colocadas antes de entrar. Cuando el plan está escrito, la emoción no tiene cabida.",
        concepts: [
          { term: "Aversión a la Pérdida (2.0x - 2.5x)", def: "Asimetría cognitiva documentada donde el dolor subjetivo de una pérdida monetaria más que duplica el placer de una ganancia equivalente." },
          { term: "Sesgo de Confirmación", def: "Tendencia a buscar únicamente noticias y opiniones que ratifiquen tu posición, ignorando las señales contrarias." },
          { term: "Falacia del Costo Hundido", def: "Negarse a cerrar una mala inversión por el capital o tiempo que ya se ha invertido previamente en ella." },
          { term: "Sesgo de Anclaje (Anchoring)", def: "Obsesionarse con el precio histórico pagado en vez de valorar el activo por sus fundamentos actuales." }
        ],
        realExample: {
          asset: "Venta en Pánico Minorista durante el Crash de Marzo de 2020",
          date: "Marzo de 2020",
          source: "Behavioral Finance Review / Federal Reserve Bank of New York",
          url: "https://www.newyorkfed.org/",
          caseDescription: "Durante la irrupción de la pandemia en marzo de 2020, el S&P 500 cayó un -34% en pocas semanas. Millones de ahorradores minoristas, dominados por la aversión a la pérdida y el pánico visceral, capitularon y vendieron sus fondos indexados en el fondo exacto del mercado, transformando pérdidas temporales en pérdidas permanentes y perdiéndose el rally histórico posterior del +70%."
        },
        deliverableExercise: {
          title: "Autoevaluación de Sesgos Cognitivos",
          description: "Recuerda una operación o decisión financiera pasada donde hayas perdido dinero. Responde con honestidad: 1) ¿Cometiste el error de mantener la pérdida por negarte a asumir el dolor del fallo? 2) ¿Qué regla concreta aplicarás ahora para evitar que la aversión a la pérdida sabotee tu portafolio?"
        },
        quizzes: [
          {
            question: "Según los experimentos de Daniel Kahneman y Amos Tversky, ¿cuánto más intenso es el impacto emocional de una pérdida monetaria frente al placer de una ganancia equivalente?",
            options: [
              "Son exactamente idénticos (proporción 1 a 1).",
              "Aproximadamente entre 2.0x y 2.5x más intenso, lo que provoca la retención irracional de posiciones perdedoras.",
              "El dolor es 10 veces menor.",
              "El ser humano no experimenta aversión a la pérdida en bolsa."
            ],
            correct: 1,
            explanation: "La Prospect Theory demostró que la función de valor subjetivo es mucho más empinada en pérdidas que en ganancias, sesgando la toma de decisiones."
          },
          {
            question: "¿Qué conducta describe el 'Sesgo de Anclaje' (Anchoring) en la mente de un inversionista novato?",
            options: [
              "Fijarse obsesivamente en el precio histórico que pagó por la acción (ej. 'no vendo hasta que vuelva a $100 pesos'), ignorando que la empresa perdió clientes y redujo utilidades.",
              "Comprar acciones de empresas que fabrican barcos.",
              "Diversificar en 50 activos no correlacionados.",
              "Pagar las comisiones de corretaje al final de cada mes."
            ],
            correct: 0,
            explanation: "El precio al que compraste no le importa al mercado; anclarse a esa cifra impide cortar pérdidas cuando los fundamentos se deterioran."
          },
          {
            question: "¿Cuál es el mejor antídoto profesional contra los sesgos cognitivos en los mercados bursátiles?",
            options: [
              "Mirar las pantallas de cotización las 24 horas del día.",
              "Operar mediante un Plan de Inversión por escrito con órdenes automáticas de Stop Loss e invalidación definidas ANTES de abrir la posición.",
              "Confiar exclusivamente en corazonadas matutinas.",
              "Cambiar de estrategia cada vez que haya una noticia negativa en la televisión."
            ],
            correct: 1,
            explanation: "La automatización y los protocolos escritos preestablecidos desactivan el cerebro emocional (Sistema 1) y aseguran disciplina racional (Sistema 2)."
          }
        ]
      },
      {
        title: "Cisnes Negros y Antifragilidad en Mercados Reales (Nassim Taleb)",
        content: "No intentes predecir la próxima crisis: construye una estructura de capital que prospere con el desorden.",
        details: "Nassim Nicholas Taleb introdujo los conceptos de 'Cisne Negro' (evento imprevisto, de impacto devastador y que solo se racionaliza retrospectivamente, como la crisis financiera de 2008 o la pandemia de 2020) y 'Antifragilidad'. Lo frágil se quiebra ante el estrés (portafolios sobreapalancados con deuda); lo robusto resiste el golpe sin cambiar; pero lo 'Antifrágil' mejora y se enriquece gracias a la volatilidad. Mantener una reserva estratégica de liquidez del 10% al 15% en activos ultra-seguros (CETES o Bonos soberanos a corto plazo) no representa un costo de oportunidad pasivo: es comprar una opción perpetua para adquirir activos de clase mundial a precios de liquidación cuando el pánico inunda los parqués bursátiles.",
        visualType: "antifragile_tool",
        source: "Libro: 'Antifragile: Things That Gain from Disorder' - Nassim Nicholas Taleb",
        quote: { text: "El viento apaga una vela, pero aviva un incendio. En los mercados, quieres ser el incendio.", author: "Nassim Nicholas Taleb" },
        disclaimer: "Educación, no asesoría financiera. La antifragilidad exige evitar el apalancamiento que conduzca al riesgo de ruina.",
        speakerNotes: "El inversionista profesional adora las crisis porque tiene liquidez para actuar. Quien entra en una recesión 100% invertido y sin efectivo es rehén de las circunstancias.",
        concepts: [
          { term: "Cisne Negro (Black Swan)", def: "Suceso de baja probabilidad estadística aparente pero consecuencias extremas e imprevisibles." },
          { term: "Antifragilidad", def: "Propiedad de los sistemas que incrementan su capacidad y riqueza ante el estrés, desorden y volatilidad." },
          { term: "Estrategia Barbell (Haltera)", def: "Asignar 85-90% a activos de máxima seguridad y 10-15% a apuestas asimétricas de retorno masivo, eliminando el riesgo medio." },
          { term: "Opcionalidad del Efectivo", def: "Poder de compra inmediato para adquirir activos infravalorados durante pánicos colectivos." }
        ],
        realExample: {
          asset: "Despliegue de Liquidez Antifrágil en Emisoras Mexicanas (Crash 2020)",
          date: "Marzo - Abril de 2020",
          source: "Bolsa Mexicana de Valores / Banco de México",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Durante la crisis sanitaria de 2020, emisoras mexicanas líderes de consumo e infraestructura (Bimbo, Cemex, Femsa) cayeron a valoraciones deprimidas con descuentos del -40%. Los inversores que mantenían una reserva del 15% en CETES ejecutaron compras a precios de remate, duplicando el rendimiento de su cartera en los 18 meses posteriores."
        },
        deliverableExercise: {
          title: "Diseño de Reserva Antifrágil de Portafolio",
          description: "Calcula el 10-15% de tu capital total de inversión. Escribe: 1) ¿Qué instrumento de liquidez soberana utilizarás para resguardarlo (ej. CETES 28D)?, 2) Elabora una 'Lista de Deseos' con 3 activos sobresalientes que comprarías de inmediato si el mercado sufriera un Cisne Negro con caídas del -30%."
        },
        quizzes: [
          {
            question: "¿Qué papel juega una reserva estratégica de liquidez (10-15% en CETES/Efectivo) en una cartera Antifrágil según Nassim Taleb?",
            options: [
              "Es dinero inútil que pierde valor por culpa de la inflación.",
              "Es una opción financiera perpetua que otorga liquidez inmediata para adquirir activos excelentes con descuentos históricos durante el pánico de mercado.",
              "Sirve para pagar multas que impone la CNBV.",
              "Solo se utiliza si el mercado bursátil cierra por feriado."
            ],
            correct: 1,
            explanation: "La liquidez no es pasiva: representa la opcionalidad de capitalizar las dislocaciones del mercado cuando los demás inversores se ven forzados a malvender."
          },
          {
            question: "¿Cuál es la propiedad fundamental de un sistema o portafolio 'Antifrágil'?",
            options: [
              "Que se quiebra al menor indicio de volatilidad.",
              "Que no solo resiste los choques, sino que se beneficia, aprende y se fortalece con el desorden y la volatilidad.",
              "Que tiene garantizado un rendimiento del 100% mensual en dólares.",
              "Que no paga comisiones de corretaje."
            ],
            correct: 1,
            explanation: "A diferencia de lo robusto (que simplemente resiste), lo antifrágil mejora y extrae valor del estrés y la incertidumbre."
          },
          {
            question: "¿Cómo estructura Nassim Taleb la 'Estrategia Barbell' (Haltera) para evitar el riesgo de ruina?",
            options: [
              "Invirtiendo el 100% del dinero en una sola empresa petrolera.",
              "Concentrando el 85-90% del capital en activos hiper-seguros (deuda soberana libre de riesgo) y el 10-15% restante en activos con asimetría positiva extrema, evitando el riesgo medio engañoso.",
              "Comprando acciones solo durante los fines de semana.",
              "Pidiendo préstamos bancarios con altas tasas de interés para especular."
            ],
            correct: 1,
            explanation: "La estrategia Barbell elimina el riesgo de ruina blindando la base y reserva una fracción calculada para capturar retornos asimétricos desproporcionados."
          }
        ]
      },
      {
        title: "Estrategias de Salida y Gestión de Ganancias (Philip Fisher & Peter Lynch)",
        content: "Saber cuándo vender es el arte más refinado y riguroso de la inversión patrimonial.",
        details: "Philip Fisher (autor de 'Acciones Comunes y Beneficios Extraordinarios') escribió que si el trabajo de selección fundamental se hizo correctamente, el momento de vender una acción sobresaliente es 'casi nunca'. Sin embargo, los estrategas profesionales definen tres causales objetivas de desinversión: 1) Deterioro permanente de los fundamentos del negocio (pérdida del foso competitivo, endeudamiento insostenible o pérdida de clientes estructural). 2) Sobrevaloración maníaca extrema que desconecte el precio de toda realidad económica presente y futura. 3) Aparición de una oportunidad de inversión drásticamente superior que compita por el capital disponible. Peter Lynch advertía contra el grave error de 'vender a los ganadores para financiar a los perdedores', comparándolo con 'cortar las flores para regar las malas hierbas'.",
        visualType: "exit_strategy_tool",
        source: "Libro: 'Common Stocks and Uncommon Profits' - Philip Fisher",
        quote: { text: "Vende cuando la historia de la empresa cambie para mal, no porque la acción haya subido un 20%.", author: "Peter Lynch" },
        disclaimer: "Educación, no asesoría financiera. Vender por razones tributarias debe consultarse con un contador fiscalista.",
        speakerNotes: "Nunca vendas una empresa extraordinaria solo porque ha tenido un buen año y ha subido. Deja que el interés compuesto haga su magia mientras los fundamentos sigan en expansión.",
        concepts: [
          { term: "Deterioro Fundamental", def: "Erosión estructural en márgenes, deuda o ventajas competitivas que invalida la tesis inicial de compra." },
          { term: "Costo de Oportunidad", def: "Rendimiento potencial sacrificado al mantener capital inmovilizado en un activo mediocre en lugar de uno excelente." },
          { term: "Cortar las Flores", def: "Error común de liquidar las mejores empresas de la cartera para mantener o promediar a la baja las acciones rezagadas." },
          { term: "Trailing Stop de Protección", def: "Mecanismo para asegurar ganancias acumuladas sin limitar el potencial de una tendencia secular alcista." }
        ],
        realExample: {
          asset: "Caso Histórico de Salida por Deterioro Fundamental: Kodak y Sears",
          date: "Estudio de deterioro de foso competitivo",
          source: "Harvard Business School Case Studies",
          url: "https://www.hbs.edu/",
          caseDescription: "Inversionistas que se negaron a vender Kodak cuando la fotografía digital destruyó su modelo de películas químicas o Sears cuando el comercio electrónico de Amazon capturó el mercado minorista sufrieron pérdidas del 100%. Los inversores que aplicaron la regla de Fisher salieron al confirmarse el deterioro estructural de los márgenes, preservando su capital para emisoras ganadoras."
        },
        deliverableExercise: {
          title: "Matriz de Auditoría de Venta de Activos",
          description: "Evalúa una posición de tu portafolio bajo los 3 criterios de Fisher y Lynch: 1) ¿Se han deteriorado sus márgenes o ventajas competitivas? 2) ¿Está sobrevalorada a niveles absurdos? 3) ¿Existe otra oportunidad con mucho mejor potencial? Concluye: Mantener o Vender."
        },
        quizzes: [
          {
            question: "Según Peter Lynch y Philip Fisher, ¿cuál es la razón legítima y prioritaria para vender una acción de la cartera?",
            options: [
              "Porque la acción subió un 15% y quieres gastar el dinero en vacaciones.",
              "Porque la tesis y los fundamentos del negocio se deterioraron de forma estructural y permanente (pérdida de ventaja competitiva o margen).",
              "Porque leíste un comentario alarmista y anónimo en foros de internet.",
              "Porque la gráfica diaria tuvo una vela roja de corrección normal."
            ],
            correct: 1,
            explanation: "El motivo real de salida es el cambio o deterioro irreversible en la historia económica y operativa de la compañía, no las fluctuaciones menores de cotización."
          },
          {
            question: "¿Qué grave error describía Peter Lynch con la metáfora de 'cortar las flores para regar las malas hierbas'?",
            options: [
              "Vender las acciones de las mejores empresas ganadoras que crecen sanamente para promediar a la baja en acciones mediocres que no paran de caer.",
              "Comprar acciones de viveros y jardinería.",
              "Invertir en empresas agrícolas en época de lluvia.",
              "Pagar las comisiones bancarias con retraso."
            ],
            correct: 0,
            explanation: "Desprenderse de los ganadores para rescatar perdedores drena el rendimiento del portafolio al castigar el éxito y premiar la mediocridad."
          },
          {
            question: "Si una empresa sobresaliente de tu cartera se encuentra cotizando a múltiplos algo exigentes pero su EBITDA y FCF crecen al 30% anual, ¿qué recomienda Philip Fisher?",
            options: [
              "Vender todo inmediatamente por pánico.",
              "Mantener la posición y permitir que el interés compuesto continúe multiplicando el valor intrínseco, pues las ventas prematuras de ganadores históricos son el mayor costo del inversionista.",
              "Denunciar a la empresa ante la CNBV.",
              "Pedir un préstamo para venderla en corto."
            ],
            correct: 1,
            explanation: "Fisher demostró que los verdaderos multiplicadores patrimoniales (10x, 20x) se logran manteniendo compañías sobresalientes durante décadas sin interrumpir el interés compuesto."
          }
        ]
      },
      {
        title: "Proyecto Final Integrador: Tesis de Inversión Fundamental Profesional",
        content: "Sintetiza todo tu conocimiento: elabora un memorándum de inversión institucional con valuación, riesgos y plan de salida.",
        details: "La culminación del programa formativo de FA Academy es la redacción de tu Tesis de Inversión Profesional. Una tesis de grado institucional debe responder con rigor a seis pilares metodológicos: 1) Modelo de Negocio y Generación de Flujo: ¿Cómo genera efectivo la empresa y cuál es su propuesta de valor única? 2) Foso Competitivo Sostenible (Economic Moat): Efectos de red, costos de cambio, ventajas de escala o patentes. 3) Salud Financiera y Ratios de Solvencia: Desglose de Deuda Neta / EBITDA, márgenes operativos y generación de Free Cash Flow. 4) Catalizadores de Crecimiento a 1-3 años: Relocalización (Nearshoring), nuevos productos, recompras de acciones o expansión internacional. 5) Valuación Intrínseca: Múltiplos históricos comparables y modelo DCF con margen de seguridad. 6) Escenario Bajista (Bear Case) y Plan de Salida por Invalidación: Criterios por escrito bajo los cuales se cerrará la posición si la tesis se demuestra errónea.",
        visualType: "thesis_project_tool",
        disclaimer: "Educación, no asesoría financiera. La tesis de inversión es el documento rector que blinda tus decisiones patrimoniales contra la impulsividad.",
        speakerNotes: "Escribir tu tesis en un documento formal antes de comprar es el mejor escudo contra el pánico. Si el mercado cae pero los 6 pilares de tu tesis siguen intactos, sabrás con certeza que no debes vender.",
        concepts: [
          { term: "Memorándum de Inversión", def: "Documento ejecutivo formal que resume la justificación cuantitativa y cualitativa de una compra bursátil." },
          { term: "Catalizadores (Catalysts)", def: "Eventos tangibles futuros (nuevos productos, desapalancamiento, recompras) que cerrarán la brecha de valuación." },
          { term: "Bear Case (Caso Bajista)", def: "Simulación de las peores condiciones operativas razonables para cuantificar la pérdida potencial máxima." },
          { term: "Invalidación de Tesis", def: "Conjunto de métricas concretas que, de incumplirse, obligan a liquidar la posición sin titubeos." }
        ],
        realExample: {
          asset: "Tesis Fundamental Modelo: CEMEX, S.A.B. de C.V. ($CEMEXCPO)",
          date: "Caso modelo de certificación FA Academy",
          source: "Comité de Análisis FA Academy",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Modelo de Negocio: Materiales pesados con liderazgo en México y EE.UU. Foso: Canteras y plantas con barreras geográficas insuperables. Salud: Deuda Neta / EBITDA reducida a 1.9x con Grado de Inversión recuperado. Catalizadores: Inversión en infraestructura en EE.UU. y parques industriales de Nearshoring en México. Valuación: EV/EBITDA de 6.5x frente a mediana histórica de 8.2x, con DCF que arroja valor intrínseco de $18.50 MXN (Margen de Seguridad del 24% al cotizar a $14.10 MXN). Bear Case: Recesión severa en construcción residencial en EE.UU. Plan de salida: Invalidación si el ratio Deuda Neta / EBITDA supera 3.2x o el FCF se torna negativo por dos años consecutivos."
        },
        deliverableExercise: {
          title: "Entregable Oficial: Redacción de tu Tesis de Inversión",
          description: "Descarga la plantilla institucional en Excel (.csv). Redacta en el recuadro tu Tesis para 1 emisora cubriendo los 6 pilares: 1) Modelo de negocio, 2) Moat, 3) Deuda y FCF, 4) Catalizadores, 5) Valuación DCF y margen de seguridad, 6) Plan de salida por invalidación."
        },
        quizzes: [
          {
            question: "¿Cuál es el propósito primordial de redactar una Tesis de Inversión Profesional por escrito antes de comprar un activo?",
            options: [
              "Cumplir con un requisito escolar sin utilidad práctica.",
              "Blindar tus decisiones contra el pánico y la euforia, definiendo de antemano el valor intrínseco, los catalizadores y los criterios objetivos de salida.",
              "Asegurar que el banco te conceda un préstamo de inmediato.",
              "Predecir con exactitud el precio de cotización de la próxima semana."
            ],
            correct: 1,
            explanation: "La tesis escrita establece un contrato racional contigo mismo: define exactamente por qué compraste y qué condiciones deben cumplirse para vender, anulando la impulsividad emocional."
          },
          {
            question: "¿Qué elemento de una Tesis de Inversión Profesional define con claridad bajo qué condiciones objetivas debes vender y asumir la pérdida?",
            options: [
              "El resumen de relaciones públicas de la empresa.",
              "La sección de Invalidación de Tesis y Escenario Bajista (Bear Case) preestablecida antes de comprar.",
              "El logotipo de la casa de bolsa.",
              "El precio de cotización del día anterior."
            ],
            correct: 1,
            explanation: "El plan de invalidación define las banderas rojas que, de activarse, demuestran que la premisa inicial era incorrecta y exigen la venta sin dilación."
          },
          {
            question: "¿Qué es un 'Catalizador' (Catalyst) en el análisis de una tesis fundamental?",
            options: [
              "Un producto químico que fabrica la compañía.",
              "Un acontecimiento tangible y previsible a 1-3 años (ej. desapalancamiento, recompra masiva de acciones o lanzamiento de producto clave) que cerrará la brecha entre el precio de mercado y el valor intrínseco.",
              "El gráfico de velas en temporalidad de 5 minutos.",
              "El pago de comisiones de intermediación bursátil."
            ],
            correct: 1,
            explanation: "El catalizador es el motor que despierta el interés del mercado para que el precio de cotización converja hacia su verdadero valor intrínseco."
          }
        ]
      }
    ]
  }
];

// --- BANCO DEL EXAMEN DE CERTIFICACIÓN FINAL FASE 5 (10 PREGUNTAS RIGUROSAS) ---
const quizQuestions = [
  {
    id: 1,
    question: "¿Cuál es la característica de riesgo asimétrico fundamental de una posición de Venta en Corto (Short Selling)?",
    options: [
      "La ganancia máxima está limitada al 100% (si la acción llega a $0), mientras que la pérdida potencial es teóricamente infinita porque el precio puede subir sin techo.",
      "No existe ningún riesgo porque el bróker cubre todas las pérdidas.",
      "El riesgo está limitado al valor de la comisión de corretaje.",
      "Solo se puede perder dinero si el banco central baja las tasas."
    ],
    correct: 0
  },
  {
    id: 2,
    question: "¿Qué es un 'Short Squeeze' en los mercados financieros bursátiles?",
    options: [
      "Un dividendo extraordinario pagado por empresas de consumo.",
      "Un alza violenta y parabólica provocada cuando los vendedores en corto se ven obligados a recomprar títulos masivamente para limitar pérdidas.",
      "Una suspensión técnica del mercado por fallas eléctricas.",
      "Una fusión de dos casas de bolsa mexicanas."
    ],
    correct: 1
  },
  {
    id: 3,
    question: "En una valuación intrínseca por Descuento de Flujos de Caja (DCF), ¿qué tasa se utiliza comúnmente para descontar los flujos futuros al valor presente?",
    options: [
      "La inflación del mes anterior.",
      "El WACC (Costo Promedio Ponderado de Capital).",
      "La tasa de interés de las tarjetas de crédito.",
      "El tipo de cambio peso/dólar."
    ],
    correct: 1
  },
  {
    id: 4,
    question: "¿Por qué el 'Curve Fitting' (sobreajuste de datos) conduce al fracaso de las estrategias de Trading Algorítmico en mercado real?",
    options: [
      "Porque optimiza en exceso los parámetros para encajar en el pasado histórico fortuito, perdiendo validez predictiva en el futuro.",
      "Porque los lenguajes de programación no soportan el cálculo de medias móviles.",
      "Porque la Bolsa Mexicana de Valores no admite computadoras.",
      "Porque genera demasiadas ganancias que saturan el sistema del bróker."
    ],
    correct: 0
  },
  {
    id: 5,
    question: "En el mercado de derivados, ¿qué derecho concede la compra de una opción PUT?",
    options: [
      "El derecho a comprar 100 acciones al precio de mercado.",
      "El derecho (sin obligación) de vender 100 acciones al precio de ejercicio (Strike) fijado antes de una fecha de vencimiento.",
      "La obligación de pagar dividendos a la empresa emisora.",
      "El derecho a asistir a la asamblea de accionistas con voto doble."
    ],
    correct: 1
  },
  {
    id: 6,
    question: "En las opciones financieras, ¿qué griega mide la pérdida de valor de la prima por el paso de cada día calendario (decaimiento temporal)?",
    options: [
      "Delta (Δ)",
      "Gamma (Γ)",
      "Theta (Θ)",
      "Vega (ν)"
    ],
    correct: 2
  },
  {
    id: 7,
    question: "Según los experimentos de Daniel Kahneman y Amos Tversky (Prospect Theory), ¿cuánto más intenso es el dolor de una pérdida monetaria frente al placer de una ganancia idéntica?",
    options: [
      "Aproximadamente entre 2.0x y 2.5x más doloroso.",
      "Exactamente igual (1 a 1).",
      "La mitad de doloroso.",
      "El ser humano no experimenta dolor con pérdidas financieras."
    ],
    correct: 0
  },
  {
    id: 8,
    question: "Según Nassim Taleb, ¿qué característica distingue a una cartera de inversiones 'Antifrágil' frente a una 'Robusta'?",
    options: [
      "La cartera antifrágil no solo resiste los choques del mercado, sino que se beneficia y crece gracias a la volatilidad y las crisis al disponer de liquidez estratégica.",
      "La cartera antifrágil solo compra bonos corporativos de alto riesgo.",
      "La cartera robusta nunca pierde dinero en ningún día del año.",
      "Son conceptos idénticos sin distinción en la práctica."
    ],
    correct: 0
  },
  {
    id: 9,
    question: "¿Qué grave error describía Peter Lynch con la metáfora de 'cortar las flores para regar las malas hierbas'?",
    options: [
      "Vender las acciones de las mejores empresas que van ganando para promediar a la baja en acciones mediocres que no paran de caer.",
      "Comprar flores para decorar la oficina del analista.",
      "Invertir en empresas agrícolas en época de sequía.",
      "Pagar los impuestos anuales con retraso."
    ],
    correct: 0
  },
  {
    id: 10,
    question: "¿Qué elemento de una Tesis de Inversión Profesional define con claridad bajo qué condiciones objetivas debes vender y asumir la pérdida?",
    options: [
      "El resumen de relaciones públicas de la empresa.",
      "La sección de Invalidación de Tesis y Escenario Bajista (Bear Case) preestablecida antes de comprar.",
      "El logotipo de la casa de bolsa.",
      "El precio de cotización del día anterior."
    ],
    correct: 1
  }
];

// --- COMPONENTES VISUALES EDUCATIVOS FASE 5 ---

const ShortSellingTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-rose-500/20 p-4">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
        <TrendingDown className="text-rose-400" size={18} />
        Mecánica de Venta en Corto (Short) y Riesgo Asimétrico
      </h4>
      <span className="text-xs bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded">Pérdida Potencial Infinita</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
      <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
        <span className="text-rose-400 font-bold block mb-1">1. Préstamo Bursátil</span>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Pides prestadas 100 acciones de la empresa 'X' y las vendes en el mercado a $100 USD cada una (Ingresas $10,000 USD).
        </p>
      </div>
      <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
        <span className="text-emerald-400 font-bold block mb-1">2. Escenario Ganador (Caída)</span>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          La acción cae a $60 USD. Las recompras por $6,000 USD y se las devuelves al bróker. <strong>Ganancia: +$4,000 USD (40%)</strong>.
        </p>
      </div>
      <div className="bg-rose-950/40 p-3 rounded-xl border border-rose-500/40">
        <span className="text-rose-300 font-bold block mb-1">3. Escenario Short Squeeze</span>
        <p className="text-rose-200 text-[11px] leading-relaxed">
          La acción salta a $300 USD. Para devolverlas debes pagar $30,000 USD. <strong>Pérdida neta: -$20,000 USD (-200%)</strong>.
        </p>
      </div>
    </div>
    <p className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
      ⚠️ <strong>Regla Vital:</strong> Jamás ejecutes una posición en corto sin un Stop Loss automático en el bróker. El borrow fee diario y los saltos por noticias pueden liquidar tu cuenta.
    </p>
  </div>
);

const ValuationDCFTool = () => {
  const [initialFCF, setInitialFCF] = useState(100);
  const [growthRate, setGrowthRate] = useState(10);
  const [wacc, setWacc] = useState(9.5);
  const [terminalGrowth, setTerminalGrowth] = useState(2.5);
  const [marketPrice, setMarketPrice] = useState(68);

  const g = growthRate / 100;
  const r = wacc / 100;
  const tg = terminalGrowth / 100;

  let pvSum = 0;
  const fcfYears = [1, 2, 3, 4, 5].map(year => {
    const fcf = initialFCF * Math.pow(1 + g, year);
    const pv = fcf / Math.pow(1 + r, year);
    pvSum += pv;
    return { year, fcf, pv };
  });

  const finalFCF = fcfYears[4].fcf;
  const terminalValue = (finalFCF * (1 + tg)) / Math.max(0.01, (r - tg));
  const pvTerminalValue = terminalValue / Math.pow(1 + r, 5);
  const enterpriseValue = pvSum + pvTerminalValue;
  const intrinsicValuePerShare = enterpriseValue / 10;
  const marginOfSafety = ((intrinsicValuePerShare - marketPrice) / intrinsicValuePerShare) * 100;

  return (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Scale className="text-blue-400" size={18} />
            Simulador de Valuación DCF y Margen de Seguridad
          </h4>
          <p className="text-[11px] text-slate-400">Descuento de Flujos de Caja Libre (FCF) proyectados al WACC</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
            marginOfSafety >= 25 
              ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300' 
              : marginOfSafety > 0 
              ? 'bg-amber-950/70 border-amber-500/50 text-amber-300'
              : 'bg-rose-950/70 border-rose-500/50 text-rose-300'
          }`}>
            Margen: {marginOfSafety.toFixed(1)}% {marginOfSafety >= 25 ? '✓ Atractivo' : '⚠️ Ajustado'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-950/80 p-3 rounded-xl border border-slate-800">
        <div>
          <label className="text-slate-400 block text-[10px] mb-1">Crecimiento FCF (Años 1-5)</label>
          <div className="flex items-center gap-1.5">
            <input 
              type="range" min="2" max="25" step="0.5" 
              value={growthRate} 
              onChange={(e) => setGrowthRate(parseFloat(e.target.value))} 
              className="w-full accent-blue-500" 
            />
            <span className="font-mono text-white text-xs w-10 text-right">{growthRate}%</span>
          </div>
        </div>
        <div>
          <label className="text-slate-400 block text-[10px] mb-1">Tasa WACC (Descuento)</label>
          <div className="flex items-center gap-1.5">
            <input 
              type="range" min="6" max="16" step="0.5" 
              value={wacc} 
              onChange={(e) => setWacc(parseFloat(e.target.value))} 
              className="w-full accent-blue-500" 
            />
            <span className="font-mono text-white text-xs w-10 text-right">{wacc}%</span>
          </div>
        </div>
        <div>
          <label className="text-slate-400 block text-[10px] mb-1">Crecimiento Terminal (g)</label>
          <div className="flex items-center gap-1.5">
            <input 
              type="range" min="1.5" max="4.5" step="0.2" 
              value={terminalGrowth} 
              onChange={(e) => setTerminalGrowth(parseFloat(e.target.value))} 
              className="w-full accent-blue-500" 
            />
            <span className="font-mono text-white text-xs w-10 text-right">{terminalGrowth}%</span>
          </div>
        </div>
        <div>
          <label className="text-slate-400 block text-[10px] mb-1">Precio Mercado Actual</label>
          <div className="flex items-center gap-1.5">
            <input 
              type="range" min="30" max="120" step="1" 
              value={marketPrice} 
              onChange={(e) => setMarketPrice(parseFloat(e.target.value))} 
              className="w-full accent-blue-500" 
            />
            <span className="font-mono text-white text-xs w-12 text-right">${marketPrice}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">Valor Intrínseco DCF</p>
          <p className="text-base font-extrabold text-emerald-400">${intrinsicValuePerShare.toFixed(2)} MXN</p>
        </div>
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">Precio en Bolsa (Mercado)</p>
          <p className="text-base font-extrabold text-white">${marketPrice.toFixed(2)} MXN</p>
        </div>
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">Suma PV (Años 1-5)</p>
          <p className="text-base font-bold text-blue-300">${(pvSum / 10).toFixed(2)} MXN</p>
        </div>
        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
          <p className="text-[10px] text-slate-400">PV Valor Terminal</p>
          <p className="text-base font-bold text-purple-300">${(pvTerminalValue / 10).toFixed(2)} MXN</p>
        </div>
      </div>

      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
        <p className="font-bold text-slate-200 mb-2 flex items-center justify-between">
          <span>Múltiplos Comparables: Value (Berkshire) vs Growth (Nvidia)</span>
          <span className="text-[10px] font-normal text-slate-400">P/E · EV/EBITDA · PEG</span>
        </p>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="bg-slate-900 p-2 rounded border border-slate-800">
            <p className="text-slate-400 text-[10px]">Métrica</p>
            <p className="font-semibold text-slate-300 mt-1">P/E Ratio</p>
            <p className="font-semibold text-slate-300">EV/EBITDA</p>
            <p className="font-semibold text-slate-300">PEG Ratio</p>
          </div>
          <div className="bg-slate-900 p-2 rounded border border-blue-900/40">
            <p className="text-blue-400 font-bold text-[10px]">Berkshire (Value)</p>
            <p className="text-white mt-1">17.2x</p>
            <p className="text-white">12.5x</p>
            <p className="text-emerald-400 font-bold">1.1x (Defensivo)</p>
          </div>
          <div className="bg-slate-900 p-2 rounded border border-purple-900/40">
            <p className="text-purple-400 font-bold text-[10px]">Nvidia (Growth)</p>
            <p className="text-white mt-1">42.0x</p>
            <p className="text-white">34.8x</p>
            <p className="text-purple-300 font-bold">0.76x (Crecimiento &gt; 55%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AlgoTradingTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
        <Bot className="text-purple-400" size={18} />
        Auditoría de Trading Cuantitativo: Prevención de Curve Fitting
      </h4>
      <span className="text-xs bg-purple-500/20 text-purple-300 font-bold px-2 py-0.5 rounded">In-Sample vs Out-of-Sample</span>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-slate-400 text-[10px]">Profit Factor Auditado</p>
        <p className="font-bold text-emerald-400 text-sm">1.78 ({'>'} 1.6 Sano)</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-slate-400 text-[10px]">Sharpe Ratio Backtest</p>
        <p className="font-bold text-blue-400 text-sm">1.35 ({'>'} 1.2)</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-slate-400 text-[10px]">Max Drawdown Histórico</p>
        <p className="font-bold text-rose-400 text-sm">-14.2%</p>
      </div>
    </div>
    <p className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
      ⚠️ <strong>Alerta Cuantitativa:</strong> Si tu backtest muestra 95% de acierto y 0% de pérdidas, has cometido 'Curve Fitting' (sobreajuste a datos pasados). El mercado real en vivo destruirá el algoritmo.
    </p>
  </div>
);

const OptionsGreeksTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Las 4 Griegas Maestras de las Opciones</h4>
      <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Estrategia Covered Calls</span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-blue-400 font-bold text-sm">Delta (Δ)</p>
        <p className="text-[10px] text-slate-400 mt-1">Sensibilidad al precio de la acción. Actúa como probabilidad de vencimiento ITM.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-indigo-400 font-bold text-sm">Gamma (Γ)</p>
        <p className="text-[10px] text-slate-400 mt-1">Aceleración: velocidad de cambio de Delta ante cada $1 USD que se mueve la acción.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-rose-400 font-bold text-sm">Theta (Θ)</p>
        <p className="text-[10px] text-slate-400 mt-1">Decaimiento temporal: erosión diaria del valor de la prima hacia el vencimiento.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
        <p className="text-amber-400 font-bold text-sm">Vega (ν)</p>
        <p className="text-[10px] text-slate-400 mt-1">Sensibilidad a la volatilidad implícita: sube la prima cuando hay pánico en el mercado.</p>
      </div>
    </div>
  </div>
);

const DalioCycles = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Las 3 Fuerzas de la Máquina Económica de Ray Dalio</h4>
    <div className="space-y-2 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
        <span className="font-bold text-white">1. Crecimiento de la Productividad (Largo Plazo)</span>
        <p className="text-slate-400 text-[11px] mt-0.5">Innovación tecnológica, educación y eficiencia secular constante (línea ascendente suave).</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <span className="font-bold text-white">2. Ciclo de Deuda de Corto Plazo (5 a 8 años)</span>
        <p className="text-slate-400 text-[11px] mt-0.5">Expansión del crédito y endurecimiento por Banxico/Fed mediante subidas y bajadas de tasas.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-rose-500">
        <span className="font-bold text-white">3. Ciclo de Deuda de Largo Plazo (50 a 75 años)</span>
        <p className="text-slate-400 text-[11px] mt-0.5">Acumulación extrema de pasivos que desemboca en desapalancamientos inflacionarios o deflacionarios.</p>
      </div>
    </div>
  </div>
);

const CognitiveBiasesTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Aversión a la Pérdida de Kahneman & Tversky</h4>
      <span className="text-xs bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded">Asimetría Emocional 2.5x</span>
    </div>
    <div className="grid grid-cols-2 gap-3 text-xs">
      <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl text-center">
        <p className="text-emerald-400 font-bold text-sm">Ganancia de +$10,000 MXN</p>
        <p className="text-slate-300 text-xs mt-1">Placer psicológico: +1.0 Unidad</p>
      </div>
      <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl text-center">
        <p className="text-rose-400 font-bold text-sm">Pérdida de -$10,000 MXN</p>
        <p className="text-rose-300 text-xs mt-1 font-bold">Dolor psicológico: -2.5 Unidades</p>
      </div>
    </div>
    <p className="text-[11px] text-slate-400 mt-2 text-center italic">
      Esta asimetría empuja a vender ganadores demasiado pronto y mantener perdedores con la esperanza de recuperar el dinero.
    </p>
  </div>
);

const AntifragileTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Estrategia Barbell (Haltera) de Nassim Taleb</h4>
    <div className="grid grid-cols-2 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-xl border-l-4 border-emerald-500">
        <span className="text-emerald-400 font-bold block text-sm">85% - 90% Hiper-Seguro</span>
        <p className="text-slate-300 text-[11px] mt-1">CETES 28D, Udibonos y liquidez soberana. Cero riesgo de ruina patrimonial ante cualquier cisne negro.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-xl border-l-4 border-purple-500">
        <span className="text-purple-400 font-bold block text-sm">10% - 15% Asimetría Máxima</span>
        <p className="text-slate-300 text-[11px] mt-1">Opcionalidad de efectivo para comprar activos extraordinarios cuando hay sangre y pánico en el mercado.</p>
      </div>
    </div>
  </div>
);

const ExitStrategyTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Las 3 Causales de Venta de Philip Fisher</h4>
    <div className="space-y-2 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-rose-500">
        <span className="font-bold text-white">1. Deterioro Fundamental Permanente</span>
        <p className="text-slate-400 text-[11px]">Pérdida estructural del foso competitivo, márgenes en declive continuo o apalancamiento riesgoso.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-500">
        <span className="font-bold text-white">2. Sobrevaloración Maníaca Desconectada</span>
        <p className="text-slate-400 text-[11px]">Cuando el precio descuenta décadas de crecimiento perfecto sin margen de seguridad.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-blue-500">
        <span className="font-bold text-white">3. Costo de Oportunidad Superior</span>
        <p className="text-slate-400 text-[11px]">Aparición de una inversión con potencial drásticamente superior que compite por el capital disponible.</p>
      </div>
    </div>
  </div>
);

const ThesisProjectTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 border-b border-slate-800 pb-3">
      <div>
        <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <FileSpreadsheet size={18} className="text-rose-400" />
          Plantilla Oficial: Tesis de Inversión Fundamental
        </h4>
        <p className="text-[11px] text-slate-400">Estructura los 6 pilares de grado institucional antes de invertir</p>
      </div>
      <button
        onClick={downloadInvestmentThesisTemplate}
        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
      >
        <Download size={14} />
        Descargar Plantilla Excel (.csv)
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg">
        <span className="text-rose-400 font-bold block">1. Negocio</span>
        <span className="text-[10px] text-slate-400">Fuentes de ingreso y FCF.</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg">
        <span className="text-rose-400 font-bold block">2. Moat</span>
        <span className="text-[10px] text-slate-400">Ventajas competitivas.</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg">
        <span className="text-rose-400 font-bold block">3. Deuda / FCF</span>
        <span className="text-[10px] text-slate-400">Solvencia financiera.</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg">
        <span className="text-rose-400 font-bold block">4. Catalizadores</span>
        <span className="text-[10px] text-slate-400">Eventos de valor a 1-3a.</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg">
        <span className="text-rose-400 font-bold block">5. Valuación</span>
        <span className="text-[10px] text-slate-400">DCF + Margen &gt; 25%.</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg">
        <span className="text-rose-400 font-bold block">6. Salida</span>
        <span className="text-[10px] text-slate-400">Invalidación predefinida.</span>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 5 ---

export default function CoursePlayerPhase5() {
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
      const saved = localStorage.getItem('fa_phase_5_progress');
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
      localStorage.setItem('fa_phase_5_progress', currentLesson.toString());
      localStorage.setItem('fa_phase_5_total', moduleData.lessons.length.toString());
    } catch (e) {
      // ignore
    }
    if (user) {
      updateProgress(5, currentLesson, moduleData.lessons.length);
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
      submitTestResult(5, calculatedScore, quizQuestions.length);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📊 *Certificación Aprobada - Fase 5 (Estrategias Especializadas y Valuación)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Acreditado en Valuación DCF, Opciones y Griegas, Trading Algorítmico, Ray Dalio y Tesis Fundamental. Solicitud de diploma de graduación oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'short_selling_tool': return <ShortSellingTool />;
      case 'valuation_dcf_tool': return <ValuationDCFTool />;
      case 'algo_trading_tool': return <AlgoTradingTool />;
      case 'options_greeks_tool': return <OptionsGreeksTool />;
      case 'dalio_cycles': return <DalioCycles />;
      case 'cognitive_biases_tool': return <CognitiveBiasesTool />;
      case 'antifragile_tool': return <AntifragileTool />;
      case 'exit_strategy_tool': return <ExitStrategyTool />;
      case 'thesis_project_tool': return <ThesisProjectTool />;
      default: return null;
    }
  };

  // VISTA DEL EXAMEN FINAL FASE 5
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO 
          title="Examen Final: Fase 5 - Estrategias Especializadas | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 5 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/5"
        />
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 5: Estrategias Especializadas
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas rigurosas sobre Venta en Corto, Valuación DCF, Opciones con Griegas, Ray Dalio y Salidas de Fisher.
            </p>
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                    <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
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
                            ? 'bg-rose-600 border-rose-400 text-white font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-rose-900/30 cursor-pointer"
                >
                  Terminar Evaluación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-rose-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(244,63,94,0.25)]">
                <div className="text-6xl mb-4">
                  {score >= 8 ? '🏆' : score >= 6 ? '📈' : '📚'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {score >= 8 ? '¡Graduación Master con Distinción!' : score >= 6 ? 'Módulo Completado' : 'Requiere Repaso'}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Calificación Oficial: <span className="text-rose-400 font-bold text-xl">{score} / {quizQuestions.length}</span>
                </p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gradient-to-r from-rose-500 to-red-500 transition-all duration-1000" 
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
        title={`Fase 5: ${lessonData.title} | FA Academy`}
        description={`Lección ${currentLesson + 1} de la Fase 5 de FA Academy: ${lessonData.content}`}
        url="https://fa-academy.vercel.app/course/phase/5"
      />
      
      {/* HEADER CON BADGE EXACTO */}
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-rose-500 to-red-600 p-2 rounded-lg">
              <Bot className="text-white" size={20} strokeWidth={2.5}/>
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
              <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest hidden md:block">EXPERTO</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-rose-500 to-red-500 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rose-500/10 text-rose-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-rose-500/20">
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
                <PlayCircle size={15} className="text-rose-400" />
                {lessonData.videoTitle || lessonData.title}
              </span>
              {lessonData.videoDuration && (
                <span className="bg-slate-800 px-2.5 py-1 rounded-md text-rose-400 font-semibold flex items-center gap-1">
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
            <Bot size={120} className="text-slate-500" />
          </div>
          <ErrorBoundary fallbackMessage="Error al cargar el módulo visual">
            {renderVisual(lessonData.visualType)}
          </ErrorBoundary>
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          {/* Disclaimer visible obligatorio */}
          <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-rose-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Toda inversión y estrategia especializada conlleva riesgo de pérdida de capital."}</span>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-rose-500 shadow-lg">
            <p className="text-lg md:text-xl text-rose-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="flex gap-4 items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
            <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0">
              <Brain size={20} className="text-rose-400" />
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {lessonData.details}
              </p>
              {lessonData.speakerNotes && (
                <p className="mt-4 text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex gap-2">
                  <span className="text-rose-400 font-bold not-italic">💡 Tip FA Academy:</span>
                  {lessonData.speakerNotes}
                </p>
              )}
            </div>
          </div>

          {/* Caso Real Fechado de Mercado */}
          {(lessonData as any).realExample && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-rose-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
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
                  className="text-rose-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {(lessonData as any).realExample.source} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* Ejercicio con Entregable Práctico */}
          {(lessonData as any).deliverableExercise && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText size={15} /> Ejercicio con Entregable Práctico
              </span>
              <h4 className="text-sm font-bold text-white mb-1">{(lessonData as any).deliverableExercise.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).deliverableExercise.description}</p>
              <textarea 
                placeholder="Escribe aquí tu análisis, valuación o coordenadas estratégicas..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 outline-none focus:ring-1 focus:ring-rose-500 min-h-[70px]"
              />
            </div>
          )}

          {lessonData.concepts && (
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-rose-400" />
                Conceptos Clave de la Lección
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lessonData.concepts.map((c, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-xs font-bold text-rose-300 mb-1">{c.term}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz interactivo por lección con retroalimentación inmediata */}
          {activeQuizzes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-rose-500/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-rose-400" />
                  <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
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
                      <span className="text-xs bg-slate-800 text-rose-400 px-2 py-0.5 rounded font-bold">{qIdx + 1}</span>
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
                          btnStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
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
                  idx === currentLesson ? 'bg-rose-500 scale-125' : 'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] active:scale-95"
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
