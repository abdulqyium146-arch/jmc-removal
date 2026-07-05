"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { homeFaqs } from "@/lib/data/faqs";

export { homeFaqs };

interface FAQProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  faqs = homeFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about JMC Removals and our services.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-white" aria-labelledby="faq-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">FAQ</p>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            >
              {title}
            </h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          <div
            className="space-y-3"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl border border-gray-200 overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
                itemProp="mainEntity"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-sm font-semibold text-gray-900 pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180 text-brand-600"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                      itemScope
                      itemType="https://schema.org/Answer"
                      itemProp="acceptedAnswer"
                    >
                      <div
                        className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                        itemProp="text"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
