'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_COMPANIES } from '@/data/landingData';

export default function TrustedCompanies() {
  return (
    <section id="trusted" className="py-12 border-y border-slate-200/60 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
          TRUSTED BY LEADERS AT WORLD-CLASS ORGANIZATIONS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
          {TRUSTED_COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 filter grayscale transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-400/10 flex items-center justify-center font-black text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                {company.logo}
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
