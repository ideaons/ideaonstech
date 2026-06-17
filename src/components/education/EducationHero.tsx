"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToTarget } from "../SmoothScrollProvider";

const TRUST_ITEMS = ["50+ ERP Modules", "Built-in LMS Engine", "iOS & Android Apps", "7 AI Agents", "Real-time Analytics"];

export default function EducationHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  function scrollToSection(id: string) {
    scrollToTarget(id);
  }

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px clamp(20px, 5vw, 80px) 80px",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Background glows */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "15%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        animation: "pulseGlow 6s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        bottom: "5%",
        right: "10%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        animation: "pulseGlow 8s ease-in-out infinite 2s",
      }} />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Dot grid */}
      <div className="dot-grid" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.4,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        {/* Division badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 100,
            border: "1px solid rgba(139,92,246,0.25)",
            background: "rgba(139,92,246,0.06)",
            marginBottom: 32,
          }}
        >
          <span style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8B5CF6, #00E5FF)",
            display: "block",
            boxShadow: "0 0 10px rgba(139,92,246,0.5)",
          }} />
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}>
            IDEOANS Education · A Specialized Division
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-bricolage)",
            fontSize: "clamp(36px, 6.5vw, 80px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#FFFFFF",
            marginBottom: 24,
          }}
        >
          Your School Runs On{" "}
          <br />
          Registers & WhatsApp.{" "}
          <br />
          <span style={{
            background: "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 40%, #00E5FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            It Deserves A Digital Campus.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            maxWidth: 720,
            margin: "0 auto 40px",
            fontSize: "clamp(15px, 1.3vw, 19px)",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          Replace scattered spreadsheets, manual registers, and WhatsApp groups with one integrated
          platform. Automate admissions, digitize attendance, collect fees online, run your LMS, deploy
          AI agents for parent queries — and give your staff back 70% of their operational time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 52, flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollToSection("#demo")}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              border: "1px solid rgba(139,92,246,0.5)",
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              transform: primaryHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
              boxShadow: primaryHovered
                ? "0 16px 50px rgba(139,92,246,0.4), 0 4px 16px rgba(0,0,0,0.3)"
                : "0 4px 20px rgba(139,92,246,0.2)",
            }}
          >
            Book Free Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => scrollToSection("#platform")}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 36px",
              borderRadius: 100,
              background: "transparent",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              border: "1px solid rgba(255,255,255,0.15)",
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              transform: secondaryHovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: secondaryHovered ? "0 8px 30px rgba(0,0,0,0.4)" : "none",
              borderColor: secondaryHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)",
            }}
          >
            Explore Platform
          </button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "clamp(16px, 3vw, 32px)",
          }}
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
                <path d="M4 7L6 9L10 5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
