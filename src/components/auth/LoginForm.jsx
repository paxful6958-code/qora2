import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs text-gray-400 block mb-1">Email Address</label>
        <input 
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#1a2232] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
        />
      </div>
      <div>
        <label className="text-xs text-gray-400 block mb-1">Password</label>
        <input 
          type="password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-[#1a2232] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
        />
      </div>
      <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2.5 rounded-lg text-sm">
        Sign In
      </button>
    </form>
  );
}