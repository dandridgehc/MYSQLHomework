DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  primary key(item_id)
);


SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Neck Slimmer", "Apparel and Accesories", 19.95, 150),
  ("Shoe Condoms", "Apparel and Accesories", 9.95, 300),
  ("Nickolas Cage Pillowcase", "Home and Kitchen", 49.95, 200),
  ("Cookin with Coolio", "Books and Media", 35.00, 100),
  ("JavaScript for Dummies", "Books and Media", 5.00, 10),
  ("Synthetic Weed", "Home and Kitchen", 99.99, 420),
  ("SheWee", "Home and Kitchen", 25.00, 500),
  ("Spandex Body Suit", "Apparel", 40.00, 100),
  ("Toilet Bowl Night Light", "Home and Kitchen", 75.00, 250),
  ("Cat DJ Booth", "Home and Kitchen", 50.00, 1000);


