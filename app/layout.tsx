import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Glinthawk Technology — AI-First Product & Service Company",
    template: "%s | Glinthawk Technology",
  },
  description:
    "We engineer intelligent digital solutions — AI products, autonomous agents, mobile & desktop apps, digital marketing, and SEO. Based in Bhilai, Chhattisgarh.",
  keywords: [
    "Glinthawk",
    "AI products",
    "software development company",
    "Bhilai",
    "Chhattisgarh",
    "AI agents",
    "mobile app development",
    "digital marketing",
    "SEO",
    "GEO optimization",
  ],
  authors: [{ name: "Glinthawk Technology" }],
  metadataBase: new URL("https://glinthawk.com"),
  openGraph: {
    title: "Glinthawk Technology — AI-First Product & Service Company",
    description:
      "We engineer intelligent digital solutions — from AI-powered products to full-stack applications.",
    siteName: "Glinthawk Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glinthawk Technology",
    description:
      "AI-first product & service company. Engineering intelligent solutions from Bhilai, India.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
