# The Malaysian Cohort website presentation preview

A public-facing, responsive design preview based on the supplied Stitch UI/UX files. It is intended for presentation and review, not as an official UKM deployment.

## Pages and stack

- `index.html`: English home page adapted from the supplied portal HTML, with participant pathways, UKM resource search, and contact
- `about.html`: organisation chart, searchable staff directory, directory by division, location map, and contact channels, using the home page design
- `research.html`: biobank and research orientation
- `portal.css`, `about.css`, `styles.css`, `app.js`, and `about.js`: responsive design, navigation, resource search, and staff filters
- `data/tmc-directory.json`: sourced snapshot of 37 public staff contacts and published division assignments, checked on 2 October 2026
- `api/resources.php`: a read-only JSON resource directory served by PHP
- `vercel.json`: [Vercel's recommended community PHP runtime](https://vercel.com/docs/functions/runtimes)

All three pages render without a build step. The resource search uses static links as a fallback when the PHP endpoint is unavailable. No participant identifiers or health information are collected.

## Run and deploy

Open `index.html` for a quick static preview. With PHP installed, run `php -S localhost:8000` from this directory to exercise the API locally. Deploy the root directory with Vercel; the community runtime handles `api/resources.php`.

The home page uses the TMC logo image supplied by the user in `assets/tmc-logo.png`. The About Us page uses photographs from the user's shared TMC image gallery, the UKM-published organisation chart, and public UKM staff portraits. See [About Us sources](docs/ABOUT-US-SOURCES.md) for provenance. The illustrative laboratory images on the home and research pages came from the supplied Stitch package. The public preview labels concept imagery and requires TMC/UKM approval before official use. The supplied staff dashboard mockups are excluded from the public site.

## Review before official publication

The [MC03 officer review pack](docs/MC03-REVIEW-PACK.md) links the live preview and records verification and open decisions. The [proposed page map](docs/OFFICIAL-PAGE-MAP.md) maps current UKM sections to preview coverage and later implementation. The [content audit](docs/CONTENT-AUDIT.md) records claims and functions that still need TMC/UKM verification. Confirm the page map, bilingual copy, image rights, logo, content ownership, accessibility, WordPress transfer, and UKM staging access. Any participant, results, booking, or staff workflow needs separate approved service integration and privacy/security review.

Reference pages: [UKM introduction](https://www.ukm.my/mycohort/ms/pengenalan/), [biobank](https://www.ukm.my/mycohort/ms/biospesimenbiobank/), [research](https://www.ukm.my/mycohort/ms/penyelidikan-kami/).
