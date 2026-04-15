"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Reveal, LineReveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import PageIllustration from "@/components/page-illustration";

const openings = [
  {
    title: "Senior AI/ML Engineer",
    department: "AI Products",
    type: "Full-time",
    location: "Bhilai / Remote",
    description:
      "Design and build AI agents, fine-tune LLMs, and create intelligent automation systems. You'll work directly on our flagship AI products.",
    requirements: [
      "3+ years in ML/AI engineering",
      "Experience with PyTorch, LangChain, or similar",
      "Strong Python fundamentals",
      "Understanding of LLM architectures",
    ],
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Bhilai / Remote",
    description:
      "Build end-to-end web applications using React, Next.js, and Node.js. You'll work across client projects and internal products.",
    requirements: [
      "2+ years with React/Next.js",
      "Backend experience with Node.js or Python",
      "Database design (PostgreSQL, MongoDB)",
      "Git workflow proficiency",
    ],
  },
  {
    title: "Flutter Developer",
    department: "Mobile",
    type: "Full-time",
    location: "Bhilai / Remote",
    description:
      "Build beautiful, performant cross-platform mobile applications for our clients. You'll own the mobile experience end-to-end.",
    requirements: [
      "2+ years with Flutter/Dart",
      "Published apps on Play Store / App Store",
      "RESTful API integration experience",
      "Understanding of mobile UI/UX patterns",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Bhilai",
    description:
      "Plan and execute digital marketing campaigns, manage SEO/GEO strategies, and drive measurable growth for our clients' businesses.",
    requirements: [
      "2+ years in digital marketing",
      "SEO & SEM expertise",
      "Analytics tools proficiency",
      "Content strategy experience",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Bhilai / Remote",
    description:
      "Design intuitive interfaces and compelling user experiences for web, mobile, and AI products. You'll shape how users interact with our technology.",
    requirements: [
      "Portfolio demonstrating product design work",
      "Figma proficiency",
      "Understanding of design systems",
      "Ability to translate complex flows into simple UIs",
    ],
  },
];

const perks = [
  {
    title: "Cutting-Edge Work",
    description: "Work with AI, LLMs, and the latest technologies — not legacy maintenance.",
  },
  {
    title: "Flexible Hours",
    description: "We trust you to manage your time. Results matter more than hours logged.",
  },
  {
    title: "Growth Path",
    description: "Clear career progression with mentorship from senior engineers and leaders.",
  },
  {
    title: "Remote-Friendly",
    description: "Work from our Bhilai office or remotely — whatever helps you do your best work.",
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, books, and certifications.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
];

function JobCard({ job, index }: { job: (typeof openings)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="group border-t border-gray-800 transition-colors hover:border-gray-700"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start justify-between gap-4 py-8 text-left md:items-center md:py-10"
      >
        <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <h3 className="font-nacelle text-lg font-semibold text-gray-200 transition-colors group-hover:text-white sm:text-xl">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-gray-800 px-3 py-0.5 text-xs text-gray-500">
              {job.department}
            </span>
            <span className="rounded-full border border-gray-800 px-3 py-0.5 text-xs text-gray-500">
              {job.type}
            </span>
            <span className="rounded-full border border-gray-800 px-3 py-0.5 text-xs text-gray-500">
              {job.location}
            </span>
          </div>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 shrink-0 text-xl text-gray-600 group-hover:text-gray-400"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-10">
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-400">
                {job.description}
              </p>
              <div className="mb-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Requirements
                </p>
                <ul className="space-y-2">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="h-px w-3 bg-gray-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`mailto:careers@glinthawk.com?subject=Application: ${job.title}`}
                className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-950 transition-all duration-300 hover:bg-gray-200"
              >
                Apply Now &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CareersContent() {
  const jobsRef = useRef(null);
  const jobsInView = useInView(jobsRef, { once: true, margin: "-80px" });

  return (
    <main className="relative flex grow flex-col">
      <PageIllustration />

      {/* Hero */}
      <section className="pb-12 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Careers
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 sm:text-5xl md:text-6xl">
                Build the future
                <br />
                <span className="text-gray-500">with us.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-xl text-base text-gray-400 sm:text-lg">
                We&apos;re looking for talented engineers, designers, and
                marketers who want to work on AI-first products and cutting-edge
                technology. Join us in Bhilai or work remotely.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Why Glinthawk
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-12 font-nacelle text-2xl font-semibold text-gray-100 sm:text-3xl">
              More than a job
            </h2>
          </Reveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="rounded-xl border border-gray-800 bg-gray-900/20 p-6 transition-colors duration-300 hover:border-gray-700">
                  <h3 className="mb-2 text-sm font-medium text-gray-200">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-gray-500">{perk.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Open Positions
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-100 sm:text-3xl">
              Current openings
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-12 max-w-xl text-sm text-gray-500">
              Don&apos;t see a role that fits? Send us your resume at{" "}
              <a
                href="mailto:careers@glinthawk.com"
                className="text-gray-500 transition-colors hover:text-white"
              >
                careers@glinthawk.com
              </a>{" "}
              — we&apos;re always looking for exceptional people.
            </p>
          </Reveal>

          <LineReveal />

          <motion.div
            ref={jobsRef}
            initial="hidden"
            animate={jobsInView ? "visible" : "hidden"}
          >
            {openings.map((job, i) => (
              <JobCard key={job.title} job={job} index={i} />
            ))}
          </motion.div>

          {/* Bottom border */}
          <div className="border-t border-gray-800" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="mb-6 font-nacelle text-2xl font-semibold text-gray-100 sm:text-3xl">
              Ready to make an impact?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mb-8 max-w-lg text-sm text-gray-500">
              Join a team that&apos;s building AI-first products and pushing the
              boundaries of what software can do.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="mailto:careers@glinthawk.com"
              className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-gray-950 transition-all duration-300 hover:bg-gray-200"
            >
              Send Your Resume &rarr;
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
