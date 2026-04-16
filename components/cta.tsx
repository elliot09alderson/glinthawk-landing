"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import SectionGlow from "@/components/motion/section-glow";

export default function Cta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 px-6 py-16 sm:px-12 md:py-24"
        >
          {/* Corner decorations */}
          <div className="pointer-events-none absolute left-0 top-0 h-24 w-px bg-gray-600/30" />
          <div className="pointer-events-none absolute left-0 top-0 h-px w-24 bg-gray-600/30" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-px bg-gray-600/30" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-px w-24 bg-gray-600/30" />

          {/* Dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgb(160,160,180) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Atmospheric glow */}
          <SectionGlow
            color="violet"
            className="-right-40 -top-40"
            size={600}
            intensity={0.9}
            rotate={-20}
          />
          <SectionGlow
            color="indigo"
            className="-bottom-32 -left-32"
            size={480}
            intensity={0.7}
            rotate={15}
            showArcs={false}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — CTA Text */}
            <div>
              <Reveal>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                  Let&apos;s Talk
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mb-6 font-nacelle text-3xl font-semibold leading-tight text-gray-100 sm:text-4xl md:text-5xl">
                  Ready to build
                  <br />
                  something extraordinary?
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mb-8 max-w-md text-base text-gray-400">
                  Whether you have a clear vision or just a spark of an idea —
                  we&apos;ll help you turn it into reality. Let&apos;s start a
                  conversation.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:hello@glinthawk.com"
                    className="group inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-gray-950 transition-all duration-300 hover:bg-gray-200"
                  >
                    Get in Touch
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="tel:+919XXXXXXXXX"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-7 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gray-600 hover:text-white"
                  >
                    Schedule a Call
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right — Contact Info */}
            <div className="flex flex-col items-end justify-center text-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-8 text-right"
              >
                {/* Office */}
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-600">
                    Office
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Near IIT Bhilai
                    <br />
                    Bhilai, Chhattisgarh 490023
                    <br />
                    India
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-600">
                    Email
                  </p>
                  <a
                    href="mailto:hello@glinthawk.com"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    hello@glinthawk.com
                  </a>
                </div>

                {/* Working Hours */}
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-600">
                    Working Hours
                  </p>
                  <p className="text-sm text-gray-300">
                    Monday — Friday
                    <br />
                    10:00 AM — 7:00 PM IST
                  </p>
                </div>

                {/* Social */}
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-600">
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    {["X / Twitter", "LinkedIn", "GitHub"].map((platform) => (
                      <a
                        key={platform}
                        href="#0"
                        className="text-xs text-gray-500 transition-colors hover:text-white"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
