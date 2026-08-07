'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart as PieChartIcon, Users, CreditCard, ArrowUpRight, CheckCircle, Search, Bell } from 'lucide-react';

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'transactions' | 'growth'>('analytics');

  return (
    <section id="showcase" className="py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Intuitive Platform Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Command Center For Your Entire Treasury
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Monitor real-time revenue velocity, expense allocations, and profit metrics in one unified dashboard interface.
          </p>
        </div>

        {/* Laptop Frame Mockup Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Laptop Body Frame */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-3 sm:p-4 bg-slate-800 dark:bg-slate-900 border-4 border-slate-700 shadow-2xl shadow-teal-900/20"
          >
            {/* Screen Inner Container */}
            <div className="rounded-2xl bg-slate-950 text-white overflow-hidden border border-slate-800">
              
              {/* Top Screen Navbar */}
              <div className="px-5 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">app.businesscare.com/dashboard</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2" />
                    <input
                      type="text"
                      readOnly
                      value="Search transactions..."
                      className="bg-slate-800 text-xs text-slate-400 pl-8 pr-3 py-1 rounded-lg border border-slate-700 w-44"
                    />
                  </div>
                  <Bell className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                    BC
                  </div>
                </div>
              </div>

              {/* Main Dashboard Screen Area */}
              <div className="p-6 space-y-6">
                
                {/* Top Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block font-medium">Revenue Growth</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold text-white">$482,900</span>
                      <span className="text-xs font-bold text-emerald-400">+18.5%</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block font-medium">Profit Margin</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold text-white">42.8%</span>
                      <span className="text-xs font-bold text-teal-400">+4.2%</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block font-medium">Expense Tracking</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold text-white">$124,100</span>
                      <span className="text-xs font-bold text-rose-400">-6.1%</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block font-medium">Customer Velocity</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold text-white">1,490</span>
                      <span className="text-xs font-bold text-emerald-400">+120 new</span>
                    </div>
                  </div>
                </div>

                {/* Main Graph & Pie Chart Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Large Graph */}
                  <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-teal-400" />
                        <span className="text-xs font-bold text-slate-200">REVENUE & CASHFLOW FORECAST</span>
                      </div>
                      <span className="text-xs text-slate-400">Jan - Dec 2026</span>
                    </div>

                    <div className="h-44 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 500 150">
                        <defs>
                          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,120 Q100,60 200,90 T400,30 T500,20 L500,150 L0,150 Z" fill="url(#areaGrad)" />
                        <path d="M0,120 Q100,60 200,90 T400,30 T500,20" fill="none" stroke="#14B8A6" strokeWidth="3" />
                        <circle cx="400" cy="30" r="5" fill="#22C55E" />
                      </svg>
                    </div>
                  </div>

                  {/* Profit Pie Chart */}
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                        <PieChartIcon className="w-4 h-4 text-emerald-400" /> PROFIT DISTRIBUTION
                      </span>
                    </div>

                    <div className="my-4 flex items-center justify-center relative">
                      <div className="w-28 h-28 rounded-full border-8 border-teal-500 border-t-emerald-400 border-r-cyan-400 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xs text-slate-400 block">Yield</span>
                          <span className="text-base font-extrabold text-white">88.4%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div className="flex justify-between"><span>Operations</span><span className="font-bold text-white">45%</span></div>
                      <div className="flex justify-between"><span>Investment Yield</span><span className="font-bold text-emerald-400">35%</span></div>
                      <div className="flex justify-between"><span>Reserve Fund</span><span className="font-bold text-teal-400">20%</span></div>
                    </div>
                  </div>

                </div>

                {/* Recent Transactions List */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs font-bold text-slate-200 block mb-3">RECENT REAL-TIME TRANSACTIONS</span>
                  <div className="space-y-2">
                    {[
                      { name: 'Stripe Payout - US Market', date: 'Today, 14:32', amount: '+$34,500.00', status: 'Completed', color: 'text-emerald-400' },
                      { name: 'AWS Cloud Treasury Reserve', date: 'Yesterday, 09:15', amount: '-$2,140.00', status: 'Approved', color: 'text-slate-200' },
                      { name: 'Corporate Tax Reserve Yield', date: '29 Jul, 18:00', amount: '+$12,850.00', status: 'Completed', color: 'text-emerald-400' },
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-800 text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400">
                            <CreditCard className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-white block">{tx.name}</span>
                            <span className="text-[10px] text-slate-500">{tx.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold block ${tx.color}`}>{tx.amount}</span>
                          <span className="text-[10px] text-slate-400">{tx.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Floating UI Card 1: Customer Growth */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="absolute -bottom-8 -left-6 p-4 rounded-2xl glass-panel border border-teal-500/30 shadow-2xl hidden md:flex items-center gap-3"
          >
            <div className="p-3 rounded-xl bg-teal-700 text-white">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Active Accounts</span>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">+4,820 Active</span>
            </div>
          </motion.div>

          {/* Floating UI Card 2: Instant Payout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="absolute -top-8 -right-6 p-4 rounded-2xl glass-panel border border-emerald-500/30 shadow-2xl hidden md:flex items-center gap-3"
          >
            <div className="p-3 rounded-xl bg-emerald-500 text-white">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium font-mono">AUTOMATED AUDIT</span>
              <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">100% Tax Compliant</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
