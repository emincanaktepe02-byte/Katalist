'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Wrench, Users, TrendingUp, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Cpu,
    title: 'Yazılım Mühendisliği',
    description:
      'Deneyimli yazılım mühendisi ekibimizle kurumsal düzeyde dijital çözümler üretiyoruz. Her proje, teknik mükemmellik standartlarımızla hayata geçirilir.',
    color: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'Otomasyon & Dizayn',
    description:
      'Talepleriniz doğrultusunda iş süreçlerinizi otomasyona taşıyor, markanıza özgü modern ve etkileyici tasarımlar oluşturuyoruz.',
    color: 'purple',
  },
  {
    icon: HeartHandshake,
    title: 'Satış Sonrası Destek',
    description:
      'Müşteri memnuniyeti bizim önceliğimiz. Proje tesliminin ardından teknik destek ve bakım hizmetlerimizle her zaman yanınızdayız.',
    color: 'green',
  },
  {
    icon: Shield,
    title: 'Güvenlik & Güvenilirlik',
    description:
      'Projelerinizde en güncel güvenlik standartlarını uyguluyoruz. Verileriniz ve sistemleriniz her zaman korumalıdır.',
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Uzman Ekip',
    description:
      'Frontend, backend, UI/UX ve DevOps alanlarında uzmanlaşmış çok disiplinli bir ekip olarak çalışıyoruz.',
    color: 'purple',
  },
  {
    icon: Wrench,
    title: 'Özel Geliştirme',
    description:
      'Her işletmenin ihtiyaçları farklıdır. Size özel çözümler geliştiriyor, standart kalıpların dışına çıkıyoruz.',
    color: 'green',
  },
];

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    glow: 'hover:shadow-cyan-500/10',
    badge: 'bg-cyan-500/10 text-cyan-400',
  },
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
    glow: 'hover:shadow-purple-500/10',
    badge: 'bg-purple-500/10 text-purple-400',
  },
  green: {
    icon: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    glow: 'hover:shadow-emerald-500/10',
    badge: 'bg-emerald-500/10 text-emerald-400',
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono-tech text-xs text-cyan-400 tracking-[0.3em] uppercase block mb-4">
            // HAKKIMIZDA
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
            DİJİTAL DÖNÜŞÜMÜN{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ÖNCÜLÜYÜZ
            </span>
          </h2>
          <p className="font-rajdhani text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Katalist olarak yazılım mühendisi ekibimizle kurumsal dijital destek veriyoruz. Talep doğrultusunda
            otomasyon ve tasarım çözümleri sunuyor, müşteri memnuniyetini merkeze alarak satış sonrası
            destek sağlıyoruz.
          </p>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-20 p-8 md:p-12 rounded-2xl gradient-border overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-mono-tech text-xs text-cyan-400 tracking-widest mb-4">// MİSYONUMUZ</div>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Teknoloji ile İşinizi{' '}
                <span className="text-cyan-400">Güçlendiriyoruz</span>
              </h3>
              <p className="font-rajdhani text-slate-400 text-lg leading-relaxed">
                Modern teknolojiler ve yapay zeka destekli araçlarla, işletmenizin dijital varlığını
                güçlendiriyoruz. Her proje, müşterimizin başarısına adanmış bir mühendislik çalışmasıdır.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Proje Teslim Süresi', value: '< 4 Hafta', sub: 'ortalama' },
                { label: 'Müşteri Memnuniyeti', value: '%98', sub: 'yeniden tercih' },
                { label: 'Aktif Proje', value: '10+', sub: 'tamamlandı' },
                { label: 'Destek Yanıt', value: '< 2 Saat', sub: '7/24 hizmet' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/10 text-center"
                >
                  <div className="font-orbitron text-xl font-black text-cyan-400">{item.value}</div>
                  <div className="font-rajdhani text-xs text-slate-500 mt-1">{item.label}</div>
                  <div className="font-mono-tech text-[10px] text-slate-600 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const colors = colorMap[value.color as keyof typeof colorMap];
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-xl ${colors.glow} transition-all duration-500 hover:-translate-y-1`}
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.badge} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className="font-orbitron text-base font-bold text-white mb-3">{value.title}</h3>
                <p className="font-rajdhani text-slate-400 text-base leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
