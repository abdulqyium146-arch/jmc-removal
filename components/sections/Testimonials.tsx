"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Warrington",
    rating: 5,
    date: "November 2024",
    text: "Absolutely brilliant service from JMC Removals. The team were professional, careful with our belongings and made moving day stress-free. They wrapped all our furniture and even helped reassemble some pieces. Would highly recommend to anyone in Warrington.",
    service: "House Removal",
  },
  {
    name: "Mark Davies",
    location: "Wigan",
    rating: 5,
    date: "October 2024",
    text: "Used JMC for our house move from Warrington to Wigan. Fantastic family business, very reasonably priced and nothing was too much trouble. They arrived on time, worked quickly and were careful with everything. Will definitely use again and would recommend to anyone.",
    service: "House Removal",
  },
  {
    name: "Emma Clarke",
    location: "Warrington",
    rating: 5,
    date: "September 2024",
    text: "JMC helped us with a house clearance in Warrington following a bereavement and they were excellent. Quick, efficient and very respectful given the circumstances. They dealt with everything professionally. Great local company, can't recommend enough.",
    service: "House Clearance",
  },
  {
    name: "James Wilson",
    location: "Widnes",
    rating: 5,
    date: "August 2024",
    text: "Needed a man and van for a flat move from Warrington to Widnes. JMC gave me the best quote and turned up exactly when they said they would. Careful with my stuff, friendly lads and quick. Brilliant service for the price. Thanks!",
    service: "Man & Van",
  },
  {
    name: "Linda Pearce",
    location: "St Helens",
    rating: 5,
    date: "July 2024",
    text: "I've used JMC twice now — once for a full house move and once for some furniture removals. Both times the service was faultless. They're polite, careful and really efficient. As a family business they genuinely go the extra mile.",
    service: "Furniture Removals",
  },
  {
    name: "Robert Hughes",
    location: "Northwich",
    rating: 5,
    date: "June 2024",
    text: "Used JMC Removals for our move from Warrington to Northwich. Everything went perfectly — the team was professional from start to finish. They protected all our furniture, were careful on the stairs and placed everything exactly where we wanted it. Outstanding.",
    service: "House Removal",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Customer Reviews</p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5"
          >
            What Our Customers{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real customers across Warrington and the North West say about JMC Removals.
          </p>

          {/* Aggregate */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span className="text-sm font-semibold text-gray-700">4.9 average</span>
            <span className="text-sm text-gray-400">from 127 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <StarRating rating={t.rating} />
                <Quote className="h-5 w-5 text-brand-200 shrink-0" />
              </div>
              <blockquote className="text-sm text-gray-600 leading-relaxed mb-5">
                &quot;{t.text}&quot;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t.location} · {t.date}
                  </div>
                </div>
                <span className="badge text-xs">{t.service}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
