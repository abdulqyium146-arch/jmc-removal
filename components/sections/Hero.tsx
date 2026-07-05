"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-gray-900 py-20 md:py-28"
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
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                Warrington&apos;s Trusted Removal Company
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
            >
              Stress-Free House{" "}
              <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                Removals
              </span>{" "}
              in Warrington
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              JMC Removals is a family-owned removal company in Warrington, Cheshire. We handle everything — from packing to delivery — so your move goes smoothly from start to finish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm text-center"
                >
                  <div className="text-2xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — real van photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/jmc-removals-large-house-removal-cheshire.webp"
                alt="JMC Removals van at a large house in Cheshire — professional removal service"
                width={600}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5 fill-orange-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-white font-medium">&ldquo;Exceptional service — on time, careful and professional.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-2xl bg-brand-500 text-white px-4 py-3 shadow-lg text-center">
              <div className="text-xl font-extrabold">15+</div>
              <div className="text-xs font-medium opacity-90">Years</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
