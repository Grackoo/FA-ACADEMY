import React, { useState } from 'react';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Activity, 
  Target, Send, Info, BookOpen, PieChart,  
  Shield, Anchor, Brain, Quote, 
  AlertTriangle, Layers, Crosshair, 
  CheckCircle, ChevronRight, Book, RefreshCw, 
  TrendingDown, Landmark, Scale, FileText, 
  Calculator, UserCheck, Newspaper, ShieldAlert,
  Zap
} from 'lucide-react';

// --- DATOS FA ACADEMY: ESTRATEGIA MAESTRA Y FISCALIDAD 2026 ---

const courseData = [
  {
    id: 1,
    title: "FA Academy: Estrategia Maestra y Fiscalidad",
    description: "El Arte del Asset Allocation, Control de Riesgo y el SAT como tu socio silencioso.",
    lessons: [
      {
        title: "Asset Allocation: La Frontera Eficiente",
        content: "El 90% de tus rendimientos a largo plazo dependen de tu mezcla de activos, no de la acción individual.",
        details: "Inspirado en el modelo de David Swensen (Universidad de Yale), un portafolio robusto en 2026 exige activos no correlacionados. Tu cartera necesita un Motor (Acciones/Crecimiento), un Freno (Bonos/Defensa), un Flujo (FIBRAS/Rentas) y Combustible (Efectivo/Cetes). El secreto está en el 'Rebalanceo': vender lo que subió (caro) y comprar lo que bajó (barato) para volver a tus porcentajes originales.",
        visualType: "asset_allocation_master",
        source: "Libro: 'Unconventional Success' - David Swensen",
        quote: { text: "La diversificación es la única comida gratis en las finanzas.", author: "Harry Markowitz (Premio Nobel)" },
        speakerNotes: "El rebalanceo elimina la emoción. AMIB recomienda hacerlo al menos una vez al año o cuando un activo se desvía un 5%. Así evitas el sesgo de 'esperar a que suba más'.",
        concepts: [
          { term: "Asset Allocation", def: "La estrategia de dividir tu dinero entre diferentes clases de activos para equilibrar el riesgo y la recompensa." },
          { term: "Rebalanceo", def: "El proceso periódico de comprar y vender activos en tu portafolio para mantener el nivel original de asignación de activos deseado." },
          { term: "All Weather Portfolio", def: "Portafolio diseñado por Ray Dalio para sobrevivir a cualquier clima económico (inflación, deflación, crecimiento, recesión)." }
        ]
      },
      {
        title: "Gestión de Riesgo: Drawdown y Correlación",
        content: "No se trata de evitar el riesgo, sino de controlarlo milimétricamente.",
        details: "Un inversionista avanzado no permite que una posición se hunda indefinidamente. El 'Drawdown' es la caída máxima de tu portafolio desde su punto más alto; el objetivo es minimizar el tiempo de recuperación. Usa órdenes 'Stop-Loss' para cortar pérdidas. Además, no sirve de nada tener 10 acciones si todas son tecnológicas; la verdadera diversificación requiere correlación negativa.",
        visualType: "risk_control",
        source: "Libro: 'The Intelligent Investor' - Benjamin Graham",
        quote: { text: "Regla número 1: Nunca pierdas dinero. Regla número 2: Nunca olvides la regla número 1.", author: "Warren Buffett" },
        speakerNotes: "Un drawdown del 50% requiere un rendimiento del 100% solo para volver a quedar tablas (Break-even). Corta tus pérdidas rápido, deja correr tus ganancias.",
        concepts: [
          { term: "Drawdown", def: "El porcentaje de caída de un portafolio desde su pico máximo histórico hasta su punto más bajo." },
          { term: "Stop-Loss", def: "Una orden automática que vende tu activo si el precio cae a un nivel crítico, limitando tu pérdida máxima." },
          { term: "Correlación", def: "Medida de cómo se mueven dos activos juntos. Buscamos activos que hagan zig cuando los otros hacen zag." }
        ]
      },
      {
        title: "Fiscalidad en México: El 'Impuesto Cedular'",
        content: "Maximiza tu rendimiento DESPUÉS de impuestos.",
        details: "En México, la LISR (Ley del Impuesto Sobre la Renta) trata distinto las ganancias de capital y los dividendos. Si compras a $10 y vendes a $15, ganas $5; el Artículo 129 dicta una retención del 10% sobre esa ganancia real. Además, comprar acciones extranjeras vía el SIC (Sistema Internacional de Cotizaciones) te da el beneficio de esta misma tasa del 10%, en lugar del 35% de ingresos ordinarios.",
        visualType: "fiscal_rules",
        speakerNotes: "Ojo con los dividendos: sufren doble tributación. La empresa retiene un 10% definitivo, y el dividendo bruto se suma a tus ingresos anuales (aunque puedes acreditar parte del ISR pagado, Art. 140).",
        concepts: [
          { term: "Ganancia de Capital", def: "El beneficio obtenido por vender un activo a un precio mayor al que lo compraste. Gravado al 10% en bolsa." },
          { term: "SIC", def: "Sistema que permite invertir en acciones como Apple o ETFs de EE.UU. desde la BMV, gozando de ventajas fiscales locales." },
          { term: "Doble Retención", def: "El efecto fiscal donde el dinero paga ISR a nivel corporativo y luego vuelve a pagar cuando se reparte al accionista." }
        ]
      },
      {
        title: "Operatividad Fiscal y el SAT en 2026",
        content: "El SAT es tu socio silencioso; asegúrate de llevar las cuentas claras.",
        details: "En febrero/marzo, tu Casa de Bolsa (GBM, Actinver) emite la Constancia de Retenciones. Debes distinguir entre Interés Nominal e Interés Real (el que paga impuestos). Si vendiste acciones con pérdida, ¡esas pérdidas fiscales se pueden usar para no pagar impuestos sobre ganancias futuras durante los próximos 10 años! No olvides tus deducciones personales (PPR, Gastos Médicos).",
        visualType: "sat_operations",
        newsSnippet: {
            title: "El SAT y las Plataformas Digitales",
            text: "El SAT intensifica la vigilancia sobre los ingresos por plataformas tecnológicas y brokers extranjeros. Se recomienda a los contribuyentes utilizar las facturas automáticas emitidas por instituciones financieras mexicanas reguladas para evitar discrepancia fiscal.",
            source: "Boletín Fiscal SAT, Febrero 2026"
        },
        speakerNotes: "Tu Plan Personal de Retiro (PPR) es una joya fiscal. Puedes deducir hasta el 10% de tus ingresos anuales o 5 UMAs, lo que te devuelve dinero en efectivo en abril.",
        concepts: [
          { term: "Constancia Fiscal", def: "Documento oficial emitido por tu bróker que resume tus ganancias, pérdidas e impuestos retenidos en el año." },
          { term: "Pérdida Fiscal", def: "Si pierdes dinero en bolsa, el SAT te permite usar esa pérdida para compensar ganancias futuras y pagar menos ISR." },
          { term: "Discrepancia Fiscal", def: "Cuando gastas o inviertes más dinero del que le declaras al SAT como ingresos." }
        ]
      },
      {
        title: "Ética, Transparencia y Resumen Final",
        content: "La ética es el activo de mayor duración en las finanzas.",
        details: "Como estratega y dueño de capital, la transparencia es vital. Siempre declara 'Conflictos de Interés' si tienes una posición en las acciones que analizas. Actúa bajo el 'Fiduciary Duty' (Deber Fiduciario): poner el interés del portafolio/cliente por encima de la comisión. Revisa la matriz fiscal final y prepárate para ejecutar tu estrategia a largo plazo.",
        visualType: "ethics_and_closing",
        quote: { text: "Se necesitan 20 años para construir una reputación y cinco minutos para arruinarla. Si piensas en eso, harás las cosas diferente.", author: "Warren Buffett" },
        speakerNotes: "Felicidades, has llegado al final del bloque estratégico de FA Academy. Tu tarea: Entra a tu bróker, descarga tu constancia fiscal y verifica que tu portafolio no tenga 'fugas' de dinero por falta de rebalanceo.",
        concepts: [
          { term: "Fiduciary Duty", def: "La obligación legal y ética de actuar en el mejor interés de un cliente o de tu propio patrimonio familiar a largo plazo." },
          { term: "Conflicto de Interés", def: "Situación en la que el juicio de una persona está influenciado por un interés económico personal." }
        ]
      }
    ]
  }
];

