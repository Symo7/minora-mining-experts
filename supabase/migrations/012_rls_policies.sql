-- 012_rls_policies.sql
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_audit_logs ENABLE ROW LEVEL SECURITY;

-- Public read for published products
CREATE POLICY "Public read published products"
ON public.products FOR SELECT
TO anon, authenticated
USING (verification_status = 'published' AND is_active = true);

-- Staff quote read
CREATE POLICY "Staff read quotes"
ON public.quote_requests FOR SELECT
TO authenticated
USING (auth.app_user_role() IN ('super_admin', 'inquiry_manager'));
