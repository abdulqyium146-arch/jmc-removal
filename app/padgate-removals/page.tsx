import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Padgate Warrington | House Removals Padgate WA1 | JMC Removals",
  description:
    "JMC Removals is based in Padgate, Warrington — your truly local removal company. Professional house removals, man and van and clearance services across Padgate WA1 and WA2. Free quotes.",
  path: "/padgate-removals",
  keywords: [
    "removals Padgate",
    "house removals Padgate",
    "removal company Padgate Warrington",
    "man and van Padgate WA1",
    "Padgate removals",
  ],
});

const area = {
  name: "Padgate",
  slug: "padgate-removals",
  county: "Cheshire",
  description:
    "JMC Removals is based right here in Padgate, Warrington at 15 Jubilee Avenue WA1 3JY — making us your most local removal company. We know every street in Padgate and offer the fastest, most personal removal service in the area.",
  longDescription: [
    "JMC Removals is proud to be based in Padgate — it's our home. Located at 15 Jubilee Avenue, Padgate, Warrington WA1 3JY, we are genuinely local to the area and have been serving Padgate families for over 15 years. When you choose JMC, you're not calling a national franchise — you're calling your neighbours.",
    "Padgate is a residential suburb of Warrington sitting between the town centre and Birchwood. It features a mix of interwar housing, Victorian-era properties and newer private developments. Padgate train station provides direct rail links to Manchester and Liverpool — making it popular with commuters.",
    "As the removal company literally based in Padgate, we can offer the fastest response times, earliest morning starts and the most flexible service for local residents. Whether you're moving across the road, across Warrington or across the country, you benefit from a team that knows your streets and cares about your community.",
    "We offer everything from full house removals to single-item van moves, house clearances and packing services. All WA1 and WA2 postcodes across Padgate and surrounding areas are covered — and we can usually be at your door within minutes.",
  ],
  services: [
    "House removals across Padgate WA1 and WA2",
    "Man and van hire Padgate",
    "House clearances Padgate",
    "Furniture removals and transport",
    "Storage collection and delivery",
    "Professional packing service",
  ],
  nearbyAreas: ["Warrington", "Woolston", "Orford", "Fearnhead", "Birchwood", "Culcheth"],
  faqs: [
    {
      question: "Is JMC Removals actually based in Padgate?",
      answer:
        "Yes, our depot is at 15 Jubilee Avenue, Padgate, Warrington WA1 3JY. We are genuinely local — we live and work in the community we serve.",
    },
    {
      question: "How much do house removals cost in Padgate?",
      answer:
        "A typical 3-bedroom house removal in Padgate starts from around £350–£500. As a local business we offer competitive, honest pricing with no hidden fees.",
    },
    {
      question: "Do you cover all Padgate postcodes?",
      answer:
        "Yes, we cover all WA1 and WA2 postcodes in Padgate and the immediately surrounding areas including Woolston, Orford and Fearnhead.",
    },
    {
      question: "Can you do emergency or same-day moves in Padgate?",
      answer:
        "As we're based in Padgate, we can often accommodate short-notice and same-day moves locally. Call +44 7438 447286 to check availability.",
    },
    {
      question: "Do you do house clearances in Padgate?",
      answer:
        "Yes, we provide full and partial house clearances in Padgate, including probate clearances and landlord clearances. We are licensed waste carriers.",
    },
  ],
};

export default function PadgateRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
