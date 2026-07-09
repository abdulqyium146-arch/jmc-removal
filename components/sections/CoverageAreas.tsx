"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";

const areas = [
  {
    name: "Warrington",
    slug: "warrington-removals",
    description: "Our home base — we know every street in Warrington.",
    county: "Cheshire",
    popular: true,
  },
  {
    name: "Wigan",
    slug: "wigan-removals",
    description: "Reliable removals across Wigan and surrounding areas.",
    county: "Greater Manchester",
    popular: false,
  },
  {
    name: "Widnes",
    slug: "widnes-removals",
    description: "House removals and man and van services in Widnes.",
    county: "Cheshire",
    popular: false,
  },
  {
    name: "St Helens",
    slug: "st-helens-removals",
    description: "Professional removal company serving St Helens.",
    county: "Merseyside",
    popular: false,
  },
  {
    name: "Northwich",
    slug: "northwich-removals",
    description: "House removals throughout Northwich and Mid Cheshire.",
    county: "Cheshire",
    popular: false,
  },
  {
    name: "Runcorn",
    slug: "runcorn-removals",
    description: "Fast removal service — just 10 minutes from our Warrington depot.",
    county: "Cheshire",
    popular: false,
  },
];

const additionalAreas = [
  "Leigh", "Salford", "Manchester", "Chester", "Crewe",
  "Altrincham", "Sale", "Stretford", "Eccles", "Newton-le-Willows", "Haydock",
  "Stockton Heath", "Great Sankey", "Penketh", "Birchwood", "Latchford",
  "Padgate", "Orford", "Woolston", "Fearnhead", "Lymm", "Culcheth", "Appleton",
];

export default function CoverageAreas() {
  return (
    <section className="section bg-gray-50" aria-labelledby="areas-heading">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Where We Work</p>
          <h2
            id="areas-heading"
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Removals Across{" "}
            <span className="gradient-text">Cheshire & the North West</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based in Warrington, we cover a wide area including Cheshire, Merseyside and Greater Manchester. If you&apos;re unsure whether we cover your area, just give us a call.
          </p>
        </div>

        {/* Main areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {areas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={`/${area.slug}`}
                className="group block rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 border border-brand-100">
                    <MapPin className="h-4 w-4 text-brand-600" />
                  </div>
                  {area.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Removals {area.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{area.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">{area.county}</span>
                  <ChevronRight className="h-4 w-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional areas */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-5">
            We also cover these additional areas:
          </h3>
          <div className="flex flex-wrap gap-2">
            {additionalAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                <MapPin className="h-3 w-3 text-gray-400" />
                {area}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-600">
              + Many more
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-5">
            Not sure if we cover your area? Call us on{" "}
            <a href="tel:+447438447286" className="font-semibold text-brand-600 hover:underline">
              +44 7438 447286
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
