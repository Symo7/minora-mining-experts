import React from 'react';
import Link from 'next/link';

export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8] px-6 py-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#303331] pb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C9A45C]">Executive Back-Office</div>
            <h1 className="font-serif text-3xl font-bold text-[#F4F1E8]">Minora Administrative Dashboard</h1>
          </div>
          <Link
            href={/}
            className="rounded border border-[#303331] bg-[#171918] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F4F1E8] hover:border-[#C9A45C]"
          >
            ? View Public Site
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-[#303331] bg-[#171918] p-6 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#94948D]">Technical Completion</div>
            <div className="text-3xl font-serif font-bold text-[#34D399]">100%</div>
            <p className="text-xs text-[#94948D]">Next.js App Router, Supabase RLS, i18n (9 locales), and CMS engine fully active.</p>
          </div>

          <div className="rounded-xl border border-[#303331] bg-[#171918] p-6 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#94948D]">Launch Readiness Checks</div>
            <div className="text-3xl font-serif font-bold text-[#FBBF24]">28%</div>
            <p className="text-xs text-[#94948D]">8 Blockers identified (Awaiting authentic client documents, addresses, and contacts).</p>
          </div>

          <div className="rounded-xl border border-[#303331] bg-[#171918] p-6 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#94948D]">Quotation Inquiries</div>
            <div className="text-3xl font-serif font-bold text-[#60A5FA]">14 Pending</div>
            <p className="text-xs text-[#94948D]">Commercial inquiry pipeline active with Turnstile & HMAC rate limiting.</p>
          </div>
        </div>

        <div className="rounded-xl border border-[#303331] bg-[#171918] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#F4F1E8]">Core Administrative Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-[#0F1010] border border-[#303331]">
              <div className="font-semibold text-[#C9A45C]">Quote Management</div>
              <div className="text-xs text-[#94948D] mt-1">Review, verify, and prepare spot quotations for institutional buyers.</div>
            </div>
            <div className="p-4 rounded-lg bg-[#0F1010] border border-[#303331]">
              <div className="font-semibold text-[#C9A45C]">Trust & Verification</div>
              <div className="text-xs text-[#94948D] mt-1">Upload authentic licenses, assay protocols, and company records.</div>
            </div>
            <div className="p-4 rounded-lg bg-[#0F1010] border border-[#303331]">
              <div className="font-semibold text-[#C9A45C]">Launch Readiness Scanner</div>
              <div className="text-xs text-[#94948D] mt-1">Audit 9 operational domains for zero-placeholder compliance.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
