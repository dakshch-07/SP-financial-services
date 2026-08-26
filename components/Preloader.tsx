"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("sp_preloader_seen_v8");
    if (hasSeenPreloader || shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("sp_preloader_seen_v8", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("sp_preloader_seen_v8", "true");
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020C1B] text-white cursor-pointer select-none overflow-hidden"
          aria-label="SP Financial Services loading - Click to skip"
        >
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            
            {/* The Logo Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-64 h-56 sm:w-80 sm:h-72 drop-shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <Image 
                src="/images/logo.png"
                alt="SP Financial Services Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Gold Underline Sweep Indicator */}
            <div className="relative w-40 h-[2px] bg-white/5 mt-6 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
