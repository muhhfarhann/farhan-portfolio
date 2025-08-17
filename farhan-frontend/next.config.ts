// next.config.ts
import type { NextConfig } from 'next';

/** Build CSP berbeda untuk dev vs prod */
const buildCSP = (isDev: boolean) =>
  [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    // tambahkan domain CDN font bila dipakai (mis. fonts.gstatic.com)
    "font-src 'self' https: data:",
    // tambahkan domain gambar eksternal bila ada
    "img-src 'self' data: blob: https:",
    // 'unsafe-eval' biasanya hanya diperlukan saat development
    `script-src 'self' ${isDev ? "'unsafe-eval'" : ''} 'unsafe-inline'`,
    "style-src 'self' 'unsafe-inline'",
    // tambahkan domain API/analitik bila ada (mis. https://api.example.com, https://*.vercel-insights.com)
    "connect-src 'self' https:",
    // cegah clickjacking
    "frame-ancestors 'none'",
  ]
    .filter(Boolean)
    .join('; ');

const securityHeaders = (isDev: boolean) => [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  { key: 'Content-Security-Policy', value: buildCSP(isDev) },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,

  /** Atur header keamanan untuk semua route */
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    return [
      {
        source: '/(.*)',
        headers: securityHeaders(isDev),
      },
    ];
  },

  /** Konfig gambar eksternal (kalau nanti butuh) */
  images: {
    // Isi jika pakai gambar dari domain luar:
    // remotePatterns: [
    //   { protocol: "https", hostname: "images.unsplash.com" },
    //   { protocol: "https", hostname: "avatars.githubusercontent.com" },
    // ],
  },
};

export default nextConfig;
