'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '@/data/landingData';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Flexible Plans For Every Growth Phase
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            No hidden setup fees or surprise charges. Switch or upgrade plans anytime as your business expands.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
              Monthly Billing
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-teal-700 p-1 relative transition-colors focus:outline-none"
              aria-label="Toggle Annual Billing"
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-white shadow-md"
              />
            </button>

            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
              Annual Billing
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                  plan.popular
                    ? 'glass-panel border-2 border-teal-500 shadow-2xl shadow-teal-700/20 lg:-translate-y-3 bg-gradient-to-b from-teal-500/5 to-transparent'
                    : 'glass-panel border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-700 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 h-8">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 my-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      / month
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className={`w-full py-3.5 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-700 to-emerald-600 text-white shadow-lg shadow-teal-700/25 hover:from-teal-600 hover:to-emerald-500'
                      : 'bg-slate-200/80 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-teal-500/10 hover:text-teal-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
