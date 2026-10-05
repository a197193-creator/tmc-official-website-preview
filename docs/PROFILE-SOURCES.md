# Profile content grouped into the public website

Updated **5 October 2026** following the user's request to place key Profile information on Home and fit secondary topics into the existing pages. The public site remains four pages, with the shared design and larger typography.

| Old Profile topic | New location | UKM source |
| --- | --- | --- |
| Introduction | Home hero and `#about-cohort` | [Introduction](https://www.ukm.my/mycohort/ms/pengenalan/) |
| Objectives | Four concise aims on Home, `#objectives` | [Objectives](https://www.ukm.my/mycohort/ms/objektif/) |
| Logo | About Us, `#tmc-logo`, within Identity & Fieldwork | [Logo explanation](https://www.ukm.my/mycohort/ms/logo/) |
| Research & Publication | Biobank & Research, `#research-publications` | [Research](https://www.ukm.my/mycohort/ms/penyelidikan-kami/) |
| Laboratory Accreditation | Existing bioanalytical card, now `#accreditation`; linked from the Home hero | [Accreditation](https://www.ukm.my/mycohort/ms/laboratory-accreditation/) |
| Biospecimen & Biobank | Existing Biobank & Research facilities, `#biospecimens-biobank` | [Biobank](https://www.ukm.my/mycohort/ms/biospesimenbiobank/) |
| Information Technology System | Expandable Data & Information Systems within Biobank facilities, `#information-systems` | [Information systems](https://www.ukm.my/mycohort/ms/sistem-teknologi-maklumat/) |
| Vehicles | Expandable fieldwork transport within About Us, `#fieldwork` | [Vehicles](https://www.ukm.my/mycohort/ms/kenderaan/) |
| Achievement/Award | Home News recognition card, `#recognition`; About Us also links the introductory achievements infographics | [2025 BMCC report](https://www.ukm.my/mycohort/ms/news/umbi-terima-pengiktirafan-di-6th-business-excellence-awards-anjuran-british-malaysian-chamber-of-commerce-bmcc/) and Introduction |
| Frequently asked questions | Four expandable Home questions, `#faq` | Published screening, results, contact-update, and collaboration guidance |
| Disclaimer | Expandable notice in every page footer, `#disclaimer`, linking the full UKM notice | [Disclaimer](https://www.ukm.my/mycohort/ms/penafian/) |

## Content choices and source limits

- Objectives are English summaries combining the published general and specific aims; the full UKM objectives remain linked.
- The old [FAQ page](https://www.ukm.my/mycohort/ms/frequently-asked-questions/) currently contains a maintenance image. Home answers use the actual [screening guide](https://www.ukm.my/mycohort/ms/panduan-kepada-peserta-menjalani-saringan-kesihatan-projek-the-malaysian-cohort/), [results guidance](https://www.ukm.my/mycohort/ms/keputusan-dan-maklumbalas/), [contact-update page](https://www.ukm.my/mycohort/ms/contact-information-update/), and [research guidelines](https://www.ukm.my/mycohort/ms/penyelidikan-kami/). They are not presented as a recovered FAQ register.
- The information systems summary is explicitly attributed to UKM's overview dated 29 January 2020. It describes eCIMS, TSIMS, DIMS and HeDIMS. Historical capacity and security figures are not asserted as current specifications.
- Vehicle models, quantities and functions are labelled as UKM's published inventory, with current availability referred to TMC. Identity and fieldwork appear after the main About Us sections; transport and IT details are collapsed by default.
- The old Achievement/Award menu item is a `#` placeholder. The existing, real UKM 2025 BMCC report supplies the Home recognition card; it records third place for UKM and UMBI in Partnership of the Year.
- The footer paraphrases the published disclaimer and links its full text. It does not replace the official legal notice or imply official deployment approval.
- All photos and the user-supplied logo remain unchanged. No UKM maintenance image, vehicle picture, IT diagram or additional stock image is embedded.

## Navigation

Home search now finds six grouped website sections. The PHP resource directory and static fallback use the same local destinations. Original UKM pages remain linked as sources. `data/profile-sources.json` records all eleven topic destinations.

## Verification

All local destinations and fragments resolve, with no duplicate IDs. The four objectives, four FAQ entries, four vehicle types, four information systems, and shared footer notice were checked. Native disclosures operate without JavaScript; the FAQ keyboard control and screening-guide link were exercised. Desktop and mobile layouts and Home search were reviewed before deployment.
