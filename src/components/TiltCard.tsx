"use client";

import React, { useState, useRef, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  style?: React.CSSProperties;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 8,
  style = {},
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilts, setTilts] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  /* ── RAF-throttled mouse move for silky 60fps tilt ── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      if (rafRef.current) return; // skip if RAF is already queued

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const normX = mouseX / rect.width - 0.5;
        const normY = mouseY / rect.height - 0.5;
        setCoords({ x: mouseX, y: mouseY });
        setTilts({ x: -normY * intensity, y: normX * intensity });
      });
    },
    [intensity]
  );

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsHovered(false);
    setTilts({ x: 0, y: 0 });
  };

  const cardStyle: React.CSSProperties = {
    /* GPU layer promotion */
    transform: isHovered
      ? `perspective(1000px) rotateX(${tilts.x}deg) rotateY(${tilts.y}deg) scale3d(1.025, 1.025, 1.025)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    /* Smooth spring-like ease out on leave */
    transition: isHovered
      ? "transform 0.05s linear"  // nearly instant while moving (RAF handles smoothness)
      : "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.55s cubic-bezier(0.23, 1, 0.32, 1)",
    boxShadow: isHovered
      ? `${-tilts.y * 2}px ${tilts.x * 2}px 48px rgba(91,77,255,0.18), 0 12px 32px rgba(0,0,0,0.08)`
      : "var(--shadow-md)",
    transformStyle: "preserve-3d",
    /* Own compositor layer */
    willChange: "transform",
    backfaceVisibility: "hidden",
    ...style,
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-violet-100/60 select-none ${className}`}
    >
      {/* Cursor-tracking shine overlay */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle 220px at ${coords.x}px ${coords.y}px, rgba(91,77,255,0.09), rgba(0,212,170,0.05), transparent)`,
          }}
        />
      )}

      {/* Violet border shimmer on hover */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
          style={{ border: "1px solid rgba(91,77,255,0.22)" }}
        />
      )}

      {/* Inner content lifted on Z axis */}
      <div style={{ transform: "translateZ(18px)" }} className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
