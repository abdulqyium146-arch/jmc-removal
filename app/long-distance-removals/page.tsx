import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema, webPageSchema, howToSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Long Distance Removals Warrington | UK-Wide Removals | JMC Removals",
  description:
    "Long distance removals from Warrington to anywhere in the UK. JMC Removals provides professional, fully insured house removals to London, Birmingham, Scotland, Wales and beyond. Full house or part load options. Free quotes — call +44 7438 447286.",
  path: "/long-distance-removals",
  keywords: [
    "long distance removals Warrington",
    "UK removals Warrington",
    "removals Warrington to London",
    "removals Warrington to Birmingham",
    "long distance house removal",
    "UK wide removals Cheshire",
    "removals from Warrington",
    "national removals Warrington",
  ],
});

const faqs = [
  {
    question: "Do JMC Removals cover long distance moves across the UK?",
    answer:
      "Yes. JMC Removals provides long distance house removals from Warrington to anywhere in the UK — including London, Birmingham, Leeds, Edinburgh, Cardiff, Bristol and beyond. We are fully insured for long-distance transport and experienced in managing moves that cover significant distances.",
  },
  {
    question: "How much does a long distance removal from Warrington cost?",
    answer:
      "Long distance removal costs depend on the distance, the size of your property and the volume of belongings. As a guide, a 2-bedroom house move from Warrington to London typically starts from £800–£1,200. A 3-bedroom move may cost £1,200–£2,000+. Our part load service provides a more affordable option for smaller volumes. Call us for a free, fixed-price quote.",
  },
  {
    question: "What is the difference between a full load and a part load long distance removal?",
    answer:
      "A full load means your belongings fill the entire removal van, which travels directly to your new address. A part load means your belongings share van space with another customer's goods travelling in the same direction — reducing your cost significantly. JMC Removals offers both options. Part load is ideal for studio flats, 1-bedroom properties or anyone with a smaller volume of belongings.",
  },
  {
    question: "Is my furniture insured during a long distance move?",
    answer:
      "Yes. JMC Removals carries comprehensive goods in transit insurance covering your belongings throughout loading, transport and unloading — regardless of the distance travelled. If you have high-value items, let us know when requesting your quote.",
  },
  {
    question: "How long does a long distance removal take?",
    answer:
      "This depends on the distance and starting time. A move from Warrington to London (approximately 190 miles) typically involves a full day's travel. For very long distances (such as Scotland), we may complete the move over two days, with an overnight stop. We'll give you a clear timeline when you book.",
  },
  {
    question: "Can you pack our belongings for a long distance move?",
    answer:
      "Yes, our professional packing service is particularly recommended for long distance moves, where belongings spend more time in transit. Our team packs all items using appropriate materials — furniture blankets, bubble wrap, specialist boxes — to ensure everything arrives safely regardless of distance.",
  },
  {
    question: "Do you do long distance removals from Warrington to Scotland?",
    answer:
      "Yes. We regularly carry out removals from Warrington to Scotland, including Edinburgh, Glasgow and Aberdeen. These moves typically take two days. We'll plan your move carefully, including overnight logistics, to ensure everything runs smoothly.",
  },
  {
    question: "Can you move us from elsewhere in the UK to Warrington?",
    answer:
      "Yes. We cover moves in both directions — from Warrington to anywhere in the UK, and from anywhere in the UK to Warrington and Cheshire. Call us to discuss your specific requirements and we'll provide a detailed quote.",
  },
];

const howToSteps = [
  {
    name: "Request a Quote",
    text: "Call +44 7438 447286 or fill in our online form with your collection address in Warrington and delivery address. Mention any large or specialist items.",
  },
  {
    name: "Receive a Fixed-Price Quote",
    text: "We provide a clear, all-inclusive quote covering loading, transport, tolls and unloading. No hidden fees.",
  },
  {
    name: "Confirm Your Moving Date",
    text: "Book your date. We recommend booking 4–6 weeks ahead for long distance moves, especially if packing is required.",
  },
  {
    name: "Optional Pre-Move Survey",
    text: "For larger homes or complex moves, we can arrange a free home visit to assess exactly what's involved.",
  },
  {
    name: "Moving Day",
    text: "Our team arrives early, loads everything carefully and drives directly to your new home. You receive updates en route.",
  },
];

