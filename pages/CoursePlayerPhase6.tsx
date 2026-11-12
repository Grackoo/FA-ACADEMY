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
  PieChart, Shield, Heart, Home, Umbrella, Users, Calendar
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FASE 6: FINANZAS PERSONALES OPERATIVAS (9 LECCIONES) ---

const courseData = [
  {
    id: 6,
    title: "FA Academy: Finanzas Personales Operativas",
    description: "La estructura financiera sobre la que se cimienta tu patrimonio: presupuestos 50/30/20, fondo de emergencia, blindaje con seguros (SGMM/vida/auto), hipotecas comprar vs rentar, deducciones ante el SAT y plan sucesorio.",
    lessons: [
      {
        title: "Presupuesto Operativo 50/30/20 y Auditoría de Fugas de Capital",
        content: "El presupuesto no es una restricción; es un plan de asignación estratégica para asegurar tu libertad financiera futura.",
        details: "Antes de colocar un solo peso en el mercado accionario, debes erradicar el déficit operativo personal. La regla estándar internacional 50/30/20 categoriza los ingresos netos mensuales en tres rubros estrictos: 50% Necesidades Básicas Ineludibles (vivienda, servicios, despensa, transporte y salud), 30% Deseos y Calidad de Vida (entretenimiento, salidas, vacaciones y estilo de vida) y 20% Ahorro Estratégico e Inversión para el Futuro (fondo de emergencia, PPR e inversión indexada). Es indispensable realizar una 'Auditoría de Fugas de Capital' identificando los tres tipos de mermas invisibles: Gastos Hormiga (pequeñas compras diarias recurrentes que suman miles al año), Gastos Fantasma (suscripciones de streaming o membresías de gimnasio que no se utilizan) y Gastos Vampiro (fugas mayores en mantenimiento diferido o pagos innecesarios de intereses por descuidos).",
        visualType: "budget_tool",
        disclaimer: "Educación, no asesoría financiera. La distribución porcentual debe adaptarse si el nivel de ingresos actual exige mayor peso transitorio a necesidades básicas.",
        speakerNotes: "El dinero sin asignar se evapora. Cuando cobres tu nómina o ingresos, separa inmediatamente el 20% para tu cuenta de inversión antes de pagar cualquier otra cosa: 'Págate a ti primero'.",
        concepts: [
          { term: "Regla 50/30/20", def: "Modelo de distribución presupuestaria: 50% necesidades básicas, 30% deseos personales y 20% ahorro e inversión innegociable." },
          { term: "Gastos Hormiga", def: "Gastos menores diarios (cafés, botanas, comisiones de cajero) que pasan desapercibidos pero destruyen el 8-12% del flujo mensual." },
          { term: "Gastos Fantasma", def: "Servicios contratados de cobro recurrente automático que ya no utilizas o que contrataste en pruebas gratuitas olvidadas." },
          { term: "Págate a Ti Primero", def: "Principio de apartar el porcentaje de ahorro e inversión al instante de recibir el ingreso, antes de iniciar el gasto mensual." }
        ],
        realExample: {
          asset: "Auditoría de Flujo Mensual en Adultos Jóvenes en México",
          date: "Encuesta Nacional de Inclusión Financiera (ENIF) 2024 - 2026",
          source: "INEGI / CNBV / CONDUSEF",
          url: "https://www.gob.mx/condusef",
          caseDescription: "El estudio reveló que el mexicano promedio gasta entre $3,200 y $4,800 MXN mensuales en gastos hormiga y suscripciones no utilizadas. Al implementar la regla 50/30/20 y canalizar esa fuga hacia CETES a tasa del 10.20%, un profesionista acumuló más de $310,000 MXN en 4 años sin alterar sus necesidades básicas de vida."
        },
        deliverableExercise: {
          title: "Hoja de Balance Operativo 50/30/20",
          description: "Desglosa en el recuadro tus números del último mes: 1) Ingreso neto total, 2) Monto y % en Necesidades (meta 50%), 3) Monto y % en Deseos (meta 30%), 4) Monto y % en Inversión (meta 20%), 5) Identifica 2 gastos fantasma a cancelar hoy."
        },
        quizzes: [
          {
            question: "¿Cómo se distribuyen los ingresos netos mensuales según la regla presupuestaria estándar 50/30/20?",
            options: [
              "50% Deseos, 30% Inversión y 20% Necesidades.",
              "50% Necesidades Básicas Ineludibles, 30% Deseos y Estilo de Vida, y 20% Ahorro Estratégico e Inversión.",
              "50% Pago de tarjetas de crédito, 30% Renta y 20% Ropa.",
              "100% Inversión en acciones de alto riesgo."
            ],
            correct: 1,
            explanation: "El modelo 50/30/20 equilibra la supervivencia inmediata con el disfrute del presente y la construcción innegociable de patrimonio futuro."
          },
          {
            question: "¿En qué consiste el principio financiero de 'Págate a ti primero'?",
            options: [
              "Comprarte un regalo caro en cuanto cobras tu sueldo.",
              "Separar y transferir el porcentaje de ahorro/inversión (ej. 20%) inmediatamente al recibir tus ingresos, viviendo el resto del mes con el remanente.",
              "Gastar todo en efectivo para que no te rastreen.",
              "Pagar todas las deudas solo una vez al año."
            ],
            correct: 1,
            explanation: "Si esperas a final de mes para 'ver qué sobra', jamás ahorrarás nada; pagarte primero garantiza que la inversión sea una prioridad automática."
          },
          {
            question: "¿Cuál es la diferencia entre un 'Gasto Hormiga' y un 'Gasto Fantasma'?",
            options: [
              "El gasto hormiga es en efectivo y el fantasma es en dólares.",
              "El gasto hormiga es un microconsumo diario consciente (café, botana), mientras que el gasto fantasma es una suscripción o cobro recurrente automático que ni siquiera recuerdas que pagas.",
              "No existe ninguna diferencia; son términos idénticos.",
              "El gasto fantasma solo ocurre en días festivos."
            ],
            correct: 1,
            explanation: "Identificar y podar ambos rubros suele liberar entre un 10% y un 15% de flujo de caja libre inmediato sin sacrificar bienestar."
          }
        ]
      },
      {
        title: "El Fondo de Emergencia ('Colchón de Paz'): Blindaje de 3 a 6 Meses",
        content: "El fondo de emergencia no es una inversión para hacerse rico; es el extintor de incendios que protege tu cartera de bolsa.",
        details: "El mayor error del inversionista novato es meter todos sus ahorros en acciones o criptoactivos sin tener un fondo de emergencia. Ante cualquier imprevisto (despido laboral, accidente, avería de vehículo o enfermedad familiar), se verá forzado a malvender sus acciones en pérdidas durante una corrección del mercado. El 'Colchón de Paz' debe cubrir entre 3 meses (empleados con sueldo fijo y estabilidad laboral) y 6 a 9 meses (emprendedores, profesionistas independientes o trabajadores con ingresos variables) de GASTOS FIJOS REALES, no de ingresos. Este dinero debe resguardarse exclusivamente en instrumentos con tres características: 1) Máxima seguridad soberana o bancaria (CETES o SOFIPOs con seguro PROSOFIPO), 2) Liquidez inmediata o a 28 días, 3) Rendimiento que cubra la inflación de Banxico.",
        visualType: "emergency_fund_tool",
        disclaimer: "Educación, no asesoría financiera. El fondo de emergencia debe permanecer en renta fija de máxima liquidez; jamás en activos volátiles.",
        speakerNotes: "El fondo de emergencia te compra tranquilidad psicológica. Cuando sabes que tienes 6 meses de vida pagados pase lo que pase, negocias mejor tus aumentos de sueldo y duermes en paz aunque la bolsa caiga un 20%.",
        concepts: [
          { term: "Fondo de Emergencia", def: "Reserva de capital líquido equivalente a 3-6 meses de gastos básicos ineludibles para solventar imprevistos graves sin endeudarse." },
          { term: "Gastos Fijos Reales", def: "El costo estricto de supervivencia mensual (renta/hipoteca, comida, servicios esenciales y créditos); excluye gastos de lujo." },
          { term: "Liquidez Inmediata", def: "Capacidad de disponer del dinero en menos de 24 horas hábiles sin incurrir en penalizaciones ni pérdidas de capital." },
          { term: "Costo de No Tener Fondo", def: "Verse obligado a pagar intereses usureros del 70-100% CAT en tarjetas o liquidar acciones en pleno fondo de mercado." }
        ],
        realExample: {
          asset: "Estructuración de Fondo de Emergencia en Cetesdirecto",
          date: "Estrategia de Liquidez 2026",
          source: "Banco de México / Nacional Financiera (NAFIN)",
          url: "https://www.cetesdirecto.com/",
          caseDescription: "Familia mexicana con gastos fijos de $25,000 MXN mensuales estructura su fondo de 4 meses ($100,000 MXN). Coloca $25,000 MXN en BONDIA (liquidez diaria hábil) y los $75,000 MXN restantes en CETES a 28 días escalonados. Ante una emergencia médica menor, dispusieron del efectivo en 4 horas sin recurrir a tarjetas de crédito ni tocar sus fondos indexados en bolsa."
        },
        deliverableExercise: {
          title: "Cálculo Exacto de tu 'Colchón de Paz'",
          description: "Calcula en el recuadro: 1) ¿A cuánto ascienden tus gastos fijos mínimos de supervivencia al mes?, 2) Multiplica por 3 (si eres asalariado) o por 6 (si eres independiente) para obtener tu meta del fondo, 3) ¿En cuántos meses alcanzarás ese saldo con tu ahorro mensual actual?"
        },
        quizzes: [
          {
            question: "¿Cuántos meses de gastos fijos debe cubrir el Fondo de Emergencia para un profesionista independiente con ingresos variables?",
            options: [
              "1 semana solamente.",
              "De 6 a 9 meses de gastos fijos de supervivencia, debido a la mayor incertidumbre y variabilidad en los flujos de cobro.",
              "10 años completos.",
              "No necesita fondo si tiene tarjetas de crédito."
            ],
            correct: 1,
            explanation: "A mayor variabilidad de ingresos, mayor debe ser el colchón de seguridad para garantizar estabilidad sin liquidar activos de largo plazo."
          },
          {
            question: "¿Por qué es un gravísimo error colocar el dinero del fondo de emergencia en acciones de la bolsa o criptomonedas?",
            options: [
              "Porque la bolsa no permite abrir cuentas de ahorro.",
              "Porque la volatilidad puede hacer que tu fondo caiga un 30% justo en el momento en que surge la emergencia, forzándote a consolidar pérdidas irreparables.",
              "Porque el SAT confisca el fondo de emergencia si está en acciones.",
              "Porque los bancos cobran comisiones por emergencias."
            ],
            correct: 1,
            explanation: "El objetivo del fondo de emergencia no es maximizar retorno, sino garantizar disponibilidad inmediata y certeza absoluta de capital."
          },
          {
            question: "¿Qué instrumento financiero en México es óptimo para mantener una parte del fondo con liquidez diaria y rendimiento superior a la inflación?",
            options: [
              "BONDIA en la plataforma oficial de Cetesdirecto (deuda soberana de Banxico con liquidez diaria en días hábiles).",
              "Un boleto de lotería semanal.",
              "Efectivo guardado en un cajón en la recámara.",
              "Préstamos informales a conocidos."
            ],
            correct: 0,
            explanation: "BONDIA invierte en títulos gubernamentales de liquidez diaria, protegiendo el poder adquisitivo del peso sin penalizaciones de retiro."
          }
        ]
      },
      {
        title: "Blindaje Patrimonial: Seguros Indispensables (SGMM, Vida y Auto)",
        content: "Nadie se hace rico comprando seguros, pero miles de familias caen en la quiebra por no tenerlos.",
        details: "El seguro es un contrato de transferencia de riesgos catastróficos que jamás podrías asumir con tu propio patrimonio. En México existen tres pólizas que todo inversionista debe auditar: 1) Seguro de Gastos Médicos Mayores (SGMM): una hospitalización prolongada, cirugía mayor o tratamiento oncológico puede superar fácilmente los $2 a $5 millones de pesos, devorando en semanas el patrimonio acumulado en una vida; debes dominar tres conceptos: Deducible (monto fijo inicial a tu cargo), Coaseguro (porcentaje del gasto restante, típicamente 10%, con tope de coaseguro obligatorio) y Tabulador Médico. 2) Seguro de Vida: indispensable únicamente si tienes dependientes económicos (hijos, cónyuge, padres mayores); la recomendación técnica es contratar Seguro de Vida Temporal Puro (alta cobertura a costo bajo), evitando seguros con componente de ahorro/inversión que cobran comisiones excesivas y merman el rendimiento. 3) Seguro de Auto: cobertura amplia que garantice Responsabilidad Civil por al menos $3 a $4 millones de pesos ante daños a terceros.",
        visualType: "insurance_tool",
        disclaimer: "Educación, no asesoría financiera. La contratación de pólizas de seguros debe realizarse a través de un agente certificado ante la CNSF.",
        speakerNotes: "Los seguros no son un gasto; son el dique de contención que evita que una tragedia médica o un accidente de tránsito arrase con las inversiones de tu familia. Separa el seguro de la inversión.",
        concepts: [
          { term: "Deducible (SGMM)", def: "Monto fijo que el asegurado debe pagar de su bolsillo antes de que la aseguradora empiece a cubrir los gastos médicos." },
          { term: "Coaseguro", def: "Porcentaje (usualmente 10%) de los gastos médicos que el asegurado comparte con la compañía tras superar el deducible." },
          { term: "Tope de Coaseguro", def: "Límite máximo monetario en pesos que el asegurado pagará por coaseguro en un siniestro, garantizando certidumbre patrimonial." },
          { term: "Vida Temporal Puro", def: "Póliza de vida que cubre exclusivamente el riesgo de fallecimiento e invalidez sin componentes mixtos de inversión opacos." }
        ],
        realExample: {
          asset: "Estadística de Siniestralidad Médica en México (AMIS)",
          date: "Reporte del Sector Asegurador 2024 - 2026",
          source: "Asociación Mexicana de Instituciones de Seguros (AMIS)",
          url: "https://www.amis.com.mx/",
          caseDescription: "La AMIS reportó que el siniestro médico individual más costoso atendido por aseguradoras en México superó los $45 millones de pesos por complicaciones médicas complejas. Sin una póliza de SGMM con suma asegurada robusta, cualquier familia de clase media o alta habría caído en la bancarrota absoluta."
        },
        deliverableExercise: {
          title: "Auditoría de tu Blindaje de Seguros",
          description: "Revisa tus pólizas actuales o necesidades de cobertura: 1) ¿Tienes SGMM con suma asegurada superior a $20 millones de pesos y tope de coaseguro?, 2) Si tienes dependientes económicos, ¿cuál sería la suma asegurada necesaria en seguro de vida (recomendable 5-8 años de gastos familiares)?"
        },
        quizzes: [
          {
            question: "¿Por qué los asesores financieros profesionales recomiendan pólizas de 'Seguro de Vida Temporal Puro' frente a seguros con 'ahorro o dotal'?",
            options: [
              "Porque los seguros temporales son más caros.",
              "Porque el seguro temporal puro ofrece máxima cobertura de fallecimiento por una prima bajísima, permitiendo que inviertas la diferencia de dinero por tu cuenta en fondos indexados sin altas comisiones opacas.",
              "Porque la ley prohíbe los seguros con ahorro.",
              "Porque el seguro temporal garantiza ganar la lotería."
            ],
            correct: 1,
            explanation: "Combinar seguro e inversión en un mismo producto suele generar rendimientos mediocres y altas comisiones de administración; es superior separar ambas funciones."
          },
          {
            question: "En un Seguro de Gastos Médicos Mayores (SGMM), ¿cuál es la cláusula de seguridad financiera más importante respecto al coaseguro?",
            options: [
              "Que el deducible sea de $0 pesos sin importar el costo.",
              "Que cuente con un 'Tope de Coaseguro' (límite máximo en pesos), evitando que en una cuenta hospitalaria de millones de pesos tu 10% se vuelva impagable.",
              "Que cubra masajes y spa en hoteles.",
              "Que no requiera comprobantes fiscales."
            ],
            correct: 1,
            explanation: "Sin tope de coaseguro, una factura de $10 millones te obligaría a pagar $1 millón de coaseguro; el tope limita tu desembolso máximo a una cifra fija conocida."
          },
          {
            question: "¿Cuándo es estrictamente indispensable contratar una póliza de Seguro de Vida?",
            options: [
              "Desde el momento en que cumples 18 años, aunque vivas solo.",
              "Únicamente cuando tienes personas que dependen económicamente de tus ingresos (hijos menores, cónyuge o padres dependientes) para proteger su sustento futuro si tú faltas.",
              "Solo si eres dueño de una empresa que cotiza en la BMV.",
              "Nunca es necesario si tienes cuenta bancaria."
            ],
            correct: 1,
            explanation: "Si nadie depende de tus ingresos, el seguro de vida es prescindible (salvo coberturas de invalidez total); su rol primario es sustituir tu flujo económico familiar."
          }
        ]
      },
      {
        title: "Hipotecas y Deuda Patrimonial: Infonavit vs. Banco y el Dilema Comprar vs. Rentar",
        content: "Desmitificando el mandato cultural: análisis financiero riguroso de la deuda hipotecaria y el costo de oportunidad.",
        details: "La compra de una vivienda suele ser la transacción financiera más grande en la vida de una persona, pero a menudo se decide con base en presiones emocionales sin calcular el costo financiero total. Al evaluar un crédito hipotecario debes comparar: 1) Tasa de Interés Nominal vs. Costo Anual Total (CAT): el CAT incluye seguros obligatorios de vida y daños, comisiones de apertura y avalúos. 2) Infonavit vs. Crédito Bancario: para profesionistas con buen historial crediticio en el Buró de Crédito, los créditos bancarios ofrecen tasas promedio del 9.5% al 10.5% anual, sustancialmente más competitivas que las tasas de Infonavit para ingresos medios-altos (aunque el saldo de la Subcuenta de Vivienda puede aplicarse para pagar el enganche mediante esquemas Cofinavit). 3) Simulador Comprar vs. Rentar: comprar implica gastos notariales no recuperables (4% al 7% del valor del inmueble en México), predial, seguros y mantenimiento (1-2% anual); rentar e invertir la diferencia del enganche y los sobrecostos en un portafolio indexado diversificado a menudo supera patrimonialmente a la compra física en horizontes de 10 a 15 años.",
        visualType: "mortgage_tool",
        disclaimer: "Educación, no asesoría financiera. La decisión de comprar vivienda combina factores financieros y preferencias personales de estabilidad familiar.",
        speakerNotes: "Una casa propia donde vives es un activo patrimonial y de estilo de vida, pero financieramente no genera flujo de caja (saca dinero de tu bolsillo en predial, mantenimiento e intereses). No te sobreendeudes pagando más del 30% de tus ingresos en la hipoteca.",
        concepts: [
          { term: "CAT Hipotecario", def: "Costo Anual Total: medida oficial que integra tasa de interés, comisiones de apertura, avalúo y seguros obligatorios de la hipoteca." },
          { term: "Gastos Notariales y Escrituración", def: "Costos de adquisición que representan entre el 4% y el 7% del valor de la propiedad en México (impuestos de traslado de dominio y honorarios)." },
          { term: "Subcuenta de Vivienda (Infonavit)", def: "Recursos acumulados por aportaciones patronales del 5% del salario integrado que pueden utilizarse como enganche hipotecario." },
          { term: "Amortización Anticipada a Capital", def: "Aportaciones extraordinarias que reducen directamente el saldo insoluto de la deuda, acortando años de intereses millonarios." }
        ],
        realExample: {
          asset: "Simulación Hipotecaria: Inmueble de $3,000,000 MXN en México",
          date: "Tasas bancarias promedio 2026",
          source: "CONDUSEF / Simulador Hipotecario Oficial",
          url: "https://phpapps.condusef.gob.mx/condusefhipotecario/",
          caseDescription: "Inmueble de $3M con 20% de enganche ($600k) y crédito de $2.4M a 20 años al 10.0% (CAT 12.2%). Mensualidad promedio: $23,500 MXN. Al término de los 20 años, el acreditado habrá pagado más de $5.6M MXN ($2.4M de capital + $3.2M de puros intereses). Realizar aportaciones extraordinarias de $2,000 MXN mensuales directas a capital reduce el plazo a 13 años y ahorra más de $1.1 millones en intereses."
        },
        deliverableExercise: {
          title: "Evaluación de Capacidad Hipotecaria Responsable",
          description: "Calcula en el recuadro: 1) El 30% de tu ingreso neto mensual (límite máximo prudente de mensualidad hipotecaria), 2) Si compras una casa de tu interés, calcula el enganche mínimo del 20% más un 6% de gastos notariales de escrituración en efectivo."
        },
        quizzes: [
          {
            question: "¿Qué porcentaje del valor de un inmueble debes contemplar en efectivo adicional al enganche para cubrir gastos notariales y escrituración en México?",
            options: [
              "Cero pesos; los notarios son gratuitos por ley.",
              "Aproximadamente entre el 4% y el 7% del valor total de la propiedad, destinados al Impuesto sobre Adquisición de Inmuebles (ISAI), derechos de registro y honorarios.",
              "El 50% del valor de la casa.",
              "Solo el 16% de IVA sobre el enganche."
            ],
            correct: 1,
            explanation: "Los gastos de escrituración son desembolsos en efectivo obligatorios que el banco no financia; omitirlos en el presupuesto cancela muchas operaciones."
          },
          {
            question: "¿Cuál es el beneficio financiero de realizar aportaciones extraordinarias directas al 'Capital' de un crédito hipotecario?",
            options: [
              "Ninguno; el banco no acepta pagos anticipados.",
              "Reducir directamente el saldo insoluto de la deuda, lo que disminuye drásticamente el cobro futuro de intereses y acorta los años de duración del crédito.",
              "Aumentar el monto que pagas de predial.",
              "Obligar al banco a bajarte el enganche."
            ],
            correct: 1,
            explanation: "Al amortizar directo a capital, los intereses de las mensualidades restantes se calculan sobre una base menor, ahorrando cientos de miles de pesos."
          },
          {
            question: "En el análisis financiero de 'Comprar vs. Rentar', ¿por qué rentar una vivienda no equivale a 'tirar el dinero a la basura'?",
            options: [
              "Porque los caseros regalan las casas a los 5 años.",
              "Porque la renta paga exclusivamente el derecho a usar un techo, mientras que la compra exige costos hundidos no recuperables (intereses, escrituración, predial y mantenimiento) que, al ahorrarse e invertirse en bolsa, pueden generar mayor patrimonio neto.",
              "Porque rentar es gratis en la Ciudad de México.",
              "Porque los inmuebles nunca suben de valor."
            ],
            correct: 1,
            explanation: "Rentar ofrece flexibilidad y evita el costo de financiamiento hipotecario; si el capital del enganche y los sobrecostos se invierten disciplinadamente, el resultado financiero puede ser superior."
          }
        ]
      },
      {
        title: "Optimización Fiscal Personal: Sueldos, RESICO y Deducciones del Art. 151 LISR",
        content: "Aprende a jugar las reglas legales del SAT: maximiza las deducciones personales para obtener saldo a favor en abril.",
        details: "Pagar impuestos de manera justa y optimizada es una habilidad financiera fundamental. En México, los contribuyentes personas físicas operan bajo regímenes como Sueldos y Salarios o el Régimen Simplificado de Confianza (RESICO, con tasas preferenciales de ISR de entre 1.0% y 2.5% sobre ingresos brutos para personas con actividad empresarial hasta $3.5M anuales). En la Declaración Anual en abril, los asalariados pueden aplicar las 'Deducciones Personales' autorizadas por el Artículo 151 de la LISR: 1) Gastos Médicos, Dentales y Hospitalarios (pagados estrictamente con tarjeta o transferencia, nunca efectivo). 2) Lentes Ópticos Graduados (hasta $2,500 MXN por persona). 3) Colegiaturas escolares con factura electrónica y CURP del alumno. 4) Intereses Reales de Créditos Hipotecarios (emitidos por el banco en constancia fiscal). 5) Planes Personales de Retiro (PPR) deducibles hasta por el 10% de los ingresos anuales o 5 UMAs anuales (~$206k MXN). Las deducciones reducen la base gravable y generan devoluciones millonarias de saldo a favor directo a tu cuenta bancaria.",
        visualType: "tax_optimization_tool",
        disclaimer: "Educación, no asesoría fiscal formal. Cada contribuyente debe revisar su situación particular con su contador público titulado.",
        speakerNotes: "Pagar gastos médicos en efectivo es tirar dinero al basurero fiscal: el SAT rechaza automáticamente cualquier deducción de salud no pagada con tarjeta, transferencia o cheque nominativo.",
        concepts: [
          { term: "Deducciones Personales (Art. 151)", def: "Gastos permitidos por ley que las personas físicas pueden restar de sus ingresos acumulables en la declaración anual para pagar menos ISR o recibir devolución." },
          { term: "Intereses Reales Hipotecarios", def: "La diferencia positiva entre la tasa de interés pagada al banco y la inflación del ejercicio fiscal, deducible al 100%." },
          { term: "Planes Personales de Retiro (PPR)", def: "Vehículos de inversión para el retiro que permiten deducir aportaciones de hasta el 10% del ingreso bruto anual." },
          { term: "Medio de Pago Bancarizado", def: "Requisito estricto del SAT: las deducciones de salud deben pagarse por transferencia, tarjeta de crédito/débito o cheque." }
        ],
        realExample: {
          asset: "Devolución de Saldo a Favor en Declaración Anual Personas Físicas",
          date: "Campaña Anual SAT Abril 2026",
          source: "Servicio de Administración Tributaria (SAT)",
          url: "https://www.sat.gob.mx/",
          caseDescription: "Contribuyente asalariado con ingreso bruto anual de $600,000 MXN (tasa marginal de ISR ~30%). Durante el año acumuló $25,000 MXN en gastos médicos pagados con tarjeta, $18,000 MXN en intereses reales hipotecarios y aportó $50,000 MXN a su PPR deducible. Al presentar su declaración en abril, redujo su base gravable en $93,000 MXN, obteniendo una devolución en efectivo de más de $27,900 MXN depositada en su cuenta CLABE."
        },
        deliverableExercise: {
          title: "Plan de Deducciones Personales para tu Próxima Declaración",
          description: "Haz un inventario de tus deducciones personales para el presente año fiscal: 1) ¿Pagas crédito hipotecario o colegiaturas?, 2) ¿Cuánto podrías aportar a un PPR para deducir el 10% de tus ingresos?, 3) Verifica que tu RFC y régimen fiscal estén actualizados en tu Constancia de Situación Fiscal."
        },
        quizzes: [
          {
            question: "¿Cuál es el requisito indispensable que exige el SAT para que una factura de gastos médicos u hospitalarios sea deducible en tu declaración anual?",
            options: [
              "Pagarla en efectivo en ventanilla de la farmacia.",
              "Que sea pagada forzosamente mediante medios bancarizados (tarjeta de débito/crédito, transferencia electrónica o cheque nominativo) y con factura CFDI emitida con uso 'D01 Honorarios médicos'.",
              "Haber nacido en el estado donde se ubica el hospital.",
              "No tener cuenta bancaria."
            ],
            correct: 1,
            explanation: "El SAT invalida automáticamente cualquier deducción personal de salud pagada en efectivo, sin importar que se cuente con la factura electrónica."
          },
          {
            question: "¿Cuánto es el monto máximo que un contribuyente puede deducir anualmente mediante aportaciones a un Plan Personal de Retiro (PPR) conforme al Art. 151 de la LISR?",
            options: [
              "Hasta el 10% de los ingresos acumulables del ejercicio, sin exceder el equivalente a 5 UMAs anualizadas (~$206,000 MXN en 2026).",
              "Máximo $1,000 pesos al año.",
              "Sin límite; se puede deducir el 100% de todo el sueldo.",
              "Los PPR no son deducibles de impuestos."
            ],
            correct: 0,
            explanation: "El artículo 151 Fracción V establece el tope del 10% de los ingresos brutos del contribuyente o 5 UMAs anuales, lo que resulte menor."
          },
          {
            question: "¿Qué son los 'Intereses Reales' deducibles en un crédito hipotecario para casa habitación?",
            options: [
              "Todos los intereses que cobra el banco mes con mes.",
              "La parte de la tasa de interés hipotecaria que excede a la tasa de inflación registrada durante el año fiscal.",
              "Una comisión que cobra el notario público.",
              "El enganche pagado al inicio de la compra."
            ],
            correct: 1,
            explanation: "Solo se puede deducir el interés real por encima de la inflación anual; el banco emite una constancia fiscal con el cálculo exacto cada mes de febrero."
          }
        ]
      },
      {
        title: "Protección Legal y Sucesoria: Testamentos, Beneficiarios y Fideicomisos",
        content: "Proteger tu patrimonio es asegurar que llegue íntegro a quienes amas sin pleitos familiares ni juicios intestamentarios.",
        details: "Construir riqueza durante décadas para que termine dilapidada en juzgados o dividida entre familiares en conflicto es una tragedia prevenible con orden legal. En México existen tres niveles de previsión sucesoria: 1) Designación de Beneficiarios en Contratos Financieros: tus cuentas bancarias, contratos de intermediación bursátil en casas de bolsa (GBM, Bursanet) y Cetesdirecto cuentan con designación directa de beneficiarios porcentuales; estos fondos se entregan de forma expedita con acta de defunción sin necesidad de esperar un juicio testamentario. 2) Testamento Público Abierto: redactado ante Notario Público (aprovechando la campaña nacional 'Septiembre, Mes del Testamento' con descuentos del 50%), define la transmisión de bienes inmuebles, vehículos y empresas familiares, y designa albaceas y tutores legales para hijos menores. 3) Fideicomisos Patrimoniales: para patrimonios consolidados, un fideicomiso fiduciario administra la dispersión de rentas y activos con reglas blindadas sin pasar por sucesiones legales públicas.",
        visualType: "estate_planning_tool",
        disclaimer: "Educación, no asesoría jurídica. Los actos sucesorios deben protocolizarse ante Notario Público matriculado en tu entidad federativa.",
        speakerNotes: "Hacer testamento no llama a la muerte; llama a la paz familiar. Es un acto de madurez y amor responsable hacia tus hijos y cónyuge.",
        concepts: [
          { term: "Testamento Público Abierto", def: "Instrumento legal otorgado ante notario donde una persona dispone el destino de todos sus bienes y derechos para después de su muerte." },
          { term: "Juicio Intestamentario", def: "Proceso judicial engorroso, costoso y prolongado que se abre cuando una persona fallece sin dejar testamento válido." },
          { term: "Albacea", def: "Persona designada en el testamento responsable de custodiar los bienes, liquidar deudas y repartir la herencia conforme a la voluntad del testador." },
          { term: "Beneficiario Directo", def: "Persona designada en contratos bancarios y bursátiles que cobra los recursos líquidos sin pasar por el trámite notarial del testamento." }
        ],
        realExample: {
          asset: "Campaña Nacional 'Septiembre, Mes del Testamento' en México",
          date: "Programa anual notarial 2026",
          source: "Colegio Nacional del Notariado Mexicano / SEGOB",
          url: "https://www.gob.mx/segob",
          caseDescription: "Inversionista de 35 años con esposa y dos hijos pequeños protocoliza su Testamento Público Abierto en septiembre con costo reducido (~$2,500 MXN). Designa herederos sustitutos y albacea de confianza, además de nombrar tutor testamentario para sus hijos menores en caso de falta de ambos padres. Simultáneamente, sincroniza los porcentajes de beneficiarios en su cuenta de casa de bolsa y cuenta de cheques."
        },
        deliverableExercise: {
          title: "Auditoría de Beneficiarios y Prevención Sucesoria",
          description: "Verifica en el recuadro: 1) ¿Tienes actualizados los beneficiarios (con nombre completo, parentesco y porcentaje) en tu casa de bolsa y banco?, 2) ¿Cuentas con testamento formal si posees inmuebles?, 3) ¿Quién sería tu albacea de confianza?"
        },
        quizzes: [
          {
            question: "¿Qué ventaja tienen los 'Beneficiarios' designados directamente en tus cuentas bancarias y de casas de bolsa respecto a los bienes de un testamento?",
            options: [
              "Que no tienen que pagar el impuesto predial.",
              "Que pueden cobrar los recursos monetarios de forma directa y expedita presentando el acta de defunción, sin tener que esperar la conclusión de un juicio sucesorio o trámite notarial prolongado.",
              "Que pueden vender la casa familiar sin avisar.",
              "Que el SAT les duplica el saldo de la cuenta."
            ],
            correct: 1,
            explanation: "La designación contractual de beneficiarios opera de manera directa por ley mercantil, dotando de liquidez inmediata a la familia en momentos críticos."
          },
          {
            question: "¿Qué sucede legalmente en México si una persona fallece sin haber redactado un testamento formal (situación de intestado)?",
            options: [
              "Todos sus bienes pasan automáticamente a ser propiedad del presidente de la República.",
              "Se debe abrir un Juicio Sucesorio Intestamentario ante un juez familiar o notario; la ley determina quiénes heredan según prelación de parentesco, consumiendo tiempo y miles de pesos en honorarios legales.",
              "Las deudas de la persona se heredan a sus vecinos.",
              "La casa de bolsa congela el dinero para siempre."
            ],
            correct: 1,
            explanation: "El juicio intestamentario genera fricciones familiares y costos notariales onerosos que se habrían prevenido con un testamento formal."
          },
          {
            question: "¿Cuál es la función del 'Albacea' designado en un testamento público?",
            options: [
              "Quedarse con el 100% de la herencia para su uso personal.",
              "Es la persona de máxima confianza encargada de administrar los bienes de la masa hereditaria, pagar eventuales deudas pendientes y ejecutar la distribución exacta dictada por el testador.",
              "Cobrar las rentas en nombre del gobierno municipal.",
              "Firmar las declaraciones de impuestos de los vecinos."
            ],
            correct: 1,
            explanation: "El albacea es el ejecutor legal de la voluntad del fallecido, garantizando que el patrimonio se transfiera con pulcritud y transparencia."
          }
        ]
      },
      {
        title: "Finanzas en Pareja y Familia: Modelos de Gestión y Prevención de Conflictos",
        content: "El dinero es la causa número uno de divorcios: alinea expectativas, transparenta cuentas y diseña un proyecto conjunto.",
        details: "Un patrimonio financiero sólido no se construye en el aislamiento si compartes tu vida en pareja. La 'Infidelidad Financiera' (ocultar deudas, compras secretas o cuentas paralelas) erosiona la confianza conyugal tanto como una infidelidad emocional. En la gestión de pareja existen tres modelos operativos: 1) Modelo 'Fusión Total' (un solo pozo común donde entra todo el ingreso de ambos; suele generar roces por diferencias en estilos de gasto discrecional). 2) Modelo 'Independencia Absoluta' (cada quien paga lo suyo; difícil de gestionar al llegar hijos o gastos compartidos de vivienda). 3) Modelo 'Las Tres Bolsas' (Tuyo, Mío y Nuestro - El Estándar Recomendado): se apertura una cuenta mancomunada para Gastos Comunes de la Casa (renta/hipoteca, servicios, despensa y fondo familiar) a la que cada uno aporta proporcionalmente a su ingreso neto (ej. 60/40 si uno gana más), manteniendo cada cónyuge su propia cuenta individual con total autonomía para sus gastos personales e inversiones sin pedir permiso ni dar explicaciones.",
        visualType: "couple_finance_tool",
        disclaimer: "Educación, no asesoría legal conyugal ni terapia de pareja. El régimen conyugal (sociedad conyugal vs separación de bienes) debe elegirse con asesoría legal civil.",
        speakerNotes: "El dinero en pareja no se trata de quién gana más, sino de remar en la misma dirección hacia metas comunes sin perder la autonomía y el respeto mutuo.",
        concepts: [
          { term: "Modelo Tres Bolsas", def: "Sistema financiero conyugal que divide los ingresos en: 1) Gastos de la Casa (común proporcional), 2) Bolsa Personal de Él, 3) Bolsa Personal de Ella." },
          { term: "Infidelidad Financiera", def: "Acto de mentir u ocultar deudas, ingresos, cuentas o gastos significativos a la pareja con quien se comparte un proyecto de vida." },
          { term: "Aportación Proporcional", def: "Contribuir a los gastos del hogar en porcentaje relativo al ingreso de cada uno (ej. 60%-40%), evitando la inequidad de dividir 50-50 cuando hay brecha salarial." },
          { term: "Cita Financiera Mensual", def: "Reunión periódica de 30 minutos sin reproches para revisar presupuesto, ahorro y avance de las metas patrimoniales de la familia." }
        ],
        realExample: {
          asset: "Implementación del Modelo Tres Bolsas en Parejas con Diferencia Salarial",
          date: "Dinámica financiera conyugal 2026",
          source: "Estudios de Finanzas Conductuales en Familia",
          url: "https://www.gob.mx/condusef",
          caseDescription: "Pareja donde uno gana $40,000 MXN y el otro $20,000 MXN (ingreso total $60,000 MXN). Los gastos del hogar suman $30,000 MXN. En lugar de exigir $15k a cada uno (lo que asfixiaría al de menor ingreso dejándole solo $5k), aplican aportación proporcional 67%/33%: el primero aporta $20,000 MXN y el segundo $10,000 MXN a la cuenta común, conservando ambos un remanente idéntico proporcional para su ahorro e inversiones personales."
        },
        deliverableExercise: {
          title: "Diseño del Acuerdo Financiero en Pareja",
          description: "Escribe en el recuadro: 1) ¿Qué modelo de gestión económica utilizas o planeas utilizar (Fusión, Separación o Tres Bolsas)?, 2) Si aplican aportación proporcional, calcula los porcentajes según ingresos respectivos, 3) Fija una fecha fija al mes para su 'Cita Financiera'."
        },
        quizzes: [
          {
            question: "¿Por qué el modelo conyugal de 'Las Tres Bolsas' (Tuyo, Mío y Nuestro) es considerado el más equilibrado por expertos en psicología financiera?",
            options: [
              "Porque triplica los ingresos del hogar por arte de magia.",
              "Porque garantiza que los gastos compartidos del hogar estén 100% cubiertos proporcionalmente, al tiempo que preserva la autonomía y libertad individual de cada cónyuge para sus propios gastos e inversiones sin fricciones.",
              "Porque exenta a la pareja de pagar impuestos.",
              "Porque solo aplica para parejas que no tienen hijos."
            ],
            correct: 1,
            explanation: "Las Tres Bolsas eliminan el resentimiento: el hogar está protegido en equipo, pero cada quien conserva soberanía sobre su dinero personal."
          },
          {
            question: "Si uno de los cónyuges gana $50,000 MXN y el otro $25,000 MXN, ¿por qué dividir los gastos del hogar 50% y 50% exactos suele ser injusto?",
            options: [
              "Porque la ley mexicana lo prohíbe expresamente.",
              "Porque impone una carga desproporcionada sobre quien gana menos (pudiendo consumir el 70-80% de su sueldo), mientras que quien gana más apenas siente el gasto; la aportación proporcional es equitativa.",
              "Porque las cuentas bancarias no admiten transferencias divididas.",
              "Porque los hombres siempre deben pagar todo."
            ],
            correct: 1,
            explanation: "La equidad financiera en pareja se basa en el esfuerzo proporcional respecto al ingreso disponible, no en divisiones matemáticas rígidas."
          },
          {
            question: "¿Qué conducta describe formalmente a la 'Infidelidad Financiera' en una relación de pareja?",
            options: [
              "Comprar un regalo sorpresa de aniversario.",
              "Ocultar deudas de tarjetas, préstamos secretos, cuentas no declaradas o gastos de magnitud significativa que comprometen la estabilidad del hogar común.",
              "Tener una tarjeta de débito propia.",
              "Invertir en CETES a 28 días."
            ],
            correct: 1,
            explanation: "Ocultar compromisos financieros o deudas rompe el pacto de transparencia y pone en riesgo el patrimonio de ambos ante eventuales embargos o quiebras."
          }
        ]
      },
      {
        title: "Plan Patrimonial a 1, 5 y 10 Años: Hoja de Ruta y Metodología SMART",
        content: "Sin un destino claro, ningún viento es favorable: estructura tus metas financieras con horizontes e instrumentos asignados.",
        details: "Tener el deseo difuso de 'hacer dinero' no es un plan; es una fantasía. Un Plan Patrimonial Integral clasifica los objetivos de vida bajo la metodología SMART (Específicos, Medibles, Alcanzables, Relevantes y con Tiempo determinado), emparejando cada meta con el instrumento financiero correcto según su horizonte temporal: 1) Corto Plazo (1 a 2 años): Metas inmediatas como fondo de emergencia, viaje o enganche vehicular; instrumentos: Renta Fija Soberana a descuento (CETES 28D, Bondia, pagarés bancarios regulados con seguro IPAB). 2) Mediano Plazo (3 a 5 años): Enganche de vivienda, maestría o capital para emprender un negocio; instrumentos: Udibonos a 3-5 años, Bonos M, FIBRAS inmobiliarias de alta liquidez y carteras conservadoras 60/40. 3) Largo Plazo (6 a 10+ años y Retiro a 30 años): Libertad financiera, retiro digno y legado generacional; instrumentos: ETFs globales indexados (S&P 500, All-World VT) y Planes Personales de Retiro (PPR) deducibles, aprovechando el interés compuesto sin importar la volatilidad de corto plazo.",
        visualType: "roadmap_timeline_tool",
        disclaimer: "Educación, no asesoría financiera. La revisión de la hoja de ruta debe realizarse al menos una vez al año para rebalancear ponderaciones.",
        speakerNotes: "El peor error es mezclar horizontes: financiar una meta de corto plazo con acciones volátiles de bolsa, o ahorrar para tu retiro a 30 años en una cuenta corriente que pierde valor contra la inflación.",
        concepts: [
          { term: "Metodología SMART", def: "Metas formuladas con precisión: Specific (Específica), Measurable (Medible), Achievable (Alcanzable), Relevant (Relevante), Time-bound (Con Plazo)." },
          { term: "Emparejamiento de Plazos", def: "Regla de oro: el horizonte temporal de la meta de vida debe coincidir exactamente con el vencimiento o volatilidad del instrumento elegido." },
          { term: "Corto Plazo (< 2 años)", def: "Horizonte defensivo que exige renta fija soberana líquida y cero exposición a volatilidad bursátil." },
          { term: "Largo Plazo (> 7 años)", def: "Horizonte expansivo donde la renta variable indexada ofrece el mayor rendimiento histórico ajustado por inflación." }
        ],
        realExample: {
          asset: "Hoja de Ruta Patrimonial: Caso de Inversionista a 10 Años",
          date: "Planificación estratégica de vida 2026 - 2036",
          source: "FA Academy Wealth Planning Framework",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Inversionista de 30 años estructura su plan a 10 años: Año 1: Fondo de emergencia de $90,000 MXN en CETES (Completado). Años 2-4: Acumulación de $350,000 MXN para enganche hipotecario en Udibonos y FIBRAS. Años 5-10: Aportación fija de $8,000 MXN mensuales en ETF S&P 500 (VOO) y PPR deducible, proyectando acumular más de $2.1 millones de pesos hacia 2036 con interés compuesto del 10% anual."
        },
        deliverableExercise: {
          title: "Matriz SMART de tu Plan Patrimonial 1, 5 y 10 Años",
          description: "Define en el recuadro tus 3 metas con montos e instrumentos: 1) Meta a 1 año (Monto exacto en MXN e instrumento de renta fija), 2) Meta a 5 años (Monto e instrumento), 3) Meta a 10+ años / Retiro (Monto mensual asignado a ETFs/PPR)."
        },
        quizzes: [
          {
            question: "¿Por qué es un error grave colocar el dinero destinado al enganche de una casa que comprarás en 12 meses dentro de un ETF de acciones de bolsa?",
            options: [
              "Porque la bolsa mexicana prohíbe comprar casas.",
              "Porque en un horizonte tan corto de 1 año la renta variable puede sufrir correcciones normales del -15% o -20%, impidiéndote completar el enganche a tiempo; ese plazo exige renta fija soberana.",
              "Porque el banco te cobra el triple de tasa hipotecaria.",
              "Porque las acciones solo se pueden vender cada 5 años."
            ],
            correct: 1,
            explanation: "Para metas menores a 2 años la volatilidad es inaceptable; se debe proteger el capital nominal mediante deuda soberana libre de riesgo como CETES."
          },
          {
            question: "¿Qué característica distingue a una meta financiera formulada con la metodología SMART?",
            options: [
              "Es un deseo vago como 'quiero tener mucho dinero algún día'.",
              "Define una cifra monetaria exacta, una fecha límite de cumplimiento, un plan de ahorro mensual alcanzable y un instrumento financiero asignado para lograrla.",
              "Se escribe únicamente en inglés.",
              "Solo aplica para grandes corporaciones multinacionales."
            ],
            correct: 1,
            explanation: "SMART transforma un anhelo abstracto en un plan matemático de ejecución diaria con métricas y fechas innegociables."
          },
          {
            question: "¿Cuál es el motor financiero que vuelve a la renta variable indexada (ej. S&P 500 / VOO) el instrumento óptimo para metas a más de 10 años y retiro?",
            options: [
              "Que el gobierno garantiza que duplicarás tu dinero cada semana.",
              "El poder del interés compuesto reinvirtiendo utilidades y dividendos durante décadas, diluyendo la volatilidad de corto plazo y superando ampliamente a la inflación.",
              "Que no cobran comisiones en cajeros automáticos.",
              "Que pagan en lingotes de oro físicos a domicilio."
            ],
            correct: 1,
            explanation: "En horizontes de 10 a 30 años, la renta variable global históricamente ofrece el mayor retorno real neto, recompensando la paciencia del inversionista disciplinado."
          }
        ]
      },
      {
        title: "Proyecto Final Integrador: Plan Maestro de Finanzas Personales",
        content: "Sintetiza tu arquitectura financiera: consolida tu presupuesto, fondo de emergencia, blindaje de seguros y estrategia fiscal en un documento rector.",
        details: "Para graduarte de la Fase 6, debes integrar tu 'Plan Maestro de Finanzas Personales' (Personal Financial Blueprint). Este entregable ejecutivo reúne en un único documento de control los seis componentes auditados del módulo: 1) Presupuesto 50/30/20 y eliminación de fugas de capital. 2) Certificación del Fondo de Emergencia en CETES/BONDIA con 3 a 6 meses de gastos fijos. 3) Checklist de Blindaje de Seguros (SGMM con tope de coaseguro, Vida temporal puro y Auto responsabilidad civil). 4) Estrategia de Deuda e Hipoteca (límite < 30% del ingreso y plan de amortización a capital). 5) Plan de Optimización Fiscal y Deducciones del Art. 151 LISR (PPR y gastos médicos bancarizados). 6) Previsión Sucesoria y Beneficiarios actualizados con testamento. Descarga nuestra plantilla integral en Excel para mantener tu tablero de mando financiero actualizado año tras año.",
        visualType: "master_plan_rubric",
        disclaimer: "Educación, no asesoría financiera formal. Este plan rector debe actualizarse anualmente ante cambios familiares, profesionales o fiscales.",
        speakerNotes: "El éxito patrimonial no es fruto de la suerte o de un golpe milagroso en la bolsa; es la consecuencia inevitable de tener unas finanzas personales ordenadas, protegidas y orientadas al largo plazo.",
        concepts: [
          { term: "Plan Maestro Personal", def: "Documento rector que consolida la política de ingresos, gastos, reservas, blindaje, fiscalidad y sucesión de un individuo o familia." },
          { term: "Paz Financiera", def: "Estado mental de tranquilidad derivado de saber que tus imprevistos están cubiertos, tus deudas controladas y tu futuro en construcción activa." },
          { term: "Tablero de Mando Patrimonial", def: "Métricas clave de actualización periódica: Tasa de Ahorro Mensual, Meses de Fondo de Emergencia y Patrimonio Neto (Activos - Pasivos)." },
          { term: "Patrimonio Neto", def: "La verdadera medida de riqueza: la suma de todo lo que posees (ahorros, inversiones, inmuebles) menos todo lo que debes." }
        ],
        realExample: {
          asset: "Plan Maestro de Graduación Modelo - FA Academy",
          date: "Caso modelo de certificación de finanzas personales",
          source: "Comité de Educación Financiera FA Academy",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Estudiante de FA Academy integra su plan maestro: Presupuesto optimizado con 22% de ahorro/inversión mensual. Fondo de emergencia de $80,000 MXN activo en Cetesdirecto. Póliza de SGMM con suma asegurada de $50M y tope de coaseguro de $50k MXN. Apertura de PPR deducible aportando $4,000 MXN mensuales para maximizar saldo a favor en el SAT. Beneficiarios sincronizados al 100% en todas sus cuentas. Plan acreditado con calificación sobresaliente."
        },
        deliverableExercise: {
          title: "Entregable Oficial: Resumen de tu Plan Maestro Financiero",
          description: "Redacta en el recuadro tu Plan Maestro consolidando los 6 pilares: 1) Tasa de ahorro actual (meta >= 20%), 2) Estatus de tu fondo de emergencia, 3) Seguros activos, 4) Estrategia hipotecaria/deuda, 5) Deducción fiscal planeada en SAT (PPR), 6) Beneficiarios designados."
        },
        quizzes: [
          {
            question: "¿Cuál es la fórmula matemática universal para calcular el 'Patrimonio Neto' de una persona o familia?",
            options: [
              "Ingresos del mes multiplicados por 12.",
              "Total de Activos (lo que posees: dinero, inversiones, propiedades) menos Total de Pasivos (lo que debes: deudas, hipotecas, tarjetas).",
              "El saldo que tienes en tu cuenta de nómina el día de pago.",
              "El valor comercial de tu automóvil."
            ],
            correct: 1,
            explanation: "El patrimonio neto es la única métrica objetiva de salud patrimonial: de nada sirve tener activos por $3M si debes $3.2M en pasivos."
          },
          {
            question: "¿Por qué un Plan Maestro de Finanzas Personales debe auditarse y actualizarse al menos una vez al año?",
            options: [
              "Porque el bróker cancela la cuenta si no lo haces.",
              "Porque la vida evoluciona: cambian tus ingresos, la inflación, la composición familiar (matrimonio, hijos), las regulaciones fiscales del SAT y las tasas de interés.",
              "Para pagar comisiones dobles a los notarios.",
              "Porque las leyes de finanzas cambian cada semana."
            ],
            correct: 1,
            explanation: "El plan es dinámico; auditarlo anualmente asegura que tus activos y pólizas sigan alineados con tu realidad económica y metas de vida."
          },
          {
            question: "¿Cuál es la mayor recompensa personal de consolidar con éxito todos los pilares de la Fase 6 de FA Academy?",
            options: [
              "Poder presumir ropa de marca en redes sociales.",
              "Alcanzar la Paz Financiera: eliminar el estrés por deudas, tener un escudo indestructible ante emergencias médicas y saber que tu familia y tu retiro están matemáticamente blindados.",
              "No volver a pagar la despensa del supermercado.",
              "Dejar de trabajar al día siguiente sin importar tu edad."
            ],
            correct: 1,
            explanation: "La paz financiera y la libertad de tomar decisiones sin estar encadenado a la urgencia del dinero es el fin supremo de una educación financiera integral."
          }
        ]
      }
    ]
  }
];

