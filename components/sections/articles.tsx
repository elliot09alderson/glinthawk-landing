"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Reveal, LineReveal } from "@/components/motion/reveal";

const articles = [
  {
    slug: "why-ai-agents-are-future-of-business-automation",
    title: "Why AI Agents Are the Future of Business Automation",
    excerpt:
      "Autonomous AI agents are reshaping how companies operate — from customer support to data pipelines. Here's what every business leader should know.",
    category: "AI & Automation",
    date: "April 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "geo-optimization-what-it-is-and-why-seo-alone-isnt-enough",
    title: "GEO Optimization: What It Is and Why SEO Alone Isn't Enough",
    excerpt:
      "With AI-powered search engines changing how users discover information, Generative Engine Optimization (GEO) is becoming essential for brand visibility.",
    category: "Marketing & SEO",
    date: "April 3, 2026",
    readTime: "5 min read",
  },
  {
    slug: "building-cross-platform-apps-flutter-vs-react-native-2026",
    title: "Flutter vs React Native in 2026: Which Should You Choose?",
    excerpt:
      "A practical comparison of the two leading cross-platform frameworks from a team that ships production apps with both.",
    category: "Mobile Development",
    date: "March 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-we-built-an-ai-agent-that-handles-customer-support",
    title: "How We Built an AI Agent That Handles 70% of Support Tickets",
    excerpt:
      "A behind-the-scenes look at how we designed, trained, and deployed an autonomous support agent using LLM orchestration and tool-use patterns.",
    category: "Case Study",
    date: "March 20, 2026",
    readTime: "10 min read",
  },
];

export default function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="articles" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Insights
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
                Recent articles
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/articles"
              className="group inline-flex items-center text-sm text-gray-500 transition-colors hover:text-white"
            >
              View all articles
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>

        <LineReveal className="mb-16" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <Link
                href={`/articles#${article.slug}`}
                className="group block rounded-xl border border-gray-800 bg-gray-900/20 p-6 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/40 md:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-700">{article.readTime}</span>
                </div>

                <h3 className="mb-3 font-nacelle text-lg font-semibold text-gray-200 transition-colors group-hover:text-white sm:text-xl">
                  {article.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{article.date}</span>
                  <span className="text-sm text-gray-600 transition-colors group-hover:text-gray-400">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