const quizQuestions = [
  { id: 1, question: "Según el Modelo Yale y el Asset Allocation, ¿qué representa el Rebalanceo?", options: ["Dejar tu portafolio intacto por 10 años.", "La disciplina de vender activos que subieron de precio y comprar los que bajaron para mantener tus porcentajes.", "Comprar acciones cuando están en su máximo histórico.", "Pagar impuestos anticipadamente."], correct: 1 },
  { id: 2, question: "¿Qué sucede fiscalmente en México (Art. 129 LISR) si compras acciones extranjeras a través del SIC?", options: ["Pagas un 35% de ISR.", "Están exentas de cualquier impuesto.", "Tienen el mismo beneficio fiscal que las acciones locales: una tasa preferencial del 10% sobre la ganancia de capital.", "Te cobran impuestos en dólares."], correct: 2 },
  { id: 3, question: "¿Qué pasa si vendes acciones con pérdida en tu Casa de Bolsa mexicana?", options: ["El SAT te multa.", "Pierdes el dinero y ya.", "Puedes usar esa pérdida fiscal para compensar ganancias futuras y no pagar ISR sobre ellas hasta por 10 años.", "El bróker te cierra la cuenta."], correct: 2 },
  { id: 4, question: "En gestión de riesgo, ¿qué es el 'Drawdown'?", options: ["Una estrategia de evasión fiscal.", "El momento de apertura de la bolsa.", "La caída máxima de un portafolio desde su punto más alto (pico) hasta su punto más bajo.", "El pago de un dividendo."], correct: 2 },
  { id: 5, question: "¿Qué es el 'Fiduciary Duty' (Deber Fiduciario)?", options: ["Vender la acción que te dé más comisión.", "La obligación legal y ética de poner el interés del cliente/patrimonio por encima del beneficio propio.", "Pagar impuestos tarde.", "Un tipo de contrato de FIBRAs."], correct: 1 }
];

