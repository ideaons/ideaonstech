"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Smartphone, Shield, ArrowUpRight, 
  MessageSquare, Layout, Globe, Users, Play, HeartHandshake
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function WhyChooseUs() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section id="why-choose-us" className="relative py-24 bg-transparent overflow-hidden border-b border-violet-100/30">
      
      {/* Background radial soft light rings */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 filter blur-[90px]" 
        style={{ background: "radial-gradient(circle, rgba(74, 124, 89, 0.15) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 filter blur-[90px]" 
        style={{ background: "radial-gradient(circle, rgba(255, 180, 180, 0.2) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full preserve-3d perspective-2000">
          
          {/* ==================================================
              1. TOP-LEFT CARD: 500+ Qualified Experts / Connected Nodes
              ================================================== */}
          <div className="md:col-span-4 h-[260px] pointer-events-auto">
            <TiltCard className="p-6 h-full flex flex-col justify-between group bg-white border-slate-100 hover:border-brand-green/20">
              <div className="text-left space-y-1">
                <span className="text-4xl font-black text-slate-950 tracking-tight">500+</span>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Scaled Partners</p>
                <p className="text-[10px] text-muted-gray font-light">Businesses trust our scalable digital infrastructure.</p>
              </div>

              {/* Node diagram representation */}
              <div className="relative w-full h-[110px] mt-2 overflow-hidden border border-black/5 rounded-2xl bg-bg-warm/50 flex items-center justify-center">
                <svg className="w-[85%] h-full" viewBox="0 0 200 100">
                  {/* Concentric node rings */}
                  <circle cx="100" cy="90" r="80" stroke="rgba(0,0,0,0.03)" strokeWidth="1" fill="none" />
                  <circle cx="100" cy="90" r="50" stroke="rgba(0,0,0,0.03)" strokeWidth="1" fill="none" />
                  
                  {/* Curved Connection Lines */}
                  <path d="M 25 70 Q 100 20, 175 70" stroke="rgba(74, 124, 89, 0.12)" strokeWidth="1.5" fill="none" />
                  <path d="M 55 80 Q 100 40, 145 80" stroke="rgba(74, 124, 89, 0.12)" strokeWidth="1.5" fill="none" />
                  
                  {/* Connected profile circles */}
                  {[
                    { cx: 25, cy: 70, id: 1, label: "School Portal" },
                    { cx: 55, cy: 45, id: 2, label: "CRM System" },
                    { cx: 100, cy: 30, id: 3, label: "AI Lead Node" },
                    { cx: 145, cy: 45, id: 4, label: "Gym Platform" },
                    { cx: 175, cy: 70, id: 5, label: "Order Pipeline" },
                  ].map((node) => (
                    <g 
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <circle 
                        cx={node.cx} 
                        cy={node.cy} 
                        r="6" 
                        fill={hoveredNode === node.id ? "var(--green)" : "var(--green-light)"} 
                        className="transition-colors duration-300"
                      />
                      <circle cx={node.cx} cy={node.cy} r="10" stroke="rgba(74, 124, 89, 0.15)" strokeWidth="1" fill="none" />
                    </g>
                  ))}
                  
                  {/* Plus Icon indicator bottom left */}
                  <circle cx="20" cy="20" r="8" fill="var(--green)" fillOpacity="0.1" />
                  <text x="20" y="23" textAnchor="middle" fill="var(--green-dark)" fontSize="8" fontWeight="bold">+</text>
                </svg>
                
                {/* Float label overlay */}
                {hoveredNode && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-dark-charcoal/90 text-white text-[7px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                    {[
                      "",
                      "School Portal",
                      "CRM System",
                      "AI Lead Node",
                      "Gym Platform",
                      "Order Pipeline"
                    ][hoveredNode]}
                  </div>
                )}
              </div>
            </TiltCard>
          </div>

          {/* ==================================================
              2. TOP-CENTER CARD: Tall Portrait Card (Custom App/System representation)
              ================================================== */}
          <div className="md:col-span-4 md:row-span-2 h-full min-h-[380px] pointer-events-auto">
            <TiltCard className="p-7 h-full flex flex-col justify-between group bg-slate-50 border-slate-100 hover:border-brand-green/20 overflow-hidden relative">
              {/* Background soft lighting */}
              <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full bg-brand-green/10 filter blur-3xl pointer-events-none" />

              <div className="text-left space-y-2 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest bg-brand-green/10 text-brand-green px-2.5 py-1 rounded">
                  Convenient Apps
                </span>
                <h3 className="font-jakarta text-2xl font-black text-slate-950 tracking-tight leading-none mt-2">
                  Custom Systems
                </h3>
                <p className="text-xs text-muted-gray font-light">Unified digital ecosystems mapped to touch devices.</p>
              </div>

              {/* Central Vector Illustration */}
              <div className="relative w-full h-[220px] my-4 rounded-2xl overflow-hidden border border-black/5 bg-white flex items-end justify-center group-hover:scale-[1.02] transition-transform duration-500">
                <svg className="w-[85%] h-full" viewBox="0 0 160 220" fill="none">
                  {/* Abstract Portrait Avatar outline holding a green device */}
                  <defs>
                    <linearGradient id="avatarGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c8d5c0" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ffb9b9" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Person shape */}
                  <circle cx="80" cy="115" r="38" fill="url(#avatarGrad)" />
                  <path d="M40,220 C40,165 60,150 80,150 C100,150 120,165 120,220 Z" fill="#2d5a3d" fillOpacity="0.8" />
                  
                  {/* Hair cap */}
                  <path d="M50,95 Q80,75 110,95 C110,80 80,75 50,95" fill="var(--green)" />
                  
                  {/* Phone frame mock overlapping */}
                  <rect x="94" y="105" width="42" height="78" rx="8" fill="#ffffff" stroke="var(--green-dark)" strokeWidth="2.5" />
                  <rect x="97" y="108" width="36" height="72" rx="5" fill="#f8faff" />
                  <rect x="109" y="108" width="12" height="3" rx="1" fill="var(--green-dark)" />
                  
                  {/* Phone elements */}
                  <circle cx="115" cy="130" r="8" fill="var(--green)" fillOpacity="0.2" />
                  <line x1="104" y1="145" x2="126" y2="145" stroke="var(--green-dark)" strokeWidth="1.5" />
                  <line x1="104" y1="152" x2="118" y2="152" stroke="var(--green-dark)" strokeWidth="1.5" strokeOpacity="0.5" />
                </svg>
              </div>

              <div className="flex justify-between items-center relative z-10 pt-2 border-t border-black/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Operational Sync</span>
                <Smartphone className="w-4 h-4 text-brand-green" />
              </div>
            </TiltCard>
          </div>

          {/* ==================================================
              3. TOP-RIGHT CARD: Why Us? Title Card
              ================================================== */}
          <div className="md:col-span-4 flex flex-col justify-center text-left pl-4 min-h-[140px]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-green/20 bg-bg-warm text-[10px] font-black text-brand-green tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-green animate-pulse" />
                <span>Value Proposition</span>
              </div>
              <h2 className="font-jakarta text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-none">
                Why Us?
              </h2>
              <p className="text-xs sm:text-sm text-muted-gray font-light leading-relaxed max-w-sm">
                We craft tailored digital ecosystems that elevate business reach and streamline administration natively.
              </p>
            </div>
          </div>

          {/* ==================================================
              4. CENTER-LEFT CARD: 99.9% System Uptime (Wavy Green Glow)
              ================================================== */}
          <div className="md:col-span-3 h-[220px] pointer-events-auto">
            <TiltCard 
              className="p-6 h-full flex flex-col justify-between group overflow-hidden relative border-none"
              // Minty-green wavy fluid background matching reference screenshot
              style={{
                background: "linear-gradient(135deg, rgba(200, 213, 192, 0.45) 0%, rgba(225, 238, 215, 0.5) 100%)",
                boxShadow: "0 0 30px rgba(74, 124, 89, 0.08)"
              }}
            >
              <div className="text-left space-y-1">
                <span className="text-4xl font-black text-brand-green-dark tracking-tight">99.9%</span>
                <p className="text-xs font-bold text-brand-green-dark uppercase tracking-wider">Cloud Uptime</p>
                <p className="text-[10px] text-brand-green-dark/70 font-light leading-normal">Fast cached serverless nodes deployed across high-speed CDNs.</p>
              </div>

              {/* Dynamic decorative vector wave */}
              <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none overflow-hidden">
                <svg className="w-full h-full text-brand-green-dark/10" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path d="M0,80 L200,80 L200,30 C150,55 100,5 0,35 Z" fill="currentColor" />
                  <path d="M0,80 L200,80 L200,45 C160,65 110,25 0,50 Z" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>
              
              <div className="flex justify-between items-center relative z-10 pt-2 border-t border-brand-green-dark/10">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-green-dark">Secure AWS</span>
                <Shield className="w-4 h-4 text-brand-green-dark" />
              </div>
            </TiltCard>
          </div>

          {/* ==================================================
              5. CENTER-CENTER CARD: Vertical Peachy Gradient Onboarding Card
              ================================================== */}
          <div className="md:col-span-4 md:row-span-2 h-full min-h-[380px] pointer-events-auto">
            <TiltCard 
              className="p-7 h-full flex flex-col justify-between group overflow-hidden relative border-none"
              // Peachy fluid pink gradient styled precisely to match visual reference
              style={{
                background: "linear-gradient(135deg, rgba(255, 185, 185, 0.45) 0%, rgba(255, 235, 235, 0.6) 100%)",
                boxShadow: "0 0 35px rgba(255, 180, 180, 0.08)"
              }}
            >
              <div className="text-left space-y-1 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/70 text-slate-800 px-2.5 py-1 rounded">
                  System Audit
                </span>
                <h3 className="font-jakarta text-2xl font-black text-slate-900 tracking-tight leading-none mt-2">
                  Unified Consultation
                </h3>
                <p className="text-xs text-slate-650 font-light">Three structural diagnostic sessions to organize growth pipelines.</p>
              </div>

              {/* 3 Interactive outline glassmorphic circles from screenshot */}
              <div className="my-6 flex justify-center items-center gap-4 relative z-10">
                {[Layout, Sparkles, HeartHandshake].map((Icon, idx) => (
                  <div 
                    key={idx}
                    className="w-14 h-14 rounded-2xl bg-white/80 border border-white/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300"
                  >
                    <Icon className="w-6 h-6 text-brand-green-dark" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center relative z-10 pt-2 border-t border-slate-900/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Reserve Strategy</span>
                <ArrowUpRight className="w-4 h-4 text-brand-green-dark" />
              </div>
            </TiltCard>
          </div>

          {/* ==================================================
              6. CENTER-RIGHT CARD: 15+ Tech Stacks (Coral-Pink Fluid)
              ================================================== */}
          <div className="md:col-span-5 h-[180px] pointer-events-auto">
            <TiltCard 
              className="p-6 h-full flex flex-col justify-between group overflow-hidden relative border-none"
              // Warm coral-pink fluid gradient matching the reference layout
              style={{
                background: "linear-gradient(135deg, rgba(255, 180, 180, 0.45) 0%, rgba(255, 220, 210, 0.5) 100%)",
                boxShadow: "0 0 30px rgba(255, 180, 180, 0.08)"
              }}
            >
              <div className="text-left space-y-1">
                <span className="text-4xl font-black text-slate-950 tracking-tight">15+</span>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Tech Stacks Available</p>
                <p className="text-[10px] text-slate-650 font-light leading-normal">Fast Next.js, API integrations, and database synchronizations.</p>
              </div>

              <div className="flex justify-between items-center relative z-10 pt-2 border-t border-slate-900/5">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-800">Scalable Systems</span>
                <ArrowUpRight className="w-4 h-4 text-slate-800" />
              </div>
            </TiltCard>
          </div>

          {/* ==================================================
              7. BOTTOM-RIGHT CARD: Wide Platform Features Card
              ================================================== */}
          <div className="md:col-span-8 h-[250px] pointer-events-auto">
            <TiltCard className="p-7 h-full flex flex-col justify-between group bg-slate-50 border-slate-100 hover:border-brand-green/20 overflow-hidden relative">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full items-center">
                
                {/* Text descriptions */}
                <div className="sm:col-span-7 text-left space-y-3 relative z-10">
                  <div className="inline-flex items-center gap-1 bg-white border border-black/5 px-2.5 py-0.8 rounded text-[9px] font-bold text-slate-500 leading-none">
                    <span>Driving Innovation Forward</span>
                  </div>
                  <h3 className="font-jakarta text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                    Our Platforms' Features Lead the Way
                  </h3>
                  <p className="text-xs text-muted-gray font-light max-w-sm">
                    Everything you need to automate client registrations, class schedulers, and direct menu orders synced natively.
                  </p>
                </div>

                {/* Right side floating landscape iPhone vector */}
                <div className="sm:col-span-5 h-full relative flex items-center justify-center shrink-0">
                  <div className="relative w-[150px] aspect-[9/16] border-[2.5px] border-slate-950 bg-slate-950 rounded-[20px] p-[2.5px] shadow-lg group-hover:rotate-[6deg] group-hover:scale-[1.04] transition-all duration-500">
                    <div className="bg-[#f8faff] rounded-[16px] p-2 h-full flex flex-col justify-between text-left">
                      <div className="flex justify-between items-center text-[7px] border-b border-black/5 pb-1">
                        <span className="font-extrabold text-slate-800">CRM Dashboard</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                      </div>
                      
                      <div className="space-y-1.5 my-2">
                        <span className="text-[10px] font-bold text-slate-800 block leading-none">Hi, Mike</span>
                        <span className="text-[7px] text-muted-gray font-light block leading-none">Your admissions grew +340% today.</span>
                        <rect className="h-2 w-full bg-slate-200 rounded block mt-1" />
                      </div>

                      <div className="pt-1.5 border-t border-black/5 flex justify-between items-center text-[6px] text-slate-400 font-bold">
                        <span>Status: Active</span>
                        <span className="text-brand-green font-bold">UPI ENABLED</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* ==================================================
              8. DRIFTING PROCESS BUTTON: Explore Our Process
              ================================================== */}
          <div className="absolute top-[40%] right-[-10px] z-30 pointer-events-auto hidden lg:block">
            <a
              href="#process"
              className="w-16 h-16 rounded-full bg-white border border-slate-200 text-slate-650 hover:text-brand-green hover:border-brand-green/20 flex flex-col items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group"
              aria-label="Explore our process"
            >
              <Play className="w-5 h-5 text-brand-green fill-brand-green/10" />
              <span className="text-[7px] font-black uppercase tracking-widest mt-1 text-slate-400">Process</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
