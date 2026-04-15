"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal, LineReveal } from "@/components/motion/reveal";

/* ── data ─────────────────────────────────────────────── */

const expertise = [
  { label: "Frontend Engineering", pct: 95, techs: "React · Next.js · Vue · TypeScript · Tailwind" },
  { label: "Mobile Development", pct: 90, techs: "Flutter · React Native · Swift · Kotlin" },
  { label: "Backend & APIs", pct: 92, techs: "Node.js · Python · Go · Rust · GraphQL" },
  { label: "AI & Machine Learning", pct: 88, techs: "PyTorch · LangChain · OpenAI · Hugging Face" },
  { label: "Cloud & DevOps", pct: 85, techs: "AWS · Docker · Kubernetes · Terraform · CI/CD" },
  { label: "Data & Analytics", pct: 87, techs: "PostgreSQL · MongoDB · Redis · Elasticsearch" },
];

const orbitTechs = [
  { name: "React", angle: 0, ring: 1 },
  { name: "Next.js", angle: 60, ring: 1 },
  { name: "Flutter", angle: 120, ring: 1 },
  { name: "Python", angle: 180, ring: 1 },
  { name: "Go", angle: 240, ring: 1 },
  { name: "TypeScript", angle: 300, ring: 1 },
  { name: "PyTorch", angle: 30, ring: 2 },
  { name: "LangChain", angle: 90, ring: 2 },
  { name: "AWS", angle: 150, ring: 2 },
  { name: "Docker", angle: 210, ring: 2 },
  { name: "PostgreSQL", angle: 270, ring: 2 },
  { name: "Redis", angle: 330, ring: 2 },
];

/* ── skill bar ────────────────────────────────────────── */

function SkillBar({
  label,
  pct,
  techs,
  index,
}: {
  label: string;
  pct: number;
  techs: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="mb-2 flex items-baseline justify-between">
        <h4 className="text-sm font-medium text-gray-200 transition-colors group-hover:text-white">
          {label}
        </h4>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
          className="font-nacelle text-sm tabular-nums text-gray-500"
        >
          {pct}%
        </motion.span>
      </div>

      {/* bar track */}
      <div className="relative mb-1.5 h-1.5 overflow-hidden rounded-full bg-gray-800/60">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gray-400 to-white"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        {/* glow dot at the end */}
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white/80 blur-[3px]"
          initial={{ left: 0, opacity: 0 }}
          animate={
            isInView
              ? { left: `${pct}%`, opacity: [0, 1, 0.6] }
              : { left: 0, opacity: 0 }
          }
          transition={{
            duration: 1.2,
            delay: index * 0.1 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      <p className="text-xs text-gray-600 transition-colors group-hover:text-gray-500">
        {techs}
      </p>
    </motion.div>
  );
}

/* ── orbit item (separate component so hooks are legal) ── */

function OrbitItem({
  tech,
  radius,
  viewSize,
  isInView,
  parentRotate,
  baseDelay,
  index,
  ring,
}: {
  tech: { name: string; angle: number; ring: number };
  radius: number;
  viewSize: number;
  isInView: boolean;
  parentRotate: ReturnType<typeof useTransform<number, number>>;
  baseDelay: number;
  index: number;
  ring: 1 | 2;
}) {
  const counterRotate = useTransform(parentRotate, (v) => -v);
  const rad = (tech.angle * Math.PI) / 180;
  const x = viewSize / 2 + radius * Math.cos(rad);
  const y = viewSize / 2 + radius * Math.sin(rad);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${(x / viewSize) * 100}%`,
        top: `${(y / viewSize) * 100}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
        duration: 0.5,
        delay: baseDelay + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        style={{ rotate: counterRotate }}
        className={
          ring === 1
            ? "flex h-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/90 px-3 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors hover:border-gray-500 hover:text-white"
            : "flex h-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-950/90 px-2.5 text-[11px] text-gray-400 backdrop-blur-sm transition-colors hover:border-gray-600 hover:text-gray-200"
        }
      >
        {tech.name}
      </motion.div>
    </motion.div>
  );
}

/* ── orbit visualization ──────────────────────────────── */

function TechOrbit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"],
  });
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const viewSize = 420;
  const ring1Radius = 120;
  const ring2Radius = 190;

  const ring1Techs = orbitTechs.filter((t) => t.ring === 1);
  const ring2Techs = orbitTechs.filter((t) => t.ring === 2);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* Orbit rings */}
      <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${viewSize} ${viewSize}`}>
        <motion.circle
          cx="210" cy="210" r={ring1Radius}
          fill="none" stroke="rgb(55,65,81)" strokeWidth="1" strokeDasharray="4 6"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isInView ? { opacity: 0.5, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="210" cy="210" r={ring2Radius}
          fill="none" stroke="rgb(55,65,81)" strokeWidth="1" strokeDasharray="4 6"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isInView ? { opacity: 0.3, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        />
      </svg>

      {/* Center label */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-700 bg-gray-900/80">
          <span className="font-nacelle text-xs font-semibold uppercase tracking-wider text-gray-300">
            Stack
          </span>
        </div>
      </motion.div>

      {/* Ring 1 */}
      <motion.div className="absolute inset-0" style={{ rotate: rotate1 }}>
        {ring1Techs.map((tech, i) => (
          <OrbitItem
            key={tech.name} tech={tech} radius={ring1Radius} viewSize={viewSize}
            isInView={isInView} parentRotate={rotate1} baseDelay={0.6} index={i} ring={1}
          />
        ))}
      </motion.div>

      {/* Ring 2 */}
      <motion.div className="absolute inset-0" style={{ rotate: rotate2 }}>
        {ring2Techs.map((tech, i) => (
          <OrbitItem
            key={tech.name} tech={tech} radius={ring2Radius} viewSize={viewSize}
            isInView={isInView} parentRotate={rotate2} baseDelay={1} index={i} ring={2}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ── main section ─────────────────────────────────────── */

export default function TechStack() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Technology
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
                Engineering depth
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm text-gray-500">
              Mastery across the full stack — from pixel-perfect frontends to
              scalable AI infrastructure. Every project benefits from years
              of deep expertise.
            </p>
          </Reveal>
        </div>

        <LineReveal className="mb-16" />

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Skill bars */}
          <div className="space-y-6">
            {expertise.map((skill, i) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                pct={skill.pct}
                techs={skill.techs}
                index={i}
              />
            ))}
          </div>

          {/* Right — Orbit visualization */}
          <div className="hidden lg:block">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
