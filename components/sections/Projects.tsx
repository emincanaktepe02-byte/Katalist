'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

/* ── Project data with real logo URLs ───────────────────────────── */
const projects = [
  {
    title: 'Kumman Gevrek',
    category: 'Gıda & Fırın',
    url: 'https://kumman-gevrek.vercel.app/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kumman-gevrek.vercel.app&size=256',
    logoBg: '#fff8f0',
    accent: '#f97316',
    initial: 'KG',
  },
  {
    title: 'Bilge Beauty',
    category: 'Güzellik & Estetik',
    url: 'https://bilgebeuty.vercel.app/#location',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://bilgebeuty.vercel.app&size=256',
    logoBg: '#fdf2f8',
    accent: '#ec4899',
    initial: 'BB',
  },
  {
    title: 'Atlantik Gayrimenkul',
    category: 'Gayrimenkul',
    url: 'https://atlantik-gayrimenkul.vercel.app/',
    logo: 'https://atlantik-gayrimenkul.vercel.app/_next/image?url=%2Fgorsel.png&w=256&q=75',
    logoBg: '#eff6ff',
    accent: '#3b82f6',
    initial: 'AG',
  },
  {
    title: 'Berber Vagos',
    category: 'Berber & Kuaför',
    url: 'https://berbervagos.com/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://berbervagos.com&size=256',
    logoBg: '#1a1a1a',
    accent: '#eab308',
    initial: 'BV',
  },
  {
    title: 'NZ Poliklinik',
    category: 'Sağlık & Klinik',
    url: 'https://nzpoliklinik.com.tr/',
    logo: 'https://nzpoliklinik.com.tr/wp-content/uploads/2025/07/nz-poliklinik-logo-purple.png',
    logoBg: '#f5f3ff',
    accent: '#8b5cf6',
    initial: 'NZ',
  },
  {
    title: 'Yılmaz Otomotiv',
    category: 'Otomotiv',
    url: 'https://www.yilmazotomotiv.com/',
    logo: 'https://www.yilmazotomotiv.com/images/logo.png',
    logoBg: '#f8fafc',
    accent: '#ef4444',
    initial: 'YO',
  },
  {
    title: 'Enn Motors',
    category: 'Otomotiv',
    url: 'https://ennmotors.com/',
    logo: 'https://ennmotors.com/wp-content/uploads/2016/08/EnnMotorLogo.png',
    logoBg: '#f8fafc',
    accent: '#f59e0b',
    initial: 'EM',
  },
  {
    title: 'İzmir Dental Klinik',
    category: 'Diş Kliniği',
    url: 'https://izmirdentalklinik.com/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://izmirdentalklinik.com&size=256',
    logoBg: '#ecfdf5',
    accent: '#10b981',
    initial: 'İD',
  },
  {
    title: 'Artera Mimarlık',
    category: 'Mimarlık & Tasarım',
    url: 'https://arteramimarlik.com/',
    logo: 'https://arteramimarlik.com/wp-content/uploads/2024/06/log.png',
    logoBg: '#1c1c1c',
    accent: '#a3a3a3',
    initial: 'AM',
  },
  {
    title: 'Safir Kuyumculuk',
    category: 'Kuyumculuk & Mücevher',
    url: 'https://www.safirkuyumculuk.com.tr/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://safirkuyumculuk.com.tr&size=256',
    logoBg: '#fefce8',
    accent: '#f59e0b',
    initial: 'SK',
  },
];

/* ── Logo card with fallback avatar ────────────────────────────── */
function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 w-52 md:w-60 rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0a0f1a] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ boxShadow: '0 0 0 0 transparent' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 20px 50px -10px ${p.accent}33`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 0 transparent';
      }}
    >
      {/* Logo area */}
      <div
        className="flex items-center justify-center h-32 w-full relative overflow-hidden"
        style={{ background: p.logoBg }}
      >
        {!imgErr ? (
          <img
            src={p.logo}
            alt={p.title}
            className="max-h-16 max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgErr(true)}
          />
        ) : (
          /* Fallback: initials avatar */
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center font-orbitron font-black text-xl text-white"
            style={{ background: `linear-gradient(135deg, ${p.accent}cc, ${p.accent}55)` }}
          >
            {p.initial}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300">
          <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-black font-orbitron text-[10px] tracking-widest transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            ZİYARET ET <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Info area */}
      <div className="px-4 py-3.5 border-t border-white/[0.06]">
        <div className="font-orbitron text-sm font-bold text-white leading-tight mb-1.5 group-hover:text-cyan-400 transition-colors">
          {p.title}
        </div>
        <div
          className="font-mono-tech text-[10px] tracking-widest px-2 py-0.5 rounded-full inline-block"
          style={{ background: `${p.accent}18`, color: p.accent }}
        >
          {p.category}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}
      />
    </a>
  );
}

/* ── Marquee row ────────────────────────────────────────────────── */
function MarqueeRow({ items, reverse = false, speed = 40 }: {
  items: typeof projects;
  reverse?: boolean;
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-4 w-max"
        animate={paused ? {} : { x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} p={p} />
        ))}
      </motion.div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────── */
export default function Projects() {
  /* split into two rows — odd/even */
  const row1 = projects.filter((_, i) => i % 2 === 0);   // 5 items
  const row2 = projects.filter((_, i) => i % 2 !== 0);   // 5 items

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-mono-tech text-xs text-green-400 tracking-[0.3em] uppercase block mb-4">
            // PROJELERİMİZ
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-5">
            TAMAMLANAN{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              ÇALIŞMALAR
            </span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Farklı sektörlerden müşterilerimiz için hayata geçirdiğimiz dijital projeler.
            Hover ederek siteyi ziyaret edin.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee strips ── */}
      <div className="relative z-10 flex flex-col gap-5">
        {/* Fade edge masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020408] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020408] to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={row1} reverse={false} speed={38} />
        <MarqueeRow items={row2} reverse={true} speed={44} />
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-14"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-orbitron text-xs tracking-widest text-slate-500 hover:text-cyan-400 transition-colors duration-300 group"
        >
          SİZ DE BİR PROJE BAŞLATALIM
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
