-- 004_catalog_schema.sql
CREATE TABLE public.product_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.product_category_translations (
  category_id UUID REFERENCES public.product_categories(id) ON DELETE CASCADE,
  locale VARCHAR(10) REFERENCES public.system_languages(code) ON DELETE RESTRICT,
  name TEXT NOT NULL,
  description TEXT,
  PRIMARY KEY (category_id, locale)
);

CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.product_categories(id) ON DELETE RESTRICT,
  slug TEXT UNIQUE NOT NULL,
  featured_image_path TEXT,
  gallery_paths TEXT[] DEFAULT '{}',
  min_order_quantity NUMERIC(12,2),
  unit_of_measure VARCHAR(20) DEFAULT 'kg',
  is_featured BOOLEAN DEFAULT false,
  is_placeholder BOOLEAN DEFAULT true,
  verification_status verification_status_enum DEFAULT 'placeholder',
  is_active BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.product_translations (
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  locale VARCHAR(10) REFERENCES public.system_languages(code) ON DELETE RESTRICT,
  name TEXT NOT NULL,
  tagline TEXT,
  short_description TEXT,
  long_description TEXT,
  purity_statement TEXT,
  origin_statement TEXT,
  delivery_options TEXT,
  documentation_summary TEXT,
  seo_title TEXT,
  seo_description TEXT,
  PRIMARY KEY (product_id, locale)
);

CREATE TABLE public.product_specifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  spec_key VARCHAR(100) NOT NULL,
  spec_value VARCHAR(255) NOT NULL,
  display_order INT DEFAULT 0
);
