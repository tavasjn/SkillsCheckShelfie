update products
set image = $2, name = $3, price = $4
where id = $1;

select * from products;