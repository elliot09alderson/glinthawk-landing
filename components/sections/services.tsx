"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal, LineReveal } from "@/components/motion/reveal";

const services = [
  {
    id: "01",
    title: "Personal Branding",
    short: "Build your digital identity",
    description:
      "We craft compelling personal brands that establish authority, attract opportunities, and amplify your professional presence across all digital channels.",
    tags: ["Brand Strategy", "Content Design", "Social Presence", "Thought Leadership"],
  },
  {
    id: "02",
    title: "Digital Marketing & SEO",
    short: "Data-driven growth strategies",
    description:
      "Our marketing team deploys targeted campaigns backed by analytics, ensuring every dollar spent drives measurable results. We dominate search rankings with white-hat SEO techniques.",
    tags: ["Performance Marketing", "Technical SEO", "Content Strategy", "Analytics"],
  },
  {
    id: "03",
    title: "GEO Optimization",
    short: "Location-based digital dominance",
    description:
      "Generative Engine Optimization for the AI era. We ensure your brand surfaces prominently in AI-generated search results, voice assistants, and next-gen discovery platforms.",
    tags: ["AI Search", "Local SEO", "Voice Search", "Map Optimization"],
  },
  {
    id: "04",
    title: "Web Development",
    short: "Websites, apps & e-commerce",
    description:
      "From blazing-fast marketing sites to full-scale e-commerce platforms — we build responsive, SEO-optimised web applications using Next.js, React, and modern web standards. Production platforms like zxcom.in, crimsonbricks.com, and nirmalhandloom.com are built by us.",
    tags: ["Next.js", "React", "E-Commerce", "REST APIs", "Performance"],
  },
  {
    id: "05",
    title: "Mobile Applications",
    short: "Native Android & iOS experiences",
    description:
      "We build high-performance native and cross-platform mobile applications using Flutter, React Native, Swift, and Kotlin — designed for scale from day one.",
    tags: ["Android", "iOS", "Flutter", "React Native"],
  },
  {
    id: "06",
    title: "Desktop Applications",
    short: "Cross-platform desktop power",
    description:
      "From Electron to Tauri to native builds — we develop robust desktop applications for Windows, macOS, and Linux that integrate deeply with the operating system.",
    tags: ["Electron", "Tauri", "Windows", "macOS"],
  },
  {
    id: "07",
    title: "AI Products & Agents",
    short: "Intelligence, automated",
    description:
      "Our flagship capability. We design and deploy custom AI agents, LLM-powered products, workflow automation systems, and intelligent tools that operate autonomously.",
    tags: ["AI Agents", "LLM Products", "Automation", "Machine Learning"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.08,
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-default"
    >
      {/* Top border that animates on hover */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-px bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />

      <div className="border-t border-gray-800 py-8 transition-all duration-500 group-hover:border-transparent md:py-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-4">
              <span className="text-xs tabular-nums text-gray-600">
                {service.id}
              </span>
              <h3 className="font-nacelle text-xl font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                {service.title}
              </h3>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mb-4 max-w-xl text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {!isHovered && (
              <p className="text-sm text-gray-500">{service.short}</p>
            )}
          </div>

          {/* Arrow */}
          <motion.div
            animate={{
              x: isHovered ? 0 : -5,
              opacity: isHovered ? 1 : 0.3,
            }}
            transition={{ duration: 0.3 }}
            className="mt-1 shrink-0 text-lg text-gray-500"
          >
            &rarr;
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                What We Do
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
                Services
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm text-gray-500">
              End-to-end capabilities that cover every dimension of digital
              transformation — from brand strategy to autonomous AI systems.
            </p>
          </Reveal>
        </div>

        <LineReveal className="mb-2" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
