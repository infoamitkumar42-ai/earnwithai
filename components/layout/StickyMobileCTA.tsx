"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~70vh (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-3"
      style={{
        background: "rgba(12,10,9,0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(168,162,158,0.08)",
      }}
    >
      <Link href="/free-guide" className="btn-primary w-full justify-center text-[15px]">
        Get Free Guide — 100% Free →
      </Link>
    </div>
  );
}
