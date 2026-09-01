export const siteConfig = {
  name: 'Minora Mining Experts',
  shortName: 'MINORA',
  descriptor: 'MINING | REFINING',
  tagline: 'African Gold. Global Confidence.',
  domain: 'minoraminingexperts.com',
  url: 'https://minoraminingexperts.com',
  description:
    'Integrated African gold company connecting responsible mining, regional sourcing, institutional refining, and secure international export to bullion buyers worldwide.',
  contact: {
    email: 'info@minoraminingexperts.com',
    emailHref: 'mailto:info@minoraminingexperts.com',
    phone: {
      display: '+1 202 930 7553',
      e164: '+12029307553',
      href: 'tel:+12029307553',
    },
    whatsapp: {
      status: 'verified',
      display: '+1 202 930 7553',
      e164: '+12029307553',
      href: 'https://wa.me/12029307553',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/share/1FbWKanJKZ/',
    instagram: 'https://www.instagram.com/minora_mining_experts',
    instagramHandle: '@minora_mining_experts',
  },
  brand: {
    logo: '/brand/minora-logo.jpg',
    logoAlt: 'Minora Mining Experts - Mining | Refining',
  },
  locales: ['en', 'ar', 'zh', 'fr', 'de', 'ja', 'pt', 'ru', 'es'] as const,
  defaultLocale: 'en' as const,
} as const;

export type SiteConfig = typeof siteConfig;
