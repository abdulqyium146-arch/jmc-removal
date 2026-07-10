"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Truck } from "lucide-react";
import { cn, BUSINESS_PHONE, formatPhoneForTel } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "House Removals", href: "/house-removals" },
      { label: "Man & Van", href: "/man-and-van" },
      { label: "House Clearance", href: "/house-clearance" },
      { label: "Furniture Removals", href: "/furniture-removals" },
      { label: "Storage Collection", href: "/storage-collection" },
      { label: "Office Removals", href: "/office-removals" },
      { label: "Packing Service", href: "/packing-service" },
      { label: "Piano Removal", href: "/piano-removal" },
      { label: "End of Tenancy", href: "/end-of-tenancy-clearance" },
      { label: "Part Load Removals", href: "/part-load-removals" },
      { label: "Student Removals", href: "/student-removals" },
      { label: "Long Distance", href: "/long-distance-removals" },
    ],
  },
  {
    label: "Areas",
    href: "#",
    children: [
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
      { label: "Penketh", href: "/penketh-removals" },
      { label: "Latchford", href: "/latchford-removals" },
      { label: "Padgate", href: "/padgate-removals" },
      { label: "Culcheth", href: "/culcheth-removals" },
      { label: "Orford", href: "/orford-removals" },
      { label: "Woolston", href: "/woolston-removals" },
      { label: "Fearnhead", href: "/fearnhead-removals" },
      { label: "Appleton", href: "/appleton-removals" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        <div className="container">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="JMC Removals - Home">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 shadow-md shadow-brand-500/30 transition-transform group-hover:scale-105">
                <Truck className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-lg font-bold leading-none text-gray-900">
                  JMC
                  <span className="text-brand-600"> Removals</span>
                </span>
                <span className="block text-[10px] font-medium text-gray-500 leading-none mt-0.5">
                  Warrington, Cheshire
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        "text-gray-600 hover:text-brand-600 hover:bg-brand-50"
                      )}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 z-50"
                        >
                          <div className="rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl shadow-gray-200/60 min-w-[180px]">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                  pathname === child.href
                                    ? "bg-brand-50 text-brand-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-brand-600 bg-brand-50"
                        : "text-gray-600 hover:text-brand-600 hover:bg-brand-50"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={formatPhoneForTel(BUSINESS_PHONE)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand-600 transition-colors"
                aria-label={`Call JMC Removals on ${BUSINESS_PHONE}`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
                  <Phone className="h-4 w-4 text-brand-600" />
                </div>
                {BUSINESS_PHONE}
              </a>
              <Link href="/contact" className="btn-primary py-2.5 text-sm">
                Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="container py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-600"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium",
                        pathname === link.href
                          ? "bg-brand-50 text-brand-600"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <a
                    href={formatPhoneForTel(BUSINESS_PHONE)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-brand-600"
                  >
                    <Phone className="h-4 w-4" />
                    {BUSINESS_PHONE}
                  </a>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
