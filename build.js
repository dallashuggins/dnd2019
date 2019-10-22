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
  console.log('HTTPS server listening on port 443: https://localhost:443/')
})

// redirect HTTP server
const httpApp = express();
httpApp.all('*', (req, res) => res.redirect(300, 'https://localhost'));
const httpServer = http.createServer(app);
httpServer.listen(80, () => console.log(`HTTP server listening: http://localhost`));