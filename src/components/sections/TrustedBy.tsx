'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_SECTORS } from '@/data/goldBridgeData';
import { Ship, Factory, Globe2, Building2, Container } from 'lucide-react';

const SECTOR_ICONS = [Ship, Container, Factory, Globe2, Building2];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-14 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-[#555555] uppercase tracking-widest mb-8">
          TRUSTED CONSULTANCY PARTNER FOR GLOBAL COMMERCE OPERATORS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {TRUSTED_SECTORS.map((sector, index) => {
            const IconComp = SECTOR_ICONS[index % SECTOR_ICONS.length];
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="gold-bridge-card p-4 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] group-hover:bg-[#0B5D4B] group-hover:text-[#C9A227] transition-all flex items-center justify-center mb-3">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-[#1A1A1A] group-hover:text-[#0B5D4B] transition-colors">
                  {sector.name}
                </h4>
                <p className="text-[11px] text-[#555555] mt-1 leading-snug">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
