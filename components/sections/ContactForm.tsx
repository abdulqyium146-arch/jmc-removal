"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS, formatPhoneForTel } from "@/lib/utils";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    fromAddress: "",
    toAddress: "",
    moveDate: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section bg-gray-50" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="section-label mb-3">Get in Touch</p>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              Get Your Free Removal Quote
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fill in the form and we&apos;ll get back to you with a clear, competitive quote. No hidden fees, no obligation. Alternatively, give us a call and we can discuss your move straight away.
            </p>

            <div className="space-y-5 mb-8">
              <a
                href={formatPhoneForTel(BUSINESS_PHONE)}
                className="flex items-center gap-4 group"
                aria-label={`Call JMC Removals on ${BUSINESS_PHONE}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 group-hover:bg-brand-600 transition-colors">
                  <Phone className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone</div>
                  <div className="text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {BUSINESS_PHONE}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 group-hover:bg-brand-600 transition-colors">
                  <Mail className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</div>
                  <div className="text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {BUSINESS_EMAIL}
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 shrink-0">
                  <MapPin className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Address</div>
                  <address className="text-base font-medium text-gray-900 not-italic">
                    {BUSINESS_ADDRESS.street},<br />
                    {BUSINESS_ADDRESS.area}, {BUSINESS_ADDRESS.city},<br />
                    {BUSINESS_ADDRESS.postcode}
                  </address>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Opening Hours</h3>
              <div className="space-y-1.5 text-sm">
                {[
                  { days: "Monday – Friday", hours: "7:00am – 7:00pm" },
                  { days: "Saturday", hours: "8:00am – 5:00pm" },
                  { days: "Sunday", hours: "9:00am – 3:00pm" },
                ].map(({ days, hours }) => (
                  <div key={days} className="flex items-center justify-between">
                    <span className="text-gray-600">{days}</span>
                    <span className="font-medium text-gray-900">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-green-100 bg-green-50 p-10 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
                <p className="text-gray-600">
                  Thank you for contacting JMC Removals. We&apos;ll be in touch within 2 hours during business hours to discuss your move and provide a quote.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm space-y-5"
                aria-label="Contact form for removal quote"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">Request a Free Quote</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                      placeholder="07700 900000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="house-removal">House Removal</option>
                    <option value="man-and-van">Man & Van</option>
                    <option value="house-clearance">House Clearance</option>
                    <option value="furniture-removal">Furniture Removal</option>
                    <option value="storage-collection">Storage Collection</option>
                    <option value="part-load">Part Load Removal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Moving From (Postcode)
                    </label>
                    <input
                      type="text"
                      id="fromAddress"
                      name="fromAddress"
                      value={form.fromAddress}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                      placeholder="WA1 3JY"
                    />
                  </div>
                  <div>
                    <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Moving To (Postcode)
                    </label>
                    <input
                      type="text"
                      id="toAddress"
                      name="toAddress"
                      value={form.toAddress}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                      placeholder="WN1 1AA"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Moving Date
                  </label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={form.moveDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors resize-none"
                    placeholder="Tell us about your move — property size, number of rooms, any large or fragile items..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Request Free Quote
                    </span>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 2 hours during business hours. Your information is kept private.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
