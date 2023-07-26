const ProductModel = require('../models/product');

const getProducts = async () => {
    return await ProductModel.find();
};

const getProductById = async (productId) => {
    return await ProductModel.findOne({ id: productId });
};

const createProduct = async (product) => {
    const newProduct = new ProductModel({ ...product });
    await newProduct.save();
    return newProduct;
};

const updateProduct = async (productId, product) => {
    var updatedProduct = await ProductModel.findOneAndUpdate({ id: productId }, product);
    return updatedProduct;
};

const deleteProduct = async (productId) => {
    var deletedProduct = await ProductModel.findOneAndDelete({ id: productId });
    return deletedProduct;
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
