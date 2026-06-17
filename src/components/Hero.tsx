"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToTarget } from "./SmoothScrollProvider";

/* ─────────────────────────────────────────────────────────
   SLIDE DATA DEFINITIONS & PALETTES
   • Syncs columns, ambient glows, rotating triangle, and card preview content
───────────────────────────────────────────────────────── */

interface Slide {
  id: number;
  tag: string;
  url: string;
  accent: string;       // Rotating triangle & card accents
  glowColor: string;    // Center radial glow
  colColors: string[];  // 6 vertical panel column backgrounds
  preview: {
    logo: string;
    tagline: string;
    title: string;
    sub: string;
    themeBg: string;
    textColor: string;
    accentColor: string;
    isDark: boolean;
  };
}

const SLIDES: Slide[] = [
  {
    id: 0,
    tag: "Real Estate",
    url: "campus.co/timber",
    accent: "#8B5CF6", // Purple triangle
    glowColor: "rgba(34, 197, 94, 0.16)", // Green background glow
    colColors: [
      "#080f08",
      "#0e1c0d",
      "#152814",
      "#1b351a",
      "#132c12",
      "#091708"
    ],
    preview: {
      logo: "CAMPUS OFFICES",
      tagline: "HUURDERS • LOCATIE • CONCEPT • WEBINAR",
      title: "CAMPUS HAMBAKEN TIMBER",
      sub: "DEN BOSCH — BOEK MEETUPROOM",
      themeBg: "#112616",
      textColor: "#FFFFFF",
      accentColor: "#8B5CF6",
      isDark: true
    }
  },
  {
    id: 1,
    tag: "Healthcare",
    url: "koersmakers.nl",
    accent: "#10B981", // Mint green triangle
    glowColor: "rgba(139, 92, 246, 0.20)", // Purple background glow
    colColors: [
      "#0d0617",
      "#180a2b",
      "#240e3f",
      "#2f1254",
      "#210d3b",
      "#10061c"
    ],
    preview: {
      logo: "koersmakers",
      tagline: "WAT WE DOEN • WIE WE ZIJN • ONZE MENSEN",
      title: "Jouw bedrijf versterken door vakmensen.",
      sub: "ZORG & ACADEMIE — ACTIVEREN ↗",
      themeBg: "#0f0822",
      textColor: "#FFFFFF",
      accentColor: "#10B981",
      isDark: true
    }
  },
  {
    id: 2,
    tag: "Creative Branding",
    url: "playside.studio",
    accent: "#2563EB", // Blue triangle
    glowColor: "rgba(234, 179, 8, 0.15)", // Yellow background glow
    colColors: [
      "#141105",
      "#221c09",
      "#30280d",
      "#3e3411",
      "#2c250c",
      "#171305"
    ],
    preview: {
      logo: "playside",
      tagline: "WORK • SERVICES • ABOUT • CAREERS",
      title: "Building brands that bring out your best.",
      sub: "CREATIVE PARTNER — BRANDS TO LIFE",
      themeBg: "#FFFFFF",
      textColor: "#000000",
      accentColor: "#2563EB",
      isDark: false
    }
  },
  {
    id: 3,
    tag: "Architecture",
    url: "polyned.com",
    accent: "#FFFFFF", // White triangle
    glowColor: "rgba(249, 115, 22, 0.16)", // Orange background glow
    colColors: [
      "#170904",
      "#260e06",
      "#351408",
      "#441a0a",
      "#311307",
      "#1b0b04"
    ],
    preview: {
      logo: "polyned",
      tagline: "PROJECTEN • OVER ONS • DUURZAAM • CONTACT",
      title: "Met een verfijnd gevoel voor detail.",
      sub: "ARCHITECTURAL MEMBRANES — ONTDEK MEER",
      themeBg: "#170a04",
      textColor: "#FFFFFF",
      accentColor: "#F97316",
      isDark: true
    }
  },
  {
    id: 4,
    tag: "Clean Energy",
    url: "byont.green",
    accent: "#EF4444", // Red/orange triangle
    glowColor: "rgba(6, 182, 212, 0.18)", // Cyan background glow
    colColors: [
      "#041119",
      "#08202f",
      "#0c2f45",
      "#103f5c",
      "#0b2d42",
      "#061b27"
    ],
    preview: {
      logo: "byont",
      tagline: "BIOGAS • PRODUCTIE • ADVIES • OVER BYONT",
      title: "Wij zijn jouw innovatieve partner voor biogas.",
      sub: "ECOLOGICAL IMPACT — BROWSE PROJECTS",
      themeBg: "#06152a",
      textColor: "#FFFFFF",
      accentColor: "#EF4444",
      isDark: true
    }
  }
];

