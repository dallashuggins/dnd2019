'use strict';
const express = require('express');
const router = express.Router();
const weather = require('../../middleware/weather/index.js');
const assert = require('assert');

router.get('/forecast', async function (req, res) {
    let object = {
      aeris_access_key: req.query.client_id,
      aeris_secret_key: req.query.client_secret
    };
    try {
        weather.getForecast(object, function(err, response) {
          assert.equal(null, err);
          console.log("Weather forecast response:", response);
          res.status(200).send(response);
        });
    } catch (e) {
        res.status(400).send(e.message)
    }
});

router.get('/observations', async function (req, res) {
    let object = {
      aeris_access_key: req.query.client_id,
      aeris_secret_key: req.query.client_secret,
      from: req.query.from
    };
    try {
        weather.getHistoricalObservations(object, function(err, response) {
          assert.equal(null, err);
          console.log("Weather observation response:", response);
          res.status(200).send(response);
        });
    } catch (e) {
        res.status(400).send(e.message)
    }
});

module.exports = router;