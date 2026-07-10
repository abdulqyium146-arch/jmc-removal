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
  title: "Furniture Removals Warrington | Single Item & Furniture Transport | JMC Removals",
  description:
    "Specialist furniture removals in Warrington. JMC Removals handles single items, large sofas, antiques, pianos and more. Careful, professional furniture transport across Cheshire and the North West. Free quotes.",
  path: "/furniture-removals",
  keywords: [
    "furniture removals Warrington",
    "furniture transport Warrington",
    "sofa removal Warrington",
    "piano removal Warrington",
    "single item removal Warrington",
    "furniture delivery Warrington",
    "antique furniture removal Warrington",
    "furniture movers Warrington",
  ],
});

const faqs = [
  {
    question: "Can you remove and transport a single piece of furniture?",
    answer:
      "Yes, we regularly move single items of furniture — sofas, wardrobes, beds, dining tables and more. Our man and van service is ideal for single-item moves. We load carefully, transport safely and place the item exactly where you need it.",
  },
  {
    question: "Do you move pianos?",
    answer:
      "Yes, we move upright pianos and baby grand pianos. Piano removal requires specialist care and equipment, which our team is trained to handle. Please mention piano removal when requesting your quote so we can bring the appropriate equipment.",
  },
  {
    question: "Can you dismantle and reassemble furniture?",
    answer:
      "Yes, our team can dismantle and reassemble flat-pack and built furniture including wardrobes, beds and bookcases. This service is available as an add-on to any removal booking.",
  },
  {
    question: "How do you protect furniture during transport?",
    answer:
      "We use professional furniture blankets, stretch wrap and specialist packing materials to protect all items during transit. Fragile or antique items receive extra protection and care. Nothing is loaded without adequate protection in place.",
  },
  {
    question: "Can you collect furniture from a shop or auction house?",
    answer:
      "Yes, we offer furniture collection from furniture shops, auction houses, eBay and marketplace sellers, and storage facilities. We can deliver to your home or take items into storage on your behalf.",
  },
];

const breadcrumbs = [{ label: "Furniture Removals", href: "/furniture-removals" }];

export default function FurnitureRemovalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Furniture Removals", description: "Professional furniture removal and transport service in Warrington, Cheshire. Single items, pianos, antiques and all types of furniture moved carefully across the North West.", url: `${SITE_URL}/furniture-removals`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Furniture Removals", url: `${SITE_URL}/furniture-removals` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Furniture Removals Warrington | Single Item & Furniture Transport | JMC Removals", description: "Specialist furniture removals in Warrington. Single items, sofas, antiques, pianos and all furniture types moved carefully across Cheshire and the North West.", url: `${SITE_URL}/furniture-removals` })) }} />

      <ServicePageHero
        badge="Furniture Removals Warrington"
        title="Careful Furniture Removals in "
        titleHighlight="Warrington"
        description="From a single sofa to a full room of antique furniture, JMC Removals handles all types of furniture removals across Warrington, Cheshire and the wider North West. Professional, careful and insured."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Furniture Removal Services in Warrington</h2>
                <p>
                  Whether you&apos;re moving a single item or an entire house full of furniture, JMC Removals has the equipment, experience and care required to do the job properly. We specialise in handling all types of furniture — from flat-pack to antiques.
                </p>

                <h3>Furniture We Move</h3>
                <ul>
                  <li>Sofas and three-piece suites</li>
                  <li>Wardrobes and bedroom furniture</li>
                  <li>Dining tables and chairs</li>
                  <li>Antique furniture and mirrors</li>
                  <li>Pianos (upright and baby grand)</li>
                  <li>Large appliances and white goods</li>
                  <li>Office furniture and desks</li>
                  <li>Garden furniture and sheds</li>
                </ul>

                <h3>Furniture Collection Service</h3>
                <p>
                  Did you just buy furniture at an auction, on eBay or from a shop? We offer a dedicated furniture collection and delivery service. We&apos;ll collect from the seller and deliver directly to your home, carefully handling every step of the process.
                </p>

                <h3>Furniture Dismantling & Assembly</h3>
                <p>
                  Many pieces of furniture — especially large wardrobes and bed frames — need to be dismantled before they can be moved safely. Our team can dismantle items before the move and reassemble them in your new location, ensuring nothing is damaged in the process.
                </p>

                <h3>Antique & Specialist Furniture</h3>
                <p>
                  We treat antique, valuable and fragile furniture with exceptional care. Our team uses specialist packing materials including custom blankets, foam wrapping and tailored crating where necessary. We understand the irreplaceable nature of valuable pieces.
                </p>

                <h3>Areas We Cover</h3>
                <p>
                  Our furniture removal service covers <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>, <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>, <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>, <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>, <Link href="/northwich-removals" className="text-brand-600 hover:underline">Northwich</Link> and surrounding areas. We also carry out longer-distance furniture transport — just enquire.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "House Removals", href: "/house-removals", desc: "Full property moves" },
                    { label: "House Clearance", href: "/house-clearance", desc: "Clear unwanted furniture" },
                    { label: "Man & Van", href: "/man-and-van", desc: "Single item transport" },
                    { label: "Packing Tips", href: "/blog/packing-tips-house-move", desc: "Protect your furniture" },
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
                    src="/images/jmc-removals-van-rural-property-cheshire.webp"
                    alt="JMC Removals van at rural Cheshire property — furniture removal service"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Furniture Removal Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">Get a free quote for your furniture removal today.</p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">+44 7438 447286</a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">Online Quote Form</a>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                  <h4 className="text-sm font-bold text-orange-900 mb-2">Piano Specialists</h4>
                  <p className="text-xs text-orange-800">We have specialist equipment and training for moving upright and baby grand pianos. Please mention this when requesting your quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={faqs} title="Furniture Removal FAQs" subtitle="Common questions about our furniture removal service in Warrington." />
      <CTA title="Need Furniture Moving in Warrington?" subtitle="JMC Removals provides careful, insured furniture removal across Warrington and the North West. Get your free quote today." />
    </>
  );
}
