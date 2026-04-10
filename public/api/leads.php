<?php
header('Content-Type: application/json');

// ─── CORS: only allow your own domain ────────────────────────────────────────
$allowedOrigins = [
    'https://7generation.com',     // production — replace with your real domain
    'http://localhost:5173',       // Vite dev
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ─── Rate limiting: max 5 requests per IP per minute ─────────────────────────
$rateLimitDir = sys_get_temp_dir() . '/lead_rate_limit';
if (!is_dir($rateLimitDir)) { mkdir($rateLimitDir, 0700, true); }

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitFile = $rateLimitDir . '/' . md5($ip) . '.json';

$rateData = file_exists($rateLimitFile)
    ? json_decode(file_get_contents($rateLimitFile), true)
    : ['count' => 0, 'window_start' => time()];

// Reset window if more than 60 seconds passed
if (time() - $rateData['window_start'] > 60) {
    $rateData = ['count' => 0, 'window_start' => time()];
}

if ($rateData['count'] >= 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    exit;
}

$rateData['count']++;
file_put_contents($rateLimitFile, json_encode($rateData), LOCK_EX);

// ─── Bitrix24 webhook (server-side only, never exposed to client) ────────────
$BITRIX_WEBHOOK = 'https://portal.propeople.kz/rest/522/4pxwu3whlt208lt4/crm.lead.add.json';

// Parse request body
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// ─── Sanitize all inputs (strip HTML to prevent XSS in CRM) ─────────────────
$firstName   = htmlspecialchars(trim($input['firstName'] ?? ''), ENT_QUOTES, 'UTF-8');
$lastName    = htmlspecialchars(trim($input['lastName'] ?? ''), ENT_QUOTES, 'UTF-8');
$email       = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone       = preg_replace('/[^\d\s\+\-\(\)]/', '', trim($input['phone'] ?? ''));
$country     = htmlspecialchars(trim($input['country'] ?? ''), ENT_QUOTES, 'UTF-8');
$companyName = htmlspecialchars(trim($input['companyName'] ?? ''), ENT_QUOTES, 'UTF-8');
$request     = htmlspecialchars(trim($input['request'] ?? ''), ENT_QUOTES, 'UTF-8');
$source      = htmlspecialchars(trim($input['source'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validate required fields
if (!$firstName || !$lastName || !$email) {
    http_response_code(400);
    echo json_encode(['error' => 'firstName, lastName and email are required']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Build comments
$comments = array_filter([
    $country     ? "<b>Country:</b> $country" : '',
    $companyName ? "<b>Company:</b> $companyName" : '',
    $request     ? "<b>Interest:</b> $request" : '',
    $source      ? "<b>Source:</b> $source" : '',
]);

// Build Bitrix24 payload
$payload = [
    'fields' => [
        'TITLE'     => "New request from $firstName $lastName",
        'STATUS_ID' => 'NEW',
        'NAME'      => $firstName,
        'LAST_NAME' => $lastName,
        'EMAIL'     => [['VALUE' => $email, 'VALUE_TYPE' => 'WORK']],
        'PHONE'     => $phone ? [['VALUE' => $phone, 'VALUE_TYPE' => 'WORK']] : [],
        'COMMENTS'  => implode('<br>', $comments),
    ],
    'params' => [
        'REGISTER_SONET_EVENT' => 'Y',
    ],
];

// Send to Bitrix24
$ch = curl_init($BITRIX_WEBHOOK);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
]);
$response = curl_exec($ch);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to reach CRM']);
    exit;
}

$data = json_decode($response, true);

if (isset($data['error'])) {
    http_response_code(502);
    echo json_encode(['error' => $data['error_description'] ?? 'CRM error']);
    exit;
}

echo json_encode(['ok' => true, 'leadId' => $data['result'] ?? null]);
