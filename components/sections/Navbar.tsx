'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Yorumlar', href: '#reviews' },
  { label: 'İletişim', href: '#contact' },
];

const WHATSAPP_URL =
  'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

export function KatalistLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Mark */}
      <div className="w-8 h-8 relative flex-shrink-0">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="32" height="32" rx="8" fill="#4f46e5" />
          <path
            d="M10 8 L10 24 M10 16 L18 8 M10 16 L18 24"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="22" cy="16" r="2" fill="white" opacity="0.5" />
        </svg>
      </div>
      {/* Wordmark */}
      <span
        className={cn(
          'font-orbitron text-[17px] font-bold tracking-[0.06em]',
          dark ? 'text-white' : 'text-slate-900'
        )}
      >
        KATA<span className="text-indigo-600">LIST</span>
      </span>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <KatalistLogo />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          Fiyat Teklifi Al
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <ul className="flex flex-col py-5 px-6 gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fiyat Teklifi Al
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
