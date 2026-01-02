<?php

namespace Controllers;

require_once '../src/Models/Content.php';
use Models\Content;

class ContentController {
    private $db;
    private $content;

    public function __construct($db) {
        $this->db = $db;
        $this->content = new Content($db);
    }

    public function getAll($params) {
        // Apply filters
        if (isset($params['type'])) {
            $this->content->type = $params['type'];
        }
        if (isset($params['is_featured'])) {
            $this->content->is_featured = $params['is_featured'];
        }
        if (isset($params['is_breaking'])) {
            $this->content->is_breaking = $params['is_breaking'];
        }
        if (isset($params['is_trending'])) {
            $this->content->is_trending = $params['is_trending'];
        }
        if (isset($params['category'])) {
            $this->content->category_slug = $params['category'];
        }
        
        $limit = isset($params['limit']) ? $params['limit'] : 10;
        
        $stmt = $this->content->read($limit);
        $num = $stmt->rowCount();

        if ($num > 0) {
            $arr = [];
            while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
                // Decode metadata if present
                if ($row['meta_data']) {
                    $row['meta_data'] = json_decode($row['meta_data']);
                }
                array_push($arr, $row);
            }
            http_response_code(200);
            echo json_encode($arr);
        } else {
            http_response_code(200); // Return empty array instead of 404 for lists
            echo json_encode([]);
        }
    }

    public function getOne($id) {
        $this->content->id = $id;
        $this->content->readOne();

        if ($this->content->title != null) {
            $item = [
                "id" => $this->content->id,
                "title" => $this->content->title,
                "slug" => $this->content->slug,
                "excerpt" => $this->content->excerpt,
                "content" => $this->content->content,
                "type" => $this->content->type,
                "image_url" => $this->content->image_url,
                "video_url" => $this->content->video_url,
                "category_name" => $this->content->category_name,
                "author_name" => $this->content->author_name,
                "created_at" => $this->content->created_at,
                "meta_data" => $this->content->meta_data ? json_decode($this->content->meta_data) : null
            ];
            http_response_code(200);
            echo json_encode($item);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Content not found"]);
        }
    }

    public function create($data) {
        // Basic validation
        if (!isset($data['title']) || !isset($data['type'])) {
            http_response_code(400);
            echo json_encode(["message" => "Incomplete data"]);
            return;
        }

        $this->content->title = $data['title'];
        $this->content->slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data['title'])));
        $this->content->excerpt = $data['excerpt'] ?? null;
        $this->content->content = $data['content'] ?? null;
        $this->content->type = $data['type'];
        $this->content->category_id = $data['category_id'] ?? null;
        $this->content->author_id = $data['author_id'] ?? 1; // Default to admin for now
        $this->content->image_url = $data['image_url'] ?? null;
        $this->content->video_url = $data['video_url'] ?? null;
        $this->content->meta_data = isset($data['meta_data']) ? json_encode($data['meta_data']) : null;
        $this->content->is_featured = $data['is_featured'] ?? 0;
        $this->content->is_breaking = $data['is_breaking'] ?? 0;
        $this->content->is_trending = $data['is_trending'] ?? 0;

        if ($this->content->create()) {
            http_response_code(201);
            echo json_encode(["message" => "Content created successfully"]);
        } else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to create content"]);
        }
    }
}
