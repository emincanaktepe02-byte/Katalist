'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Zap, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+90 534 885 22 48',
    href: WHATSAPP_URL,
    color: 'green',
    desc: 'Hızlı yanıt garantisi',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '0534 885 22 48',
    href: 'tel:+905348852248',
    color: 'cyan',
    desc: 'Mesai saatleri içinde',
  },
  {
    icon: Mail,
    label: 'E-Posta',
    value: 'info@katalist.com.tr',
    href: 'mailto:info@katalist.com.tr',
    color: 'purple',
    desc: '24 saat içinde yanıt',
  },
];

const benefits = [
  'Ücretsiz keşif görüşmesi',
  '24 saat içinde teklife dönüş',
  'Proje süreci şeffaf iletişim',
  'Satış sonrası teknik destek',
  'Revizyon hakkı dahil',
  'NDA & Gizlilik garantisi',
];

const colorMap = {
  green: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30 hover:border-emerald-400' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30 hover:border-cyan-400' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30 hover:border-purple-400' },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono-tech text-xs text-cyan-400 tracking-[0.3em] uppercase block mb-4">
            // İLETİŞİM
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
            BİRLİKTE{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ÇALIŞALIM
            </span>
          </h2>
          <p className="font-rajdhani text-slate-400 text-xl max-w-2xl mx-auto">
            Projenizi hayata geçirmek için ilk adımı atın. Ücretsiz keşif görüşmesi için bize ulaşın.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA + Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main WhatsApp CTA */}
            <div className="relative p-8 rounded-2xl gradient-border mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-orbitron text-sm font-bold text-white">WhatsApp ile İletişim</div>
                    <div className="font-mono-tech text-xs text-slate-500">En hızlı yanıt kanalı</div>
                  </div>
                </div>
                <p className="font-rajdhani text-slate-400 text-base mb-6 leading-relaxed">
                  Projeniz hakkında konuşmak için bizi WhatsApp&apos;tan arayın. Mesajınıza en kısa sürede dönüş yapıyoruz.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-black font-orbitron font-bold text-sm tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-green-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP İLE YAZ
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-2 mt-4 justify-center">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="font-mono-tech text-xs text-slate-500">Ortalama yanıt süresi: &lt; 2 saat</span>
                </div>
              </div>
            </div>

            {/* Contact channels */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const colors = colorMap[info.color as keyof typeof colorMap];
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border ${colors.border} transition-all duration-300 hover:-translate-y-0.5 group`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <div>
                      <div className="font-mono-tech text-xs text-slate-500">{info.label}</div>
                      <div className="font-orbitron text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{info.value}</div>
                      <div className="font-rajdhani text-xs text-slate-500">{info.desc}</div>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${colors.icon} ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Benefits + Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Benefits */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-cyan-500/20 mb-8">
              <div className="font-mono-tech text-xs text-cyan-400 tracking-widest mb-6">// NEDEN KATALIST?</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="font-rajdhani text-slate-300 text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-purple-500/20">
              <div className="font-mono-tech text-xs text-purple-400 tracking-widest mb-6">// SÜRECİMİZ</div>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Keşif Görüşmesi', desc: 'Projenizi dinliyor, ihtiyaçlarınızı anlıyoruz.' },
                  { step: '02', title: 'Teklif & Planlama', desc: '24 saat içinde detaylı teklif ve proje planı sunuyoruz.' },
                  { step: '03', title: 'Geliştirme', desc: 'Şeffaf iletişimle projenizi hayata geçiriyoruz.' },
                  { step: '04', title: 'Teslim & Destek', desc: 'Siteyi yayınlıyor, satış sonrası destek sağlıyoruz.' },
                ].map((step, index) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-orbitron text-xs font-black text-purple-400">{step.step}</span>
                    </div>
                    <div>
                      <div className="font-orbitron text-sm font-bold text-white mb-1">{step.title}</div>
                      <div className="font-rajdhani text-slate-400 text-sm">{step.desc}</div>
                    </div>
                    {index < 3 && (
                      <div className="absolute left-[62px] mt-10 w-px h-6 bg-purple-500/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
