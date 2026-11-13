import { z } from 'zod'

export type ValidationMessageKey =
  | 'fullNameMin'
  | 'fullNameMax'
  | 'companyMin'
  | 'companyMax'
  | 'email'
  | 'phoneMin'
  | 'phoneMax'
  | 'country'
  | 'product'
  | 'requirementsMax'

export function createEnquirySchema(t: (key: ValidationMessageKey) => string) {
  return z.object({
    fullName: z.string().min(2, t('fullNameMin')).max(100, t('fullNameMax')),
    companyName: z.string().min(2, t('companyMin')).max(200, t('companyMax')),
    email: z.string().email(t('email')),
    phone: z.string().min(7, t('phoneMin')).max(20, t('phoneMax')),
    country: z.string().min(2, t('country')),
    product: z.string().min(1, t('product')),
    quantity: z.string().max(100).optional(),
    packaging: z.string().max(200).optional(),
    destinationPort: z.string().max(100).optional(),
    requirements: z.string().max(1000, t('requirementsMax')).optional(),
  })
}

const defaultMessages: Record<ValidationMessageKey, string> = {
  fullNameMin: 'Full name must be at least 2 characters',
  fullNameMax: 'Full name must be less than 100 characters',
  companyMin: 'Company name must be at least 2 characters',
  companyMax: 'Company name must be less than 200 characters',
  email: 'Please enter a valid business email address',
  phoneMin: 'Please enter a valid phone number',
  phoneMax: 'Phone number is too long',
  country: 'Please select your country',
  product: 'Please select a product of interest',
  requirementsMax: 'Additional requirements must be less than 1000 characters',
}

export const enquirySchema = createEnquirySchema((key) => defaultMessages[key])

export type EnquiryFormData = z.infer<typeof enquirySchema>
