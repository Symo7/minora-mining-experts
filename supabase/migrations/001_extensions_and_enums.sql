-- 001_extensions_and_enums.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE verification_status_enum AS ENUM (
  'placeholder',
  'draft',
  'pending_verification',
  'verified',
  'published',
  'archived'
);

CREATE TYPE quote_status_enum AS ENUM (
  'new',
  'under_review',
  'verification_required',
  'verified',
  'quote_prepared',
  'quote_sent',
  'negotiation',
  'closed_won',
  'closed_lost',
  'spam'
);

CREATE TYPE buyer_type_enum AS ENUM (
  'individual',
  'bullion_buyer',
  'corporate',
  'jewelry_manufacturer',
  'investor',
  'refinery',
  'export_partner'
);

CREATE TYPE app_role_enum AS ENUM (
  'super_admin',
  'content_editor',
  'inquiry_manager'
);

CREATE TYPE document_category_enum AS ENUM (
  'company_registration',
  'mining_license',
  'export_license',
  'assay_report',
  'compliance_policy',
  'esg_report'
);
