"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "./logo";

const footerLinks = {
  Services: [
    { label: "Personal Branding", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "SEO & GEO", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Desktop Apps", href: "#services" },
    { label: "AI Products", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Portfolio", href: "#work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Blog", href: "#0" },
    { label: "Case Studies", href: "#work" },
    { label: "Privacy Policy", href: "#0" },
    { label: "Terms of Service", href: "#0" },
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="border-t border-gray-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 py-14 sm:grid-cols-2 md:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">
              A product & service-based IT company engineering intelligent
              solutions from Bhilai, Chhattisgarh — for the world.
            </p>
            <div className="text-sm text-gray-600">
              <p>Near IIT Bhilai</p>
              <p>Bhilai, Chhattisgarh 490023</p>
              <p className="mt-2">
                <a
                  href="mailto:hello@glinthawk.com"
                  className="text-gray-500 transition-colors hover:text-white"
                >
                  hello@glinthawk.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + colIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-2"
            >
              <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
              Social
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "X / Twitter", href: "#0" },
                { label: "LinkedIn", href: "#0" },
                { label: "GitHub", href: "#0" },
                { label: "Instagram", href: "#0" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800/60 py-6 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Glinthawk Technology. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-700">
            Designed & Engineered in Bhilai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
