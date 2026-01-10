import React from 'react';
import { MARKET_DATA } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white overflow-hidden py-2 border-b border-slate-800">
      <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
        {/* Duplicate list to create seamless loop */}
        {[...MARKET_DATA, ...MARKET_DATA, ...MARKET_DATA].map((item, index) => (
          <div key={index} className="flex items-center mx-6 space-x-2">
            <span className="font-bold text-sm text-slate-300">{item.symbol}</span>
            <span className="text-xs font-mono">{item.price}</span>
            <span className={`text-xs font-bold flex items-center ${item.isUp ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.isUp ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;