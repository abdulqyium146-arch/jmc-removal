import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFreq;
  priority: number;
}

const now = new Date().toISOString();

// ─── Homepage ────────────────────────────────────────────────────────────────
const homePage: SitemapEntry[] = [
  {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  },
];

// ─── High-priority conversion pages ──────────────────────────────────────────
const corePage: SitemapEntry[] = [
  { url: `${SITE_URL}/contact`,  lastModified: now, changeFrequency: "monthly", priority: 0.95 },
  { url: `${SITE_URL}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.80 },
];

// ─── Service pages (primary commercial intent) ────────────────────────────────
const servicePages: SitemapEntry[] = [
  "house-removals",
  "man-and-van",
  "house-clearance",
  "furniture-removals",
  "storage-collection",
  "office-removals",
  "packing-service",
  "piano-removal",
  "end-of-tenancy-clearance",
  "part-load-removals",
  "student-removals",
  "long-distance-removals",
].map((slug) => ({
  url: `${SITE_URL}/${slug}`,
  lastModified: now,
  changeFrequency: "monthly" as ChangeFreq,
  priority: 0.90,
}));

// ─── Local area pages (local SEO) ─────────────────────────────────────────────
const areaPages: SitemapEntry[] = [
  "warrington-removals",
  "wigan-removals",
  "widnes-removals",
  "st-helens-removals",
  "northwich-removals",
  "runcorn-removals",
  "stockton-heath-removals",
  "latchford-removals",
  "great-sankey-removals",
  "penketh-removals",
  "birchwood-removals",
  "padgate-removals",
  "orford-removals",
  "woolston-removals",
  "fearnhead-removals",
  "lymm-removals",
  "culcheth-removals",
  "appleton-removals",
].map((slug) => ({
  url: `${SITE_URL}/${slug}`,
  lastModified: now,
  changeFrequency: "monthly" as ChangeFreq,
  priority: 0.85,
}));

// ─── Blog / informational pages ───────────────────────────────────────────────
const blogIndex: SitemapEntry[] = [
  {
    url: `${SITE_URL}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.65,
  },
];

const blogPosts: SitemapEntry[] = [
  { slug: "moving-house-checklist",          date: "2024-12-01" },
  { slug: "how-much-do-removals-cost",       date: "2024-11-20" },
  { slug: "packing-tips-house-move",         date: "2024-11-05" },
  { slug: "man-and-van-vs-removal-company",  date: "2024-10-18" },
  { slug: "house-clearance-guide",           date: "2024-10-01" },
  { slug: "moving-with-children-tips",       date: "2024-09-15" },
].map(({ slug, date }) => ({
  url: `${SITE_URL}/blog/${slug}`,
  lastModified: new Date(date).toISOString(),
  changeFrequency: "yearly" as ChangeFreq,
  priority: 0.55,
}));

// ─── Legal pages ──────────────────────────────────────────────────────────────
const legalPages: SitemapEntry[] = [
  { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.30 },
  { url: `${SITE_URL}/terms`,          lastModified: now, changeFrequency: "yearly", priority: 0.30 },
];

// ─── Export ───────────────────────────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...homePage,
    ...corePage,
    ...servicePages,
    ...areaPages,
    ...blogIndex,
    ...blogPosts,
    ...legalPages,
  ];
}
