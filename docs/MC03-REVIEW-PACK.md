# MC03 officer review pack — 28 September 2026

**Tracker item:** MC03, Initial design and prototype (28 September–2 October 2026). **Status:** in progress, pending TMC officer agreement on page designs. No completion percentage or formal approval is claimed here.

## Review links

- [Public presentation preview](https://tmc-official-website-preview.vercel.app/)
- [GitHub draft pull request](https://github.com/a197193-creator/tmc-official-website-preview/pull/1)
- [Proposed page map](OFFICIAL-PAGE-MAP.md) and [content audit](CONTENT-AUDIT.md)

## What is ready for review

- **30 September update:** The home page now uses the English portal HTML supplied for the project, and all public pages use the TMC logo image supplied on 30 September. The home page retains verified UKM destinations, a presentation notice, and a working mobile menu. The simulated participant identity lookup in the draft HTML was removed.
- **2 October update:** [About Us](https://tmc-official-website-preview.vercel.app/about.html) now uses the home page design and includes Organisation Chart, Directory, Directory by Division, Location Map, and Contact Us / Enquiries / Complaints. It uses UKM-published staff information and photographs from the supplied TMC gallery. Search, reset, expanded directory, division filters, map, and mobile navigation were checked at desktop and mobile widths. See [About Us sources](ABOUT-US-SOURCES.md).
- **5 October update:** [Participants](https://tmc-official-website-preview.vercel.app/participants.html) now includes all 11 requested topics, using UKM information, its 2026 handbook, and its published contact-update and enquiry forms. The home header has one Participants entry. All website photographs now come from the supplied TMC gallery; staff cards use initials and the organisation chart uses HTML. See [Participants sources](PARTICIPANTS-SOURCES.md) and [image sources](IMAGE-SOURCES.md).
- **5 October Biobank update:** [Biobank & Research](https://tmc-official-website-preview.vercel.app/research.html) follows the supplied four-section design, using UKM facility information, video, three equipment tables (19 entries), 69 publication records and ten collaboration guidelines. Search, year/status filters, pagination and full CSV download are included. Text sizes are slightly larger across all four pages. See [Biobank sources](BIOBANK-SOURCES.md).
- **5 October Profile consolidation:** Home now contains the study introduction, four objectives, common questions, and existing News recognition. About Us groups logo meaning and expandable fieldwork transport; Biobank & Research contains expandable information systems and an accreditation anchor. A disclaimer is accessible in every footer. All eleven old Profile topics map to existing pages; Home search and the PHP directory now link those grouped sections. See [Profile sources and placement](PROFILE-SOURCES.md).
- Four responsive, public HTML pages: Home, About Us, Participants, and Biobank & research.
- CSS and JavaScript for the visual design, mobile navigation, and resource search.
- A read-only PHP JSON directory at [`/api/resources.php`](https://tmc-official-website-preview.vercel.app/api/resources.php); six links are also present in HTML as a fallback.
- Photographs from the supplied TMC archive and the logo supplied directly by the user. Simulated staff and participant records are excluded.
- A proposed mapping from the current UKM navigation to preview and future pages.
- A live-site baseline review of the existing [UKM MyCohort homepage](https://www.ukm.my/mycohort/ms/), including its news, participant, screening, gallery, contact, and staff-only areas; gaps are recorded in the page map.

## Verification recorded on 28 September

| Check | Result |
| --- | --- |
| Vercel home, about, research pages and image assets | Publicly served successfully. |
| PHP resource endpoint | Returned HTTP 200 and JSON. |
| Desktop and mobile browser review | Pages displayed; mobile menu and resource search worked. |
| Six current UKM destination URLs | HEAD requests returned HTTP 200: [introduction](https://www.ukm.my/mycohort/ms/pengenalan/), [participants](https://www.ukm.my/mycohort/ms/peserta-tmc/), [results and feedback](https://www.ukm.my/mycohort/ms/keputusan-dan-maklumbalas/), [biobank](https://www.ukm.my/mycohort/ms/biospesimenbiobank/), [research](https://www.ukm.my/mycohort/ms/penyelidikan-kami/), [enquiries](https://www.ukm.my/mycohort/ms/aduan/). |

### Verification recorded on 5 October

- Participants: all 11 sections and topic links present; local files and section anchors resolve.
- Browser checks at 1280 × 900 and 390 × 844: no horizontal overflow or broken images; desktop section links, mobile topic expansion/collapse, and home mobile navigation work.
- About Us: 37 text-initial staff cards; searching for Arman returns the expected public staff contact.
- The 2026 handbook PDF, contact-update form, enquiry form, and published recruitment list returned HTTP 200.
- Photography check: every site image is either a supplied TMC archive photograph or the directly supplied TMC logo.
- Biobank: 69 records match all ten columns in the published register; the full CSV matches the same snapshot. Combined publication filters, reset, no-results state and pagination work.
- Biobank video button loads the published UKM YouTube embed. The external watch link remains available.
- Larger typography on all four pages fits the checked desktop and mobile layouts; section links account for the taller sticky navigation.
- Consolidated Profile content: local links and fragments resolve; Home search, FAQ keyboard operation and participant-guide navigation work. Secondary disclosures and shared disclaimer were reviewed in desktop and mobile layouts.

## Officer decisions needed to finish MC03

1. Agree or revise the proposed public navigation and indicate which existing UKM sections must remain separate pages.
2. Approve the visual direction, including official branding, logo, typography, and the selected archive photographs.
3. Nominate content owners for participant guidance, biobank data, publications, personnel, contact details, English and Malay copy, and disclaimers.
4. Identify the UKM WordPress administrator and staging workflow for the later implementation phase.

MC04 officer review is scheduled for 5–9 October. The public Vercel link is suitable for presenting the design now; it is not the official UKM release or an operational participant/staff service. See the [content audit](CONTENT-AUDIT.md) for claims and workflows needing validation.
