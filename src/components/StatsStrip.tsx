"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function CountUp({ target, duration = 1500, suffix = "", onceFlagRef }: { target: number; duration?: number; suffix?: string; onceFlagRef: React.MutableRefObject<boolean> }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;
    
    hasAnimatedRef.current = true;
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing: ease-out cubic -> f(t) = 1 - (1-t)^3
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const onceFlagRef = useRef(false);

  const stats = [
    { target: 500, suffix: "+", label: "Businesses Transformed" },
    { target: 98, suffix: "%", label: "Client Satisfaction" },
    { target: 12, suffix: "+", label: "Industries Served" },
    { target: 5, suffix: "★", label: "Average Rating" }
  ];

  return (
    <section id="stats" className="relative py-14 overflow-hidden bg-[#F5F5F3] border-y border-[#DDDCDA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 items-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center relative px-4">
              
              {/* Divider lines between stats (hidden on mobile) */}
              {idx > 0 && (
                <div className="hidden md:block absolute -left-[1px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#DDDCDA]" />
              )}
              
              <div 
                className="font-jakarta font-extrabold text-[#121212] leading-none tracking-[-0.04em] flex items-baseline justify-center"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                {stat.target === 5 ? (
                  <span className="flex items-center">
                    <CountUp target={5} onceFlagRef={onceFlagRef} />
                    <span className="text-[#00E054] ml-0.5" style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}>★</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <CountUp target={stat.target} onceFlagRef={onceFlagRef} />
                    <span className="text-[#00E054] ml-0.5" style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}>{stat.suffix}</span>
                  </span>
                )}
              </div>
              <span className="text-[10px] font-black text-[#52525B] mt-2.5 uppercase tracking-widest leading-none">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
