// Frameworks and libraries:
const express = require('express');
const router = express.Router();
const app = express();
app.set("port", 3000);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection:
var creds = require('../credentials.js');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
let uri = `mongodb+srv://${un}:${pw}@wedding-5qb9t.mongodb.net/registrants?retryWrites=true`;

MongoClient.connect(uri, {useNewUrlParser: true}, function (err, db) {
    "use strict";
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");
    const Registrants = db.db(creds.database).collection(creds.collection);
    router.get(`/`, async function (req, res) {
        console.log(req)
    });
    router.post(`/add`, async function (req, res) {
        let body = req.body;
        let name = body.name;
        console.log("Name", name);
        try {
            Registrants.updateOne({
                createdAt: Date.now(),
                name: name
            });
            res.status(200).send({});
        } catch (e) {
            res.status(400).send(e.message);
        }
    });
    //console.log("MongoDB collection:", collection);
    //app.use('/', routes);
    app.use('/', router);
    app.use('/', require('redirect-https')({
        port: 5000,
        body: '',
        trustProxy: true,
        browsers: 301,
        apis: 'meta'
    }));
    app.listen(3000);
    db.close();
});

//module.exports = router;