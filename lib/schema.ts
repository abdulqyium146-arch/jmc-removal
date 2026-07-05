import { SITE_URL, BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_ADDRESS, BUSINESS_EMAIL } from "./utils";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  legalName: "JMC Removals",
  description:
    "JMC Removals is a family-owned and operated removals company based in Warrington, Cheshire, specialising in house removals, domestic removals, furniture removals, house clearances, man and van services, storage pickups and part-load removals throughout Warrington and surrounding areas.",
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  foundingDate: "2010",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_ADDRESS.street,
    addressLocality: BUSINESS_ADDRESS.city,
    addressRegion: BUSINESS_ADDRESS.region,
    postalCode: BUSINESS_ADDRESS.postcode,
    addressCountry: BUSINESS_ADDRESS.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4013,
    longitude: -2.5697,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Card",
  areaServed: [
    { "@type": "City", name: "Warrington" },
    { "@type": "City", name: "Wigan" },
    { "@type": "City", name: "Widnes" },
    { "@type": "City", name: "St Helens" },
    { "@type": "City", name: "Northwich" },
    { "@type": "AdministrativeArea", name: "Cheshire" },
    { "@type": "AdministrativeArea", name: "Merseyside" },
    { "@type": "AdministrativeArea", name: "Greater Manchester" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Removal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Removals",
          description: "Full house removal service including packing, loading, transport and unloading.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Man and Van",
          description: "Affordable man and van hire for smaller moves, single items or student relocations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Clearance",
          description: "Professional house clearance service for full or partial property clearances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Removals",
          description: "Safe transportation of furniture items across Warrington and the North West.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storage Collection",
          description: "Pickup and delivery service to and from storage facilities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Part Load Removals",
          description: "Cost-effective part-load removal service sharing van space for smaller moves.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Thompson" },
      datePublished: "2024-11-15",
      reviewBody:
        "Absolutely brilliant service from JMC Removals. The team were professional, careful with our belongings and made moving day stress-free. Would highly recommend to anyone in Warrington.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mark Davies" },
      datePublished: "2024-10-22",
      reviewBody:
        "Used JMC for our house move from Warrington to Wigan. Fantastic family business, very reasonably priced and nothing was too much trouble. Will definitely use again.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Emma Clarke" },
      datePublished: "2024-09-08",
      reviewBody:
        "JMC helped us with a house clearance in Warrington and they were excellent. Quick, efficient and very respectful. Great local company.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/jmcremovals",
    "https://www.google.com/maps/place/JMC+Removals+Warrington",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  description: "Family-owned removals company in Warrington, Cheshire. House removals, man and van, house clearance and more.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-GB",
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

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

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  areaServed: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.name,
  name: service.name,
  description: service.description,
  url: service.url,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: service.areaServed },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      description: "Free quotation available. Contact us for a competitive quote.",
    },
  },
});

export const howToSchema = (steps: { name: string; text: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book JMC Removals",
  description: "Simple steps to book your removal with JMC Removals",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});
