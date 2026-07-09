import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Great Sankey Warrington | House Removals Great Sankey WA5 | JMC Removals",
  description:
    "Professional house removals and man and van in Great Sankey, Warrington WA5. JMC Removals serves Great Sankey, Chapelford Urban Village and Westbrook. Free quotes — call +44 7438 447286.",
  path: "/great-sankey-removals",
  keywords: [
    "removals Great Sankey",
    "house removals Great Sankey",
    "removal company Great Sankey WA5",
    "man and van Great Sankey",
    "Chapelford removals",
    "Westbrook removals Warrington",
  ],
});

const area = {
  name: "Great Sankey",
  slug: "great-sankey-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van and house clearance across Great Sankey, Warrington. From the original village to Chapelford Urban Village and Westbrook, we cover all of WA5.",
  longDescription: [
    "Great Sankey is one of Warrington's largest and most varied residential areas, situated to the west of the town centre. It spans from the original village with its traditional housing stock through to the extensive Chapelford Urban Village development and Westbrook — both of which have seen significant new-build activity in recent years.",
    "JMC Removals covers Great Sankey and all WA5 postcodes regularly. Our team is familiar with both the older residential streets in Great Sankey village and the newer roads across Chapelford, providing reliable, efficient removal services throughout this large and growing area.",
    "We provide complete house removals in Great Sankey, from studio flat moves to large detached family homes. We also offer man and van hire for smaller loads, furniture removals, house clearances and storage collection across WA5 and the surrounding areas.",
    "As a local Warrington family business, we've moved hundreds of families across Great Sankey. Our reputation in the community means everything to us — we work hard on every job to ensure the service we deliver reflects our standards.",
  ],
  services: [
    "House removals across Great Sankey WA5",
    "Man and van hire Great Sankey",
    "Chapelford and Westbrook removals",
    "House clearances Great Sankey",
    "Furniture removals and transport",
    "Storage collection and delivery",
  ],
  nearbyAreas: ["Warrington", "Penketh", "Westbrook", "Burtonwood", "Padgate", "Widnes"],
  faqs: [
    {
      question: "Do you cover both Great Sankey village and Chapelford?",
      answer:
        "Yes, we cover all of Great Sankey including the Chapelford Urban Village development and Westbrook. We regularly complete moves throughout all WA5 postcodes.",
    },
    {
      question: "How much do removals cost in Great Sankey?",
      answer:
        "A typical 3-bedroom house removal in Great Sankey starts from around £420–£580. We provide free quotes with no hidden fees.",
    },
    {
      question: "Do you move customers in and out of new builds in Chapelford?",
      answer:
        "Yes, we regularly move customers into and out of new build properties in the Chapelford development. We're experienced in the access roads and parking arrangements throughout this area.",
    },
    {
      question: "Can you do a house clearance in Great Sankey?",
      answer:
        "Yes, we carry out full and partial house clearances across Great Sankey and Chapelford. We are a licensed waste carrier and donate usable items to local charities where possible.",
    },
    {
      question: "Do you move between Great Sankey and Widnes or Runcorn?",
      answer:
        "Yes, we regularly complete moves between Great Sankey and Penketh, Widnes, Runcorn and across South Warrington and Merseyside.",
    },
  ],
};

export default function GreatSankeyRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
