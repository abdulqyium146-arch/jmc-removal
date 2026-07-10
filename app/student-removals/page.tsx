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
  title: "Student Removals Warrington | Affordable Student Moving Service | JMC Removals",
  description:
    "Affordable student removals in Warrington. JMC Removals helps students moving in and out of halls, flats and student accommodation across Warrington, Manchester, Liverpool and the North West. Man and van from £60/hr. Free quotes.",
  path: "/student-removals",
  keywords: [
    "student removals Warrington",
    "student moving Warrington",
    "man and van student Warrington",
    "student flat removals Warrington",
    "university removals Warrington",
    "cheap student removals Warrington",
    "student moving service North West",
    "halls of residence removals Warrington",
  ],
});

const faqs = [
  {
    question: "How much does a student removal cost in Warrington?",
    answer:
      "Student removals with JMC Removals start from £60 per hour for our man and van service. Most student flat moves take 2–4 hours, making the total cost between £120 and £240. For a fixed-price quote based on your specific move, call us on +44 7438 447286 or use our online form.",
  },
  {
    question: "Can you help me move into or out of student halls in Warrington?",
    answer:
      "Yes, we regularly help students moving into and out of halls of residence and student accommodation in Warrington. We work quickly and efficiently, and can often accommodate early morning or late afternoon move-ins to fit around hall check-in/check-out times.",
  },
  {
    question: "Can you move me from Warrington to university in another city?",
    answer:
      "Yes. JMC Removals provides student removals to and from universities across the North West and wider UK, including Manchester, Liverpool, Salford, Preston and beyond. For longer distances, our part load removal service keeps costs down — you only pay for the van space your belongings use.",
  },
  {
    question: "I only have a few boxes and a bed — is man and van right for me?",
    answer:
      "Yes, our man and van service is the most cost-effective option for students with a small number of belongings. We provide a professional driver and a transit or Luton van. You won't be charged for a full removal crew if you don't need one. We load, transport and unload everything for you.",
  },
  {
    question: "Can you move me at short notice?",
    answer:
      "Yes, we often have same-day and next-day availability for student moves, particularly mid-week. For weekend moves during busy term-start periods (September and January), we recommend booking at least a week ahead as these slots fill quickly.",
  },
  {
    question: "Do you provide packing materials for student moves?",
    answer:
      "Yes, we can supply boxes, bubble wrap, packing tape and wardrobe boxes for an additional charge. We also offer a packing service if you'd prefer our team to pack your belongings for you — ideal if you're short on time before term ends.",
  },
  {
    question: "Can you store my belongings over summer?",
    answer:
      "While we don't operate our own storage facilities, our storage collection service can transport your belongings to and from a local self-storage unit. We work with facilities including Safestore and Lok'nStore in Warrington. Call us to discuss a combined move-and-store solution.",
  },
  {
    question: "Do you cover the University of Chester Warrington campus?",
    answer:
      "Yes. The University of Chester's Warrington campus on Padgate Lane is less than a mile from our Padgate depot — we regularly help students moving in and out of campus accommodation and local student flats in the WA1, WA2 and WA3 postcode areas.",
  },
];

const howToSteps = [
  {
    name: "Call or Request a Quote",
    text: "Call +44 7438 447286 or fill in our online quote form. Tell us your pickup and delivery addresses and a rough idea of what you need to move.",
  },
  {
    name: "Get a Fixed Price",
    text: "We'll give you a clear hourly or fixed-price quote — no hidden charges. Most student moves are priced by the hour.",
  },
  {
    name: "Confirm Your Date",
    text: "Choose your moving date and time. We operate 7 days a week and can often accommodate short notice bookings.",
  },
  {
    name: "We Handle the Rest",
    text: "Our team arrives on time, loads everything carefully and delivers to your new address. You don't have to lift a thing.",
  },
];

const breadcrumbs = [{ label: "Student Removals", href: "/student-removals" }];

