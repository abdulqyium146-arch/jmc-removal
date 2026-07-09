import type { Metadata } from "next";
import LocalAreaPage from "@/components/sections/LocalAreaPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Removals Woolston Warrington | House Removals Woolston WA1 | JMC Removals",
  description:
    "House removals and man and van in Woolston, Warrington WA1. JMC Removals provides professional removal services across Woolston and nearby Thelwall. Free quotes — call +44 7438 447286.",
  path: "/woolston-removals",
  keywords: [
    "removals Woolston",
    "house removals Woolston Warrington",
    "removal company Woolston WA1",
    "man and van Woolston",
    "Thelwall removals",
  ],
});

const area = {
  name: "Woolston",
  slug: "woolston-removals",
  county: "Cheshire",
  description:
    "JMC Removals provides professional house removals, man and van hire and house clearance across Woolston, Warrington WA1. We serve Woolston's residential streets and nearby Thelwall with the same local care.",
  longDescription: [
    "Woolston is a residential area on the eastern edge of Warrington, close to the Manchester Ship Canal and Woolston Weir. It features a mix of interwar housing, post-war semi-detached properties and newer developments, making it a varied and well-established part of east Warrington.",
    "JMC Removals serves Woolston regularly from our nearby Padgate base. Our team knows the local roads — from Gorsey Lane and Manchester Road through to the quieter residential streets and cul-de-sacs across WA1 4 — and understands the occasional access challenges near the canal.",
    "We provide complete house removals in Woolston for all property sizes, alongside man and van hire, furniture removals, house clearances and storage collection. Whether you're moving within Woolston, heading into Warrington or relocating further afield, we'll manage your move professionally.",
    "Being based in Padgate — just minutes from Woolston — means we can reach your address quickly, offer early morning slots and respond to short-notice enquiries more flexibly than more distant removal companies.",
  ],
  services: [
    "House removals Woolston WA1",
    "Man and van hire Woolston",
    "House clearances Woolston",
    "Furniture removals and transport",
    "Storage collection",
    "Packing service",
  ],
  nearbyAreas: ["Warrington", "Padgate", "Birchwood", "Latchford", "Thelwall", "Grappenhall"],
  faqs: [
    {
      question: "Do you cover Woolston and Thelwall?",
      answer:
        "Yes, we cover Woolston and Thelwall and all surrounding WA1 and WA4 postcodes in east and south Warrington.",
    },
    {
      question: "How much do house removals cost in Woolston?",
      answer:
        "A typical 3-bedroom house removal in Woolston starts from around £380–£530. We provide free, transparent quotes.",
    },
    {
      question: "Can you do a removal from Woolston towards Manchester?",
      answer:
        "Yes, Woolston's location near the A57 and Manchester Ship Canal corridor is well-placed for moves towards Manchester and the surrounding area.",
    },
    {
      question: "Do you offer house clearances in Woolston?",
      answer:
        "Yes, we carry out full and partial clearances in Woolston. We are licensed waste carriers and approach all clearances professionally.",
    },
    {
      question: "Do you have experience with canal-side properties in Woolston?",
      answer:
        "Yes, we're familiar with access considerations for properties near the Manchester Ship Canal and understand how to handle these locations on moving day.",
    },
  ],
};

export default function WoolstonRemovalsPage() {
  return <LocalAreaPage area={area} />;
}
