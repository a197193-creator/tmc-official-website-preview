# News, contact, and remaining public content

Checked **6 October 2026** against the current [UKM MyCohort website](https://www.ukm.my/mycohort/ms/).

## Dedicated pages

- `news.html`: **249 records** — all **167** reports across the **17** pages of the UKM news archive, plus **82** earlier published WordPress posts. Original titles, publication dates, English introductions, and canonical source links are retained. Full articles and original media remain with UKM. Search, publication-year and topic filters, 12-record pagination, and a complete CSV are provided. All records remain in the HTML when JavaScript is unavailable.
- `contact.html`: published office numbers, toll-free number, WhatsApp, management email, the public enquiry form, UMBI address, map, and Monday–Friday contact hours. The public form is distinct from the staff enquiry form.
- `resources.html`: **245 unique photo-album URLs**, **23 newspaper clippings**, **10 video recordings**, **6 health-reading articles**, and **4 useful downloads/indexes**. Original gallery labels and source year groups are retained; duplicate album URLs are represented once with aliases retained in JSON. Search, type/year filters and pagination are provided.

News and Contact in the main navigation open separate pages. Home retains three recent stories and a short contact entry point. Visiting/contact details have moved out of About Us. Earlier shared Home/About hash links redirect to the new pages.

## Sources and snapshots

| Source | Snapshot / use |
| --- | --- |
| [News archive](https://www.ukm.my/mycohort/ms/news/) | `data/tmc-news.json`, `data/tmc-news-2026-10-06.csv`; source page URLs retained in JSON |
| [Public earlier posts](https://www.ukm.my/mycohort/wp-json/wp/v2/posts?per_page=100) | Earlier post collection; canonical source links replace obsolete root URLs in the hand-maintained archive |
| [Older archive index](https://www.ukm.my/mycohort/ms/newsarchives/) | Cross-check of earlier report titles and archive coverage |
| [Photo gallery](https://www.ukm.my/mycohort/ms/galeri-gambar/) | Album URL index in `data/tmc-media-resources.json`; original photographs are not copied into this preview |
| [Video gallery](https://www.ukm.my/mycohort/ms/galeri-video/) | Ten recordings and original year groups; direct YouTube viewing links |
| [Newspaper archive](https://www.ukm.my/mycohort/ms/newspaper-archives/) | All 23 published clipping links and dates |
| [Enquiries / complaints](https://www.ukm.my/mycohort/ms/aduan/) | Public enquiry form, toll-free and office telephone, management email |
| [Homepage](https://www.ukm.my/mycohort/ms/) and [map](https://www.ukm.my/mycohort/ms/peta-lokasi/) | Address, main contact channels, contact hours, and map |

The participant handbook and laboratory accreditation document remain the current UKM-published files previously sourced for Participants and Biobank. No staff schedules, staff dashboard, or password-protected content is exposed. All photographs displayed inside the preview still come from the supplied TMC archive; the user-supplied logo is unchanged.

## Limits in the old source

- `/arkib` returns HTTP 404. Available earlier public reports were recovered from the WordPress post collection and included in News.
- The Health Information menu destination (`?page_id=94`) returns HTTP 404. Six available UKM health articles are indexed in Resources and News.
- The Download page contains only its heading. Resources supplies the available published handbook and accreditation document, and downloadable indexes.
- The old FAQ page shows a maintenance image. Home retains source-based answers from the published participant/research guidance.
- Achievement/Award is a placeholder menu link. Actual recognition reports are indexed under the News topic filter.
- Industrial Training is password protected. Staff calendar, roster, leave, dashboard, and internal progress pages remain outside the authorized public preview.

Consequently, **all accessible public menu topics are represented**, with available reports and media indexed. This is not a claim that unavailable content was recovered, every external album/video is still available, or UKM has approved an official release.

## Project progress basis

The tracker now measures seven equally weighted official-website milestones. Website review, content/page mapping, the design prototype, and public preview development/content integration are complete (**4/7 = 57%**). Officer review, user acceptance testing/final improvements, and official completion/release remain pending. Technical browser checks and a Vercel presentation deployment do not complete those approval milestones.
