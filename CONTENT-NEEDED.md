# CONTENT-NEEDED.md
Items below are data-gated: the component is built and live but renders only when the file/field is filled in. Nothing goes live by accident.

---

## HIGH PRIORITY

### A. Testimonials
**File:** `src/_data/siteContent/testimonials.json`  
**Format:** JSON array. Each item:
```json
{
  "firstName": "Jane",
  "lastInitial": "D",
  "quote": "…patient quote…",
  "treatment": "Full-Arch Implants"
}
```
**Length:** 3–6 entries recommended. Quote: 1–3 sentences max.  
**Appears on:** Homepage (after problem section), /full-arch-fixed (after testimonials section)  
**To enable:** Set `"showTestimonials": true` in `src/_data/site.json`  
**Note:** No photos, no star ratings, no last names. Neutral attribution only.

---

### D. Credibility Stats Strip
**File:** `src/_data/siteContent/bio.json` → `stats` array  
**Format:**
```json
{
  "stats": [
    { "value": "18 yr", "label": "In practice" },
    { "value": "500+", "label": "Full-arch cases" }
  ]
}
```
**Length:** 3–4 stats. Values must be factual and verifiable.  
**Appears on:** Homepage (between trust bar and problem section)  
**Note:** Never hardcode. Pull from this file only.

---

### G. Anesthesiologist Card
**File:** `src/_data/siteContent/anesthesiologist.json`  
**Format:**
```json
{
  "name": "Dr. First Last, MD",
  "credentials": "Board-Certified Anesthesiologist",
  "photo": "/assets/photos/anesthesiologist-name.jpg"
}
```
**Appears on:** /full-arch-fixed (MD anesthesiologist section), /anesthesia  
**Note:** Add photo to `src/assets/photos/` first. Confirm name/credentials before publishing.

---

### 7. Pronunciation Guide
**Field:** `"doctorPronunciation"` in `src/_data/site.json`  
**Format:** Phonetic string, e.g. `"pah-SIS-nik"`  
**Appears on:** /meet-the-doctor (below doctor name in hero)  
**To enable:** Set the field to a non-empty string.

---

## MEDIUM PRIORITY

### E. Pricing / Financing Block (Full-Arch)
**File:** `src/_data/siteContent/pricing.json`  
**Format:**
```json
{
  "fullArch": "Full-arch cases typically range from $X to $Y per arch, depending on bone volume and prosthesis type.",
  "anesthesia": "Anesthesia fees are separate from surgical fees and depend on procedure length…",
  "financing": [
    { "name": "CareCredit", "url": "https://www.carecredit.com", "logo": "" },
    { "name": "Sunbit", "url": "https://sunbit.com", "logo": "" }
  ],
  "showCostTier": false
}
```
**Appears on:** /full-arch-fixed (FAQ block), /faq, /anesthesia (FAQ block)  
**Cost-tier row** on comparison table: set `"showCostTier": true` to show $$ vs $$$ row on `/full-arch-fixed` and `/implant-dentures`  
**Note:** Florida dental advertising rules apply — no "as low as" framing without the full disclosure.

---

### F. "Your Consultation" Block
**File:** `src/_data/siteContent/consultation.json`  
**Format:**
```json
{
  "cost": "$XXX",
  "length": "60–90 minutes",
  "includes": "Includes a 3D cone-beam scan, clinical exam, and written treatment plan.",
  "whatToBring": "Insurance card, list of current medications, any prior dental X-rays."
}
```
**Appears on:** Homepage, /contact (when fields are non-empty)

---

### H. Doctor Bio Additions
**File:** `src/_data/siteContent/bio.json` → add fields:
```json
{
  "memberships": ["American Dental Association", "…"],
  "fellowships": ["…"],
  "yearsExperience": "18",
  "zygomaticExperience": "Over X zygomatic implant cases placed",
  "zygomaticRecovery": "<p>Recovery paragraph(s) about zygomatic implant timeline, swelling, diet restrictions, etc.</p>"
}
```
**Appears on:** /meet-the-doctor (credentials), /zygomatic-implants (experience line, recovery section)  
**`zygomaticExperience`**: short claim line rendered in the experience block on the zygomatic page  
**`zygomaticRecovery`**: HTML string with paragraph(s) about recovery timeline; rendered via `| safe`

