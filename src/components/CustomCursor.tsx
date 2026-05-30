"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const posRef = useRef({ x: -100, y: -100 });
  const lerpPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // 1. Force hide the browser's default cursor on all elements globally
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
      body {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setIsHidden(false);
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);
    const onDown  = () => setIsClicking(true);
    const onUp    = () => setIsClicking(false);

    // Dynamic hover bindings for interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    // Initial query and observer to catch dynamically rendered elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // 2. High-performance Fast Lerp Follow loop
    const animateCursor = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      
      // Buttery smooth, ultra-responsive follow
      lerpPos.current.x = lerp(lerpPos.current.x, posRef.current.x, 0.26);
      lerpPos.current.y = lerp(lerpPos.current.y, posRef.current.y, 0.26);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lerpPos.current.x}px, ${lerpPos.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animateCursor);
    };
    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.head.removeChild(style);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Responsive check to disable custom cursor on touch/mobile screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        // Align pointer tip (top-left of path) perfectly with position coordinates
        marginTop: -3,
        marginLeft: -3,
        pointerEvents: "none",
        zIndex: 999999,
        willChange: "transform",
        opacity: isHidden ? 0 : 1,
        // Transition scale and rotation on hover & click
        transition: "opacity 0.25s ease-in-out",
        transform: "translate3d(-100px, -100px, 0)",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: isClicking 
            ? "scale(0.85)" 
            : isHovering 
            ? "scale(1.22) rotate(-12deg)" 
            : "scale(1)",
          transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Sleek Geometric solid white triangular pointer SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.5))"
          }}
        >
          <path
            d="M4.5 4.5 L20.5 12.5 L12.5 14.5 L9.5 21.5 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
}
