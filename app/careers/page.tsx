import type { Metadata } from "next";
import CareersContent from "./careers-content";

export const metadata: Metadata = {
  title: "Careers — Join Glinthawk Technology | AI & Software Jobs in Chhattisgarh",
  description:
    "Join Glinthawk Technology in Bhilai, Chhattisgarh. We are hiring AI/ML engineers, full-stack developers, Flutter developers, digital marketers, and UI/UX designers. Remote-friendly roles available.",
  keywords: [
    "software developer jobs Bhilai",
    "AI engineer jobs Chhattisgarh",
    "IT jobs Bhilai Durg Raipur",
    "Flutter developer jobs India",
    "digital marketing jobs Chhattisgarh",
    "remote developer jobs India",
    "careers at Glinthawk Technology",
    "tech jobs near IIT Bhilai",
  ],
  alternates: {
    canonical: "https://glinthawktechnologies.com/careers",
  },
  openGraph: {
    title: "Careers — Glinthawk Technology | Bhilai, Chhattisgarh",
    description:
      "Join our team and work on AI-first products and cutting-edge technology. Open positions for engineers, designers, and marketers.",
    url: "https://glinthawktechnologies.com/careers",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
