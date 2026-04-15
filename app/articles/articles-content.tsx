"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, LineReveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import PageIllustration from "@/components/page-illustration";

const categories = ["All", "AI & Automation", "Marketing & SEO", "Mobile Development", "Case Study", "Engineering"];

const articles = [
  {
    slug: "why-ai-agents-are-future-of-business-automation",
    title: "Why AI Agents Are the Future of Business Automation",
    content:
      "The enterprise landscape is shifting. Traditional software follows rules — AI agents make decisions. At Glinthawk Technology, we've been building autonomous agents that handle everything from customer support triage to real-time data analysis.\n\nUnlike chatbots that follow scripted flows, AI agents leverage large language models (LLMs) to understand context, use external tools, and take action without human intervention. We've deployed agents that process support tickets, extract invoice data, generate reports, and even manage scheduling — reducing manual workload by up to 70%.\n\nThe key architecture patterns we use include multi-agent orchestration (where specialized agents collaborate), tool-use integration (connecting agents to APIs, databases, and internal systems), and memory systems that allow agents to learn from past interactions.\n\nFor businesses in Chhattisgarh and across India looking to adopt AI automation, the barrier to entry has never been lower. The combination of open-source LLMs, cloud infrastructure, and frameworks like LangChain makes it feasible to build production-grade agent systems at a fraction of what it cost even two years ago.\n\nThe question is no longer whether to adopt AI agents — it's how quickly you can deploy them before your competitors do.",
    category: "AI & Automation",
    date: "April 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "geo-optimization-what-it-is-and-why-seo-alone-isnt-enough",
    title: "GEO Optimization: What It Is and Why SEO Alone Isn't Enough",
    content:
      "Search is evolving. Google's AI Overviews, ChatGPT search, Perplexity, and other AI-powered discovery platforms are changing how users find information. Traditional SEO optimizes for blue links — GEO (Generative Engine Optimization) optimizes for AI-generated answers.\n\nAt Glinthawk, our digital marketing team has been tracking this shift closely. We've observed that businesses optimized only for traditional SEO are losing visibility in AI-generated results, even when they rank well on Google's organic listings.\n\nGEO involves several strategies: structuring content for entity recognition (so AI models understand what your business does), building topical authority through comprehensive content clusters, ensuring your business data is consistent across all platforms AI models train on, and creating content that directly answers the questions AI search engines prioritize.\n\nFor businesses in Bhilai, Raipur, and across Chhattisgarh, GEO is especially important for local discovery. When someone asks an AI assistant 'best software company in Chhattisgarh' or 'digital marketing agency near me in Bhilai,' your business needs to be in the training data and structured in a way that AI models can reference.\n\nWe recommend a dual strategy: maintain your SEO foundation while layering GEO tactics on top. This ensures visibility across both traditional search and AI-powered discovery platforms.",
    category: "Marketing & SEO",
    date: "April 3, 2026",
    readTime: "5 min read",
  },
  {
    slug: "building-cross-platform-apps-flutter-vs-react-native-2026",
    title: "Flutter vs React Native in 2026: Which Should You Choose?",
    content:
      "As a mobile app development company that ships production apps with both Flutter and React Native, we get this question constantly. Here's our honest assessment based on dozens of projects delivered.\n\nFlutter excels in: pixel-perfect custom UIs, animation-heavy applications, projects where iOS and Android need to look identical, and when you want a single codebase for mobile + web + desktop. Its Dart-based rendering engine gives you complete control over every pixel.\n\nReact Native excels in: projects where your team already knows React/JavaScript, apps that need deep native module integration, brownfield projects (adding mobile to existing web apps), and when you want access to the largest ecosystem of third-party libraries.\n\nPerformance in 2026 is essentially equivalent for 95% of use cases. Both frameworks have matured significantly. The deciding factor is usually team expertise, existing codebase, and specific project requirements rather than raw performance.\n\nAt Glinthawk, we typically recommend Flutter for greenfield projects with complex UIs and React Native for teams with strong JavaScript backgrounds or existing React web applications. For our clients in India and globally, we maintain dedicated teams for both frameworks to ensure we're always recommending the right tool for the job.",
    category: "Mobile Development",
    date: "March 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-we-built-an-ai-agent-that-handles-customer-support",
    title: "How We Built an AI Agent That Handles 70% of Support Tickets",
    content:
      "This is a detailed case study of a project we completed for a mid-size e-commerce client. Their support team was drowning in repetitive tickets — order status queries, return requests, product questions — and response times were suffering.\n\nWe designed a multi-layered AI agent system: Layer 1 handles intent classification and routing. Layer 2 consists of specialized agents for different ticket types (orders, returns, product info, billing). Layer 3 escalates complex or sensitive issues to human agents with full context.\n\nThe tech stack: Python backend, LangChain for agent orchestration, OpenAI GPT-4 for reasoning, PostgreSQL for conversation memory, and a custom tool-use layer that connects to the client's order management system, inventory database, and CRM.\n\nKey design decisions that made this work: we built extensive guardrails to prevent hallucination on order-specific data (the agent always queries the real database rather than guessing), implemented a confidence scoring system that routes low-confidence responses to humans, and created a feedback loop where human agents can correct agent responses to improve future performance.\n\nResults after 3 months: 70% of tickets resolved without human intervention, average response time dropped from 4 hours to under 30 seconds, customer satisfaction scores increased by 22%, and the support team was able to focus on complex, high-value interactions.\n\nThis is the kind of AI-first engineering we do at Glinthawk Technology. If your business is spending significant resources on repetitive processes, there's likely an AI agent solution that can transform your operations.",
    category: "Case Study",
    date: "March 20, 2026",
    readTime: "10 min read",
  },
  {
    slug: "why-nextjs-is-our-default-for-production-web-apps",
    title: "Why Next.js Is Our Default Choice for Production Web Apps",
    content:
      "After building dozens of web applications with various frameworks, we've settled on Next.js as our default recommendation for production web applications. Here's why.\n\nServer-side rendering and static generation give us the best of both worlds — fast initial page loads for SEO and dynamic interactivity for user experience. The App Router introduced in Next.js 13+ has matured into a robust architecture for building complex applications.\n\nFor our clients, the business case is straightforward: Next.js applications rank better in search (thanks to SSR), load faster (better user experience and lower bounce rates), and are easier to maintain long-term (React ecosystem, TypeScript support, built-in API routes).\n\nWe pair Next.js with Tailwind CSS for styling, Framer Motion for animations, and either Supabase or custom Node.js backends depending on the project. This stack gives us rapid development velocity without sacrificing production quality.\n\nFor companies in Chhattisgarh and across India looking to build web applications that perform well globally, Next.js deployed on Vercel or AWS gives you edge-cached performance that competes with any Silicon Valley product.",
    category: "Engineering",
    date: "March 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "personal-branding-for-founders-and-ctos-a-practical-guide",
    title: "Personal Branding for Founders & CTOs: A Practical Guide",
    content:
      "In 2026, your personal brand is your company's best marketing asset. We've helped founders and CTOs across India and globally build professional brands that drive leads, attract talent, and establish industry authority.\n\nThe framework we use at Glinthawk has three pillars: Content Authority (publishing consistently on platforms where your audience lives), Social Proof (speaking engagements, features, collaborations), and Network Leverage (strategic connections that amplify your reach).\n\nPractical steps we implement for clients: LinkedIn profile optimization for search visibility, content calendar with a mix of thought leadership, behind-the-scenes, and educational posts, ghost-written long-form articles that demonstrate expertise, and strategic engagement with industry conversations.\n\nThe ROI is measurable. One founder we worked with went from 800 LinkedIn followers to 15,000 in 6 months, landed 3 speaking opportunities, and attributed 40% of new business inquiries to inbound from personal brand content.\n\nPersonal branding isn't vanity — it's a business growth strategy. For founders in Bhilai, Raipur, or anywhere in India looking to compete globally, a strong personal brand levels the playing field.",
    category: "Marketing & SEO",
    date: "March 5, 2026",
    readTime: "7 min read",
  },
];

