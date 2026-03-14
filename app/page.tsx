import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import EmailCapture from "@/components/EmailCapture";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <About />
      <Offers />
      <Testimonials />
      <EmailCapture />
    </>
  );
}
