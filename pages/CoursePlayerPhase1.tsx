import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, TrendingUp, Activity,
  Target, Send, Info, BookOpen, Calculator,
  ShieldCheck, Landmark, Brain, Quote,
  AlertTriangle, Layers, UserCheck, Newspaper,
  CheckCircle, ChevronRight, Book, Scale, Building2,
  PlayCircle, Clock, ExternalLink, FileText, CheckCircle2, XCircle, HelpCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';

// --- DATOS FA ACADEMY: MÓDULO 1 (FUNDAMENTOS Y MENTALIDAD FINANCIERA - 7 LECCIONES) ---

const courseData = [
  {
    id: 1,
    title: "FA Academy: Fundamentos y Mentalidad Financiera",
    description: "Rompe tus barreras psicológicas, diagnostica tu salud financiera y comprende las matemáticas del interés compuesto antes de comprar tu primera acción.",
    lessons: [
      {
        title: "El Perfil del Inversionista 2026",
        content: "Tu perfil no es estático; es la intersección entre tu capacidad financiera y tu estabilidad psicológica.",
        details: "Según la Asociación Mexicana de Instituciones Bursátiles (AMIB), el error más costoso del inversionista retail en México es saltarse el diagnóstico patrimonial empujado por el 'FOMO' (miedo a quedarse fuera). Tu perfil evoluciona con tu edad, ingresos y responsabilidades familiares. Se divide en tres dimensiones innegociables: Capacidad de Asumir Riesgo (tiempo y flujo de caja libre), Tolerancia Psicológica al Riesgo (capacidad de ver fluctuaciones del -20% sin vender en pánico) y Necesidad de Riesgo (tasa requerida para alcanzar tus metas). Para objetivos de corto plazo (1 a 2 años), se utiliza renta fija soberana (CETES). Para el retiro a 20 o 30 años, la renta variable global es indispensable.",
        visualType: "investor_profile",
        videoUrls: ["QcvcUhi0jj8"],
        videoTitle: "Clase Magistral: Determinación del Perfil del Inversionista y Tolerancia al Riesgo",
        videoDuration: "18 min",
        disclaimer: "Educación, no asesoría financiera. El diagnóstico de perfil no garantiza rendimientos ni inmunidad ante la volatilidad.",
        quote: {
          text: "Antes de invertir, debes realizar un diagnóstico riguroso de tu salud financiera. No puedes invertir dinero que vas a necesitar para pagar la renta el próximo mes. El perfil se define por la intersección entre tu capacidad financiera y tu estabilidad psicológica.",
          author: "Guía de Educación Financiera, CONDUSEF"
        },
        speakerNotes: "El FOMO te empuja a comprar cuando todo está en máximos y las redes sociales celebran. Conocer tu perfil te otorga la disciplina para apagar las pantallas cuando el mercado entra en corrección.",
        concepts: [
          { term: "AMIB", def: "Asociación Mexicana de Instituciones Bursátiles; certifica y regula la ética y conocimientos de los operadores bursátiles en México." },
          { term: "FOMO (Fear Of Missing Out)", def: "Sesgo emocional que empuja a comprar precipitadamente por miedo a perderse una subida de precios." },
          { term: "Horizonte de Inversión", def: "Lapso temporal exacto en el que mantendrás el capital invertido antes de necesitar disponer de él." }
        ],
        realExample: {
          asset: "Diagnóstico de Perfil de Riesgo (Directrices AMIB)",
          date: "Normativa AMIB / CNBV vigente 2026",
          source: "Asociación Mexicana de Instituciones Bursátiles (AMIB)",
          url: "https://www.amib.com.mx/",
          caseDescription: "Caso de Inversionista de 28 años con sueldo fijo y fondo de emergencia de 3 meses. Clasificado como Perfil Moderado-Crecimiento con horizonte de 15 años para retiro. Durante la corrección bursátil de 2024 (-12% en el S&P 500), mantuvo sus aportaciones mensuales automatizadas sin liquidar posiciones, recuperando y superando el máximo patrimonial en 7 meses."
        },
        deliverableExercise: {
          title: "Ficha de Autodiagnóstico de Perfil y Tolerancia al Riesgo",
          description: "Escribe en el recuadro tus 3 respuestas: 1) ¿En cuántos años necesitarás este capital? 2) Si tu cuenta cae un 20% el próximo mes, ¿vendes, esperas o compras más? 3) Define si tu perfil actual es Conservador, Moderado o Agresivo."
        },
        quizzes: [
          {
            question: "¿Cuáles son las tres dimensiones que definen el perfil de un inversionista según las directrices de la AMIB?",
            options: [
              "Tu signo zodiacal, tu banco favorito y cuántos seguidores tienes en redes.",
              "Capacidad financiera de riesgo, tolerancia psicológica a la volatilidad y horizonte temporal de la meta.",
              "La cantidad de tarjetas de crédito y tu saldo en cuenta corriente.",
              "El modelo de tu teléfono y si haces trading intradía."
            ],
            correct: 1,
            explanation: "El perfil profesional cruza la capacidad objetiva de absorber pérdidas con la estabilidad psicológica y el tiempo disponible para recuperarse."
          },
          {
            question: "Si vas a necesitar el dinero de tu inversión dentro de 8 meses para pagar el enganche de una casa, ¿qué instrumento es el más adecuado?",
            options: [
              "Acciones tecnológicas de alta volatilidad en Wall Street.",
              "Opciones financieras apalancadas.",
              "Instrumentos de renta fija soberana a corto plazo (ej. CETES a 28 o 180 días) con tasa conocida y capital garantizado.",
              "Criptomonedas de reciente creación."
            ],
            correct: 2,
            explanation: "Para horizontes menores a un año, la renta fija gubernamental libre de riesgo protege el capital contra las caídas de corto plazo del mercado accionario."
          },
          {
            question: "¿Qué es el sesgo emocional del 'FOMO' (Fear Of Missing Out) y por qué destruye el patrimonio de los novatos?",
            options: [
              "Es una comisión que cobra la Bolsa Mexicana de Valores.",
              "Es la urgencia psicológica irracional de comprar activos que ya subieron mucho por miedo a quedarse fuera, comprando justo en el techo de mercado.",
              "Es un trámite fiscal obligatorio ante el SAT.",
              "Es un tipo de orden de venta con stop loss."
            ],
            correct: 1,
            explanation: "El FOMO provoca que el inversionista compre eufórico en máximos históricos y venda aterrorizado cuando sobreviene la corrección natural del precio."
          }
        ]
      },
      {
        title: "Matemáticas: El Poder del Interés Compuesto",
        content: "El lenguaje universal del dinero: comprende la diferencia entre tasa nominal y tasa real descontando la inflación.",
        details: "En 2026, el Banco de México (Banxico) mantiene su objetivo de inflación en torno al 3.0% (+/- 1 punto porcentual). Como supuesto didáctico ilustrativo para entender el cálculo de la Tasa Real: si una inversión nominal te promete pagar un 9.0% anual y enfrentaras una inflación hipotética del 4.5%, tu riqueza real no crece un 9%, sino que se reduce por el efecto inflacionario según la fórmula de Fisher: $(1 + r) = (1 + i) / (1 + \\pi)$. La tasa real aproximada es $9.0\\% - 4.5\\% = 4.5\\%$. El Interés Compuesto ($VF = VP \\times (1 + i)^n$) es el proceso donde las utilidades generadas se reinvierten para generar nuevos rendimientos sobre rendimientos anteriores, convirtiendo el tiempo en un acelerador exponencial de riqueza.",
        visualType: "financial_math",
        videoUrls: ["9QI0Q-eibUE"],
        videoTitle: "Matemáticas Financieras: El Impacto de la Tasa Real y la Magia del Interés Compuesto",
        videoDuration: "15 min",
        disclaimer: "Educación, no asesoría financiera. La inflación del 4.5% se utiliza como ejemplo didáctico ilustrativo; la meta constitucional de Banxico se ubica en el 3.0%.",
        speakerNotes: "Entender la 'Tasa Real' te salvará de pagarés bancarios engañosos. Un banco tradicional que te ofrece 5% nominal cuando la inflación es 4.5% te está dejando con apenas 0.5% real antes de impuestos.",
        concepts: [
          { term: "Inflación (Banxico)", def: "Pérdida del poder adquisitivo del dinero; el objetivo constitucional permanente de Banxico es 3.0% (+/- 1%)." },
          { term: "Tasa Nominal", def: "El porcentaje bruto de ganancia estipulado en el contrato antes de descontar inflación e impuestos." },
          { term: "Tasa Real (Ecuación Fisher)", def: "El rendimiento verdadero en poder de compra: aproximadamente Tasa Nominal menos Tasa de Inflación." }
        ],
        realExample: {
          asset: "Tasa de Rendimiento CETES 28D vs Inflación General Banxico",
          date: "Datos oficiales de mercado al 2026-11-07",
          source: "Banco de México (Banxico) / INEGI",
          url: "https://www.banxico.org.mx/publicaciones-y-prensa/anuncios-de-las-decisiones-de-politica-monetaria/",
          caseDescription: "Con una tasa de referencia de CETES 28D en 10.20% nominal anual y una inflación anualizada en torno al 3.8%, la Tasa Real neta aproximada que obtiene el ahorrador es de +6.40% anual. En contraste, una cuenta corriente tradicional al 1.5% nominal destruye un -2.30% de poder de compra real al año."
        },
        deliverableExercise: {
          title: "Cálculo de Rendimiento Real de tus Cuentas Bancarias",
          description: "Revisa la carátula de tu cuenta de ahorro o pagaré actual. Anota la Tasa Nominal (GAT Nominal), resta la inflación proyectada de Banxico (3.5%) y calcula tu Tasa Real de ganancia o pérdida de poder adquisitivo."
        },
        quizzes: [
          {
            question: "Si una institución financiera te ofrece un pagaré al 7.0% nominal anual y la inflación registrada en el periodo es del 4.0%, ¿cuál es tu tasa real aproximada de ganancia?",
            options: [
              "+11.0% anual.",
              "+3.0% anual en poder adquisitivo real (7.0% - 4.0% = 3.0%).",
              "-3.0% anual.",
              "Exactamente 0%."
            ],
            correct: 1,
            explanation: "La tasa real descuenta la inflación: 7.0% nominal menos 4.0% de inflación resulta en una ganancia neta de poder adquisitivo del 3.0%."
          },
          {
            question: "En la fórmula del interés compuesto VF = VP × (1 + i)^n, ¿cuál es la variable más determinante para generar riqueza exponencial a largo plazo?",
            options: [
              "El banco donde abriste la cuenta.",
              "El exponente 'n' (el número de periodos / tiempo en que el dinero permanece reinvirtiéndose).",
              "El color de tu tarjeta de débito.",
              "La comisión por apertura."
            ],
            correct: 1,
            explanation: "El factor tiempo 'n' actúa de manera exponencial: a mayor número de años permitiendo la reinversión de utilidades, mayor es el efecto multiplicador sobre el patrimonio."
          },
          {
            question: "¿Cuál es el objetivo constitucional de inflación fijado permanentemente por el Banco de México (Banxico)?",
            options: [
              "10% anual.",
              "3.0% anual con un rango de variabilidad admisible de +/- 1 punto porcentual (entre 2% y 4%).",
              "0% absoluto de inflación.",
              "Cualquier cifra que decidan los bancos comerciales."
            ],
            correct: 1,
            explanation: "El mandato de Banxico de procurar la estabilidad del poder adquisitivo fija como meta central el 3.0% anual con un intervalo de tolerancia de 2.0% a 4.0%."
          }
        ]
      },
      {
        title: "El Ecosistema: Sistema Financiero Mexicano",
        content: "Conoce a los árbitros oficiales que regulan las instituciones y protegen tu capital.",
        details: "El Sistema Financiero Mexicano está estrictamente regulado para proteger los ahorros del público, pero esa protección solo aplica si operas a través de intermediarios autorizados por la Comisión Nacional Bancaria y de Valores (CNBV). La cúspide reguladora está encabezada por la Secretaría de Hacienda (SHCP) y Banxico. La CNBV supervisa a los bancos, casas de bolsa y SOFIPOs; la CONDUSEF defiende los derechos del usuario financiero; y el Instituto para la Protección al Ahorro Bancario (IPAB) garantiza los depósitos bancarios hasta por 400,000 UDIs (~$3.4 millones de MXN). En el ámbito bursátil, operan dos bolsas de valores reguladas: la Bolsa Mexicana de Valores (BMV) y la Bolsa Institucional de Valores (BIVA).",
        visualType: "mexican_system_table",
        disclaimer: "Educación, no asesoría financiera. Verifica siempre que tu intermediario cuente con registro ante la CNBV y aparezca en el padrón del SIPRES.",
        newsSnippet: {
          title: "Supervisión Bursátil y Protección al Inversionista",
          text: "La CNBV y la CONDUSEF exhortan a la población a utilizar exclusivamente intermediarios con registro oficial en el SIPRES para evitar esquemas piramidales no autorizados.",
          source: "Comunicado Oficial CNBV / CONDUSEF 2026"
        },
        speakerNotes: "Nunca entregues tu dinero a plataformas extranjeras sin sede en México o a supuestos 'fondos' que prometen rendimientos fijos mensuales del 10%. Usa el buscador del SIPRES de la CONDUSEF: si no aparece, es fraude.",
        concepts: [
          { term: "CNBV", def: "Comisión Nacional Bancaria y de Valores; órgano desconcentrado que supervisa y sanciona a los intermediarios del sistema financiero." },
          { term: "SIPRES", def: "Sistema de Registro de Prestadores de Servicios Financieros de la CONDUSEF; padrón público oficial de entidades legales en México." },
          { term: "IPAB", def: "Instituto para la Protección al Ahorro Bancario; asegura las cuentas de cheques, nómina y pagarés bancarios hasta por 400,000 UDIs." }
        ],
        realExample: {
          asset: "Padrón Oficial de Entidades Financieras Autorizadas (SIPRES)",
          date: "Registro actualizado 2026",
          source: "CONDUSEF / Comisión Nacional Bancaria y de Valores",
          url: "https://webapps.condusef.gob.mx/SIPRES/jsp/pub/index.jsp",
          caseDescription: "Al consultar 'Grupo Bursátil Mexicano, S.A. de C.V. Casa de Bolsa' en el SIPRES, se confirma su clave de registro oficial otorgada por la CNBV, su dirección fiscal en CDMX y su carácter de entidad regulada por la Ley del Mercado de Valores, garantizando que los títulos de los clientes se custodian en el INDEVAL."
        },
        deliverableExercise: {
          title: "Verificación de Institución Financiera en el SIPRES",
          description: "Entra al portal del SIPRES (CONDUSEF), busca la casa de bolsa o banco donde planeas abrir cuenta de inversión y verifica su estatus regulatorio, número de registro y sector oficial."
        },
        quizzes: [
          {
            question: "¿Qué organismo público es el encargado de supervisar, autorizar y sancionar a las casas de bolsa y bancos en México?",
            options: [
              "La PROFECO.",
              "La Comisión Nacional Bancaria y de Valores (CNBV).",
              "La Cámara de Diputados.",
              "La Asociación de Colonos."
            ],
            correct: 1,
            explanation: "La CNBV es el árbitro federal facultado por ley para autorizar, auditar y regular a las instituciones financieras y bursátiles en el país."
          },
          {
            question: "¿Hasta qué monto garantiza el seguro del IPAB los depósitos bancarios de un ahorrador por institución bancaria?",
            options: [
              "Hasta 10,000 pesos.",
              "Hasta 400,000 Unidades de Inversión (UDIs), equivalentes a más de $3.4 millones de pesos mexicanos.",
              "No existe ninguna garantía gubernamental.",
              "Garantiza el 100% de cualquier cantidad sin límite."
            ],
            correct: 1,
            explanation: "Por ley, el IPAB cubre automáticamente a cada depositante hasta por 400,000 UDIs por banco, protegiendo cuentas de cheques, ahorro y depósitos a plazo."
          },
          {
            question: "¿Cómo puedes comprobar con certeza jurídica si una supuesta empresa de inversiones por internet es legal y está regulada en México?",
            options: [
              "Viendo si tienen muchos seguidores en TikTok o Instagram.",
              "Consultando su razón social en el portal del SIPRES de la CONDUSEF.",
              "Creyendo en la palabra del asesor que te contactó por WhatsApp.",
              "Si te ofrecen un rendimiento garantizado del 20% al mes."
            ],
            correct: 1,
            explanation: "El SIPRES es el registro oficial del Estado mexicano: toda entidad no inscrita en el SIPRES carece de autorización para captar dinero del público inversionista."
          }
        ]
      },
      {
        title: 'El "Por Qué" antes del "Cómo": Objetivos SMART',
        content: "Cómo formular un objetivo financiero medible y seleccionar el vehículo exacto para alcanzarlo.",
        details: "El error inicial más recurrente es decir 'quiero invertir para tener más dinero'. El dinero sin un destino específico suele malgastarse ante la primera tentación de consumo. Un objetivo de inversión debe construirse bajo la metodología SMART: Específico (Specific), Medible (Measurable), Alcanzable (Achievable), Relevante (Relevant) y con un Tiempo definido (Time-bound). No es lo mismo invertir para comprar un automóvil dentro de 24 meses (requiere deuda soberana a corto plazo y cero riesgo de renta variable) que construir un fondo para tu retiro en 25 años (requiere renta variable indexada para superar a la inflación).",
        visualType: "financial_goals",
        quote: {
          text: "El dinero sin un propósito claro es dinero que se gasta fácil. Cuando pones nombre, fecha y monto exacto a tu inversión, la disciplina operativa se vuelve inquebrantable.",
          author: "Metodología FA Academy"
        },
        disclaimer: "Educación, no asesoría financiera. La formulación de metas debe considerar tu nivel de ingresos reales y fondo de reserva.",
        speakerNotes: "Escribe tu meta con monto y fecha en una nota visible cerca de tu pantalla. Cada vez que el mercado caiga y sientas miedo, recuerda si esa caída altera tu meta a 20 años.",
        concepts: [
          { term: "Metas SMART", def: "Objetivos financieros específicos, medibles, alcanzables, relevantes y con fecha límite estricta." },
          { term: "Alineación de Vehículo", def: "Seleccionar el activo correcto según el plazo de la meta (corto plazo = Cetes; largo plazo = ETFs globales)." },
          { term: "Aportación Sistemática", def: "Inyección mensual fija de ahorro directamente al portafolio antes de destinar dinero a gastos discrecionales." }
        ],
        realExample: {
          asset: "Plan Financiero SMART con Aportación Indexada (S&P 500 / CETES)",
          date: "Caso didáctico 2026-11-07",
          source: "FA Academy / Calculadoras Financieras",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Meta SMART redactada: 'Acumular $1,000,000 MXN para el enganche de una propiedad en exactamente 8 años aportando $7,000 MXN mensuales en un portafolio equilibrado 60/40 con rendimiento esperado del 9.5% nominal'. La meta tiene monto, plazo, vehículo y aportación requerida calculada."
        },
        deliverableExercise: {
          title: "Redacción de tu Meta de Inversión SMART",
          description: "Escribe tu objetivo personal cumpliendo los 5 componentes SMART: 1) Monto meta en MXN, 2) Fecha límite de entrega, 3) Por qué es relevante para ti, 4) Vehículo bursátil alineado al plazo, 5) Aportación mensual obligatoria."
        },
        quizzes: [
          {
            question: "¿Cuál de las siguientes metas de inversión está correctamente formulada bajo el marco metodológico SMART?",
            options: [
              "'Quiero ser millonario pronto en la bolsa.'",
              "'Acumular $500,000 MXN en exactamente 5 años aportando $6,200 MXN mensuales en un portafolio de ETFs y Cetes para remodelar mi casa.'",
              "'Comprar acciones de cualquier empresa que suba mañana.'",
              "'Ahorrar lo que me sobre al final de cada mes si no salgo de fiesta.'"
            ],
            correct: 1,
            explanation: "Tiene monto ($500k), plazo (5 años), aportación definida ($6,200/mes), instrumento (ETFs y Cetes) y propósito concreto (remodelación)."
          },
          {
            question: "Si tu meta financiera tiene un horizonte de tiempo de 18 meses, ¿por qué es desaconsejable invertir el 100% de ese dinero en acciones individuales de la BMV o Wall Street?",
            options: [
              "Porque la bolsa cierra los fines de semana.",
              "Porque la renta variable puede atravesar un ciclo correctivo temporal que dure 12 a 24 meses, obligándote a vender con pérdidas cuando necesites el dinero.",
              "Porque el SAT retiene el 100% de la ganancia en menos de un año.",
              "Porque las acciones solo se pueden vender después de 10 años."
            ],
            correct: 1,
            explanation: "La volatilidad del mercado accionario exige un horizonte mínimo de 3 a 5 años para permitir que la tendencia de crecimiento fundamental diluya las correcciones transitorias."
          },
          {
            question: "¿En qué consiste el principio de 'Pagarte a ti mismo primero' al inicio de cada mes?",
            options: [
              "Comprarte un regalo con tarjeta de crédito en cuanto recibes tu sueldo.",
              "Transferir inmediatamente tu aportación de ahorro e inversión en cuanto te depositan la nómina, viviendo con el saldo restante.",
              "Pagar todas las suscripciones de streaming por adelantado.",
              "Prestar dinero a amigos para que te paguen intereses."
            ],
            correct: 1,
            explanation: "Ahorrar lo que sobra al final de mes casi nunca funciona; automatizar la inversión al recibir el ingreso garantiza el cumplimiento del plan."
          }
        ]
      },
      {
        title: "Deuda vs. Inversión (Deuda Cara vs. Deuda Barata)",
        content: "Sana tus finanzas: comprende por qué es un suicidio matemático invertir con tarjetas de crédito con CAT superior al 65%.",
        details: "Es matemáticamente insostenible pretender construir riqueza invirtiendo en el mercado accionario (esperando un retorno histórico de 10% a 12% anual en pesos) si simultáneamente arrastras deudas en tarjetas de crédito bancarias o departamentales que te cobran entre el 50% y el 80% de Costo Anual Total (CAT) según los reportes oficiales del Banco de México y la CONDUSEF. Antes de adquirir tu primera acción o ETF, debes clasificar tus pasivos: Deuda Cara (CAT > 25%, préstamos personales, tarjetas de crédito, créditos de nómina) que debe ser erradicada con urgencia agresiva; y Deuda Estructurada o Barata (CAT < 12%, créditos hipotecarios o educativos) cuya tasa puede convivir con una estrategia disciplinada de inversión a largo plazo.",
        visualType: "debt_vs_investment",
        disclaimer: "Educación, no asesoría financiera. Si mantienes deudas de consumo de alto interés, destina tu excedente de flujo de efectivo a liquidarlas antes de operar en bolsa.",
        speakerNotes: "Pagar una deuda que te cobra el 65% de CAT equivale a obtener un rendimiento GARANTIZADO y libre de riesgo del 65% libre de impuestos. Ningún fondo de inversión en el mundo puede ofrecerte eso.",
        concepts: [
          { term: "CAT (Costo Anual Total)", def: "Métrica oficial que engloba la tasa de interés, comisiones de apertura, anualidades y seguros de un crédito expresada en % anual." },
          { term: "Deuda Tóxica / Cara", def: "Créditos al consumo con CAT superior al 25% anual que absorben tu flujo de caja mensual y destruyen tu capacidad de ahorro." },
          { term: "Deuda Estructurada / Barata", def: "Financiamiento a tasas bajas fijas (ej. hipotecas al 9-11%) para adquirir activos de larga duración." }
        ],
        realExample: {
          asset: "Comparativa de Tasas: CAT Promedio Tarjetas Bancarias en México vs S&P 500",
          date: "Estadísticas del Banco de México y CONDUSEF al 2026",
          source: "Banco de México / CONDUSEF",
          url: "https://www.condusef.gob.mx/",
          caseDescription: "El CAT promedio ponderado de tarjetas de crédito clásicas en México supera el 65% anual (alcanzando más del 100% en tarjetas no totaleras). Frente al rendimiento histórico nominal del S&P 500 (~10% anual en USD) o CETES (10.20%), deber $50,000 MXN en tarjeta cuesta $32,500 en intereses al año, mientras que invertir esos mismos $50,000 en Cetes apenas genera $5,100 MXN. El diferencial neto destruye tu patrimonio."
        },
        deliverableExercise: {
          title: "Inventario de Pasivos y Cálculo del CAT Ponderado",
          description: "Haz una lista de todas tus deudas actuales indicando: saldo total pendiente, pago mínimo mensual y CAT anual. Identifica cuáles tienen CAT > 25% y formula tu plan bola de nieve o avalancha para liquidarlas."
        },
        quizzes: [
          {
            question: "Si tienes una deuda de $40,000 MXN en una tarjeta de crédito con un CAT del 70% anual y recibes un bono de $40,000 MXN, ¿qué decisión es matemáticamente la más rentable?",
            options: [
              "Comprar acciones de una empresa tecnológica esperando ganar un 15% en el año.",
              "Liquidar el saldo total de la tarjeta de crédito inmediatamente, ahorrándote un 70% anual garantizado en intereses.",
              "Dejar el dinero en una cuenta corriente al 2% anual.",
              "Pagar solo el monto mínimo de la tarjeta y gastar el resto."
            ],
            correct: 1,
            explanation: "Eliminar una deuda al 70% equivale a una rentabilidad garantizada y libre de riesgo del 70% anual: ningún instrumento formal ofrece ese rendimiento asegurado."
          },
          {
            question: "¿Cuál es la diferencia crítica entre 'Deuda Cara' y 'Deuda Barata o Estructurada'?",
            options: [
              "La deuda cara la cobran en dólares y la barata en pesos.",
              "La deuda cara proviene de consumo a tasas elevadas (CAT > 25%-30%), mientras que la deuda barata financia activos duraderos a tasas moderadas (CAT < 11%-12%, como hipotecas).",
              "No existe ninguna diferencia; toda deuda es idéntica ante la ley.",
              "La deuda barata nunca se paga al banco."
            ],
            correct: 1,
            explanation: "Las deudas de consumo destruyen flujo de caja; los créditos hipotecarios o de inversión a tasas bajas pueden convivir con carteras de inversión diversificadas."
          },
          {
            question: "¿Qué refleja el CAT (Costo Anual Total) que no muestra la simple tasa de interés nominal de un crédito?",
            options: [
              "El nombre del director general del banco.",
              "El costo financiero integral completo, incorporando comisiones por apertura, seguros obligatorios, anualidades y gastos de administración.",
              "La cotización del dólar en ventanilla bancaria.",
              "La ganancia neta de la casa de bolsa."
            ],
            correct: 1,
            explanation: "El CAT es la medida estandarizada por Banxico que revela el costo real total que pagará el cliente por cada peso financiado anualmente."
          }
        ]
      },
      {
        title: "El Costo de Esperar: 26 vs. 40 Años (Aplicación)",
        content: "La visualización matemática definitiva: por qué empezar a los 26 años supera por millones a arrancar a los 40 años.",
        details: "El costo de oportunidad de posponer el inicio de tus inversiones es el tributo más oneroso que paga un profesional. Analicemos dos inversionistas con rendimientos idénticos del 10% anual compuesto: 'Inversionista Temprano' ahorra e invierte $3,000 MXN al mes entre los 26 y los 36 años (únicamente 10 años de aportaciones, aportando un total de $360,000 MXN) y luego no aporta un solo peso más, dejando el dinero trabajar hasta los 65 años. 'Inversionista Tardío' empieza a los 40 años e invierte esos mismos $3,000 MXN cada mes durante 25 años ininterrumpidos hasta los 65 (aportando $900,000 MXN en total). Sorprendentemente, a los 65 años el Inversionista Temprano acumula más de $6.5 millones de MXN frente a los $3.9 millones del Inversionista Tardío. El tiempo invertido pesó más que el doble de dinero aportado.",
        visualType: "compound_interest_magic",
        disclaimer: "Educación, no asesoría financiera. Los rendimientos anuales del 10% son un supuesto didáctico basado en el promedio histórico nominal de largo plazo de los mercados bursátiles.",
        speakerNotes: "El activo más valioso que tienes hoy no es tu sueldo; son los años que te quedan por delante. No esperes a tener 'mucho dinero' para empezar; empieza con $100 pesos hoy en Cetes o acciones para activar el reloj del tiempo.",
        concepts: [
          { term: "Costo de Oportunidad", def: "El rendimiento que dejas de ganar en el futuro por cada mes que postergas la decisión de invertir tu capital disponible." },
          { term: "Apalancamiento Temporal", def: "La multiplicación de riqueza generada cuando las ganancias de los primeros años se reinvierten durante décadas." },
          { term: "Efecto Bola de Nieve", def: "Fase donde los intereses ganados anualmente superan con creces el monto total de tus aportaciones de ahorro laboral." }
        ],
        realExample: {
          asset: "Simulación Histórica de Aportación 26 vs 40 Años en Bolsa Mexicana / Wall Street",
          date: "Proyección temporal 2026-2065",
          source: "FA Academy / Tablas Actuariales",
          url: "https://fa-academy.vercel.app/tools",
          caseDescription: "Inversionista A (inicio 26 años, $3,000/mes por 10 años, aportó $360k). Capital a los 65 años al 10% anual: $6,540,000 MXN. Inversionista B (inicio 40 años, $3,000/mes por 25 años, aportó $900k). Capital a los 65 años: $3,980,000 MXN. Iniciar 14 años antes generó $2.5 millones extra aportando menos de la mitad."
        },
        deliverableExercise: {
          title: "Simulación de tu Escenario de Jubilación con el Costo de Esperar",
          description: "Entra a la calculadora de Interés Compuesto de FA Academy, ingresa tu edad actual, tu aportación mensual posible y simula tu patrimonio a los 60 años. Luego repite el cálculo asumiendo que comienzas 10 años después y calcula la diferencia en pesos de no arrancar hoy."
        },
        quizzes: [
          {
            question: "En el caso comparativo de dos inversionistas con la misma tasa de rendimiento, ¿por qué quien inicia a los 26 años y solo aporta durante 10 años supera a quien inicia a los 40 y aporta durante 25 años?",
            options: [
              "Porque la bolsa le cobra menos comisiones a los jóvenes.",
              "Porque el capital aportado en la juventud tiene casi 4 décadas completas para reinvertirse y multiplicarse de forma exponencial.",
              "Porque el gobierno le otorga un subsidio adicional.",
              "Por pura suerte estadística."
            ],
            correct: 1,
            explanation: "El tiempo de permanencia es exponencial: las ganancias acumuladas durante los primeros 10 años continúan capitalizándose por sí solas durante 30 años adicionales."
          },
          {
            question: "¿Cuál es el monto mínimo requerido para abrir una cuenta de inversión bursátil formal en una casa de bolsa regulada en México en 2026?",
            options: [
              "$500,000 pesos mexicanos en efectivo.",
              "Desde $100 pesos mexicanos a través de plataformas digitales reguladas por la CNBV.",
              "$50,000 dólares estadounidenses.",
              "Tener una propiedad escriturada a tu nombre."
            ],
            correct: 1,
            explanation: "La digitalización del mercado bursátil mexicano permite abrir contratos de intermediación e invertir en Cetes o acciones fraccionadas desde apenas $100 MXN."
          },
          {
            question: "¿Qué ocurre si esperas a 'ganar el doble de sueldo' para comenzar a ahorrar e invertir?",
            options: [
              "Que pierdes años irreemplazables de capitalización compuesta y sueles incrementar tu estilo de vida proporcionalmente (inflación del estilo de vida).",
              "Que automáticamente te jubilas con el triple de pensión.",
              "Que los bancos te regalan acciones de empresas.",
              "Que la inflación deja de afectar tu dinero."
            ],
            correct: 0,
            explanation: "Postergar el inicio por esperar mayores ingresos activa la 'inflación de estilo de vida' y consume los años más potentes del interés compuesto."
          }
        ]
      },
      {
        title: "Introducción al Mercado de Valores: El Flujo Real del Dinero",
        content: "Cómo viaja una orden bursátil desde tu aplicación móvil hasta el corro electrónico y la custodia central del INDEVAL.",
        details: "Comprar una acción no es un juego digital: es adquirir una fracción de la propiedad legal de una empresa pública. Cuando colocas una orden de compra en tu casa de bolsa regulada (ej. GBM, Bursanet), la orden viaja a través del sistema electrónico de negociación de la Bolsa Mexicana de Valores (BMV) o de la Bolsa Institucional de Valores (BIVA) para cruzarse con una orden de venta al mejor precio de mercado. Una vez concretada la operación, la liquidación estándar se realiza en periodo T+1 (un día hábil bursátil). La titularidad legal de tus títulos no se queda en el servidor de tu bróker: se registra y resguarda a tu nombre en el S.D. INDEVAL (Institución para el Depósito de Valores), garantizando que si tu casa de bolsa llega a quebrar, tus acciones permanecen seguras y pueden ser transferidas a otro intermediario sin perder un solo título.",
        visualType: "system_intro",
        disclaimer: "Educación, no asesoría financiera. Toda compra de acciones en bolsa está sujeta a fluctuaciones del precio de mercado y riesgo de liquidez.",
        speakerNotes: "El INDEVAL es el gran garante del mercado bursátil en México. Tu casa de bolsa es solo la ventanilla que tramita tus órdenes; tus acciones están custodiadas a nivel central y nadie puede despojarte de ellas.",
        concepts: [
          { term: "INDEVAL", def: "S.D. Indeval; depositario central de valores en México que custodia, administra y liquida todos los títulos y valores bursátiles." },
          { term: "Liquidación T+1", def: "Estándar de mercado donde la entrega de los títulos y el intercambio del dinero se concreta al día hábil siguiente de la operación." },
          { term: "Casa de Bolsa", def: "Intermediario financiero autorizado por la CNBV para ejecutar órdenes de compra y venta en las bolsas de valores mexicanas." }
        ],
        realExample: {
          asset: "Ruta de una Orden de Compra de Acciones en la BMV / INDEVAL",
          date: "Operativa bursátil vigente 2026",
          source: "Bolsa Mexicana de Valores / S.D. INDEVAL",
          url: "https://www.bmv.com.mx/",
          caseDescription: "Inversionista ingresa una orden de compra Limitada por 10 acciones de Grupo Aeroportuario del Sureste ($ASURB) a $520.00 MXN en su aplicación de casa de bolsa. La orden ingresa al motor de matching de la BMV, se calza con una orden de venta institucional a las 11:24 am y se liquida en T+1. El INDEVAL anota electrónicamente la custodia de los 10 títulos bajo la cuenta global del intermediario con titularidad segregada del cliente."
        },
        deliverableExercise: {
          title: "Mapa del Flujo de Capital de tu Primera Orden Bursátil",
          description: "Dibuja o describe paso a paso cómo viajará tu dinero: 1) Cuenta bancaria personal (CLABE), 2) Transferencia SPEI a casa de bolsa regulada, 3) Colocación de orden de compra limitada, 4) Cruce en BMV/BIVA, 5) Custodia oficial en INDEVAL."
        },
        quizzes: [
          {
            question: "¿Qué función cumple el S.D. INDEVAL en el mercado de valores mexicano cuando compras acciones en bolsa?",
            options: [
              "Es la agencia que cobra las multas de tránsito.",
              "Es el depositario central oficial que resguarda electrónicamente la propiedad y custodia de todos los títulos valores del país.",
              "Es una empresa que presta dinero a tasas altas.",
              "Es el banco que emite las tarjetas de crédito."
            ],
            correct: 1,
            explanation: "El INDEVAL custodia centralizadamente todos los títulos del sistema financiero mexicano, asegurando que la quiebra de una casa de bolsa no afecte la propiedad de las acciones del cliente."
          },
          {
            question: "¿Qué significa que la liquidación de acciones en México y EE.UU. se realice bajo la modalidad 'T+1'?",
            options: [
              "Que debes esperar un año para vender tus acciones.",
              "Que la entrega legal de los títulos y la liquidación del efectivo se concreta al siguiente día hábil posterior a la fecha de ejecución (T = Transaction date).",
              "Que pagas una tasa de interés del 1% diario.",
              "Que solo puedes comprar acciones los días lunes."
            ],
            correct: 1,
            explanation: "El estándar bursátil internacional T+1 agiliza la liquidación: si compras el lunes, los títulos y el dinero se liquidan formalmente el martes hábil."
          },
          {
            question: "Si tu casa de bolsa autorizada por la CNBV llega a declararse en quiebra o pierde su licencia, ¿qué ocurre con tus acciones?",
            options: [
              "Pierdes el 100% de tus acciones de forma irrevocable.",
              "Tus títulos están custodiados a tu nombre en el INDEVAL, por lo que puedes solicitar su traspaso a otra casa de bolsa autorizada sin perder tu propiedad.",
              "El gobierno confisca las acciones.",
              "Las acciones se convierten automáticamente en dinero en efectivo."
            ],
            correct: 1,
            explanation: "La casa de bolsa no es dueña de tus acciones, solo es el agente intermediario. La custodia segregada en INDEVAL blinda tus activos ante problemas financieros del bróker."
          }
        ]
      }
    ]
  }
];

