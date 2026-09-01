import '@/app/globals.css';
import React from 'react';

export const metadata = {
  title: 'MINORA MINING EXPERTS | African Gold. Global Confidence.',
  description: 'Premium multilingual digital platform for Minora Mining Experts. Integrated mining, sourcing, refining, trading, and international supply.',
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

  return (
    <html lang={locale || 'en'} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className="min-h-screen bg-[#080908] text-[#F4F1E8] antialiased">
        {children}
      </body>
    </html>
  );
}
