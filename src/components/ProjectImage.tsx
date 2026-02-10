'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}

export default function ProjectImage({ src, alt, onClick, className = '' }: ProjectImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl cursor-pointer
        border border-[var(--morandi-blue-100)]
        shadow-md shadow-[var(--morandi-blue-200)]/10
        hover:shadow-lg hover:shadow-[var(--morandi-blue-300)]/20
        hover:border-[var(--morandi-blue-200)]
        transition-shadow duration-300
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-[var(--morandi-blue-500)]/0 hover:bg-[var(--morandi-blue-500)]/5 transition-colors duration-300" />
    </motion.div>
  );
}
