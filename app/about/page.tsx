import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePageHero from "@/components/sections/ServicePageHero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { SITE_URL } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "About JMC Removals | Family-Owned Removal Company Warrington",
  description:
    "Learn about JMC Removals — a family-owned and operated removal company based in Warrington, Cheshire. Over 15 years helping families move stress-free across the North West.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "About Us", url: `${SITE_URL}/about` }])) }} />

      <ServicePageHero
        badge="About JMC Removals"
        title="A Family Business Built on "
        titleHighlight="Trust"
        description="JMC Removals is a family-owned and operated removal company based in Warrington, Cheshire. We've been helping families move stress-free for over 15 years."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="prose-content">
                <h2>Our Story</h2>
                <p>
                  JMC Removals was founded over 15 years ago with a simple goal: to provide Warrington families with a removal service they could genuinely trust. From the very beginning, we built our business on honesty, hard work and the kind of personal service you only get from a family business.
                </p>
                <p>
                  What started as a small local operation has grown into one of Warrington&apos;s most trusted removal companies, serving thousands of customers across Cheshire, Merseyside and Greater Manchester. But despite our growth, we&apos;ve never lost sight of what matters most — our customers.
                </p>
                <p>
                  As a family-owned and operated business, every job we take on reflects our personal standards and reputation. We don&apos;t cut corners and we don&apos;t hide costs. When you book with JMC Removals, you get the same dedicated team for every move — not a rotating roster of subcontractors.
                </p>

                <h2>Our Values</h2>
                <ul>
                  <li><strong>Honesty</strong> — transparent quotes, no hidden fees</li>
                  <li><strong>Reliability</strong> — we show up on time, every time</li>
                  <li><strong>Care</strong> — your belongings treated like our own</li>
                  <li><strong>Professionalism</strong> — trained, experienced team</li>
                  <li><strong>Community</strong> — proud to serve Warrington and the North West</li>
                </ul>

                <h2>Our Coverage Area</h2>
                <p>
                  From our Warrington base, we cover a wide area including all of Cheshire, Merseyside and Greater Manchester. Key areas include Wigan, Widnes, St Helens, Northwich, Runcorn and the wider region. We can also assist with UK-wide removals — just ask.
                </p>
              </div>

              <div className="space-y-6">
                {/* Real team photo */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/jmc-removals-team-loading-van.webp"
                    alt="JMC Removals team loading the van — professional removal crew in Warrington"
                    width={500}
                    height={380}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Contact card */}
                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Phone:</span>
                      <a href="tel:+447438447286" className="text-brand-600 ml-2 hover:underline">+44 7438 447286</a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Email:</span>
                      <a href="mailto:info@jmcremovals.co.uk" className="text-brand-600 ml-2 hover:underline">info@jmcremovals.co.uk</a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Address:</span>
                      <address className="not-italic text-gray-600 ml-2 inline">
                        15 Jubilee Avenue, Padgate, Warrington, WA1 3JY
                      </address>
                    </div>
                  </div>
                  <a href="/contact" className="btn-primary w-full justify-center mt-5">
                    Request a Free Quote
                  </a>
                </div>

                {/* Accreditations */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Why We&apos;re Trusted</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Family Owned", desc: "Genuine family business since 2010" },
                      { title: "Fully Insured", desc: "Comprehensive removal insurance" },
                      { title: "Licensed", desc: "Licensed waste carrier" },
                      { title: "5-Star Rated", desc: "4.9 average from 127 reviews" },
                      { title: "Local Experts", desc: "Deep knowledge of the North West" },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-brand-600" />
                        </span>
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{title}</span>
                          <span className="text-xs text-gray-500 ml-2">{desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTA title="Ready to Book Your Move?" subtitle="Get in touch with JMC Removals for a free, no-obligation quote. We're here 7 days a week." />
    </>
  );
}
