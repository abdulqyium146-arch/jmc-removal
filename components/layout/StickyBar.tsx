"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { cn, BUSINESS_PHONE, formatPhoneForTel } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <div className="flex gap-3 rounded-2xl bg-gray-950/95 backdrop-blur-md p-3 shadow-2xl shadow-black/30 border border-white/10">
            <a
              href={formatPhoneForTel(BUSINESS_PHONE)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"
              aria-label={`Call ${BUSINESS_PHONE}`}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageSquare className="h-4 w-4" />
              Free Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
