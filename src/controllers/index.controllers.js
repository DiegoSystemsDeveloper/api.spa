const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-3-216-129-140.compute-1.amazonaws.com',
    user: 'qoobieishjaqfv',
    password: '317f297cab83271008054984e44a89838735640a29fdce47b87c52c22fc95689',
    database: 'ddhjfhdhjfhhhu',
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