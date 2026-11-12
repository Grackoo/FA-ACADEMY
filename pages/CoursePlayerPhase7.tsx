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
  PieChart, Shield, Home, Calendar, Droplets, Key
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 7: INGRESO, DIVIDENDOS Y BIENES RAÍCES (9 LECCIONES) ---

const courseData = [
  {
    id: 7,
    title: "FA Academy: Ingreso, Dividendos y Bienes Raíces",
    description: "Construye una máquina de flujo de efectivo pasivo predecible: matemáticas del dividendo, valuación de FIBRAS (FFO/AFFO), bienes raíces físicos vs bursátiles, escaleras de cobro mensual, fiscalidad y coberturas alternativas (oro, petróleo y criptoactivos).",
    lessons: [
      {
        title: "Matemáticas del Dividendo: Dividend Yield, Payout Ratio y Efecto DRIP",
        content: "El dividendo no es un regalo; es la distribución del flujo de caja libre generado por negocios maduros y rentables.",
        details: "Para el inversionista enfocado en flujos de efectivo, los dividendos representan la recompensa contante y sonante por ser copropietario de una empresa. Sin embargo, perseguir el 'Dividend Yield' más alto a ciegas es una trampa mortal ('Dividend Yield Trap'): un rendimiento del 12% a menudo se debe a que el precio de la acción se ha desplomado un 60% por problemas operativos graves. Debes dominar tres métricas fundamentales: 1) Dividend Yield = Dividendo Anual por Acción / Precio de Mercado. 2) Payout Ratio = Dividendos Totales Pagados / Utilidad Neta (ratios entre 30% y 65% son sostenibles; ratios superiores al 85% o mayores al 100% anticipan recortes inminentes de dividendo). 3) Free Cash Flow Payout Ratio = Dividendos / Flujo de Caja Libre. En el Sistema Internacional de Cotizaciones (SIC), las compañías conocidas como 'Dividend Aristocrats' han incrementado su dividendo de forma ininterrumpida durante más de 25 años consecutivos. Al reinvertir automáticamente los dividendos mediante programas DRIP (Dividend Reinvestment Plan), el interés compuesto se acelera exponencialmente sin aportar dinero nuevo.",
        visualType: "dividend_math_tool",
        disclaimer: "Educación, no asesoría financiera. El pago de dividendos pasados no garantiza que la empresa mantenga o incremente el dividendo en el futuro.",
        speakerNotes: "El Payout Ratio sobre Free Cash Flow es la prueba de ácido. Si una empresa paga dividendos con deuda bancaria en lugar de efectivo operativo, sal de ahí inmediatamente.",
        concepts: [
          { term: "Dividend Yield", def: "Porcentaje de rendimiento que paga una acción al año en dividendos en relación con su precio de cotización actual." },
          { term: "Payout Ratio", def: "Proporción de las utilidades netas o del Free Cash Flow que la dirección de la compañía destina a pagar dividendos." },
          { term: "Dividend Aristocrat", def: "Compañía de primer orden que ha aumentado su dividendo anual de manera consecutiva durante al menos 25 años." },
          { term: "Efecto DRIP", def: "Plan de reinversión automática de dividendos para adquirir más títulos de la misma emisora, activando el interés compuesto." }
        ],
        realExample: {
          asset: "La Trampa de Rendimiento vs. Aristócratas del Dividendo en el SIC",
          date: "Análisis comparativo de flujos 2024 - 2026",
          source: "S&P Dow Jones Indices / Dividend Aristocrats Index",
          url: "https://www.spglobal.com/",
          caseDescription: "Inversionistas novatos compraron acciones con Dividend Yield del 14% que terminaron recortando el dividendo a cero y perdiendo el 50% del capital. En contraste, Aristócratas de consumo básico como Procter & Gamble o Coca-Cola mantuvieron crecimientos de dividendo de entre 4% y 6% anual durante más de 60 años consecutivos, multiplicando el flujo de efectivo recibido por sus accionistas de largo plazo."
        },
        deliverableExercise: {
          title: "Auditoría de Dividendos de una Emisora",
          description: "Selecciona una empresa pagadora de dividendos (ej. BIMBOA, Walmart de México o Johnson & Johnson en el SIC). Localiza: 1) Dividend Yield actual, 2) Payout Ratio sobre utilidades, 3) Historial de dividendos de los últimos 5 años. Concluye si el dividendo es seguro o riesgoso."
        },
        quizzes: [
          {
            question: "¿Por qué un Dividend Yield extremadamente alto (ej. 15% o 20% anual) suele ser una 'Trampa de Rendimiento' (Dividend Trap)?",
            options: [
              "Porque la bolsa mexicana prohíbe pagar más del 5%.",
              "Porque a menudo refleja que el precio de la acción se desplomó drásticamente debido a crisis operativa, pérdida de clientes o endeudamiento crítico, lo que forzará a la empresa a recortar o cancelar el dividendo.",
              "Porque las empresas con alto dividendo no pagan impuestos.",
              "Porque los bancos confiscan los dividendos altos."
            ],
            correct: 1,
            explanation: "El Dividend Yield es un cociente; si el denominador (precio) cae en picada por problemas graves, el porcentaje parece gigantesco pero es insostenible."
          },
          {
            question: "¿Qué rango de 'Payout Ratio' sobre utilidades netas se considera institucionalmente saludable y sostenible para una empresa madura?",
            options: [
              "Entre 30% y 65%, permitiendo repartir flujo sin descuidar inversiones de capital ni reservas.",
              "150% o más de las utilidades.",
              "Exactamente el 0%.",
              "Entre 95% y 100% de manera permanente."
            ],
            correct: 0,
            explanation: "Un payout entre 30% y 65% deja suficiente margen para reinvertir en el negocio, resistir recesiones y seguir pagando a los accionistas."
          },
          {
            question: "¿Qué es el efecto 'DRIP' (Dividend Reinvestment Plan) en la construcción de riqueza?",
            options: [
              "Gastar los dividendos en compras de fin de semana.",
              "La reinversión sistemática y automática de cada dividendo cobrado para comprar más títulos de la misma emisora, aumentando la cantidad de acciones que pagarán dividendos futuros.",
              "Un impuesto sobre el agua que cobra el municipio.",
              "Un tipo de orden con stop loss dinámico."
            ],
            correct: 1,
            explanation: "El DRIP aprovecha el flujo recibido para comprar más títulos sin comisiones adicionales, encendiendo el motor del interés compuesto."
          }
        ]
      },
      {
        title: "Valuación de FIBRAS Inmobiliarias: FFO, AFFO, NAV y Mandato del 95%",
        content: "Bienes raíces institucionales cotizados: cómo auditar naves industriales, centros comerciales y rentas por metro cuadrado.",
        details: "Los Fideicomisos de Inversión en Bienes Raíces (FIBRAS en México, equivalentes a los REITs estadounidenses) permiten ser copropietario de cientos de naves industriales, bodegas logísticas, plazas comerciales y hoteles con apenas unos cuantos pesos. Por disposición de los Artículos 187 y 188 de la Ley del ISR, las FIBRAS tienen el mandato obligatorio de distribuir anualmente al menos el 95% de su resultado fiscal entre los tenedores de certificados (CBFIs). Para valuarlas profesionalmente no se utiliza la Utilidad Neta convencional (que está distorsionada por depreciaciones contables de inmuebles que en la vida real suben de valor), sino: 1) FFO (Funds From Operations) = Utilidad Neta + Depreciación y Amortización - Ganancias por venta de propiedades. 2) AFFO (Adjusted FFO) = FFO - Gastos de Mantenimiento de Capital (CapEx recurrente), que mide el efectivo real distribuible. 3) Net Asset Value (NAV): el valor neto de los activos inmobiliarios menos deuda por certificado. Cuando una FIBRA cotiza con un descuento del 15% al 25% respecto a su NAV, estás comprando ladrillos institucionales por debajo de su costo de reposición.",
        visualType: "fibras_valuation_tool",
        disclaimer: "Educación, no asesoría financiera. El desempeño de las FIBRAS depende de las tasas de ocupación, contratos en dólares/pesos y el ciclo inmobiliario.",
        speakerNotes: "En las FIBRAS industriales (como Prologis o Terrafina), vigila el plazo promedio ponderado de los contratos de arrendamiento (WALT) y qué porcentaje de las rentas está contratado en dólares para capturar protección cambiaria.",
        concepts: [
          { term: "FFO (Funds From Operations)", def: "Flujo operativo que suma la depreciación contable a la utilidad neta para reflejar la generación real de caja inmobiliaria." },
          { term: "AFFO (Adjusted FFO)", def: "FFO ajustado restando el gasto de capital para mantener las propiedades en óptimo estado; es la base real del dividendo." },
          { term: "Net Asset Value (NAV)", def: "Valor de tasación de mercado de los inmuebles menos la deuda total; dividido entre el número de CBFIs." },
          { term: "Tasa de Ocupación", def: "Porcentaje del área bruta rentable (ABR) efectivamente alquilada y cobrando rentas a inquilinos solventes." }
        ],
        realExample: {
          asset: "Boom Industrial y Valuación en Fibra Monterrey ($FMTY14)",
          date: "Reporte Trimestral BMV 2026",
          source: "Bolsa Mexicana de Valores / Fibra Mty",
          url: "https://www.fibramty.com/",
          caseDescription: "FMTY14 estructuró un portafolio con más del 70% de naves industriales vinculadas al Nearshoring y contratos denominados en dólares estadounidenses a 5-10 años. Su tasa de ocupación se mantuvo por encima del 96%, entregando distribuciones mensuales con un Dividend Yield superior al 8.5% anualizado, combinando rentas protegidas con plusvalía de activos."
        },
        deliverableExercise: {
          title: "Auditoría de Métricas de una FIBRA Mexicana",
          description: "Entra a la página de inversionistas de una FIBRA (ej. FMTY14, FUNO11 o FIBRAMQ). Registra: 1) Área Bruta Rentable (ABR) en m², 2) Tasa de ocupación actual (meta > 92%), 3) FFO por CBFI reportado en el último trimestre, 4) Dividend Yield anualizado."
        },
        quizzes: [
          {
            question: "¿Por qué en el análisis de FIBRAS se utiliza el FFO (Funds From Operations) en lugar de la Utilidad Neta contable tradicional?",
            options: [
              "Porque los fideicomisos no pagan sueldos a sus directivos.",
              "Porque la utilidad neta resta fuertes depreciaciones contables de edificios y naves que en el mundo real no pierden valor, sino que ganan plusvalía; el FFO revierte esa distorsión.",
              "Porque el FFO es un impuesto que cobra la CNBV.",
              "Porque solo aplica para plazas comerciales en quiebra."
            ],
            correct: 1,
            explanation: "Los inmuebles reales no se evaporan como la maquinaria industrial; sumar la depreciación contable al flujo permite ver la verdadera generación de efectivo."
          },
          {
            question: "¿Cuál es el mandato de reparto fiscal obligatorio que impone la LISR a las FIBRAS en México?",
            options: [
              "Vender el 10% de sus bodegas cada año.",
              "Distribuir anualmente al menos el 95% de su resultado fiscal neto entre los tenedores de certificados bursátiles fiduciarios (CBFIs).",
              "Pagar las rentas exclusivamente en dólares físicos.",
              "No cobrar renta durante los meses de invierno."
            ],
            correct: 1,
            explanation: "A cambio de no pagar ISR corporativo a nivel fideicomiso, la ley exige que el 95% del resultado fiscal se traslade en efectivo a los inversionistas."
          },
          {
            question: "¿Qué oportunidad representa para un inversionista comprar certificados de una FIBRA cuando cotiza con un descuento del 20% respecto a su NAV (Net Asset Value)?",
            options: [
              "Adquirir participación en bienes raíces de primera calidad pagando 80 centavos por cada peso de valor comercial tasado de las propiedades.",
              "Tener que pagar una multa ante el SAT.",
              "Que el inmueble será demolido la próxima semana.",
              "Comprar acciones sin derechos corporativos."
            ],
            correct: 0,
            explanation: "Cotizar por debajo del NAV implica un margen de seguridad inmobiliario: adquieres ladrillos a un precio inferior a lo que costaría construirlos hoy."
          }
        ]
      },
      {
        title: "Bienes Raíces Físicos vs. FIBRAS: Cap Rate Real, Escrituración y Liquidez",
        content: "Comparativa despiadada entre comprar un departamento para rentar y ser copropietario de bodegas industriales bursátiles.",
        details: "El imaginario popular afirma que 'los bienes raíces físicos son la inversión más segura'. Sin embargo, comprar un departamento residencial para rentar implica costos ocultos colosales que la mayoría ignora: 1) Gastos de Entrada: escrituración, impuestos de traslado de dominio (ISAI) y derechos registrales (4% al 7% del valor del inmueble en efectivo no financiable). 2) Riesgo de Concentración Extremo: todo tu capital en una sola colonia, un solo edificio y un solo inquilino que puede caer en morosidad, destrozar el departamento o tardar 18 meses en ser desalojado por vía judicial. 3) Cap Rate Residencial Real: en las principales ciudades de México, la renta neta real residencial ronda apenas entre el 3.5% y el 5.0% anual tras descontar predial, seguros, vacancia y mantenimiento correctivo. En contraste, las FIBRAS ofrecen diversificación en cientos de inmuebles con inquilinos transnacionales (Walmart, Amazon, DHL), liquidez inmediata en bolsa, cero gestión de reparaciones ni cobranza y Cap Rates industriales del 7.5% al 9.5% anual.",
        visualType: "real_estate_vs_fibras_tool",
        disclaimer: "Educación, no asesoría financiera. Los bienes raíces físicos pueden ofrecer ventajas de apalancamiento hipotecario si se compran en preventas con alto descuento.",
        speakerNotes: "Pregúntate: ¿Quieres ser casero y lidiar con fugas de agua un domingo a las 11 de la noche y cobrar la renta a inquilinos difíciles, o prefieres que directores certificados administren naves industriales y te depositen tus rentas mes a mes en tu cuenta?",
        concepts: [
          { term: "Cap Rate (Tasa de Capitalización)", def: "Renta Operativa Neta Anual dividida entre el valor comercial de compra del inmueble: NOI / Valor Propiedad." },
          { term: "Riesgo de Concentración (Inquilino)", def: "Vulnerabilidad de tener el 100% del flujo condicionado a que un solo inquilino pague puntualmente su renta mensual." },
          { term: "Iliquidez Física", def: "Dificultad de transformar un departamento o terreno en dinero en efectivo; suele tardar de 6 a 18 meses en venderse a precio justo." },
          { term: "Costo de Vacancia", def: "Meses en que la propiedad física permanece desocupada entre un inquilino y otro, generando costos de predial y mantenimiento sin ingresos." }
        ],
        realExample: {
          asset: "Comparativa de Rendimiento Neto: Departamento $3,500,000 MXN vs Portafolio FIBRAS",
          date: "Estudio de rentabilidad inmobiliaria en México 2026",
          source: "Sociedad Hipotecaria Federal / AMPI",
          url: "https://www.gob.mx/shf",
          caseDescription: "Departamento residencial de $3.5M MXN: Renta bruta de $16,000 MXN mensuales. Renta neta real tras predial, seguro, mantenimiento y 1 mes de vacancia anual: $148,000 MXN al año (Cap Rate neto del 4.2%). Por el contrario, $3.5M distribuidos en una canasta de FIBRAS industriales y comerciales generaron más de $280,000 MXN de distribuciones anuales (Cap Rate del 8.0%) con liquidez en 24 horas y sin reparar una sola tubería."
        },
        deliverableExercise: {
          title: "Cálculo de Cap Rate Real de un Inmueble Físico",
          description: "Evalúa un inmueble que conozcas: 1) Precio comercial estimado, 2) Renta mensual bruta, 3) Resta predial anual, mantenimiento estimado (1% del valor) y 1 mes de vacancia para obtener el Ingreso Operativo Neto (NOI), 4) Divide NOI / Precio y compáralo contra la tasa libre de riesgo de CETES."
        },
        quizzes: [
          {
            question: "¿Qué es el 'Cap Rate' (Tasa de Capitalización) de un inmueble y cómo se calcula profesionalmente?",
            options: [
              "La comisión que cobra la inmobiliaria por poner el letrero de venta.",
              "El cociente entre el Ingreso Operativo Neto anual (renta neta descontando predial, mantenimiento y vacancia) y el valor comercial total de la propiedad: NOI / Valor.",
              "El número de recámaras multiplicado por el piso donde se ubica.",
              "La tasa de inflación multiplicada por dos."
            ],
            correct: 1,
            explanation: "El Cap Rate mide el rendimiento operativo puro que genera el inmueble en relación con el capital inmovilizado en su adquisición."
          },
          {
            question: "¿Cuál es una de las mayores desventajas financieras de comprar un solo departamento residencial para rentar frente a invertir en FIBRAS?",
            options: [
              "Que los departamentos pagan dividendos en dólares.",
              "El riesgo extremo de concentración de inquilino (si no te paga o desocupa, tu flujo cae al 0%) y la iliquidez de tardar meses en vender el inmueble ante una emergencia.",
              "Que el gobierno prohíbe rentar departamentos a familias.",
              "Que las FIBRAS solo invierten en el extranjero."
            ],
            correct: 1,
            explanation: "La FIBRA diversifica entre miles de contratos con corporativos AAA; el inmueble físico concentra todo el riesgo en una sola persona."
          },
          {
            question: "En las principales urbes mexicanas, ¿en qué rango suele situarse el Cap Rate neto real residencial tras descontar impuestos, predial, seguro y mantenimiento?",
            options: [
              "Entre el 20% y el 30% anual.",
              "Entre el 3.5% y el 5.0% anual neto.",
              "Exactamente igual a la tasa de CETES.",
              "Más del 50% anual garantizado."
            ],
            correct: 1,
            explanation: "Los altos precios de la vivienda residencial en relación con las rentas comprimen el Cap Rate neto a niveles modestos del 3.5% al 5%."
          }
        ]
      },
      {
        title: "Renta Neta Real vs. Renta Bruta: Cómo Calcular el Cash-on-Cash Return",
        content: "Aprende a descontar las cinco sanguijuelas del flujo inmobiliario: predial, administración, seguros, vacancia y mantenimiento.",
        details: "Muchos supuestos inversionistas inmobiliarios calculan su rentabilidad multiplicando la renta mensual por 12 y dividiéndola entre el precio de compra. Este cálculo de 'Renta Bruta' es una ficción contable. Para conocer la rentabilidad real de tu capital debes dominar el Cash-on-Cash Return: la relación entre el flujo de efectivo neto que efectivamente entra a tu bolsillo en un año y el dinero en efectivo que tú pusiste de tu patrimonio para adquirir el activo. Para obtener el Ingreso Operativo Neto (NOI) debes restar rigurosamente: 1) Impuesto Predial y cuotas de colonos, 2) Seguro de daños contra incendio y terremoto, 3) Costo de administración inmobiliaria (usualmente 8% al 10% de la renta si contratas una agencia para cobrar), 4) Provisión para Mantenimiento Correctivo (1% del valor del inmueble al año para pintura, impermeabilización y tuberías), 5) Provisión por Vacancia (estimar al menos 1 mes sin inquilino cada dos años, equivalente a un 4% a 8% de deducción sobre el ingreso bruto).",
        visualType: "cash_on_cash_tool",
        disclaimer: "Educación, no asesoría financiera. El Cash-on-Cash Return evalúa la eficiencia del capital propio invertido en estructuras apalancadas.",
        speakerNotes: "El Cash-on-Cash Return es la métrica de los millonarios de bienes raíces. Te dice exactamente cuánto efectivo genera cada peso de tu bolsillo que pusiste en el enganche.",
        concepts: [
          { term: "Renta Bruta", def: "Ingreso total pactado en contrato sin descontar ningún gasto de operación, mantenimiento ni impuestos." },
          { term: "Ingreso Operativo Neto (NOI)", def: "Flujo efectivo remanente tras descontar todos los gastos de mantenimiento, seguros, predial, administración y vacancia." },
          { term: "Cash-on-Cash Return", def: "Flujo de caja neto anual después de pagar deuda hipotecaria dividido entre el capital en efectivo aportado inicialmente (enganche + gastos)." },
          { term: "Provisión de Mantenimiento", def: "Reserva mensual acumulada para absorber reparaciones mayores inevitables (impermeabilización, boilers, plomería)." }
        ],
        realExample: {
          asset: "Cálculo de Cash-on-Cash Return en Inmueble con Hipoteca",
          date: "Caso práctico de apalancamiento inmobiliario 2026",
          source: "National Association of Realtors / Instituto de Valuación",
          url: "https://www.nar.realtor/",
          caseDescription: "Inmueble de $2,000,000 MXN. Enganche y gastos en efectivo aportados por el inversionista: $500,000 MXN. Crédito hipotecario de $1.6M con mensualidad de $15,000 MXN ($180,000 al año). Renta cobrada: $18,500 MXN mensuales ($222,000 al año). Gastos operativos anuales (predial, seguro, reparaciones): $22,000 MXN. Flujo Neto en efectivo = $222,000 - $22,000 - $180,000 = $20,000 MXN libres al año. Cash-on-Cash Return = $20,000 / $500,000 = 4.0% en efectivo, más la amortización de capital que el inquilino pagó de la hipoteca."
        },
        deliverableExercise: {
          title: "Calculadora de Cash-on-Cash Return",
          description: "Utiliza el simulador interactivo para ingresar: 1) Inversión en efectivo aportada (enganche + escrituras), 2) Renta bruta anual proyectada, 3) Gastos operativos totales (predial, mantenimiento, vacancia), 4) Pago anual de hipoteca. Calcula el Cash-on-Cash Return resultante."
        },
        quizzes: [
          {
            question: "¿Cuál es la diferencia crítica entre el 'Cap Rate' y el 'Cash-on-Cash Return' en una inversión inmobiliaria?",
            options: [
              "No hay ninguna diferencia; son términos idénticos.",
              "El Cap Rate mide el rendimiento del inmueble como si se hubiera comprado 100% de contado; el Cash-on-Cash Return mide el rendimiento del flujo de efectivo sobre el dinero exacto que tú desembolsaste de tu bolsillo (enganche) en una operación con crédito.",
              "El Cap Rate es solo para naves industriales y el Cash-on-Cash es solo para terrenos agrícolas.",
              "El Cash-on-Cash Return se calcula únicamente en criptomonedas."
            ],
            correct: 1,
            explanation: "El Cash-on-Cash mide la eficiencia del capital propio inyectado, incorporando el efecto amplificador del apalancamiento hipotecario."
          },
          {
            question: "¿Por qué un inversionista riguroso debe incluir una 'Provisión por Vacancia' en su flujo inmobiliario aunque el departamento esté actualmente rentado?",
            options: [
              "Porque los caseros están obligados a desalojar a los inquilinos cada 6 meses por ley.",
              "Porque inevitablemente habrá periodos de desocupación entre la salida de un inquilino y la entrada del siguiente mientras se repara, pinta y promociona el inmueble, durante los cuales no entra un solo peso de renta.",
              "Para pagar multas a la Procuraduría del Consumidor.",
              "Para no pagar el impuesto predial."
            ],
            correct: 1,
            explanation: "Asumir ocupación del 100% permanente durante 20 años es una falacia matemática; calcular al menos 1 mes de vacancia cada 24 meses aporta realismo."
          },
          {
            question: "¿Qué gastos deben restarse de la Renta Bruta para obtener el Ingreso Operativo Neto (NOI)?",
            options: [
              "Únicamente el recibo de la luz.",
              "Impuesto predial, cuotas de mantenimiento condominal, seguro de daños, costo de administración de cobranza y provisiones para reparaciones de mantenimiento correctivo.",
              "El valor de la despensa familiar del dueño.",
              "Las comisiones de la tarjeta de crédito del propietario."
            ],
            correct: 1,
            explanation: "El NOI descuenta todos los costos directos de operación necesarios para mantener el inmueble produciendo flujo comercialmente viable."
          }
        ]
      },
      {
        title: "La Escalera de Flujos (Cash Flow Ladder): Calendario de Cobro Mensual Continuo",
        content: "Estructura un portafolio diseñado como una nómina privada: cobra rentas y dividendos los 12 meses del año.",
        details: "Uno de los mayores placeres de la inversión en renta pasiva es ver entrar depósitos de efectivo en tu cuenta todos los meses sin necesidad de vender tus activos. Para lograrlo, los inversionistas profesionales estructuran una 'Escalera de Flujos' (Cash Flow Ladder) sincronizando los calendarios de distribución de diferentes clases de activos: 1) FIBRAS con reparto Mensual: títulos como Fibra Monterrey ($FMTY14) pagan distribuciones de rentas cada mes natural. 2) FIBRAS con reparto Trimestral escalonado: Fibra Uno ($FUNO11), Fibra Prologis ($FIBRAPL) o Fibra Danhos reparten flujos en meses específicos (ej. febrero, mayo, agosto, noviembre). 3) Bonos Gubernamentales (Bonos M): pagan cupones semestrales a tasa fija en fechas exactas predefinidas. 4) ETFs Globales de Dividendos: reparten dividendos en ciclos marzo-junio-septiembre-diciembre. Combinando estratégicamente estos instrumentos en tu portafolio, creas un flujo de caja continuo que cubre tus gastos corrientes o financia aportaciones constantes al fondo de retiro.",
        visualType: "cash_flow_ladder_tool",
        disclaimer: "Educación, no asesoría financiera. Los calendarios de distribución de dividendos y cupones están sujetos a aprobación de las asambleas correspondientes.",
        speakerNotes: "Diseña tu portafolio para que trabaje como tu nómina. Cuando los dividendos y las rentas de tus FIBRAS superan tus gastos fijos mensuales de vida, has alcanzado formalmente la Libertad Financiera (FIRE).",
        concepts: [
          { term: "Escalera de Flujos (Ladder)", def: "Estrategia de sincronización temporal de cobros de dividendos, rentas y cupones para generar flujo líquido mensual ininterrumpido." },
          { term: "Distribución Mensual", def: "Modelo donde el fideicomiso dispersa el flujo de rentas cada 30 días, facilitando la planeación presupuestaria del inversionista." },
          { term: "Fecha Ex-Derecho (Ex-Dividend)", def: "Día límite para poseer el título en tu casa de bolsa para tener derecho legal a cobrar la distribución anunciada." },
          { term: "Fecha de Pago", def: "Día oficial en que el intermediario bursátil deposita el efectivo líquido en tu cuenta de corretaje." }
        ],
        realExample: {
          asset: "Estructura de Escalera de Rentas Mensuales con FIBRAS y Bonos en México",
          date: "Calendario de cobros 2026",
          source: "Bolsa Mexicana de Valores / Cetesdirecto",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Inversionista arma un portafolio de $200,000 MXN: Asigna 40% a FMTY14 (reparto mensual continuo), 30% a FUNO11 (reparto trimestral feb/may/ago/nov) y 30% a Bonos M a 10 años (cupones fijos semestrales en junio y diciembre). Resultado: Recibe depósitos de rentas todos los meses del año con un rendimiento promedio ponderado del 9.1% anual neto."
        },
        deliverableExercise: {
          title: "Diseño de tu Calendario Anual de Flujos",
          description: "Mapea los 12 meses del año en una tabla: 1) Selecciona 3 activos pagadores de rentas o dividendos (ej. FMTY14, VOO, Bonos M), 2) Marca en qué meses paga cada uno, 3) Comprueba que tengas al menos un depósito de flujo en cada uno de los 12 meses del año."
        },
        quizzes: [
          {
            question: "¿Cuál es la función técnica de la 'Fecha Ex-Derecho' (Ex-Dividend Date) en el cobro de rentas bursátiles?",
            options: [
              "Es el día en que la empresa quiebra si no paga.",
              "Es la fecha límite a partir de la cual si compras el título ya no tienes derecho a cobrar el dividendo del periodo actual; debes haberlo adquirido antes de esa fecha para recibir el pago.",
              "Es el día en que el SAT te descuenta los impuestos.",
              "Es el día en que cierran las casas de bolsa."
            ],
            correct: 1,
            explanation: "Para tener derecho al dividendo debes comprar el título antes de la fecha ex-derecho debido a los ciclos de liquidación bursátil estándar (T+1)."
          },
          {
            question: "¿Por qué las FIBRAS con reparto mensual de rentas (como FMTY14) son muy demandadas por inversionistas en etapa de retiro?",
            options: [
              "Porque garantizan que el dólar subirá de precio.",
              "Porque entregan un flujo predecible cada 30 días, sustituyendo de forma idéntica a una nómina laboral para pagar los gastos de manutención mensual sin liquidar títulos.",
              "Porque no cobran comisiones por retiro bancario.",
              "Porque están exentas de presentar factura electrónica."
            ],
            correct: 1,
            explanation: "El reparto mensual facilita la administración del presupuesto corriente de quien vive de sus rentas patrimoniales."
          },
          {
            question: "¿Qué ventaja ofrece combinar Bonos M gubernamentales semestrales con FIBRAS en una Escalera de Flujos?",
            options: [
              "Aumentar el riesgo del portafolio al máximo.",
              "Combinar la certeza absoluta de la tasa fija soberana garantizada por el gobierno con la protección inflacionaria y el dividendo creciente de los bienes raíces.",
              "Evitar el uso de casas de bolsa mexicanas.",
              "Comprar acciones sin pagar comisión de custodia."
            ],
            correct: 1,
            explanation: "La renta fija soberana ancla la estabilidad de los cobros, mientras que las FIBRAS aportan rentas con potencial de incremento conforme a la inflación."
          }
        ]
      },
      {
        title: "Fiscalidad de Rentas y Dividendos en México: Resultado Fiscal vs. Reembolso de Capital",
        content: "El secreto mejor guardado de las FIBRAS: cómo cobrar rentas libres de impuestos mediante reembolsos de capital.",
        details: "El tratamiento fiscal de los ingresos pasivos en México marca una diferencia gigantesca en tu rendimiento neto acumulado. Al cobrar dividendos de acciones tradicionales (BMV o SIC), la casa de bolsa retiene de forma obligatoria un 10% adicional de ISR definitivo sobre el dividendo pagado (Art. 140 y 164 LISR), el cual se suma a la retención previa que la empresa pagó a nivel corporativo. Sin embargo, en las FIBRAS existe un beneficio fiscal extraordinario: las distribuciones se dividen en dos conceptos: 1) Resultado Fiscal: proviene de las utilidades gravables y está sujeto a retención del 30% de ISR por la casa de bolsa (el cual puedes acreditar en tu declaración anual si tu tasa marginal es menor). 2) Reembolso de Capital: proviene del flujo de depreciación fiscal de los inmuebles; por ley (Art. 187 y 188 LISR), el Reembolso de Capital está 100% EXENTO de retención de ISR al momento de recibirlo en tu cuenta (únicamente disminuye el costo fiscal de adquisición de tu certificado). En muchas FIBRAS industriales, entre el 40% y el 70% de la distribución anual se paga como Reembolso de Capital libre de impuestos.",
        visualType: "tax_distribution_tool",
        disclaimer: "Educación, no asesoría fiscal formal. El acreditamiento de retenciones de dividendos se procesa en la Declaración Anual ante el SAT con constancia fiscal de tu bróker.",
        speakerNotes: "Cuando recibas tu constancia fiscal anual de la casa de bolsa en febrero, revisa el desglose de FIBRAS: verás que una parte sustancial de las rentas entró a tu cuenta con 0% de retención de impuestos bajo la figura de Reembolso de Capital.",
        concepts: [
          { term: "Resultado Fiscal (FIBRAS)", def: "Distribución derivada de utilidades operativas sujetas a retención de ISR del 30% por el intermediario bursátil." },
          { term: "Reembolso de Capital (FIBRAS)", def: "Distribución exenta de retención de ISR en efectivo, que reduce contablemente el costo fiscal promedio del certificado." },
          { term: "Retención 10% en Dividendos", def: "Impuesto adicional definitivo del 10% retenido en origen sobre dividendos distribuidos por personas morales mexicanas o extranjeras en el SIC." },
          { term: "Constancia Fiscal Anual (Forma 37)", def: "Documento emitido por la casa de bolsa que detalla retenciones de ISR y distribuciones exentas para la declaración anual." }
        ],
        realExample: {
          asset: "Distribución Mixta de FIBRAS: 60% Reembolso de Capital y 40% Resultado Fiscal",
          date: "Ejercicio Fiscal SAT 2026",
          source: "Bolsa Mexicana de Valores / Servicio de Administración Tributaria",
          url: "https://www.sat.gob.mx/",
          caseDescription: "Inversionista recibe $50,000 MXN de distribuciones en FIBRAS industriales durante el año. El aviso oficial del fideicomiso desglosa: $30,000 MXN como Reembolso de Capital (ingresan íntegros al 100% libres de impuestos) y $20,000 MXN como Resultado Fiscal (con retención del 30% de $6,000 MXN). En su Declaración Anual, al encontrarse en un tramo marginal del 20%, el SAT le devuelve $2,000 MXN de saldo a favor de esa retención."
        },
        deliverableExercise: {
          title: "Auditoría Fiscal de Distribuciones en FIBRAS",
          description: "Consulta el último aviso de derechos de una FIBRA en BMV o en tu plataforma bursátil. Anota: 1) Monto total distribuido por certificado, 2) Porcentaje pagado como Resultado Fiscal (sujeto a retención), 3) Porcentaje pagado como Reembolso de Capital (libre de impuestos)."
        },
        quizzes: [
          {
            question: "¿Por qué el 'Reembolso de Capital' en las distribuciones de FIBRAS es uno de los mayores escudos fiscales en México?",
            options: [
              "Porque el gobierno condona todas las deudas de los inversionistas.",
              "Porque por ley está 100% exento de retención de ISR al momento de pagarse en efectivo en tu cuenta de casa de bolsa, disminuyendo únicamente el costo fiscal de adquisición de los títulos.",
              "Porque solo aplica para empresas extranjeras de tecnología.",
              "Porque no requiere estar dado de alta en el RFC."
            ],
            correct: 1,
            explanation: "El reembolso de capital devuelve fondos equivalentes a la depreciación contable de los edificios, entrando a tu cuenta libre de retención inmediata de ISR."
          },
          {
            question: "¿Cuál es la tasa de retención de ISR que aplica la casa de bolsa al pagar dividendos de acciones ordinarias mexicanas o del SIC según la Ley del ISR?",
            options: [
              "Tasa adicional definitiva del 10% retenida en la fecha de pago.",
              "Tasa obligatoria del 50%.",
              "Cero impuestos; los dividendos nunca pagan impuestos en México.",
              "Se cobra el 16% de IVA sobre el dividendo."
            ],
            correct: 0,
            explanation: "El artículo 140 de la LISR establece la retención del 10% sobre dividendos pagados por personas morales a personas físicas residentes en México."
          },
          {
            question: "¿Qué documento emite tu casa de bolsa cada año en febrero para que puedas reportar y acreditar tus retenciones de rentas y dividendos ante el SAT?",
            options: [
              "Un pagaré bancario en blanco.",
              "La Constancia de Percepciones y Retenciones Fiscales (con desglose de ganancias de capital, dividendos e intereses).",
              "Una carta de antecedentes no penales.",
              "El título accionario físico impreso en papel membretado."
            ],
            correct: 1,
            explanation: "La constancia fiscal anual consolida todas las retenciones practicadas durante el ejercicio, precargando la información en el sistema del SAT para tu declaración anual."
          }
        ]
      },
      {
        title: "Gestión de Riesgos Inmobiliarios: Concentración, Morosidad y Ciclos de Tasas",
        content: "Los bienes raíces no son infalibles: domina las cuatro amenazas que pueden arruinar tu flujo de rentas.",
        details: "Creer que 'los ladrillos nunca bajan de precio' es un sesgo histórico alimentado por la falta de valuación diaria en el mercado residencial. Un inversionista inmobiliario profesional audita cuatro vectores de riesgo estructural: 1) Riesgo de Tasas de Interés (Interest Rate Risk): cuando los bancos centrales suben las tasas de referencia (como Banxico al 11.25%), los bonos soberanos ofrecen retornos atractivos sin riesgo, provocando caídas en las cotizaciones de las FIBRAS y encareciendo los créditos hipotecarios, lo que deprime las compras inmobiliarias. 2) Riesgo de Apalancamiento y Refinanciamiento (LTV): el Loan-to-Value de una FIBRA no debe superar el 50% de sus activos para evitar insolvencia crediticia al renovar deuda en épocas de tasas altas. 3) Riesgo de Concentración de Inquilino: si un solo cliente representa más del 15% del total de las rentas cobradas por un fideicomiso, su eventual quiebra o rescisión de contrato asestará un golpe severo al dividendo. 4) Riesgo de Obsolescencia y CapEx: naves industriales antiguas que no cumplen con especificaciones ecológicas (certificaciones LEED) pierden inquilinos frente a parques modernos.",
        visualType: "re_risk_tool",
        disclaimer: "Educación, no asesoría financiera. La gestión del riesgo inmobiliario exige auditoría continua de los reportes trimestrales de los fideicomisos.",
        speakerNotes: "En épocas de tasas de interés altas, las FIBRAS sufren caídas de cotización porque los inversores exigen mayor prima de riesgo frente a los CETES. Ese es precisamente el momento en que se compran activos de calidad con descuentos extraordinarios.",
        concepts: [
          { term: "LTV (Loan to Value)", def: "Métrica de apalancamiento: porcentaje de deuda financiera respecto al valor total de tasación de los activos inmobiliarios (debe ser < 45-50%)." },
          { term: "Riesgo de Tasa de Interés", def: "Sensibilidad de las valuaciones inmobiliarias ante el encarecimiento del costo del dinero y la competencia de la renta fija soberana." },
          { term: "WALT (Weighted Average Lease Term)", def: "Plazo promedio ponderado de los contratos de arrendamiento firmados con los inquilinos; a mayor WALT, mayor certidumbre de flujo." },
          { term: "Certificación LEED", def: "Sello internacional de sustentabilidad y eficiencia energética que exigen las empresas multinacionales para rentar naves industriales." }
        ],
        realExample: {
          asset: "Presión de Tasas Altas y Descuento en FIBRAS Mexicanas (2022 - 2024)",
          date: "Ciclo de tasas restrictivas 11.25% Banxico",
          source: "Bolsa Mexicana de Valores / AMIFIBRA",
          url: "https://amifibra.com.mx/",
          caseDescription: "Cuando la tasa libre de riesgo de CETES escaló hasta el 11.50% anual, los inversionistas minoristas vendieron masivamente FIBRAS comerciales e industriales, provocando que cotizaran con descuentos de hasta el 30% respecto a su valor en libros (NAV). Los inversionistas patrimoniales aprovecharon la dislocación para acumular CBFIs con rendimientos por dividendo sostenibles superiores al 10% anual, anticipando la apreciación de capital en cuanto Banxico inició los recortes de tasas."
        },
        deliverableExercise: {
          title: "Auditoría de Deuda (LTV) y WALT de una FIBRA",
          description: "Consulta el reporte trimestral de una FIBRA de tu cartera. Localiza: 1) Ratio Loan-to-Value (LTV) actual y verifica que esté por debajo del límite regulatorio del 50%, 2) Plazo promedio de contratos (WALT en años), 3) ¿Cuál es el inquilino más grande y qué porcentaje de rentas representa?"
        },
        quizzes: [
          {
            question: "¿Por qué las cotizaciones de las FIBRAS suelen caer en bolsa cuando el Banco de México sube fuertemente las tasas de interés?",
            options: [
              "Porque los inquilinos dejan de pagar la renta automáticamente.",
              "Porque los CETES y bonos gubernamentales libres de riesgo se vuelven más atractivos con tasas altas, empujando a los inversionistas a exigir mayor rendimiento por dividendo en las FIBRAS, lo que comprime temporalmente el precio en bolsa.",
              "Porque la BMV cierra los contratos de fideicomisos.",
              "Porque se prohíbe la construcción de naves industriales."
            ],
            correct: 1,
            explanation: "Al subir la tasa soberana libre de riesgo, el costo de oportunidad aumenta y el mercado castiga el precio de los activos de dividendo hasta que su rendimiento se ajusta al alza."
          },
          {
            question: "¿Qué métrica mide el nivel de endeudamiento financiero de una FIBRA respecto al valor comercial de sus propiedades y cuál es el límite prudente?",
            options: [
              "El número de empleados de la constructora.",
              "El LTV (Loan-to-Value); por sanidad financiera y regulación, debe mantenerse idealmente por debajo del 40% al 50%.",
              "El precio de la acción dividido entre la inflación.",
              "El volumen de transacciones de un viernes por la tarde."
            ],
            correct: 1,
            explanation: "Un LTV bajo garantiza que el fideicomiso pueda refinanciar su deuda sin asfixiar la distribución de rentas a los inversionistas."
          },
          {
            question: "¿Qué representa el WALT (Weighted Average Lease Term) en la evaluación de una nave industrial o portafolio de FIBRAS?",
            options: [
              "El peso de los camiones que entran a las bodegas.",
              "El plazo promedio ponderado de vigencia de los contratos de arrendamiento firmados con los inquilinos; mientras mayor sea (ej. 5 a 8 años), mayor es la visibilidad y estabilidad de los flujos futuros.",
              "El costo de la pintura por metro cuadrado.",
              "El tiempo que tarda el notario en escriturar."
            ],
            correct: 1,
            explanation: "Contratos de largo plazo con corporativos globales blindan el flujo de rentas contra las desaceleraciones económicas pasajeras."
          }
        ]
      },
      {
        title: "Proyecto Práctico: Portafolio de Renta de $100,000 MXN con Flujo a 12 Meses",
        content: "Pon la teoría a trabajar: diseña una cartera diversificada de $100k MXN con calendario de pagos y proyección real.",
        details: "En esta sesión práctica integrarás tu propio portafolio generador de rentas pasivas con un capital modelo de $100,000 MXN (o el monto real del que dispongas). Siguiendo las directrices institucionales de FA Academy, estructurarás la asignación entre tres motores de flujo: 1) Motor Industrial y Nearshoring (40% - $40,000 MXN en FIBRAS industriales con contratos dolarizados y reparto mensual o trimestral, ej. FMTY14 y Terrafina/Prologis). 2) Motor Comercial y Diversificado (30% - $30,000 MXN en FIBRAS comerciales de alta liquidez como FUNO11 o Danhos con dividendo superior al 9%). 3) Motor Soberano y Deuda (30% - $30,000 MXN en CETES a 28 días y Bonos M semestrales para asegurar liquidez y amortiguar la volatilidad bursátil). Elaborarás la proyección de flujos mes a mes para los próximos 12 meses, calculando la tasa de rendimiento promedio ponderada neta de impuestos y el monto exacto en efectivo que recibirás cada mes.",
        visualType: "portfolio_100k_tool",
        disclaimer: "Educación, no asesoría financiera. La simulación de portafolio es un ejercicio académico de asignación estratégica de activos de renta.",
        speakerNotes: "No esperes a tener un millón de pesos para empezar. El hábito y la disciplina de estructurar una cartera de $100k con cobros mensuales te da la maestría para gestionar portafolios patrimoniales de cualquier escala.",
        concepts: [
          { term: "Asignación Ponderada", def: "Distribución porcentual del capital entre diferentes vehículos de renta para equilibrar rendimiento y riesgo." },
          { term: "Rendimiento Ponderado", def: "Suma de los rendimientos individuales de cada activo multiplicados por su peso porcentual en el portafolio total." },
          { term: "Flujo Proyectado a 12 Meses", def: "Estimación matemática del dinero líquido exacto que entrará a tu cuenta cada mes del año calendario." },
          { term: "Reinversión Automática", def: "Estrategia de usar los flujos cobrados para comprar nuevos títulos mientras te encuentres en etapa de acumulación patrimonial." }
        ],
        realExample: {
          asset: "Simulación de Portafolio Modelo FA Academy de $100,000 MXN",
          date: "Caso práctico de graduación 2026",
          source: "Comité de Estrategia FA Academy",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Distribución ejecutada: $40,000 MXN en FMTY14 (Yield 8.5% mensual), $30,000 MXN en FUNO11 (Yield 9.5% trimestral) y $30,000 MXN en CETES 28D (Tasa 10.20%). Rendimiento promedio ponderado: 9.31% anual bruto. Flujo proyectado: ~$9,310 MXN de rentas en efectivo al año (~$775 MXN mensuales promedio), con cobros recibidos todos los meses del año y un 45% de las rentas de FIBRAS recibidas libres de retención como Reembolso de Capital."
        },
        deliverableExercise: {
          title: "Hoja de Asignación de tu Portafolio de $100,000 MXN",
          description: "Completa en el recuadro tu propuesta de portafolio de flujo: 1) Tickers y porcentaje asignado a cada instrumento, 2) Dividend Yield / Tasa esperada de cada uno, 3) Calcula el rendimiento promedio ponderado total, 4) Flujo anual estimado en pesos MXN."
        },
        quizzes: [
          {
            question: "En un portafolio de $100,000 MXN asignado 40% a FIBRAS (Yield 9%), 30% a ETFs de dividendos (Yield 4%) y 30% a CETES (Tasa 10%), ¿cuál es el rendimiento promedio ponderado del portafolio?",
            options: [
              "23.00%",
              "7.80% ([0.40 × 9%] + [0.30 × 4%] + [0.30 × 10%] = 3.6% + 1.2% + 3.0%)",
              "5.00%",
              "15.00%"
            ],
            correct: 1,
            explanation: "El cálculo ponderado multiplica la tasa de cada activo por su proporción del capital: 3.6% + 1.2% + 3.0% = 7.80% anual global."
          },
          {
            question: "¿Por qué se recomienda asignar una porción a deuda soberana líquida (ej. CETES 28D) dentro de un portafolio enfocado en rentas pasivas?",
            options: [
              "Para cumplir con una ordenanza de la policía bancaria.",
              "Para contar con liquidez inmediata que amortigüe la volatilidad de las cotizaciones bursátiles y permita aprovechar caídas temporales para comprar más FIBRAS con descuento.",
              "Porque los CETES regalan acciones de empresas estadounidenses.",
              "Porque las FIBRAS prohíben invertir más de $50,000 MXN."
            ],
            correct: 1,
            explanation: "La liquidez soberana actúa como amortiguador y fondo de oportunidad táctico ante correcciones en el mercado secundario."
          },
          {
            question: "¿Qué debe hacer un inversionista con los flujos de efectivo cobrados mensualmente si aún no está en edad de retiro?",
            options: [
              "Gastarlos inmediatamente en cenas de lujo.",
              "Reinvertirlos sistemáticamente para adquirir nuevos certificados o acciones de dividendo, multiplicando la base que pagará más rentas en el futuro (interés compuesto).",
              "Retirarlos en monedas de 10 pesos para guardarlas en una alcancía.",
              "Prestar el dinero sin contrato legal a conocidos."
            ],
            correct: 1,
            explanation: "Reinvertir los dividendos durante la fase de acumulación es el catalizador que acelera el crecimiento patrimonial de forma exponencial."
          }
        ]
      },
      {
        title: "Activos Alternativos y Coberturas: Oro, Petróleo y Criptoactivos Regulados",
        content: "Blindaje contra la devaluación monetaria y shocks geopolíticos: el rol del oro, materias primas y criptoactivos en carteras profesionales.",
        details: "Ningún portafolio institucional moderno está completo sin analizar activos alternativos que ofrezcan descorrelación y cobertura contra shocks macroeconómicos extremos. 1) Oro Físico y ETFs Respaldados ($GLD / Centenarios): reserva de valor probada durante más de 5,000 años; no paga dividendo pero protege el poder adquisitivo en escenarios de hiperinflación, devaluación de divisas fiat y conflictos bélicos internacionales. 2) Petróleo y Commodities ($USO): cobertura directa contra shocks inflacionarios de oferta (crisis energéticas globales). 3) Criptoactivos Autorizados (Bitcoin como 'Oro Digital' y Ethereum): por su emisión matemática algorítmica inmutable (límite estricto de 21 millones de unidades en Bitcoin), ofrecen una propuesta de asimetría positiva extraordinaria. Sin embargo, la gestión profesional exige tres reglas innegociables: (a) Asignación Prudente: únicamente entre el 1% y el 5% del capital total de la cartera (tamaño que permite capturar retornos asimétricos sin amenazar tu supervivencia si el activo colapsa un -50%). (b) Autocustodia Segura: jamás dejar fondos significativos en exchanges centralizados opacos; utilizar billeteras frías de hardware (Cold Wallets) donde tú poseas las llaves privadas ('Not your keys, not your coins'). (c) Marco Fiscal del SAT en México: las ganancias por enajenación de criptoactivos tributan bajo el régimen de enajenación de bienes, debiendo declararse anualmente con acumulación de ingresos.",
        visualType: "crypto_alternative_tool",
        disclaimer: "Educación, no asesoría financiera. Los criptoactivos presentan extrema volatilidad; jamás inviertas dinero que necesites para tu sustento básico o de corto plazo.",
        speakerNotes: "El oro es tu póliza de seguro contra el colapso del sistema bancario tradicional. Bitcoin es tu opción tecnológica asimétrica para el 1-5% de tu cartera. No mezcles especulación impulsiva con inversión patrimonial disciplinada.",
        concepts: [
          { term: "Oro como Cobertura", def: "Activo monetario sin riesgo de contraparte que preserva poder adquisitivo durante crisis geopolíticas y devaluaciones seculares." },
          { term: "Asignación Asimétrica (1-5%)", def: "Exposición calculada en criptoactivos donde perder 1x no afecta tu vida, pero ganar 5x-10x impulsa sensiblemente tu patrimonio." },
          { term: "Cold Wallet (Autocustodia)", def: "Dispositivo físico de hardware que resguarda tus llaves privadas fuera de internet, blindando tus activos contra hackeos de plataformas." },
          { term: "Fiscalidad SAT en Cripto", def: "Enajenación de bienes: obligación de reportar la ganancia neta anual obtenida entre el precio de venta y el costo de adquisición comprobable." }
        ],
        realExample: {
          asset: "Desempeño del Oro y Bitcoin en la Corrección de Inflación Global (2022 - 2026)",
          date: "Análisis de activos alternativos 2026",
          source: "World Gold Council / Bloomberg Intelligence",
          url: "https://www.gold.org/",
          caseDescription: "Durante el shock inflacionario y las tensiones geopolíticas internacionales, el oro rompió máximos históricos superando los $2,600 USD por onza, mientras que la aprobación de ETFs de Bitcoin al contado en Wall Street canalizó miles de millones de dólares institucionales. Portafolios con un 5% asignado a oro y un 2% a Bitcoin redujeron su correlación con la bolsa tradicional y capturaron retornos reales sobresalientes."
        },
        deliverableExercise: {
          title: "Matriz de Coberturas Alternativas de tu Portafolio",
          description: "Define en el recuadro tu política de activos alternativos: 1) ¿Qué porcentaje asignarás a coberturas (recomendable 5-10% en Oro y 1-5% en Criptoactivos)?, 2) ¿Qué vehículo utilizarás para oro (Centenarios físicos o ETF bursátil GLD)?, 3) ¿Cuentas con Cold Wallet para autocustodia de activos digitales?"
        },
        quizzes: [
          {
            question: "¿Cuál es el porcentaje máximo recomendado por directrices de gestión de riesgo institucional para asignar a criptoactivos en una cartera patrimonial?",
            options: [
              "100% de todo tu patrimonio y pedir préstamos bancarios.",
              "Únicamente entre el 1% y el 5% del capital total de la cartera, dimensionado para capturar asimetría positiva sin comprometer tu estabilidad si ocurre una caída del -60%.",
              "El 50% de los ahorros familiares.",
              "Cero pesos; está legalmente prohibido poseer criptoactivos en México."
            ],
            correct: 1,
            explanation: "Una asignación del 1% al 5% ofrece exposición a la revalorización exponencial sin poner en riesgo la solvencia patrimonial ante la alta volatilidad inherente."
          },
          {
            question: "¿Qué principio resume la máxima de seguridad 'Not your keys, not your coins' en el ecosistema de criptoactivos?",
            options: [
              "Que las monedas deben guardarse en la guantera del automóvil.",
              "Que si dejas tus fondos en un exchange o plataforma centralizada no eres el dueño legítimo de las llaves privadas; la verdadera propiedad exige autocustodia en una billetera fría (Cold Wallet).",
              "Que las llaves de tu casa deben cambiarse cada semana.",
              "Que los bancos centrales custodian tus contraseñas por ley."
            ],
            correct: 1,
            explanation: "Las quiebras de exchanges opacos (como FTX en 2022) demostraron que delegar la custodia en terceros expone los fondos a congelamientos y fraudes."
          },
          {
            question: "¿Por qué el Oro físico y los ETFs respaldados ($GLD) son considerados la reserva de valor por excelencia en crisis geopolíticas?",
            options: [
              "Porque pagan dividendos trimestrales en pesos.",
              "Porque el oro no tiene riesgo de contraparte, no puede ser degradado ni impreso arbitrariamente por bancos centrales y cuenta con más de 5,000 años de aceptación histórica universal como dinero real.",
              "Porque el gobierno garantiza que duplicará su precio cada 6 meses.",
              "Porque sustituye a las tarjetas de débito bancarias."
            ],
            correct: 1,
            explanation: "El oro físico es un activo tangible que protege el poder adquisitivo cuando las monedas fiduciarias sufren devaluación o pérdida de confianza en guerras y crisis monetarias."
          }
        ]
      }
    ]
  }
];

