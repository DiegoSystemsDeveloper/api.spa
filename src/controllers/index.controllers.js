const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-52-87-135-240.compute-1.amazonaws.com',
    user: 'svocaocakjrecw',
    password: '1067e02488a53e4a7a6008e17165b36e6671d430250e314d534cdce0dc4d109b',
    database: 'd47rpsguqi90a5',
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