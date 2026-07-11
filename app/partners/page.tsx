import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Phone, Star, CheckCircle2, Truck, ChevronDown } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Removal Companies Wolverhampton | JMC Removals Trusted Partner",
  description:
    "Looking for removal companies in Wolverhampton? JMC Removals recommends Get Rapid Removals — a professional, fully insured removal company covering all WV postcodes. House removals, man and van and office removals across Wolverhampton, West Midlands and Staffordshire.",
  path: "/partners",
  keywords: [
    "removal companies wolverhampton",
    "house removal wolverhampton",
    "removal company wolverhampton",
    "wolverhampton removals",
    "removal companies in wolverhampton",
    "moving companies wolverhampton",
    "removals in wolverhampton",
    "wolverhampton removal company",
    "man and van wolverhampton",
    "house removals wolverhampton west midlands",
  ],
});

// ── Get Rapid Removals — full entity schema ────────────────────────────────────
const partnerSchema = {
  "@context": "https://schema.org",
  "@type": ["MovingCompany", "LocalBusiness"],
  "@id": "https://getrapidremovals.co.uk/#organization",
  "name": "Get Rapid Removals",
  "alternateName": "Get Rapid Removals Wolverhampton",
  "url": "https://getrapidremovals.co.uk/",
  "description": "Get Rapid Removals is a professional removal company based in Wolverhampton, West Midlands. They provide fully insured house removals, man and van, office removals, furniture removals and packing services across all WV postcodes, the Black Country, Staffordshire and the wider West Midlands.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wolverhampton",
    "addressRegion": "West Midlands",
    "postalCode": "WV1",
    "addressCountry": "GB",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.5862",
    "longitude": "-2.1272",
  },
  "areaServed": [
    { "@type": "City", "name": "Wolverhampton", "sameAs": "https://www.wikidata.org/wiki/Q42448" },
    { "@type": "AdministrativeArea", "name": "West Midlands" },
    { "@type": "AdministrativeArea", "name": "Staffordshire" },
    { "@type": "AdministrativeArea", "name": "Black Country" },
    { "@type": "City", "name": "Bilston" },
    { "@type": "City", "name": "Wednesfield" },
    { "@type": "City", "name": "Willenhall" },
    { "@type": "City", "name": "Tettenhall" },
    { "@type": "City", "name": "Penn" },
    { "@type": "City", "name": "Codsall" },
    { "@type": "City", "name": "Wombourne" },
    { "@type": "City", "name": "Sedgley" },
    {
      "@type": "DefinedRegion",
      "name": "Wolverhampton WV Postcode Area",
      "postalCodePrefix": "WV",
      "addressCountry": "GB",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wolverhampton Removal Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Removals Wolverhampton", "serviceType": "House Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Man and Van Wolverhampton", "serviceType": "Man and Van Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Removals Wolverhampton", "serviceType": "Office Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Removals Wolverhampton", "serviceType": "Furniture Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packing Service Wolverhampton", "serviceType": "Packing Service" } },
    ],
  },
  "knowsAbout": [
    "House Removals Wolverhampton",
    "Man and Van Wolverhampton",
    "Office Removals Wolverhampton",
    "Furniture Removals West Midlands",
    "Removal Companies Wolverhampton",
    "Moving Companies Wolverhampton",
    "WV1 Removals",
    "WV2 Removals",
    "WV3 Removals",
    "WV4 Removals",
    "WV6 Removals",
    "WV11 Removals Wednesfield",
    "WV14 Removals Bilston",
    "Black Country Removals",
  ],
  "sameAs": ["https://getrapidremovals.co.uk/"],
};

