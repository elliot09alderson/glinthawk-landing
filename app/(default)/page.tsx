export const metadata = {
  title: "Glinthawk Technology — AI-First Product & Service Company",
  description:
    "We engineer intelligent digital solutions — from AI-powered products and autonomous agents to full-stack mobile, desktop, and web applications. Based in Bhilai, Chhattisgarh, building for the world.",
  keywords: [
    "AI products",
    "software development",
    "digital marketing",
    "SEO",
    "GEO optimization",
    "mobile app development",
    "desktop applications",
    "AI agents",
    "Bhilai",
    "Chhattisgarh",
    "Glinthawk",
  ],
  openGraph: {
    title: "Glinthawk Technology — AI-First Product & Service Company",
    description:
      "We engineer intelligent digital solutions — from AI-powered products to full-stack applications.",
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
      <Cta />
    </>
  );
}
