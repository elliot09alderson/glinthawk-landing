"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal, LineReveal, CountUp } from "@/components/motion/reveal";
import SectionGlow from "@/components/motion/section-glow";

/* ── data ─────────────────────────────────────────────── */

const barMetrics = [
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "On-Time Delivery", value: 95, suffix: "%" },
  { label: "Repeat Business", value: 82, suffix: "%" },
  { label: "First-Year ROI", value: 340, suffix: "%" },
];

const ringStats = [
  { label: "Projects\nDelivered", value: 50, max: 60, color: "#e5e7eb" },
  { label: "AI Models\nDeployed", value: 15, max: 20, color: "#9ca3af" },
  { label: "Countries\nServed", value: 12, max: 20, color: "#6b7280" },
];

const growthData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 15 },
  { month: "Apr", value: 28 },
  { month: "May", value: 35 },
  { month: "Jun", value: 32 },
  { month: "Jul", value: 45 },
  { month: "Aug", value: 52 },
  { month: "Sep", value: 48 },
  { month: "Oct", value: 65 },
  { month: "Nov", value: 72 },
  { month: "Dec", value: 88 },
];

/* ── animated bar chart ───────────────────────────────── */

function BarChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const maxValue = Math.max(...barMetrics.map((m) => m.value));

  return (
    <div ref={ref} className="rounded-xl border border-gray-800 bg-gray-900/20 p-6 md:p-8">
      <p className="mb-6 text-xs font-medium uppercase tracking-wider text-gray-500">
        Performance Metrics
      </p>
      <div className="space-y-5">
        {barMetrics.map((metric, i) => (
          <div key={metric.label}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-sm text-gray-300">{metric.label}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: i * 0.15 + 0.8, duration: 0.4 }}
                className="font-nacelle text-lg font-semibold tabular-nums text-white"
              >
                {isInView ? (
                  <CountUp
                    target={metric.value}
                    suffix={metric.suffix}
                    duration={2}
                  />
                ) : (
                  `0${metric.suffix}`
                )}
              </motion.span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-gray-800/60">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, rgba(156,163,175,0.3) 0%, rgba(229,231,235,0.8) 100%)`,
                }}
                initial={{ width: 0 }}
                animate={
                  isInView
                    ? { width: `${(metric.value / maxValue) * 100}%` }
                    : { width: 0 }
                }
                transition={{
                  duration: 1.4,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── circular progress rings ──────────────────────────── */

function ProgressRing({
  label,
  value,
  max,
  color,
  delay,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const pct = value / max;
  const strokeDashoffset = circumference * (1 - pct);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          {/* Background ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgb(31,41,55)"
            strokeWidth="4"
          />
          {/* Animated progress ring */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset }
                : { strokeDashoffset: circumference }
            }
            transition={{
              duration: 1.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </svg>
        {/* Center number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-nacelle text-xl font-semibold text-white">
            {isInView ? (
              <CountUp target={value} suffix="+" duration={2} />
            ) : (
              "0"
            )}
          </span>
        </div>
      </div>
      <p className="whitespace-pre-line text-center text-xs leading-tight text-gray-500">
        {label}
      </p>
    </div>
  );
}

function RingsRow() {
  return (
    <div className="flex items-center justify-around rounded-xl border border-gray-800 bg-gray-900/20 p-6 md:p-8">
      {ringStats.map((stat, i) => (
        <ProgressRing
          key={stat.label}
          label={stat.label}
          value={stat.value}
          max={stat.max}
          color={stat.color}
          delay={i * 0.2}
        />
      ))}
    </div>
  );
}

/* ── growth line chart ────────────────────────────────── */

function GrowthChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const chartW = 500;
  const chartH = 200;
  const padX = 40;
  const padY = 20;
  const innerW = chartW - padX * 2;
  const innerH = chartH - padY * 2;

  const maxVal = Math.max(...growthData.map((d) => d.value));

  const points = growthData.map((d, i) => ({
    x: padX + (i / (growthData.length - 1)) * innerW,
    y: padY + innerH - (d.value / maxVal) * innerH,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padY + innerH} L ${points[0].x} ${padY + innerH} Z`;

  return (
    <div
      ref={ref}
      className="rounded-xl border border-gray-800 bg-gray-900/20 p-6 md:p-8"
    >
      <div className="mb-4 flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          Growth Trajectory
        </p>
        <span className="text-xs text-gray-600">2024</span>
      </div>

      <svg
        viewBox={`0 0 ${chartW} ${chartH}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={padX}
            y1={padY + innerH * (1 - pct)}
            x2={chartW - padX}
            y2={padY + innerH * (1 - pct)}
            stroke="rgb(31,41,55)"
            strokeWidth="0.5"
          />
        ))}

        {/* Gradient fill */}
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(156,163,175,0.15)" />
            <stop offset="100%" stopColor="rgba(156,163,175,0)" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#areaGrad)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="rgb(209,213,219)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="rgb(17,24,39)"
            stroke="rgb(209,213,219)"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 0.3,
              delay: (i / points.length) * 2 + 0.2,
            }}
          />
        ))}

        {/* Month labels */}
        {growthData.map((d, i) => (
          <text
            key={d.month}
            x={points[i].x}
            y={chartH - 2}
            textAnchor="middle"
            className="fill-gray-600 text-[9px]"
          >
            {d.month}
          </text>
        ))}
      </svg>
    </div>
  );
}

/* ── scroll-driven big numbers ────────────────────────── */

const bigNumbers = [
  { value: 2.5, suffix: "M+", label: "Lines of Code Shipped", prefix: "" },
  { value: 99.9, suffix: "%", label: "Uptime Across Services", prefix: "" },
  { value: 7, suffix: " Days", label: "Average MVP Delivery", prefix: "" },
  { value: 4.9, suffix: "/5", label: "Average Client Rating", prefix: "" },
];

function ScrollNumbers() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.5"],
  });

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {bigNumbers.map((num, i) => {
        return (
          <ScrollNumberCard key={num.label} num={num} index={i} scrollProgress={scrollYProgress} />
        );
      })}
    </div>
  );
}

function ScrollNumberCard({
  num,
  index,
  scrollProgress,
}: {
  num: (typeof bigNumbers)[0];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollProgress, [0, 1], [40 + index * 10, 0]);
  const opacity = useTransform(scrollProgress, [0, 0.3 + index * 0.1, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="rounded-xl border border-gray-800 bg-gray-900/20 p-5 text-center transition-colors hover:border-gray-700 md:p-6"
    >
      <p className="mb-1 font-nacelle text-2xl font-semibold text-white md:text-3xl">
        <CountUp
          target={num.value}
          suffix={num.suffix}
          prefix={num.prefix}
          duration={2.5}
        />
      </p>
      <p className="text-xs text-gray-500">{num.label}</p>
    </motion.div>
  );
}

/* ── main section ─────────────────────────────────────── */

export default function Impact() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Atmospheric glow */}
      <SectionGlow
        color="blue"
        className="-top-20 left-1/2 -translate-x-1/2"
        size={800}
        intensity={0.7}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Impact
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
              Results that speak
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto max-w-xl text-sm text-gray-500">
              We measure success in outcomes, not outputs. Here&apos;s what our
              engineering and strategy work has delivered for businesses
              worldwide.
            </p>
          </Reveal>
        </div>

        <LineReveal className="mb-16" />

        {/* Scroll-driven big numbers */}
        <div className="mb-12">
          <ScrollNumbers />
        </div>

        {/* Charts row */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <BarChart />
          <GrowthChart />
        </div>

        {/* Progress rings */}
        <RingsRow />
      </div>
    </section>
  );
}
