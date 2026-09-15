'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/goldBridgeData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeReview = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            What Trade Leaders Say
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            Hear from managing directors and trade heads who rely on our banking instrument facilitation.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="gold-bridge-card p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-[#0B5D4B]/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                  ))}
                  <span className="ml-3 text-xs font-bold text-[#0B5D4B] bg-[#0B5D4B]/10 px-3 py-1 rounded-full font-mono">
                    Verified Transaction Support
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-lg sm:text-2xl font-medium text-[#1A1A1A] leading-relaxed italic">
                  "{activeReview.review}"
                </blockquote>

                {/* Client Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  {activeReview.image ? (
                    <img
                      src={activeReview.image}
                      alt={activeReview.name}
                      className="w-13 h-13 rounded-2xl object-cover border-2 border-[#C9A227] shadow-md"
                    />
                  ) : (
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0B5D4B] to-[#074336] text-[#C9A227] font-extrabold text-base flex items-center justify-center border border-[#C9A227]/40 shadow-md flex-shrink-0 font-mono tracking-wider">
                      {activeReview.name
                        .split(' ')
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-bold text-[#0B5D4B]">
                      {activeReview.name}
                    </h4>
                    <p className="text-xs text-[#555555]">
                      {activeReview.role} • <strong className="text-[#1A1A1A]">{activeReview.company}</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots & Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx
                        ? 'w-8 bg-[#0B5D4B]'
                        : 'w-2.5 bg-slate-300 hover:bg-[#C9A227]'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-100 text-[#0B5D4B] hover:bg-[#0B5D4B] hover:text-white transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-100 text-[#0B5D4B] hover:bg-[#0B5D4B] hover:text-white transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
