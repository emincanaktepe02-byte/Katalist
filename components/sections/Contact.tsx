'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

const contactChannels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+90 534 885 22 48',
    href: WHATSAPP_URL,
    desc: 'En hızlı yanıt kanalı',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    hover: 'hover:border-emerald-300',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '0534 885 22 48',
    href: 'tel:+905348852248',
    desc: 'Mesai saatleri içinde',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    hover: 'hover:border-indigo-300',
  },
  {
    icon: Mail,
    label: 'E-Posta',
    value: 'info@katalist.com.tr',
    href: 'mailto:info@katalist.com.tr',
    desc: '24 saat içinde yanıt',
    color: 'text-violet-600 bg-violet-50 border-violet-100',
    hover: 'hover:border-violet-300',
  },
];

const benefits = [
  'Ücretsiz keşif görüşmesi',
  '24 saat içinde teklife dönüş',
  'Şeffaf proje süreci',
  'Satış sonrası teknik destek',
  'Revizyon hakkı dahil',
  'NDA & Gizlilik garantisi',
];

const steps = [
  { n: '01', title: 'Keşif Görüşmesi', desc: 'Projenizi dinliyor, ihtiyaçlarınızı anlıyoruz.' },
  { n: '02', title: 'Teklif & Planlama', desc: '24 saat içinde detaylı teklif ve proje planı.' },
  { n: '03', title: 'Geliştirme', desc: 'Şeffaf iletişimle projenizi hayata geçiriyoruz.' },
  { n: '04', title: 'Teslim & Destek', desc: 'Siteyi yayınlıyor, satış sonrası destek sağlıyoruz.' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

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
            // İletişim
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Birlikte <span className="text-indigo-600">çalışalım</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Projenizi hayata geçirmek için ilk adımı atın.
            Ücretsiz keşif görüşmesi için bize ulaşın.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main CTA */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 card-shadow mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">WhatsApp ile İletişim</div>
                  <div className="text-xs text-slate-400">En hızlı yanıt kanalı</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Projeniz hakkında konuşmak için bizi WhatsApp'tan yazın.
                Mesajınıza en kısa sürede dönüş yapıyoruz.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Yaz
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <Clock className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-xs text-slate-400">Ortalama yanıt: &lt; 2 saat</span>
              </div>
            </div>

            {/* Contact channels */}
            <div className="flex flex-col gap-3">
              {contactChannels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white border ${c.color.split(' ')[2]} ${c.hover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color.split(' ')[1]}`}>
                      <Icon className={`w-5 h-5 ${c.color.split(' ')[0]}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400">{c.label}</div>
                      <div className="font-semibold text-sm text-slate-800 group-hover:text-indigo-600 transition-colors truncate">{c.value}</div>
                      <div className="text-xs text-slate-400">{c.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Benefits */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 card-shadow mb-6">
              <p className="font-mono-tech text-xs text-indigo-600 tracking-widest mb-5">
                // Neden Katalist?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 card-shadow">
              <p className="font-mono-tech text-xs text-violet-600 tracking-widest mb-6">
                // Sürecimiz
              </p>
              <div className="flex flex-col gap-5">
                {steps.map((s, i) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-orbitron text-[11px] font-black text-indigo-600">{s.n}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">{s.title}</div>
                      <div className="text-slate-500 text-sm">{s.desc}</div>
                    </div>
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
