"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean;
  className?: string;
}

export const LogoMark: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 42,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 group-hover:scale-105 flex-shrink-0 ${className}`}
    >
      <defs>
        {/* Luxury Gold Gradient */}
        <linearGradient id="spGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E7BE" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#E5C365" />
          <stop offset="100%" stopColor="#B38F24" />
        </linearGradient>

        {/* Growth Emerald Leaf Gradient */}
        <linearGradient id="spLeafGrad" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>

        {/* Background Dark Radial Gradient */}
        <radialGradient id="spBgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0E3630" />
          <stop offset="100%" stopColor="#061B18" />
        </radialGradient>
      </defs>

      {/* Outer Premium Circular Seal */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="url(#spBgGrad)"
        stroke="url(#spGoldGrad)"
        strokeWidth="2.8"
      />

      {/* Inner Elegant Thin Accent Ring */}
      <circle
        cx="50"
        cy="50"
        r="41.5"
        stroke="url(#spGoldGrad)"
        strokeWidth="0.8"
        strokeOpacity="0.45"
      />

      {/* --- CENTRAL GROWTH STEM & SHOOT --- */}
      {/* Central Rising Stem */}
      <path
        d="M 50 75 L 50 40"
        stroke="url(#spGoldGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Upward Growing Green Sprout / Leaf (Life & Health Protection) */}
      <path
        d="M 50 40 C 42 34 40 22 49 16 C 53 23 53 32 50 40 Z"
        fill="url(#spLeafGrad)"
        stroke="#10B981"
        strokeWidth="0.5"
      />
      {/* Secondary Mini Sprout Leaf */}
      <path
        d="M 46 36 C 39 34 38 27 44 24 C 47 28 47 33 46 36 Z"
        fill="url(#spLeafGrad)"
        opacity="0.9"
      />

      {/* Rising Growth Wealth Arrow (Ascending Capital & Wealth Expansion) */}
      <path
        d="M 50 40 Q 55 33 63 21"
        stroke="url(#spGoldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Arrow Head */}
      <path
        d="M 58 19 L 66 20 L 64 28 Z"
        fill="url(#spGoldGrad)"
      />

      {/* --- MONOGRAM LETTERS: S & P --- */}
      {/* Letter 'S' on the Left */}
      <path
        d="M 43 49 C 41 46 35 45 30 47 C 25.5 48.8 24 53 26 56.5 C 28 60 37 60.5 39 64 C 41 67.5 38 72 31 72 C 26 72 22 69 21 66"
        stroke="url(#spGoldGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Letter 'P' on the Right (Connecting to the Central Upward Stem) */}
      <path
        d="M 50 48 L 63 48 C 70 48 74 52 74 57 C 74 62 70 66 63 66 L 50 66"
        stroke="url(#spGoldGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  size = "md",
  withWordmark = true,
  className = "",
}) => {
  const isLight = variant === "light";

  const sizeDimensions = {
    sm: 36,
    md: 42,
    lg: 50,
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <LogoMark size={sizeDimensions} />

      {withWordmark && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif font-bold tracking-wider leading-none text-base sm:text-lg md:text-[1.15rem] ${
              isLight ? "text-white" : "text-forest-900"
            }`}
          >
            SP FINANCIAL
          </span>
          <span className="text-[8px] sm:text-[9.5px] tracking-[0.24em] text-gold-400 font-bold uppercase mt-1 leading-none">
            SERVICES · WEALTH ADVISORY
          </span>
        </div>
      )}
    </Link>
  );
};
