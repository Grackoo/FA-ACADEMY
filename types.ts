export interface SubTopic {
  title: string;
  content: string;
}

export interface Module {
  id: string;
  phase: number;
  title: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  duration: string;
  rating: number;
  description: string;
  topics: SubTopic[];
  icon: string;
  image: string;
  color: string;
}

export interface MarketItem {
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
}