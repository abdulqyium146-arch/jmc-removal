"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Heart, PoundSterling, Users, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Family-Owned Business",
    description:
      "JMC Removals is a genuine family business. We treat your belongings as if they were our own and take real pride in every move we carry out.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "All our removal services are fully insured, giving you complete peace of mind that your possessions are protected throughout your move.",
  },
  {
    icon: PoundSterling,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. We provide clear, honest quotes upfront so you always know exactly what you're paying for.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our experienced removal crew have completed thousands of moves across Warrington and the North West. We know how to get the job done right.",
  },
  {
    icon: Award,
    title: "5-Star Reputation",
    description:
      "With a 4.9 star rating from over 127 reviews, our reputation speaks for itself. We consistently deliver a service our customers recommend.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "We work 7 days a week, including evenings, to fit around your schedule. Moving doesn't have to disrupt your life — we'll work around you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white" aria-labelledby="why-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-3">Why Choose JMC</p>
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
            >
              A Removal Company You Can Actually{" "}
              <span className="gradient-text">Trust</span>
            </h2>
            <div className="prose-content space-y-4 text-gray-600">
              <p>
                Moving house is one of life&apos;s most stressful events. At JMC Removals, we&apos;ve built our entire business around making that experience as smooth and stress-free as possible.
              </p>
              <p>
                As a family-owned business based in Warrington, we understand what matters to local families and individuals. We&apos;re not a faceless national chain — we&apos;re your neighbours, and we care deeply about doing a good job.
              </p>
              <p>
                From the moment you contact us for a free quote to the last box being placed in your new home, you&apos;ll receive professional, friendly service every step of the way.
              </p>
            </div>

            {/* Aggregate rating */}
            <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 inline-flex">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-gray-900">4.9</div>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-orange-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">127 reviews</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900 block">Rated Excellent</strong>
                Based on verified customer reviews across Google and Facebook
              </div>
            </div>
          </motion.div>

          {/* Right — photo collage + features */}
          <div className="space-y-5">
            {/* Photo collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <Image
                  src="/images/jmc-removals-team-warrington.webp"
                  alt="JMC Removals team in Warrington — professional removal crew"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <Image
                  src="/images/jmc-removals-van-house-sale-warrington.webp"
                  alt="JMC Removals van at property — house removal Warrington"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <Image
                  src="/images/jmc-removals-house-removal-detached-home.webp"
                  alt="JMC Removals van at detached home — removal company Warrington"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <Image
                  src="/images/jmc-removals-fleet-vans-warrington.webp"
                  alt="JMC Removals fleet of vans in Warrington — removal company"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Feature cards (3 key ones) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {reasons.slice(0, 3).map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 mb-3 mx-auto">
                      <Icon className="h-4 w-4 text-brand-600" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
