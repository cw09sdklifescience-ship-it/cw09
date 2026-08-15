# PharmaCore — Pharma Company Website

A production-ready, SEO-optimised pharmaceutical company website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with custom pharma theme tokens
- `next-sitemap` for automatic sitemap & robots.txt
- JSON-LD structured data on all key pages
- Fully responsive (mobile-first)

## Pages
| Route | Page |
|-------|------|
| `/` | Home (Hero, Stats, Products, Therapies, Why Us, Testimonials, CTA) |
| `/about` | About Us + Timeline |
| `/products` | Product catalogue table |
| `/services` | Therapy Areas |
| `/contact` | Contact form + info |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post (Article JSON-LD) |
| `/careers` | Job openings |

## SEO Features
- `<Metadata>` on every page (title, description, OG, Twitter)
- JSON-LD structured data (Organization, ContactPage, Article)
- `next-sitemap` auto-generates `/sitemap.xml` and `/robots.txt`
- Semantic HTML (h1, article, section, nav, footer)
- Canonical URLs on every page

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # fill in your values
npm run dev
```

## Production Build

```bash
npm run build    # also auto-generates sitemap + robots.txt
npm run start
```

## Customisation Checklist
- [ ] Replace `yourpharmacompany.com` with actual domain (all files)
- [ ] Update company name "PharmaCore" throughout
- [ ] Add real logo to `/public/logo.png` and OG image to `/public/og-image.jpg`
- [ ] Fill in actual contact details (phone, email, address)
- [ ] Replace placeholder products in `/src/app/products/page.tsx`
- [ ] Add real blog content in `/src/app/blog/[slug]/page.tsx`
- [ ] Connect contact form to email service (Nodemailer / Resend)
