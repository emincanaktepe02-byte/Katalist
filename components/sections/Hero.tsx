'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Code2, Cpu } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    const colors = ['#00d4ff', '#7c3aed', '#00ff88'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-bg" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,212,255,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(124,58,237,0.08)_0%,transparent_70%)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-[#020408] to-transparent" />

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-cyan-500/5 animate-spin-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/5" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-cyan-500/3" style={{ animation: 'spin-slow 30s linear infinite' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-mono-tech text-xs tracking-widest mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-cyan" />
          YAPAY ZEKA DESTEKLİ DİJİTAL ÇÖZÜMLER
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-cyan" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6"
        >
          <span className="text-white">DİJİTAL</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-glow">
            GELECEĞİ
          </span>
          <br />
          <span className="text-white">İNŞA EDİYORUZ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-rajdhani text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Yazılım mühendisi ekibimizle kurumsal dijital çözümler, otomasyon ve modern web tasarımı —
          <span className="text-cyan-400"> projeniz tamamlanana kadar yanınızdayız.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: '10+', label: 'Tamamlanan Proje' },
            { value: '4.6★', label: 'Müşteri Memnuniyeti' },
            { value: '7/24', label: 'Teknik Destek' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-black text-cyan-400">{stat.value}</div>
              <div className="font-rajdhani text-xs text-slate-500 tracking-widest mt-1 uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono-tech text-xs text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
