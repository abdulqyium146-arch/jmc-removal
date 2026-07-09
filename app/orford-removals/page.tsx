import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Orford Warrington | House Removals Orford WA2 | JMC Removals",
  description:
    "Professional house removals and man and van in Orford, Warrington WA2. JMC Removals provides trusted, affordable removal services across Orford and surrounding areas. Free quotes.",
  path: "/orford-removals",
  keywords: [
    "removals Orford",
    "house removals Orford Warrington",
    "removal company Orford WA2",
    "man and van Orford",
    "Orford Warrington removals",
  ],
});

const area = {
  name: "Orford",
  slug: "orford-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van hire and house clearance across Orford, Warrington WA2. Based nearby in Padgate, our team knows Orford's residential estates and streets well.",
  longDescription: [
    "Orford is a large residential area in the north of Warrington, situated between the town centre and the A49 corridor. It features a wide range of housing — from post-war council properties to owner-occupied semis and more modern private developments — with Orford Jubilee Park providing a welcome green space at its heart.",
    "JMC Removals serves Orford regularly as part of our core Warrington operations. Our team knows the residential estates and streets across WA2 well — whether you're along Wargrave Road, near the park or elsewhere in north Warrington.",
    "We provide complete house removal services in Orford from studio flat moves to large family homes, alongside man and van hire, house clearances, furniture removals and storage collection across WA2 and surrounding areas.",
    "With our Padgate base just a few miles from Orford, we can be at most addresses quickly. This proximity means we can often accommodate early morning starts and short-notice moves when needed.",
  ],
  services: [
    "House removals across Orford WA2",
    "Man and van hire Orford",
    "House clearances Orford",
    "Furniture removals and transport",
    "Storage collection",
    "Packing service and materials",
  ],
  nearbyAreas: ["Warrington", "Padgate", "Fearnhead", "Callands", "Winwick", "Poulton"],
  faqs: [
    {
      question: "Do you cover all parts of Orford?",
      answer:
        "Yes, we cover all residential areas in Orford including Wargrave Road, Orford Green and all surrounding WA2 streets and estates.",
    },
    {
      question: "How much do removals cost in Orford?",
      answer:
        "A typical 2-3 bedroom house removal in Orford starts from around £350–£520. We provide free, transparent quotes — call +44 7438 447286.",
    },
    {
      question: "Can you help with a house clearance in Orford?",
      answer:
        "Yes, we provide full and partial house clearances in Orford. We are licensed waste carriers and handle all clearance types professionally.",
    },
    {
      question: "Do you offer man and van in Orford?",
      answer:
        "Yes, our man and van service is available throughout Orford — ideal for flat moves, single items and smaller loads.",
    },
    {
      question: "How quickly can JMC get to Orford?",
      answer:
        "Our Padgate depot is just a few miles from Orford. We can typically reach your address within 15 minutes.",
    },
  ],
};

export default function OrfordRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
