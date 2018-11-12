// Frameworks and libraries:
const express = require('express');
const app = express();
app.set("port", 3001);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection:
var creds = require('./credentials.js');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
let uri = `mongodb+srv://${un}:${pw}@wedding-5qb9t.mongodb.net/registrants?retryWrites=true`;
// Files:
var routes = require('./routes/index.js');

MongoClient.connect(uri, {useNewUrlParser: true}, function(err, db) {
    "use strict";
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");
    const Registrants = db.db(creds.database).collection(creds.collection);
    //console.log("MongoDB collection:", collection);
    app.use('/', routes);
    app.listen(3001);
    db.close();
});