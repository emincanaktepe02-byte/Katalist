'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Yorumlar', href: '#reviews' },
  { label: 'İletişim', href: '#contact' },
];

const WHATSAPP_URL = 'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <KatalistLogo />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-orbitron text-xs tracking-widest text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-orbitron text-xs tracking-widest text-black font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 glow-cyan shadow-md"
        >
          <Zap className="w-3.5 h-3.5" />
          FİYAT TEKLİFİ AL
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-cyan-400 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-cyan-500/20 overflow-hidden"
          >
            <ul className="flex flex-col py-6 px-6 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-orbitron text-sm tracking-widest text-slate-300 hover:text-cyan-400 transition-colors block py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-orbitron text-xs tracking-widest text-black font-bold bg-gradient-to-r from-cyan-400 to-cyan-500"
                >
                  <Zap className="w-3.5 h-3.5" />
                  FİYAT TEKLİFİ AL
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function KatalistLogo() {
  return (
    <div className="flex items-center gap-2.5 group">
      {/* Icon mark */}
      <div className="relative w-9 h-9">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Hexagon outer */}
          <polygon
            points="18,2 33,10 33,26 18,34 3,26 3,10"
            fill="none"
            stroke="url(#katalist-hex-grad)"
            strokeWidth="1.5"
            className="group-hover:drop-shadow-[0_0_8px_#00d4ff] transition-all duration-300"
          />
          {/* K letter inside */}
          <path
            d="M12 11 L12 25 M12 18 L20 11 M12 18 L20 25"
            stroke="url(#katalist-k-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center dot */}
          <circle cx="18" cy="18" r="1.5" fill="#00d4ff" className="animate-pulse-cyan" />
          <defs>
            <linearGradient id="katalist-hex-grad" x1="3" y1="2" x2="33" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00d4ff" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="katalist-k-grad" x1="12" y1="11" x2="20" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00d4ff" />
              <stop offset="1" stopColor="#00ff88" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Wordmark */}
      <span className="font-orbitron text-xl font-bold tracking-[0.12em]">
        <span className="text-white">KATA</span>
        <span className="text-cyan-400">LIST</span>
      </span>
    </div>
  );
}

export { KatalistLogo };
