"use client";

import { cn } from "@/lib/utils";

export const BackgroundGradientGlow = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("min-h-screen w-full relative overflow-hidden bg-black text-white", className)}>
      {/* Premium Pure Dark Background with 3D Glass Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#000000]">
        
        {/* Subtle background deep radial gradient to center the depth */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(91,77,255,0.08) 0%, rgba(0,0,0,0) 70%)"
          }}
        />

        {/* ── Glass Orb 1: Medium-Large Top-Left ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: "380px",
            height: "380px",
            left: "8%",
            top: "12%",
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.7) 80%, rgba(255, 255, 255, 0.04) 100%)",
            backdropFilter: "blur(20px) saturate(140%)",
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75), inset 0 3px 6px rgba(255, 255, 255, 0.25), inset 0 -3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.02)",
            animation: "glassOrbFloat1 36s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          {/* Specs reflection highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "8%",
              left: "12%",
              width: "32%",
              height: "22%",
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        {/* ── Glass Orb 2: Large Center-Right ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: "440px",
            height: "440px",
            right: "12%",
            top: "28%",
            background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 45%, rgba(0, 0, 0, 0.7) 85%, rgba(255, 255, 255, 0.03) 100%)",
            backdropFilter: "blur(22px) saturate(130%)",
            border: "1.2px solid rgba(255, 255, 255, 0.14)",
            boxShadow: "0 30px 70px rgba(0, 0, 0, 0.8), inset 0 4px 8px rgba(255, 255, 255, 0.2), inset 0 -4px 16px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 255, 255, 0.01)",
            animation: "glassOrbFloat2 44s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          {/* Specs reflection highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "10%",
              left: "14%",
              width: "30%",
              height: "20%",
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
              transform: "rotate(-18deg)",
            }}
          />
        </div>

        {/* ── Glass Orb 3: Medium Bottom-Left ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: "290px",
            height: "290px",
            left: "18%",
            bottom: "10%",
            background: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.65) 80%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(18px) saturate(150%)",
            border: "1.6px solid rgba(255, 255, 255, 0.22)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), inset 0 3px 6px rgba(255, 255, 255, 0.3), inset 0 -3px 10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 255, 255, 0.03)",
            animation: "glassOrbFloat3 32s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          {/* Specs reflection highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "8%",
              left: "12%",
              width: "34%",
              height: "24%",
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
              transform: "rotate(-12deg)",
            }}
          />
        </div>

        {/* ── Glass Orb 4: Small-Medium Center-Left ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: "220px",
            height: "220px",
            left: "5%",
            top: "48%",
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.7) 80%, rgba(255, 255, 255, 0.03) 100%)",
            backdropFilter: "blur(14px) saturate(120%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.65), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 255, 255, 0.01)",
            animation: "glassOrbFloat4 40s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          {/* Specs reflection highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "8%",
              left: "12%",
              width: "30%",
              height: "20%",
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        {/* ── Glass Orb 5: Medium Bottom-Right ── */}
        <div
          className="absolute rounded-full"
          style={{
            width: "310px",
            height: "310px",
            right: "8%",
            bottom: "8%",
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.68) 80%, rgba(255, 255, 255, 0.04) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            border: "1.4px solid rgba(255, 255, 255, 0.16)",
            boxShadow: "0 22px 55px rgba(0, 0, 0, 0.72), inset 0 3px 5px rgba(255, 255, 255, 0.24), inset 0 -3px 11px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 255, 255, 0.02)",
            animation: "glassOrbFloat5 38s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          {/* Specs reflection highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "9%",
              left: "13%",
              width: "32%",
              height: "22%",
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        {/* ── Premium Frosted Noise Overlay ── */}
        <div
          className="absolute inset-0 opacity-[0.018] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── GPU COMPOSITED ANIMATION KEYFRAMES ── */}
        <style>{`
          @keyframes glassOrbFloat1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(60px, -70px) scale(1.05); }
            66% { transform: translate(-40px, 40px) scale(0.95); }
          }
          @keyframes glassOrbFloat2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-70px, 60px) scale(0.96); }
            66% { transform: translate(50px, -50px) scale(1.04); }
          }
          @keyframes glassOrbFloat3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(40px, 50px) scale(1.03); }
            75% { transform: translate(-50px, -40px) scale(0.97); }
          }
          @keyframes glassOrbFloat4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -40px) scale(1.06); }
            66% { transform: translate(-30px, 30px) scale(0.94); }
          }
          @keyframes glassOrbFloat5 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-50px, -50px) scale(0.95); }
            66% { transform: translate(40px, 40px) scale(1.05); }
          }
        `}</style>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
