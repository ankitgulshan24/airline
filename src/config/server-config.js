const dotenv = require('dotenv');
const path = require('path');

// Load .env correctly
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
    PORT: process.env.PORT,
};
