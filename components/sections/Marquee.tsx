"use client";

import { motion } from "framer-motion";
import { MARQUEE_HASHTAGS } from "@/lib/constants";
import { fadeUp, viewportConfig } from "@/lib/animations";

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
  { type: "image", src: "/images/method-coaching.jpeg", alt: "Coaching", rotate: -3 },
  { type: "text", content: "from" },
  { type: "image", src: "/images/method-affiliate.jpeg", alt: "Affiliate", rotate: 1 },
  { type: "text", content: "anywhere" },
];

function MarqueeItem({ item }: { item: (typeof MARQUEE_ITEMS)[0] }) {
  if (item.type === "text") {
    return (
      <span
        className="font-bold select-none flex-shrink-0 whitespace-nowrap"
        style={{
          fontSize: "clamp(40px, 7vw, 64px)",
          color: "rgba(250,245,240,0.18)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {item.content}
      </span>
    );
  }

  return (
    <div
      className="flex-shrink-0 relative overflow-hidden rounded-2xl"
      style={{
        width: "clamp(160px, 16vw, 240px)",
        height: "clamp(80px, 8vw, 120px)",
        transform: `rotate(${item.rotate}deg)`,
        border: "1px solid rgba(168,162,158,0.1)",
        background: "#1C1917",
      }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}

export default function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      {/* Scrolling row */}
      <div className="marquee-wrapper mb-12">
        <div
          className="marquee-track"
          style={{
            alignItems: "center",
            gap: "24px",
            paddingLeft: "24px",
            animationDuration: "50s",
          }}
        >
          {doubled.map((item, i) => (
            <MarqueeItem key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Caption + hashtags */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
        className="container-warm text-center"
      >
        <p className="text-[17px] text-[#A8A29E] mb-6">
          Built for people who want real income from AI.
        </p>

        {/* Hashtag pills — desktop: wrap, mobile: horizontal scroll */}
        <div className="hidden sm:flex flex-wrap justify-center gap-3">
          {MARQUEE_HASHTAGS.map((tag) => (
            <HashtagPill key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex sm:hidden overflow-x-auto gap-2.5 pb-2 scrollbar-hide">
          {MARQUEE_HASHTAGS.map((tag) => (
            <HashtagPill key={tag} tag={tag} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function HashtagPill({ tag }: { tag: string }) {
  return (
    <span
      className="
        flex-shrink-0 px-4 py-2 rounded-full text-[13px] text-[#A8A29E]
        border border-[rgba(168,162,158,0.08)] bg-[#1C1917]/60
        cursor-default transition-all duration-200
        hover:border-[rgba(216,90,48,0.2)] hover:text-[#FAF5F0]
      "
    >
      {tag}
    </span>
  );
}
