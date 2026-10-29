import { z } from 'zod'

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(200, 'Company name must be less than 200 characters'),
  email: z.string().email('Please enter a valid business email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  country: z.string().min(2, 'Please select your country'),
  product: z.string().min(1, 'Please select a product of interest'),
  quantity: z.string().max(100).optional(),
  packaging: z.string().max(200).optional(),
  destinationPort: z.string().max(100).optional(),
  requirements: z
    .string()
    .max(1000, 'Additional requirements must be less than 1000 characters')
    .optional(),
})

export type EnquiryFormData = z.infer<typeof enquirySchema>
