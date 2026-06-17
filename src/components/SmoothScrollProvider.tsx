"use client";

import React, { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";

/* ─────────────────────────────────────────────────────────
   Global Lenis context — lets any component call lenis.scrollTo()
───────────────────────────────────────────────────────── */
const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Global helper to scroll smoothly to a selector, element, or number offset.
 * Automatically utilizes the active Lenis instance if initialized, with a safe fallback.
 */
export function scrollToTarget(target: string | HTMLElement | number, offset = -72) {
  if (typeof window !== "undefined") {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(target, {
        offset,
        duration: 1.25,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      });
      return;
    }
  }

  // Safe browser fallback
  try {
    if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  } catch (err) {
    console.warn("Smooth scroll fallback failed:", err);
  }
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      /* ── Feel ── */
      duration: 1.25,               // Slightly longer = premium, Apple-like glide
      easing: (t: number) => {
        // Expo out — very fast start, soft cushioned stop
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },

      /* ── Axis ── */
      orientation: "vertical",
      gestureOrientation: "vertical",

      /* ── Wheel ── */
      smoothWheel: true,
      wheelMultiplier: 0.9,         // Slightly sub-1 = heavier, more inertia feel

      /* ── Touch ── */
      touchMultiplier: 1.8,         // Generous touch swipe on mobile
      infinite: false,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Broadcast the Lenis instance so other components (e.g. Navbar) can use it
    window.dispatchEvent(new CustomEvent("lenis:init", { detail: lenis }));
    document.documentElement.classList.add("lenis", "lenis-smooth");

    /* ── RAF loop with proper cancel ── */
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    /* ── Anchor-click interception (works with Lenis) ── */
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor || !anchor.hash) return;

      const samePage =
        anchor.pathname === window.location.pathname || anchor.pathname === "";

      if (samePage) {
        const el = document.getElementById(anchor.hash.slice(1));
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, {
            offset: -72,            // Navbar height
            duration: 1.4,
            easing: (t: number) => 1 - Math.pow(2, -10 * t),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenis = undefined;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
