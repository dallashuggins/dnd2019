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
        weather.getForecast(object, function(err, response) {
          assert.equal(null, err);
          console.log("Added weather", response);
          res.status(200).send(response);
        });
    } catch (e) {
        res.status(400).send(e.message)
    }
});

module.exports = router;