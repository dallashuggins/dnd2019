'use strict';
const express = require('express');
const router = express.Router();
const weather = require('../../middleware/weather/index.js');
const assert = require('assert');

router.get('/:client_id:/client_secret', async function (req, res) {
    let params = req.params;
    let object = {
      aeris_access_key: params.client_id,
      aeris_secret_key: params.client_secret
    };
    try {
        await weather.getForecast(object, function(err, response) {
          assert.equal(null, err);
          console.log("Added", response);
          res.status(200).send(response);
        });
    } catch (e) {
        res.status(400).send(e.message)
    }
});

module.exports = router;