import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Packing Service Warrington | Professional Removal Packing | JMC Removals",
  description:
    "Professional removal packing service in Warrington. JMC Removals packs all or part of your home using quality materials. Fragile items and antiques handled with specialist care. Free quotes.",
  path: "/packing-service",
  keywords: [
    "packing service Warrington",
    "removal packing service Warrington",
    "house move packing Warrington",
    "professional packing removals",
    "fragile packing service",
  ],
});

const faqs = [
  {
    question: "What does the full packing service include?",
    answer:
      "Our full packing service covers every room in your home. We bring all materials — boxes, tissue paper, bubble wrap and labels. Every box is labelled clearly by room and contents so unpacking is easy.",
  },
  {
    question: "Can you pack just fragile or valuable items?",
    answer:
      "Yes, we offer partial packing — we can pack just the items you're concerned about (glassware, crockery, antiques, artwork) while you pack everything else.",
  },
  {
    question: "Do you supply packing boxes and materials?",
    answer:
      "Yes, we supply all packing materials as part of the packing service. We can also deliver boxes and materials separately if you're packing yourself.",
  },
  {
    question: "How much does the packing service cost?",
    answer:
      "Packing service costs depend on the size of your home and the number of items. We include a packing quote alongside your removal quote. Call +44 7438 447286 for a price.",
  },
  {
    question: "Can you handle antiques and fragile items carefully?",
    answer:
      "Yes, fragile and antique items are our speciality. We use acid-free tissue, foam padding and specialist packing techniques to protect valuable and irreplaceable pieces.",
  },
  {
    question: "Do you offer an unpacking service too?",
    answer:
      "Yes, we can unpack at your new address — placing items in the correct rooms and disposing of packing materials. Ask for details when booking.",
  },
];

const breadcrumbs = [{ label: "Packing Service", href: "/packing-service" }];

export default function PackingServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Packing Service", description: "Professional removal packing service in Warrington. JMC Removals packs all or part of your home using quality materials. Fragile items and antiques handled with specialist care.", url: `${SITE_URL}/packing-service`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Packing Service", url: `${SITE_URL}/packing-service` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Packing Service Warrington | Professional Removal Packing | JMC Removals", description: "Professional removal packing service in Warrington. JMC Removals packs all or part of your home using quality materials. Fragile items and antiques handled with specialist care.", url: `${SITE_URL}/packing-service` })) }} />

      <ServicePageHero
        badge="Packing Service Warrington"
        title="Professional Packing Service in "
        titleHighlight="Warrington"
        description="Let JMC Removals take the stress out of packing. Our professional packing team can pack all or part of your home using quality materials, ensuring your belongings arrive safely and intact."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Professional Packing Service in Warrington</h2>
                <p>
                  Moving house involves a lot more than just loading a van. Packing properly takes time, skill and the right materials. Our professional packing service takes this task off your hands entirely — or helps with just the parts you find most challenging.
                </p>

                <h3>Full Packing Service</h3>
                <p>
                  We pack every room in your home, from the kitchen to the loft. All items are wrapped appropriately, packed securely and labelled clearly by room and contents. You arrive at your new home to find everything packed and ready — nothing broken, nothing forgotten.
                </p>

                <h3>Partial Packing Service</h3>
                <p>
                  If you&apos;d prefer to pack most things yourself, we can pack just the fragile, breakable or high-value items — your glassware, crockery, artwork and ornaments. Or we can pack specific rooms while you handle the rest.
                </p>

                <h3>What We Pack</h3>
                <ul>
                  <li>Crockery and glassware</li>
                  <li>Artwork and mirrors</li>
                  <li>Ornaments and collectibles</li>
                  <li>Books and media</li>
                  <li>Clothing and bedding</li>
                  <li>Kitchen appliances</li>
                  <li>Electronics and cables</li>
                  <li>Antique furniture and fragile items</li>
                </ul>

                <h3>Packing Materials We Use</h3>
                <ul>
                  <li>Double-walled cardboard boxes (various sizes)</li>
                  <li>Acid-free tissue paper</li>
                  <li>Bubble wrap</li>
                  <li>Packing paper</li>
                  <li>Specialist wardrobe boxes</li>
                  <li>Mattress covers and protectors</li>
                  <li>Picture/mirror boxes</li>
                  <li>Foam padding</li>
                </ul>

                <h3>Antiques &amp; Fragile Items</h3>
                <p>
                  For valuable, antique or fragile items, we use specialist protective materials including acid-free tissue, custom foam padding and where necessary bespoke crating. We also offer specialist furniture dismantling prior to packing.
                </p>

                <h3>Packing Materials Supply</h3>
                <p>
                  Not using our packing service but need supplies? We can deliver quality packing boxes, tape, bubble wrap and paper to your door. Ask when requesting your quote.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "House Removals", href: "/house-removals", desc: "Complete house removal service" },
                    { label: "Furniture Removals", href: "/furniture-removals", desc: "Specialist furniture handling" },
                    { label: "Packing Tips", href: "/blog/packing-tips-house-move", desc: "Expert advice for your move" },
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
                    src="/images/jmc-removals-team-loading-van.webp"
                    alt="JMC Removals team packing and loading van in Warrington"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Packing Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Add a packing service to your removal or get a standalone packing quote.
                  </p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Request Online Quote
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Packing Materials</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Double-walled boxes", "Acid-free tissue paper", "Bubble wrap", "Wardrobe boxes", "Mattress covers", "Mirror/picture boxes", "Foam padding"].map(item => (
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
      <FAQ faqs={faqs} title="Packing Service FAQs" subtitle="Everything you need to know about our professional packing service in Warrington." />
      <CTA title="Want Your Packing Taken Care Of?" subtitle="JMC Removals provides a professional packing service across Warrington and the North West. Add it to your removal quote today." />
    </>
  );
}