// --- BANCO DE PREGUNTAS DEL EXAMEN DE CERTIFICACIÓN DE FASE 1 (10 PREGUNTAS) ---

const quizQuestions = [
  {
    id: 1,
    question: "Según la AMIB, ¿qué tres factores objetivos e indispensables determinan el perfil de un inversionista?",
    options: [
      "Edad biológica únicamente.",
      "Capacidad financiera de asumir riesgo, tolerancia psicológica a la volatilidad y horizonte temporal de la meta.",
      "El número de cuentas bancarias que posee.",
      "El saldo disponible en tarjetas de crédito."
    ],
    correct: 1
  },
  {
    id: 2,
    question: "En un ejercicio didáctico con rendimiento nominal del 9.0% anual e inflación hipotética del 4.5% (frente al objetivo oficial de Banxico del 3.0%), ¿cuál es la tasa real aproximada que preserva el poder de compra?",
    options: [
      "+13.5% anual.",
      "+4.5% anual (9.0% nominal - 4.5% inflación).",
      "-4.5% anual.",
      "+9.0% neto."
    ],
    correct: 1
  },
  {
    id: 3,
    question: "¿Qué organismo público supervisa, audita y autoriza las operaciones de casas de bolsa y bancos en México?",
    options: [
      "La Comisión Nacional Bancaria y de Valores (CNBV).",
      "La PROFECO.",
      "El Fondo Monetario Internacional.",
      "El Registro Civil."
    ],
    correct: 0
  },
  {
    id: 4,
    question: "¿Dónde puedes verificar si una empresa de inversiones cuenta con autorización legal para captar dinero en México?",
    options: [
      "En el buscador oficial del SIPRES de la CONDUSEF.",
      "En los comentarios de videos en redes sociales.",
      "Si tiene una oficina rentada en un edificio corporativo.",
      "Preguntando en grupos de mensajería."
    ],
    correct: 0
  },
  {
    id: 5,
    question: "En una meta financiera formulada con la metodología SMART, ¿qué elemento convierte un simple deseo en un plan accionable?",
    options: [
      "Decir 'quiero ganar más dinero pronto'.",
      "Fijar un monto específico en pesos, fecha límite, vehículo acorde al plazo y la aportación mensual requerida.",
      "Comprar boletos de lotería semanalmente.",
      "Pedir un préstamo para invertirlo en bolsa."
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Si una persona tiene deudas de tarjeta de crédito al 70% de CAT anual y dinero para invertir al 10% en bolsa, ¿cuál es la decisión matemática correcta?",
    options: [
      "Invertir en bolsa y pagar solo el mínimo de la tarjeta.",
      "Liquidar primero la deuda al 70%, pues equivale a un rendimiento garantizado libre de riesgo e impuestos del 70%.",
      "Esperar a que el banco le condone los intereses.",
      "Retirar dinero en cajero automático de otra tarjeta."
    ],
    correct: 1
  },
  {
    id: 7,
    question: "¿Qué indicador engloba todos los costos, comisiones anuales, seguros e intereses de un financiamiento crediticio?",
    options: [
      "La tasa nominal mensual.",
      "El Costo Anual Total (CAT).",
      "El tipo de cambio peso/dólar.",
      "El Índice de Precios y Cotizaciones."
    ],
    correct: 1
  },
  {
    id: 8,
    question: "¿Por qué un inversionista que inicia a los 26 años supera por millones a quien inicia a los 40 años aunque aporte menos dinero?",
    options: [
      "Porque el factor tiempo actúa de forma exponencial en la fórmula del interés compuesto durante casi 4 décadas.",
      "Porque los bancos cobran comisiones más altas a las personas mayores.",
      "Porque el mercado bursátil solo crece en años impares.",
      "Porque el SAT no cobra impuestos a los menores de 30 años."
    ],
    correct: 0
  },
  {
    id: 9,
    question: "¿Qué institución custodia electrónicamente la titularidad y propiedad de las acciones compradas en la BMV o BIVA?",
    options: [
      "El S.D. INDEVAL.",
      "El banco donde abriste tu cuenta de nómina.",
      "La Secretaría de Economía.",
      "Una empresa privada en el extranjero."
    ],
    correct: 0
  },
  {
    id: 10,
    question: "¿Qué ocurre con tus acciones si la casa de bolsa a través de la cual invertiste entra en concurso mercantil o quiebra?",
    options: [
      "El dinero y las acciones se pierden por completo.",
      "Tus títulos están resguardados a tu nombre en INDEVAL y pueden transferirse intactos a otra casa de bolsa autorizada.",
      "El SAT se queda con el 50% de las acciones.",
      "Las acciones se venden obligatoriamente al 10% de su valor."
    ],
    correct: 1
  }
];

// --- COMPONENTES VISUALES DIDÁCTICOS FASE 1 ---

const InvestorProfile: React.FC = () => {
  const [profile, setProfile] = useState<'conservador' | 'moderado' | 'agresivo'>('moderado');

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-center">
        {(['conservador', 'moderado', 'agresivo'] as const).map(p => (
          <button
            key={p}
            onClick={() => setProfile(p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
              profile === p
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs space-y-2">
        {profile === 'conservador' && (
          <div>
            <p className="font-bold text-teal-400 mb-1">Perfil Conservador (Horizonte 1-2 años)</p>
            <p className="text-slate-300">Prioridad: Preservar el capital. Asignación sugerida: 80% Renta Fija Gubernamental (CETES / Bonos) y 20% Fondos de Deuda de Corto Plazo. Cero tolerancia a pérdidas nominales.</p>
          </div>
        )}
        {profile === 'moderado' && (
          <div>
            <p className="font-bold text-amber-400 mb-1">Perfil Moderado (Horizonte 3-7 años)</p>
            <p className="text-slate-300">Prioridad: Crecimiento balanceado superando a la inflación. Asignación sugerida: 50% Renta Variable Global indexada (ETFs) y 50% Renta Fija Soberana y FIBRAS. Tolera correcciones del -10% sin vender.</p>
          </div>
        )}
        {profile === 'agresivo' && (
          <div>
            <p className="font-bold text-rose-400 mb-1">Perfil Agresivo (Horizonte 10+ años)</p>
            <p className="text-slate-300">Prioridad: Maximizar el patrimonio a largo plazo. Asignación sugerida: 80% Renta Variable Global y Acciones de Crecimiento, 20% FIBRAS / Coberturas. Soporta fluctuaciones de -25% manteniendo aportaciones mensuales.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FinancialMath: React.FC = () => {
  const [nominal, setNominal] = useState(10.20);
  const [inflacion, setInflacion] = useState(3.80);
  const realAprox = (nominal - inflacion).toFixed(2);

  return (
    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3 text-xs">
      <div className="flex justify-between items-center border-b border-slate-700 pb-2">
        <span className="font-bold text-white uppercase tracking-wider">Calculadora Didáctica de Tasa Real (Ecuación Fisher)</span>
        <span className="text-teal-400 font-mono font-bold">Banxico 2026</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-slate-400 block mb-1">Tasa Nominal Prometida (%)</label>
          <input 
            type="number" 
            step="0.1" 
            value={nominal} 
            onChange={(e) => setNominal(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
          />
        </div>
        <div>
          <label className="text-slate-400 block mb-1">Tasa de Inflación (%)</label>
          <input 
            type="number" 
            step="0.1" 
            value={inflacion} 
            onChange={(e) => setInflacion(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
          />
        </div>
      </div>
      <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 text-center">
        <span className="text-[11px] text-slate-400 block">Rendimiento Real Neto en Poder de Compra:</span>
        <span className={`text-xl font-black ${Number(realAprox) >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
          {realAprox}% anual
        </span>
      </div>
    </div>
  );
};

const MexicanSystemTable: React.FC = () => (
  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs space-y-2">
    <div className="font-bold text-white uppercase border-b border-slate-700 pb-2 flex justify-between">
      <span>Jerarquía del Sistema Financiero Mexicano</span>
      <span className="text-teal-400">Árbitros Oficiales</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 text-[11px]">
      <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
        <strong className="text-teal-400 block mb-1">1. Regulación & Supervisión</strong>
        <p className="text-slate-300">SHCP fija la política; CNBV autoriza y audita casas de bolsa; Banxico vela por el poder adquisitivo.</p>
      </div>
      <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
        <strong className="text-amber-400 block mb-1">2. Mercados & Bolsas</strong>
        <p className="text-slate-300">BMV y BIVA listan emisoras. S.D. INDEVAL realiza la custodia y liquidación centralizada de títulos.</p>
      </div>
      <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
        <strong className="text-blue-400 block mb-1">3. Protección al Usuario</strong>
        <p className="text-slate-300">CONDUSEF defiende al usuario financiero; IPAB asegura depósitos bancarios hasta 400,000 UDIs.</p>
      </div>
    </div>
  </div>
);

const FinancialGoals: React.FC = () => (
  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs space-y-2">
    <p className="font-bold text-white uppercase border-b border-slate-700 pb-2">Estructuración de Metas SMART para Inversión</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] pt-1">
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700">
        <strong className="text-teal-400 block">Corto Plazo (&lt; 1 año)</strong>
        <span className="text-slate-400">CETES 28D / Bondia. Cero volatilidad.</span>
      </div>
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700">
        <strong className="text-amber-400 block">Mediano Plazo (1-3 años)</strong>
        <span className="text-slate-400">Udibonos / SOFIPOs con seguro PROSOFIPO.</span>
      </div>
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700">
        <strong className="text-blue-400 block">Largo Plazo (3-7 años)</strong>
        <span className="text-slate-400">ETFs globales (VOO / IVVPESO) + FIBRAS.</span>
      </div>
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700">
        <strong className="text-rose-400 block">Retiro (10+ años)</strong>
        <span className="text-slate-400">Renta variable global + PPR Art. 151 LISR.</span>
      </div>
    </div>
  </div>
);

const DebtVsInvestment: React.FC = () => (
  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs space-y-3">
    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
      <span className="font-bold text-white uppercase">La Balanza Matemática: CAT Deuda vs Retorno Bursátil</span>
      <span className="text-rose-400 font-bold">Prioridad #1</span>
    </div>
    <div className="grid grid-cols-2 gap-3 text-center">
      <div className="bg-rose-950/40 border border-rose-500/30 p-3 rounded-xl">
        <span className="text-[10px] text-rose-300 block">CAT Promedio Tarjetas México</span>
        <span className="text-2xl font-black text-rose-400">65% - 85%</span>
        <span className="text-[10px] text-slate-400 block mt-1">Costo destructivo anual</span>
      </div>
      <div className="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl">
        <span className="text-[10px] text-emerald-300 block">Retorno Bursátil Histórico</span>
        <span className="text-2xl font-black text-emerald-400">10% - 12%</span>
        <span className="text-[10px] text-slate-400 block mt-1">S&P 500 / BMV nominal</span>
      </div>
    </div>
    <p className="text-[11px] text-slate-400 text-center">
      💡 Pagar una tarjeta al 70% de CAT genera un retorno libre de riesgo y garantizado del 70%. Sana tus pasivos caros antes de invertir en bolsa.
    </p>
  </div>
);

const CompoundInterestMagic: React.FC = () => (
  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs space-y-3">
    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
      <span className="font-bold text-white uppercase">El Costo de Esperar: 26 vs 40 Años ($3,000 MXN/mes al 10%)</span>
      <span className="text-teal-400 font-bold">14 Años de Ventaja</span>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-slate-900 p-3 rounded-xl border-l-4 border-teal-500">
        <span className="font-bold text-teal-400 block">Inversor A (Inicia a los 26 años)</span>
        <p className="text-slate-400 text-[10px] mt-0.5">Aporta 10 años ($360k total) y deja madurar hasta los 65 años.</p>
        <p className="text-xl font-black text-white mt-2">$6,540,000 MXN</p>
      </div>
      <div className="bg-slate-900 p-3 rounded-xl border-l-4 border-amber-500">
        <span className="font-bold text-amber-400 block">Inversor B (Inicia a los 40 años)</span>
        <p className="text-slate-400 text-[10px] mt-0.5">Aporta 25 años ininterrumpidos ($900k total) hasta los 65 años.</p>
        <p className="text-xl font-black text-white mt-2">$3,980,000 MXN</p>
      </div>
    </div>
    <p className="text-[11px] text-slate-400 text-center">
      ⏳ Iniciar 14 años antes produjo $2.5 millones de pesos adicionales aportando menos de la mitad del dinero.
    </p>
  </div>
);

const SystemIntro: React.FC = () => (
  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs space-y-2">
    <p className="font-bold text-white uppercase border-b border-slate-700 pb-2">Ruta de una Orden Bursátil en México (T+1)</p>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-[10px] pt-1">
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700 w-full">
        <span className="text-teal-400 font-bold block">1. Inversionista</span>
        <span className="text-slate-400">Ingresa orden límite en app</span>
      </div>
      <ArrowRight size={14} className="text-slate-600 hidden sm:block shrink-0" />
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700 w-full">
        <span className="text-amber-400 font-bold block">2. Casa de Bolsa</span>
        <span className="text-slate-400">Valida saldo y rutea orden</span>
      </div>
      <ArrowRight size={14} className="text-slate-600 hidden sm:block shrink-0" />
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700 w-full">
        <span className="text-blue-400 font-bold block">3. BMV / BIVA</span>
        <span className="text-slate-400">Cruce de precio en corro</span>
      </div>
      <ArrowRight size={14} className="text-slate-600 hidden sm:block shrink-0" />
      <div className="bg-slate-900 p-2 rounded-lg border border-slate-700 w-full">
        <span className="text-emerald-400 font-bold block">4. INDEVAL</span>
        <span className="text-slate-400">Custodia legal de los títulos</span>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL COURSE PLAYER FASE 1 ---

export default function CoursePlayerPhase1() {
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
      const saved = localStorage.getItem('fa_phase_1_progress');
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
      localStorage.setItem('fa_phase_1_progress', currentLesson.toString());
      localStorage.setItem('fa_phase_1_total', moduleData.lessons.length.toString());
    } catch (e) {
      // ignore
    }
    if (user) {
      updateProgress(1, currentLesson, moduleData.lessons.length);
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
      submitTestResult(1, calculatedScore, quizQuestions.length);
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📊 *Certificación Aprobada - Fase 1 (Fundamentos y Mentalidad Financiera)* 📊%0A%0A`;
    message += `Calificación Oficial: *${score}/${quizQuestions.length}* ⭐️%0A`;
    message += `Aprobado en Tasa Real Banxico, Diagnóstico de Perfil, Sistema Financiero Mexicano e Interés Compuesto. Solicitud de diploma oficial.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'investor_profile': return <InvestorProfile />;
      case 'financial_math': return <FinancialMath />;
      case 'mexican_system_table': return <MexicanSystemTable />;
      case 'financial_goals': return <FinancialGoals />;
      case 'debt_vs_investment': return <DebtVsInvestment />;
      case 'compound_interest_magic': return <CompoundInterestMagic />;
      case 'system_intro': return <SystemIntro />;
      default: return null;
    }
  };

  // VISTA DE EXAMEN DE CERTIFICACIÓN FASE 1
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <SEO
          title="Examen Final: Fase 1 - Fundamentos y Mentalidad | FA Academy"
          description="Evaluación de acreditación oficial para la Fase 1 de FA Academy."
          url="https://fa-academy.vercel.app/course/phase/1"
        />
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800">
              Examen Oficial de Certificación
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
              Certificación Fase 1: Fundamentos y Mentalidad
            </h1>
            <p className="text-sm text-slate-400">
              10 preguntas rigurosas sobre Tasa Real Banxico, Perfil AMIB, Sistema Financiero e Interés Compuesto.
            </p>
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <p className="font-bold text-base md:text-lg mb-4 text-white flex items-start gap-3">
                    <span className="bg-teal-500/20 text-teal-400 border border-teal-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
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
                            ? 'bg-teal-600 border-teal-400 text-white font-bold shadow-md' 
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
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-95 disabled:opacity-40 transition-all shadow-xl shadow-teal-900/30 cursor-pointer"
                >
                  Terminar Evaluación ({Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-8">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-teal-500/40 mb-8 max-w-md mx-auto shadow-[0_0_40px_rgba(20,184,166,0.25)]">
                <Target className="w-20 h-20 text-teal-400 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-extrabold text-white">¡Examen de Fase 1 Calificado!</h2>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 my-6">
                  {score} / {quizQuestions.length}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {score >= 7 
                    ? '¡Felicidades! Has demostrado dominio riguroso de la tasa real, los árbitros del sistema financiero y las matemáticas del interés compuesto.' 
                    : 'Te sugerimos repasar el cálculo de tasa real y la jerarquía de árbitros antes de solicitar tu diploma.'}
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

  const activeQuizzes = (lessonData as any).quizzes || [];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
      <SEO
        title={`Fase 1: ${lessonData.title} | FA Academy`}
        description={`Lección ${currentLesson + 1} de la Fase 1 de FA Academy: ${lessonData.content}`}
        url={`https://fa-academy.vercel.app/course/phase/1?lesson=${currentLesson + 1}`}
      />
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 p-2 rounded-lg">
              <Landmark className="text-slate-900" size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
              <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest hidden md:block">Edición 2026</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out" 
            style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-teal-500/10 text-teal-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-teal-500/20">
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
                <PlayCircle size={15} className="text-teal-400" />
                {lessonData.videoTitle || lessonData.title}
              </span>
              {lessonData.videoDuration && (
                <span className="bg-slate-800 px-2.5 py-1 rounded-md text-teal-400 font-semibold flex items-center gap-1">
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
            <AlertTriangle size={15} className="text-teal-400 shrink-0" />
            <span>{(lessonData as any).disclaimer || "Educación, no asesoría financiera. Toda inversión bursátil conlleva riesgo de pérdida de capital."}</span>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-teal-500 shadow-lg">
            <p className="text-lg md:text-xl text-teal-100 font-medium leading-relaxed">
              {lessonData.content}
            </p>
          </div>

          <div className="flex gap-4 items-start bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
            <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0">
              <Brain size={20} className="text-teal-400" />
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {lessonData.details}
              </p>
              {lessonData.speakerNotes && (
                <p className="mt-4 text-slate-400 text-xs md:text-sm italic bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex gap-2">
                  <span className="text-teal-400 font-bold not-italic">💡 Tip FA Academy:</span>
                  {lessonData.speakerNotes}
                </p>
              )}
            </div>
          </div>

          {/* Caso Real Fechado de Mercado */}
          {(lessonData as any).realExample && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-teal-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
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
                  className="text-teal-400 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {(lessonData as any).realExample.source} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* Ejercicio con Entregable Práctico */}
          {(lessonData as any).deliverableExercise && (
            <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText size={15} /> Ejercicio con Entregable Práctico
              </span>
              <h4 className="text-sm font-bold text-white mb-1">{(lessonData as any).deliverableExercise.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{(lessonData as any).deliverableExercise.description}</p>
              <textarea 
                placeholder="Escribe aquí tu análisis, respuestas o plan de acción personal..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 outline-none focus:ring-1 focus:ring-teal-500 min-h-[70px]"
              />
            </div>
          )}

          {/* Render Contextual Blocks if they exist in the lesson data */}
          {lessonData.quote && (
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <Quote size={20} className="text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs md:text-sm text-slate-200 italic leading-relaxed">"{lessonData.quote.text}"</p>
                <p className="text-[11px] text-teal-400 font-semibold mt-1">— {lessonData.quote.author}</p>
              </div>
            </div>
          )}

          {lessonData.concepts && (
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-teal-400" />
                Conceptos Clave de la Lección
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lessonData.concepts.map((c, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-xs font-bold text-teal-300 mb-1">{c.term}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz interactivo por lección con retroalimentación inmediata */}
          {activeQuizzes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-teal-500/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-teal-400" />
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
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
                      <span className="text-xs bg-slate-800 text-teal-400 px-2 py-0.5 rounded font-bold">{qIdx + 1}</span>
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
                          btnStyle = 'bg-teal-500 border-teal-300 text-slate-950 font-bold';
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
          
          <div className="flex gap-1.5 overflow-x-auto max-w-[40%] px-2">
            {moduleData.lessons.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentLesson(idx)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 shrink-0 ${
                  idx === currentLesson ? 'bg-teal-500 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Ir a Lección ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95"
          >
            <span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Examen Final' : 'Siguiente'}</span>
            <span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
