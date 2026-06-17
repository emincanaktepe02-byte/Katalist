'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Ahmet Yılmaz', role: 'Oto Galeri Sahibi', rating: 5, text: 'Harika bir ekip! Web sitemiz sayesinde müşteri trafiğimiz %60 arttı. Tasarım ve teknik destek mükemmeldi.', avatar: 'AY', time: '2 hafta önce' },
  { name: 'Zeynep Kaya', role: 'Güzellik Salonu', rating: 5, text: 'Randevu sistemimiz artık çok daha profesyonel. Müşterilerim online randevu alabildiği için işlerimiz kolaylaştı.', avatar: 'ZK', time: '1 ay önce' },
  { name: 'Mehmet Demir', role: 'Gayrimenkul Danışmanı', rating: 5, text: 'Portföy sitemiz tam istediğimiz gibi oldu. Hızlı teslimat, kaliteli iş. Kesinlikle tavsiye ederim.', avatar: 'MD', time: '3 hafta önce' },
  { name: 'Fatma Arslan', role: 'Restoran İşletmecisi', rating: 4, text: 'Menümüz ve sipariş sistemimiz dijitalleşti. Hem güzel hem kullanışlı. Satış sonrası destek çok iyi.', avatar: 'FA', time: '2 ay önce' },
  { name: 'Emre Şahin', role: 'Diş Kliniği', rating: 5, text: 'Klinik web sitemiz çok profesyonel görünüyor. Randevu sistemi hastalarımızın çok işine yarıyor.', avatar: 'EŞ', time: '1 ay önce' },
  { name: 'Selin Öztürk', role: 'Kuyumcu', rating: 5, text: 'Lüks ürünlerimize yakışan bir web sitesi. Ürün görselleri ve tasarım mükemmel. Çok memnunuz.', avatar: 'SÖ', time: '3 hafta önce' },
  { name: 'Burak Çelik', role: 'Mimarlık Firması', rating: 5, text: 'Projelerimizi sergileyen şık bir platform. 3D görsel entegrasyonu tam istediğimiz gibiydi.', avatar: 'BÇ', time: '5 hafta önce' },
  { name: 'Ayşe Koç', role: 'Kuaför Salonu', rating: 4, text: 'Güzel tasarım, hızlı çalışıyor. Müşterilerim online randevu almaktan çok memnun. Teşekkürler!', avatar: 'AK', time: '6 hafta önce' },
];

const TOTAL = 68;
const AVG = 4.6;

const avatarColors = [
  'bg-indigo-100 text-indigo-700',
  'bg-rose-100 text-rose-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-sky-100 text-sky-700',
  'bg-purple-100 text-purple-700',
  'bg-orange-100 text-orange-700',
  'bg-teal-100 text-teal-700',
];

function Stars({ n, size = 'sm' }: { n: number; size?: 'sm' | 'lg' }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${size === 'lg' ? 'w-6 h-6' : 'w-3.5 h-3.5'} ${
            s <= n ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="relative py-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-tech text-xs tracking-[0.25em] text-indigo-600 uppercase mb-3">
            // Müşteri Yorumları
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Müşterilerimiz <span className="text-indigo-600">ne diyor?</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-5 rounded-2xl border border-amber-100 bg-amber-50">
            <div className="text-center">
              <div className="font-orbitron text-5xl font-black text-amber-500">{AVG}</div>
              <div className="text-slate-500 text-sm mt-1">/ 5.0</div>
            </div>
            <div className="h-12 w-px bg-amber-200 hidden sm:block" />
            <div className="text-left">
              <Stars n={5} size="lg" />
              <div className="text-slate-700 font-semibold mt-2">
                <span className="text-amber-500">{TOTAL}</span> müşteri değerlendirmesi
              </div>
              <div className="font-mono-tech text-xs text-slate-400 mt-0.5">%98 müşteri tavsiye eder</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling cards */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 w-max px-4"
          animate={paused ? {} : { x: ['0%', '-50%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 p-6 rounded-2xl bg-white border border-slate-100 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-slate-100 mb-3" />
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${avatarColors[i % avatarColors.length]}`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{r.name}</div>
                  <div className="text-slate-400 text-xs">{r.role}</div>
                </div>
              </div>
              <Stars n={r.rating} />
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">{r.text}</p>
              <div className="text-slate-300 text-xs mt-3">{r.time}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Breakdown */}
      <div className="relative z-10 max-w-md mx-auto px-6 mt-14">
        <p className="font-mono-tech text-xs text-slate-400 text-center tracking-widest mb-5">
          // Puan Dağılımı
        </p>
        {[
          { stars: 5, count: 48, pct: 71 },
          { stars: 4, count: 14, pct: 21 },
          { stars: 3, count: 4, pct: 6 },
          { stars: 2, count: 1, pct: 1 },
          { stars: 1, count: 1, pct: 1 },
        ].map(({ stars, count, pct }) => (
          <div key={stars} className="flex items-center gap-3 mb-2">
            <span className="text-xs text-slate-500 w-3">{stars}</span>
            <Star className="w-3 h-3 text-amber-400 fill-amber-400 flex-shrink-0" />
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
              />
            </div>
            <span className="text-xs text-slate-400 w-5 text-right">{count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
