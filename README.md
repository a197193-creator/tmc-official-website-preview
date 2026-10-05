# The Malaysian Cohort website presentation preview

A public-facing, responsive design preview based on the supplied Stitch UI/UX files. It is intended for presentation and review, not as an official UKM deployment.

## Pages and stack

- `index.html`: English home page adapted from the supplied portal HTML, with participant pathways, UKM resource search, and contact
- `about.html`: organisation chart, searchable staff directory, directory by division, location map, and contact channels, using the home page design
- `participants.html`: all 11 requested participant topics, using the home page design and UKM-published information, handbook, and forms
- `research.html`: Biobank & Research page adapted from the supplied design: facilities and video, three equipment inventories, publication register, and ten collaboration guidelines
- `portal.css`, `about.css`, `participants.css`, `biobank.css`, and `readability.css`: responsive design with slightly larger text across all four pages
- `app.js`, `about.js`, `participants.js`, and `biobank.js`: navigation, resource search, staff filters, section navigation, and publication search, filters, and pagination
- `data/tmc-directory.json`: sourced snapshot of 37 public staff contacts and published division assignments, checked on 2 October 2026
- `data/participant-sources.json`: UKM sources for the 11 participant sections and their published document/form links, checked on 5 October 2026
- `data/biobank-sources.json` and `data/biobank-publications.json`: three published UKM equipment tables (19 entries) and 69 publication records, checked on 5 October 2026
- `data/tmc-publications-2026-10-05.csv`: downloadable full publication register snapshot, retaining all ten source columns
- `api/resources.php`: a read-only JSON resource directory served by PHP
- `vercel.json`: [Vercel's recommended community PHP runtime](https://vercel.com/docs/functions/runtimes)

All four pages render without a build step. The resource search uses static links as a fallback when the PHP endpoint is unavailable. The full publication register and CSV link remain available without JavaScript. Participant updates and enquiries open the forms published by UKM. No participant identifiers or health information are collected by this preview.

## Run and deploy

Open `index.html` for a quick static preview. With PHP installed, run `php -S localhost:8000` from this directory to exercise the API locally. Deploy the root directory with Vercel; the community runtime handles `api/resources.php`.

The site retains the TMC logo supplied directly by the user in `assets/tmc-logo.png`. All website photographs now come from the user's supplied TMC image gallery; the Stitch concept images and UKM staff portraits have been removed. Staff cards use text initials, and the organisation chart is an HTML layout based on the UKM chart. See [image sources](docs/IMAGE-SOURCES.md), [About Us sources](docs/ABOUT-US-SOURCES.md), [Participants sources](docs/PARTICIPANTS-SOURCES.md), and [Biobank sources](docs/BIOBANK-SOURCES.md). The supplied staff dashboard mockups are excluded from the public site.

## Review before official publication

The [MC03 officer review pack](docs/MC03-REVIEW-PACK.md) links the live preview and records verification and open decisions. The [proposed page map](docs/OFFICIAL-PAGE-MAP.md) maps current UKM sections to preview coverage and later implementation. The [content audit](docs/CONTENT-AUDIT.md) records claims and functions that still need TMC/UKM verification. Confirm the page map, bilingual copy, image rights, logo, content ownership, accessibility, WordPress transfer, and UKM staging access. Any participant, results, booking, or staff workflow needs separate approved service integration and privacy/security review.

Reference pages: [UKM introduction](https://www.ukm.my/mycohort/ms/pengenalan/), [biobank](https://www.ukm.my/mycohort/ms/biospesimenbiobank/), [research](https://www.ukm.my/mycohort/ms/penyelidikan-kami/).
