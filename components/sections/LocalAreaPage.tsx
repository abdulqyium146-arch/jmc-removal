import ServicePageHero from "@/components/sections/ServicePageHero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { faqSchema, serviceSchema, breadcrumbSchema, localAreaSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle, MapPin } from "lucide-react";

interface LocalAreaPageProps {
  area: {
    name: string;
    slug: string;
    county: string;
    description: string;
    longDescription: string[];
    services: string[];
    nearbyAreas: string[];
    faqs: { question: string; answer: string }[];
  };
}

const allServices = [
  { label: "House Removals", href: "/house-removals" },
  { label: "Man & Van", href: "/man-and-van" },
  { label: "House Clearance", href: "/house-clearance" },
  { label: "Furniture Removals", href: "/furniture-removals" },
  { label: "Storage Collection", href: "/storage-collection" },
];

export default function LocalAreaPage({ area }: LocalAreaPageProps) {
  const breadcrumbs = [{ label: `Removals ${area.name}`, href: `/${area.slug}` }];
  const url = `${SITE_URL}/${area.slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: `Removals ${area.name} | JMC Removals`, description: area.description, url, breadcrumb: [{ name: "Home", url: SITE_URL }, { name: `Removals ${area.name}`, url }] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localAreaSchema(area.name, area.slug, area.county)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(area.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Removals ${area.name}`, description: area.description, url, areaServed: area.name, serviceType: "Removal Service" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: `Removals ${area.name}`, url }])) }} />

      <ServicePageHero
        badge={`JMC Removals ${area.name}`}
        title={`Removals `}
        titleHighlight={area.name}
        description={area.description}
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-content">
              <h2>Removal Company in {area.name}</h2>
              {area.longDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <h3>Our Services in {area.name}</h3>
              <ul>
                {area.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <h3>Nearby Areas We Also Cover</h3>
              <p>
                As well as {area.name}, we regularly provide removal services to and from:{" "}
                {area.nearbyAreas.join(", ")}. We cover the entire North West region — if you&apos;re unsure whether we cover your area, just give us a call.
              </p>

              <h3>Why Choose JMC Removals in {area.name}?</h3>
              <div className="grid sm:grid-cols-2 gap-3 not-prose mt-4">
                {[
                  "Family-owned business",
                  "Fully insured",
                  "Free no-obligation quotes",
                  "Available 7 days a week",
                  "Experienced professional team",
                  "Transparent, honest pricing",
                  "Local knowledge",
                  "5-star customer reviews",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-brand-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Get a Free Quote for {area.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Call us or fill in our online form for a free, no-obligation removal quote in {area.name}.
                </p>
                <a href="tel:+447438447286" className="btn-primary w-full justify-center mb-3">+44 7438 447286</a>
                <a href="/contact" className="btn-secondary w-full justify-center text-sm">Online Quote Form</a>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Services in {area.name}</h3>
                <ul className="space-y-2">
                  {allServices.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                        {s.label} {area.name}
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
                  <p className="text-xs text-gray-400 mt-1">{area.county}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ
        faqs={area.faqs}
        title={`Removals ${area.name} — FAQs`}
        subtitle={`Common questions about our removal services in ${area.name} and the surrounding area.`}
      />
      <CTA
        title={`Need a Removal Company in ${area.name}?`}
        subtitle={`JMC Removals provides professional, affordable removal services across ${area.name} and ${area.county}. Get your free quote today.`}
      />
    </>
  );
}
