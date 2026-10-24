import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-[#131924] border border-gray-800 p-6 rounded-xl text-sm space-y-3">
        <p><strong className="text-white">Email:</strong> support@qoratrading.com</p>
        <p><strong className="text-white">Phone:</strong> +1 (808) 301-0534</p>
        <p><strong className="text-white">Headquarters:</strong> 535 5th Ave, New York, NY 10017, USA</p>
      </div>
    </div>
  );
}