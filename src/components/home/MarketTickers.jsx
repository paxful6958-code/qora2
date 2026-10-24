import React from 'react';

const tickers = [
  { pair: 'EURUSD', price: '1.0842', change: '+0.12%', isUp: true },
  { pair: 'BTCUSD', price: '64,280', change: '+2.4%', isUp: true },
  { pair: 'XAUUSD', price: '2,387.10', change: '-0.35%', isUp: false },
  { pair: 'US30', price: '39,284', change: '+0.05%', isUp: true },
  { pair: 'ETHUSD', price: '3,488', change: '+1.8%', isUp: true }
];

export default function MarketTickers() {
  return (
    <div className="bg-[#131924] py-3 border-y border-gray-800 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex justify-between space-x-6 px-6">
        {tickers.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-sm whitespace-nowrap">
            <span className="font-semibold text-gray-200">{item.pair}</span>
            <span className="text-gray-300">{item.price}</span>
            <span className={`text-xs ${item.isUp ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}