-- Schema creation goes here

DROP TABLE IF EXISTS customers CASCADE;
CREATE TABLE customers (
    id            serial PRIMARY KEY,
    first_name    varchar(255)   NOT NULL,
    last_name     varchar(255)   NOT NULL,
    email         varchar(255)   NOT NULL,
    phone         varchar(255)   NOT NULL,
    address_id    int            NOT NULL
);

DROP TABLE IF EXISTS addresses CASCADE;
CREATE TABLE addresses (
    id              serial PRIMARY KEY,
    street          varchar(255)   NOT NULL,
    city            varchar(255)   NOT NULL,
    state           varchar(20)    NOT NULL,
    zipcode         varchar(10)    NOT NULL
);

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
    id              serial PRIMARY KEY,
    name            varchar(255)  NOT NULL,
    cost            decimal       NOT NULL,
    description     varchar(255)  NOT NULL,
    category_id     int           NOT NULL
);

DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
    id               serial PRIMARY KEY,
    name            varchar(60) NOT NULL

);

DROP TABLE IF EXISTS product_orders CASCADE;
CREATE TABLE product_orders (
  id              serial PRIMARY KEY,
  product_id      int NOT NULL,
  order_id        int NOT NULL,
  amount          int NOT NULL

);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
    id               serial      PRIMARY KEY,
    customer_id      int            NOT NULL,
    product_id       int            NOT NULL,
    date_placed      timestamp      NOT NULL,
    order_status     varchar(255)   NOT NULL

);

ALTER TABLE "customers" ADD CONSTRAINT "fk_customers_address_id" FOREIGN KEY("address_id")
REFERENCES "addresses" ("id");

ALTER TABLE "products" ADD CONSTRAINT "fk_products_category_id" FOREIGN KEY("category_id")
REFERENCES "categories" ("id");

ALTER TABLE "product_orders" ADD CONSTRAINT "fk_product_orders_product_id" FOREIGN KEY("product_id")
REFERENCES "products" ("id");

ALTER TABLE "product_orders" ADD CONSTRAINT "fk_product_orders_order_id" FOREIGN KEY("order_id")
REFERENCES "orders" ("id");

ALTER TABLE "orders" ADD CONSTRAINT "fk_orders_customer_id" FOREIGN KEY("customer_id")
REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD CONSTRAINT "fk_orders_product_id" FOREIGN KEY("product_id")
REFERENCES "products" ("id");
