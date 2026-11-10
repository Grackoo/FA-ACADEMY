import React, { useState, useEffect } from 'react';
import {
    ArrowRight, ArrowLeft, TrendingUp, Activity,
    Target, Send, Info, BookOpen, PieChart,
    Shield, Anchor, Brain, Library, Quote,
    AlertTriangle, BarChart2, Layers, Zap, Crosshair,
    CheckCircle, ChevronRight, Book, RefreshCw, TrendingDown,
    Bot, FileSpreadsheet, Download, CheckCircle2, XCircle, HelpCircle,
    Sliders, Scale, Award
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadInvestmentThesisTemplate } from '../utils/resources';

// --- DATOS FASE 5: ESTRATEGIAS ESPECIALIZADAS, VALUACIÓN Y OPCIONES ---

const courseData = [
    {
        id: 1,
        title: "Módulo 5: Estrategias Especializadas y Valuación Avanzada",
        description: "Venta en corto, valuación por DCF y múltiplos, opciones financieras con griegas, trading algorítmico y tesis de inversión profesional.",
        lessons: [
            {
                title: "Venta en Corto (Short Selling) y Short Squeeze",
                content: "Aprende a monetizar mercados bajistas comprendiendo la asimetría del riesgo potencialmente infinito.",
                details: "La Venta en Corto consiste en pedir prestadas acciones a tu casa de bolsa mediante un contrato de préstamo bursátil, venderlas en el mercado al precio actual y recomprarlas más tarde (cubrirse) a un precio menor para devolvérselas al prestamista, embolsándote la diferencia menos la tasa de préstamo (borrow fee). Sin embargo, su riesgo es asimétrico: mientras en una posición larga lo máximo que puedes perder es el 100% de tu dinero, en una venta en corto el precio puede subir indefinidamente (pérdida infinita). Un 'Short Squeeze' ocurre cuando una acción con alto interés en corto sube con violencia, obligando a los vendedores en corto a recomprar en estampida para frenar pérdidas, disparando el precio verticalmente (casos históricos: Volkswagen 2008 y GameStop 2021).",
                visualType: "short_selling_tool",
                videoUrls: ["OwMH1mmKVy0"],
                videoTitle: "Mecánica Institucional de la Venta en Corto y Riesgo Infinito",
                videoDuration: "18 min",
                speakerNotes: "Nunca mantengas una posición corta sin un Stop Loss automático estricto. En las posiciones largas el tiempo juega a tu favor; en las posiciones cortas el borrow fee y los dividendos que debes reembolsar juegan en tu contra.",
                concepts: [
                    { term: "Préstamo Bursátil", def: "Contrato donde un tenedor institucional te presta títulos a cambio de una tasa de interés diaria (borrow fee)." },
                    { term: "Short Squeeze", def: "Rally alcista parabólico detonado cuando los vendedores en corto son forzados a recomprar títulos al mercado para cerrar pérdidas." },
                    { term: "Riesgo Asimétrico Infinito", def: "Condición matemática de las ventas en corto donde la pérdida no tiene techo porque el precio puede subir sin límite." },
                    { term: "Margin Call", def: "Exigencia del bróker de depositar fondos adicionales inmediatos ante el avance adverso de una posición en corto." }
                ],
                miniQuiz: {
                    question: "¿Cuál es la principal diferencia de riesgo entre comprar una acción en largo (Long) y venderla en corto (Short)?",
                    options: [
                        "En corto no se pagan comisiones al bróker.",
                        "En largo la pérdida máxima está limitada al 100% de la inversión; en corto la pérdida potencial es teóricamente infinita porque el precio puede subir sin techo.",
                        "En corto siempre ganas dinero cuando sube el mercado.",
                        "No existe diferencia matemática entre ambas operativas."
                    ],
                    correct: 1,
                    explanation: "Una acción no puede caer por debajo de $0 (pérdida máxima 100%), pero puede subir a $500, $1,000 o más, exponiendo al vendedor en corto a pérdidas descontroladas."
                }
            },
            {
                title: "Inversión en Valor (Value) vs. Crecimiento (Growth) & Valuación",
                content: "Descuento de Flujos de Caja (DCF) y Múltiplos Comparables: comprando un dólar a cincuenta centavos.",
                details: "La Inversión en Valor (Benjamin Graham y Warren Buffett) busca empresas con ventajas competitivas sostenibles (Economic Moats) cuyo precio cotiza con un amplio 'Margen de Seguridad' por debajo de su Valor Intrínseco. La Inversión en Crecimiento (Growth) prioriza compañías que reinvierten todo su flujo para expandir ventas a tasas del 20-40% anual (ej. Nvidia vs Berkshire Hathaway). En esta lección aprenderás dos metodologías de valuación: el Descuento de Flujos de Caja Libre (DCF proyectando FCF futuros y descontándolos al costo promedio de capital WACC) y los Múltiplos Relativos (P/E, EV/EBITDA, Price-to-FCF y PEG Ratio para corregir el múltiplo por crecimiento).",
                visualType: "valuation_dcf_tool",
                speakerNotes: "Warren Buffett enseñó: 'El precio es lo que pagas; el valor es lo que obtienes'. Un múltiplo P/E bajo no significa que la acción sea barata: si el negocio agoniza, es una 'trampa de valor' (value trap).",
                concepts: [
                    { term: "DCF (Discounted Cash Flow)", def: "Método de valuación intrínseca que descuenta los flujos de caja libre futuros al valor presente utilizando el WACC." },
                    { term: "Margen de Seguridad", def: "Descuento porcentual (ej. 25-30%) entre el valor intrínseco calculado y el precio de cotización de mercado." },
                    { term: "Múltiplo PEG", def: "Price/Earnings to Growth: ratio P/E dividido entre la tasa de crecimiento estimada; PEG < 1 sugiere precio atractivo." },
                    { term: "WACC", def: "Weighted Average Cost of Capital: tasa mínima de descuento que pondera el costo de deuda y el costo del capital accionario." }
                ],
                miniQuiz: {
                    question: "Al realizar una valuación por Descuento de Flujos de Caja (DCF), ¿qué representa el Margen de Seguridad?",
                    options: [
                        "El dinero que guardas en la cuenta bancaria de emergencia.",
                        "El descuento prudencial entre el valor intrínseco estimado de la empresa y el precio al que decides comprar en bolsa para absorber errores de proyección.",
                        "La ganancia garantizada por ley ante la CNBV.",
                        "El seguro contra fraudes de la casa de bolsa."
                    ],
                    correct: 1,
                    explanation: "El margen de seguridad de Benjamin Graham exige comprar con descuento sustancial respecto al valor intrínseco para protegerse de la incertidumbre futura."
                }
            },
            {
                title: "Trading Algorítmico y Backtesting Cuantitativo",
                content: "Elimina el sesgo emocional ejecutando reglas matemáticas sistemáticas y audita tus curvas de capital.",
                details: "El Trading Cuantitativo sustituye el juicio discrecional por algoritmos basados en reglas estadísticas inequívocas de entrada, salida y dimensionamiento de posición. El mayor enemigo del desarrollador cuantitativo es el 'Curve Fitting' (sobreoptimización o sesgo de minería de datos): calibrar los parámetros del indicador para que encajen a la perfección con el pasado, lo que garantiza el fracaso rotundo en tiempo real. Un proceso profesional requiere dividir los datos en periodos In-Sample (optimización) y Out-of-Sample (validación a ciegas), auditando métricas como el Profit Factor (>1.5), Ratio de Sharpe (>1.2) y Maximum Drawdown.",
                visualType: "algo_trading_tool",
                speakerNotes: "Si tu algoritmo requiere 15 condiciones diferentes para funcionar, no tienes una estrategia; tienes un reflejo del ruido del pasado. Las estrategias robustas son conceptualmente simples.",
                concepts: [
                    { term: "Curve Fitting (Sobreajuste)", def: "Error fatal de sobrecalibrar parámetros para memorizar el pasado histórico en lugar de modelar una ventaja real." },
                    { term: "Out-of-Sample Testing", def: "Prueba obligatoria del algoritmo sobre datos históricos jamás vistos durante la fase de diseño." },
                    { term: "Profit Factor", def: "Razón matemática entre las ganancias brutas acumuladas y las pérdidas brutas totales; deseable > 1.6." },
                    { term: "Slippage y Comisiones", def: "Fricción real de ejecución (deslizamiento de precio y costos de corretaje) que debe descontarse en el backtest." }
                ],
                miniQuiz: {
                    question: "¿Por qué el 'Curve Fitting' (sobreajuste) es la principal causa de quiebra en estrategias de trading algorítmico?",
                    options: [
                        "Porque los ordenadores consumen demasiada electricidad.",
                        "Porque sobreoptimiza los parámetros para encajar milimétricamente en el pasado histórico, fallando estrepitosamente en el mercado real futuro.",
                        "Porque los brókers prohíben el uso de código en México.",
                        "Porque solo funciona con acciones de tecnología."
                    ],
                    correct: 1,
                    explanation: "El curve fitting memoriza el ruido aleatorio del pasado en lugar de capturar una pauta estructural repetible, generando pérdidas inmediatas en vivo."
                }
            },
            {
                title: "Opciones Financieras Completas: Calls, Puts y Las Griegas",
                content: "El instrumento derivado más versátil: aprende a generar ingresos pasivos y estructurar coberturas quirúrgicas.",
                details: "Las opciones financieras son contratos derivados estandarizados que otorgan al comprador el derecho (sin obligación) de comprar (CALL) o vender (PUT) 100 títulos a un precio fijado (Strike) antes de una fecha de vencimiento determinada. Para operar opciones profesionalmente debes dominar 'Las Griegas': Delta (sensibilidad del precio de la opción ante un movimiento de $1 en la acción), Gamma (velocidad de cambio de Delta), Theta (pérdida de valor de la opción por el paso implacable del tiempo) y Vega (impacto de la volatilidad implícita). Conocer estas variables te permite ejecutar la estrategia de 'Covered Calls' (Venta de Calls Cubiertos sobre acciones que ya posees para generar un flujo de dividendos sintéticos mensual) o 'Protective Puts' (seguro contra desplomes de mercado).",
                visualType: "options_greeks_tool",
                videoUrls: ["Hdoqm6qJzU4"],
                videoTitle: "Opciones Financieras: Mecánica de Calls, Puts y Las Griegas",
                videoDuration: "24 min",
                speakerNotes: "Theta es el enemigo mortal de los compradores de opciones y el mejor aliado de los vendedores de Covered Calls: cada día que pasa sin movimiento brusco, el valor temporal de la opción se evapora en beneficio del vendedor.",
                concepts: [
                    { term: "Delta (Δ)", def: "Sensibilidad: cuánto varía el precio de la opción por cada $1.00 USD que se mueve el activo subyacente." },
                    { term: "Theta (Θ)", def: "Decaimiento temporal: dinero exacto que pierde el valor de la prima por el paso de cada día calendario hacia el vencimiento." },
                    { term: "Vega (ν)", def: "Sensibilidad ante la Volatilidad Implícita (IV): sube la prima cuando el pánico encarece los contratos." },
                    { term: "Covered Call (Call Cubierto)", def: "Venta de una opción Call respaldada con 100 acciones en cartera para ingresar la prima en efectivo." }
                ],
                miniQuiz: {
                    question: "En el mercado de opciones financieras, ¿qué mide la griega 'Theta' (Θ) y a quién beneficia?",
                    options: [
                        "Mide la tasa de interés de Banxico y beneficia a los bancos.",
                        "Mide la erosión del valor de la prima por el simple paso del tiempo y beneficia al vendedor de opciones que ingresa la prima.",
                        "Mide el volumen de contratos negociados en la sesión.",
                        "Es el precio de las comisiones del bróker."
                    ],
                    correct: 1,
                    explanation: "Theta representa el decaimiento temporal diario de la opción; mientras el comprador sufre la pérdida de valor por tiempo, el vendedor captura esa depreciación."
                }
            },
            {
                title: "La Máquina Económica y Ciclos de Deuda (Ray Dalio)",
                content: "Comprende la interacción entre el crédito, la productividad y los ciclos monetarios para posicionar tu capital.",
                details: "Ray Dalio (fundador de Bridgewater Associates) sintetizó el funcionamiento de la economía mundial en una máquina de tres fuerzas principales: el crecimiento de la productividad a largo plazo, el Ciclo de Deuda de Corto Plazo (de 5 a 8 años, gobernado por la política de tasas de interés de los bancos centrales) y el Ciclo de Deuda de Largo Plazo (de 50 a 75 años, que desemboca en desapalancamientos inflacionarios o deflacionarios). Saber en qué cuadrante del ciclo económico nos encontramos determina cuándo sobreponderar renta variable, materias primas o renta fija soberana.",
                visualType: "dalio_cycles",
                source: "Libro: 'Principles for Navigating Big Debt Crises' - Ray Dalio",
                quote: { text: "El dolor más la reflexión es igual al progreso.", author: "Ray Dalio" },
                speakerNotes: "No luches contra el Banco Central. Cuando Banxico o la Fed endurecen la política monetaria subiendo tasas para enfriar la inflación, los múltiplos de valuación de las acciones se comprimen de forma inevitable.",
                concepts: [
                    { term: "Ciclo de Deuda de Corto Plazo", def: "Oscilación de 5 a 8 años generada por la expansión del crédito y corregida por el banco central mediante tasas." },
                    { term: "Desapalancamiento Hermoso", def: "Equilibrio entre austeridad, reestructuración de deuda, transferencias de riqueza y monetización controlada." },
                    { term: "All Weather Strategy", def: "Asignación equilibrada de activos diseñada para resistir tanto entornos inflacionarios como recesivos." },
                    { term: "Neutralidad Monetaria", def: "Nivel de tasa de interés donde la economía opera a pleno empleo sin generar presiones inflacionarias." }
                ],
                miniQuiz: {
                    question: "Según el modelo de la Máquina Económica de Ray Dalio, ¿qué ocurre en los mercados cuando el banco central sube agresivamente las tasas de interés?",
                    options: [
                        "El crédito se encarece, el gasto se desacelera y las valuaciones bursátiles tienden a comprimirse.",
                        "Las acciones tecnológicas suben al doble automáticamente.",
                        "Se elimina por completo el riesgo de recesión.",
                        "Las empresas dejan de reportar estados financieros."
                    ],
                    correct: 0,
                    explanation: "Al subir las tasas, el costo del financiamiento aumenta, disminuye la liquidez del sistema y las tasas de descuento en los modelos de valuación provocan caídas en los múltiplos bursátiles."
                }
            },
            {
                title: "Sesgos Cognitivos y Aversión a la Pérdida (Kahneman & Tversky)",
                content: "La psicología del inversor: por qué el dolor de una pérdida es entre 2.0x y 2.5x más intenso que el placer de una ganancia equivalente.",
                details: "Daniel Kahneman y Amos Tversky revolucionaron la economía al formular la Teoría de las Perspectivas (Prospect Theory), galardonada con el Premio Nobel de Economía. Demostraron experimentalmente que los seres humanos padecemos de 'Aversión a la Pérdida' (Loss Aversion): el dolor psicológico y fisiológico de perder $10,000 MXN es entre 2.0 y 2.5 veces mayor que la satisfacción de ganar esos mismos $10,000 MXN. Este sesgo empuja a los operadores a cometer los dos errores más letales: cortar prematuramente las ganancias por miedo a perderlas ('cortar las flores') y mantener indefinidamente posiciones perdedoras ('regar las malas hierbas') con la vana esperanza de recuperar el dinero en punto de equilibrio.",
                visualType: "cognitive_biases_tool",
                source: "Libro: 'Thinking, Fast and Slow' - Daniel Kahneman",
                quote: { text: "El principal problema del inversor, e incluso su peor enemigo, es probablemente él mismo.", author: "Benjamin Graham" },
                speakerNotes: "El antídoto contra la aversión a la pérdida es operar con órdenes automáticas de Stop Loss colocadas antes de entrar. Cuando el plan está escrito, la emoción no tiene cabida.",
                concepts: [
                    { term: "Aversión a la Pérdida (2.0x - 2.5x)", def: "Asimetría psicológica documentada por Kahneman donde el impacto negativo de una pérdida duplica al de una ganancia." },
                    { term: "Sesgo de Confirmación", def: "Tendencia a buscar únicamente noticias y análisis que ratifiquen tu posición, ignorando las señales contrarias." },
                    { term: "Falacia del Costo Hundido", def: "Negarse a cerrar una mala inversión por el capital o tiempo que ya se ha invertido previamente en ella." },
                    { term: "Sesgo de Anclaje (Anchoring)", def: "Obsesionarse con el precio histórico pagado en vez de valorar el activo por sus fundamentos actuales." }
                ],
                miniQuiz: {
                    question: "Según los experimentos de Daniel Kahneman y Amos Tversky, ¿cuánto más intenso es el dolor de una pérdida monetaria frente al placer de una ganancia idéntica?",
                    options: [
                        "Son exactamente iguales (1 a 1).",
                        "Entre 2.0x y 2.5x más intenso, lo que provoca la retención irracional de posiciones perdedoras.",
                        "El dolor es 100 veces menor.",
                        "Solo afecta a quienes no tienen estudios universitarios."
                    ],
                    correct: 1,
                    explanation: "La Prospect Theory demostró que la función de valor es mucho más empinada en el cuadrante de las pérdidas, requiriendo ganar más del doble para compensar el dolor subjetivo."
                }
            },
            {
                title: "Cisnes Negros y Antifragilidad (Nassim Taleb)",
                content: "No intentes predecir la próxima crisis: construye una estructura de capital que prospere con el desorden.",
                details: "Nassim Nicholas Taleb introdujo los conceptos de 'Cisne Negro' (evento imprevisto, de impacto devastador y que solo se racionaliza retrospectivamente, como la crisis de 2008 o la pandemia de 2020) y 'Antifragilidad'. Lo frágil se quiebra ante el estrés (portafolios ultra-apalancados); lo robusto resiste el golpe; pero lo 'Antifrágil' mejora y se enriquece gracias a la volatilidad. Mantener una reserva de liquidez estratégica del 10-15% en activos ultra-seguros (Cetes/Efectivo) no es costo de oportunidad: es comprar una opción perpetua para comprar activos de clase mundial a precios de liquidación cuando hay sangre en los mercados.",
                visualType: "antifragile_tool",
                source: "Libro: 'Antifragile: Things That Gain from Disorder' - Nassim Nicholas Taleb",
                quote: { text: "El viento apaga una vela, pero aviva un incendio. En los mercados, quieres ser el incendio.", author: "Nassim Nicholas Taleb" },
                speakerNotes: "El inversionista profesional adora las crisis porque tiene liquidez para actuar. Quien entra en una recesión 100% invertido y sin efectivo es rehén de las circunstancias.",
                concepts: [
                    { term: "Cisne Negro (Black Swan)", def: "Suceso de baja probabilidad estadística aparente pero consecuencias extremas e imprevisibles." },
                    { term: "Antifragilidad", def: "Propiedad de los sistemas que incrementan su capacidad y riqueza ante el estrés, desorden y volatilidad." },
                    { term: "Estrategia Barbell (Haltera)", def: "Asignar 85-90% a activos de máxima seguridad y 10-15% a apuestas asimétricas de retorno masivo, eliminando el riesgo medio." },
                    { term: "Opcionalidad del Efectivo", def: "Poder de compra inmediato para adquirir activos infravalorados durante pánicos colectivos." }
                ],
                miniQuiz: {
                    question: "¿Qué papel juega una reserva estratégica de liquidez (10-15% en Cetes/Efectivo) en una cartera Antifrágil según Nassim Taleb?",
                    options: [
                        "Es dinero desperdiciado que pierde valor por la inflación.",
                        "Es una opción financiera perpetua que otorga liquidez inmediata para adquirir activos excelentes con descuentos históricos durante el pánico.",
                        "Sirve para pagar multas del bróker.",
                        "Solo se utiliza si el mercado cierra por vacaciones."
                    ],
                    correct: 1,
                    explanation: "La liquidez no es pasiva: representa la opcionalidad de capitalizar las dislocaciones del mercado cuando los demás inversores se ven obligados a liquidar en pérdidas."
                }
            },
            {
                title: "Estrategias de Salida y Gestión de Ganancias (Fisher & Lynch)",
                content: "Saber cuándo vender es el arte más refinado de la inversión patrimonial.",
                details: "Philip Fisher (autor de 'Acciones Comunes y Beneficios Extraordinarios') escribió que si el trabajo de selección fundamental se hizo correctamente, el momento de vender una acción sobresaliente es 'casi nunca'. Sin embargo, los estrategas profesionales definen 3 causales objetivas de desinversión: (1) Deterioro permanente de los fundamentos del negocio (pérdida de foso competitivo o margen). (2) Sobrevaloración maníaca extrema que desconecte el precio de toda realidad económica. (3) Aparición de una oportunidad de inversión drásticamente superior que compita por el capital disponible. Peter Lynch advertía contra el grave error de 'vender a los ganadores para financiar a los perdedores', comparándolo con 'cortar las flores para regar las malas hierbas'.",
                visualType: "exit_strategy_tool",
                source: "Libro: 'Common Stocks and Uncommon Profits' - Philip Fisher",
                quote: { text: "Vende cuando la historia de la empresa cambie para mal, no porque la acción haya subido un 20%.", author: "Peter Lynch" },
                speakerNotes: "Nunca vendas una empresa extraordinaria solo porque ha tenido un buen año. Deja que el interés compuesto haga su magia mientras los fundamentos sigan en expansión.",
                concepts: [
                    { term: "Deterioro Fundamental", def: "Erosión estructural en márgenes, deuda o ventajas competitivas que invalida la tesis inicial de compra." },
                    { term: "Costo de Oportunidad", def: "Rendimiento potencial sacrificado al mantener capital inmovilizado en un activo mediocre en lugar de uno excelente." },
                    { term: "Cortar las Flores", def: "Error común de liquidar las mejores empresas de la cartera para mantener o promediar a la baja las acciones rezagadas." },
                    { term: "Trailing Stop de Protección", def: "Mecanismo para asegurar ganancias acumuladas sin limitar el potencial de una tendencia secular alcista." }
                ],
                miniQuiz: {
                    question: "Según Peter Lynch y Philip Fisher, ¿cuál es la razón válida para vender una posición en cartera?",
                    options: [
                        "Porque la acción subió un 15% y quieres dinero para comprar ropa.",
                        "Porque la tesis y los fundamentos del negocio se deterioraron de forma estructural y permanente.",
                        "Porque leíste un comentario anónimo en redes sociales.",
                        "Porque la gráfica diaria tuvo una vela roja."
                    ],
                    correct: 1,
                    explanation: "El motivo real de salida es el cambio o deterioro de la historia y los fundamentales de la empresa, no las fluctuaciones normales de corto plazo."
                }
            },
            {
                title: "Proyecto Final Integrador: Tesis de Inversión Profesional",
                content: "Sintetiza todo tu conocimiento: elabora un memorándum de inversión institucional con valuación, riesgos y plan de salida.",
                details: "La culminación del programa de FA Academy es la redacción de tu Tesis de Inversión Profesional. Una tesis de grado institucional debe responder con rigor a seis pilares: (1) Identificación y Modelo de Negocio (¿Cómo genera flujo de caja la empresa?). (2) Foso Competitivo y Ventajas Sostenibles (Moat). (3) Análisis de Estados Financieros y Métrica EBITDA/Deuda. (4) Catalizadores de Crecimiento a 1-3 años. (5) Valuación Intrínseca (Múltiplos comparables vs mediana histórica y DCF). (6) Escenario Bajista (Bear Case) y Plan de Salida por Invalidación. Descarga nuestra plantilla institucional en Excel para estructurar tus tesis antes de invertir tu capital.",
                visualType: "thesis_project_tool",
                speakerNotes: "Escribir tu tesis en un documento antes de comprar es el mejor escudo contra el pánico. Si el mercado cae pero los 6 pilares de tu tesis siguen intactos, sabrás con certeza que no debes vender.",
                concepts: [
                    { term: "Memorándum de Inversión", def: "Documento ejecutivo formal que resume la justificación cuantitativa y cualitativa de una compra bursátil." },
                    { term: "Catalizadores (Catalysts)", def: "Eventos tangibles futuros (nuevos productos, desapalancamiento, recompras) que cerrarán la brecha de valuación." },
                    { term: "Bear Case (Caso Bajista)", def: "Simulación de las peores condiciones operativas razonables para cuantificar la pérdida potencial máxima." },
                    { term: "Invalidación de Tesis", def: "Conjunto de métricas concretas que, de incumplirse, obligan a liquidar la posición sin titubeos." }
                ],
                miniQuiz: {
                    question: "¿Cuál es el propósito principal de documentar una Tesis de Inversión Profesional por escrito antes de comprar un activo?",
                    options: [
                        "Cumplir con un trámite burocrático sin utilidad práctica.",
                        "Blindar tus decisiones contra el pánico y la euforia, definiendo de antemano el valor intrínseco, los catalizadores y el plan de salida.",
                        "Asegurar que el banco te otorgue un crédito hipotecario.",
                        "Predecir con exactitud el precio de la acción dentro de 5 días."
                    ],
                    correct: 1,
                    explanation: "La tesis escrita establece un contrato racional contigo mismo: define exactamente por qué compraste y qué condiciones deben cumplirse para vender, anulando la impulsividad emocional."
                }
            }
        ]
    }
];

