CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  location VARCHAR(55)NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants(id, name, location, price_range) VALUES(2, 'Poutine Ville', 'Montreal', 1);