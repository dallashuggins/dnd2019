const express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    "use strict";
    console.log("req:", req);
    console.log("res:", res);
});