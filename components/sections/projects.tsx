"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Reveal, LineReveal } from "@/components/motion/reveal";

const projects = [
  {
    title: "E-Commerce Marketplace",
    category: "Full-Stack Web",
    description:
      "A high-traffic marketplace with AI-powered product recommendations, real-time inventory management, and seamless payment integration serving thousands of daily transactions.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: "3x conversion increase",
  },
  {
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description:
      "End-to-end patient management platform with predictive health analytics, appointment scheduling, and HIPAA-compliant data handling for a network of 50+ clinics.",
    tech: ["Flutter", "Python", "TensorFlow", "GCP"],
    metrics: "50+ clinics onboarded",
  },
  {
    title: "FinTech Trading Dashboard",
    category: "Real-Time Analytics",
    description:
      "A real-time trading analytics platform processing millions of data points per second, with customizable dashboards, alerting, and AI-driven market insights.",
    tech: ["Next.js", "Go", "Redis", "WebSocket"],
    metrics: "Sub-100ms latency",
  },
  {
    title: "Smart City IoT Platform",
    category: "IoT & Infrastructure",
    description:
      "Connected infrastructure monitoring system integrating thousands of IoT sensors for traffic management, air quality monitoring, and resource optimization.",
    tech: ["React", "Python", "AWS IoT", "Grafana"],
    metrics: "10,000+ sensors",
  },
  {
    title: "AI Content Studio",
    category: "AI Product",
    description:
      "A generative AI platform for content teams — automating copywriting, image generation, video scripting, and multi-channel publishing with brand voice consistency.",
    tech: ["Next.js", "LangChain", "OpenAI", "Vercel"],
    metrics: "80% time saved",
  },
  {
    title: "Enterprise Resource Planner",
    category: "Desktop Application",
    description:
      "Cross-platform desktop ERP system for manufacturing firms, handling inventory, procurement, HR, and financial reporting with offline-first capabilities.",
    tech: ["Electron", "TypeScript", "SQLite", "Docker"],
    metrics: "200+ daily users",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group relative cursor-pointer rounded-xl border border-gray-800 bg-gray-900/20 p-6 transition-all duration-500 hover:border-gray-700 hover:bg-gray-900/40 md:p-8"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
          {project.category}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-gray-600 transition-colors group-hover:text-gray-400"
        >
          +
        </motion.span>
      </div>

      <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200 transition-colors group-hover:text-white sm:text-xl">
        {project.title}
      </h3>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom info */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-800/50 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded bg-gray-800/60 px-2 py-0.5 text-xs text-gray-500"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-xs font-medium text-emerald-400/80">
          {project.metrics}
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Portfolio
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
                Selected work
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm text-gray-500">
              A glimpse into the projects we&apos;ve delivered across industries —
              each one a testament to our engineering standards and creative
              problem-solving.
            </p>
          </Reveal>
        </div>

        <LineReveal className="mb-16" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
