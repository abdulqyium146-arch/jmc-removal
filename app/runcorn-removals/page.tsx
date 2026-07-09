import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema, localAreaSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle, MapPin, BookOpen } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Removal Company Runcorn | House Removals Runcorn WA7 | JMC Removals",
  description:
    "JMC Removals provides professional house removals, man and van and house clearance in Runcorn WA7. Based just 10 minutes away in Warrington. Free quotes — call +44 7438 447286.",
  path: "/runcorn-removals",
  keywords: [
    "removal company Runcorn",
    "house removals Runcorn",
    "man and van Runcorn",
    "removals Runcorn WA7",
    "house clearance Runcorn",
    "furniture removals Runcorn",
    "removal firm Runcorn",
    "moving company Runcorn",
    "Runcorn removals",
    "Runcorn Old Town removals",
  ],
});

const faqs = [
  {
    question: "How far is JMC Removals from Runcorn?",
    answer:
      "JMC Removals is based in Padgate, Warrington — approximately 10 to 12 miles north of Runcorn town centre. We reach most Runcorn addresses in 15–20 minutes via the Mersey Gateway Bridge (A557) or the Silver Jubilee Bridge. Our proximity means we can offer early starts and same-day availability when needed.",
  },
  {
    question: "Which areas of Runcorn do you cover?",
    answer:
      "We cover all areas of Runcorn including Runcorn Old Town, Halton Village, Windmill Hill, Murdishaw, Castlefields, Sandymoor, Brookvale, Weston, Palacefields, Norton, Manor Park, Heath Road and Hallwood Park. We serve the entire WA7 postcode area.",
  },
  {
    question: "How much do house removals cost in Runcorn?",
    answer:
      "Removal costs in Runcorn depend on property size, volume of belongings and access at both addresses. As a guide: a 1-bedroom flat within Runcorn starts from around £250–£350; a 3-bedroom house removal from approximately £450–£650; and a 4–5 bedroom property from £700 upwards. We provide free, detailed quotes — call +44 7438 447286.",
  },
  {
    question: "Do you do house clearances in Runcorn?",
    answer:
      "Yes, JMC Removals provides full and partial house clearances across Runcorn including probate clearances, landlord clearances and general property clearances. We are fully licensed waste carriers and approach bereavement clearances with sensitivity. We donate usable items to local charities wherever possible.",
  },
  {
    question: "What postcodes in Runcorn do you cover?",
    answer:
      "We cover all WA7 postcodes in Runcorn, including WA7 1, WA7 2, WA7 3, WA7 4, WA7 5 and WA7 6. If you're unsure whether your specific postcode is covered, call us on +44 7438 447286 and we'll confirm.",
  },
  {
    question: "Do you move furniture or single items in Runcorn?",
    answer:
      "Yes, our man and van service is ideal for single-item moves, sofa deliveries and smaller collections across Runcorn. We collect from furniture shops, auction houses and private sellers across Halton and deliver to your Runcorn address. We also move pianos — please mention this when requesting your quote.",
  },
  {
    question: "Can you move from Runcorn to another part of the North West?",
    answer:
      "Absolutely. We regularly complete moves between Runcorn and Warrington, Widnes, St Helens, Wigan, Northwich and across Greater Manchester, Merseyside and Cheshire. We can also carry out long-distance UK moves — just let us know your destination when requesting a quote.",
  },
  {
    question: "Do you offer weekend removals in Runcorn?",
    answer:
      "Yes, we operate 7 days a week including Saturdays and Sundays. Weekend moves are popular in Runcorn — we recommend booking in advance to secure your preferred date, especially around month-end periods when completion dates cluster.",
  },
  {
    question: "Is parking an issue for removal vans in Runcorn?",
    answer:
      "Some parts of Runcorn — particularly terraced streets in Runcorn Old Town and certain new town estates — can have limited parking for large vehicles. Our team is experienced in managing access logistics and will advise on whether any temporary parking arrangements are needed ahead of your move day.",
  },
  {
    question: "Do you offer a packing service in Runcorn?",
    answer:
      "Yes, we offer a professional packing service as an optional add-on to any Runcorn removal. Our team can pack all or selected rooms using quality materials, or supply boxes and packing materials for you to pack at your own pace. Fragile items and antiques receive extra care and protection.",
  },
];

