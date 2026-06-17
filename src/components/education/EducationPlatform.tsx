"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CAPABILITIES = [
  {
    id: "erp",
    icon: "📊",
    title: "School ERP",
    desc: "One dashboard, 50+ modules. Run admissions, attendance, fee collection, exam management, transport, library, HR, and payroll — without opening a single spreadsheet. Schools using our ERP report 70% less administrative overhead within the first quarter.",
    color: "#8B5CF6",
    anchor: "erp",
  },
  {
    id: "lms",
    icon: "📚",
    title: "Learning Management System",
    desc: "Go beyond PDFs and WhatsApp. Deliver structured courses with video lectures, timed assessments, graded assignments, and discussion threads — all trackable per student. Teachers create once, students learn on their schedule.",
    color: "#00E5FF",
    anchor: "lms",
  },
  {
    id: "admissions",
    icon: "📝",
    title: "Admission Management",
    desc: "From first enquiry to confirmed enrollment — zero leads lost. Parents fill online forms, documents auto-verify, counselors see intent scores, and admission letters generate in one click. Schools have tripled conversions using this pipeline.",
    color: "#34D399",
    anchor: "admissions",
  },
  {
    id: "websites",
    icon: "🌐",
    title: "School Websites",
    desc: "Not just a website — a lead generation engine. SEO-ranked pages, integrated enquiry forms, event calendars, photo galleries, alumni portals, and a CMS your staff can update without calling a developer.",
    color: "#FBBF24",
    anchor: "platform",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Applications",
    desc: "Parents check attendance at 8 AM. Pay fees at lunch. Get homework at 3 PM. Native iOS & Android apps with biometric check-in, push alerts, live GPS tracking, fee receipts, and direct teacher messaging — 92% average adoption rate.",
    color: "#F472B6",
    anchor: "platform",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI Automation",
    desc: "Deploy 7 specialized AI agents: one answers parent queries 24/7, another qualifies admission leads, a third tracks attendance anomalies. Together they handle 500+ daily interactions your front desk currently manages manually.",
    color: "#A78BFA",
    anchor: "ai",
  },
  {
    id: "analytics",
    icon: "📈",
    title: "Analytics Dashboard",
    desc: "Stop guessing, start knowing. Real-time dashboards show exactly which classes have low attendance, which fee defaulters need follow-up, which admission sources convert best, and where operational bottlenecks hide.",
    color: "#EC4899",
    anchor: "analytics",
  },
  {
    id: "communication",
    icon: "💬",
    title: "Communication Systems",
    desc: "One message, every channel. Send circulars via SMS, WhatsApp, email, and push notifications simultaneously. Auto-remind parents before PTMs, trigger fee reminders on day 3 of default, and let teachers chat with parents securely — no personal numbers exchanged.",
    color: "#10B981",
    anchor: "communication",
  },
];

function CapabilityCard({ item, index }: { item: typeof CAPABILITIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      id={item.anchor}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        borderRadius: 22,
        padding: "32px 28px 28px",
        border: `1px solid ${hovered ? item.color + "40" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? `linear-gradient(145deg, ${item.color}0A 0%, rgba(10,10,10,1) 100%)`
          : "rgba(10,10,10,0.7)",
        backdropFilter: "blur(12px)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${item.color}10`
          : "none",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Mouse-following radial glow */}
      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}14 0%, transparent 70%)`,
          left: mousePos.x - 120,
          top: mousePos.y - 120,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          mixBlendMode: "screen",
        }}
      />

      {/* Top edge glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          width: "60%",
          height: 1,
          background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
          opacity: hovered ? 0.7 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: hovered ? `${item.color}15` : "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? item.color + "30" : "rgba(255,255,255,0.05)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            marginBottom: 20,
            transition: "all 0.3s ease",
          }}
        >
          {item.icon}
        </motion.div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: "clamp(18px, 1.6vw, 22px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.85)",
          marginBottom: 10,
          transition: "color 0.3s ease",
        }}>
          {item.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 13,
          color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
          lineHeight: 1.65,
          fontWeight: 400,
          transition: "color 0.3s ease",
        }}>
          {item.desc}
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
          background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
}

export default function EducationPlatform() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="platform"
      style={{
        background: "var(--bg-surface)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 64, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--cyan)", marginBottom: 16 }}
          >
            What You Get
          </motion.p>
          <motion.h2
            className="text-display"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF", marginBottom: 20 }}
          >
            8 Products.{" "}
            <span className="gradient-cyan">One Platform. Zero Integration Headaches.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: 620,
              margin: "0 auto",
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.65,
            }}
          >
            Most schools buy 6 different tools that don&apos;t talk to each other. We built everything in one place — so your attendance data feeds your analytics, your admissions feed your fees module, and nothing falls through the cracks.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: 16,
        }}>
          {CAPABILITIES.map((item, i) => (
            <CapabilityCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
