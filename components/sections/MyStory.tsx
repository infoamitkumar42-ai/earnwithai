"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { MY_STORY } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function MyStory() {
  return (
    <section className="section-gap">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="mb-10"
        >
          <span className="text-[13px] text-[#D85A30] font-medium uppercase tracking-[0.1em] mb-3 block">
            About Amit
          </span>
          <h2 className="section-heading">{MY_STORY.heading}</h2>
        </motion.div>

        {/* Image — full width, editorial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="relative w-full max-h-[500px] overflow-hidden rounded-[20px] mb-12"
        >
          {/* REPLACE: about-amit.png — arms crossed, dashboard behind */}
          <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/about-amit.png"
              alt="Amit Kumar — AI Income Coach"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Warm gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{
                background: "linear-gradient(to bottom, transparent, #0C0A09)",
              }}
            />
          </div>
        </motion.div>

        {/* Story paragraphs — centered, editorial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="max-w-[700px] mx-auto text-center"
        >
          <div className="space-y-5 mb-10">
            {MY_STORY.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={staggerItem}
                className="text-[17px] text-[#A8A29E] leading-[1.85]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div variants={staggerItem}>
            <Link href={MY_STORY.ctaHref} className="btn-primary">
              {MY_STORY.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
