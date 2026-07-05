"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years in Business", description: "Serving Warrington since 2010" },
  { value: "5,000+", label: "Moves Completed", description: "Across Cheshire & the North West" },
  { value: "4.9/5", label: "Average Rating", description: "Based on 127 verified reviews" },
  { value: "100%", label: "Insured & Trusted", description: "Full removal & storage insurance" },
  { value: "7", label: "Days a Week", description: "Including bank holidays" },
  { value: "Free", label: "Quotations", description: "No-obligation, transparent pricing" },
];

export default function Stats() {
  return (
    <section className="section bg-brand-600" aria-label="JMC Removals statistics">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-brand-100 mb-1">{stat.label}</div>
              <div className="text-xs text-brand-200">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
