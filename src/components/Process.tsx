"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  features: string[];
  visual: React.ReactNode;
}

const PROCESS_ITEMS: ProcessItem[] = [
  {
    id: 0,
    title: "Discover",
    subTitle: "01 — ALIGNMENT & STRATEGY",
    description:
      "We map your business objectives, target audience, technical limits, and growth bottlenecks. Every infrastructure decision starts with solid strategic alignment.",
    features: ["Business Audit", "System Scoping", "Tech-Stack Evaluation", "Strategy Roadmapping"],
    visual: (
      <div className="w-full h-full relative border border-white/5 rounded-xl bg-white/[0.02] backdrop-blur-sm p-4 overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-center text-[7px] font-mono text-purple-400 tracking-wider">
          <span>DISCOVERY PHASE</span>
          <span>ALIGN_01</span>
        </div>
        <div className="my-auto flex flex-col gap-2">
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: ["0%", "85%", "85%"] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="h-full bg-purple-500"
            />
          </div>
          <div className="flex justify-between text-[8px] text-white/40 font-mono">
            <span>STRATEGY SCORE</span>
            <span>85% MATCH</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 text-[7px] font-mono text-white/50 text-center">
          {["AUDIT", "SCOPE", "BENCHMARK", "ROUTE"].map((tag, i) => (
            <div key={i} className="border border-purple-500/20 py-1 rounded bg-purple-950/10 hover:bg-purple-900/30 transition-all duration-300">
              {tag}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "Designs",
    subTitle: "02 — ARCHITECTURE & INTERACTION",
    description:
      "We design modern, luxury digital stages and system architectures — from complete interactive UX/UI mockups to backend server configurations and data flowcharts.",
    features: ["UX Wireframing", "Luxury Visual Design", "System Architecture", "Interactive Prototype"],
    visual: (
      <div className="w-full h-full relative border border-white/5 rounded-xl bg-white/[0.02] backdrop-blur-sm p-4 overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-center text-[7px] font-mono text-cyan-400 tracking-wider">
          <span>ARCHITECTURE</span>
          <span>DESIGN_02</span>
        </div>
        {/* Abstract structural grid visualization */}
        <div className="my-auto grid grid-cols-5 gap-1.5 h-16 items-end">
          {[40, 75, 55, 90, 60].map((h, idx) => (
            <motion.div
              key={idx}
              animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
              transition={{ repeat: Infinity, duration: 4, delay: idx * 0.2, ease: "easeInOut" }}
              className="bg-cyan-500/30 border border-cyan-400/40 rounded-sm"
              style={{ width: "100%" }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[7px] font-mono text-white/40">
          <span>FLOW RATE: FLUID</span>
          <span>STAGE-GRID</span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Exercise",
    subTitle: "03 — ENGINEERING & LAUNCH",
    description:
      "Our experienced engineers build, launch, and scale your digital stage — optimized for performance, security, SEO, and continuous development.",
    features: ["Frontend Build", "Cloud Infrastructure", "API Integration", "Automated Testing"],
    visual: (
      <div className="w-full h-full relative border border-white/5 rounded-xl bg-white/[0.02] backdrop-blur-sm p-4 overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-center text-[7px] font-mono text-emerald-400 tracking-wider">
          <span>ENGINEERING</span>
          <span>LAUNCH_03</span>
        </div>
        <div className="my-auto flex items-center justify-center relative">
          <svg className="w-16 h-16 text-emerald-500/30" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="30" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="188"
              animate={{ strokeDashoffset: [188, 0, 188] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
          </svg>
          <div className="absolute font-mono text-[9px] text-emerald-400 font-bold">100ms</div>
        </div>
        <div className="flex justify-between text-[7px] font-mono text-white/40">
          <span>BUILD: STABLE</span>
          <span>LATENCY: FAST</span>
        </div>
      </div>
    )
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="process"
      style={{
        background: "#000000",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 5vw, 64px)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* ── 1. CleverMellow 3-Column Header Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "clamp(120px, 15vw, 220px) 1.5fr 1fr",
            gap: "clamp(24px, 4vw, 80px)",
            alignItems: "start",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "clamp(48px, 8vh, 80px)",
            marginBottom: "clamp(40px, 6vh, 64px)",
            flexWrap: "wrap"
          }}
          className="flex flex-col md:grid"
        >
          {/* Column 1: Small Monospaced Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              fontFamily: "monospace",
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase"
            }}>
              &gt;&gt; WHAT WE DO
            </span>
          </div>

          {/* Column 2: Large Editorial Title */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontSize: "clamp(36px, 5.2vw, 68px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#FFFFFF",
                margin: 0
              }}
            >
              How we create a digital stage
            </h2>
          </div>

          {/* Column 3: Paragraph Description & Play Icon */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15.5px)",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
                margin: 0
              }}
            >
              An event stage is built for the visitor's experience. It is not about individual elements such as lighting, sound, and technology. It is about the whole that forms the show. What a stage must meet depends on the story that needs to be told on it.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "none",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease, transform 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FFFFFF";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {/* Minimal white play triangle */}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M3.5 2.5L7.5 5L3.5 7.5V2.5Z" fill="#FFFFFF" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── 2. Expandable Accordion List Section ── */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {PROCESS_ITEMS.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                style={{
                  width: "100%",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                {/* Accordion Row Header */}
                <div
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={(e) => {
                    setActiveIndex(index);
                    e.currentTarget.style.paddingLeft = "12px";
                  }}
                  style={{
                    padding: "clamp(24px, 4vh, 40px) 0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "padding-left 0.35s ease"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0px";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "clamp(34px, 5.2vw, 68px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.22)",
                      transition: "color 0.4s ease, letter-spacing 0.4s ease",
                      lineHeight: 1,
                      margin: 0
                    }}
                  >
                    {item.title}
                  </h3>
                  {/* Subtle chevron or index tag indicator */}
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                      transition: "color 0.4s ease"
                    }}
                  >
                    STAGE // 0{index + 1}
                  </span>
                </div>

                {/* Accordion Content Panel (Framed height animation) */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 0 clamp(32px, 5vh, 56px) 0",
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "clamp(24px, 4vw, 80px)",
                          flexWrap: "wrap"
                        }}
                      >
                        {/* Expanded details */}
                        <div style={{ flex: "1 1 500px", maxWidth: "680px" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-manrope), sans-serif",
                              fontSize: 9.5,
                              fontWeight: 800,
                              letterSpacing: "0.22em",
                              color: "rgba(255,255,255,0.45)",
                              display: "block",
                              marginBottom: 16
                            }}
                          >
                            {item.subTitle}
                          </span>
                          <p
                            style={{
                              fontFamily: "var(--font-manrope), sans-serif",
                              fontSize: "clamp(14px, 1.1vw, 16.5px)",
                              color: "rgba(255,255,255,0.55)",
                              lineHeight: 1.65,
                              marginBottom: 24,
                              maxWidth: 580
                            }}
                          >
                            {item.description}
                          </p>

                          {/* Tech Tag Pills */}
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {item.features.map((feature) => (
                              <span
                                key={feature}
                                style={{
                                  padding: "5px 14px 4px",
                                  borderRadius: 100,
                                  border: "1px solid rgba(255,255,255,0.12)",
                                  background: "rgba(255,255,255,0.02)",
                                  fontSize: 10.5,
                                  fontWeight: 600,
                                  color: "#FFFFFF",
                                  letterSpacing: "0.04em"
                                }}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive right-side panel visual */}
                        <div
                          style={{
                            flex: "0 0 auto",
                            width: "clamp(240px, 26vw, 360px)",
                            height: 150,
                            position: "relative"
                          }}
                        >
                          {item.visual}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
