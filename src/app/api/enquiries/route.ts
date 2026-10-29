import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { enquirySchema } from '@/lib/validations'

// Simple in-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>()

function isRateLimited(ip: string, limit = 10, windowMs = 60000): boolean {
  const now = Date.now()
  const timestamps = (rateLimitMap.get(ip) || []).filter((time) => now - time < windowMs)

  if (timestamps.length >= limit) {
    return true
  }

  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous'

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before submitting again.' },
        { status: 429 }
      )
    }

    const body = await req.json()

    // Schema Validation
    const validation = enquirySchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data = validation.data

    // Check if SMTP credentials exist
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO, EMAIL_FROM } = process.env

    if (EMAIL_HOST && EMAIL_USER && EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: Number(EMAIL_PORT) || 587,
        secure: Number(EMAIL_PORT) === 465,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      })

      const mailContent = `
New Commercial Quotation Enquiry received on FEELEXIM website:

----------------------------------------------------
Buyer Name:       ${data.fullName}
Company:          ${data.companyName}
Business Email:   ${data.email}
Phone / WhatsApp: ${data.phone}
Country:          ${data.country}
Product:          ${data.product}
Estimated Qty:    ${data.quantity || 'Not specified'}
Packaging:        ${data.packaging || 'Standard'}
Destination Port: ${data.destinationPort || 'Not specified'}
----------------------------------------------------
Additional Specifications / Requirements:
${data.requirements || 'None provided'}
----------------------------------------------------
IP Address: ${ip}
Time: ${new Date().toISOString()}
      `

      await transporter.sendMail({
        from: EMAIL_FROM || `FEELEXIM Enquiries <${EMAIL_USER}>`,
        to: EMAIL_TO || EMAIL_USER,
        replyTo: data.email,
        subject: `[Trade Quotation] ${data.product} - ${data.companyName} (${data.country})`,
        text: mailContent,
      })
    } else {
      // Safe development fallback: log inquiry
      console.log('--- [FEELEXIM ENQUIRY RECEIVED (Dev Fallback)] ---')
      console.log(JSON.stringify(data, null, 2))
      console.log('--------------------------------------------------')
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been received successfully.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing quotation enquiry:', error)
    return NextResponse.json(
      { error: 'Internal server error while sending quotation enquiry.' },
      { status: 500 }
    )
  }
}
