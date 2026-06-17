import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EducationPageClient from "@/components/education/EducationPageClient";

/* ─────────────────────────────────────────────────────────
   SEO METADATA — EDUCATION LANDING PAGE
───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "IDEOANS Education — Digital Infrastructure For Modern Education",
  description:
    "Complete digital campus ecosystem — School ERP, LMS, Websites, Mobile Apps, AI Automation, Admissions Management, Analytics, and Parent Engagement. Transform your institution with IDEOANS Education.",
  keywords: [
    "School ERP",
    "School Management System",
    "LMS Platform",
    "Education Technology",
    "EdTech",
    "AI for Schools",
    "Admission Management",
    "School Website Builder",
    "Parent Communication App",
    "IDEOANS Education",
    "Digital Campus",
    "Education Infrastructure",
  ],
  openGraph: {
    title: "IDEOANS Education — Digital Infrastructure For Modern Education",
    description:
      "Build a future-ready digital campus with ERP, LMS, Websites, Mobile Apps, AI Automation — all from one connected ecosystem.",
    type: "website",
    siteName: "IDEOANS",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDEOANS Education — Digital Infrastructure For Modern Education",
    description:
      "Complete digital campus ecosystem for schools, colleges, and coaching institutes.",
  },
};


/* ─────────────────────────────────────────────────────────
   SERVER COMPONENT — EDUCATION PAGE
───────────────────────────────────────────────────────── */
export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main>
        <EducationPageClient />
      </main>
      <Footer />
    </>
  );
}
