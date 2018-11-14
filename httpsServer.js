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
var creds = require('./credentials.js');
const un = encodeURIComponent(creds.mongodb_un);
const pw = encodeURIComponent(creds.mongodb_pw);
const c = encodeURIComponent(creds.mongodb_cluster);
let uri = `mongodb+srv://${un}:${pw}@${c}.mongodb.net`;
// Files:
const RegistrantDB = require('./registrants').RegistrantDB;

// Set up express
const app = express();
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json(),cors(),helmet())
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
const httpServer = http.createServer(app);


// Open MongoDB connection:
MongoClient.connect(uri, {useNewUrlParser: true}, function(err, database) {
    assert.equal(null, err);
    db = database;
    // Start https server: 
    httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port 443');
    });
    // Redirect http to https: 
    httpServer.get('*', function(req, res) {  
        res.redirect('https://' + req.headers.host + req.url);
    })
    app.use('/api', router);
    const registrants = new RegistrantDB(db);
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
});