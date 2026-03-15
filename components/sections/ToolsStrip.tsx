"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TOOLS } from "@/lib/constants";
import { fadeUp, viewportConfig } from "@/lib/animations";

// Build the marquee string from tools data
function ToolItem({ tool }: { tool: typeof TOOLS[0] }) {
  return (
    <span className="flex items-center gap-2 flex-shrink-0 px-2">
      <span className="text-[16px] font-semibold text-[#FAF5F0]">{tool.name}</span>
      <span className="text-[#D85A30] text-[14px]">
        {"★".repeat(Math.floor(tool.rating / 2))}
      </span>
      <span className="text-[14px] text-[#D85A30] font-medium">{tool.rating}</span>
      <span className="text-[#292524] text-[18px] ml-3">•</span>
    </span>
  );
}

export default function ToolsStrip() {
  const doubled = [...TOOLS, ...TOOLS];

  return (
    <section className="py-14 md:py-20 border-y border-[rgba(168,162,158,0.06)]">
      <div className="container-warm mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="flex items-center justify-between"
        >
          <h3
            className="text-[14px] font-medium text-[#78716C] uppercase tracking-[0.1em]"
          >
            Tools I use daily
          </h3>
          <Link
            href="/tools"
            className="text-[14px] text-[#D85A30] hover:text-[#F97316] transition-colors font-medium"
          >
            See all 12 tools →
          </Link>
        </motion.div>
      </div>

      {/* Auto-scrolling tools strip */}
      <div className="marquee-wrapper">
        <div
          className="marquee-track items-center py-2"
          style={{ animationDuration: "30s" }}
        >
          {doubled.map((tool, i) => (
            <ToolItem key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
