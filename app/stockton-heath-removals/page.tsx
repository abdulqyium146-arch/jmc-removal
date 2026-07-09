import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Stockton Heath | House Removals Stockton Heath WA4 | JMC Removals",
  description:
    "Professional house removals in Stockton Heath, Warrington WA4. JMC Removals provides trusted removal services across Stockton Heath and surrounding areas. Free quotes — call +44 7438 447286.",
  path: "/stockton-heath-removals",
  keywords: [
    "removals Stockton Heath",
    "house removals Stockton Heath",
    "removal company Stockton Heath WA4",
    "man and van Stockton Heath",
    "moving company Stockton Heath",
  ],
});

const area = {
  name: "Stockton Heath",
  slug: "stockton-heath-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals and man and van services across Stockton Heath, Warrington WA4. Based nearby in Padgate, we know Stockton Heath well — from the village high street to the surrounding executive developments.",
  longDescription: [
    "Stockton Heath is one of Warrington's most sought-after residential areas, situated south of the town centre along the A49 corridor. With its vibrant village-feel high street, excellent schools, and a mix of Victorian terraces, Edwardian semis and modern executive homes, it's consistently popular with families and professionals moving within the Warrington area.",
    "JMC Removals is based in nearby Padgate — just a short drive from Stockton Heath — and we regularly complete house removals, man and van jobs and furniture moves throughout the WA4 postcode. We know the local roads well, from the residential streets off London Road to the newer developments in south Warrington.",
    "Whether you're moving within Stockton Heath, relocating to another part of Warrington, or moving to Stockton Heath from further afield, our professional and fully insured team will handle your move with the care and attention it deserves.",
    "As a family-owned business built on local reputation, we understand that moving in an area like Stockton Heath calls for a professional, careful approach. Our straightforward pricing and personal service make us the natural choice for removals across south Warrington.",
  ],
  services: [
    "House removals across Stockton Heath WA4",
    "Man and van hire Stockton Heath",
    "House clearances Stockton Heath",
    "Furniture removals and antique handling",
    "Storage collection and delivery",
    "Professional packing service",
  ],
  nearbyAreas: ["Warrington", "Appleton", "Grappenhall", "Lymm", "Thelwall", "Latchford"],
  faqs: [
    {
      question: "Are you based near Stockton Heath?",
      answer:
        "Yes, JMC Removals is based in nearby Padgate, Warrington — just a short drive from Stockton Heath. We serve WA4 regularly and know the local roads and road layout well.",
    },
    {
      question: "How much do house removals cost in Stockton Heath?",
      answer:
        "Removal costs in Stockton Heath vary by property size. A typical 3-bedroom house removal starts from around £450–£600. We provide free, transparent quotes with no hidden fees.",
    },
    {
      question: "Do you cover all streets in Stockton Heath?",
      answer:
        "Yes, we cover all residential areas in Stockton Heath including the village centre, London Road, Bellhouse Lane and all surrounding streets throughout WA4.",
    },
    {
      question: "Can you handle antique furniture in Stockton Heath?",
      answer:
        "Yes, we handle antique and high-value furniture with specialist care — common in Stockton Heath's period and executive properties. We use professional blankets, wrapping and bespoke protection.",
    },
    {
      question: "Do you move between Stockton Heath and other Warrington areas?",
      answer:
        "Yes, we regularly move between Stockton Heath and all other Warrington areas including Latchford, Padgate, Orford, Penketh and the wider WA postcodes.",
    },
  ],
};

export default function StocktonHeathRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
