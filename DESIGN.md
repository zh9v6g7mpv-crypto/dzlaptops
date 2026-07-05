# DZLaptops — Design System

This design is sourced from the **ui-ux-pro-max** skill databases (not hand-picked).
Queries used and the values applied:

## Style — "Bento Box Grid" (skill's #1 match)
`search.py "apple minimal premium electronics clean" --domain style`

Applied to the "Why DZLaptops" section: modular, asymmetric cards with varied
spans (a 2×2 feature tile + wide + 1×1 tiles).

- `--card-radius` (radius-lg): **24px**
- grid gap: **16px**
- shadow: **0 4px 6px rgba(15,23,42,.05)**
- hover: **scale(1.02)**
- canvas: **#F5F5F7**, card: **#FFFFFF**, text: **#1D1D1F**

## Color — SaaS / CRM professional blue (skill color DB)
`search.py "saas technology blue professional" --domain color`

| Token | Light | Dark |
|-------|-------|------|
| Primary | `#2563EB` | `#3B82F6` |
| On primary | `#FFFFFF` | `#FFFFFF` |
| Muted foreground | `#64748B` | `#94A3B8` |
| Border | `#E4ECFC` | rgba(255,255,255,.10) |
| Canvas (elevated) | `#F5F5F7` | `#101012` |

## Typography — "Minimal Swiss" (Inter)
`search.py "apple minimal premium tech modern clean" --domain typography`

Named skill pairing (Result 2): **Inter** across headings/body with weight
variation. Arabic uses **Cairo**.

## Landing structure — "Feature-Rich Showcase"
`search.py "ecommerce product showcase hero features" --domain landing`

Section order applied on the home page:
1. Hero (value prop) → 2. Feature grid/cards (Bento) → 3. Brands →
4. Benefits/info (hours + location) → 5. CTA (repeated).

## Accessibility / UX (skill Quick Reference)
- Contrast ≥ 4.5:1, visible focus rings, `prefers-reduced-motion` respected
- Touch targets ≥ 44px, SVG icons (no emoji), tabular numerals for prices/times
- Full light/dark parity, RTL for Arabic
