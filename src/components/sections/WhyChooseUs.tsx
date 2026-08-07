'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Network, Users, Zap, Lock, MessageSquareCheck, UserCheck, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/goldBridgeData';

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Network,
  Users,
  Zap,
  Lock,
  MessageSquareCheck,
  UserCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#F8FAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Our Core Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Why Businesses Trust Gold Bridge Capital Solution
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            We combine high-grade banking documentation expertise with direct institutional channel coordination.
          </p>
        </div>

        {/* 7 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconName] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="gold-bridge-card p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 flex items-center justify-center text-[#0B5D4B] group-hover:bg-[#0B5D4B] group-hover:text-[#C9A227] transition-all mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#0B5D4B] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#555555] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-[#0B5D4B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                  <span>Verified Operational Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
