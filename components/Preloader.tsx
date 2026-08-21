"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check sessionStorage so it only plays on first session entry
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen", "true");
    }, 2100);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen", "true");
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B2A55] text-white cursor-pointer select-none overflow-hidden"
          aria-label="SP Financial Services loading screen - Click to skip"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,155,214,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* SP Shield Crest with Crown SVG Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-28 h-28 mb-6"
            >
              <svg
                viewBox="0 0 120 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
              >
                {/* Crown on top */}
                <motion.path
                  d="M40 32 L46 22 L60 30 L74 22 L80 32 Z"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="rgba(212, 175, 55, 0.2)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="46"
                  cy="20"
                  r="2"
                  fill="#D4AF37"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                />
                <motion.circle
                  cx="60"
                  cy="17"
                  r="2.5"
                  fill="#D4AF37"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
                <motion.circle
                  cx="74"
                  cy="20"
                  r="2"
                  fill="#D4AF37"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                />

                {/* Shield Outline */}
                <motion.path
                  d="M60 36 C78 36 94 40 98 48 C98 82 82 108 60 120 C38 108 22 82 22 48 C26 40 42 36 60 36 Z"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="rgba(11, 42, 85, 0.7)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                {/* Monogram "SP" */}
                <motion.text
                  x="60"
                  y="82"
                  textAnchor="middle"
                  fontFamily="Playfair Display, Georgia, serif"
                  fontWeight="bold"
                  fontSize="32"
                  fill="#FFFFFF"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  SP
                </motion.text>
              </svg>
            </motion.div>

            {/* Wordmark Letter-by-Letter Tracking */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                className="font-serif text-2xl md:text-3xl font-bold tracking-[0.25em] text-white uppercase"
              >
                SP FINANCIAL SERVICES
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-xs md:text-sm font-sans tracking-widest text-[#2E9BD6] uppercase mt-2"
            >
              Secure Today · Assured Tomorrow
            </motion.p>

            {/* Gold Underline Sweep */}
            <div className="relative w-44 h-[2px] bg-white/10 mt-4 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>

            {/* Click to skip cue */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="text-[11px] text-gray-400 mt-6 tracking-wide"
            >
              Click anywhere to enter
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
