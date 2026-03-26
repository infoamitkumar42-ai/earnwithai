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
    <motion.section
      className="py-14 md:py-20 border-y border-[rgba(168,162,158,0.06)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-warm mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center"
        >
          <h3 className="text-[20px] text-[#A8A29E] mb-8">
            Tools I use daily
          </h3>
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

      <div className="text-center mt-8">
        <Link
          href="/tools"
          className="text-[14px] text-[#78716C] hover:text-[#FAF5F0] transition-colors"
        >
          See all 12 tools →
        </Link>
      </div>
    </motion.section>
  );
}
