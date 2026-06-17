"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────────────────
   SERVICES DETAIL RICH DATABASE (8 MODULES)
───────────────────────────────────────────────────────── */
interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  accent: string;
  glowColor: string;
  colColors: string[];
  quote: string;
  capabilities: {
    title: string;
    desc: string;
  }[];
  techStack: string[];
  caseStudy: {
    client: string;
    metricTitle: string;
    metricVal: string;
    desc: string;
  };
  visualContent: React.ReactNode;
}

const SERVICES_DB: Record<string, ServiceDetail> = {
  "website-systems": {
    id: "01",
    slug: "website-systems",
    title: "Website Systems",
    subtitle: "High-performance digital storefronts, interactive applications, and landing stages engineered to load instantly and convert visitors at scale.",
    accent: "#8B5CF6", // Violet
    glowColor: "rgba(139, 92, 246, 0.16)",
    colColors: ["#0a0614", "#110b21", "#190e2f", "#20123c", "#170d2b", "#0c0717"],
    quote: "A world-class digital stage designed to drive brand authority and convert traffic into long-term customer relationships.",
    capabilities: [
      { title: "High-End UX/UI Layouts", desc: "Custom designed, pixel-perfect user interfaces built with editorial typography and responsive grids." },
      { title: "Buttery-Smooth Motion", desc: "Staggered transitions, hover spotlights, and parallax animations that engage visitors." },
      { title: "Core Web Vitals Optimized", desc: "Engineered to score 100/100 on Google Lighthouse speeds with edge-network optimization." },
      { title: "Next.js & React Architecture", desc: "Modular, future-proof engineering designed for maximum security, SEO indexing, and scalability." }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Framer Motion", "TailwindCSS", "Three.js", "Vercel"],
    caseStudy: {
      client: "EduForward Academy",
      metricTitle: "ENROLLMENT RATE INCREASE",
      metricVal: "+180%",
      desc: "Architected a custom academic platform with modular admissions, resulting in a sub-1s load time globally."
    },
    visualContent: (
      <div className="w-full h-full border border-violet-500/20 bg-violet-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-violet-400">STAGE-01 // WIREFRAME</span>
        <div className="grid grid-cols-3 gap-2 my-auto h-20 items-center">
          {[60, 95, 45].map((h, idx) => (
            <div key={idx} className="border border-violet-500/30 rounded bg-violet-900/10 relative h-full flex items-end">
              <motion.div
                animate={{ height: ["0%", `${h}%`, "0%"] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: idx * 0.3 }}
                className="w-full bg-violet-500/30"
              />
            </div>
          ))}
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">LAYOUT: PASS</span>
      </div>
    )
  },
  "marketing-systems": {
    id: "02",
    slug: "marketing-systems",
    title: "Marketing Systems",
    subtitle: "Full-funnel growth engines designed to drive qualified user acquisition, automated retargeting, and multi-channel campaign analytics.",
    accent: "#00E5FF", // Cyan
    glowColor: "rgba(0, 229, 255, 0.16)",
    colColors: ["#041119", "#08202f", "#0c2f45", "#103f5c", "#0b2d42", "#061b27"],
    quote: "Attract, qualify, and capture high-intent users through automated landing funnels and attribution tracking systems.",
    capabilities: [
      { title: "SEO Infrastructure", desc: "Structured semantic HTML and rich schema mappings to dominate high-intent organic rankings." },
      { title: "Funnel Optimization (CRO)", desc: "Continuous user journey audit, A/B testing variations, and behavioral checkout optimization." },
      { title: "SMS & Email Automations", desc: "Automated sequence loops that qualify leads and retain customers throughout the conversion funnel." },
      { title: "Attribution Tagging", desc: "Advanced pixel integrations that measure return-on-ad-spend and scale organic traffic campaigns." }
    ],
    techStack: ["Google Analytics", "Segment", "HubSpot", "Zapier", "Customer.io", "PostHog", "Optimizely"],
    caseStudy: {
      client: "GrowthOS Campaigns",
      metricTitle: "CAC DECREASE",
      metricVal: "-42%",
      desc: "Built automated capture flows and landing modules, decreasing CAC while raising sustained campaign ROI by 3.5×."
    },
    visualContent: (
      <div className="w-full h-full border border-cyan-500/20 bg-cyan-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-cyan-400">STAGE-02 // TRAFFIC FUNNEL</span>
        <div className="my-auto flex flex-col gap-2">
          <div className="flex justify-between items-center text-[8px] font-mono text-white/50">
            <span>CONVERSIONS</span>
            <span className="text-cyan-400">Active</span>
          </div>
          <svg className="w-full h-12 text-cyan-400/40" viewBox="0 0 100 40">
            <motion.path
              d="M0 20 Q25 5 50 25 T100 15"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </svg>
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">CONV RATE: 5.4%</span>
      </div>
    )
  },
  "crm-systems": {
    id: "03",
    slug: "crm-systems",
    title: "CRM Systems",
    subtitle: "Custom relationship databases, pipeline visualizers, and glassmorphic client portals built to automate your operations and scale delivery.",
    accent: "#FBBF24", // Gold
    glowColor: "rgba(251, 191, 36, 0.15)",
    colColors: ["#120f06", "#201a0a", "#2e250f", "#3c3114", "#2a220e", "#151107"],
    quote: "Consolidate customer touchpoints and billing into a secure, intuitive operations portal custom-built for your business flows.",
    capabilities: [
      { title: "Lead Intake Automations", desc: "Intake form triggers that sort, qualify, and assign prospective accounts instantaneously." },
      { title: "Glassmorphic Client Portals", desc: "Secure custom portals for milestone tracking, digital sign-offs, and payment schedules." },
      { title: "Operational Dashboards", desc: "Unified dashboards that translate pipeline volumes and staff capacities into live business intelligence." },
      { title: "CRM API Integrations", desc: "Sync existing tool databases (HubSpot, Salesforce, Airtable) into unified visual dashboards." }
    ],
    techStack: ["HubSpot CRM", "Salesforce", "Retool", "Stripe Connect", "Airtable", "Make.com", "Supabase"],
    caseStudy: {
      client: "MedCore Clinicals",
      metricTitle: "ADMIN TIME RECOVERED",
      metricVal: "35h/wk",
      desc: "Delivered a custom patient onboarding portal, automating intake checks and reducing admin follow-ups by 90%."
    },
    visualContent: (
      <div className="w-full h-full border border-amber-500/20 bg-amber-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-amber-400">STAGE-03 // PIPELINE</span>
        <div className="my-auto flex flex-col gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center text-[7px] font-mono border border-white/5 py-1 px-2 rounded bg-white/[0.01]">
              <span className="text-white/60">LEAD // 0{i}</span>
              <span className="text-amber-400 font-bold">QUALIFIED</span>
            </div>
          ))}
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">PIPELINE: ACTIVE</span>
      </div>
    )
  },
  "ai-automation": {
    id: "04",
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Deploy autonomous intelligent agents, Large Language Model configurations, and automated pipeline scripts to eliminate operating overhead.",
    accent: "#EC4899", // Pink
    glowColor: "rgba(236, 72, 153, 0.16)",
    colColors: ["#14050f", "#24091a", "#340d25", "#441130", "#300c22", "#180611"],
    quote: "Free your team from repetitive manual operations with custom intelligent agent workflows integrated directly into your database.",
    capabilities: [
      { title: "Autonomous Agents", desc: "LLM customer assistants trained on internal databases that resolve queries with human-like precision." },
      { title: "Document Automation", desc: "Automated OCR pipelines that extract metadata and categorise invoices, files, and PDFs safely." },
      { title: "Intelligent API Pipelines", desc: "Connect disjointed operations tools (Slack, Gmail, CRMs) into automated triggers." },
      { title: "Custom LLM Integrations", desc: "Tailor and deploy open-source or proprietary models securely within your cloud boundaries." }
    ],
    techStack: ["OpenAI API", "LangChain", "n8n", "Make.com", "Vector Databases", "Python", "Pinecone"],
    caseStudy: {
      client: "RetailEdge Operations",
      metricTitle: "RESOLVED SUPPORT TICKETS",
      metricVal: "90%",
      desc: "Integrated custom semantic search agents, resolving common intake inquiries in under 5 seconds."
    },
    visualContent: (
      <div className="w-full h-full border border-pink-500/20 bg-pink-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-pink-400">STAGE-04 // AGENT INFERENCE</span>
        <div className="my-auto flex items-center justify-center relative">
          <div className="w-12 h-12 rounded-full border border-pink-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: "8s" }}>
            <span className="text-[6px] text-pink-400 font-mono">LLM</span>
          </div>
          <div className="absolute -top-1 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">MODEL: INFERRING</span>
      </div>
    )
  },
  "lead-generation": {
    id: "05",
    slug: "lead-generation",
    title: "Lead Generation",
    subtitle: "Automated lead qualification and outreach engines that fill calendars with high-value prospects without administrative friction.",
    accent: "#10B981", // Emerald
    glowColor: "rgba(16, 185, 129, 0.16)",
    colColors: ["#05130f", "#09221a", "#0d3126", "#114032", "#0c2c22", "#061611"],
    quote: "A systemized, scalable prospect acquisition engine built to source, score, and book new enterprise partners on autopilot.",
    capabilities: [
      { title: "Multi-Step Quiz Funnels", desc: "Interactive qualifiers that capture user details and filter high-intent accounts automatically." },
      { title: "Outbound Lead Engines", desc: "Automated custom outreach infrastructure built on optimized deliverability networks." },
      { title: "Dynamic Lead Scoring", desc: "Rule-based database qualifiers that highlight valuable accounts in real-time." },
      { title: "Calendar Synchronization", desc: "Seamless routing that pushes qualified leads straight to sales reps' Calendly or Slack accounts." }
    ],
    techStack: ["Typeform", "Webflow", "Zapier", "Apollo.io", "Loom", "Calendly", "Slack API"],
    caseStudy: {
      client: "FitForce Leads",
      metricTitle: "MONTHLY SIGNUPS GAINED",
      metricVal: "1.2K+",
      desc: "Built a customized lead scoring and micro-commitment funnel, generating leads with a 94/100 score average."
    },
    visualContent: (
      <div className="w-full h-full border border-emerald-500/20 bg-emerald-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-emerald-400">STAGE-05 // QUALIFICATION</span>
        <div className="my-auto flex items-center justify-between text-center gap-1">
          <div className="flex-1">
            <span className="text-[12px] font-black text-emerald-400 block leading-none">94</span>
            <span className="text-[5px] text-white/40 uppercase font-mono">LEAD SCORE</span>
          </div>
          <div className="w-0.5 h-6 bg-white/10" />
          <div className="flex-1">
            <span className="text-[12px] font-black text-white block leading-none">1.2K</span>
            <span className="text-[5px] text-white/40 uppercase font-mono">MONTHLY LEADS</span>
          </div>
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">STATUS: HIGH INTENT</span>
      </div>
    )
  },
  "brand-systems": {
    id: "06",
    slug: "brand-systems",
    title: "Brand Systems",
    subtitle: "Complete digital identity packages — custom lettermarks, comprehensive brand books, kinetic motion tokens, and interface templates.",
    accent: "#F59E0B", // Orange/Gold
    glowColor: "rgba(245, 158, 11, 0.15)",
    colColors: ["#120b06", "#20130a", "#2e1c0e", "#3c2412", "#2a190c", "#150c06"],
    quote: "Establish clear market leadership with a modern, high-fidelity brand system custom-engineered for digital interaction.",
    capabilities: [
      { title: "Premium Typography Stack", desc: "Editorial geometric font-pairings and customized layout scales designed for readability." },
      { title: "Kinetic Motion Guidelines", desc: "Custom spacing guidelines, spring animations, and hover transitions that bring UI to life." },
      { title: "Custom SVG Assets", desc: "Crisp geometric logos and custom scalable illustrations built for clean rendering on edge networks." },
      { title: "Systemized Style Manuals", desc: "Cohesive color spaces and style documentation that ensure absolute brand consistency everywhere." }
    ],
    techStack: ["Figma", "Adobe CC", "SVG Vectors", "CSS Keyframes", "Lottie Files", "Three.js"],
    caseStudy: {
      client: "StartupX Identity",
      metricTitle: "SERIES-A FUNDING SECURED",
      metricVal: "$25M",
      desc: "Delivered a luxury technological brand identity, establishing design consistency that secured capital interest."
    },
    visualContent: (
      <div className="w-full h-full border border-orange-500/20 bg-orange-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-orange-400">STAGE-06 // LOGOMARK</span>
        <div className="my-auto text-[32px] font-black text-center text-white/95 select-none font-serif tracking-tighter">
          S<span className="text-orange-500">T</span>X
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">GLOW: ACTIVE</span>
      </div>
    )
  },
  "analytics-systems": {
    id: "07",
    slug: "analytics-systems",
    title: "Analytics Systems",
    subtitle: "Unified data attribution pipelines, visual customer heatmaps, and privacy-compliant databases built to translate actions into growth.",
    accent: "#8B5CF6", // Violet
    glowColor: "rgba(139, 92, 246, 0.16)",
    colColors: ["#0a0614", "#110b21", "#190e2f", "#20123c", "#170d2b", "#0c0717"],
    quote: "Consolidate campaign and checkout metrics into privacy-first growth analytics databases that guide marketing decisions.",
    capabilities: [
      { title: "Behavioral Heatmaps", desc: "Track user cursor scrolls, clicks, and page dwell times to eliminate user experience blocks." },
      { title: "Multi-Source Attribution", desc: "Attribute acquisitions and signups to precise campaign channels with data integration pipelines." },
      { title: "Consolidated BI Dashboards", desc: "Real-time, interactive analytics visualizers showing main user flows at a single glance." },
      { title: "GDPR Compliant Data", desc: "Privacy-first tracking architectures that capture attribution insights safely without third-party cookies." }
    ],
    techStack: ["Mixpanel", "Segment.io", "Amplitude", "Hotjar", "PostHog", "Plausible Analytics", "BigQuery"],
    caseStudy: {
      client: "CoachBase Analytics",
      metricTitle: "ABANDONED VALUE RECOVERED",
      metricVal: "$45K",
      desc: "Integrated behavioral user attribution mapping, uncovering a key billing bug that recovered $45K in signups."
    },
    visualContent: (
      <div className="w-full h-full border border-purple-500/20 bg-purple-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-purple-400">STAGE-07 // ATTRIBUTION</span>
        <div className="my-auto grid grid-cols-4 gap-1 items-end h-16">
          {[20, 50, 85, 30].map((h, i) => (
            <div key={i} className="bg-purple-500/20 border border-purple-500/40 rounded-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">DATA: SEGMENTED</span>
      </div>
    )
  },
  "growth-infrastructure": {
    id: "08",
    slug: "growth-infrastructure",
    title: "Growth Infrastructure",
    subtitle: "High-performance edge servers, secure databases, and API development architectures engineered to sustain unlimited business scale.",
    accent: "#00E5FF", // Cyan
    glowColor: "rgba(0, 229, 255, 0.16)",
    colColors: ["#041119", "#08202f", "#0c2f45", "#103f5c", "#0b2d42", "#061b27"],
    quote: "Achieve infinite, secure scalability with sub-100ms API response latency and enterprise-grade daily backup pipelines.",
    capabilities: [
      { title: "Global CDN Edge Networks", desc: "Deploy global server architectures that render storefront pages in milliseconds worldwide." },
      { title: "Scalable API Architectures", desc: "GraphQL or REST API structures optimized for rapid database calls and heavy transaction scale." },
      { title: "Secure supabased DBs", desc: "Encrypted PostgreSQL databases featuring SSL controls and automated daily recovery backups." },
      { title: "CI/CD Deployment Pipelines", desc: "Continuous integration pipelines utilizing automated code-testing suites for zero downtime." }
    ],
    techStack: ["AWS", "Vercel", "GraphQL", "Supabase", "Docker", "Node.js", "GitHub Actions"],
    caseStudy: {
      client: "PropNest Realty",
      metricTitle: "SPIKE TRAFFIC TOLERANCE",
      metricVal: "50×",
      desc: "Optimized server caching rules, allowing database API calls to resolve cleanly during a major viral campaign."
    },
    visualContent: (
      <div className="w-full h-full border border-cyan-500/20 bg-cyan-950/5 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <span className="font-mono text-[7px] text-cyan-400">STAGE-08 // LATENCY CHECK</span>
        <div className="my-auto text-center">
          <span className="text-[28px] font-black text-white block leading-none font-mono tracking-tighter">18ms</span>
          <span className="text-[6px] text-emerald-400 uppercase font-mono font-bold tracking-widest">SUB-50MS RESPONSE</span>
        </div>
        <span className="font-mono text-[7px] text-white/30 text-right">PING: OK</span>
      </div>
    )
  }
};

/* ─────────────────────────────────────────────────────────
   DYNAMIC SERVICE DETAIL PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES_DB[slug];

  // Hover state for interactive items
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // If service slug is invalid, render fallback
  if (!service) {
    return (
      <>
        <Navbar />
        <main
          style={{
            minHeight: "100svh",
            background: "#000000",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            fontFamily: "var(--font-manrope), sans-serif"
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Service Module Not Found</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>The requested business infrastructure module could not be found.</p>
          <Link href="/" style={{ padding: "12px 24px", background: "#FFFFFF", color: "#000000", fontWeight: 800, borderRadius: 4, textDecoration: "none" }}>
            Return to home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100svh",
          background: "#000000",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-manrope), sans-serif"
        }}
      >
        {/* ── 1. Staggered Background Color Columns (CleverMellow style) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            display: "flex",
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const activeColor = service.colColors[i] || service.colColors[0];
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: "100%",
                  background: activeColor,
                  borderRight: "1px solid rgba(255, 255, 255, 0.025)",
                  transition: "background 1.5s ease"
                }}
              />
            );
          })}
        </div>

        {/* ── 2. Radial Accent Ambient Glow layer ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: `radial-gradient(circle at 65% 45%, ${service.glowColor} 0%, transparent 60%)`,
          }}
        />

        {/* Noise overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            opacity: 0.015,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── 3. Detail Content Overlay ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            width: "100%",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "clamp(120px, 16vh, 180px) clamp(24px, 5vw, 64px) clamp(64px, 8vh, 120px)"
          }}
        >
          {/* Breadcrumb / Back button */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              marginBottom: "clamp(24px, 4vh, 48px)",
              transition: "color 0.3s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11 6H1M6 11L1 6l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            BACK TO HOME
          </Link>

          {/* Hero Header */}
          <div style={{ maxWidth: 840, marginBottom: "clamp(48px, 8vh, 80px)" }}>
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: service.accent,
                display: "block",
                marginBottom: 16
              }}
            >
              SERVICE MODULE // 0{service.id}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontSize: "clamp(42px, 6vw, 84px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#FFFFFF",
                margin: "0 0 24px"
              }}
            >
              {service.title}
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 20px)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.55,
                margin: 0
              }}
            >
              {service.subtitle}
            </p>
          </div>

          {/* Split Content Capabilities Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: "clamp(40px, 6vw, 100px)",
              alignItems: "start",
              marginBottom: "clamp(64px, 10vh, 120px)"
            }}
            className="flex flex-col lg:grid"
          >
            {/* LEFT: Quote + High-End CSS visual card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div
                style={{
                  padding: 24,
                  borderLeft: `3px solid ${service.accent}`,
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "0 16px 16px 0",
                  borderTop: "1px solid rgba(255,255,255,0.02)",
                  borderRight: "1px solid rgba(255,255,255,0.02)",
                  borderBottom: "1px solid rgba(255,255,255,0.02)"
                }}
              >
                <p style={{ fontSize: "clamp(14px, 1.1vw, 16px)", fontStyle: "italic", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
                  "{service.quote}"
                </p>
              </div>

              {/* Graphic Card */}
              <div style={{ height: 220, position: "relative" }}>
                {service.visualContent}
              </div>
            </div>

            {/* RIGHT: Capabilities List */}
            <div>
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 32,
                  textTransform: "uppercase"
                }}
              >
                CAPABILITIES & OUTCOMES
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: `${service.accent}15`,
                        border: `1.5px solid ${service.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: service.accent,
                        flexShrink: 0,
                        marginTop: 2
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 6, letterSpacing: "-0.01em" }}>
                        {cap.title}
                      </h3>
                      <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.55, margin: 0 }}>
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology stack bubble grid */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "clamp(48px, 8vh, 80px)", marginBottom: "clamp(64px, 10vh, 120px)" }}>
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.35)",
                display: "block",
                marginBottom: 32,
                textTransform: "uppercase"
              }}
            >
              ENGINEERED WITH
            </span>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {service.techStack.map((tech) => (
                <motion.div
                  key={tech}
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: "10px 20px 9px",
                    borderRadius: 100,
                    background: hoveredTech === tech ? `${service.accent}12` : "rgba(255,255,255,0.02)",
                    border: hoveredTech === tech ? `1px solid ${service.accent}40` : "1px solid rgba(255,255,255,0.06)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: hoveredTech === tech ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                    cursor: "default",
                    letterSpacing: "0.02em",
                    transition: "border-color 0.3s, background 0.3s, color 0.3s"
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metric counter / Case Study segment */}
          <div
            style={{
              background: "rgba(10, 10, 15, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 24,
              padding: "clamp(32px, 5vh, 60px)",
              marginBottom: "clamp(64px, 10vh, 120px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 40,
              flexWrap: "wrap"
            }}
          >
            <div style={{ flex: "1 1 450px" }}>
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: 9.5,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  color: service.accent,
                  display: "block",
                  marginBottom: 12,
                  textTransform: "uppercase"
                }}
              >
                LATEST OUTCOME // {service.caseStudy.client}
              </span>
              <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 12, letterSpacing: "-0.02em" }}>
                {service.caseStudy.desc}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
                Typical delivery cycles range from 6 to 12 weeks with zero guesswork and dedicated daily engineering review boards.
              </p>
            </div>
            <div style={{ flexShrink: 0, textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 8
                }}
              >
                {service.caseStudy.metricTitle}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "clamp(48px, 6vw, 84px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: service.accent,
                  lineHeight: 1
                }}
              >
                {service.caseStudy.metricVal}
              </span>
            </div>
          </div>

          {/* Conversion CTA Block */}
          <div
            style={{
              border: `1px solid ${service.accent}40`,
              background: `linear-gradient(135deg, ${service.accent}08 0%, rgba(0,0,0,0.98) 100%)`,
              borderRadius: 28,
              padding: "clamp(40px, 6vw, 80px)",
              textAlign: "center"
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: 16
              }}
            >
              Ready to construct your
              <br />
              {service.title}?
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 420,
                margin: "0 auto 36px",
                lineHeight: 1.6
              }}
            >
              Let's map out your objectives and technology configurations on a zero-commitment intake discovery call.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:hello@ideoans.com"
                style={{
                  background: "#FFFFFF",
                  color: "#000000",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "15px 36px",
                  borderRadius: 4,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "transform 0.3s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Start your project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link
                href="/"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "14px 34px",
                  borderRadius: 4,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "border-color 0.3s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
              >
                Back to home
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
