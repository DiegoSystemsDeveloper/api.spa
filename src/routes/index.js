const express = require('express');
const router = express.Router();
const { getManicurists, getCustomers, getProducts, getServices, getAppoinments, insertAppoinment, updateCustomer } = require('../controllers/index.controllers');

router.get('/manicurists', getManicurists);
router.get('/customers', getCustomers);
router.get('/products', getProducts);
router.get('/services', getServices);
router.get('/appoinments', getAppoinments);
router.post('/appoinments', insertAppoinment);
router.put('/customers/:id', updateCustomer);

module.exports = router;