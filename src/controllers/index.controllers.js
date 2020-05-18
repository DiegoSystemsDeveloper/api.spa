const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgresql',
    database: 'spa',
    port: '5432'
})

const objManicurist = require('./models/manicurists.controller');
const manicurist = new objManicurist(pool);

const objCustomer = require('./models/customers.controller');
const customer = new objCustomer(pool);

const objAppoinment = require('./models/appoinments.controller');
const appoinment = new objAppoinment(pool);

const objProduct = require('./models/products.controller');
const product = new objProduct(pool);

const objService = require('./models/services.controller');
const service = new objService(pool)

module.exports = {
    manicurist,
    customer,
    appoinment,
    product,
    service
}