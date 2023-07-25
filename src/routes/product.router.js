const express = require('express');
const router = express.Router();

const { getProduct, getProductByName, postProduct } = require('../controllers/product.controller');

router.get('/', getProduct);
router.get('/:name', getProductByName);

router.post('/', postProduct);

module.exports = router;
