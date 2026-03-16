"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MY_STORY, PROOF, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const TIMELINE = [
  { year: "2019", event: "Started learning digital marketing from scratch" },
  { year: "2021", event: "Founded digital marketing agency" },
  { year: "2023", event: "Discovered AI tools — everything changed" },
  { year: "2024", event: "Built LeadFlow CRM with ZERO coding, earned ₹4.6L in 90 days" },
  { year: "2025–26", event: "Teaching 13,500+ people how to earn with AI" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24" style={{ background: "#0C0A09" }}>
        {/* Hero */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(216,90,48,0.05) 0%, transparent 60%)",
          }}
        >
          <div className="container-warm text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[13px] text-[#D85A30] font-medium uppercase tracking-[0.1em] mb-4 block">
                The Story
              </span>
              <h1
                className="mb-4"
                style={{
                  fontSize: "clamp(32px, 5.5vw, 56px)",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  color: "#FAF5F0",
                }}
              >
                {MY_STORY.heading}
              </h1>
              <p className="text-[17px] text-[#A8A29E] max-w-[480px] mx-auto leading-[1.7]">
                AI Income Coach · Digital Marketing Agency Owner · @amitxai
              </p>
            </motion.div>
          </div>
        </section>

        {/* Photo */}
        <section className="pb-16">
          <div className="container-warm">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              className="relative w-full max-h-[500px] overflow-hidden rounded-[20px] mb-16"
            >
              {/* REPLACE: about-amit.png */}
              <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
                <img
                  src="/images/about-amit.png"
                  alt="Amit Kumar — AI Income Coach"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-40"
                  style={{ background: "linear-gradient(to bottom, transparent, #0C0A09)" }}
                />
              </div>
            </motion.div>

            {/* Story paragraphs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
              className="max-w-[680px] mx-auto"
            >
              <div className="space-y-5 mb-12">
                {MY_STORY.paragraphs.map((para, i) => (
                  <motion.p key={i} variants={staggerItem} className="text-[17px] text-[#A8A29E] leading-[1.85]">
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Stats */}
              <motion.div variants={staggerItem} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {PROOF.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-4 rounded-[16px]"
                    style={{ background: "rgba(28,25,23,0.6)", border: "1px solid rgba(168,162,158,0.08)" }}
                  >
                    <div className="text-[24px] font-bold text-[#D85A30] mb-1" style={{ letterSpacing: "-0.02em" }}>
                      {stat.display}
                    </div>
                    <p className="text-[12px] text-[#78716C]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Timeline */}
              <motion.div variants={staggerItem} className="mb-12">
                <h3 className="text-[20px] font-semibold text-[#FAF5F0] mb-6" style={{ letterSpacing: "-0.01em" }}>
                  My journey
                </h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-[rgba(168,162,158,0.1)]" />
                  <div className="space-y-6">
                    {TIMELINE.map((item, i) => (
                      <div key={i} className="flex gap-6 pl-12 relative">
                        <div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-[#1C1917] border border-[rgba(216,90,48,0.3)] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#D85A30]" />
                        </div>
                        <div>
                          <span className="text-[#D85A30] font-bold text-[14px]">{item.year}</span>
                          <p className="text-[#A8A29E] text-[15px] mt-0.5 leading-relaxed">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Follow on Instagram →
                </a>
                <Link href="/free-guide" className="btn-secondary">
                  Get Free Blueprint
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
