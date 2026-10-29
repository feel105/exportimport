# PROJECT: FEELEXIM — Premium Import & Export Business Website

Act as a Senior UI/UX Designer, Brand Strategist, and Expert Next.js Frontend Developer.

Build a complete, production-quality, fully responsive import-export business website for **FEELEXIM**, an Indian export house serving international importers, wholesalers, distributors, and food manufacturers.

The website must communicate trust, global reach, product quality, professionalism, and reliability. The design should feel like a premium international trading company, not a generic template.

## 1. TECHNOLOGY STACK

Use the following technologies:

- Next.js with App Router
- React and TypeScript
- Tailwind CSS
- Lucide React for icons
- Framer Motion or Motion for subtle animations
- Reusable React components
- Next.js Image component for optimized images
- React Hook Form with Zod validation for forms, if appropriate

Use the latest stable, mutually compatible versions supported by the environment. Follow proper Next.js conventions and avoid unnecessary dependencies.

Use Server Components by default. Add Client Components only when required for interactions, animations, mobile navigation, forms, or carousels.

## 2. BRAND IDENTITY

Brand name: FEELEXIM

Business type: Indian Import & Export

Primary business focus:

- Whole spices and spice powders
- Seeds and nuts
- Indian-origin agricultural products
- Other export-ready products that can be added in the future

Brand personality:

- Premium
- International
- Trustworthy
- Modern
- Transparent
- Quality-focused
- Business-oriented

Logo:
I will provide the official FEELEXIM logo separately.

Create a logo placeholder component that supports the supplied logo file, preferably SVG or PNG. Keep the logo aspect ratio intact. Never redraw or replace the official logo with an AI-generated logo.

Until the logo is supplied, use a clean text-based FEELEXIM placeholder.

## 3. VISUAL DESIGN SYSTEM

Create a sophisticated Liquid Glass UI inspired by modern premium interfaces.

The design must combine glassmorphism with excellent readability and a professional corporate appearance.

### Color palette

Use this premium color combination:

- Midnight Navy: #0B1424
- Deep Ocean Blue: #10253F
- Royal Blue: #1D4ED8
- Champagne Gold: #D6B574
- Warm White: #F8FAFC
- Slate Gray: #64748B
- Glass White: rgba(255, 255, 255, 0.08)
- Glass Border: rgba(255, 255, 255, 0.16)

Use navy and white as the primary brand colors. Apply champagne gold selectively to premium details, highlights, and small decorative elements.

Use blue for primary actions and interactive states.

### Liquid Glass effects

Implement:

- Translucent navigation surfaces
- Backdrop blur and subtle transparency
- Thin glass-like borders
- Layered gradients
- Soft shadows
- Gentle reflections and highlights
- Smooth hover transitions
- Subtle background glows
- Rounded cards with consistent corner radii

Do not overuse glass effects. Maintain strong contrast and readable text.

Use a dark navy hero section and alternate it with clean white or very light gray sections for a premium visual rhythm.

Avoid excessive gradients, neon colors, oversized rounded elements, excessive animations, and cluttered layouts.

## 4. HEADER AND NAVIGATION

Create a professional two-level responsive header.

### Top information bar

A slim strip above the main navigation.

Left side:

- Email icon and placeholder business email
- Phone icon and placeholder business phone number

Right side:

- LinkedIn icon
- Instagram icon
- Facebook icon, if needed

Use a dark navy background with small, readable typography.

Make the email, phone, and social icons functional links. Use configurable placeholders in a central site configuration file until actual contact details are provided.

Hide or simplify secondary social links on smaller screens to avoid overcrowding.

### Main navigation

Left:

- FEELEXIM logo

Center or right:

- Home
- About Us
- Products
- Services
- Quality & Compliance
- Contact

Primary CTA:
"Request a Quote"

Requirements:

- Sticky navigation on scroll
- Transparent/glass appearance over the hero
- Elegant solid or blurred background after scrolling, where appropriate
- Mobile hamburger menu
- Accessible keyboard navigation
- Clear active states
- Smooth scrolling where appropriate
- Mobile navigation must open and close properly

## 5. HERO SECTION

Create an impressive, premium, full-width hero section.

Use a dark navy background with layered gradients and a high-quality agricultural export or global logistics photograph.

Possible imagery:

- Indian spices in elegant close-up
- Turmeric, red chilli, cumin, coriander, and seeds
- International shipping containers
- Cargo port or global trade logistics
- Agricultural commodities prepared for export

