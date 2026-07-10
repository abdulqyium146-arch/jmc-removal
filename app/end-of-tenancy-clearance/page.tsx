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
  title: "End of Tenancy Clearance Warrington | Landlord Clearance | JMC Removals",
  description:
    "Fast end of tenancy clearance in Warrington. JMC Removals provides professional property clearances for landlords, letting agents and tenants. Licensed waste carrier. Quick turnaround. Free quotes.",
  path: "/end-of-tenancy-clearance",
  keywords: [
    "end of tenancy clearance Warrington",
    "landlord clearance Warrington",
    "tenancy clearance service",
    "property clearance Warrington landlord",
    "letting agent clearance Warrington",
    "between tenancy clearance",
  ],
});

const faqs = [
  {
    question: "How quickly can you clear a property in Warrington?",
    answer:
      "We often have same-day and next-day clearance availability across Warrington. Call +44 7438 447286 to check current availability for your property.",
  },
  {
    question: "Do you provide written confirmation of clearance?",
    answer:
      "Yes, we can provide a written confirmation letter or email confirming clearance has been completed. This is often required by landlords and letting agents for their records.",
  },
  {
    question: "Are you a licensed waste carrier?",
    answer:
      "Yes, JMC Removals is a fully licensed waste carrier registered with the relevant authorities. We can provide documentation of our licence if required.",
  },
  {
    question: "Can tenants use your clearance service?",
    answer:
      "Yes, tenants can book our clearance service to remove unwanted items before vacating a property. We offer partial clearances from a single van load upwards.",
  },
  {
    question: "How much does an end of tenancy clearance cost?",
    answer:
      "Costs depend on the property size and volume of items. Partial clearances start from around £150. We provide free, no-obligation quotes before any work begins.",
  },
  {
    question: "What happens to the items you collect?",
    answer:
      "We donate usable furniture and household items to local charities where possible. Other items are taken to licensed waste transfer stations for responsible recycling and disposal.",
  },
  {
    question: "Do you clear gardens and garages?",
    answer:
      "Yes, we clear outdoor areas including gardens, garages and sheds as part of any end of tenancy clearance.",
  },
];

const breadcrumbs = [{ label: "End of Tenancy Clearance", href: "/end-of-tenancy-clearance" }];

export default function EndOfTenancyClearancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "End of Tenancy Clearance", description: "Fast end of tenancy clearance in Warrington. JMC Removals provides professional property clearances for landlords, letting agents and tenants. Licensed waste carrier.", url: `${SITE_URL}/end-of-tenancy-clearance`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "End of Tenancy Clearance", url: `${SITE_URL}/end-of-tenancy-clearance` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "End of Tenancy Clearance Warrington | Landlord Clearance | JMC Removals", description: "Fast end of tenancy clearance in Warrington. JMC Removals provides professional property clearances for landlords, letting agents and tenants. Licensed waste carrier.", url: `${SITE_URL}/end-of-tenancy-clearance` })) }} />

      <ServicePageHero
        badge="End of Tenancy Clearance Warrington"
        title="End of Tenancy Clearance in "
        titleHighlight="Warrington"
        description="JMC Removals provides fast, professional end of tenancy clearances for landlords, letting agents and tenants across Warrington and the North West. Licensed waste carrier. Same-day and next-day availability."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>End of Tenancy Clearance Service in Warrington</h2>
                <p>
                  When a tenancy ends, clearing the property quickly and properly is essential — whether you&apos;re a landlord preparing for new tenants, a letting agent managing the turnaround, or a tenant wanting to leave cleanly. JMC Removals provides a fast, professional clearance service across Warrington and the surrounding area.
                </p>

                <h3>Clearance Services for Landlords &amp; Letting Agents</h3>
                <p>
                  We understand the commercial pressure landlords and letting agents face to minimise void periods. Our team can clear a property quickly — often same-day or next-day — and provide written confirmation of work completed, which many landlords and agents require for their records.
                </p>

                <h3>What We Clear</h3>
                <ul>
                  <li>Furniture and sofas</li>
                  <li>Beds and mattresses</li>
                  <li>White goods and appliances</li>
                  <li>Curtains and carpets (where removable)</li>
                  <li>Clothing and personal belongings</li>
                  <li>Kitchen and bathroom items</li>
                  <li>Garden furniture and outdoor equipment</li>
                  <li>Garage and shed contents</li>
                  <li>General rubbish and bags</li>
                </ul>

                <h3>Clearance Services for Tenants</h3>
                <p>
                  Moving out and don&apos;t want to take everything? Our clearance service is available to tenants who need to clear unwanted items before handing back the keys. We can clear part or all of a property depending on your needs.
                </p>

                <h3>Responsible Disposal</h3>
                <p>
                  JMC Removals is a fully licensed waste carrier. We always aim to divert items from landfill — donating usable furniture and household goods to local charities where possible. All remaining waste is taken to licensed waste transfer stations. We can provide waste transfer documentation if required.
                </p>

                <h3>Areas We Cover</h3>
                <p>
                  We provide end of tenancy clearances across{" "}
                  <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>,{" "}
                  <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>,{" "}
                  <Link href="/runcorn-removals" className="text-brand-600 hover:underline">Runcorn</Link>,{" "}
                  <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>,{" "}
                  <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>,{" "}
                  <Link href="/northwich-removals" className="text-brand-600 hover:underline">Northwich</Link>{" "}
                  and the wider North West.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "House Clearance", href: "/house-clearance", desc: "Full and partial property clearances" },
                    { label: "Man & Van", href: "/man-and-van", desc: "Smaller clearance jobs" },
                    { label: "House Removals", href: "/house-removals", desc: "Move after your tenancy ends" },
                    { label: "Furniture Removals", href: "/furniture-removals", desc: "Single item removals" },
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
                    alt="JMC Removals depot in Warrington — end of tenancy clearance service"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Clearance Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get a fast, free quote for your end of tenancy clearance.
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
                    {["Furniture & sofas", "Beds & mattresses", "White goods", "Clothing & personal items", "Garden furniture", "Garage & shed contents", "General rubbish"].map(item => (
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
      <FAQ faqs={faqs} title="End of Tenancy Clearance FAQs" subtitle="Everything you need to know about our end of tenancy clearance service in Warrington." />
      <CTA title="Need a Property Cleared in Warrington?" subtitle="JMC Removals provides fast, professional end of tenancy clearances across Warrington and the North West. Call for availability and a free quote." />
    </>
  );
}
