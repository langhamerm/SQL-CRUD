-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS react_sql;
-- Creates the "animals_db" database --
CREATE DATABASE react_sql;

-- Makes it so all of the following code will affect animals_db --
USE react_sql;

-- Creates the table "products" within animals_db --
CREATE TABLE products (
    product_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(45) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  price INTEGER(11),
   PRIMARY KEY (product_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (name, price)
VALUES ("Oranges", 100);

INSERT INTO products (name, price)
VALUES ("Apples", 100);

INSERT INTO products (name, price)
VALUES ("Milk", 10);

INSERT INTO products (name, price)
VALUES ("Pizza", 47);
