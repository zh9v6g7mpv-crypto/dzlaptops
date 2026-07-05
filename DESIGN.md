# DZLaptops — Design System

Design direction developed with the **frontend-design** skill: a distinctive,
subject-grounded identity rather than a templated look.

## Concept — "Hardware datasheet / technical instrument"
A laptop shop's world is precision hardware, spec sheets and screen glow, so the
site reads like a **technical datasheet for a precision instrument**. Your blue
is kept, but reframed as *screen-glow* rather than generic "tech blue."

## Signature
The hero **device viewport**: a line-art laptop schematic with a glowing screen
and a blinking terminal cursor, framed with mono HUD readouts
(`DZ//OR-01`, `OPEN`, `SCHEMATIC`, `24H TEST`). It literally diagrams the offer.
Everything else is kept quiet so the signature carries the page.

## Color
| Token | Light | Dark |
|-------|-------|------|
| Ink / text | `#0A1626` | `#E9EEFB` |
| Screen (primary) | `#2F6BFF` | `#6FA0FF` |
| Signal (status LED) | `#FFC24B` | `#FFC24B` |
| Canvas | `#ECEFF4` | `#071120` |
| Surface | `#FFFFFF` | `#0C1A2E` |
| Hairline | `#CDD8E8` | rgba(127,178,255,.16) |

One warm accent only (`--signal` amber) for status LEDs and the two headline
guarantees — spent deliberately, per the "one bold thing" principle.

## Typography (deliberate pairing, not one family everywhere)
- **Display:** Space Grotesk — characterful technical grotesk, used for headlines
- **Body:** IBM Plex Sans — engineered, neutral; **IBM Plex Sans Arabic** for RTL
- **Utility/data:** IBM Plex Mono — labels, spec keys, phone numbers, hours, values

## Structure as information
- Mono **field-labels** (`INCLUDED`, `BRANDS`, `SHOWROOM`, `CONTACT`) instead of decorative eyebrows
- Guarantees rendered as a real **spec-list** (key · description · value)
- Brands as a **parts index** grid, not marketing cards
- Hairline rules, low radius (8px), faint background grid — the datasheet substrate
- No sequential numbering (the content isn't a sequence)

## Quality floor
Responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected,
full light/dark parity, FR/EN/AR with RTL, and content that still renders with
JavaScript disabled.

---
*Earlier iterations explored a ui-ux-pro-max "Bento Box Grid + SaaS blue" system;
this frontend-design pass replaced it with the instrument direction above.*
