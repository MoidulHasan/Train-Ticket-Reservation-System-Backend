// dependencies
const express = require('express');
const { saveData } = require('../controllers/formControllers')

const router = express.Router();

router.post('/', saveData);

//Routes will go here
module.exports = router;