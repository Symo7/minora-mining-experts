-- 002_user_profiles_and_roles.sql
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  app_role app_role_enum NOT NULL DEFAULT 'content_editor',
  is_active BOOLEAN NOT NULL DEFAULT true,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION auth.app_user_role()
RETURNS app_role_enum
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS 
  SELECT app_role
  FROM public.user_profiles
  WHERE id = auth.uid() AND is_active = true;
;
