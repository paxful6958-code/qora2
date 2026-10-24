import React, { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating account:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs text-gray-400 block mb-1">Full Name</label>
        <input 
          type="text" 
          required 
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full bg-[#1a2232] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
        />
      </div>
      <div>
        <label className="text-xs text-gray-400 block mb-1">Email Address</label>
        <input 
          type="email" 
          required 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[#1a2232] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
        />
      </div>
      <div>
        <label className="text-xs text-gray-400 block mb-1">Password</label>
        <input 
          type="password" 
          required 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full bg-[#1a2232] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
        />
      </div>
      <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2.5 rounded-lg text-sm">
        Create Account
      </button>
    </form>
  );
}