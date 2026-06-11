# Plum Crazy — placeholders to resolve before production launch

All placeholder values live at the **top of `app/page.tsx`** in one block, plus the items below. This is the client sign-off checklist.

## From the client
- [ ] **Phone number** (`PHONE_DISPLAY` / `PHONE_TEL`) — currently (702) 555-0123
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
