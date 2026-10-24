import React from 'react';

export default function AIAssistant() {
  return (
    <div className="bg-[#1a2232] border border-emerald-500/20 rounded-xl p-4 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-emerald-400 tracking-wider">QORA AI SIGNAL</span>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Active</span>
      </div>
      <p className="text-xs text-gray-300">
        AI Signal: <strong className="text-white">Bullish Breakout</strong> detected on EUR/USD.
      </p>
      <div className="text-[11px] text-gray-400 space-y-1">
        <p>Suggested Stop Loss: <span className="text-red-400 font-mono">1.0820</span></p>
        <p>Suggested Take Profit: <span className="text-emerald-400 font-mono">1.0890</span></p>
      </div>
      <button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs py-2 rounded-lg font-semibold">
        Auto-Execute AI Trade
      </button>
    </div>
  );
}