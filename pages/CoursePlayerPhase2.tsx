import React, { useState } from 'react';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, Calculator,
  Building2, Landmark, Brain, Quote, 
  AlertTriangle, Layers, Newspaper, BarChart3,
  LineChart, CheckCircle, ChevronRight, Book, Scale,
  Factory, Globe, Coins, UserCheck, ShieldCheck
} from 'lucide-react';

// --- DATOS FA ACADEMY: MÓDULO 2 ---

const courseData = [
  {
    id: 1,
    title: "FA Academy: El Ecosistema de Inversión",
    description: "Conoce el tablero de juego. Aprende a moverte por diferentes activos y mercados con seguridad.",
    lessons: [
      {
        title: "La Anatomía de una Acción",
        content: "No compras un 'ticker' en una pantalla; adquieres una parte del capital social.",
        details: "En México, es vital entender las 'Series' accionarias. La Serie A suele ser para mexicanos con pleno derecho a voto. La Serie B o L tiene voto limitado pero a veces derechos preferentes. Los CPOs (Certificados de Participación Ordinaria) agrupan varias acciones para hacerlas más fáciles de comprar y vender, como el famoso caso de CEMEXCPO.",
        visualType: "action_anatomy",
        quote: { 
            text: "El inversionista debe distinguir entre la ganancia de capital (subida de precio) y el dividendo (reparto de utilidades). No todas las empresas pagan dividendos; muchas reinvierten para crecer, lo cual no es necesariamente malo.", 
            author: "Nota Formativa, CNBV" 
        },
        speakerNotes: "Ser dueño implica derechos y riesgos. Si la empresa quiebra, los accionistas son los últimos en cobrar. Por eso la rentabilidad potencial es ilimitada.",
        concepts: [
          { term: "CPO", def: "Certificado de Participación Ordinaria. Un paquete que contiene varias acciones de distintas series (ej. 2 Serie A y 1 Serie B)." },
          { term: "Ganancia de Capital", def: "El beneficio que obtienes cuando vendes la acción más cara de lo que la compraste." },
          { term: "Dividendo", def: "La parte de las ganancias (utilidades) que la empresa decide repartir en efectivo a sus accionistas." }
        ]
      },
      {
        title: "Análisis Fundamental: Evaluando el Negocio",
        content: "Buscando el Valor Intrínseco oculto bajo el precio.",
        details: "El Análisis Fundamental se enfoca en los estados financieros para saber si el negocio es sano. Si el Valor Intrínseco (lo que realmente vale) es mayor al Precio de Mercado, la acción está 'barata'. Usamos métricas clave como el EBITDA (el corazón operativo), ROE (eficiencia del capital) y Free Cash Flow (efectivo real disponible).",
        visualType: "fundamental_metrics",
        speakerNotes: "El precio es lo que pagas, el valor es lo que obtienes. Un P/E bajo no siempre significa que esté barata; a veces es una 'trampa de valor' porque el negocio se está hundiendo.",
        concepts: [
          { term: "EBITDA", def: "Ganancias antes de intereses, impuestos, depreciaciones y amortizaciones. Muestra cuánto efectivo genera la operación pura." },
          { term: "ROE", def: "Return on Equity. Mide qué tanta ganancia genera la empresa utilizando el dinero que pusieron los accionistas." },
          { term: "Free Cash Flow", def: "Flujo de Caja Libre. El dinero que sobra después de pagar operaciones y mantener las fábricas. Si es negativo constantemente, cuidado." }
        ]
      },
      {
        title: "Caso Práctico 2026: CEMEX ($CEMEXCPO)",
        content: "Una gigante cíclica en el boom de la infraestructura.",
        details: "Cemex es una empresa 'cíclica', depende de la economía global y la construcción. En Análisis Fundamental, usamos el múltiplo EV/EBITDA; además, su agresivo 'desapalancamiento' le ha devuelto el 'Grado de Inversión'. En Análisis Técnico, los analistas vigilan soportes históricos y confirmaciones con alto volumen.",
        visualType: "cemex_case",
        newsSnippet: {
            title: "Cemex y el Efecto Nearshoring",
            text: "Cemex reporta un incremento del 8% en su flujo operativo gracias a la demanda de infraestructura derivada del Nearshoring en el norte de México. Analistas institucionales ajustan precio objetivo a niveles no vistos en la década.",
            source: "Sección de Mercados, El Economista (Simulación 2026)"
        },
        speakerNotes: "No inviertas en lo que no entiendes. Si vas a comprar Cemex, ve a la calle y mira si se están construyendo puentes, fábricas o casas. La calle te da señales antes que las noticias.",
        concepts: [
          { term: "Empresa Cíclica", def: "Negocios que ganan mucho cuando la economía va bien (construcción, autos) y sufren mucho en recesiones." },
          { term: "EV/EBITDA", def: "Enterprise Value / EBITDA. Múltiplo que permite comparar empresas con distintos niveles de deuda. Muy usado en la industria industrial." },
          { term: "Investment Grade", def: "Grado de inversión. Calificación crediticia alta que permite a la empresa pedir préstamos con tasas de interés muy bajas." }
        ]
      },
      {
        title: "Análisis Técnico: La Psicología de Masas",
        content: "El Fundamental te dice QUÉ comprar. El Técnico te dice CUÁNDO.",
        details: "Los gráficos no adivinan el futuro, pero muestran el rastro del dinero institucional. Las Velas Japonesas muestran la batalla diaria. Las Medias Móviles (ej. MA 200) revelan la tendencia macro. Y el RSI (Índice de Fuerza Relativa) nos dice si el mercado está sobrecomprado (>70) o sobrevendido (<30).",
        visualType: "technical_psychology",
        speakerNotes: "El peor error es comprar una buena empresa en un pésimo momento técnico. Si el RSI está en 85 y el precio sube vertical, el riesgo de corrección es altísimo.",
        concepts: [
          { term: "Vela Japonesa", def: "Gráfico que muestra Apertura, Cierre, Máximo y Mínimo. Una vela verde grande significa control total de los compradores." },
          { term: "Media Móvil 200 (MA200)", def: "El promedio de los últimos 200 días. Actúa como la 'línea en la arena'; si el precio está arriba, hay tendencia alcista." },
          { term: "RSI", def: "Indicador que mide la velocidad de los movimientos de precio. Ayuda a identificar puntos de agotamiento." }
        ]
      },
      {
        title: "El Ecosistema de Diversificación",
        content: "Expande tu horizonte: Inmuebles, ETFs globales y Activos Digitales.",
        details: "No todo es comprar acciones sueltas. Las FIBRAS (Bienes Raíces) en 2026 capturan el valor de las bodegas industriales (Nearshoring) pagando rentas. Los ETFs (ej. IVV) te permiten ser dueño del S&P 500 desde México (con un ISR preferencial del 10%). Y los Criptoactivos ('Digital Gold') ofrecen crecimiento asimétrico extremo para el 1-5% de tu cartera.",
        visualType: "diversification_eco",
        speakerNotes: "Combina estos activos estratégicamente. Las FIBRAS te dan flujo de caja (rentas), los ETFs te dan estabilidad global, y las Cripto te dan un 'boleto de lotería' sin arriesgar tu futuro.",
        concepts: [
          { term: "FIBRAS", def: "Fideicomisos de Infraestructura y Bienes Raíces. Por ley deben repartir al menos el 95% de su resultado fiscal a los inversionistas." },
          { term: "SIC", def: "Sistema Internacional de Cotizaciones. Plataforma en México que permite comprar acciones y ETFs de otros países en pesos mexicanos." },
          { term: "Asimetría Positiva", def: "Inversiones donde lo máximo que puedes perder es 1x, pero puedes ganar 10x o 100x (típico en Startups y Criptoactivos sólidos)." }
        ]
      },
      {
        title: "Diferenciación de Mercados (BMV vs. SIC)",
        content: "El Sistema Internacional de Cotizaciones (SIC) democratizó la bolsa en México.",
        details: "Antes, un mexicano solo podía comprar acciones de empresas locales como Cemex o Bimbo, porque las acciones de EE. UU. (como Apple o Tesla) cotizaban en Nueva York y necesitabas una cuenta en el extranjero. Hoy, el SIC trae casi todo Wall Street a México. Esto es un 'Aha! moment': puedes ser dueño de Nvidia o Pfizer pagando en pesos mexicanos, desde una app, de forma 100% legal y con una gran ventaja fiscal al momento de vender.",
        visualType: "market_diff_tab",
        quote: { 
            text: "El SIC no es una bolsa distinta, es la plataforma dentro de la Bolsa Mexicana de Valores que te permite acceder a empresas globales sin abrir cuentas extranjeras ni mandar dólares por transferencia.", 
            author: "Guía FA Academy" 
        },
        speakerNotes: "El volumen en el SIC a veces es menor que en Estados Unidos. SIEMPRE usa órdenes 'Limitadas' para comprar al precio que tú decidas, nunca órdenes 'A mercado' para evitar spreads altos.",
        concepts: [
          { term: "SIC", def: "Sistema Internacional de Cotizaciones. Abre la puerta del mundo a los mexicanos." },
          { term: "BMV y BIVA", def: "Las dos bolsas nacionales donde se listan las empresas mexicanas (Renta Variable Local)." },
          { term: "Spread", def: "La diferencia entre el precio al que alguien quiere comprar y el precio al que alguien quiere vender." }
        ]
      },
      {
        title: "Casas de Bolsa y Seguridad Inicial",
        content: "El puente entre tú y tus futuras acciones.",
        details: "Tu primer paso técnico es elegir un bróker. En México, nombres como GBM o Kuspit son muy comunes debido a sus bajos montos de apertura (desde $100 pesos). Lo vital no es el nombre comercial, sino que estén regulados por la CNBV. Cuando depositas, el dinero no va a una 'cartera virtual', va ligada a un contrato real de intermediación bursátil a tu nombre.",
        visualType: "broker_security",
        speakerNotes: "No importa si un bróker tiene una app muy bonita, si no está en el catálogo de entidades reguladas de la CNBV, huimos de ahí. Tu dinero es demasiado valioso para confiar en 'brokers de CFD's' extranjeros no regulados.",
        concepts: [
          { term: "Casa de Bolsa / Bróker", def: "Intermediario oficial que permite al público comprar y vender valores." },
          { term: "Contrato de Intermediación", def: "El documento legal (normalmente digital) que firmas al abrir cuenta en GBM, Bursanet u otros." },
          { term: "W-8BEN", def: "Formulario fiscal de EE. UU. que llenas en tu casa de bolsa para pagar menos retenciones de impuestos estadounidenses sobre tus dividendos globales." }
        ]
      },
      {
        title: "Tipos de Activos (Para Principiantes)",
        content: "No pongas todos los huevos en la misma canasta. Conoce ETFs y FIBRAS.",
        details: "El gran error del novato es comprar acciones individuales (el 'stock picking') en el día uno. Para empezar de forma segura y rentable, los ETFs (Fondos Cotizados) y FIBRAS (Bienes Raíces) son obligatorios. Ejemplos de uso diario: IVVPESO te expone a las 500 mejores empresas de EE.UU. en bolsa mexicana; SPY o VOO hacen lo mismo. Las FIBRAS te pagan renta 'vía dividendo' porque construyen bodegas para el Nearshoring.",
        visualType: "asset_types",
        speakerNotes: "Tu portafolio base debe ser aburrido, sistemático y seguro. Los ETFs como VOO hacen esto por ti. Solo destina una pequeña parte de tu dinero para el 'stock picking' de acciones individuales cuando apenas inicias.",
        concepts: [
          { term: "ETF", def: "Exchange Traded Fund. Un paquete que contiene cientos de acciones. Si compras una unidad, automáticamente compras un pedacito de todas." },
          { term: "FIBRA", def: "Fideicomiso de Inversión en Bienes Raíces. Construyen o compran plazas, bodegas y hoteles, y por ley reparten las rentas a los inversionistas." },
          { term: "Stock Picking", def: "Intentar elegir la acción individual ganadora. Es más riesgoso y requiere horas de análisis." }
        ]
      },
      {
        title: "Análisis Fundamental Básico",
        content: "Aprendiendo a leer la etiqueta nutricional de una empresa.",
        details: "Si compras una acción individual, estás comprando un negocio. Necesitas saber si el negocio es sano. Esto lo vemos en sus Estados Financieros: 1) Estado de Resultados (¿Hay ganancias?), 2) Balance General (¿Tiene más deudas que dinero en banco?), 3) Flujo de Efectivo (¿Realmente entra dinero a la caja o solo es contabilidad creativa?).",
        visualType: "fundamental_basics",
        newsSnippet: {
            title: "El Peligro de 'Las Acciones Meme'",
            text: "Cientos de jóvenes compran acciones de empresas al borde de la quiebra porque alguien en TikTok dice que 'van a subir a la luna'. El mercado castiga sin piedad a quienes invierten sin revisar el Balance General.",
            source: "Crónica Financiera 2026"
        },
        speakerNotes: "El negocio de una empresa es ganar dinero y sobrarle en caja. Punto. Si la empresa lleva 5 años perdiendo millones, no importa qué tan innovador suene su producto, es una inversión de muy alto riesgo.",
        concepts: [
          { term: "Ingresos / Ventas", def: "Todo el dinero bruto que logró facturar la empresa por vender sus productos." },
          { term: "Utilidad Neta", def: "Lo que realmente queda de ganancia limpia después de pagar empleados, impuestos y todo lo demás." },
          { term: "Deuda / Equity", def: "Ratio simple: cuánto de la empresa es dinero prestado del banco versus cuánto es dinero de los dueños. Si es muy alta, el negocio tiene riesgo." }
        ]
      }
    ]
  }
];

