'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';
import GoldBridgeLogo from '@/components/ui/GoldBridgeLogo';

const NAV_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'How We Work', href: '#process' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'About', href: '#about' },
  { name: 'Digital Card', href: '#business-card' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-navbar py-3 shadow-md'
          : 'bg-white/95 py-3.5 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Gold Bridge Crown / Lotus Logo */}
          <Link href="#hero" className="group">
            <GoldBridgeLogo size={46} showText={true} textColor="#0B5D4B" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F8FAF8] p-1.5 rounded-full border border-slate-200">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 text-sm font-semibold text-[#1A1A1A] hover:text-[#0B5D4B] hover:bg-white rounded-full transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs (Call Now & WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="px-4 py-2 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B] hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Call Now</span>
            </a>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#22C55E] text-white hover:bg-emerald-600 transition-all text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F8FAF8] border border-slate-200 text-[#0B5D4B] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-navbar border-t border-slate-200 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#1A1A1A] hover:bg-[#0B5D4B]/10 hover:text-[#0B5D4B] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="w-full text-center py-3 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>

                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl bg-[#22C55E] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
