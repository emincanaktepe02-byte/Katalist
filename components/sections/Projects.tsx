'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Kumman Gevrek',
    category: 'Gıda & Restoran',
    description: 'Türk gıda markası için modern ve iştah açıcı e-ticaret web sitesi. Ürün kataloğu, sipariş sistemi ve kurumsal kimlik tasarımı.',
    url: 'https://kumman-gevrek.vercel.app/',
    tags: ['E-Ticaret', 'Next.js', 'UI/UX'],
    accent: 'cyan',
    preview: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop',
  },
  {
    title: 'Bilge Beauty',
    category: 'Güzellik & Estetik',
    description: 'Güzellik salonu için rezervasyon sistemi, hizmet tanıtımı ve lokasyon bilgileri içeren kurumsal web sitesi.',
    url: 'https://bilgebeuty.vercel.app/#location',
    tags: ['Kurumsal', 'Rezervasyon', 'Lokasyon'],
    accent: 'purple',
    preview: 'https://images.unsplash.com/photo-1560066984-138daaa7cad8?w=800&auto=format&fit=crop',
  },
  {
    title: 'Atlantik Gayrimenkul',
    category: 'Gayrimenkul',
    description: 'Emlak firması için portföy yönetimi, ilan sistemi ve kurumsal kimlik içeren profesyonel gayrimenkul sitesi.',
    url: 'https://atlantik-gayrimenkul.vercel.app/',
    tags: ['Gayrimenkul', 'Portföy', 'CRM'],
    accent: 'green',
    preview: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
  },
  {
    title: 'Berber Vagos',
    category: 'Berber & Kuaför',
    description: 'Erkek kuaförü için online randevu sistemi, fiyat listesi ve galeri içeren modern ve çarpıcı web sitesi.',
    url: 'https://berbervagos.com/',
    tags: ['Randevu Sistemi', 'Galeri', 'Mobil'],
    accent: 'cyan',
    preview: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop',
  },
  {
    title: 'NZ Poliklinik',
    category: 'Sağlık & Klinik',
    description: 'Özel sağlık kliniği için randevu sistemi, doktor profilleri ve hizmet bilgileri içeren sağlık portalı.',
    url: 'https://nzpoliklinik.com.tr/',
    tags: ['Sağlık', 'Randevu', 'Doktor Profili'],
    accent: 'purple',
    preview: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
  },
  {
    title: 'Yılmaz Otomotiv',
    category: 'Otomotiv',
    description: 'Araç galerisi için stok yönetimi, araç filtreleme sistemi ve kurumsal tanıtım içeren kapsamlı otomotiv sitesi.',
    url: 'https://www.yilmazotomotiv.com/',
    tags: ['Araç Galerisi', 'Stok Yönetimi', 'Filtre'],
    accent: 'green',
    preview: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop',
  },
  {
    title: 'Enn Motors',
    category: 'Otomotiv',
    description: 'Modern araç galerisi ve showroom için dijital vitrin, servis hizmetleri ve müşteri yönetim sistemi.',
    url: 'https://ennmotors.com/',
    tags: ['Showroom', 'Servis', 'CRM'],
    accent: 'cyan',
    preview: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
  },
  {
    title: 'İzmir Dental Klinik',
    category: 'Diş Kliniği',
    description: 'Diş kliniği için online randevu, tedavi bilgileri, doktor kadrosu ve hasta portali içeren kapsamlı sağlık sitesi.',
    url: 'https://izmirdentalklinik.com/',
    tags: ['Diş Kliniği', 'Randevu', 'Tedavi'],
    accent: 'purple',
    preview: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop',
  },
  {
    title: 'Artera Mimarlık',
    category: 'Mimarlık & Tasarım',
    description: 'Mimarlık firması için proje portföyü, 3D görseller ve kurumsal kimlik içeren etkileyici mimarlık sitesi.',
    url: 'https://arteramimarlik.com/',
    tags: ['Mimarlık', 'Portföy', '3D Görsel'],
    accent: 'green',
    preview: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop',
  },
  {
    title: 'Safir Kuyumculuk',
    category: 'Kuyumculuk & Mücevher',
    description: 'Kuyumcu firması için lüks ürün kataloğu, koleksiyon tanıtımı ve kurumsal kimlik içeren premium web sitesi.',
    url: 'https://www.safirkuyumculuk.com.tr/',
    tags: ['Lüks Marka', 'Katalog', 'Premium'],
    accent: 'cyan',
    preview: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop',
  },
];

const accentMap = {
  cyan: { border: 'border-cyan-500/30', tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', btn: 'text-cyan-400 hover:text-cyan-300 border-cyan-500/30 hover:border-cyan-400', dot: 'bg-cyan-400', glow: 'group-hover:shadow-cyan-500/20' },
  purple: { border: 'border-purple-500/30', tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20', btn: 'text-purple-400 hover:text-purple-300 border-purple-500/30 hover:border-purple-400', dot: 'bg-purple-400', glow: 'group-hover:shadow-purple-500/20' },
  green: { border: 'border-emerald-500/30', tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', btn: 'text-emerald-400 hover:text-emerald-300 border-emerald-500/30 hover:border-emerald-400', dot: 'bg-emerald-400', glow: 'group-hover:shadow-emerald-500/20' },
};

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono-tech text-xs text-green-400 tracking-[0.3em] uppercase block mb-4">
            // PROJELERİMİZ
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
            TAMAMLANAN{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              ÇALIŞMALAR
            </span>
          </h2>
          <p className="font-rajdhani text-slate-400 text-xl max-w-2xl mx-auto">
            Farklı sektörlerden müşterilerimiz için hayata geçirdiğimiz dijital projeler.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = accentMap[project.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`group relative rounded-2xl overflow-hidden bg-slate-900/60 border ${colors.border} hover:shadow-xl ${colors.glow} transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Preview image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  {/* Live badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
                    <span className="font-mono-tech text-[10px] text-white/70">CANLI</span>
                  </div>
                  {/* Category */}
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono-tech border ${colors.tag}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-orbitron text-base font-bold text-white mb-2">{project.title}</h3>
                  <p className="font-rajdhani text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-mono-tech border ${colors.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-orbitron tracking-wider border-b pb-0.5 transition-all duration-300 ${colors.btn}`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    SİTEYİ ZİYARET ET
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-mono-tech text-slate-600 text-xs tracking-widest">
            // 10 PROJE · FARKLI SEKTÖRLER · GERÇEK SONUÇLAR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
