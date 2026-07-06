import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Widnes | House Removals Widnes | JMC Removals",
  description:
    "Trusted removal company serving Widnes and surrounding Cheshire areas. JMC Removals offers house removals, man and van hire and house clearance services across Widnes. Free quotes — call +44 7438 447286.",
  path: "/widnes-removals",
  keywords: [
    "removals Widnes",
    "house removals Widnes",
    "removal company Widnes",
    "man and van Widnes",
    "house clearance Widnes",
    "moving company Widnes",
  ],
});

const area = {
  name: "Widnes",
  slug: "widnes-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional and affordable removal services across Widnes, Cheshire. From house removals to man and van and house clearance — we cover all of Widnes and the surrounding area.",
  longDescription: [
    "Widnes is one of the key areas we serve from our Warrington base. Just a short distance from our depot, we can provide prompt, professional removal services across all areas of Widnes — including Hough Green, Farnworth, Halton, Appleton and the surrounding villages.",
    "Our removal team has extensive experience moving families within Widnes and between Widnes and the wider North West region. Whether you're moving locally within Widnes or relocating to Warrington, Runcorn, Wigan or further, we provide a seamless service.",
    "As a Cheshire-based family business, we're committed to providing a removal service that Widnes residents can rely on. Our competitive pricing, transparent quotes and 7-days-a-week availability make us a popular choice throughout the area.",
  ],
  services: [
    "House removals across Widnes and Halton",
    "Man and van hire in Widnes",
    "House clearances in Widnes",
    "Furniture removals across Widnes",
    "Storage collection from Widnes",
    "Moves between Widnes and Warrington",
    "Moves between Widnes and Runcorn",
  ],
  nearbyAreas: ["Warrington", "Runcorn", "St Helens", "Wigan", "Halton", "Hale", "Frodsham"],
  faqs: [
    {
      question: "Do JMC Removals cover Widnes?",
      answer: "Yes, Widnes is one of our core service areas. Based in Warrington, we're just a short distance from Widnes and regularly provide house removals, man and van services and house clearances throughout Widnes and the Halton area.",
    },
    {
      question: "How much does a house removal cost from Widnes?",
      answer: "Removal costs from Widnes depend on property size and destination. A local move within Widnes starts from around £350. A move between Widnes and Warrington starts from approximately £380. We provide free, itemised quotes for all moves.",
    },
    {
      question: "Can you move me from Widnes to Warrington or Wigan?",
      answer: "Yes, we regularly carry out moves between Widnes and Warrington, and between Widnes and Wigan. These are popular routes for our team and we can provide competitive quotes for both.",
    },
    {
      question: "Do you offer house clearance in Widnes?",
      answer: "Yes, we provide full and partial house clearance services across Widnes. Whether you need a single room clearing or an entire property, our team will carry out the work efficiently and responsibly.",
    },
  ],
};

export default function WidnesRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
