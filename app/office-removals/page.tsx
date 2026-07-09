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
  title: "Office Removals Warrington | Commercial Removals | JMC Removals",
  description:
    "Professional office and commercial removals in Warrington and the North West. JMC Removals handles IT equipment, office furniture and business relocations with minimal downtime. Free quotes — call +44 7438 447286.",
  path: "/office-removals",
  keywords: [
    "office removals Warrington",
    "commercial removals Warrington",
    "business removals Warrington",
    "office relocation Warrington",
    "IT equipment removal Warrington",
  ],
});

const faqs = [
  {
    question: "Do you do office moves outside normal business hours?",
    answer:
      "Yes, we offer evening and weekend office moves to minimise disruption. Many of our business clients prefer a Friday evening or Saturday move so they're ready for Monday morning.",
  },
  {
    question: "Can you move IT equipment and servers safely?",
    answer:
      "Yes, we handle IT equipment with care, using appropriate packaging and labelling. We recommend clients back up all data before the move. For sensitive equipment, we suggest specialist IT relocation support alongside our van and crew service.",
  },
  {
    question: "Do you dismantle and reassemble office furniture?",
    answer:
      "Yes, our team dismantles and reassembles office furniture including desks, workstations, shelving and storage. All components are labelled during dismantling so reassembly is straightforward.",
  },
  {
    question: "How much does an office removal cost in Warrington?",
    answer:
      "Office removal costs depend on the size of the premises, the volume of items and whether out-of-hours working is required. We provide free site surveys and no-obligation quotes for all commercial moves — call +44 7438 447286.",
  },
  {
    question: "Can you move archive boxes and filing cabinets?",
    answer:
      "Yes, we regularly move archive boxes, filing cabinets and document storage. We can provide archive boxes for packing if required.",
  },
  {
    question: "Do you provide packing materials for office moves?",
    answer:
      "Yes, we can supply boxes, packing tape, bubble wrap and archive boxes for your office move. We also offer a packing service if you'd prefer our team to pack everything.",
  },
  {
    question: "Can you move a home office?",
    answer:
      "Yes, our man and van service is ideal for home office moves — desks, monitors, chairs and peripheral equipment. A quick, affordable option for smaller setups.",
  },
  {
    question: "Do you cover office removals across the North West?",
    answer:
      "Yes, we carry out office and commercial removals across Cheshire, Merseyside, Greater Manchester and the wider North West. Call to discuss your location.",
  },
];

const breadcrumbs = [{ label: "Office Removals", href: "/office-removals" }];

export default function OfficeRemovalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Office Removals", description: "Professional office and commercial removals in Warrington and the North West. JMC Removals handles IT equipment, office furniture and business relocations with minimal downtime.", url: `${SITE_URL}/office-removals`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Office Removals", url: `${SITE_URL}/office-removals` }])) }} />

      <ServicePageHero
        badge="Office Removals Warrington"
        title="Office & Commercial Removals in "
        titleHighlight="Warrington"
        description="JMC Removals provides professional office and commercial removals across Warrington and the North West. Experienced in IT equipment, office furniture and business relocations with minimal disruption to your operations."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Office Removals Warrington</h2>
                <p>
                  JMC Removals is a family business with over 15 years of experience in professional office and commercial removals across Warrington and the North West. Fully insured and experienced in all business sizes, we prioritise minimal downtime so your operations can continue with as little disruption as possible.
                </p>

                <h3>What We Move for Office Relocations</h3>
                <ul>
                  <li>Desks and workstations</li>
                  <li>Office chairs</li>
                  <li>Filing cabinets and shelving</li>
                  <li>IT equipment and servers</li>
                  <li>Monitors and printers</li>
                  <li>Reception furniture</li>
                  <li>Kitchen and breakout equipment</li>
                  <li>Archive boxes and files</li>
                </ul>

                <h3>Minimising Business Disruption</h3>
                <p>
                  We offer out-of-hours office moves (evenings and weekends) to avoid impact on your working day. Our team works efficiently and methodically — completing most small-to-medium office moves within a single day.
                </p>

                <h3>IT Equipment Handling</h3>
                <p>
                  We handle IT equipment including computers, servers, monitors and peripherals with care. Items are individually wrapped, labelled and transported safely. We recommend clients back up data and remove sensitive equipment themselves before our team arrives.
                </p>

                <h3>Dismantling &amp; Reassembly</h3>
                <p>
                  Our team can dismantle and reassemble desks, workstations, shelving units and storage furniture. We label all components and hardware so everything goes back together correctly at your new premises.
                </p>

                <h3>Small Business &amp; Home Office Moves</h3>
                <p>
                  Not all commercial moves need a large crew and multiple vans. Our{" "}
                  <Link href="/man-and-van" className="text-brand-600 hover:underline">man and van service</Link>{" "}
                  is ideal for small offices, home offices and single-desk setups.
                </p>

                <h3>Areas We Cover for Office Removals</h3>
                <p>
                  We provide office removals across{" "}
                  <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>,{" "}
                  <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>,{" "}
                  <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>,{" "}
                  <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>,{" "}
                  <Link href="/northwich-removals" className="text-brand-600 hover:underline">Northwich</Link>{" "}
                  and across Cheshire, Merseyside and Greater Manchester.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "House Removals", href: "/house-removals", desc: "Domestic removals service" },
                    { label: "Man & Van", href: "/man-and-van", desc: "Smaller office and home office moves" },
                    { label: "Furniture Removals", href: "/furniture-removals", desc: "Specialist furniture handling" },
                    { label: "Storage Collection", href: "/storage-collection", desc: "Office storage solutions" },
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
                    src="/images/jmc-removals-fleet-vans-warrington.webp"
                    alt="JMC Removals fleet vans in Warrington — office removals service"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Office Removal Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get a free, no-obligation office removal quote or book a site survey today.
                  </p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Request Online Quote
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">We Move</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Desks & workstations", "Office chairs", "IT equipment & servers", "Filing cabinets", "Reception furniture", "Archive boxes & files", "Kitchen & breakout equipment"].map(item => (
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
      <FAQ faqs={faqs} title="Office Removals FAQs" subtitle="Everything you need to know about our office and commercial removal service in Warrington." />
      <CTA title="Need an Office Removal in Warrington?" subtitle="JMC Removals provides professional office and commercial removals across Warrington and the North West. Call for a free site survey and quote." />
    </>
  );
}
