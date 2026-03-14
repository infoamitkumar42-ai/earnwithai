"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OFFERS } from "@/lib/constants";

export default function Offers() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#D85A30] text-sm font-semibold uppercase tracking-widest mb-3 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Choose Your AI Journey
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            From a free guide to personal coaching — I have something for every stage of your AI income journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-6 border card-hover ${
                offer.highlight
                  ? "bg-gradient-to-b from-[#1A0E08] to-[#111111] border-[#D85A30]/40"
                  : "bg-[#111111] border-[#1E1E1E]"
              }`}
            >
              {/* Badge */}
              <span
                className={`absolute -top-3 left-5 px-3 py-1 text-xs font-bold rounded-full ${
                  offer.highlight
                    ? "bg-[#D85A30] text-white"
                    : "bg-[#1E1E1E] text-gray-400"
                }`}
              >
                {offer.badge}
              </span>

              {offer.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-[#D85A30]/5 pointer-events-none" />
              )}

              <div className="mt-3 flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {offer.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-2xl font-black text-white mb-4">{offer.price}</div>
                <Link
                  href={offer.href}
                  className={`block w-full py-3 rounded-xl text-center text-sm font-bold transition-all duration-200 ${
                    offer.cta === "Coming Soon"
                      ? "bg-[#1A1A1A] text-gray-600 cursor-not-allowed border border-[#2A2A2A]"
                      : offer.highlight
                      ? "bg-[#D85A30] hover:bg-[#E87A55] text-white hover:shadow-lg hover:shadow-[#D85A30]/30"
                      : "bg-[#1A1A1A] hover:bg-[#222222] text-white border border-[#2A2A2A] hover:border-[#D85A30]/40"
                  }`}
                >
                  {offer.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
