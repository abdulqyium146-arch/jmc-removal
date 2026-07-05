import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const servicePages = [
    "house-removals",
    "man-and-van",
    "house-clearance",
    "furniture-removals",
    "storage-collection",
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const areaPages = [
    "warrington-removals",
    "wigan-removals",
    "widnes-removals",
    "st-helens-removals",
    "northwich-removals",
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = [
    "moving-house-checklist",
    "how-much-do-removals-cost",
    "packing-tips-house-move",
    "man-and-van-vs-removal-company",
    "house-clearance-guide",
    "moving-with-children-tips",
  ].map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
