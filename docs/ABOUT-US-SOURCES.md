# About Us content and image sources

Information reviewed on **2 October 2026**; image policy updated **5 October 2026**. Public page: [About Us](https://tmc-official-website-preview.vercel.app/about.html).

The page shares the home page header, navigation, footer, logo, fonts, and colour palette. Its five sections follow the menu supplied by the user.

## Official content

| Section | Source | Use |
| --- | --- | --- |
| Organisation Chart | [UKM organisation chart](https://www.ukm.my/mycohort/ms/carta-organisasi/) | Original published image, effective 1 October 2026, embedded with a full-size view and source link; checked 6 October 2026 |
| Directory | [UKM staff directory](https://www.ukm.my/mycohort/ms/staff-department/malaysia-cohort/) | 37 names, roles, and public contact details, with text initials |
| Directory by Division | [UKM division directory](https://www.ukm.my/mycohort/ms/direktori-mengikut-bahagian/) | 34 staff assignments from the embedded published spreadsheet: Biobank & Bioanalytical (11), Biostatistics (3), Administration (6), Recruitment (11), Information Technology (3) |
| Location Map | [UKM location map](https://www.ukm.my/mycohort/ms/peta-lokasi/) and [UKM homepage](https://www.ukm.my/mycohort/ms/) | The official embedded map, UMBI address, and published contact hours |
| Contact Us / Enquiries / Complaint | [UKM enquiries and complaints](https://www.ukm.my/mycohort/ms/aduan/) and [UKM homepage](https://www.ukm.my/mycohort/ms/) | Phone, toll-free number, WhatsApp, management email, and the real Google Form linked by UKM |

The directory snapshot is saved in `data/tmc-directory.json`, with source URLs, original Malay roles, original division/unit labels, English display text, and contact details. On 5 October, the UKM portraits were removed to comply with the archive-only photography requirement. Staff cards now show text initials.

Three spelling variants were reconciled between the two published lists:

- Dr. Joan Blin → Joan Anak Blin.
- Nur Amalia Athirah Binti Hanafi → Nur Amalia Athirah Binti Mohamad Hanafi.
- Dr. Noraidatulakma Binti Abdullah → Noraidatulakma Binti Abdullah @ Muda.

The three staff without a division assignment in the published spreadsheet remain under “Other TMC team members”. The organisation chart and directory retain their respective published dates and information; chart staffing is not used to overwrite current directory contacts.

## Shared gallery photographs

The user supplied the [main TMC image gallery](https://drive.google.com/drive/folders/1837iMmdLHfHk3R0ddbW-KgAyjdeWTGoA) for use on the website. The following original files were retrieved through the connected Google Drive account and inspected:

| Local asset | Original file | Gallery subfolder | Drive file ID | Placement |
| --- | --- | --- | --- | --- |
| `assets/tmc-biobank-team.png` | Biobank_Staf | Gambar Rekrutmen (Video korporat) | `1owkE3RGVagKM0JpKf9Us1QJqAEpkJqYi` | About Us hero |
| `assets/tmc-biobank-tanks.png` | Biobank_Tank | Gambar Rekrutmen (Video korporat) | `1dyboPBKff-5mi0W0LPCzqKjWOWTl6ZGy` | Directory by Division |
| `assets/tmc-reception.jpg` | Ruang menunggu2.jpg | Gambar Pusat Rekrutmen TMC, Aras6 | `1jGO0k8kMVTqVwh1k-vNxZWYYdcVrgjBi` | Visiting information |

At the user's request on 6 October, the organisation section now embeds the original [UKM chart image](https://www.ukm.my/mycohort/wp-content/uploads/2026/10/CARTA-ORGANISASI-TMC_kuatkuasa-01.10.2026-1-scaled.png), effective 1 October 2026. The saved 2560 × 1810 PNG is unchanged and opens at full size. All About Us photographs are from the supplied TMC gallery. See [image sources](IMAGE-SOURCES.md).

## Behaviour

- Staff search matches name, role, division, and unit, including original Malay role and division labels.
- Nine staff appear initially; “Show all” expands the directory. Search and division filters show all matching people.
- Division buttons apply the appropriate staff filter.
- Reset restores the initial view; an empty search result has a clear message.
- Directions open Google Maps. Phone, email, and WhatsApp links use the published channels.
- Enquiries open UKM's published Google Form. The preview does not store form submissions.
- Without JavaScript, all 37 staff remain readable.
