"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "#050505",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic glow background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vh",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="noise-overlay" />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Border frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 28,
            padding: "clamp(48px, 7vw, 100px)",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(0,229,255,0.02) 50%, rgba(5,5,5,0.98) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative corner dots */}
          {[
            { top: 20, left: 20 },
            { top: 20, right: 20 },
            { bottom: 20, left: 20 },
            { bottom: 20, right: 20 },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "rgba(139,92,246,0.4)",
                ...pos,
              }}
            />
          ))}

          {/* Label */}
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: "var(--violet)", marginBottom: 24 }}
          >
            Ready to build?
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(36px, 6vw, 88px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#FFFFFF",
              marginBottom: 24,
              maxWidth: 800,
              margin: "0 auto 24px",
            }}
          >
            Let's build your
            <br />
            <span className="gradient-hero">digital future.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: "clamp(15px, 1.3vw, 19px)",
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Tell us about your project. We'll respond within 24 hours with a custom infrastructure plan.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="mailto:hello@ideoans.com"
              className="btn-primary"
              style={{ fontSize: 16, padding: "16px 40px" }}
            >
              Start your project
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 9h14M9 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="tel:+919999999999"
              className="btn-secondary"
              style={{ fontSize: 16, padding: "16px 40px" }}
            >
              Talk to us →
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              "✓ 24h Response",
              "✓ No-commitment discovery call",
              "✓ Fixed pricing, no surprises",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
