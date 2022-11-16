CREATE TABLE users(
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    lastname VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    email VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    password VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    UNIQUE KEY email (email),
    role enum('Admin', 'User') DEFAULT 'User',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)   ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
