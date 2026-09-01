import React from 'react';
import Link from 'next/link';

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8] px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4">
          <Link href={"/" + locale} className="text-sm text-[#94948D] hover:text-[#C9A45C]">&larr; Back to Home</Link>
          <h1 className="font-serif text-4xl font-bold text-[#C9A45C]">Trust &amp; Verification Center</h1>
          <p className="text-lg text-[#C8C5BC] max-w-2xl">Transparency is the foundation of institutional gold trading. All documents below are subject to independent verification.</p>
        </div>
        <div className="rounded-lg border border-[#C9A45C]/30 bg-[#171918] p-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 rounded-full bg-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] text-xs font-bold">!</div>
            <div>
              <h3 className="font-medium text-[#F4F1E8]">Verification Status</h3>
              <p className="text-sm text-[#94948D] mt-1">Document verification is pending. Certificates, licenses, and assay reports will be published here once independently verified. This section intentionally shows placeholder status until authentic evidence is supplied and attested.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Mining License', status: 'Pending Verification' },
            { title: 'Export Permit', status: 'Pending Verification' },
            { title: 'Assay Certification', status: 'Pending Verification' },
            { title: 'Responsible Sourcing Policy', status: 'Pending Verification' },
          ].map((doc) => (
            <div key={doc.title} className="rounded-lg border border-[#303331] bg-[#171918] p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#F4F1E8]">{doc.title}</h3>
              <div className="inline-flex items-center gap-2 rounded border border-[#94948D]/30 bg-[#0F1010] px-3 py-1 text-xs text-[#94948D]">
                {doc.status}
              </div>
              <p className="text-sm text-[#94948D]">This document will be available once verified by an authorized administrator.</p>
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-[#94948D]">
          <p>Questions about our verification process? Contact us at{" "}
            <a href="mailto:info@minoraminingexperts.com" className="text-[#C9A45C] hover:underline">info@minoraminingexperts.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}