import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals St Helens | House Removals St Helens | JMC Removals",
  description:
    "Professional removal company serving St Helens and Merseyside. JMC Removals provides house removals, man and van hire and house clearance services across St Helens. Free quotes — call 01925 812700.",
  path: "/st-helens-removals",
  keywords: [
    "removals St Helens",
    "house removals St Helens",
    "removal company St Helens",
    "man and van St Helens",
    "house clearance St Helens",
    "moving company St Helens",
  ],
});

const area = {
  name: "St Helens",
  slug: "st-helens-removals",
  county: "Merseyside",
  description:
    "JMC Removals provides trusted house removals, man and van and house clearance services across St Helens, Merseyside. Professional, reliable and fully insured — free quotes available 7 days a week.",
  longDescription: [
    "JMC Removals is a well-established removal company serving St Helens and the surrounding Merseyside area. Based in Warrington, we're ideally placed to provide removal services across all areas of St Helens — including town centre, Eccleston, Newton-le-Willows, Haydock and the surrounding communities.",
    "We've completed many moves between St Helens and Warrington, and between St Helens and other North West locations. Our team is experienced with the local road network and committed to making your move as smooth as possible.",
    "Our St Helens customers consistently rate us highly for our professionalism, reliability and the care we take with their belongings. We treat every move — whether large or small — with the same attention to detail.",
  ],
  services: [
    "House removals across St Helens and Merseyside",
    "Man and van hire in St Helens",
    "House clearances in St Helens",
    "Furniture removals across St Helens",
    "Storage collection from St Helens",
    "Moves between St Helens and Warrington",
  ],
  nearbyAreas: ["Warrington", "Wigan", "Widnes", "Newton-le-Willows", "Haydock", "Eccleston", "Prescot"],
  faqs: [
    {
      question: "Do JMC Removals serve St Helens?",
      answer: "Yes, JMC Removals regularly provides removal services across St Helens and the wider Merseyside area. We cover all areas of St Helens including the town centre, Eccleston, Newton-le-Willows, Haydock and surrounding villages.",
    },
    {
      question: "How much does a removal from St Helens cost?",
      answer: "Removal costs from St Helens depend on the size of the move and the destination. A local move within St Helens starts from around £375. A move between St Helens and Warrington starts from approximately £400. We provide free, no-obligation quotes.",
    },
    {
      question: "Can you move furniture from St Helens?",
      answer: "Yes, we offer a dedicated furniture removal service from St Helens. Whether you need a single item collected or a full room of furniture moved, our team has the equipment and experience to handle it safely.",
    },
    {
      question: "Do you offer house clearance in St Helens?",
      answer: "Yes, we offer full and partial house clearance across St Helens. This includes probate clearances, landlord clearances and general property clearances. We handle everything responsibly and dispose of items in an environmentally conscious way.",
    },
  ],
};

export default function StHelensRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
