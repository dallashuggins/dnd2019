// Frameworks and libraries:
const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Set up express
const app = express();
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json(),cors(),helmet());
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// SSL:
const privateKey = fs.readFileSync('/usr/local/etc/letsencrypt/live/dnd2019.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/usr/local/etc/letsencrypt/live/dnd2019.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/usr/local/etc/letsencrypt/live/dnd2019.com/chain.pem', 'utf8');
const sslCredentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

https.createServer(sslCredentials, app)
.listen(443, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
