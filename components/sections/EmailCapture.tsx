"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EMAIL_CAPTURE, SITE } from "@/lib/constants";
import { fadeUp, viewportConfig } from "@/lib/animations";

interface EmailCaptureProps {
  redirectTo?: string;
}

export default function EmailCapture({ redirectTo = "/thank-you" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("email_address", email);
      await fetch(SITE.convertkitFormUrl, { method: "POST", body: fd, mode: "no-cors" });
      setDone(true);
      setTimeout(() => (window.location.href = redirectTo), 1000);
    } catch {
      setLoading(false);
    }
  };

  return (
    <section
      className="section-gap relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(216,90,48,0.05) 0%, transparent 70%)",
      }}
    >
      <div className="container-warm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="section-heading mb-4">{EMAIL_CAPTURE.heading}</h2>
          <p className="text-[17px] text-[#A8A29E] mb-10 leading-[1.7]">
            {EMAIL_CAPTURE.subheading}
          </p>

          {done ? (
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(216,90,48,0.1)", border: "1px solid rgba(216,90,48,0.2)" }}
              >
                <svg className="w-6 h-6 text-[#D85A30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#FAF5F0] font-medium">You&apos;re in! Redirecting...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative mb-5">
              {/* Single-row pill input + button */}
              <div
                className="flex items-center gap-2 p-2 rounded-full"
                style={{
                  background: "#1C1917",
                  border: "1px solid rgba(168,162,158,0.12)",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={EMAIL_CAPTURE.placeholder}
                  required
                  className="flex-1 bg-transparent px-4 py-2 text-[16px] text-[#FAF5F0] placeholder-[#78716C] outline-none border-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary !py-3 !px-6 !text-[15px] flex-shrink-0 disabled:opacity-60"
                >
                  {loading ? "..." : EMAIL_CAPTURE.cta}
                </button>
              </div>
            </form>
          )}

          <p className="text-[13px] text-[#78716C]">{EMAIL_CAPTURE.socialProof}</p>
        </motion.div>
      </div>
    </section>
  );
}
