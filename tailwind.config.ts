import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#0C0A09",
          card: "#1C1917",
          elevated: "#292524",
          border: "rgba(168,162,158,0.08)",
        },
        accent: {
          DEFAULT: "#D85A30",
          light: "#F97316",
          glow: "rgba(216,90,48,0.15)",
          subtle: "rgba(216,90,48,0.06)",
        },
        cream: {
          DEFAULT: "#FAF5F0",
          muted: "#A8A29E",
          dim: "#78716C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      fontSize: {
        "hero-desktop": ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "hero-mobile": ["42px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "section-desktop": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-mobile": ["32px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "1100px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
        full: "9999px",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "warm-mesh":
          "radial-gradient(ellipse at 20% 0%, rgba(216,90,48,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(216,90,48,0.03) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
