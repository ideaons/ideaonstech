"use client";

import React from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";

/*
 * GlobalBackground — pure CSS-animated ambient orbs
 *
 * Why CSS instead of Framer Motion here?
 *  → CSS animations run on the compositor thread (GPU only)
 *  → Zero JS involvement = zero main-thread jank
 *  → Framer Motion would schedule RAF callbacks on main thread for every frame
 */

export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ background: "#000000" }}
      aria-hidden="true"
    >
      {/* Three.js Interactive Particle Dotted Surface */}
      <DottedSurface className="opacity-[0.35]" />

      {/* ── Orb 1: Electric Indigo-Violet — top-left ── */}
      <div
        className="absolute top-[-14%] left-[6%] w-[660px] h-[660px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(91,77,255,0.30) 0%, rgba(54,37,232,0.14) 50%, transparent 70%)",
          filter: "blur(140px)",
          opacity: 0.55,
          animation: "orb1 28s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Orb 2: Vibrant Coral — top-right ── */}
      <div
        className="absolute top-[18%] right-[2%] w-[580px] h-[580px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,94,71,0.26) 0%, rgba(255,140,66,0.12) 50%, transparent 70%)",
          filter: "blur(145px)",
          opacity: 0.48,
          animation: "orb2 34s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Orb 3: Electric Teal — bottom-left ── */}
      <div
        className="absolute bottom-[-10%] left-[10%] w-[580px] h-[580px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,170,0.24) 0%, rgba(0,180,216,0.10) 50%, transparent 70%)",
          filter: "blur(140px)",
          opacity: 0.45,
          animation: "orb3 31s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Orb 4: Warm Amber-Gold — center-right ── */}
      <div
        className="absolute top-[42%] right-[26%] w-[440px] h-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,0,0.22) 0%, rgba(255,140,0,0.08) 50%, transparent 70%)",
          filter: "blur(130px)",
          opacity: 0.38,
          animation: "orb4 36s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Orb 5: Periwinkle — bottom-right ── */}
      <div
        className="absolute bottom-[4%] right-[4%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(181,174,255,0.26) 0%, rgba(91,77,255,0.10) 50%, transparent 70%)",
          filter: "blur(130px)",
          opacity: 0.40,
          animation: "orb5 27s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Orb 6: Rose accent — bottom center ── */}
      <div
        className="absolute bottom-[20%] left-[42%] w-[360px] h-[360px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(244,63,94,0.20) 0%, transparent 70%)",
          filter: "blur(110px)",
          opacity: 0.28,
          animation: "orb6 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Physical Glass Orbs Layer (Unified with Dark/Glass aesthetic) ── */}
      {/* Glass Orb A: Top-Right Drifter */}
      <div
        className="absolute rounded-full"
        style={{
          width: "280px",
          height: "280px",
          top: "10%",
          right: "15%",
          background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.6) 80%, rgba(255, 255, 255, 0.03) 100%)",
          backdropFilter: "blur(16px) saturate(140%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.25), inset 0 -2px 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.02)",
          animation: "globalGlassFloat1 32s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "8%",
            left: "12%",
            width: "32%",
            height: "22%",
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* Glass Orb B: Center-Left Drifter */}
      <div
        className="absolute rounded-full"
        style={{
          width: "200px",
          height: "200px",
          top: "45%",
          left: "8%",
          background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.65) 80%, rgba(255, 255, 255, 0.02) 100%)",
          backdropFilter: "blur(14px) saturate(120%)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 8px rgba(0, 0, 0, 0.75), 0 0 15px rgba(255, 255, 255, 0.01)",
          animation: "globalGlassFloat2 40s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "8%",
            left: "12%",
            width: "30%",
            height: "20%",
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* Glass Orb C: Bottom-Right Drifter */}
      <div
        className="absolute rounded-full"
        style={{
          width: "320px",
          height: "320px",
          bottom: "12%",
          right: "10%",
          background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.01) 45%, rgba(0, 0, 0, 0.7) 85%, rgba(255, 255, 255, 0.04) 100%)",
          backdropFilter: "blur(18px) saturate(130%)",
          border: "1.4px solid rgba(255, 255, 255, 0.16)",
          boxShadow: "0 25px 55px rgba(0, 0, 0, 0.55), inset 0 3px 6px rgba(255, 255, 255, 0.3), inset 0 -3px 12px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 255, 255, 0.02)",
          animation: "globalGlassFloat3 36s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "9%",
            left: "13%",
            width: "32%",
            height: "22%",
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* Glass Orb D: Bottom-Left Drifter */}
      <div
        className="absolute rounded-full"
        style={{
          width: "240px",
          height: "240px",
          bottom: "15%",
          left: "12%",
          background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.65) 80%, rgba(255, 255, 255, 0.03) 100%)",
          backdropFilter: "blur(15px) saturate(140%)",
          border: "1.2px solid rgba(255, 255, 255, 0.14)",
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.48), inset 0 2.5px 5px rgba(255, 255, 255, 0.28), inset 0 -2.5px 10px rgba(0, 0, 0, 0.78), 0 0 20px rgba(255, 255, 255, 0.02)",
          animation: "globalGlassFloat4 28s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "8%",
            left: "12%",
            width: "32%",
            height: "22%",
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* ── Premium Frosted Noise Overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── CSS keyframes injected inline so no globals.css pollution ── */}
      <style>{`
        @keyframes orb1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(100px,-120px) scale(1.28); }
          66%      { transform: translate(-60px,70px) scale(0.90); }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-140px,120px) scale(0.82); }
          66%      { transform: translate(100px,-100px) scale(1.22); }
        }
        @keyframes orb3 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(120px,100px) scale(1.18); }
          66%      { transform: translate(-120px,-140px) scale(0.84); }
        }
        @keyframes orb4 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(80px,140px) scale(1.22); }
          66%      { transform: translate(-100px,-70px) scale(0.88); }
        }
        @keyframes orb5 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-80px,-90px) scale(1.12); }
          66%      { transform: translate(60px,110px) scale(0.92); }
        }
        @keyframes orb6 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-60px) scale(1.10); }
          66%      { transform: translate(-80px,80px) scale(0.95); }
        }
        @keyframes globalGlassFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -60px) scale(1.03); }
          66% { transform: translate(-30px, 30px) scale(0.97); }
        }
        @keyframes globalGlassFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 50px) scale(0.96); }
          66% { transform: translate(40px, -30px) scale(1.04); }
        }
        @keyframes globalGlassFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, 40px) scale(1.02); }
          75% { transform: translate(-40px, -30px) scale(0.98); }
        }
        @keyframes globalGlassFloat4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -40px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
