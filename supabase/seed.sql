-- supabase/seed.sql
-- Controlled development seed fixtures with explicit is_placeholder flags

-- Insert Product Categories
INSERT INTO public.product_categories (id, slug, sort_order) VALUES
  ('11111111-1111-1111-1111-111111111111', 'gold-bars', 1),
  ('22222222-2222-2222-2222-222222222222', 'gold-nuggets', 2),
  ('33333333-3333-3333-3333-333333333333', 'gold-dust', 3)
ON CONFLICT (id) DO NOTHING;

-- Insert Products (Marked as Placeholder for development)
INSERT INTO public.products (
  id, category_id, slug, min_order_quantity, unit_of_measure, is_featured, is_placeholder, verification_status, is_active, sort_order
) VALUES
  ('44444444-4444-4444-4444-444444444444', '11111111-1111-1111-1111-111111111111', 'gold-bars-1kg', 1.00, 'kg', true, true, 'placeholder', true, 1),
  ('55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222', 'natural-gold-nuggets', 1.00, 'kg', true, true, 'placeholder', true, 2),
  ('66666666-6666-6666-6666-666666666666', '33333333-3333-3333-3333-333333333333', 'raw-gold-dust', 10.00, 'kg', false, true, 'placeholder', true, 3)
ON CONFLICT (id) DO NOTHING;
