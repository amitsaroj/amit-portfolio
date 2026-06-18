# SEO Audit Report — Amit Saroj Portfolio

**Site:** https://portfolio.autopilot.monster  
**Audit date:** June 18, 2026  
**Stack:** Next.js 16 (App Router) · TypeScript · Single-page portfolio  

---

## Executive Summary

The portfolio shipped with partial SEO (basic metadata and a minimal Person schema) but was not production-ready for personal-brand ranking. Critical gaps included wrong canonical domain, missing crawl assets, broken social images, incomplete structured data, weak internal linking, and no reusable SEO system.

This audit documents issues found **before** remediation and the **implemented fixes**.

---

## 1. Title Tags

| Page / Section | Before | After | Status |
|---|---|---|---|
| Home | `Amit Saroj \| Senior Full Stack Developer – Node.js, NestJS, MERN Stack` | `Amit Saroj \| Full Stack Developer, AI Engineer & MERN Expert` | Fixed |
| Projects (section) | No dedicated route metadata | Configured in `PAGE_SEO.projects` for future routes / sharing | Fixed (config) |
| Experience | No dedicated metadata | `Experience \| Amit Saroj` in SEO config | Fixed (config) |
| Contact | No dedicated metadata | `Contact Amit Saroj` in SEO config | Fixed (config) |
| Blog | Not present | Reserved in SEO config (`/blog`) — route not yet implemented | Planned |

**Finding:** Single-page app used one global title only.  
**Fix:** Centralized title templates in `app/lib/seo.ts` with per-section SEO presets.

---

## 2. Meta Descriptions

| Issue | Severity | Status |
|---|---|---|
| Description existed but did not target all brand keywords | Medium | Fixed |
| No unique descriptions per section | Medium | Fixed via `PAGE_SEO` presets |
| Duplicate/overlong description in OG + Twitter | Low | Fixed via `buildMetadata()` |

**Current home description:**  
*Amit Saroj is a Full Stack Developer specializing in React.js, Node.js, NestJS, AI Automation, Agentic AI, n8n Workflows, Microservices, Kafka, PostgreSQL, Redis and scalable SaaS applications.*

---

## 3. Canonical URLs

| Issue | Severity | Status |
|---|---|---|
| `metadataBase` pointed to `https://autopilot.monster` instead of portfolio domain | **Critical** | Fixed |
| Canonical not aligned with production URL | **Critical** | Fixed |

**Production canonical base:** `https://portfolio.autopilot.monster`  
Implemented in `app/lib/seo.ts` → `buildCanonical()` and `metadataBase`.

---

## 4. robots.txt

| Issue | Severity | Status |
|---|---|---|
| Missing `robots.txt` | High | Fixed |
| No sitemap reference | High | Fixed |

**Implemented:**
- Dynamic: `app/robots.ts` → `/robots.txt`
- Static fallback: `public/robots.txt`

---

## 5. sitemap.xml

| Issue | Severity | Status |
|---|---|---|
| Missing sitemap | High | Fixed |
| Section URLs not discoverable | Medium | Fixed (hash URLs included) |

**Implemented:**
- Dynamic: `app/sitemap.ts` → `/sitemap.xml`
- Static fallback: `public/sitemap.xml`

**URLs included:** `/`, `/#about`, `/#experience`, `/#projects`, `/#github`, `/#skills`, `/#education`, `/#contact`

---

## 6. Structured Data (JSON-LD)

| Schema | Before | After |
|---|---|---|
| Person | Basic inline script in layout | Expanded with skills, alumni, occupation |
| WebSite | Missing | Added |
| Organization (AutopilotMonster) | Missing | Added |
| ProfilePage | Missing | Added |
| Portfolio / CollectionPage | Missing | Added |
| CreativeWork (Projects) | Missing | Added per project |
| BreadcrumbList | Missing | Added |
| OrganizationRole (Experience) | Missing | Added |

**Implementation:** `app/components/JsonLd.tsx` + `buildStructuredDataGraph()` in `app/lib/seo.ts`

---

## 7. Open Graph Tags

| Tag | Before | After |
|---|---|---|
| `og:title` | Present | Optimized |
| `og:description` | Present | Optimized |
| `og:image` | Referenced `/og-image.png` (**file missing**) | **Fixed** — `public/og-image.png` + `app/opengraph-image.tsx` |
| `og:url` | Wrong domain | Fixed |
| `og:type` | `website` | `website` |
| `og:locale` | `en_IN` | `en_IN` |
| `og:site_name` | Present | `Amit Saroj Portfolio` |

---

## 8. Twitter Cards

| Tag | Before | After |
|---|---|---|
| `twitter:card` | `summary_large_image` | `summary_large_image` |
| `twitter:title` | Present | Optimized |
| `twitter:description` | Present | Optimized |
| `twitter:image` | Broken (missing asset) | Fixed |

---

## 9. Image Alt Text

