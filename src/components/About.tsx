"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Sparkles, Monitor, ShoppingBag, Smartphone, Search } from "lucide-react";

const disciplines = [
  {
    num: "01",
    tag: "DEVELOPMENT",
    icon: Code,
    title: "Web Applications",
    desc: "Custom SaaS platforms and complex web apps built with the speed of Vercel and the precision of Linear.",
  },
  {
    num: "02",
    tag: "INTELLIGENCE",
    icon: Sparkles,
    title: "AI Solutions",
    desc: "LLM integrations, custom AI agents, and automation pipelines woven into your business architecture.",
  },
  {
    num: "03",
    tag: "EXPERIENCE",
    icon: Monitor,
    title: "Websites & Landing Pages",
    desc: "Cinematic marketing sites engineered for conversion, performance, and unmistakable brand presence.",
  },
  {
    num: "04",
    tag: "COMMERCE",
    icon: ShoppingBag,
    title: "E-commerce Stores",
    desc: "Headless storefronts with Shopify, Stripe, and bespoke checkout flows tuned for high AOV.",
  },
  {
    num: "05",
    tag: "PRODUCT",
    icon: Smartphone,
    title: "Mobile-first Builds",
    desc: "Native-feeling responsive interfaces, PWAs, and React Native apps with the same design DNA.",
  },
  {
    num: "06",
    tag: "GROWTH",
    icon: Search,
    title: "SEO & Performance",
    desc: "Core-Web-Vitals obsession, structured data, and growth engineering to dominate search.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black overflow-hidden border-y border-white/5">
      {/* Subtle ambient glows for premium feel */}
      <div 
        className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none -translate-x-1/2" 
        style={{ background: "radial-gradient(circle, #00D4AA, transparent 70%)", filter: "blur(90px)" }} 
      />
      <div 
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none translate-x-1/2" 
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)", filter: "blur(90px)" }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* HEADER SECTION: Left Big Title, Right Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              Comprehensive digital ecosystems.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xs md:mb-2"
          >
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Six disciplines, one studio. Everything you need to ship world-class digital products.
            </p>
          </motion.div>
        </div>

        {/* 6-CARD GRID SYSTEM WITH 1px DIVIDING LINES (Osmo Dark Edition) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-[28px] overflow-hidden shadow-2xl"
        >
          {disciplines.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#09080F] p-8 md:p-10 flex flex-col justify-between min-h-[260px] transition-all duration-350 hover:bg-[#12111A] group relative overflow-hidden text-left"
              >
                {/* Top row: Number/Tag & Icon */}
                <div className="flex items-center justify-between w-full mb-8">
                  <span className="text-[10px] font-black text-[#00E054] tracking-widest uppercase">
                    {item.num} / {item.tag}
                  </span>
                  
                  {/* Circular glowing icon container */}
                  <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#00E054] transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom content: Title & Description */}
                <div className="space-y-3 mt-auto">
                  <h3 className="font-jakarta text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
