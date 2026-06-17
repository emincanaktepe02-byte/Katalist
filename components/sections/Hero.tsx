'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Code2 } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

/* ─── Animated Word ───────────────────────────────────────────────── */
function AnimatedWord({ word, delay, gradient }: { word: string; delay: number; gradient?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-block ${gradient
        ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent'
        : 'text-white'
      }`}
    >
      {word}
    </motion.span>
  );
}

/* ─── Particle Canvas ─────────────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const pts: { x: number; y: number; vx: number; vy: number; r: number; a: number; c: string }[] = [];
    const cols = ['#00d4ff', '#7c3aed', '#00ff88'];
    for (let i = 0; i < 70; i++) pts.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4, a: Math.random() * 0.5 + 0.15,
      c: cols[Math.floor(Math.random() * cols.length)],
    });

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + Math.round(p.a * 255).toString(16).padStart(2, '0');
        ctx.fill();
        pts.forEach(q => {
          const dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.07 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 z-0" />;
}

/* ─── Hero ────────────────────────────────────────────────────────── */
export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layers */}
      <ParticleCanvas />
      <div className="absolute inset-0 z-0 grid-bg" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(0,212,255,0.055)_0%,transparent_70%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_15%,rgba(124,58,237,0.07)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[1] bg-gradient-to-t from-[#020408] to-transparent" />

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-cyan-500/[0.06] animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-violet-500/[0.06]" style={{ animationDuration: '15s', animationName: 'spin-slow', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDirection: 'reverse' }} />
        <div className="absolute w-[950px] h-[950px] rounded-full border border-cyan-500/[0.03] animate-spin-slow" style={{ animationDuration: '40s' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] text-cyan-400 font-mono-tech text-[11px] tracking-[0.25em] mb-10 md:mb-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-cyan" />
          YAPAY ZEKA DESTEKLİ DİJİTAL ÇÖZÜMLER
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-cyan" />
        </motion.div>

        {/* ── MAIN HEADING — viewport-filling, word-by-word blur reveal ── */}
        <h1
          className="font-orbitron font-black leading-[1] tracking-tight mb-8 md:mb-10"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 9rem)' }}
        >
          <span className="block overflow-hidden pb-2">
            <AnimatedWord word="DİJİTAL" delay={0.3} />
          </span>
          <span className="block overflow-hidden pb-2">
            <AnimatedWord word="GELECEĞİ" delay={0.52} gradient />
          </span>
          <span className="block overflow-hidden pb-2">
            <AnimatedWord word="İNŞA" delay={0.74} />
            {' '}
            <AnimatedWord word="EDİYORUZ" delay={0.88} />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide font-light"
        >
          Yazılım mühendisi ekibimizle kurumsal dijital çözümler, otomasyon ve modern web tasarımı —{' '}
          <span className="text-cyan-400 font-medium">projeniz tamamlanana kadar yanınızdayız.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-orbitron font-bold text-sm tracking-widest transition-all duration-300 hover:scale-105 glow-cyan shadow-xl shadow-cyan-500/30"
          >
            <Zap className="w-4 h-4 group-hover:animate-pulse" />
            FİYAT TEKLİFİ AL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-500/30 text-cyan-400 font-orbitron text-sm tracking-widest transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/5"
          >
            <Code2 className="w-4 h-4" />
            PROJELERİMİZ
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-28 grid grid-cols-3 gap-8 md:gap-20 max-w-2xl mx-auto"
        >
          {[
            { value: '10+', label: 'Tamamlanan Proje' },
            { value: '4.6★', label: 'Müşteri Puanı' },
            { value: '7/24', label: 'Teknik Destek' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-orbitron text-2xl md:text-4xl font-black text-cyan-400">{s.value}</div>
              <div className="font-mono-tech text-[10px] text-slate-500 tracking-widest mt-2 uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono-tech text-[10px] text-slate-600 tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
