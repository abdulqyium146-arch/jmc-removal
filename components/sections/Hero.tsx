"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Star, Shield, Clock, ChevronRight } from "lucide-react";
import { BUSINESS_PHONE, formatPhoneForTel } from "@/lib/utils";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Insured" },
];

const badges = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Star, text: "5-Star Rated" },
  { icon: Clock, text: "7 Days a Week" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-gray-900 py-20 md:py-32"
      aria-label="JMC Removals hero section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              Warrington&apos;s Trusted Removal Company
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Stress-Free House{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              Removals
            </span>{" "}
            in Warrington
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            JMC Removals is a family-owned removal company in Warrington, Cheshire. We handle everything — from packing to delivery — so your move goes smoothly from start to finish.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
              Get a Free Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={formatPhoneForTel(BUSINESS_PHONE)}
              className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 w-full sm:w-auto justify-center"
              aria-label={`Call JMC Removals on ${BUSINESS_PHONE}`}
            >
              <Phone className="h-5 w-5 text-brand-400" />
              {BUSINESS_PHONE}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300"
              >
                <Icon className="h-3.5 w-3.5 text-brand-400" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
