const ProductModel = require('../models/product');

const getProducts = async () => {
    return await ProductModel.find();
};

const getProductByName = async (productName) => {
    return await ProductModel.findOne({ name: productName });
};

const createProduct = async (product) => {
    try {
        console.log(product);
        const newProduct = new ProductModel({ ...product });
        await newProduct.save();
        return true;
    } catch {
        return false;
    }
};

module.exports = {
    getProducts,
    getProductByName,
    createProduct,
};
