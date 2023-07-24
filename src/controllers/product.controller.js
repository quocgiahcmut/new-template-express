const express = require('express');

const getProduct = (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET product',
	});
};

const postProduct = (req, res, next) => {
	res.status(200).json({
		message: 'handle post product',
	});
};

module.exports = {
	getProduct,
	postProduct,
};
