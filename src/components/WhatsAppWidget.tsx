"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

// ============================================================================
// WHATSAPP CONFIGURATION
// ============================================================================
const WHATSAPP_NUMBER = "918076620320"; // Replace with IDEOANS business number (including country code, without +)
const DEFAULT_MESSAGE = "Hi IDEOANS! I am visiting your website and would love to discuss custom digital infrastructure solutions for my business.";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Auto-open greeting popover after a premium delay (4 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsOpen(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setIsDismissed(true);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-none"
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      {/* 💬 GREETING POPOVER CARD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto mb-4 w-72 md:w-80 rounded-2xl border border-emerald-500/20 bg-neutral-950/90 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            style={{ 
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.05)" 
            }}
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Direct Connect
                </span>
              </div>
              <button 
                onClick={handleDismiss}
                className="rounded-full p-1 text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all"
                aria-label="Dismiss message"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex gap-3">
              {/* Custom Mini Avatar */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-inner">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-1">
                  Chat with IDEOANS
                </p>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  Hi! Need class-apart websites, automation, or custom systems? Text us directly on WhatsApp for an instant response.
                </p>
              </div>
            </div>

            {/* Direct Connect Link inside Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-95"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟩 FLOATING ACTION BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 border border-emerald-500/30 text-emerald-400 hover:text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-visible"
        whileHover={{ scale: 1.08, rotate: -5 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {/* Pulsing Outer Background Halo */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-pulse group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
        
        {/* Circular Glowing Ring */}
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Hover expanding text tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-neutral-900/90 text-[10px] font-black uppercase tracking-wider text-emerald-400 border border-emerald-500/20 shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
          Direct Connect
        </span>

        {/* WhatsApp High-Fidelity SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="w-6 h-6 z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.386 2.008 13.916.99 11.474.99c-5.437 0-9.863 4.37-9.868 9.8-.001 1.77.463 3.5 1.34 5.02L1.87 20.364l4.777-1.21zM17.56 18.083c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004z" />
        </svg>
      </motion.a>
    </div>
  );
}
