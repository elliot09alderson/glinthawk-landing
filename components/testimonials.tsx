"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

function TestimonialCard({
  testimonial,
  index,
  featured = false,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  featured?: boolean;
}) {
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
      className={`group rounded-2xl border border-indigo-900/30 bg-indigo-950/10 transition-all duration-300 hover:border-indigo-700/50 hover:bg-indigo-950/20 ${
        featured ? "p-8 md:p-10" : "p-6 md:p-8"
      }`}
    >
      {/* Quote */}
      <span className="mb-4 block font-nacelle text-3xl leading-none text-gray-800">
        &ldquo;
      </span>
      <blockquote
        className={`mb-8 leading-relaxed text-gray-300 ${
          featured ? "text-base sm:text-lg" : "text-sm"
        }`}
      >
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-200">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Top row — 2 featured cards */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i}
                featured
              />
            ))}
          </div>

          {/* Bottom row — 3 standard cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(2).map((t, i) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i + 2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