// --- COMPONENTES VISUALES FA ACADEMY (FASE 5) ---

const AssetAllocationMaster = () => (
    <div className="flex flex-col items-center mt-6 bg-slate-900 p-6 rounded-xl border border-amber-500/20">
        <h4 className="text-amber-400 font-bold mb-4 text-sm tracking-widest uppercase">Estrategia de Asignación (Swensen / Dalio)</h4>
        
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 w-full">
            {/* Pie Chart Simulado */}
            <div className="relative w-48 h-48 rounded-full border-4 border-slate-800 shadow-[0_0_30px_rgba(245,158,11,0.15)]" 
                 style={{background: 'conic-gradient(#F59E0B 0% 40%, #10B981 40% 65%, #3B82F6 65% 85%, #8B5CF6 85% 100%)'}}>
                 <div className="absolute inset-0 m-10 bg-slate-900 rounded-full flex items-center justify-center flex-col shadow-inner">
                    <Layers className="text-slate-400" size={24}/>
                 </div>
            </div>

            <div className="space-y-3 w-full md:w-1/2">
                <div className="bg-slate-800/80 p-2 rounded flex justify-between items-center border-l-4 border-amber-500">
                    <div>
                        <p className="text-amber-400 font-bold text-xs">Motor (40%)</p>
                        <p className="text-[10px] text-slate-400">Acciones / ETFs (Crecimiento)</p>
                    </div>
                    <Activity size={16} className="text-amber-500"/>
                </div>
                <div className="bg-slate-800/80 p-2 rounded flex justify-between items-center border-l-4 border-emerald-500">
                    <div>
                        <p className="text-emerald-400 font-bold text-xs">Freno (25%)</p>
                        <p className="text-[10px] text-slate-400">Bonos / Cetes (Estabilidad)</p>
                    </div>
                    <Shield size={16} className="text-emerald-500"/>
                </div>
                <div className="bg-slate-800/80 p-2 rounded flex justify-between items-center border-l-4 border-blue-500">
                    <div>
                        <p className="text-blue-400 font-bold text-xs">Flujo (20%)</p>
                        <p className="text-[10px] text-slate-400">FIBRAS / Real Estate (Rentas)</p>
                    </div>
                    <Landmark size={16} className="text-blue-500"/>
                </div>
                <div className="bg-slate-800/80 p-2 rounded flex justify-between items-center border-l-4 border-violet-500">
                    <div>
                        <p className="text-violet-400 font-bold text-xs">Combustible (15%)</p>
                        <p className="text-[10px] text-slate-400">Efectivo / Oro (Oportunidades)</p>
                    </div>
                    <Zap size={16} className="text-violet-500"/>
                </div>
            </div>
        </div>
        <div className="mt-4 w-full bg-amber-900/20 border border-amber-500/30 p-3 rounded-lg flex items-center justify-center gap-2">
            <RefreshCw size={14} className="text-amber-500 animate-spin-slow" />
            <span className="text-[10px] text-amber-200"><strong>Rebalanceo Activo:</strong> Vender ganancias anuales para comprar activos rezagados.</span>
        </div>
    </div>
);

