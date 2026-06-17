"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const SERVICES = [
  {
    id: "01",
    title: "Website Systems",
    description:
      "High-conversion websites that don't just look good — they generate leads. Speed-optimized, SEO-ranked, and engineered to turn visitors into customers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M6 20h10M11 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 8l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#8B5CF6", // Violet
  },
  {
    id: "02",
    title: "Marketing Systems",
    description:
      "SEO that gets you on page 1. Ad campaigns that actually convert. Email sequences that close deals. Full-funnel growth, tracked end-to-end.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L8 12L12 16L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="8" r="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    accent: "#00E5FF", // Cyan
  },
  {
    id: "03",
    title: "CRM Systems",
    description:
      "Stop managing clients in spreadsheets. Custom CRM portals with visual pipelines, automated follow-ups, and dashboards your team will actually use.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 19c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 5l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#FBBF24", // Gold/Amber
  },
  {
    id: "04",
    title: "AI Automation",
    description:
      "AI agents that answer queries 24/7, qualify leads while you sleep, and automate the 500+ daily tasks your team shouldn't be doing manually.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="13" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    accent: "#EC4899", // Pink
  },
  {
    id: "05",
    title: "Lead Generation",
    description:
      "WhatsApp-first capture, retargeting funnels, automated nurture sequences, and conversion tracking — every lead accounted for, every rupee attributed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20 4v8M20 4h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="4" cy="20" r="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    accent: "#10B981", // Emerald
  },
  {
    id: "06",
    title: "Brand Systems",
    description:
      "More than a logo. Complete brand identity — visual systems, motion guidelines, typography, and brand strategy that makes your business instantly recognizable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polygon points="11,2 14,8 21,9 16,14 17,21 11,18 5,21 6,14 1,9 8,8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#F59E0B", // Orange
  },
  {
    id: "07",
    title: "Analytics Systems",
    description:
      "Stop guessing. Real-time dashboards showing exactly which campaigns work, which pages convert, and where your money goes — decisions backed by data, not instinct.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="14" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="9" y="9" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="15" y="4" width="4" height="15" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    accent: "#8B5CF6", // Violet
  },
  {
    id: "08",
    title: "Growth Infrastructure",
    description:
      "The backend your ambition needs. Scalable architecture, third-party integrations, API development, and tech stacks that grow from 100 users to 100,000.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 12h4l3-8 4 16 3-8h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#00E5FF", // Cyan
  },
];

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "rgba(13, 13, 13, 0.65)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.045)",
        borderRadius: 22,
        padding: "36px 32px 32px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
        // Sleek 3D card tilt lift and shadow on hover
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: isHovered ? `${svc.accent}40` : "rgba(255, 255, 255, 0.045)",
        boxShadow: isHovered
          ? `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px ${svc.accent}12, inset 0 1px 0 rgba(255,255,255,0.1)`
          : "inset 0 1px 0 rgba(255,255,255,0.02)",
      }}
    >
      {/* ── 1. Interactive Mouse-Following Radial Spotlight Glow ── */}
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${svc.accent}16 0%, transparent 70%)`,
          left: mousePos.x - 130,
          top: mousePos.y - 130,
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
          mixBlendMode: "screen",
          willChange: "transform, opacity"
        }}
      />

      {/* Subtle top edge border glow bar on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "25%",
          width: "50%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)`,
          opacity: isHovered ? 0.8 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />

      {/* Card Content container to sit on top of spotlight */}
      <div style={{ position: "relative", zIndex: 10 }}>
        
        {/* Header row: ID tag & Hover Underline */}
        <div style={{ display: "flex", justifySelf: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: 9.5,
              fontWeight: 800,
              letterSpacing: "0.2em",
              color: isHovered ? svc.accent : "rgba(255,255,255,0.25)",
              transition: "color 0.3s ease"
            }}
          >
            STAGE // {svc.id}
          </span>
          <div
            style={{
              height: "1px",
              flex: 1,
              marginLeft: 16,
              background: isHovered ? `linear-gradient(90deg, ${svc.accent}30, transparent)` : "rgba(255,255,255,0.03)",
              transition: "background 0.3s ease"
            }}
          />
        </div>

        {/* Icon with spring expand on hover */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: isHovered ? `${svc.accent}18` : "rgba(255, 255, 255, 0.02)",
            border: isHovered ? `1px solid ${svc.accent}35` : "1px solid rgba(255, 255, 255, 0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isHovered ? svc.accent : "rgba(255,255,255,0.55)",
            marginBottom: 24,
            transition: "background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            transform: isHovered ? "scale(1.08) rotate(4deg)" : "scale(1) rotate(0deg)"
          }}
        >
          {svc.icon}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: "clamp(18px, 1.4vw, 21px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            marginBottom: 12,
          }}
        >
          {svc.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: 13.5,
            color: isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
            lineHeight: 1.6,
            fontWeight: 400,
            transition: "color 0.3s ease",
            minHeight: 65,
          }}
        >
          {svc.description}
        </p>

        {/* CTA link with sliding arrow on hover */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: svc.accent,
            opacity: isHovered ? 1 : 0.45,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            transform: isHovered ? "translateX(4px)" : "translateX(0)"
          }}
        >
          <span>Learn more</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateX(4px)" : "translateX(0)"
            }}
          >
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      style={{
        background: "#000000",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 5vw, 64px)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Dynamic inline keyframes style for header shimmer */}
      <style>{`
        @keyframes headerTextShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 10 }}>
        
        {/* Section Header */}
        <div ref={headerRef} style={{ marginBottom: 64, maxWidth: 680 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
          >
            <span style={{ width: 16, height: 1, background: "rgba(255,255,255,0.25)", display: "block" }} />
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)"
              }}
            >
              Infrastructure Modules
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              color: "#FFFFFF",
              marginBottom: 20
            }}
          >
            Everything your{" "}
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #8B5CF6, #00E5FF, #34D399, #8B5CF6)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "headerTextShimmer 7s linear infinite",
                display: "inline-block"
              }}
            >
              business needs.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.6,
              margin: 0
            }}
          >
            We don't build websites — we build digital infrastructure. Modular, scalable, and designed to grow with your organization.
          </motion.p>
        </div>

        {/* 3D Glassmorphic Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((svc, i) => {
            const slug = svc.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={svc.id}
                href={`/services/${slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <ServiceCard svc={svc} index={i} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
