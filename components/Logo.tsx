"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean; // Kept for backwards compatibility but not used
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-28 sm:w-32",
    md: "w-40 sm:w-48",
    lg: "w-48 sm:w-56",
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className} ${sizeClasses}`}>
      <div className="relative w-full pb-[80%]">
        <Image 
          src="/images/logo.png" 
          alt="SP Financial Services" 
          fill 
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};
