import React, { useEffect, useRef } from 'react';

const Ticker: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = ''; // Clean up previous render

      const widgetContainer = document.createElement("div");
      widgetContainer.className = "tradingview-widget-container__widget";
      container.current.appendChild(widgetContainer);

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "proName": "OANDA:XAUUSD",
            "title": "ORO"
          },
          {
            "proName": "SAXO:MXNUSD",
            "title": "Peso Mexicano"
          }
        ],
        "colorTheme": "dark",
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container w-full" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default Ticker;