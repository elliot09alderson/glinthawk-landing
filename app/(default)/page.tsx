import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Software Development & Digital Marketing Company | Bhilai, Chhattisgarh — Glinthawk Technology",
  description:
    "Glinthawk Technology is a leading AI software development and digital marketing company in Bhilai, Chhattisgarh. We specialize in AI-powered products, autonomous agents, mobile & desktop app development, SEO, GEO optimization, and personal branding. Serving clients globally from India.",
  keywords: [
    "AI software development Bhilai",
    "software company Chhattisgarh",
    "digital marketing agency Bhilai",
    "SEO company Chhattisgarh",
    "mobile app development near IIT Bhilai",
    "AI agents development India",
    "web development Raipur Bhilai Durg",
    "GEO optimization services",
    "IT company near IIT Bhilai",
    "custom software development Chhattisgarh",
    "React Next.js developer India",
    "Flutter developer Chhattisgarh",
    "AI automation company",
    "LLM chatbot development",
    "personal branding agency",
    "desktop application development India",
    "startup technology partner",
    "dedicated developers India",
    "staff augmentation Chhattisgarh",
    "machine learning company India",
  ],
  alternates: {
    canonical: "https://glinthawktechnologies.com",
  },
  openGraph: {
    title:
      "Glinthawk Technology — AI Software Development & Digital Marketing | Chhattisgarh",
    description:
      "Leading AI-first software development company in Bhilai, Chhattisgarh. Building intelligent products, mobile apps, desktop software, and delivering digital marketing & SEO services worldwide.",
    url: "https://glinthawktechnologies.com",
    type: "website",
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import ClientsMarquee from "@/components/sections/clients-marquee";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import TechStack from "@/components/sections/tech-stack";
import Process from "@/components/sections/process";
import Products from "@/components/sections/products";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/testimonials";
import Articles from "@/components/sections/articles";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <ClientsMarquee />
      <About />
      <Services />
      <TechStack />
      <Process />
      <Products />
      <Projects />
      <Testimonials />
      <Articles />
      <Cta />
    </>
  );
}
