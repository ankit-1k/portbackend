const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected');
    } catch (error) {
        console.error('Failed to connect to DB:', error);
    }
};

module.exports = connectDB;
