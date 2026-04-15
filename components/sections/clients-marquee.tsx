"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import ClientLogo01 from "@/public/images/client-logo-01.svg";
import ClientLogo02 from "@/public/images/client-logo-02.svg";
import ClientLogo03 from "@/public/images/client-logo-03.svg";
import ClientLogo04 from "@/public/images/client-logo-04.svg";
import ClientLogo05 from "@/public/images/client-logo-05.svg";
import ClientLogo06 from "@/public/images/client-logo-06.svg";
import ClientLogo07 from "@/public/images/client-logo-07.svg";
import ClientLogo08 from "@/public/images/client-logo-08.svg";
import ClientLogo09 from "@/public/images/client-logo-09.svg";

const logos = [
  ClientLogo01,
  ClientLogo02,
  ClientLogo03,
  ClientLogo04,
  ClientLogo05,
  ClientLogo06,
  ClientLogo07,
  ClientLogo08,
  ClientLogo09,
];

export default function ClientsMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative border-y border-gray-800/60 py-14 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
          Trusted by forward-thinking companies
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-950 to-transparent" />

          {/* Scrolling track */}
          <div className="marquee-track flex items-center gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center opacity-40 transition-opacity duration-300 hover:opacity-70"
              >
                <Image
                  src={logo}
                  alt={`Client ${(i % logos.length) + 1}`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
