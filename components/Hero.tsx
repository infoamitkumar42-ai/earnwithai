"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO, SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D85A30]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D85A30]/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D85A30]/10 border border-[#D85A30]/20 rounded-full text-[#D85A30] text-xs font-semibold mb-6">
                <span className="w-2 h-2 bg-[#D85A30] rounded-full animate-pulse" />
                AI Income Coach — @amitxai
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight"
            >
              {HERO.headline.split(" ").map((word, i) =>
                i === 1 ? (
                  <span key={i} className="gradient-text">
                    {" "}
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={HERO.ctaPrimaryHref}
                className="px-6 py-4 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl text-center transition-all duration-200 hover:shadow-xl hover:shadow-[#D85A30]/30 hover:-translate-y-0.5 text-sm md:text-base"
              >
                {HERO.ctaPrimary} →
              </Link>
              <a
                href={HERO.ctaSecondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl text-center transition-all duration-200 text-sm md:text-base flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-[#D85A30]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                {HERO.ctaSecondary}
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4 text-sm text-gray-600"
            >
              <div className="flex -space-x-2">
                {["PS", "RV", "SP"].map((init) => (
                  <div
                    key={init}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D85A30] to-[#B84820] border-2 border-[#0A0A0A] flex items-center justify-center text-white text-[9px] font-bold"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <span>13,500+ people already learning</span>
            </motion.div>
          </div>

          {/* Right: Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* REPLACE: Add your photo here */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D85A30]/30 to-transparent blur-2xl" />

              {/* Photo placeholder */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[#2A2A2A] flex flex-col items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D85A30] to-[#B84820] mb-4 flex items-center justify-center">
                  <span className="text-4xl font-black text-white">A</span>
                </div>
                <p className="text-gray-500 text-sm font-medium">Amit Kumar</p>
                <p className="text-[#D85A30] text-xs mt-1">AI Income Coach</p>
                {/* REPLACE: Add your photo here — use Next.js Image component */}
                <p className="text-gray-700 text-xs mt-4 px-6 text-center">
                  [Replace with your photo]
                </p>

                {/* Floating stat cards */}
                <div className="absolute top-4 right-4 bg-[#0D0D0D] border border-[#D85A30]/30 rounded-xl px-3 py-2 text-center">
                  <div className="text-[#D85A30] font-black text-sm">Rs.4.6L</div>
                  <div className="text-gray-600 text-[10px]">90 days</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl px-3 py-2 text-center">
                  <div className="text-white font-black text-sm">Zero</div>
                  <div className="text-gray-600 text-[10px]">Coding needed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-700 text-xs">Scroll to explore</span>
        <div className="w-5 h-8 border border-gray-800 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-[#D85A30] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
