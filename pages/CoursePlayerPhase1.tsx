import React, { useState } from 'react';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, Calculator,
  ShieldCheck, Landmark, Brain, Quote, 
  AlertTriangle, Layers, UserCheck, Newspaper,
  CheckCircle, ChevronRight, Book, Scale, Building2
} from 'lucide-react';

// --- DATOS FA ACADEMY: MÓDULO 1 ---

const courseData = [
  {
    id: 1,
    title: "FA Academy: Fundamentos y Mentalidad Financiera",
    description: "Rompe tus barreras psicológicas y prepara el terreno antes de comprar tu primera acción.",
    lessons: [
      {
        title: "El Perfil del Inversionista 2026",
        content: "Tu perfil no es estático; es la intersección entre tu cartera y tu mente.",
        details: "Según la AMIB, el mayor error del inversionista retail en México es saltarse este paso por 'FOMO' (miedo a quedarse fuera). Tu perfil evoluciona con la edad y tus objetivos. Para metas a corto plazo (ej. pago de impuestos SIATEC), usa deuda gubernamental. Para el retiro, la renta variable es vital. En 2025-2026, el IPC demostró que un perfil 'Agresivo' debe soportar caídas del 20% sin vender.",
        visualType: "investor_profile",
        videoUrls: ["QcvcUhi0jj8"],
        quote: { 
            text: "Antes de invertir, debes realizar un diagnóstico de tu salud financiera. No puedes invertir dinero que vas a necesitar para pagar la renta el próximo mes. El perfil se define por la intersección entre tu capacidad financiera y tu estabilidad psicológica.", 
            author: "Guía de Educación Financiera, CONDUSEF" 
        },
        speakerNotes: "El FOMO te hace comprar cuando todo está caro. Conocer tu perfil te da la disciplina para apagar el celular cuando el mercado entra en pánico.",
        concepts: [
          { term: "AMIB", def: "Asociación Mexicana de Instituciones Bursátiles. Representa y certifica a los profesionales del mercado de valores." },
          { term: "FOMO", def: "Fear Of Missing Out. Comprar impulsivamente por miedo a perderte una ganancia que otros están teniendo." },
          { term: "Horizonte de Inversión", def: "El tiempo exacto en el que necesitarás usar el dinero invertido. Define qué tanto riesgo puedes tomar." }
        ]
      },
      {
        title: "Matemáticas: El Poder del Interés Compuesto",
        content: "El lenguaje del dinero. Protege tu capital del enemigo silencioso.",
        details: "En 2026, Banxico mantiene la inflación cerca del 3%. Si tu inversión nominal da 9%, y la inflación es 4.5%, tu riqueza real crece mucho menos. Pero aquí entra la Octava Maravilla: el Interés Compuesto. No solo ganas sobre tu capital, sino que ganas intereses sobre los intereses ya ganados. Es el motor de la riqueza generacional.",
        visualType: "financial_math",
        videoUrls: ["kwVUlQIKJVs"],
        speakerNotes: "Entender la 'Tasa Real' te salvará de inversiones engañosas. Un pagaré bancario del 5% cuando la inflación es del 6%, te está haciendo perder dinero silenciosamente.",
        concepts: [
          { term: "Inflación (Banxico)", def: "El aumento de precios. Banxico tiene el mandato de mantenerla en un objetivo del 3% (+/- 1%)." },
          { term: "Tasa Nominal", def: "El porcentaje de ganancia que te promete el banco o la plataforma, sin descontar inflación ni impuestos." },
          { term: "Tasa Real", def: "Tu ganancia VERDADERA. Se calcula restando la inflación a tu tasa nominal." }
        ]
      },
      {
        title: "El Ecosistema: Sistema Financiero Mexicano",
        content: "Conoce a los árbitros que protegen tu capital.",
        details: "El sistema está diseñado para proteger al ahorrador, pero solo si usas instituciones autorizadas. Si una plataforma no está regulada por la CNBV o no aparece en el SIPRES, huye. Además, México cuenta con dos bolsas (BMV y BIVA), compitiendo para traer mejores opciones, incluyendo a las PYMES.",
        visualType: "mexican_system_table",
        newsSnippet: {
            title: "Boom de Inversionistas Retail",
            text: "La CNBV reporta un incremento del 15% en cuentas de inversión minoristas en el primer trimestre de 2026, impulsado por plataformas tecnológicas que facilitan el acceso a la Bolsa Mexicana de Valores desde montos mínimos de $100 pesos.",
            source: "El Economista (Sección Mercados, 2026)"
        },
        speakerNotes: "Nunca entregues tu dinero a plataformas extranjeras de dudosa procedencia o a 'gurús' en redes sociales. Usa el SIPRES, es tu escudo anti-estafas.",
        concepts: [
          { term: "SIPRES", def: "Sistema de Registro de Prestadores de Servicios Financieros (CONDUSEF). El buscador oficial para saber si una empresa es legal." },
          { term: "BIVA", def: "Bolsa Institucional de Valores. La segunda bolsa del país, impulsó la modernización y entrada de nuevas empresas al mercado." }
        ]
      },
      {
        title: 'El "Por Qué" antes del "Cómo"',
        content: "No es lo mismo ahorrar por ahorrar que invertir con un propósito claro.",
        details: "El mayor error de los principiantes es entrar a la bolsa sin un objetivo. Tu estrategia cambia drásticamente si estás invirtiendo para retirarte a los 50 años, o si buscas capitalizar un negocio propio como SIATEC en los próximos 3 años. Definir tu meta temporal y financiera es el verdadero primer paso.",
        visualType: "financial_goals",
        quote: { 
            text: "El dinero sin un propósito es dinero que se gasta fácil. Cuando pones nombre y apellido a tu inversión (Ej. Retiro, Casa, Negocio), tu disciplina se vuelve inquebrantable.", 
            author: "Mentalidad FA Academy" 
        },
        speakerNotes: "Escribe tu meta en un post-it y pégalo en tu PC. Cada vez que sientas pánico por una caída del mercado, lee tu meta. Si es a largo plazo, el pánico de hoy es irrelevante.",
        concepts: [
          { term: "Ahorro", def: "Guardar dinero para emergencias o gastos de corto plazo. Pierde valor por la inflación." },
          { term: "Inversión", def: "Poner el dinero a trabajar para que genere más dinero en el tiempo y supere a la inflación." },
          { term: "Horizonte de Inversión", def: "El lapso de tiempo durante el cual planeas mantener invertido tu dinero antes de necesitarlo." }
        ]
      },
      {
        title: "Deuda vs. Inversión (Deuda Mala vs. Deuda Buena)",
        content: "Sana tus finanzas antes de soñar con comprar acciones tecnológicas.",
        details: "Es matemáticamente un suicidio invertir en la bolsa esperando un 10-15% de rendimiento anual, si al mismo tiempo tienes deudas de tarjeta de crédito que te cobran el 50-70% de interés anual (CAT). Antes de comprar tu primera acción de Meta o Novo Nordisk, necesitas estructurar y liquidar la deuda 'mala'.",
        visualType: "debt_vs_investment",
        speakerNotes: "No toda la deuda es mala. La deuda para comprar un activo que genera flujo de caja (como un bien raíz para rentar) puede ser buena. Pero la deuda de consumo (pantallas, viajes a MSI) destruye tu capacidad de inversión.",
        concepts: [
          { term: "CAT (Costo Anual Total)", def: "Indicador del costo total de financiamiento que incluye la tasa de interés, comisiones y primas, expresado en porcentaje anual." },
          { term: "Deuda Mala", def: "Dinero prestado a tasas altas para comprar cosas que pierden valor con el tiempo (autos, ropa, salidas)." },
          { term: "Deuda Buena", def: "Dinero prestado a tasas bajas para adquirir activos que suben de valor o generan ingresos (educación, maquinaria, inmuebles)." }
        ]
      },
      {
        title: "Interés Compuesto (La Magia del Tiempo)",
        content: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es hoy.",
        details: "El Interés Compuesto significa ganar intereses sobre tus intereses anteriores. Es la fuerza más poderosa del universo financiero. Acelerar tu inicio tiene un impacto monetario brutal: alguien que empieza a los 26 años con montos pequeños terminará con millones de diferencia en comparación con alguien que empieza a los 40, aunque el de 40 invierta el doble cada mes.",
        visualType: "compound_interest_magic",
        quote: { 
            text: "El interés compuesto es la octava maravilla del mundo. El que lo entiende, lo gana; el que no, lo paga.", 
            author: "Albert Einstein (Atribuido)" 
        },
        speakerNotes: "El tiempo hace todo el trabajo pesado por ti. Cada año que retrasas tu primera inversión, te cuesta literalmente millones en el futuro. No esperes a 'tener más dinero' para empezar.",
        concepts: [
          { term: "Interés Simple", def: "Ganas intereses únicamente sobre tu capital original. Crecimiento lineal." },
          { term: "Interés Compuesto", def: "Ganas intereses sobre tu capital más los intereses acumulados. Crecimiento exponencial." },
          { term: "Rendimiento Anualizado", def: "La tasa promedio de crecimiento de una inversión en el transcurso de un año." }
        ]
      },
      {
        title: "Introducción al Sistema Financiero",
        content: "Entendiendo las reglas del juego y quiénes son los jugadores centrales.",
        details: "El dinero nunca duerme, solo cambia de manos. Los mercados conectan a quienes necesitan dinero (empresas) con quienes tienen ahorros (tú). Para que esto sea seguro, existen reguladores (CNBV, Banxico) que vigilan a los intermediarios (Casas de Bolsa). Tu dinero no vuela al vacío, se convierte en títulos de propiedad custodiados legalmente.",
        visualType: "system_intro",
        newsSnippet: {
            title: "El Mercado Mexicano se Moderniza",
            text: "La digitalización ha permitido que cualquier joven con una cuenta bancaria pueda acceder a la Bolsa Mexicana de Valores y a mercados globales en cuestión de minutos, eliminando los monopolios de inversión.",
            source: "Financial Times Latam"
        },
        speakerNotes: "La bolsa no es un casino. Es un mercado regulado estrictamente. Si entiendes quién custodia tus acciones (el INDEVAL en México), dormirás tranquilo sabiendo que tu dinero es tuyo, sin importar si la app de tu bróker falla un día.",
        concepts: [
          { term: "Bróker / Casa de Bolsa", def: "El intermediario autorizado que ejecuta tus órdenes de compra y venta en el mercado." },
          { term: "CNBV", def: "Comisión Nacional Bancaria y de Valores. El árbitro que vigila que las casas de bolsa no hagan fraudes." },
          { term: "INDEVAL", def: "La bóveda digital de México. Organismo que guarda y registra que TÚ eres el dueño legal de tus acciones reales, no el bróker." }
        ]
      }
    ]
  }
];

