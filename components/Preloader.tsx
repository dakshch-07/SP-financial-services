"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen_v4");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen_v4", "true");
    }, 1600);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen_v4", "true");
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
            {/* Simple Classic Gold Seal */}
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
                className="w-full h-full drop-shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
              >
                {/* Outer Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="#08201D"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Inner Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="#0C2D27"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                />

                {/* Clean SP Monogram */}
                <motion.text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  fontFamily="Playfair Display, Georgia, serif"
                  fontWeight="bold"
                  fontSize="28"
                  fill="#FFFFFF"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  SP
                </motion.text>
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
