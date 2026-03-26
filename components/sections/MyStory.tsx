"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { MY_STORY } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function MyStory() {
  return (
    <motion.section
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#FAF5F0] tracking-[-0.02em]">
            {MY_STORY.heading}
          </h2>
        </motion.div>

        {/* Image — full width, editorial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="relative w-full rounded-[20px] mb-12"
        >
          <div className="relative w-full">
            <img
              src="/images/hero-amit.png"
              alt="Amit Kumar — AI Income Coach"
              className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/0 to-[#0C0A09] rounded-2xl" />
          </div>
        </motion.div>

        {/* Story paragraphs — centered, editorial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
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
            <Link
              href={MY_STORY.ctaHref}
              className="inline-block bg-[#D85A30] text-[#FAF5F0] px-8 py-4 rounded-full font-medium text-[16px] transition-all duration-300 hover:bg-[#F97316] hover:shadow-[0_0_30px_rgba(216,90,48,0.3)] hover:-translate-y-0.5"
            >
              {MY_STORY.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