// --- BANCO DEL EXAMEN DE CERTIFICACIÓN FINAL FASE 7 (10 PREGUNTAS) ---
const quizQuestions = [
  {
    id: 1,
    question: "¿Por qué un Dividend Yield inusualmente alto (ej. 16% o 20% anual) en una acción ordinaria suele constituir una trampa de rendimiento (Dividend Trap)?",
    options: [
      "Porque los bancos prohíben pagar rendimientos altos.",
      "Porque a menudo indica que el precio de la acción sufrió un colapso severo debido al deterioro crítico del negocio, lo que forzará un recorte o cancelación del dividendo.",
      "Porque las empresas con alto dividendo no emiten estados financieros auditados.",
      "Porque la BMV cancela las acciones que pagan dividendos."
    ],
    correct: 1
  },
  {
    id: 2,
    question: "En el análisis financiero de FIBRAS inmobiliarias, ¿por qué se utiliza el FFO (Funds From Operations) en lugar de la Utilidad Neta convencional?",
    options: [
      "Porque los fideicomisos no tienen costos operativos.",
      "Porque la utilidad neta está distorsionada por depreciaciones contables de inmuebles que en la realidad mantienen o incrementan su valor comercial; el FFO revierte esa partida no monetaria.",
      "Porque es una orden directa del Banco de México.",
      "Porque solo aplica para hoteles de lujo."
    ],
    correct: 1
  },
  {
    id: 3,
    question: "¿Cuál es el mandato de distribución obligatoria que impone la legislación fiscal mexicana (LISR) a las FIBRAS inmobiliarias?",
    options: [
      "Vender todas sus propiedades cada 5 años.",
      "Distribuir al menos el 95% de su resultado fiscal neto anual entre los tenedores de certificados bursátiles (CBFIs).",
      "Pagar todas las rentas exclusivamente en dólares estadounidenses.",
      "Invertir solo en construcciones gubernamentales."
    ],
    correct: 1
  },
  {
    id: 4,
    question: "¿Qué representa el 'Cap Rate' (Tasa de Capitalización) en una inversión de bienes raíces?",
    options: [
      "El número de pisos que tiene un edificio comercial.",
      "El cociente entre el Ingreso Operativo Neto anual (renta neta tras descontar predial, seguros, vacancia y mantenimiento) y el valor comercial de adquisición del inmueble.",
      "La tasa de interés de la tarjeta de crédito.",
      "El costo de la comisión del notario público."
    ],
    correct: 1
  },
  {
    id: 5,
    question: "¿Cuál es la diferencia entre el Cap Rate y el Cash-on-Cash Return en una operación de bienes raíces apalancada con hipoteca?",
    options: [
      "Son sinónimos exactos.",
      "El Cap Rate mide el retorno del inmueble como si fuera 100% pagado de contado; el Cash-on-Cash mide el rendimiento del flujo en efectivo neto respecto al dinero real que pusiste de tu bolsillo en el enganche.",
      "El Cash-on-Cash solo aplica para terrenos rurales.",
      "El Cap Rate solo se calcula en euros."
    ],
    correct: 1
  },
  {
    id: 6,
    question: "¿Qué beneficio fiscal extraordinario otorga el componente de 'Reembolso de Capital' en las distribuciones de FIBRAS en México?",
    options: [
      "Cero retención de ISR en efectivo al momento de depositarse en tu cuenta bursátil, disminuyendo únicamente el costo fiscal promedio del certificado.",
      "Exención total del pago de casetas en autopistas.",
      "El SAT te otorga un automóvil nuevo de agencia.",
      "Permite no pagar predial de por vida."
    ],
    correct: 0
  },
  {
    id: 7,
    question: "¿Cuál es la tasa de retención de ISR aplicable por ley al cobro de dividendos provenientes de personas morales mexicanas y emisoras del SIC según el Art. 140 de la LISR?",
    options: [
      "Tasa adicional definitiva del 10% retenida en origen.",
      "Tasa obligatoria del 40%.",
      "Cero por ciento sin excepción.",
      "16% de IVA acreditable."
    ],
    correct: 0
  },
  {
    id: 8,
    question: "¿Por qué las cotizaciones de las FIBRAS suelen experimentar correcciones bajistas en bolsa cuando el Banco Central eleva fuertemente las tasas de interés soberanas?",
    options: [
      "Porque los edificios se deterioran más rápido.",
      "Porque aumenta el costo de oportunidad del dinero frente a CETES libres de riesgo, provocando que los inversionistas exijan mayor rendimiento por dividendo y comprimiendo el precio del certificado.",
      "Porque la bolsa mexicana prohíbe operar en épocas de tasas altas.",
      "Porque los inquilinos dejan de pagar la renta automáticamente."
    ],
    correct: 1
  },
  {
    id: 9,
    question: "¿Cuál es el porcentaje máximo prudencial de asignación que los expertos en gestión de riesgos recomiendan destinar a criptoactivos en una cartera patrimonial equilibrada?",
    options: [
      "100% de todo el capital familiar.",
      "Entre el 1% y el 5% del patrimonio total, dimensionado para capturar asimetría positiva sin comprometer la supervivencia si el activo sufre caídas del -60%.",
      "50% en criptomonedas y 50% en billetes de lotería.",
      "Los criptoactivos están estrictamente prohibidos en cualquier proporción."
    ],
    correct: 1
  },
  {
    id: 10,
    question: "¿Qué principio de seguridad sintetiza la regla de autocustodia 'Not your keys, not your coins' en activos digitales?",
    options: [
      "Que las monedas deben cambiarse por efectivo en la frontera.",
      "Que si dejas tus fondos en un exchange centralizado no posees la propiedad real de tus activos; la verdadera titularidad exige resguardar las llaves privadas en una billetera fría (Cold Wallet).",
      "Que no debes prestar tus llaves de la casa a nadie.",
      "Que los bancos comerciales garantizan el 100% de tus saldos en cripto."
    ],
    correct: 1
  }
];

