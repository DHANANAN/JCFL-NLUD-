"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check session storage
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("jcfl_loaded");
      if (hasLoaded) {
        setIsVisible(false);
        return;
      }
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (typeof window !== "undefined") {
              sessionStorage.setItem("jcfl_loaded", "true");
            }
          }, 400);
          return 100;
        }
        // Organic progress increments
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + increment);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("jcfl_loaded", "true");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-[#0B1927] text-white select-none px-4"
        >
          {/* Background Ambient Grid */}
          <div className="absolute inset-0 bg-governance-grid-dark opacity-20 pointer-events-none" />

          {/* Center Emblem with Rotating Gold Orbit */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Outer Rotating Concentric Dash Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute w-36 h-36 rounded-full border border-[#B99A5E]/40 border-dashed"
            />

            {/* Middle Reverse Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border border-[#537C78]/30"
            />

            {/* Emblem Image */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#B99A5E] bg-[#16324F] shadow-2xl z-10">
              <Image
                src="/assets/images/cclgfl-logo.jpg"
                alt="NLU Delhi CCLGFL Emblem"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Institutional Titles */}
          <div className="text-center space-y-2 max-w-md z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono-meta text-[11px] uppercase tracking-widest text-[#B99A5E] font-semibold"
            >
              National Law University Delhi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-white"
            >
              Journal of Corporate &amp; Financial Laws
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-[#F8F7F2]/70 font-sans-ui font-light"
            >
              Centre for Corporate Law, Governance &amp; Financial Laws
            </motion.p>
          </div>

          {/* Progress Bar & Counter */}
          <div className="w-full max-w-xs space-y-2 mt-8 z-10">
            <div className="flex items-center justify-between text-xs font-mono-meta text-[#B99A5E]">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>INITIALIZING REPOSITORY</span>
              </span>
              <span>{progress}%</span>
            </div>

            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#537C78] via-[#B99A5E] to-[#FFFFFF]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={handleSkip}
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-mono-meta text-white/50 hover:text-[#B99A5E] transition-colors py-1 px-3 rounded border border-white/10 hover:border-[#B99A5E]/40 z-10"
          >
            <span>Enter Journal</span>
            <ArrowRight className="w-3 h-3" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
