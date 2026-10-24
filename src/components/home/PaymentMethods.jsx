import React from 'react';

const methods = ['M-Pesa', 'Credit / Debit Card', 'USDT (TRC20/ERC20)', 'Ethereum (ETH)', 'Bitcoin (BTC)'];

export default function PaymentMethods() {
  return (
    <section className="py-12 bg-[#131924] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-widest mb-6">Supported Payment Methods</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {methods.map((method, idx) => (
            <span key={idx} className="bg-[#1a2232] border border-gray-700 text-gray-300 text-xs px-4 py-2 rounded-lg font-medium">
              ✓ {method}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}