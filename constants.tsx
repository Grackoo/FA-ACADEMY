import React from 'react';
import { Module, MarketItem } from './types';
import { 
  Building2, 
  Search, 
  CandlestickChart, 
  ShieldAlert, 
  Bot, 
  TrendingUp,
  BrainCircuit,
  PieChart,
  Landmark,
  LineChart
} from 'lucide-react';

export const MARKET_DATA: MarketItem[] = [
  { symbol: 'S&P 500', price: '5,864.67', change: '+0.8%', isUp: true },
  { symbol: 'NASDAQ', price: '18,518.61', change: '+1.1%', isUp: true },
  { symbol: 'IPC BMV', price: '52,430.15', change: '+0.4%', isUp: true },
  { symbol: 'CETES 28D', price: '10.20%', change: '-0.1%', isUp: false },
  { symbol: 'USD/MXN', price: '18.45', change: '-0.3%', isUp: false },
  { symbol: 'BIMBOA', price: '68.50', change: '+1.5%', isUp: true },
  { symbol: 'CEMEXCPO', price: '14.20', change: '+2.1%', isUp: true },
  { symbol: 'AAPL', price: '228.40', change: '+0.9%', isUp: true },
];

export const MODULES: Module[] = [
  {
    id: 'fase-1',
    phase: 1,
    title: 'Fundamentos y Mentalidad Financiera',
    level: 'Básico',
    duration: '4 Semanas',
    rating: 4.9,
    description: 'Diagnostica tu salud financiera, erradica la deuda tóxica y comprende las matemáticas del interés compuesto, la inflación de Banxico y el Sistema Financiero Mexicano (CNBV, SIPRES, CONDUSEF).',
    icon: 'Building2',
    color: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800', 
    topics: [
      {
        title: 'El Perfil del Inversionista 2026',
        content: 'Tolerancia al riesgo, horizonte temporal y diagnóstico psicológico para evitar el FOMO según directrices de la AMIB.'
      },
      {
        title: 'Matemáticas: El Poder del Interés Compuesto',
        content: 'Diferencia crítica entre tasa nominal y tasa real (descontando inflación de Banxico) para construir riqueza sostenible.'
      },
      {
        title: 'El Ecosistema: Sistema Financiero Mexicano',
        content: 'Conoce los árbitros que protegen tu capital (CNBV, Banxico, CONDUSEF, SIPRES) y las dos bolsas del país (BMV y BIVA).'
      },
      {
        title: 'El "Por Qué" antes del "Cómo"',
        content: 'Definición de objetivos financieros claros: no es lo mismo invertir para capitalizar un negocio que para un retiro a 30 años.'
      },
      {
        title: 'Deuda vs. Inversión (Deuda Mala vs. Deuda Buena)',
        content: 'Por qué es matemáticamente inviable invertir si arrastras tarjetas de crédito con CAT superior al 50%. Sanación antes de invertir.'
      },
      {
        title: 'Interés Compuesto (La Magia del Tiempo)',
        content: 'Visualización con números reales: el impacto multimillonario de iniciar a los 26 años frente a los 40 años.'
      },
      {
        title: 'Introducción al Mercado de Valores',
        content: 'Cómo fluye el capital entre emisoras, intermediarios bursátiles autorizados y ahorradores en el ecosistema regulado.'
      }
    ]
  },
  {
    id: 'fase-2',
    phase: 2,
    title: 'El Ecosistema de Inversión',
    level: 'Básico',
    duration: '6 Semanas',
    rating: 4.8,
    description: 'Aprende a operar a través de casas de bolsa reguladas en México (GBM, Bursanet). Renta fija soberana (CETES, Bonos M, Udibonos), SOFIPOs exentas de impuestos, ETFs globales y FIBRAS inmobiliarias.',
    icon: 'Search',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'La Anatomía de una Acción',
        content: 'Series accionarias (A, B, L), derechos corporativos y Certificados de Participación Ordinaria (CPOs) como CEMEXCPO.'
      },
      {
        title: 'Renta Fija Soberana: CETES, Bonos M, Udibonos y SOFIPOs',
        content: 'Blindaje contra la inflación, tasas soberanas libres de riesgo en México y exención fiscal de 5 UMAs anuales en SOFIPOs.'
      },
      {
        title: 'Caso Práctico 2026: CEMEX ($CEMEXCPO)',
        content: 'Análisis de una empresa cíclica global, desapalancamiento financiero, grado de inversión y efecto del nearshoring.'
      },
      {
        title: 'Análisis Técnico: La Psicología de Masas',
        content: 'Introducción al rastro del dinero institucional: Velas Japonesas, Media Móvil de 200 días y niveles de sobrecompra en RSI.'
      },
      {
        title: 'El Ecosistema de Diversificación',
        content: 'Expansión de cartera: Rentas inmobiliarias con FIBRAS (FMTY14, FUNO11), ETFs globales (VOO, IVVPESO) y activos asimétricos.'
      },
      {
        title: 'Diferenciación de Mercados (BMV vs. SIC)',
        content: 'El Sistema Internacional de Cotizaciones: cómo comprar Wall Street desde México en pesos y con ventaja fiscal del Art. 129 LISR.'
      },
      {
        title: 'Casas de Bolsa y Seguridad Inicial',
        content: 'Selección de brókers regulados por la CNBV (GBM, Bursanet), contratos de intermediación bursátil y formato W-8BEN para dividendos.'
      },
      {
        title: 'Tipos de Activos: ETFs y FIBRAS',
        content: 'Estrategias de inversión indexada para principiantes frente al stock picking individual para mitigar el riesgo no sistemático.'
      },
      {
        title: 'Análisis Fundamental: Evaluación de Negocios y Estados Financieros',
        content: 'Lectura de las 3 piedras angulares: Estado de Resultados (EBITDA), Balance General (Deuda/Equity) y Flujo de Caja Libre (FCF).'
      }
    ]
  },
  {
    id: 'fase-3',
    phase: 3,
    title: 'Análisis Técnico y Gráficos',
    level: 'Intermedio',
    duration: '5 Semanas',
    rating: 4.7,
    description: 'Domina la lectura del rastro institucional: velas japonesas (OHLC), estructura de mercado (HH/LL, BOS, CHoCH), niveles áureos de Fibonacci, gestión de riesgo con breakeven al 25% y estación TradingView.',
    icon: 'CandlestickChart',
    color: 'bg-indigo-500',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'El Lenguaje de las Velas Japonesas',
        content: 'Anatomía OHLC, cuerpo vs mechas, Doji, Marubozu y patrones de reversión e indecisión.'
      },
      {
        title: 'Estructura de Mercado: Soportes y Resistencias',
        content: 'La memoria del precio: zonas de oferta y demanda, rupturas válidas (breakouts) y testeos (pullbacks).'
      },
      {
        title: 'Acción del Precio y Estructura (HH/LL)',
        content: 'Tendencias alcistas (HH/HL) y bajistas (LH/LL), Ruptura de Estructura (BOS) y Cambio de Carácter (CHoCH).'
      },
      {
        title: 'Indicadores Técnicos: RSI y Medias Móviles',
        content: 'Medias Móviles (SMA 50/200), zonas de sobrecompra (>70) y sobreventa (<30), y señal de Cruce Dorado.'
      },
      {
        title: 'Retrocesos y Extensiones de Fibonacci',
        content: 'Fundamento matemático del Número Áureo (61.8%), niveles clave (38.2%, 50%, 78.6%) y proyecciones de precio con ejemplos reales.'
      },
      {
        title: 'Volumen Real vs. Volumen de Tick: Rupturas Institucionales',
        content: 'Volumen medio diario (ADV), confirmación de breakouts institucionales y cómo detectar trampas alcistas (Bull Traps).'
      },
      {
        title: 'Gestión de Riesgo y Esperanza Matemática',
        content: 'Ratio Riesgo/Beneficio: por qué con ratio 1:3 el punto de equilibrio es 25% de acierto y cómo calcular tu expectativa matemática.'
      },
      {
        title: 'Gestión Visual de R:B con Apple (AAPL)',
        content: 'Caso real con entrada $168, Stop $158 y Take Profit $195 (Ratio 1:2.7, equilibrio 27.02%, rentable con 37% de acierto).'
      },
      {
        title: 'Uso de Temporalidades: El Marco Manda (Multi-Timeframe)',
        content: 'Análisis Top-Down (Semanal, Diario, 4H) y ciclo de 4 fases de Stan Weinstein para evitar operar contra la marea.'
      },
      {
        title: 'Trading Journal y Backtesting Cuantitativo',
        content: 'Metodología para registrar cada operación, controlar el drawdown y auditar la ventaja estadística de tu estrategia.'
      },
      {
        title: 'Estación de Trabajo TradingView y Psicología',
        content: 'Práctica en simulador interactivo, calibración de Stop Loss y superación del FOMO y el Revenge Trading.'
      }
    ]
  },
  {
    id: 'fase-4',
    phase: 4,
    title: 'Gestión de Riesgo y Portafolio',
    level: 'Avanzado',
    duration: '4 Semanas',
    rating: 5.0,
    description: 'Aprende a construir carteras profesionales Core-Satellite (70/30), dominar el rebalanceo anual disciplinado, calcular ratios Sharpe/Sortino y optimizar el Art. 129 de la LISR en tu Declaración Anual ante el SAT.',
    icon: 'ShieldAlert',
    color: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Caso de Estudio: Bimbo vs Flowers Foods (BMV / NYSE)',
        content: 'Análisis del reporte 4T23 de Bimbo: corrección de $82.50 a $67.80 en BMV por costo de trigo y tipo de cambio, con EBITDA sólido del 13.9%.'
      },
      {
        title: 'Asset Allocation y la Frontera Eficiente',
        content: 'Estudio de Brinson, Hood y Beebower: más del 90% de la variabilidad de retornos en el tiempo proviene de la asignación de activos.'
      },
      {
        title: 'Modelo Core-Satellite con Portafolio Real',
        content: 'Estructuración 70/30: Núcleo pasivo de bajo costo (VOO, Cetes, FIBRAS) y Satélites activos de alta convicción.'
      },
      {
        title: 'Rebalanceo Práctico Anual de Cartera',
        content: 'El proceso disciplinado de vender activos sobrevalorados y comprar rezagados para restablecer ponderaciones objetivo.'
      },
      {
        title: 'Métricas de Riesgo: Volatilidad, Beta, Sharpe y Sortino',
        content: 'Cálculo numérico de la volatilidad anualizada, sensibilidad al mercado (Beta), Ratio de Sharpe y protección a la baja con Sortino.'
      },
      {
        title: 'Marco Fiscal en México: Art. 129 LISR y Dividendos',
        content: 'Tasa preferencial del 10% sobre ganancias en bolsa calculada en Declaración Anual, régimen de dividendos y FIBRAS exentas.'
      },
      {
        title: 'Declaración Anual ante el SAT, Pérdidas y PPR',
        content: 'Compensación de pérdidas fiscales bursátiles hasta por 10 años y deducciones personales de retiro (Art. 151 LISR).'
      },
      {
        title: 'Ética Profesional y Deber Fiduciario',
        content: 'Prevención de conflictos de interés, transparencia en comisiones y administración patrimonial responsable a largo plazo.'
      }
    ]
  },
  {
    id: 'fase-5',
    phase: 5,
    title: 'Estrategias Especializadas',
    level: 'Experto',
    duration: '8 Semanas',
    rating: 4.9,
    description: 'Estrategias avanzadas para inversores sofisticados: venta en corto (short selling), valuación por múltiplos y DCF, trading cuantitativo algorítmico, opciones con griegas (Calls/Puts) y tesis de inversión profesional.',
    icon: 'Bot',
    color: 'bg-rose-500',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Venta en Corto (Short Selling) y Short Squeeze',
        content: 'Mecánica del préstamo de acciones, margin call, borrow fee, riesgo asimétrico infinito y análisis de short squeezes históricos.'
      },
      {
        title: 'Inversión en Valor (Value) vs. Crecimiento (Growth) & Valuación',
        content: 'Métodos de valuación por Múltiplos (P/E, EV/EBITDA, PEG) y Descuento de Flujos de Caja (DCF) con caso Berkshire vs Nvidia.'
      },
      {
        title: 'Trading Algorítmico y Backtesting Cuantitativo',
        content: 'Reglas cuantitativas sistemáticas, backtesting sin sesgo retrospectivo y prevención de sobreajuste de datos (curve fitting).'
      },
      {
        title: 'Opciones Financieras Completas: Calls, Puts y Las Griegas',
        content: 'Apalancamiento controlado, contratos Call y Put, cálculo de Delta, Gamma, Theta y Vega, y estrategias Covered Calls y Spreads.'
      },
      {
        title: 'La Máquina Económica y Ciclos de Deuda (Ray Dalio)',
        content: 'Ciclos de deuda de corto y largo plazo, desapalancamiento económico e impacto macroeconómico de tasas de interés.'
      },
      {
        title: 'Sesgos Cognitivos y Aversión a la Pérdida (Kahneman & Tversky)',
        content: 'Por qué el dolor de perder es 2x a 2.5x más intenso que el placer de ganar y cómo blindar tus decisiones de inversión.'
      },
      {
        title: 'Cisnes Negros y Antifragilidad (Nassim Taleb)',
        content: 'Construcción de carteras que se benefician del desorden y la volatilidad manteniendo reservas estratégicas de efectivo.'
      },
      {
        title: 'Estrategias de Salida (Exit Strategy)',
        content: 'Principios de venta de Philip Fisher y Peter Lynch: cuándo vender por deterioro fundamental y cuándo dejar correr a los ganadores.'
      },
      {
        title: 'Proyecto Final Integrador: Tesis de Inversión Profesional',
        content: 'Elaboración guiada de una tesis fundamental con valuación, catalizadores de crecimiento, mapa de riesgos y plan de salida.'
      }
    ]
  }
];

export const getIcon = (name: string, className: string = "w-6 h-6") => {
  switch (name) {
    case 'Building2': return <Building2 className={className} />;
    case 'Search': return <Search className={className} />;
    case 'CandlestickChart': return <CandlestickChart className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Bot': return <Bot className={className} />;
    default: return <TrendingUp className={className} />;
  }
};
