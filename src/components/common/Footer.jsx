import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f141c] border-t border-gray-800 text-gray-400 text-sm py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-emerald-400 font-bold text-lg mb-3">QORA TRADING</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Move With the Markets. Powered by AI. Multi-asset trading across Forex, Crypto, Stocks, Commodities, and Indices.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/markets" className="hover:text-white">Market Watch</Link></li>
            <li><Link to="/learning-center" className="hover:text-white">Learning Center</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Payment Methods</h4>
          <p className="text-xs text-gray-400">
            M-Pesa, Card Payments, USDT, Ethereum, Bitcoin
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-xs text-gray-400">Email: support@qoratrading.com</p>
          <p className="text-xs text-gray-400">Phone: +1 (808) 301-0534</p>
          <p className="text-xs text-gray-400">Address: 535 5th Ave, New York, NY 10017, USA</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>CFDs and leveraged products carry a high level of risk. Trade responsibly.</p>
        <p className="mt-2">Copyright © 2026 Qora Trading. All rights reserved.</p>
      </div>
    </footer>
  );
}