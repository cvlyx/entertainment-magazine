CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'editor', 'publisher', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content LONGTEXT,
    type ENUM('article', 'video', 'gallery', 'reel') NOT NULL,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    category_id INT,
    author_id INT,
    image_url VARCHAR(255),
    video_url VARCHAR(255),
    meta_data JSON, -- Stores duration, view count, photo count, etc.
    is_featured BOOLEAN DEFAULT FALSE,
    is_breaking BOOLEAN DEFAULT FALSE,
    is_trending BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS media (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_type VARCHAR(50),
    uploaded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Seed initial data
INSERT INTO categories (name, slug) VALUES 
('Music', 'music'),
('Film', 'film'),
('Lifestyle', 'lifestyle'),
('News', 'news'),
('Interviews', 'interviews');

-- Default Admin (password: password123)
INSERT INTO users (username, email, password_hash, role) VALUES 
('admin', 'admin@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');
