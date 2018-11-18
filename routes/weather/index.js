'use strict';
const express = require('express');
const router = express.Router();
const weather = require('../../middleware/weather/index.js');
const assert = require('assert');

router.get('/', async function (req, res) {
    let object = {
      aeris_access_key: req.query.client_id,
      aeris_secret_key: req.query.client_secret
    };
    try {
        console.log("Type:", req.query.type);
        if (req.query.type === 'forecast') {
            weather.getForecast(object, function(err, response) {
                assert.equal(null, err);
                console.log("Weather forecast response:", response);
                res.status(200).send(response);
              });
        } else if (req.query.type === 'observation' && req.query.from) {
            weather.getHistoricalObservations(req.query.from, object, function(err, response) {
                assert.equal(null, err);
                console.log("Weather observation response:", response);
                res.status(200).send(response);
            });
        } else {
            res.status(400).send('Type of weather data was not provided.')
        }
    } catch (e) {
        res.status(400).send(e.message)
    }
});

module.exports = router;