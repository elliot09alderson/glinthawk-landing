"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    number: "01",
    title: "Understand & Document",
    description:
      "We start by deeply analyzing your project requirements — your market, users, competitors, and business objectives. We build a mental model of the entire product and produce clear documentation before a single line of code is written.",
    detail: "Requirements Analysis \u00B7 Mental Modeling \u00B7 Documentation",
  },
  {
    number: "02",
    title: "MVP in 7 Days",
    description:
      "We don't make you wait months for a first look. Within 7 days, we deliver a working MVP — a tangible product you can see, touch, and test. This ensures we're aligned on vision early, and you're never surprised by a final product that drifted from expectations.",
    detail: "Rapid Prototyping \u00B7 Core Features \u00B7 7-Day Delivery",
    highlight: true,
  },
  {
    number: "03",
    title: "Iterate & Build",
    description:
      "With validated direction from the MVP, we move into full development. We build iteratively in tight cycles, shipping updates frequently so you see progress every week — not every quarter.",
    detail: "Agile Sprints \u00B7 Continuous Delivery \u00B7 QA",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We deploy to production, monitor performance, and optimize for scale. Post-launch, we stay engaged — providing ongoing support, feature development, and growth engineering to keep your product ahead.",
    detail: "Deployment \u00B7 Monitoring \u00B7 Growth",
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Process
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
              How we work
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto max-w-xl text-sm text-gray-500">
              Most agencies make you wait months before you see anything real.
              We deliver a working MVP within 7 days — so your vision stays
              on track from day one.
            </p>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-gray-800/50 md:block lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              className="w-full bg-gray-500/50"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col gap-6 md:flex-row md:items-start md:gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step number dot */}
                <div className="relative z-10 hidden shrink-0 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-900/50 bg-indigo-950/60 text-sm font-medium text-indigo-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 1
                      ? "lg:pr-20 lg:text-right"
                      : "lg:pl-20"
                  } ${i % 2 === 0 ? "lg:ml-[50%]" : "lg:mr-[50%]"}`}
                >
                  <div
                    className={`${
                      step.highlight
                        ? "rounded-xl border border-indigo-800/40 bg-indigo-950/20 p-6"
                        : ""
                    }`}
                  >
                    <span className="mb-2 inline-block text-sm font-medium text-gray-500 md:hidden">
                      {step.number}
                    </span>
                    {step.highlight && (
                      <span className="mb-3 inline-block rounded-full border border-indigo-700/50 bg-indigo-900/30 px-3 py-0.5 text-xs text-indigo-300">
                        What sets us apart
                      </span>
                    )}
                    <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-100 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                    <p className="text-xs tracking-wider text-gray-600">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
