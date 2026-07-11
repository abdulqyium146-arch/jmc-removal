import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Phone, Star, CheckCircle2, Truck } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Trusted Removal Partners | JMC Removals Warrington",
  description:
    "JMC Removals partners with trusted local removal companies across the UK. For removals in Wolverhampton and the West Midlands, we recommend Get Rapid Removals — a professional, reliable removal company based in Wolverhampton.",
  path: "/partners",
  keywords: [
    "removal companies wolverhampton",
    "house removal wolverhampton",
    "removal company wolverhampton",
    "wolverhampton removals",
    "removal companies in wolverhampton",
    "moving companies wolverhampton",
    "removals in wolverhampton",
    "JMC Removals partners",
  ],
});

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": "https://getrapidremovals.co.uk/#organization",
  "name": "Get Rapid Removals",
  "url": "https://getrapidremovals.co.uk/",
  "description": "Get Rapid Removals is a professional removal company based in Wolverhampton, providing house removals, man and van, and office removals across Wolverhampton, the West Midlands and Staffordshire.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wolverhampton",
    "addressRegion": "West Midlands",
    "addressCountry": "GB",
  },
  "areaServed": [
    { "@type": "City", "name": "Wolverhampton" },
    { "@type": "AdministrativeArea", "name": "West Midlands" },
    { "@type": "AdministrativeArea", "name": "Staffordshire" },
  ],
  "knowsAbout": [
    "House Removals Wolverhampton",
    "Man and Van Wolverhampton",
    "Office Removals Wolverhampton",
    "Furniture Removals West Midlands",
  ],
  "sameAs": ["https://getrapidremovals.co.uk/"],
};

const partnershipSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/partners#webpage`,
  "name": "Trusted Removal Partners | JMC Removals",
  "url": `${SITE_URL}/partners`,
  "description": "JMC Removals partner network — trusted removal companies for out-of-area moves.",
  "mentions": [
    { "@id": "https://getrapidremovals.co.uk/#organization" },
  ],
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Partners", url: `${SITE_URL}/partners` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Trusted Removal Partners | JMC Removals Warrington", description: "JMC Removals partners with trusted local removal companies across the UK. For Wolverhampton and the West Midlands, we recommend Get Rapid Removals.", url: `${SITE_URL}/partners` })) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-900 py-16 md:py-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-white font-medium">Trusted Partners</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-600/20 border border-brand-500/30 px-3 py-1 text-xs font-semibold text-brand-300 mb-4">
              <Star className="h-3 w-3" />
              JMC Removals Partner Network
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Trusted Removal Partners
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              JMC Removals is based in Warrington, Cheshire. For moves outside our direct operating area,
              we work with a small network of vetted, professional removal companies we trust to deliver
              the same standard of service our own customers expect.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          {/* Why a partner network */}
          <div className="prose-content mb-12">
            <h2>Why JMC Removals Has a Partner Network</h2>
            <p>
              Our core coverage is Warrington, Cheshire and the North West of England. When customers need
              removals in areas we don&apos;t directly serve — or when a long-distance move requires a
              trusted local contact at the other end — we refer them to companies we have personally vetted.
            </p>
            <p>
              Every business in our partner network is independently operated, fully insured and has been
              assessed against the same standards we hold ourselves to: clear pricing, professional handling
              and reliable communication. We do not accept commission for referrals. We recommend these
              businesses because we believe in them.
            </p>
          </div>

          {/* Partner card */}
          <div className="rounded-2xl border-2 border-brand-100 bg-white shadow-xl shadow-gray-100/80 overflow-hidden mb-12">
            {/* Card header */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-brand-200 uppercase tracking-wider">Featured Partner</p>
                  <p className="text-lg font-bold text-white">Get Rapid Removals</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <MapPin className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-semibold text-white">Wolverhampton</span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-5 prose-content">
                  <p>
                    <a
                      href="https://getrapidremovals.co.uk/"
                      className="font-semibold text-brand-600 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Rapid Removals
                    </a>{" "}
                    is our recommended partner for{" "}
                    <a
                      href="https://getrapidremovals.co.uk/"
                      className="text-brand-600 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Wolverhampton removals
                    </a>.
                    Based in the heart of the West Midlands, they provide professional, fully insured
                    house removals, office removals and man and van services throughout Wolverhampton
                    and surrounding areas.
                  </p>

                  <p>
                    For customers moving between Warrington and the West Midlands, Get Rapid Removals
                    are the{" "}
                    <a
                      href="https://getrapidremovals.co.uk/"
                      className="text-brand-600 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      removal company in Wolverhampton
                    </a>{" "}
                    we trust to handle the destination end of the move. Their team brings the same
                    commitment to careful handling and punctuality that our own customers in Warrington
                    rely on.
                  </p>

                  <h3 className="text-base font-bold text-gray-900 !mb-2">Services Offered</h3>
                  <ul className="space-y-1.5 not-prose">
                    {[
                      "House removals Wolverhampton",
                      "Man and van Wolverhampton",
                      "Office removals",
                      "Furniture removals",
                      "Packing service",
                      "Short and long distance moves",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-base font-bold text-gray-900 !mb-2 !mt-5">Areas Covered</h3>
                  <p className="text-sm text-gray-600">
                    Get Rapid Removals cover all{" "}
                    <a
                      href="https://getrapidremovals.co.uk/"
                      className="text-brand-600 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      removal companies in Wolverhampton
                    </a>{" "}
                    service areas including Wolverhampton city centre, Bilston, Wednesfield,
                    Tettenhall, Codsall, Perton, Penn, Finchfield, Wombourne, Sedgley and the wider
                    West Midlands and Staffordshire.
                  </p>
                </div>

                {/* Sidebar CTA */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Need removals in Wolverhampton?</p>
                    <p className="text-xs text-gray-500 mb-4">
                      Contact Get Rapid Removals directly for a free quote on{" "}
                      <a
                        href="https://getrapidremovals.co.uk/"
                        className="text-brand-600 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        moving companies Wolverhampton
                      </a>{" "}
                      services.
                    </p>
                    <a
                      href="https://getrapidremovals.co.uk/"
                      className="btn-primary w-full justify-center text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Get Rapid Removals
                    </a>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Partner Since</p>
                    <p className="text-sm font-bold text-gray-900">2024</p>
                    <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                      Vetted for insurance, professionalism and customer service standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Moving to/from Wolverhampton section */}
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Moving Between Warrington and Wolverhampton?
            </h2>
            <div className="prose-content">
              <p>
                Warrington to Wolverhampton is approximately 80 miles — a common long-distance
                relocation route between the North West and the West Midlands. JMC Removals handles
                the Warrington end of these moves, while our partners at Get Rapid Removals cover{" "}
                <a
                  href="https://getrapidremovals.co.uk/"
                  className="text-brand-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  removals in Wolverhampton
                </a>{" "}
                and the wider West Midlands area.
              </p>
              <p>
                For a full Warrington-to-Wolverhampton move handled by a single team,
                JMC Removals can manage the entire journey under our{" "}
                <Link href="/long-distance-removals" className="text-brand-600 hover:underline">
                  long distance removals service
                </Link>.
                Alternatively, if you only need local assistance at the Wolverhampton end, Get Rapid
                Removals are the{" "}
                <a
                  href="https://getrapidremovals.co.uk/"
                  className="text-brand-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  house removal Wolverhampton
                </a>{" "}
                specialists we recommend without reservation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
              <Link
                href="/long-distance-removals"
                className="block rounded-xl border border-brand-200 bg-white p-4 hover:border-brand-400 hover:bg-brand-50 transition-colors group"
              >
                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">
                  Long Distance Removals from Warrington
                </p>
                <p className="text-xs text-gray-500 mt-1">JMC covers the full UK — including routes to Wolverhampton</p>
              </Link>
              <a
                href="https://getrapidremovals.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-gray-200 bg-white p-4 hover:border-brand-400 hover:bg-brand-50 transition-colors group"
              >
                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">
                  Get Rapid Removals — Wolverhampton
                </p>
                <p className="text-xs text-gray-500 mt-1">Local specialist for all removals in Wolverhampton and the West Midlands</p>
              </a>
            </div>
          </div>

          {/* Become a partner */}
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Are You a Removal Company?</h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto mb-5">
              JMC Removals occasionally accepts new partners in areas outside our direct coverage zone.
              If you&apos;re a professional, insured removal company in an underserved area, get in touch.
            </p>
            <Link href="/contact" className="btn-secondary text-sm py-2.5 px-6">
              Contact JMC Removals
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-brand-600">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need a Removal in Warrington or the North West?
          </h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">
            JMC Removals provides professional house removals, man &amp; van and house clearance across
            Warrington, Cheshire and the North West. Free quotes, 7 days a week.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+447438447286" className="btn-white">
              <Phone className="h-4 w-4" />
              +44 7438 447286
            </a>
            <Link href="/contact" className="btn-outline-white">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
