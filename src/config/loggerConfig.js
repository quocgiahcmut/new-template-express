const winston = require('winston');

const logger = winston.createLogger({
    transports: [new winston.transports.Console(), new winston.transports.File({ filename: './log/access.log' })],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
});

module.exports = logger;
