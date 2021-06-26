-- Queries go here
-- SQL containing queries to extract the following data from your database tables:


--   1. Retrieve the first name, last name, and email address of all customers that have a Gmail email address.
select first_name, last_name, email
from customers
where email ilike '%gmail%';

--   2. Retrieve the address of the customers and the order IDs for all orders that were placed in 2020
select a.street, a.city, a.state, a.zipcode, o.id as "order ID"
from orders as o
join customers as c on c.id = o.customer_id
join addresses as a on a.id = c.address_id
where o.date_placed < '2021-01-01';

--   3. Retrieve all product details for products that are under the "Kitchen" category
select * from products
join categories on categories.id = products.category_id
where categories.name = 'Kitchen';

--   4. Retrieve the product names and prices of all products ordered by the customer with first name "Bugs" and last name "Bunny"
select p.name, p.cost
from products as p
join orders as o on o.product_id = p.id
join customers as c on c.id = o.customer_id
where c.first_name = 'Bugs' and c.last_name = 'Bunny';
