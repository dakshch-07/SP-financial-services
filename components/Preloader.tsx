"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen_v6");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen_v6", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen_v6", "true");
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest-950 text-white cursor-pointer select-none overflow-hidden"
          aria-label="SP Financial Services loading - Click to skip"
        >
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Triple Growth Arrows Seal SVG */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-24 h-24 mb-4"
            >
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_24px_rgba(212,175,55,0.45)]"
              >
                <defs>
                  <linearGradient id="spPreGoldTriple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F6ECCB" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#B38F24" />
                  </linearGradient>
                  <linearGradient id="spPreEmerald" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#065F46" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>

                {/* Outer Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="#08201D"
                  stroke="url(#spPreGoldTriple)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Triple Growth Arrows Animation */}
                {/* Arrow 1: Main (Wealth) */}
                <motion.path
                  d="M 30 79 C 43 78 57 62 70 24"
                  stroke="url(#spPreGoldTriple)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                />
                <motion.path
                  d="M 61 27 L 72 21 L 73 32 Z"
                  fill="url(#spPreGoldTriple)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />

                {/* Arrow 2: Health */}
                <motion.path
                  d="M 40 80 C 50 79 62 66 78 40"
                  stroke="url(#spPreGoldTriple)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                />
                <motion.path
                  d="M 70 42 L 80 37 L 80 47 Z"
                  fill="url(#spPreGoldTriple)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                />

                {/* Arrow 3: Life */}
                <motion.path
                  d="M 50 80 C 58 79 68 69 83 54"
                  stroke="url(#spPreGoldTriple)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                />
                <motion.path
                  d="M 76 55 L 84 51 L 84 59 Z"
                  fill="url(#spPreGoldTriple)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                />

                {/* S & P */}
                <motion.path
                  d="M 37 45 C 34 42 27 41 22 44 C 17.5 46.5 17 51 21 54 C 25 57 32 58 33 62 C 34 66 30 70 23 70 C 18 70 14 67 13 63"
                  stroke="url(#spPreGoldTriple)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.path
                  d="M 38 41 L 38 70 M 38 44 L 46 44 C 52 44 55 47.5 55 52 C 55 56.5 52 60 46 60 L 38 60"
                  stroke="url(#spPreGoldTriple)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                />
              </svg>
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="font-serif text-2xl md:text-3xl font-bold tracking-[0.22em] text-white uppercase"
            >
              SP FINANCIAL SERVICES
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-xs md:text-sm tracking-widest text-gold-300 uppercase mt-2 font-medium"
            >
              Secure Today · Assured Tomorrow
            </motion.p>

            {/* Gold Underline Sweep */}
            <div className="relative w-40 h-[2px] bg-white/10 mt-4 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
