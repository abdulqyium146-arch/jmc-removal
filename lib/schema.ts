import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_ADDRESS,
  BUSINESS_GEO,
  BUSINESS_EMAIL,
  BUSINESS_FOUNDED,
  BUSINESS_HOURS,
  SOCIAL_PROFILES,
} from "./utils";

// ─── Opening hours in Schema.org format ───────────────────────────────────────
const openingHoursSpecification = BUSINESS_HOURS.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.schema,
  opens: h.open,
  closes: h.close,
}));

// ─── Shared address block ──────────────────────────────────────────────────────
const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS_ADDRESS.street,
  addressLocality: BUSINESS_ADDRESS.city,
  addressRegion: BUSINESS_ADDRESS.region,
  postalCode: BUSINESS_ADDRESS.postcode,
  addressCountry: BUSINESS_ADDRESS.countryCode,
};

// ─── GeoCoordinates ───────────────────────────────────────────────────────────
const geoCoordinates = {
  "@type": "GeoCoordinates",
  latitude: BUSINESS_GEO.latitude,
  longitude: BUSINESS_GEO.longitude,
};

// ─── Aggregate Rating ─────────────────────────────────────────────────────────
const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "127",
  bestRating: "5",
  worstRating: "1",
};

// ─── All 10 service offers ─────────────────────────────────────────────────────
const allServiceOffers = [
  {
    slug: "house-removals",
    name: "House Removals Warrington",
    description: "Full house removal service including packing, loading, transport and unloading across Warrington and the North West.",
  },
  {
    slug: "man-and-van",
    name: "Man and Van Warrington",
    description: "Affordable man and van hire in Warrington for smaller moves, single items, student relocations and eBay/marketplace collections.",
  },
  {
    slug: "house-clearance",
    name: "House Clearance Warrington",
    description: "Professional house clearance for full or partial property clearances including probate, landlord and estate clearances across Warrington.",
  },
  {
    slug: "furniture-removals",
    name: "Furniture Removals Warrington",
    description: "Safe and careful furniture removal and transport of single items, antiques, pianos and all furniture types across Cheshire and the North West.",
  },
  {
    slug: "storage-collection",
    name: "Storage Collection Warrington",
    description: "Pickup and delivery to and from self-storage facilities including Safestore, Big Yellow and Lok'nStore across Warrington and the North West.",
  },
  {
    slug: "office-removals",
    name: "Office Removals Warrington",
    description: "Professional office and commercial removals in Warrington handling IT equipment, office furniture and business relocations with minimal downtime.",
  },
  {
    slug: "packing-service",
    name: "Packing Service Warrington",
    description: "Full or partial professional packing service using quality materials. Fragile items, antiques and specialist goods handled with expert care.",
  },
  {
    slug: "piano-removal",
    name: "Piano Removal Warrington",
    description: "Specialist piano removal for upright and baby grand pianos across Warrington and Cheshire. Trained crew, specialist equipment and full insurance.",
  },
  {
    slug: "end-of-tenancy-clearance",
    name: "End of Tenancy Clearance Warrington",
    description: "Fast end of tenancy and landlord clearance service in Warrington. Licensed waste carrier with quick turnaround for letting agents and landlords.",
  },
  {
    slug: "part-load-removals",
    name: "Part Load Removals Warrington",
    description: "Cost-effective part load removal service for smaller moves in Warrington. Pay only for the van space you use — ideal for studio flats and students.",
  },
].map((s) => ({
  "@type": "Offer",
  "@id": `${SITE_URL}/${s.slug}#offer`,
  url: `${SITE_URL}/${s.slug}`,
  itemOffered: {
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: "Cheshire" },
    url: `${SITE_URL}/${s.slug}`,
  },
}));

