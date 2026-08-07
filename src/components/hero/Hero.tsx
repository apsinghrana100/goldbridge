'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, ArrowRight, Award, CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8FAF8] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0B5D4B_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Motto Badge & Category Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B5D4B] text-white text-xs font-bold uppercase tracking-wider shadow-md border border-[#C9A227]/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>"{COMPANY_DETAILS.motto}"</span>
              </motion.div>

              <span className="px-3 py-1.5 rounded-full bg-[#C9A227]/15 text-[#0B5D4B] text-xs font-extrabold uppercase tracking-wider">
                FDI • PPP • SBLC • BG • PBG • EMD Facilitation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.15]">
              Trade & Structured Finance Solutions You Can <span className="text-[#0B5D4B] underline decoration-[#C9A227] decoration-wavy decoration-2">Trust</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized consultancy for <strong className="text-[#0B5D4B]">FDI</strong> (Foreign Direct Investment), <strong className="text-[#0B5D4B]">PPP</strong> (Private Placement Program), <strong className="text-[#0B5D4B]">SBLC / SLOC</strong>, <strong className="text-[#0B5D4B]">BG</strong> (Bank Guarantee), <strong className="text-[#0B5D4B]">PBG</strong> (Performance Bank Guarantee), and <strong className="text-[#0B5D4B]">EMD</strong> (Earnest Money Deposit) Facilitation through trusted international channels.
            </p>

            {/* Structured Finance & Guarantee Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 py-2 max-w-2xl mx-auto lg:mx-0">
              <div className="p-2.5 rounded-2xl bg-white border border-[#C9A227]/40 shadow-sm text-center">
                <span className="text-base font-black text-[#0B5D4B] font-mono block">FDI</span>
                <span className="text-[9px] font-bold text-[#555555] uppercase block truncate">Foreign Direct</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-[#C9A227]/40 shadow-sm text-center">
                <span className="text-base font-black text-[#C9A227] font-mono block">PPP</span>
                <span className="text-[9px] font-bold text-[#555555] uppercase block truncate">Private Place.</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-[#C9A227]/40 shadow-sm text-center">
                <span className="text-base font-black text-[#0B5D4B] font-mono block">SBLC</span>
                <span className="text-[9px] font-bold text-[#555555] uppercase block truncate">Standby LC</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-[#0B5D4B]/40 shadow-sm text-center">
                <span className="text-base font-black text-[#0B5D4B] font-mono block">BG</span>
                <span className="text-[9px] font-bold text-[#555555] uppercase block truncate">Bank Guarantee</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-[#C9A227]/40 shadow-sm text-center">
                <span className="text-base font-black text-[#C9A227] font-mono block">PBG</span>
                <span className="text-[9px] font-bold text-[#555555] uppercase block truncate">Performance BG</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-[#0B5D4B]/40 shadow-sm text-center">
                <span className="text-base font-black text-[#0B5D4B] font-mono block">EMD</span>
                <span className="text-[9px] font-bold text-[#555555] uppercase block truncate">Earnest Money</span>
              </div>
            </div>

            {/* Key Assurance Notice */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#0B5D4B]/20 shadow-sm flex items-center justify-center lg:justify-start gap-3 max-w-xl mx-auto lg:mx-0">
              <ShieldCheck className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
              <p className="text-xs font-semibold text-[#1A1A1A] text-left">
                <strong>Structured Banking & Documentation Advisory</strong> • 100% Channel Coordination. Zero lending or loan products.
              </p>
            </div>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0B5D4B] to-[#074336] hover:from-[#074336] hover:to-[#0B5D4B] shadow-xl shadow-[#0B5D4B]/20 border border-[#C9A227]/30 flex items-center justify-center gap-2 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 text-[#C9A227]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-[#22C55E] hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Now
              </motion.a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#555555] font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5D4B]" />
                <span>Premier International Banks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5D4B]" />
                <span>100% Confidential Process</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5D4B]" />
                <span>Zero-Defect Paperwork</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image & Floating Cards Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Executive Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
                alt="International Cargo Ship and Trade Logistics"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B5D4B]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-mono text-[#C9A227] uppercase tracking-wider block font-bold">
                  "{COMPANY_DETAILS.motto}"
                </span>
                <h4 className="text-lg font-bold">FDI • PPP • SBLC • BG • PBG • EMD</h4>
              </div>
            </motion.div>

            {/* Floating Card 1: FDI / PPP */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -top-6 -left-6 p-4 rounded-2xl bg-white border border-[#C9A227]/40 shadow-xl hidden sm:flex items-center gap-3 z-20"
            >
              <div className="p-2.5 rounded-xl bg-[#0B5D4B] text-[#C9A227]">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#555555] font-bold uppercase tracking-wider block">
                  STRUCTURED FINANCE
                </span>
                <span className="text-sm font-extrabold text-[#0B5D4B]">FDI & PPP Advisory</span>
              </div>
            </motion.div>

            {/* Floating Card 2: SBLC / BG / PBG / EMD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white border border-[#C9A227]/40 shadow-xl hidden sm:flex items-center gap-3 z-20"
            >
              <div className="p-2.5 rounded-xl bg-[#C9A227] text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#555555] font-bold uppercase tracking-wider block">
                  BANKING INSTRUMENT
                </span>
                <span className="text-sm font-extrabold text-[#1A1A1A]">BG, PBG, EMD & SBLC</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
