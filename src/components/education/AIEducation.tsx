"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AI_FEATURES = [
  {
    icon: "🤖",
    title: "AI Admission Counselor",
    desc: "A trained AI agent that sits on your website and WhatsApp. When a parent asks 'What are your fees for Grade 3?' at 11 PM, it answers accurately, captures their details, scores their intent, and books a campus visit — before your office opens the next morning.",
    color: "#8B5CF6",
    tag: "Lead Conversion",
  },
  {
    icon: "💬",
    title: "AI Parent Help Desk",
    desc: "'Has my child been marked present today?' 'When is the next PTM?' 'What\u2019s the pending fee amount?' Parents ask these 200+ times daily. Our AI resolves them instantly via WhatsApp — your front desk handles only the exceptions.",
    color: "#00E5FF",
    tag: "70% Load Reduction",
  },
  {
    icon: "🎓",
    title: "AI Student Assistant",
    desc: "Students upload a math problem and get step-by-step solutions. They ask for chapter summaries and get them in their language. The AI tracks their weak areas and builds personalized revision schedules before exams.",
    color: "#34D399",
    tag: "Personalized Learning",
  },
  {
    icon: "📊",
    title: "AI Lead Qualification",
    desc: "Not every enquiry deserves a counselor\u2019s time. The AI scores leads by engagement signals — website visits, form completeness, response speed. Hot leads get instant callbacks. Warm leads enter email nurture sequences. Cold leads auto-archive.",
    color: "#FBBF24",
    tag: "Auto-Score & Route",
  },
  {
    icon: "📋",
    title: "AI Attendance Insights",
    desc: "Goes beyond 'present/absent'. Spots patterns: 'Arjun has missed every Monday for 3 weeks'. Predicts dropout risk: 'This student\u2019s attendance dropped 40% — flag for counselor'. Sends auto-alerts to parents when anomalies appear.",
    color: "#F472B6",
    tag: "Predictive Alerts",
  },
  {
    icon: "📈",
    title: "AI Performance Analytics",
    desc: "Predicts which students will struggle before the exam — not after. Identifies class-wide weak topics ('60% of 8B failed quadratic equations'), benchmarks sections against each other, and generates improvement roadmaps for teachers.",
    color: "#A78BFA",
    tag: "Early Intervention",
  },
  {
    icon: "📢",
    title: "AI Communication Autopilot",
    desc: "Auto-generates circular content from event details. Translates messages into Hindi, Tamil, or any regional language. Schedules sends at optimal open-time. Even drafts personalized parent messages for report card day.",
    color: "#EC4899",
    tag: "Auto-Draft & Send",
  },
];

function AIFeatureCard({ feature, index }: { feature: typeof AI_FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const isLarge = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: isLarge ? "32px 28px 28px" : "24px 22px 22px",
        border: `1px solid ${hovered ? feature.color + "35" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? `linear-gradient(145deg, ${feature.color}0A 0%, rgba(8,8,8,1) 100%)`
          : "rgba(8,8,8,0.6)",
        backdropFilter: "blur(12px)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${feature.color}08`
          : "none",
        overflow: "hidden",
        gridColumn: isLarge ? "span 2" : "span 1",
        cursor: "default",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        top: -50,
        right: -50,
        width: 160,
        height: 160,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${feature.color}10 0%, transparent 70%)`,
        pointerEvents: "none",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <motion.span
            animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ fontSize: isLarge ? 32 : 26, display: "block", lineHeight: 1 }}
          >
            {feature.icon}
          </motion.span>
          <span style={{
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: feature.color,
            padding: "4px 10px",
            borderRadius: 100,
            border: `1px solid ${feature.color}25`,
            background: `${feature.color}0A`,
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}>
            {feature.tag}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: isLarge ? "clamp(20px, 2vw, 26px)" : "clamp(16px, 1.4vw, 20px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.85)",
          marginBottom: 10,
          transition: "color 0.3s ease",
        }}>
          {feature.title}
        </h3>

        {/* Desc */}
        <p style={{
          fontSize: 13,
          color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
          lineHeight: 1.6,
          transition: "color 0.3s ease",
        }}>
          {feature.desc}
        </p>
      </div>

      {/* Bottom accent */}
      <motion.div
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: `linear-gradient(90deg, ${feature.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function AIEducation() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="ai"
      style={{
        background: "var(--bg-base)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Futuristic grid overlay */}
      <div className="dot-grid" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.3,
        pointerEvents: "none",
      }} />

      {/* Glow accent */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 56, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            Your Staff Doesn\u2019t Need To Work Harder
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
            7 AI Agents.{" "}
            <span className="gradient-hero">Working 24/7. No Salary.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: 580,
              margin: "0 auto",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
            }}
          >
            Each AI agent is trained specifically for education operations. They don't hallucinate school policies — they're configured with your data, your fee structures, your admission criteria, and your academic calendar.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: 14,
        }}>
          {AI_FEATURES.map((feature, i) => (
            <AIFeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
