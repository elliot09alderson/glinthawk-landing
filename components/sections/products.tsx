"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Reveal, LineReveal } from "@/components/motion/reveal";

const products = [
  {
    name: "HawkAI Agent Platform",
    category: "Autonomous AI",
    description:
      "Deploy intelligent AI agents that handle customer support, automate data analysis, manage workflows, and make decisions — all without human intervention. Built on cutting-edge LLM orchestration.",
    features: [
      "Multi-agent orchestration",
      "Natural language interfaces",
      "Tool-use & API integration",
      "Self-improving pipelines",
    ],
    status: "Live",
  },
  {
    name: "BrandForge AI",
    category: "Personal Branding",
    description:
      "An AI-powered personal branding toolkit that generates content, manages your social media presence, analyzes engagement patterns, and builds your authority — on autopilot.",
    features: [
      "Content generation engine",
      "Social media automation",
      "Audience analytics",
      "Brand voice training",
    ],
    status: "Beta",
  },
  {
    name: "DataHawk Analytics",
    category: "Business Intelligence",
    description:
      "An intelligent analytics dashboard that transforms raw data into actionable insights. Ask questions in plain English and get instant visualizations, reports, and recommendations.",
    features: [
      "Natural language queries",
      "Auto-generated reports",
      "Predictive analytics",
      "Real-time dashboards",
    ],
    status: "Coming Soon",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), {
    damping: 30,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), {
    damping: 30,
    stiffness: 200,
  });

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  const statusColors: Record<string, string> = {
    Live: "text-emerald-400 border-emerald-400/30",
    Beta: "text-amber-400 border-amber-400/30",
    "Coming Soon": "text-gray-500 border-gray-700",
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative rounded-2xl border border-gray-800 bg-gray-900/30 p-8 transition-colors duration-500 hover:border-gray-700 md:p-10"
      >
        {/* Corner accent */}
        <motion.div
          className="absolute right-0 top-0 h-16 w-px bg-white"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="absolute right-0 top-0 h-px w-16 bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "right" }}
        />

        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
            {product.category}
          </p>
          <span
            className={`rounded-full border px-3 py-0.5 text-xs ${statusColors[product.status]}`}
          >
            {product.status}
          </span>
        </div>

        <h3 className="mb-4 font-nacelle text-2xl font-semibold text-gray-100 transition-colors duration-300 group-hover:text-white sm:text-3xl">
          {product.name}
        </h3>

        <p className="mb-8 text-sm leading-relaxed text-gray-400">
          {product.description}
        </p>

        <div className="space-y-3">
          {product.features.map((feature, fi) => (
            <motion.div
              key={feature}
              className="flex items-center gap-3 text-sm text-gray-500"
              initial={false}
              animate={
                isHovered
                  ? { x: 0, opacity: 1 }
                  : { x: -5, opacity: 0.6 }
              }
              transition={{ delay: fi * 0.05, duration: 0.3 }}
            >
              <span className="h-px w-4 bg-gray-500/50" />
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Our Products
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
              AI-powered products
              <br />
              <span className="text-gray-500">built in-house.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-sm text-gray-500">
              We don&apos;t just build for clients — we build our own products too.
              These are the tools born from our obsession with artificial
              intelligence and automation.
            </p>
          </Reveal>
        </div>

        <LineReveal className="mb-16" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
