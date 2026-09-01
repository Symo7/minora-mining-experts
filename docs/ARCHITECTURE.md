# MINORA TECHNICAL ARCHITECTURE
## Stack & Framework
- Next.js 15+ App Router
- TypeScript (Strict Mode)
- Tailwind CSS v4
- Supabase PostgreSQL with RLS, RBAC, and Custom JWT Claims
- Supabase Storage (minora-public and minora-private with signed URLs)

## Security Architecture
- Server-side token verification using getClaims()
- Role separation via user_profiles and custom user_role claims
- Server-action mediated quotation requests with Turnstile, HMAC IP rate-limiting, and Zod
