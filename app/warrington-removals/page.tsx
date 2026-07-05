import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Warrington | House Removals Warrington | JMC Removals",
  description:
    "JMC Removals — the trusted removal company in Warrington, Cheshire. Professional house removals, man and van, house clearance and furniture removals. Based in Warrington. Free quotes — call 01925 812700.",
  path: "/warrington-removals",
  keywords: [
    "removals Warrington",
    "house removals Warrington",
    "removal company Warrington",
    "man and van Warrington",
    "house clearance Warrington",
    "moving company Warrington",
    "domestic removals Warrington",
    "professional removals Warrington",
  ],
});

const area = {
  name: "Warrington",
  slug: "warrington-removals",
  county: "Cheshire",
  description:
    "JMC Removals is based in Warrington, Cheshire — making us the ideal local removal company for your Warrington house move. Professional, family-owned and trusted by thousands of Warrington customers.",
  longDescription: [
    "JMC Removals is a family-owned and operated removal company based right here in Warrington. When you choose JMC, you're choosing a local business that genuinely knows the area — from the streets of Padgate to Latchford, Stockton Heath, Penketh, Birchwood and beyond.",
    "We've been helping Warrington families move home for over 15 years, building a reputation for professional, stress-free removals at fair prices. As a local business, our reputation in the community is everything to us — that's why we go the extra mile on every job.",
    "Whether you're moving within Warrington or relocating to another part of the North West, our experienced team will handle your move with care and efficiency. We provide complete house removals, man and van services, house clearances, furniture removals and storage collection across all Warrington postcodes.",
    "Warrington postcodes we regularly serve include WA1, WA2, WA3, WA4, WA5 and WA13. No area of Warrington is too far for our dedicated removal team.",
  ],
  services: [
    "House removals across all Warrington postcodes",
    "Man and van hire in Warrington",
    "House clearances in Warrington",
    "Furniture removals and transport",
    "Storage collection and delivery",
    "Part-load removals",
    "Packing service and packing materials",
    "Office removals and business relocations",
  ],
  nearbyAreas: ["Wigan", "Widnes", "St Helens", "Northwich", "Runcorn", "Newton-le-Willows", "Leigh", "Altrincham"],
  faqs: [
    {
      question: "Are JMC Removals based in Warrington?",
      answer: "Yes, JMC Removals is based at 15 Jubilee Avenue, Padgate, Warrington, WA1 3JY. As a local Warrington business, we have an intimate knowledge of the area and can offer a prompt, reliable service across all Warrington postcodes.",
    },
    {
      question: "How much do removals cost in Warrington?",
      answer: "Removal costs in Warrington vary depending on property size, distance and any additional services required. A typical 2-bedroom house removal within Warrington starts from around £350. We provide free, detailed quotes so you always know exactly what you're paying.",
    },
    {
      question: "Do you cover all areas of Warrington?",
      answer: "Yes, we cover all areas of Warrington including WA1, WA2, WA3, WA4, WA5 and WA13 postcodes. From Padgate and Orford to Stockton Heath, Latchford, Penketh and Birchwood — we cover the whole town and surrounding villages.",
    },
    {
      question: "Can you move me on a weekend in Warrington?",
      answer: "Yes, we operate 7 days a week including weekends and bank holidays. Saturday moves are particularly popular in Warrington — we recommend booking early to secure your preferred date.",
    },
    {
      question: "Do you provide packing services in Warrington?",
      answer: "Yes, we offer a professional packing service as an optional addition to your Warrington removal. We can pack all or selected items using quality materials, or supply boxes and packing materials for you to pack yourself.",
    },
  ],
};

export default function WarringtonRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
