import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: "%s | earningwithai.in",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.png", // REPLACE: Add your OG image
        width: 1200,
        height: 630,
        alt: "earningwithai.in — AI Income Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  keywords: [
    "earn with AI",
    "AI income",
    "make money with AI",
    "AI se paise kaise kamayein",
    "Amit Kumar AI coach",
    "LeadFlow CRM",
    "AI freelancing India",
    "earningwithai",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0A] text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
