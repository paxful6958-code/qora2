import React from 'react';

const marketList = [
  { symbol: 'EUR/USD', category: 'Forex', price: '1.0842', change: '+0.12%' },
  { symbol: 'BTC/USD', category: 'Crypto', price: '64,280', change: '+2.40%' },
  { symbol: 'XAU/USD', category: 'Commodities', price: '2,387.10', change: '-0.35%' },
  { symbol: 'US30', category: 'Indices', price: '39,284', change: '+0.05%' },
  { symbol: 'AAPL', category: 'Stocks', price: '224.50', change: '+1.15%' }
];

export default function Markets() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Market Watch</h1>
      <div className="bg-[#131924] border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1a2232] text-gray-400">
            <tr>
              <th className="p-4">Symbol</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">24h Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {marketList.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#1a2232]/50">
                <td className="p-4 font-bold text-white">{item.symbol}</td>
                <td className="p-4 text-gray-400">{item.category}</td>
                <td className="p-4">{item.price}</td>
                <td className={`p-4 ${item.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {item.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}