import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Canonical domain — no trailing slash, no www
export const SITE_URL = "https://jmcremovals.co.uk";
export const SITE_NAME = "JMC Removals";
export const BUSINESS_NAME = "JMC Removals";
export const BUSINESS_PHONE = "+44 7438 447286";
export const BUSINESS_PHONE_RAW = "+447438447286";
export const BUSINESS_EMAIL = "info@jmcremovals.co.uk";
export const BUSINESS_FOUNDED = "2010";

export const BUSINESS_ADDRESS = {
  street: "15 Jubilee Avenue",
  area: "Padgate",
  city: "Warrington",
  postcode: "WA1 3JY",
  region: "Cheshire",
  county: "Cheshire",
  country: "England",
  countryCode: "GB",
};

// Precise lat/lng for Padgate, Warrington WA1 3JY
export const BUSINESS_GEO = {
  latitude: 53.4013,
  longitude: -2.5697,
};

export const BUSINESS_HOURS = [
  { days: "Monday – Friday", open: "07:00", close: "19:00", schema: ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
  { days: "Saturday", open: "08:00", close: "17:00", schema: ["Saturday"] },
  { days: "Sunday", open: "09:00", close: "15:00", schema: ["Sunday"] },
];

export const SERVICE_AREAS = [
  { name: "Warrington",    slug: "warrington-removals",      county: "Cheshire" },
  { name: "Wigan",         slug: "wigan-removals",           county: "Greater Manchester" },
  { name: "Widnes",        slug: "widnes-removals",          county: "Cheshire" },
  { name: "St Helens",     slug: "st-helens-removals",       county: "Merseyside" },
  { name: "Northwich",     slug: "northwich-removals",       county: "Cheshire" },
  { name: "Runcorn",       slug: "runcorn-removals",         county: "Cheshire" },
  { name: "Stockton Heath",slug: "stockton-heath-removals",  county: "Cheshire" },
  { name: "Latchford",     slug: "latchford-removals",       county: "Cheshire" },
  { name: "Great Sankey",  slug: "great-sankey-removals",    county: "Cheshire" },
  { name: "Penketh",       slug: "penketh-removals",         county: "Cheshire" },
  { name: "Birchwood",     slug: "birchwood-removals",       county: "Cheshire" },
  { name: "Padgate",       slug: "padgate-removals",         county: "Cheshire" },
  { name: "Orford",        slug: "orford-removals",          county: "Cheshire" },
  { name: "Woolston",      slug: "woolston-removals",        county: "Cheshire" },
  { name: "Fearnhead",     slug: "fearnhead-removals",       county: "Cheshire" },
  { name: "Lymm",          slug: "lymm-removals",            county: "Cheshire" },
  { name: "Culcheth",      slug: "culcheth-removals",        county: "Cheshire" },
  { name: "Appleton",      slug: "appleton-removals",        county: "Cheshire" },
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

// Social & external profiles
export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/jmcremovals",
  google: "https://g.page/jmcremovals-warrington",
};

export function formatPhoneForTel(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

