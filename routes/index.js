// Frameworks and libraries:
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
// Connection:
var creds = require('../credentials.js');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
let uri = `mongodb+srv://${un}:${pw}@wedding-5qb9t.mongodb.net/registrants?retryWrites=true`;

// Set up express
const app = express();
app.set("port", 3000);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));


console.log("test");
MongoClient.connect(uri, {useNewUrlParser: true}, function (err, db) {
    "use strict";

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    var router = express.Router();
    //const Registrants = db.db(creds.database).collection(creds.collection);
    //console.log("Registrants", Registrants);
    router.get(`/`, async function (req, res) {
        console.log(req)
    });
    router.post(`/add`, async function (req, res) {
        let body = req.body;
        try {
            /*Registrants.updateOne({
                createdAt: Date.now(),
                name: body.name,
                regCode: body.regCode,
                status: body.status
            });*/
            res.status(200).send({});
        } catch (e) {
            res.status(400).send(e.message);
        }
    });
    //console.log("MongoDB collection:", collection);
    //app.use('/', routes);
    app.use('/', router);
    app.listen(3000);
    db.close();
});

//module.exports = router;