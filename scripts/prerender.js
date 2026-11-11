import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

// Definición de rutas a prerenderizar con metadatos y contenido semántico
const routes = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'FA Academy | Plataforma Profesional de Inversiones, Análisis Técnico y Portafolios en México',
    description: 'Aprende a invertir en bolsa, análisis técnico (BOS, CHoCH, Fibonacci), valuación intrínseca DCF, gestión de portafolios Core-Satellite y fiscalidad SAT (LISR Art. 129).',
    canonical: 'https://fa-academy.vercel.app/',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 font-sans">
        <header class="py-20 text-center px-4 max-w-5xl mx-auto">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 font-bold text-xs uppercase tracking-widest border border-primary-500/20 mb-6">
            Educación Bursátil Institucional en México
          </span>
          <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Invierte como los profesionales. <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">Protege y multiplica tu capital.</span>
          </h1>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Plataforma educativa con 44 lecciones especializadas a lo largo de 5 fases, calculadoras fiscales SAT, simuladores de trading y proyectos integradores.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/#catalog" class="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shadow-lg">Explorar 44 Lecciones</a>
            <a href="/pricing" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700">Ver Planes</a>
          </div>
        </header>

        <section id="catalog" class="py-16 max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-white mb-2 text-center">Catálogo Oficial de Cursos (44 Lecciones)</h2>
          <p class="text-slate-400 text-center mb-12">Desde fundamentos y renta fija hasta análisis técnico, derivados y trading cuantitativo.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span class="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded">Fase 1 · Básico</span>
              <h3 class="text-xl font-bold text-white mt-3 mb-2">Fundamentos y Mentalidad Financiera (7 Lecciones)</h3>
              <p class="text-slate-400 text-sm mb-4">Tasa real Banxico, interés compuesto, diagnóstico de salud financiera y regulación CNBV/SIPRES.</p>
              <a href="/academy/fase-1" class="text-primary-400 font-bold text-sm">Ver Temario Completo →</a>
            </article>
            <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span class="text-xs font-bold text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded">Fase 2 · Básico</span>
              <h3 class="text-xl font-bold text-white mt-3 mb-2">El Ecosistema de Inversión (9 Lecciones)</h3>
              <p class="text-slate-400 text-sm mb-4">Renta fija soberana (CETES, Udibonos, Bonos M, SOFIPOs), BMV vs SIC, ETFs y FIBRAS.</p>
              <a href="/academy/fase-2" class="text-primary-400 font-bold text-sm">Ver Temario Completo →</a>
            </article>
            <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span class="text-xs font-bold text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded">Fase 3 · Intermedio</span>
              <h3 class="text-xl font-bold text-white mt-3 mb-2">Análisis Técnico y Gráficos (11 Lecciones)</h3>
              <p class="text-slate-400 text-sm mb-4">Acción del precio (BOS/CHoCH), velas japonesas OHLC, retrocesos de Fibonacci al 61.8% y gestión R:B con breakeven al 25%.</p>
              <a href="/academy/fase-3" class="text-primary-400 font-bold text-sm">Ver Temario Completo →</a>
            </article>
            <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span class="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded">Fase 4 · Avanzado</span>
              <h3 class="text-xl font-bold text-white mt-3 mb-2">Gestión de Riesgo y Portafolio (8 Lecciones)</h3>
              <p class="text-slate-400 text-sm mb-4">Arquitectura Core-Satellite 70/30, rebalanceo anual, Sharpe y Sortino, reporte BMV Bimbo y fiscalidad SAT (Art. 129 LISR).</p>
              <a href="/academy/fase-4" class="text-primary-400 font-bold text-sm">Ver Temario Completo →</a>
            </article>
            <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span class="text-xs font-bold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded">Fase 5 · Experto</span>
              <h3 class="text-xl font-bold text-white mt-3 mb-2">Estrategias Especializadas (9 Lecciones)</h3>
              <p class="text-slate-400 text-sm mb-4">Venta en corto, valuación por múltiplos y DCF/WACC, trading algorítmico, opciones con griegas completas y tesis final.</p>
              <a href="/academy/fase-5" class="text-primary-400 font-bold text-sm">Ver Temario Completo →</a>
            </article>
          </div>
        </section>
      </div>
    `
  },
  {
    path: '/tools',
    outPath: 'tools/index.html',
    title: 'Simuladores Financieros y Calculadoras de Inversión | FA Academy',
    description: 'Herramientas interactivas gratuitas de inversión: calculadora de interés compuesto, tasa real con inflación de Banxico, amortización de deudas y perfil AMIB.',
    canonical: 'https://fa-academy.vercel.app/tools',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-6xl mx-auto">
        <h1 class="text-4xl font-extrabold text-white text-center mb-4">Herramientas y Simuladores Bursátiles</h1>
        <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Calculadoras financieras para proyectar rendimientos reales, amortizar pasivos y auditar el riesgo de tu portafolio.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 class="text-xl font-bold text-white mb-2">Calculadora de Interés Compuesto</h2>
            <p class="text-slate-400 text-sm">Proyecta la multiplicación exponencial de tu patrimonio con aportaciones mensuales y reinversión de utilidades.</p>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 class="text-xl font-bold text-white mb-2">Calculadora de Tasa Real (Banxico)</h2>
            <p class="text-slate-400 text-sm">Descuenta la inflación oficial a tus pagarés y CETES para conocer tu ganancia neta de poder de compra.</p>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 class="text-xl font-bold text-white mb-2">Diagnóstico de Deuda y CAT</h2>
            <p class="text-slate-400 text-sm">Evalúa el impacto financiero de tarjetas de crédito y créditos personales antes de comenzar a invertir en bolsa.</p>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 class="text-xl font-bold text-white mb-2">Test de Perfil del Inversionista</h2>
            <p class="text-slate-400 text-sm">Descubre tu horizonte temporal y tolerancia psicológica al riesgo con criterios alineados a la AMIB.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    path: '/pricing',
    outPath: 'pricing/index.html',
    title: 'Planes y Certificaciones de Inversión | FA Academy',
    description: 'Accede a las 44 lecciones especializadas, simuladores de trading en tiempo real, calculadoras fiscales y diplomas acreditados en FA Academy.',
    canonical: 'https://fa-academy.vercel.app/pricing',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-6xl mx-auto">
        <h1 class="text-4xl font-extrabold text-white text-center mb-4">Planes de Formación y Certificación</h1>
        <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Invierte en tu educación financiera con acompañamiento profesional y herramientas institucionales.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 class="text-xl font-bold text-white mb-2">Básico (Fase 1 y 2)</h2>
            <p class="text-3xl font-extrabold text-primary-400 mb-6">Gratuito</p>
            <p class="text-slate-400 text-sm mb-6">Acceso completo a las 16 lecciones fundamentales, CETES, FIBRAS y primeros pasos bursátiles.</p>
            <a href="/course/phase/1" class="block w-full py-3 bg-slate-800 hover:bg-slate-700 text-center font-bold text-white rounded-xl">Comenzar Gratis</a>
          </div>
          <div class="bg-slate-900 border-2 border-primary-500 rounded-2xl p-8 relative">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase">Más Popular</span>
            <h2 class="text-xl font-bold text-white mb-2">Trader & Analista (Fase 1 a 4)</h2>
            <p class="text-3xl font-extrabold text-white mb-6">$1,490 <span class="text-xs text-slate-400">MXN</span></p>
            <p class="text-slate-400 text-sm mb-6">Análisis técnico completo, Fibonacci, Core-Satellite, rebalanceo anual y fiscalidad SAT LISR.</p>
            <a href="/login" class="block w-full py-3 bg-primary-600 hover:bg-primary-500 text-center font-bold text-white rounded-xl">Inscribirme</a>
          </div>
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 class="text-xl font-bold text-white mb-2">Master Cuantitativo (Fase 1 a 5)</h2>
            <p class="text-3xl font-extrabold text-white mb-6">$2,490 <span class="text-xs text-slate-400">MXN</span></p>
            <p class="text-slate-400 text-sm mb-6">Valuación DCF, opciones con griegas, venta en corto, trading algorítmico y tesis final con diploma.</p>
            <a href="/login" class="block w-full py-3 bg-slate-800 hover:bg-slate-700 text-center font-bold text-white rounded-xl">Inscribirme al Master</a>
          </div>
        </div>
      </div>
    `
  },
  {
    path: '/academy/fase-1',
    outPath: 'academy/fase-1/index.html',
    title: 'Fase 1: Fundamentos y Mentalidad Financiera (7 Lecciones) | FA Academy',
    description: 'Diagnostica tu salud financiera, erradica la deuda mala y domina las matemáticas del interés compuesto y el sistema financiero en México.',
    canonical: 'https://fa-academy.vercel.app/academy/fase-1',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-5xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">Fase 1 · Básico</span>
        <h1 class="text-4xl font-extrabold text-white mt-2 mb-4">Fundamentos y Mentalidad Financiera (7 Lecciones)</h1>
        <p class="text-slate-400 text-base mb-8">Diagnóstico de salud financiera, tasa real frente a la inflación de Banxico y el ecosistema regulado por la CNBV, CONDUSEF e IPAB.</p>
        <div class="space-y-4">
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">1. El Perfil del Inversionista 2026</h2><p class="text-slate-400 text-xs">Tolerancia al riesgo, horizonte temporal y directrices AMIB.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">2. Matemáticas: El Poder del Interés Compuesto</h2><p class="text-slate-400 text-xs">Tasa nominal vs tasa real con inflación Banxico.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">3. El Ecosistema: Sistema Financiero Mexicano</h2><p class="text-slate-400 text-xs">Árbitros oficiales: CNBV, Banxico, CONDUSEF, SIPRES, BMV y BIVA.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">4. El "Por Qué" antes del "Cómo"</h2><p class="text-slate-400 text-xs">Definición de metas financieras y horizontes de inversión.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">5. Deuda vs. Inversión (Deuda Mala vs. Buena)</h2><p class="text-slate-400 text-xs">Sanación financiera previa y costo anual total (CAT).</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">6. Interés Compuesto (La Magia del Tiempo)</h2><p class="text-slate-400 text-xs">Visualización numérica del arranque a los 26 vs 40 años.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">7. Introducción al Mercado de Valores</h2><p class="text-slate-400 text-xs">Flujo de capital entre emisoras, intermediarios y ahorradores.</p></div>
        </div>
        <div class="mt-8 text-center"><a href="/course/phase/1" class="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl inline-block">Iniciar Lección 1 Gratis</a></div>
      </div>
    `
  },
  {
    path: '/academy/fase-2',
    outPath: 'academy/fase-2/index.html',
    title: 'Fase 2: El Ecosistema de Inversión y Renta Fija (9 Lecciones) | FA Academy',
    description: 'Aprende a operar a través de casas de bolsa reguladas en México (GBM), diferenciar series accionarias, deuda soberana (CETES/Udibonos) y FIBRAS.',
    canonical: 'https://fa-academy.vercel.app/academy/fase-2',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-5xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-widest text-blue-400">Fase 2 · Básico</span>
        <h1 class="text-4xl font-extrabold text-white mt-2 mb-4">El Ecosistema de Inversión y Renta Fija (9 Lecciones)</h1>
        <p class="text-slate-400 text-base mb-8">Renta fija soberana (CETES, Udibonos, Bonos M, SOFIPOs), BMV vs SIC, ETFs globales y análisis fundamental.</p>
        <div class="space-y-4">
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">1. La Anatomía de una Acción</h2><p class="text-slate-400 text-xs">Series A, B, L y Certificados CPO como CEMEXCPO.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">2. Renta Fija Soberana: CETES, Bonos M, Udibonos y SOFIPOs</h2><p class="text-slate-400 text-xs">Tasas libres de riesgo, protección de la UDI y exención fiscal de 5 UMAs.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">3. Caso Práctico 2026: CEMEX ($CEMEXCPO)</h2><p class="text-slate-400 text-xs">Nearshoring, múltiplos EV/EBITDA y grado de inversión.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">4. Análisis Técnico: La Psicología de Masas</h2><p class="text-slate-400 text-xs">Velas japonesas, Media Móvil 200 y sobrecompra RSI.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">5. El Ecosistema de Diversificación</h2><p class="text-slate-400 text-xs">FIBRAS industriales, ETFs globales y activos asimétricos.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">6. Diferenciación de Mercados (BMV vs. SIC)</h2><p class="text-slate-400 text-xs">Comprar Wall Street en pesos con ventaja fiscal del Art. 129 LISR.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">7. Casas de Bolsa y Seguridad Inicial</h2><p class="text-slate-400 text-xs">Regulación CNBV, apertura de cuenta y formato W-8BEN.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">8. Tipos de Activos: ETFs y FIBRAS</h2><p class="text-slate-400 text-xs">Inversión indexada pasiva vs selección individual de acciones.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">9. Análisis Fundamental: Evaluación de Negocios y Estados Financieros</h2><p class="text-slate-400 text-xs">EBITDA, ROE, Flujo de Caja Libre (FCF) y Balance General.</p></div>
        </div>
        <div class="mt-8 text-center"><a href="/course/phase/2" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl inline-block">Iniciar Lección 1 Gratis</a></div>
      </div>
    `
  },
  {
    path: '/academy/fase-3',
    outPath: 'academy/fase-3/index.html',
    title: 'Fase 3: Análisis Técnico y Gráficos (11 Lecciones) | FA Academy',
    description: 'Domina la lectura de gráficos, acción del precio (BOS/CHoCH), Fibonacci, gestión de riesgo con breakeven al 25% y simulador TradingView.',
    canonical: 'https://fa-academy.vercel.app/academy/fase-3',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-5xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-widest text-indigo-400">Fase 3 · Intermedio</span>
        <h1 class="text-4xl font-extrabold text-white mt-2 mb-4">Análisis Técnico y Gráficos (11 Lecciones)</h1>
        <p class="text-slate-400 text-base mb-8">Estructura de mercado, retrocesos de Fibonacci, volumen institucional y esperanza matemática.</p>
        <div class="space-y-4">
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">1. El Lenguaje de las Velas Japonesas</h2><p class="text-slate-400 text-xs">Anatomía OHLC, patrones de rechazo y Marubozu.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">2. Estructura de Mercado: Soportes y Resistencias</h2><p class="text-slate-400 text-xs">Zonas de oferta y demanda, rupturas y pullbacks.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">3. Acción del Precio y Estructura (HH/LL)</h2><p class="text-slate-400 text-xs">Ruptura de Estructura (BOS) y Cambio de Carácter (CHoCH).</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">4. Indicadores Técnicos: RSI y Medias Móviles</h2><p class="text-slate-400 text-xs">SMA 50/200, Cruce Dorado y zonas de sobrecompra.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">5. Retrocesos y Extensiones de Fibonacci</h2><p class="text-slate-400 text-xs">Número Áureo 61.8%, niveles 38.2%, 50%, 78.6% y caso Apple 2024.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">6. Volumen Real vs. Volumen de Tick: Rupturas Institucionales</h2><p class="text-slate-400 text-xs">ADV, volumen institucional y detección de trampas alcistas.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">7. Gestión de Riesgo y Esperanza Matemática</h2><p class="text-slate-400 text-xs">Ratio 1:3, breakeven exacto al 25% y esperanza matemática.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">8. Gestión Visual de R:B con Apple (AAPL)</h2><p class="text-slate-400 text-xs">Caso real trade Apple ratio 1:2.7 y cita de Paul Tudor Jones.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">9. Uso de Temporalidades: El Marco Manda (Multi-Timeframe)</h2><p class="text-slate-400 text-xs">Análisis Top-Down y 4 fases de Stan Weinstein.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">10. Trading Journal y Backtesting Cuantitativo</h2><p class="text-slate-400 text-xs">Diario de operaciones y descarga de plantilla para Excel.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">11. Estación de Trabajo TradingView y Psicología</h2><p class="text-slate-400 text-xs">Simulador interactivo, Stop Loss y superación del FOMO.</p></div>
        </div>
      </div>
    `
  },
  {
    path: '/academy/fase-4',
    outPath: 'academy/fase-4/index.html',
    title: 'Fase 4: Gestión de Riesgo y Portafolio (8 Lecciones) | FA Academy',
    description: 'Aprende a construir carteras Core-Satellite 70/30, rebalancear anualmente, calcular ratios Sharpe/Sortino y optimizar tu Declaración Anual ante el SAT.',
    canonical: 'https://fa-academy.vercel.app/academy/fase-4',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-5xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Fase 4 · Avanzado</span>
        <h1 class="text-4xl font-extrabold text-white mt-2 mb-4">Gestión de Riesgo y Portafolio (8 Lecciones)</h1>
        <p class="text-slate-400 text-base mb-8">Arquitectura Core-Satellite, reporte BMV Bimbo, rebalanceo anual, Sharpe/Sortino y LISR Art. 129.</p>
        <div class="space-y-4">
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">1. Caso de Estudio: Bimbo vs Flowers Foods (BMV / NYSE)</h2><p class="text-slate-400 text-xs">Reporte BMV 4T23 Bimbo ($399,800M MXN, margen 13.9%).</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">2. Asignación de Activos y Estudio Brinson (Asset Allocation)</h2><p class="text-slate-400 text-xs">La asignación explica más del 90% de la variabilidad temporal.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">3. Arquitectura de Portafolio: Core-Satellite</h2><p class="text-slate-400 text-xs">Modelo 70% Core institucional y 30% Satellite con alta convicción.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">4. Rebalanceo Periódico de Cartera</h2><p class="text-slate-400 text-xs">Bandas de tolerancia ±5% y minimización de fricción fiscal.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">5. Métricas Avanzadas de Riesgo: Volatilidad, Beta, Sharpe y Sortino</h2><p class="text-slate-400 text-xs">Calculadora interactiva de ratios Sharpe y Sortino.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">6. Fiscalidad en México: Operatividad Bursátil SAT y Art. 129 LISR</h2><p class="text-slate-400 text-xs">Tasa del 10% anual, constancia fiscal y amortización de pérdidas a 10 años.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">7. Retiro en México: Siefores y Planes Personales de Retiro (PPR)</h2><p class="text-slate-400 text-xs">Deducción de hasta 10% del ingreso o 5 UMAs bajo Art. 151 LISR.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">8. Ética, Deber Fiduciario y Psicología de Pérdidas</h2><p class="text-slate-400 text-xs">Gestión emocional fiduciaria y plan de contingencia ante cisnes negros.</p></div>
        </div>
      </div>
    `
  },
  {
    path: '/academy/fase-5',
    outPath: 'academy/fase-5/index.html',
    title: 'Fase 5: Estrategias Especializadas y Valuación (9 Lecciones) | FA Academy',
    description: 'Venta en corto, valuación por múltiplos y DCF/WACC, trading algorítmico, opciones financieras con griegas completas y tesis de inversión profesional.',
    canonical: 'https://fa-academy.vercel.app/academy/fase-5',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-5xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-widest text-rose-400">Fase 5 · Experto</span>
        <h1 class="text-4xl font-extrabold text-white mt-2 mb-4">Estrategias Especializadas y Valuación (9 Lecciones)</h1>
        <p class="text-slate-400 text-base mb-8">Venta en corto, valuación DCF, opciones con griegas (Delta, Gamma, Theta, Vega) y proyecto final integrador.</p>
        <div class="space-y-4">
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">1. Venta en Corto (Short Selling) y Short Squeeze</h2><p class="text-slate-400 text-xs">Préstamo de acciones, margin call, borrow fee y riesgo asimétrico infinito.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">2. Inversión en Valor (Value) vs. Crecimiento (Growth) & Valuación</h2><p class="text-slate-400 text-xs">Valuación DCF interactiva con WACC y múltiplos P/E, EV/EBITDA y PEG.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">3. Trading Algorítmico y Backtesting Cuantitativo</h2><p class="text-slate-400 text-xs">Reglas cuantitativas sistemáticas y prevención del Curve Fitting.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">4. Opciones Financieras Completas: Calls, Puts y Las Griegas</h2><p class="text-slate-400 text-xs">Delta, Gamma, Theta, Vega, Covered Calls y Protective Puts.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">5. La Máquina Económica y Ciclos de Deuda (Ray Dalio)</h2><p class="text-slate-400 text-xs">Ciclos de deuda de corto y largo plazo y desapalancamientos.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">6. Sesgos Cognitivos y Aversión a la Pérdida (Kahneman & Tversky)</h2><p class="text-slate-400 text-xs">El dolor de perder es 2.0x a 2.5x más intenso que el placer de ganar.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">7. Cisnes Negros y Antifragilidad (Nassim Taleb)</h2><p class="text-slate-400 text-xs">Estrategia Barbell y carteras que se benefician de la volatilidad.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">8. Estrategias de Salida y Gestión de Ganancias (Fisher & Lynch)</h2><p class="text-slate-400 text-xs">Cuándo vender por deterioro fundamental y cuándo dejar correr a los ganadores.</p></div>
          <div class="bg-slate-900 p-4 rounded-xl border border-slate-800"><h2 class="text-base font-bold text-white">9. Proyecto Final Integrador: Tesis de Inversión Profesional</h2><p class="text-slate-400 text-xs">Memorándum institucional de 6 pilares con plantilla descargable.</p></div>
        </div>
      </div>
    `
  },
  {
    path: '/terminos',
    outPath: 'terminos/index.html',
    title: 'Términos y Condiciones | FA Academy',
    description: 'Términos y condiciones de uso de la plataforma educativa FA Academy. Declaración de riesgos, carácter formativo y propiedad intelectual.',
    canonical: 'https://fa-academy.vercel.app/terminos',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl font-extrabold text-white mb-4">Términos y Condiciones</h1>
        <p class="text-slate-400 text-sm mb-8">Aviso legal y condiciones de servicio vigentes en México para FA Academy.</p>
        <div class="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section><h2 class="text-lg font-bold text-white mb-2">1. Carácter Estrictamente Educativo</h2><p>El material provisto en FA Academy tiene fines puramente educativos e informativos y no constituye asesoría personalizada bajo la Ley del Mercado de Valores.</p></section>
          <section><h2 class="text-lg font-bold text-white mb-2">2. Riesgo de Mercado</h2><p>Toda inversión bursátil conlleva riesgo de fluctuación y pérdida de capital. Rendimientos históricos no garantizan rendimientos futuros.</p></section>
        </div>
      </div>
    `
  },
  {
    path: '/privacidad',
    outPath: 'privacidad/index.html',
    title: 'Política de Privacidad | FA Academy',
    description: 'Aviso de privacidad y protección de datos personales de FA Academy conforme a la LFPDPPP en México.',
    canonical: 'https://fa-academy.vercel.app/privacidad',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl font-extrabold text-white mb-4">Política de Privacidad</h1>
        <p class="text-slate-400 text-sm mb-8">En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
        <div class="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section><h2 class="text-lg font-bold text-white mb-2">1. Uso de Datos</h2><p>FA Academy solo recaba nombre y correo para habilitar el reproductor de lecciones y certificar evaluaciones.</p></section>
          <section><h2 class="text-lg font-bold text-white mb-2">2. Derechos ARCO</h2><p>Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos enviando un correo a privacidad@fa-academy.com.</p></section>
        </div>
      </div>
    `
  },
  {
    path: '/404',
    outPath: '404.html',
    title: 'Página no encontrada (Error 404) | FA Academy',
    description: 'La página que buscas no existe o ha sido reubicada en FA Academy.',
    canonical: 'https://fa-academy.vercel.app/404',
    content: `
      <div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center py-20 px-4 text-center">
        <div class="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <span class="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800">Error 404</span>
          <h1 class="text-3xl font-extrabold text-white mt-4 mb-2">Página no encontrada</h1>
          <p class="text-slate-400 text-sm mb-6">La dirección ingresada no existe en la plataforma.</p>
          <a href="/" class="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl inline-block">Ir al Inicio</a>
        </div>
      </div>
    `
  }
];

// Generar cada archivo HTML prerenderizado
let generatedCount = 0;

routes.forEach(route => {
  let html = baseTemplate;

  // 1. Reemplazar título
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // 2. Reemplazar meta description
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/s, `<meta name="description" content="${route.description}" />`);

  // 3. Reemplazar canonical
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s, `<link rel="canonical" href="${route.canonical}" />`);

  // 4. Reemplazar OpenGraph & Twitter
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s, `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/s, `<meta property="og:image" content="https://fa-academy.vercel.app/og-image.png" />`);

  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/s, `<meta name="twitter:image" content="https://fa-academy.vercel.app/og-image.png" />`);

  // 5. Inyectar contenido prerenderizado dentro de <div id="root">
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${route.content}</div>`);

  const fullOutPath = path.join(distDir, route.outPath);
  fs.mkdirSync(path.dirname(fullOutPath), { recursive: true });
  fs.writeFileSync(fullOutPath, html, 'utf-8');
  generatedCount++;
});

console.log(`✓ Prerenderizado completado exitosamente: ${generatedCount} páginas estáticas HTML generadas en /dist.`);
