# Stitch to UKM content audit

Reviewed 27 September 2026. Source of truth for current public information: [www.ukm.my/mycohort](https://www.ukm.my/mycohort/). The Stitch project is a design reference, not evidence that its text or functionality is approved.

| Area | Stitch draft | UKM source / decision needed |
| --- | --- | --- |
| Cohort size | 106,000+ on About; 100,000+ on Home | [UKM introduction](https://www.ukm.my/mycohort/ms/pengenalan/) says **over 100,000**. Use that wording until the team approves an updated figure and date. |
| Biobank size | 1.4M+ aliquots | [UKM biobank page](https://www.ukm.my/mycohort/ms/biospesimenbiobank/) says **over 9 million biospecimen samples**. Confirm the current definition and count with the biobank owner before displaying a metric. |
| Equipment tables | Draft models and quantities such as 18 tanks/freezers, 24 racks, and 3 PCR units | The [UKM biobank page](https://www.ukm.my/mycohort/ms/biospesimenbiobank/) lists a different inventory in three tables. Reconcile each item, model, quantity, use, and photo with the laboratory owner. |
| Publications | 114, 150+, citations and five example papers | Validate every title, DOI, index status and citation count against [UKM research](https://www.ukm.my/mycohort/ms/penyelidikan-kami/) and the publication owner. Do not publish generated examples as records. |
| Personnel | Names, titles, contact details, roster counts and division structures | Check against the [UKM directory](https://www.ukm.my/mycohort/ms/staff-department/malaysia-cohort/) and confirm consent for photos and direct contact details. |
| Accreditation | Broad claims of MS ISO 15189:2022 coverage | Confirm the accredited entity, scope, validity dates and exact wording with the laboratory quality owner. |
| Participant results | Direct MyKad lookup and “no account needed” | Treat as a proposed feature only. Do not collect MyKad or show health results without an approved UKM service, identity controls, privacy review and threat assessment. The preview links to the existing [UKM results information](https://www.ukm.my/mycohort/ms/keputusan-dan-maklumbalas/). |
| Staff portal | “Signed in” demo persona and staff portal links | Remove simulated authentication from public pages. Link only to an approved UKM staff service after its access model is confirmed. |
| Booking, DAC forms and video | Prototype actions and a mock video player | Confirm live destinations, form owners, consent language, media rights and working files before activation. |
| Current UKM content | Stitch simplifies the navigation | Preserve or explicitly map Profile, Participants, Biobank, Research & Publication, Gallery, About Us and staff-only areas from the [current site](https://www.ukm.my/mycohort/). |

## Release gate

**5 October preview update:** Participants now contains all 11 requested topics, sourced from UKM MyCohort and the documents/forms it publishes. All website photography is from the supplied TMC archive. Staff portraits have been replaced with text initials and the organisation chart with an HTML layout. See [Participants sources](PARTICIPANTS-SOURCES.md) and [image sources](IMAGE-SOURCES.md).

**2 October preview update:** About Us now uses the public UKM organisation chart and directory, published division assignments, and real supplied TMC gallery photographs. It contains 37 public staff contacts and five divisions; it no longer contains the old cohort-size metric. Source details and snapshot dates are recorded in [About Us sources](ABOUT-US-SOURCES.md).

Content owner approval, participant privacy and security review, bilingual copy review, responsive and accessibility testing, live-link testing, and UKM WordPress staging sign-off are required before publication on the official domain.
