'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';
import GoldBridgeLogo from '@/components/ui/GoldBridgeLogo';

export default function Footer() {
  return (
    <footer className="bg-[#074336] text-white pt-20 pb-24 lg:pb-12 border-t-4 border-[#C9A227] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#0B5D4B]">
          
          {/* Col 1 & 2: Official Branding & Motto */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="#hero">
              <GoldBridgeLogo size={52} showText={true} textColor="gold" />
            </Link>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Your trusted partner in global commerce. Facilitating BG, PBG, EMD, SBLC, SLOC, FDI, and Private Placement Programs through premier international banking channels with complete documentation guidance.
            </p>

            <div className="p-4 rounded-2xl bg-[#0B5D4B]/60 border border-[#C9A227]/30 text-xs text-slate-200">
              <span className="font-bold text-[#C9A227] block mb-1">Senior Business Consultant:</span>
              <p className="font-semibold text-white">{COMPANY_DETAILS.consultantName}</p>
              <p className="text-[11px] text-slate-300">{COMPANY_DETAILS.phone} • {COMPANY_DETAILS.email}</p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#C9A227] uppercase tracking-widest font-mono">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              <li><Link href="#hero" className="hover:text-[#C9A227] transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">Services</Link></li>
              <li><Link href="#partner-banks" className="hover:text-[#C9A227] transition-colors">Banking Channels</Link></li>
              <li><Link href="#process" className="hover:text-[#C9A227] transition-colors">How We Work</Link></li>
              <li><Link href="#why-us" className="hover:text-[#C9A227] transition-colors">Why Choose Us</Link></li>
              <li><Link href="#about" className="hover:text-[#C9A227] transition-colors">About Us</Link></li>
              <li><Link href="#business-card" className="hover:text-[#C9A227] transition-colors">Digital Business Card</Link></li>
              <li><Link href="#contact" className="hover:text-[#C9A227] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Key Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#C9A227] uppercase tracking-widest font-mono">Structured Offerings</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">BG (Bank Guarantee)</Link></li>
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">PBG (Performance BG)</Link></li>
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">EMD Guarantee</Link></li>
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">FDI (Foreign Direct Inv.)</Link></li>
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">PPP (Private Placement)</Link></li>
              <li><Link href="#services" className="hover:text-[#C9A227] transition-colors">SBLC / SLOC Facilitation</Link></li>
            </ul>
          </div>

          {/* Col 5: Direct Action Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#C9A227] uppercase tracking-widest font-mono">Direct Communication</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30 font-bold hover:bg-[#22C55E] hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+91 98242 91055)</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0B5D4B] text-white border border-[#C9A227]/30 font-bold hover:bg-[#C9A227] hover:text-[#0B5D4B] transition-all"
              >
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0B5D4B]/50 text-slate-200 border border-slate-600 font-bold hover:border-[#C9A227] transition-all"
              >
                <Mail className="w-4 h-4 text-[#C9A227]" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Institutional Regulatory Disclaimer */}
        <div className="my-8 p-4 rounded-2xl bg-[#0B5D4B]/40 border border-[#C9A227]/20 text-[11px] text-slate-300 leading-relaxed">
          <strong className="text-[#C9A227] block mb-1">INSTITUTIONAL CONSULTANCY DISCLAIMER:</strong>
          Gold Bridge Capital Solution is an international Trade & Structured Finance Consultancy firm. We provide expert documentation guidance, contractual audit, and partner channel coordination for BG, PBG, EMD, FDI, PPP, SBLC, and SLOC instruments. <strong>Gold Bridge Capital Solution does not provide loans, lending, or personal financial products.</strong> All banking instruments are issued strictly by licensed partner banks in compliance with international banking protocols (UCP 600).
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Gold Bridge Capital Solution. All rights reserved.</p>
          <p className="text-[11px]">Designed for Global Trade Integrity & Excellence</p>
        </div>

      </div>
    </footer>
  );
}
