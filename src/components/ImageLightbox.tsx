'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import basePath from '@/lib/basePath';
import { useEffect } from 'react';

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--text-primary)]/90 backdrop-blur-md cursor-pointer p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative max-w-[90vw] max-h-[90vh]"
          >
            <Image
              src={`${basePath}${src}`}
              alt={alt}
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl object-contain max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
