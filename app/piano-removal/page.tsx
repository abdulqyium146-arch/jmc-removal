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
  title: "Piano Removal Warrington | Piano Moving Service | JMC Removals",
  description:
    "Specialist piano removal in Warrington. JMC Removals moves upright pianos and baby grand pianos with specialist equipment and trained crew. Safe, careful and fully insured. Free quotes.",
  path: "/piano-removal",
  keywords: [
    "piano removal Warrington",
    "piano movers Warrington",
    "upright piano removal Warrington",
    "baby grand piano removal",
    "piano moving service Warrington",
    "piano transport Warrington",
  ],
});

const faqs = [
  {
    question: "Do you have specialist equipment for piano removal?",
    answer:
      "Yes, we use specialist piano boards, heavy-duty moving straps and protective blankets designed for piano transport. We have the correct equipment to move pianos safely without damage to the instrument or your property.",
  },
  {
    question: "Can you move a piano up or down stairs?",
    answer:
      "Yes, we move pianos up and down stairs regularly. Please mention stairs when requesting your quote so we can assess the staircase, plan the move correctly and bring the right crew.",
  },
  {
    question: "How much does piano removal cost in Warrington?",
    answer:
      "Piano removal costs depend on the piano type, size, distance and access (including stairs). Please call +44 7438 447286 or use our online quote form to get an accurate price for your specific piano and move.",
  },
  {
    question: "Do you move baby grand pianos?",
    answer:
      "Yes, we move baby grand pianos. These require the legs to be removed before transport and careful reassembly at the destination. Please mention it's a baby grand when requesting your quote.",
  },
  {
    question: "Can you collect a piano from an auction house or music shop?",
    answer:
      "Yes, we collect pianos from auction houses, music shops, schools and private sellers across Warrington and the North West.",
  },
  {
    question: "Is my piano insured during removal?",
    answer:
      "Yes, our removal insurance covers pianos in transit. Please confirm the approximate value of your piano when booking.",
  },
];

const breadcrumbs = [{ label: "Piano Removal", href: "/piano-removal" }];

export default function PianoRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Piano Removal", description: "Specialist piano removal in Warrington. JMC Removals moves upright pianos and baby grand pianos with specialist equipment and trained crew. Safe, careful and fully insured.", url: `${SITE_URL}/piano-removal`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Piano Removal", url: `${SITE_URL}/piano-removal` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Piano Removal Warrington | Piano Moving Service | JMC Removals", description: "Specialist piano removal in Warrington. JMC Removals moves upright pianos and baby grand pianos with specialist equipment and trained crew. Safe, careful and fully insured.", url: `${SITE_URL}/piano-removal` })) }} />

      <ServicePageHero
        badge="Piano Removal Warrington"
        title="Specialist Piano Removal in "
        titleHighlight="Warrington"
        description="Moving a piano requires specialist equipment, a trained crew and careful planning. JMC Removals provides a specialist piano removal service across Warrington and the North West — insured, careful and professional."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Piano Removal Service in Warrington</h2>
                <p>
                  Pianos are among the most challenging items to move — heavy, awkward, fragile and irreplaceable. An upright piano can weigh between 150 and 250kg; a baby grand can reach 500kg or more. Moving them safely requires the right equipment, proper technique and experienced hands.
                </p>

                <h3>Types of Piano We Move</h3>
                <ul>
                  <li>Upright pianos (all sizes)</li>
                  <li>Baby grand pianos</li>
                  <li>Digital pianos and keyboards</li>
                  <li>Organs (by arrangement)</li>
                  <li>Pianolas and player pianos</li>
                </ul>

                <h3>Our Piano Moving Process</h3>
                <ul>
                  <li>Pre-move assessment of access, stairs and routes</li>
                  <li>Specialist piano board/skate for safe manoeuvring</li>
                  <li>Professional protective blankets and strapping</li>
                  <li>Stair management with trained crew</li>
                  <li>Careful loading and securing in the van</li>
                  <li>Placement and positioning at the destination</li>
                </ul>

                <h3>Why Pianos Need Specialist Removal</h3>
                <p>
                  An upright piano&apos;s weight is distributed unevenly, making it unstable without specialist equipment. Narrow doorways, stairs and sharp corners add further complexity. Attempting piano removal without proper equipment risks damage to the instrument, property and — most importantly — injury to individuals. Our trained team manages these challenges safely every time.
                </p>

                <h3>Piano Collection Service</h3>
                <p>
                  Bought a piano from an auction house, music shop or private seller? We offer a dedicated piano collection service. We&apos;ll collect your piano from the seller and deliver it carefully to your home — no van hire or DIY stress required.
                </p>

                <h3>Areas We Cover for Piano Removal</h3>
                <p>
                  We move pianos across{" "}
                  <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>,{" "}
                  <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>,{" "}
                  <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>,{" "}
                  <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>,{" "}
                  <Link href="/northwich-removals" className="text-brand-600 hover:underline">Northwich</Link>,{" "}
                  <Link href="/runcorn-removals" className="text-brand-600 hover:underline">Runcorn</Link>{" "}
                  and across the wider North West.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "Furniture Removals", href: "/furniture-removals", desc: "Specialist furniture handling" },
                    { label: "House Removals", href: "/house-removals", desc: "Complete house removal service" },
                    { label: "Man & Van", href: "/man-and-van", desc: "Smaller moves and collections" },
                    { label: "Storage Collection", href: "/storage-collection", desc: "Piano storage options" },
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
                    alt="JMC Removals team with specialist piano removal equipment in Warrington"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Piano Removal Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get a free quote for your piano removal. Please tell us the piano type and any stairs involved.
                  </p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Request Online Quote
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Specialist Equipment</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Piano boards & skates", "Heavy-duty moving straps", "Protective blankets", "Trained crew", "Stair management", "Secured van transport"].map(item => (
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
      <FAQ faqs={faqs} title="Piano Removal FAQs" subtitle="Everything you need to know about our specialist piano removal service in Warrington." />
      <CTA title="Need a Piano Moved in Warrington?" subtitle="JMC Removals provides specialist piano removal across Warrington and the North West. Call for a quote tailored to your piano and your move." />
    </>
  );
}