---

### C. Before/After Gallery
**File:** `src/_data/siteContent/gallery.json`  
**Format:** JSON array. Each item:
```json
{
  "before": "/assets/photos/gallery/case-01-before.jpg",
  "after": "/assets/photos/gallery/case-01-after.jpg",
  "caption": "Full-arch lower, 4 implants"
}
```
**Appears on:** /full-arch-fixed (conditional section)  
**To enable:** Set `"showBeforeAfter": true` in `src/_data/site.json`  
**Note:** Photos shared with patient consent. "Results vary" disclaimer is hardcoded. No names or identifying info.

---

### B. Google Review Badge / Rating
**Field:** Add `"googleReviewRating": ""` and `"googleReviewCount": ""` to `src/_data/site.json`  
**Format:** `"4.9"` / `"87"` — sourced directly from Google, never estimated.  
**Appears on:** Homepage (trust bar area), /contact sidebar  
**To enable:** Build the badge component when values are confirmed. Current flag not yet wired.

---

### 9. Doctor Story Section
**File:** `src/_data/siteContent/story.json` → `body` field  
**Format:** HTML string (paragraphs). Will be rendered with `| safe`.  
**Appears on:** /meet-the-doctor (hidden section labeled "In His Own Words")  
**To enable:** Set `body` to a non-empty string. Section renders automatically.

---

### J. Team Section (About Page)
**File:** `src/_data/siteContent/team.json`  
**Format:**
```json
{
  "members": [
    {
      "name": "First Last",
      "role": "Dental Assistant",
      "photo": "/assets/photos/team/first-last.jpg"
    }
  ]
}
```
**Appears on:** /about ("Who You'll Meet" section)  
**Note:** Photo optional — card renders without it. No last names required if team member prefers first only.

---

## LOW PRIORITY

### I. "Formerly Britely" Footer / About Line
**Flag:** `"showFormerlyBritely": false` in `src/_data/site.json`  
**To enable:** Confirm wording with the user, then add conditional line in `src/_includes/footer.njk` and `src/about.njk`, and set flag to `true`.  
**Note:** Do not use the name "Britely" anywhere until this is confirmed.

---

### 4. "Text Us" Option
**Flag:** `"showTextUs": false` in `src/_data/site.json`  
**To enable:** Confirm the number handles SMS, then set flag to `true`.  
**Appears on:** /contact (between Phone and Email blocks)

---

### Form Routing (Lead Capture)
**File:** `functions/api/contact.js`  
**Action needed:** Configure email/CRM delivery. Current stub logs submissions but does not deliver them.  
**Flag:** `"showLeadForm": false` in `src/_data/site.json` — set to `true` only after routing is wired.  
**Recommended:** Cloudflare Email Workers, Resend, or Mailgun. See inline comments in the file.  
**Appears on:** /contact, /full-arch-fixed, homepage (all behind `showLeadForm` flag)

---

### Open Dental API Integration (Lead Form → CRM)
**Goal:** When a visitor submits the lead form, create or find their patient record in Open Dental and log the inquiry as a commlog entry.

**What to build:** A Cloudflare Pages Function at `functions/api/contact.js` (stub exists) that:
1. Validates `name` and `phone` from form POST
2. Calls Open Dental REST API: `GET /api/v1/patients?phoneSearch={phone}` to find existing patient, or `POST /api/v1/patients` to create one
3. Calls `POST /api/v1/commlog` with the patient's `PatNum`, a `CommType` of your choosing (e.g. "WebLead"), and the form message as `Note`

**Open Dental requirements to enable:**
- Enable the REST API in Open Dental: Tools → Programs → Open Dental Service → check "REST API Enabled"
- Generate an API key: API → Generate Developer Key (stored only as a Cloudflare secret, never in code)
- Confirm your server's LAN/WAN address and port (default 8612) or cloud hosted URL
- Create a commlog type (or use an existing one) for web leads

**Cloudflare secrets needed** (set via `wrangler secret put` or dashboard):
- `OD_API_URL` — e.g. `https://your-od-server:8612`
- `OD_API_KEY` — the developer key from Open Dental

**Note:** HIPAA applies. No PHI in Cloudflare logs. The API key grants wide access — rotate it if leaked.

---

*Last updated: 2026-10-22*
