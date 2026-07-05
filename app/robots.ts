import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow all ────────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/cdn-cgi/",
          "/*.json$",
          "/search",
        ],
      },

      // ── Google: full access ───────────────────────────────────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/og-image.jpg", "/android-chrome-512x512.png"],
      },

      // ── Bing ─────────────────────────────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 2,
      },

      // ── AI / Answer Engine crawlers ───────────────────────────────────────
      // Allow AI crawlers so the business appears in AI search results
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "ChatGPT-User",    allow: "/" },
      { userAgent: "Claude-Web",      allow: "/" },
      { userAgent: "ClaudeBot",       allow: "/" },
      { userAgent: "PerplexityBot",   allow: "/" },
      { userAgent: "YouBot",          allow: "/" },
      { userAgent: "OmigiliBot",      allow: "/" },
      { userAgent: "Applebot",        allow: "/" },
      { userAgent: "DuckDuckBot",     allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot",      allow: "/" },
      { userAgent: "LinkedInBot",     allow: "/" },
      { userAgent: "WhatsApp",        allow: "/" },

      // ── Block bad bots ────────────────────────────────────────────────────
      { userAgent: "AhrefsBot",    disallow: "/" },
      { userAgent: "SemrushBot",   disallow: "/" },
      { userAgent: "MJ12bot",      disallow: "/" },
      { userAgent: "DotBot",       disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
