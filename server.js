// Frameworks and libraries:
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
// Connection:
var creds = require('./credentials.js');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
let uri = `mongodb+srv://${un}:${pw}@wedding-5qb9t.mongodb.net`;
// Files:
//var routes = require('./routes/index.js');
const RegistrantDB = require('./registrants').RegistrantDB;

// Set up express
const app = express();
app.set("port", 3001);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(uri, {useNewUrlParser: true}, function(err, db) {
    "use strict";

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    var registrants = new RegistrantDB(db);
    var router = express.Router();

    router.get("/", function (req, res) {
        console.log(req, res);
    });

    router.post("/add", function (req, res) {
        let body = req.body;
        console.log("Body", body);
        try {
            registrants.addItem(body.name, body.regCode, body.status, function(err, registrant) {
                assert.equal(null, err);
                console.log("Added", registrant);
                res.status(200).send(registrant);
            });
        } catch (e) {
            res.status(400).send(e.message);
        }
    });
    app.use('/', router); // mounts the specified middleware function or functions at the specified path
    app.listen(3001); // binds and listens for connections on specified host and port
    //db.close();
});