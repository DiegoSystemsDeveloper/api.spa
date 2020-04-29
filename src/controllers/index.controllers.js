const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgresql',
    database: 'spa',
    port: '5432'
})

const getManicurists = async(req, res) => {
    const response = await pool.query('SELECT * FROM manicurista');
    res.status(200).json(response.rows);
}

const getCustomers = async(req, res) => {
    const response = await pool.query('SELECT * FROM clientes');
    res.status(200).json(response.rows);
}

const getProducts = async(req, res) => {
    const response = await pool.query('SELECT * FROM productos');
    res.status(200).json(response.rows);
}

const getServices = async(req, res) => {
    const response = await pool.query('SELECT * FROM trabajos');
    res.status(200).json(response.rows);
}

module.exports = {
    getManicurists,
    getCustomers,
    getProducts,
    getServices
}