'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/landingData';

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Our Implementation Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seamless 4-Step Onboarding Process
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A battle-tested financial scaling framework designed to deliver measurable cashflow optimization within 30 days.
          </p>
        </div>

        {/* 4 Step Timeline with Connecting Line */}
        <div className="relative">
          {/* Animated Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-6 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-teal-700 via-teal-500 to-emerald-400 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((stepItem, index) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="gradient-border-card p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-500 to-emerald-400 p-0.5 shadow-lg shadow-teal-700/20 mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-extrabold text-white text-lg font-mono">
                      {stepItem.step}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
                    {stepItem.subtitle}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                    {stepItem.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {stepItem.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Deliverables:
                  </span>
                  {stepItem.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
