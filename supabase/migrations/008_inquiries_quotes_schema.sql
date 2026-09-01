-- 008_inquiries_quotes_schema.sql
CREATE TABLE public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_reference VARCHAR(30) UNIQUE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  product_name_fallback TEXT,
  quantity NUMERIC(12, 2) NOT NULL,
  unit VARCHAR(20) NOT NULL,
  destination_country VARCHAR(100) NOT NULL,
  preferred_port_or_city VARCHAR(100),
  buyer_type buyer_type_enum NOT NULL,
  full_name VARCHAR(150) NOT NULL,
  company_name VARCHAR(150),
  country_of_origin VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_whatsapp VARCHAR(50),
  preferred_contact_channel VARCHAR(30) DEFAULT 'email',
  message TEXT,
  status quote_status_enum DEFAULT 'new',
  ip_hmac_hash VARCHAR(64),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.quote_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES public.quote_requests(id) ON DELETE CASCADE,
  actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  previous_status quote_status_enum,
  new_status quote_status_enum NOT NULL,
  internal_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