const LOGOS = [
  "ont",
  "polyned",
  "asito",
  "CAMPUS OFFICES",
  "Het Stedelijk",
  "URBAN",
  "INC",
  "Grid to great"
];

/* ─────────────────────────────────────────────────────────
   HYBRID VECTOR LOGOS RENDERER
───────────────────────────────────────────────────────── */
function LogoItem({ name }: { name: string }) {
  if (name === "ont") {
    return (
      <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: "-0.05em", color: "rgba(255,255,255,0.3)" }}>
        ont
      </span>
    );
  }
  if (name === "polyned") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)" }}>
          polyned
        </span>
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.25)" }} />
      </div>
    );
  }
  if (name === "asito") {
    return (
      <span style={{ fontFamily: "serif", fontStyle: "italic", fontWeight: 700, fontSize: 16, letterSpacing: "0.05em", color: "rgba(255,255,255,0.28)" }}>
        asito
      </span>
    );
  }
  if (name === "CAMPUS OFFICES") {
    return (
      <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)" }}>
        CAMPUS OFFICES
      </span>
    );
  }
  if (name === "Het Stedelijk") {
    return (
      <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: "0.05em", color: "rgba(255,255,255,0.3)" }}>
        Het Stedelijk
      </span>
    );
  }
  if (name === "URBAN") {
    return (
      <span style={{ fontFamily: "monospace", fontWeight: 900, fontSize: 16, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)" }}>
        URBAN
      </span>
    );
  }
  if (name === "INC") {
    return (
      <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", color: "rgba(255,255,255,0.28)" }}>
        INC&gt;
      </span>
    );
  }
  return (
    <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: "0.05em", color: "rgba(255,255,255,0.3)" }}>
      Grid to great
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   DETAILED MOCKUP SITE CONTENT RENDERER
───────────────────────────────────────────────────────── */
function MockSitePreview({ slideId }: { slideId: number }) {
  if (slideId === 0) {
    // Campus Hambaken Timber
    return (
      <div className="w-full h-full flex flex-col justify-between p-4" style={{ height: "100%", background: "#112616" }}>
        <div className="flex justify-between items-center text-[8px] opacity-70 tracking-widest font-mono text-emerald-300">
          <span>CAMPUS OFFICES</span>
          <span>LOCATIE • CONCEPT • HUURDERS</span>
        </div>
        <div className="my-auto flex flex-col items-start gap-2">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold tracking-widest font-mono">DEN BOSCH</span>
          <h4 className="text-[20px] font-black leading-none tracking-tight text-white font-serif max-w-[190px]">
            CAMPUS HAMBAKEN TIMBER
          </h4>
          <div className="flex gap-2 mt-2 w-full">
            <div className="flex-1 text-[8px] py-1.5 px-2 bg-emerald-500 text-black text-center font-black rounded cursor-pointer">BOEK MEETUPROOM</div>
            <div className="flex-1 text-[8px] py-1.5 px-2 border border-emerald-500/40 text-emerald-400 text-center font-bold rounded">CONTACT ↗</div>
          </div>
        </div>
        {/* Architect illustration overlay using pure CSS grids and borders */}
        <div className="absolute bottom-4 right-4 w-[110px] h-[90px] rounded-lg border border-emerald-800/40 bg-emerald-950/40 backdrop-blur-sm overflow-hidden flex flex-col p-1.5 gap-1">
          <div className="flex justify-between items-center text-[6px] opacity-60 text-emerald-400 font-bold">
            <span>OFFICE SPACE</span>
            <span>GRID-04</span>
          </div>
          <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-emerald-700/30 rounded-sm bg-emerald-900/20 hover:bg-emerald-500/20 transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (slideId === 1) {
    // Koersmakers
    return (
      <div className="w-full h-full flex flex-col justify-between p-4" style={{ height: "100%", background: "#0f0822" }}>
        <div className="flex justify-between items-center text-[8px] opacity-80 text-violet-300 font-bold">
          <span>koersmakers.</span>
          <span>WAT WE DOEN • CONTACT</span>
        </div>
        <div className="my-auto flex flex-col items-start gap-1">
          <h4 className="text-[17px] font-extrabold leading-tight text-white tracking-tight max-w-[200px]">
            Jouw bedrijf versterken door vakmensen sterker te maken.
          </h4>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-black font-extrabold text-[9px] cursor-pointer">
            activeren
            <span style={{ fontSize: 10 }}>↗</span>
          </div>
        </div>
        {/* Organic healthcare graphic mockup in CSS */}
        <div className="absolute bottom-4 right-4 w-[100px] h-[90px] flex items-center justify-center">
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/30 flex items-center justify-center animate-pulse">
            <div className="w-10 h-10 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-[8px]">
              98%
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-500/40 blur-sm" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-emerald-400/40 blur-sm" />
          </div>
        </div>
      </div>
    );
  }
  if (slideId === 2) {
    // Playside
    return (
      <div className="w-full h-full flex flex-col justify-between p-4" style={{ height: "100%", background: "#FFFFFF", color: "#000000" }}>
        <div className="flex justify-between items-center text-[9px] font-black text-black tracking-widest">
          <span>playside.</span>
          <span className="opacity-50">ABOUT • PROJECTS</span>
        </div>
        <div className="my-auto flex flex-col items-start gap-2">
          <h4 className="text-[18px] font-black leading-tight text-black tracking-tighter max-w-[220px]">
            Building brands that bring out your best.
          </h4>
          <span className="text-[8px] font-semibold text-blue-600 border-b border-blue-600 pb-0.5 cursor-pointer">
            VIEW OUR SERVICES
          </span>
        </div>
        {/* Abstract typography art in CSS */}
        <div className="absolute bottom-4 right-4 w-[90px] h-[90px] border border-neutral-200 rounded flex flex-col p-2 justify-between bg-neutral-50">
          <div className="flex justify-between text-[6px] font-bold text-neutral-400">
            <span>GRID BRAND</span>
            <span>V3</span>
          </div>
          <div className="text-[36px] font-black leading-none text-blue-600 tracking-tighter self-end select-none">
            P*
          </div>
        </div>
      </div>
    );
  }
  if (slideId === 3) {
    // Polyned
    return (
      <div className="w-full h-full flex flex-col justify-between p-4" style={{ height: "100%", background: "#170a04" }}>
        <div className="flex justify-between items-center text-[8px] opacity-75 text-orange-300 font-bold tracking-widest font-mono">
          <span>polyned</span>
          <span>MEMBRANES • PROJECTS</span>
        </div>
        <div className="my-auto flex flex-col items-start gap-1">
          <h4 className="text-[18px] font-extrabold leading-snug text-white tracking-tight max-w-[200px]">
            Met een verfijnd gevoel voor detail.
          </h4>
          <span className="text-[8px] mt-2 px-2.5 py-1 bg-orange-600 text-white font-bold rounded cursor-pointer">
            ONTDEK MEER
          </span>
        </div>
        {/* Tensile structure outline art in CSS */}
        <div className="absolute bottom-4 right-4 w-[110px] h-[80px] rounded border border-orange-900/30 bg-orange-950/20 overflow-hidden flex items-end">
          <svg className="w-full h-full text-orange-500/20" viewBox="0 0 100 80" fill="none">
            <path d="M0 80 Q50 20 100 80" stroke="rgba(249, 115, 22, 0.4)" strokeWidth="1.5" />
            <path d="M20 80 Q50 35 80 80" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" />
            <line x1="50" y1="28" x2="50" y2="80" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="1" />
            <circle cx="50" cy="28" r="2.5" fill="#FFF" />
          </svg>
        </div>
      </div>
    );
  }
  // Byont (Clean Energy)
  return (
    <div className="w-full h-full flex flex-col justify-between p-4" style={{ height: "100%", background: "#06152a" }}>
      <div className="flex justify-between items-center text-[8px] opacity-75 text-cyan-300 font-bold tracking-wider font-mono">
        <span>byont</span>
        <span>BIOGAS • ECO IMPACT</span>
      </div>
      <div className="my-auto flex flex-col items-start gap-1">
        <h4 className="text-[16px] font-extrabold leading-tight text-white tracking-tight max-w-[210px]">
          Wij zijn jouw innovatieve partner voor biogas.
        </h4>
        <div className="flex gap-3 mt-3">
          <div className="flex flex-col">
            <span className="text-[12px] font-black text-cyan-400 leading-none">5+</span>
            <span className="text-[6px] text-white/50 uppercase font-mono">Projecten</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-3">
            <span className="text-[12px] font-black text-emerald-400 leading-none">30M+</span>
            <span className="text-[6px] text-white/50 uppercase font-mono">Volume</span>
          </div>
        </div>
      </div>
      {/* Circular biome vector in CSS */}
      <div className="absolute bottom-4 right-4 w-[75px] h-[75px] rounded-full border border-cyan-800/40 bg-cyan-950/20 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-600/40 to-emerald-600/40 flex items-center justify-center animate-spin" style={{ animationDuration: "12s" }}>
          <div className="w-8 h-8 rounded-full bg-[#06152a] flex items-center justify-center">
            <span className="text-[7px] font-mono text-cyan-300 font-bold">ECO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN HERO COMPONENT
───────────────────────────────────────────────────────── */
export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // 4 seconds interval to let users absorb the details and colors
    const id = setInterval(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[active];

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        overflow: "hidden",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      {/* ── 1. 6 Vertical Staggered Column Color Panels (CleverMellow Background) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          display: "flex",
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          // Fallback colColors index safely
          const activeColor = slide.colColors[i] || slide.colColors[0];
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: "100%",
                background: activeColor,
                borderRight: "1px solid rgba(255, 255, 255, 0.035)",
                // BREATHTAKING blind staggered transition delay!
                transition: "background 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${i * 65}ms`,
                willChange: "background"
              }}
            />
          );
        })}
      </div>

      {/* ── 2. Atmospheric Ambient Radial Glow Overlay layers (Cross-fade for zero lag) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 65% 45%, ${s.glowColor} 0%, transparent 60%)`,
              opacity: active === idx ? 1 : 0,
              transition: "opacity 1.6s cubic-bezier(0.25, 1, 0.5, 1)",
              willChange: "opacity"
            }}
          />
        ))}
      </div>

      {/* Noise filter texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          opacity: 0.02,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── 3. Awwwards Nominee style Fixed Vertical Badge ── */}
      <div
        className="hero-nominee-badge"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#FFFFFF",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px 8px 14px",
          borderRadius: "4px 0 0 4px",
          zIndex: 99,
          boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
          fontFamily: "var(--font-manrope), sans-serif",
          pointerEvents: "none",
        }}
      >
        <span style={{ fontWeight: 800, fontSize: 16, marginBottom: 12, fontFamily: "serif", lineHeight: 1 }}>W.</span>
        <span style={{
          fontSize: 8.5,
          fontWeight: 700,
          letterSpacing: "0.18em",
          writingMode: "vertical-lr",
          textTransform: "uppercase",
          color: "#000000",
          opacity: 0.95,
        }}>
          Nominee
        </span>
      </div>

      {/* ── 4. Main Hero Content Layout ── */}
      <div
        className="hero-content-wrapper"
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(90px, 11vh, 140px) clamp(24px, 5vw, 64px) clamp(40px, 6vh, 80px)",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "clamp(40px, 6vw, 100px)",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
          {/* ── LEFT: Typography system ── */}
          <div className="hero-text-col" style={{ flex: "1 1 500px", maxWidth: "720px" }}>
            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontSize: "clamp(48px, 6.6vw, 98px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Every story{" "}
              <span
                className="hero-title-deserves-span"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 300,
                  color: "rgba(255, 255, 255, 0.32)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12
                }}
              >
                deserves
                {/* Custom rotating accent triangle */}
                <motion.svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    alignSelf: "center",
                  }}
                  animate={{
                    rotate: active * 90,
                  }}
                  transition={{ type: "spring", stiffness: 60, damping: 13 }}
                >
                  <path
                    d="M7 6L18 12L7 18V6Z"
                    fill={slide.accent}
                    style={{ transition: "fill 1.2s ease" }}
                  />
                </motion.svg>
              </span>
              <br />
              a digital platform.
            </h1>

            {/* Bottom: DISCOVER MORE CTA */}
            <div style={{ marginTop: "clamp(32px, 5vh, 52px)" }}>
              <button
                onClick={() => {
                  scrollToTarget("#trusted-by");
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  outline: "none"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase" as const,
                    color: "rgba(255,255,255,0.45)",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  Discover more
                </span>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7l5 5 5-5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* ── RIGHT: Floating Central Preview Card ── */}
          <div
            className="hero-card-col"
            style={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 20
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="hero-card-container"
              style={{
                width: "clamp(310px, 39vw, 510px)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 35px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                background: "#08080c",
                flexShrink: 0,
                position: "relative"
              }}
            >

              {/* Browser top chrome */}
              <div
                style={{
                  padding: "10px 14px",
                  background: "rgba(10, 10, 15, 0.7)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  backdropFilter: "blur(4px)"
                }}
              >
                {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                  <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "block" }} />
                ))}
                <div
                  style={{
                    flex: 1,
                    marginLeft: 12,
                    height: 20,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 10,
                  }}
                >
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
                    {slide.url}
                  </span>
                </div>
              </div>

              {/* Preview slide container (cross-fade transition) */}
              <div style={{ height: 270, position: "relative", overflow: "hidden" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <MockSitePreview slideId={active} />
                  </motion.div>
                </AnimatePresence>

                {/* Floating bottom-right arrow button inside card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: slide.preview.textColor === "#000000" ? "#000000" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    zIndex: 20
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke={slide.preview.textColor === "#000000" ? "#FFFFFF" : "#000000"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Card Footer strip */}
              <div
                style={{
                  padding: "12px 16px",
                  background: "rgba(10, 10, 15, 0.95)",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {slide.tag}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)" }}>Built by IDEOANS</span>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
