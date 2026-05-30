"use client";

import React, { useState, useRef } from "react";
import {
  TrendingUp, Sparkles, UserPlus, ShoppingBag, ArrowUpRight,
  BarChart3, CheckCircle2, Globe, Cpu, Database, Shield,
  Zap, Server, Cloud, Lock, GitBranch, Layers, ArrowRight,
  Activity, RefreshCw, Wifi
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import TiltCard from "./TiltCard";

/* ─── Animated count-up ─── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += Math.ceil(to / 60);
      if (start >= to) { setVal(to); return; }
      setVal(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Infrastructure layer data ─── */
const infraLayers = [
  {
    icon: Globe,
    label: "Frontend & Web",
    desc: "Lightning-fast, SEO-optimised Next.js sites with stunning UI",
    color: "#000000",
    bg: "rgba(0,0,0,0.12)",
    border: "rgba(0,0,0,0.25)",
    ping: "99.9% Uptime",
    status: "LIVE",
  },
  {
    icon: Cpu,
    label: "Automation Layer",
    desc: "Webhooks, Zapier flows, LLM agents — running 24 × 7 silently",
    color: "#00D4AA",
    bg: "rgba(0,212,170,0.10)",
    border: "rgba(0,212,170,0.22)",
    ping: "Auto-runs",
    status: "ACTIVE",
  },
  {
    icon: Database,
    label: "Data & CRM",
    desc: "Unified lead pipelines, real-time dashboards, and smart reports",
    color: "#FFB800",
    bg: "rgba(255,184,0,0.10)",
    border: "rgba(255,184,0,0.22)",
    ping: "Real-time sync",
    status: "SYNCED",
  },
  {
    icon: Cloud,
    label: "Cloud Hosting",
    desc: "Edge-deployed on Vercel / AWS with global CDN & DDoS protection",
    color: "#FF5E47",
    bg: "rgba(255,94,71,0.10)",
    border: "rgba(255,94,71,0.22)",
    ping: "< 50ms TTF",
    status: "ONLINE",
  },
  {
    icon: Lock,
    label: "Security & Compliance",
    desc: "SSL, GDPR-ready data handling, encrypted backups every 6 hours",
    color: "#B5AEFF",
    bg: "rgba(181,174,255,0.10)",
    border: "rgba(181,174,255,0.22)",
    ping: "AES-256",
    status: "SECURED",
  },
];

/* ─── Pillar cards ─── */
const pillars = [
  {
    icon: Layers,
    title: "Full-Stack Build",
    body: "From pixel-perfect frontend to robust backend APIs — we architect the entire digital stack so you don't have to stitch vendors together.",
    accent: "#000000",
  },
  {
    icon: RefreshCw,
    title: "Continuous Delivery",
    body: "Weekly sprint releases, version-controlled deploys, and zero-downtime updates. Your product keeps shipping while your competitors sleep.",
    accent: "#00D4AA",
  },
  {
    icon: Activity,
    title: "Live Monitoring",
    body: "24 × 7 uptime dashboards, instant Slack alerts on errors, and monthly performance reports sent straight to your inbox.",
    accent: "#FFB800",
  },
  {
    icon: GitBranch,
    title: "Scalable Architecture",
    body: "Infrastructure that grows with you — microservices-ready, API-first design patterns, and horizontal scaling baked in from day one.",
    accent: "#FF5E47",
  },
  {
    icon: Wifi,
    title: "Real-Time Integrations",
    body: "WhatsApp Business, UPI gateways, Google Workspace, Razorpay, Shiprocket — your tools, connected into one seamless digital nervous system.",
    accent: "#B5AEFF",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    body: "Role-based access controls, encrypted data pipelines, and automated vulnerability scans — built-in, not bolted-on.",
    accent: "#FF5E47",
  },
];

/* ─── Case studies ─── */
const cases = [
  {
    id: 0,
    client: "ABC International School",
    segment: "K-12 Education",
    icon: UserPlus,
    accentColor: "#000000",
    headline: "+340% Admissions in 6 Months",
    desc: "We replaced a broken static site with a fully integrated admission funnel — online form submissions, WhatsApp auto-replies, a principal's live dashboard, and an SMS drip sequence. The school went from 12 inquiries per month to 54, completely organically.",
    before: "12 inquiries / mo",
    after: "54 inquiries / mo",
    tags: ["Admission Portal", "WhatsApp Automation", "CRM Dashboard"],
    techStack: ["Next.js", "Supabase", "Twilio", "Vercel"],
  },
  {
    id: 1,
    client: "FitLife Gymnasium Group",
    segment: "Fitness & Wellness",
    icon: TrendingUp,
    accentColor: "#00D4AA",
    headline: "Members Doubled in 90 Days",
    desc: "A custom gym management platform with QR-based check-ins, UPI auto-renewals, WhatsApp membership reminders, and a trainer scheduling engine. Staff admin time dropped by 60%. Revenue leakage from lapsed memberships stopped completely.",
    before: "380 active members",
    after: "760 active members",
    tags: ["Membership SaaS", "UPI Billing", "QR Check-In"],
    techStack: ["React", "Node.js", "Razorpay", "Firebase"],
  },
  {
    id: 2,
    client: "Spice Route Restaurant",
    segment: "F&B / Hospitality",
    icon: ShoppingBag,
    accentColor: "#FFB800",
    headline: "+280% Online Orders, Organically",
    desc: "An interactive visual menu with direct-to-kitchen WhatsApp order routing, a table booking engine, and Google Business integration. The restaurant's Google Maps rating jumped from 3.8 to 4.6 in under four months thanks to automated post-visit review requests.",
    before: "45 orders / week",
    after: "171 orders / week",
    tags: ["Digital Menu", "Order Pipeline", "Review Automation"],
    techStack: ["Next.js", "WhatsApp API", "Google Places", "Cloudflare"],
  },
];

export default function BusinessGrowth() {
  const [activeCase, setActiveCase] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const current = cases[activeCase];

  return (
    <section
      id="growth"
      className="relative overflow-hidden border-y border-white/5"
      style={{
        background:
          "linear-gradient(160deg, #07061A 0%, #0E0B2B 40%, #07061A 100%)",
      }}
    >
      {/* ── Ambient glows ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-[15%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #000000 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, #00D4AA 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        {/* Cyber dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-24 w-full space-y-32">

        {/* ══════════════════════════════════════════════
            SECTION 1 — HERO HEADLINE
        ══════════════════════════════════════════════ */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-black text-[#B5AEFF] tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Build Your Digital Infrastructure
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
          >
            Your entire digital business,{" "}
            <span className="gradient-text">engineered end-to-end.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Most agencies hand you a pretty website. We hand you a complete,
            revenue-generating digital operation — a frontend, a backend,
            automations, a CRM, cloud hosting, and live monitoring — all
            connected, all yours.
          </motion.p>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 pt-4"
          >
            {[
              { n: 500, s: "+", label: "Projects Delivered" },
              { n: 98, s: "%", label: "Client Satisfaction" },
              { n: 48, s: "hr", label: "First Delivery" },
              { n: 3, s: "×", label: "Avg Revenue Growth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-white leading-none">
                  <CountUp to={stat.n} suffix={stat.s} />
                </p>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 2 — INFRA STACK VISUALISER
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: animated stack */}
          <div className="space-y-3">
            <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6">
              Infrastructure Stack — Always On
            </p>
            {infraLayers.map((layer, i) => {
              const Icon = layer.icon;
              const isHovered = hoveredLayer === i;
              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredLayer(i)}
                  onMouseLeave={() => setHoveredLayer(null)}
                  className="group flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300"
                  style={{
                    background: isHovered ? layer.bg : "rgba(255,255,255,0.03)",
                    borderColor: isHovered ? layer.border : "rgba(255,255,255,0.07)",
                    boxShadow: isHovered
                      ? `0 8px 32px ${layer.color}22`
                      : "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: layer.bg, border: `1px solid ${layer.border}` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: layer.color }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white leading-none mb-0.5">
                      {layer.label}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed truncate">
                      {layer.desc}
                    </p>
                  </div>

                  {/* Status badge */}
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span
                      className="text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest"
                      style={{
                        color: layer.color,
                        background: layer.bg,
                        border: `1px solid ${layer.border}`,
                      }}
                    >
                      {layer.status}
                    </span>
                    <span className="text-[9px] text-slate-600 font-semibold">
                      {layer.ping}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: copy block */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Not just a website.{" "}
                <span className="gradient-text-coral">
                  A complete digital operation.
                </span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                When you partner with IDEOANS, you're not hiring a web designer.
                You're plugging into a full-stack digital engineering team that
                handles every layer of your online presence — from the first
                pixel a customer sees, all the way down to the database row that
                records their payment.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                Every system we build is production-grade, monitored 24 × 7,
                and designed to scale with your ambitions. We don't hand you a
                template. We architect infrastructure that becomes a competitive
                moat.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "One agency. Every layer of the stack.",
                "Auto-scaling cloud — no downtime, ever.",
                "Live dashboards you actually understand.",
                "Integrations with the tools you already use.",
                "Dedicated account manager + weekly reports.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00D4AA] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 btn-electric px-7 py-3.5 rounded-full text-sm font-bold"
            >
              Start Building Your Infrastructure
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 3 — SIX PILLARS GRID
        ══════════════════════════════════════════════ */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-black text-[#B5AEFF] uppercase tracking-widest">
              What We Engineer
            </span>
            <h3 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-white">
              Six pillars of a{" "}
              <span className="gradient-text">winning digital business</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every pillar is built, owned, and maintained by us — so you can
              focus entirely on running and growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl border border-white/7 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${pillar.accent}18`,
                      border: `1px solid ${pillar.accent}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                  </div>
                  <h4 className="font-jakarta text-base font-bold text-white mb-2 group-hover:text-[#B5AEFF] transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                    {pillar.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 4 — CASE STUDIES
        ══════════════════════════════════════════════ */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-black text-[#00D4AA] uppercase tracking-widest">
              Real Impact · Real Businesses
            </span>
            <h3 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-white">
              Infrastructure that{" "}
              <span className="gradient-text">moves the revenue needle</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              These aren't projections. Every number below is pulled from live
              dashboards of actual IDEOANS clients.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(c.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCase === c.id
                    ? "text-white border"
                    : "text-slate-500 border border-white/8 hover:border-white/20 hover:text-white"
                }`}
                style={
                  activeCase === c.id
                    ? {
                        background: `${c.accentColor}22`,
                        borderColor: `${c.accentColor}55`,
                        color: c.accentColor,
                      }
                    : {}
                }
              >
                {c.segment}
              </button>
            ))}
          </div>

          {/* Case card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-3xl border"
              style={{
                background: `${current.accentColor}09`,
                borderColor: `${current.accentColor}25`,
              }}
            >
              {/* Left col */}
              <div className="lg:col-span-7 space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${current.accentColor}18`,
                      border: `1px solid ${current.accentColor}30`,
                    }}
                  >
                    <current.icon
                      className="w-6 h-6"
                      style={{ color: current.accentColor }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-black uppercase tracking-widest mb-1"
                      style={{ color: current.accentColor }}
                    >
                      {current.segment}
                    </p>
                    <h4 className="font-jakarta text-lg font-extrabold text-white leading-tight">
                      {current.client}
                    </h4>
                  </div>
                </div>

                {/* Headline */}
                <p
                  className="text-2xl sm:text-3xl font-black leading-tight"
                  style={{ color: current.accentColor }}
                >
                  {current.headline}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                  {current.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded"
                      style={{
                        color: current.accentColor,
                        background: `${current.accentColor}15`,
                        border: `1px solid ${current.accentColor}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest font-bold self-center">
                    Built with:
                  </span>
                  {current.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold text-slate-400 border border-white/8 px-2.5 py-1 rounded bg-white/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right col — stats */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 text-center">
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-2">
                      Before
                    </p>
                    <p className="text-base font-black text-slate-400 line-through decoration-red-500/50">
                      {current.before}
                    </p>
                  </div>
                  <div
                    className="p-5 rounded-2xl text-center"
                    style={{
                      background: `${current.accentColor}12`,
                      border: `1px solid ${current.accentColor}25`,
                    }}
                  >
                    <p className="text-[9px] uppercase tracking-widest font-black mb-2" style={{ color: current.accentColor }}>
                      After
                    </p>
                    <p className="text-base font-black text-white flex items-center justify-center gap-1">
                      {current.after}
                      <ArrowUpRight className="w-4 h-4" style={{ color: current.accentColor }} />
                    </p>
                  </div>
                </div>

                {/* Big headline result */}
                <div
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: `${current.accentColor}08`,
                    border: `1px solid ${current.accentColor}20`,
                  }}
                >
                  <BarChart3 className="w-7 h-7 mx-auto mb-3" style={{ color: current.accentColor }} />
                  <p className="text-2xl font-black text-white leading-none mb-1">
                    {current.headline.split(" ")[0]}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Measurable ROI within first 90 days
                  </p>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300"
                  style={{
                    background: `${current.accentColor}22`,
                    border: `1px solid ${current.accentColor}40`,
                    color: current.accentColor,
                  }}
                >
                  Get a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 5 — BOTTOM CTA STRIP
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(91,77,255,0.18) 0%, rgba(0,212,170,0.12) 100%)",
            border: "1px solid rgba(91,77,255,0.25)",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(91,77,255,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-12">
            <div className="text-center lg:text-left space-y-3 max-w-xl">
              <p className="text-[11px] font-black text-[#B5AEFF] uppercase tracking-widest">
                Ready to build?
              </p>
              <h3 className="font-jakarta text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Launch your complete digital infrastructure in{" "}
                <span className="gradient-text">under 48 hours.</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Book a free 30-minute strategy call. We'll map out your entire
                digital stack, show you what's possible, and give you a fixed
                project quote — no surprises.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold whitespace-nowrap"
              >
                <Zap className="w-4 h-4" />
                Book Free Strategy Call
              </motion.a>
              <p className="text-center text-[10px] text-slate-600 font-semibold tracking-wide">
                No commitment · Response within 2 hours
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
