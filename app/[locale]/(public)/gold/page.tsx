import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight, Scale, Shield } from 'lucide-react';

export default async function GoldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8]">
      <div className="relative border-b border-white/5 bg-[#0F1010] px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,164,92,0.1)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-7xl space-y-6 relative z-10">
          <Link href={"/" + locale} className="inline-flex items-center gap-2 text-sm text-[#94948D] hover:text-[#C9A45C] transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold">Institutional Gold Catalogue</h1>
            <p className="text-xl text-[#C8C5BC] font-light leading-relaxed">
              Premium African gold products, refined to international standards and securely exported to global bullion markets.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Refined Gold Bullion Bars', 
                purity: '99.99%', 
                type: 'Minted / Cast',
                description: 'LBMA-standard refined gold bars available in 1kg, 100g, and standard institutional weights. Accompanied by full assay certification and export documentation.',
                highlight: 'Highest Institutional Demand'
              },
              { 
                title: 'Natural Gold Nuggets', 
                purity: '94% - 97%', 
                type: 'Raw / Unrefined',
                description: 'Ethically sourced, naturally occurring gold nuggets directly from verified African artisanal and mid-tier mining operations.',
                highlight: 'Premium Raw Investment'
              },
              { 
                title: 'Gold Dust / Dore Bars', 
                purity: '92% - 96%', 
                type: 'Pre-refined',
                description: 'High-purity gold dust and dore bars ready for institutional refining. Verified origin and fully compliant with international export regulations.',
                highlight: 'Refinery Supply Ready'
              },
            ].map((product, idx) => (
              <div key={product.title} className="glass-card rounded-2xl p-8 space-y-8 flex flex-col group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${idx * 150}ms` }}>
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#E0C98C]">
                    <GemIcon className="h-3.5 w-3.5" />
                    {product.highlight}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#F4F1E8]">{product.title}</h3>
                </div>

                {/* Specs */}
                <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-[#94948D]"><Shield className="h-4 w-4" /> Purity</span>
                    <span className="font-semibold text-gradient-gold">{product.purity}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-[#94948D]"><Scale className="h-4 w-4" /> Format</span>
                    <span className="font-semibold text-[#F4F1E8]">{product.type}</span>
                  </div>
                </div>

                <p className="text-sm text-[#C8C5BC] font-light leading-relaxed flex-1">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <ul className="text-xs text-[#94948D] space-y-2 pb-4 border-b border-white/5">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#34D399] shrink-0" /> Assay & Origin Certificate included</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#34D399] shrink-0" /> Full Export Documentation</li>
                  </ul>
                  <Link href={"/" + locale + "/quote"} className="group/btn flex items-center justify-between rounded-full bg-[#171918] border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#F4F1E8] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all duration-300">
                    Request Quote
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GemIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}