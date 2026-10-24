import React from 'react';
import MarketTickers from '../components/home/MarketTickers';

export default function Home() {
  return (
    <div>
      <MarketTickers />
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Move With the Markets. <br />
          <span className="text-emerald-400">Powered by AI.</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Trade global markets from one powerful platform with live charts, real-time market data, secure Demo & Live accounts, and Qora AI — your intelligent trading assistant.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-xl transition">
            Create Account
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition">
            Try Demo Account
          </button>
        </div>
      </section>

      <section className="bg-[#131924] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#1a2232] rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-2 text-emerald-400">AI Market Analysis</h3>
            <p className="text-sm text-gray-400">Real-time market intelligence and automated trade opportunity identification.</p>
          </div>
          <div className="p-6 bg-[#1a2232] rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-2 text-emerald-400">Multi-Asset Terminal</h3>
            <p className="text-sm text-gray-400">Access Forex, Crypto, Stocks, Commodities, and Indices all in one workspace.</p>
          </div>
          <div className="p-6 bg-[#1a2232] rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-2 text-emerald-400">Smart Risk Management</h3>
            <p className="text-sm text-gray-400">Automated Stop Loss (SL) and Take Profit (TP) execution workflows.</p>
          </div>
        </div>
      </section>
    </div>
  );
}