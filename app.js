// Dependencies
const express = require("express");
const cors = require("cors");


const appError = require("./controllers/error/appError");
const globalErrorHandler = require("./controllers/error/globalError");
const routeHandler = require("./routes/router");


// Module Scafolding
const app = express();

/**
 * @Middleware_Functions
 * ------------------------------------------------------------------------------------------------------------------------
 */


// parse json data from user
app.use(express.json());

// Allow Cross Origin Request
app.use(cors({
    "origin": "*",
}));


app.use((req, res, next) => {
    logger.info(req.url);
    next();
})



// Handle global error
app.use(globalErrorHandler)

// Export Module
module.exports = app;