const RiskControl = () => (
    <div className="mt-6 bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-xl relative overflow-hidden">
        <h4 className="text-white font-bold text-sm mb-4 text-center">Matemáticas del Drawdown (Pérdidas)</h4>
        
        <div className="relative h-40 w-full mb-4">
            <svg viewBox="0 0 300 100" className="w-full h-full">
                {/* Zero Line */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" />
                <text x="5" y="15" fill="#94A3B8" fontSize="8">Capital Inicial ($100)</text>

                {/* Drawdown Line */}
                <path d="M0,20 L50,50 L100,80 L150,60 L200,40 L300,10" fill="none" stroke="#EF4444" strokeWidth="2" />
                
                {/* Points & Annotations */}
                <circle cx="50" cy="50" r="3" fill="#F59E0B" />
                <text x="50" y="65" fill="#F59E0B" fontSize="8" textAnchor="middle">-10% (Requiere +11%)</text>

                <circle cx="100" cy="80" r="4" fill="#EF4444" className="animate-pulse" />
                <text x="100" y="95" fill="#EF4444" fontSize="8" textAnchor="middle">-50% (Requiere +100%)</text>
                
                {/* Stop Loss Line */}
                <line x1="0" y1="50" x2="300" y2="50" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2,2" />
                <text x="250" y="45" fill="#F59E0B" fontSize="8">ZONA DE STOP-LOSS</text>
            </svg>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center mt-2">
            <div className="bg-slate-800 p-3 rounded-lg border-l-2 border-red-500">
                <span className="block text-red-400 font-bold text-lg">-50% Caída</span>
                <span className="text-[10px] text-slate-400">Si tu portafolio baja a la mitad...</span>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg border-l-2 border-emerald-500">
                <span className="block text-emerald-400 font-bold text-lg">+100% Retorno</span>
                <span className="text-[10px] text-slate-400">...necesitas duplicarlo solo para empatar.</span>
            </div>
        </div>
    </div>
);

const FiscalRules = () => (
    <div className="flex flex-col gap-4 mt-6">
        <div className="bg-slate-800 p-4 rounded-xl border border-emerald-500/30 flex items-start gap-4">
            <div className="bg-emerald-900/20 p-2 rounded-full mt-1"><TrendingUp className="text-emerald-500" size={24}/></div>
            <div>
                <h5 className="font-bold text-white text-sm">Ganancias de Capital (Venta)</h5>
                <p className="text-xs text-slate-400 mt-1">Art. 129 LISR. Si ganas dinero al vender una acción (nacional o vía SIC), pagas un <strong className="text-emerald-400">10% definitivo</strong> sobre la ganancia real. Es un paraíso fiscal comparado con tu nómina.</p>
            </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-amber-500/30 flex items-start gap-4">
            <div className="bg-amber-900/20 p-2 rounded-full mt-1"><Activity className="text-amber-500" size={24}/></div>
            <div>
                <h5 className="font-bold text-white text-sm">Dividendos (La Doble Retención)</h5>
                <p className="text-xs text-slate-400 mt-1">La empresa te retiene el <strong className="text-amber-400">10%</strong>. Además, el monto bruto se acumula a tus ingresos anuales. Puedes acreditar el ISR corporativo (Art. 140).</p>
            </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-blue-500/30 flex items-start gap-4">
            <div className="bg-blue-900/20 p-2 rounded-full mt-1"><Scale className="text-blue-500" size={24}/></div>
            <div>
                <h5 className="font-bold text-white text-sm">FIBRAS (Régimen Inmobiliario)</h5>
                <p className="text-xs text-slate-400 mt-1">Si el pago es por 'Resultado Fiscal', se grava a tu tasa personal. Si es por 'Reembolso de Capital', es <strong className="text-blue-400">100% Libre de Impuestos</strong>.</p>
            </div>
        </div>
    </div>
);

const SatOperations = () => (
    <div className="mt-6 bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2"><FileText className="text-amber-500" size={18}/> Check-List de la Declaración Anual</h4>
        <ul className="space-y-3">
            <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg border-l-2 border-amber-500">
                <CheckCircle size={16} className="text-amber-500 shrink-0 mt-0.5"/>
                <div>
                    <span className="text-xs font-bold text-slate-200 block">Descargar Constancias (Feb-Mar)</span>
                    <span className="text-[10px] text-slate-400">Tu bróker debe darte el documento con las retenciones exactas para el pre-llenado del SAT.</span>
                </div>
            </li>
            <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg border-l-2 border-emerald-500">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                <div>
                    <span className="text-xs font-bold text-slate-200 block">Amortizar Pérdidas Fiscales (10 Años)</span>
                    <span className="text-[10px] text-slate-400">Si el año pasado perdiste, declara esa pérdida para restar impuestos de las ganancias de este año.</span>
                </div>
            </li>
            <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg border-l-2 border-blue-500">
                <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5"/>
                <div>
                    <span className="text-xs font-bold text-slate-200 block">Deducciones (PPR y Salud)</span>
                    <span className="text-[10px] text-slate-400">Reclama tu devolución de impuestos por aportaciones voluntarias al retiro o gastos médicos facturados.</span>
                </div>
            </li>
        </ul>
    </div>
);

const EthicsAndClosing = () => (
  <div className="mt-6 space-y-6">
    <div className="overflow-x-auto bg-slate-900 rounded-xl border border-slate-700 shadow-lg">
        <div className="bg-slate-800 p-3 border-b border-slate-700"><h4 className="text-amber-400 font-bold text-sm text-center uppercase tracking-widest">Tabla Resumen de Fiscalidad 2026</h4></div>
        <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
                <tr className="bg-amber-900/20 border-b border-amber-500/30">
                    <th className="p-3 text-amber-400 text-[10px] font-bold uppercase">Concepto</th>
                    <th className="p-3 text-slate-300 text-[10px] font-bold uppercase">Tasa de Impuesto</th>
                    <th className="p-3 text-slate-300 text-[10px] font-bold uppercase">¿Retención Definitiva?</th>
                </tr>
            </thead>
            <tbody className="text-slate-300 text-xs">
                <tr className="border-b border-slate-800">
                    <td className="p-3 font-bold bg-slate-800/50">Venta de Acciones (BMV/SIC)</td>
                    <td className="p-3 text-emerald-400 font-bold">10% sobre utilidad</td>
                    <td className="p-3">No, se declara anualmente.</td>
                </tr>
                <tr className="border-b border-slate-800">
                    <td className="p-3 font-bold bg-slate-800/50">Cetes / Renta Fija</td>
                    <td className="p-3">Variable (Según Ley de Ingresos)</td>
                    <td className="p-3">Es pago provisional (retención anual).</td>
                </tr>
                <tr className="border-b border-slate-800">
                    <td className="p-3 font-bold bg-slate-800/50">Dividendos Nacionales</td>
                    <td className="p-3 text-red-400 font-bold">10% extra + Tu tasa LISR</td>
                    <td className="p-3">Sí (el 10%), pero el resto se acumula.</td>
                </tr>
                <tr>
                    <td className="p-3 font-bold bg-slate-800/50">FIBRAS (Resultado Fiscal)</td>
                    <td className="p-3">Tu tasa personal de ISR</td>
                    <td className="p-3 text-blue-400">Reembolso de Capital es Exento.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="bg-gradient-to-br from-amber-900/30 to-slate-900 p-5 rounded-xl border border-amber-500/50 flex gap-4">
        <ShieldAlert className="text-amber-500 shrink-0" size={32}/>
        <div>
            <h5 className="font-bold text-white text-sm mb-2">Mensaje de Cierre - FA Academy</h5>
            <p className="text-xs text-slate-300 leading-relaxed italic">
                "Felicidades, has llegado al final del bloque estratégico. Ahora sabes que invertir no es solo elegir la acción ganadora, sino gestionar el riesgo y entender que el SAT es tu socio silencioso. Un buen inversionista maximiza el rendimiento; un inversionista legendario maximiza el rendimiento después de impuestos y costos."
            </p>
        </div>
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

const BookReference = ({ source }) => (
    <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700 mt-4 hover:border-amber-500/50 transition-colors cursor-pointer group">
        <div className="bg-amber-500/20 p-2 rounded group-hover:bg-amber-500/40 transition-colors"><Book size={16} className="text-amber-500"/></div>
        <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Bibliografía Clave</p>
            <p className="text-xs text-white font-bold">{source}</p>
        </div>
        <ChevronRight size={16} className="ml-auto text-slate-600 group-hover:text-amber-500 transition-colors"/>
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
      <h4 className="text-amber-400 text-sm font-bold uppercase mb-3 flex items-center gap-2"><BookOpen size={16} /> Glosario FA Academy</h4>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept, idx) => (
          <div key={idx} className="relative group">
            <button onClick={() => setActiveConcept(activeConcept === idx ? null : idx)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeConcept === idx ? 'bg-amber-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'}`}><Info size={14} />{concept.term}</button>
            {activeConcept === idx && (<div className="absolute bottom-full left-0 mb-3 w-72 bg-slate-900 p-5 rounded-xl border border-amber-500 shadow-2xl z-20 animate-fade-in-up"><div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 border-b border-r border-amber-500 transform rotate-45"></div><h5 className="text-amber-400 font-bold mb-2 text-lg">{concept.term}</h5><p className="text-slate-200 text-sm leading-relaxed">{concept.def}</p><button onClick={(e) => { e.stopPropagation(); setActiveConcept(null); }} className="absolute top-2 right-2 text-slate-500 hover:text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center">×</button></div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL APP FA ACADEMY - MODULO 3 ---

export default function AppFAAcademyEstrategia() {
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
    let message = `🏆 *Resultados FA Academy: Estrategia y Fiscalidad* 🏆%0A%0A`;
    message += `Calificación: *${score}/${quizQuestions.length}* ⭐️%0A%0A`;
    message += `He completado el Módulo Estratégico y conozco mis obligaciones ante el SAT.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const renderVisual = (type) => {
    switch(type) {
      case 'asset_allocation_master': return <AssetAllocationMaster />;
      case 'risk_control': return <RiskControl />;
      case 'fiscal_rules': return <FiscalRules />;
      case 'sat_operations': return <SatOperations />;
      case 'ethics_and_closing': return <EthicsAndClosing />;
      default: return null;
    }
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans p-4 md:p-8 flex flex-col items-center">
        <div className="max-w-2xl w-full animate-fade-in">
          <h1 className="text-3xl font-bold text-amber-400 mb-2 text-center">Examen de Certificación</h1>
          <p className="text-slate-400 text-center mb-8">Estrategia Maestra y Fiscalidad en México</p>
          
          {!quizSubmitted ? (
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                  <p className="font-bold text-lg mb-4 text-white"><span className="text-amber-500 mr-2">#{index + 1}</span> {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <button key={i} onClick={() => handleQuizAnswer(q.id, i)} className={`w-full text-left p-4 rounded-lg transition-all border ${quizAnswers[q.id] === i ? 'bg-amber-600 border-amber-400 text-white font-bold' : 'bg-slate-700/50 border-transparent hover:bg-slate-700 text-slate-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 pb-8"><button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-4 rounded-xl text-xl hover:opacity-90 disabled:opacity-50">Calificar Certificación</button></div>
            </div>
          ) : (
            <div className="text-center animate-fade-in py-10">
              <div className="bg-slate-800 p-8 rounded-2xl border border-amber-500/50 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                <Target className="w-24 h-24 text-amber-400 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-white">¡Módulo Estratégico Completado!</h2>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 my-6">{score} / {quizQuestions.length}</div>
                <p className="text-slate-400 text-sm">Has dominado la gestión de riesgos y las reglas fiscales del SAT.</p>
              </div>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"><Send size={24} /> Enviar Resultados FA Academy</a>
              <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setCurrentLesson(0); }} className="block mx-auto mt-8 text-slate-500 hover:text-amber-400 text-sm underline">Revisar Módulo</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentLesson + 1) / moduleData.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans flex flex-col">
      <header className="bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg"><Landmark className="text-white" size={20} strokeWidth={2.5}/></div>
            <div>
                <span className="font-bold text-white tracking-wider text-sm md:text-base block">FA ACADEMY</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest hidden md:block">Estrategia Maestra</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Lección {currentLesson + 1} <span className="text-slate-600">/</span> {moduleData.lessons.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full">
            <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 flex flex-col justify-start">
        <div className="mb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2"><span className="bg-amber-500/10 text-amber-400 font-bold text-[10px] md:text-xs px-2 py-0.5 rounded uppercase tracking-wider border border-amber-500/20">{moduleData.title}</span></div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{lessonData.title}</h1>
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl p-4 md:p-8 border border-slate-800 shadow-2xl mb-6 min-h-[320px] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"><Layers size={120} className="text-slate-500" /></div>
          {renderVisual(lessonData.visualType)}
        </div>
        
        <div className="space-y-6 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500 shadow-lg"><p className="text-lg md:text-xl text-amber-100 font-medium leading-relaxed">{lessonData.content}</p></div>
          
          <div className="flex gap-4 items-start">
              <div className="bg-slate-700 rounded-full p-2 mt-1 shrink-0"><Brain size={20} className="text-slate-300"/></div>
              <div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{lessonData.details}</p>
                  <p className="mt-4 text-slate-400 text-sm italic bg-slate-900/30 p-3 rounded-lg border border-slate-700/50 flex gap-2"><span className="text-amber-400 font-bold not-italic shrink-0">💡 Nota del Instructor:</span><span>{lessonData.speakerNotes}</span></p>
              </div>
          </div>

          {/* Contextual Blocks */}
          {lessonData.quote && <QuoteCard quote={lessonData.quote} />}
          {lessonData.source && <BookReference source={lessonData.source} />}
          {lessonData.newsSnippet && <NewsSnippet news={lessonData.newsSnippet} />}
          
          <ConceptsBar concepts={lessonData.concepts} />
        </div>
      </main>

      <footer className="bg-[#0f172a] border-t border-slate-800 p-4 pb-8 md:pb-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={handlePrev} disabled={currentLesson === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"><ArrowLeft size={20} /><span className="hidden md:inline font-medium">Anterior</span></button>
          <div className="flex gap-1.5">{moduleData.lessons.map((_, idx) => (<div key={idx} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentLesson ? 'bg-amber-500 scale-125' : 'bg-slate-700'}`}></div>))}</div>
          <button onClick={handleNext} className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95">
             <span className="hidden md:inline">{(currentLesson === moduleData.lessons.length - 1) ? 'Examen de Certificación' : 'Siguiente'}</span>
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
        .animate-spin-slow {animation: spin 8s linear infinite;}
        @keyframes spin {from { transform: rotate(0deg); }to { transform: rotate(360deg); }}
      `}</style>
    </div>
  );
}