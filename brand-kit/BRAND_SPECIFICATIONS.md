# Foundation Dental Center — Production Brand Kit v3.1 — Approved Arch

## What changed
- All logo variants now use the approved three-arch geometry (v2 approval proof), replacing five nested arch strokes and rounded ends with three arches and horizontal feet. Wordmark glyph outlines and their transforms remain unchanged. Added independent arch glyph in gold/navy/black/white, horizontal layouts using **exact existing outlined wordmark glyphs**, all-white/monochrome stack variants, trimmed SVG viewBoxes and transparent PNG exports.
- The standalone arch is the preferred avatar, social profile, favicon and small application symbol. The square PNG avatar files deliberately contain a safe margin for circular cropping; this is **intentional** and not unwanted padding.
- Horizontal variants are new compositions built from the approved arch and the original outlined wordmark. Spacing tightened in v3.1 (gap between arch and wordmark ≈ one-third of the arch width). Approved for web, stationery and digital use; confirm with a physical proof before permanent signage or embroidery.

## Official color nomenclature
| Name | HEX | RGB | Role |
|---|---|---|---|
| Navy | #2F3E4D | 47, 62, 77 | Primary brand text / surfaces |
| Gold | #B2884D | 178, 136, 77 | Arch / accent; not small UI text |
| Cream | #F6F1E7 | 246, 241, 231 | Light brand background |
| Black | #000000 | 0, 0, 0 | One-color reproduction |
| White | #FFFFFF | 255, 255, 255 | Reversed reproduction |

No official CMYK/Pantone equivalents are approved. Request a calibrated vendor proof and substrate-specific specification; automated RGB-to-CMYK values are not brand standards. Any optional grays are secondary UI colors, not logo colors.

## Typography
Embedded font names identified in the supplied PDFs: **Times New Roman (FOUNDATION)** and **Helvetica Neue (DENTAL CENTER and supporting descriptor)**. Both are preserved as **outlines** in the distributed SVG artwork; no logo fonts are required by the receiver. Identification does not grant a license for using these fonts in new web pages or marketing layouts.

**Approved supporting type system:** **Cormorant Garamond** (weights 500–600, 20px and larger) for display headings, and **Manrope** for web/body/marketing. Both are available under open-source font licensing via Google Fonts; download fonts and check licenses before production. Do not recreate the wordmark by typing with these substitutes.

## Use and placement
- **Profile photos, Google Business Profile, patient portal:** `fdc-arch-gold.svg` or `fdc-arch-avatar-*.png`.
- **Favicon and app icons (anything under ~64px):** `fdc-favicon.svg`, `favicon.ico`, `fdc-favicon-*.png`. This is a small-size variant: the approved arch on a navy rounded square with a heavier stroke so the three arches stay distinct at 16–32px. Use it only at icon sizes; never in place of the logo.
- **Website header / letterhead / email signatures:** `fdc-horizontal-light.svg` on light surfaces, or `fdc-horizontal-dark.svg` on dark surfaces. These are new compositions requiring aesthetic approval.
- **Embroidery, one-ink print, glass vinyl:** `fdc-horizontal-white.svg`, `fdc-stacked-compact-white.svg`, or black variants, depending on substrate. Thin strokes may require vendor-specific minimum thickness checks.
- **Full original stacked mark:** use at **300 CSS pixels wide / 2 inches wide or larger** as a preliminary rule of thumb; below that use a no-tagline compact or horizontal design. This is a practical legibility guideline, not an empirically validated print standard.
- **Clear space:** keep at least **1/5 the visible arch width** clear on every side of each logo. This is imposed by page/layout design, *not* blank canvas in the trimmed vector file. Small circular-avatar PNGs intentionally use more inset.
- **Do not** stretch, modify stroke thickness, change spacing, add shadows, or place gold small text on cream/white.

## Accessibility contrast (WCAG 2.x text, derived from listed HEX colors)
| Text and background | Contrast | WCAG AA guidance |
|---|---:|---|
| Navy on white | 10.95:1 | AA normal + large |
| Navy on cream | 9.73:1 | AA normal + large |
| Gold on white | 3.22:1 | AA large only |
| Gold on cream | 2.86:1 | Fails AA text |
| Gold on navy | 3.40:1 | AA large only |

Normal text needs 4.5:1; large text (generally 18pt+ regular or 14pt+ bold) needs 3:1. Functional UI components and essential graphical boundaries generally need 3:1 against adjacent colors. WCAG evaluation also depends on full UI implementation and cannot be guaranteed by logo files alone. For gold accents/icons on navy, the 3:1 threshold is met; gold on cream does not meet 3:1.

## Verification / file characteristics
- All SVG artwork uses vector paths and outlines, not bitmap vector tracing; SVG fonts are embedded as paths, with per-glyph `use` references (no font installation).
- SVGs have **tight artwork viewBoxes**. PNGs of lockups are also tightly framed and transparent.
- Avatar PNGs include intentional square padding for a safe circular crop.
- These files are not a new color-managed or prepress-approved CMYK/Pantone system. The `Print_PDF_EPS/` holds PDF and EPS versions regenerated with the approved arch (formerly labeled Original_PDF_EPS). The pre-correction designer originals are archived in the v1 asset ZIP and should not be sent to vendors.


## Geometry reconciliation (approved October 21, 2026)
Approved arch: three concentric curves and flat horizontal base terminals. Both innermost baseline joins are clean. All 16 SVG variants share the exact approved path coordinates; color only varies. Corresponding PNG and Original_PDF_EPS exports were regenerated. Original v2 ZIP is retained separately and unchanged.

## v3.1 changes (October 21, 2026)
- Horizontal lockups (all four colors): wordmark moved closer to the arch; gap reduced from ~0.59 to ~0.33 of the arch width. Arch, wordmark and colors unchanged. ViewBoxes trimmed so there is no extra blank space on the left.
- Standalone arch SVG/PNG (gold, navy, black, white): viewBoxes trimmed to the artwork. Geometry unchanged.
- Added favicon set: `fdc-favicon.svg`, `favicon.ico` (16/32/48), `fdc-favicon-16/32/48/180/512.png`.
- Renamed `Original_PDF_EPS/` to `Print_PDF_EPS/` because those files were regenerated with the approved arch.
- Stacked lockups, avatars and wordmark untouched.