const quizQuestions = [
  { id: 1, question: "¿Qué diferencia a una Acción Serie A de una Serie B o L en México?", options: ["El color del certificado.", "La Serie A tiene plenos derechos de voto, mientras que la B/L suele tener voto limitado.", "La Serie A es solo para bancos.", "No hay ninguna diferencia."], correct: 1 },
  { id: 2, question: "¿Qué mide exactamente el Flujo de Caja Libre (Free Cash Flow)?", options: ["El total de ventas del año.", "El dinero en la caja registradora de las tiendas.", "El efectivo real que sobra después de mantener las operaciones y las fábricas.", "La deuda total."], correct: 2 },
  { id: 3, question: "En el Análisis Técnico, ¿qué nos indica un RSI por encima de 70?", options: ["Que la empresa va a quebrar.", "Que la acción está sobrecomprada y podría haber una corrección pronto.", "Que es el momento perfecto para comprar más.", "Que la acción no tiene liquidez."], correct: 1 },
  { id: 4, question: "En el contexto de 2025-2026, ¿por qué han brillado las FIBRAS Industriales?", options: ["Porque ya no se construyen casas.", "Por el impulso de las fábricas que se mudan a México para exportar a EE. UU. (Nearshoring).", "Porque pagan en dólares.", "Por la caída del Bitcoin."], correct: 1 },
  { id: 5, question: "¿Cuál es la ventaja fiscal de comprar ETFs internacionales a través del SIC en México?", options: ["No pagas ningún impuesto.", "La tasa de ISR sobre la ganancia de capital (venta de acciones) es del 10% definitivo.", "Te devuelven el IVA.", "El gobierno te regala acciones."], correct: 1 },
  { id: 6, question: "¿Qué permitió el Sistema Internacional de Cotizaciones (SIC) a los inversionistas mexicanos?", options: ["Poder abrir cuentas físicas en un banco de Nueva York.", "Comprar títulos de empresas extranjeras como Apple o Nvidia y ETFs globales operando desde México y en pesos.", "Pagar menos comisiones a Banxico.", "Solo comprar acciones mexicanas como Bimbo."], correct: 1 },
    { id: 7, question: "El paso más crítico al elegir una Casa de Bolsa como GBM o Bursanet es asegurar que:", options: ["Tengan la aplicación más bonita.", "Sus gráficos se vean geniales.", "Estén supervisadas y reguladas estrictamente por la CNBV.", "Ofrezcan invertir desde 50 pesos."], correct: 2 },
    { id: 8, question: "¿Por qué un ETF como 'VOO' o 'IVVPESO' es mucho más seguro para un principiante que comprar acciones de una sola empresa?", options: ["Porque no pagan comisiones nunca.", "Porque invierten por ley solo en Cetes.", "Porque con una sola compra diversificas tu dinero en las 500 empresas más grandes de EE.UU., diluyendo el riesgo.", "Porque garantizan un retorno del 50% anual."], correct: 2 },
    { id: 9, question: "Las FIBRAS en México son excelentes herramientas en un portafolio porque:", options: ["Suben de precio como el Oro.", "Te eximen de pagar ISR por tu sueldo.", "Pagan 'rentas' periódicamente a los tenedores, derivadas del flujo de bienes raíces comerciales e industriales.", "Se usan para pagar servicios online."], correct: 2 },
    { id: 10, question: "¿Cuál es el objetivo principal del Análisis Fundamental al revisar el Balance General?", options: ["Adivinar si el gráfico de la acción subirá mañana.", "Entender si el negocio es realmente sano, si tiene ganancias y que sus deudas no asfixien a la empresa.", "Hacer trading veloz en minutos.", "Poder evadir impuestos."], correct: 1 }
];

