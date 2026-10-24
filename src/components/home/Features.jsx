import React from 'react';

const features = [
  { title: 'AI-Powered Analysis', desc: 'Real-time market scanning that detects key technical patterns and momentum setups.' },
  { title: 'Smart SL & TP Management', desc: 'Automatic risk protection using dynamically calculated Stop Loss and Take Profit targets.' },
  { title: 'Multi-Asset Trading', desc: 'Access global CFDs including Forex, Commodities, Indices, Stocks, and Crypto.' },
  { title: 'Instant Execution', desc: 'Ultra-fast trade execution directly from high-frequency market liquidity providers.' }
];

export default function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-[#131924] p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition">
            <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
            <p className="text-sm text-gray-400">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}