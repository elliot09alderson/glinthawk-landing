"use client";

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
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="group mx-3 w-[340px] shrink-0 rounded-2xl border border-gray-800 bg-gray-900/30 p-7 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/50 sm:w-[400px] sm:p-8">
      {/* Quote mark */}
      <span className="mb-4 block font-nacelle text-3xl leading-none text-gray-800">
        &ldquo;
      </span>
      <blockquote className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
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
    </div>
  );
}

export default function Testimonials() {
  // Duplicate list for seamless infinite loop
  const loopList = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
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

      <div className="mx-auto mb-12 max-w-6xl px-4 sm:px-6">
        <LineReveal />
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Vignette — left edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent sm:w-40"
        />
        {/* Vignette — right edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent sm:w-40"
        />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex">
            {loopList.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
