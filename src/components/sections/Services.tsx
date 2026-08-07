'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FileText, Building2, TrendingUp, CheckCircle2, Globe2, UserCheck, Workflow, ArrowRight, X, Phone } from 'lucide-react';
import { SERVICES_DATA, ServiceItem, COMPANY_DETAILS } from '@/data/goldBridgeData';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  FileText,
  Building2,
  TrendingUp,
  CheckCircle2,
  Globe2,
  UserCheck,
  Workflow,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#F8FAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Professional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Institutional Banking Instrument Facilitation
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            We provide documentation guidance and banking channel coordination for BG (Bank Guarantee), PBG (Performance BG), EMD (Earnest Money Deposit), SBLC, and SLOC to support trade execution.
          </p>
        </div>

        {/* 8 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || ShieldCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedService(service)}
                className="gold-bridge-card p-6 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 flex items-center justify-center text-[#0B5D4B] group-hover:bg-[#0B5D4B] group-hover:text-[#C9A227] transition-all mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono text-[#C9A227] font-bold uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>

                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#0B5D4B] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#555555] text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B5D4B] group-hover:translate-x-1 transition-transform">
                  <span>View Consultancy Scope</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-xl w-full border border-[#C9A227]/40 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest block font-mono mb-1">
                  {selectedService.category} Advisory
                </span>

                <h3 className="text-2xl font-extrabold text-[#0B5D4B] mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-[#555555] text-sm leading-relaxed mb-6">
                  {selectedService.fullDesc}
                </p>

                <div className="space-y-3 mb-6 bg-[#F8FAF8] p-4 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold text-[#1A1A1A] block mb-2">
                    Key Advisory Capabilities:
                  </span>
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B5D4B] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-[#555555] italic">
                    Strict compliance with international banking standards.
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B5D4B] text-white font-bold text-sm shadow-md hover:bg-[#074336] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
