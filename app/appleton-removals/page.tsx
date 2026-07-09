import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Appleton Warrington | House Removals Appleton Thorn WA4 | JMC Removals",
  description:
    "Professional house removals in Appleton, Warrington WA4. JMC Removals serves Appleton Thorn, Stretton and surrounding south Warrington villages. Specialist antique and piano handling. Free quotes.",
  path: "/appleton-removals",
  keywords: [
    "removals Appleton",
    "house removals Appleton Warrington",
    "removal company Appleton WA4",
    "Appleton Thorn removals",
    "Stretton removals Warrington",
  ],
});

const area = {
  name: "Appleton",
  slug: "appleton-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals and specialist services across Appleton, Warrington WA4. We serve Appleton Thorn, Stretton and surrounding south Warrington villages with expertise in larger properties.",
  longDescription: [
    "Appleton is a village area south of Warrington, sitting between Stockton Heath and the wider Cheshire countryside. It encompasses Appleton Thorn and nearby Stretton — two popular residential villages with a mix of traditional Cheshire farmhouses, period cottages and executive new build developments. Properties in this area tend to be larger, with many set in generous plots.",
    "JMC Removals serves Appleton and the surrounding south Warrington villages from our base. We're experienced in the access challenges that can come with rural Cheshire properties — including long driveways, narrow country lanes and properties set back from the road.",
    "We provide full house removal services in Appleton, including professional packing, specialist furniture and antique handling, and piano removal for the many valuable instruments in the area's larger homes. We also offer man and van hire, house clearances and storage collection across WA4.",
    "As a family business with 15+ years of experience across south Warrington and Cheshire, we understand the care and attention that moves in and around Appleton require. Our team approaches every job with the professionalism and personal touch that our customers expect.",
  ],
  services: [
    "House removals across Appleton WA4",
    "Specialist antique and piano removal",
    "Man and van hire Appleton",
    "House clearances Appleton Thorn",
    "Furniture removals and transport",
    "Professional packing for executive properties",
  ],
  nearbyAreas: ["Warrington", "Stockton Heath", "Grappenhall", "Lymm", "Stretton", "Hatton"],
  faqs: [
    {
      question: "Do you cover Appleton Thorn and Stretton?",
      answer:
        "Yes, we cover Appleton Thorn, Stretton and all surrounding WA4 villages south of Warrington including Hatton and Daresbury.",
    },
    {
      question: "Do you have experience with large executive homes in Appleton?",
      answer:
        "Yes, we regularly move large detached properties in Appleton and nearby villages. We're experienced in the care required for executive and high-value homes.",
    },
    {
      question: "How much do house removals cost in Appleton?",
      answer:
        "For a large 4-5 bedroom property in Appleton, removals typically start from around £650–£950+. We provide free site surveys and transparent, detailed quotes.",
    },
    {
      question: "Can you access narrow country lanes around Appleton?",
      answer:
        "Yes, our team is experienced in navigating narrow country lanes and rural access routes around Appleton Thorn and Stretton. We survey access before your move.",
    },
    {
      question: "Do you handle antique furniture in Appleton?",
      answer:
        "Yes, we specialise in handling antique and valuable furniture — common in Appleton's larger homes. We use specialist protective materials and bespoke wrapping for all valuable items.",
    },
  ],
};

export default function AppletonRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
