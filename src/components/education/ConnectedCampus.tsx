"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CENTER_NODE = { label: "Campus", icon: "🏫", x: 50, y: 50 };

const STAKEHOLDERS = [
  { label: "Students", icon: "🎓", x: 50, y: 12 },
  { label: "Parents", icon: "👨‍👩‍👧", x: 85, y: 30 },
  { label: "Teachers", icon: "👩‍🏫", x: 85, y: 70 },
  { label: "Administrators", icon: "👤", x: 50, y: 88 },
  { label: "School", icon: "🏢", x: 15, y: 70 },
];

const DATA_FLOWS = [
  { label: "Admissions", color: "#8B5CF6", detail: "Enquiry → Application → Enrollment" },
  { label: "Attendance", color: "#00E5FF", detail: "Check-in → Alert → Analytics" },
  { label: "Fees", color: "#FBBF24", detail: "Invoice → Payment → Reconciliation" },
  { label: "LMS", color: "#34D399", detail: "Content → Assessment → Grades" },
  { label: "Transport", color: "#F472B6", detail: "Route → GPS → Parent Alert" },
  { label: "Library", color: "#A78BFA", detail: "Catalog → Issue → Return" },
  { label: "Communication", color: "#EC4899", detail: "Compose → Broadcast → Read Receipt" },
  { label: "Analytics", color: "#10B981", detail: "Collect → Visualize → Act" },
];

function ConnectionLine({ from, to, color, index }: { from: { x: number; y: number }; to: { x: number; y: number }; color: string; index: number }) {
  return (
    <motion.line
      x1={`${from.x}%`}
      y1={`${from.y}%`}
      x2={`${to.x}%`}
      y2={`${to.y}%`}
      stroke={color}
      strokeWidth="1"
      strokeDasharray="6 4"
      strokeOpacity="0.3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export default function ConnectedCampus() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeFlow, setActiveFlow] = useState<number | null>(null);

  return (
    <section
      id="connected"
      style={{
        background: "var(--bg-surface)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 64, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--cyan)", marginBottom: 16 }}
          >
            How It All Connects
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
            No More{" "}
            <span className="gradient-cyan">Data Silos.</span>
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
            When a student marks attendance, the parent app updates. When fees are paid, accounts reconcile. When an exam is graded, the report card generates. Everything talks to everything — automatically.
          </motion.p>
        </div>

        {/* Interactive Visual */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>
          {/* SVG Ecosystem Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              borderRadius: 24,
              background: "rgba(8,8,8,0.6)",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            >
              {/* Connection lines */}
              {STAKEHOLDERS.map((s, i) => (
                <ConnectionLine
                  key={s.label}
                  from={CENTER_NODE}
                  to={s}
                  color={DATA_FLOWS[i % DATA_FLOWS.length].color}
                  index={i}
                />
              ))}

              {/* Rings */}
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="0.3" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(0,229,255,0.06)" strokeWidth="0.3" strokeDasharray="2 3" />
            </svg>

            {/* Center node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(0,229,255,0.15))",
                border: "1px solid rgba(139,92,246,0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(139,92,246,0.2), 0 0 80px rgba(139,92,246,0.1)",
                zIndex: 3,
              }}
            >
              <span style={{ fontSize: 24, marginBottom: 2 }}>{CENTER_NODE.icon}</span>
              <span style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
                {CENTER_NODE.label}
              </span>
            </motion.div>

            {/* Stakeholder nodes */}
            {STAKEHOLDERS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1, type: "spring" }}
                style={{
                  position: "absolute",
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  transform: "translate(-50%, -50%)",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(15,15,15,0.9)",
                  border: `1px solid ${DATA_FLOWS[i % DATA_FLOWS.length].color}30`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  transition: "all 0.3s ease",
                  boxShadow: `0 0 20px ${DATA_FLOWS[i % DATA_FLOWS.length].color}10`,
                }}
              >
                <span style={{ fontSize: 18, marginBottom: 1 }}>{s.icon}</span>
                <span style={{ fontSize: 6, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textAlign: "center", lineHeight: 1.1 }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Data flows list */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-label"
              style={{ color: "rgba(255,255,255,0.2)", marginBottom: 24, letterSpacing: "0.15em" }}
            >
              Data Flows
            </motion.p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {DATA_FLOWS.map((flow, i) => (
                <motion.div
                  key={flow.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveFlow(i)}
                  onMouseLeave={() => setActiveFlow(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    borderRadius: 12,
                    border: `1px solid ${activeFlow === i ? flow.color + "30" : "rgba(255,255,255,0.04)"}`,
                    background: activeFlow === i ? `${flow.color}08` : "transparent",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: flow.color,
                    boxShadow: activeFlow === i ? `0 0 12px ${flow.color}60` : "none",
                    transition: "box-shadow 0.3s ease",
                  }} />
                  <span style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: activeFlow === i ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                    transition: "color 0.3s ease",
                    letterSpacing: "-0.01em",
                    flex: "0 0 auto",
                  }}>
                    {flow.label}
                  </span>
                  <span style={{
                    fontSize: 11,
                    color: activeFlow === i ? `${flow.color}` : "rgba(255,255,255,0.2)",
                    transition: "color 0.3s ease",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}>
                    {flow.detail}
                  </span>
                  <div style={{ flex: 1, height: 1, background: activeFlow === i ? `${flow.color}20` : "rgba(255,255,255,0.03)" }} />
                  <motion.svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    animate={{ x: activeFlow === i ? 4 : 0, opacity: activeFlow === i ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M3 7h8M8 3l3 4-3 4" stroke={flow.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          #connected > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