const ActionAnatomy = () => (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="bg-slate-800 p-5 rounded-xl border border-purple-500/30 flex-1 relative overflow-hidden group hover:border-purple-400 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"><UserCheck size={48} className="text-purple-400"/></div>
            <h4 className="text-purple-400 font-bold text-lg mb-2">Serie A</h4>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Capital Ordinario</p>
            <ul className="text-[10px] text-slate-400 space-y-2">
                <li className="flex gap-2"><CheckCircle size={12} className="text-purple-500 shrink-0"/> Plenos derechos de voto en asambleas.</li>
                <li className="flex gap-2"><CheckCircle size={12} className="text-purple-500 shrink-0"/> Generalmente reservadas para mexicanos.</li>
            </ul>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl border border-indigo-500/30 flex-1 relative overflow-hidden group hover:border-indigo-400 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"><Scale size={48} className="text-indigo-400"/></div>
            <h4 className="text-indigo-400 font-bold text-lg mb-2">Serie B o L</h4>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Voto Limitado</p>
            <ul className="text-[10px] text-slate-400 space-y-2">
                <li className="flex gap-2"><CheckCircle size={12} className="text-indigo-500 shrink-0"/> Restringen el control corporativo.</li>
                <li className="flex gap-2"><CheckCircle size={12} className="text-indigo-500 shrink-0"/> Suelen tener prioridad en pago de dividendos.</li>
            </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-5 rounded-xl border border-violet-500/50 flex-1 shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all">
            <div className="flex items-center gap-2 mb-2">
                <Layers className="text-violet-400" size={24}/>
                <h4 className="text-violet-300 font-bold text-lg">CPO</h4>
            </div>
            <p className="text-xs text-violet-200 font-bold uppercase tracking-wider mb-2">El Combo Bursátil</p>
            <p className="text-[10px] text-slate-300 leading-relaxed">
                Certificado de Participación Ordinaria. Agrupa varias series (ej. 2 Serie A + 1 Serie B) en un solo título. <br/><br/>
                <strong className="text-violet-400">Objetivo:</strong> Facilitar la liquidez y venta a inversionistas extranjeros sin perder el control de la empresa.
            </p>
        </div>
    </div>
);

