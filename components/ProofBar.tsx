"use client";

import AnimatedCounter from "./AnimatedCounter";
import { PROOF_METRICS } from "@/lib/constants";

export default function ProofBar() {
  return (
    <div className="bg-[#0F0F0F] border-y border-[#1E1E1E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {PROOF_METRICS.map((metric, i) => (
            <div
              key={i}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-[#D85A30] mb-1">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
