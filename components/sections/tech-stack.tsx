"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal, LineReveal } from "@/components/motion/reveal";

const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Mobile",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Dart"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Go", "Java", "Rust"],
  },
  {
    name: "AI & ML",
    techs: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    name: "Data",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "GraphQL"],
  },
];

function TechPill({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2 },
      }}
      className="inline-flex cursor-default items-center rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-gray-300 transition-colors duration-300 hover:border-gray-600 hover:text-white"
    >
      {name}
    </motion.span>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Technology
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
              Built with the best
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto max-w-xl text-sm text-gray-500">
              We stay on the cutting edge — adopting the latest frameworks,
              languages, and platforms to deliver solutions that are fast, secure,
              and future-proof.
            </p>
          </Reveal>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: catIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-600">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, techIndex) => (
                  <TechPill
                    key={tech}
                    name={tech}
                    delay={catIndex * 0.1 + techIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
