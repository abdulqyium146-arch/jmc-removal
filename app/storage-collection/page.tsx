import type { Metadata } from "next";
import Image from "next/image";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Storage Collection Warrington | Storage Pickup & Delivery | JMC Removals",
  description:
    "Storage collection and delivery service in Warrington. JMC Removals picks up your stored belongings from any storage facility and delivers them to your new home. Call 01925 812700 for a free quote.",
  path: "/storage-collection",
  keywords: [
    "storage collection Warrington",
    "storage pickup Warrington",
    "storage delivery Warrington",
    "collect from storage Warrington",
    "storage facility Warrington",
    "storage removals Warrington",
  ],
});

const faqs = [
  {
    question: "What is a storage collection service?",
    answer:
      "Our storage collection service involves collecting your belongings from a storage facility and delivering them to your new or current home. This is ideal when you have goods in storage that need to be moved following a house move, or if your new property is ready and you need your stored items delivered.",
  },
  {
    question: "Which storage facilities do you collect from?",
    answer:
      "We collect from all major self-storage facilities across Warrington, Cheshire, Merseyside and Greater Manchester, including Safestore, Big Yellow, Lok'nStore and many local independent facilities. Just let us know the location and we'll handle the rest.",
  },
  {
    question: "Can I book storage pickup alongside a house move?",
    answer:
      "Yes, many of our customers book a storage collection as part of their house removal. We can collect from storage on the same day or on a separate day, depending on what works best for your move.",
  },
  {
    question: "Do I need to be present at the storage facility?",
    answer:
      "Generally yes, you will need to have access to the storage unit — most facilities require the account holder to be present. However, we can discuss your specific situation and find a solution that works.",
  },
];

const breadcrumbs = [{ label: "Storage Collection", href: "/storage-collection" }];

export default function StorageCollectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Storage Collection", description: "Storage pickup and delivery service in Warrington, Cheshire. We collect your belongings from storage facilities and deliver to your new home across the North West.", url: `${SITE_URL}/storage-collection`, areaServed: "Warrington" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Storage Collection", url: `${SITE_URL}/storage-collection` }])) }} />

      <ServicePageHero
        badge="Storage Collection Warrington"
        title="Storage Pickup & Delivery in "
        titleHighlight="Warrington"
        description="Need your belongings collected from storage? JMC Removals provides a professional storage collection and delivery service across Warrington, Cheshire and the North West. Flexible, reliable and fully insured."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="prose-content max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2>Storage Collection Service in Warrington</h2>
                <p>
                  Moving into a new home when some of your belongings are in storage can create an additional challenge. Our storage collection service simplifies this by collecting your items directly from the storage facility and delivering them straight to your new address.
                </p>

                <h3>How Our Storage Collection Works</h3>
                <ul>
                  <li>We collect your belongings from your chosen storage facility</li>
                  <li>Items are loaded carefully into our removal van</li>
                  <li>Transported safely to your new home or destination</li>
                  <li>Unloaded and placed in the rooms of your choice</li>
                  <li>We can combine storage collection with a house move</li>
                </ul>

                <h3>Storage Facilities We Cover</h3>
                <p>
                  We collect from storage facilities across Warrington, Cheshire, Merseyside and Greater Manchester. Whether your belongings are stored locally in Warrington or further afield in Wigan, Widnes or St Helens, we can arrange collection.
                </p>

                <h3>Combined Storage & House Removal Service</h3>
                <p>
                  If you have a house removal and need items collected from storage on the same day, we can coordinate both services. This avoids the need to make multiple trips and ensures your entire move is managed efficiently by a single, trusted team.
                </p>

                <h3>Putting Belongings into Storage</h3>
                <p>
                  We also offer the reverse service — transporting your belongings to a storage facility. Whether you need to clear a property quickly or are in between homes, we can collect from your property and deliver to your chosen storage unit.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/jmc-removals-luton-van-residential-warrington.webp"
                    alt="JMC Removals Luton van at residential property — storage collection Warrington"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Book Storage Collection</h3>
                  <p className="text-sm text-gray-600 mb-4">Get a free quote for storage pickup and delivery.</p>
                  <a href="tel:01925812700" className="btn-primary w-full justify-center mb-3">01925 812700</a>
                  <a href="/contact" className="btn-secondary w-full justify-center text-sm">Online Quote Form</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={faqs} title="Storage Collection FAQs" subtitle="Common questions about our storage collection and delivery service." />
      <CTA title="Need Your Storage Collected?" subtitle="JMC Removals provides reliable storage pickup and delivery across Warrington and the North West. Get your free quote today." />
    </>
  );
}
