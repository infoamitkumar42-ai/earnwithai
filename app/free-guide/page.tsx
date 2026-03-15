"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { FREE_GUIDE, SITE } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const CHECK_ICON = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="9" cy="9" r="9" fill="rgba(216,90,48,0.15)" />
    <path d="M5 9l3 3 5-5" stroke="#D85A30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FreeGuidePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("email_address", email);
      fd.append("fields[first_name]", name);
      await fetch(SITE.convertkitFormUrl, { method: "POST", body: fd, mode: "no-cors" });
      setDone(true);
      setTimeout(() => (window.location.href = "/thank-you"), 1000);
    } catch {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Minimal navbar — logo only */}
      <Navbar minimal />

      <main
        className="min-h-screen pt-24 pb-16"
        style={{
          background: "#0C0A09",
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(216,90,48,0.05) 0%, transparent 60%)",
        }}
      >
        <div className="container-warm">
          <div className="max-w-[600px] mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-7"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] bg-[rgba(216,90,48,0.12)] text-[#D85A30] border border-[rgba(216,90,48,0.2)]">
                {FREE_GUIDE.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-4"
              style={{
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
                color: "#FAF5F0",
              }}
            >
              {FREE_GUIDE.headline}
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="text-center text-[17px] text-[#A8A29E] leading-[1.7] mb-10"
            >
              {FREE_GUIDE.subheadline}
            </motion.p>

            {/* Guide image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="relative mx-auto mb-12"
              style={{ maxWidth: "380px" }}
            >
              {/* REPLACE: guide-mockup.png — book mockup image */}
              <div
                className="relative w-full rounded-[20px] overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  background: "#1C1917",
                  border: "1px solid rgba(168,162,158,0.1)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.4), 0 0 60px rgba(216,90,48,0.08)",
                }}
              >
                <Image
                  src="/images/guide-mockup.png"
                  alt="AI Income Blueprint 2026 — Free Guide Mockup"
                  fill
                  className="object-cover"
                  priority
                  sizes="380px"
                />
              </div>
            </motion.div>

            {/* What's inside */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mb-10"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#78716C] mb-5">
                What&apos;s inside:
              </p>
              <div className="space-y-4">
                {FREE_GUIDE.bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    {CHECK_ICON}
                    <span className="text-[16px] text-[#FAF5F0] leading-[1.6]">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {done ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(216,90,48,0.1)", border: "1px solid rgba(216,90,48,0.2)" }}
                  >
                    <svg className="w-7 h-7 text-[#D85A30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#FAF5F0] font-semibold text-lg">You&apos;re in!</p>
                  <p className="text-[#78716C] text-sm mt-1">Redirecting you...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={FREE_GUIDE.namePlaceholder}
                    required
                    className="input-warm !h-[52px] !rounded-[14px]"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={FREE_GUIDE.emailPlaceholder}
                    required
                    className="input-warm !h-[52px] !rounded-[14px]"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary !h-[56px] !rounded-[14px] !text-[16px] !font-semibold disabled:opacity-60"
                  >
                    {loading ? "Please wait..." : FREE_GUIDE.ctaButton}
                  </button>
                </form>
              )}

              {/* Social proof */}
              <p className="text-center text-[13px] text-[#78716C] mt-4">
                {FREE_GUIDE.socialProof}
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
