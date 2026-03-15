"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TOOLS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import type { Metadata } from "next";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="h-1 rounded-full"
          style={{
            width: "10px",
            background: i < rating ? "#D85A30" : "rgba(168,162,158,0.15)",
          }}
        />
      ))}
      <span className="text-[12px] text-[#D85A30] font-semibold ml-1">{rating}/10</span>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-32" style={{ background: "#0C0A09" }}>
        {/* Header */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(216,90,48,0.05) 0%, transparent 60%)",
          }}
        >
          <div className="container-warm text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[13px] text-[#D85A30] font-medium uppercase tracking-[0.1em] mb-4 block">
                Amit&apos;s Stack
              </span>
              <h1
                className="mb-4"
                style={{
                  fontSize: "clamp(30px, 5vw, 52px)",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  color: "#FAF5F0",
                }}
              >
                12 tools I actually use
              </h1>
              <p className="text-[17px] text-[#A8A29E] max-w-[480px] mx-auto leading-[1.7]">
                Not a random list. I use these DAILY to make money with AI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="pb-20">
          <div className="container-warm">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="glass-card flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-[18px] font-semibold text-[#FAF5F0]"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {tool.name}
                    </h3>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium flex-shrink-0"
                      style={{
                        background:
                          tool.type === "Free"
                            ? "rgba(34,197,94,0.08)"
                            : "rgba(168,162,158,0.08)",
                        color:
                          tool.type === "Free"
                            ? "#4ade80"
                            : "#A8A29E",
                        border:
                          tool.type === "Free"
                            ? "1px solid rgba(34,197,94,0.15)"
                            : "1px solid rgba(168,162,158,0.1)",
                      }}
                    >
                      {tool.type}
                    </span>
                  </div>

                  <p className="text-[14px] text-[#78716C] leading-relaxed flex-1 mb-4">
                    {tool.description}
                  </p>

                  <div className="mb-5">
                    <StarRating rating={tool.rating} />
                  </div>

                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2.5 !px-5 !text-[14px] text-center w-full"
                  >
                    Try it →
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Sticky bottom CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 hidden md:block"
        style={{
          background: "rgba(12,10,9,0.9)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(168,162,158,0.08)",
        }}
      >
        <div className="container-warm py-4 flex items-center justify-between">
          <p className="text-[15px] text-[#A8A29E]">
            Want the complete toolkit guide for free?
          </p>
          <Link href="/free-guide" className="btn-primary !py-2.5 !px-6 !text-[14px]">
            Get AI Toolkit Guide FREE →
          </Link>
        </div>
      </div>

      {/* Mobile bottom CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 md:hidden px-4 pb-4 pt-3"
        style={{
          background: "rgba(12,10,9,0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(168,162,158,0.08)",
        }}
      >
        <Link href="/free-guide" className="btn-primary w-full justify-center text-[15px]">
          Get AI Toolkit Guide FREE →
        </Link>
      </div>

      <Footer />
    </>
  );
}
