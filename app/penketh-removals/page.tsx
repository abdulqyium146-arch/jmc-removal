import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Penketh Warrington | House Removals Penketh WA5 | JMC Removals",
  description:
    "House removals and man and van in Penketh, Warrington WA5. JMC Removals provides professional, affordable removal services across Penketh village and WA5. Free quotes — call +44 7438 447286.",
  path: "/penketh-removals",
  keywords: [
    "removals Penketh",
    "house removals Penketh",
    "removal company Penketh WA5",
    "man and van Penketh Warrington",
    "Penketh removals",
  ],
});

const area = {
  name: "Penketh",
  slug: "penketh-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals and man and van services in Penketh, Warrington. We serve all residential streets in Penketh village and the wider WA5 area.",
  longDescription: [
    "Penketh is a traditional village on the western edge of Warrington, close to the River Mersey and the historic Sankey Canal. It's a popular area for families — offering a good mix of semi-detached and detached housing, a strong sense of community and easy access to both Warrington town centre and the M62 motorway.",
    "JMC Removals covers Penketh regularly as part of our Warrington and WA5 operations. We know the local roads well — from the main village streets through to the residential cul-de-sacs and the newer developments on the village periphery.",
    "We provide complete house removals in Penketh for all property sizes, alongside man and van services, furniture transport, house clearances and storage collection. Whether you're moving within the village, heading to Great Sankey, Widnes or further afield, our professional team will manage your move with care.",
    "As a family-owned Warrington business, we approach every move — however large or small — with the same care and professionalism. Penketh residents can count on straightforward pricing, no hidden costs and a team that genuinely cares about the job.",
  ],
  services: [
    "House removals in Penketh WA5",
    "Man and van hire Penketh",
    "House clearances Penketh",
    "Furniture removals Penketh",
    "Storage collection and delivery",
    "Packing service and materials",
  ],
  nearbyAreas: ["Warrington", "Great Sankey", "Widnes", "Runcorn", "Cuerdley", "Burtonwood"],
  faqs: [
    {
      question: "Do you cover Penketh village?",
      answer:
        "Yes, we cover all residential streets in Penketh village and the surrounding WA5 area. We regularly complete moves throughout Penketh.",
    },
    {
      question: "How much is a house removal in Penketh?",
      answer:
        "A typical 3-bedroom house removal in Penketh starts from around £400–£560. We provide free, transparent quotes — call +44 7438 447286.",
    },
    {
      question: "Can you move from Penketh to Widnes or Runcorn?",
      answer:
        "Yes, we regularly complete moves between Penketh and Great Sankey, Widnes, Runcorn and across South Warrington and Merseyside.",
    },
    {
      question: "Do you offer house clearances in Penketh?",
      answer:
        "Yes, we provide full and partial house clearances in Penketh. We are licensed waste carriers and handle all types of clearance with care, including probate situations.",
    },
    {
      question: "Is there adequate parking in Penketh for a removal van?",
      answer:
        "In most parts of Penketh there is adequate on-street parking for a removal van. We assess access at both addresses before your move day so there are no surprises.",
    },
  ],
};

export default function PenkethRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
