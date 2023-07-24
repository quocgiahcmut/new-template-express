const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: { type: String, require: true },
	price: { type: Number, require: true },
});

const ProductModel = mongoose.model('Product', ProductSchema);

const getProduct = () => {
	return ProductModel.find();
};

const createProduct = (product) => {
	new ProductModel(product).save().then((product) => product.toObject());
};
