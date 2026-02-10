'use client';

import { motion } from 'framer-motion';

interface PageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 relative inline-block"
    >
      {children}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute -bottom-3 left-0 h-1 w-16 bg-gradient-to-r from-[var(--morandi-blue-400)] to-[var(--morandi-red-400)] rounded-full origin-left"
      />
    </motion.h1>
  );
}
