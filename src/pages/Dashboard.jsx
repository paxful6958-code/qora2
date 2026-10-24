import React from 'react';

export default function Dashboard() {
  return (
    <div className="h-[calc(100vh-73px)] grid grid-cols-12 bg-[#0a0e17]">
      {/* Sidebar / Asset List */}
      <div className="col-span-3 border-r border-gray-800 p-4 bg-[#131924]">
        <h2 className="text-sm font-semibold text-gray-400 mb-4">MARKET WATCH</h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center p-2 rounded hover:bg-gray-800 cursor-pointer">
            <div>
              <p className="font-bold text-sm">EUR/USD</p>
              <p className="text-xs text-gray-400">Forex</p>
            </div>
            <span className="text-emerald-400 text-sm">1.0842</span>
          </li>
          <li className="flex justify-between items-center p-2 rounded hover:bg-gray-800 cursor-pointer">
            <div>
              <p className="font-bold text-sm">BTC/USD</p>
              <p className="text-xs text-gray-400">Crypto</p>
            </div>
            <span className="text-emerald-400 text-sm">64,280</span>
          </li>
        </ul>
      </div>

      {/* Main Chart Window */}
      <div className="col-span-6 flex flex-col items-center justify-center border-r border-gray-800 text-gray-500">
        <p className="text-lg">Live Trading Chart Workspace</p>
        <span className="text-xs text-gray-600">(TradingView Chart Integration Here)</span>
      </div>

      {/* AI Assistant & Execution Panel */}
      <div className="col-span-3 p-4 bg-[#131924]">
        <h2 className="text-sm font-semibold text-gray-400 mb-4">QORA AI ASSISTANT</h2>
        <div className="bg-[#1a2232] p-3 rounded-lg border border-gray-800 text-xs text-gray-300 mb-4">
          <p className="text-emerald-400 font-semibold mb-1">AI Signal Detected:</p>
          <p>Bullish divergence on EUR/USD 15M chart. Suggested SL: 1.0820 | TP: 1.0880.</p>
        </div>
        <div className="space-y-3">
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 rounded-lg">
            BUY / LONG
          </button>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg">
            SELL / SHORT
          </button>
        </div>
      </div>
    </div>
  );
}