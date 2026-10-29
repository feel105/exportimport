# FEELEXIM — Deployment Guide

## Overview

This guide covers deploying the FEELEXIM Next.js application to production environments.

---

## Recommended Hosting: Vercel (Primary)

Vercel is the easiest and most performant option for Next.js applications.

### Steps

1. **Push to GitHub / GitLab / Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FEELEXIM website"
   git remote add origin https://github.com/YOUR_USERNAME/feelexim.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click **"New Project"** → Import your repository
   - Vercel auto-detects Next.js — no extra configuration needed

3. **Configure Environment Variables**
   In Vercel Dashboard → Project → Settings → Environment Variables, add:

   | Variable | Description |
   |---|---|
   | `EMAIL_HOST` | SMTP server hostname |
   | `EMAIL_PORT` | SMTP port (587 or 465) |
   | `EMAIL_USER` | SMTP username / email address |
   | `EMAIL_PASS` | SMTP password or app password |
   | `EMAIL_FROM` | Sender email (e.g. `noreply@feelexim.com`) |
   | `EMAIL_TO` | Recipient email for enquiries |
   | `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://feelexim.com`) |

4. **Deploy**
   - Click **Deploy**
   - Vercel builds and deploys automatically
   - Every `git push` to `main` triggers a new deployment

5. **Custom Domain**
   - Vercel Dashboard → Domains → Add your domain
   - Update DNS records as instructed by Vercel

---

## Alternative: Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Install the [Netlify Next.js plugin](https://github.com/netlify/netlify-plugin-nextjs): included automatically
5. Add environment variables in Netlify → Site Settings → Environment

---

## Alternative: Self-Hosted (VPS / MAMP / cPanel)

### On a VPS (Ubuntu/Debian)

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

2. **Clone and build**
   ```bash
   git clone https://github.com/YOUR_USERNAME/feelexim.git /var/www/feelexim
   cd /var/www/feelexim
   npm install
   npm run build
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   nano .env.local   # fill in real values
   ```

4. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "feelexim" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
     listen 80;
     server_name feelexim.com www.feelexim.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

6. **Enable HTTPS with Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d feelexim.com -d www.feelexim.com
   ```

### On MAMP (Local Development Only)

MAMP is not recommended for production Next.js hosting. Use it for **local development only**.

For local development:
```bash
cd /Applications/MAMP/htdocs/exim
npm install
npm run dev
```
Access at: `http://localhost:3000`

---

## Environment Variables Reference

Create a `.env.local` file (never commit this file):

```env
# Site
NEXT_PUBLIC_SITE_URL=https://feelexim.com

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@feelexim.com
EMAIL_TO=enquiries@feelexim.com

# Rate Limiting (optional)
RATE_LIMIT_MAX=10
RATE_LIMIT_WINDOW_MS=60000
```

> ⚠️ **Never commit `.env.local` to version control.** It's listed in `.gitignore` by default.

---

## Email Provider Options

### Option A: Gmail (SMTP)
- Use Gmail with **App Passwords** (requires 2FA enabled)
- `EMAIL_HOST=smtp.gmail.com`, `EMAIL_PORT=587`
- Free but has sending limits (500/day)

### Option B: Resend (Recommended for Production)
- Sign up at [resend.com](https://resend.com)
- Install: `npm install resend`
- Update `src/app/api/enquiries/route.ts` to use Resend SDK
- Free tier: 3,000 emails/month
- Set `RESEND_API_KEY` in env vars

### Option C: SendGrid
- Sign up at [sendgrid.com](https://sendgrid.com)
- Install: `npm install @sendgrid/mail`
- Set `SENDGRID_API_KEY` in env vars
- Free tier: 100 emails/day

### Option D: Amazon SES
- Best for high volume production
- Requires AWS account and domain verification

---

## Build Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | TypeScript type check |

---

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes (no type errors)
- [ ] All navigation links tested
- [ ] Contact form submits correctly
- [ ] Email delivery tested
- [ ] Mobile responsiveness verified
- [ ] Custom domain configured and SSL active
- [ ] `robots.txt` allows crawling
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Google Analytics / Search Console set up (optional)

---

## Updating the Site

After code changes:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel deploys automatically on push. For self-hosted:
```bash
cd /var/www/feelexim
git pull
npm install
npm run build
pm2 restart feelexim
```

---

## Rollback

On Vercel: Dashboard → Deployments → Click previous deployment → **Promote to Production**

On self-hosted:
```bash
git log --oneline   # find previous commit hash
git checkout <hash>
npm run build
pm2 restart feelexim
```
