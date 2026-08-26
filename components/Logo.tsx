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
  size = 44,
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
        {/* Luxury Multi-Tone Gold Metallic Gradient */}
        <linearGradient id="spGoldGradTriple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6ECCB" />
          <stop offset="30%" stopColor="#E5C365" />
          <stop offset="65%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B38F24" />
        </linearGradient>

        {/* Emerald Growth Gradient */}
        <linearGradient id="spEmeraldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#065F46" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>

        {/* Deep Forest Radial Gradient */}
        <radialGradient id="spSealBg" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0D352E" />
          <stop offset="100%" stopColor="#051714" />
        </radialGradient>
      </defs>

      {/* Outer Luxury Circular Gold Seal */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="url(#spSealBg)"
        stroke="url(#spGoldGradTriple)"
        strokeWidth="2.8"
      />

      {/* Inner Elegant Thin Accent Ring */}
      <circle
        cx="50"
        cy="50"
        r="41.5"
        stroke="url(#spGoldGradTriple)"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />

      {/* --- TRIPLE ASCENDING GROWTH ARROWS (WEALTH · HEALTH · LIFE) --- */}
      {/* 1. Emerald Backing Swoosh */}
      <path
        d="M 32 80 C 44 80 60 66 73 28"
        stroke="url(#spEmeraldGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* 2. Main Rising Arrow (Wealth & Business Growth) */}
      <path
        d="M 30 79 C 43 78 57 62 70 24"
        stroke="url(#spGoldGradTriple)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Arrow Head 1 */}
      <path
        d="M 61 27 L 72 21 L 73 32 Z"
        fill="url(#spGoldGradTriple)"
      />

      {/* 3. Secondary Rising Arrow (Health Protection Increase) */}
      <path
        d="M 40 80 C 50 79 62 66 78 40"
        stroke="url(#spGoldGradTriple)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Arrow Head 2 */}
      <path
        d="M 70 42 L 80 37 L 80 47 Z"
        fill="url(#spGoldGradTriple)"
      />

      {/* 4. Third Rising Arrow (Life & Future Security Increase) */}
      <path
        d="M 50 80 C 58 79 68 69 83 54"
        stroke="url(#spGoldGradTriple)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Arrow Head 3 */}
      <path
        d="M 76 55 L 84 51 L 84 59 Z"
        fill="url(#spGoldGradTriple)"
      />

      {/* --- MONOGRAM LETTERS: SP (Crisp Modern Alignment) --- */}
      {/* Letter 'S' */}
      <path
        d="M 37 45 C 34 42 27 41 22 44 C 17.5 46.5 17 51 21 54 C 25 57 32 58 33 62 C 34 66 30 70 23 70 C 18 70 14 67 13 63"
        stroke="url(#spGoldGradTriple)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Letter 'P' */}
      <path
        d="M 38 41 L 38 70 M 38 44 L 46 44 C 52 44 55 47.5 55 52 C 55 56.5 52 60 46 60 L 38 60"
        stroke="url(#spGoldGradTriple)"
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