const breadcrumbs = [{ label: "Removals Runcorn", href: "/runcorn-removals" }];

const allServices = [
  { label: "House Removals", href: "/house-removals" },
  { label: "Man & Van", href: "/man-and-van" },
  { label: "House Clearance", href: "/house-clearance" },
  { label: "Furniture Removals", href: "/furniture-removals" },
  { label: "Storage Collection", href: "/storage-collection" },
];

const blogLinks = [
  { label: "Moving House Checklist", href: "/blog/moving-house-checklist" },
  { label: "How Much Do Removals Cost?", href: "/blog/how-much-do-removals-cost" },
  { label: "Expert Packing Tips", href: "/blog/packing-tips-house-move" },
  { label: "Man & Van vs Removal Company", href: "/blog/man-and-van-vs-removal-company" },
];

export default function RuncornRemovalsPage() {
  const url = `${SITE_URL}/runcorn-removals`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Removal Company Runcorn | JMC Removals", description: "Professional house removals, man and van and house clearance in Runcorn WA7. Based in Warrington — 10 minutes from Runcorn. Free quotes.", url, breadcrumb: [{ name: "Home", url: SITE_URL }, { name: "Removals Runcorn", url }] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localAreaSchema("Runcorn", "runcorn-removals", "Cheshire")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Removals Runcorn", description: "Professional removal company serving Runcorn WA7, Cheshire. House removals, man and van, house clearance and furniture removals across Halton and the North West.", url, areaServed: "Runcorn", serviceType: "Removal Service" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Removals Runcorn", url }])) }} />

      <ServicePageHero
        badge="Removal Company Runcorn WA7"
        title="Reliable Removals in "
        titleHighlight="Runcorn"
        description="JMC Removals provides professional house removals, man and van hire and house clearance across Runcorn and Halton. Based in Warrington — just minutes from Runcorn via the Mersey Gateway Bridge."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Removal Company in Runcorn</h2>
                <p>
                  If you&apos;re looking for a reliable, trusted removal company in Runcorn, JMC Removals is ideally placed to help. Based in <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link> — just 10 to 12 miles north of Runcorn via the Mersey Gateway Bridge — we provide fast, professional removal services across the whole of Runcorn and the surrounding Halton Borough area.
                </p>
                <p>
                  We&apos;re a family-owned and operated removal company with over 15 years of experience helping families and individuals move home across Cheshire, Merseyside and Greater Manchester. Runcorn is one of the areas we serve most regularly — our team knows the road layouts, the estates, the access challenges and the local quirks that come with moving in Runcorn WA7.
                </p>
                <p>
                  Whether you&apos;re moving within Runcorn, relocating from Runcorn to <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>, <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link> or <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>, or moving into Runcorn from elsewhere in the North West — our experienced, fully insured team will handle your move with the same care and professionalism we bring to every job.
                </p>

                <h3>Our Removal Services in Runcorn</h3>
                <ul>
                  <li>
                    <Link href="/house-removals" className="text-brand-600 hover:underline">House removals in Runcorn</Link> — full domestic removal service for all property sizes, from flats to large detached homes across WA7
                  </li>
                  <li>
                    <Link href="/man-and-van" className="text-brand-600 hover:underline">Man and van Runcorn</Link> — affordable option for smaller moves, single items, flat moves and student relocations
                  </li>
                  <li>
                    <Link href="/house-clearance" className="text-brand-600 hover:underline">House clearance Runcorn</Link> — full and partial property clearances including probate, landlord and estate clearances in Halton
                  </li>
                  <li>
                    <Link href="/furniture-removals" className="text-brand-600 hover:underline">Furniture removals Runcorn</Link> — single items, sofas, pianos and antique furniture moved carefully
                  </li>
                  <li>
                    <Link href="/storage-collection" className="text-brand-600 hover:underline">Storage collection Runcorn</Link> — collect from or deliver to storage facilities across Halton and Cheshire
                  </li>
                </ul>

                <h3>Areas of Runcorn We Serve</h3>
                <p>
                  Our team covers every part of Runcorn and Halton including all WA7 postcodes. We regularly move customers to and from:
                </p>
                <ul>
                  <li><strong>Runcorn Old Town</strong> — terraced streets and Victorian housing near the waterfront and Bridgewater Canal. Our team is familiar with the narrower access roads in WA7 1 and WA7 2.</li>
                  <li><strong>Halton Village</strong> — the historic area near Halton Castle, with a mix of older and newer housing.</li>
                  <li><strong>Windmill Hill</strong> — one of Runcorn&apos;s largest residential estates with predominantly semi-detached and detached properties.</li>
                  <li><strong>Murdishaw</strong> — a new town estate with a mix of housing types, accessed off the expressway corridor.</li>
                  <li><strong>Castlefields</strong> — a popular residential area close to the Mersey with good road links.</li>
                  <li><strong>Sandymoor</strong> — modern housing development to the east of Runcorn with easy access via the A557.</li>
                  <li><strong>Brookvale</strong> — residential area with a mixture of social and private housing.</li>
                  <li><strong>Weston</strong> — village-feel area on the southern edge of Runcorn with larger detached properties.</li>
                  <li><strong>Palacefields</strong> — estate housing to the north-east of Runcorn town centre.</li>
                  <li><strong>Norton</strong> — mixed residential area east of Runcorn town, well connected by the A533.</li>
                  <li><strong>Manor Park &amp; Hallwood Park</strong> — modern developments near Halton Lea with straightforward van access.</li>
                </ul>

                <h3>Moving in Runcorn: Local Knowledge That Matters</h3>
                <p>
                  Runcorn is unlike most North West towns. Built as a &apos;new town&apos; in the 1960s and 1970s, it was planned around a distinctive figure-of-eight expressway road layout and a dedicated busway corridor. Many of its residential estates were intentionally designed to separate pedestrian and vehicle traffic — meaning some areas have indirect road access, narrow estate roads, or restricted turning points for large vehicles.
                </p>
                <p>
                  For a removal team unfamiliar with Runcorn, this can create real difficulties on moving day. Our crew is experienced in Runcorn&apos;s road network — from the main arterial routes (A557 Mersey Gateway, A533, A56) to the estate-level access roads in Murdishaw, Castlefields and Palacefields. We assess vehicle access at both your current and new address before moving day, so there are no surprises.
                </p>
                <p>
                  We travel to Runcorn via the <strong>Mersey Gateway Bridge</strong> — the quickest direct route from our Warrington depot — arriving within 15–20 minutes. We can also route via the <strong>Silver Jubilee Bridge</strong> where it better suits your pickup or delivery address.
                </p>

                <h3>House Clearance in Runcorn</h3>
                <p>
                  JMC Removals is one of the most trusted house clearance companies serving Runcorn and Halton. We provide full and partial property clearances for homeowners, landlords, letting agents, solicitors and executors.
                </p>
                <p>
                  Our team handles <Link href="/house-clearance" className="text-brand-600 hover:underline">probate clearances</Link> — including properties cleared following a bereavement — with the sensitivity and professionalism that difficult situations require. We are fully licensed waste carriers and work hard to divert items from landfill, donating usable furniture and household goods to local charities wherever possible.
                </p>
                <p>
                  Runcorn landlords and letting agents can rely on us for fast turnaround clearances between tenancies. We offer same-day and next-day availability for urgent jobs and can provide written confirmation of clearance work completed.
                </p>

                <h3>Runcorn Removal Prices: A Practical Guide</h3>
                <p>
                  Removal costs in Runcorn depend on property size, the volume of items, access at both properties and any additional services. As a general guide:
                </p>
                <ul>
                  <li><strong>1-bedroom flat (within Runcorn)</strong> — from approximately £250–£350</li>
                  <li><strong>2-bedroom house move (local or Runcorn to Warrington)</strong> — from approximately £350–£500</li>
                  <li><strong>3-bedroom house removal</strong> — from approximately £450–£650</li>
                  <li><strong>4–5 bedroom property</strong> — from approximately £700 upwards</li>
                  <li><strong>Man and van (single item or small load)</strong> — from approximately £80–£150 per hour</li>
                </ul>
                <p>
                  These are indicative figures only. We always provide a free, transparent quote before any work begins with no hidden fees. See our full <Link href="/blog/how-much-do-removals-cost" className="text-brand-600 hover:underline">Runcorn removal cost guide</Link> or call us on <a href="tel:+447438447286" className="text-brand-600 hover:underline">+44 7438 447286</a> for a personalised quote.
                </p>

                <h3>Why Choose JMC Removals for Your Runcorn Move?</h3>
                <div className="grid sm:grid-cols-2 gap-3 not-prose mt-4 mb-6">
                  {[
                    "Family-owned — not a franchise",
                    "Fully insured for removal and clearance",
                    "Free no-obligation quotes",
                    "7 days a week availability",
                    "Local knowledge of Runcorn estates",
                    "Transparent pricing — no hidden fees",
                    "10–12 miles from Runcorn WA7",
                    "5-star rated by 127+ customers",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-brand-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <h3>Nearby Areas We Also Cover</h3>
                <p>
                  As well as Runcorn, we provide removal services to and from:{" "}
                  <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>,{" "}
                  <Link href="/warrington-removals" className="text-brand-600 hover:underline">Warrington</Link>,{" "}
                  <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link>,{" "}
                  <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>,{" "}
                  <Link href="/northwich-removals" className="text-brand-600 hover:underline">Northwich</Link>,{" "}
                  Frodsham, Helsby, Ellesmere Port and across the wider North West. We cover the entire North West region — if you&apos;re unsure whether we cover your area, just give us a call.
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { label: "House Removals", href: "/house-removals", desc: "Full property moves" },
                    { label: "House Clearance Runcorn", href: "/house-clearance", desc: "Property clearances" },
                    { label: "Man & Van Runcorn", href: "/man-and-van", desc: "Smaller moves & items" },
                    { label: "Removal Cost Guide", href: "/blog/how-much-do-removals-cost", desc: "Price guide 2025" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="block rounded-xl border border-gray-200 bg-gray-50 p-3 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">{s.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/jmc-removals-branded-van-cheshire.webp"
                    alt="JMC Removals branded van — removal company serving Runcorn WA7"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Free Quote for Runcorn</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Call us or fill in our online form for a free, no-obligation removal quote in Runcorn.
                  </p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">+44 7438 447286</a>
                  <Link href="/contact" className="btn-secondary w-full justify-center text-sm">Online Quote Form</Link>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Services in Runcorn</h3>
                  <ul className="space-y-2">
                    {allServices.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                          {s.label} Runcorn
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 text-brand-500" />
                    <h3 className="text-sm font-bold text-gray-900">Useful Moving Guides</h3>
                  </div>
                  <ul className="space-y-2">
                    {blogLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-brand-600 hover:underline leading-snug block">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Based in Warrington</p>
                    <p className="text-xs text-gray-500">15 Jubilee Avenue, Padgate, Warrington, WA1 3JY</p>
                    <p className="text-xs text-gray-400 mt-1">~10 minutes to Runcorn WA7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ
        faqs={faqs}
        title="Runcorn Removals — Frequently Asked Questions"
        subtitle="Common questions about our removal services in Runcorn and the Halton area."
      />
      <CTA
        title="Need a Removal Company in Runcorn?"
        subtitle="JMC Removals provides professional, affordable removals across Runcorn WA7 and the whole of Halton. Call for your free quote today."
      />
    </>
  );
}
