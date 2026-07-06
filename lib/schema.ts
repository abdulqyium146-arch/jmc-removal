import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
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

// ─── Primary Organization / LocalBusiness schema ─────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  legalName: "JMC Removals",
  description:
    "JMC Removals is a family-owned and operated removals company based in Warrington, Cheshire, specialising in house removals, domestic removals, furniture removals, house clearances, man and van services, storage collection and part-load removals throughout Warrington and surrounding areas of Cheshire, Merseyside and Greater Manchester.",
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  foundingDate: BUSINESS_FOUNDED,
  slogan: "Stress-Free Removals You Can Trust",
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/android-chrome-512x512.png`,
    contentUrl: `${SITE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
    caption: "JMC Removals logo",
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
    caption: "JMC Removals — House Removals Warrington",
  },
  address: postalAddress,
  geo: geoCoordinates,
  hasMap: `https://maps.google.com/maps?q=${BUSINESS_GEO.latitude},${BUSINESS_GEO.longitude}`,
  openingHoursSpecification,
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Credit Card, Debit Card",
  areaServed: [
    { "@type": "City", name: "Warrington", containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
    { "@type": "City", name: "Wigan",      containedInPlace: { "@type": "AdministrativeArea", name: "Greater Manchester" } },
    { "@type": "City", name: "Widnes",     containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
    { "@type": "City", name: "St Helens",  containedInPlace: { "@type": "AdministrativeArea", name: "Merseyside" } },
    { "@type": "City", name: "Northwich",  containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
    { "@type": "AdministrativeArea", name: "Cheshire" },
    { "@type": "AdministrativeArea", name: "Merseyside" },
    { "@type": "AdministrativeArea", name: "Greater Manchester" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Removal Services Warrington",
    itemListElement: [
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/house-removals#offer`,
        url: `${SITE_URL}/house-removals`,
        itemOffered: {
          "@type": "Service",
          name: "House Removals Warrington",
          description: "Full house removal service including packing, loading, transport and unloading across Warrington and the North West.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Warrington" },
          url: `${SITE_URL}/house-removals`,
        },
      },
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/man-and-van#offer`,
        url: `${SITE_URL}/man-and-van`,
        itemOffered: {
          "@type": "Service",
          name: "Man and Van Warrington",
          description: "Affordable man and van hire in Warrington for smaller moves, single items and student relocations.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Warrington" },
          url: `${SITE_URL}/man-and-van`,
        },
      },
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/house-clearance#offer`,
        url: `${SITE_URL}/house-clearance`,
        itemOffered: {
          "@type": "Service",
          name: "House Clearance Warrington",
          description: "Professional house clearance service for full or partial property clearances including probate and landlord clearances.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Warrington" },
          url: `${SITE_URL}/house-clearance`,
        },
      },
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/furniture-removals#offer`,
        url: `${SITE_URL}/furniture-removals`,
        itemOffered: {
          "@type": "Service",
          name: "Furniture Removals Warrington",
          description: "Safe and careful furniture removal and transport across Warrington, Cheshire and the North West.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Warrington" },
          url: `${SITE_URL}/furniture-removals`,
        },
      },
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/storage-collection#offer`,
        url: `${SITE_URL}/storage-collection`,
        itemOffered: {
          "@type": "Service",
          name: "Storage Collection Warrington",
          description: "Pickup and delivery to and from storage facilities across Warrington and the North West.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Warrington" },
          url: `${SITE_URL}/storage-collection`,
        },
      },
    ],
  },
  aggregateRating,
  review: [
    {
      "@type": "Review",
      "@id": `${SITE_URL}/#review-1`,
      author: { "@type": "Person", name: "Sarah Thompson" },
      datePublished: "2024-11-15",
      reviewBody:
        "Absolutely brilliant service from JMC Removals. The team were professional, careful with our belongings and made moving day stress-free. Would highly recommend to anyone in Warrington.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Review",
      "@id": `${SITE_URL}/#review-2`,
      author: { "@type": "Person", name: "Mark Davies" },
      datePublished: "2024-10-22",
      reviewBody:
        "Used JMC for our house move from Warrington to Wigan. Fantastic family business, very reasonably priced and nothing was too much trouble. Will definitely use again.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Review",
      "@id": `${SITE_URL}/#review-3`,
      author: { "@type": "Person", name: "Emma Clarke" },
      datePublished: "2024-09-08",
      reviewBody:
        "JMC helped us with a house clearance in Warrington and they were excellent. Quick, efficient and very respectful. Great local company — can't recommend enough.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
    },
  ],
  sameAs: [
    SOCIAL_PROFILES.facebook,
    SOCIAL_PROFILES.google,
    `https://www.yell.com/biz/jmc-removals-warrington`,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS_PHONE,
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "en",
    hoursAvailable: openingHoursSpecification,
  },
};

// ─── WebSite schema ───────────────────────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  description:
    "Family-owned removals company in Warrington, Cheshire. House removals, man and van, house clearance and furniture removals across Cheshire, Merseyside and Greater Manchester.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
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
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${service.url}#service`,
  serviceType: service.serviceType ?? service.name,
  name: service.name,
  description: service.description,
  url: service.url,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: service.areaServed },
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
          description: "Free no-obligation quotation. Contact JMC Removals for a competitive, transparent price.",
        },
        eligibleRegion: { "@type": "AdministrativeArea", name: service.areaServed },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    url: service.url,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      description: "Free no-obligation quote. Call +44 7438 447286.",
    },
  },
});

// ─── HowTo schema ─────────────────────────────────────────────────────────────
export const howToSchema = (steps: { name: string; text: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book JMC Removals",
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
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  inLanguage: "en-GB",
});

// ─── LocalBusiness per-area schema ────────────────────────────────────────────
export const localAreaSchema = (areaName: string, slug: string, county: string) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": `${SITE_URL}/${slug}#local`,
  name: `${BUSINESS_NAME} — Removals ${areaName}`,
  description: `Professional removals company serving ${areaName}, ${county}. House removals, man and van, house clearance and furniture removals. Free quotes from JMC Removals.`,
  url: `${SITE_URL}/${slug}`,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  address: postalAddress,
  geo: geoCoordinates,
  openingHoursSpecification,
  aggregateRating,
  areaServed: [
    { "@type": "City",                name: areaName },
    { "@type": "AdministrativeArea",  name: county },
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
  ...(page.breadcrumb
    ? { breadcrumb: breadcrumbSchema(page.breadcrumb) }
    : {}),
});
