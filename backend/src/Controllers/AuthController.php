<?php

namespace Controllers;

require_once '../src/Models/User.php';
use Models\User;

class AuthController {
    private $db;
    private $user;

    public function __construct($db) {
        $this->db = $db;
        $this->user = new User($db);
    }

    public function register($data) {
        if (!isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
            http_response_code(400);
            echo json_encode(["message" => "Incomplete data"]);
            return;
        }

        $this->user->username = $data['username'];
        $this->user->email = $data['email'];
        $this->user->password = $data['password'];
        $this->user->role = 'user'; // Default role

        if ($this->user->create()) {
            http_response_code(201);
            echo json_encode(["message" => "User created successfully"]);
        } else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to create user"]);
        }
    }

    public function login($data) {
        if (!isset($data['email']) || !isset($data['password'])) {
            http_response_code(400);
            echo json_encode(["message" => "Incomplete data"]);
            return;
        }

        $this->user->email = $data['email'];
        $stmt = $this->user->emailExists();
        
        if ($stmt && $this->user->verifyPassword($data['password'])) {
            $token = $this->generateJWT($this->user);
            
            http_response_code(200);
            echo json_encode([
                "message" => "Login successful",
                "token" => $token,
                "user" => [
                    "id" => $this->user->id,
                    "username" => $this->user->username,
                    "email" => $this->user->email,
                    "role" => $this->user->role
                ]
            ]);
        } else {
            http_response_code(401);
            echo json_encode(["message" => "Invalid credentials"]);
        }
    }

    private function generateJWT($user) {
        // Simple JWT implementation for demo purposes
        // In production, use a library like firebase/php-jwt
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode([
            'iss' => 'entertainment-magazine',
            'iat' => time(),
            'exp' => time() + (60 * 60 * 24), // 24 hours
            'data' => [
                'id' => $user->id,
                'email' => $user->email,
                'role' => $user->role
            ]
        ]);

        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'SECRET_KEY_HERE', true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }
}