// --- BANCO DE 10 PREGUNTAS DEL EXAMEN DE CERTIFICACIÓN FASE 6 ---
const quizQuestions = [
  {
    id: 1,
    question: "Según el modelo de presupuesto operativo 50/30/20, ¿qué porcentaje de tus ingresos netos debe destinarse innegociablemente al ahorro e inversión para el futuro?",
    options: [
      "5% únicamente.",
      "Al menos el 20% de los ingresos netos mensuales.",
      "El 50%.",
      "Solo lo que sobre a final de mes si no hubo gastos imprevistos."
    ],
    correct: 1
  },
  {
    id: 2,
    question: "¿Cuántos meses de gastos fijos de supervivencia debe cubrir el Fondo de Emergencia ('Colchón de Paz') para un empleado con sueldo fijo y estabilidad?",
    options: [
      "1 semana.",
      "Entre 3 y 6 meses de gastos fijos ineludibles.",
      "5 años completos.",
      "No se necesita fondo de emergencia si se cuenta con tarjeta de crédito."
    ],
    correct: 1
  },
  {
    id: 3,
    question: "¿En qué tipo de instrumentos financieros debe resguardarse exclusivamente el Fondo de Emergencia en México?",
    options: [
      "En acciones tecnológicas volátiles o criptomonedas.",
      "En instrumentos de renta fija soberana o bancaria de máxima seguridad y liquidez inmediata (ej. CETES 28D o BONDIA en Cetesdirecto).",
      "En préstamos informales a amigos.",
      "En centenarios de oro enterrados en el jardín."
    ],
    correct: 1
  },
  {
    id: 4,
    question: "En un Seguro de Gastos Médicos Mayores (SGMM), ¿cuál es la cláusula que te protege de pagar un coaseguro millonario en enfermedades graves?",
    options: [
      "El deducible cero.",
      "El 'Tope de Coaseguro' (límite máximo en pesos de desembolso para el asegurado).",
      "El tabulador médico flexible.",
      "La prima mensual fraccionada."
    ],
    correct: 1
  },
  {
    id: 5,
    question: "¿Por qué los asesores financieros independientes recomiendan contratar un 'Seguro de Vida Temporal Puro' en lugar de un seguro de vida con inversión/ahorro (dotal)?",
    options: [
      "Porque los seguros temporales son más caros.",
      "Porque ofrece la máxima suma asegurada de protección al menor costo posible, permitiendo que inviertas la diferencia de dinero por tu cuenta en fondos indexados sin altas comisiones opacas.",
      "Porque la ley prohíbe ahorrar en aseguradoras.",
      "Porque no pagan comisiones a los agentes."
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Al contratar un crédito hipotecario para vivienda, ¿qué métrica financiera oficial integra todos los costos reales (tasa, comisiones, seguros obligatorios y avalúo)?",
    options: [
      "La Tasa de Interés Nominal pura.",
      "El Costo Anual Total (CAT Hipotecario).",
      "El índice de inflación de Banxico.",
      "El tipo de cambio interbancario peso/dólar."
    ],
    correct: 1
  },
  {
    id: 7,
    question: "¿Cuál es el beneficio de realizar aportaciones extraordinarias aplicadas directamente a 'Capital' en un crédito hipotecario?",
    options: [
      "No produce ningún beneficio financiero.",
      "Disminuye directamente el saldo insoluto de la deuda, reduciendo exponencialmente el cobro futuro de intereses y acortando los años de duración del crédito.",
      "Aumenta la tasa de interés del banco.",
      "Exenta a la casa de pagar el impuesto predial."
    ],
    correct: 1
  },
  {
    id: 8,
    question: "En la Declaración Anual ante el SAT, ¿cuál es el requisito obligatorio para que los gastos médicos y dentales sean deducibles según el Art. 151 LISR?",
    options: [
      "Pagarlos obligatoriamente en efectivo para que no dejen rastro bancario.",
      "Estar pagados forzosamente con medios bancarizados (tarjeta de crédito/débito, transferencia electrónica o cheque nominativo) con factura CFDI con uso médico.",
      "Presentar una carta de recomendación de un hospital público.",
      "Haber nacido en la Ciudad de México."
    ],
    correct: 1
  },
  {
    id: 9,
    question: "¿Qué ventaja tienen los 'Beneficiarios' designados directamente en contratos bancarios y de casas de bolsa (GBM, Bursanet, Cetesdirecto)?",
    options: [
      "No tienen ninguna validez legal si no están en un testamento notarial.",
      "Pueden disponer de los fondos de forma directa y expedita presentando el acta de defunción, sin tener que esperar el trámite o juicio sucesorio testamentario.",
      "Garantizan que el dinero no pagará impuestos nunca más.",
      "Permiten pedir préstamos a nombre del titular fallecido."
    ],
    correct: 1
  },
  {
    id: 10,
    question: "En el modelo conyugal de 'Las Tres Bolsas' (Tuyo, Mío y Nuestro), ¿cómo se gestionan los gastos comunes del hogar?",
    options: [
      "Uno de los dos paga absolutamente todo mientras el otro guarda el 100% de su sueldo.",
      "Ambos aportan a una cuenta mancomunada en proporción a sus ingresos para cubrir todos los gastos del hogar, conservando cada uno su cuenta individual para gastos e inversiones personales con total autonomía.",
      "Se divide todo al 50% aunque uno gane cinco veces más que el otro.",
      "Se pide un crédito bancario para pagar los gastos de cada mes."
    ],
    correct: 1
  }
];

// --- COMPONENTES VISUALES EDUCATIVOS FASE 6 ---

const BudgetTool = () => {
  const [income, setIncome] = useState(25000);
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  return (
    <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <PieChart size={18} className="text-emerald-400" />
            Calculadora Interactiva de Presupuesto 50/30/20
          </h4>
          <p className="text-[11px] text-slate-400">Distribución mensual equilibrada de ingresos netos</p>
        </div>
        <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
          Metodología Universal
        </span>
      </div>

      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 mb-4">
        <label className="text-slate-400 block text-xs mb-1">Ingreso Neto Mensual Disponible ($ MXN):</label>
        <div className="flex items-center gap-3">
          <input 
            type="range" min="8000" max="100000" step="1000" 
            value={income} 
            onChange={(e) => setIncome(parseFloat(e.target.value))} 
            className="w-full accent-emerald-500" 
          />
          <span className="font-mono text-emerald-400 font-bold text-base w-28 text-right">
            ${income.toLocaleString('es-MX')} MXN
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-blue-500">
          <p className="font-bold text-white text-sm">50% Necesidades Básicas</p>
          <p className="text-xl font-extrabold text-blue-400 mt-1">${needs.toLocaleString('es-MX')} MXN</p>
          <p className="text-[11px] text-slate-400 mt-1">Vivienda, despensa, servicios básicos, transporte esencial y salud.</p>
        </div>
        <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-amber-500">
          <p className="font-bold text-white text-sm">30% Deseos y Estilo de Vida</p>
          <p className="text-xl font-extrabold text-amber-400 mt-1">${wants.toLocaleString('es-MX')} MXN</p>
          <p className="text-[11px] text-slate-400 mt-1">Salidas, entretenimiento, restaurantes, viajes y compras personales.</p>
        </div>
        <div className="bg-slate-800 p-3.5 rounded-xl border-l-4 border-emerald-500">
          <p className="font-bold text-white text-sm">20% Inversión y Futuro</p>
          <p className="text-xl font-extrabold text-emerald-400 mt-1">${savings.toLocaleString('es-MX')} MXN</p>
          <p className="text-[11px] text-slate-400 mt-1">Fondo de emergencia, PPR deducible y portafolio indexado a largo plazo.</p>
        </div>
      </div>
    </div>
  );
};

const EmergencyFundTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Shield className="text-emerald-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Arquitectura del 'Colchón de Paz': Fondo de Emergencia</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-emerald-500">
        <p className="font-bold text-white">1. Asalariado con Estabilidad</p>
        <p className="text-emerald-400 font-bold mt-1 text-sm">3 a 4 Meses de Gastos</p>
        <p className="text-[11px] text-slate-300 mt-1">Si cuentas con contrato indefinido, prestaciones de ley y fondo de desempleo familiar.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <p className="font-bold text-white">2. Independiente / Emprendedor</p>
        <p className="text-amber-400 font-bold mt-1 text-sm">6 a 9 Meses de Gastos</p>
        <p className="text-[11px] text-slate-300 mt-1">Para amortiguar meses con baja facturación o retrasos en cobranza de clientes sin estrés.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-500">
        <p className="font-bold text-white">3. Dónde Resguardarlo</p>
        <p className="text-purple-300 font-bold mt-1 text-sm">BONDIA + CETES 28D</p>
        <p className="text-[11px] text-slate-300 mt-1">25% en BONDIA (disponibilidad diaria en días hábiles) y 75% en CETES 28D renovable.</p>
      </div>
    </div>
  </div>
);

const InsuranceTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Umbrella className="text-emerald-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Matriz de Blindaje con Seguros Indispensables</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="font-bold text-teal-300 text-sm">Gastos Médicos Mayores (SGMM)</p>
        <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
          Protege contra siniestros de millones de pesos. Regla de oro: exigir <strong>Tope de Coaseguro</strong> y suma asegurada no menor a $20M MXN.
        </p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="font-bold text-blue-300 text-sm">Vida Temporal Puro</p>
        <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
          Solo si tienes dependientes económicos. Máxima suma asegurada (5-8 años de gastos familiares) al menor costo, sin componentes mixtos opacos.
        </p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
        <p className="font-bold text-purple-300 text-sm">Auto Cobertura Amplia</p>
        <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
          Responsabilidad civil de al menos $3M-$4M MXN para cubrir indemnizaciones legales ante terceros sin comprometer tus activos.
        </p>
      </div>
    </div>
  </div>
);

const MortgageTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Home className="text-emerald-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hipotecas: Reglas Financieras Innegociables</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
        <span className="text-emerald-400 font-bold block mb-1">Regla del 30% Máximo de Ingreso</span>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          La mensualidad hipotecaria total (con seguros) jamás debe superar el 30% de tus ingresos netos demostrables para evitar asfixia crediticia.
        </p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
        <span className="text-blue-400 font-bold block mb-1">Aportaciones a Capital Estratégicas</span>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          Aportar un mes extra de mensualidad al año directo al saldo insoluto reduce un crédito de 20 años a 14 años, ahorrando más de un 40% en intereses.
        </p>
      </div>
    </div>
  </div>
);

const TaxOptimizationTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Landmark className="text-emerald-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Deducciones Personales Permitidas (Art. 151 LISR)</h4>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-500">
        <p className="font-bold text-white">Gastos de Salud</p>
        <p className="text-[10px] text-slate-300 mt-1">Médicos, dentistas, psicólogos, nutrición y hospitales pagados con medios bancarizados.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-blue-500">
        <p className="font-bold text-white">PPR de Retiro</p>
        <p className="text-[10px] text-slate-300 mt-1">Hasta el 10% del ingreso bruto anual o 5 UMAs anuales (~$206k MXN) deducibles al 100%.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-amber-500">
        <p className="font-bold text-white">Intereses Hipoteca</p>
        <p className="text-[10px] text-slate-300 mt-1">Interés real pagado al banco por encima de la inflación anual (constancia fiscal en febrero).</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-500">
        <p className="font-bold text-white">Colegiaturas y Lentes</p>
        <p className="text-[10px] text-slate-300 mt-1">Colegiaturas con topes por nivel educativo y lentes graduados hasta por $2,500 MXN.</p>
      </div>
    </div>
  </div>
);

const EstatePlanningTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
      <Scale className="text-emerald-400" size={18} />
      Los 3 Niveles de Protección Sucesoria en México
    </h4>
    <div className="space-y-2 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-500 flex justify-between items-center">
        <div>
          <span className="font-bold text-white block">1. Beneficiarios Directos en Contratos Financieros</span>
          <span className="text-[11px] text-slate-400">Entrega expedita de dinero líquido en bancos y casas de bolsa con acta de defunción.</span>
        </div>
        <span className="text-emerald-400 font-bold text-[10px]">Inmediato</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-blue-500 flex justify-between items-center">
        <div>
          <span className="font-bold text-white block">2. Testamento Público Abierto ante Notario</span>
          <span className="text-[11px] text-slate-400">Orden para inmuebles, autos y custodia de hijos menores; evita juicios intestamentarios.</span>
        </div>
        <span className="text-blue-400 font-bold text-[10px]">Patrimonial</span>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
        <div>
          <span className="font-bold text-white block">3. Fideicomiso Patrimonial Fiduciario</span>
          <span className="text-[11px] text-slate-400">Para patrimonios avanzados con reglas de dispersión condicionada de rentas y negocios.</span>
        </div>
        <span className="text-purple-400 font-bold text-[10px]">Avanzado</span>
      </div>
    </div>
  </div>
);

const CoupleFinanceTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
      <Users className="text-emerald-400" size={20} />
      <h4 className="text-sm font-bold text-white uppercase tracking-wider">El Modelo Conyugal de las 'Tres Bolsas'</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-center">
      <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
        <p className="font-bold text-blue-400 text-sm">Bolsa de Él</p>
        <p className="text-[11px] text-slate-300 mt-1">Cuenta personal individual para gastos y proyectos propios sin rendir cuentas.</p>
      </div>
      <div className="bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/40">
        <p className="font-bold text-emerald-400 text-sm">Bolsa del Hogar (Común)</p>
        <p className="text-[11px] text-emerald-200 mt-1">Aportación proporcional de ambos para renta, despensa, colegiaturas y fondo familiar.</p>
      </div>
      <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
        <p className="font-bold text-purple-400 text-sm">Bolsa de Ella</p>
        <p className="text-[11px] text-slate-300 mt-1">Cuenta personal individual para total autonomía y disfrute de sus ingresos propios.</p>
      </div>
    </div>
  </div>
);

const RoadmapTimelineTool = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
      <Calendar className="text-emerald-400" size={18} />
      Emparejamiento de Metas e Instrumentos Financieros
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-emerald-500">
        <p className="font-bold text-emerald-400">Corto Plazo (1-2 años)</p>
        <p className="text-white font-semibold mt-1">CETES 28D / BONDIA</p>
        <p className="text-[10px] text-slate-400 mt-1">Cero riesgo bursátil. Fondo de emergencia, viajes o pago de colegiaturas inmediatas.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-amber-500">
        <p className="font-bold text-amber-400">Mediano Plazo (3-5 años)</p>
        <p className="text-white font-semibold mt-1">Udibonos / Bonos M / FIBRAS</p>
        <p className="text-[10px] text-slate-400 mt-1">Protección contra inflación más cupón de renta. Enganche de casa o maestría.</p>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
        <p className="font-bold text-blue-400">Largo Plazo (6-10+ años)</p>
        <p className="text-white font-semibold mt-1">ETFs S&P 500 / All-World / PPR</p>
        <p className="text-[10px] text-slate-400 mt-1">Máxima capitalización con interés compuesto deducible para retiro y libertad financiera.</p>
      </div>
    </div>
  </div>
);

