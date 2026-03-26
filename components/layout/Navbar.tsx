"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Free Guide", href: "/free-guide" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

interface NavbarProps {
  minimal?: boolean; // true on /free-guide — logo only
}

export default function Navbar({ minimal = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(12,10,9,0.85)] backdrop-blur-xl border-b border-[rgba(168,162,158,0.08)] shadow-[0_1px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-warm">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 group flex-shrink-0">
              <span className="text-[18px] font-bold text-[#FAF5F0] tracking-tight">
                earningwithai
              </span>
              <span className="text-[#D85A30] font-bold text-[18px]">.in</span>
            </Link>

            {/* Center nav — hidden on minimal (free-guide) */}
            {!minimal && (
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[14px] text-[#A8A29E] hover:text-[#FAF5F0] transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Right CTA */}
            {!minimal ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/free-guide"
                  className="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
                >
                  Get Free Guide
                </Link>
                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden p-2 text-[#A8A29E] hover:text-[#FAF5F0]"
                  aria-label="Open menu"
                >
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 1h20M1 8h14M1 15h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="w-8" /> /* spacer for centering on minimal */
            )}
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {!minimal && (
        <MobileNav
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          links={navLinks}
        />
      )}
    </>
  );
}
