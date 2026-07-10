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
  title: "House Clearance Warrington | Professional Property Clearance | JMC Removals",
  description:
    "Professional house clearance in Warrington and surrounding areas. JMC Removals provides full and partial property clearances — including probate, landlord and estate clearances. Respectful and efficient. Free quotes — call +44 7438 447286.",
  path: "/house-clearance",
  keywords: [
    "house clearance Warrington",
    "property clearance Warrington",
    "probate clearance Warrington",
    "estate clearance Warrington",
    "clearance company Warrington",
    "house clearance Cheshire",
    "full house clearance Warrington",
    "furniture clearance Warrington",
  ],
});

const faqs = [
  {
    question: "What does a house clearance service include?",
    answer:
      "Our house clearance service includes the removal of all or selected items from a property. This includes furniture, household items, appliances, garden furniture and general rubbish. We work efficiently to clear the property and dispose of items responsibly, donating usable goods to charity where possible.",
  },
  {
    question: "How much does a house clearance cost in Warrington?",
    answer:
      "House clearance costs depend on the size of the property, the amount of items to be cleared and any special circumstances. Prices start from around £250 for a partial clearance. We always provide a free, no-obligation quote before any work commences.",
  },
  {
    question: "Do you provide probate clearances?",
    answer:
      "Yes, we have significant experience with probate clearances following a bereavement. Our team approaches these jobs with sensitivity and respect, understanding the emotional nature of the work. We'll liaise directly with solicitors or executors if required.",
  },
  {
    question: "Do you clear properties on behalf of landlords and letting agents?",
    answer:
      "Yes, we regularly work with landlords, letting agents and housing associations to clear properties between tenancies. We can provide same-day or next-day clearances where required and will provide written confirmation of work completed.",
  },
  {
    question: "What happens to the items you collect?",
    answer:
      "We aim to divert as much as possible from landfill. Usable furniture and household items are donated to local charities where possible. Items are recycled or disposed of responsibly at licensed waste transfer stations. We are a licensed waste carrier.",
  },
];

const breadcrumbs = [{ label: "House Clearance", href: "/house-clearance" }];

export default function HouseClearancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "House Clearance", description: "Professional house clearance service in Warrington, Cheshire. Full and partial property clearances including probate, landlord and estate clearances.", url: `${SITE_URL}/house-clearance`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "House Clearance", url: `${SITE_URL}/house-clearance` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "House Clearance Warrington | Professional Property Clearance | JMC Removals", description: "Professional house clearance in Warrington. Full and partial property clearances — probate, landlord and estate clearances. Respectful, efficient and fully licensed.", url: `${SITE_URL}/house-clearance` })) }} />

      <ServicePageHero
        badge="House Clearance Warrington"
        title="Professional House Clearance in "
        titleHighlight="Warrington"
        description="JMC Removals provides professional, respectful house clearance services across Warrington and the North West. Full or partial clearances for homeowners, landlords, letting agents and probate situations."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>House Clearance Services in Warrington</h2>
                <p>
                  Whether you&apos;re clearing a loved one&apos;s home, dealing with a property between tenancies or simply want to declutter, JMC Removals provides a professional and compassionate house clearance service across Warrington and the surrounding areas.
                </p>

                <h3>Types of House Clearance We Provide</h3>
                <ul>
                  <li><strong>Full house clearance</strong> — complete clearance of an entire property</li>
                  <li><strong>Partial clearance</strong> — removing selected items or specific rooms</li>
                  <li><strong>Probate clearance</strong> — respectful clearance following a bereavement</li>
                  <li><strong>Landlord clearance</strong> — between-tenancy property clearances</li>
                  <li><strong>Estate clearance</strong> — working with solicitors and executors</li>
                  <li><strong>Garden clearance</strong> — outdoor furniture and garden waste removal</li>
                  <li><strong>Garage and loft clearance</strong> — specialist clearance of storage spaces</li>
                </ul>

                <h3>Our Approach to House Clearances</h3>
                <p>
                  We understand that many house clearances — particularly probate situations — can be emotionally challenging. Our team always approaches these jobs with sensitivity, professionalism and respect. We work at a pace that suits you and ensure all items are handled with care.
                </p>
                <p>
                  Before starting any clearance, we&apos;ll walk through the property with you to understand exactly what is to be cleared and what should remain. Nothing is removed without your express instruction.
                </p>

                <h3>Responsible Disposal</h3>
                <p>
                  JMC Removals is committed to environmentally responsible disposal. We donate suitable <Link href="/furniture-removals" className="text-brand-600 hover:underline">furniture</Link> and household items to local charities. All waste is taken to licensed facilities and we can provide waste transfer documentation if required. We are fully licensed waste carriers.
                </p>

                <h3>Areas We Cover for House Clearance</h3>
                <p>
                  We provide house clearance services across <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>, <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>, <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>, <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>, <Link href="/northwich-removals" className="text-brand-600 hover:underline">Northwich</Link> and all surrounding areas.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "House Removals", href: "/house-removals", desc: "Move after your clearance" },
                    { label: "Furniture Removals", href: "/furniture-removals", desc: "Specialist furniture handling" },
                    { label: "Man & Van", href: "/man-and-van", desc: "Smaller clearance jobs" },
                    { label: "House Clearance Guide", href: "/blog/house-clearance-guide", desc: "What to expect" },
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
                    src="/images/jmc-removals-depot-warrington.webp"
                    alt="JMC Removals vehicles at depot in Warrington — house clearance service"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Clearance Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get a free, no-obligation house clearance quote today.
                  </p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Request Online Quote
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">We Clear</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Furniture & sofas", "White goods & appliances", "Clothing & textiles", "Garden items", "Garage & loft contents", "General household goods", "Books, media & personal items"].map(item => (
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
      <FAQ faqs={faqs} title="House Clearance FAQs" subtitle="Everything you need to know about our house clearance service in Warrington." />
      <CTA title="Need a House Clearance in Warrington?" subtitle="Call JMC Removals for a free, sensitive and professional house clearance service. Available throughout Warrington and the North West." />
    </>
  );
}