const FundamentalMetrics = () => (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col items-center text-center relative">
            <div className="absolute -top-4 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Operación Pura</div>
            <Activity size={32} className="text-purple-400 mb-3 mt-2" />
            <h4 className="text-white font-bold text-xl mb-1">EBITDA</h4>
            <p className="text-[10px] text-slate-400 mt-2 border-t border-slate-700 pt-2">
                Elimina trucos contables e impuestos para mostrar el efectivo crudo que genera el negocio.
            </p>
        </div>
        
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col items-center text-center relative">
            <div className="absolute -top-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Eficiencia</div>
            <Target size={32} className="text-indigo-400 mb-3 mt-2" />
            <h4 className="text-white font-bold text-xl mb-1">ROE</h4>
            <p className="text-[10px] text-slate-400 mt-2 border-t border-slate-700 pt-2">
                ¿Qué porcentaje de ganancia logran los directivos por cada peso invertido por los accionistas?
            </p>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col items-center text-center relative shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <div className="absolute -top-4 bg-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">El Rey</div>
            <Landmark size={32} className="text-violet-400 mb-3 mt-2" />
            <h4 className="text-white font-bold text-xl mb-1">Free Cash Flow</h4>
            <p className="text-[10px] text-slate-400 mt-2 border-t border-slate-700 pt-2">
                El dinero en efectivo que realmente sobra para pagar deudas, hacer recompras o pagar dividendos.
            </p>
        </div>
    </div>
);

