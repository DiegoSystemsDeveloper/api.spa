const express = require('express');
const router = express.Router();
const {
    manicurist,
    customer,
    appoinment,
    product,
    service
} = require('../controllers/index.controllers');

//manicurist routes
router.get('/manicurists', manicurist.getManicurists);
router.get('/manicurists/:id', manicurist.getManicuristCalendar)

//product routes 
router.get('/products', product.getProducts);

//service routes
router.get('/services', service.getServices);

//appoinment routes
router.get('/appoinments', appoinment.getAppoinments);
router.post('/appoinments', appoinment.insertAppoinment);

//customer routes
router.get('/customers', customer.getCustomers);

module.exports = router;