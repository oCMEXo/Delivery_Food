CREATE TABLE orders
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    street      TEXT,
    house       TEXT,
    total_price NUMERIC,
    order_items TEXT
);