// ─── All service area entities ─────────────────────────────────────────────────
const allAreaServed = [
  { "@type": "City", name: "Warrington",    containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Wigan",         containedInPlace: { "@type": "AdministrativeArea", name: "Greater Manchester" } },
  { "@type": "City", name: "Widnes",        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "St Helens",     containedInPlace: { "@type": "AdministrativeArea", name: "Merseyside" } },
  { "@type": "City", name: "Northwich",     containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Runcorn",       containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Stockton Heath",containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Latchford",     containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Great Sankey",  containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Penketh",       containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Birchwood",     containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Padgate",       containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Orford",        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Woolston",      containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Fearnhead",     containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Lymm",          containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Culcheth",      containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "City", name: "Appleton",      containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
  { "@type": "AdministrativeArea", name: "Cheshire" },
  { "@type": "AdministrativeArea", name: "Merseyside" },
  { "@type": "AdministrativeArea", name: "Greater Manchester" },
];

// ─── All 6 reviews (matching Testimonials component) ──────────────────────────
const allReviews = [
  {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-1`,
    author: { "@type": "Person", name: "Sarah Thompson" },
    datePublished: "2024-11-15",
    reviewBody: "Absolutely brilliant service from JMC Removals. The team were professional, careful with our belongings and made moving day stress-free. They wrapped all our furniture and even helped reassemble some pieces. Would highly recommend to anyone in Warrington.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-2`,
    author: { "@type": "Person", name: "Mark Davies" },
    datePublished: "2024-10-22",
    reviewBody: "Used JMC for our house move from Warrington to Wigan. Fantastic family business, very reasonably priced and nothing was too much trouble. They arrived on time, worked quickly and were careful with everything. Will definitely use again.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-3`,
    author: { "@type": "Person", name: "Emma Clarke" },
    datePublished: "2024-09-08",
    reviewBody: "JMC helped us with a house clearance in Warrington following a bereavement and they were excellent. Quick, efficient and very respectful given the circumstances. They dealt with everything professionally. Great local company, can't recommend enough.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-4`,
    author: { "@type": "Person", name: "James Wilson" },
    datePublished: "2024-08-14",
    reviewBody: "Needed a man and van for a flat move from Warrington to Widnes. JMC gave me the best quote and turned up exactly when they said they would. Careful with my stuff, friendly lads and quick. Brilliant service for the price.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-5`,
    author: { "@type": "Person", name: "Linda Pearce" },
    datePublished: "2024-07-03",
    reviewBody: "I've used JMC twice now — once for a full house move and once for some furniture removals. Both times the service was faultless. They're polite, careful and really efficient. As a family business they genuinely go the extra mile.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-6`,
    author: { "@type": "Person", name: "Robert Hughes" },
    datePublished: "2024-06-18",
    reviewBody: "Used JMC Removals for our move from Warrington to Northwich. Everything went perfectly — the team was professional from start to finish. They protected all our furniture, were careful on the stairs and placed everything exactly where we wanted it. Outstanding.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  },
];

// ─── Primary Organization / LocalBusiness schema ─────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  legalName: "JMC Removals",
  description:
    "JMC Removals is a family-owned and operated removals company founded in 2010, based in Padgate, Warrington, Cheshire (WA1 3JY). The company specialises in house removals, domestic removals, man and van hire, furniture removals, piano removals, house clearances, probate clearances, office removals, packing services, part-load removals and storage collection. JMC Removals serves Warrington and the wider North West of England, including Cheshire, Merseyside and Greater Manchester. The company is fully insured, a licensed waste carrier, and has completed thousands of moves across the region since its founding.",
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  foundingDate: BUSINESS_FOUNDED,
  slogan: "Stress-Free Removals You Can Trust",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 10,
  },
  knowsAbout: [
    "House removals",
    "Domestic removals",
    "Man and van hire",
    "Furniture removals",
    "Piano removals",
    "House clearance",
    "Probate clearance",
    "Estate clearance",
    "Landlord clearance",
    "Office removals",
    "Commercial removals",
    "Packing services",
    "Part load removals",
    "Storage collection",
    "End of tenancy clearance",
    "Removals in Warrington",
    "Removals in Cheshire",
    "Removals in Merseyside",
    "Removals in Greater Manchester",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "licence",
      name: "Licensed Waste Carrier",
      recognizedBy: { "@type": "Organization", name: "Environment Agency" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "insurance",
      name: "Comprehensive Removal and Goods in Transit Insurance",
    },
  ],
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/icon.svg`,
    contentUrl: `${SITE_URL}/icon.svg`,
    width: 512,
    height: 512,
    caption: "JMC Removals logo",
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.webp`,
    width: 800,
    height: 600,
    caption: "JMC Removals — House Removals Warrington",
  },
  address: postalAddress,
  geo: geoCoordinates,
  hasMap: `https://maps.google.com/maps?q=${BUSINESS_GEO.latitude},${BUSINESS_GEO.longitude}`,
  openingHoursSpecification,
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Credit Card, Debit Card",
  areaServed: allAreaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Removal and Clearance Services Warrington",
    itemListElement: allServiceOffers,
  },
  aggregateRating,
  review: allReviews,
  sameAs: [
    SOCIAL_PROFILES.facebook,
    SOCIAL_PROFILES.google,
    `https://www.yell.com/biz/jmc-removals-warrington`,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "GB",
      availableLanguage: { "@type": "Language", name: "English" },
      hoursAvailable: openingHoursSpecification,
    },
    {
      "@type": "ContactPoint",
      email: BUSINESS_EMAIL,
      contactType: "sales",
      areaServed: "GB",
      availableLanguage: { "@type": "Language", name: "English" },
    },
  ],
};

// ─── WebSite schema ───────────────────────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  alternateName: "JMC Removals Warrington",
  description:
    "Family-owned removals company in Warrington, Cheshire. House removals, man and van, house clearance, furniture removals, office removals, piano removals, packing services and storage collection across Cheshire, Merseyside and Greater Manchester.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "ReadAction",
    target: [SITE_URL],
  },
};

