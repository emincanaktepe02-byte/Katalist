'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Palette, Database, BarChart3, ArrowRight, Zap } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

const services = [
  {
    icon: Globe,
    title: 'Web Geliştirme',
    description: 'Next.js, React ve modern teknolojilerle hızlı, SEO uyumlu, ölçeklenebilir web siteleri ve uygulamalar.',
    features: ['Next.js / React', 'SEO Optimizasyon', 'Performans Odaklı'],
    color: 'cyan',
  },
  {
    icon: Palette,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı, modern ve özgün arayüz tasarımları. Markanızı dijitalde en iyi şekilde yansıtıyoruz.',
    features: ['Figma Tasarım', 'Prototipleme', 'Marka Kimliği'],
    color: 'purple',
  },
  {
    icon: Bot,
    title: 'Otomasyon & AI',
    description: 'İş süreçlerinizi yapay zeka ve otomasyon araçlarıyla optimize ederek verimliliğinizi artırıyoruz.',
    features: ['AI Entegrasyonu', 'Süreç Otomasyonu', 'Chatbot Geliştirme'],
    color: 'green',
  },
  {
    icon: Smartphone,
    title: 'Mobil Uyumlu Tasarım',
    description: 'Her cihazda mükemmel görünen, responsive tasarımlarla mobil kullanıcı deneyimini en üst seviyeye taşıyoruz.',
    features: ['Responsive Design', 'PWA Desteği', 'Cross-Platform'],
    color: 'cyan',
  },
  {
    icon: Database,
    title: 'Backend & API',
    description: 'Güvenli, hızlı ve ölçeklenebilir backend sistemleri ve RESTful API entegrasyonları geliştiriyoruz.',
    features: ['REST & GraphQL', 'Veritabanı Yönetimi', 'Güvenlik'],
    color: 'purple',
  },
  {
    icon: BarChart3,
    title: 'Dijital Kurumsal Destek',
    description: 'İşletmenizin tüm dijital süreçlerini yönetiyor, büyümenize katkı sağlayacak stratejik çözümler sunuyoruz.',
    features: ['Analitik & Raporlama', 'SEO Stratejisi', 'Teknik Destek'],
    color: 'green',
  },
];

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    glow: 'hover:shadow-cyan-500/10',
    badge: 'bg-cyan-500/10 text-cyan-400',
    feature: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    line: 'from-cyan-500',
  },
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    glow: 'hover:shadow-purple-500/10',
    badge: 'bg-purple-500/10 text-purple-400',
    feature: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    line: 'from-purple-500',
  },
  green: {
    icon: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    glow: 'hover:shadow-emerald-500/10',
    badge: 'bg-emerald-500/10 text-emerald-400',
    feature: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    line: 'from-emerald-500',
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono-tech text-xs text-purple-400 tracking-[0.3em] uppercase block mb-4">
            // HİZMETLERİMİZ
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
            NELER{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              YAPIYORUZ
            </span>
            ?
          </h2>
          <p className="font-jakarta text-slate-400 text-xl max-w-2xl mx-auto">
            Dijital dönüşümünüzün her aşamasında yanınızdayız. Tasarımdan geliştirmeye, otomasyondan desteğe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-7 rounded-2xl bg-slate-900/60 border ${colors.border} hover:shadow-xl ${colors.glow} transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Gradient line top */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`inline-flex p-3 rounded-xl ${colors.badge} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>

                <h3 className="font-orbitron text-base font-bold text-white mb-3">{service.title}</h3>
                <p className="font-jakarta text-slate-400 text-base leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-mono-tech border ${colors.feature}`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-8 md:p-12 rounded-2xl gradient-border text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          <div className="relative z-10">
            <div className="font-mono-tech text-xs text-cyan-400 tracking-widest mb-4">// BAŞLAMAYA HAZIR MISINIZ?</div>
            <h3 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-4">
              Projenizi <span className="text-cyan-400">Hayata Geçirelim</span>
            </h3>
            <p className="font-jakarta text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Ücretsiz keşif görüşmesi için WhatsApp üzerinden iletişime geçin. 24 saat içinde dönüş garantisi.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-orbitron font-bold text-sm tracking-widest transition-all duration-300 hover:scale-105 glow-cyan shadow-xl shadow-cyan-500/30"
            >
              <Zap className="w-4 h-4" />
              ÜCRETSİZ GÖRÜŞME PLANLA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
