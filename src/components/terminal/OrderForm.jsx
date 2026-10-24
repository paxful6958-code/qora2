import React, { useState } from 'react';

export default function OrderForm() {
  const [lotSize, setLotSize] = useState('0.10');

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-gray-400 block mb-1">Lot Size / Volume</label>
        <input 
          type="number" 
          value={lotSize} 
          onChange={(e) => setLotSize(e.target.value)}
          className="w-full bg-[#1a2232] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2.5 rounded-lg text-sm">BUY</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-lg text-sm">SELL</button>
      </div>
    </div>
  );
}