"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LOGOS = [
  "EduTech Pro",
  "MedCore",
  "FitForce",
  "PropNest",
  "StartupX",
  "LearnHub",
  "HealthGrid",
  "RetailEdge",
  "CoachBase",
  "CampusOne",
  "GrowthOS",
  "InfraBuild",
];

// Double for infinite loop
const ALL = [...LOGOS, ...LOGOS];

export default function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      id="trusted-by"
      style={{
        padding: "80px 0",
        background: "#050505",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-label"
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.2em",
        }}
      >
        Trusted by forward-thinking organizations
      </motion.p>

      {/* Marquee */}
      <div
        className="marquee-fade"
        style={{ overflow: "hidden" }}
      >
        <div className="marquee-track" style={{ display: "flex", gap: 64 }}>
          {ALL.map((name, i) => (
            <div
              key={`${name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {/* Logo "wordmark" */}
              <span
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "rgba(255,255,255,0.22)",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
              >
                {name}
              </span>
              {/* Separator dot */}
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(139,92,246,0.3)",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thin accent line */}
      <div style={{ marginTop: 60 }}>
        <div className="line-accent" style={{ opacity: 0.4 }} />
      </div>
    </section>
  );
}
