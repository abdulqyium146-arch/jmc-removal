import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import { defaultMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL, BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_ADDRESS, BUSINESS_GEO } from "@/lib/utils";

// ─── Font ─────────────────────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = defaultMetadata;

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)",  color: "#1e3a8a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* ── DNS prefetch & preconnect (render-critical) ── */}
        <link rel="preconnect"    href="https://fonts.googleapis.com" />
        <link rel="preconnect"    href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch"  href="https://www.google-analytics.com" />
        <link rel="dns-prefetch"  href="https://www.googletagmanager.com" />

        {/* ── Canonical is handled by Metadata API alternates ── */}

        {/* ── Geo / location meta (reinforces local SEO entity signals) ── */}
        <meta name="geo.region"       content="GB-CHE" />
        <meta name="geo.placename"    content="Warrington, Cheshire, England" />
        <meta name="geo.position"     content={`${BUSINESS_GEO.latitude};${BUSINESS_GEO.longitude}`} />
        <meta name="ICBM"             content={`${BUSINESS_GEO.latitude}, ${BUSINESS_GEO.longitude}`} />

        {/* ── Business / contact meta ── */}
        <meta name="contact"          content={BUSINESS_PHONE} />
        <meta name="reply-to"         content="info@jmcremovals.co.uk" />
        <meta name="language"         content="en-GB" />
        <meta name="revisit-after"    content="7 days" />
        <meta name="rating"           content="general" />
        <meta name="classification"   content="Business/Removal Company" />
        <meta name="category"         content="Removals, House Clearance, Man and Van, Warrington" />

        {/* ── Apple / mobile ── */}
        <meta name="apple-mobile-web-app-capable"           content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style"  content="default" />
        <meta name="apple-mobile-web-app-title"             content={BUSINESS_NAME} />
        <meta name="mobile-web-app-capable"                 content="yes" />
        <meta name="msapplication-TileColor"                content="#2563eb" />
        <meta name="msapplication-config"                   content="/browserconfig.xml" />
        <meta name="application-name"                       content={BUSINESS_NAME} />

        {/* ── Rich link preview for iMessage / WhatsApp ── */}
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ── JSON-LD: Organisation + Website (sitewide) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body className="min-h-full flex flex-col antialiased bg-white text-gray-900">
        {/* ── Accessibility: skip to main content ── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>

        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
