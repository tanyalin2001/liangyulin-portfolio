'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-20 py-12 border-t border-[var(--morandi-blue-200)] bg-white/60"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[var(--text-muted)] text-sm">
          &copy; 2026 Liang Yu Lin
        </p>
      </div>
    </motion.footer>
  );
}
