import React from 'react';
import Link from 'next/link';

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8] px-6 py-20">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <Link href={"/" + locale} className="text-sm text-[#94948D] hover:text-[#C9A45C]">&larr; Back to Home</Link>
          <h1 className="font-serif text-4xl font-bold text-[#C9A45C]">Request a Quote</h1>
          <p className="text-lg text-[#C8C5BC]">Submit your inquiry to our trade desk. We typically respond within 24 hours.</p>
        </div>
        <div className="rounded-lg border border-[#303331] bg-[#171918] p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94948D]">Full Name</label>
              <input type="text" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-3 text-sm text-[#F4F1E8] placeholder-[#94948D] focus:border-[#C9A45C] focus:outline-none" placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94948D]">Company</label>
              <input type="text" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-3 text-sm text-[#F4F1E8] placeholder-[#94948D] focus:border-[#C9A45C] focus:outline-none" placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94948D]">Email</label>
              <input type="email" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-3 text-sm text-[#F4F1E8] placeholder-[#94948D] focus:border-[#C9A45C] focus:outline-none" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#94948D]">Phone</label>
              <input type="tel" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-3 text-sm text-[#F4F1E8] placeholder-[#94948D] focus:border-[#C9A45C] focus:outline-none" placeholder="+1 234 567 8900" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#94948D]">Product Interest</label>
            <select className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-3 text-sm text-[#F4F1E8] focus:border-[#C9A45C] focus:outline-none">
              <option>Gold Bars</option>
              <option>Gold Nuggets</option>
              <option>Gold Dust</option>
              <option>Multiple Products</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#94948D]">Message</label>
            <textarea rows={5} className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-3 text-sm text-[#F4F1E8] placeholder-[#94948D] focus:border-[#C9A45C] focus:outline-none" placeholder="Describe your requirements..."></textarea>
          </div>
          <button className="w-full rounded bg-[#C9A45C] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors">
            Submit Quote Request
          </button>
        </div>
        <div className="text-center space-y-2 text-sm text-[#94948D]">
          <p>Prefer direct contact?</p>
          <div className="flex justify-center gap-6">
            <a href="tel:+12029307553" className="text-[#C9A45C] hover:underline">+1 202 930 7553</a>
            <a href="https://wa.me/12029307553" target="_blank" rel="noopener noreferrer" className="text-[#34D399] hover:underline">WhatsApp</a>
            <a href="mailto:info@minoraminingexperts.com" className="text-[#F4F1E8] hover:underline">info@minoraminingexperts.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}