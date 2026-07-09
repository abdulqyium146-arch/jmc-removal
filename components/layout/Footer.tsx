import Link from "next/link";
import { Phone, Mail, MapPin, Truck, Star } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_NAME, SITE_URL, formatPhoneForTel } from "@/lib/utils";

const services = [
  { label: "House Removals", href: "/house-removals" },
  { label: "Man & Van", href: "/man-and-van" },
  { label: "House Clearance", href: "/house-clearance" },
  { label: "Furniture Removals", href: "/furniture-removals" },
  { label: "Storage Collection", href: "/storage-collection" },
  { label: "Office Removals", href: "/office-removals" },
  { label: "Packing Service", href: "/packing-service" },
  { label: "Piano Removal", href: "/piano-removal" },
  { label: "End of Tenancy Clearance", href: "/end-of-tenancy-clearance" },
  { label: "Part Load Removals", href: "/part-load-removals" },
];

const areas = [
  { label: "Warrington", href: "/warrington-removals" },
  { label: "Wigan", href: "/wigan-removals" },
  { label: "Widnes", href: "/widnes-removals" },
  { label: "St Helens", href: "/st-helens-removals" },
  { label: "Northwich", href: "/northwich-removals" },
  { label: "Runcorn", href: "/runcorn-removals" },
  { label: "Stockton Heath", href: "/stockton-heath-removals" },
  { label: "Great Sankey", href: "/great-sankey-removals" },
  { label: "Lymm", href: "/lymm-removals" },
  { label: "Birchwood", href: "/birchwood-removals" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Trust bar */}
      <div className="border-b border-white/10 bg-brand-600">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-white/90">
            {["Family Owned", "Fully Insured", "Free Quotes", "No Hidden Fees", "5-Star Rated"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-white/80 text-white/80" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white">
                  JMC <span className="text-brand-400">Removals</span>
                </span>
                <span className="block text-[10px] text-gray-400 leading-none mt-0.5">
                  Warrington, Cheshire
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Family-owned and operated removals company serving Warrington, Cheshire and the North West since 2010. Professional, reliable and stress-free moving.
            </p>
            <div className="space-y-3">
              <a
                href={formatPhoneForTel(BUSINESS_PHONE)}
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors"
                itemProp="telephone"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4 text-brand-400" />
                </div>
                <span itemProp="telephone">{BUSINESS_PHONE}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4 text-brand-400" />
                </div>
                {BUSINESS_EMAIL}
              </a>
              <address
                className="flex items-start gap-2.5 text-sm text-gray-300 not-italic"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 mt-0.5 shrink-0">
                  <MapPin className="h-4 w-4 text-brand-400" />
                </div>
                <span>
                  <span itemProp="streetAddress">{BUSINESS_ADDRESS.street}</span>,{" "}
                  <span itemProp="addressLocality">{BUSINESS_ADDRESS.city}</span>,{" "}
                  <span itemProp="postalCode">{BUSINESS_ADDRESS.postcode}</span>
                </span>
              </address>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Areas We Cover
            </h3>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Removals {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5 mb-8">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-orange text-sm py-2.5">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} {BUSINESS_NAME}. All rights reserved. Registered in England & Wales.
            </p>
            <p className="text-xs text-gray-600">
              Serving Warrington, Wigan, Widnes, St Helens, Northwich & across Cheshire, Merseyside & Greater Manchester
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
