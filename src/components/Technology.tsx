"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TECH = [
  { name: "Next.js", cat: "Framework" },
  { name: "React", cat: "UI Library" },
  { name: "Three.js", cat: "3D / WebGL" },
  { name: "GSAP", cat: "Animation" },
  { name: "Framer Motion", cat: "Motion" },
  { name: "Lenis", cat: "Smooth Scroll" },
  { name: "Node.js", cat: "Backend" },
  { name: "PostgreSQL", cat: "Database" },
  { name: "Stripe", cat: "Payments" },
  { name: "OpenAI", cat: "AI Systems" },
  { name: "Vercel", cat: "Deployment" },
  { name: "Figma", cat: "Design" },
  { name: "TypeScript", cat: "Language" },
  { name: "Tailwind", cat: "Styling" },
  { name: "Prisma", cat: "ORM" },
  { name: "Redis", cat: "Caching" },
];

export default function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "var(--bg-surface)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }} ref={ref}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            Technology
          </motion.p>
          <motion.h2
            className="text-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF", maxWidth: 600 }}
          >
            Enterprise-grade stack,
            <br />
            <span className="gradient-violet">future-proof architecture.</span>
          </motion.h2>
        </div>

        {/* Tech grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))",
            gap: 12,
          }}
        >
          {TECH.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
              style={{
                padding: "20px 20px",
                borderRadius: 14,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                e.currentTarget.style.background = "rgba(139,92,246,0.05)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-card)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700, fontSize: 15, color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: 4 }}>
                {t.name}
              </p>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "rgba(139,92,246,0.6)", textTransform: "uppercase" }}>
                {t.cat}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
