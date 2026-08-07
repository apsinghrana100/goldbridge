'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA, FAQItem } from '@/data/goldBridgeData';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAF8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Trade Finance Q&A
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#555555] text-base">
            Get clear, transparent answers regarding SBLC, SLOC, documentation, and banking facilitation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="gold-bridge-card overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1A1A1A] hover:text-[#0B5D4B] transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0B5D4B] flex-shrink-0" />
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1.5 rounded-full bg-slate-100 flex-shrink-0 text-[#0B5D4B]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#555555] text-sm leading-relaxed border-t border-slate-200">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
