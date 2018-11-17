const express = require('express');
const router = express.Router();
const weather = require('./weather/index.js');

router.use('/weather', weather);

module.exports = router;