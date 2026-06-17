'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/10 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 pb-20 border-b border-cyan-500/10"
        >
          <div className="font-mono-tech text-xs text-cyan-400 tracking-[0.3em] mb-4">// HAZIR MISINIZ?</div>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6">
            PROJENİZİ{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              BAŞLATALIM
            </span>
          </h2>
          <p className="font-jakarta text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Dijital dönüşümünüzün ilk adımını bugün atın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-orbitron font-bold text-sm tracking-widest transition-all duration-300 hover:scale-105 glow-cyan shadow-xl shadow-cyan-500/30"
            >
              <Zap className="w-4 h-4" />
              FİYAT TEKLİFİ AL
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-green-500/30 text-green-400 font-orbitron text-sm tracking-widest transition-all duration-300 hover:border-green-400 hover:bg-green-500/5"
            >
              <MessageCircle className="w-4 h-4" />
              WHATSAPP&apos;TAN YAZ
            </a>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="18,2 33,10 33,26 18,34 3,26 3,10" fill="none" stroke="url(#footer-hex)" strokeWidth="1.5" />
                  <path d="M12 11 L12 25 M12 18 L20 11 M12 18 L20 25" stroke="url(#footer-k)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="18" cy="18" r="1.5" fill="#00d4ff" />
                  <defs>
                    <linearGradient id="footer-hex" x1="3" y1="2" x2="33" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00d4ff" /><stop offset="1" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="footer-k" x1="12" y1="11" x2="20" y2="25" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00d4ff" /><stop offset="1" stopColor="#00ff88" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-orbitron text-lg font-bold tracking-[0.12em]">
                <span className="text-white">KATA</span>
                <span className="text-cyan-400">LIST</span>
              </span>
            </div>
            <p className="font-jakarta text-slate-500 text-base leading-relaxed max-w-xs">
              Yazılım mühendisi ekibimizle dijital kurumsal destek, otomasyon ve tasarım hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono-tech text-xs text-cyan-400 tracking-widest mb-4">// NAVİGASYON</div>
            <ul className="space-y-3">
              {[
                { label: 'Ana Sayfa', href: '#hero' },
                { label: 'Hakkımızda', href: '#about' },
                { label: 'Hizmetler', href: '#services' },
                { label: 'Projeler', href: '#projects' },
                { label: 'Yorumlar', href: '#reviews' },
                { label: 'İletişim', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-jakarta text-slate-500 hover:text-cyan-400 transition-colors text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono-tech text-xs text-purple-400 tracking-widest mb-4">// İLETİŞİM</div>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-jakarta text-slate-500 hover:text-green-400 transition-colors text-base">
                  WhatsApp: +90 534 885 22 48
                </a>
              </li>
              <li>
                <a href="tel:+905348852248" className="font-jakarta text-slate-500 hover:text-cyan-400 transition-colors text-base">
                  Tel: 0534 885 22 48
                </a>
              </li>
              <li>
                <span className="font-mono-tech text-xs text-slate-600">Pazartesi - Cumartesi</span>
                <br />
                <span className="font-jakarta text-slate-500 text-base">09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cyan-500/10">
          <div className="font-mono-tech text-xs text-slate-600">
            © {new Date().getFullYear()} KATALIST. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono-tech text-xs text-slate-600">SİSTEM AKTİF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
