"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { instrumentSerif } from "@/lib/fonts";

const AVATAR_COLORS = ["#D85A30", "#F97316", "#A8A29E", "#78716C", "#292524"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 relative z-10 flex flex-col items-center text-center">

        {/* 1. Badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] text-[#A8A29E] border border-[rgba(168,162,158,0.08)] bg-[#1C1917]/60 backdrop-blur-sm">
            {HERO.badge}
          </span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-[42px] md:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-[#FAF5F0] mb-7"
        >
          {HERO.headline1}
          <br />
          {HERO.headline2}{" "}
          <span
            className={instrumentSerif.className}
            style={{ fontStyle: "italic", color: "#FAF5F0" }}
          >
            {HERO.headlineAccent}
          </span>
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-[17px] md:text-[20px] leading-[1.6] text-[#A8A29E] max-w-2xl mx-auto mb-10"
        >
          {HERO.subheadline}
        </motion.p>

        {/* 4. Buttons */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row gap-4 items-center mb-12"
        >
          <Link
            href="/free-guide"
            className="px-8 py-4 rounded-full font-medium text-[16px] text-[#FAF5F0] bg-[#D85A30] transition-all duration-300 hover:bg-[#F97316] hover:shadow-[0_0_30px_rgba(216,90,48,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            {HERO.ctaPrimary}
          </Link>
          <a
            href="#proof"
            className="px-8 py-4 rounded-full font-medium text-[16px] text-[#FAF5F0] bg-transparent border border-[rgba(168,162,158,0.2)] transition-all duration-300 hover:border-[rgba(168,162,158,0.4)] hover:bg-white/[0.03] whitespace-nowrap"
          >
            {HERO.ctaSecondary}
          </a>
        </motion.div>

        {/* 5. Social proof */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex">
            {AVATAR_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0C0A09]"
                style={{
                  backgroundColor: color,
                  marginLeft: i === 0 ? 0 : "-8px",
                  zIndex: AVATAR_COLORS.length - i,
                  position: "relative",
                }}
              />
            ))}
          </div>
          <span className="text-[14px] text-[#78716C]">{HERO.socialProof}</span>
          <span className="text-[14px] font-semibold text-[#D85A30]">{HERO.rating}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-[rgba(168,162,158,0.2)] rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-[#D85A30] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
