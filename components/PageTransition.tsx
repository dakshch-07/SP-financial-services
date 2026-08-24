"use client";

import React from "react";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex-grow flex flex-col w-full">{children}</div>;
};
