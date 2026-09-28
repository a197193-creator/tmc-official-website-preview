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
    ['category' => 'THE COHORT', 'title' => 'Introduction', 'description' => 'Project history and overview', 'search' => 'introduction cohort history overview', 'url' => 'https://www.ukm.my/mycohort/ms/pengenalan/'],
    ['category' => 'PARTICIPANTS', 'title' => 'Participant information', 'description' => 'Current guidance for participants', 'search' => 'participant screening joining guide', 'url' => 'https://www.ukm.my/mycohort/ms/peserta-tmc/'],
    ['category' => 'PARTICIPANTS', 'title' => 'Results & feedback', 'description' => 'UKM information and guidance', 'search' => 'results feedback follow up', 'url' => 'https://www.ukm.my/mycohort/ms/keputusan-dan-maklumbalas/'],
    ['category' => 'BIOBANK', 'title' => 'Biospecimens & Biobank', 'description' => 'Facility and equipment information', 'search' => 'biobank biospecimens laboratory storage', 'url' => 'https://www.ukm.my/mycohort/ms/biospesimenbiobank/'],
    ['category' => 'RESEARCH', 'title' => 'Research & Publication', 'description' => 'Current UKM research information', 'search' => 'research publication projects', 'url' => 'https://www.ukm.my/mycohort/ms/penyelidikan-kami/'],
    ['category' => 'CONTACT', 'title' => 'Contact & enquiries', 'description' => 'Official UKM contact channel', 'search' => 'contact enquiry feedback location', 'url' => 'https://www.ukm.my/mycohort/ms/aduan/'],
];

echo json_encode(
    ['source' => 'UKM MyCohort', 'resources' => $resources],
    JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);