Use authentic-looking, high-quality imagery. Avoid cartoon graphics and artificial-looking stock compositions.

Layout:

- Text content on the left
- Large visual or layered image composition on the right
- Subtle decorative globe, grid, or global trade line elements if visually appropriate

Suggested copy:

Eyebrow:
"INDIA TO THE WORLD"

Main headline:
"Connecting Indian Quality to Global Markets."

Supporting text:
"Your trusted sourcing/manufacturer partner for Indian spices, seeds, nuts, and agricultural products. We connect international buyers with reliable Indian suppliers through quality-focused sourcing/manufacturer and export coordination."

Primary button:
"Explore Our Products"

Secondary button:
"Request a Quote"

Trust indicators below the CTA:

- Quality-Focused Sourcing/manufacturer
- Export Documentation Support
- Flexible Packaging Options

Do not claim certifications, years of experience, export volumes, customer counts, or international offices unless verified information is provided.

The hero must look exceptional on desktop while remaining clean and compelling on mobile.

## 6. TRUST / VALUE STRIP

Immediately after the hero, create a compact value proposition strip with four items:

1. Quality-Focused Sourcing/manufacturer
2. Competitive Quotations
3. Flexible Packaging
4. Export Documentation Support

Use simple Lucide icons, balanced spacing, and subtle separators.

On mobile, stack the items into a clean two-column layout or horizontally scrollable strip with accessible controls.

## 7. ABOUT FEELEXIM

Create a sophisticated About section with a split layout.

Left:

- Large agricultural or global trade image
- Optional subtle glass overlay card

Right:

- Section label: "ABOUT FEELEXIM"
- Heading: "Your Partner in Global Trade"
- Two or three concise paragraphs

Explain that FEELEXIM helps international buyers source Indian-origin products and coordinates with suitable suppliers to meet agreed specifications, packaging requirements, and export documentation needs.

Emphasize:

- Buyer-focused sourcing/manufacturer
- Transparent communication
- Product specification coordination
- Flexible commercial discussions
- Long-term business relationships

CTA:
"Learn More About Us"

Do not invent company history or credentials.

## 8. PRODUCTS SECTION

Create a visually rich product catalog using reusable product cards.

Initial product categories:

A. Whole Spices

- Cumin Seeds
- Coriander Seeds
- Turmeric Finger
- Black Pepper
- Fennel Seeds
- Fenugreek Seeds
- Mustard Seeds
- Cloves

B. Spice Powders

- Turmeric Powder
- Red Chilli Powder
- Coriander Powder
- Ginger Powder
- Garlic Powder
- Onion Powder

C. Seeds

- Sesame Seeds
- Black Sesame Seeds
- Flax Seeds
- Chia Seeds
- Basil Seeds
- Kalonji Seeds
- Quinoa

D. Nuts & Other Products

- Nuts
- Selected agricultural commodities
- Additional products available on request

Product catalog requirements:

- High-quality product images
- Product name
- Category label
- Short description
- "Enquire About Product" CTA
- Responsive grid
- Consistent image aspect ratios
- Hover effects with subtle motion
- Accessible image alt text

Include category filters and a search input if practical.

Clicking a product CTA should open the enquiry form with the product name preselected.

Keep all product information in a structured data file so products can be updated without editing the card components.

Do not display fake prices, fake stock levels, or unverified product specifications.

## 9. WHY CHOOSE US

Create a premium section with a contrasting background and six feature cards:

- Competitive Pricing
- Flexible Packaging Solutions
- Quality-Oriented Sourcing/manufacturer
- Export Documentation Assistance
- Responsive Communication
- Buyer-Specific Sourcing/manufacturer

Each card must have a Lucide icon, short description, and subtle hover animation.

Do not promise guaranteed delivery, certifications, or quality results beyond the information provided.

## 10. OUR EXPORT PROCESS

Create a horizontal process timeline on desktop and a vertical timeline on mobile.

Steps:

01 — Understand Buyer Requirements
02 — Product Sourcing/manufacturer & Specification Confirmation
03 — Quotation & Commercial Discussion
04 — Sample Coordination, Where Applicable
05 — Documentation & Shipment Coordination
06 — Post-Dispatch Communication

Use elegant numbered markers, connecting lines, and restrained animation.

