const express = require('express');
const router = express.Router();
const { getManicurists, getCustomers, getProducts, getServices, getAppoinments } = require('../controllers/index.controllers');

router.get('/manicurists', getManicurists);
router.get('/customers', getCustomers);
router.get('/products', getProducts);
router.get('/services', getServices);
router.get('/appoinments', getAppoinments);

module.exports = router;