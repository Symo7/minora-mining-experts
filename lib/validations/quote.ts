import { z } from 'zod';

export const QuoteRequestSchema = z.object({
  product_name: z.string().min(2),
  quantity: z.number().positive(),
  unit: z.enum(['kg', 'oz', 'metric_ton']),
  destination_country: z.string().min(2),
  buyer_type: z.enum(['individual', 'bullion_buyer', 'corporate', 'jewelry_manufacturer', 'investor', 'refinery', 'export_partner']),
  full_name: z.string().min(2).max(150),
  company_name: z.string().max(150).optional(),
  country_of_origin: z.string().min(2),
  email: z.string().email(),
  phone_whatsapp: z.string().max(50).optional(),
  message: z.string().max(2000).optional(),
});
