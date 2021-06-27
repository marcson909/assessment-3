-- Seed data goes here

INSERT INTO addresses (street, city, state, zipcode) VALUES ('6232 Guiseppe Courts', 'Jamartown', 'Maryland', '49028');
INSERT INTO addresses (street, city, state, zipcode) VALUES ('704 Cecil Mountain', 'West Jon', 'South Dakota', '91578');
INSERT INTO addresses (street, city, state, zipcode) VALUES ('41613 Huel Ranch', 'Loycefort', 'Florida', '12109');
INSERT INTO addresses (street, city, state, zipcode) VALUES ('41613 West St', 'Loycefort', 'Florida', '12312');
INSERT INTO addresses (street, city, state, zipcode) VALUES ('132 South St', 'Santa Claus', 'Indiana', '12251');

INSERT INTO customers (first_name,last_name, email, phone, address_id) VALUES ('Marc','Stanley','ms@yahoo.com', '555-123-5544', 1);
INSERT INTO customers (first_name,last_name, email, phone, address_id) VALUES ('Bob','Bugs','bobbugs1234@hotmail.com', '123-555-5124', 2);
INSERT INTO customers (first_name,last_name, email, phone, address_id) VALUES ('Bugs','Bunny','whatsupdoc@aol.com', '442-512-4121', 3);
INSERT INTO customers (first_name,last_name, email, phone, address_id) VALUES ('Anakin','Lightsaber','maythefourth@gmail.com', '312-512-9988', 3);
INSERT INTO customers (first_name,last_name, email, phone, address_id) VALUES ('Ursa','Pursa','scaredydog@gmail.com', '912-619-9151', 3);


INSERT INTO categories (name) 
VALUES ('Kitchen');
INSERT INTO categories (name) 
VALUES ('Electronics');
INSERT INTO categories (name) 
VALUES ('Furniture');
INSERT INTO categories (name) 
VALUES ('Bathroom');
INSERT INTO categories (name) 
VALUES ('Patio & Garden');




INSERT INTO products (name, cost, description, category_id) VALUES ('24in Analog Television', 99, 'very nice television with 24inches of screen', 2);
INSERT INTO products (name, cost, description, category_id) VALUES ('USB charger', 10, 'USB C charger', 2);
INSERT INTO products (name, cost, description, category_id) VALUES ('Ceramic plate collection', 50, '3 plates', 1);
INSERT INTO products (name, cost, description, category_id) VALUES ('Couch', 699, 'very nice couch with cushions', 3);
INSERT INTO products (name, cost, description, category_id) VALUES ('Bed', 399, 'just a bed', 3);
INSERT INTO products (name, cost, description, category_id) VALUES ('Fork set', 7, 'only forks', 1);
INSERT INTO products (name, cost, description, category_id) VALUES ('Toothbrush', 49, 'it''s electric', 4);
INSERT INTO products (name, cost, description, category_id) VALUES ('Charcoal Grill', 30, 'charcoal not included', 5);

INSERT INTO orders (customer_id, product_id, date_placed, order_status) VALUES (1,1,'2020-07-23', 'Delivered');
INSERT INTO orders (customer_id, product_id, date_placed, order_status) VALUES (2,2,'2021-06-25', 'Order Placed');
INSERT INTO orders (customer_id, product_id,  date_placed, order_status) VALUES (3,3,'2019-08-31', 'Delivered');
INSERT INTO orders (customer_id, product_id,  date_placed, order_status) VALUES (4,4,'2018-08-31', 'Delivered');
INSERT INTO orders (customer_id, product_id, date_placed, order_status) VALUES (5,8,'2021-06-21', 'Delivered');


INSERT INTO product_orders (product_id, order_id, amount) VALUES (1,1,1);
INSERT INTO product_orders (product_id, order_id, amount) VALUES (5,1,1);
INSERT INTO product_orders (product_id, order_id, amount) VALUES (4,2,1);
INSERT INTO product_orders (product_id, order_id, amount) VALUES (2,3,2);
INSERT INTO product_orders (product_id, order_id, amount) VALUES (3,3,1);
INSERT INTO product_orders (product_id, order_id, amount) VALUES (6,4,1);
INSERT INTO product_orders (product_id, order_id, amount) VALUES (8,5,1);
