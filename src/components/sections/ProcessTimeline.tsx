'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/goldBridgeData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            How We Work
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            Our 6-step confidential roadmap ensures your paperwork meets strict international banking standards before submission.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((stepItem, index) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="gold-bridge-card p-8 flex flex-col justify-between group relative"
            >
              <div>
                {/* Step Circle Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-gradient p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                    <div className="w-full h-full bg-[#0B5D4B] rounded-[14px] flex items-center justify-center font-black text-[#C9A227] text-lg font-mono">
                      {stepItem.step}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#0B5D4B] bg-[#0B5D4B]/10 px-3 py-1 rounded-full">
                    {stepItem.keyAction}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest block font-mono mb-1">
                  {stepItem.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-3 group-hover:text-[#0B5D4B] transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-[#555555] text-sm leading-relaxed mb-6">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B5D4B]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                  <span>Institutional Standard</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B5D4B] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
