'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';

export interface BankLogoItem {
  name: string;
  code: string;
  renderLogo: () => React.ReactNode;
}

export const PARTNER_BANKS: BankLogoItem[] = [
  {
    name: 'Bank of America',
    code: 'BofA',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#E11B22" />
        <path d="M8 12H32M8 18H32M8 24H32M8 28H32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="22" y="10" width="12" height="20" fill="#002D62" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Citibank',
    code: 'CITI',
    renderLogo: () => (
      <svg className="w-12 h-9 sm:w-16 sm:h-12" viewBox="0 0 60 30" fill="none">
        <path d="M8 20C18 6 42 6 52 20" stroke="#EE2724" strokeWidth="6" strokeLinecap="round" />
        <text x="10" y="24" fill="#002D62" fontSize="18" fontWeight="900" fontFamily="sans-serif">citi</text>
      </svg>
    ),
  },
  {
    name: 'HSBC',
    code: 'HSBC',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#DB0011" />
        <polygon points="20,6 34,20 20,34 6,20" fill="white" />
        <polygon points="20,6 6,20 6,6" fill="#DB0011" />
        <polygon points="20,6 34,20 34,6" fill="#DB0011" />
        <polygon points="20,34 6,20 6,34" fill="#DB0011" />
        <polygon points="20,34 34,20 34,34" fill="#DB0011" />
      </svg>
    ),
  },
  {
    name: 'DBS Bank',
    code: 'DBS',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#FF0000" />
        <path d="M10 10L30 30M30 10L10 30" stroke="black" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 6L34 20L20 34L6 20Z" fill="white" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: 'IDB Bank',
    code: 'IDB',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#004A80" />
        <path d="M8 19C8 12.5 13.5 7 20 7C26.5 7 32 12.5 32 19" stroke="#FDB913" strokeWidth="5" />
        <text x="9" y="28" fill="white" fontSize="13" fontWeight="900" fontFamily="sans-serif">IDB</text>
      </svg>
    ),
  },
  {
    name: 'Bank Leumi',
    code: 'LEUMI',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#0072CE" />
        <path d="M6 20Q20 8 34 20Q20 32 6 20Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Standard Chartered',
    code: 'SC',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#007A33" />
        <path d="M8 15C15 8 25 8 32 15C25 22 15 22 8 15Z" fill="#0099FF" />
        <path d="M8 25C15 18 25 18 32 25C25 32 15 32 8 25Z" fill="#007A33" stroke="white" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'BNP Paribas',
    code: 'BNP',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#00965E" />
        <circle cx="13" cy="13" r="4" fill="white" />
        <circle cx="27" cy="13" r="4" fill="white" />
        <circle cx="20" cy="27" r="4" fill="white" />
        <path d="M10 30L30 10" stroke="white" strokeWidth="3" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    name: 'Santander',
    code: 'SAN',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#EC0000" />
        <path d="M20 6C15 13 10 18 10 25C10 30 14.5 34 20 34C25.5 34 30 30 30 25C30 18 25 13 20 6Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'BBVA',
    code: 'BBVA',
    renderLogo: () => (
      <svg className="w-12 h-9 sm:w-16 sm:h-12" viewBox="0 0 50 30" fill="none">
        <rect width="50" height="30" rx="8" fill="#1464A5" />
        <text x="4" y="21" fill="white" fontSize="16" fontWeight="900" fontFamily="sans-serif">BBVA</text>
      </svg>
    ),
  },
  {
    name: 'Deutsche Bank AG',
    code: 'DB',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#0018A8" />
        <rect x="8" y="8" width="24" height="24" stroke="white" strokeWidth="3.5" fill="none" />
        <path d="M10 30L30 10" stroke="white" strokeWidth="3.5" />
      </svg>
    ),
  },
  {
    name: 'Citibanamex',
    code: 'CBNX',
    renderLogo: () => (
      <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#002D62" />
        <circle cx="20" cy="20" r="10" fill="#EE2724" />
        <path d="M20 6V34M6 20H34" stroke="white" strokeWidth="3" />
      </svg>
    ),
  },
];

export default function PartnerBanks() {
  return (
    <section id="partner-banks" className="py-14 sm:py-20 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-[11px] sm:text-xs font-bold uppercase tracking-wider font-mono inline-flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227]" />
            Correspondent Banking Channels & Networks
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
            Facilitated Through Global Banking Institutions
          </h3>
          <p className="text-xs sm:text-base text-[#555555]">
            Coordinating SBLC, SLOC, and Trade Instruments across top-tier international banking channels.
          </p>
        </div>

        {/* Responsive Banking Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
          {PARTNER_BANKS.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -5, borderColor: '#C9A227' }}
              className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 shadow-md hover:shadow-2xl flex flex-col items-center justify-between text-center min-h-[140px] sm:min-h-[190px] transition-all group cursor-pointer"
            >
              {/* Responsive Brand Logo SVG */}
              <div className="mb-1.5 sm:mb-2 transform group-hover:scale-110 transition-transform flex items-center justify-center h-12 sm:h-16 w-full">
                {bank.renderLogo()}
              </div>

              <div>
                <span className="text-xs sm:text-base font-extrabold text-[#1A1A1A] group-hover:text-[#0B5D4B] transition-colors leading-tight block">
                  {bank.name}
                </span>

                <span className="text-[9px] sm:text-[11px] font-bold text-[#0B5D4B] bg-[#0B5D4B]/10 px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider mt-1.5 sm:mt-2 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227]" /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
