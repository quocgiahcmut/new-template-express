const express = require('express');
const router = express.Router();

const {
	getProduct,
	postProduct,
	getProductById,
	patchProduct,
	deleteProduct,
} = require('../controllers/product.controller');

router.get('/', getProduct);
router.get('/:id', getProductById);
router.post('/', postProduct);
router.patch('/', patchProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
