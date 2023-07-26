const express = require('express');
const { v4: uuidv4 } = require('uuid');

const ProductDto = require('../utils/dtos/product.dto');
const productRepository = require('../database/repositories/product.repository');

const getProduct = async (req, res, next) => {
    try {
        var products = await productRepository.getProducts();
        var returnProduct = products.map((p) => {
            return new ProductDto(p);
        });
        res.status(200).json(returnProduct);
    } catch (err) {
        next(err);
    }
};

const getProductById = async (req, res, next) => {
    try {
        var productId = req.params.id;
        var product = await productRepository.getProductById(productId);
        var returnProduct = new ProductDto(product);
        res.status(200).json(returnProduct);
    } catch (err) {
        next(err);
    }
};

const postProduct = async (req, res, next) => {
    try {
        var product = req.body;
        product = { ...product, id: uuidv4() };
        var createdProduct = await productRepository.createProduct(product);
        res.status(201).json(createdProduct);
    } catch (err) {
        next(err);
    }
};

const patchProduct = async (req, res, next) => {
    try {
        var product = req.body;
        console.log(product);
        var updatedProduct = await productRepository.updateProduct(product.id, product);
        res.status(200).json(new ProductDto(updatedProduct));
    } catch (err) {
        next(err);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        var productId = req.params.id;
        var deletedProduct = await productRepository.deleteProduct(productId);
        res.status(200).json(deletedProduct);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getProduct,
    getProductById,
    postProduct,
    patchProduct,
    deleteProduct,
};
