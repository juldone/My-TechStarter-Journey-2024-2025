const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;

// Logging mit Winston konfigurieren
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

// Middleware zum Loggen jeder Anfrage
app.use((req, res, next) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
});

// Endpunkt: /hello
app.get('/hello', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Endpunkt: /error
app.get('/error', (req, res) => {
  res.status(404).send('Not Found');
});

// Server starten
app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
