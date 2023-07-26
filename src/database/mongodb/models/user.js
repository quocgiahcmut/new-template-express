const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
	},
	email: {
		type: String,
		unique: true,
	},
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
