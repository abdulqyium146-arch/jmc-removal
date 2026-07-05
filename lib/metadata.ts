import type { Metadata } from "next";
import { SITE_URL, BUSINESS_NAME, BUSINESS_PHONE } from "./utils";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | House Removals Warrington | Man & Van Cheshire`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "JMC Removals — family-owned removal company in Warrington, Cheshire. Trusted house removals, man and van, house clearance & furniture removals across Warrington, Wigan, Widnes & St Helens. Free quotes. Call 01925 812700.",
  keywords: [
    "removals Warrington",
    "house removals Warrington",
    "removal company Warrington",
    "man and van Warrington",
    "house clearance Warrington",
    "furniture removals Warrington",
    "domestic removals Warrington",
    "cheap removals Warrington",
    "professional removals Warrington",
    "JMC Removals",
    "removals Cheshire",
    "removals Wigan",
    "removals Widnes",
    "removals St Helens",
    "removal company Cheshire",
    "local removals",
    "man and van Cheshire",
    "storage collection Warrington",
    "part load removals",
    "house removals near me",
  ],
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | House Removals Warrington`,
    description:
      "Family-owned removal company in Warrington. Professional house removals, man and van, house clearance & more across Cheshire & the North West. Free quotes available.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} - House Removals Warrington`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | House Removals Warrington`,
    description:
      "Family-owned removal company in Warrington. Professional house removals, man and van & house clearance across Cheshire & the North West.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords: keywords || defaultMetadata.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: BUSINESS_NAME,
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} | ${BUSINESS_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}
