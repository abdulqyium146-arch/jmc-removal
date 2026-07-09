import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Birchwood Warrington | House Removals Birchwood WA3 | JMC Removals",
  description:
    "Professional house removals and man and van in Birchwood, Warrington WA3. JMC Removals serves Birchwood, Gorse Covert, Risley and all WA3 areas. Free quotes — call +44 7438 447286.",
  path: "/birchwood-removals",
  keywords: [
    "removals Birchwood",
    "house removals Birchwood Warrington",
    "removal company Birchwood WA3",
    "man and van Birchwood",
    "Risley removals",
    "Gorse Covert removals",
  ],
});

const area = {
  name: "Birchwood",
  slug: "birchwood-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van and house clearance across Birchwood, Warrington. We cover all Birchwood neighbourhoods — Gorse Covert, Locking Stumps, Oakwood, Risley and all of WA3.",
  longDescription: [
    "Birchwood is a large planned residential area to the east of Warrington, developed from the 1970s as part of Warrington New Town. It features a wide range of housing across its many neighbourhoods — Gorse Covert, Locking Stumps, Oakwood, Risley and Birchwood Park — from estate semis and terraces to modern private developments alongside the Birchwood business and science park.",
    "JMC Removals serves Birchwood frequently across all its residential areas. Our team knows the road layout across WA3 6 and WA3 7 well — including the main roads like Birchwood Way and Dewhurst Road, and the estate roads within each neighbourhood. We know the best routes for our larger vehicles throughout this area.",
    "We provide complete house removals in Birchwood, as well as man and van hire for smaller loads, furniture removals, house clearances and storage collection. With excellent transport connections nearby — including the M6, M62 and Birchwood train station — it's a convenient base for moves across the North West.",
    "Our Padgate depot is just a few miles from Birchwood, meaning we can be at most addresses within 10 minutes. That makes us ideal for early morning starts and last-minute availability when it's needed.",
  ],
  services: [
    "House removals across Birchwood WA3",
    "Man and van hire Birchwood",
    "House clearances Birchwood and Risley",
    "Furniture removals and transport",
    "Storage collection",
    "Packing service and materials",
  ],
  nearbyAreas: ["Warrington", "Culcheth", "Risley", "Padgate", "Woolston", "Lymm"],
  faqs: [
    {
      question: "Do you cover all neighbourhoods in Birchwood?",
      answer:
        "Yes, we cover all Birchwood neighbourhoods including Gorse Covert, Locking Stumps, Oakwood and Risley — all WA3 6 and WA3 7 postcodes.",
    },
    {
      question: "How much do removals cost in Birchwood?",
      answer:
        "A typical 3-bedroom house removal in Birchwood starts from around £380–£540. We provide free quotes with no hidden fees.",
    },
    {
      question: "Can you move from Birchwood towards Manchester?",
      answer:
        "Yes, Birchwood's location near the M6 and M62 makes it convenient for moves into Greater Manchester and beyond. We cover the whole North West region.",
    },
    {
      question: "Do you cover Risley as well as Birchwood?",
      answer:
        "Yes, we cover Risley, Gorse Covert and all areas within the Birchwood WA3 postcode area.",
    },
    {
      question: "How quickly can JMC Removals reach Birchwood?",
      answer:
        "Our Padgate base is approximately 4 miles from central Birchwood — we can typically reach your address within 10 minutes.",
    },
  ],
};

export default function BirchwoodRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