const MasterPlanRubric = () => (
  <div className="mt-4 bg-slate-900 rounded-xl border border-slate-700 p-5 shadow-xl">
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="text-emerald-400" size={20} />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Rúbrica Institucional: Plan Maestro de Finanzas Personales</h4>
      </div>
      <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
        Graduación Fase 6
      </span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-500">
        <p className="font-bold text-white">1. Presupuesto 50/30/20</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Tasa de ahorro e inversión &gt;= 20% mensual auditada.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-teal-500">
        <p className="font-bold text-white">2. Fondo de Emergencia</p>
        <p className="text-[10px] text-slate-400 mt-0.5">3 a 6 meses de gastos fijos en CETES/BONDIA.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-blue-500">
        <p className="font-bold text-white">3. Pólizas de Blindaje</p>
        <p className="text-[10px] text-slate-400 mt-0.5">SGMM con tope de coaseguro y vida temporal activo.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-500">
        <p className="font-bold text-white">4. Deuda &lt; 30%</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Cero deudas de consumo caras y plan hipotecario sano.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-purple-500">
        <p className="font-bold text-white">5. Optimización SAT</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Deducción de PPR y salud bajo Art. 151 LISR.</p>
      </div>
      <div className="bg-slate-800 p-2.5 rounded-lg border-l-4 border-rose-500">
        <p className="font-bold text-white">6. Orden Sucesorio</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Beneficiarios bancarios/bursátiles y testamento notarial.</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 6 ---

export default function CoursePlayerPhase6() {
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
      const saved = localStorage.getItem('fa_phase_6_progress');
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
      localStorage.setItem('fa_phase_6_progress', currentLesson.toString());
      localStorage.setItem('fa_phase_6_total', moduleData.lessons.length.toString());
    } catch (e) {
      // ignore
    }
    if (user) {
      updateProgress(6, currentLesson, moduleData.lessons.length);
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
      submitTestResult(6, calculatedScore, quizQuestions.length);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📊 *Certificación Aprobada - Fase 6 (Finanzas Personales Operativas)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Acreditado en Presupuesto 50/30/20, Fondo de Emergencia, Seguros SGMM, Hipotecas, Optimización Fiscal SAT y Plan Sucesorio. Solicitud de diploma oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'budget_tool': return <BudgetTool />;
      case 'emergency_fund_tool': return <EmergencyFundTool />;
      case 'insurance_tool': return <InsuranceTool />;
      case 'mortgage_tool': return <MortgageTool />;
      case 'tax_optimization_tool': return <TaxOptimizationTool />;
      case 'estate_planning_tool': return <EstatePlanningTool />;
      case 'couple_finance_tool': return <CoupleFinanceTool />;
      case 'roadmap_timeline_tool': return <RoadmapTimelineTool />;
      case 'master_plan_rubric': return <MasterPlanRubric />;
      default: return null;
    }
  };

  // VISTA DEL EXAMEN FINAL FASE 6
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO 
          title="Examen Final: Fase 6 - Finanzas Personales Operativas | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 6 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/6"
        />
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 6: Finanzas Personales Operativas
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas rigurosas sobre Presupuesto 50/30/20, Colchón de Emergencia, Seguros, Hipotecas, SAT y Sucesión.
            </p>
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
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
                            ? 'bg-emerald-600 border-emerald-400 text-white font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-emerald-900/30 cursor-pointer"
                >
                  Terminar Evaluación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-emerald-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(16,185,129,0.25)]">
                <div className="text-6xl mb-4">
                  {score >= 8 ? '🏆' : score >= 6 ? '📈' : '📚'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {score >= 8 ? '¡Aprobado con Distinción!' : score >= 6 ? 'Módulo Completado' : 'Requiere Repaso'}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Calificación Oficial: <span className="text-emerald-400 font-bold text-xl">{score} / {quizQuestions.length}</span>
                </p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-1000" 
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
        title={`Fase 6: ${lessonData.title} | FA Academy`}
        description={`Lección ${currentLesson + 1} de la Fase 6 de FA Academy: ${lessonData.content}`}
        url="https://fa-academy.vercel.app/course/phase/6"
      />
      
      {/* HEADER CON BADGE BÁSICO EXACTO */}
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
              <Building2 className="text-white" size={20} strokeWidth={2.5}/>
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest hidden md:block">BÁSICO</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-emerald-500/20">
              {moduleData.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
            {lessonData.title}
          </h1>
        </div>

        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Building2 size={120} className="text-slate-500" />
          </div>
          <ErrorBoundary fallbackMessage="Error al cargar el módulo visual">
            {renderVisual(lessonData.visualType)}
          </ErrorBoundary>
        </div>

        <div className="space-y-6 mb-8 animate-fade-in">
          {/* Disclaimer visible obligatorio */}
          <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-emerald-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Toda decisión patrimonial debe adaptarse a tus metas individuales."}</span>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-lg">
            <p className="text-lg md:text-xl text-emerald-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="flex gap-4 items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
            <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0">
              <Brain size={20} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {lessonData.details}
              </p>
              {lessonData.speakerNotes && (
                <p className="mt-4 text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex gap-2">
                  <span className="text-emerald-400 font-bold not-italic">💡 Tip FA Academy:</span>
                  {lessonData.speakerNotes}
                </p>
              )}
            </div>
          </div>

          {/* Caso Real Fechado de Mercado */}
          {(lessonData as any).realExample && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-emerald-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
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
                  className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {(lessonData as any).realExample.source} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* Ejercicio con Entregable Práctico */}
          {(lessonData as any).deliverableExercise && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText size={15} /> Ejercicio con Entregable Práctico
              </span>
              <h4 className="text-sm font-bold text-white mb-1">{(lessonData as any).deliverableExercise.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).deliverableExercise.description}</p>
              <textarea 
                placeholder="Escribe aquí tu balance, cálculo presupuestario o respuestas del ejercicio..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 outline-none focus:ring-1 focus:ring-emerald-500 min-h-[70px]"
              />
            </div>
          )}

          {lessonData.concepts && (
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-400" />
                Conceptos Clave de la Lección
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lessonData.concepts.map((c, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-xs font-bold text-emerald-300 mb-1">{c.term}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz interactivo por lección con retroalimentación inmediata */}
          {activeQuizzes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-emerald-500/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
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
                      <span className="text-xs bg-slate-800 text-emerald-400 px-2 py-0.5 rounded font-bold">{qIdx + 1}</span>
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
                          btnStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold';
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
                  idx === currentLesson ? 'bg-emerald-500 scale-125' : 'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
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
