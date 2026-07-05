import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "House Removals Warrington | Professional Domestic Removals | JMC Removals",
  description:
    "Professional house removals in Warrington and across the North West. JMC Removals provides stress-free domestic removal services for all property sizes. Fully insured, family-owned. Free quotes — call 01925 812700.",
  path: "/house-removals",
  keywords: [
    "house removals Warrington",
    "domestic removals Warrington",
    "house removal company Warrington",
    "removal company Warrington",
    "professional removals Warrington",
    "cheap house removals Warrington",
    "moving company Warrington",
    "house movers Warrington",
    "removals Cheshire",
  ],
});

const faqs = [
  {
    question: "How much does a house removal cost in Warrington?",
    answer:
      "House removal costs in Warrington vary depending on property size, distance and any additional services. A typical 2-bed house move within Warrington starts from around £350. A 3-bed house move costs from approximately £500-£750. We always provide a free, itemised quote so you know exactly what you'll pay.",
  },
  {
    question: "How long does a house move take?",
    answer:
      "A typical 2-bedroom house move takes between 4 and 8 hours, including loading and unloading. A 4-bedroom house may take a full day or even two days. We'll give you an estimated timescale when we provide your quote.",
  },
  {
    question: "Do you offer packing as part of your house removal service?",
    answer:
      "Yes, we offer a full or partial packing service. Our team can professionally pack all or selected items using quality materials. We also supply boxes and packing materials if you prefer to pack yourself.",
  },
  {
    question: "Can you handle piano or antique furniture removals?",
    answer:
      "Yes, we have experience moving pianos, antique furniture, large wardrobes and other awkward or heavy items. Our team uses specialist equipment to move these safely. Please mention any such items when requesting your quote.",
  },
  {
    question: "What areas do you cover for house removals?",
    answer:
      "We cover Warrington, Wigan, Widnes, St Helens, Northwich and the wider Cheshire, Merseyside and Greater Manchester areas. We can also assist with longer UK moves — just get in touch for a quote.",
  },
];

const breadcrumbs = [{ label: "House Removals", href: "/house-removals" }];

export default function HouseRemovalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "House Removals Warrington | JMC Removals", description: "Professional house removals in Warrington. Fully insured, family-owned removal company. Free quotes.", url: `${SITE_URL}/house-removals`, breadcrumb: [{ name: "Home", url: SITE_URL }, { name: "House Removals", url: `${SITE_URL}/house-removals` }] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "House Removals Warrington", description: "Professional house removal service in Warrington, Cheshire and the North West. Full domestic removal service including loading, transport and unloading.", url: `${SITE_URL}/house-removals`, areaServed: "Warrington", serviceType: "House Removal" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "House Removals Warrington", url: `${SITE_URL}/house-removals` }])) }} />

      <ServicePageHero
        badge="House Removals Warrington"
        title="Professional House Removals in "
        titleHighlight="Warrington"
        description="JMC Removals provides a complete, stress-free house removal service across Warrington, Cheshire and the North West. Family-owned, fully insured and trusted by thousands of local customers."
        breadcrumbs={breadcrumbs}
      />

      {/* Main content */}
      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>House Removals in Warrington — What&apos;s Included</h2>
                <p>
                  At JMC Removals, our house removal service is designed to take the stress out of moving. Whether you&apos;re moving across the street or across the county, our experienced team handles every aspect of your move with care and professionalism.
                </p>

                <h3>What Our House Removal Service Includes</h3>
                <ul>
                  <li>Loading all furniture and boxes into our removal van</li>
                  <li>Safe transport to your new property</li>
                  <li>Unloading and placing items in the correct rooms</li>
                  <li>Protective blankets and covers for all furniture</li>
                  <li>Dismantling and reassembly of beds and flat-pack furniture</li>
                  <li>Optional packing service using quality materials</li>
                  <li>Free quotation with no hidden fees</li>
                </ul>

                <h3>Why Families in Warrington Choose JMC Removals</h3>
                <p>
                  We&apos;ve been helping families move across Warrington and the North West for over 15 years. As a family business, we understand that your belongings are precious and that moving day needs to go smoothly. That&apos;s why we treat every move as if we were moving our own family.
                </p>
                <p>
                  Our removal team arrives on time, works efficiently and handles your possessions with the utmost care. We use professional packing materials, furniture blankets and secure loading techniques to ensure everything arrives safely.
                </p>

                <h3>Part Load Removals</h3>
                <p id="part-load">
                  If you&apos;re moving fewer items or working to a budget, our part-load removal service allows you to share van space with another customer&apos;s goods, significantly reducing your moving costs. This is ideal for smaller properties or moves where you don&apos;t need an entire van.
                </p>

                <h3>Domestic Removals Across the North West</h3>
                <p>
                  Our domestic removal service covers Warrington and the wider North West including Wigan, Widnes, St Helens, Northwich, Cheshire, Merseyside and Greater Manchester. For longer-distance moves across the UK, we can provide a competitive quote — just ask.
                </p>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Get a Free Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Call us or fill in our online form for a free, no-obligation house removal quote.
                  </p>
                  <a href="tel:01925812700" className="btn-primary w-full justify-center mb-3">
                    01925 812700
                  </a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                    Online Quote Form
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">What We Cover</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Warrington", "Wigan", "Widnes", "St Helens", "Northwich", "Cheshire", "Merseyside", "Greater Manchester"].map(area => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                        {area}
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
      <FAQ faqs={faqs} title="House Removal FAQs" subtitle="Common questions about our house removal service in Warrington and the North West." />
      <CTA title="Ready to Book Your House Removal?" subtitle="Get your free, no-obligation quote today. We cover Warrington, Wigan, Widnes, St Helens and across the North West." />
    </>
  );
}
