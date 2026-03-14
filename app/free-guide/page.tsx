"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FREE_GUIDE, SITE } from "@/lib/constants";

export default function FreeGuidePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email_address", email);
      formData.append("fields[first_name]", name);

      await fetch(SITE.convertkitFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 800);
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D85A30]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D85A30]/10 border border-[#D85A30]/20 rounded-full text-[#D85A30] text-xs font-semibold mb-5">
                100% Free Download
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {FREE_GUIDE.headline}
              </h1>
              <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                {FREE_GUIDE.subheadline}
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {["PS", "RV", "SP", "AK"].map((init) => (
                    <div
                      key={init}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D85A30] to-[#B84820] border-2 border-[#0A0A0A] flex items-center justify-center text-white text-[10px] font-bold"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-bold">13,500+</span> people already joined
                </p>
              </div>

              {/* Form */}
              {submitted ? (
                <div className="bg-[#111111] border border-[#D85A30]/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#D85A30]/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#D85A30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">You&apos;re in!</p>
                  <p className="text-gray-500 text-sm mt-2">Redirecting you...</p>
                </div>
              ) : (
                <div className="bg-[#111111] border border-[#1E1E1E] rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-5">{FREE_GUIDE.formHeading}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={FREE_GUIDE.namePlaceholder}
                      required
                      className="w-full px-4 py-3.5 bg-[#0F0F0F] border border-[#2A2A2A] focus:border-[#D85A30] rounded-xl text-white placeholder-gray-600 outline-none transition-colors text-sm"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={FREE_GUIDE.emailPlaceholder}
                      required
                      className="w-full px-4 py-3.5 bg-[#0F0F0F] border border-[#2A2A2A] focus:border-[#D85A30] rounded-xl text-white placeholder-gray-600 outline-none transition-colors text-sm"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-[#D85A30]/25 text-sm disabled:opacity-60"
                    >
                      {loading ? "Please wait..." : FREE_GUIDE.ctaButton}
                    </button>
                  </form>
                  <p className="text-gray-700 text-xs text-center mt-3">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Right: Guide Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              {/* REPLACE: Add your guide mockup/book cover image here */}
              <div className="relative mx-auto max-w-xs">
                <div className="absolute inset-0 bg-[#D85A30]/20 blur-3xl rounded-3xl" />
                <div className="relative bg-gradient-to-br from-[#D85A30] to-[#B84820] rounded-2xl p-8 text-white shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-black/20" />
                  <div className="relative">
                    <p className="text-orange-200 text-xs font-semibold uppercase tracking-widest mb-3">Free Blueprint</p>
                    <h3 className="text-2xl font-black leading-tight mb-6">
                      AI Income Blueprint<br />2026
                    </h3>
                    <div className="space-y-2.5 mb-8">
                      {FREE_GUIDE.bullets.slice(0, 3).map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-orange-200 mt-0.5">✓</span>
                          <span className="text-orange-100 text-xs leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-white/60 text-xs">By Amit Kumar — @amitxai</div>
                  </div>
                </div>

                {/* Shadow/depth effect */}
                <div className="absolute -bottom-2 left-4 right-4 h-4 bg-[#D85A30]/20 rounded-b-xl blur-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-14 px-4 sm:px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              What&apos;s Inside the Free Guide
            </h2>
            <p className="text-gray-500 text-sm">Everything you need to start earning with AI</p>
          </motion.div>

          <div className="space-y-4">
            {FREE_GUIDE.bullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-[#111111] border border-[#1E1E1E] rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D85A30]/10 border border-[#D85A30]/20 flex items-center justify-center flex-shrink-0 text-[#D85A30] font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed pt-1">{bullet}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-[#D85A30]/25 text-sm"
            >
              Download Free Guide →
            </button>
            <p className="text-gray-600 text-xs mt-3">Free forever. No credit card needed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
