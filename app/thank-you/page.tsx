"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 flex flex-col">
      {/* Main content */}
      <section className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-20 h-20 rounded-full bg-[#D85A30]/10 border border-[#D85A30]/30 flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-9 h-9 text-[#D85A30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              You&apos;re In! 🎉
            </h1>
            <p className="text-xl text-[#D85A30] font-semibold mb-4">
              Check your email for the AI Income Blueprint
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md mx-auto">
              I&apos;ve sent the free guide to your email. Check your inbox (and spam folder, just in case).
              While you wait — check out this special offer below.
            </p>

            {/* Upsell Box */}
            <div className="bg-gradient-to-b from-[#1A0E08] to-[#111111] border border-[#D85A30]/30 rounded-2xl p-8 mb-8 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#D85A30] text-xs font-bold uppercase tracking-widest">
                  Special One-Time Offer
                </span>
                <span className="text-xs text-gray-600 line-through">Rs.999</span>
              </div>

              <h2 className="text-2xl font-black text-white mb-3">
                AI Starter Kit — Just Rs.499
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ready-to-use templates, prompts, and tools to start earning with AI today.
                The exact kit I used to build LeadFlow CRM and earn Rs.4.6L.
              </p>

              <ul className="space-y-2 mb-7">
                {[
                  "50+ AI prompt templates for freelancing",
                  "10 done-for-you business ideas with AI",
                  "My personal tool stack (with setup guides)",
                  "Swipe file: pitches that got me clients",
                  "Bonus: Private Telegram community access",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D85A30] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#" // REPLACE: Add your Razorpay/payment link here
                className="block w-full py-4 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl text-center transition-all hover:shadow-xl hover:shadow-[#D85A30]/25 text-sm"
              >
                Yes! Get AI Starter Kit for Rs.499 →
              </a>
              <p className="text-gray-700 text-xs text-center mt-3">
                Secure payment via Razorpay. Instant digital delivery.
              </p>
            </div>

            {/* Social follows */}
            <p className="text-gray-500 text-sm mb-5">
              Follow me for daily AI income tips:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-[#111111] border border-[#1E1E1E] hover:border-[#D85A30]/30 rounded-xl text-gray-400 hover:text-white text-sm transition-all"
              >
                📸 Instagram @amitxai
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-[#111111] border border-[#1E1E1E] hover:border-[#D85A30]/30 rounded-xl text-gray-400 hover:text-white text-sm transition-all"
              >
                ▶ YouTube
              </a>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-[#111111] border border-[#1E1E1E] hover:border-[#D85A30]/30 rounded-xl text-gray-400 hover:text-white text-sm transition-all"
              >
                ✈ Telegram
              </a>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                ← Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
