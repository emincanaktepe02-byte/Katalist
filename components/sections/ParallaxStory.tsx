'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll';
import {
  ArrowRight, Zap, MessageCircle, Code2, Palette, Bot,
  Smartphone, Database, BarChart3, Shield, Cpu, HeartHandshake,
  TrendingUp, Users, Wrench, CheckCircle,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

/* ───────────────────────── HERO CONTENT ──────────────────────── */
const HeroContent = () => (
  <div id="hero" className="mx-auto max-w-6xl grid grid-cols-1 gap-12 px-6 pb-32 pt-16 md:grid-cols-2 items-center">
    <div>
      <p className="font-mono-tech text-xs tracking-[0.25em] text-indigo-600 uppercase mb-4">
        // Yazılım Mühendisliği Ekibi
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
        Dijital dönüşümünüzde{' '}
        <span className="text-indigo-600">güçlü bir ortak</span>
      </h2>
      <p className="text-slate-500 text-lg leading-relaxed mb-8">
        Talep doğrultusunda otomasyon ve tasarım çözümleri sunuyor; proje tesliminin ardından
        satış sonrası teknik destekle yanınızda olmaya devam ediyoruz.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200"
        >
          <Zap className="w-4 h-4" />
          Fiyat Teklifi Al
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm transition-all duration-200 hover:bg-slate-50"
        >
          <Code2 className="w-4 h-4" />
          Projelerimiz
        </a>
      </div>
    </div>

    {/* Stats grid */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { value: '10+', label: 'Tamamlanan Proje', icon: '🚀', color: 'bg-indigo-50 border-indigo-100' },
        { value: '4.6★', label: 'Müşteri Puanı', icon: '⭐', color: 'bg-amber-50 border-amber-100' },
        { value: '%98', label: 'Memnuniyet Oranı', icon: '💯', color: 'bg-emerald-50 border-emerald-100' },
        { value: '7/24', label: 'Teknik Destek', icon: '🛠', color: 'bg-rose-50 border-rose-100' },
      ].map((s) => (
        <div key={s.label} className={`p-6 rounded-2xl border ${s.color} card-shadow`}>
          <div className="text-2xl mb-2">{s.icon}</div>
          <div className="font-orbitron text-2xl font-black text-slate-900">{s.value}</div>
          <div className="text-sm text-slate-500 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ───────────────────────── ABOUT CONTENT ─────────────────────── */
const aboutValues = [
  { icon: Cpu, title: 'Yazılım Mühendisliği', desc: 'Kurumsal düzeyde dijital çözümler üretiyoruz.', color: 'text-indigo-600 bg-indigo-50' },
  { icon: TrendingUp, title: 'Otomasyon & Dizayn', desc: 'İş süreçlerinizi otomasyona ve modern tasarıma taşıyoruz.', color: 'text-orange-600 bg-orange-50' },
  { icon: HeartHandshake, title: 'Satış Sonrası Destek', desc: 'Proje tesliminin ardından teknik destekle yanınızdayız.', color: 'text-emerald-600 bg-emerald-50' },
  { icon: Shield, title: 'Güvenlik & Güvenilirlik', desc: 'En güncel güvenlik standartlarını uyguluyoruz.', color: 'text-indigo-600 bg-indigo-50' },
  { icon: Users, title: 'Uzman Ekip', desc: 'Çok disiplinli mühendislik ve tasarım ekibi.', color: 'text-orange-600 bg-orange-50' },
  { icon: Wrench, title: 'Özel Geliştirme', desc: 'İşletmenize özel, kalıba sığmayan çözümler.', color: 'text-emerald-600 bg-emerald-50' },
];

const AboutContent = () => (
  <div id="about" className="mx-auto max-w-6xl px-6 pb-32 pt-16">
    <div className="mb-12 max-w-2xl">
      <p className="font-mono-tech text-xs tracking-[0.25em] text-indigo-600 uppercase mb-3">
        // Hakkımızda
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
        Katalist'i farklı kılan <span className="text-indigo-600">değerlerimiz</span>
      </h2>
      <p className="text-slate-500 text-lg leading-relaxed">
        Yazılım mühendisi ekibimizle kurumsal dijital destek veriyoruz. Talep doğrultusunda otomasyon ve
        tasarım çözümleri sunuyor, müşteri memnuniyetini merkeze alarak satış sonrası destek sağlıyoruz.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {aboutValues.map((v, i) => {
        const Icon = v.icon;
        return (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="group p-6 rounded-2xl bg-white border border-slate-100 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`inline-flex p-2.5 rounded-xl ${v.color.split(' ')[1]} mb-4`}>
              <Icon className={`w-5 h-5 ${v.color.split(' ')[0]}`} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
);

/* ───────────────────────── SERVICES CONTENT ──────────────────── */
const services = [
  { icon: Code2, title: 'Web Geliştirme', desc: 'Next.js, React ile hızlı, SEO uyumlu, ölçeklenebilir web siteleri.', tags: ['Next.js', 'React', 'SEO'] },
  { icon: Palette, title: 'UI/UX Tasarım', desc: 'Kullanıcı odaklı, modern ve özgün arayüz tasarımları.', tags: ['Figma', 'Prototip', 'Marka'] },
  { icon: Bot, title: 'Otomasyon & AI', desc: 'Yapay zeka ve otomasyon araçlarıyla iş süreçlerinizi optimize ediyoruz.', tags: ['AI', 'Otomasyon', 'Chatbot'] },
  { icon: Smartphone, title: 'Mobil Uyumlu', desc: 'Her cihazda mükemmel görünen responsive tasarımlar.', tags: ['Responsive', 'PWA', 'Mobile'] },
  { icon: Database, title: 'Backend & API', desc: 'Güvenli, hızlı ve ölçeklenebilir backend sistemleri.', tags: ['REST', 'GraphQL', 'DB'] },
  { icon: BarChart3, title: 'Kurumsal Destek', desc: 'Dijital süreçlerinizi yönetiyor, büyümenize katkı sağlıyoruz.', tags: ['Analitik', 'SEO', 'Destek'] },
];

const ServicesContent = () => (
  <div id="services" className="mx-auto max-w-6xl px-6 pb-32 pt-16">
    <div className="mb-12 text-center">
      <p className="font-mono-tech text-xs tracking-[0.25em] text-indigo-600 uppercase mb-3">
        // Hizmetlerimiz
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
        Sunduğumuz <span className="text-indigo-600">çözümler</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="group p-7 rounded-2xl bg-white border border-slate-100 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex p-2.5 rounded-xl bg-indigo-50 mb-5">
              <Icon className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2.5">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* CTA banner */}
    <div className="relative rounded-3xl bg-slate-900 p-10 md:p-14 overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(79,70,229,0.35),transparent)]" />
      <div className="relative z-10">
        <p className="font-mono-tech text-xs tracking-widest text-indigo-400 uppercase mb-3">// Başlamaya Hazır Mısınız?</p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Projenizi hayata geçirelim
        </h3>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Ücretsiz keşif görüşmesi için WhatsApp üzerinden iletişime geçin.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-indigo-900/40"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp&apos;tan Yaz
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

/* ───────────────────────── MAIN EXPORT ───────────────────────── */
export default function ParallaxStory() {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2560&auto=format&fit=crop"
        subheading="Katalist — Web Geliştirme"
        heading="Dijital Geleceği İnşa Ediyoruz"
      >
        <HeroContent />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2560&auto=format&fit=crop"
        subheading="Hakkımızda"
        heading="Yazılım Mühendisliği"
      >
        <AboutContent />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2560&auto=format&fit=crop"
        subheading="Hizmetlerimiz"
        heading="Neler Yapıyoruz?"
      >
        <ServicesContent />
      </TextParallaxContent>
    </div>
  );
}
