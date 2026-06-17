'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Oto Galeri Sahibi',
    rating: 5,
    text: 'Harika bir ekip! Web sitemiz sayesinde müşteri trafiğimiz %60 arttı. Tasarım ve teknik destek mükemmeldi.',
    avatar: 'AY',
    color: 'cyan',
    time: '2 hafta önce',
  },
  {
    name: 'Zeynep Kaya',
    role: 'Güzellik Salonu',
    rating: 5,
    text: 'Randevu sistemimiz artık çok daha profesyonel. Müşterilerim online randevu alabildiği için işlerimiz kolaylaştı.',
    avatar: 'ZK',
    color: 'purple',
    time: '1 ay önce',
  },
  {
    name: 'Mehmet Demir',
    role: 'Gayrimenkul Danışmanı',
    rating: 5,
    text: 'Portföy sitemiz tam istediğimiz gibi oldu. Hızlı teslimat, kaliteli iş. Kesinlikle tavsiye ederim.',
    avatar: 'MD',
    color: 'green',
    time: '3 hafta önce',
  },
  {
    name: 'Fatma Arslan',
    role: 'Restoran İşletmecisi',
    rating: 4,
    text: 'Menümüz ve sipariş sistemimiz dijitalleşti. Hem güzel hem kullanışlı. Satış sonrası destek çok iyi.',
    avatar: 'FA',
    color: 'cyan',
    time: '2 ay önce',
  },
  {
    name: 'Emre Şahin',
    role: 'Diş Kliniği',
    rating: 5,
    text: 'Klinik web sitemiz çok profesyonel görünüyor. Randevu sistemi hastalarımızın çok işine yarıyor.',
    avatar: 'EŞ',
    color: 'purple',
    time: '1 ay önce',
  },
  {
    name: 'Selin Öztürk',
    role: 'Kuyumcu',
    rating: 5,
    text: 'Lüks ürünlerimize yakışan bir web sitesi. Ürün görselleri ve tasarım mükemmel. Çok memnunuz.',
    avatar: 'SÖ',
    color: 'green',
    time: '3 hafta önce',
  },
  {
    name: 'Burak Çelik',
    role: 'Mimarlık Firması',
    rating: 5,
    text: 'Projelerimizi sergileyen şık bir platform. 3D görsel entegrasyonu tam istediğimiz gibiydi.',
    avatar: 'BÇ',
    color: 'cyan',
    time: '5 hafta önce',
  },
  {
    name: 'Ayşe Koç',
    role: 'Kuaför Salonu',
    rating: 4,
    text: 'Güzel tasarım, hızlı çalışıyor. Müşterilerim online randevu almaktan çok memnun. Teşekkürler!',
    avatar: 'AK',
    color: 'purple',
    time: '6 hafta önce',
  },
];

const colorMap = {
  cyan: { card: 'border-cyan-500/20 hover:border-cyan-500/40', avatar: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30', quote: 'text-cyan-500/20' },
  purple: { card: 'border-purple-500/20 hover:border-purple-500/40', avatar: 'bg-purple-500/20 text-purple-400 border border-purple-500/30', quote: 'text-purple-500/20' },
  green: { card: 'border-emerald-500/20 hover:border-emerald-500/40', avatar: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30', quote: 'text-emerald-500/20' },
};

const TOTAL_REVIEWS = 68;
const AVG_RATING = 4.6;

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const cls = size === 'lg' ? 'w-6 h-6' : 'w-3.5 h-3.5';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${cls} ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-700 fill-slate-700'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono-tech text-xs text-yellow-400 tracking-[0.3em] uppercase block mb-4">
            // MÜŞTERİ YORUMLARI
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
            MÜŞTERİLERİMİZ{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              NE DİYOR?
            </span>
          </h2>

          {/* Overall rating */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 mt-4">
            <div className="text-center">
              <div className="font-orbitron text-6xl font-black text-yellow-400">{AVG_RATING}</div>
              <div className="font-rajdhani text-slate-400 text-sm mt-1">/ 5.0</div>
            </div>
            <div className="h-12 w-px bg-yellow-500/20 hidden sm:block" />
            <div className="text-left">
              <StarRating rating={5} size="lg" />
              <div className="font-rajdhani text-slate-300 text-lg mt-2">
                <span className="text-yellow-400 font-bold">{TOTAL_REVIEWS}</span> müşteri değerlendirmesi
              </div>
              <div className="font-mono-tech text-xs text-slate-500 mt-1">%98 müşteri tavsiye eder</div>
            </div>
          </div>
        </motion.div>

        {/* Scrolling reviews */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020408] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020408] to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={trackRef}
            className="flex gap-6"
            animate={isPaused ? {} : { x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {[...reviews, ...reviews].map((review, index) => {
              const colors = colorMap[review.color as keyof typeof colorMap];
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 p-6 rounded-2xl bg-slate-900/80 border ${colors.card} transition-all duration-300 relative overflow-hidden`}
                >
                  <Quote className={`absolute top-4 right-4 w-10 h-10 ${colors.quote}`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-orbitron text-sm font-bold ${colors.avatar}`}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-orbitron text-sm text-white">{review.name}</div>
                      <div className="font-rajdhani text-xs text-slate-500">{review.role}</div>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="font-rajdhani text-slate-300 text-sm mt-3 leading-relaxed">{review.text}</p>
                  <div className="font-mono-tech text-xs text-slate-600 mt-3">{review.time}</div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Rating breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="font-mono-tech text-xs text-slate-500 text-center tracking-widest mb-6">// PUAN DAĞILIMI</div>
          {[
            { stars: 5, count: 48, pct: 71 },
            { stars: 4, count: 14, pct: 21 },
            { stars: 3, count: 4, pct: 6 },
            { stars: 2, count: 1, pct: 1 },
            { stars: 1, count: 1, pct: 1 },
          ].map(({ stars, count, pct }) => (
            <div key={stars} className="flex items-center gap-3 mb-2">
              <div className="font-mono-tech text-xs text-slate-400 w-4">{stars}</div>
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                />
              </div>
              <div className="font-mono-tech text-xs text-slate-500 w-6 text-right">{count}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
