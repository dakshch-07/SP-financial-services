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
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="spGoldGradClassic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFBE5B" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C5A03A" />
        </linearGradient>
        <linearGradient id="spShieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C2D27" />
          <stop offset="100%" stopColor="#061815" />
        </linearGradient>
      </defs>

      {/* Royal 5-Point Crown on Top */}
      <path
        d="M32 28 L38 18 L50 24 L62 18 L68 28 Z"
        fill="url(#spGoldGradClassic)"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="16" r="2.2" fill="#DFBE5B" />
      <circle cx="50" cy="13" r="2.5" fill="#DFBE5B" />
      <circle cx="62" cy="16" r="2.2" fill="#DFBE5B" />

      {/* Classic Curved Financial Shield */}
      <path
        d="M50 30 C66 30 78 34 82 40 C82 68 68 88 50 98 C32 88 18 68 18 40 C22 34 34 30 50 30 Z"
        fill="url(#spShieldBg)"
        stroke="url(#spGoldGradClassic)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Thin Gold Trim */}
      <path
        d="M50 35 C63 35 73 38 76 43 C76 65 64 82 50 90 C36 82 24 65 24 43 C27 38 37 35 50 35 Z"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="none"
      />

      {/* Classic Bold Serif SP Monogram */}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontWeight="bold"
        fontSize="26"
        fill="#FFFFFF"
        letterSpacing="0.5"
      >
        SP
      </text>
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
    md: 44,
    lg: 54,
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <LogoMark size={sizeDimensions} />

      {withWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif font-bold tracking-wider leading-none text-base sm:text-lg md:text-xl ${
                isLight ? "text-white" : "text-forest-900"
              }`}
            >
              SP FINANCIAL
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-gold-400 font-bold uppercase mt-1">
            SERVICES · WEALTH ADVISORY
          </span>
        </div>
      )}
    </Link>
  );
};
