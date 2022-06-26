// Dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const database = require('./config/db');
const app = require('./app');

// Database Connection
database.connect();

// configure environment
dotenv.config();

// handle uncaught Exception error
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});



// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});