const express = require('express');

const router = express.Router();

const productController = require('../controllers/product.controller');

// 1. Collect al Products
// URL: GET http://localhost:3000/api/products/
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
module.exports = router;