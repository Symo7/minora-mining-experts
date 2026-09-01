import React from 'react';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    { locale: 'zh' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'pt' },
    { locale: 'ru' },
    { locale: 'es' },
  ];
}

export default async function LocaleLayout({
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
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {children}
    </div>
  );
}