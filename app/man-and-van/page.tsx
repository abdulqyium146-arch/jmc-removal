import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Man and Van Warrington | Affordable Man & Van Hire | JMC Removals",
  description:
    "Affordable man and van hire in Warrington. JMC Removals provides a reliable, friendly man and van service for smaller moves, single items, student moves and more. Call 01925 812700 for a free quote.",
  path: "/man-and-van",
  keywords: [
    "man and van Warrington",
    "man and van hire Warrington",
    "man with van Warrington",
    "cheap man and van Warrington",
    "man and van service Warrington",
    "man and van Cheshire",
    "student removals Warrington",
    "small removals Warrington",
  ],
});

const faqs = [
  {
    question: "What is a man and van service?",
    answer:
      "A man and van service provides you with a professional driver and a suitable van for your move. It's ideal for smaller moves that don't require a full removal team — such as moving a few items of furniture, a studio flat, or a student accommodation move. JMC Removals offers flexible, affordable man and van hire across Warrington and the North West.",
  },
  {
    question: "How much does man and van hire cost in Warrington?",
    answer:
      "Man and van costs in Warrington typically start from around £60-£80 per hour, depending on the size of van required and distance. We also offer fixed-price quotes for specific jobs. Contact us for a free, no-obligation quote.",
  },
  {
    question: "Can I book a man and van at short notice?",
    answer:
      "Yes, we often have availability at short notice, even same-day in some cases. We recommend calling us as early as possible to guarantee your preferred time slot, especially for weekend moves.",
  },
  {
    question: "Do you help with loading and unloading?",
    answer:
      "Absolutely. Our man and van service always includes help with loading and unloading. You won't be expected to do any of the heavy lifting yourself unless you want to.",
  },
  {
    question: "What size van do I need for my move?",
    answer:
      "For most flat or small house moves we use a Luton van which provides ample space. For smaller single-item moves or studio flats a transit van may be sufficient. We'll recommend the right van size when you describe your move.",
  },
];

const breadcrumbs = [{ label: "Man and Van", href: "/man-and-van" }];

export default function ManAndVanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Man and Van", description: "Affordable man and van hire service in Warrington, Cheshire. Professional driver and van for smaller moves, single items, student relocations and more.", url: `${SITE_URL}/man-and-van`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Man and Van", url: `${SITE_URL}/man-and-van` }])) }} />

      <ServicePageHero
        badge="Man & Van Warrington"
        title="Affordable Man & Van Hire in "
        titleHighlight="Warrington"
        description="Need a man and van in Warrington? JMC Removals provides a friendly, flexible and affordable man and van service for all types of smaller moves across Cheshire and the North West."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Man & Van Service Warrington</h2>
                <p>
                  Our man and van service is a popular, cost-effective option for customers who don&apos;t need a full removal team. Whether you&apos;re moving a single piece of furniture, clearing a student flat or making a small property move, we&apos;ll provide a reliable driver and the right-sized van for your needs.
                </p>

                <h3>When is Man & Van the Right Choice?</h3>
                <ul>
                  <li>Moving a studio or 1-bedroom flat</li>
                  <li>Student accommodation moves</li>
                  <li>Moving individual items of furniture</li>
                  <li>Office or business item moves</li>
                  <li>eBay or marketplace furniture collections</li>
                  <li>Small home clearances</li>
                  <li>Flat-pack furniture delivery and assembly</li>
                </ul>

                <h3>Flexible and Affordable</h3>
                <p>
                  Unlike a full removal team, the man and van service is highly flexible. We can work by the hour or provide a fixed-price quote for your move. Available 7 days a week, including evenings and at short notice where possible.
                </p>

                <h3>Professional and Fully Insured</h3>
                <p>
                  All JMC Removals drivers are professional, experienced and fully insured. We&apos;re not a marketplace service where you don&apos;t know who is turning up — when you book with JMC, you get a known, trusted local business.
                </p>

                <h3>Areas Covered</h3>
                <p>
                  Our man and van service covers Warrington, Wigan, Widnes, St Helens, Northwich and all surrounding areas of Cheshire, Merseyside and Greater Manchester.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Book Man & Van</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Call us for a fast, free quote on our man and van service.
                  </p>
                  <a href="tel:01925812700" className="btn-primary w-full justify-center mb-3">
                    01925 812700
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Get Online Quote
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 space-y-3">
                  <h3 className="text-base font-bold text-gray-900">Man & Van Rates</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Hourly Rate (1 man)", value: "From £60/hr" },
                      { label: "Hourly Rate (2 men)", value: "From £80/hr" },
                      { label: "Half Day (4hrs)", value: "From £220" },
                      { label: "Full Day (8hrs)", value: "From £380" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600">{label}</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">*Indicative rates. Contact us for a precise quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={faqs} title="Man & Van FAQs" subtitle="Common questions about our man and van service in Warrington." />
      <CTA title="Need a Man & Van in Warrington?" subtitle="Call JMC Removals for a fast, free quote. Available 7 days a week, including at short notice." />
    </>
  );
}
