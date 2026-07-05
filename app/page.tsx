import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CoverageAreas from "@/components/sections/CoverageAreas";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { faqSchema, howToSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/data/faqs";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "JMC Removals | House Removals Warrington | Man & Van Cheshire",
  description:
    "JMC Removals — family-owned removal company based in Warrington, Cheshire. Trusted house removals, man & van, house clearance & furniture removals across Warrington, Wigan, Widnes & St Helens. Free no-obligation quotes. Call 01925 812700.",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-GB": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "JMC Removals | House Removals Warrington",
    description:
      "Family-owned removal company in Warrington. Professional house removals, man & van & house clearance across Cheshire & the North West. Free quotes — call 01925 812700.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "JMC Removals — House Removals Warrington" }],
  },
};

const howToSteps = [
  {
    name: "Contact JMC Removals",
    text: "Call 01925 812700 or complete our online quote form with details of your move.",
  },
  {
    name: "Receive Your Free Quote",
    text: "We provide a clear, detailed quote with no hidden fees within 2 hours.",
  },
  {
    name: "Confirm Your Booking",
    text: "Accept the quote and confirm your moving date. We operate 7 days a week.",
  },
  {
    name: "Moving Day",
    text: "Our team arrives on time, loads your belongings carefully and transports them safely.",
  },
  {
    name: "Settled In",
    text: "We unload everything into your new home exactly where you want it.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema(howToSteps)),
        }}
      />

      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CoverageAreas />
      <FAQ />
      <CTA />
    </>
  );
}
