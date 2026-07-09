import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Latchford Warrington | House Removals Latchford WA4 | JMC Removals",
  description:
    "Professional house removals and man and van services in Latchford, Warrington WA4. JMC Removals provides trusted, affordable removal services across Latchford. Free quotes.",
  path: "/latchford-removals",
  keywords: [
    "removals Latchford",
    "house removals Latchford Warrington",
    "removal company Latchford",
    "man and van Latchford WA4",
    "Latchford removals",
  ],
});

const area = {
  name: "Latchford",
  slug: "latchford-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van hire and house clearance across Latchford, Warrington WA4. We know Latchford's residential streets well and deliver reliable, affordable removal services across the area.",
  longDescription: [
    "Latchford is a well-established residential area on the south side of Warrington town centre, bordered by the Manchester Ship Canal to the south. With a mix of traditional terraced housing, interwar semi-detached properties and newer private developments, Latchford offers a range of property types and is popular with both owner-occupiers and renters.",
    "JMC Removals serves Latchford regularly — from terrace houses along Knutsford Road to the larger properties in the quieter residential streets towards Grappenhall. Our team is familiar with the local roads and the access considerations around canal-side streets and the town centre approaches.",
    "We provide complete house removals in Latchford, as well as man and van hire for smaller loads, house clearances, furniture transport and storage collection. Whether you're moving within Latchford, heading to another Warrington postcode or relocating further afield, we'll manage your move professionally.",
    "As a local Warrington family business, we bring genuine local knowledge and a commitment to honest, transparent service to every job we undertake in Latchford and the surrounding area.",
  ],
  services: [
    "House removals in Latchford WA4",
    "Man and van hire Latchford",
    "House clearances Latchford",
    "Furniture removals and transport",
    "Storage collection and delivery",
    "Packing service and materials",
  ],
  nearbyAreas: ["Warrington", "Stockton Heath", "Grappenhall", "Orford", "Wilderspool", "Thelwall"],
  faqs: [
    {
      question: "Do you cover all parts of Latchford?",
      answer:
        "Yes, we cover all of Latchford including WA4 1 and WA4 2 postcodes. From Knutsford Road to the quieter residential streets towards Grappenhall, we serve the whole area.",
    },
    {
      question: "How much does a removal cost in Latchford?",
      answer:
        "A typical 2-bedroom house removal in Latchford starts from around £350–£480. We provide free, transparent quotes with no hidden fees — call +44 7438 447286.",
    },
    {
      question: "Can you help with a house clearance in Latchford?",
      answer:
        "Yes, we provide full and partial house clearances in Latchford including landlord clearances, probate clearances and general clearances. We are a licensed waste carrier.",
    },
    {
      question: "Do you offer man and van in Latchford?",
      answer:
        "Yes, our man and van service covers Latchford and is ideal for smaller moves, single items, flat moves and student relocations in the area.",
    },
    {
      question: "Can you move between Latchford and Stockton Heath?",
      answer:
        "Yes, we regularly complete moves between Latchford, Stockton Heath, Orford, Padgate and all other Warrington areas.",
    },
  ],
};

export default function LatchfordRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
