import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Wigan | House Removals Wigan | JMC Removals",
  description:
    "Professional removal company serving Wigan and the surrounding area. JMC Removals provides house removals, man and van, house clearance and more across Wigan. Free quotes — call 01925 812700.",
  path: "/wigan-removals",
  keywords: [
    "removals Wigan",
    "house removals Wigan",
    "removal company Wigan",
    "man and van Wigan",
    "house clearance Wigan",
    "moving company Wigan",
    "domestic removals Wigan",
  ],
});

const area = {
  name: "Wigan",
  slug: "wigan-removals",
  county: "Greater Manchester",
  description:
    "JMC Removals provides professional house removals, man and van, house clearance and furniture removals across Wigan and the surrounding areas of Greater Manchester. Reliable, affordable and fully insured.",
  longDescription: [
    "Based in neighbouring Warrington, JMC Removals regularly serves Wigan and the wider Greater Manchester area. Our team is familiar with the local roads and can provide prompt, efficient removal services throughout Wigan, Leigh, Atherton, Hindley and the surrounding communities.",
    "We've helped hundreds of Wigan families and individuals make their move — whether relocating within Wigan itself or moving to and from Warrington, Widnes, St Helens or further afield.",
    "As a family-owned business, we're proud of our honest, straightforward approach. You'll get a clear quote with no hidden fees, and a team that genuinely cares about doing a good job. Our 4.9-star average rating reflects the standard of service we bring to every removal.",
  ],
  services: [
    "House removals across Wigan and Greater Manchester",
    "Man and van hire in Wigan",
    "House clearances in Wigan",
    "Furniture removals across Wigan",
    "Storage collection from Wigan",
    "Part-load removals to/from Wigan",
    "Moves between Wigan and Warrington",
  ],
  nearbyAreas: ["Warrington", "Leigh", "Atherton", "Hindley", "Standish", "Ashton-in-Makerfield", "St Helens"],
  faqs: [
    {
      question: "Do JMC Removals cover Wigan?",
      answer: "Yes, JMC Removals regularly provides removal services across Wigan and the surrounding areas. We're based in Warrington, just a short drive from Wigan, and regularly carry out house removals, man and van jobs and house clearances throughout the Wigan area.",
    },
    {
      question: "How much do house removals cost in Wigan?",
      answer: "House removal costs in Wigan depend on the property size and the distance involved. A move within Wigan starts from around £350. A move between Wigan and Warrington starts from approximately £400. We provide free, no-obligation quotes so you'll know the full cost upfront.",
    },
    {
      question: "Can you move me from Wigan to Warrington?",
      answer: "Yes, moves between Wigan and Warrington are one of our most common routes. Our team is very familiar with this route and can provide an efficient, cost-effective removal service for this journey.",
    },
    {
      question: "How long does a removal from Wigan to Warrington take?",
      answer: "A typical 2-bedroom house move from Wigan to Warrington usually takes between 5 and 7 hours including loading and unloading. Larger properties may take longer. We'll give you an estimated timescale when you receive your quote.",
    },
  ],
};

export default function WiganRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
