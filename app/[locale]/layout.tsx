import '@/app/globals.css';
import React from 'react';

export const metadata = {
  metadataBase: new URL('https://minoraminingexperts.com'),
  title: 'MINORA MINING EXPERTS | African Gold. Global Confidence.',
  description: 'Premium multilingual digital platform for Minora Mining Experts. Integrated mining, sourcing, refining, trading, and international supply.',
  openGraph: {
    title: 'MINORA MINING EXPERTS | African Gold. Global Confidence.',
    description: 'Integrated African gold company connecting responsible mining, regional sourcing, institutional refining, and secure international export.',
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Minora Mining Experts',
    url: 'https://minoraminingexperts.com',
    logo: 'https://minoraminingexperts.com/brand/minora-logo.jpg',
    email: 'info@minoraminingexperts.com',
    telephone: '+12029307553',
    sameAs: [
      'https://www.facebook.com/share/1FbWKanJKZ/',
      'https://www.instagram.com/minora_mining_experts',
    ],
  };

  return (
    <html lang={locale || 'en'} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#080908] text-[#F4F1E8] antialiased">
        {children}
      </body>
    </html>
  );
}
