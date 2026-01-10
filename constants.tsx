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
    title: 'Fundamentos y Mentalidad',
    level: 'Básico',
    duration: '4 Semanas',
    rating: 4.9,
    description: 'Antes de comprar una acción, el estudiante debe entender el terreno donde está pisando.',
    icon: 'Building2',
    color: 'bg-emerald-500',
    // Image related to foundations/mentalidad
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800', 
    topics: [
      {
        title: 'Introducción al Sistema Financiero',
        content: '¿Qué es la bolsa? ¿Cómo funcionan los mercados y quiénes son los participantes (bróker, bolsa, reguladores)? Entenderemos el flujo de capital y la estructura base del mercado global.'
      },
      {
        title: 'Psicología del Dinero y Finanzas Personales',
        content: 'El interés compuesto es la octava maravilla del mundo. Aprende la diferencia crítica entre ahorro vs. inversión y cómo controlar los sesgos cognitivos como el miedo y la codicia.'
      },
      {
        title: 'Vehículos de Inversión',
        content: 'Diferencias clave entre renta fija (bonos), renta variable (acciones), ETFs (Exchange Traded Funds) y fondos indexados. Cuál elegir según tu perfil de riesgo.'
      },
      {
        title: 'Tu Primera Plataforma',
        content: 'Cómo elegir un bróker regulado y seguro. Apertura de cuenta paso a paso. Tipos de órdenes esenciales: Market, Limit y Stop Loss. Entendiendo las comisiones.'
      }
    ]
  },
  {
    id: 'fase-2',
    phase: 2,
    title: 'Análisis Fundamental',
    level: 'Intermedio',
    duration: '6 Semanas',
    rating: 4.8,
    description: 'Aquí el estudiante aprende a valorar "qué" está comprando.',
    icon: 'Search',
    color: 'bg-blue-500',
    // Image related to analysis/documents
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    topics: [
      {
        title: 'Lectura de Estados Financieros',
        content: 'Aprende a leer la salud de una empresa. Entender el Balance General (lo que tienen vs lo que deben), el Estado de Resultados (ganancias) y el Flujo de Caja (la sangre del negocio).'
      },
      {
        title: 'Métricas de Valoración',
        content: 'Uso de ratios clave para saber si una acción está barata o cara: P/E (Price to Earnings), ROE (Return on Equity), Deuda/Ebitda y Dividend Yield.'
      },
      {
        title: 'Análisis Macroeconómico',
        content: 'No inviertas contra la corriente. Cómo afectan las tasas de interés de la FED, la inflación (IPC) y el PIB a tus inversiones.'
      },
      {
        title: 'Valuación de Empresas',
        content: 'Introducción a modelos profesionales: Flujo de caja descontado (DCF) y valoración por múltiplos comparables.'
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