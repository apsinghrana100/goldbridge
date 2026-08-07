'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, Map } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(
    `Trade Finance Inquiry from ${formData.name || 'Client'} - ${formData.company || ''}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#F8FAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B5D4B]/10 border border-[#0B5D4B]/20 text-[#0B5D4B] text-xs font-bold uppercase tracking-wider">
            Initiate Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Connect With Our Banking Consultants
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            Schedule a confidential discussion regarding your SBLC, SLOC, or Trade Finance facilitation requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#C9A227]/40 shadow-2xl relative"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center mx-auto border border-[#0B5D4B]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#C9A227]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B5D4B]">Consultation Request Received</h3>
                <p className="text-[#555555] max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Senior consultant <strong>{COMPANY_DETAILS.consultantName}</strong> will review your trade requirements and contact you within 2 business hours.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoLink}
                    className="px-5 py-2.5 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] font-bold text-xs flex items-center gap-1.5 hover:bg-[#0B5D4B] hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4 text-[#C9A227]" />
                    <span>Send Email Directly</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#0B5D4B] text-white font-bold text-xs shadow-md hover:bg-[#074336] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Singhania"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-slate-300 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global Logistics"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-slate-300 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-slate-300 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-slate-300 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Trade Requirement Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify your SBLC / SLOC requirement, deal size, commodity type, and issuing bank preference..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-slate-300 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 transition-all placeholder-slate-400"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0B5D4B] to-[#074336] text-white font-bold text-sm shadow-xl shadow-[#0B5D4B]/20 flex items-center justify-center gap-2 hover:from-[#074336] hover:to-[#0B5D4B] transition-all"
                >
                  <span>Submit Confidential Consultation</span>
                  <Send className="w-4 h-4 text-[#C9A227]" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right Office Info & Google Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Info Card */}
            <div className="gold-bridge-card p-6 space-y-5">
              <h4 className="text-lg font-extrabold text-[#0B5D4B] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                <span>Executive Office Details</span>
              </h4>

              <div className="space-y-4 text-sm text-[#1A1A1A]">
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="flex items-start gap-3 hover:text-[#0B5D4B] transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#555555] block font-semibold">Direct Phone</span>
                    <strong className="text-[#0B5D4B] text-base">{COMPANY_DETAILS.phone}</strong>
                  </div>
                </a>

                <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-start gap-3 hover:text-[#0B5D4B] transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#555555] block font-semibold">Official Email</span>
                    <strong className="text-[#0B5D4B] text-[#1A1A1A]">{COMPANY_DETAILS.email}</strong>
                  </div>
                </a>

                <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#0B5D4B] transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#555555] block font-semibold">Instant WhatsApp</span>
                    <strong className="text-[#22C55E]">Chat Directly (+91 98242 91055)</strong>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#555555] block font-semibold">Working Hours</span>
                    <span>{COMPANY_DETAILS.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0B5D4B]/10 text-[#0B5D4B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#555555] block font-semibold">Office Address</span>
                    <span>{COMPANY_DETAILS.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Google Map Interactive Container */}
            <div className="gold-bridge-card p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B5D4B] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Map className="w-4 h-4 text-[#C9A227]" />
                  <span>Global Office Location</span>
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DETAILS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0B5D4B] hover:underline"
                >
                  Open Maps ↗
                </a>
              </div>

              <div className="h-44 w-full rounded-xl bg-[#0B5D4B]/90 overflow-hidden relative flex items-center justify-center border border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                <div className="relative z-10 text-center text-white space-y-2 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227] text-[#0B5D4B] flex items-center justify-center mx-auto shadow-md animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-extrabold">{COMPANY_DETAILS.name}</h5>
                  <p className="text-[11px] text-[#DFB83B] font-mono">International Business & Banking Zone</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
