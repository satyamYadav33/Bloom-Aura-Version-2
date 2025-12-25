
import React from 'react';
import { motion } from 'framer-motion';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }> = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50";
  const variants = {
    primary: "bg-leafy text-white hover:bg-forest shadow-lg hover:shadow-leafy/20",
    secondary: "bg-pinky text-white hover:bg-forest",
    outline: "border-2 border-leafy text-leafy hover:bg-leafy hover:text-white"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-serif text-forest mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="text-forest/70 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'green' | 'pink' }> = ({ children, variant = 'green' }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
    variant === 'green' ? 'bg-leafy/10 text-leafy' : 'bg-pinky/10 text-pinky'
  }`}>
    {children}
  </span>
);
