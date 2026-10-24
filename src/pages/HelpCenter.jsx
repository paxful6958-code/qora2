import React from 'react';

export default function HelpCenter() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Help & Support Center</h1>
      <div className="space-y-4">
        <div className="bg-[#131924] border border-gray-800 p-4 rounded-lg">
          <h3 className="font-bold mb-1">How do I deposit funds using M-Pesa?</h3>
          <p className="text-xs text-gray-400">Navigate to your dashboard, click Deposit, select M-Pesa, and input your phone number.</p>
        </div>
      </div>
    </div>
  );
}