export default function StudentRemovalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Student Removals Warrington", description: "Affordable student removal and man and van service in Warrington. JMC Removals helps students move in and out of halls, flats and university accommodation across Warrington and the North West.", url: `${SITE_URL}/student-removals`, areaServed: "Warrington", serviceType: "Student Removal Service", minPrice: "60" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Student Removals", url: `${SITE_URL}/student-removals` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Student Removals Warrington | Affordable Student Moving Service | JMC Removals", description: "Affordable student removals in Warrington. Man and van from £60/hr for students moving in and out of halls, flats and university accommodation.", url: `${SITE_URL}/student-removals` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema(howToSteps, "How to Book a Student Removal in Warrington")) }} />

      <ServicePageHero
        badge="Student Removals Warrington"
        title="Affordable Student Removals in "
        titleHighlight="Warrington"
        description="Moving in or out of student accommodation in Warrington? JMC Removals provides a fast, affordable and friendly student moving service. Man and van from £60/hr, available 7 days a week."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Student Removals in Warrington</h2>
                <p>
                  JMC Removals is Warrington&apos;s local student moving specialist. Whether you&apos;re moving into your first student flat, relocating between houses for a new academic year or heading home at the end of term, our affordable{" "}
                  <Link href="/man-and-van" className="text-brand-600 hover:underline">man and van service</Link>{" "}
                  makes student moves simple and stress-free.
                </p>
                <p>
                  Student moves rarely require a full removal crew. Our man and van service is specifically designed for the type of moves students need — a professional driver, the right-sized van, and someone to help you load and unload safely. Most student flat moves are completed in 2–4 hours.
                </p>

                <h3>Who We Help</h3>
                <ul>
                  <li>Students moving into or out of halls of residence</li>
                  <li>Students moving between shared houses or flats</li>
                  <li>Students at the <strong>University of Chester Warrington campus</strong> (Padgate Lane, WA1)</li>
                  <li>Students at <strong>Warrington &amp; Vale Royal College</strong></li>
                  <li>Students moving to or from Manchester, Liverpool, Salford, Preston or further afield</li>
                  <li>Students needing end-of-term moves at short notice</li>
                </ul>

                <h3>Why Students Choose JMC Removals</h3>
                <p>
                  We understand student budgets. Our man and van service starts from £60 per hour — transparent, fair pricing with no nasty surprises. We operate 7 days a week and are available at short notice, which matters when term ends and you need to be out by a specific time.
                </p>
                <p>
                  Unlike national removal companies, we&apos;re a local Warrington business. Our depot is on Jubilee Avenue in <Link href="/padgate-removals" className="text-brand-600 hover:underline">Padgate</Link> — less than a mile from the University of Chester Warrington campus. That proximity means no callout delays and a team that knows every student accommodation area in and around town.
                </p>

                <h3>What We Move for Students</h3>
                <ul>
                  <li>Beds, mattresses and bedroom furniture</li>
                  <li>Sofas, chairs and living room items</li>
                  <li>Boxes, bags and laundry bags</li>
                  <li>Wardrobes and clothing rails</li>
                  <li>Desks and shelving</li>
                  <li>Kitchen appliances and white goods</li>
                  <li>Computers, monitors and electronics</li>
                  <li>Bicycles</li>
                </ul>

                <h3>Moving Out of Warrington for University?</h3>
                <p>
                  If you&apos;re heading to a university in another city, JMC Removals can help. Our{" "}
                  <Link href="/part-load-removals" className="text-brand-600 hover:underline">part load removal service</Link>{" "}
                  is ideal for students with limited belongings — you share van space with another customer&apos;s goods and pay only for the space your items occupy. This can cut the cost of a long-distance student move significantly. We cover the whole of the UK.
                </p>
                <p>
                  Alternatively, our{" "}
                  <Link href="/storage-collection" className="text-brand-600 hover:underline">storage collection service</Link>{" "}
                  allows you to move belongings into a local self-storage unit over summer and collect them again when the new term begins — avoiding multiple long-distance trips.
                </p>

                <h3>Student Removal Pricing</h3>
                <p>
                  Our student man and van rates start from <strong>£60 per hour</strong> for one man and a transit van. Two-man teams are available from <strong>£80 per hour</strong> for heavier or bulkier loads. Most student flat moves within Warrington cost between <strong>£120 and £250</strong> all-in.
                </p>
                <p>
                  We always provide a free, no-obligation quote before you commit to anything. Call{" "}
                  <a href="tel:+447438447286" className="text-brand-600 hover:underline">+44 7438 447286</a>{" "}
                  or fill in our{" "}
                  <Link href="/contact" className="text-brand-600 hover:underline">online quote form</Link>.
                </p>

                <h3>Student Moves Across Warrington</h3>
                <p>
                  We cover all Warrington postcode areas for student removals, including <Link href="/padgate-removals" className="text-brand-600 hover:underline">Padgate (WA1)</Link>, <Link href="/orford-removals" className="text-brand-600 hover:underline">Orford (WA2)</Link>, <Link href="/birchwood-removals" className="text-brand-600 hover:underline">Birchwood (WA3)</Link>, <Link href="/great-sankey-removals" className="text-brand-600 hover:underline">Great Sankey (WA5)</Link>, <Link href="/fearnhead-removals" className="text-brand-600 hover:underline">Fearnhead</Link> and all surrounding areas. We also move students to and from <Link href="/wigan-removals" className="text-brand-600 hover:underline">Wigan</Link>, <Link href="/widnes-removals" className="text-brand-600 hover:underline">Widnes</Link>, <Link href="/st-helens-removals" className="text-brand-600 hover:underline">St Helens</Link> and beyond.
                </p>

                {/* Related services */}
                <div className="not-prose grid sm:grid-cols-2 gap-3 mt-6">
                  {[
                    { label: "Man and Van Warrington", href: "/man-and-van", desc: "Most popular option for student moves" },
                    { label: "Part Load Removals", href: "/part-load-removals", desc: "Cost-effective for longer distance moves" },
                    { label: "Storage Collection", href: "/storage-collection", desc: "Store over summer, collect at start of term" },
                    { label: "Packing Service", href: "/packing-service", desc: "We pack everything if you're short on time" },
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
                    src="/images/jmc-removals-branded-van-cheshire.webp"
                    alt="JMC Removals man and van in Warrington — student moving service"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-1">Student Removal Quote</h3>
                  <p className="text-xs text-gray-500 mb-4">Man &amp; van from £60/hr. No hidden fees.</p>
                  <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">
                    +44 7438 447286
                  </a>
                  <Link href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Online Quote Form
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Student Rates</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "1 man + transit van", value: "From £60/hr" },
                      { label: "2 men + Luton van", value: "From £80/hr" },
                      { label: "Half day (4 hrs)", value: "From £220" },
                      { label: "Full day (8 hrs)", value: "From £380" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between">
                        <span className="text-gray-600">{label}</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">*Indicative rates. Call for a precise quote.</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Nearby Areas</h3>
                  <ul className="space-y-1 text-sm text-brand-600">
                    {[
                      { label: "Padgate Removals", href: "/padgate-removals" },
                      { label: "Orford Removals", href: "/orford-removals" },
                      { label: "Birchwood Removals", href: "/birchwood-removals" },
                      { label: "Warrington Removals", href: "/warrington-removals" },
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
      <FAQ faqs={faqs} title="Student Removal FAQs" subtitle="Common questions about our student moving service in Warrington." />
      <CTA title="Need a Student Removal in Warrington?" subtitle="Call JMC Removals for a fast, affordable student moving quote. Man and van from £60/hr, 7 days a week." />
    </>
  );
}