const breadcrumbs = [{ label: "Long Distance Removals", href: "/long-distance-removals" }];

export default function LongDistanceRemovalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Long Distance Removals Warrington", description: "Professional long distance house removals from Warrington to anywhere in the UK. Full loads and part loads available. Fully insured, family-owned removal company with over 15 years of experience.", url: `${SITE_URL}/long-distance-removals`, areaServed: "Warrington", serviceType: "Long Distance Removal", minPrice: "800" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Long Distance Removals", url: `${SITE_URL}/long-distance-removals` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Long Distance Removals Warrington | UK-Wide Removals | JMC Removals", description: "Long distance removals from Warrington to anywhere in the UK. Full and part load options. Professional, fully insured, family-owned. Free quotes.", url: `${SITE_URL}/long-distance-removals` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema(howToSteps, "How to Book a Long Distance Removal from Warrington")) }} />

      <ServicePageHero
        badge="Long Distance Removals Warrington"
        title="Long Distance Removals from "
        titleHighlight="Warrington"
        description="Moving from Warrington to London, Birmingham, Edinburgh or anywhere else in the UK? JMC Removals provides professional, fully insured long distance house removals with competitive fixed-price quotes."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Long Distance Removals from Warrington</h2>
                <p>
                  JMC Removals is Warrington&apos;s trusted provider of long distance house removals. Whether you&apos;re moving to London, Birmingham, Leeds, Cardiff, Scotland or anywhere across the UK, our professional team manages your move from loading through to final delivery with the same care we bring to every local move.
                </p>
                <p>
                  As a family-owned business with over 15 years of experience, we understand that long distance moves carry extra responsibility. Your belongings spend more time in transit, covering more miles. Every item is protected using professional furniture blankets, stretch wrap and specialist packing materials designed for long-distance transport.
                </p>

                <h3>Full Load vs Part Load — Which Is Right for You?</h3>
                <p>
                  <strong>Full load removals</strong> are ideal for 2-bedroom properties and larger, where your belongings fill an entire Luton or larger van. The van travels directly from your current address in Warrington to your new home, with no additional stops.
                </p>
                <p>
                  <strong>Part load removals</strong> are the cost-effective option for smaller volumes — studio flats, 1-bedroom properties, students or anyone who doesn&apos;t need an entire van. Your belongings share van space with another customer&apos;s goods travelling in the same direction. See our dedicated{" "}
                  <Link href="/part-load-removals" className="text-brand-600 hover:underline">part load removals page</Link>{" "}
                  for more information.
                </p>

                <h3>Destinations We Cover from Warrington</h3>
                <ul>
                  <li><strong>London &amp; the South East</strong> — approximately 190 miles, typically a full day's move</li>
                  <li><strong>Birmingham &amp; the Midlands</strong> — approximately 100 miles, half-day to full-day move</li>
                  <li><strong>Wolverhampton &amp; the Black Country</strong> — approximately 80 miles via the M6; we partner with <a href="https://getrapidremovals.co.uk/" className="text-brand-600 hover:underline" target="_blank" rel="noreferrer">Get Rapid Removals</a> for local assistance at the Wolverhampton end — see our <Link href="/partners" className="text-brand-600 hover:underline">trusted partners page</Link></li>
                  <li><strong>Leeds &amp; Yorkshire</strong> — approximately 65 miles, typically a half-day move</li>
                  <li><strong>Edinburgh &amp; Scotland</strong> — approximately 230 miles, typically a two-day move</li>
                  <li><strong>Cardiff &amp; Wales</strong> — approximately 130 miles, typically a full-day move</li>
                  <li><strong>Bristol &amp; the South West</strong> — approximately 180 miles, typically a full-day move</li>
                  <li>All other UK destinations — call us for a specific quote</li>
                </ul>

                <h3>What Our Long Distance Removal Service Includes</h3>
                <ul>
                  <li>Full professional loading by an experienced removal team</li>
                  <li>Furniture protection — blankets, stretch wrap and specialist materials</li>
                  <li>Dismantling and reassembly of beds and flat-pack furniture</li>
                  <li>Direct transport to your new home (full load) or shared service (part load)</li>
                  <li>Unloading and room-by-room placement</li>
                  <li>Comprehensive goods in transit insurance</li>
                  <li>Optional professional{" "}
                    <Link href="/packing-service" className="text-brand-600 hover:underline">packing service</Link>{" "}
                    using quality packing materials
                  </li>
                </ul>

                <h3>Long Distance Pricing Guide</h3>
                <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 my-4">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Route (from Warrington)</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">2-Bed House</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">3-Bed House</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { route: "To Birmingham",        two: "£600–£900",    three: "£900–£1,400" },
                        { route: "To Leeds",             two: "£450–£700",    three: "£700–£1,100" },
                        { route: "To London",            two: "£800–£1,200",  three: "£1,200–£2,000" },
                        { route: "To Cardiff",           two: "£700–£1,000",  three: "£1,000–£1,600" },
                        { route: "To Edinburgh",         two: "£900–£1,400",  three: "£1,400–£2,200" },
                      ].map(({ route, two, three }) => (
                        <tr key={route} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900 font-medium">{route}</td>
                          <td className="px-4 py-3 text-gray-600">{two}</td>
                          <td className="px-4 py-3 text-gray-600">{three}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="px-4 py-2 text-xs text-gray-400 bg-gray-50 border-t border-gray-100">
                    *Indicative prices. Final price depends on exact volume, access and additional services. Contact us for a precise quote.
                  </p>
                </div>

                <h3>Moving Into Warrington from Elsewhere?</h3>
                <p>
                  We also carry out removals in the opposite direction — bringing people into <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>, <Link href="/lymm-removals" className="text-brand-600 hover:underline">Lymm</Link>, <Link href="/stockton-heath-removals" className="text-brand-600 hover:underline">Stockton Heath</Link> and the wider Cheshire area from anywhere in the UK. Whether you&apos;re relocating for work, moving closer to family or coming to study, we cover both directions.
                </p>

                <h3>Why Choose JMC Removals for Your Long Distance Move?</h3>
                <ul>
                  <li>Over 15 years of removal experience across the North West and UK</li>
                  <li>Family-owned — personal service, direct communication</li>
                  <li>Fully insured — comprehensive goods in transit insurance</li>
                  <li>Fixed-price quotes — no hidden charges on moving day</li>
                  <li>Available 7 days a week, including bank holidays</li>
                  <li>Part load options available for cost savings</li>
                </ul>

                {/* Related services */}
                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-6">
                  {[
                    { label: "House Removals Warrington", href: "/house-removals", desc: "Full domestic removals service" },
                    { label: "Part Load Removals", href: "/part-load-removals", desc: "Cost-effective for smaller volumes" },
                    { label: "Packing Service", href: "/packing-service", desc: "Professional packing for long distance moves" },
                    { label: "Furniture Removals", href: "/furniture-removals", desc: "Specialist large item handling" },
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
                    alt="JMC Removals fleet ready for long distance removals from Warrington"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-1">Long Distance Quote</h3>
                  <p className="text-xs text-gray-500 mb-4">Fixed prices, no hidden fees.</p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <Link href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Online Quote Form
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">We Cover</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["London & South East", "Birmingham & Midlands", "Leeds & Yorkshire", "Edinburgh & Scotland", "Cardiff & Wales", "Bristol & South West", "All UK destinations"].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Local Areas</h3>
                  <ul className="space-y-1 text-sm text-brand-600">
                    {[
                      { label: "Warrington Removals", href: "/warrington-removals" },
                      { label: "Lymm Removals", href: "/lymm-removals" },
                      { label: "Stockton Heath Removals", href: "/stockton-heath-removals" },
                      { label: "Runcorn Removals", href: "/runcorn-removals" },
                    ].map((a) => (
                      <li key={a.href}>
                        <Link href={a.href} className="hover:underline">{a.label}</Link>
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
      <FAQ faqs={faqs} title="Long Distance Removal FAQs" subtitle="Common questions about our UK-wide removal service from Warrington." />
      <CTA title="Planning a Long Distance Move from Warrington?" subtitle="Get a free, fixed-price quote for your UK removal. Family-owned, fully insured, 7 days a week." />
    </>
  );
}
