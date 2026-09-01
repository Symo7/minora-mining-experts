import React from 'react';
import Link from 'next/link';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-[#080908] text-[#F4F1E8]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#303331] bg-[#080908]/90 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href={/} className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#C9A45C]">MINORA</span>
            <span className="text-xs uppercase tracking-widest text-[#94948D]">Mining Experts</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href={//gold} className="hover:text-[#C9A45C] transition-colors">Gold Catalogue</Link>
            <Link href={//services} className="hover:text-[#C9A45C] transition-colors">Services</Link>
            <Link href={//trust} className="hover:text-[#C9A45C] transition-colors">Trust Center</Link>
            <Link href={//admin} className="hover:text-[#C9A45C] transition-colors text-xs text-[#94948D]">Admin Portal</Link>
          </nav>
          <Link
            href={//quote}
            className="rounded bg-[#C9A45C] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded border border-[#303331] bg-[#171918] px-3 py-1 text-xs font-medium text-[#C9A45C]">
                INTEGRATED AFRICAN GOLD SUPPLY
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1E8]">
                African Gold. <br />
                <span className="text-[#C9A45C]">Global Confidence.</span>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-[#C8C5BC] leading-relaxed">
                Connecting responsible mining, regional sourcing, institutional refining, and secure international export to bullion buyers worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={//quote}
                  className="rounded bg-[#C9A45C] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href={//gold}
                  className="rounded border border-[#303331] bg-[#171918] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F4F1E8] hover:border-[#C9A45C] transition-colors"
                >
                  Explore Gold Catalogue ?
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#303331] bg-[#171918] p-8 shadow-2xl space-y-6">
                <div className="border-b border-[#303331] pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#94948D]">Institutional Purity Standard</span>
                  <div className="text-3xl font-serif font-bold text-[#C9A45C] mt-1">99.99% Fine Gold</div>
                </div>
                <div className="space-y-3 text-sm text-[#C8C5BC]">
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">Operating Hubs</span>
                    <span className="font-medium text-[#F4F1E8]">Kenya • Uganda • DRC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">Delivery Options</span>
                    <span className="font-medium text-[#F4F1E8]">CIF Dubai, Zurich, London, HK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">Verification Status</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-[#222523] text-[#60A5FA]">Development Baseline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#303331] bg-[#0F1010] px-6 py-12 text-sm text-[#94948D]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-serif font-bold text-[#C9A45C]">MINORA</span> MINING EXPERTS &copy; 2026. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href={//gold} className="hover:text-[#F4F1E8]">Gold</Link>
            <Link href={//services} className="hover:text-[#F4F1E8]">Services</Link>
            <Link href={//trust} className="hover:text-[#F4F1E8]">Trust Center</Link>
            <Link href={//quote} className="hover:text-[#F4F1E8]">Request Quote</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
