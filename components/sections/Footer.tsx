'use client';
import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { KatalistLogo } from './Navbar';

const socialIcons = [
  {
    label: 'GitHub',
    href: 'https://github.com/emincanaktepe02-byte/Katalist',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-slate-400" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-slate-400" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-slate-400" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const WHATSAPP_URL =
  'https://wa.me/905348852248?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.';

const footerLinks = [
  {
    title: 'Sayfalar',
    links: [
      { label: 'Hakkımızda', href: '#about' },
      { label: 'Hizmetler', href: '#services' },
      { label: 'Projeler', href: '#projects' },
      { label: 'Yorumlar', href: '#reviews' },
      { label: 'İletişim', href: '#contact' },
    ],
  },
  {
    title: 'Hizmetler',
    links: [
      { label: 'Web Geliştirme', href: '#services' },
      { label: 'UI/UX Tasarım', href: '#services' },
      { label: 'Otomasyon & AI', href: '#services' },
      { label: 'Mobil Uyumlu', href: '#services' },
      { label: 'Backend & API', href: '#services' },
    ],
  },
  {
    title: 'İletişim',
    links: [
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
      { label: '0534 885 22 48', href: 'tel:+905348852248' },
      { label: 'info@katalist.com.tr', href: 'mailto:info@katalist.com.tr' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Band */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              Projenizi başlatalım
            </h3>
            <p className="text-slate-400 text-sm max-w-md">
              Ücretsiz keşif görüşmesi için bize ulaşın.
              24 saat içinde teklifinizi hazırlıyoruz.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-indigo-900/40"
          >
            <MessageCircle className="w-4 h-4" />
            Fiyat Teklifi Al
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <KatalistLogo dark />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Yazılım mühendisi ekibimizle kurumsal dijital çözümler sunuyoruz.
              Otomasyon, tasarım ve satış sonrası destek.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono-tech text-[11px] tracking-[0.2em] text-slate-500 uppercase mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Katalist. Tüm hakları saklıdır.
          </p>
          <p className="font-mono-tech text-[10px] text-slate-600 tracking-widest">
            // BUILT WITH NEXT.JS + TAILWIND
          </p>
        </div>
      </div>
    </footer>
  );
}
