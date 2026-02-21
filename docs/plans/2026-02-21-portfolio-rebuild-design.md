# Portfolio Rebuild Design - ajenson.com

## Goal
Rebuild Adrian Jenson's portfolio as a Next.js site optimized for freelance client acquisition, positioning as a full-stack AI/SaaS builder.

## Tech Stack
- Next.js 14+ (App Router, SSG)
- TypeScript (strict)
- Tailwind CSS (dark navy design system)
- Framer Motion (animations)
- MDX (blog + case studies)
- Resend (contact form)
- Vercel (hosting)

## Design Direction
Evolved dark navy theme (`#0a192f` base) with modern typography, scroll animations, and better content hierarchy. No progress bars - clean tech grids instead.

## Site Structure

### Pages
1. **`/`** - Homepage (hero, services preview, 3 featured case studies, about preview, CTA)
2. **`/about`** - Full story, experience timeline, skills grid, education
3. **`/services`** - 5 service offerings with descriptions
4. **`/work`** - All case studies grid
5. **`/work/[slug]`** - Individual case study (problem/approach/result)
6. **`/blog`** - Technical articles for SEO
7. **`/blog/[slug]`** - Individual blog post
8. **`/contact`** - Contact form + email + social links

### Homepage Sections (scroll order)
1. Hero - "I build AI-powered SaaS products" + "Let's Talk" CTA
2. Services preview - 4 service cards linking to /services
3. Featured Work - 3 case study cards (posteridy.ai, bermwood, malogica)
4. About preview - Photo, short bio, "Learn More" link
5. Tech Stack - Clean logo grid (no progress bars)
6. Contact CTA - "Ready to build something?" + form link

### Services (5 offerings)
1. AI/SaaS Product Development
2. Custom Web Application Development
3. Frontend Architecture & Migration
4. API Development & Integration
5. AI Integration & RAG Applications

### Case Studies (featured 3)
Each includes: problem, approach, tech stack, results, screenshots

1. **posteridy.ai** - AI-powered poster generation SaaS
2. **Bermwood Real Estate Platform** - Next.js real estate with Google Maps
3. **Malogica HPC Cloud Platform** - Enterprise Angular application

### SEO Strategy
- SSG all pages (instant load, fully crawlable)
- Metadata API on every page with unique title/description
- JSON-LD: Person + ProfessionalService schemas
- Auto-generated sitemap.xml + robots.txt
- Blog targeting: "hire AI developer", "freelance Next.js developer", "SaaS developer for hire"
- OG images per page
- Professional email: adrian@ajenson.com
- Fix www.ajenson.com DNS

### Key Content Changes
- Hero: outcome-focused headline, not resume-speak
- Contact: "I'm available for projects" (remove "not looking for opportunities")
- About: real story and philosophy (replace empty placeholder)
- Projects -> Case studies with measurable results
- Add services section (currently missing entirely)
- Remove GitHub stats from homepage (replace with featured work)
- Remove self-assessed skill percentages

### Domain Strategy
- `ajenson.com` - Primary portfolio (Vercel)
- `www.ajenson.com` - Redirect to ajenson.com
- `posteridy.ai` - Keep as standalone product
- `adrian@ajenson.com` - Professional email
