"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "We were running 3 WhatsApp groups per class, tracking attendance on registers, and losing 30% of admission leads to missed follow-ups. IDEOANS built us a complete digital campus in 8 weeks. Admissions tripled. Parent complaints dropped to near zero. The AI counselor alone handles 200+ parent queries before our office opens.",
    name: "Rajesh Mehta",
    role: "Principal",
    org: "Greenfields International School",
    industry: "Education",
    color: "#8B5CF6",
    initials: "RM",
  },
  {
    quote:
      "When we expanded from 2 clinics to 12, every other vendor said we'd need to rebuild from scratch. IDEOANS's platform scaled without blinking — 50K monthly patients, sub-2-second load times, and a 62% reduction in no-shows through automated reminders. Our 4.9★ app rating speaks for itself.",
    name: "Dr. Priya Sharma",
    role: "Director",
    org: "HealthGrid Clinics",
    industry: "Healthcare",
    color: "#00E5FF",
    initials: "PS",
  },
  {
    quote:
      "We were burning ₹8 lakhs a month on ads with a 0.9% conversion rate. IDEOANS rebuilt our entire acquisition funnel — AI property matching, WhatsApp-first capture, automated nurture sequences. In 90 days, conversion hit 3.2×. They didn't just build tech, they understood real estate.",
    name: "Ankit Joshi",
    role: "Co-founder",
    org: "PropNest Realty",
    industry: "Real Estate",
    color: "#FBBF24",
    initials: "AJ",
  },
  {
    quote:
      "Two gyms, Excel sheets for memberships, and a notebook for class schedules — that's where we started. Now we're at 18 locations, 91% retention, and 100% automated billing. We scaled 9× without hiring a single admin. IDEOANS built the infrastructure that made it possible.",
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
