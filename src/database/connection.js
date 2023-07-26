const mongoose = require('mongoose');

const connectToMongoDB = (mongoUrl) => {
    mongoose.connect(mongoUrl);
    mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));
    mongoose.connection.on('reconnected', () => console.log('MongoDB reconnected!'));
    mongoose.connection.on('error', (err) => {
        console.log(`Error in MongoDb connection: ${err}`);
        mongoose.disconnect();
    });
    mongoose.connection.on('disconnected', () => {
        console.error(`MongoDB disconnected! Reconnecting in ${30000 / 1000}s...`);
        setTimeout(() => mongoose.connect(mongoUrl), 30000);
    });
};

module.exports = connectToMongoDB;
