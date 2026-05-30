"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "IDEOANS didn't just build our website — they built our entire digital infrastructure. Admissions are up 340% and we've cut admin time by 80%. They think like architects, not just developers.",
    name: "Rajesh Mehta",
    role: "Principal",
    org: "Greenfields International School",
    industry: "Education",
    color: "#8B5CF6",
    initials: "RM",
  },
  {
    quote:
      "We went from 2 clinic branches to 12 in 18 months — and IDEOANS's platform scaled effortlessly with us. The patient experience improvements alone justified the entire investment.",
    name: "Dr. Priya Sharma",
    role: "Director",
    org: "HealthGrid Clinics",
    industry: "Healthcare",
    color: "#00E5FF",
    initials: "PS",
  },
  {
    quote:
      "Our lead conversion tripled after they rebuilt our digital acquisition funnel. The team understands real estate deeply — they didn't need hand-holding. Just results.",
    name: "Ankit Joshi",
    role: "Co-founder",
    org: "PropNest Realty",
    industry: "Real Estate",
    color: "#FBBF24",
    initials: "AJ",
  },
  {
    quote:
      "From chaotic WhatsApp group management to a unified member app — IDEOANS transformed how we operate. Our retention went from 68% to 91%. The ROI is insane.",
    name: "Sneha Kapoor",
    role: "Owner",
    org: "FitForce Gyms",
    industry: "Fitness",
    color: "#34D399",
    initials: "SK",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });
  const current = TESTIMONIALS[active];

  return (
    <section style={{ background: "#050505", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 72 }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ color: "var(--cyan)", marginBottom: 16 }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            className="text-display"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF" }}
          >
            What our clients
            <br />
            <span className="gradient-cyan">actually say.</span>
          </motion.h2>
        </div>

        {/* Main testimonial display */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          {/* Quote */}
          <div>
            <div
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                color: current.color,
                lineHeight: 1,
                marginBottom: 12,
                opacity: 0.5,
                fontFamily: "Georgia, serif",
                fontWeight: 700,
              }}
            >
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(18px, 2.2vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.3,
                  color: "rgba(255,255,255,0.88)",
                  maxWidth: 760,
                  marginBottom: 32,
                }}
              >
                {current.quote}
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: `${current.color}20`,
                    border: `1.5px solid ${current.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-bricolage)",
                    fontSize: 14,
                    fontWeight: 800,
                    color: current.color,
                    letterSpacing: "-0.02em",
                  }}>
                    {current.initials}
                  </span>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                    {current.name}
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                    {current.role}, {current.org}
                  </p>
                </div>
                <span
                  style={{
                    marginLeft: 12,
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: `${current.color}12`,
                    border: `1px solid ${current.color}25`,
                    fontSize: 11,
                    fontWeight: 700,
                    color: current.color,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {current.industry}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots — vertical */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 32 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === active ? current.color : "rgba(255,255,255,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  flexShrink: 0,
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* All testimonials mini cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
            gap: 12,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                textAlign: "left",
                padding: "20px",
                borderRadius: 16,
                background: i === active ? `${t.color}10` : "var(--bg-card)",
                border: `1px solid ${i === active ? t.color + "35" : "rgba(255,255,255,0.06)"}`,
                transition: "all 0.35s ease",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: `${t.color}15`,
                  border: `1px solid ${t.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                  color: t.color,
                  fontFamily: "var(--font-bricolage)",
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>{t.name}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{t.org}</p>
                </div>
              </div>
              <p style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.55,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}>
                {t.quote}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
