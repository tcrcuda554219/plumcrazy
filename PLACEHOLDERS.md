# Plumb Crazy — placeholders to resolve before production launch

All placeholder values live at the **top of `app/page.tsx`** in one block, plus the items below. This is the client sign-off checklist.

## From the client
- [ ] **Phone number** (`PHONE_DISPLAY` / `PHONE_TEL`) — (702) 600-1814 pulled from their existing badge — CONFIRM it is the right line for the HVAC brand
- [ ] **Business address** (footer note) + whether they want it published (SAB vs storefront)
- [ ] **NV contractor license number** (`LICENSE`)
- [ ] **Signature offer** (`OFFER_HEADLINE` / `OFFER_FINE`) — currently "$500 off a complete system install" as a sample
- [ ] **Financing partner + terms** (`FINANCING_LINE`)
- [ ] **Logo + final brand colors** (currently text wordmark + plum palette from the 7LSM design system)
- [ ] **Certifications / dealer badges** (NATE, brand dealerships, BBB) for a trust strip
- [ ] **Real photos** of crew/trucks/jobs (optional but powerful for the why-us section)
- [ ] **Review platform links** (Google, Yelp) once GBP is set up

## Production-launch tasks (7LSM)
- [ ] Flip `robots: { index: false }` → indexable in `app/layout.tsx` (CURRENTLY NOINDEX FOR STAGING)
- [ ] Final domain + canonical + og:image (use the ignited hero still, 1200×630)
- [ ] JSON-LD schema: LocalBusiness/HVACBusiness + Service + FAQPage + OpeningHoursSpecification (24/7) — with REAL NAP only
- [ ] sitemap.ts + GSC submission
- [ ] Wire CTAs to GHL booking/forms (currently anchor/tel placeholders)
- [ ] GA4 + conversion events per the 7LSM playbook
- [ ] Migrate hosting Vercel → VMID 1012 (web-plumcrazy-prod) + Caddy + Cloudflare
- [ ] Emergency/24-hour dedicated service page (SEO cluster) — phase 2
- [ ] Exploded-view 3D section — phase 2
- [ ] Instant-estimate flow (GHL-backed) — phase 2

## Added 2026-06-12 (multi-page expansion)
- [ ] **Real project photos** from the client (residential + commercial jobs) — `/projects` currently uses brand visuals as stand-ins
- [ ] **Office address** → swap the generic Las Vegas map embed on `/contact` for the exact pin / GBP embed
- [ ] **Google Business Profile reviews link** → wire the "Read our reviews on Google" button + replace the 3 SAMPLE review cards with real ones
- [ ] **About-page story** — founding year, owners, team, real history (current copy is a styled placeholder)
- [ ] **Contact form wiring** → booking/CRM at launch (form UI is staged, submit disabled, phone CTA active)

## Added 2026-06-12 (services/specials/news)
- [ ] **Real coupon offers + terms** — /specials cards are layout placeholders
- [ ] **Article content** — /news has 4 planned titles with excerpts; full posts written at launch (content-engine retainer deliverable)
- [ ] **Service-page copy review** — client confirms claims (every-brand service, stocked trucks, etc.) on the 5 /services/* pages
