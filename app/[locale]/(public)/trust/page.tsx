import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Info, ShieldAlert } from 'lucide-react';

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8]">
      <div className="relative border-b border-white/5 bg-[#0F1010] px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.05)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-7xl space-y-6 relative z-10">
          <Link href={"/" + locale} className="inline-flex items-center gap-2 text-sm text-[#94948D] hover:text-[#C9A45C] transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F4F1E8]">Trust &amp; Verification Center</h1>
            <p className="text-xl text-[#C8C5BC] font-light leading-relaxed">
              Transparency is the foundation of institutional gold trading. All documentation is subject to rigorous independent verification.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="glass-panel border-l-4 border-l-[#C9A45C] rounded-r-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-8 w-8 rounded-full bg-[#C9A45C]/10 flex items-center justify-center shrink-0">
                <Info className="h-5 w-5 text-[#C9A45C]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-[#F4F1E8] tracking-wide uppercase">Verification Policy</h3>
                <p className="text-[#C8C5BC] font-light leading-relaxed">
                  In compliance with our anti-fraud and strict KYC/AML guidelines, legal documents, assay certificates, and export licenses are currently pending independent verification. Authentic evidence will be published here upon attestation by our legal administrators.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Mining License', description: 'Official government-issued documentation authorizing mineral extraction operations.' },
              { title: 'Export Permit', description: 'Authorized permits allowing the international transport and sale of precious metals.' },
              { title: 'Assay Certification', description: 'Independent laboratory reports certifying the purity and weight of our gold products.' },
              { title: 'Responsible Sourcing Policy', description: 'Our commitment to ethical mining, conflict-free zones, and environmental standards.' },
            ].map((doc, idx) => (
              <div key={doc.title} className="glass-card rounded-2xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                <div className="flex items-start justify-between border-b border-white/5 pb-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#F4F1E8]">{doc.title}</h3>
                    <p className="text-sm text-[#94948D] leading-relaxed">{doc.description}</p>
                  </div>
                  <FileText className="h-6 w-6 text-[#94948D] shrink-0 opacity-50" />
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 rounded-lg p-4 border border-white/5">
                  <ShieldAlert className="h-5 w-5 text-[#C8C5BC]" />
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-[#94948D] font-semibold mb-1">Status</div>
                    <div className="text-sm text-[#F4F1E8]">Pending Verification</div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#94948D] animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/5">
            <p className="text-[#94948D]">
              Questions about our compliance and verification process? Contact our legal team at{" "}
              <a href="mailto:info@minoraminingexperts.com" className="text-[#C9A45C] hover:text-[#E0C98C] hover:underline transition-colors font-medium">info@minoraminingexperts.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}