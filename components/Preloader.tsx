"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen_v5");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen_v5", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen_v5", "true");
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
            {/* Modern Growth Seal SVG */}
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
                className="w-full h-full drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
              >
                <defs>
                  <linearGradient id="spPreGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E7BE" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#B38F24" />
                  </linearGradient>
                  <linearGradient id="spPreLeaf" x1="0%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>

                {/* Outer Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="#08201D"
                  stroke="url(#spPreGold)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Central Stem */}
                <motion.path
                  d="M 50 75 L 50 40"
                  stroke="url(#spPreGold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                />

                {/* Sprout Leaf */}
                <motion.path
                  d="M 50 40 C 42 34 40 22 49 16 C 53 23 53 32 50 40 Z"
                  fill="url(#spPreLeaf)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                />

                {/* Arrow */}
                <motion.path
                  d="M 50 40 Q 55 33 63 21"
                  stroke="url(#spPreGold)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                />
                <motion.path
                  d="M 58 19 L 66 20 L 64 28 Z"
                  fill="url(#spPreGold)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                />

                {/* S & P */}
                <motion.path
                  d="M 43 49 C 41 46 35 45 30 47 C 25.5 48.8 24 53 26 56.5 C 28 60 37 60.5 39 64 C 41 67.5 38 72 31 72 C 26 72 22 69 21 66"
                  stroke="url(#spPreGold)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
                <motion.path
                  d="M 50 48 L 63 48 C 70 48 74 52 74 57 C 74 62 70 66 63 66 L 50 66"
                  stroke="url(#spPreGold)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
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