// ── FAQ schema — entity-dense Wolverhampton Q&A ────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas of Wolverhampton does Get Rapid Removals cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Get Rapid Removals cover all WV postcodes across Wolverhampton, including WV1 (city centre), WV2 (Blakenhall, Fighting Cocks), WV3 (Penn, Tettenhall, Finchfield), WV4 (Penn Fields), WV5 (Wombourne), WV6 (Tettenhall, Perton), WV8 (Codsall, Bilbrook), WV10 (Fordhouses, Low Hill, Heath Town), WV11 (Wednesfield, Ashmore Park), WV12 (Short Heath, Willenhall), WV13 (Willenhall), and WV14 (Bilston, Bradley). They also cover surrounding areas in the Black Country, South Staffordshire and the West Midlands.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Warrington from Wolverhampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Warrington to Wolverhampton is approximately 75–80 miles by road. The most direct route follows the M6 southbound from Junction 21 (Warrington) to Junction 10A (Wolverhampton) and then the M54 to the A449, entering Wolverhampton from the north-west. Typical driving time is 1 hour 15 minutes to 1 hour 30 minutes depending on traffic, particularly around Junction 10 and 10A of the M6 and the M6 Toll interchange.",
      },
    },
    {
      "@type": "Question",
      "name": "What removal services does Get Rapid Removals provide in Wolverhampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Get Rapid Removals provide a full range of removal services across Wolverhampton and the West Midlands: house removals, man and van hire, office and commercial removals, furniture removals, professional packing services, and both short-distance and long-distance moves. They are fully insured and cover all residential and commercial property types across the WV postcode area.",
      },
    },
    {
      "@type": "Question",
      "name": "Do Get Rapid Removals cover Wednesfield, Bilston and Willenhall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Get Rapid Removals cover Wednesfield (WV11), Bilston (WV14), Willenhall (WV12 and WV13), and all other areas within the Metropolitan Borough of Wolverhampton. These areas form part of the Black Country — a densely populated urban area in the West Midlands that also includes Dudley, Walsall and Sandwell.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cheapest way to move house from Warrington to Wolverhampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most cost-effective option for a Warrington-to-Wolverhampton move is a part load removal service, where your belongings share van space with another customer's goods travelling in the same direction along the M6 corridor. JMC Removals offers part load removals from Warrington. For the Wolverhampton end, Get Rapid Removals can assist with local collection or delivery. A full load house removal (typically from £600 for a 2-bed property) is recommended if your belongings fill a Luton van or larger.",
      },
    },
    {
      "@type": "Question",
      "name": "Which is the best removal company in Wolverhampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JMC Removals recommends Get Rapid Removals as the trusted removal company in Wolverhampton. They are a professional, fully insured removal business serving all WV postcodes and the surrounding West Midlands area. For moves that begin or end in Warrington or Cheshire, JMC Removals and Get Rapid Removals work together to ensure a seamless service at both ends.",
      },
    },
  ],
};

// ── Page-level WebPage + mentions relationship ─────────────────────────────────
const partnershipSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/partners#webpage`,
  "name": "Removal Companies Wolverhampton | JMC Removals Trusted Partner",
  "url": `${SITE_URL}/partners`,
  "description": "JMC Removals partner network — trusted removal companies for out-of-area moves. Wolverhampton partner: Get Rapid Removals.",
  "about": [
    { "@id": "https://getrapidremovals.co.uk/#organization" },
    { "@type": "City", "name": "Wolverhampton", "sameAs": "https://www.wikidata.org/wiki/Q42448" },
  ],
  "mentions": [
    { "@id": "https://getrapidremovals.co.uk/#organization" },
    { "@type": "City", "name": "Wolverhampton" },
    { "@type": "AdministrativeArea", "name": "West Midlands" },
    { "@type": "AdministrativeArea", "name": "Black Country" },
    { "@type": "City", "name": "Bilston" },
    { "@type": "City", "name": "Wednesfield" },
    { "@type": "City", "name": "Willenhall" },
    { "@type": "Road", "name": "M6 Motorway" },
    { "@type": "Road", "name": "M54 Motorway" },
  ],
};

const wolverhamptonPostcodes = [
  { code: "WV1", areas: "City Centre, St Peter's, Ring Road" },
  { code: "WV2", areas: "Blakenhall, Fighting Cocks, Parkfields" },
  { code: "WV3", areas: "Penn, Merridale, Finchfield, Compton" },
  { code: "WV4", areas: "Penn Fields, Blakenhall, Parkfield" },
  { code: "WV5", areas: "Wombourne, Himley, Wall Heath" },
  { code: "WV6", areas: "Tettenhall, Perton, Compton Road" },
  { code: "WV8", areas: "Codsall, Bilbrook, Boningale" },
  { code: "WV9", areas: "Featherstone, Brewood" },
  { code: "WV10", areas: "Fordhouses, Low Hill, Heath Town" },
  { code: "WV11", areas: "Wednesfield, Ashmore Park, New Cross" },
  { code: "WV12", areas: "Short Heath, Willenhall North" },
  { code: "WV13", areas: "Willenhall, Darlaston" },
  { code: "WV14", areas: "Bilston, Bradley, Deepfields" },
];

