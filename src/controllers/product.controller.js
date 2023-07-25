const express = require('express');
const { v4: uuidv4 } = require('uuid');

const ProductDto = require('../utils/dtos/product.dto');
const productRepository = require('../database/repositories/product.repository');

const getProduct = async (req, res, next) => {
	var products = await productRepository.getProducts();
	var returnProduct = products.map((p) => {
		return new ProductDto(p);
	});
	res.status(200).json(returnProduct);
};

const getProductById = async (req, res, next) => {
	var productId = req.params.id;
	var product = await productRepository.getProductById(productId);
	var returnProduct = new ProductDto(product);
	res.status(200).json(returnProduct);
};

const postProduct = async (req, res, next) => {
	var product = req.body;
	product = { ...product, id: uuidv4() };
	var result = await productRepository.createProduct(product);
	if (!result) {
		res.status(400).json({
			message: 'bad request, create error',
		});
	}

	res.status(201).json(product);
};

const patchProduct = async (req, res, next) => {
	var product = req.body;
	console.log(product);
	var result = await productRepository.updateProduct(product.id, product);
	if (!result) {
		res.status(400).json({
			message: 'update error',
		});
	}

	res.status(201).json({
		message: 'update success',
	});
};

const deleteProduct = async (req, res) => {
	var productId = req.params.id;
	var result = await productRepository.deleteProduct(productId);
	if (!result) {
		res.status(400).json({
			message: 'delete error',
		});
	}

	res.status(201).json({
		message: 'delete success',
	});
};

module.exports = {
	getProduct,
	getProductById,
	postProduct,
	patchProduct,
	deleteProduct,
};
