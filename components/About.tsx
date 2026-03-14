"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* REPLACE: Add your photo here */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D85A30]/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#141414] to-[#0F0F0F] border border-[#2A2A2A] rounded-2xl flex flex-col items-center justify-center overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D85A30] to-[#B84820] mb-4 flex items-center justify-center">
                  <span className="text-3xl font-black text-white">A</span>
                </div>
                <p className="text-white font-semibold">Amit Kumar</p>
                <p className="text-[#D85A30] text-sm mt-1">@amitxai</p>
                <p className="text-gray-600 text-xs mt-4 text-center px-6">
                  {/* REPLACE: Add your photo here */}
                  [Your photo goes here]
                </p>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#D85A30]/5 to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#D85A30] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-white font-black text-sm">Rs.4.6L+</p>
                <p className="text-white/70 text-xs">in 90 days</p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#D85A30] text-sm font-semibold uppercase tracking-widest mb-3 block">
              My Story
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              {ABOUT.heading}
            </h2>

            <div className="space-y-4">
              {ABOUT.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-xs text-gray-400">
                🤖 Zero Coding
              </div>
              <div className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-xs text-gray-400">
                💰 Rs.4.6L in 90 Days
              </div>
              <div className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-xs text-gray-400">
                🎓 Teaching 13,500+
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
