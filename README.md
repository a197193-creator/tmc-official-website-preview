# The Malaysian Cohort website presentation preview

A public-facing, responsive design preview based on the supplied Stitch UI/UX files. It is intended for presentation and review, not as an official UKM deployment.

## Pages and stack

- `index.html`: home, participant pathways, UKM resource search, and contact
- `about.html`: cohort story and sourced milestones
- `research.html`: biobank and research orientation
- `styles.css` and `app.js`: responsive design, mobile navigation, and resource filtering
- `api/resources.php`: a read-only JSON resource directory served by PHP
- `vercel.json`: [Vercel's recommended community PHP runtime](https://vercel.com/docs/functions/runtimes)

All three pages render without a build step. The resource search uses static links as a fallback when the PHP endpoint is unavailable. No participant identifiers or health information are collected.

## Run and deploy

Open `index.html` for a quick static preview. With PHP installed, run `php -S localhost:8000` from this directory to exercise the API locally. Deploy the root directory with Vercel; the community runtime handles `api/resources.php`.

The images under `assets/` came from the supplied Stitch package. They are labelled as illustrative concepts in the pages and require approval before official use. The supplied staff dashboard mockups are intentionally excluded from the public site.

## Review before official publication

The [content audit](docs/CONTENT-AUDIT.md) records claims and functions that still need TMC/UKM verification. Confirm the page map, bilingual copy, image rights, logo, content ownership, accessibility, WordPress transfer, and UKM staging access. Any participant, results, booking, or staff workflow needs separate approved service integration and privacy/security review.

Reference pages: [UKM introduction](https://www.ukm.my/mycohort/ms/pengenalan/), [biobank](https://www.ukm.my/mycohort/ms/biospesimenbiobank/), [research](https://www.ukm.my/mycohort/ms/penyelidikan-kami/).