const quizQuestions = [
  { id: 1, question: "Según CONDUSEF, ¿qué define tu perfil de inversión?", options: ["Tu edad y tu signo zodiacal.", "La intersección entre tu capacidad financiera y tu estabilidad psicológica.", "Cuánto dinero quieres ganar en un mes.", "Tu nivel de estudios."], correct: 1 },
  { id: 2, question: "Si inviertes a una tasa del 9% y la inflación es del 4.5%, ¿qué estás calculando si ajustas esa diferencia?", options: ["La Tasa Nominal.", "La Tasa Real.", "El Interés Compuesto.", "El CAT."], correct: 1 },
  { id: 3, question: "¿Qué hace la 'Octava Maravilla' (El Interés Compuesto)?", options: ["Te cobra impuestos mensuales.", "Genera intereses solo sobre tu capital inicial.", "Genera intereses sobre los intereses ya ganados, creando una curva exponencial.", "Evita que la bolsa caiga."], correct: 2 },
  { id: 4, question: "¿Qué institución garantiza tus ahorros bancarios hasta por ~3.2 millones de pesos en México?", options: ["BANXICO", "CNBV", "IPAB", "BMV"], correct: 2 },
  { id: 5, question: "¿Qué debes hacer si una plataforma de inversión NO aparece en el SIPRES?", options: ["Invertir poco a poco.", "Evitarla completamente, es una estafa potencial.", "Pedirles su RFC.", "Confiar si tienen muchos seguidores en Instagram."], correct: 1 },
  { id: 6, question: "Si quieres usar tus inversiones para capitalizar un negocio en 2 años, ¿deberías invertir todo en acciones de alto riesgo?", options: ["Sí, porque puedes duplicar el dinero rápido.", "No. Ese dinero tiene un 'por qué' de corto plazo y el riesgo debe ser bajo.", "Solo si el negocio es de tecnología.", "Depende de tu signo zodiacal."], correct: 1 },
    { id: 7, question: "Tienes una deuda de tarjeta de crédito con un CAT del 60% y mil pesos libres. ¿Qué haces?", options: ["Inviertes los mil pesos en S&P 500 para ganar un 10%.", "Sanas tu deuda pagando a la tarjeta, garantizando un 'rendimiento' del 60%.", "Compras acciones de Novo Nordisk.", "Los ahorras en el banco."], correct: 1 },
    { id: 8, question: "La maravilla del Interés Compuesto se basa principalmente en:", options: ["Ganar siempre el 20% anual.", "Generar intereses sobre los intereses previamente ganados a lo largo del tiempo.", "Invertir grandes sumas de dinero a los 50 años.", "Que el gobierno te da subsidios."], correct: 1 },
    { id: 9, question: "Vas a transferir dinero a un bróker para empezar a invertir. ¿Qué institución mexicana te asegura que el bróker está regulado y no es una estafa?", options: ["SAT", "PROFECO", "CNBV", "Pemex"], correct: 2 },
    { id: 10, question: "¿Cuál es la función del INDEVAL en el sistema financiero?", options: ["Decir a qué precio abrirá la bolsa.", "Custodiar legalmente los títulos y registrar que las acciones son tuyas, pase lo que le pase al bróker.", "Prestar dinero a los bancos.", "Vender criptomonedas."], correct: 1 }
];