// --- COMPONENTES VISUALES EDUCATIVOS FASE 7 ---

const DividendMathTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
      <div className="flex items-center gap-2">
        <Coins className="text-amber-400" size={20} />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Matemáticas del Dividendo y Payout Ratio</h4>
      </div>
      <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30">
        Flujo Pasivo Sostenible
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-emerald-500">
        <p className="font-bold text-white text-sm">Payout Saludable (30% - 65%)</p>
        <p className="text-emerald-400 font-bold text-xs mt-1">Dividendo Seguro y Creciente</p>
        <p className="text-[11px] text-slate-300 mt-1">La empresa reparte una porción prudente de utilidades y retiene efectivo para capex, innovación y amortización de deuda.</p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-amber-500">
        <p className="font-bold text-white text-sm">Payout Elevado (70% - 85%)</p>
        <p className="text-amber-400 font-bold text-xs mt-1">Zona de Alerta Táctica</p>
        <p className="text-[11px] text-slate-300 mt-1">Negocios maduros de poco crecimiento. Poco margen de seguridad ante una caída temporal en ventas o subida de costos.</p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-rose-500">
        <p className="font-bold text-white text-sm">Payout Crítico (&gt; 90% o &gt; 100%)</p>
        <p className="text-rose-400 font-bold text-xs mt-1">Trampa de Rendimiento Inminente</p>
        <p className="text-[11px] text-slate-300 mt-1">La compañía paga dividendos con reservas de caja o deuda bancaria. El recorte del dividendo es cuestión de tiempo.</p>
      </div>
    </div>
  </div>
);

const FibrasValuationTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Building2 className="text-amber-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Métricas Clave de Valuación en FIBRAS Inmobiliarias</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="font-bold text-amber-300">FFO (Funds From Operations)</p>
        <p className="text-[11px] text-slate-300 mt-1">Utilidad Neta + Depreciación de Inmuebles. Mide la generación real de efectivo operativo de las propiedades.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="font-bold text-teal-300">AFFO (Adjusted FFO)</p>
        <p className="text-[11px] text-slate-300 mt-1">FFO menos gastos de mantenimiento de capital (CapEx). Es la cifra rectora sobre la que se calcula el dividendo distribuible.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="font-bold text-purple-300">Descuento sobre NAV</p>
        <p className="text-[11px] text-slate-300 mt-1">Comprar con descuento del 20% sobre el NAV equivale a comprar naves industriales por debajo de su costo de reposición.</p>
      </div>
    </div>
  </div>
);

const RealEstateVsFibrasTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Departamento Físico vs. FIBRAS Industriales</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
        <span className="text-rose-400 font-bold block mb-1">Inmueble Físico Residencial</span>
        <ul className="space-y-1.5 text-slate-300 text-[11px]">
          <li>• Cap Rate neto real: 3.5% a 5.0% anual.</li>
          <li>• Concentración: 100% de tu dinero en 1 solo inquilino.</li>
          <li>• Gastos de escrituración no recuperables: 4% a 7%.</li>
          <li>• Iliquidez severa: 6 a 18 meses para vender.</li>
          <li>• Gestión manual de fugas, reparaciones y cobranza.</li>
        </ul>
      </div>
      <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
        <span className="text-emerald-400 font-bold block mb-1">Portafolio de FIBRAS Bursátiles</span>
        <ul className="space-y-1.5 text-slate-300 text-[11px]">
          <li>• Cap Rate neto industrial: 7.5% a 9.5% anual.</li>
          <li>• Diversificación en cientos de naves y corporativos AAA.</li>
          <li>• Cero gastos de escrituración ni notaría.</li>
          <li>• Liquidez inmediata: venta en bolsa en 24 horas.</li>
          <li>• Administración institucional profesional sin ocuparte de nada.</li>
        </ul>
      </div>
    </div>
  </div>
);

const CashOnCashTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Calculator className="text-amber-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Cálculo de Cash-on-Cash Return Real</h4>
    </div>
    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 text-slate-300">
      <p className="font-semibold text-white">Fórmula de Cash-on-Cash Return:</p>
      <p className="font-mono text-emerald-400 text-sm">
        Cash-on-Cash = (Flujo de Efectivo Neto Anual tras Hipoteca) / (Efectivo Total Invertido de tu Bolsillo)
      </p>
      <p className="text-[11px] text-slate-400 leading-relaxed">
        Ejemplo: Inviertes $400,000 MXN en enganche y escrituración. Tras cobrar rentas y pagar predial, mantenimiento e hipoteca, te quedan $32,000 MXN libres en efectivo al año. Tu Cash-on-Cash Return es de $32,000 / $400,000 = <strong className="text-emerald-400">8.0% neto en efectivo</strong>.
      </p>
    </div>
  </div>
);

const CashFlowLadderTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
      <Calendar className="text-amber-400" size={18} />
      La Escalera de Flujos: Cobros Mensuales Garantizados
    </h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-center">
      <div className="bg-slate-800 p-2.5 rounded-lg border border-emerald-500/30">
        <p className="text-emerald-400 font-bold">FMTY14</p>
        <p className="text-[10px] text-slate-300 mt-1">Todos los 12 meses</p>
        <p className="text-[9px] text-slate-500">Renta Mensual Continua</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-blue-500/30">
        <p className="text-blue-400 font-bold">FUNO11</p>
        <p className="text-[10px] text-slate-300 mt-1">Feb · May · Ago · Nov</p>
        <p className="text-[9px] text-slate-500">Trimestral Diversificado</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-purple-500/30">
        <p className="text-purple-400 font-bold">Bonos M 10A</p>
        <p className="text-[10px] text-slate-300 mt-1">Junio y Diciembre</p>
        <p className="text-[9px] text-slate-500">Cupón Fijo Soberano</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border border-amber-500/30">
        <p className="text-amber-400 font-bold">ETFs Globales</p>
        <p className="text-[10px] text-slate-300 mt-1">Mar · Jun · Sep · Dic</p>
        <p className="text-[9px] text-slate-500">Dividendos Internacionales</p>
      </div>
    </div>
  </div>
);

const TaxDistributionTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Landmark className="text-amber-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Escudo Fiscal en FIBRAS: Dos Vías de Distribución</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-emerald-500">
        <p className="font-bold text-emerald-400 text-sm">Reembolso de Capital</p>
        <p className="text-white font-bold mt-1">100% Exento de Retención en Efectivo</p>
        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
          Devolución de capital derivada de la depreciación de inmuebles. Entra íntegro a tu cuenta sin pagar un solo peso de ISR inmediato.
        </p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-amber-500">
        <p className="font-bold text-amber-400 text-sm">Resultado Fiscal</p>
        <p className="text-white font-bold mt-1">Retención del 30% Acreditable</p>
        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
          Flujo de utilidades ordinarias gravables con retención provisional del 30%, acreditable en tu declaración anual en abril.
        </p>
      </div>
    </div>
  </div>
);

const ReRiskTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Auditoría de los 4 Riesgos Inmobiliarios</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-rose-500">
        <p className="font-bold text-white">1. Riesgo de Tasa</p>
        <p className="text-[10px] text-slate-300 mt-1">Tasas altas comprimen temporalmente el precio en bolsa.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-amber-500">
        <p className="font-bold text-white">2. LTV &gt; 50%</p>
        <p className="text-[10px] text-slate-300 mt-1">Sobreendeudamiento ante refinanciamiento de notas bancarias.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-blue-500">
        <p className="font-bold text-white">3. Concentración</p>
        <p className="text-[10px] text-slate-300 mt-1">Un solo inquilino que represente más del 15% del total de rentas.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-500">
        <p className="font-bold text-white">4. Obsolescencia</p>
        <p className="text-[10px] text-slate-300 mt-1">Naves que no cumplen normas ecológicas LEED e industriales.</p>
      </div>
    </div>
  </div>
);

