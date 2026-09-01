-- 003_system_languages.sql
CREATE TABLE public.system_languages (
  code VARCHAR(10) PRIMARY KEY,
  name TEXT NOT NULL,
  native_name TEXT NOT NULL,
  is_rtl BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0
);

INSERT INTO public.system_languages (code, name, native_name, is_rtl, is_active, sort_order) VALUES
  ('en', 'English', 'English', false, true, 1),
  ('ar', 'Arabic', 'العربية', true, true, 2),
  ('zh', 'Chinese (Simplified)', '简体中文', false, true, 3),
  ('fr', 'French', 'Français', false, true, 4),
  ('de', 'German', 'Deutsch', false, true, 5),
  ('ja', 'Japanese', '日本語', false, true, 6),
  ('pt', 'Portuguese (Brazil)', 'Português', false, true, 7),
  ('ru', 'Russian', 'Русский', false, true, 8),
  ('es', 'Spanish', 'Español', false, true, 9)
ON CONFLICT (code) DO NOTHING;
