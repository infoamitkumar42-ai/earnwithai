"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0C0A09]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] flex flex-col"
            style={{
              background: "rgba(12,10,9,0.97)",
              backdropFilter: "blur(40px)",
              borderLeft: "1px solid rgba(168,162,158,0.08)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgba(168,162,158,0.08)]">
              <span className="text-[16px] font-bold text-[#FAF5F0]">
                earningwithai<span className="text-[#D85A30]">.in</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 text-[#78716C] hover:text-[#FAF5F0]"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col gap-1 p-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center py-3 text-[20px] text-[#A8A29E] hover:text-[#FAF5F0] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-[rgba(168,162,158,0.08)]">
              <Link
                href="/free-guide"
                onClick={onClose}
                className="btn-primary w-full text-center text-[15px]"
              >
                Get Free Guide →
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
