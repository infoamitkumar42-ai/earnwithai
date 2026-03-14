"use client";

import { motion } from "framer-motion";
import ToolCard from "@/components/ToolCard";
import { TOOLS } from "@/lib/constants";
import type { Metadata } from "next";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      {/* Header */}
      <section className="py-14 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#D85A30]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D85A30]/10 border border-[#D85A30]/20 rounded-full text-[#D85A30] text-xs font-semibold mb-5">
              Amit&apos;s Personal Stack
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              AI Tools I Use & Recommend
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              These are the exact tools I use daily to earn with AI. Honest ratings, no fluff.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ToolCard {...tool} />
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 bg-[#111111] border border-[#1E1E1E] rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-500 text-sm">
              💡 Some links may be affiliate links — I only recommend tools I actually use and believe in.
              Your support helps me create free content for the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
