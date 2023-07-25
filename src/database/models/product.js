const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	id: {
		type: String,
		require: true,
		unique: true,
	},
	name: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