// --- COMPONENTES VISUALES MÓDULO 1 ---
const InvestorProfile = () => (
    <div className="flex flex-col items-center mt-6 bg-slate-900 p-6 rounded-xl border border-teal-500/20 shadow-lg">
        <h4 className="text-teal-400 font-bold mb-6 text-sm tracking-widest uppercase">La Intersección del Perfil</h4>
        
        <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
            {/* Circle 1: Financial Capacity */}
            <div className="absolute left-8 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/80 bg-blue-500/10 flex items-center justify-start pl-4 md:pl-8">
                <div className="text-center">
                    <span className="block text-blue-400 font-bold text-xs md:text-sm">Capacidad<br/>Financiera</span>
                </div>
            </div>
            
            {/* Circle 2: Psychological Stability */}
            <div className="absolute right-8 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-500/80 bg-amber-500/10 flex items-center justify-end pr-4 md:pr-8">
                <div className="text-center">
                    <span className="block text-amber-400 font-bold text-xs md:text-sm">Estabilidad<br/>Psicológica</span>
                </div>
            </div>

            {/* Intersection */}
            <div className="z-10 bg-slate-800 p-3 rounded-xl border-2 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.4)] text-center animate-pulse-slow">
                <UserCheck className="mx-auto text-teal-400 mb-1" size={24}/>
                <span className="block text-white font-bold text-xs">TU PERFIL</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-slate-800/80 p-4 rounded-lg border-l-2 border-teal-500">
                <p className="text-teal-400 font-bold text-xs mb-1">Horizonte Corto (Impuestos)</p>
                <p className="text-slate-300 text-[10px]">Cetes / Deuda. Cero volatilidad. Capacidad de liquidez inmediata.</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border-l-2 border-red-500">
                <p className="text-red-400 font-bold text-xs mb-1">Horizonte Largo (Retiro)</p>
                <p className="text-slate-300 text-[10px]">Renta Variable (IPC). Soportar caídas del -20% sin pánico.</p>
            </div>
        </div>
    </div>
);

