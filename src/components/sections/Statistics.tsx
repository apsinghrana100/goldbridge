'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS_DATA, StatItem } from '@/data/landingData';

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // EaseOutExpo formula for silky smooth deceleration
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Statistics() {
  return (
    <section id="stats" className="py-20 relative overflow-hidden bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white shadow-2xl">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-teal-500/20">
          {STATS_DATA.map((stat: StatItem, index: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`flex flex-col items-center text-center ${index > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 flex items-baseline">
                {stat.prefix && <span className="text-emerald-400">{stat.prefix}</span>}
                <AnimatedCounter target={stat.value} />
                {stat.suffix && <span className="text-teal-400">{stat.suffix}</span>}
              </div>

              <h4 className="text-lg font-bold text-teal-200 mb-1">{stat.label}</h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
