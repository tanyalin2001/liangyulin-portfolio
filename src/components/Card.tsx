'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  variant?: 'default' | 'featured' | 'subtle';
}

export default function Card({ children, className = '', delay = 0, hover = true, variant = 'default' }: CardProps) {
  const isFeatured = variant === 'featured';
  const isSubtle = variant === 'subtle';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : {}}
      className={`
        relative rounded-2xl p-6 md:p-8 mb-8
        overflow-hidden group
        transition-all duration-300
        ${isFeatured
          ? 'bg-gradient-to-br from-white to-[#f0f4f7] border-2 border-[#a2bfcc] shadow-[0_8px_30px_rgba(141,170,185,0.15)] hover:shadow-[0_12px_40px_rgba(141,170,185,0.25)] hover:border-[#8daab9]'
          : isSubtle
          ? 'bg-[#f8fafb] border border-[#dde6ec] shadow-[0_4px_16px_rgba(141,170,185,0.08)] hover:shadow-[0_6px_24px_rgba(141,170,185,0.15)] hover:border-[#c8d8e2]'
          : 'bg-white border border-[#dde6ec] shadow-[0_4px_20px_rgba(141,170,185,0.1)] hover:shadow-[0_8px_30px_rgba(141,170,185,0.18)] hover:border-[#c8d8e2]'
        }
        ${className}
      `}
    >
      {/* Gradient accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--morandi-blue-400)] to-[var(--morandi-red-400)] ${isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />

      {/* Subtle glow effect */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[var(--morandi-blue-400)] rounded-full opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
