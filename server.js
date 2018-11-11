/*const express = require("express");
const app = express();
const path = require('path');
require('dotenv').config()
const bodyParser = require('body-parser');
console.log("hello");
app.set("port", 3000);
app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});*/
//const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var creds = require('./credentials.js');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
console.log("Un/pw", un, pw)
let uri = `mongodb+srv://${un}:${pw}@wedding-5qb9t.mongodb.net/registrants?retryWrites=true`;
//var routes = require('./routes/index.js');

MongoClient.connect(uri, {useNewUrlParser: true}, function(err, db) {
    "use strict";
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");
    //const collection = db.db(creds.database).collection(creds.collection);
    //console.log("MongoDB collection:", collection);
    /*var app = express();
    app.use('/', routes);
    // Start the server listening
    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Server listening on port %s.', port);
    });*/
    console.log('connected to '+ uri);
    db.close();
});

//module.exports = router;