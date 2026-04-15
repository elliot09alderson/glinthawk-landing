"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#work", label: "Work" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contact"
              className="rounded-lg border border-gray-700 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-white/10 hover:text-white"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col items-end gap-1.5">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 4.5, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                className="block h-[1.5px] rounded-full bg-gray-300"
                transition={{ duration: 0.3 }}
                style={{ width: 20, originX: 0.5, originY: 0.5 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className="block h-[1.5px] w-3.5 rounded-full bg-gray-300"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -4.5, width: 20 }
                    : { rotate: 0, y: 0, width: 14 }
                }
                className="block h-[1.5px] rounded-full bg-gray-300"
                transition={{ duration: 0.3 }}
                style={{ width: 14, originX: 0.5, originY: 0.5 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-nacelle text-3xl font-semibold text-gray-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 rounded-lg border border-gray-700 px-8 py-3 text-base font-medium text-gray-200 transition-colors hover:border-gray-500"
                >
                  Get in touch
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
