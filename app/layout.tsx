import '@/app/globals.css';
import React from 'react';
import { Cormorant, Montserrat } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://minoraminingexperts.com'),
  title: {
    default: 'MINORA MINING EXPERTS | African Gold. Global Confidence.',
    template: '%s | Minora Mining Experts',
  },
  description:
    'Integrated African gold company connecting responsible mining, regional sourcing, institutional refining, and secure international export to bullion buyers worldwide.',
  openGraph: {
    title: 'MINORA MINING EXPERTS | African Gold. Global Confidence.',
    description:
      'Integrated African gold company connecting responsible mining, regional sourcing, institutional refining, and secure international export.',
    url: 'https://minoraminingexperts.com',
    siteName: 'Minora Mining Experts',
    images: [
      {
        url: '/brand/minora-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Minora Mining Experts Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-[var(--color-minora-obsidian)] text-[var(--color-minora-ivory)] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}