const CemexCase = () => (
    <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
            <div className="bg-slate-800 p-3 border-b border-slate-700 flex justify-between items-center">
                <span className="text-white font-bold tracking-widest">CEMEXCPO.MX</span>
                <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded font-bold">Grado de Inversión</span>
            </div>
            <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                    <BarChart3 className="text-purple-400 shrink-0" size={20}/>
                    <div>
                        <h5 className="text-sm font-bold text-purple-300">Valoración (EV/EBITDA)</h5>
                        <p className="text-xs text-slate-400">Si Cemex cotiza a un múltiplo 6x y sus competidores (Holcim) a 8x, existe un posible "descuento" de valor.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <TrendingUp className="text-indigo-400 shrink-0" size={20}/>
                    <div>
                        <h5 className="text-sm font-bold text-indigo-300">Análisis Técnico</h5>
                        <p className="text-xs text-slate-400">Ruptura de resistencias históricas apoyada por volumen institucional agresivo.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-slate-800 to-indigo-900/30 p-6 rounded-xl border border-indigo-500/30 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
                <Factory className="text-indigo-400" size={28}/>
                <h4 className="text-white font-bold text-lg leading-tight">El Motor Macroeconómico</h4>
            </div>
            <p className="text-sm text-slate-300 mb-4">
                El modelo de negocio es pesado en capital. El catalizador real de 2026 es la construcción de naves industriales impulsada por el <strong className="text-purple-400">Nearshoring</strong>.
            </p>
            <div className="bg-slate-900/80 p-3 rounded text-[10px] text-indigo-300 border-l-2 border-indigo-500">
                <span className="font-bold">Estrategia FA Academy:</span> Identifica los ciclos macro. La empresa cementera brilla cuando las tasas bajan y el gasto público en infraestructura sube.
            </div>
        </div>
    </div>
);

const TechnicalPsychology = () => (
    <div className="mt-6 bg-slate-900 p-5 rounded-xl border border-slate-700 relative overflow-hidden">
        <h4 className="text-center text-white font-bold text-sm mb-4 tracking-widest uppercase">Tablero Técnico</h4>
        
        {/* Gráfico Simulado */}
        <div className="relative w-full h-40 border border-slate-700 rounded bg-slate-800/50 mb-4">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 opacity-10 pointer-events-none">
                {[...Array(15)].map((_, i) => <div key={i} className="border border-slate-500"></div>)}
            </div>
            {/* MA Line */}
            <svg className="w-full h-full absolute" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 80 Q 30 75 50 60 T 100 20" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,2"/>
                {/* Price Line to simulate candlesticks */}
                <path d="M 0 85 L 20 65 L 35 70 L 60 40 L 80 50 L 100 10" fill="none" stroke="#cbd5e1" strokeWidth="1.5"/>
            </svg>
            <div className="absolute bottom-2 left-2 text-[9px] text-purple-400 font-bold bg-slate-900/80 px-2 py-0.5 rounded">Media Móvil 200 (Tendencia Macro)</div>
            <div className="absolute top-2 right-2 text-[9px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-600">Golden Cross &uarr;</div>
        </div>

        {/* RSI */}
        <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 w-12">RSI</span>
            <div className="flex-1 h-4 bg-slate-800 rounded-full relative overflow-hidden border border-slate-600">
                <div className="absolute left-[30%] w-[40%] h-full bg-slate-700 border-x border-slate-500"></div>
                <div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
            </div>
            <span className="text-xs font-bold text-red-400 w-20 text-right">85 (Sobrecompra)</span>
        </div>
    </div>
);

const DiversificationEco = () => (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="bg-purple-900/30 p-3 rounded-full mb-3"><Building2 className="text-purple-400" size={28}/></div>
            <h4 className="text-white font-bold text-sm mb-1">FIBRAS (REITs)</h4>
            <p className="text-[10px] text-slate-400">Captura la plusvalía de naves industriales y cobra rentas periódicas por ley. Mitiga la inflación.</p>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="bg-indigo-900/30 p-3 rounded-full mb-3"><Globe className="text-indigo-400" size={28}/></div>
            <h4 className="text-white font-bold text-sm mb-1">ETFs Internacionales</h4>
            <p className="text-[10px] text-slate-400">Ej. IVV (S&P 500). Comprados vía el SIC en México con un beneficio fiscal del 10% de ISR sobre ganancia.</p>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-violet-500 transition-all hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5"><Coins size={80} className="text-violet-400"/></div>
            <div className="bg-violet-900/30 p-3 rounded-full mb-3 relative z-10"><Coins className="text-violet-400" size={28}/></div>
            <h4 className="text-white font-bold text-sm mb-1 relative z-10">Criptoactivos</h4>
            <p className="text-[10px] text-slate-400 relative z-10">Asimetría Extrema. Útil solo para el 1-5% del portafolio. Alta volatilidad sin flujos de caja intrínsecos.</p>
        </div>
    </div>
);

