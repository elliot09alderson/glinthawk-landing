"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Reveal, LineReveal } from "@/components/motion/reveal";

import Testimonial01 from "@/public/images/TestimonialImg01.jpg";
import Testimonial02 from "@/public/images/TestimonialImg02.jpg";
import Testimonial03 from "@/public/images/TestimonialImg03.jpg";
import Testimonial06 from "@/public/images/TestimonialImg06.jpg";
import Testimonial07 from "@/public/images/TestimonialImg07.jpg";

const testimonials = [
  {
    quote:
      "Glinthawk transformed our entire digital infrastructure. Their AI agents reduced our customer support response time by 70%. The team operates at a level I haven't seen from agencies twice their size.",
    name: "Rajesh Menon",
    role: "CTO, FinServe Technologies",
    image: Testimonial01,
  },
  {
    quote:
      "We hired them for a mobile app and ended up partnering on three more projects. Their understanding of AI-first product design is genuinely ahead of the curve.",
    name: "Priya Sharma",
    role: "Founder, HealthSync",
    image: Testimonial02,
  },
  {
    quote:
      "The personal branding strategy they built for me completely changed my professional trajectory. Within 6 months, my LinkedIn following grew 10x and I was speaking at industry conferences.",
    name: "Aditya Patel",
    role: "CEO, GrowthLoop",
    image: Testimonial03,
  },
  {
    quote:
      "Their GEO optimization work put us on the map — literally. We went from zero AI search visibility to being the first result on multiple platforms. Incredible ROI.",
    name: "Sneha Krishnan",
    role: "Head of Marketing, TradeCraft",
    image: Testimonial06,
  },
  {
    quote:
      "What sets Glinthawk apart is their ability to think like a product company, not just a service provider. They challenged our assumptions and delivered something far better than what we originally envisioned.",
    name: "Vikram Das",
    role: "Director of Engineering, CloudNine",
    image: Testimonial07,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Testimonials
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
              What our clients say
            </h2>
          </Reveal>
        </div>

        <LineReveal className="mb-16" />

        <div ref={ref} className="mx-auto max-w-4xl">
          {/* Main quote */}
          <div className="relative mb-12 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Quote mark */}
                <span className="mb-6 block font-nacelle text-6xl leading-none text-gray-700">
                  &ldquo;
                </span>
                <blockquote className="mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl md:leading-relaxed">
                  {testimonials[active].quote}
                </blockquote>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-200">
                      {testimonials[active].name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative p-2"
                aria-label={`View testimonial ${i + 1}`}
              >
                <motion.div
                  className="h-1.5 rounded-full bg-gray-700"
                  animate={{
                    width: i === active ? 32 : 6,
                    backgroundColor:
                      i === active
                        ? "rgb(255, 255, 255)"
                        : "rgb(55, 65, 81)",
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </button>
            ))}
          </div>

          {/* Small testimonial cards — visible on desktop */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
            }}
            className="mt-16 hidden grid-cols-5 gap-3 lg:grid"
          >
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => setActive(i)}
                className={`rounded-lg border p-4 text-left transition-all duration-300 ${
                  i === active
                    ? "border-gray-600 bg-gray-900/60"
                    : "border-gray-800/50 bg-transparent hover:border-gray-700"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={24}
                    height={24}
                    className="rounded-full object-cover grayscale"
                  />
                  <p className="truncate text-xs font-medium text-gray-300">
                    {t.name}
                  </p>
                </div>
                <p className="line-clamp-2 text-xs text-gray-600">
                  {t.quote.slice(0, 80)}...
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
