-- Ensure the database exists
CREATE DATABASE IF NOT EXISTS bookshop;
USE bookshop;

-- Grant privileges to the RDS admin user (DO NOT use IDENTIFIED BY for existing users)
-- GRANT ALL PRIVILEGES ON bookshop.* TO 'admin'@'%';
-- FLUSH PRIVILEGES;

-- CREATE USER 'devuser'@'%' IDENTIFIED BY 'devpassword';
-- GRANT ALL PRIVILEGES ON bookshop.* TO 'devuser'@'%';
-- FLUSH PRIVILEGES;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'rootpassword';
FLUSH PRIVILEGES;

-- GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'rootpassword' WITH GRANT OPTION;
-- FLUSH PRIVILEGES;

-- CREATE USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'rootpassword';
-- GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
-- FLUSH PRIVILEGES;

-- Create the `books` table if it does not exist
-- CREATE TABLE IF NOT EXISTS books (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT NOT NULL,
--     price DECIMAL(10,2) NOT NULL,
--     cover VARCHAR(255) NOT NULL
-- );

DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    cover VARCHAR(255) NOT NULL
);


-- Insert sample data (optional)
INSERT INTO books (title, description, price, cover) VALUES
('Docker for Beginners', 'A guide to Docker.', 19.99, 'https://example.com/book.jpg'),
('Kubernetes Essentials', 'An introduction to Kubernetes.', 29.99, 'https://example.com/k8s.jpg');