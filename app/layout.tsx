import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalist | Dijital Web Geliştirme Ajansı",
  description:
    "Yazılım mühendisi ekibimizle kurumsal dijital çözümler, web geliştirme, otomasyon ve tasarım hizmetleri. Müşteri memnuniyeti odaklı satış sonrası destek.",
  keywords: [
    "web geliştirme",
    "dijital ajans",
    "yazılım mühendisi",
    "kurumsal web sitesi",
    "otomasyon",
    "ui ux tasarım",
    "next.js",
    "react",
    "katalist",
  ],
  openGraph: {
    title: "Katalist | Dijital Web Geliştirme Ajansı",
    description: "Yazılım mühendisi ekibimizle kurumsal dijital çözümler üretiyoruz.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-[#020408]">{children}</body>
    </html>
  );
}