const Portfolio100kTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
      <div className="flex items-center gap-2">
        <PieChart className="text-amber-400" size={20} />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Portafolio Modelo de Renta: $100,000 MXN</h4>
      </div>
      <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
        Yield Ponderado: ~9.3%
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-center">
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="text-amber-400 font-bold text-sm">40% FIBRAS Industriales ($40k)</p>
        <p className="text-white font-bold mt-1">FMTY14 · Prologis</p>
        <p className="text-[10px] text-slate-400 mt-1">Rentas mensuales en dólares vinculadas al Nearshoring.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="text-teal-400 font-bold text-sm">30% FIBRAS Comerciales ($30k)</p>
        <p className="text-white font-bold mt-1">FUNO11 · Danhos</p>
        <p className="text-[10px] text-slate-400 mt-1">Rentas trimestrales de alta liquidez comercial.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="text-blue-400 font-bold text-sm">30% Deuda Soberana ($30k)</p>
        <p className="text-white font-bold mt-1">CETES 28D · Bonos M</p>
        <p className="text-[10px] text-slate-400 mt-1">Ancla libre de riesgo y fondo de oportunidad táctico.</p>
      </div>
    </div>
  </div>
);

const CryptoAlternativeTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Key className="text-amber-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Activos Alternativos: Oro, Petróleo y Criptoactivos</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-amber-500">
        <p className="font-bold text-amber-400 text-sm">Oro Físico / ETF GLD</p>
        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
          Reserva de valor histórica de 5,000 años sin riesgo de contraparte. Blindaje contra hiperinflación y guerras geopolíticas.
        </p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-blue-500">
        <p className="font-bold text-blue-400 text-sm">Petróleo y Commodities</p>
        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
          Cobertura directa contra shocks inflacionarios de oferta energética y cuellos de botella en cadenas globales de suministro.
        </p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-purple-500">
        <p className="font-bold text-purple-400 text-sm">Criptoactivos (1% - 5%)</p>
        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
          Bitcoin como 'oro digital' descentralizado. Asignación asimétrica del 1-5% con <strong>Cold Wallet (autocustodia de llaves privadas)</strong> y cumplimiento fiscal ante el SAT.
        </p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 7 ---

