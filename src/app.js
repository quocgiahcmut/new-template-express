const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const config = require('./config/appConfig');
const productRouter = require('./routes/product.router');
const logger = require('./config/loggerConfig');
const errorHandler = require('./middlewares/errorHandler');
const connectToMongoDB = require('./database/connection');

const app = express();

connectToMongoDB(config.connections.mongodb.url);

app.use(bodyParser.json());

app.use((req, res, next) => {
    logger.info(`[${req.method}] ${req.url}`);
    next();
});

app.use('/api/products', productRouter);

app.use(errorHandler);

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});
