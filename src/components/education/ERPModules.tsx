"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ERP_MODULES = [
  { icon: "📝", name: "Admissions", desc: "Online application forms with auto-verification. Parents apply from their phone, documents validate instantly, counselors track every lead on a visual pipeline. No more lost enquiries.", color: "#8B5CF6", stat: "3X conversions" },
  { icon: "📋", name: "Attendance", desc: "Biometric, RFID, or app-based check-in. Parents get notified within 5 minutes of absence. Reports auto-generate daily. Late-comer patterns surface in weekly analytics.", color: "#00E5FF", stat: "99.2% accuracy" },
  { icon: "👤", name: "Student Info", desc: "360° student profiles — academics, medical history, disciplinary notes, sibling links, guardian KYC. One search, every detail. No more digging through 4 different files.", color: "#34D399", stat: "360° profiles" },
  { icon: "💰", name: "Fee Management", desc: "Collect fees via UPI, cards, net banking, or cash — with auto-receipts. Set installment plans, auto-charge late fees, and reconcile every rupee against your accounts. Zero leakage.", color: "#FBBF24", stat: "₹0 leakage" },
  { icon: "📄", name: "Exam Management", desc: "Create exam timetables, generate hall tickets, enter marks in bulk, apply grace marks, and auto-calculate grades. Results publish to parent apps before the notice board is printed.", color: "#F472B6", stat: "Auto-publish" },
  { icon: "📊", name: "Report Cards", desc: "50+ templates for CBSE, ICSE, State boards, and custom formats. Co-scholastic grades, teacher remarks, and principal signatures — all digitally generated and PDF-delivered.", color: "#A78BFA", stat: "50+ templates" },
  { icon: "🚌", name: "Transport", desc: "Plan routes, assign buses, track drivers via GPS in real time. Parents see exactly where the bus is. Schools reduce transport complaints by 80% in the first month of deployment.", color: "#10B981", stat: "Live GPS" },
  { icon: "📚", name: "Library", desc: "Barcode-scan book issues. Auto-calculate fines. Track reading patterns per student. Integrate e-books and research journals. Librarians manage 10,000+ titles with zero manual registers.", color: "#EC4899", stat: "10K+ titles" },
  { icon: "📦", name: "Inventory", desc: "Track every asset — from lab equipment to classroom furniture. Set reorder alerts, manage vendors, generate purchase orders, and calculate depreciation automatically.", color: "#00E5FF", stat: "Asset tracking" },
  { icon: "👥", name: "Human Resources", desc: "From offer letter to exit interview. Digital onboarding, leave tracking with approval chains, performance reviews, document vaults, and training records — all in one HR portal.", color: "#8B5CF6", stat: "Full HRIS" },
  { icon: "💳", name: "Payroll", desc: "Auto-compute salaries factoring attendance, leaves, TDS, PF, ESI, and bonuses. Generate payslips, push bank files, and file compliance — accountants save 3 days per payroll cycle.", color: "#FBBF24", stat: "3 days saved" },
  { icon: "📢", name: "Communication", desc: "Broadcast to 5,000 parents via SMS, WhatsApp, and email in one click. Schedule PTM reminders, send exam alerts, and deliver circulars — with read receipts and delivery analytics.", color: "#34D399", stat: "5K+ reach" },
];

function ModuleCard({ mod, index }: { mod: typeof ERP_MODULES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        padding: "24px 20px",
        border: `1px solid ${hovered ? mod.color + "35" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? `linear-gradient(145deg, ${mod.color}08 0%, rgba(8,8,8,1) 100%)`
          : "rgba(8,8,8,0.6)",
        backdropFilter: "blur(8px)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.5), 0 0 30px ${mod.color}08` : "none",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${mod.color}12 0%, transparent 70%)`,
        pointerEvents: "none",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top row: icon + stat */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <motion.span
            animate={{ scale: hovered ? 1.15 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ fontSize: 24, display: "block", lineHeight: 1 }}
          >
            {mod.icon}
          </motion.span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: mod.color,
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 6,
              background: `${mod.color}12`,
              border: `1px solid ${mod.color}20`,
            }}
          >
            {mod.stat}
          </motion.span>
        </div>

        {/* Name */}
        <h4 style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.8)",
          marginBottom: 8,
          transition: "color 0.3s ease",
        }}>
          {mod.name}
        </h4>

        {/* Description - reveal on hover */}
        <motion.p
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.55,
            overflow: "hidden",
          }}
        >
          {mod.desc}
        </motion.p>
      </div>

      {/* Bottom accent */}
      <motion.div
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: `linear-gradient(90deg, ${mod.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function ERPModules() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="erp"
      style={{
        background: "var(--bg-base)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "25%",
        width: "50%",
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 56, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            ERP Deep Dive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: 16,
            }}
          >
            Your Entire School.{" "}
            <span className="gradient-violet">12 Modules. One Dashboard.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: 560,
              margin: "0 auto",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
            }}
          >
            Principals log in once and see everything — attendance percentages, fee collection status, exam results, pending approvals, and staff availability. No switching between 5 tabs.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
          gap: 12,
        }}>
          {ERP_MODULES.map((mod, i) => (
            <ModuleCard key={mod.name} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
