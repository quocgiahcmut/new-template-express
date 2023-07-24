const UserModel = require('../models/user');

function getUsers() {
	return UserModel.find();
}

function getUserByName(username) {
	return UserModel.findOne({ username });
}

function createUser(value) {
	new UserModel(value).save().then((user) => user.toObject());
}

function deleteUser(username) {
	UserModel.findOneAndDelete({ username: username });
}

module.exports = {
	getUsers,
	getUserByName,
	createUser,
	deleteUser,
};