| Asset | Before | After |
|---|---|---|
| `og-image.png` | Missing file | Generated with descriptive OG content |
| `icon.svg` | Missing | Added with `aria-label` |
| `favicon.ico` | Missing | Generated |
| `apple-touch-icon.png` | Missing | Generated |
| UI images | No `<img>` tags in app (SVG icons only) | N/A — icons use `aria-hidden` / `aria-label` |

**Note:** No raster content images in components; icon-only UI is accessible via ARIA.

---

## 10. Heading Hierarchy

| Check | Before | After |
|---|---|---|
| Single H1 per page | Pass (Hero only) | Pass |
| H2 for sections | Pass | Pass |
| H3 for subsections | Pass (Experience, Education, Projects) | Pass |
| H1 keyword enrichment | Name only | Added sr-only brand phrase |

---

## 11. Internal Linking

| Issue | Before | After |
|---|---|---|
| Nav used `<button>` only (not crawlable) | High | Fixed — anchor `href="#section"` + smooth scroll |
| No footer section links | Medium | Fixed |
| No breadcrumb navigation | Medium | Fixed (visible + JSON-LD) |

---

## 12. Breadcrumbs

| Type | Status |
|---|---|
| Visible breadcrumb nav | Added on home page |
| `BreadcrumbList` schema | Added in JSON-LD |

---

## 13. Duplicate Metadata

| Issue | Status |
|---|---|
| Inline JSON-LD duplicated concerns with metadata | Fixed — single `JsonLd` component |
| Layout + page metadata overlap | Fixed — `metadataBase` in layout, page metadata in `page.tsx` |

---

## 14. Broken Links

| Link | Before | After |
|---|---|---|
| `/og-image.png` | 404 | Fixed |
| `/favicon.ico` | 404 | Fixed |
| `/apple-touch-icon.png` | 404 | Fixed |
| External project URLs | Valid (AutopilotMonster, OwnerScope, GitHub, LinkedIn) | Verified in `profile.ts` |
| Resume PDF `/Amit_Saroj_5_Years.pdf` | Present in `public/` | OK |

---

## 15. Performance Issues Affecting SEO

| Issue | Impact | Fix |
|---|---|---|
| Google Fonts via CSS `@import` (render-blocking) | Medium | Migrated to `next/font/google` |
| No asset cache headers | Low | Added in `next.config.ts` |
| `poweredByHeader` exposed | Low | Disabled |
| Client-heavy sections (GitHub API) | Low | Acceptable — content still indexable |
| No `manifest.webmanifest` | Low | Added |

**Build result:** Production build passes successfully.

---

## 16. Keywords Strategy

Target keywords now included in metadata:

- Amit Saroj
- Amit Saroj Portfolio
- Amit Saroj Full Stack Developer
- Amit Saroj React Developer
- Amit Saroj Node.js Developer
- Amit Saroj AI Engineer
- Amit Saroj MERN Developer
- Amit Saroj Software Engineer
- Autopilot Monster Founder
- AI Automation Developer India

---

## 17. Files Added / Updated

### Added
- `app/lib/seo.ts` — reusable SEO utility
- `app/components/JsonLd.tsx` — structured data
- `app/sitemap.ts` — dynamic sitemap
- `app/robots.ts` — dynamic robots
- `app/opengraph-image.tsx` — dynamic OG fallback
- `public/og-image.png`
- `public/favicon.ico`
- `public/apple-touch-icon.png`
- `public/icon.svg`
- `public/manifest.webmanifest`
- `public/robots.txt`
- `public/sitemap.xml`

### Updated
- `app/layout.tsx`
- `app/page.tsx`
- `app/components/Navigation.tsx`
- `app/components/Hero.tsx`
- `app/data/profile.ts`
- `app/globals.css`
- `next.config.ts`

---

## 18. Validation Checklist

| Check | Result |
|---|---|
| Production build | Pass |
| `/robots.txt` generated | Pass |
| `/sitemap.xml` generated | Pass |
| Canonical domain | `https://portfolio.autopilot.monster` |
| OG image exists | Pass |
| JSON-LD graph valid JSON | Pass |
| One H1 per page | Pass |
| Internal anchor links | Pass |
| Twitter `summary_large_image` | Pass |

---

## 19. Remaining Recommendations

1. **Deploy to `portfolio.autopilot.monster`** and verify Google Search Console + Bing Webmaster.
2. **Submit sitemap** in Search Console after deploy.
3. **Add `/blog` route** when content is ready (SEO preset already defined).
4. **Consider dedicated routes** (`/projects`, `/experience`) for stronger section-level indexing.
5. **Add `sameAs` Twitter/X URL** when available.
6. **Monitor Core Web Vitals** on production CDN/hosting.

---

## 20. Social Sharing Readiness

Rich previews configured for:

- LinkedIn (OG tags + 1200×630 image)
- Twitter/X (`summary_large_image`)
- WhatsApp / Facebook (Open Graph)
- Discord / Telegram (OG image + title)

---

*Report generated after full SEO implementation on the Amit Saroj portfolio codebase.*
