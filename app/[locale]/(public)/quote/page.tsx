import React from 'react';
import Link from 'next/link';

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8] px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3">
          <Link href={/} className="text-xs uppercase tracking-widest text-[#C9A45C] hover:underline">? Back to Home</Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4F1E8]">Commercial Quotation Request</h1>
          <p className="text-sm text-[#C8C5BC]">Direct inquiry to Minora's International Trade Desk. Response delivered within 24 business hours.</p>
        </div>

        <div className="rounded-xl border border-[#303331] bg-[#171918] p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Product Form</label>
              <select className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none">
                <option>Gold Bars (LBMA Bullion)</option>
                <option>Natural Gold Nuggets</option>
                <option>Raw Gold / Gold Dust</option>
                <option>Structured Wholesale Contract</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Requested Quantity (kg)</label>
              <input type="number" min="1" defaultValue="5" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Destination Country</label>
              <input type="text" placeholder="e.g. Switzerland, UAE, UK" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Buyer Classification</label>
              <select className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none">
                <option>International Bullion Buyer</option>
                <option>Refinery</option>
                <option>Jewelry Manufacturer</option>
                <option>Corporate Treasury</option>
                <option>Individual Investor</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Business Email</label>
              <input type="email" placeholder="trade@company.com" className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-[#C8C5BC]">Commercial Notes / Delivery Terms</label>
            <textarea rows={3} placeholder="Specify CIF / FOB preferences, port details, or assay requirements..." className="w-full rounded border border-[#303331] bg-[#0F1010] px-4 py-2.5 text-sm text-[#F4F1E8] focus:border-[#C9A45C] outline-none" />
          </div>

          <button
            type="button"
            className="w-full rounded bg-[#C9A45C] py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors"
          >
            Submit Quotation Request
          </button>
        </div>
      </div>
    </div>
  );
}
