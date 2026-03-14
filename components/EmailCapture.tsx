"use client";

import { useState } from "react";
import { EMAIL_CAPTURE, SITE } from "@/lib/constants";

interface EmailCaptureProps {
  variant?: "default" | "compact";
  showName?: boolean;
  ctaText?: string;
  redirectTo?: string;
}

export default function EmailCapture({
  variant = "default",
  showName = false,
  ctaText,
  redirectTo = "/thank-you",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ConvertKit form submission
    try {
      const formData = new FormData();
      formData.append("email_address", email);
      if (name) formData.append("fields[first_name]", name);

      await fetch(SITE.convertkitFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setTimeout(() => {
        window.location.href = redirectTo;
      }, 800);
    } catch {
      setLoading(false);
      setSubmitted(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-[#D85A30]/10 border border-[#D85A30]/30 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#D85A30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold">You&apos;re in! Redirecting...</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={EMAIL_CAPTURE.placeholder}
          required
          className="flex-1 px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#D85A30] rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-3 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl text-sm transition-all whitespace-nowrap disabled:opacity-60"
        >
          {loading ? "..." : ctaText || EMAIL_CAPTURE.ctaButton}
        </button>
      </form>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-b from-[#0D0D0D] to-[#080808]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D85A30]/10 border border-[#D85A30]/20 rounded-full mb-6">
          <span className="text-[#D85A30] text-xs font-semibold">Free Newsletter</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {EMAIL_CAPTURE.heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-8">
          {EMAIL_CAPTURE.subheading}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={EMAIL_CAPTURE.placeholder}
            required
            className="flex-1 px-5 py-4 bg-[#141414] border border-[#2A2A2A] focus:border-[#D85A30] rounded-xl text-white placeholder-gray-600 outline-none transition-colors text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-4 bg-[#D85A30] hover:bg-[#E87A55] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-[#D85A30]/20 text-sm whitespace-nowrap disabled:opacity-60"
          >
            {loading ? "Subscribing..." : ctaText || EMAIL_CAPTURE.ctaButton}
          </button>
        </form>

        <p className="text-gray-700 text-xs mt-4">
          No spam. Unsubscribe anytime. 100% free.
        </p>
      </div>
    </section>
  );
}
