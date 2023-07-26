const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'postgres', 'admin', {
	host: 'localhost',
	port: 5432,
	dialect: 'postgres',
});
const connect = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (err) {
		console.error('Unable to connect to the database:', error);
	}
};

connect();
