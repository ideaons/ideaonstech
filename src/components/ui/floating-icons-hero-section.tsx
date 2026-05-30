"use client";

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Interface for the props of each individual icon.
interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string; // Used for custom positioning of the icon.
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
}

// A single icon component with its own motion logic
const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        // If the cursor is close enough, repel the icon
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('absolute', iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation, styled as a premium 3D glass orb */}
      <motion.div
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.3),0_12px_36px_rgba(0,0,0,0.65)] hover:border-white/40 hover:bg-white/10 hover:shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.45),0_15px_42px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300 group cursor-pointer"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        {/* Specular light glare overlay for realistic 3D glass shine */}
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "6%",
            left: "10%",
            width: "32%",
            height: "22%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
            transform: "rotate(-15deg)",
          }}
        />
        
        {/* Soft internal glass shadow highlight */}
        <div 
          className="absolute inset-0 rounded-full border border-black/20 pointer-events-none" 
        />
        
        <iconData.icon className="w-7 h-7 md:w-9 md:h-9 text-white/90 relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
  // Refs to track the raw mouse position
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#000000]',
        className
      )}
      {...props}
    >
      {/* Dynamic Background drifting Glass Orbs for incredible depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Top-Left drifting background orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: "280px",
            height: "280px",
            left: "10%",
            top: "15%",
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.6) 80%, rgba(255, 255, 255, 0.02) 100%)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 8px rgba(0,0,0,0.75)",
            animation: "heroGlassFloat1 35s ease-in-out infinite",
          }}
        >
          <div className="absolute rounded-full top-[8%] left-[12%] w-[32%] h-[22%] bg-gradient-to-b from-white/30 to-transparent -rotate-[15deg]" />
        </div>

        {/* Bottom-Right drifting background orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: "320px",
            height: "320px",
            right: "8%",
            bottom: "15%",
            background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 45%, rgba(0, 0, 0, 0.65) 85%, rgba(255, 255, 255, 0.03) 100%)",
            backdropFilter: "blur(16px)",
            border: "1.4px solid rgba(255, 255, 255, 0.14)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.55), inset 0 3px 5px rgba(255, 255, 255, 0.25), inset 0 -3px 10px rgba(0,0,0,0.8)",
            animation: "heroGlassFloat2 42s ease-in-out infinite",
          }}
        >
          <div className="absolute rounded-full top-[8%] left-[12%] w-[32%] h-[22%] bg-gradient-to-b from-white/30 to-transparent -rotate-[15deg]" />
        </div>

        {/* CSS Keyframes for Hero background drifting spheres */}
        <style>{`
          @keyframes heroGlassFloat1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(35px, -45px) scale(1.05); }
          }
          @keyframes heroGlassFloat2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-35px, 35px) scale(0.95); }
          }
        `}</style>
      </div>

      {/* Container for the background floating icons */}
      <div className="absolute inset-0 w-full h-full z-5">
        {icons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>

      {/* Container for the foreground content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 text-transparent bg-clip-text font-jakarta leading-none pb-1">
          {title}
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-white/60 font-light leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="px-8 py-6 text-base font-semibold border border-white/10 hover:border-white/20 transition-all duration-300">
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };
