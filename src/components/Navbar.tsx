"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToTarget } from "./SmoothScrollProvider";

const NAV_ITEMS = [
  { label: "Work",       href: "#case-studies" },
  { label: "Services",   href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process",    href: "#process" },
];

const EDUCATION_LINKS = [
  { label: "Education Overview", href: "/education", icon: "🎓" },
  { label: "School ERP",         href: "/education#erp", icon: "📊" },
  { label: "LMS Platform",       href: "/education#lms", icon: "📚" },
  { label: "School Websites",    href: "/education#platform", icon: "🌐" },
  { label: "Mobile Applications",href: "/education#platform", icon: "📱" },
  { label: "AI For Schools",     href: "/education#ai", icon: "🤖" },
  { label: "Case Studies",       href: "/education#cases", icon: "📈" },
  { label: "Book Demo",          href: "/education#demo", icon: "📅" },
];

function scrollTo(id: string) {
  scrollToTarget(id);
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);
  const [eduMobileOpen, setEduMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const eduRef = useRef<HTMLDivElement>(null);
  const eduTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close edu dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (eduRef.current && !eduRef.current.contains(e.target as Node)) {
        setEduOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleEduEnter = useCallback(() => {
    if (eduTimeoutRef.current) clearTimeout(eduTimeoutRef.current);
    setEduOpen(true);
  }, []);

  const handleEduLeave = useCallback(() => {
    eduTimeoutRef.current = setTimeout(() => setEduOpen(false), 200);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = "/" + href;
      } else {
        scrollTo(href);
      }
    }
  }, [pathname]);

  const handleEduLinkClick = useCallback((href: string) => {
    setEduOpen(false);
    setMenuOpen(false);
    setEduMobileOpen(false);
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      if (pathname === "/education") {
        scrollTo("#" + hash);
      }
      // If not on /education, Next.js Link handles navigation, hash scroll happens via useEffect in page
    }
  }, [pathname]);

  return (
    <>
      {/* ── Fixed header ── */}
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
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (pathname !== "/") {
                window.location.href = "/";
              } else {
                scrollToTarget(0);
              }
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
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
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

              {/* Education dropdown trigger */}
              <div
                ref={eduRef}
                style={{ position: "relative" }}
                onMouseEnter={handleEduEnter}
                onMouseLeave={handleEduLeave}
              >
                <button
                  onClick={() => setEduOpen(!eduOpen)}
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: eduOpen ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => {
                    if (!eduOpen) e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  Education
                  <motion.svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    animate={{ rotate: eduOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "block" }}
                  >
                    <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {eduOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 16px)",
                        right: -100,
                        width: 580,
                        background: "rgba(10, 10, 12, 0.92)",
                        backdropFilter: "blur(40px) saturate(180%)",
                        WebkitBackdropFilter: "blur(40px) saturate(180%)",
                        border: "1px solid rgba(139, 92, 246, 0.15)",
                        borderRadius: 20,
                        overflow: "hidden",
                        boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(139,92,246,0.1)",
                        display: "flex",
                        zIndex: 100,
                      }}
                    >
                      {/* Left panel — Brand */}
                      <div
                        style={{
                          width: 200,
                          padding: "32px 24px",
                          background: "linear-gradient(160deg, rgba(139,92,246,0.12) 0%, rgba(0,229,255,0.05) 100%)",
                          borderRight: "1px solid rgba(255,255,255,0.06)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{
                            display: "flex", alignItems: "center", gap: 6, marginBottom: 12,
                          }}>
                            <span style={{
                              width: 8, height: 8, borderRadius: "50%",
                              background: "linear-gradient(135deg, #8B5CF6, #00E5FF)",
                              display: "block",
                              boxShadow: "0 0 12px rgba(139,92,246,0.5)",
                            }} />
                            <span style={{
                              fontFamily: "var(--font-bricolage)",
                              fontSize: 11,
                              fontWeight: 800,
                              letterSpacing: "0.14em",
                              color: "#FFFFFF",
                              textTransform: "uppercase",
                            }}>
                              IDEOANS
                            </span>
                          </div>
                          <p style={{
                            fontFamily: "var(--font-bricolage)",
                            fontSize: 18,
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                            color: "#FFFFFF",
                            marginBottom: 8,
                          }}>
                            Education
                          </p>
                          <p style={{
                            fontSize: 11,
                            lineHeight: 1.5,
                            color: "rgba(255,255,255,0.4)",
                            fontWeight: 400,
                          }}>
                            Building Digital Infrastructure For Modern Education
                          </p>
                        </div>
                        <Link
                          href="/education"
                          onClick={() => setEduOpen(false)}
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#8B5CF6",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            marginTop: 20,
                            transition: "color 0.2s ease",
                          }}
                        >
                          Explore →
                        </Link>
                      </div>

                      {/* Right panel — Links */}
                      <div style={{ flex: 1, padding: "24px 28px" }}>
                        <p style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.2)",
                          marginBottom: 16,
                        }}>
                          Platform
                        </p>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "4px 16px",
                        }}>
                          {EDUCATION_LINKS.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => handleEduLinkClick(link.href)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "10px 12px",
                                borderRadius: 10,
                                transition: "background 0.2s ease",
                                textDecoration: "none",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                              }}
                            >
                              <span style={{ fontSize: 16, lineHeight: 1 }}>{link.icon}</span>
                              <span style={{
                                fontSize: 13,
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.7)",
                                transition: "color 0.2s ease",
                                whiteSpace: "nowrap",
                              }}>
                                {link.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Let's talk CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
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
              overflowY: "auto",
            }}
          >
            {/* Noise overlay */}
            <div className="noise-overlay" />

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1000, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

              <p className="text-label" style={{ marginBottom: 40, color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em" }}>Navigation</p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); setMenuOpen(false); }}
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

                {/* Education Accordion — Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * NAV_ITEMS.length + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <button
                    onClick={() => setEduMobileOpen(!eduMobileOpen)}
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontSize: "clamp(40px, 7vw, 100px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: eduMobileOpen ? "#8B5CF6" : "rgba(255,255,255,0.12)",
                      lineHeight: 1.05,
                      padding: "6px 0",
                      transition: "color 0.25s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(12px, 2vw, 24px)",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                    }}
                  >
                    Education
                    <motion.svg
                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                      animate={{ rotate: eduMobileOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {eduMobileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden", paddingLeft: "clamp(16px, 3vw, 40px)" }}
                      >
                        <div style={{ paddingBottom: 20, display: "flex", flexDirection: "column", gap: 4 }}>
                          {EDUCATION_LINKS.map((link, i) => (
                            <motion.div
                              key={link.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04, duration: 0.4 }}
                            >
                              <Link
                                href={link.href}
                                onClick={() => handleEduLinkClick(link.href)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                  padding: "12px 0",
                                  fontSize: "clamp(16px, 2.5vw, 22px)",
                                  fontWeight: 500,
                                  color: "rgba(255,255,255,0.35)",
                                  transition: "color 0.2s ease",
                                  textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                              >
                                <span style={{ fontSize: 18 }}>{link.icon}</span>
                                {link.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contact */}
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); setMenuOpen(false); }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * (NAV_ITEMS.length + 1) + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                  Contact
                </motion.a>
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
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); setMenuOpen(false); }}
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
