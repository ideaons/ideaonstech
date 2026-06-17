"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CASE_STUDIES = [
  {
    name: "Greenfields International School",
    location: "New Delhi · 2,000 Students · K-12",
    icon: "🏫",
    color: "#8B5CF6",
    stats: [
      { value: "70%", label: "Admin Workload Cut" },
      { value: "3×", label: "Admission Conversions" },
      { value: "8 wk", label: "Go-Live Timeline" },
    ],
    highlights: [
      "Replaced 45 manual registers and 12 WhatsApp groups with a single ERP dashboard",
      "AI counselor now handles 200+ parent queries daily — before the front desk opens",
      "Fee collection went from 68% on-time to 97% with automated UPI reminders",
      "Parent app hit 92% adoption in the first month — higher than their own WhatsApp groups",
    ],
  },
  {
    name: "NexGen University",
    location: "Bangalore · 5 Campuses · 15,000 Students",
    icon: "🎓",
    color: "#00E5FF",
    stats: [
      { value: "5", label: "Campuses Unified" },
      { value: "60%", label: "Overhead Reduced" },
      { value: "Auto", label: "Grade + Reports" },
    ],
    highlights: [
      "Connected 5 campuses that were running 5 different systems into one platform",
      "Cross-campus enrollment and transfer now takes 2 minutes instead of 2 weeks",
      "Automated grade calculation replaced a 15-person exam processing team",
      "Real-time dashboards let the Vice Chancellor compare campus KPIs at a glance",
    ],
  },
  {
    name: "PrepMaster Coaching Network",
    location: "Mumbai · 12K+ Learners · JEE/NEET",
    icon: "📚",
    color: "#34D399",
    stats: [
      { value: "12K+", label: "Active Learners" },
      { value: "4×", label: "Lead Conversion" },
      { value: "24×", label: "Scaled with same team" },
    ],
    highlights: [
      "Scaled from 500 to 12,000+ learners without hiring additional admin staff",
      "AI lead qualification scores every enquiry — hot leads get callbacks within 5 minutes",
      "LMS delivers 2,000+ hours of JEE/NEET video content with per-student analytics",
      "Automated batch management eliminated 95% of scheduling conflicts across 40 batches",
    ],
  },
];

function CaseStudyCard({ study, index }: { study: typeof CASE_STUDIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 24,
        padding: "36px 32px",
        border: `1px solid ${hovered ? study.color + "35" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? `linear-gradient(160deg, ${study.color}0A 0%, rgba(8,8,8,1) 100%)`
          : "rgba(8,8,8,0.6)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${study.color}08`
          : "none",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        top: -60,
        right: -60,
        width: 180,
        height: 180,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${study.color}12 0%, transparent 70%)`,
        pointerEvents: "none",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.5s ease",
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 24 }}>
          <motion.span
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ fontSize: 32, lineHeight: 1 }}
          >
            {study.icon}
          </motion.span>
          <div>
            <h3 style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(18px, 1.6vw, 22px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: 4,
            }}>
              {study.name}
            </h3>
            <p style={{
              fontSize: 12,
              fontWeight: 500,
              color: "rgba(255,255,255,0.3)",
            }}>
              {study.location}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}>
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "14px 12px",
                borderRadius: 14,
                background: hovered ? `${study.color}08` : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered ? study.color + "18" : "rgba(255,255,255,0.04)"}`,
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: 20,
                fontWeight: 800,
                color: hovered ? study.color : "rgba(255,255,255,0.8)",
                letterSpacing: "-0.02em",
                marginBottom: 4,
                transition: "color 0.3s ease",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {study.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.5,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                <circle cx="7" cy="7" r="6" stroke={study.color} strokeWidth="1.2" opacity="0.4" />
                <path d="M4 7L6 9L10 5" stroke={study.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {h}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        animate={{ width: hovered ? "100%" : "30%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: `linear-gradient(90deg, ${study.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function SuccessStories() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="cases"
      style={{
        background: "var(--bg-surface)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 56, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--cyan)", marginBottom: 16 }}
          >
            Not Testimonials — Implementation Reports
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: 16,
            }}
          >
            Before → After.{" "}
            <span className="gradient-cyan">The Numbers Don&apos;t Lie.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: 520,
              margin: "0 auto",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
            }}
          >
            Three institutions. Three different challenges. One common outcome — operational transformation they didn&apos;t think was possible.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
          gap: 20,
        }}>
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.name} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
