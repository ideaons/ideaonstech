"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink, Laptop } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Work" },
    { id: "web", name: "Websites" },
    { id: "portal", name: "Portals" },
    { id: "branding", name: "Branding" },
    { id: "app", name: "Apps" }
  ];

  const items = [
    {
      id: 1,
      category: "portal",
      title: "Veritas School Portal",
      client: "Veritas International",
      colSpan: "md:col-span-4",
      rowSpan: "md:row-span-1",
      tags: ["Education", "Portal Systems"],
      icon: (
        <svg className="w-full h-full text-brand-green bg-bg-warm" viewBox="0 0 400 200" fill="none">
          {/* Dashboard Outline */}
          <rect x="20" y="20" width="360" height="160" rx="6" fill="#ffffff" stroke="var(--green-light)" strokeWidth="1.5" />
          {/* Sidebar */}
          <rect x="20" y="20" width="70" height="160" rx="6" fill="var(--green)" fillOpacity="0.06" stroke="var(--green-light)" strokeWidth="1" />
          <line x1="90" y1="20" x2="90" y2="180" stroke="var(--green-light)" strokeWidth="1" />
          {/* Sidebar links */}
          <rect x="30" y="40" width="50" height="8" rx="2" fill="var(--green)" fillOpacity="0.3" />
          <rect x="30" y="55" width="50" height="8" rx="2" fill="var(--green)" fillOpacity="0.15" />
          <rect x="30" y="70" width="50" height="8" rx="2" fill="var(--green)" fillOpacity="0.15" />
          {/* Main content grid */}
          <rect x="110" y="40" width="120" height="40" rx="4" fill="var(--green)" fillOpacity="0.04" stroke="var(--green-light)" strokeWidth="1" />
          <rect x="245" y="40" width="120" height="40" rx="4" fill="var(--green)" fillOpacity="0.04" stroke="var(--green-light)" strokeWidth="1" />
          <rect x="110" y="95" width="255" height="70" rx="4" fill="var(--green)" fillOpacity="0.04" stroke="var(--green-light)" strokeWidth="1" />
          {/* Little circles & details */}
          <circle cx="125" cy="55" r="8" fill="var(--green)" />
          <rect x="140" y="51" width="60" height="8" rx="2" fill="var(--green-dark)" />
          <circle cx="260" cy="55" r="8" fill="var(--green-dark)" />
          <rect x="275" y="51" width="60" height="8" rx="2" fill="var(--green)" />
          {/* Progress bar inside long card */}
          <rect x="130" y="115" width="215" height="10" rx="3" fill="var(--green-light)" fillOpacity="0.3" />
          <rect x="130" y="115" width="150" height="10" rx="3" fill="var(--green)" />
        </svg>
      )
    },
    {
      id: 2,
      category: "app",
      title: "FitLife Member Dashboard",
      client: "FitLife Gymnasium",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      tags: ["Wellness", "Gym System"],
      icon: (
        <svg className="w-full h-full text-brand-green bg-bg-warm" viewBox="0 0 200 200" fill="none">
          {/* Mobile phone mockup */}
          <rect x="50" y="15" width="100" height="170" rx="14" fill="#ffffff" stroke="var(--green-dark)" strokeWidth="2.5" />
          {/* Screen notch */}
          <rect x="85" y="15" width="30" height="8" rx="4" fill="var(--green-dark)" />
          {/* Circular progress loop */}
          <circle cx="100" cy="75" r="32" stroke="var(--green-light)" strokeWidth="4" />
          <circle cx="100" cy="75" r="32" stroke="var(--green)" strokeWidth="4.5" strokeDasharray="160 200" strokeLinecap="round" />
          <text x="100" y="80" textAnchor="middle" fill="var(--green-dark)" fontSize="12" fontWeight="bold" fontFamily="sans-serif">84%</text>
          {/* Action cards */}
          <rect x="62" y="125" width="76" height="16" rx="4" fill="var(--green-light)" fillOpacity="0.4" />
          <rect x="62" y="148" width="76" height="16" rx="4" fill="var(--green)" fillOpacity="0.1" stroke="var(--green-light)" strokeWidth="1" />
          <circle cx="72" cy="133" r="4" fill="var(--green)" />
          <circle cx="72" cy="156" r="4" fill="var(--green-dark)" />
        </svg>
      )
    },
    {
      id: 3,
      category: "web",
      title: "L'Avenue Paris Menu Catalog",
      client: "L'Avenue Paris Bistro",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      tags: ["Hospitality", "Restaurant Web"],
      icon: (
        <svg className="w-full h-full text-brand-green bg-bg-warm" viewBox="0 0 200 200" fill="none">
          {/* Sleek digital menu design */}
          <rect x="25" y="25" width="150" height="150" rx="8" fill="#ffffff" stroke="var(--green-light)" strokeWidth="1.5" />
          {/* Header image silhouette */}
          <rect x="35" y="35" width="130" height="50" rx="4" fill="var(--green)" fillOpacity="0.08" stroke="var(--green-light)" strokeWidth="1" />
          <circle cx="100" cy="60" r="14" fill="var(--green-light)" fillOpacity="0.4" />
          <path d="M92,68 C92,54 108,54 108,68 Z" fill="var(--green-dark)" />
          {/* Menu items */}
          <rect x="35" y="100" width="80" height="8" rx="2" fill="var(--green-dark)" />
          <circle cx="155" cy="104" r="5" fill="var(--green)" />
          <line x1="35" y1="118" x2="165" y2="118" stroke="var(--green-light)" strokeWidth="1" strokeDasharray="3 3" />
          
          <rect x="35" y="130" width="90" height="8" rx="2" fill="var(--green)" fillOpacity="0.5" />
          <circle cx="155" cy="134" r="5" fill="var(--green-light)" />
          <line x1="35" y1="148" x2="165" y2="148" stroke="var(--green-light)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      id: 4,
      category: "branding",
      title: "Apex Identity Suite",
      client: "Apex Consulting",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      tags: ["Branding", "Corporate Guides"],
      icon: (
        <svg className="w-full h-full text-brand-green bg-bg-warm" viewBox="0 0 200 200" fill="none">
          {/* Brand Guide overlapping sheets */}
          <rect x="30" y="50" width="90" height="110" rx="4" fill="#ffffff" stroke="var(--green-light)" strokeWidth="1.5" transform="rotate(-6 75 105)" />
          <rect x="75" y="40" width="90" height="110" rx="4" fill="#ffffff" stroke="var(--green-dark)" strokeWidth="1.5" transform="rotate(4 120 95)" />
          {/* Sheet details */}
          <circle cx="120" cy="70" r="14" fill="var(--green)" />
          <text x="120" y="74" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">A</text>
          <rect x="95" y="100" width="50" height="6" rx="1.5" fill="var(--green-dark)" />
          <rect x="95" y="112" width="40" height="6" rx="1.5" fill="var(--green)" fillOpacity="0.4" />
        </svg>
      )
    },
    {
      id: 5,
      category: "app",
      title: "Apex B2B CRM App",
      client: "Apex Consulting",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      tags: ["SaaS", "Mobile CRM"],
      icon: (
        <svg className="w-full h-full text-brand-green bg-bg-warm" viewBox="0 0 200 400" fill="none">
          {/* Tall dashboard layout with funnel */}
          <rect x="20" y="20" width="160" height="360" rx="10" fill="#ffffff" stroke="var(--green-light)" strokeWidth="2" />
          
          {/* Top Circular Widget */}
          <circle cx="100" cy="80" r="40" fill="var(--green)" fillOpacity="0.08" stroke="var(--green-light)" strokeWidth="1" />
          <path d="M70,80 Q100,50 130,80" stroke="var(--green-dark)" strokeWidth="3" fill="none" />
          <circle cx="100" cy="80" r="8" fill="var(--green)" />

          {/* Pipeline Funnel vector blocks */}
          <rect x="40" y="150" width="120" height="18" rx="3" fill="var(--green)" />
          <polygon points="50,175 150,175 140,195 60,195" fill="var(--green-light)" />
          <polygon points="65,202 135,202 125,222 75,222" fill="var(--green-dark)" />
          <rect x="85" y="228" width="30" height="15" rx="2" fill="var(--green)" fillOpacity="0.2" stroke="var(--green-light)" strokeWidth="1" />

          {/* Text/Metric Row below */}
          <rect x="40" y="270" width="120" height="35" rx="6" fill="var(--green-light)" fillOpacity="0.15" stroke="var(--green-light)" strokeWidth="1" />
          <circle cx="58" cy="287" r="8" fill="var(--green)" />
          <rect x="74" y="283" width="70" height="8" rx="2" fill="var(--green-dark)" />

          <rect x="40" y="315" width="120" height="35" rx="6" fill="var(--green)" fillOpacity="0.05" stroke="var(--green-light)" strokeWidth="1" />
          <circle cx="58" cy="332" r="8" fill="var(--green-dark)" />
          <rect x="74" y="328" width="55" height="8" rx="2" fill="var(--green)" />
        </svg>
      )
    },
    {
      id: 6,
      category: "web",
      title: "Apex Startup Web App",
      client: "Apex Startup Partners",
      colSpan: "md:col-span-4",
      rowSpan: "md:row-span-1",
      tags: ["Tech & B2B", "Startups"],
      icon: (
        <svg className="w-full h-full text-brand-green bg-bg-warm" viewBox="0 0 400 200" fill="none">
          {/* Browser canvas with terminal graph */}
          <rect x="20" y="20" width="360" height="160" rx="8" fill="#ffffff" stroke="var(--green-dark)" strokeWidth="2" />
          {/* Title Bar */}
          <rect x="20" y="20" width="360" height="25" rx="8" fill="var(--green-light)" fillOpacity="0.3" stroke="var(--green-dark)" strokeWidth="1" />
          <circle cx="35" cy="32" r="4" fill="#ef4444" />
          <circle cx="47" cy="32" r="4" fill="#f59e0b" />
          <circle cx="59" cy="32" r="4" fill="#10b981" />
          {/* Main workspace */}
          <rect x="40" y="65" width="180" height="90" rx="4" fill="var(--green)" fillOpacity="0.04" stroke="var(--green-light)" strokeWidth="1" />
          <rect x="240" y="65" width="120" height="90" rx="4" fill="var(--green-light)" fillOpacity="0.1" stroke="var(--green-light)" strokeWidth="1" />
          {/* Vector curves inside workspace */}
          <path d="M50,135 Q100,75 140,115 T210,95" stroke="var(--green)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="140" cy="115" r="5" fill="var(--green-dark)" />
          {/* Text bars in sidebar widget */}
          <rect x="255" y="80" width="90" height="8" rx="2" fill="var(--green-dark)" />
          <rect x="255" y="95" width="70" height="8" rx="2" fill="var(--green)" fillOpacity="0.5" />
          <rect x="255" y="110" width="80" height="8" rx="2" fill="var(--green)" fillOpacity="0.3" />
        </svg>
      )
    }
  ];

  const filteredItems = activeFilter === "all"
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-transparent overflow-hidden border-b border-violet-100/30">
      
      {/* Background Soft Glows */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full pointer-events-none opacity-20 blur-3xl" 
        style={{ background: "radial-gradient(circle, rgba(200,213,192,0.4), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-green/20 bg-bg-warm text-[10px] font-black text-brand-green tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Our Showcases
          </div>
          <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-charcoal tracking-tight">
            Our Premium Work
          </h2>
          <p className="text-muted-gray font-light text-sm sm:text-base leading-relaxed">
            Take a detailed tour through the premium systems and landing products we have engineered.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? "bg-brand-green text-white shadow-md scale-[1.02]"
                  : "bg-bg-warm text-muted-gray border border-custom-border hover:bg-slate-100 hover:text-dark-charcoal"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px] w-full preserve-3d perspective-2000"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.7, 
                  delay: (idx % 3) * 0.1, 
                  ease: [0.16, 1, 0.3, 1] as const 
                }}
                className={`${item.colSpan} ${item.rowSpan} h-full w-full pointer-events-auto preserve-3d`}
              >
                <TiltCard className="p-1 h-full w-full relative overflow-hidden group bg-white border-slate-100 hover:border-brand-green/20">
                  
                  {/* SVG Vector container */}
                  <div className="w-full h-full relative rounded-2xl overflow-hidden bg-bg-warm flex items-center justify-center">
                    
                    {/* The visual vector drawing */}
                    {item.icon}

                    {/* Darkening/gradient filter on hover */}
                    <div className="absolute inset-0 bg-brand-green-dark/0 group-hover:bg-brand-green-dark/15 transition-colors duration-400" />

                    {/* Tags overlay top-left */}
                    <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
                      {item.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md border border-black/5 text-dark-charcoal px-2.5 py-1 rounded-md shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Glassmorphism Info block overlay (slides up on hover) */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg translate-y-[125%] group-hover:translate-y-0 transition-transform duration-400 ease-out flex items-center justify-between gap-4">
                      <div className="space-y-1 text-left">
                        <span className="text-[9px] font-black text-brand-green uppercase tracking-widest">{item.client}</span>
                        <h4 className="font-jakarta text-sm font-bold text-dark-charcoal tracking-tight leading-none">
                          {item.title}
                        </h4>
                      </div>
                      
                      {/* View Project link CTA */}
                      <a
                        href="#contact"
                        className="w-8 h-8 rounded-full bg-brand-green hover:bg-brand-green-dark text-white flex items-center justify-center shadow transition-colors shrink-0"
                        aria-label="View project details"
                      >
                        <ExternalLink className="w-4 h-4 stroke-[2.5px]" />
                      </a>
                    </div>

                    {/* Center hover indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400">
                      <div className="px-4 py-2.5 bg-white/95 rounded-full border border-black/5 shadow flex items-center gap-2">
                        <Laptop className="w-3.5 h-3.5 text-brand-green" />
                        <span className="text-[9px] font-black text-dark-charcoal uppercase tracking-widest">
                          View Project →
                        </span>
                      </div>
                    </div>

                  </div>

                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