function ArticleCard({
  article,
  isExpanded,
  onToggle,
}: {
  article: (typeof articles)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      id={article.slug}
      className="border-t border-gray-800 transition-colors hover:border-gray-700"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-8 text-left md:py-10"
      >
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
              {article.category}
            </span>
            <span className="text-xs text-gray-700">{article.date}</span>
            <span className="text-xs text-gray-700">{article.readTime}</span>
          </div>
          <h2 className="font-nacelle text-lg font-semibold text-gray-200 transition-colors group-hover:text-white sm:text-xl md:text-2xl">
            {article.title}
          </h2>
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 shrink-0 text-xl text-gray-600"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10">
              {article.content.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-4 max-w-3xl text-sm leading-relaxed text-gray-400 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function ArticlesContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <main className="relative flex grow flex-col">
      <PageIllustration />

      {/* Hero */}
      <section className="pb-12 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                Articles
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 sm:text-5xl md:text-6xl">
                Insights & thinking
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-xl text-base text-gray-400 sm:text-lg">
                Technical deep-dives, industry perspectives, and lessons from
                building AI-first products and scaling digital businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-white text-gray-950"
                      : "border border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <LineReveal />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  isExpanded={expandedSlug === article.slug}
                  onToggle={() =>
                    setExpandedSlug(
                      expandedSlug === article.slug ? null : article.slug
                    )
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="border-t border-gray-800" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="mb-6 text-sm text-gray-500">
              Want to discuss a topic or explore how these ideas apply to your business?
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-gray-950 transition-all duration-300 hover:bg-gray-200"
            >
              Start a conversation &rarr;
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
