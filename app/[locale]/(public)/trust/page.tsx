import React from 'react';
import Link from 'next/link';

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8] px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <Link href={/} className="text-xs uppercase tracking-widest text-[#C9A45C] hover:underline">? Back to Home</Link>
          <h1 className="font-serif text-4xl font-bold text-[#F4F1E8]">Trust & Compliance Center</h1>
          <p className="text-[#C8C5BC] max-w-2xl">Official documentary evidence registry. Verified licenses, legal registrations, and assay protocols.</p>
        </div>

        <div className="rounded-xl border border-[#303331] bg-[#171918] p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#303331] pb-4">
            <span className="text-sm font-semibold text-[#F4F1E8]">Documentary Verification Ledger</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-[#222523] text-[#60A5FA]">Pre-Launch Discovery Baseline</span>
          </div>

          <div className="space-y-4 text-sm text-[#C8C5BC]">
            <div className="p-4 rounded-lg bg-[#0F1010] border border-[#303331] flex justify-between items-center">
              <div>
                <div className="font-medium text-[#F4F1E8]">Mining & Exploration Concession License</div>
                <div className="text-xs text-[#94948D]">Issuing Authority: Regional Mining Directorate • Ref: MIN-LIC-2026-001</div>
              </div>
              <span className="text-xs text-[#FBBF24] font-medium">[Pending Verification]</span>
            </div>

            <div className="p-4 rounded-lg bg-[#0F1010] border border-[#303331] flex justify-between items-center">
              <div>
                <div className="font-medium text-[#F4F1E8]">Company Registration & Certificate of Incorporation</div>
                <div className="text-xs text-[#94948D]">Issuing Authority: Registrar of Companies • Established 12 January 2016</div>
              </div>
              <span className="text-xs text-[#FBBF24] font-medium">[Pending Verification]</span>
            </div>

            <div className="p-4 rounded-lg bg-[#0F1010] border border-[#303331] flex justify-between items-center">
              <div>
                <div className="font-medium text-[#F4F1E8]">Commercial Gold Export Clearance & Customs Permit</div>
                <div className="text-xs text-[#94948D]">Issuing Authority: Ministry of Mining & Trade Authority • Ref: MIN-EXP-2026-104</div>
              </div>
              <span className="text-xs text-[#FBBF24] font-medium">[Pending Verification]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
