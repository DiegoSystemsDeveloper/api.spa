const { Pool } = require('pg');
//postgres://svocaocakjrecw:1067e02488a53e4a7a6008e17165b36e6671d430250e314d534cdce0dc4d109b@ec2-52-87-135-240.compute-1.amazonaws.com:5432/d47rpsguqi90a5

const pool = new Pool({
    host: 'ec2-52-87-135-240.compute-1.amazonaws.com',
    user: 'svocaocakjrecw',
    password: '1067e02488a53e4a7a6008e17165b36e6671d430250e314d534cdce0dc4d109b',
    database: 'd47rpsguqi90a5',
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