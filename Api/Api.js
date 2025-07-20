const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'FoodStore',
    password: 'qwerty123',
    port: 5432,
});


app.post('/order', async (req, res) => {
    console.log('Get data order:', req.body);

    try {
        const { street, house, totalPrice, orderItems } = req.body;

        if (!street || !house || totalPrice === undefined || totalPrice === null || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ error: 'Empty must line or not correct format orderItems' });
        }

        const result = await pool.query(
            `INSERT INTO orders (street, house, total_price, order_items) VALUES ($1, $2, $3, $4) RETURNING *`,
            [street, house, totalPrice, JSON.stringify(orderItems)]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Order creating error:', err);
        res.status(500).json({ error: 'Ошибка при создании заказа' });
    }
});




app.get('/', (req, res) => {
    res.send('API is working');
});


app.listen(5178, () => {
    console.log('Server running on port 5178');
});
