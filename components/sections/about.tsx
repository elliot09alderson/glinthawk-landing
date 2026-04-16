"use client";

import { Reveal, LineReveal, CountUp } from "@/components/motion/reveal";

const highlights = [
  { number: 50, suffix: "+", label: "Projects Delivered" },
  { number: 35, suffix: "+", label: "Happy Clients" },
  { number: 15, suffix: "+", label: "AI Solutions" },
  { number: 99, suffix: "%", label: "Client Retention" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section label */}
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            About Glinthawk
          </p>
        </Reveal>

        <LineReveal className="mb-16" />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Story */}
          <div>
            <Reveal delay={0.1}>
              <h2 className="mb-8 font-nacelle text-3xl font-semibold leading-tight text-gray-100 sm:text-4xl md:text-5xl">
                We build what others
                <br />
                haven&apos;t imagined yet.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-6 text-base leading-relaxed text-gray-400">
                Glinthawk Technology is a software development and AI company
                headquartered near IIT Bhilai in Chhattisgarh, India. We
                partner with startups, scale-ups, and enterprises across the
                globe — from Raipur and Durg to San Francisco and London — to
                design and ship digital products that drive real growth.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-6 text-base leading-relaxed text-gray-400">
                What sets us apart is our depth in artificial intelligence. We
                build autonomous AI agents, integrate large language models into
                production workflows, and deliver enterprise-grade applications
                across mobile, desktop, and web. As a leading IT company in
                Chhattisgarh, we bring Silicon Valley engineering standards to
                central India.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-base leading-relaxed text-gray-400">
                We also embed dedicated engineers into your existing teams,
                operating as a seamless extension of your organization. Whether
                you need a full product built from scratch, a senior developer
                for three months, or an AI strategy consultant — we deliver.
              </p>
            </Reveal>
          </div>

          {/* Right — Stats + Differentiators */}
          <div>
            {/* Stats grid */}
            <div className="mb-12 grid grid-cols-2 gap-6">
              {highlights.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <div className="rounded-xl border border-indigo-900/40 bg-indigo-950/20 p-6 transition-colors duration-300 hover:border-indigo-700/50 hover:bg-indigo-950/30">
                    <p className="mb-1 font-nacelle text-3xl font-semibold text-white sm:text-4xl">
                      <CountUp
                        target={stat.number}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Differentiators */}
            <Reveal delay={0.5}>
              <div className="space-y-4">
                {[
                  {
                    title: "AI-Native Thinking",
                    desc: "Every solution we build is designed with intelligence at its core, not as an afterthought.",
                  },
                  {
                    title: "Full-Spectrum Engineering",
                    desc: "From mobile apps to desktop software to cloud infrastructure — one team, complete coverage.",
                  },
                  {
                    title: "Resource Augmentation",
                    desc: "Need skilled engineers? We embed our talent directly into your existing teams.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-lg border border-transparent p-4 transition-all duration-300 hover:border-indigo-900/40 hover:bg-indigo-950/20"
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-400/70" />
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-200">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
