"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Home,
  CreditCard,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type CalculatorType = "sip" | "homeloan" | "loan";

const formatINR = (val: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(val));
};

export const CompactHeroCalculator: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<CalculatorType>("sip");

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(15);

  // Home Loan State
  const [homeAmount, setHomeAmount] = useState<number>(4000000);
  const [homeRate, setHomeRate] = useState<number>(8.5);
  const [homeYears, setHomeYears] = useState<number>(20);

  // Personal Loan State
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [loanRate, setLoanRate] = useState<number>(11.5);
  const [loanYears, setLoanYears] = useState<number>(5);

  // ================= CALCULATIONS ================= //
  // 1. SIP
  const sipMonths = sipYears * 12;
  const sipMonthlyRate = sipRate / (12 * 100);
  const sipTotalInvested = sipMonthly * sipMonths;
  const sipMaturity =
    sipMonthlyRate > 0
      ? sipMonthly *
        ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) *
        (1 + sipMonthlyRate)
      : sipTotalInvested;
  const sipWealthGained = Math.max(0, sipMaturity - sipTotalInvested);
  const sipInvestedPct = Math.round((sipTotalInvested / (sipMaturity || 1)) * 100) || 50;

  // 2. Home Loan
  const homeMonths = homeYears * 12;
  const homeMonthlyRate = homeRate / (12 * 100);
  const homeEmi =
    homeMonthlyRate > 0
      ? (homeAmount *
          homeMonthlyRate *
          Math.pow(1 + homeMonthlyRate, homeMonths)) /
        (Math.pow(1 + homeMonthlyRate, homeMonths) - 1)
      : homeAmount / homeMonths;
  const homeTotalPayable = homeEmi * homeMonths;
  const homeTotalInterest = Math.max(0, homeTotalPayable - homeAmount);
  const homePrincipalPct = Math.round((homeAmount / (homeTotalPayable || 1)) * 100) || 50;

  // 3. Personal Loan
  const loanMonths = loanYears * 12;
  const loanMonthlyRate = loanRate / (12 * 100);
  const loanEmi =
    loanMonthlyRate > 0
      ? (loanAmount *
          loanMonthlyRate *
          Math.pow(1 + loanMonthlyRate, loanMonths)) /
        (Math.pow(1 + loanMonthlyRate, loanMonths) - 1)
      : loanAmount / loanMonths;
  const loanTotalPayable = loanEmi * loanMonths;
  const loanTotalInterest = Math.max(0, loanTotalPayable - loanAmount);
  const loanPrincipalPct = Math.round((loanAmount / (loanTotalPayable || 1)) * 100) || 50;

  // SVG Donut Stroke
  const getDonutStroke = (percentage: number) => {
    const circumference = 2 * Math.PI * 34; // r = 34
    const strokeDash = (percentage / 100) * circumference;
    return `${strokeDash} ${circumference}`;
  };

  return (
    <div
      className={`relative w-full max-w-[480px] bg-forest-950/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-gold-400/40 text-white flex flex-col justify-between ${className}`}
    >
      {/* Header Pill Switcher */}
      <div className="bg-forest-900/90 p-1.5 rounded-2xl border border-forest-800 mb-5">
        <div className="grid grid-cols-3 gap-1">
          {[
            { id: "sip", label: "SIP Calc", icon: <TrendingUp className="w-3.5 h-3.5" /> },
            { id: "homeloan", label: "Home Loan", icon: <Home className="w-3.5 h-3.5" /> },
            { id: "loan", label: "Loan EMI", icon: <CreditCard className="w-3.5 h-3.5" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CalculatorType)}
                className={`relative flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                  isActive ? "text-forest-950" : "text-gray-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCompactCalcPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#DFBE5B] via-[#D4AF37] to-[#C5A03A] rounded-xl shadow-gold"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {tab.icon}
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator Body */}
      <AnimatePresence mode="wait">
        {/* ================= 1. SIP CALCULATOR ================= */}
        {activeTab === "sip" && (
          <motion.div
            key="compact-sip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {/* Monthly Investment */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-gray-300">Monthly Investment</span>
                <span className="text-gold-300 font-mono bg-forest-900 px-2 py-0.5 rounded-lg border border-forest-800">
                  {formatINR(sipMonthly)}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={sipMonthly}
                onChange={(e) => setSipMonthly(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Return Rate & Time Horizon in 2-col */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="flex justify-between items-center text-[11px] font-bold mb-1">
                  <span className="text-gray-300">Exp. Return</span>
                  <span className="text-gold-300 font-mono">{sipRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={25}
                  step={0.5}
                  value={sipRate}
                  onChange={(e) => setSipRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-[11px] font-bold mb-1">
                  <span className="text-gray-300">Horizon</span>
                  <span className="text-gold-300 font-mono">{sipYears} Yrs</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Live Result Display Box */}
            <div className="bg-forest-900/90 rounded-2xl p-3.5 border border-forest-800/90 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Est. Maturity Wealth
                </span>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  {formatINR(sipMaturity)}
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5 space-x-2">
                  <span>Invested: {formatINR(sipTotalInvested)}</span>
                  <span>·</span>
                  <span className="text-gold-300 font-semibold">Gained: {formatINR(sipWealthGained)}</span>
                </div>
              </div>

              {/* Mini SVG Donut */}
              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" stroke="#D4AF37" strokeWidth="10" fill="transparent" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#1E6B5C"
                    strokeWidth="10"
                    strokeDasharray={getDonutStroke(sipInvestedPct)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-300"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-gold-300">
                  {(sipMaturity / (sipTotalInvested || 1)).toFixed(1)}x
                </span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/919870577706?text=${encodeURIComponent(
                `Hello Sachin Pandit, I used your SIP calculator for ${formatINR(
                  sipMonthly
                )}/month for ${sipYears} years. Please guide me on the best mutual funds.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-wider text-xs hover:brightness-105 transition-all shadow-gold flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Start This SIP on WhatsApp
            </a>
          </motion.div>
        )}

        {/* ================= 2. HOME LOAN ================= */}
        {activeTab === "homeloan" && (
          <motion.div
            key="compact-homeloan"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-gray-300">Home Loan Amount</span>
                <span className="text-gold-300 font-mono bg-forest-900 px-2 py-0.5 rounded-lg border border-forest-800">
                  {formatINR(homeAmount)}
                </span>
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={100000}
                value={homeAmount}
                onChange={(e) => setHomeAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="flex justify-between items-center text-[11px] font-bold mb-1">
                  <span className="text-gray-300">Interest Rate</span>
                  <span className="text-gold-300 font-mono">{homeRate}%</span>
                </div>
                <input
                  type="range"
                  min={6.5}
                  max={14}
                  step={0.1}
                  value={homeRate}
                  onChange={(e) => setHomeRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-[11px] font-bold mb-1">
                  <span className="text-gray-300">Tenure</span>
                  <span className="text-gold-300 font-mono">{homeYears} Yrs</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={homeYears}
                  onChange={(e) => setHomeYears(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-forest-900/90 rounded-2xl p-3.5 border border-forest-800/90 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Monthly Home Loan EMI
                </span>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  {formatINR(homeEmi)}
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5 space-x-2">
                  <span>Interest: {formatINR(homeTotalInterest)}</span>
                  <span>·</span>
                  <span>Total: {formatINR(homeTotalPayable)}</span>
                </div>
              </div>

              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" stroke="#DFBE5B" strokeWidth="10" fill="transparent" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#1E6B5C"
                    strokeWidth="10"
                    strokeDasharray={getDonutStroke(homePrincipalPct)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-white">{homePrincipalPct}%</span>
              </div>
            </div>

            <a
              href={`https://wa.me/919870577706?text=${encodeURIComponent(
                `Hello Sachin Pandit, I am looking for Home Loan assistance for ${formatINR(
                  homeAmount
                )} for ${homeYears} years.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-wider text-xs hover:brightness-105 transition-all shadow-gold flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Consult on Home Loan
            </a>
          </motion.div>
        )}

        {/* ================= 3. PERSONAL LOAN ================= */}
        {activeTab === "loan" && (
          <motion.div
            key="compact-loan"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span className="text-gray-300">Loan Amount</span>
                <span className="text-gold-300 font-mono bg-forest-900 px-2 py-0.5 rounded-lg border border-forest-800">
                  {formatINR(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={2500000}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="flex justify-between items-center text-[11px] font-bold mb-1">
                  <span className="text-gray-300">Interest Rate</span>
                  <span className="text-gold-300 font-mono">{loanRate}%</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={24}
                  step={0.25}
                  value={loanRate}
                  onChange={(e) => setLoanRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-[11px] font-bold mb-1">
                  <span className="text-gray-300">Tenure</span>
                  <span className="text-gold-300 font-mono">{loanYears} Yrs</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={7}
                  step={1}
                  value={loanYears}
                  onChange={(e) => setLoanYears(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-forest-900/90 rounded-2xl p-3.5 border border-forest-800/90 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Monthly Loan EMI
                </span>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  {formatINR(loanEmi)}
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5 space-x-2">
                  <span>Interest: {formatINR(loanTotalInterest)}</span>
                  <span>·</span>
                  <span>Total: {formatINR(loanTotalPayable)}</span>
                </div>
              </div>

              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" stroke="#DFBE5B" strokeWidth="10" fill="transparent" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#1E6B5C"
                    strokeWidth="10"
                    strokeDasharray={getDonutStroke(loanPrincipalPct)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-white">{loanPrincipalPct}%</span>
              </div>
            </div>

            <a
              href={`https://wa.me/919870577706?text=${encodeURIComponent(
                `Hello Sachin Pandit, I would like to inquire about loan options for ${formatINR(
                  loanAmount
                )} for ${loanYears} years.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-wider text-xs hover:brightness-105 transition-all shadow-gold flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Inquire on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
