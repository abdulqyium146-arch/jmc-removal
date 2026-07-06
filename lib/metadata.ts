import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_ADDRESS,
} from "./utils";

// ─── Base Open Graph image ────────────────────────────────────────────────────
const OG_IMAGE = {
  url: `${SITE_URL}/og-image.webp`,
  width: 800,
  height: 600,
  alt: "JMC Removals van outside a large Cheshire property — professional house removal service Warrington",
  type: "image/webp",
};

// ─── Default / site-wide metadata ────────────────────────────────────────────
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Title template — keep brand in every tab
  title: {
    default: `${BUSINESS_NAME} | House Removals Warrington | Man & Van Cheshire`,
    template: `%s | ${BUSINESS_NAME}`,
  },

  // Primary meta description (155 chars target)
  description:
    "JMC Removals — family-owned removal company in Warrington, Cheshire. Trusted house removals, man & van, house clearance & furniture removals across Warrington, Wigan, Widnes & St Helens. Free no-obligation quotes. Call 01925 812700.",

  // Core keywords (supplementary signal — not a primary ranking factor)
  keywords: [
    "removals Warrington",
    "house removals Warrington",
    "removal company Warrington",
    "man and van Warrington",
    "house clearance Warrington",
    "furniture removals Warrington",
    "domestic removals Warrington",
    "JMC Removals",
    "removals Cheshire",
    "removals Wigan",
    "removals Widnes",
    "removals St Helens",
    "removal company Cheshire",
    "man and van Cheshire",
    "storage collection Warrington",
    "part load removals Warrington",
    "house removals near me",
    "cheap removals Warrington",
    "professional removals Warrington",
  ],

  // Authorship
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,

  // Canonical
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GB": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  // Format detection — prevent mobile browsers auto-linking numbers
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${BUSINESS_NAME} | House Removals Warrington`,
    description:
      "Family-owned removal company in Warrington. Professional house removals, man & van, house clearance & furniture removals across Cheshire & the North West. Free no-obligation quotes.",
    images: [OG_IMAGE],
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | House Removals Warrington`,
    description:
      "Family-owned removal company in Warrington. Professional house removals, man & van & house clearance across Cheshire & the North West.",
    images: [`${SITE_URL}/og-image.webp`],
    site: "@jmcremovals",
    creator: "@jmcremovals",
  },

  // Crawl directives — applied via meta tag (headers also set via next.config)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico",              sizes: "any",       type: "image/x-icon" },
      { url: "/favicon-16x16.png",        sizes: "16x16",     type: "image/png" },
      { url: "/favicon-32x32.png",        sizes: "32x32",     type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // Web App Manifest
  manifest: "/site.webmanifest",

  // Site verification tokens
  verification: {
    google: "ZJYSU4vlL9-0ILM4ItyGGnph_GxTUOfcE3cnM02OBwQ",
    // bing: "REPLACE_WITH_BING_WEBMASTER_TOKEN",
    // yandex: "REPLACE_WITH_YANDEX_TOKEN",
  },

  // App / viewport
  appleWebApp: {
    capable: true,
    title: BUSINESS_NAME,
    statusBarStyle: "default",
  },

  // Category
  category: "Removal Company, Moving Services, House Clearance",
};

// ─── Per-page metadata factory ────────────────────────────────────────────────
export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords: keywords ?? (defaultMetadata.keywords as string[]),

    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "x-default": url,
      },
    },

    openGraph: {
      type: ogType,
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: [OG_IMAGE],
      ...(ogType === "article" && publishedTime ? { publishedTime } : {}),
      ...(ogType === "article" && modifiedTime  ? { modifiedTime  } : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: [`${SITE_URL}/og-image.webp`],
      site: "@jmcremovals",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
