import React from 'react';
import Link from 'next/link';

export default async function GoldPage({
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
          <h1 className="font-serif text-4xl font-bold text-[#C9A45C]">Gold Catalogue</h1>
          <p className="text-lg text-[#C8C5BC] max-w-2xl">Institutional-grade African gold products. All specifications subject to verification and assay certification.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Gold Bars', purity: '99.99%', description: 'Refined gold bars available in standard institutional weights.' },
            { title: 'Gold Nuggets', purity: 'Variable', description: 'Naturally occurring gold nuggets sourced from verified African mining regions.' },
            { title: 'Gold Dust', purity: 'Variable', description: 'Fine gold dust for refining and industrial applications.' },
          ].map((product) => (
            <div key={product.title} className="rounded-lg border border-[#303331] bg-[#171918] p-6 space-y-4">
              <div className="h-40 rounded bg-[#0F1010] border border-[#303331] flex items-center justify-center text-[#94948D] text-sm">Product Image Pending</div>
              <h3 className="font-serif text-xl font-bold text-[#F4F1E8]">{product.title}</h3>
              <div className="text-sm text-[#C9A45C]">Purity: {product.purity}</div>
              <p className="text-sm text-[#C8C5BC]">{product.description}</p>
              <Link href={"/" + locale + "/quote"} className="inline-block rounded bg-[#C9A45C] px-4 py-2 text-xs font-semibold uppercase text-[#080908] hover:bg-[#E0C98C] transition-colors">
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}