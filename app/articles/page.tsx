import type { Metadata } from "next";
import ArticlesContent from "./articles-content";

export const metadata: Metadata = {
  title: "Articles — Tech Insights on AI, Software Development & Digital Marketing",
  description:
    "Read expert insights on AI development, software engineering, mobile app development, SEO, GEO optimization, and digital marketing from Glinthawk Technology, Chhattisgarh's leading IT company.",
  keywords: [
    "AI development articles",
    "software development blog",
    "tech articles India",
    "AI agents guide",
    "GEO optimization guide",
    "Flutter vs React Native",
    "digital marketing insights",
    "SEO best practices 2026",
    "Glinthawk Technology blog",
    "IT company blog Chhattisgarh",
  ],
  alternates: {
    canonical: "https://glinthawktechnologies.com/articles",
  },
  openGraph: {
    title: "Articles — Glinthawk Technology",
    description:
      "Expert insights on AI, software development, and digital marketing from Chhattisgarh's leading tech company.",
    url: "https://glinthawktechnologies.com/articles",
  },
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
