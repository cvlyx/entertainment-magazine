<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../src/Config/Database.php';
require_once '../src/Controllers/AuthController.php';
require_once '../src/Controllers/DashboardController.php';

use Config\Database;
use Controllers\AuthController;
use Controllers\ContentController;
use Controllers\DashboardController;

$database = new Database();
$db = $database->getConnection();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// Basic Router
// URI structure: /api/resource/action or /api/resource

// Check if running under subdirectory (e.g. XAMPP) or root
// If URI is like /entertainment-magazine/backend/public/index.php/auth/login
// we need to be careful.
// Let's rely on standard path finding.
$resource = null;
$id = null;

// Find 'index.php' in the path parts and take the next part as resource
$indexPos = array_search('index.php', $uri);
if ($indexPos !== false && isset($uri[$indexPos + 1])) {
    $resource = $uri[$indexPos + 1];
    $id = $uri[$indexPos + 2] ?? null;
} elseif (isset($uri[1]) && $uri[1] !== '') {
    // Fallback for php -S localhost:8000
    $resource = $uri[1];
    $id = $uri[2] ?? null;
}

// Helper to get request body
function getInput() {
    return json_decode(file_get_contents("php://input"), true);
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($resource) {
    case 'auth':
        $controller = new AuthController($db);
        if ($id === 'register' && $requestMethod === 'POST') {
            $controller->register(getInput());
        } elseif ($id === 'login' && $requestMethod === 'POST') {
            $controller->login(getInput());
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Endpoint not found"]);
        }
        break;
        
    case 'content':
        $controller = new ContentController($db);
        if ($requestMethod === 'GET') {
            if ($id && is_numeric($id)) {
                $controller->getOne($id);
            } else {
                $controller->getAll($_GET);
            }
        } elseif ($requestMethod === 'POST') {
            $controller->create(getInput());
        }
        break;

    case 'dashboard':
        $controller = new DashboardController($db);
        // Expecting user_id in query or from token (in real app)
        // For simplicity, passing user_id as query param for now
        $userId = $_GET['user_id'] ?? 1;
        $controller->getStats($userId);
        break;
        
    default:
        echo json_encode(["message" => "API is running. Resource: " . $resource]);
        break;
}
