import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Next-Gen AI Trading Platform
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
          Move With the Markets. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Powered by AI.
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Trade Forex, Crypto, Stocks, Commodities, and Indices with live automated technical analysis and intelligent execution.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/terminal" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-xl transition">
            Launch Terminal
          </Link>
          <Link to="/ai-trading" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl transition">
            Explore AI Features
          </Link>
        </div>
      </div>
    </section>
  );
}