"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Truck,
  PackageOpen,
  Sofa,
  Warehouse,
  Package,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Removals",
    description:
      "Full house removal service across Warrington and the North West. We handle loading, transport and unloading with care.",
    href: "/house-removals",
    color: "blue",
    features: ["Full packing service available", "All property sizes", "Short & long distance"],
  },
  {
    icon: Truck,
    title: "Man & Van",
    description:
      "Affordable man and van hire for smaller moves, single items, student relocations or office clearances.",
    href: "/man-and-van",
    color: "orange",
    features: ["Flexible scheduling", "Hourly rates available", "Same-day available"],
  },
  {
    icon: PackageOpen,
    title: "House Clearance",
    description:
      "Professional house clearance for full or part-property clearances. Respectful, efficient and thorough.",
    href: "/house-clearance",
    color: "green",
    features: ["Full or partial clearance", "Probate clearances", "Environmentally responsible"],
  },
  {
    icon: Sofa,
    title: "Furniture Removals",
    description:
      "Safe and careful furniture removal and transport. Ideal for individual items or room-by-room moves.",
    href: "/furniture-removals",
    color: "purple",
    features: ["Single items welcome", "Careful handling", "Dismantling available"],
  },
  {
    icon: Warehouse,
    title: "Storage Collection",
    description:
      "Pickup and delivery to and from storage facilities. We collect your stored belongings and deliver to your new home.",
    href: "/storage-collection",
    color: "teal",
    features: ["Collection & delivery", "Flexible timing", "Careful handling"],
  },
  {
    icon: Package,
    title: "Part Load Removals",
    description:
      "Cost-effective part-load service for smaller moves. Share van space and reduce your moving costs.",
    href: "/house-removals#part-load",
    color: "rose",
    features: ["Budget-friendly option", "Flexible dates", "Full insurance"],
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  orange: "bg-orange-50 text-orange-600 border-orange-100",
  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  teal: "bg-teal-50 text-teal-600 border-teal-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section className="section bg-gray-50" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Complete Removal Services in{" "}
            <span className="gradient-text">Warrington</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a single sofa to a full five-bedroom house move, JMC Removals offers a complete range of professional removal services across Warrington and the North West.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const iconClass = colorMap[service.color];
            return (
              <motion.article key={service.href} variants={cardVariants} className="group">
                <Link href={service.href} className="block h-full">
                  <div className="card h-full flex flex-col">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${iconClass} mb-5`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                      Learn more
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-primary">
            Get a Free No-Obligation Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
