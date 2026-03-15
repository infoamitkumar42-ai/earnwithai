"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <>
      <Navbar minimal />
      <main
        className="min-h-screen pt-24 pb-20 flex items-center"
        style={{ background: "#0C0A09" }}
      >
        <div className="container-warm">
          <div className="max-w-[520px] mx-auto text-center">
            {/* Checkmark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{
                background: "rgba(216,90,48,0.08)",
                border: "1px solid rgba(216,90,48,0.2)",
              }}
            >
              <span className="text-4xl">📬</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className="mb-3"
                style={{
                  fontSize: "clamp(28px, 5vw, 40px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#FAF5F0",
                }}
              >
                Check your inbox! 📬
              </h1>
              <p className="text-[17px] text-[#A8A29E] leading-[1.7] mb-12">
                Your AI Income Blueprint 2026 is on its way.
                Check your email (and spam just in case).
              </p>

              {/* Upsell card */}
              <div
                className="rounded-[20px] p-7 text-left mb-8"
                style={{
                  background: "rgba(28,25,23,0.7)",
                  border: "1px solid rgba(216,90,48,0.2)",
                  boxShadow: "0 0 40px rgba(216,90,48,0.05)",
                }}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#D85A30] mb-3 block">
                  Special Offer
                </span>
                <h2
                  className="text-[22px] font-semibold text-[#FAF5F0] mb-2"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  Want more? Get the AI Starter Kit
                </h2>
                <p className="text-[15px] text-[#78716C] leading-relaxed mb-5">
                  Templates, prompts, and checklists to start earning immediately.
                  The exact kit that helped my students get their first clients.
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[28px] font-bold text-[#FAF5F0]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    ₹499
                  </span>
                  <a
                    href={SITE.starterKitUrl}
                    className="btn-primary !py-3 !px-6 !text-[15px]"
                  >
                    Get Starter Kit →
                  </a>
                </div>
              </div>

              {/* Social follows */}
              <p className="text-[14px] text-[#78716C] mb-4">
                Follow @amitxai for daily AI tips:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-3 !px-6 !text-[14px] flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow on Instagram
                </a>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-3 !px-6 !text-[14px] flex items-center gap-2"
                >
                  ✈ Join Telegram
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-3 !px-6 !text-[14px] flex items-center gap-2"
                >
                  💬 Join WhatsApp
                </a>
              </div>

              <Link
                href="/"
                className="block mt-8 text-[13px] text-[#78716C] hover:text-[#A8A29E] transition-colors"
              >
                ← Back to home
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
