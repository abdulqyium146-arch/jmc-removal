"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronRight, Home } from "lucide-react";
import { BUSINESS_PHONE, formatPhoneForTel } from "@/lib/utils";

interface ServicePageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function ServicePageHero({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
}: ServicePageHeroProps) {
  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-gray-900 py-16 md:py-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container relative">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-brand-400 transition-colors flex items-center gap-1" itemProp="item">
                <Home className="h-3 w-3" />
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <ChevronRight className="h-3 w-3 text-gray-600" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-brand-400 font-medium" itemProp="name">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-brand-400 transition-colors" itemProp="item">
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(i + 2)} />
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              {badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.1}}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5"
          >
            {titleHighlight ? (
              <>
                {titleParts[0]}
                <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
                {titleParts[1]}
              </>
            ) : title}
          </motion.h1>

          <motion.p
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.2}}
            className="text-lg text-gray-300 mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={formatPhoneForTel(BUSINESS_PHONE)}
              className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all justify-center sm:justify-start"
            >
              <Phone className="h-5 w-5 text-brand-400" />
              {BUSINESS_PHONE}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
