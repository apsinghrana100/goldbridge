'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Lock, Scale, Building2 } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            About Our Consultancy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Your Trusted Global Trade Facilitator
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            Gold Bridge Capital Solution operates under the motto <em>"{COMPANY_DETAILS.motto}"</em> to help international traders navigate complex banking instrument channels.
          </p>
        </div>

        {/* Grid Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C9A227]/10 text-[#0B5D4B] text-xs font-bold font-mono">
              <Building2 className="w-4 h-4 text-[#C9A227]" />
              ESTABLISHED TRADE CONSULTANCY
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B5D4B]">
              Empowering International Trade Without Friction
            </h3>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              Gold Bridge Capital Solution is a premier Trade Finance & Banking Consultancy firm. We specialize exclusively in assisting tender bidders, project contractors, importers, exporters, manufacturers, and merchant traders in obtaining Bank Guarantees (BG), Performance Bank Guarantees (PBG), Earnest Money Deposit Guarantees (EMD), Standby Letters of Credit (SBLC), and Letters of Credit (SLOC) through verified international banking channels.
            </p>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              Our firm <strong>does not provide loans or lending products</strong>. Instead, we deliver specialized documentation auditing, contractual terms review, and direct channel coordination to guarantee your trade instruments comply strictly with international banking standards (UCP 600).
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-slate-200 text-center">
                <ShieldCheck className="w-6 h-6 text-[#0B5D4B] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[#1A1A1A]">Professional Consultants</h4>
                <p className="text-[11px] text-[#555555] mt-1">Deep institutional banking experience</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-slate-200 text-center">
                <Lock className="w-6 h-6 text-[#C9A227] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[#1A1A1A]">Confidential Services</h4>
                <p className="text-[11px] text-[#555555] mt-1">Strict non-disclosure protection</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-slate-200 text-center">
                <Scale className="w-6 h-6 text-[#0B5D4B] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[#1A1A1A]">Ethical Practice</h4>
                <p className="text-[11px] text-[#555555] mt-1">Transparent & compliant guidance</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="gold-bridge-card p-4 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600"
                alt="Corporate Handshake & Banking Partnership"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="p-6 bg-white space-y-2">
                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider block font-mono">
                  OUR GUARANTEE
                </span>
                <h4 className="text-base font-extrabold text-[#0B5D4B]">
                  Uncompromising Institutional Integrity
                </h4>
                <p className="text-xs text-[#555555]">
                  We protect your trade capital and commercial reputation by adhering to global SWIFT standards and strict banking protocols.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gold-bridge-card p-8 bg-[#F8FAF8]">
            <div className="w-12 h-12 rounded-2xl bg-[#0B5D4B] text-[#C9A227] flex items-center justify-center mb-6 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#0B5D4B] mb-3">Our Mission</h4>
            <p className="text-[#555555] text-sm leading-relaxed">
              To empower global traders, importers, and exporters with reliable, high-speed banking instrument facilitation and meticulous documentation guidance, enabling frictionless international commerce.
            </p>
          </div>

          <div className="gold-bridge-card p-8 bg-[#F8FAF8]">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A227] text-white flex items-center justify-center mb-6 shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#1A1A1A] mb-3">Our Vision</h4>
            <p className="text-[#555555] text-sm leading-relaxed">
              To be recognized globally as the most trusted and transparent trade finance consultancy firm, bridging buyers and issuing banking channels with absolute integrity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
