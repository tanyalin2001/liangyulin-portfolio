'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center gap-4 text-sm font-semibold text-[var(--morandi-blue-500)] uppercase tracking-widest mb-8 mt-14"
    >
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--morandi-blue-400)] to-[var(--morandi-red-400)] rounded-full" />
      {children}
    </motion.p>
  );
}
