'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Shield, CreditCard, DollarSign, PieChart, Activity, Sparkles } from 'lucide-react';

export default function DashboardMockup() {
  const [activeRange, setActiveRange] = useState<'1M' | '6M' | '1Y'>('6M');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-xl mx-auto perspective-1000"
    >
      {/* Background Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-400 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />

      {/* Main Glass Dashboard Card */}
      <div className="relative glass-panel rounded-3xl p-6 border border-teal-500/20 shadow-2xl shadow-teal-900/10 overflow-hidden">
        {/* Header Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
              <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">BusinessCare Enterprise</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Live Treasury Telemetry</p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-800/60 p-1 rounded-xl text-xs font-semibold">
            {(['1M', '6M', '1Y'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setActiveRange(r)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activeRange === r
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Metrics Cards */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 shadow-sm">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Total Revenue
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                $1,482,900
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +24.8%
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 shadow-sm">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Net Profit Margin
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                $412,500
              </span>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +18.2%
              </span>
            </div>
          </div>
        </div>

        {/* Animated SVG Revenue Chart */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 text-white border border-teal-500/20 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold tracking-wide">REVENUE & EXPENSE ANALYTICS</span>
            </div>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
              Live Sync
            </span>
          </div>

          <div className="relative h-36 w-full mt-3">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120">
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0F766E" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.8" />
              <line x1="0" y1="70" x2="400" y2="70" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.8" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.8" />

              {/* Expense Area */}
              <motion.path
                d="M0,90 Q80,75 160,80 T320,60 T400,50 L400,120 L0,120 Z"
                fill="url(#expenseGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />

              {/* Revenue Area */}
              <motion.path
                d="M0,80 Q80,40 160,65 T320,25 T400,15 L400,120 L0,120 Z"
                fill="url(#revenueGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Animated Stroke Paths */}
              <motion.path
                d="M0,80 Q80,40 160,65 T320,25 T400,15"
                fill="none"
                stroke="#22C55E"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
              <motion.path
                d="M0,90 Q80,75 160,80 T320,60 T400,50"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
              />

              {/* Pulsing Target Node */}
              <circle cx="320" cy="25" r="5" fill="#22C55E" className="animate-ping opacity-75" />
              <circle cx="320" cy="25" r="4" fill="#22C55E" />
            </svg>
          </div>
        </div>

        {/* Bottom Monthly Report Badges */}
        <div className="grid grid-cols-3 gap-2.5 mt-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-center">
            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium block">
              Investment Growth
            </span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">+34.2% YTD</span>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block">
              Tax Deducted
            </span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">$84,300</span>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
            <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium block">
              Monthly Audit
            </span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">Passed 100%</span>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Profit Analytics */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -top-6 -left-8 p-3 rounded-2xl glass-panel border border-emerald-500/30 shadow-xl hidden sm:flex items-center gap-3"
      >
        <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Profit AI Forecast</span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">$89,200 Next Quarter</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Security & Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute -bottom-6 -right-6 p-3.5 rounded-2xl glass-panel border border-teal-500/30 shadow-xl hidden sm:flex items-center gap-3"
      >
        <div className="p-2.5 rounded-xl bg-teal-700 text-white shadow-md shadow-teal-700/20">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium font-mono">SOC2 TYPE II CERTIFIED</span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% Secure Encrypted</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
