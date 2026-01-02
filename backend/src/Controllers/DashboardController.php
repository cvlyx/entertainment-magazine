<?php

namespace Controllers;

require_once '../src/Models/User.php';
require_once '../src/Models/Content.php';
use Models\User;
use Models\Content;

class DashboardController {
    private $db;
    private $user;
    private $content;

    public function __construct($db) {
        $this->db = $db;
        $this->user = new User($db);
        $this->content = new Content($db);
    }

    public function getStats($userId) {
        // Basic stats: total users (if admin), total articles read (mock), member since
        // Real implementation would query these from DB
        
        // For now, let's return some mock data mixed with real data if possible
        // Fetch user details
        $this->user->id = $userId;
        // We need a method to get user by ID, but let's assume we have it or just return what we have
        
        // Count total users
        $query = "SELECT COUNT(*) as total_users FROM users";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $totalUsers = $stmt->fetch(\PDO::FETCH_ASSOC)['total_users'];

        // Count my content
        $query = "SELECT COUNT(*) as my_content FROM content WHERE author_id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $userId);
        $stmt->execute();
        $myContent = $stmt->fetch(\PDO::FETCH_ASSOC)['my_content'];

        http_response_code(200);
        echo json_encode([
            "total_users" => $totalUsers,
            "my_content" => $myContent,
            "articles_read" => rand(0, 100) // Mock for now as we don't track reads yet
        ]);
    }
}
