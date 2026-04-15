"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const line1Words = ["We", "design,", "build", "&", "scale"];
const line2Words = ["digital", "products."];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(160,160,180,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vertical lines */}
      <div className="pointer-events-none absolute inset-0 mx-auto flex max-w-6xl justify-between px-4 sm:px-6">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px bg-gray-800/40"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "top" }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        {/* Main headline */}
        <h1 className="mb-10 font-nacelle text-[2.75rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">
            {line1Words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block text-gray-100"
                  initial={{ y: "120%", rotateX: -40 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="mt-2 block sm:mt-3">
            {line2Words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block text-gray-100"
                  initial={{ y: "120%", rotateX: -40 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
        >
          Software engineering, AI systems, and growth strategy
          for companies that refuse to stand still.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-gray-950 transition-all duration-300 hover:bg-gray-200"
          >
            Work with us
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-3.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:border-gray-500 hover:text-gray-200"
          >
            See what we do
          </a>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-24 inline-flex items-center gap-2.5 text-sm text-gray-600"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Bhilai, Chhattisgarh
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-800 pt-2"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
