"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, CalendarCheck, Truck, Home } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Get in Touch",
    description:
      "Call us on 01925 812700 or fill in our online form. Tell us about your move — property size, date, distance and any special items.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Free Quote",
    description:
      "We'll provide a clear, detailed quote with no hidden fees. For larger moves we can arrange a home survey. No obligation.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book Your Date",
    description:
      "Confirm your moving date and we'll reserve your slot. We operate 7 days a week including bank holidays.",
  },
  {
    icon: Truck,
    step: "04",
    title: "We Handle Everything",
    description:
      "Our professional team arrives on time, protects your belongings and loads the van carefully. Sit back and relax.",
  },
  {
    icon: Home,
    step: "05",
    title: "Settled In",
    description:
      "We deliver everything to your new home and place items exactly where you want them. Your move is complete.",
  },
];

export default function Process() {
  return (
    <section className="section bg-gray-950" aria-labelledby="process-heading">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-3">
            How It Works
          </p>
          <h2
            id="process-heading"
            className="text-3xl md:text-5xl font-extrabold text-white mb-5"
          >
            Moving Made{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              Simple
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We&apos;ve streamlined the process so your move is as straightforward as possible. Here&apos;s exactly how we work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[calc(10%+2.5rem)] right-[calc(10%+2.5rem)] h-0.5 bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 shadow-lg shadow-brand-600/30 ring-4 ring-brand-600/20">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Start Your Free Quote
          </Link>
          <p className="text-xs text-gray-500 mt-4">
            Free quote · No obligation · 7 days a week
          </p>
        </motion.div>
      </div>
    </section>
  );
}
