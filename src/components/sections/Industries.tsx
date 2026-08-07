'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Container, Factory, Briefcase, Truck, Building, ArrowRight } from 'lucide-react';
import { INDUSTRIES_WE_SERVE } from '@/data/goldBridgeData';

const ICON_MAP: Record<string, React.ElementType> = {
  Ship,
  Container,
  Factory,
  Briefcase,
  Truck,
  Building,
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Sector Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            Empowering global market leaders across manufacturing, maritime shipping, and international commodity trading.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_WE_SERVE.map((ind, index) => {
            const IconComponent = ICON_MAP[ind.iconName] || Ship;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="gold-bridge-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B5D4B] text-[#C9A227] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#0B5D4B] transition-colors mb-3">
                    {ind.name}
                  </h3>

                  <p className="text-[#555555] text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B5D4B]">
                  <span>Explore Industry Facilitation</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
