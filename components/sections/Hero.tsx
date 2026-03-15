"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO, SITE } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const AVATAR_COLORS = ["#D85A30", "#A8A29E", "#78716C", "#F97316", "#292524"];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Orange blob top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 10%, rgba(216,90,48,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Ghosted hero image — very faint bg presence */}
      {/* REPLACE: hero-amit.png — image 1 (arms spread, Instagram screen behind) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-0">
          <div
            className="w-full h-full relative"
            style={{ opacity: 0.04 }}
          >
            <Image
              src="/images/hero-amit.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="container-warm relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium uppercase tracking-[0.06em] text-[#A8A29E]"
            style={{
              background: "rgba(28,25,23,0.8)",
              border: "1px solid rgba(168,162,158,0.12)",
              backdropFilter: "blur(20px)",
            }}
          >
            {HERO.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="hero-headline max-w-[800px] mb-6"
        >
          {HERO.headline1}
          <br />
          {HERO.headline2}{" "}
          <em
            className="font-serif not-italic text-[#D85A30]"
            style={{ fontStyle: "italic", fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {HERO.headlineAccent}
          </em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="text-[18px] md:text-[20px] text-[#A8A29E] leading-[1.7] max-w-[580px] mb-10"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-12"
        >
          <Link href="/free-guide" className="btn-primary text-[16px]">
            {HERO.ctaPrimary}
          </Link>
          <a href="#proof" className="btn-secondary text-[16px]">
            {HERO.ctaSecondary}
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-3"
        >
          {/* Stacked avatar circles */}
          <div className="flex -space-x-2">
            {AVATAR_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0C0A09] flex items-center justify-center"
                style={{ backgroundColor: color, zIndex: AVATAR_COLORS.length - i }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-[14px] text-[#78716C]">
            <span>{HERO.socialProof}</span>
            <span className="text-[#D85A30] font-semibold">{HERO.rating}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
