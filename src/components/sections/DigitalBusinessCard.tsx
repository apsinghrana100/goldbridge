'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Download, Share2, MessageSquare, ShieldCheck, QrCode, Check, Copy } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';

export default function DigitalBusinessCard() {
  const [copied, setCopied] = useState(false);

  // Generate .vcf vCard file string dynamically
  const generateVCardData = () => {
    return `BEGIN:VCARD
VERSION:3.0
FN:Mr. Mitesh Mehta
TITLE:Senior Business Consultant
ORG:Gold Bridge Capital Solution
TEL;TYPE=CELL,VOICE:${COMPANY_DETAILS.phoneClean}
EMAIL;TYPE=WORK,INTERNET:${COMPANY_DETAILS.email}
URL:https://goldbridgecapital.com
NOTE:Trade Finance & Banking Consultancy - SBLC/SLOC Facilitation
END:VCARD`;
  };

  const handleDownloadVCard = () => {
    const vcardData = generateVCardData();
    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Mitesh_Mehta_GoldBridge.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${COMPANY_DETAILS.consultantName} - ${COMPANY_DETAILS.name}`,
        text: `Connect with ${COMPANY_DETAILS.consultantName}, ${COMPANY_DETAILS.consultantTitle} at ${COMPANY_DETAILS.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="business-card" className="py-24 bg-[#F8FAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Executive Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Digital Business Card
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            Save contact details directly to your mobile phone in one tap or scan the QR code.
          </p>
        </div>

        {/* Card Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#C9A227]/40 shadow-2xl relative overflow-hidden"
        >
          {/* Top Decorative Emerald Header Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-emerald-gradient" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left Avatar & Consultant Info */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                <div className="w-24 h-24 rounded-2xl bg-emerald-gradient p-1 shadow-xl flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
                    alt={COMPANY_DETAILS.consultantName}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B5D4B]">
                    {COMPANY_DETAILS.consultantName}
                  </h3>
                  <p className="text-sm font-bold text-[#C9A227] uppercase tracking-wider font-mono">
                    {COMPANY_DETAILS.consultantTitle}
                  </p>
                  <p className="text-xs text-[#555555] font-semibold mt-1">
                    {COMPANY_DETAILS.name}
                  </p>
                </div>
              </div>

              {/* Contact Information List */}
              <div className="space-y-3 pt-2 text-sm text-[#1A1A1A]">
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-[#0B5D4B] transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-bold">{COMPANY_DETAILS.phone}</span>
                </a>

                <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-[#0B5D4B] transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-bold">{COMPANY_DETAILS.email}</span>
                </a>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#555555]">goldbridgecapital.com</span>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <button
                  onClick={handleDownloadVCard}
                  className="px-4 py-3 rounded-xl bg-[#0B5D4B] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-[#074336] transition-all"
                >
                  <Download className="w-4 h-4 text-[#C9A227]" />
                  <span>Save Contact</span>
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="px-4 py-3 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#0B5D4B] hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#22C55E] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-emerald-600 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="px-4 py-3 rounded-xl bg-slate-100 text-[#1A1A1A] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-200 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#0B5D4B]" />
                  <span>Email</span>
                </a>

                <button
                  onClick={handleShare}
                  className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl border border-slate-300 text-[#555555] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Link Copied!' : 'Share Digital Card'}</span>
                </button>
              </div>

            </div>

            {/* Right QR Code Section */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#F8FAF8] rounded-2xl border border-slate-200 space-y-4">
              <span className="text-xs font-bold text-[#0B5D4B] uppercase tracking-wider flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-[#C9A227]" />
                <span>Scan or Tap QR</span>
              </span>

              {/* Interactive QR Code Visual */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={handleDownloadVCard}
                className="p-4 bg-white rounded-2xl border border-[#C9A227]/50 shadow-lg cursor-pointer group relative"
              >
                {/* SVG Simulated Clean QR Code Visual */}
                <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none">
                  {/* Position detection patterns */}
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="#0B5D4B" />
                  <rect x="9" y="9" width="20" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="13" y="13" width="12" height="12" rx="1" fill="#C9A227" />

                  <rect x="67" y="5" width="28" height="28" rx="4" fill="#0B5D4B" />
                  <rect x="71" y="9" width="20" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="75" y="13" width="12" height="12" rx="1" fill="#C9A227" />

                  <rect x="5" y="67" width="28" height="28" rx="4" fill="#0B5D4B" />
                  <rect x="9" y="71" width="20" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="13" y="75" width="12" height="12" rx="1" fill="#C9A227" />

                  {/* QR Data Grid Matrix */}
                  <rect x="40" y="8" width="6" height="6" fill="#0B5D4B" />
                  <rect x="52" y="8" width="6" height="6" fill="#0B5D4B" />
                  <rect x="40" y="20" width="6" height="6" fill="#C9A227" />
                  <rect x="48" y="26" width="6" height="6" fill="#0B5D4B" />
                  <rect x="8" y="40" width="6" height="6" fill="#0B5D4B" />
                  <rect x="20" y="48" width="6" height="6" fill="#C9A227" />
                  <rect x="40" y="40" width="20" height="20" rx="4" fill="#0B5D4B" />
                  <rect x="44" y="44" width="12" height="12" rx="2" fill="#C9A227" />
                  <rect x="68" y="40" width="6" height="6" fill="#0B5D4B" />
                  <rect x="80" y="48" width="6" height="6" fill="#0B5D4B" />
                  <rect x="40" y="68" width="6" height="6" fill="#C9A227" />
                  <rect x="52" y="76" width="6" height="6" fill="#0B5D4B" />
                  <rect x="68" y="68" width="6" height="6" fill="#0B5D4B" />
                  <rect x="80" y="80" width="12" height="12" rx="2" fill="#0B5D4B" />
                </svg>

                <div className="absolute inset-0 bg-[#0B5D4B]/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs p-2">
                  <span>Tap to Download vCard</span>
                </div>
              </motion.div>

              <p className="text-[11px] text-[#555555] max-w-xs font-semibold leading-tight">
                Scan or click to automatically save <strong>{COMPANY_DETAILS.consultantName}</strong> into your mobile address book.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
