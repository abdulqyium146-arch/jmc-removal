"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_PHONE, formatPhoneForTel } from "@/lib/utils";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
}

export default function CTA({
  title = "Ready to Move? Get Your Free Quote Today",
  subtitle = "Call us or fill in our simple form and we'll get back to you with a clear, no-obligation quote. Free home surveys available for larger moves.",
  primaryCta = "Get a Free Quote",
  primaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="section bg-white" aria-labelledby="cta-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-10 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-12 translate-y-12" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-200 mb-4">
              Get Started Today
            </p>
            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-extrabold text-white mb-6 max-w-2xl mx-auto"
            >
              {title}
            </h2>
            <p className="text-brand-100 max-w-xl mx-auto mb-10 text-lg">{subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={formatPhoneForTel(BUSINESS_PHONE)}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200 w-full sm:w-auto justify-center"
                aria-label={`Call JMC Removals on ${BUSINESS_PHONE}`}
              >
                <Phone className="h-5 w-5" />
                {BUSINESS_PHONE}
              </a>
            </div>

            <p className="text-brand-200 text-sm mt-6">
              Free no-obligation quotes · 7 days a week · Fully insured
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
