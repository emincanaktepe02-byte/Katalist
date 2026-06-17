'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
    logoBg: '#fafafa',
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
    logoBg: '#18181b',
    accent: '#a3a3a3',
    initial: 'AM',
  },
  {
    title: 'Safir Kuyumculuk',
    category: 'Kuyumculuk',
    url: 'https://www.safirkuyumculuk.com.tr/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://safirkuyumculuk.com.tr&size=256',
    logoBg: '#fefce8',
    accent: '#f59e0b',
    initial: 'SK',
  },
];

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 w-52 md:w-60 rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
      style={{ ['--accent' as string]: p.accent }}
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
            className="max-h-16 max-w-[75%] object-contain transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-orbitron font-black text-lg text-white"
            style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}88)` }}
          >
            {p.initial}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300">
          <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-lg transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            Ziyaret Et <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-3.5 border-t border-slate-100">
        <div className="font-semibold text-sm text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
          {p.title}
        </div>
        <div
          className="text-[10px] font-medium px-2 py-0.5 rounded-full inline-block"
          style={{ background: `${p.accent}18`, color: p.accent }}
        >
          {p.category}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: p.accent }}
      />
    </a>
  );
}

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

const row1 = projects.filter((_, i) => i % 2 === 0);
const row2 = projects.filter((_, i) => i % 2 !== 0);

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono-tech text-xs tracking-[0.25em] text-indigo-600 uppercase mb-3">
            // Projelerimiz
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Tamamlanan <span className="text-indigo-600">Çalışmalar</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Farklı sektörlerden müşterilerimiz için hayata geçirdiğimiz dijital projeler.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 flex flex-col gap-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        <MarqueeRow items={row1} reverse={false} speed={36} />
        <MarqueeRow items={row2} reverse={true} speed={42} />
      </div>

      <div className="relative z-10 text-center mt-14">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors group"
        >
          Siz de bir proje başlatalım
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
