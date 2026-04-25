"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Free Guide", href: "/free-guide" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

interface NavbarProps {
  minimal?: boolean;
}

export default function Navbar({ minimal = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glass pill wrapper */}
        <div className="container-warm pt-3">
          <div
            className={`relative flex items-center justify-between h-14 px-4 md:px-6 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-[rgba(12,10,9,0.82)] backdrop-blur-2xl border border-[rgba(168,162,158,0.10)] shadow-[0_8px_40px_rgba(0,0,0,0.4),0_1px_0_rgba(250,245,240,0.04)_inset]"
                : "bg-[rgba(12,10,9,0.0)] backdrop-blur-none border border-transparent"
            }`}
          >
            {/* Subtle noise texture overlay (glass depth) */}
            {scrolled && (
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            )}

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-0 flex-shrink-0 group"
              aria-label="earningwithai.in home"
            >
              {/* Dot accent */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#D85A30] mr-2.5 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-[17px] font-semibold text-[#FAF5F0] tracking-tight leading-none">
                earningwithai
              </span>
              <span className="text-[17px] font-semibold text-[#D85A30] tracking-tight leading-none">
                .in
              </span>
            </Link>

            {/* ── Center nav links ── */}
            {!minimal && (
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHovered(link.href)}
                      onMouseLeave={() => setHovered(null)}
                      className="relative px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 rounded-xl group"
                      style={{
                        color: isActive ? "#FAF5F0" : hovered === link.href ? "#FAF5F0" : "#A8A29E",
                      }}
                    >
                      {/* Hover background pill */}
                      {hovered === link.href && !isActive && (
                        <motion.span
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-xl bg-[rgba(250,245,240,0.05)]"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D85A30]"
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* ── Right side ── */}
            {!minimal ? (
              <div className="flex items-center gap-3">
                {/* CTA — desktop */}
                <Link
                  href="/free-guide"
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-[#FAF5F0] transition-all duration-300 group"
                  style={{
                    background: "linear-gradient(135deg, #D85A30 0%, #F97316 100%)",
                    boxShadow: "0 0 0 0 rgba(216,90,48,0)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(216,90,48,0.45)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 0 rgba(216,90,48,0)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  Get Free Guide
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Hamburger — mobile */}
                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-[rgba(250,245,240,0.06)] border border-[rgba(168,162,158,0.1)] hover:bg-[rgba(250,245,240,0.1)] transition-colors duration-200"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M1 1l13 13M14 1L1 14" stroke="#FAF5F0" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex flex-col items-center gap-[5px]"
                      >
                        <span className="w-[18px] h-[1.5px] bg-[#A8A29E] rounded-full" />
                        <span className="w-[12px] h-[1.5px] bg-[#A8A29E] rounded-full self-start ml-[3px]" />
                        <span className="w-[18px] h-[1.5px] bg-[#A8A29E] rounded-full" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            ) : (
              <div className="w-8" />
            )}
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {!minimal && mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[-1] bg-[#0C0A09]/70 backdrop-blur-md"
                onClick={() => setMobileOpen(false)}
              />

              {/* Drawer panel */}
              <motion.div
                key="drawer"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                className="container-warm"
              >
                <div
                  className="mt-2 rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(18,14,12,0.96)",
                    backdropFilter: "blur(40px)",
                    border: "1px solid rgba(168,162,158,0.10)",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Links */}
                  <nav className="px-3 pt-3 pb-2">
                    {NAV_LINKS.map((link, i) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-medium transition-colors duration-200 ${
                              isActive
                                ? "text-[#FAF5F0] bg-[rgba(216,90,48,0.08)]"
                                : "text-[#A8A29E] hover:text-[#FAF5F0] hover:bg-[rgba(250,245,240,0.04)]"
                            }`}
                          >
                            {link.label}
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D85A30]" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Divider */}
                  <div className="mx-4 h-px bg-[rgba(168,162,158,0.08)]" />

                  {/* Bottom CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28, duration: 0.3 }}
                    className="p-3"
                  >
                    <Link
                      href="/free-guide"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[15px] font-semibold text-[#FAF5F0] transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #D85A30 0%, #F97316 100%)",
                        boxShadow: "0 4px 20px rgba(216,90,48,0.3)",
                      }}
                    >
                      Get Free Guide
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
