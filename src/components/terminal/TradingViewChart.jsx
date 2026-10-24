import React from 'react';

export default function TradingViewChart({ symbol = 'EURUSD' }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#0d121c] text-gray-500 border-r border-gray-800">
      <div className="p-4 border border-dashed border-gray-700 rounded-lg text-center">
        <p className="text-emerald-400 font-bold mb-1">TradingView Chart View</p>
        <p className="text-xs text-gray-400">Loaded Symbol: <span className="text-white font-mono">{symbol}</span></p>
      </div>
    </div>
  );
}