<?php

namespace Models;

class Content {
    private $conn;
    private $table_name = "content";

    public $id;
    public $title;
    public $slug;
    public $excerpt;
    public $content;
    public $type;
    public $status;
    public $category_id;
    public $author_id;
    public $image_url;
    public $video_url;
    public $meta_data;
    public $is_featured;
    public $is_breaking;
    public $is_trending;
    public $created_at;

    // Filters
    public $category_slug;
    public $category_name;
    public $author_name;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function read($limit = 10) {
        $query = "SELECT c.*, cat.name as category_name, u.username as author_name 
                  FROM " . $this->table_name . " c
                  LEFT JOIN categories cat ON c.category_id = cat.id
                  LEFT JOIN users u ON c.author_id = u.id
                  WHERE 1=1";

        // Add filters
        if ($this->type) {
            $query .= " AND c.type = :type";
        }
        if ($this->is_featured) {
            $query .= " AND c.is_featured = 1";
        }
        if ($this->is_breaking) {
            $query .= " AND c.is_breaking = 1";
        }
        if ($this->is_trending) {
            $query .= " AND c.is_trending = 1";
        }
        if ($this->category_slug) {
            $query .= " AND cat.slug = :category_slug";
        }

        $query .= " ORDER BY c.created_at DESC LIMIT :limit";

        $stmt = $this->conn->prepare($query);

        if ($this->type) {
            $stmt->bindParam(":type", $this->type);
        }
        if ($this->category_slug) {
            $stmt->bindParam(":category_slug", $this->category_slug);
        }
        
        $limit = (int)$limit; // Ensure int
        $stmt->bindParam(":limit", $limit, \PDO::PARAM_INT);

        $stmt->execute();
        return $stmt;
    }

    public function readOne() {
        $query = "SELECT c.*, cat.name as category_name, u.username as author_name 
                  FROM " . $this->table_name . " c
                  LEFT JOIN categories cat ON c.category_id = cat.id
                  LEFT JOIN users u ON c.author_id = u.id
                  WHERE c.id = ? LIMIT 0,1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->title = $row['title'];
            $this->slug = $row['slug'];
            $this->excerpt = $row['excerpt'];
            $this->content = $row['content'];
            $this->type = $row['type'];
            $this->image_url = $row['image_url'];
            $this->video_url = $row['video_url'];
            $this->meta_data = $row['meta_data'];
            $this->category_name = $row['category_name'];
            $this->author_name = $row['author_name'];
            $this->created_at = $row['created_at'];
        }
    }

    public function create() {
        $query = "INSERT INTO " . $this->table_name . " 
                  SET title=:title, slug=:slug, excerpt=:excerpt, content=:content, 
                      type=:type, category_id=:category_id, author_id=:author_id, 
                      image_url=:image_url, video_url=:video_url, meta_data=:meta_data,
                      is_featured=:is_featured, is_breaking=:is_breaking, is_trending=:is_trending";

        $stmt = $this->conn->prepare($query);

        // Sanitize and bind
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->slug = htmlspecialchars(strip_tags($this->slug));
        $this->excerpt = htmlspecialchars(strip_tags($this->excerpt));
        // Content might contain HTML, so be careful with strip_tags
        // $this->content = htmlspecialchars(strip_tags($this->content)); 

        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":slug", $this->slug);
        $stmt->bindParam(":excerpt", $this->excerpt);
        $stmt->bindParam(":content", $this->content);
        $stmt->bindParam(":type", $this->type);
        $stmt->bindParam(":category_id", $this->category_id);
        $stmt->bindParam(":author_id", $this->author_id);
        $stmt->bindParam(":image_url", $this->image_url);
        $stmt->bindParam(":video_url", $this->video_url);
        $stmt->bindParam(":meta_data", $this->meta_data);
        $stmt->bindParam(":is_featured", $this->is_featured);
        $stmt->bindParam(":is_breaking", $this->is_breaking);
        $stmt->bindParam(":is_trending", $this->is_trending);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
