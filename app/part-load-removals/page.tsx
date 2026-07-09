import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Part Load Removals Warrington | Small Move Service | JMC Removals",
  description:
    "Affordable part load removals in Warrington. Moving a small amount? JMC Removals provides cost-effective part load removal services — you only pay for the space you use. Free quotes.",
  path: "/part-load-removals",
  keywords: [
    "part load removals Warrington",
    "small move Warrington",
    "part load moving service",
    "shared van removal",
    "affordable removals Warrington small load",
    "studio flat removal Warrington",
  ],
});

const faqs = [
  {
    question: "What is a part load removal?",
    answer:
      "A part load removal means your belongings take up only part of the removal van. You pay for the space you actually need rather than hiring the whole vehicle, making it more cost-effective for smaller moves.",
  },
  {
    question: "Is a part load cheaper than a full removal?",
    answer:
      "Yes, part load moves are typically more affordable because you're only paying for the space your belongings occupy. The exact saving depends on your volume and the distance involved.",
  },
  {
    question: "How is a part load priced?",
    answer:
      "We price part loads based on your inventory volume, distance and access requirements. We provide a fixed, transparent quote after reviewing your inventory — usually over the phone or via photos you send us.",
  },
  {
    question: "What's the difference between a part load and man and van?",
    answer:
      "A man and van service suits very small loads — a few items or single pieces. Part load removals are for slightly larger volumes, such as a studio flat or one-bedroom flat. We'll advise which suits you best.",
  },
  {
    question: "Do you do part load moves for students?",
    answer:
      "Yes, student part load moves are one of our most common requests — ideal for moving between term-time addresses or returning home for holidays.",
  },
  {
    question: "Can I book a part load move at short notice?",
    answer:
      "We do our best to accommodate short-notice bookings. Call +44 7438 447286 to check our current availability.",
  },
];

const breadcrumbs = [{ label: "Part Load Removals", href: "/part-load-removals" }];

export default function PartLoadRemovalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Part Load Removals", description: "Affordable part load removals in Warrington. Moving a small amount? JMC Removals provides cost-effective part load removal services — you only pay for the space you use.", url: `${SITE_URL}/part-load-removals`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Part Load Removals", url: `${SITE_URL}/part-load-removals` }])) }} />

      <ServicePageHero
        badge="Part Load Removals Warrington"
        title="Affordable Part Load Removals in "
        titleHighlight="Warrington"
        description="Moving a small amount? JMC Removals offers cost-effective part load removal services across Warrington and the North West. Pay only for the space you need — no wasted van capacity, no wasted money."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Part Load Removals in Warrington</h2>
                <p>
                  Not every house move involves a full van load. Students, single occupants, couples in flats and people moving between rented properties often need to move a relatively small volume of belongings — and booking a full removal service can feel like overkill. Our part load service is designed for exactly these situations.
                </p>

                <h3>What is a Part Load Removal?</h3>
                <p>
                  A part load removal means your belongings occupy only part of the van rather than the whole vehicle. We either use an appropriately sized van for your volume, or we schedule your move alongside a compatible load from another customer, meaning you pay only for the space your belongings actually need.
                </p>

                <h3>Who Uses Part Load Removals?</h3>
                <ul>
                  <li>Students moving between term-time addresses</li>
                  <li>Single occupants moving from a bedsit or room</li>
                  <li>Couples moving from a one-bedroom flat</li>
                  <li>People taking half the furniture from a shared property</li>
                  <li>People moving items to or from a storage facility</li>
                  <li>Those with a small amount of furniture to collect or deliver</li>
                </ul>

                <h3>Part Load vs Man &amp; Van vs Full Removal</h3>
                <p>
                  A{" "}
                  <Link href="/man-and-van" className="text-brand-600 hover:underline">man and van service</Link>{" "}
                  is ideal for very small loads — a few items or a single piece of furniture. A part load removal suits slightly larger volumes — a studio flat or a one-bed flat worth of belongings. A{" "}
                  <Link href="/house-removals" className="text-brand-600 hover:underline">full house removal</Link>{" "}
                  is right when you need the whole van. We&apos;ll recommend the right option when you get in touch.
                </p>

                <h3>How We Price Part Load Moves</h3>
                <p>
                  We price part load removals based on the volume of your belongings, the distance involved and any access requirements at either address. We&apos;ll assess your inventory (often over the phone or via photos) and provide a fixed, transparent quote.
                </p>

                <h3>Flexible Scheduling</h3>
                <p>
                  Part load moves are sometimes more flexible on date and time, which allows us to offer competitive pricing. If your move date is flexible, mention this when requesting your quote.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "Man & Van", href: "/man-and-van", desc: "Very small loads and single items" },
                    { label: "House Removals", href: "/house-removals", desc: "Full house removal service" },
                    { label: "Storage Collection", href: "/storage-collection", desc: "Collect from storage" },
                    { label: "Moving House Checklist", href: "/blog/moving-house-checklist", desc: "Plan your move step by step" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="block rounded-xl border border-gray-200 bg-gray-50 p-3 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">{s.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/jmc-removals-luton-van-residential-warrington.webp"
                    alt="JMC Removals luton van for part load removals in Warrington"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Part Load Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Tell us what you need to move and we&apos;ll give you a fixed, transparent price.
                  </p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Request Online Quote
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Ideal For</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Studio flat moves", "One-bedroom flat moves", "Student relocations", "Single room moves", "Part-furniture moves", "Storage collections"].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={faqs} title="Part Load Removals FAQs" subtitle="Everything you need to know about our part load removal service in Warrington." />
      <CTA title="Moving a Small Load in Warrington?" subtitle="JMC Removals makes small and part load moves affordable and straightforward. Get your free quote today." />
    </>
  );
}
