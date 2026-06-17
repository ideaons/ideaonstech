"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const INDUSTRIES = [
  {
    num: "01",
    name: "Schools",
    tagline: "From manual chaos to digital campus",
    desc: "Replace registers, WhatsApp groups, and paper receipts with a unified ERP, parent app, and AI-powered admissions pipeline. Go live in 8 weeks.",
    color: "#8B5CF6",
    icon: "🏫",
  },
  {
    num: "02",
    name: "Colleges",
    tagline: "Multi-campus operations, one dashboard",
    desc: "Connect 5 campuses, 50K students, and 2K faculty under one system. Student portals, automated grade sheets, placement tracking, and alumni engagement.",
    color: "#00E5FF",
    icon: "🎓",
  },
  {
    num: "03",
    name: "Coaching",
    tagline: "Scale from 500 to 12,000 learners",
    desc: "Online test series, batch management, live class integration, automated enrollment, and LMS with video delivery — without hiring more admin staff.",
    color: "#A78BFA",
    icon: "📚",
  },
  {
    num: "04",
    name: "Gyms",
    tagline: "Excel → Member app in 2 weeks",
    desc: "Unified membership management, class booking, trainer dashboards, automated billing with UPI, and retention analytics that actually reduce churn.",
    color: "#34D399",
    icon: "💪",
  },
  {
    num: "05",
    name: "Healthcare",
    tagline: "2 clinics to 12 branches, zero friction",
    desc: "Telemedicine, appointment scheduling, EMR sync, patient portals, and clinical analytics — built for HIPAA-grade security and multi-location scale.",
    color: "#F472B6",
    icon: "🏥",
  },
  {
    num: "06",
    name: "Real Estate",
    tagline: "Triple your lead conversion rate",
    desc: "AI-powered property matching, WhatsApp-first lead capture, virtual tour integration, agent dashboards, and automated follow-up sequences.",
    color: "#FBBF24",
    icon: "🏗️",
  },
  {
    num: "07",
    name: "Ecommerce",
    tagline: "Beyond Shopify — built for your workflow",
    desc: "Custom storefronts, multi-warehouse inventory, payment gateway integration, subscription billing, and growth analytics — no template limitations.",
    color: "#00E5FF",
    icon: "🛍️",
  },
  {
    num: "08",
    name: "Enterprise",
    tagline: "Internal tools that actually get used",
    desc: "Custom dashboards, workflow automation, CRM integrations, API development, and data pipelines — built for teams of 50 to 5,000.",
    color: "#8B5CF6",
    icon: "🏢",
  },
];

function IndustryCard({ item, index }: { item: typeof INDUSTRIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "28px 28px 24px",
        border: `1px solid ${hovered ? item.color + "40" : "rgba(255,255,255,0.07)"}`,
        background: hovered ? `linear-gradient(135deg, ${item.color}08 0%, rgba(5,5,5,1) 100%)` : "var(--bg-card)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${item.color}12` : "none",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}15 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
        {/* Number */}
        <span
          className="text-label"
          style={{
            color: hovered ? item.color : "rgba(255,255,255,0.15)",
            transition: "color 0.3s ease",
          }}
        >
          {item.num}
        </span>

        {/* Icon */}
        <motion.span
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ fontSize: 28, display: "block", lineHeight: 1 }}
        >
          {item.icon}
        </motion.span>
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: "clamp(20px, 2vw, 26px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.8)",
          marginBottom: 6,
          transition: "color 0.3s ease",
        }}
      >
        {item.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.03em",
          color: hovered ? item.color : "rgba(255,255,255,0.25)",
          marginBottom: 14,
          transition: "color 0.3s ease",
          textTransform: "uppercase",
        }}
      >
        {item.tagline}
      </p>

      {/* Description */}
      <motion.p
        animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.6,
          overflow: "hidden",
          fontWeight: 400,
        }}
      >
        {item.desc}
      </motion.p>

      {/* Bottom accent line */}
      <motion.div
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
          borderRadius: "0 0 0 20px",
        }}
      />
    </motion.div>
  );
}

export default function Industries() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="industries" style={{ background: "var(--bg-surface)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div>
              <motion.p
                className="text-label"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ color: "var(--cyan)", marginBottom: 16 }}
              >
                Industries
              </motion.p>
              <motion.h2
                className="text-display"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF" }}
              >
                Built for every
                <br />
                <span className="gradient-cyan">industry.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                maxWidth: 380,
                fontSize: "clamp(14px, 1.1vw, 17px)",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              From education to enterprise — we understand the unique digital infrastructure requirements of each sector and build accordingly.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: 16,
          }}
        >
          {INDUSTRIES.map((item, i) => (
            <IndustryCard key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
