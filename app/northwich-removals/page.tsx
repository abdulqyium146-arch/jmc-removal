import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Northwich | House Removals Northwich | JMC Removals",
  description:
    "Professional removal company serving Northwich and Mid Cheshire. JMC Removals provides house removals, man and van hire and house clearance across Northwich. Free quotes — call +44 7438 447286.",
  path: "/northwich-removals",
  keywords: [
    "removals Northwich",
    "house removals Northwich",
    "removal company Northwich",
    "man and van Northwich",
    "house clearance Northwich",
    "moving company Northwich",
    "removals Cheshire",
    "Mid Cheshire removals",
  ],
});

const area = {
  name: "Northwich",
  slug: "northwich-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van and house clearance services across Northwich and Mid Cheshire. Trusted, family-owned and fully insured. Free quotes available.",
  longDescription: [
    "Northwich is a key service area for JMC Removals. Located in the heart of Cheshire, Northwich and the surrounding Mid Cheshire area is well within our operational range from our Warrington base. We regularly carry out house removals, man and van jobs and clearances across Northwich, Winsford, Middlewich and the surrounding villages.",
    "Whether you're moving within Northwich, relocating from Northwich to Warrington, or moving to a new town further afield, our experienced team will provide a professional, efficient service. We know the local roads well and can work around local traffic and access conditions.",
    "As a family-owned business with deep roots in Cheshire, we take pride in serving our local community. Northwich customers can expect the same high standard of service that has earned us our 4.9-star reputation across the region.",
  ],
  services: [
    "House removals across Northwich and Mid Cheshire",
    "Man and van hire in Northwich",
    "House clearances in Northwich",
    "Furniture removals across Northwich",
    "Storage collection from Northwich",
    "Moves between Northwich and Warrington",
    "Moves between Northwich and other Cheshire towns",
  ],
  nearbyAreas: ["Warrington", "Winsford", "Middlewich", "Knutsford", "Chester", "Macclesfield", "Crewe"],
  faqs: [
    {
      question: "Do JMC Removals cover Northwich?",
      answer: "Yes, Northwich is within our regular service area. Based in Warrington, we serve all areas of Northwich and Mid Cheshire, including Winsford, Middlewich, Knutsford and the surrounding villages.",
    },
    {
      question: "How much does a removal from Northwich cost?",
      answer: "Removal costs from Northwich depend on the size of the move and destination. A local move within Northwich starts from around £375. A move between Northwich and Warrington starts from approximately £400-£450. We provide free, detailed quotes for all moves.",
    },
    {
      question: "Do you cover surrounding villages near Northwich?",
      answer: "Yes, we cover Northwich and all surrounding villages including Davenham, Hartford, Lostock Gralam, Weaverham, Cuddington, Sandiway and the wider Mid Cheshire area.",
    },
    {
      question: "Can you help with packing for a Northwich removal?",
      answer: "Yes, we offer a professional packing service as an optional addition to any Northwich removal. Our team can pack all or selected items using quality materials, protecting your belongings throughout the move.",
    },
  ],
};

export default function NorthwichRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
