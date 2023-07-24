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

mongoose.connect('')
