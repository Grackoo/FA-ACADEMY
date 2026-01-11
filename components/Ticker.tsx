import React, { useEffect } from 'react';

// Declaration to avoid TypeScript errors with the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tv-ticker-tape': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        symbols?: string;
        'show-hover'?: boolean;
        'color-theme'?: string;
      };
    }
  }
}

const Ticker: React.FC = () => {
  useEffect(() => {
    // Check if script is already added to avoid duplicates
    const scriptId = 'tradingview-ticker-tape-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full bg-slate-900 border-b border-slate-800">
      <tv-ticker-tape
        symbols="FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,FX:USDMXN"
        theme="dark"

      />
    </div>
  );
};

export default Ticker;