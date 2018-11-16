// Frameworks and libraries:
const express = require('express');
const http = require('http');
const assert = require('assert');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const MongoClient = require('mongodb').MongoClient;
// Connection:
var creds = require('./config.json');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
const c = encodeURIComponent(creds.mongodb_cluster);
let uri = `mongodb+srv://${un}:${pw}@${c}.mongodb.net`;
// Files:
//var routes = require('./routes/index.js');
const RegistrantDB = require('./registrants').RegistrantDB;

// Set up express
const app = express();
//app.set('port', 3001);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(),cors(),helmet())
const router = express.Router();
var db;

const httpServer = http.createServer(app);

MongoClient.connect(uri, {useNewUrlParser: true}, function(err, database) {
    assert.equal(null, err);
    db = database;
    // Start the application after the database connection is ready
    //app.listen(3001);
    httpServer.listen(3001, () => {
        console.log('HTTP Server running on port 3001');
    });
    const registrants = new RegistrantDB(db);
    /*router.get("/", function(req, res) {
        try {
            registrants.getItem(function(err, registrant) {
                assert.equal(null, err);
                console.log("Retrieved all", registrant);
                res.status(200).send(registrant);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });*/

    router.get("/:id", function(req, res) {
        let params = req.params;
        let object = {
            _id: params.id
        }
        try {
            registrants.getItem(object, function(err, registrant) {
                assert.equal(null, err);
                console.log("Retrieved", registrant);
                res.status(200).send(registrant[0]);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });

    router.post("/add", function (req, res) {
        let body = req.body;
        console.log("Body", body);
        let object = {
            name: body.name,
            regCode: body.regCode,
            status: body.status
        }
        try {
            registrants.addItem(object, function(err, registrant) {
                assert.equal(null, err);
                console.log("Added", registrant);
                res.status(200).send(registrant);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });
    app.use('/api', router);
});

/*MongoClient.connect(uri, {useNewUrlParser: true}, function(err, db) {
    "use strict";

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    var registrants = new RegistrantDB(db);

    router.get("/", function (req, res) {
        console.log(req, res);
    });

    router.post("/add", function (req, res) {
        let body = req.body;
        console.log("Body", body);
        let object = {
            name: body.name,
            regCode: body.regCode,
            status: body.status
        }
        try {
            registrants.addItem(object, function(err, registrant) {
                assert.equal(null, err);
                console.log("Added", registrant);
                res.status(200).send(registrant[0]);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });
     // mounts the specified middleware function or functions at the specified path
    //app.listen(3000); // binds and listens for connections on specified host and port
    //db.close();
    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Server listening on port %s.', port);
    });
});*/