const faqs = [
  {
    q: "What areas of Wolverhampton does Get Rapid Removals cover?",
    a: "Get Rapid Removals cover all WV postcodes — from WV1 (city centre) through to WV14 (Bilston), including Wednesfield (WV11), Tettenhall (WV3/WV6), Penn (WV3/WV4), Codsall (WV8), Wombourne (WV5) and all areas of the Metropolitan Borough of Wolverhampton. They also serve surrounding areas in South Staffordshire and the Black Country.",
  },
  {
    q: "How far is Warrington from Wolverhampton?",
    a: "Warrington to Wolverhampton is approximately 75–80 miles by road. The standard route follows the M6 southbound from Junction 21 (Warrington) to Junction 10A, then the M54 west into Wolverhampton via the A449. Driving time is typically 1 hour 15 minutes to 1 hour 30 minutes.",
  },
  {
    q: "What removal services does Get Rapid Removals provide in Wolverhampton?",
    a: "Get Rapid Removals provide house removals, man and van hire, office and commercial removals, furniture removals, packing services and long-distance moves across all WV postcodes and the wider West Midlands.",
  },
  {
    q: "Do Get Rapid Removals cover Wednesfield, Bilston and Willenhall?",
    a: "Yes. Get Rapid Removals cover Wednesfield (WV11), Bilston (WV14), Willenhall (WV12, WV13) and all areas within the City of Wolverhampton Council boundary and the wider Black Country.",
  },
  {
    q: "What is the cheapest way to move from Warrington to Wolverhampton?",
    a: "A part load removal along the M6 corridor is the most cost-effective option. JMC Removals handles the Warrington end via our part load service; Get Rapid Removals can assist with local collection or delivery in Wolverhampton. Contact both companies for a combined quote.",
  },
  {
    q: "Which is the best removal company in Wolverhampton?",
    a: "JMC Removals recommends Get Rapid Removals as our trusted removal company partner in Wolverhampton. They are professional, fully insured and cover all WV postcodes. Visit getrapidremovals.co.uk for a free quote.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Partners", url: `${SITE_URL}/partners` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Removal Companies Wolverhampton | JMC Removals Trusted Partner", description: "Looking for removal companies in Wolverhampton? JMC Removals recommends Get Rapid Removals — covering all WV postcodes, West Midlands and Staffordshire.", url: `${SITE_URL}/partners` })) }} />

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
          <div className="rounded-2xl border-2 border-brand-100 bg-white shadow-xl shadow-gray-100/80 overflow-hidden mb-8">
            {/* Card header */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-brand-200 uppercase tracking-wider">Featured Partner — Wolverhampton</p>
                  <p className="text-lg font-bold text-white">Get Rapid Removals</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <MapPin className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-semibold text-white">WV1 · West Midlands</span>
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
                    Based in the City of Wolverhampton, West Midlands, they provide professional, fully insured
                    house removals, office removals and man and van services across all WV postcodes
                    and the wider Black Country and Staffordshire.
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
                    we trust to handle the destination end of the move. Whether you&apos;re moving to
                    Wolverhampton city centre (WV1), Penn (WV3), Wednesfield (WV11) or Bilston (WV14),
                    their team brings the same commitment to careful handling and punctuality that our
                    customers in Warrington rely on.
                  </p>

                  <h3 className="text-base font-bold text-gray-900 !mb-2">Services Offered in Wolverhampton</h3>
                  <ul className="space-y-1.5 not-prose">
                    {[
                      "House removals Wolverhampton — all WV postcodes",
                      "Man and van Wolverhampton — from WV1 to WV14",
                      "Office and commercial removals — city centre & business parks",
                      "Furniture removals — including large and specialist items",
                      "Packing service — full and partial packing",
                      "Short-distance moves — within the Metropolitan Borough",
                      "Long-distance moves — Wolverhampton to anywhere in the UK",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-base font-bold text-gray-900 !mb-2 !mt-5">Areas Covered in Wolverhampton</h3>
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
                    service areas: Wolverhampton city centre, Bilston, Wednesfield,
                    Tettenhall, Codsall, Perton, Penn, Finchfield, Compton, Wombourne, Sedgley,
                    Willenhall, Fordhouses, Low Hill, Heath Town and the wider
                    West Midlands and South Staffordshire.
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
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Location</p>
                    <p className="text-sm font-bold text-gray-900">Wolverhampton, WV1</p>
                    <p className="text-xs text-gray-500 mt-1">West Midlands, England</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-4 mb-1">Partner Since</p>
                    <p className="text-sm font-bold text-gray-900">2024</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Vetted for insurance, professionalism and customer service standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Postcode coverage grid */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-12">
            <h2 className="text-base font-bold text-gray-900 mb-1">Wolverhampton Postcode Coverage</h2>
            <p className="text-xs text-gray-500 mb-5">
              Get Rapid Removals cover all WV postcodes across the City of Wolverhampton
              and South Staffordshire.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {wolverhamptonPostcodes.map(({ code, areas }) => (
                <div key={code} className="rounded-lg border border-gray-200 bg-white px-3 py-2.5">
                  <p className="text-xs font-bold text-brand-700">{code}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{areas}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Also covering DY1–DY4 (Dudley), WS1–WS2 (Walsall) and surrounding West Midlands postcodes.
            </p>
          </div>

          {/* Moving to/from Wolverhampton section */}
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Moving Between Warrington and Wolverhampton?
            </h2>
            <div className="prose-content">
              <p>
                Warrington (WA1–WA5) to Wolverhampton (WV1–WV14) is approximately 75–80 miles via
                the M6 southbound from Junction 21 (Warrington South) to Junction 10A, then the M54
                motorway west into Wolverhampton via the A449 Stafford Road. Typical journey time
                is 1 hour 15 to 1 hour 30 minutes. This M6 corridor is one of the primary relocation
                routes between the North West of England and the West Midlands.
              </p>
              <p>
                JMC Removals handles the Warrington, Cheshire and North West end of these moves, while
                our partners at Get Rapid Removals cover{" "}
                <a
                  href="https://getrapidremovals.co.uk/"
                  className="text-brand-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  removals in Wolverhampton
                </a>{" "}
                and the wider West Midlands area. For a full Warrington-to-Wolverhampton move handled
                by a single team, JMC Removals can manage the entire journey under our{" "}
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
                <p className="text-xs text-gray-500 mt-1">JMC covers the full UK — including routes to Wolverhampton via M6/M54</p>
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

          {/* About Wolverhampton — geo entity block */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-5">About Wolverhampton</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Official name</span>
                  <span className="text-gray-600">City of Wolverhampton</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Region</span>
                  <span className="text-gray-600">West Midlands, England</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Local authority</span>
                  <span className="text-gray-600">City of Wolverhampton Council (Metropolitan Borough)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Population</span>
                  <span className="text-gray-600">Approx. 263,700 (2021 Census)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Postcode area</span>
                  <span className="text-gray-600">WV (WV1–WV16)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Coordinates</span>
                  <span className="text-gray-600">52.5862° N, 2.1272° W</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Major roads</span>
                  <span className="text-gray-600">M6, M54, A449, A41, A460, A4123 (Black Country New Road)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Rail</span>
                  <span className="text-gray-600">Wolverhampton Railway Station — Avanti West Coast, CrossCountry, West Midlands Trains</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Key landmarks</span>
                  <span className="text-gray-600">Molineux Stadium (Wolves FC), University of Wolverhampton, New Cross Hospital, West Midlands Metro</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">Nearby cities</span>
                  <span className="text-gray-600">Birmingham (15 mi), Walsall (8 mi), Dudley (5 mi), Stafford (18 mi)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-700 w-32 shrink-0">From Warrington</span>
                  <span className="text-gray-600">~80 miles via M6/M54 · approx. 1hr 20min</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-5 leading-relaxed">
              Wolverhampton is the largest city in the Black Country — a densely urban area of the West Midlands
              historically associated with manufacturing and metalworking. The city forms part of the
              West Midlands Combined Authority (WMCA) alongside Birmingham, Coventry, Walsall, Dudley,
              Sandwell, Solihull and Coventry.
            </p>
          </div>

          {/* FAQ section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Wolverhampton Removals — Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500 mb-6">Common questions about removal companies in Wolverhampton and moving between Warrington and the West Midlands.</p>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm font-semibold text-gray-900">{q}</span>
                    <ChevronDown className="h-4 w-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-4 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-200 bg-white">
                    {a}
                  </div>
                </details>
              ))}
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
