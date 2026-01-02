<?php
require_once '../src/Config/Database.php';
use Config\Database;

try {
    $database = new Database();
    $db = $database->getConnection();

    // 1. Read Schema (excluding the INSERTs at the end if we want to be safe, but let's just run it)
    $sql = file_get_contents('../database/schema.sql');

    // Remove the specific INSERT for admin to avoid bad hash, or just update it later.
    // Let's just run the schema construction parts.
    // A simple regex to remove the INSERT INTO users...
    $sql_schema_only = preg_replace('/INSERT INTO users.*;/s', '', $sql);
    
    // Execute Schema (Tables)
    try {
        $queries = explode(';', $sql_schema_only);
        foreach ($queries as $query) {
            $query = trim($query);
            if (!empty($query)) {
                $db->exec($query);
            }
        }
    } catch (Exception $e) {
        echo "Schema warning: " . $e->getMessage() . "<br>";
    }

    // 2. Ensure Categories exist (from schema or manually)
    $categories = [
        ['Music', 'music'],
        ['Film', 'film'],
        ['Lifestyle', 'lifestyle'],
        ['News', 'news'],
        ['Interviews', 'interviews']
    ];

    $stmt = $db->prepare("INSERT IGNORE INTO categories (name, slug) VALUES (?, ?)");
    foreach ($categories as $cat) {
        $stmt->execute($cat);
    }

    // 3. Create/Update Admin User
    $username = 'admin';
    $email = 'admin@example.com';
    $password = 'password123';
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $role = 'admin';

    // Check if exists
    $check = $db->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);
    
    if ($check->rowCount() > 0) {
        // Update
        $update = $db->prepare("UPDATE users SET password_hash = ?, role = ? WHERE email = ?");
        $update->execute([$hash, $role, $email]);
        echo "Admin user updated.<br>";
    } else {
        // Insert
        $insert = $db->prepare("INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)");
        $insert->execute([$username, $email, $hash, $role]);
        echo "Admin user created.<br>";
    }
    
    echo "<h3>Database Seeded Successfully!</h3>";
    echo "Login Credentials:<br>";
    echo "Email: <strong>$email</strong><br>";
    echo "Password: <strong>$password</strong><br>";
    echo "<br><a href='http://localhost:3000/auth/signin'>Go to Login</a>";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
