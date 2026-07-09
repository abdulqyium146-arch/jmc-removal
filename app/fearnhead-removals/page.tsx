import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Fearnhead Warrington | House Removals Fearnhead WA2 | JMC Removals",
  description:
    "Professional house removals and man and van in Fearnhead, Warrington WA2. JMC Removals provides trusted removal services across Fearnhead and Poulton with Fearnhead. Free quotes.",
  path: "/fearnhead-removals",
  keywords: [
    "removals Fearnhead",
    "house removals Fearnhead",
    "removal company Fearnhead WA2",
    "man and van Fearnhead Warrington",
    "Poulton with Fearnhead removals",
  ],
});

const area = {
  name: "Fearnhead",
  slug: "fearnhead-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van and house clearance across Fearnhead, Warrington WA2. We cover Fearnhead, Poulton with Fearnhead and the surrounding northeast Warrington area.",
  longDescription: [
    "Fearnhead is a residential suburb in the northeast of Warrington, encompassing Poulton with Fearnhead — a well-established residential area with a good mix of semi-detached and detached housing. Popular with families for its quiet streets and strong transport links, Fearnhead offers easy access to both the M6 and the wider Warrington area.",
    "JMC Removals covers Fearnhead as part of our comprehensive Warrington service area. Our Padgate base is just a few miles from Fearnhead, meaning we can be at most addresses quickly and offer early morning slots for important moving days.",
    "We provide house removals, man and van hire, furniture removals, house clearances and storage collection throughout Fearnhead and surrounding areas. Whether you're moving within the neighbourhood or heading further afield, we'll handle your move with care and efficiency.",
    "As a local Warrington family business, we understand what's at stake on moving day. Our team treats every job — from a single-item van move in Fearnhead to a whole house removal — with the same professionalism and care.",
  ],
  services: [
    "House removals Fearnhead WA2",
    "Man and van hire Fearnhead",
    "House clearances Fearnhead",
    "Furniture removals",
    "Storage collection",
    "Packing service",
  ],
  nearbyAreas: ["Warrington", "Orford", "Padgate", "Culcheth", "Birchwood", "Croft"],
  faqs: [
    {
      question: "Do you cover Fearnhead and Poulton with Fearnhead?",
      answer:
        "Yes, we cover all of Fearnhead and Poulton with Fearnhead, including all WA2 0 postcodes in northeast Warrington.",
    },
    {
      question: "How much do removals cost in Fearnhead?",
      answer:
        "A typical 3-bedroom house removal in Fearnhead starts from around £370–£520. We provide free, transparent quotes with no hidden fees.",
    },
    {
      question: "Can you move from Fearnhead to Culcheth?",
      answer:
        "Yes, we regularly complete moves between Fearnhead and Culcheth, as well as between Fearnhead and other parts of Warrington and WA3.",
    },
    {
      question: "Do you offer man and van in Fearnhead?",
      answer:
        "Yes, our man and van service covers Fearnhead — ideal for smaller loads, flat moves and single item collections.",
    },
    {
      question: "How fast can you get to Fearnhead?",
      answer:
        "Our Padgate depot is just a few miles from Fearnhead. We can typically reach your address within 10–15 minutes.",
    },
  ],
};

export default function FearnheadRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
