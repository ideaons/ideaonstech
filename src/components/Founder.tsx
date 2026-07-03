"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);


export default function Founder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="founder"
      style={{
        background: "#050505",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="noise-overlay" />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ marginBottom: 64 }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            Behind the Vision
          </motion.p>
          <motion.h2
            className="text-display"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", color: "#FFFFFF" }}
          >
            Meet the Founder.
          </motion.h2>
        </div>

        {/* Founder Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "span 1 / span 1",
            gap: 48,
            alignItems: "center",
          }}
          className="lg:grid-cols-12"
        >
          {/* Left: Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
            style={{
              position: "relative",
              borderRadius: 24,
              padding: 1,
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(0, 229, 255, 0.1) 100%)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 23,
                overflow: "hidden",
                background: "#0c0c0e",
                aspectRatio: "4/5",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder.jpg"
                alt="Amit Raghavan - Founder of IDEOANS"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.95) contrast(1.05)",
                }}
              />
              {/* Radial overlay to integrate image into dark theme */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(12, 12, 14, 0.9) 0%, rgba(12, 12, 14, 0.2) 50%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Text on Image (Floating Card) */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  background: "rgba(15, 15, 18, 0.8)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 16,
                  padding: "16px 20px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  Amit Raghavan
                </h3>
                <p
                  style={{
                    color: "var(--cyan)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Founder & Principal Architect
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Intro & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                color: "#FFFFFF",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              Architecting luxury software, engineered to scale.
            </h3>

            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
              Amit Raghavan is an engineer and designer specializing in high-performance digital ecosystems, 
              AI-driven automation, and custom enterprise tools. Having built systems scaling to millions of transactions, 
              Amit leads IDEOANS to deliver world-class digital systems for fast-growing startups and enterprises.
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Under his direction, the studio bridges the gap between deep technical implementation and editorial-grade 
              design. We focus on removing operational complexity, automating high-friction tasks, and creating products 
              that leave a lasting visual impression.
            </p>

            {/* Quote Block */}
            <div
              style={{
                borderLeft: "2px solid var(--violet)",
                paddingLeft: 24,
                marginBottom: 40,
                position: "relative",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#FFFFFF",
                }}
              >
                "We don't just write code. We build clean, modular systems that enable companies to scale 10x without operational overhead."
              </p>
            </div>

            {/* Social Icons & Contact Link */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <a
                href="https://github.com/amitraghvan"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--violet)";
                  e.currentTarget.style.color = "var(--violet)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <GitHubIcon size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--cyan)";
                  e.currentTarget.style.color = "var(--cyan)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <LinkedInIcon size={20} />
              </a>

              <a
                href="mailto:amit@ideaons.codes"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--violet)";
                  e.currentTarget.style.color = "var(--violet)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Mail size={20} />
              </a>

              <a
                href="#contact"
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Discuss a Project <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
