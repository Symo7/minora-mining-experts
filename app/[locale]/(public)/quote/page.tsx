import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, LockKeyhole, Mail, Phone } from 'lucide-react';

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8]">
      <div className="relative border-b border-white/5 bg-[#0F1010] px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.08)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-3xl space-y-6 relative z-10 text-center">
          <Link href={"/" + locale} className="inline-flex items-center gap-2 text-sm text-[#94948D] hover:text-[#C9A45C] transition-colors absolute left-0 top-0">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F4F1E8]">Direct Trade Desk</h1>
            <p className="text-xl text-[#C8C5BC] font-light leading-relaxed">
              Submit your inquiry for institutional gold supply. Our trade desk typically responds within 12 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 relative">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#C9A45C]/5 blur-[100px]" />
        <div className="mx-auto max-w-3xl space-y-8 relative z-10">
          
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#94948D] mb-8 pb-4 border-b border-white/5">
              <LockKeyhole className="h-4 w-4 text-[#C9A45C]" />
              Secure Encrypted Channel
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest font-semibold text-[#94948D] group-focus-within:text-[#C9A45C] transition-colors">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[#F4F1E8] placeholder-[#94948D]/50 focus:border-[#C9A45C] focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest font-semibold text-[#94948D] group-focus-within:text-[#C9A45C] transition-colors">Company</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[#F4F1E8] placeholder-[#94948D]/50 focus:border-[#C9A45C] focus:outline-none transition-colors" placeholder="Institution Ltd." />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest font-semibold text-[#94948D] group-focus-within:text-[#C9A45C] transition-colors">Corporate Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[#F4F1E8] placeholder-[#94948D]/50 focus:border-[#C9A45C] focus:outline-none transition-colors" placeholder="john@institution.com" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest font-semibold text-[#94948D] group-focus-within:text-[#C9A45C] transition-colors">Phone (WhatsApp enabled)</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[#F4F1E8] placeholder-[#94948D]/50 focus:border-[#C9A45C] focus:outline-none transition-colors" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest font-semibold text-[#94948D] group-focus-within:text-[#C9A45C] transition-colors">Product Interest</label>
                <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[#F4F1E8] focus:border-[#C9A45C] focus:outline-none transition-colors appearance-none">
                  <option className="bg-[#0F1010]">Refined Gold Bars (Minted/Cast)</option>
                  <option className="bg-[#0F1010]">Natural Gold Nuggets</option>
                  <option className="bg-[#0F1010]">Gold Dust / Dore</option>
                  <option className="bg-[#0F1010]">Corporate Partnership Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest font-semibold text-[#94948D] group-focus-within:text-[#C9A45C] transition-colors">Inquiry Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[#F4F1E8] placeholder-[#94948D]/50 focus:border-[#C9A45C] focus:outline-none transition-colors resize-none" placeholder="Please specify volume, destination port, and specific compliance requirements..."></textarea>
              </div>

              <button type="button" className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#C9A45C] to-[#E0C98C] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#080908] hover:shadow-[0_0_30px_rgba(201,164,92,0.3)] hover:scale-[1.02] transition-all duration-300">
                Submit Inquiry
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <div className="text-center md:text-left space-y-1">
              <h4 className="font-serif text-lg font-bold text-[#F4F1E8]">Immediate Assistance</h4>
              <p className="text-sm text-[#94948D]">Connect directly with our senior trade officers.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:+12029307553" className="flex items-center gap-2 text-sm font-medium text-[#C9A45C] hover:text-[#E0C98C] transition-colors">
                <Phone className="h-4 w-4" /> +1 202 930 7553
              </a>
              <div className="hidden sm:block h-4 w-px bg-white/10" />
              <a href="mailto:info@minoraminingexperts.com" className="flex items-center gap-2 text-sm font-medium text-[#F4F1E8] hover:text-[#C9A45C] transition-colors">
                <Mail className="h-4 w-4" /> Email Desk
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}