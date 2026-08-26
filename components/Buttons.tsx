"use client";

import React from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  variant?: "gold" | "navy" | "white";
  size?: "sm" | "md" | "lg";
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  isExternal = false,
  icon,
  variant = "gold",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wider",
    md: "px-4 py-2.5 sm:px-6 sm:py-3 text-[11px] sm:text-sm font-semibold tracking-wider",
    lg: "px-4 py-3 sm:px-8 sm:py-4 text-[11px] sm:text-base font-semibold tracking-wider",
  }[size];

  const variantClasses = {
    gold: "bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-navy-900 shadow-gold hover:shadow-lg hover:brightness-105 active:scale-[0.98]",
    navy: "bg-[#0B2A55] text-white shadow-navy hover:bg-[#123B7A] active:scale-[0.98]",
    white: "bg-white text-navy-900 hover:bg-gray-100 shadow-md active:scale-[0.98]",
  }[variant];

  const buttonInner = (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full uppercase transition-all duration-300 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span className="flex items-center justify-center gap-1.5">{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </button>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <MagneticButton href={href} isExternal={isExternal}>
          {buttonInner}
        </MagneticButton>
      );
    }
    return (
      <MagneticButton>
        <Link href={href}>{buttonInner}</Link>
      </MagneticButton>
    );
  }

  return <MagneticButton onClick={onClick}>{buttonInner}</MagneticButton>;
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  isExternal = false,
  icon,
  variant = "white",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wider",
    md: "px-4 py-2.5 sm:px-6 sm:py-3 text-[11px] sm:text-sm font-semibold tracking-wider",
    lg: "px-4 py-3 sm:px-8 sm:py-4 text-[11px] sm:text-base font-semibold tracking-wider",
  }[size];

  const variantClasses = {
    white: "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/70",
    navy: "border border-navy-800/30 text-navy-900 bg-navy-800/5 hover:bg-navy-800/10 hover:border-navy-800/60",
    gold: "border border-gold-400 text-gold-400 bg-gold-400/10 hover:bg-gold-400/20",
  }[variant];

  const buttonInner = (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full uppercase transition-all duration-300 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span className="flex items-center justify-center gap-1.5">{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </button>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <MagneticButton href={href} isExternal={isExternal}>
          {buttonInner}
        </MagneticButton>
      );
    }
    return (
      <MagneticButton>
        <Link href={href}>{buttonInner}</Link>
      </MagneticButton>
    );
  }

  return <MagneticButton onClick={onClick}>{buttonInner}</MagneticButton>;
};
