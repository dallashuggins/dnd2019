// Frameworks and libraries:
const express = require('express');
const http = require('http');
const path = require('path');
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
const routes = require('./routes/index.js');
const RegistrantDB = require('./middleware/database/index.js');

// Set up express
const app = express();
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json(),cors(),helmet())
app.use('/api', routes);
const router = express.Router();
var db;

const httpServer = http.createServer(app);
// Start the application after the database connection is ready
httpServer.listen(3001, () => {
    console.log('HTTP Server running on port 3001');
});

MongoClient.connect(uri, {useNewUrlParser: true}, function(err, database) {
    assert.equal(null, err);
    db = database;
    app.use('/api', router);
    const registrants = new RegistrantDB(db);
    router.post("/add", function (req, res) {
        let body = req.body;
        console.log("Body", body);
        let object = {
            name: body.name,
            regCode: body.regCode,
            status: body.status,
            comments: body.comments,
            guests: body.guests
        }
        try {
            registrants.addItem(object, function(err, registrant) {
                assert.equal(null, err);
                console.log("Added http server:", registrant);
                res.status(200).send(registrant);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });
});