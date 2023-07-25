const ProductModel = require('../models/product');

const getProducts = async () => {
	return await ProductModel.find();
};

const getProductById = async (productId) => {
	return await ProductModel.findOne({ id: productId });
};

const createProduct = async (product) => {
	try {
		const newProduct = new ProductModel({ ...product });
		await newProduct.save();
		return true;
	} catch {
		return false;
	}
};

const updateProduct = async (productId, product) => {
	try {
		await ProductModel.findOneAndUpdate({ id: productId }, product);
		return true;
	} catch (err) {
		return false;
	}
};

const deleteProduct = async (productId) => {
	try {
		await ProductModel.findOneAndDelete({ id: productId });
		return true;
	} catch {
		return false;
	}
};

module.exports = {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
