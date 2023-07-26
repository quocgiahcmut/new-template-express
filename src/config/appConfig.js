require('dotenv').config();

module.exports = {
    connections: {
        mongodb: {
            url: process.env.MONGO_DATABASE_URL,
        },
    },
};
