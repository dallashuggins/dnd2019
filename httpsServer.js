// Frameworks and libraries:
const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');
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
const RegistrantDB = require('./middleware/database/index.js').RegistrantDB;
const WeatherDB = require('./middleware/database/index.js').WeatherDB;

// Set up express
const app = express();
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json(),cors(),helmet())
app.use('/api', routes);
const router = express.Router();
var db;

// SSL:
const privateKey = fs.readFileSync('/usr/local/etc/letsencrypt/live/dnd2019.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/usr/local/etc/letsencrypt/live/dnd2019.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/usr/local/etc/letsencrypt/live/dnd2019.com/chain.pem', 'utf8');
const sslCredentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
const httpsServer = https.createServer(sslCredentials, app);
// Start https server: 
httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
// Redirect http to https: 
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);

// Open MongoDB connection:
MongoClient.connect(uri, {useNewUrlParser: true}, function(err, database) {
    assert.equal(null, err);
    db = database;
    // React:
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    // Database routes:
    const registrants = new RegistrantDB(db);
    app.use('/api', router);
    router.post("/add", function (req, res) {
        let body = req.body;
        console.log("Body", body);
        let object = {
            name: body.name,
            email: body.email,
            regCode: body.regCode,
            status: body.status,
            comments: body.comments,
            guests: body.guests
        }
        console.log("https object:", object);
        try {
            registrants.addItem(object, function(err, registrant) {
                assert.equal(null, err);
                console.log("Added https reg:", registrant);
                res.status(200).send(registrant);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });
    const weather = new WeatherDB(db);
    router.get("/temperatures", function (req, res) {
        try {
            weather.getTemps(function(err, temps) {
                assert.equal(null, err);
                //console.log("Retrieved https temps:", temps);
                res.status(200).send(temps);
            });
        } catch (e) {
            console.log("Error:", e);
            res.status(400).send(e.message);
        }
    });
});