// ─── BreadcrumbList ───────────────────────────────────────────────────────────
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${items[items.length - 1]?.url ?? SITE_URL}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: {
      "@type": "WebPage",
      "@id": item.url,
      url: item.url,
      name: item.name,
    },
  })),
});

// ─── FAQPage schema ───────────────────────────────────────────────────────────
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// ─── Service schema ───────────────────────────────────────────────────────────
export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  areaServed: string;
  serviceType?: string;
  minPrice?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${service.url}#service`,
  serviceType: service.serviceType ?? service.name,
  name: service.name,
  description: service.description,
  url: service.url,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: service.areaServed },
    { "@type": "AdministrativeArea", name: "Cheshire" },
    { "@type": "AdministrativeArea", name: "Merseyside" },
    { "@type": "AdministrativeArea", name: "Greater Manchester" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: service.name,
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          ...(service.minPrice ? { minPrice: service.minPrice } : {}),
          description: service.minPrice
            ? `From £${service.minPrice}. Free no-obligation quote available.`
            : "Free no-obligation quotation. Contact JMC Removals for a competitive, transparent price.",
        },
        eligibleRegion: { "@type": "AdministrativeArea", name: "North West England" },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    url: service.url,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      ...(service.minPrice ? { minPrice: service.minPrice } : {}),
      description: "Free no-obligation quote. Call +44 7438 447286.",
    },
  },
});

// ─── HowTo schema ─────────────────────────────────────────────────────────────
export const howToSchema = (steps: { name: string; text: string }[], title?: string) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title ?? "How to Book JMC Removals",
  description: "Simple steps to book your removal with JMC Removals in Warrington",
  totalTime: "PT10M",
  tool: [{ "@type": "HowToTool", name: "Phone or online quote form" }],
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
    url: `${SITE_URL}/contact`,
  })),
});

// ─── ItemList schema — all services ────────────────────────────────────────────
export const serviceListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#services`,
  name: "Removal Services by JMC Removals",
  description: "Complete list of removal and clearance services provided by JMC Removals in Warrington, Cheshire.",
  itemListElement: [
    { "@type": "ListItem", position: 1,  name: "House Removals",            url: `${SITE_URL}/house-removals` },
    { "@type": "ListItem", position: 2,  name: "Man and Van",               url: `${SITE_URL}/man-and-van` },
    { "@type": "ListItem", position: 3,  name: "House Clearance",           url: `${SITE_URL}/house-clearance` },
    { "@type": "ListItem", position: 4,  name: "Furniture Removals",        url: `${SITE_URL}/furniture-removals` },
    { "@type": "ListItem", position: 5,  name: "Storage Collection",        url: `${SITE_URL}/storage-collection` },
    { "@type": "ListItem", position: 6,  name: "Office Removals",           url: `${SITE_URL}/office-removals` },
    { "@type": "ListItem", position: 7,  name: "Packing Service",           url: `${SITE_URL}/packing-service` },
    { "@type": "ListItem", position: 8,  name: "Piano Removal",             url: `${SITE_URL}/piano-removal` },
    { "@type": "ListItem", position: 9,  name: "End of Tenancy Clearance",  url: `${SITE_URL}/end-of-tenancy-clearance` },
    { "@type": "ListItem", position: 10, name: "Part Load Removals",        url: `${SITE_URL}/part-load-removals` },
  ],
});

// ─── Article / BlogPosting schema ─────────────────────────────────────────────
export const articleSchema = (article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${SITE_URL}/blog/${article.slug}#article`,
  headline: article.title,
  description: article.description,
  url: `${SITE_URL}/blog/${article.slug}`,
  datePublished: article.datePublished,
  dateModified: article.dateModified ?? article.datePublished,
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${article.slug}`,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.webp`,
    width: 800,
    height: 600,
  },
  inLanguage: "en-GB",
});

// ─── LocalBusiness per-area schema ────────────────────────────────────────────
export const localAreaSchema = (areaName: string, slug: string, county: string) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": `${SITE_URL}/${slug}#local`,
  name: `${BUSINESS_NAME} — Removals ${areaName}`,
  description: `Professional removals company serving ${areaName}, ${county}. House removals, man and van, house clearance, furniture removals, piano removals and packing services. Free quotes from JMC Removals.`,
  url: `${SITE_URL}/${slug}`,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  address: postalAddress,
  geo: geoCoordinates,
  openingHoursSpecification,
  aggregateRating,
  areaServed: [
    { "@type": "City",               name: areaName },
    { "@type": "AdministrativeArea", name: county },
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  sameAs: [SOCIAL_PROFILES.facebook, SOCIAL_PROFILES.google],
});

// ─── WebPage schema ───────────────────────────────────────────────────────────
export const webPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; url: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${page.url}#webpage`,
  url: page.url,
  name: page.name,
  description: page.description,
  inLanguage: "en-GB",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
});
