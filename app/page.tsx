import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Proof from "@/components/sections/Proof";
import Methods from "@/components/sections/Methods";
import MyStory from "@/components/sections/MyStory";
import Offerings from "@/components/sections/Offerings";
import ToolsStrip from "@/components/sections/ToolsStrip";
import EmailCapture from "@/components/sections/EmailCapture";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Proof />
        <Methods />
        <MyStory />
        <Offerings />
        <ToolsStrip />
        <EmailCapture />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
