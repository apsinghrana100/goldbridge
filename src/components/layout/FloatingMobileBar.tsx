'use client';

import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';

export default function FloatingMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        <a
          href={COMPANY_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 rounded-xl bg-[#22C55E] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${COMPANY_DETAILS.phoneClean}`}
          className="py-2.5 px-2 rounded-xl bg-[#0B5D4B] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
          <span>Call Now</span>
        </a>

        <a
          href={`mailto:${COMPANY_DETAILS.email}`}
          className="py-2.5 px-2 rounded-xl bg-[#F8FAF8] border border-slate-300 text-[#1A1A1A] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Mail className="w-4 h-4 text-[#0B5D4B] flex-shrink-0" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
