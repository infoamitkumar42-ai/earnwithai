"use client";


import { motion } from "framer-motion";
import { PROOF } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function Proof() {
  return (
    <section id="proof" className="section-gap">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="section-heading">{PROOF.heading}</h2>
        </motion.div>

        {/* Main proof image — laptop frame style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="relative max-w-[860px] mx-auto mb-10"
        >
          {/* Warm glow behind */}
          <div
            className="absolute inset-[-20px] rounded-[32px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(216,90,48,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Laptop frame */}
          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{
              background: "#1C1917",
              border: "1px solid rgba(168,162,158,0.12)",
              padding: "10px 10px 0",
              boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,162,158,0.06)",
            }}
          >
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-1.5 px-3 pb-2"
              style={{ borderBottom: "1px solid rgba(168,162,158,0.08)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div
                className="flex-1 mx-4 h-5 rounded-full"
                style={{ background: "rgba(168,162,158,0.06)" }}
              />
            </div>

            {/* Screenshot */}
            {/* REPLACE: razorpay-proof.png — the Razorpay dashboard screenshot image */}
            <div className="relative aspect-[16/9] w-full bg-[#0F0E0D]">
              <img
                src="/images/razorpay-proof.jpeg"
                alt="Razorpay Dashboard — ₹4,63,949 collected from 256 payments"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-[14px] text-[#78716C] mt-4">
            {PROOF.imageCaption}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 max-w-[700px] mx-auto"
        >
          {PROOF.stats.map((stat, i) => (
            <motion.div key={i} variants={staggerItem} className="text-center">
              <div
                className="text-[42px] md:text-[48px] font-bold text-[#D85A30] leading-none mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  display={stat.display}
                />
              </div>
              <p className="text-[13px] text-[#78716C] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Proof badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3"
        >
          {PROOF.badges.map((badge, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-[13px] font-medium text-[#A8A29E]"
              style={{
                background: "rgba(28,25,23,0.8)",
                border: "1px solid rgba(168,162,158,0.1)",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
