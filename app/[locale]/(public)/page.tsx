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
      <header className="sticky top-0 z-50 border-b border-[#303331] bg-[#080908]/90 backdrop-blur-md px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href={"/" + locale} className="flex items-center gap-3">
            <img
              src="/brand/minora-logo.jpg"
              alt="Minora Mining Experts Logo"
              className="h-10 w-10 rounded-full object-cover border border-[#C9A45C]/40"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-[#C9A45C]">MINORA</span>
              <span className="text-[10px] uppercase tracking-widest text-[#94948D]">Mining | Refining</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href={"/" + locale + "/gold"} className="hover:text-[#C9A45C] transition-colors">Gold Catalogue</Link>
            <Link href={"/" + locale + "/services"} className="hover:text-[#C9A45C] transition-colors">Services</Link>
            <Link href={"/" + locale + "/trust"} className="hover:text-[#C9A45C] transition-colors">Trust Center</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/12029307553"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded border border-[#34D399]/40 bg-[#171918] px-3 py-2 text-xs font-semibold text-[#34D399] hover:bg-[#34D399]/10 transition-colors"
            >
              WhatsApp Trade Desk
            </a>
            <Link
              href={"/" + locale + "/quote"}
              className="rounded bg-[#C9A45C] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative px-6 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded border border-[#303331] bg-[#171918] px-3 py-1 text-xs font-medium text-[#C9A45C]">
                INTEGRATED AFRICAN GOLD SUPPLY
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1E8]">
                African Gold.<br />
                <span className="text-[#C9A45C]">Global Confidence.</span>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-[#C8C5BC] leading-relaxed">
                Connecting responsible mining, regional sourcing, institutional refining, and secure international export to bullion buyers worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={"/" + locale + "/quote"}
                  className="rounded bg-[#C9A45C] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#080908] hover:bg-[#E0C98C] transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href={"/" + locale + "/gold"}
                  className="rounded border border-[#303331] bg-[#171918] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F4F1E8] hover:border-[#C9A45C] transition-colors"
                >
                  Explore Gold Catalogue
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#303331] bg-[#171918] p-8 shadow-2xl space-y-6">
                <div className="flex items-center gap-4 border-b border-[#303331] pb-4">
                  <img
                    src="/brand/minora-logo.jpg"
                    alt="Minora Emblem"
                    className="h-16 w-16 rounded-full object-cover border-2 border-[#C9A45C]"
                  />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#94948D]">Institutional Purity Standard</span>
                    <div className="text-2xl font-serif font-bold text-[#C9A45C]">99.99% Fine Gold</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-[#C8C5BC]">
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">Direct Telephone</span>
                    <a href="tel:+12029307553" className="font-medium text-[#F4F1E8] hover:text-[#C9A45C]">+1 202 930 7553</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">WhatsApp</span>
                    <a href="https://wa.me/12029307553" target="_blank" rel="noopener noreferrer" className="font-medium text-[#34D399] hover:underline">+1 202 930 7553</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">Official Email</span>
                    <a href="mailto:info@minoraminingexperts.com" className="font-medium text-[#F4F1E8] hover:underline">info@minoraminingexperts.com</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94948D]">Operating Hubs</span>
                    <span className="font-medium text-[#F4F1E8]">Kenya &bull; Uganda &bull; DRC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#303331] bg-[#0F1010] px-6 py-12 text-sm text-[#94948D]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/brand/minora-logo.jpg" alt="Minora Logo" className="h-8 w-8 rounded-full object-cover border border-[#C9A45C]/40" />
              <span className="font-serif font-bold text-[#F4F1E8]">MINORA MINING EXPERTS</span>
            </div>
            <div className="text-xs">&copy; 2026 Minora Mining Experts. All rights reserved.</div>
          </div>
          <div className="space-y-2 text-xs">
            <div><span className="text-[#94948D]">Telephone: </span><a href="tel:+12029307553" className="text-[#C9A45C] hover:underline">+1 202 930 7553</a></div>
            <div><span className="text-[#94948D]">WhatsApp: </span><a href="https://wa.me/12029307553" target="_blank" rel="noopener noreferrer" className="text-[#34D399] hover:underline">+1 202 930 7553</a></div>
            <div><span className="text-[#94948D]">Email: </span><a href="mailto:info@minoraminingexperts.com" className="text-[#F4F1E8] hover:underline">info@minoraminingexperts.com</a></div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="https://www.facebook.com/share/1FbWKanJKZ/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A45C]">Facebook</a>
            <a href="https://www.instagram.com/minora_mining_experts" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A45C]">Instagram</a>
            <Link href={"/" + locale + "/trust"} className="hover:text-[#F4F1E8]">Trust Center</Link>
            <Link href={"/" + locale + "/quote"} className="hover:text-[#F4F1E8]">Request Quote</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}