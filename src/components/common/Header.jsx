import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#131924] border-b border-gray-800 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-emerald-400 tracking-wider">
          QORA <span className="text-white">TRADING</span>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <Link to="/markets" className="hover:text-emerald-400">Markets</Link>
          <Link to="/ai-trading" className="hover:text-emerald-400">AI Trading</Link>
          <Link to="/blog" className="hover:text-emerald-400">Blog</Link>
          <Link to="/learning-center" className="hover:text-emerald-400">Learning Center</Link>
          <Link to="/help-center" className="hover:text-emerald-400">Help Center</Link>
          <Link to="/about" className="hover:text-emerald-400">About</Link>
          <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium hover:text-emerald-400">Login</button>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm px-4 py-2 rounded-lg transition">
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
}