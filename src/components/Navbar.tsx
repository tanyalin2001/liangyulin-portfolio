'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-6 py-4 bg-white/85 backdrop-blur-xl rounded-2xl border border-[var(--morandi-blue-200)] shadow-lg shadow-[rgba(141,170,185,0.12)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[var(--morandi-blue-600)] to-[var(--morandi-red-400)]"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--morandi-blue-600)] transition-colors">
              Liang Yu Lin
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-3 md:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                      ${isActive
                        ? 'text-[var(--morandi-blue-800)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-[var(--morandi-blue-200)] rounded-lg"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
