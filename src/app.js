const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const winston = require('winston');
const productRouter = require('./routes/product.router');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const logger = winston.createLogger({
    transports: [new winston.transports.Console(), new winston.transports.File({ filename: './log/access.log' })],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
});

app.use((req, res, next) => {
    logger.info(`[${req.method}] ${req.url}`);
    next();
});

app.use('/api/products', productRouter);

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});

mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));
mongoose.connection.on('reconnected', () => console.log('MongoDB reconnected!'));
mongoose.connection.on('error', (err) => {
    console.log(`Error in MongoDb connection: ${err}`);
    mongoose.disconnect();
});
mongoose.connection.on('disconnected', () => {
    console.error(`MongoDB disconnected! Reconnecting in ${30000 / 1000}s...`);
    setTimeout(() => mongoose.connect('mongodb://localhost:27017/testdb'), 30000);
});
