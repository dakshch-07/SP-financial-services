"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen_v3");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen_v3", "true");
    }, 1800);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen_v3", "true");
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest-950 text-white cursor-pointer select-none overflow-hidden"
          aria-label="SP Financial Services loading - Click to skip"
        >
          {/* Subtle Organic Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,143,95,0.18),transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Classic Royal SP Shield Crest SVG Animation */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-28 h-32 mb-4"
            >
              <svg
                viewBox="0 0 100 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
              >
                {/* Crown on top */}
                <motion.path
                  d="M32 28 L38 18 L50 24 L62 18 L68 28 Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="rgba(212, 175, 55, 0.3)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="38"
                  cy="16"
                  r="2"
                  fill="#DFBE5B"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                />
                <motion.circle
                  cx="50"
                  cy="13"
                  r="2.5"
                  fill="#DFBE5B"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                />
                <motion.circle
                  cx="62"
                  cy="16"
                  r="2"
                  fill="#DFBE5B"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                />

                {/* Classic Shield */}
                <motion.path
                  d="M50 30 C66 30 78 34 82 40 C82 68 68 88 50 98 C32 88 18 68 18 40 C22 34 34 30 50 30 Z"
                  fill="rgba(8, 32, 29, 0.85)"
                  stroke="#D4AF37"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                />

                {/* Serif Monogram "SP" */}
                <motion.text
                  x="50"
                  y="68"
                  textAnchor="middle"
                  fontFamily="Playfair Display, Georgia, serif"
                  fontWeight="bold"
                  fontSize="26"
                  fill="#FFFFFF"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  SP
                </motion.text>
              </svg>
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="font-serif text-2xl md:text-3xl font-bold tracking-[0.22em] text-white uppercase"
            >
              SP FINANCIAL SERVICES
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xs md:text-sm font-sans tracking-widest text-gold-300 uppercase mt-2 font-medium"
            >
              Secure Today · Assured Tomorrow
            </motion.p>

            {/* Gold Underline Sweep */}
            <div className="relative w-44 h-[2px] bg-white/10 mt-4 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.7, duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.2, duration: 0.4 }}
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