Explain that the actual process depends on the product, destination market, and agreed commercial terms.

## 11. QUALITY & COMPLIANCE

Build a clean, credible section explaining the importance of product specifications and destination-specific import requirements.

Include:

- Product specification coordination
- Packaging and labeling discussions
- Supporting documentation coordination
- Quality-related document coordination where applicable
- Destination-market requirement checks

Use the headline:
"Quality and Documentation, Carefully Coordinated."

I have FASSAI, spice RCMC, IEC, Spice, APeda, GST.
Use a CTA:
"Discuss Your Requirements"

## 12. GLOBAL TRADE SECTION

Create a visually striking global trade section with a world map illustration, shipping containers, or a global logistics image.

Headline:
"Bringing Indian Products Closer to Global Buyers."

Description:
"We work with international buyers to coordinate sourcing/manufacturer, quotations, packaging discussions, and export requirements for Indian-origin products."

Do not display a list of countries served unless verified details are provided.

Keep the section visually premium and responsive.

## 13. TESTIMONIALS AND STATISTICS

Create a reusable testimonials component, but do not populate it with fabricated customer testimonials.

If genuine testimonials are unavailable, replace this section with:
"Built Around Your Sourcing/manufacturer Requirements"

Use three value propositions:

- Buyer-Focused Communication
- Flexible Sourcing/manufacturer Coordination
- Long-Term Trade Relationships

Do not display invented statistics such as number of clients, shipments, countries, or years in business.

## 14. FAQ SECTION

Create an accessible accordion with these questions:

- What products does FEELEXIM export?
- Can I request product samples?
- Can packaging be customized?
- Can you coordinate export documentation?
- How can I request a quotation?
- Do you accept product-specific sourcing/manufacturer requests?

Write concise, realistic answers. Explain that samples, packaging, documents, and sourcing/manufacturer arrangements are subject to product availability, destination requirements, and mutually agreed terms.

## 15. CONTACT AND QUOTATION FORM

Create a premium contact section with a two-column layout.

Left column:

- Heading: "Let's Discuss Your Import Requirements"
- Short introduction
- Business email placeholder
- Business phone placeholder
- Location: India
- LinkedIn link placeholder

Right column:
Create a functional, accessible quotation form with these fields:

- Full Name
- Company Name
- Business Email
- Phone / WhatsApp
- Country
- Product of Interest
- Estimated Quantity
- Preferred Packaging
- Destination Port
- Additional Requirements

Add validation and helpful error messages.

Submit button:
"Send Enquiry"

Requirements:

- Validate using Zod where appropriate
- Show loading, success, and error states
- Protect against spam using suitable server-side validation and rate limiting
- Never expose email credentials or API secrets in client-side code
- Create a proper server-side submission route
- Use environment variables for email or third-party service configuration
- If email delivery is not configured, clearly document the required setup and provide a useful development fallback
- Do not show a success message unless the submission is actually accepted

After a product-specific enquiry, prefill the selected product.

## 16. FOOTER

Build a premium multi-column footer with:

Column 1:

- FEELEXIM logo
- Short company description

Column 2:

- Quick Links
- About Us
- Products
- Services
- Contact

Column 3:

- Product Categories
- Whole Spices
- Spice Powders
- Seeds
- Nuts & Agricultural Products

Column 4:

- Contact Details
- Email
- Phone
- Social Media

Include:

- Copyright year generated dynamically
- Privacy Policy
- Terms & Conditions
- Back-to-top button

Use the same design language as the header, with a dark navy background and subtle glass borders.

## 17. RESPONSIVE DESIGN REQUIREMENTS

The website must work properly on:

- Small mobile devices: 320px and above
- Standard smartphones
- Large smartphones
- Tablets
- Laptops
- Desktop monitors
- Large desktop screens

Requirements:

- Mobile-first Tailwind CSS
- No horizontal overflow
- Responsive typography using clamp() or Tailwind utilities
- Proper responsive grids
- Correct image cropping and aspect ratios
- Comfortable touch targets
- Readable text on every screen
- Responsive navigation
- Accessible form controls
- Reduced-motion support
- Good contrast in both glass and solid backgrounds

Test layouts at widths of 320px, 375px, 768px, 1024px, 1440px, and 1920px.

Do not simply shrink the desktop layout. Adapt layouts and spacing to each screen size.

## 18. ANIMATIONS AND INTERACTIONS

Use restrained, high-quality interactions:

