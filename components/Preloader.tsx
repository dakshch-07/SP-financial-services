"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen_v2");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen_v2", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen_v2", "true");
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest-950 text-white cursor-pointer select-none overflow-hidden"
          aria-label="SP Financial Services loading - Click to skip"
        >
          {/* Subtle Organic Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,143,95,0.2),transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* SP Growth Monogram SVG Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-28 h-28 mb-6"
            >
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
              >
                {/* Shield Path Draw */}
                <motion.path
                  d="M50 6 L88 26 L88 68 L50 94 L12 68 L12 26 Z"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  fill="rgba(8, 32, 29, 0.8)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                />

                {/* S-Curve Draw */}
                <motion.path
                  d="M32 34 C32 26 44 24 54 24 C64 24 68 28 68 34 C68 40 60 43 48 46 C36 49 28 54 28 64 C28 74 38 78 50 78 C60 78 68 74 72 68"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
                />

                {/* P Stem with Arrow */}
                <motion.path
                  d="M50 76 L50 26 L66 26 C74 26 80 32 80 40 C80 48 74 54 66 54 L50 54"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                />

                {/* Arrow Apex */}
                <motion.path
                  d="M74 16 L88 16 L88 30 M88 16 L62 42"
                  stroke="#D4AF37"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="font-serif text-2xl md:text-3xl font-bold tracking-[0.22em] text-white uppercase"
            >
              SP FINANCIAL SERVICES
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs md:text-sm font-sans tracking-widest text-gold-300 uppercase mt-2 font-medium"
            >
              Wealth Advisory · Insurance · Loans
            </motion.p>

            {/* Gold Underline Sweep */}
            <div className="relative w-44 h-[2px] bg-white/10 mt-4 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.8, duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="text-[11px] text-gray-400 mt-6 tracking-wide"
            >
              Click anywhere to skip
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
