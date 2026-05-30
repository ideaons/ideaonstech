"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const NAV_ITEMS = [
  { label: "Work",       href: "#case-studies" },
  { label: "Services",   href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process",    href: "#process" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── CleverMellow-style: fixed top-left brand + right nav ── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            padding: "clamp(20px, 3vw, 36px) clamp(24px, 4vw, 52px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "background 0.5s ease",
            background: scrolled && !menuOpen
              ? "rgba(15,10,8,0.75)"
              : "transparent",
            backdropFilter: scrolled && !menuOpen ? "blur(16px)" : "none",
            borderBottom: scrolled && !menuOpen
              ? "1px solid rgba(255,255,255,0.05)"
              : "1px solid transparent",
            pointerEvents: "all",
          }}
        >
          {/* Logo — CleverMellow-style: just wordmark top-left */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            aria-label="IDEOANS"
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              lineHeight: 1,
              transition: "opacity 0.2s ease",
            }}
          >
            Ideoans
          </a>

          {/* Right side: nav + CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 40px)" }}>
            {/* Desktop nav links */}
            <nav style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 2.5vw, 36px)" }} className="hidden md:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.55)",
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Let's talk CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="hidden md:inline-flex"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 100,
                padding: "9px 22px",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
            >
              Let's talk
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                width: 36,
                height: 36,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6,
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ display: "block", width: 16, height: 1.5, background: "#fff", borderRadius: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: "block", width: 16, height: 1.5, background: "#fff", borderRadius: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ display: "block", width: 16, height: 1.5, background: "#fff", borderRadius: 1 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Fullscreen menu — editorial large links ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 49,
              background: "#0F0A08",
              display: "flex",
              flexDirection: "column",
              padding: "100px clamp(24px,6vw,80px) 40px",
            }}
          >
            {/* Noise overlay */}
            <div className="noise-overlay" />

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1000, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

              <p className="text-label" style={{ marginBottom: 40, color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em" }}>Navigation</p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[...NAV_ITEMS, { label: "Contact", href: "#contact" }].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); setMenuOpen(false); }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "clamp(40px, 7vw, 100px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "rgba(255,255,255,0.12)",
                      lineHeight: 1.05,
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      transition: "color 0.25s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.12)")}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 20 }}
              >
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", fontWeight: 400 }}>
                  Building digital infrastructure for every business.
                </p>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("#contact"); setMenuOpen(false); }}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 100,
                    padding: "10px 24px",
                    flexShrink: 0,
                    transition: "background 0.2s ease",
                  }}
                >
                  Start project →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
