const express = require('express');
const productRepository = require('../database/repositories/product.repository');

const getProduct = async (req, res, next) => {
    var product = await productRepository.getProducts();
    res.status(200).json({ product });
};

const getProductByName = async (req, res, next) => {
    var productName = req.params.name;
    var product = await productRepository.getProductByName(productName);
    res.status(200).json(product);
};

const postProduct = async (req, res, next) => {
    const product = req.body;
    var result = await productRepository.createProduct(product);
    if (!result) {
        res.status(400).json({
            message: 'bad request, create error',
        });
    }

    res.status(201).json({
        message: 'create success',
    });
};

module.exports = {
    getProduct,
    getProductByName,
    postProduct,
};
