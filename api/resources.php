<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=300');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    header('Allow: GET');
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$resources = [
    ['category' => 'THE COHORT', 'title' => 'Study introduction', 'description' => 'Bilingual overview and the 2010 project film', 'search' => 'introduction cohort history overview objectives purpose video bahasa melayu', 'url' => 'introduction.html'],
    ['category' => 'THE COHORT', 'title' => 'Study infographics', 'description' => '13 posters with PDF downloads', 'search' => 'infographics posters milestones pdf documents', 'url' => 'introduction.html#infographics'],
    ['category' => 'PARTICIPANTS', 'title' => 'Participant guidance', 'description' => 'Recruitment, screening and appointments', 'search' => 'participant recruitment screening guide', 'url' => 'participants.html'],
    ['category' => 'PARTICIPANTS', 'title' => 'Results and feedback', 'description' => 'How screening results are delivered', 'search' => 'screening results feedback delivery collection', 'url' => 'participants.html#results-feedback'],
    ['category' => 'PARTICIPANTS', 'title' => 'Update your contact details', 'description' => 'Use UKM’s participant update form', 'search' => 'participant contact update details address phone form', 'url' => 'participants.html#contact-update'],
    ['category' => 'BIOBANK', 'title' => 'Biobank facilities', 'description' => 'Biospecimens, laboratory and accreditation', 'search' => 'biobank biospecimens laboratory storage accreditation equipment information systems', 'url' => 'research.html#biospecimens-biobank'],
    ['category' => 'RESEARCH', 'title' => 'Research & publications', 'description' => 'Publication register and collaboration', 'search' => 'research publication projects collaboration', 'url' => 'research.html#research-publications'],
    ['category' => 'ABOUT US', 'title' => 'Staff directory', 'description' => 'Find people by name or division', 'search' => 'people team staff directory division logo identity vehicles fieldwork', 'url' => 'about.html#directory'],
    ['category' => 'ABOUT US', 'title' => 'Organisation chart', 'description' => 'View the chart published by UKM', 'search' => 'organisation organization chart governance management team', 'url' => 'about.html#organisation-chart'],
    ['category' => 'QUESTIONS', 'title' => 'Common questions', 'description' => 'Quick answers and relevant guidance', 'search' => 'questions faq help enquiries answers', 'url' => 'index.html#faq'],
    ['category' => 'NEWS', 'title' => 'News & updates', 'description' => 'Published reports and earlier project archive', 'search' => 'news archive updates announcement careers awards', 'url' => 'news.html'],
    ['category' => 'CONTACT', 'title' => 'Contact Us', 'description' => 'Contact channels, enquiries and visiting information', 'search' => 'contact location map hours phone whatsapp email enquiries complaints', 'url' => 'contact.html'],
    ['category' => 'RESOURCES', 'title' => 'Resources & media', 'description' => 'Albums, video, documents and health reading', 'search' => 'resources media gallery photos video downloads health information newspaper', 'url' => 'resources.html'],
];

echo json_encode(
    ['source' => 'UKM MyCohort', 'resources' => $resources],
    JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);
