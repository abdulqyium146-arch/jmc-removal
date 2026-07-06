import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact JMC Removals | Free Removal Quote Warrington",
  description:
    "Contact JMC Removals for a free, no-obligation removal quote. Call +44 7438 447286 or fill in our online form. Serving Warrington, Wigan, Widnes, St Helens and the North West.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Contact", url: `${SITE_URL}/contact` }])) }} />

      <ServicePageHero
        badge="Free No-Obligation Quotes"
        title="Get Your Free "
        titleHighlight="Removal Quote"
        description="Ready to book your move? Get in touch with JMC Removals today. We're available 7 days a week and will get back to you with a clear, competitive quote within 2 hours during business hours."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <ContactForm />
    </>
  );
}
