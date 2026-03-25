# Design System — Squish Toy Guide

## Product Context
- **What this is:** Niche SEO content site with expert reviews, buying guides, and blog posts about Needoh squish toys
- **Who it's for:** Parents, sensory toy enthusiasts, and fidget toy buyers (adults, not children)
- **Space/industry:** Toy reviews, sensory products, niche affiliate content
- **Project type:** Editorial content site with display ad monetization

## Aesthetic Direction
- **Direction:** Playful Editorial
- **Decoration level:** Intentional (subtle rounded corners, soft shadows, warm gradients in scorecard)
- **Mood:** Like a curated parenting magazine meets Wirecutter. Trusted, warm, with touches of playfulness. Not a kids' site, not a generic blog. A tactile editorial experience about sensory objects.
- **Reference sites:** thetoyinsider.com (content structure), reviewed.com (editorial quality), getono.com (sensory brand warmth)

## Typography
- **Display/Hero:** Fraunces — Variable serif with optical SOFT axis. The letterforms literally look "squishy," creating instant brand alignment with the product category. Used for all headings h1-h3 and pull quotes.
- **Body:** Plus Jakarta Sans — Slightly rounded geometric sans-serif with excellent readability for long-form content. Friendly without being childish.
- **UI/Labels:** Plus Jakarta Sans (same as body, weight 600)
- **Data/Tables:** DM Sans — Clean geometric sans with tabular-nums support. Used exclusively in Sensory Scorecard and data displays.
- **Code:** Not applicable (no code content on site)
- **Loading:** Google Fonts CDN — `family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap`
- **Scale:**
  - h1: 36px / 2.25rem (font-weight: 700)
  - h2: 24px / 1.5rem (font-weight: 700)
  - h3: 20px / 1.25rem (font-weight: 600)
  - Body: 16px / 1rem (line-height: 1.75)
  - Small: 14px / 0.875rem
  - Caption: 12px / 0.75rem
  - Data display: 32px / 2rem (font-weight: 700, tabular-nums)

## Color
- **Approach:** Balanced (primary + warm accent + clean neutrals)

### Light Mode
- **Background:** #FEFAF5 (warm cream, not sterile white)
- **Surface:** #FFFFFF (white cards elevated on cream background)
- **Primary:** #7C5CFC (friendly violet, used for links, buttons, brand accents)
- **Primary Hover:** #6A48E8
- **Primary Light:** #EDE6FF (tag backgrounds, light fills)
- **Accent:** #FF7A5C (warm coral, used for secondary CTAs, highlights, warmth)
- **Accent Hover:** #FF6842
- **Accent Light:** #FFE8E2
- **Text:** #2D2235 (warm dark, not pure black)
- **Text Secondary:** #786D8A (muted violet-gray)
- **Text Muted:** #A89FBD (light violet-gray for captions, dates)
- **Border:** #F0E8DC (warm edge)
- **Border Strong:** #E0D5C8 (for input borders, dividers)
- **Teal:** #2BB5A0 (tertiary accent for age tags, success-adjacent)
- **Teal Light:** #E0F5F0
- **Semantic:** success #2ECC71, warning #F39C12, error #E74C3C, info #3498DB

### Dark Mode
- **Background:** #1A1523
- **Surface:** #241E2E
- **Primary:** #9B82FF (lighter violet for dark backgrounds)
- **Primary Hover:** #B09EFF
- **Primary Light:** #2E2645
- **Accent:** #FF9A85 (lighter coral)
- **Accent Light:** #3A2525
- **Text:** #F0ECF5
- **Text Secondary:** #B0A5C0
- **Text Muted:** #786D8A
- **Border:** #342B42
- **Border Strong:** #453A58

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px)

## Layout
- **Approach:** Grid-disciplined
- **Grid:** 1 column (mobile) / 2 columns (tablet) / 3 columns (desktop listings)
- **Max content width:** 768px for articles, 1100px for listing pages
- **Border radius:** sm: 6px, md: 12px, lg: 16px, full: 9999px (pills/tags)

## Shadows
- **Small:** 0 1px 3px rgba(45,34,53,0.06) — cards at rest
- **Medium:** 0 4px 12px rgba(45,34,53,0.08) — cards on hover, floating elements
- **Large:** 0 8px 24px rgba(45,34,53,0.1) — modals, overlays

## Motion
- **Approach:** Minimal-functional (only transitions that aid comprehension)
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms)
- **Hover states:** Cards lift 2px with shadow-md transition (200ms ease)
- **Link underlines:** text-decoration-color transitions on hover (200ms)

## Component Patterns

### Tags/Badges
- Pill-shaped (border-radius: full)
- Three variants: purple (primary-light/primary), coral (accent-light/accent), teal (teal-light/teal)
- Font: 12px, weight 600

### Cards (Listing Pages)
- White surface with 1px border on cream background
- border-radius: md (12px)
- Hover: translateY(-2px) + shadow-md
- Image area with gradient background (primary-light to accent-light)

### Sensory Scorecard
- White surface card with border
- 5-column grid for scores
- Score values in DM Sans 32px bold, primary color
- Progress bars: 6px height, rounded, color-coded per dimension
- Labels: 12px weight 600, text-secondary

### Ad Slots
- Clearly separated from content with margin (24px vertical)
- Dashed border (2px, border-strong) on cream background
- Never styled to look like content

### Article Prose
- Max-width: 680px within the 768px content area
- Links: primary color with primary-light underline, transitioning to solid on hover
- Headings: Fraunces, generous top margin (32px)
- Paragraphs: 16px, line-height 1.75, 16px bottom margin

### Breadcrumbs
- 13px, text-muted color
- Links in primary color
- Separator: " / "

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-25 | Initial design system created | Created by /design-consultation based on competitive research of toy review sites and first-principles analysis of the parent/adult audience |
| 2026-03-25 | Fraunces chosen as display font | Optical SOFT axis creates "squishy" letterforms matching the product category. No competitor uses this approach. |
| 2026-03-25 | Warm cream background (#FEFAF5) | Differentiator from sterile white review sites. Evokes tactile warmth matching sensory toy theme. |
| 2026-03-25 | Purple + Coral dual-accent | Purple maintains brand continuity from existing site. Coral adds warmth and energy for a distinctive palette. |
