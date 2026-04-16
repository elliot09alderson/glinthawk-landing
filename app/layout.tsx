import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

import Header from "@/components/ui/header";
import JsonLd from "@/components/seo/json-ld";

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

export const metadata: Metadata = {
  title: {
    default:
      "Glinthawk Technology — AI-First Software & Marketing",
    template: "%s | Glinthawk Technology",
  },
  description:
    "Leading AI software development company in Bhilai, Chhattisgarh. We build AI-powered products, autonomous agents, mobile & desktop apps, and deliver digital marketing, SEO & GEO optimization services globally.",
  keywords: [
    "AI software development company Chhattisgarh",
    "software development company Bhilai",
    "AI development company India",
    "digital marketing agency Chhattisgarh",
    "SEO services Bhilai",
    "GEO optimization company",
    "mobile app development Chhattisgarh",
    "AI agents development",
    "custom software development India",
    "web development company Bhilai",
    "IT company Chhattisgarh",
    "AI products company",
    "desktop application development",
    "personal branding agency India",
    "React Next.js development",
    "Flutter app development India",
    "machine learning solutions",
    "LLM integration services",
    "digital marketing Raipur Bhilai",
    "Glinthawk Technology",
  ],
  authors: [{ name: "Glinthawk Technology", url: "https://glinthawktechnologies.com" }],
  creator: "Glinthawk Technology",
  publisher: "Glinthawk Technology",
  metadataBase: new URL("https://glinthawktechnologies.com"),
  alternates: {
    canonical: "https://glinthawktechnologies.com",
  },
  openGraph: {
    title: "Glinthawk Technology — AI Software Development & Digital Marketing",
    description:
      "Leading AI software development and digital marketing company based in Chhattisgarh, India. Building intelligent solutions for businesses worldwide.",
    url: "https://glinthawktechnologies.com",
    siteName: "Glinthawk Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glinthawk Technology — AI Software Development Company",
    description:
      "AI-powered software development, digital marketing & SEO services. Based in Chhattisgarh, delivering globally.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
  other: {
    "geo.region": "IN-CT",
    "geo.placename": "Bhilai, Chhattisgarh",
    "geo.position": "21.1938;81.3509",
    ICBM: "21.1938, 81.3509",
    "revisit-after": "7 days",
    rating: "general",
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
        className={`${inter.variable} ${nacelle.variable} font-inter text-base text-gray-200 antialiased`}
        style={{ backgroundColor: "#07091e" }}
      >
        <JsonLd />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
