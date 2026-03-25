import { z } from 'zod';

const REQUIRED = 'This field is required';
const INVALID_EMAIL = 'Invalid email address';
const MINCHARACTERS = 'Message must be at least 10 characters';

export const contactSchema = z.object({
  name: z.string().min(2, REQUIRED),
  email: z.string().email(INVALID_EMAIL),
  phone: z.string().optional(),
  company: z.string().min(2, REQUIRED),
  country: z.string().min(2, REQUIRED),
  region: z.string().min(1, REQUIRED),
  subject: z.string().min(1, REQUIRED),
  message: z.string().min(10, MINCHARACTERS),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
