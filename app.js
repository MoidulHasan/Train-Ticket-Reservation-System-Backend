// Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const formSubmit = require('./routes/fromsubmit')


// Module Scafolding
const app = express();



// parse json data from user
app.use(express.json());

// Allow Cross Origin Request
app.use(cors({
    "origin": "*",
}));


app.use('/formsubmit', formSubmit)


// Handle global error
app.use((err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'server error';

    res.status(err.statusCode).json({
        error: err,
        message: err.message
    });
});

// Export Module
module.exports = app;