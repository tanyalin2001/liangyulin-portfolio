'use client';

import { motion } from 'framer-motion';

interface TagProps {
  children: React.ReactNode;
  variant?: 'blue' | 'red' | 'neutral';
}

export default function Tag({ children, variant = 'blue' }: TagProps) {
  const variants = {
    blue: 'bg-[#e8f0f5] text-[#5c7d8e] border-[#c8d8e2]',
    red: 'bg-[#f5ebe9] text-[#8f5a55] border-[#e4cdc9]',
    neutral: 'bg-[#f0efee] text-[#7a7672] border-[#dddad8]',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`
        inline-block px-3 py-1.5 text-xs font-medium rounded-lg border
        ${variants[variant]}
        cursor-default
      `}
    >
      {children}
    </motion.span>
  );
}
