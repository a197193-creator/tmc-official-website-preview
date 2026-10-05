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
    ['category' => 'THE COHORT', 'title' => 'About the study', 'description' => 'Introduction and research objectives', 'search' => 'introduction cohort history overview objectives purpose', 'url' => 'index.html#about-cohort'],
    ['category' => 'PARTICIPANTS', 'title' => 'Participant guidance', 'description' => 'Screening, results and contact updates', 'search' => 'participant screening results feedback contact update guide', 'url' => 'participants.html'],
    ['category' => 'BIOBANK', 'title' => 'Biobank facilities', 'description' => 'Biospecimens, laboratory and accreditation', 'search' => 'biobank biospecimens laboratory storage accreditation equipment information systems', 'url' => 'research.html#biospecimens-biobank'],
    ['category' => 'RESEARCH', 'title' => 'Research & publications', 'description' => 'Publication register and collaboration', 'search' => 'research publication projects collaboration', 'url' => 'research.html#research-publications'],
    ['category' => 'ABOUT US', 'title' => 'People & organisation', 'description' => 'Team directory, divisions and location', 'search' => 'people team staff directory organisation contact location logo identity vehicles fieldwork', 'url' => 'about.html#directory'],
    ['category' => 'QUESTIONS', 'title' => 'Common questions', 'description' => 'Quick answers and relevant guidance', 'search' => 'questions faq help enquiries answers', 'url' => 'index.html#faq'],
];

echo json_encode(
    ['source' => 'UKM MyCohort', 'resources' => $resources],
    JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);
