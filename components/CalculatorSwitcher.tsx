"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Home,
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PieChart as PieIcon,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

type CalculatorType = "sip" | "homeloan" | "loan";

// Format Indian Currency Helper
const formatINR = (val: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(val));
};

export const CalculatorSwitcher: React.FC<{ defaultTab?: CalculatorType; id?: string }> = ({
  defaultTab = "sip",
  id = "calculator-section",
}) => {
  const [activeTab, setActiveTab] = useState<CalculatorType>(defaultTab);

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(15);

  // Home Loan Calculator State
  const [homeAmount, setHomeAmount] = useState<number>(5000000);
  const [homeRate, setHomeRate] = useState<number>(8.5);
  const [homeYears, setHomeYears] = useState<number>(20);

  // General/Personal Loan State
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [loanRate, setLoanRate] = useState<number>(11.5);
  const [loanYears, setLoanYears] = useState<number>(5);

  // =================== CALCULATIONS =================== //
  // 1. SIP Calculations
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
  const sipInvestedPct = Math.round((sipTotalInvested / sipMaturity) * 100) || 50;
  const sipGainedPct = 100 - sipInvestedPct;

  // 2. Home Loan Calculations
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
  const homePrincipalPct = Math.round((homeAmount / homeTotalPayable) * 100) || 50;
  const homeInterestPct = 100 - homePrincipalPct;

  // 3. Personal Loan Calculations
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
  const loanPrincipalPct = Math.round((loanAmount / loanTotalPayable) * 100) || 50;
  const loanInterestPct = 100 - loanPrincipalPct;

  // Generate SVG Donut Stroke Dash
  const getDonutStroke = (percentage: number) => {
    const circumference = 2 * Math.PI * 40; // r = 40
    const strokeDash = (percentage / 100) * circumference;
    return `${strokeDash} ${circumference}`;
  };

  const uniqueId = useId();

  return (
    <section id={id} className="py-12 md:py-20 bg-cream-100 organic-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800/10 border border-forest-800/20 text-forest-800 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            Financial Planning Suite
          </div>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900 tracking-tight">
            Plan Your Wealth &amp; EMIs Live
          </h2>
          <p className="fluid-body text-gray-600 mt-3 max-w-2xl mx-auto">
            Use our interactive financial calculators to forecast your mutual fund compounding or
            estimate precise monthly EMI commitments.
          </p>
        </div>

        {/* Master Calculator Card */}
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-card border border-cream-300/80 overflow-hidden">
          {/* Segmented Control Tabs */}
          <div className="bg-forest-900 p-2 sm:p-3 border-b border-forest-800">
            <div className="grid grid-cols-3 gap-1 sm:gap-2 max-w-2xl mx-auto">
              {[
                { id: "sip", label: "SIP Calculator", icon: <TrendingUp className="w-4 h-4" /> },
                { id: "homeloan", label: "Home Loan EMI", icon: <Home className="w-4 h-4" /> },
                { id: "loan", label: "Loan Calculator", icon: <CreditCard className="w-4 h-4" /> },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as CalculatorType)}
                    className={`relative flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                      isActive ? "text-forest-900" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCalcPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#DFBE5B] via-[#D4AF37] to-[#C5A03A] rounded-xl sm:rounded-2xl shadow-gold"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">
                        {tab.id === "sip" ? "SIP" : tab.id === "homeloan" ? "Home Loan" : "Loan"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculator Body with Framer Motion Transition */}
          <div className="p-6 sm:p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {/* ===================== 1. SIP CALCULATOR ===================== */}
              {activeTab === "sip" && (
                <motion.div
                  key="sip"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Column: Sliders & Numerical Controls (7 cols) */}
                  <div className="lg:col-span-7 space-y-7">
                    {/* Monthly Investment */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Monthly Investment
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <span>₹</span>
                          <input
                            type="number"
                            min={500}
                            max={500000}
                            step={500}
                            value={sipMonthly}
                            onChange={(e) => setSipMonthly(Math.max(500, Number(e.target.value)))}
                            className="w-24 bg-transparent outline-none text-right font-mono"
                          />
                        </div>
                      </div>
                      <input
                        type="range"
                        min={500}
                        max={100000}
                        step={500}
                        value={sipMonthly}
                        onChange={(e) => setSipMonthly(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>₹ 500</span>
                        <span>₹ 50,000</span>
                        <span>₹ 1,00,000+</span>
                      </div>
                    </div>

                    {/* Expected Annual Return Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Expected Return Rate (p.a.)
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <input
                            type="number"
                            min={1}
                            max={30}
                            step={0.5}
                            value={sipRate}
                            onChange={(e) => setSipRate(Math.min(30, Math.max(1, Number(e.target.value))))}
                            className="w-16 bg-transparent outline-none text-right font-mono"
                          />
                          <span>%</span>
                        </div>
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
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>1% (Debt)</span>
                        <span>12% (Balanced SIP)</span>
                        <span>25% (Equity)</span>
                      </div>
                    </div>

                    {/* Time Period (Years) */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Investment Horizon
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <input
                            type="number"
                            min={1}
                            max={40}
                            value={sipYears}
                            onChange={(e) => setSipYears(Math.min(40, Math.max(1, Number(e.target.value))))}
                            className="w-14 bg-transparent outline-none text-right font-mono"
                          />
                          <span>Yr{sipYears > 1 ? "s" : ""}</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={35}
                        step={1}
                        value={sipYears}
                        onChange={(e) => setSipYears(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>1 Year</span>
                        <span>15 Years</span>
                        <span>35 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Result Card + Animated Donut (5 cols) */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-forest-950 via-forest-900 to-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gold-400/30">
                    <div className="text-center pb-6 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1">
                        Expected Total Wealth
                      </span>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                        {formatINR(sipMaturity)}
                      </div>
                    </div>

                    {/* Donut Chart & Breakdown */}
                    <div className="py-6 flex flex-col sm:flex-row items-center justify-around gap-6 border-b border-white/10">
                      {/* SVG Donut */}
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Background Circle (Total Return) */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#D4AF37"
                            strokeWidth="14"
                            fill="transparent"
                          />
                          {/* Foreground Circle (Invested Amount) */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#1E6B5C"
                            strokeWidth="14"
                            strokeDasharray={getDonutStroke(sipInvestedPct)}
                            strokeLinecap="round"
                            fill="transparent"
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-300 block">Growth</span>
                          <span className="text-xs font-bold text-gold-300">
                            {(sipMaturity / (sipTotalInvested || 1)).toFixed(1)}x
                          </span>
                        </div>
                      </div>

                      {/* Legend Stats */}
                      <div className="space-y-3 w-full sm:w-auto">
                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#1E6B5C]" />
                            <span className="text-xs text-gray-300 font-medium">Invested:</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-white">
                            {formatINR(sipTotalInvested)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-gold-400" />
                            <span className="text-xs text-gray-300 font-medium">Est. Returns:</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-gold-400">
                            {formatINR(sipWealthGained)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-6">
                      <a
                        href={`https://wa.me/919870577706?text=${encodeURIComponent(
                          `Hello Sachin Pandit, I am interested in starting a monthly SIP of ${formatINR(
                            sipMonthly
                          )} for ${sipYears} years. Please guide me.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-wider text-xs sm:text-sm hover:brightness-105 transition-all shadow-gold flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Start This SIP on WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ===================== 2. HOME LOAN CALCULATOR ===================== */}
              {activeTab === "homeloan" && (
                <motion.div
                  key="homeloan"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Column: Controls (7 cols) */}
                  <div className="lg:col-span-7 space-y-7">
                    {/* Loan Amount */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Home Loan Amount
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <span>₹</span>
                          <input
                            type="number"
                            min={100000}
                            max={50000000}
                            step={100000}
                            value={homeAmount}
                            onChange={(e) => setHomeAmount(Math.max(100000, Number(e.target.value)))}
                            className="w-32 bg-transparent outline-none text-right font-mono"
                          />
                        </div>
                      </div>
                      <input
                        type="range"
                        min={500000}
                        max={30000000}
                        step={100000}
                        value={homeAmount}
                        onChange={(e) => setHomeAmount(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>₹ 5 Lakh</span>
                        <span>₹ 1.5 Crore</span>
                        <span>₹ 3 Crore+</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Interest Rate (p.a.)
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <input
                            type="number"
                            min={6}
                            max={16}
                            step={0.1}
                            value={homeRate}
                            onChange={(e) => setHomeRate(Math.min(16, Math.max(6, Number(e.target.value))))}
                            className="w-16 bg-transparent outline-none text-right font-mono"
                          />
                          <span>%</span>
                        </div>
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
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>6.5%</span>
                        <span>8.5% (Typical Bank Rate)</span>
                        <span>14%</span>
                      </div>
                    </div>

                    {/* Loan Tenure (Years) */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Loan Tenure
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <input
                            type="number"
                            min={1}
                            max={30}
                            value={homeYears}
                            onChange={(e) => setHomeYears(Math.min(30, Math.max(1, Number(e.target.value))))}
                            className="w-14 bg-transparent outline-none text-right font-mono"
                          />
                          <span>Yr{homeYears > 1 ? "s" : ""}</span>
                        </div>
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
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>1 Year</span>
                        <span>20 Years</span>
                        <span>30 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Results (5 cols) */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-forest-950 via-forest-900 to-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gold-400/30">
                    <div className="text-center pb-6 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1">
                        Monthly Home Loan EMI
                      </span>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                        {formatINR(homeEmi)}
                      </div>
                    </div>

                    {/* Donut & Breakdown */}
                    <div className="py-6 flex flex-col sm:flex-row items-center justify-around gap-6 border-b border-white/10">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#DFBE5B" strokeWidth="14" fill="transparent" />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#1E6B5C"
                            strokeWidth="14"
                            strokeDasharray={getDonutStroke(homePrincipalPct)}
                            strokeLinecap="round"
                            fill="transparent"
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-300 block">Principal</span>
                          <span className="text-xs font-bold text-white">{homePrincipalPct}%</span>
                        </div>
                      </div>

                      <div className="space-y-3 w-full sm:w-auto">
                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#1E6B5C]" />
                            <span className="text-xs text-gray-300 font-medium">Principal:</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-white">
                            {formatINR(homeAmount)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#DFBE5B]" />
                            <span className="text-xs text-gray-300 font-medium">Total Interest:</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-gold-400">
                            {formatINR(homeTotalInterest)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-4 pt-1 border-t border-white/10">
                          <span className="text-xs text-gray-300 font-medium">Total Payment:</span>
                          <span className="font-mono text-xs font-bold text-white">
                            {formatINR(homeTotalPayable)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <a
                        href={`https://wa.me/919870577706?text=${encodeURIComponent(
                          `Hello Sachin Pandit, I am looking for Home Loan guidance for ${formatINR(
                            homeAmount
                          )} at ${homeRate}% for ${homeYears} years.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-wider text-xs sm:text-sm hover:brightness-105 transition-all shadow-gold flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Consult on Home Loan
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ===================== 3. GENERAL / PERSONAL LOAN CALCULATOR ===================== */}
              {activeTab === "loan" && (
                <motion.div
                  key="loan"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Column: Controls (7 cols) */}
                  <div className="lg:col-span-7 space-y-7">
                    {/* Loan Amount */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Personal / Business Loan Amount
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <span>₹</span>
                          <input
                            type="number"
                            min={50000}
                            max={10000000}
                            step={25000}
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Math.max(50000, Number(e.target.value)))}
                            className="w-28 bg-transparent outline-none text-right font-mono"
                          />
                        </div>
                      </div>
                      <input
                        type="range"
                        min={50000}
                        max={5000000}
                        step={25000}
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>₹ 50,000</span>
                        <span>₹ 25 Lakh</span>
                        <span>₹ 50 Lakh+</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Interest Rate (p.a.)
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <input
                            type="number"
                            min={7}
                            max={24}
                            step={0.25}
                            value={loanRate}
                            onChange={(e) => setLoanRate(Math.min(24, Math.max(7, Number(e.target.value))))}
                            className="w-16 bg-transparent outline-none text-right font-mono"
                          />
                          <span>%</span>
                        </div>
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
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>8%</span>
                        <span>12%</span>
                        <span>24%</span>
                      </div>
                    </div>

                    {/* Loan Tenure (Years) */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                          Tenure (Years)
                        </label>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-cream-100 border border-cream-300 rounded-xl font-bold text-forest-900 text-sm sm:text-base">
                          <input
                            type="number"
                            min={1}
                            max={7}
                            value={loanYears}
                            onChange={(e) => setLoanYears(Math.min(7, Math.max(1, Number(e.target.value))))}
                            className="w-14 bg-transparent outline-none text-right font-mono"
                          />
                          <span>Yr{loanYears > 1 ? "s" : ""}</span>
                        </div>
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
                      <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                        <span>1 Year</span>
                        <span>3 Years</span>
                        <span>7 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Results (5 cols) */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-forest-950 via-forest-900 to-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gold-400/30">
                    <div className="text-center pb-6 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1">
                        Monthly Loan EMI
                      </span>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                        {formatINR(loanEmi)}
                      </div>
                    </div>

                    {/* Donut & Breakdown */}
                    <div className="py-6 flex flex-col sm:flex-row items-center justify-around gap-6 border-b border-white/10">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#DFBE5B" strokeWidth="14" fill="transparent" />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#1E6B5C"
                            strokeWidth="14"
                            strokeDasharray={getDonutStroke(loanPrincipalPct)}
                            strokeLinecap="round"
                            fill="transparent"
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-300 block">Principal</span>
                          <span className="text-xs font-bold text-white">{loanPrincipalPct}%</span>
                        </div>
                      </div>

                      <div className="space-y-3 w-full sm:w-auto">
                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#1E6B5C]" />
                            <span className="text-xs text-gray-300 font-medium">Principal:</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-white">
                            {formatINR(loanAmount)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#DFBE5B]" />
                            <span className="text-xs text-gray-300 font-medium">Total Interest:</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-gold-400">
                            {formatINR(loanTotalInterest)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-4 pt-1 border-t border-white/10">
                          <span className="text-xs text-gray-300 font-medium">Total Payable:</span>
                          <span className="font-mono text-xs font-bold text-white">
                            {formatINR(loanTotalPayable)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <a
                        href={`https://wa.me/919870577706?text=${encodeURIComponent(
                          `Hello Sachin Pandit, I would like to inquire about loan options for ${formatINR(
                            loanAmount
                          )} for ${loanYears} years.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-wider text-xs sm:text-sm hover:brightness-105 transition-all shadow-gold flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Inquire About Loan Assistance
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