const MarketDiffTab = () => (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="bg-slate-800 p-5 rounded-xl border border-blue-500/30 flex-1 relative overflow-hidden group hover:border-blue-400 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"><Building2 size={48} className="text-blue-400"/></div>
            <h4 className="text-blue-400 font-bold text-lg mb-2">BMV / BIVA</h4>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Sector Nacional</p>
            <ul className="text-[10px] text-slate-400 space-y-2">
                <li className="flex gap-2"><CheckCircle size={12} className="text-blue-500 shrink-0"/> Empresas constituidas en México (Ej: Cemex, Alsea).</li>
                <li className="flex gap-2"><CheckCircle size={12} className="text-blue-500 shrink-0"/> Gran influencia local (elecciones, IPC).</li>
                <li className="flex gap-2"><CheckCircle size={12} className="text-blue-500 shrink-0"/> Aquí nacen y operan también las FIBRAS (Inmuebles).</li>
            </ul>
        </div>
        
        <div className="flex items-center justify-center p-2">
            <div className="bg-slate-800 w-[1px] h-16 md:w-16 md:h-[1px]"></div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/80 p-5 rounded-xl border border-purple-500/50 flex-1 shadow-[0_0_20px_rgba(168,85,247,0.15)] group hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all">
            <div className="flex items-center gap-2 mb-2">
                <Globe className="text-purple-400" size={24}/>
                <h4 className="text-purple-300 font-bold text-lg">SIC</h4>
            </div>
            <p className="text-xs text-purple-200 font-bold uppercase tracking-wider mb-2">Tú Pasaporte Global</p>
            <ul className="text-[10px] text-slate-300 space-y-2">
                <li className="flex items-start gap-2"><div className="mt-0.5 w-1 h-1 rounded-full bg-purple-400 shrink-0"></div><span className="leading-tight">Compra acciones globales usando <strong>Pesos Mexicanos</strong>.</span></li>
                <li className="flex items-start gap-2"><div className="mt-0.5 w-1 h-1 rounded-full bg-purple-400 shrink-0"></div><span className="leading-tight">Puedes comprar Nvidia, Amazon y ETFs como el VOO desde la misma app.</span></li>
                <li className="flex items-start gap-2 text-purple-300 font-bold"><div className="mt-0.5 w-1 h-1 rounded-full bg-purple-300 shrink-0"></div><span className="leading-tight">Beneficio: La ganancia por el tipo de cambio a veces te favorece doblemente.</span></li>
            </ul>
        </div>
    </div>
);

const BrokerSecurity = () => (
    <div className="mt-6 flex flex-col md:flex-row gap-6 relative">
      <div className="flex-1 space-y-4">
        <h4 className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2"><ShieldCheck className="text-blue-400"/> Blindaje de tu cuenta</h4>
        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-400 text-sm">Regulación Estricta</h5>
            <p className="text-xs text-slate-300 mt-2">Jamás abras cuenta en un bróker que no muestres sus acreditaciones oficiales por parte de la Comisión Nacional Bancaria y de Valores (CNBV).</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-slate-500">
            <h5 className="font-bold text-slate-300 text-sm">Contrato de Valores</h5>
            <p className="text-xs text-slate-400 mt-2">En GBM o similares, firmas un contrato único. Es tu respaldo jurídico de que eres el beneficiario de todas tus inversiones.</p>
        </div>
      </div>
      <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 flex flex-col relative overflow-hidden group">
          <Layers className="absolute -top-4 -right-4 text-slate-800 opacity-20 group-hover:opacity-40" size={120} />
          <div className="text-center z-10 mb-4 border-b border-slate-700 pb-4">
              <span className="bg-blue-600/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded uppercase">Casos en México</span>
              <div className="mt-4 flex gap-4 justify-center">
                 <div className="w-16 h-16 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-white text-xs shadow-lg">GBM</div>
                 <div className="w-16 h-16 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-white text-xs shadow-lg">Kuspit</div>
              </div>
          </div>
          <p className="text-[10px] text-slate-400 text-center leading-relaxed">
              Existen más (Bursanet, Vector), la clave es que democratizan el acceso al mercado 
              y utilizan los protocolos del mercado de valores mexicano para salvaguardar el título de cada acción que compras.
          </p>
      </div>
    </div>
);

const AssetTypes = () => (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="bg-purple-900/40 p-3 rounded-full mb-3 w-12 h-12 flex items-center justify-center"><Globe className="text-purple-400" size={24}/></div>
            <h4 className="text-white font-bold text-lg mb-1 flex justify-between">ETFs <span className="bg-purple-600 text-white text-[9px] px-2 rounded-full flex items-center h-4">Rey Principiantes</span></h4>
            <p className="text-purple-300 font-bold text-xs mb-3 font-mono">Ej: VOO, SPY, QQQ</p>
            <p className="text-[10px] text-slate-400">
                La forma más eficiente. En lugar de apostar si Microsoft le ganará a Apple, compras un ETF y posees ambas. Diversificas tu riesgo instantáneamente en cientos de corporativos con un solo clic.
            </p>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-1 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="bg-blue-900/40 p-3 rounded-full mb-3 w-12 h-12 flex items-center justify-center"><Building2 className="text-blue-400" size={24}/></div>
            <h4 className="text-white font-bold text-lg mb-1 flex justify-between">FIBRAS <span className="bg-blue-600 text-white text-[9px] px-2 rounded-full flex items-center h-4">Flujo de Efectivo</span></h4>
            <p className="text-blue-300 font-bold text-xs mb-3 font-mono">Ej: FIBRAPL, FUNO, FIBRANT</p>
            <p className="text-[10px] text-slate-400">
                Bienes Raíces para todos. Son dueños de bodegas industriales o plazas comerciales y centros turísticos. Por ley, te depositan a tu cuenta las "rentas" generadas, convirtiéndose en un dividendo sumamente atractivo.
            </p>
        </div>
    </div>
);

