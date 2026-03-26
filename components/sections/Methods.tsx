"use client";


import { motion } from "framer-motion";
import { METHODS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function Methods() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#FAF5F0] tracking-[-0.02em]">
            5 ways I'll teach you to earn
          </h2>
        </motion.div>

        {/* Stacked method cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="flex flex-col gap-5"
        >
          {METHODS.map((method, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group relative rounded-[20px] overflow-hidden transition-all duration-400"
              style={{
                background: method.highlight
                  ? "rgba(216,90,48,0.04)"
                  : "rgba(28,25,23,0.6)",
                border: method.highlight
                  ? "1px solid rgba(216,90,48,0.2)"
                  : "1px solid rgba(168,162,158,0.08)",
              }}
            >
              <div className="p-6 md:p-8 flex items-center gap-6 md:gap-8">
                {/* Number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold"
                    style={{
                      background: method.highlight
                        ? "#D85A30"
                        : "rgba(168,162,158,0.08)",
                      color: method.highlight ? "#FAF5F0" : "#78716C",
                    }}
                  >
                    {method.number}
                  </div>
                  <span className="text-[24px] leading-none">{method.icon}</span>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3
                      className="text-[20px] md:text-[22px] font-semibold text-[#FAF5F0]"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {method.title}
                    </h3>
                    {method.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#D85A30] text-[#FAF5F0]">
                        {method.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] text-[#A8A29E] leading-relaxed mb-3">
                    {method.description}
                  </p>
                  {/* Earning pill */}
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-[12px] font-semibold"
                    style={{
                      background: "rgba(216,90,48,0.1)",
                      color: "#D85A30",
                      border: "1px solid rgba(216,90,48,0.15)",
                    }}
                  >
                    {method.earning}
                  </span>
                </div>

                {/* Method image — hidden on small mobile, visible md+ */}
                <div
                  className="hidden sm:block flex-shrink-0 rounded-xl overflow-hidden relative"
                  style={{
                    width: "192px",
                    height: "128px",
                    background: "#0C0A09",
                    border: "1px solid rgba(168,162,158,0.1)",
                  }}
                >
                  {/* REPLACE: method images */}
                  <img
                    src={`/images/${method.image}`}
                    alt={method.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
