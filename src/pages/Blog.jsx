import React from 'react';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Latest Market Insights & News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#131924] border border-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-bold text-emerald-400 mb-2">Crypto Market Outlook 2026</h2>
          <p className="text-xs text-gray-400">Key trends shaping cryptocurrency liquidity and trading strategies.</p>
        </div>
      </div>
    </div>
  );
}