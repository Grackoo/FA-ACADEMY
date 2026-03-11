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
  { symbol: 'S&P 500', price: '4,783.45', change: '+1.2%', isUp: true },
  { symbol: 'NASDAQ', price: '15,310.97', change: '+0.8%', isUp: true },
  { symbol: 'BTC/USD', price: '43,250.00', change: '-0.5%', isUp: false },
  { symbol: 'EUR/USD', price: '1.09', change: '+0.1%', isUp: true },
  { symbol: 'GOLD', price: '2,045.30', change: '+0.4%', isUp: true },
  { symbol: 'TSLA', price: '245.10', change: '-1.2%', isUp: false },
  { symbol: 'AAPL', price: '193.50', change: '+0.5%', isUp: true },
  { symbol: 'NVDA', price: '480.90', change: '+2.1%', isUp: true },
];

export const MODULES: Module[] = [
  {
    id: 'fase-1',
    phase: 1,
    title: 'Fundamentos y Mentalidad Financiera',
    level: 'Básico',
    duration: '4 Semanas',
    rating: 4.9,
    description: 'Antes de comprar una acción, debes romper las barreras psicológicas y entender el terreno donde estás pisando.',
    icon: 'Building2',
    color: 'bg-emerald-500',
    // Image related to foundations/mentalidad
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800', 
    topics: [
      {
        title: 'El "Por Qué" antes del "Cómo"',
        content: 'Definición de Objetivos Financieros. No es lo mismo ahorrar por ahorrar que invertir para un retiro a los 50 años o para capitalizar un negocio como SIATEC.'
      },
      {
        title: 'Deuda vs. Inversión (Deuda Mala vs. Deuda Buena)',
        content: 'Es vital sanar tus finanzas antes de comprar tu primera acción de Meta o Novo Nordisk. Pierde el miedo a invertir manejando inteligentemente tus tarjetas de crédito.'
      },
      {
        title: 'Interés Compuesto (La Magia)',
        content: 'Visualiza el impacto real de empezar a invertir a los 26 años frente a los 40. Descubre la abismal diferencia de dinero que te motivará a comenzar hoy mismo.'
      },
      {
        title: 'Introducción al Sistema Financiero',
        content: '¿Qué es la bolsa? ¿Cómo funcionan los mercados y quiénes son los participantes (bróker, bolsa, reguladores)? Entenderemos el flujo de capital.'
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
    description: 'Aquí es donde entiendes dónde estás parado. Aprende a moverte por los diferentes mercados y plataformas de forma segura.',
    icon: 'Search',
    color: 'bg-blue-500',
    // Image related to analysis/documents
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Diferenciación de Mercados (BMV vs. BIVA vs. SIC)',
        content: 'El Sistema Internacional de Cotizaciones (SIC). El "ajá moment": descubre cómo es posible y legal ser dueño de una fracción de Occidental Petroleum desde una app mexicana.'
      },
      {
        title: 'Casas de Bolsa y Seguridad',
        content: 'Guía rápida y confiable sobre cómo elegir una casa de bolsa regulada por la CNBV (como GBM o Kuspit), enfocándonos en la seguridad absoluta de tus fondos.'
      },
      {
        title: 'Tipos de Activos (Más allá de las acciones)',
        content: 'Introducción a ETFs (como VOO o IVVPESO) y las FIBRAS. Aprende por qué empezar con ETFs es mucho más seguro para un principiante que elegir acciones individuales.'
      },
      {
        title: 'Análisis Fundamental Básico',
        content: 'Una introducción a cómo valorar la salud de una empresa leyendo sus Estados Financieros para saber qué estás comprando realmente.'
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
    description: 'Enfoque en el "cuándo" comprar o vender basado en el precio.',
    icon: 'CandlestickChart',
    color: 'bg-indigo-500',
    // Image related to charts/trading
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Principios del Análisis Técnico',
        content: 'La historia se repite. Teoría de Dow, identificación de soportes (piso), resistencias (techo) y líneas de tendencia dinámicas.'
      },
      {
        title: 'Lectura de Velas Japonesas',
        content: 'El lenguaje del precio. Patrones de reversión (Martillo, Estrella Fugaz) y continuación (Banderas, Triángulos).'
      },
      {
        title: 'Indicadores y Osciladores',
        content: 'Herramientas matemáticas: RSI para sobrecompra/sobreventa, MACD para momentum, Medias Móviles para tendencia y Bandas de Bollinger para volatilidad.'
      },
      {
        title: 'Estructura de Mercado',
        content: 'Identificación de fases del mercado institucional: Acumulación, Tendencia Alcista, Distribución y Tendencia Bajista.'
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
    description: 'La diferencia entre un apostador y un inversor profesional.',
    icon: 'ShieldAlert',
    color: 'bg-amber-500',
    // Image related to portfolio/balance/risk
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Gestión Monetaria (Money Management)',
        content: 'La regla del 1-2%. Cálculo del tamaño de la posición adecuado. Riesgo por operación vs Riesgo de Ruina. Diversificación inteligente.'
      },
      {
        title: 'Construcción de Portafolios',
        content: 'Modelos de asignación de activos. Estrategia Core-Satellite (Núcleo pasivo, Satélites activos) y la Cartera Permanente de Harry Browne.'
      },
      {
        title: 'Rebalanceo y Seguimiento',
        content: 'La disciplina del éxito. Cuándo vender una acción ganadora o perdedora. Cómo ajustar el portafolio según tu edad y ciclo de vida.'
      },
      {
        title: 'Fiscalidad para Inversores',
        content: 'Optimización fiscal. Impuestos sobre dividendos y ganancias de capital. Diferencias entre cuentas imponibles y cuentas de retiro.'
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
    description: 'Módulos para usuarios que buscan optimizar rendimientos o protegerse.',
    icon: 'Bot',
    color: 'bg-rose-500',
    // Image related to code/algo/advanced
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Opciones Financieras',
        content: 'El poder del apalancamiento controlado. Compra y venta de Calls y Puts. Estrategias de cobertura y generación de ingresos (Covered Calls).'
      },
      {
        title: 'Venta en Corto (Short Selling)',
        content: 'Cómo ganar dinero cuando el mercado cae. Mecánica del préstamo de acciones y riesgos de "Short Squeeze".'
      },
      {
        title: 'Inversión en Valor vs. Crecimiento',
        content: 'Deep Dive: Value Investing (comprar 1 dólar a 50 centavos) vs. Growth Investing (empresas con alto potencial de expansión).'
      },
      {
        title: 'Trading Algorítmico y Automatización',
        content: 'Introducción al futuro. Herramientas para automatizar el análisis o la ejecución. Backtesting de estrategias.'
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