import React from 'react';
import Link from 'next/link';

export default async function GoldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const products = [
    {
      title: 'Gold Bars (LBMA Standard Bullion)',
      purity: '99.99% (24 Karat)',
      weight: '1.00 kg / 400 oz',
      origin: 'East & Central Africa',
      desc: 'Institutional investment-grade bullion bars with full assay certification and chain-of-custody documentation.',
      slug: 'gold-bars',
    },
    {
      title: 'Natural Gold Nuggets',
      purity: '20k – 23k Placer Origin',
      weight: 'Bulk Lots (1.00 kg+)',
      origin: 'Kenya & DRC Placer Concessions',
      desc: 'Unrefined natural placer clusters for collectors, specialized smelting, and institutional buyers.',
      slug: 'gold-nuggets',
    },
    {
      title: 'Raw Gold / Gold Dust (Doré)',
      purity: '88% – 94% Feedstock',
      weight: 'Contract Supply (10.00 kg+)',
      origin: 'Regional Artisanal & Small-Scale Mining (ASM)',
      desc: 'Alluvial raw gold doré feedstock dedicated for refinery processing and international smelter delivery.',
      slug: 'gold-dust',
    }
  ];

  return (
    <div className="min-h-screen bg-[#080908] text-[#F4F1E8] px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4">
          <Link href={/} className="text-xs uppercase tracking-widest text-[#C9A45C] hover:underline">? Back to Overview</Link>
          <h1 className="font-serif text-4xl font-bold text-[#F4F1E8]">Minora Gold Catalogue</h1>
          <p className="text-[#C8C5BC] max-w-2xl">Official commercial commodities catalogue. Dynamic market spot pricing upon quotation request.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.slug} className="rounded-xl border border-[#303331] bg-[#171918] p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#C9A45C]">{p.purity}</div>
                <h2 className="font-serif text-2xl font-bold text-[#F4F1E8]">{p.title}</h2>
                <p className="text-sm text-[#94948D] leading-relaxed">{p.desc}</p>
                <div className="border-t border-[#303331] pt-4 space-y-2 text-xs text-[#C8C5BC]">
                  <div><strong className="text-[#F4F1E8]">Weight:</strong> {p.weight}</div>
                  <div><strong className="text-[#F4F1E8]">Origin:</strong> {p.origin}</div>
                </div>
              </div>
              <Link
                href={//quote}
                className="block text-center rounded bg-[#C9A45C] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors"
              >
                Request Quotation
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
