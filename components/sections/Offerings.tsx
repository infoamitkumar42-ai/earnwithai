"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OFFERINGS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function Offerings() {
  return (
    <section className="section-gap">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-[13px] text-[#D85A30] font-medium uppercase tracking-[0.1em] mb-3 block">
            Products
          </span>
          <h2 className="section-heading">Choose your starting point</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-5"
        >
          {OFFERINGS.map((offer, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative flex flex-col rounded-[20px] p-7 md:p-8 transition-all duration-400 ${
                offer.highlight ? "md:scale-[1.02]" : ""
              }`}
              style={{
                background: offer.highlight
                  ? "rgba(28,25,23,0.8)"
                  : "rgba(28,25,23,0.5)",
                border: offer.highlight
                  ? "1px solid rgba(216,90,48,0.3)"
                  : "1px solid rgba(168,162,158,0.08)",
                boxShadow: offer.highlight
                  ? "0 0 60px rgba(216,90,48,0.06)"
                  : "none",
              }}
            >
              {/* Coming soon overlay */}
              {offer.comingSoon && (
                <div
                  className="absolute inset-0 rounded-[20px] flex items-end justify-center pb-5 pointer-events-none z-10"
                  style={{ background: "rgba(12,10,9,0.5)" }}
                >
                  <span className="px-4 py-1.5 rounded-full text-[12px] font-semibold bg-[#292524] text-[#78716C]">
                    Launching Soon
                  </span>
                </div>
              )}

              {/* Label badge */}
              <div className="mb-5">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em]"
                  style={{
                    background:
                      offer.label === "FREE"
                        ? "rgba(216,90,48,0.12)"
                        : "rgba(168,162,158,0.08)",
                    color:
                      offer.label === "FREE"
                        ? "#D85A30"
                        : offer.label === "COMING SOON"
                        ? "#78716C"
                        : "#A8A29E",
                    border:
                      offer.label === "FREE"
                        ? "1px solid rgba(216,90,48,0.2)"
                        : "1px solid rgba(168,162,158,0.1)",
                  }}
                >
                  {offer.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-[22px] font-semibold text-[#FAF5F0] mb-3"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {offer.title}
                </h3>
                <p className="text-[15px] text-[#78716C] leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5">
                <span
                  className="text-[36px] font-bold text-[#FAF5F0]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {offer.price}
                </span>
                {offer.originalPrice && (
                  <span className="text-[16px] text-[#78716C] line-through">
                    {offer.originalPrice}
                  </span>
                )}
              </div>

              {/* CTA */}
              <Link
                href={offer.ctaHref}
                className={`block text-center py-3.5 px-6 rounded-full text-[15px] font-medium transition-all duration-300 mb-4 ${
                  offer.highlight
                    ? "bg-[#D85A30] text-[#FAF5F0] hover:bg-[#F97316] hover:shadow-[0_0_30px_rgba(216,90,48,0.3)] hover:-translate-y-0.5"
                    : offer.comingSoon
                    ? "bg-transparent text-[#78716C] border border-[rgba(168,162,158,0.1)] cursor-default"
                    : "bg-transparent text-[#FAF5F0] border border-[rgba(168,162,158,0.2)] hover:border-[rgba(168,162,158,0.4)]"
                }`}
              >
                {offer.cta}
              </Link>

              {/* Detail */}
              <p className="text-[12px] text-[#78716C] text-center">{offer.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