- Smooth section reveal
- Subtle card hover elevation
- Image scale on hover
- Button transitions
- Header scroll transition
- Mobile navigation animation
- FAQ accordion animation
- Subtle background movement only where appropriate

Animations must not interfere with scrolling, accessibility, or performance.

Respect prefers-reduced-motion.

Avoid excessive parallax and heavy animation libraries or effects that reduce performance.

## 19. PROJECT STRUCTURE

Organize the codebase properly. Use a structure similar to:

src/
app/
layout.tsx
page.tsx
globals.css
about/
page.tsx
products/
page.tsx
[slug]/
page.tsx
services/
page.tsx
quality-compliance/
page.tsx
contact/
page.tsx
privacy-policy/
page.tsx
terms/
page.tsx
api/
enquiries/
route.ts

components/
layout/
TopBar.tsx
Navbar.tsx
MobileMenu.tsx
Footer.tsx
home/
Hero.tsx
TrustStrip.tsx
AboutPreview\.tsx
ProductCategories.tsx
WhyChooseUs.tsx
ExportProcess.tsx
QualitySection.tsx
GlobalTrade.tsx
FAQ.tsx
ContactCTA.tsx
products/
ProductCard.tsx
ProductGrid.tsx
ProductFilters.tsx
contact/
EnquiryForm.tsx
ui/
Button.tsx
Container.tsx
SectionHeading.tsx
GlassCard.tsx

config/
site.ts

data/
products.ts
faqs.ts

lib/
validations.ts
utils.ts

types/
product.ts

public/
images/
logo/
icons/

This structure can be adjusted where appropriate, but maintain clear separation of pages, reusable components, data, validation, and configuration.

Store contact details, social links, company metadata, and navigation configuration centrally.

Use reusable design tokens for colors, spacing, shadows, and glass effects.

## 20. SEO AND PERFORMANCE

Implement:

- Page-specific metadata
- Appropriate title and meta description
- Open Graph metadata
- Semantic HTML
- One clear primary H1 per page
- Descriptive image alt attributes
- Clean URLs
- Sitemap
- robots.txt
- Favicon placeholder
- Organization and website structured data using only verified company information
- Optimized images
- Lazy loading below the fold
- Good Core Web Vitals
- Accessible color contrast and focus indicators

Avoid unnecessary client-side JavaScript.

## 21. REQUIRED DELIVERABLES

Build the actual website, not merely a design description.

Deliver:

1. A complete working Next.js application.
2. All main pages and reusable components.
3. A polished homepage matching the visual direction.
4. A structured product catalog.
5. A responsive header, mobile navigation, and footer.
6. A functional quotation form with appropriate validation.
7. A server-side enquiry route and clear configuration instructions.
8. Reusable product and FAQ data.
9. SEO metadata and accessibility improvements.
10. A README explaining installation, development, build, and deployment.
11. An .env.example containing placeholder variable names only.
12. Clear instructions for replacing the logo, images, contact details, and product data.

Do not leave major sections as empty placeholders.

Do not use fake business details, fabricated testimonials, or unsupported certifications.

## 22. EXECUTION INSTRUCTIONS

First, inspect the existing project and preserve any valid existing work.

If the project is empty, initialize the Next.js application using the requested stack.

Then implement the complete website in logical stages, starting with:

1. Design system and global layout
2. Header and footer
3. Homepage and responsive hero
4. Product catalog
5. About, services, and compliance pages
6. Contact form and server-side route
7. SEO, accessibility, and responsive testing

Run the available lint, type-check, and production-build commands. Fix errors before completion.

Check all navigation links, CTA buttons, form states, mobile menus, and responsive layouts.

Do not merely provide snippets or a tutorial. Create and modify the actual project files wherever the environment allows it.

If any integration requires credentials or external setup, implement the safe structure and clearly explain what I must configure.

### FINAL DESIGN GOAL

FEELEXIM should look like an established, premium international trading brand: elegant, confident, modern, and trustworthy.

The final result should combine a high-impact dark navy hero, champagne-gold accents, clean white content sections, premium agricultural photography, subtle Liquid Glass UI, and a flawless responsive experience across mobile, tablet, and desktop.

Prioritize real usability, clean architecture, maintainable code, and professional visual quality over unnecessary decoration.

Important: First only make Plan.md, design.md, deploy.md, skill.md other MD usefull file for etc file.
