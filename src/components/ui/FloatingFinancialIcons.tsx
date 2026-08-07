'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, DollarSign, Zap, BarChart3, Lock } from 'lucide-react';

const icons = [
  { Component: TrendingUp, top: '15%', left: '8%', delay: 0, duration: 9 },
  { Component: DollarSign, top: '25%', right: '10%', delay: 1, duration: 11 },
  { Component: ShieldCheck, top: '55%', left: '5%', delay: 2, duration: 10 },
  { Component: Zap, top: '70%', right: '7%', delay: 1.5, duration: 12 },
  { Component: BarChart3, top: '85%', left: '12%', delay: 0.5, duration: 13 },
  { Component: Lock, top: '40%', right: '4%', delay: 2.5, duration: 9.5 },
];

export default function FloatingFinancialIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, idx) => {
        const { Component } = item;
        return (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            initial={{ y: 0, opacity: 0.15 }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 8, -8, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
            className="p-3.5 rounded-2xl bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 backdrop-blur-sm text-teal-600 dark:text-teal-400"
          >
            <Component className="w-5 h-5" />
          </motion.div>
        );
      })}
    </div>
  );
}
