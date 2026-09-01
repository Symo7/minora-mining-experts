import '@/app/globals.css';
import React from 'react';

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
    <html lang="en">
      <body className="min-h-screen bg-[#080908] text-[#F4F1E8] antialiased">
        {children}
      </body>
    </html>
  );
}