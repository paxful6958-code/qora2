import React from 'react';

export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold text-sm transition duration-200';
  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-black',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline: 'border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}