export default function CoursePlayerPhase7() {
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
      const saved = localStorage.getItem('fa_phase_7_progress');
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
      localStorage.setItem('fa_phase_7_progress', currentLesson.toString());
      localStorage.setItem('fa_phase_7_total', moduleData.lessons.length.toString());
    } catch (e) {
      // ignore
    }
    if (user) {
      updateProgress(7, currentLesson, moduleData.lessons.length);
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
      submitTestResult(7, calculatedScore, quizQuestions.length);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📊 *Certificación Aprobada - Fase 7 (Ingreso, Dividendos y Bienes Raíces)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Acreditado en Valuación de FIBRAS (FFO/NAV), Dividendos DRIP, Escalera de Cobro Mensual, Fiscalidad y Coberturas Alternativas. Solicitud de diploma oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'dividend_math_tool': return <DividendMathTool />;
      case 'fibras_valuation_tool': return <FibrasValuationTool />;
      case 'real_estate_vs_fibras_tool': return <RealEstateVsFibrasTool />;
      case 'cash_on_cash_tool': return <CashOnCashTool />;
      case 'cash_flow_ladder_tool': return <CashFlowLadderTool />;
      case 'tax_distribution_tool': return <TaxDistributionTool />;
      case 're_risk_tool': return <ReRiskTool />;
      case 'portfolio_100k_tool': return <Portfolio100kTool />;
      case 'crypto_alternative_tool': return <CryptoAlternativeTool />;
      default: return null;
    }
  };

  // VISTA DEL EXAMEN FINAL FASE 7
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO 
          title="Examen Final: Fase 7 - Ingreso, Dividendos y Bienes Raíces | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 7 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/7"
        />
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 7: Ingreso, Dividendos y Bienes Raíces
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas rigurosas sobre Valuación de FIBRAS (FFO/NAV), Dividendos DRIP, Fiscalidad SAT, Cap Rates y Criptoactivos.
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
                            ? 'bg-amber-600 border-amber-400 text-white font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-amber-900/30 cursor-pointer"
                >
                  Terminar Evaluación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-amber-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(245,158,11,0.25)]">
                <div className="text-6xl mb-4">
                  {score >= 8 ? '🏆' : score >= 6 ? '📈' : '📚'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {score >= 8 ? '¡Aprobado con Distinción!' : score >= 6 ? 'Módulo Completado' : 'Requiere Repaso'}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Calificación Oficial: <span className="text-amber-400 font-bold text-xl">{score} / {quizQuestions.length}</span>
                </p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-1000" 
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
        title={`Fase 7: ${lessonData.title} | FA Academy`}
        description={`Lección ${currentLesson + 1} de la Fase 7 de FA Academy: ${lessonData.content}`}
        url="https://fa-academy.vercel.app/course/phase/7"
      />
      
      {/* HEADER CON BADGE AVANZADO EXACTO */}
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-2 rounded-lg">
              <Home className="text-white" size={20} strokeWidth={2.5}/>
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest hidden md:block">AVANZADO</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-500/10 text-amber-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-amber-500/20">
              {moduleData.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
            {lessonData.title}
          </h1>
        </div>

        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Home size={120} className="text-slate-500" />
          </div>
          <ErrorBoundary fallbackMessage="Error al cargar el módulo visual">
            {renderVisual(lessonData.visualType)}
          </ErrorBoundary>
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          {/* Disclaimer visible obligatorio */}
          <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-amber-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Toda inversión en bienes raíces, dividendos o coberturas conlleva riesgo de fluctuación y liquidez."}</span>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500 shadow-lg">
            <p className="text-lg md:text-xl text-amber-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="flex gap-4 items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
            <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0">
              <Brain size={20} className="text-amber-400" />
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {lessonData.details}
              </p>
              {lessonData.speakerNotes && (
                <p className="mt-4 text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex gap-2">
                  <span className="text-amber-400 font-bold not-italic">💡 Tip FA Academy:</span>
                  {lessonData.speakerNotes}
                </p>
              )}
            </div>
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
                placeholder="Escribe aquí tu análisis de flujos, cálculo de Cap Rate o diseño de portafolio..."
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
                          btnStyle = 'bg-amber-600 border-amber-400 text-white font-bold';
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
                  idx === currentLesson ? 'bg-amber-500 scale-125' : 'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95"
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
