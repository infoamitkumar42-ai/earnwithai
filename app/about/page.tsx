"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ABOUT_PAGE, SITE } from "@/lib/constants";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="py-14 px-4 sm:px-6 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#D85A30]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:sticky md:top-24"
            >
              {/* REPLACE: Add your photo here */}
              <div className="relative max-w-sm mx-auto md:mx-0">
                <div className="absolute inset-0 bg-[#D85A30]/15 rounded-2xl blur-2xl" />
                <div className="relative aspect-[3/4] bg-gradient-to-b from-[#161616] to-[#111111] border border-[#2A2A2A] rounded-2xl flex flex-col items-center justify-center overflow-hidden">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D85A30] to-[#B84820] flex items-center justify-center mb-4">
                    <span className="text-4xl font-black text-white">A</span>
                  </div>
                  <p className="text-white font-bold text-lg">Amit Kumar</p>
                  <p className="text-[#D85A30] text-sm">@amitxai</p>
                  <p className="text-gray-600 text-xs mt-6 text-center px-8">
                    {/* REPLACE: Add your photo here */}
                    [Your photo here]
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    { value: "Rs.4.6L+", label: "Earned in 90d" },
                    { value: "13.5K+", label: "Followers" },
                    { value: "256+", label: "Customers" },
                    { value: "5+ Yrs", label: "Experience" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-3 text-center">
                      <div className="text-[#D85A30] font-black text-sm">{stat.value}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[#D85A30] text-sm font-semibold uppercase tracking-widest mb-3 block">
                The Story
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                {ABOUT_PAGE.headline}
              </h1>
              <p className="text-[#D85A30] text-base font-medium mb-8">
                {ABOUT_PAGE.subheadline}
              </p>

              <div className="space-y-4 mb-12">
                {ABOUT_PAGE.bio.map((para, i) => (
                  <p key={i} className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5">My Journey</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-[#1E1E1E]" />
                  <div className="space-y-6">
                    {ABOUT_PAGE.timeline.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-5 pl-12 relative"
                      >
                        <div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-[#111111] border-2 border-[#D85A30]/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#D85A30]" />
                        </div>
                        <div>
                          <span className="text-[#D85A30] font-bold text-sm">{item.year}</span>
                          <p className="text-gray-400 text-sm mt-1">{item.event}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl text-sm transition-all"
                >
                  Follow on Instagram →
                </a>
                <Link
                  href="/free-guide"
                  className="px-6 py-3 bg-[#111111] border border-[#2A2A2A] hover:border-[#D85A30]/40 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Get Free Guide
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