const FinancialMath = () => (
    <div className="mt-6 space-y-6">
        {/* Formulas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-600 flex flex-col items-center justify-center group hover:border-amber-500 transition-colors">
                <h5 className="text-slate-400 text-xs font-bold uppercase mb-3">Tasa Real (Inflación)</h5>
                <div className="bg-slate-900 p-3 rounded-lg text-amber-400 font-mono text-sm md:text-base tracking-widest border border-slate-700 shadow-inner">
                    r = [(1 + i) / (1 + π)] - 1
                </div>
                <div className="flex gap-4 mt-3 text-[9px] text-slate-500">
                    <span><strong className="text-white">r:</strong> Tasa Real</span>
                    <span><strong className="text-white">i:</strong> Nominal</span>
                    <span><strong className="text-white">π:</strong> Inflación</span>
                </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-600 flex flex-col items-center justify-center group hover:border-teal-500 transition-colors">
                <h5 className="text-slate-400 text-xs font-bold uppercase mb-3">Valor Futuro (Compuesto)</h5>
                <div className="bg-slate-900 p-3 rounded-lg text-teal-400 font-mono text-sm md:text-base tracking-widest border border-slate-700 shadow-inner">
                    VF = VP × (1 + i)ⁿ
                </div>
                <div className="flex gap-4 mt-3 text-[9px] text-slate-500">
                    <span><strong className="text-white">VP:</strong> Capital</span>
                    <span><strong className="text-white">n:</strong> Años</span>
                </div>
            </div>
        </div>

        {/* Growth Example */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-teal-500/30 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10"><TrendingUp size={150} /></div>
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <Calculator size={18} className="text-teal-500"/> Ejemplo FA Academy (20 Años al 10%)
            </h4>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="text-center w-full md:w-1/3">
                    <p className="text-xs text-slate-400 mb-1">Capital Inicial (VP)</p>
                    <div className="text-xl font-bold text-white bg-slate-800 py-2 rounded-lg border border-slate-700">$10,000 MXN</div>
                </div>
                
                <div className="flex flex-col gap-2 w-full md:w-2/3">
                    <div className="relative h-10 w-full bg-slate-800 rounded-lg flex items-center border border-slate-700 overflow-hidden">
                        <div className="bg-slate-600 h-full flex items-center px-3 w-[45%] text-[10px] text-white">Int. Simple: $30,000</div>
                    </div>
                    <div className="relative h-10 w-full bg-slate-800 rounded-lg flex items-center border border-teal-500/50 overflow-hidden shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                        <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-full flex items-center px-3 w-full text-[12px] font-bold text-white">Int. Compuesto: $67,275 MXN</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MexicanSystemTable = () => (
  <div className="mt-6 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
    <div className="bg-slate-800 p-3 border-b border-slate-700">
        <h4 className="text-teal-400 font-bold text-sm text-center uppercase tracking-widest">Organigrama de Seguridad</h4>
    </div>
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
            <tr className="bg-slate-900/80">
            <th className="p-4 text-slate-400 text-xs uppercase tracking-wider w-1/4">Entidad</th>
            <th className="p-4 text-slate-400 text-xs uppercase tracking-wider w-1/3">Función Principal</th>
            <th className="p-4 text-teal-400 text-xs uppercase tracking-wider">Por qué le importa al alumno</th>
            </tr>
        </thead>
        <tbody className="text-slate-200 text-sm">
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><Landmark className="text-amber-500" size={16}/> BANXICO</td>
                <td className="p-4 text-slate-300 text-xs">Controlar la inflación y política monetaria.</td>
                <td className="p-4 text-xs">Determina cuánto rinden tus Cetes y el costo de los créditos.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><Scale className="text-blue-500" size={16}/> CNBV</td>
                <td className="p-4 text-slate-300 text-xs">Supervisar intermediarios financieros.</td>
                <td className="p-4 text-xs">Asegura que tu Casa de Bolsa siga las reglas y no desaparezca con tu dinero.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><ShieldCheck className="text-green-500" size={16}/> IPAB</td>
                <td className="p-4 text-slate-300 text-xs">Seguro de depósitos bancarios.</td>
                <td className="p-4 text-xs">Protege tus ahorros en el banco hasta ~3.2 millones de pesos (400 mil UDIs).</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors bg-slate-800/20">
                <td className="p-4 font-bold flex items-center gap-2"><Activity className="text-teal-500" size={16}/> BMV / BIVA</td>
                <td className="p-4 text-slate-300 text-xs">Mercados de intercambio.</td>
                <td className="p-4 text-xs">Son los "supermercados" donde compras las acciones de las empresas.</td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
);

const FinancialGoals = () => (
    <div className="flex flex-col items-center mt-6 p-6 bg-slate-900 rounded-xl border border-teal-500/20 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Target size={150} className="text-teal-400"/></div>
        <h4 className="text-teal-400 font-bold mb-6 text-sm tracking-widest uppercase relative z-10">La Brújula del Inversionista</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
            <div className="bg-slate-800/80 p-5 rounded-xl border-t-4 border-blue-500 hover:scale-105 transition-transform">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-blue-400 font-bold">Objetivo: Capitalizar Negocio</h5>
                    <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-1 rounded">Corto/Medio Plazo</span>
                </div>
                <ul className="text-sm text-slate-300 space-y-2">
                    <li><strong className="text-slate-100">Horizonte:</strong> 1 a 3 años (Ej. SIATEC).</li>
                    <li><strong className="text-slate-100">Estrategia:</strong> Preservación de capital.</li>
                    <li><strong className="text-slate-100">Instrumentos:</strong> Deuda gubernamental (Cetes), pagarés bancarios. Cero renta variable.</li>
                </ul>
            </div>
            
            <div className="bg-slate-800/80 p-5 rounded-xl border-t-4 border-amber-500 hover:scale-105 transition-transform">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-amber-400 font-bold">Objetivo: Libertad Financiera</h5>
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-1 rounded">Largo Plazo</span>
                </div>
                <ul className="text-sm text-slate-300 space-y-2">
                    <li><strong className="text-slate-100">Horizonte:</strong> 15+ años (Retiro joven).</li>
                    <li><strong className="text-slate-100">Estrategia:</strong> Crecimiento agresivo.</li>
                    <li><strong className="text-slate-100">Instrumentos:</strong> Acciones, ETFs (S&P 500), Fibras. Tolerancia a caídas fuertes.</li>
                </ul>
            </div>
        </div>
    </div>
);

const DebtVsInvestment = () => (
    <div className="mt-6 flex flex-col md:flex-row gap-6 relative">
        <div className="flex-1 bg-gradient-to-br from-red-900/40 to-slate-900 p-6 rounded-xl border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
            <h4 className="text-red-400 font-bold text-lg mb-2 flex items-center gap-2"><AlertTriangle size={20}/> Deuda de Consumo</h4>
            <div className="flex justify-between items-end mb-4 border-b border-red-500/30 pb-2">
                <span className="text-slate-400 text-sm">CAT Promedio (Tarjetas)</span>
                <span className="text-red-400 text-3xl font-black">~65%</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                El efecto del interés compuesto trabajando <strong>en tu contra</strong>. Cada peso que pagas de intereses en tu tarjeta es dinero que destruye tu futuro.
            </p>
            <div className="bg-red-500/10 text-red-300 text-[10px] p-2 rounded">
                Efecto: Salir a cenar con TC y pagar los mínimos duplica el costo de tu cena en 18 meses.
            </div>
        </div>

        <div className="flex items-center justify-center -mx-4 z-10 transform rotate-90 md:rotate-0">
            <div className="bg-slate-800 p-2 rounded-full border border-slate-600 shadow-xl">
                <ArrowRight size={24} className="text-slate-400" />
            </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-emerald-900/40 to-slate-900 p-6 rounded-xl border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <h4 className="text-emerald-400 font-bold text-lg mb-2 flex items-center gap-2"><TrendingUp size={20}/> Inversión Bursátil</h4>
            <div className="flex justify-between items-end mb-4 border-b border-emerald-500/30 pb-2">
                <span className="text-slate-400 text-sm">Rendimiento S&P 500</span>
                <span className="text-emerald-400 text-3xl font-black">~10%</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                El interés compuesto trabajando <strong>a tu favor</strong>. Pero la matemática es fría: no puedes ganar un 10% si pierdes un 65% del otro lado.
            </p>
            <div className="bg-emerald-500/10 text-emerald-300 text-[10px] p-2 rounded font-bold">
                REGLA DE ORO: Paga TODA la deuda de tarjeta de crédito (Deuda Mala) antes de comprar tu primera acción.
            </div>
        </div>
    </div>
);

const CompoundInterestMagic = () => (
    <div className="mt-6 bg-slate-900 p-6 rounded-xl border border-teal-500/30 hover:shadow-[0_0_25px_rgba(20,184,166,0.2)] transition-shadow">
        <h4 className="text-white font-bold text-sm mb-6 flex items-center gap-2"><Calculator size={18} className="text-teal-400"/> El Costo de la Inacción (Invertir $3,000 MXN al mes al 10%)</h4>
        
        <div className="space-y-6">
            {/* Persona A: 26 años */}
            <div>
                <div className="flex justify-between mb-2 text-sm">
                    <span className="text-teal-400 font-bold">Empieza a los 26 años (Hasta los 60 = 34 años)</span>
                    <span className="text-white font-black">$10.2 Millones</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden flex border border-slate-700">
                    {/* Capital Invertido */}
                    <div className="bg-slate-600 h-full flex items-center px-2 text-[9px] text-white" style={{width: '20%'}}>
                        Su dinero: $1.2M
                    </div>
                    {/* Intereses Generados */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-full flex items-center px-4 text-[10px] font-bold text-slate-900" style={{width: '80%'}}>
                        Magia Compuesta: $9.0M
                    </div>
                </div>
            </div>

            {/* Persona B: 40 años */}
            <div>
                <div className="flex justify-between mb-2 text-sm text-slate-400">
                    <span className="text-amber-400 font-bold">Empieza a los 40 años (Hasta los 60 = 20 años)</span>
                    <span className="text-white font-black">$2.2 Millones</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden flex border border-slate-700">
                    {/* Capital Invertido */}
                    <div className="bg-slate-600 h-full flex items-center px-2 text-[9px] text-white" style={{width: '32%'}}>
                        Su dinero: $720k
                    </div>
                    {/* Intereses Generados */}
                    <div className="bg-amber-500 h-full flex items-center px-2 text-[10px] font-bold text-slate-900" style={{width: '28%'}}>
                        Intereses: $1.5M
                    </div>
                    <div className="bg-slate-800 flex-1 border-l border-slate-700/50 flex items-center justify-center relative overflow-hidden">
                       <span className="text-[10px] text-slate-500 z-10 italic">Dinero perdido por el tiempo: ~$8 Millones</span>
                       <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
                    </div>
                </div>
            </div>
            
            <p className="text-xs text-slate-400 text-center uppercase tracking-widest mt-4">
                "El tiempo en el mercado es más importante que sincronizar el mercado."
            </p>
        </div>
    </div>
);

const SystemIntro = () => (
  <div className="mt-6 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
    <div className="bg-slate-800 p-3 border-b border-slate-700">
        <h4 className="text-teal-400 font-bold text-sm text-center uppercase tracking-widest">Estructura del Mercado en México</h4>
    </div>
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
            <tr className="bg-slate-900/80">
            <th className="p-4 text-slate-400 text-xs uppercase tracking-wider w-1/4">Institución</th>
            <th className="p-4 text-slate-400 text-xs uppercase tracking-wider w-1/3">¿Qué Hacen?</th>
            <th className="p-4 text-teal-400 text-xs uppercase tracking-wider">¿Por qué te importa?</th>
            </tr>
        </thead>
        <tbody className="text-slate-200 text-sm">
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><Scale className="text-blue-500" size={16}/> CNBV</td>
                <td className="p-4 text-slate-300 text-xs">Vigila y regula a todas las entidades financieras.</td>
                <td className="p-4 text-xs font-bold text-blue-200">Garantiza que la app de tu Bróker no es una estafa piramidal.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><Building2 className="text-teal-500" size={16}/> Bróker (Ej. GBM)</td>
                <td className="p-4 text-slate-300 text-xs">La plataforma o app donde presionas "Comprar".</td>
                <td className="p-4 text-xs">Son los únicos autorizados para conectarte con la Bolsa.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-bold flex items-center gap-2"><ShieldCheck className="text-amber-500" size={16}/> INDEVAL</td>
                <td className="p-4 text-slate-300 text-xs">Custodia los valores de las bolsas.</td>
                <td className="p-4 text-xs font-bold text-amber-200">Guardan bajo llave digital tus acciones. Si tu Bróker quiebra, tus acciones siguen siendo tuyas.</td>
            </tr>
            <tr className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors bg-slate-800/20">
                <td className="p-4 font-bold flex items-center gap-2"><Activity className="text-purple-500" size={16}/> BMV / BIVA</td>
                <td className="p-4 text-slate-300 text-xs">Los mercados físicos/virtuales.</td>
                <td className="p-4 text-xs">Es el sitio real donde tu orden se empareja con un vendedor.</td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
);

const QuoteCard = ({ quote }) => (
    <div className="my-6 relative p-6 bg-slate-800/80 rounded-xl border-l-4 border-amber-500 shadow-lg">
        <Quote size={24} className="text-amber-500/30 absolute top-4 left-4" />
        <p className="text-sm md:text-base text-slate-300 font-serif italic relative z-10 pl-6 pr-2 leading-relaxed">"{quote.text}"</p>
        <p className="text-[10px] text-amber-500 mt-3 font-bold uppercase tracking-widest pl-6">— {quote.author}</p>
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
            <p className="text-sm text-slate-400 leading-relaxed">"{news.text}"</p>
        </div>
    </div>
);

const ConceptsBar = ({ concepts }) => {
  const [activeConcept, setActiveConcept] = useState(null);
  if (!concepts || concepts.length === 0) return null;
  return (
    <div className="mt-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
      <h4 className="text-teal-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Diccionario FA Academy</h4>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept, idx) => (
          <div key={idx} className="relative group">
            <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-teal-600 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
            {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-teal-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-teal-500 transform rotate-45"></div><h5 className="text-teal-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL APP FA ACADEMY ---

export default function AppFAAcademy() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const moduleData = courseData[0];
  const lessonData = moduleData.lessons[currentLesson];

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
    let message = `🎓 *Resultados FA Academy* 🎓%0A%0A`;
    message += `Calificación Final: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
    message += `He completado el módulo de Fundamentos del Mercado Mexicano.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type) => {
    switch(type) {
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

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <div className="max-w-2xl w-full animate-fade-in">
          <h1 className="text-3xl font-bold text-teal-400 mb-2 text-center">Examen FA Academy</h1>
          <p className="text-slate-400 text-center mb-8">Demuestra tu dominio del mercado local.</p>
          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                  <p className="font-bold text-lg mb-4 text-white"><span className="text-teal-500 mr-2">#{index + 1}</span> {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-teal-600 border-teal-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Terminar Evaluación</button></div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-10">
              <div className="bg-slate-800 p-8 rounded-2xl border border-teal-500/50 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(20,184,166,0.2)]">
                <Target className="w-24 h-24 text-teal-400 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-white">¡Módulo Completado!</h2>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 my-6">{score} / {quizQuestions.length}</div>
                <p className="text-slate-400 text-sm">Estás listo para operar en el sistema financiero de México.</p>
              </div>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados FA Academy</a>
              <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-teal-400 text-sm underline">Reiniciar Módulo</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans flex flex-col">
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 p-2 rounded-lg"><Landmark className="text-slate-900" size={20} strokeWidth={2.5}/></div>
            <div>
                <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
                <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest hidden md:block">Edición 2026</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}</div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full"><div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out" style={{ width: `${((currentLesson + 1) * 100) / moduleData.lessons.length}%` }}></div></div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2"><span className="bg-teal-500/10 text-teal-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-teal-500/20">{moduleData.title}</span></div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
        </div>
        
        {lessonData.videoUrls && lessonData.videoUrls.map((videoId: string, i: number) => (
          <div key={i} className="mb-6 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}

        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Layers size={120} className="text-slate-500" /></div>
          {renderVisual(lessonData.visualType)}
        </div>
        
        <div className="space-y-6 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-teal-500 shadow-lg"><p className="text-lg md:text-xl text-teal-100 font-medium leading-relaxed">{lessonData.content}</p></div>
          
          <div className="flex gap-4 items-start">
              <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300"/></div>
              <div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p>
                  <p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-teal-500 font-bold not-italic">💡 Tip FA Academy:</span>{lessonData.speakerNotes}</p>
              </div>
          </div>

          {/* Render Contextual Blocks if they exist in the lesson data */}
          {lessonData.quote && <QuoteCard quote={lessonData.quote} />}
          {lessonData.newsSnippet && <NewsSnippet news={lessonData.newsSnippet} />}
          
          <ConceptsBar concepts={lessonData.concepts} />
        </div>
      </main>

      <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
          <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-teal-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
          <button onClick={handleNext} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95"><span className="hidden md:inline">{currentLesson === moduleData.lessons.length - 1 ? 'Examen Final' : 'Siguiente'}</span><span className="md:hidden">{currentLesson === moduleData.lessons.length - 1 ? 'Examen' : 'Sig.'}</span><ArrowRight size={20} /></button>
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