"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AvatarInfo {
  row: number;
  col: number;
  src: string;
  name: string;
}

const AVATARS: AvatarInfo[] = [
  { row: 1, col: 3, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", name: "David" },
  { row: 4, col: 3, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", name: "Sarah" },
  { row: 5, col: 3, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", name: "Alex" },
  { row: 7, col: 20, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80", name: "Michael" },
  { row: 9, col: 22, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80", name: "Emma" },
  { row: 10, col: 24, src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80", name: "James" },
  { row: 11, col: 22, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80", name: "Sophia" },
];

const ROWS = 12;
const COLS = 28;

export default function DigitalStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Helper to check if an avatar exists at (row, col)
  const getAvatarAt = (row: number, col: number) => {
    return AVATARS.find((a) => a.row === row && a.col === col);
  };

  // Helper to determine the blink animation type for a tick
  const getBlinkAnimation = (r: number, c: number) => {
    // Generate a pseudo-random value based on coordinates
    const val = (r * 17 + c * 31) % 100;
    
    // We only want around 25% of the ticks to blink
    if (val > 25) return null;

    // Distribute blink colors/types
    if (val % 4 === 0) return "blinkPurple";
    if (val % 4 === 1) return "blinkPink";
    if (val % 4 === 2) return "blinkTeal";
    return "blinkAmber";
  };

  // Helper to determine animation delay
  const getBlinkDelay = (r: number, c: number) => {
    const val = (r * 23 + c * 43) % 5;
    return `${val * 0.9}s`;
  };

  return (
    <section
      ref={containerRef}
      id="digital-stage"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(550px, 80svh, 850px)",
        background: "#000000",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* ── CSS Animations for Ticks ── */}
      <style>{`
        @keyframes blinkPurple {
          0%, 100% { background: rgba(255, 255, 255, 0.03); opacity: 0.35; }
          50% { background: #a855f7; opacity: 1; }
        }
        @keyframes blinkPink {
          0%, 100% { background: rgba(255, 255, 255, 0.03); opacity: 0.35; }
          50% { background: #ec4899; opacity: 1; }
        }
        @keyframes blinkTeal {
          0%, 100% { background: rgba(255, 255, 255, 0.03); opacity: 0.35; }
          50% { background: #06b6d4; opacity: 1; }
        }
        @keyframes blinkAmber {
          0%, 100% { background: rgba(255, 255, 255, 0.03); opacity: 0.35; }
          50% { background: #eab308; opacity: 1; }
        }
      `}</style>

      {/* ── Grid Layout of Vertical Ticks & Avatars ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "grid",
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          padding: "40px clamp(24px, 5vw, 64px)",
          opacity: 0.9,
          pointerEvents: "none"
        }}
      >
        {[...Array(ROWS)].map((_, r) => (
          <React.Fragment key={r}>
            {[...Array(COLS)].map((_, c) => {
              const avatar = getAvatarAt(r, c);
              const blinkAnim = getBlinkAnimation(r, c);
              const delay = getBlinkDelay(r, c);

              return (
                <div
                  key={`${r}-${c}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    position: "relative"
                  }}
                >
                  {avatar ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: (r + c) * 0.03
                      }}
                      whileHover={{ scale: 1.15, zIndex: 30 }}
                      style={{
                        width: "clamp(30px, 3.5vw, 42px)",
                        height: "clamp(30px, 3.5vw, 42px)",
                        borderRadius: 10,
                        overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.16)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                        cursor: "pointer",
                        pointerEvents: "auto"
                      }}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </motion.div>
                  ) : (
                    <div
                      style={{
                        width: "1.5px",
                        height: "13px",
                        borderRadius: "1px",
                        background: "rgba(255, 255, 255, 0.035)",
                        animation: blinkAnim ? `${blinkAnim} 5s infinite ease-in-out` : "none",
                        animationDelay: blinkAnim ? delay : "0s",
                        willChange: "background, opacity"
                      }}
                    />
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* ── Main Text & Call to Action Overlay ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "0 clamp(24px, 5vw, 64px)",
          pointerEvents: "none"
        }}
      >
        <div style={{ maxWidth: 1200, width: "100%" }}>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#FFFFFF",
              margin: 0
            }}
          >
            <span style={{ overflow: "hidden", display: "block" }}>
              <motion.span
                initial={{ y: "100%", skewY: 3 }}
                animate={isInView ? { y: "0%", skewY: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block" }}
              >
                Let us create your
              </motion.span>
            </span>
            <span style={{ overflow: "hidden", display: "block" }}>
              <motion.span
                initial={{ y: "100%", skewY: 3 }}
                animate={isInView ? { y: "0%", skewY: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block" }}
              >
                digital stage
              </motion.span>
            </span>
          </h2>

          {/* Solid white LET'S TALK CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: "clamp(24px, 4vh, 40px)",
              pointerEvents: "auto",
              display: "inline-block"
            }}
          >
            <a
              href="mailto:hello@ideoans.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#FFFFFF",
                color: "#000000",
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: 10.5,
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "13px 26px 12px",
                borderRadius: 4,
                textDecoration: "none",
                gap: 12,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Let's talk
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
