import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL = "https://www.jmcremovals.co.uk";
export const BUSINESS_NAME = "JMC Removals";
export const BUSINESS_PHONE = "01925 812700";
export const BUSINESS_EMAIL = "info@jmcremovals.co.uk";
export const BUSINESS_ADDRESS = {
  street: "15 Jubilee Avenue",
  area: "Padgate",
  city: "Warrington",
  postcode: "WA1 3JY",
  region: "Cheshire",
  country: "England",
  countryCode: "GB",
};

export const SERVICE_AREAS = [
  { name: "Warrington", slug: "warrington-removals", county: "Cheshire" },
  { name: "Wigan", slug: "wigan-removals", county: "Greater Manchester" },
  { name: "Widnes", slug: "widnes-removals", county: "Cheshire" },
  { name: "St Helens", slug: "st-helens-removals", county: "Merseyside" },
  { name: "Northwich", slug: "northwich-removals", county: "Cheshire" },
];

export const SERVICES = [
  {
    name: "House Removals",
    slug: "house-removals",
    description: "Full house removal service across Warrington and the North West",
    icon: "Home",
  },
  {
    name: "Man and Van",
    slug: "man-and-van",
    description: "Affordable man and van hire for smaller moves",
    icon: "Truck",
  },
  {
    name: "House Clearance",
    slug: "house-clearance",
    description: "Professional house clearance service",
    icon: "Package",
  },
  {
    name: "Furniture Removals",
    slug: "furniture-removals",
    description: "Safe and careful furniture removal and transport",
    icon: "Armchair",
  },
  {
    name: "Storage Collection",
    slug: "storage-collection",
    description: "Storage pickup and collection service",
    icon: "Warehouse",
  },
];

export const NAP = {
  name: BUSINESS_NAME,
  phone: BUSINESS_PHONE,
  address: `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.area}, ${BUSINESS_ADDRESS.city}, ${BUSINESS_ADDRESS.postcode}`,
};

export function formatPhoneForTel(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function generateLocalPageSchema(areaName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BUSINESS_NAME} - ${areaName}`,
    description: `Professional removals company serving ${areaName} and surrounding areas. House removals, man and van, house clearance and more.`,
    url: `${SITE_URL}/${slug}`,
    telephone: BUSINESS_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.street,
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.region,
      postalCode: BUSINESS_ADDRESS.postcode,
      addressCountry: BUSINESS_ADDRESS.countryCode,
    },
    areaServed: {
      "@type": "City",
      name: areaName,
    },
  };
}
