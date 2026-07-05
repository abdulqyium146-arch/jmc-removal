import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageHero from "@/components/sections/ServicePageHero";
import CTA from "@/components/sections/CTA";
import { SITE_URL } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "moving-house-checklist",
    title: "The Ultimate Moving House Checklist for Warrington Residents",
    description: "Moving house in Warrington? Our comprehensive checklist covers everything from 8 weeks before your move to the big day itself.",
    category: "Moving Tips",
    date: "2024-12-01",
    readTime: "8 min read",
    content: `
      <h2>8 Weeks Before Moving Day</h2>
      <ul>
        <li>Get removal quotes from at least 3 companies — including JMC Removals</li>
        <li>Book your chosen removal company early (especially for weekend or month-end moves)</li>
        <li>Begin decluttering — sell, donate or dispose of items you no longer need</li>
        <li>Notify your solicitor of your intended moving date</li>
        <li>Start collecting packing materials — boxes, tape, bubble wrap</li>
      </ul>

      <h2>4 Weeks Before Moving Day</h2>
      <ul>
        <li>Confirm your moving date with JMC Removals</li>
        <li>Start packing non-essential items</li>
        <li>Notify utility companies (gas, electricity, water, broadband) of your move</li>
        <li>Redirect your post via Royal Mail</li>
        <li>Notify your bank, employer, HMRC, DVLA and GP of your new address</li>
        <li>Arrange childcare or pet care for moving day</li>
      </ul>

      <h2>2 Weeks Before Moving Day</h2>
      <ul>
        <li>Pack most of your belongings, leaving only daily essentials</li>
        <li>Label every box clearly with contents and destination room</li>
        <li>Defrost the freezer</li>
        <li>Return borrowed items and collect items on loan</li>
        <li>Confirm all booking details with JMC Removals</li>
      </ul>

      <h2>The Day Before</h2>
      <ul>
        <li>Pack a "first night" box with essentials — kettle, tea, toiletries, chargers, bedding</li>
        <li>Dismantle beds and flat-pack furniture</li>
        <li>Ensure all items are packed and ready for loading</li>
        <li>Confirm access details with JMC Removals</li>
      </ul>

      <h2>Moving Day</h2>
      <ul>
        <li>Be ready when the removal team arrives</li>
        <li>Direct the team to items requiring special care</li>
        <li>Do a final sweep of every room, cupboard, loft and garage</li>
        <li>Take meter readings at both properties</li>
        <li>Hand over keys to your old property</li>
        <li>Collect keys to your new home</li>
      </ul>
    `,
  },
  {
    slug: "how-much-do-removals-cost",
    title: "How Much Do House Removals Cost in Warrington? (2025 Guide)",
    description: "Wondering what removals cost in Warrington? We break down the factors that affect removal prices.",
    category: "Costs & Pricing",
    date: "2024-11-20",
    readTime: "6 min read",
    content: `
      <h2>House Removal Costs in Warrington — An Overview</h2>
      <p>House removal costs in Warrington vary significantly depending on a number of factors. Understanding what affects the price helps you budget more accurately and ensures you're comparing like-for-like when getting quotes.</p>

      <h2>Factors That Affect Removal Costs</h2>
      <ul>
        <li><strong>Property size</strong> — the number of bedrooms and amount of furniture</li>
        <li><strong>Distance</strong> — local moves within Warrington cost less than long-distance moves</li>
        <li><strong>Day of the week</strong> — Fridays and weekends are more expensive</li>
        <li><strong>Additional services</strong> — packing, dismantling, storage</li>
        <li><strong>Access</strong> — narrow roads, stairs, limited parking</li>
        <li><strong>Specialist items</strong> — pianos, antiques, safes</li>
      </ul>

      <h2>Typical Removal Costs in Warrington (2025)</h2>
      <ul>
        <li><strong>1-bedroom flat:</strong> £250 – £450</li>
        <li><strong>2-bedroom house:</strong> £350 – £600</li>
        <li><strong>3-bedroom house:</strong> £500 – £850</li>
        <li><strong>4-bedroom house:</strong> £700 – £1,200</li>
        <li><strong>5+ bedroom house:</strong> £1,000 – £2,000+</li>
      </ul>

      <h2>Man & Van Rates</h2>
      <p>For smaller moves, our man and van service is available from £60-£80 per hour. Half-day and full-day rates are also available.</p>

      <h2>How to Save on Removal Costs</h2>
      <ul>
        <li>Book a mid-week removal (Tuesday to Thursday)</li>
        <li>Avoid month-end moves when demand is highest</li>
        <li>Pack yourself rather than using a packing service</li>
        <li>Declutter before your move to reduce the volume of items</li>
        <li>Get multiple quotes — JMC Removals always provides free, no-obligation quotes</li>
      </ul>
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | JMC Removals Blog`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "JMC Removals" },
    publisher: {
      "@type": "Organization",
      name: "JMC Removals",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.title, url: `${SITE_URL}/blog/${post.slug}` }])) }} />

      <ServicePageHero
        badge={post.category}
        title={post.title.split(" ").slice(0, 6).join(" ") + " "}
        titleHighlight={post.title.split(" ").slice(6).join(" ")}
        description={post.description}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title.substring(0, 30) + "...", href: `/blog/${post.slug}` }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <span>{post.readTime}</span>
            </div>

            <article
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Book Your Move?</h3>
              <p className="text-sm text-gray-600 mb-5">
                JMC Removals provides professional house removals across Warrington and the North West. Get your free quote today.
              </p>
              <a href="/contact" className="btn-primary">Get a Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
