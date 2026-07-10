import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { SITE_URL } from "@/lib/utils";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Removal Tips & Moving Advice | JMC Removals Blog",
  description:
    "Expert moving tips, house removal advice and local area guides from JMC Removals. Practical help from Warrington's trusted removal company.",
  path: "/blog",
});

const posts = [
  {
    slug: "moving-house-checklist",
    title: "The Ultimate Moving House Checklist for Warrington Residents",
    excerpt: "Moving house in Warrington? Our comprehensive checklist covers everything from 8 weeks before your move to the big day itself. Don't forget a thing.",
    category: "Moving Tips",
    date: "2024-12-01",
    readTime: "8 min read",
  },
  {
    slug: "how-much-do-removals-cost",
    title: "How Much Do House Removals Cost in Warrington? (2025 Guide)",
    excerpt: "Wondering what removals cost in Warrington? We break down the factors that affect removal prices and give you realistic price ranges for different property sizes.",
    category: "Costs & Pricing",
    date: "2024-11-20",
    readTime: "6 min read",
  },
  {
    slug: "packing-tips-house-move",
    title: "10 Expert Packing Tips to Protect Your Belongings During a Move",
    excerpt: "Packing properly is the key to a successful house move. Our removal experts share their top packing tips to keep your belongings safe in transit.",
    category: "Moving Tips",
    date: "2024-11-05",
    readTime: "7 min read",
  },
  {
    slug: "man-and-van-vs-removal-company",
    title: "Man & Van vs. Removal Company: Which Should You Choose?",
    excerpt: "Not sure whether to book a man and van or a full removal company? We explain the differences, costs and when each option makes the most sense.",
    category: "Advice",
    date: "2024-10-18",
    readTime: "5 min read",
  },
  {
    slug: "house-clearance-guide",
    title: "House Clearance Guide: What to Expect and How to Prepare",
    excerpt: "Facing a house clearance in Warrington? Our guide explains what's involved, how to prepare and what happens to your items afterwards.",
    category: "House Clearance",
    date: "2024-10-01",
    readTime: "6 min read",
  },
  {
    slug: "moving-with-children-tips",
    title: "Moving House with Children: Tips for a Stress-Free Family Move",
    excerpt: "Moving house with kids can be challenging. Our tips help you prepare your children for the move and keep stress levels low for the whole family.",
    category: "Moving Tips",
    date: "2024-09-15",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Moving Tips": "bg-blue-50 text-blue-700",
  "Costs & Pricing": "bg-green-50 text-green-700",
  "Advice": "bg-purple-50 text-purple-700",
  "House Clearance": "bg-orange-50 text-orange-700",
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Removal Tips & Moving Advice | JMC Removals Blog", description: "Expert moving tips, house removal advice and local area guides from JMC Removals. Practical help from Warrington's trusted removal company.", url: `${SITE_URL}/blog` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }])) }} />

      <ServicePageHero
        badge="Moving Tips & Advice"
        title="Moving House "
        titleHighlight="Guides & Tips"
        description="Expert removal advice, moving checklists and local area guides from JMC Removals — Warrington's trusted family removal company."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="section bg-white">
        <div className="container">
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10 text-base leading-relaxed">
            Planning a move? Browse our guides on <Link href="/house-removals">house removals in Warrington</Link>, <Link href="/man-and-van">man and van hire</Link>, <Link href="/house-clearance">house clearance</Link> and more — or <Link href="/contact">get a free quote</Link> from our team today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="card flex flex-col h-full">
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColors[post.category] || "bg-gray-50 text-gray-700"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-base font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <time className="text-xs text-gray-400" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                      <span className="text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Book Your Move?" subtitle="Get in touch with JMC Removals for a free, no-obligation removal quote." />
    </>
  );
}
