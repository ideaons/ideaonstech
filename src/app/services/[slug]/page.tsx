import React from "react";
import { Metadata } from "next";
import ServicePageClient from "@/components/ServicePageClient";

/* ─────────────────────────────────────────────────────────
   SEO METADATA DATABASE (8 MODULES)
───────────────────────────────────────────────────────── */
const META_DB: Record<string, { title: string; desc: string }> = {
  "website-systems": {
    title: "Website Systems Infrastructure Module | IDEOANS",
    desc: "High-performance digital storefronts, interactive applications, and landing stages engineered to load instantly and convert visitors at scale."
  },
  "marketing-systems": {
    title: "Marketing Systems Infrastructure Module | IDEOANS",
    desc: "Full-funnel growth engines designed to drive qualified user acquisition, automated retargeting, and multi-channel campaign analytics."
  },
  "crm-systems": {
    title: "CRM Systems Infrastructure Module | IDEOANS",
    desc: "Custom relationship databases, pipeline visualizers, and glassmorphic client portals built to automate your operations and scale delivery."
  },
  "ai-automation": {
    title: "AI Automation Infrastructure Module | IDEOANS",
    desc: "Deploy autonomous intelligent agents, Large Language Model configurations, and automated pipeline scripts to eliminate operating overhead."
  },
  "lead-generation": {
    title: "Lead Generation Infrastructure Module | IDEOANS",
    desc: "Automated lead qualification and outreach engines that fill calendars with high-value prospects without administrative friction."
  },
  "brand-systems": {
    title: "Brand Systems Infrastructure Module | IDEOANS",
    desc: "Complete digital identity packages — custom lettermarks, comprehensive brand books, kinetic motion tokens, and interface templates."
  },
  "analytics-systems": {
    title: "Analytics Systems Infrastructure Module | IDEOANS",
    desc: "Unified data attribution pipelines, visual customer heatmaps, and privacy-compliant databases built to translate actions into growth."
  },
  "growth-infrastructure": {
    title: "Growth Infrastructure Module | IDEOANS",
    desc: "High-performance edge servers, secure databases, and API development architectures engineered to sustain unlimited business scale."
  }
};

/* ─────────────────────────────────────────────────────────
   DYNAMIC METADATA GENERATOR (SEO Production Grade)
───────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = META_DB[slug];

  if (!meta) {
    return {
      title: "Service Module | IDEOANS",
      description: "Custom digital infrastructure solutions for modern growing organizations."
    };
  }

  return {
    title: meta.title,
    description: meta.desc,
    openGraph: {
      title: meta.title,
      description: meta.desc,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.desc
    }
  };
}

/* ─────────────────────────────────────────────────────────
   SERVER ELEMENT INJECTOR
───────────────────────────────────────────────────────── */
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  return <ServicePageClient params={params} />;
}
