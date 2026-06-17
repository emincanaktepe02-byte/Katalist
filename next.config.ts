import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nzpoliklinik.com.tr' },
      { protocol: 'https', hostname: 'www.yilmazotomotiv.com' },
      { protocol: 'https', hostname: 'ennmotors.com' },
      { protocol: 'https', hostname: 'arteramimarlik.com' },
      { protocol: 'https', hostname: 'atlantik-gayrimenkul.vercel.app' },
      { protocol: 'https', hostname: 't2.gstatic.com' },
      { protocol: 'https', hostname: 'image5.sahibinden.com' },
    ],
  },
};

export default nextConfig;
