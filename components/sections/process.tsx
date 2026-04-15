"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We immerse ourselves in your business — studying your market, users, competitors, and goals to define a strategy that sets the foundation for everything we build.",
    detail: "Workshops \u00B7 Research \u00B7 Roadmap",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Our architects design scalable systems while our designers craft intuitive experiences. Every technical decision is mapped against your long-term business objectives.",
    detail: "System Design \u00B7 Prototyping \u00B7 UX",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build iteratively with continuous feedback loops. Every feature is rigorously tested, code-reviewed, and performance-benchmarked before it moves forward.",
    detail: "Agile Sprints \u00B7 CI/CD \u00B7 QA",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Deployment is just the beginning. We monitor performance, optimize for scale, and provide ongoing support to ensure your product thrives in the real world.",
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
              A proven methodology refined across dozens of projects — from first
              conversation to market launch and beyond.
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-950 text-sm font-medium text-gray-500">
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
                  <span className="mb-2 inline-block text-sm font-medium text-gray-500 md:hidden">
                    {step.number}
                  </span>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