// --- BANCO DE PREGUNTAS DEL EXAMEN DE CERTIFICACIÓN DE FASE 5 ---
const quizQuestions = [
    {
        id: 1,
        question: "¿Cuál es la característica de riesgo asimétrico fundamental de una posición de Venta en Corto (Short Selling)?",
        options: [
            "La ganancia máxima está limitada al 100% (si la acción llega a $0), mientras que la pérdida potencial es teóricamente infinita.",
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

// --- COMPONENTES VISUALES TÉCNICOS FASE 5 ---

// ── 1. SHORT SELLING & SHORT SQUEEZE TOOL ──────────
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

// ── 2. VALUATION DCF & MULTIPLES TOOL ──────────────
const ValuationDCFTool = () => (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Scale className="text-blue-400" size={18} />
                Valuación Intrínseca: DCF vs Múltiplos Comparables
            </h4>
            <span className="text-xs bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">Margen de Seguridad</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Valor Intrínseco DCF</p>
                <p className="text-sm font-bold text-emerald-400">$88.50 MXN</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Precio Mercado Actual</p>
                <p className="text-sm font-bold text-white">$68.20 MXN</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Margen de Seguridad</p>
                <p className="text-sm font-bold text-emerald-400">+29.8%</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-[10px] text-slate-400">Múltiplo P/E vs Media</p>
                <p className="text-sm font-bold text-amber-400">16.5x (vs 21.0x)</p>
            </div>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 space-y-1">
            <p><strong>Fórmula DCF:</strong> $PV = \sum \frac{FCF_t}{(1 + WACC)^t} + \frac{TerminalValue}{(1 + WACC)^n}$</p>
            <p className="text-slate-400">Comprar activos cuando el precio de mercado ofrece un descuento mínimo del 25% respecto a su valor presente neto garantiza protección de capital.</p>
        </div>
    </div>
);

// ── 3. ALGO TRADING & BACKTESTING ──────────────────
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
                <p className="font-bold text-emerald-400 text-sm">1.78 ({'>'} 1.5 Sano)</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-[10px]">Sharpe Ratio Backtest</p>
                <p className="font-bold text-blue-400 text-sm">1.35</p>
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

// ── 4. OPTIONS GREEKS TOOL ─────────────────────────
const OptionsGreeksTool = () => (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Las 4 Griegas Maestras de las Opciones</h4>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Estrategia Covered Calls</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-400 text-sm">Delta (Δ)</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Sensibilidad al precio de la acción ($1 subyacente).</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-500">
                <p className="font-bold text-amber-400 text-sm">Gamma (Γ)</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Aceleración o tasa de cambio de Delta.</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-rose-500">
                <p className="font-bold text-rose-400 text-sm">Theta (Θ)</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Erosión temporal diaria a favor del vendedor.</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-violet-500">
                <p className="font-bold text-violet-400 text-sm">Vega (ν)</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Sensibilidad ante cambios en la Volatilidad Implícita.</p>
            </div>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-300">
            🎯 <strong>Estrategia Covered Call:</strong> Si posees 100 acciones de Apple, vendes un Call OTM a 30 días, ingresas la prima en efectivo (Theta decay) y aumentas tu rentabilidad anual en un 6-12% adicional.
        </div>
    </div>
);

// ── 5. DALIO DEBT CYCLES ───────────────────────────
const DalioCycles = () => (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
        <h4 className="text-amber-400 font-bold text-sm mb-3">Ciclos Económicos y de Deuda (Ray Dalio)</h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong className="text-emerald-400 block mb-1">Ciclo de Corto Plazo (5 - 8 Años)</strong>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                    Expansión del crédito genera inflación; los bancos centrales suben tasas para frenarla, provocando recesiones menores periódicas.
                </p>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong className="text-amber-400 block mb-1">Ciclo de Largo Plazo (50 - 75 Años)</strong>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                    La acumulación de deuda supera la capacidad de servicio, obligando a desapalancamientos estructurales con impresión monetaria.
                </p>
            </div>
        </div>
    </div>
);

// ── 6. COGNITIVE BIASES & LOSS AVERSION ────────────
const CognitiveBiasesTool = () => (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-2 text-xs">
        <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Brain className="text-rose-400" size={18} />
                Aversión a la Pérdida de Kahneman & Tversky (2.0x - 2.5x)
            </h4>
            <span className="text-xs bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded">Premio Nobel 2002</span>
        </div>
        <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl">
            <p className="text-rose-300 text-[11px] leading-relaxed">
                El dolor de perder $10,000 pesos es <strong>2.5 veces más potente</strong> que la satisfacción de ganar $10,000 pesos. Este desequilibrio psicológico induce a los novatos a aguantar acciones en caída libre para evitar reconocer la pérdida.
            </p>
        </div>
    </div>
);

// ── 7. ANTIFRAGILE TOOL ────────────────────────────
const AntifragileTool = () => (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Frágil vs Robusto vs Antifrágil (Nassim Taleb)</h4>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-800 p-2.5 rounded-lg border-t-4 border-rose-500">
                <span className="font-bold text-rose-400 block">Frágil</span>
                <span className="text-[10px] text-slate-400">Se quiebra ante la crisis (Apalancamiento)</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-t-4 border-blue-500">
                <span className="font-bold text-blue-400 block">Robusto</span>
                <span className="text-[10px] text-slate-400">Resiste el choque sin cambiar (Bonos)</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border-t-4 border-emerald-500">
                <span className="font-bold text-emerald-400 block">Antifrágil</span>
                <span className="text-[10px] text-slate-400">Se enriquece con el desorden (Caja lista)</span>
            </div>
        </div>
    </div>
);

// ── 8. EXIT STRATEGY TOOL ──────────────────────────
const ExitStrategyTool = () => (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700 text-xs space-y-2">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Las 3 Causales de Venta según Philip Fisher & Peter Lynch</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <strong className="text-rose-400 block mb-0.5">1. Deterioro Fundamental</strong>
                <p className="text-slate-400 text-[10px]">La empresa pierde cuota de mercado, sus márgenes se hunden o aumenta la deuda sin control.</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <strong className="text-amber-400 block mb-0.5">2. Euforia Maníaca</strong>
                <p className="text-slate-400 text-[10px]">El precio cotiza a múltiplos astronómicos (ej. P/E de 120x) desconectados de cualquier flujo real.</p>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <strong className="text-emerald-400 block mb-0.5">3. Mejor Oportunidad</strong>
                <p className="text-slate-400 text-[10px]">Aparición de un activo infinitamente superior que ofrece un margen de seguridad más elevado.</p>
            </div>
        </div>
    </div>
);

// ── 9. THESIS PROJECT TOOL ─────────────────────────
const ThesisProjectTool = () => (
    <div className="mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
            <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <FileSpreadsheet size={16} className="text-emerald-400" />
                    Memorándum de Inversión Institucional (Proyecto Final)
                </h4>
                <p className="text-[11px] text-slate-400">Guía práctica de 6 pilares para fundamentar compras patrimoniales</p>
            </div>
            <button
                onClick={downloadInvestmentThesisTemplate}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
            >
                <Download size={14} />
                Descargar Plantilla de Tesis Excel (.csv)
            </button>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
            <p className="font-semibold text-white mb-1">Estructura del Proyecto de Certificación:</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
                Define: Ticker y Modelo de Negocio → Foso Económico (Moat) → Estados Financieros (EBITDA/Deuda) → Catalizadores a 1-3 años → Valuación Intrínseca (DCF/Múltiplos) → Escenario Bajista (Bear Case) y Plan de Salida por Invalidación.
            </p>
        </div>
    </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 5 ---

export default function CoursePlayerPhase5() {
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

    // Cargar progreso previo
    useEffect(() => {
        try {
            const saved = localStorage.getItem('fa_phase_5_progress');
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

    // Persistir progreso
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
            submitTestResult(5, calculatedScore, quizQuestions.length);
        }
    };

    const generateWhatsAppLink = () => {
        const phoneNumber = "527711960057";
        let message = `🎓 *Graduación de Maestría FA Academy - Fase 5 Aprobada* 🎓%0A%0A`;
        message += `Calificación Final: *${score}/${quizQuestions.length}* ⭐️%0A`;
        message += `Aprobado en Valuación DCF, Opciones Financieras (Griegas), Venta en Corto y Tesis de Inversión. Solicitud de Certificado Maestro y revisión de Tesis.`;
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

    // VISTA DE EXAMEN FINAL
    if (showQuiz) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
                <div className="max-w-3xl w-full animate-fade-in">
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800">
                            Examen de Grado Maestro
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
                            Certificación Fase 5: Estrategias Especializadas & Valuación
                        </h1>
                        <p className="text-sm text-slate-400">
                            10 preguntas de validación sobre Opciones, Venta en Corto, DCF, Algoritmos y Psicología de Mercado.
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
                                    className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-rose-900/30 cursor-pointer"
                                >
                                    Calificar Certificación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in py-8">
                            <div className="bg-slate-800/90 p-8 rounded-3xl border border-rose-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(244,63,94,0.25)]">
                                <Award className="w-20 h-20 text-rose-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-2xl font-extrabold text-white">¡Programa Completo Graduado!</h2>
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 my-6">
                                    {score} / {quizQuestions.length}
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {score >= 7 
                                        ? '¡Enhorabuena! Has acreditado la Fase 5 con maestría en derivados, valuación intrínseca y estructuración de tesis.' 
                                        : 'Te sugerimos repasar la mecánica de opciones con Theta y los modelos DCF antes de enviar tu tesis de inversión.'}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a 
                                    href={generateWhatsAppLink()} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-full text-base transition-transform hover:scale-105 shadow-lg"
                                >
                                    <Send size={20} /> Solicitar Diploma de Graduación (WhatsApp)
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
                        <div className="bg-rose-500/10 p-2 rounded-xl border border-rose-500/20">
                            <Bot className="text-rose-400" size={22} />
                        </div>
                        <div>
                            <span className="font-extrabold text-white tracking-wider text-sm md:text-base block">
                                FA ACADEMY <span className="text-rose-400 font-normal">| Fase 5</span>
                            </span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden md:block">
                                Estrategias Especializadas y Valuación
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={downloadInvestmentThesisTemplate}
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium border border-slate-700 transition-colors"
                        >
                            <FileSpreadsheet size={14} className="text-rose-400" />
                            Plantilla Tesis
                        </button>
                        <div className="text-xs md:text-sm font-bold text-slate-300 bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700">
                            Lección {currentLesson + 1} <span className="text-slate-500">/</span> {moduleData.lessons.length}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
                    <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-500 ease-out" 
                        style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}
                    ></div>
                </div>
            </header>

            <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
                <div className="mb-4 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-rose-500/15 text-rose-400 font-bold text-[10px] md:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-rose-500/30">
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
                            title={lessonData.videoTitle || "Clase de Estrategias Especializadas"}
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
                    <div className="bg-gradient-to-r from-slate-800 to-slate-850 p-6 rounded-2xl border-l-4 border-rose-500 shadow-lg">
                        <p className="text-base md:text-lg text-rose-100 font-medium leading-relaxed">
                            {lessonData.content}
                        </p>
                    </div>

                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4">
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                            {lessonData.details}
                        </p>
                        {lessonData.speakerNotes && (
                            <div className="text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                                <Brain size={18} className="text-rose-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-rose-300 not-italic block mb-0.5">Nota de Operativa Avanzada:</strong>
                                    {lessonData.speakerNotes}
                                </div>
                            </div>
                        )}
                    </div>

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

                    {lessonData.miniQuiz && (
                        <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-rose-500/30 shadow-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <HelpCircle size={18} className="text-rose-400" />
                                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
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
                                        btnStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
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
                                    idx === currentLesson ? 'bg-rose-500 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                                }`}
                                title={`Ir a Lección ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={handleNext} 
                        className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] active:scale-95"
                    >
                        <span>{currentLesson === moduleData.lessons.length - 1 ? 'Ir al Examen de Grado Maestro' : 'Siguiente Lección'}</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </footer>
        </div>
    );
}
