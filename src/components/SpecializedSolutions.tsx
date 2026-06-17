"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "education",
    icon: "🏫",
    title: "Education Infrastructure",
    tagline: "Schools · Colleges · Coaching Institutes",
    desc: "Your school runs on registers and WhatsApp. It deserves a digital campus. ERP with 50+ modules, parent app with 92% adoption, AI agents handling 500+ daily queries, and fee collection with zero leakage.",
    color: "#8B5CF6",
    colorEnd: "#00E5FF",
    featured: true,
    href: "/education",
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare Systems",
    tagline: "Clinics · Hospitals · Diagnostics",
    desc: "Patient portals, telemedicine, EMR sync, appointment scheduling, and clinical analytics — scaling from 2 branches to 12 without breaking.",
    color: "#F472B6",
    colorEnd: "#EC4899",
    featured: false,
    href: "#industries",
  },
  {
    id: "real-estate",
    icon: "🏗",
    title: "Real Estate Platforms",
    tagline: "Developers · Brokerages · Property Portals",
    desc: "AI property matching, WhatsApp-first lead capture, virtual tours, agent dashboards, and follow-up automation — 3.2× higher conversions.",
    color: "#FBBF24",
    colorEnd: "#F59E0B",
    featured: false,
    href: "#industries",
  },
  {
    id: "fitness",
    icon: "💪",
    title: "Fitness Infrastructure",
    tagline: "Gyms · Studios · Wellness Chains",
    desc: "Member apps, class booking, trainer dashboards, UPI billing, and retention analytics that took FitForce from 2 gyms to 18 on autopilot.",
    color: "#34D399",
    colorEnd: "#10B981",
    featured: false,
    href: "#industries",
  },
  {
    id: "ecommerce",
    icon: "🛍",
    title: "Ecommerce Growth Systems",
    tagline: "D2C · Marketplace · Subscription",
    desc: "Custom storefronts, multi-warehouse inventory, subscription billing, and growth analytics — built for your workflow, not a template's.",
    color: "#00E5FF",
    colorEnd: "#0891B2",
    featured: false,
    href: "#industries",
  },
  {
    id: "enterprise",
    icon: "🏢",
    title: "Enterprise Operations",
    tagline: "Teams of 50 to 5,000",
    desc: "Custom dashboards, workflow automation, CRM integrations, API architecture, and data pipelines — internal tools your teams actually use.",
    color: "#A78BFA",
    colorEnd: "#8B5CF6",
    featured: false,
    href: "#industries",
  },
];

function SolutionCard({ item, index }: { item: typeof SOLUTIONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const isFeatured = item.featured;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 24,
        padding: isFeatured ? "36px 32px 32px" : "28px 24px 24px",
        border: `1px solid ${hovered ? item.color + "50" : isFeatured ? item.color + "25" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? `linear-gradient(145deg, ${item.color}0D 0%, rgba(8,8,8,1) 100%)`
          : isFeatured
            ? `linear-gradient(145deg, ${item.color}08 0%, rgba(8,8,8,1) 100%)`
            : "rgba(10,10,10,0.8)",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 32px 80px rgba(0,0,0,0.6), 0 0 60px ${item.color}15`
          : isFeatured
            ? `0 0 40px ${item.color}08`
            : "none",
        overflow: "hidden",
        gridColumn: isFeatured ? "span 2" : "span 1",
        cursor: "pointer",
      }}
    >
      {/* Featured glow orb */}
      {isFeatured && (
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${item.color}18 0%, transparent 70%)`,
            pointerEvents: "none",
            animation: "pulseGlow 4s ease-in-out infinite",
          }}
        />
      )}

      {/* Background glow on hover */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}12 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Icon & badge row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
          <motion.span
            animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ fontSize: isFeatured ? 36 : 28, display: "block", lineHeight: 1 }}
          >
            {item.icon}
          </motion.span>
          {isFeatured && (
            <span style={{
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: item.color,
              padding: "5px 12px",
              borderRadius: 100,
              border: `1px solid ${item.color}30`,
              background: `${item.color}0A`,
            }}>
              Featured Division
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: isFeatured ? "clamp(22px, 2.2vw, 30px)" : "clamp(18px, 1.6vw, 22px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.85)",
          marginBottom: 6,
          transition: "color 0.3s ease",
        }}>
          {item.title}
        </h3>

        {/* Tagline */}
        <p style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: hovered ? item.color : "rgba(255,255,255,0.25)",
          marginBottom: 14,
          transition: "color 0.3s ease",
          textTransform: "uppercase",
        }}>
          {item.tagline}
        </p>

        {/* Description */}
        <p style={{
          fontSize: 13.5,
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.6,
          fontWeight: 400,
          marginBottom: isFeatured ? 24 : 0,
        }}>
          {item.desc}
        </p>

        {/* CTA for featured */}
        {isFeatured && (
          <Link
            href="/education"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 28px",
              borderRadius: 100,
              background: `linear-gradient(135deg, ${item.color}, ${item.colorEnd})`,
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.02em",
              border: "none",
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: hovered
                ? `0 12px 40px ${item.color}40, 0 0 20px ${item.color}20`
                : `0 4px 20px ${item.color}20`,
              transform: hovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
              textDecoration: "none",
            }}
          >
            Explore Education Division
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>

      {/* Bottom accent line */}
      <motion.div
        animate={{ width: hovered ? "100%" : isFeatured ? "40%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: `linear-gradient(90deg, ${item.color} 0%, ${item.colorEnd} 50%, transparent 100%)`,
          borderRadius: "0 0 0 24px",
        }}
      />
    </motion.div>
  );
}

export default function SpecializedSolutions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="specialized-solutions"
      style={{
        background: "var(--bg-base)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top border glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "20%",
        width: "60%",
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 64, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            We Don&apos;t Do Generic
          </motion.p>
          <motion.h2
            className="text-display"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF", marginBottom: 20 }}
          >
            Industry-Specific{" "}
            <span className="gradient-violet">Digital Ecosystems.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: 600,
              margin: "0 auto",
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.65,
            }}
          >
            Every industry has unique operational pain points. We build purpose-built platforms that solve them — not generic websites with a logo swap.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: 16,
          }}
        >
          {SOLUTIONS.map((item, i) => (
            <SolutionCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