const FundamentalBasics = () => (
    <div className="mt-6 flex flex-col md:flex-row gap-6 relative p-6 bg-slate-900 rounded-xl border border-slate-700 shadow-xl">
       <div className="flex-1">
           <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">La Etiqueta de la Empresa</h4>
           <div className="space-y-4">
              <div className="border-l-2 border-emerald-500 pl-3">
                  <h5 className="text-emerald-400 text-sm font-bold">Estado de Resultados</h5>
                  <p className="text-[10px] text-slate-400 mt-1">¿Están vendiendo más este año? ¿Sobra Utilidad Neta o pierden 1 peso por cada 2 que venden?</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-3">
                  <h5 className="text-amber-500 text-sm font-bold">Balance General</h5>
                  <p className="text-[10px] text-slate-400 mt-1">Lo que Tienen (Activos) vs Lo que Deben (Pasivos). ¿Tienen suficiente caja para la próxima crisis?</p>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                  <h5 className="text-red-400 text-sm font-bold">Flujo de Efectivo</h5>
                  <p className="text-[10px] text-slate-400 mt-1">El "detector de mentiras". No importa que la venta esté en papel, ¿El dinero ya cruzó la puerta de entrada de la empresa?</p>
              </div>
           </div>
       </div>

       <div className="hidden md:flex flex-1 items-center justify-center relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="bg-slate-800 border border-slate-600 shadow-2xl rounded-lg p-4 rotate-3 z-10 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
                  <BarChart3 className="text-blue-400" size={16}/>
                  <span className="text-xs font-mono font-bold text-slate-300">NVDA (NVIDIA CORP)</span>
              </div>
              <div className="space-y-2">
                  <div className="flex justify-between text-[10px]"><span className="text-slate-400">Sales Growth (YoY):</span><span className="text-emerald-400 font-bold">+125%</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-slate-400">Debt to Equity:</span><span className="text-slate-300 font-bold">0.45</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-slate-400">Free Cash Flow:</span><span className="text-emerald-400 font-bold">Positivo</span></div>
              </div>
              <div className="mt-4 bg-slate-900 border border-emerald-500/20 text-emerald-400 px-2 py-1 text-center rounded text-[9px] uppercase tracking-widest font-bold">Dictamen: Sano</div>
          </div>
       </div>
    </div>
);

const SummaryTable = () => (
  <div className="mt-6 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
    <div className="bg-slate-800 p-3 border-b border-slate-700"><h4 className="text-purple-400 font-bold text-sm text-center uppercase tracking-widest">Matriz de Estrategia de Capital</h4></div>
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
            <tr className="bg-slate-900/80 border-b border-purple-500/20">
                <th className="p-3 text-slate-400 text-[10px] uppercase tracking-wider w-1/4">Activo</th>
                <th className="p-3 text-slate-400 text-[10px] uppercase tracking-wider w-1/6">Riesgo</th>
                <th className="p-3 text-slate-400 text-[10px] uppercase tracking-wider w-1/4">Herramienta Ideal</th>
                <th className="p-3 text-purple-400 text-[10px] uppercase tracking-wider">Nota FA Academy</th>
            </tr>
        </thead>
        <tbody className="text-slate-300 text-xs">
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-3 font-bold">Acciones (Ej. Cemex)</td>
                <td className="p-3 text-orange-400 font-bold">Alto</td>
                <td className="p-3 text-slate-400">Análisis Fundamental</td>
                <td className="p-3">Observa el ciclo macro (tasas e infraestructura).</td>
            </tr>
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-3 font-bold">FIBRAS Inmobiliarias</td>
                <td className="p-3 text-yellow-400 font-bold">Medio</td>
                <td className="p-3 text-slate-400">Rendimiento x Dividendo</td>
                <td className="p-3">Excelente para flujo de efectivo mensual/trimestral.</td>
            </tr>
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-3 font-bold">ETFs (Ej. IVV)</td>
                <td className="p-3 text-yellow-400 font-bold">Medio</td>
                <td className="p-3 text-slate-400">Diversificación Pasiva</td>
                <td className="p-3">Tu base estructural. Sé dueño de las 500 mejores empresas.</td>
            </tr>
            <tr className="hover:bg-slate-800/50 transition-colors bg-slate-800/20">
                <td className="p-3 font-bold">Criptoactivos</td>
                <td className="p-3 text-red-500 font-bold">Extremo</td>
                <td className="p-3 text-slate-400">Análisis Técnico</td>
                <td className="p-3">Asignación mínima. Solo capital dispuesto a perder.</td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
);

