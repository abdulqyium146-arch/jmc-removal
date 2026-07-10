import type { NextConfig } from "next";

const SITE_URL = "https://jmcremovals.co.uk";

const nextConfig: NextConfig = {
  // ─── Performance ───────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // ─── Images ────────────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // ─── Experimental ──────────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // ─── Redirects (www → non-www canonical) ───────────────────────────────────
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.jmcremovals.co.uk" }],
      destination: `${SITE_URL}/:path*`,
      permanent: true,
    },
  ],

  // ─── Security & SEO Headers ────────────────────────────────────────────────
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Security
        { key: "X-Frame-Options",           value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options",    value: "nosniff" },
        { key: "X-DNS-Prefetch-Control",    value: "on" },
        { key: "X-XSS-Protection",          value: "0" },
        { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: https: blob:",
            "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
            "frame-src 'self' https://www.google.com https://maps.google.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "upgrade-insecure-requests",
          ].join("; "),
        },
        // Crawlability
        { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      ],
    },
    // Static asset long-term caching
    {
      source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff|woff2|ttf|eot)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // HTML pages — short cache so updates propagate fast
    {
      source: "/((?!_next/static|_next/image|favicon).*)",
      headers: [
        { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        { key: "Vary", value: "Accept-Encoding" },
      ],
    },
    // Sitemap & robots — moderate cache
    {
      source: "/(sitemap.xml|robots.txt)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
      ],
    },
  ],
};

export default nextConfig;
