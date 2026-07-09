import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Culcheth | House Removals Culcheth WA3 | JMC Removals",
  description:
    "Professional house removals in Culcheth, Warrington WA3. JMC Removals provides trusted removal services across Culcheth village, Glazebury and surrounding areas. Free quotes.",
  path: "/culcheth-removals",
  keywords: [
    "removals Culcheth",
    "house removals Culcheth",
    "removal company Culcheth WA3",
    "man and van Culcheth",
    "Glazebury removals",
    "Culcheth village removals",
  ],
});

const area = {
  name: "Culcheth",
  slug: "culcheth-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van and house clearance across Culcheth, Warrington WA3. We serve Culcheth village, Glazebury and all surrounding WA3 postcodes.",
  longDescription: [
    "Culcheth is a large village in the east of Warrington borough, with a strong community feel, good local schools and a varied mix of housing from traditional village properties to newer private developments. Its semi-rural character and setting within the Cheshire countryside make it a popular choice for families seeking space away from the town centre.",
    "JMC Removals serves Culcheth as part of our wider WA3 service area. Our team is familiar with the village roads, surrounding lanes and the range of property types across Culcheth and nearby Glazebury. We regularly complete moves both within the village and between Culcheth and other parts of Warrington.",
    "We provide house removals of all sizes in Culcheth — from terraced cottages in the village centre to larger detached homes on the village periphery. We also offer man and van hire, furniture removals, house clearances and storage collection throughout WA3 and the surrounding area.",
    "As a family business based in Warrington, we're well placed to serve Culcheth and the surrounding villages. Local knowledge, competitive pricing and a personal approach make us the natural first call for removals in this part of east Cheshire.",
  ],
  services: [
    "House removals across Culcheth WA3",
    "Man and van hire Culcheth",
    "House clearances Culcheth",
    "Furniture removals and transport",
    "Storage collection",
    "Packing service",
  ],
  nearbyAreas: ["Warrington", "Birchwood", "Fearnhead", "Glazebury", "Croft", "Leigh"],
  faqs: [
    {
      question: "Do you cover Culcheth and Glazebury?",
      answer:
        "Yes, we cover Culcheth village, Glazebury and all surrounding WA3 postcodes. Both villages are served regularly as part of our east Warrington operations.",
    },
    {
      question: "How much do house removals cost in Culcheth?",
      answer:
        "A typical 3-bedroom house removal in Culcheth starts from around £400–£560. We provide free, transparent quotes with no hidden fees.",
    },
    {
      question: "Can you access rural lanes and properties near Culcheth?",
      answer:
        "Yes, we're experienced in accessing rural and semi-rural properties around Culcheth and Glazebury. We assess access in advance for any properties with vehicle access challenges.",
    },
    {
      question: "Do you offer man and van services in Culcheth?",
      answer:
        "Yes, our man and van service covers Culcheth — ideal for smaller moves, single item collections and student relocations.",
    },
    {
      question: "Can you move from Culcheth to Leigh or Manchester?",
      answer:
        "Yes, Culcheth's location near the A574 provides straightforward access towards Leigh, Wigan and Manchester. We cover the whole North West.",
    },
  ],
};

export default function CulchethRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
