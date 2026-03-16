"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MARQUEE_HASHTAGS } from "@/lib/constants";
import { fadeUp, viewportConfig } from "@/lib/animations";

// Marquee items interleaved with method images
type MarqueeItemType =
  | { type: "text"; content: string; src?: undefined; alt?: undefined; rotate?: undefined }
  | { type: "image"; src: string; alt: string; rotate: number; content?: undefined };

const MARQUEE_ITEMS: MarqueeItemType[] = [
  { type: "text", content: "earn" },
  { type: "image", src: "/images/method-freelancing.png", alt: "AI Freelancing", rotate: -2 },
  { type: "text", content: "with AI" },
  { type: "image", src: "/images/method-saas.jpeg", alt: "Build SaaS", rotate: 3 },
  { type: "text", content: "build" },
  { type: "image", src: "/images/method-products.jpeg", alt: "Digital Products", rotate: -1 },
  { type: "text", content: "your" },
  { type: "image", src: "/images/razorpay-proof.jpeg", alt: "Proof", rotate: 2 },
  { type: "text", content: "income" },
  { type: "image", src: "/images/method-coaching.png", alt: "Coaching", rotate: -3 },
  { type: "text", content: "from" },
  { type: "image", src: "/images/method-affiliate.jpeg", alt: "Affiliate", rotate: 1 },
  { type: "text", content: "anywhere" },
];

function MarqueeItem({ item }: { item: typeof MARQUEE_ITEMS[0] }) {
  if (item.type === "text") {
    return (
      <span
        className="font-bold select-none flex-shrink-0"
        style={{
          fontSize: "clamp(48px, 8vw, 80px)",
          color: "rgba(168,162,158,0.35)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {item.content}
      </span>
    );
  }

  return (
    <div
      className="flex-shrink-0 relative overflow-hidden"
      style={{
        width: "clamp(120px, 16vw, 200px)",
        height: "clamp(60px, 8vw, 100px)",
        borderRadius: "12px",
        transform: `rotate(${item.rotate}deg)`,
        border: "1px solid rgba(168,162,158,0.1)",
        background: "#1C1917",
      }}
    >
      <Image
        src={item.src}
        alt={item.alt || ""}
        fill
        className="object-cover"
        sizes="200px"
      />
    </div>
  );
}

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      {/* Scrolling marquee row */}
      <div className="marquee-wrapper mb-10">
        <div className="marquee-track gap-8 px-8" style={{ alignItems: "center" }}>
          {doubled.map((item, i) => (
            <MarqueeItem key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Caption below */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
        className="container-warm text-center"
      >
        <p className="text-[18px] text-[#78716C] mb-8">
          Built for people who want real income from AI.
        </p>

        {/* Hashtag badges */}
        <div className="flex flex-wrap justify-center gap-2.5 overflow-x-auto pb-2">
          {MARQUEE_HASHTAGS.map((tag) => (
            <span
              key={tag}
              className="flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium text-[#A8A29E]"
              style={{
                background: "rgba(28,25,23,0.8)",
                border: "1px solid rgba(168,162,158,0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
