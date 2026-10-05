# Official TMC website: proposed page map

Prepared 28 September 2026 for MC02/MC03 review. This is a working proposal based on the supplied Stitch package and a live review of the [current UKM MyCohort site](https://www.ukm.my/mycohort/ms/) on 28 September. That site is the existing website being enhanced. This is **not an approved UKM page map**. A TMC content owner should confirm ownership, language, and disposition of each section before implementation.

Updated 5 October 2026 to reflect About Us, Participants, the full Biobank & Research page, larger typography, and archive-only photography.

| Current UKM area | Proposed destination or treatment | Current preview coverage | Decision for TMC officers |
| --- | --- | --- | --- |
| Main / home | Home page with audience entry points and source links | `index.html` | Confirm home priorities, wording, metrics, and official branding. |
| Home news and quick links | News / updates area and links to current screening, wellness, location, video, research, and contact pages | Preview links to research and contact but has no news feed or screening / wellness / video section | Decide which items should be visible on the new home page, how news is updated, and which services remain on UKM pages. |
| Profile: introduction, logo, objectives, achievements, FAQ, disclaimer | Separate profile information with any legally required disclaimer kept visible | Home provides introductory information and links to UKM; `about.html` now covers team, structure, location, and contact | Confirm which subpages stay distinct, approved logo use, FAQ ownership, and disclaimer text. |
| Profile: laboratory accreditation, biospecimens, IT system, vehicles | Biobank / research and supporting facility pages | `research.html` covers samples, testing, storage locations and the published bioanalytical accreditation scope; IT and vehicles remain on UKM | Validate technical claims and decide which detailed pages to retain or rewrite. |
| Participants: recruitment, screening guide, leaflet, measurements, food questionnaire, biospecimen, colorectal screening, results, contact update, enquiries, locations | Participant hub with UKM guidance and service links | `participants.html` covers all 11 topics, links the 2026 handbook and UKM-published forms, and uses supplied TMC archive photos | Review the English summaries and source links. Forms remain on their published destinations. No MyKad lookup is in this preview. See [Participants sources](PARTICIPANTS-SOURCES.md). |
| Biobank | Biobank overview plus detailed facility and sample information | `research.html`: facilities, UKM video, all 19 entries from three equipment tables, and TMC archive photos | Resolve the prose/table quantity discrepancy and confirm current figures. See [Biobank sources](BIOBANK-SOURCES.md). |
| Research & Publication | Research overview, publication register and collaboration guidance | `research.html`: 69 sourced records with search, year/status filters, pagination and full CSV; ten collaboration points and published contact routes | Confirm records and update owner; paper URLs are only added when supplied by the source. |
| Gallery: photos, news/archive, video, downloads, health information | Resource/news and media sections after content inventory | No local gallery; selected UKM resource links on home | Decide what to migrate, archive, or redirect; verify media rights and file freshness. |
| About us: organisation chart, directory, division directory, map, contact | About Us page using the home design | `about.html` now includes all five sections, 37 sourced public staff contacts, division filters, official map, supplied TMC photos, and UKM contact/form links | Review the sourced snapshot, English role translations, and imagery before official UKM transfer. See [About Us sources](ABOUT-US-SOURCES.md). |
| Staff-only portal | Separate authenticated UKM service | Excluded from public preview | Confirm access model and integration owner before any link or implementation. |

## Current preview navigation

Home → About Us → Participants → Biobank & Research → News & Updates (home section) → Contact Us.

## Live homepage details to preserve or decide

The existing homepage shows a latest-news list, prominent service links (including follow-up screening and wellness packages), contact/location shortcuts, a map, phone and WhatsApp numbers, and opening hours. The four-page preview provides participant and research entry points. Officers should decide the prominence and ownership of those existing elements during review.

## Source and disposition rules

- **Retain:** current UKM participant services, results guidance, enquiries, and detailed source pages remain the destinations until approved replacements exist.
- **Improve:** use the Stitch-inspired layout for public orientation, responsive navigation, and resource discovery, subject to officer review.
- **Transfer:** only approved copy, media, and page structure should move into the eventual UKM WordPress site. The Vercel preview is a presentation artifact.
- **Verify:** the full live menu, redirects, and content owners with the UKM site administrator before transferring pages. A live navigation review confirms the major sections above; it does not establish that every linked document, service, or contact detail is current.

The six live UKM destinations used in the preview are listed and checked in [MC03 review pack](MC03-REVIEW-PACK.md). Claim-level discrepancies are recorded in [content audit](CONTENT-AUDIT.md).
