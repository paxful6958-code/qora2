import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const tickerData = [
    { pair: 'EURUSD', price: '1.0842', up: true },
    { pair: 'GBPUSD', price: '1.2654', up: true },
    { pair: 'USDJPY', price: '154.30', up: false },
    { pair: 'XAUUSD', price: '2,387.10', up: false },
    { pair: 'US30', price: '39,284', up: true },
    { pair: 'ETHUSD', price: '3,488', up: true },
    { pair: 'BTCUSD', price: '64,280', up: true }
  ];

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen flex flex-col font-sans">
      
      {/* Top Real-Time Ticker Bar */}
      <div className="bg-[#06090e] border-b border-gray-800/80 py-2 px-4 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs font-mono">
          {tickerData.map((t, i) => (
            <div key={i} className="flex items-center space-x-2 inline-flex">
              <span className="font-bold text-gray-300">{t.pair}</span>
              <span className={t.up ? "text-emerald-400" : "text-red-400"}>{t.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="bg-[#0b1019] border-b border-gray-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => setCurrentPage('home')} className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-extrabold text-black text-xl shadow-lg shadow-emerald-500/20">
              Q
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight">QORA TRADING</span>
              <span className="block text-[10px] text-gray-400 font-medium tracking-wider uppercase">Multi-asset terminal</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <button onClick={() => setCurrentPage('markets')} className="hover:text-emerald-400 transition">Markets</button>
            <button onClick={() => setCurrentPage('ai-trading')} className="hover:text-emerald-400 transition">AI Trading</button>
            <button onClick={() => setCurrentPage('blog')} className="hover:text-emerald-400 transition">Blog</button>
            <button onClick={() => setCurrentPage('learning')} className="hover:text-emerald-400 transition">Learning Center</button>
            <button onClick={() => setCurrentPage('help')} className="hover:text-emerald-400 transition">Help Center</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-emerald-400 transition">About</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-emerald-400 transition">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={() => setCurrentPage('terminal')} className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 transition">
              Login
            </button>
            <button onClick={() => setCurrentPage('terminal')} className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition shadow-md shadow-emerald-500/20">
              Create Account
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Content Views */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto text-center">
              <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                WELCOME TO QORA TRADING
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl mx-auto mb-6">
                Move With the Markets. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Powered by AI.
                </span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                Trade global markets from one powerful platform with live charts, real-time market data, secure Demo and Live accounts, and Qora AI - your intelligent trading assistant that analyzes the markets, identifies trading opportunities, and can automatically execute trades with smart Stop Loss (SL) and Take Profit (TP) risk management.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                <button onClick={() => setCurrentPage('terminal')} className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-500/20">
                  Create Account
                </button>
                <button onClick={() => setCurrentPage('terminal')} className="w-full sm:w-auto bg-[#131924] hover:bg-gray-800 border border-gray-700 text-white font-semibold text-base px-8 py-4 rounded-xl transition">
                  Login
                </button>
              </div>

              <p className="text-xs text-gray-400 mb-12">
                Already have an account? <button onClick={() => setCurrentPage('terminal')} className="text-emerald-400 underline">Login</button>
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
                {[
                  'AI-Powered Market Analysis',
                  'Optional Automated Trading',
                  'Smart Risk Management (SL & TP)',
                  'Forex • Crypto • Stocks • Commodities • Indices'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-[#131924]/80 border border-gray-800 p-4 rounded-xl">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-xs font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights Section */}
            <section className="bg-[#0d131f] py-16 border-y border-gray-800/80 px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Live charts', desc: 'Real-time market intelligence and multi-asset charting tools.' },
                  { title: 'Fast execution', desc: 'Instant order routing across forex, crypto, stocks, and commodities.' },
                  { title: 'Instant access', desc: 'Seamless demo and live trading account workflows.' }
                ].map((card, i) => (
                  <div key={i} className="bg-[#131924] border border-gray-800 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Payment Methods */}
            <section className="py-16 px-6 max-w-7xl mx-auto text-center">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Supported Deposit & Withdrawal Methods</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {['M-Pesa payment method', 'Card payment method', 'USDT payment method', 'Ethereum payment method', 'Bitcoin payment method'].map((method, idx) => (
                  <div key={idx} className="bg-[#131924] border border-gray-800 px-6 py-3 rounded-xl text-xs font-semibold text-gray-300 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Live Terminal Workspace View */}
        {currentPage === 'terminal' && (
          <div className="h-[calc(100vh-120px)] grid grid-cols-12 bg-[#0a0e17]">
            <div className="col-span-3 border-r border-gray-800 p-4 bg-[#131924]">
              <h2 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider">MARKETS</h2>
              <ul className="space-y-2">
                {['EURUSD', 'GBPUSD', 'BTCUSD', 'XAUUSD', 'US30'].map((pair) => (
                  <li key={pair} className="flex justify-between items-center p-3 rounded-xl bg-gray-800/40 hover:bg-gray-800 cursor-pointer">
                    <span className="font-bold text-sm text-white">{pair}</span>
                    <span className="text-emerald-400 text-xs font-mono">LIVE</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 flex flex-col items-center justify-center bg-[#0d121c] border-r border-gray-800 text-gray-400">
              <p className="text-lg font-bold text-white">Live Trading Terminal</p>
              <p className="text-xs text-gray-500 mt-1">Multi-asset execution workspace loaded</p>
            </div>
            <div className="col-span-3 p-4 bg-[#131924] flex flex-col justify-between">
              <div>
                <h2 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider">QORA AI AGENT</h2>
                <div className="bg-[#1a2232] p-4 rounded-xl border border-emerald-500/20 text-xs text-gray-300">
                  <p className="text-emerald-400 font-bold mb-1">AI Setup Identified</p>
                  <p>Smart Risk Management Active: Automatic SL & TP targets calculated.</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-emerald-500 text-black font-bold py-3 rounded-xl">BUY / LONG</button>
                <button className="w-full bg-red-500 text-white font-bold py-3 rounded-xl">SELL / SHORT</button>
              </div>
            </div>
          </div>
        )}

        {/* Other Pages */}
        {['markets', 'ai-trading', 'blog', 'learning', 'help', 'about', 'contact'].includes(currentPage) && (
          <div className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-extrabold capitalize mb-4 text-emerald-400">{currentPage.replace('-', ' ')}</h1>
            <p className="text-gray-300 leading-relaxed">
              Qora Trading brings live charts, real-time market intelligence, secure account workflows, and AI-assisted execution into one professional trading environment.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#070a10] border-t border-gray-800/80 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-extrabold text-black text-lg">
                Q
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Qora Trading</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Qora Trading brings live charts, real-time market intelligence, secure account workflows, and AI-assisted execution into one professional trading environment across forex, crypto, stocks, commodities, and indices.
            </p>
            <span className="text-[11px] text-emerald-400 font-semibold block">
              Professional multi-asset trading with AI-assisted analysis and execution workflows.
            </span>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setCurrentPage('markets')} className="hover:text-white">Markets</button></li>
              <li><button onClick={() => setCurrentPage('markets')} className="hover:text-white">Market Watch</button></li>
              <li><button onClick={() => setCurrentPage('learning')} className="hover:text-white">Learning Center</button></li>
              <li><button onClick={() => setCurrentPage('help')} className="hover:text-white">Terms & Conditions</button></li>
              <li><button onClick={() => setCurrentPage('help')} className="hover:text-white">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Support</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Payment Options</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>✓ M-Pesa payment method</li>
              <li>✓ Card payment method</li>
              <li>✓ USDT payment method</li>
              <li>✓ Ethereum payment method</li>
              <li>✓ Bitcoin payment method</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-xs">
              <p><span className="text-gray-500">Email:</span> support@qoratrading.com</p>
              <p><span className="text-gray-500">Telephone:</span> +1 808 301 0534</p>
              <p><span className="text-gray-500">Head Office:</span> 535 5th Ave, New York, NY 10017, USA</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800/60 pt-8 text-center text-[11px] text-gray-500 space-y-3">
          <p className="max-w-4xl mx-auto leading-relaxed">
            CFDs and leveraged products carry a high level of risk and may not be suitable for all investors. Please ensure you understand the risks involved and trade only with capital you can afford to put at risk. Information on this website is for general information purposes and does not constitute investment advice.
          </p>
          <p className="text-gray-400">Copyright © 2026 Qora Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}