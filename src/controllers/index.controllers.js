const { Pool } = require('pg');

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

const getAppoinments = async(req, res) => {
    const response = await pool.query('SELECT * FROM citas');
    res.status(200).json(response.rows);
}

const insertAppoinment = async(req, res) => {
    const { idCliente, idTrabajo } = req.body;
    const response = await pool.query('insert into citas(idcliente, idtrabajo) values ($1,$2)', [idCliente, idTrabajo]);
    console.log(response);
    res.json({
        message: 'appoinment added succesfully',
        body: {
            idCliente,
            idTrabajo
        }
    })
}

const updateCustomer = async(req, res) => {
    const { id, phone } = req.body;
    const response = await pool.query('update clientes set celular = $1 where id = $2', [id, phone]);
    console.log(response);
    res.json({
        message: 'customer updated succesfully',
        body: {
            id,
            phone
        }
    })
}


module.exports = {
    getManicurists,
    getCustomers,
    getProducts,
    getServices,
    getAppoinments,
    insertAppoinment,
    updateCustomer
}