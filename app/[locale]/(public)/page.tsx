import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShieldCheck, Gem } from 'lucide-react';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-[#080908] text-[#F4F1E8]">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080908]/80 backdrop-blur-xl px-6 py-4 transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href={"/" + locale} className="flex items-center gap-4 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#C9A45C]/40 shadow-[0_0_15px_rgba(201,164,92,0.2)] group-hover:border-[#C9A45C] transition-all duration-500">
              <img
                src="/brand/minora-logo.jpg"
                alt="Minora Mining Experts Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-gradient-gold">MINORA</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#94948D]">Mining | Refining</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
            <Link href={"/" + locale + "/gold"} className="text-[#C8C5BC] hover:text-[#C9A45C] transition-colors duration-300">Gold Catalogue</Link>
            <Link href={"/" + locale + "/services"} className="text-[#C8C5BC] hover:text-[#C9A45C] transition-colors duration-300">Services</Link>
            <Link href={"/" + locale + "/trust"} className="text-[#C8C5BC] hover:text-[#C9A45C] transition-colors duration-300">Trust Center</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/12029307553"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#34D399]/40 bg-[#171918] px-4 py-2 text-xs font-semibold text-[#34D399] hover:bg-[#34D399]/10 transition-all duration-300 shadow-[0_0_10px_rgba(52,211,153,0.1)]"
            >
              WhatsApp Trade Desk
            </a>
            <Link
              href={"/" + locale + "/quote"}
              className="rounded-full bg-gradient-to-r from-[#C9A45C] to-[#E0C98C] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#080908] hover:shadow-[0_0_20px_rgba(201,164,92,0.4)] hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-20 overflow-hidden">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.08)_0%,rgba(8,9,8,1)_70%)]" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#C9A45C]/5 blur-[120px]" />
          
          <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 glass-panel px-4 py-1.5 text-xs font-semibold tracking-widest text-[#E0C98C] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0C98C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A45C]"></span>
                </span>
                Integrated African Gold Supply
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F1E8] leading-[1.1]">
                African Gold.<br />
                <span className="text-gradient-gold">Global Confidence.</span>
              </h1>
              <p className="max-w-xl text-lg sm:text-xl text-[#C8C5BC] leading-relaxed font-light">
                Connecting responsible mining, regional sourcing, institutional refining, and secure international export to bullion buyers worldwide.
              </p>
              <div className="flex flex-wrap gap-5 pt-6">
                <Link
                  href={"/" + locale + "/quote"}
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C9A45C] to-[#E0C98C] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#080908] hover:shadow-[0_0_30px_rgba(201,164,92,0.3)] hover:scale-105 transition-all duration-300"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={"/" + locale + "/gold"}
                  className="flex items-center gap-3 rounded-full border border-white/20 glass-panel px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#F4F1E8] hover:bg-white/10 transition-all duration-300"
                >
                  Explore Catalogue
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
              <div className="glass-card rounded-2xl p-8 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C9A45C]/20 to-transparent blur-[40px] rounded-bl-full" />
                
                <div className="flex items-start gap-6 border-b border-white/10 pb-8">
                  <div className="relative">
                    <img
                      src="/brand/minora-logo.jpg"
                      alt="Minora Emblem"
                      className="h-20 w-20 rounded-full object-cover border border-[#C9A45C]/50 shadow-[0_0_20px_rgba(201,164,92,0.15)]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#080908] rounded-full p-1 border border-[#303331]">
                      <ShieldCheck className="h-5 w-5 text-[#34D399]" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#94948D] font-semibold">Institutional Standard</span>
                    <div className="text-3xl font-serif font-bold text-gradient-gold mt-1">99.99% Fine</div>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center group">
                    <span className="text-[#94948D] tracking-wide">Direct Desk</span>
                    <a href="tel:+12029307553" className="font-semibold text-[#F4F1E8] group-hover:text-[#C9A45C] transition-colors">+1 202 930 7553</a>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-[#94948D] tracking-wide">WhatsApp</span>
                    <a href="https://wa.me/12029307553" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#34D399] group-hover:text-[#10B981] transition-colors">+1 202 930 7553</a>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-[#94948D] tracking-wide">Secure Email</span>
                    <a href="mailto:info@minoraminingexperts.com" className="font-semibold text-[#F4F1E8] group-hover:text-[#C9A45C] transition-colors">info@minoraminingexperts.com</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#94948D] tracking-wide">Operating Hubs</span>
                    <span className="font-semibold text-[#E0C98C]">Kenya &bull; Uganda &bull; DRC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="relative px-6 py-24 bg-[#0F1010] border-y border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F4F1E8]">Excellence in Every Ounce</h2>
              <p className="text-[#94948D] text-lg">We control the entire supply chain to guarantee authenticity, purity, and compliance for our global partners.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl group">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C9A45C]/50 transition-colors">
                  <Gem className="h-6 w-6 text-[#C9A45C]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#F4F1E8] mb-3">Premium Quality</h3>
                <p className="text-[#C8C5BC] leading-relaxed font-light">From raw nuggets to 99.99% refined LBMA-standard bars, our gold meets the highest institutional benchmarks.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl group">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C9A45C]/50 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-[#C9A45C]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#F4F1E8] mb-3">Verified Trust</h3>
                <p className="text-[#C8C5BC] leading-relaxed font-light">Rigorous compliance, independent assays, and transparent legal documentation secure every international transaction.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl group">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C9A45C]/50 transition-colors">
                  <Globe className="h-6 w-6 text-[#C9A45C]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#F4F1E8] mb-3">Global Export</h3>
                <p className="text-[#C8C5BC] leading-relaxed font-light">End-to-end secure logistics and armored transport, delivering seamlessly to bullion buyers across the globe.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080908] px-6 py-16 text-sm text-[#94948D] border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A45C]/20 to-transparent" />
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img src="/brand/minora-logo.jpg" alt="Minora Logo" className="h-10 w-10 rounded-full object-cover border border-[#C9A45C]/40 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <span className="font-serif text-lg font-bold text-[#F4F1E8] tracking-widest">MINORA</span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed opacity-80">
              Integrated African gold company connecting responsible mining, regional sourcing, institutional refining, and secure international export.
            </p>
            <div className="text-[10px] tracking-widest uppercase opacity-60 pt-4 border-t border-white/5 max-w-sm">
              &copy; {new Date().getFullYear()} Minora Mining Experts.
            </div>
          </div>
          
          <div className="md:col-span-7 flex flex-wrap md:justify-end gap-12 md:gap-20">
            <div className="space-y-4">
              <h4 className="font-semibold text-[#F4F1E8] uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3 opacity-80">
                <li><a href="tel:+12029307553" className="hover:text-[#C9A45C] transition-colors">+1 202 930 7553</a></li>
                <li><a href="https://wa.me/12029307553" target="_blank" rel="noopener noreferrer" className="hover:text-[#34D399] transition-colors">WhatsApp Desk</a></li>
                <li><a href="mailto:info@minoraminingexperts.com" className="hover:text-[#F4F1E8] transition-colors">info@minoraminingexperts.com</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-[#F4F1E8] uppercase tracking-wider text-xs">Navigation</h4>
              <ul className="space-y-3 opacity-80">
                <li><Link href={"/" + locale + "/gold"} className="hover:text-[#C9A45C] transition-colors">Gold Catalogue</Link></li>
                <li><Link href={"/" + locale + "/trust"} className="hover:text-[#C9A45C] transition-colors">Trust Center</Link></li>
                <li><Link href={"/" + locale + "/quote"} className="hover:text-[#C9A45C] transition-colors">Request Quote</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}