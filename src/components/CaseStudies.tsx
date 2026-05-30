"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const CASES = [
  {
    id: "01",
    client: "EduForward Academy",
    industry: "Education",
    title: "From paper trails to digital campus",
    description:
      "Replaced a chaotic manual system with a unified digital campus — admissions portal, student management, parent app, and fee automation.",
    metrics: [
      { value: "340%", label: "Admissions increase" },
      { value: "12h", label: "Admin time saved/day" },
      { value: "98%", label: "Parent satisfaction" },
    ],
    accentColor: "#8B5CF6",
    tag: "School Management",
  },
  {
    id: "02",
    client: "HealthGrid Clinics",
    industry: "Healthcare",
    title: "Modernizing patient experience at scale",
    description:
      "Built a complete telemedicine + clinic management platform handling 50,000+ monthly patient interactions across 12 locations.",
    metrics: [
      { value: "50K+", label: "Monthly patients" },
      { value: "4.9★", label: "App store rating" },
      { value: "62%", label: "No-show reduction" },
    ],
    accentColor: "#00E5FF",
    tag: "Healthcare Platform",
  },
  {
    id: "03",
    client: "PropNest Realty",
    industry: "Real Estate",
    title: "A property platform that converts at 3×",
    description:
      "Redesigned the entire digital acquisition funnel — from AI-powered property search to automated lead nurturing and agent dashboards.",
    metrics: [
      { value: "3.2×", label: "Lead conversion rate" },
      { value: "4.8Cr", label: "Deals closed (₹)" },
      { value: "220%", label: "Traffic growth" },
    ],
    accentColor: "#FBBF24",
    tag: "Real Estate Tech",
  },
  {
    id: "04",
    client: "FitForce Gym Chain",
    industry: "Fitness",
    title: "Scaling from 2 gyms to 18 locations",
    description:
      "Unified membership management, automated billing, class booking, and a trainer app — the complete gym infrastructure stack.",
    metrics: [
      { value: "18", label: "Locations managed" },
      { value: "91%", label: "Retention rate" },
      { value: "100%", label: "Billing automated" },
    ],
    accentColor: "#34D399",
    tag: "Fitness Infrastructure",
  },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(num)) { setDisplay(value); return; }

    const end = num;
    const duration = 1800;
    const step = (timestamp: number, startTime: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (end * eased);
      setDisplay(current.toFixed(value.includes(".") ? 1 : 0) + suffix);
      if (progress < 1) requestAnimationFrame((ts) => step(ts, startTime));
    };
    requestAnimationFrame((ts) => step(ts, ts));
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

type CaseType = typeof CASES[0];

function CaseCard({ c, index }: { c: CaseType; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 48 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.06)",
        background: index % 2 === 0 ? "var(--bg-card)" : "var(--bg-surface)",
        padding: "clamp(28px, 4vw, 56px)",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "clamp(24px, 4vw, 60px)",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        marginBottom: 2,
      }}
    >
      {/* Left: content */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span style={{
            padding: "4px 12px",
            borderRadius: 100,
            background: `${c.accentColor}15`,
            border: `1px solid ${c.accentColor}30`,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: c.accentColor,
          }}>
            {c.tag}
          </span>
          <span className="text-label" style={{ color: "rgba(255,255,255,0.2)" }}>{c.id}</span>
        </div>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", marginBottom: 8, textTransform: "uppercase" as const }}>
          {c.client} · {c.industry}
        </p>
        <h3 style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16, maxWidth: 480 }}>
          {c.title}
        </h3>
        <p style={{ fontSize: "clamp(14px, 1vw, 16px)", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 440 }}>
          {c.description}
        </p>
      </div>

      {/* Right: metrics */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 160, flexShrink: 0 }}>
        {c.metrics.map((m) => (
          <div key={m.label} style={{ borderLeft: `2px solid ${c.accentColor}40`, paddingLeft: 16 }}>
            <p style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 800, letterSpacing: "-0.04em", color: c.accentColor, lineHeight: 1, marginBottom: 4 }}>
              <AnimatedNumber value={m.value} />
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>{m.label}</p>
          </div>
        ))}
      </div>

      {/* Accent glow */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${c.accentColor}08 0%, transparent 70%)`, pointerEvents: "none" }} />
    </motion.div>
  );
}

export default function CaseStudies() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="case-studies" style={{ background: "#050505", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 72 }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            Case Studies
          </motion.p>
          <motion.h2
            className="text-display"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF", maxWidth: 640 }}
          >
            Results that
            <br />
            <span className="gradient-violet">speak loudly.</span>
          </motion.h2>
        </div>

        {/* Cases */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {CASES.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
