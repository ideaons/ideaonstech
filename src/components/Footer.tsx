"use client";

import React from "react";

const FOOTER_LINKS = {
  Services: [
    "Website Systems",
    "Marketing Systems",
    "CRM Systems",
    "AI Automation",
    "Lead Generation",
    "Brand Systems",
    "Analytics",
    "Growth Infrastructure",
  ],
  Industries: [
    "Schools",
    "Colleges",
    "Coaching",
    "Gyms",
    "Healthcare",
    "Real Estate",
    "Ecommerce",
    "Enterprise",
  ],
  Company: [
    "About",
    "Process",
    "Case Studies",
    "Technology",
    "Blog",
    "Careers",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px) 32px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(40px, 6vw, 100px)",
            marginBottom: 72,
            alignItems: "start",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  color: "#FFFFFF",
                }}
              >
                IDEOANS
              </span>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8B5CF6, #00E5FF)",
                  display: "block",
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(22px, 2.5vw, 36px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 400,
                marginBottom: 24,
              }}
            >
              Building Digital Infrastructure
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #00E5FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                For Every Business.
              </span>
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, maxWidth: 320 }}>
              We don't just build websites. We build the digital foundations that businesses grow on.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 140px)",
              gap: 40,
            }}
          >
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <p
                  className="text-label"
                  style={{
                    color: "rgba(255,255,255,0.2)",
                    marginBottom: 16,
                    letterSpacing: "0.15em",
                  }}
                >
                  {group}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 400,
                          transition: "color 0.2s ease",
                          display: "block",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="line-accent" style={{ opacity: 0.3, marginBottom: 28 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontWeight: 400 }}>
            © 2026 IDEOANS Private Limited. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.2)",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              { label: "Instagram", path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.3)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                  e.currentTarget.style.color = "#8B5CF6";
                  e.currentTarget.style.background = "rgba(139,92,246,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.background = "none";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