const QuoteCard = ({ quote }) => (
    <div className="my-6 relative p-6 bg-slate-800/80 rounded-xl border-l-4 border-indigo-500 shadow-lg">
        <Quote size={24} className="text-indigo-500/30 absolute top-4 left-4" />
        <p className="text-sm md:text-base text-slate-300 font-serif italic relative z-10 pl-6 pr-2 leading-relaxed">"{quote.text}"</p>
        <p className="text-[10px] text-indigo-400 mt-3 font-bold uppercase tracking-widest pl-6">— {quote.author}</p>
    </div>
);

const NewsSnippet = ({ news }) => (
    <div className="my-6 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl">
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
            <Newspaper size={16} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{news.source}</span>
        </div>
        <div className="p-5">
            <h4 className="text-lg font-bold text-white mb-2">{news.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed italic">"{news.text}"</p>
        </div>
    </div>
);

const ConceptsBar = ({ concepts }) => {
  const [activeConcept, setActiveConcept] = useState(null);
  if (!concepts || concepts.length === 0) return null;
  return (
    <div className="mt-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
      <h4 className="text-purple-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Glosario FA Academy</h4>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept, idx) => (
          <div key={idx} className="relative group">
            <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
            {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-purple-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-purple-500 transform rotate-45"></div><h5 className="text-purple-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL APP FA ACADEMY - MODULO 2 ---

export default function AppFAAcademyModulo2() {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const moduleData = courseData[currentModule];
  const lessonData = moduleData.lessons[currentLesson];
  const totalModules = courseData.length;

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

  const handleQuizAnswer = (qId, optionIdx) => {
    setQuizAnswers({ ...quizAnswers, [qId]: optionIdx });
  };

  const submitQuiz = () => {
    let calculatedScore = 0;
    quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correct) calculatedScore++; });
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "527711960057";
    let message = `📈 *Resultados FA Academy: Mercado de Capitales* 📈%0A%0A`;
    message += `Calificación: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
    message += `Completé el Módulo de Renta Variable y Acciones.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type) => {
    switch(type) {
      case 'action_anatomy': return <ActionAnatomy />;
      case 'fundamental_metrics': return <FundamentalMetrics />;
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

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <div className="max-w-2xl w-full animate-fade-in">
          <h1 className="text-3xl font-bold text-purple-400 mb-2 text-center">Evaluación FA Academy</h1>
          <p className="text-slate-400 text-center mb-8">Mercado de Capitales y Análisis de Negocios</p>
          
          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                  <p className="font-bold text-lg mb-4 text-white"><span className="text-purple-500 mr-2">#{index + 1}</span> {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-purple-600 border-purple-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Resumen Final antes de enviar */}
              <div className="mt-8 mb-4">
                  <SummaryTable />
              </div>

              <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Calificar Evaluación</button></div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-10">
              <div className="bg-slate-800 p-8 rounded-2xl border border-purple-500/50 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                <Target className="w-24 h-24 text-purple-400 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-white">¡Módulo Completado!</h2>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 my-6">{score} / {quizQuestions.length}</div>
                <p className="text-slate-400 text-sm">Ya no eres solo un ahorrador, ahora eres un estratega dueño de negocios.</p>
              </div>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados FA Academy</a>
              <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-purple-400 text-sm underline">Revisar Módulo</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentLesson + 1) / moduleData.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-2 rounded-lg"><Landmark className="text-white" size={20} strokeWidth={2.5}/></div>
            <div>
                <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest hidden md:block">Módulo Avanzado</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
            <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2"><span className="bg-purple-500/10 text-purple-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-purple-500/20">{moduleData.title}</span></div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><LineChart size={120} className="text-slate-500" /></div>
          {renderVisual(lessonData.visualType)}
        </div>
        
        <div className="space-y-6 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg"><p className="text-lg md:text-xl text-purple-100 font-medium leading-relaxed">{lessonData.content}</p></div>
          
          <div className="flex gap-4 items-start">
              <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300"/></div>
              <div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p>
                  <p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-purple-400 font-bold not-italic shrink-0">💡 Nota del Instructor:</span><span>{lessonData.speakerNotes}</span></p>
              </div>
          </div>

          {lessonData.quote && <QuoteCard quote={lessonData.quote} />}
          {lessonData.newsSnippet && <NewsSnippet news={lessonData.newsSnippet} />}
          
          <ConceptsBar concepts={lessonData.concepts} />
        </div>
      </main>

      <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
          <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-purple-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
          <button onClick={handleNext} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] active:scale-95">
             <span className="hidden md:inline">{(currentLesson === moduleData.lessons.length - 1) ? 'Examen Final' : 'Siguiente'}</span>
             <span className="md:hidden">{(currentLesson === moduleData.lessons.length - 1) ? 'Examen' : 'Sig.'}</span>
             <ArrowRight size={20} />
          </button>
        </div>
      </footer>
      
      <style>{`
        @keyframes fade-in {from { opacity: 0; transform: translateY(10px); }to { opacity: 1; transform: translateY(0); }}
        @keyframes fade-in-up {from { opacity: 0; transform: translateY(5px); }to { opacity: 1; transform: translateY(0); }}
        .animate-fade-in {animation: fade-in 0.5s ease-out forwards;}
        .animate-fade-in-up {animation: fade-in-up 0.2s ease-out forwards;}
        .animate-pulse-slow {animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;}
      `}</style>
    </div>
  );
}