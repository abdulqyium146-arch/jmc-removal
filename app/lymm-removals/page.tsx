import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Lymm | House Removals Lymm WA13 | JMC Removals",
  description:
    "Professional house removals in Lymm, Cheshire WA13. JMC Removals provides careful, specialist removal services across Lymm — expert antique handling and large property experience. Free quotes.",
  path: "/lymm-removals",
  keywords: [
    "removals Lymm",
    "house removals Lymm",
    "removal company Lymm WA13",
    "man and van Lymm Cheshire",
    "Lymm village removals",
    "antique removals Lymm",
  ],
});

const area = {
  name: "Lymm",
  slug: "lymm-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals and specialist furniture services across Lymm, Cheshire WA13. From the historic village centre to the executive properties surrounding Lymm Dam, we serve all of WA13 with care.",
  longDescription: [
    "Lymm is one of Cheshire's most desirable villages — a historic market town built around the picturesque Lymm Dam, with beautiful period buildings in the village centre and a range of executive detached homes in the surrounding lanes and estates. It consistently ranks among the most sought-after places to live in Cheshire.",
    "JMC Removals serves Lymm from our Warrington base, approximately 8 miles via the A56. We provide house removals for all Lymm property types — from the historic cottages and terraces in the village centre to the larger executive and detached homes in the surrounding WA13 postcode.",
    "Lymm properties often call for extra care. Whether because of narrow village lanes, period features, valuable antique furniture or high-specification interiors, our team approaches every Lymm removal with the professionalism and attention to detail the area demands. We carry specialist equipment for moving antiques, pianos and fragile items.",
    "As a family-owned business built on personal reputation, we are proud to be trusted by Lymm residents with some of the most carefully handled moves in the area. Whether you're moving within Lymm, to or from Warrington, Altrincham, Knutsford or further afield, we deliver a premium and personal service.",
  ],
  services: [
    "House removals across Lymm WA13",
    "Specialist antique and fragile item handling",
    "Man and van hire Lymm",
    "House clearances Lymm",
    "Piano removal service",
    "Professional packing for high-value homes",
  ],
  nearbyAreas: ["Warrington", "Appleton", "Grappenhall", "Thelwall", "Altrincham", "Knutsford"],
  faqs: [
    {
      question: "Do you handle antique and high-value furniture in Lymm?",
      answer:
        "Yes, we specialise in handling antique, fragile and high-value furniture — common in Lymm's larger and period properties. We use specialist blankets, tissue wrapping and bespoke protection for all valuable pieces.",
    },
    {
      question: "How much do house removals cost in Lymm?",
      answer:
        "Removal costs vary by property size. A large 4-5 bedroom detached property in Lymm typically starts from around £600–£900. We provide free site surveys and transparent quotes.",
    },
    {
      question: "Can you access narrow lanes in Lymm village?",
      answer:
        "Yes, our team is familiar with Lymm village's narrow lanes and manages vehicle access carefully. We assess access in advance for all properties with potential challenges.",
    },
    {
      question: "Do you move pianos in Lymm?",
      answer:
        "Yes, we move upright and baby grand pianos in Lymm. Please mention your piano when requesting a quote so we can bring the right equipment.",
    },
    {
      question: "Can you move from Lymm to Altrincham or Knutsford?",
      answer:
        "Yes, we regularly move between Lymm and surrounding Cheshire locations including Altrincham, Knutsford, Grappenhall, Appleton and east Cheshire.",
    },
  ],
};

export default function LymmRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
