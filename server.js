global.__basedir = __dirname;
global.__config = require('./config/index.json');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${__config.DB}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json({ limit: '10000kb' }));

app.use('/api/v1', (req, res, next) => {
  if (req.headers['api-key'] !== __config.API_KEY) return res.status(401).json({ error: true, message: 'Not Authorized' });

  next();
});

const restApiV1 = require('./rest-api/v1');
app.use('/api/v1', restApiV1);

const routes = require('./routes');
app.use('/', routes);

const { port, ip } = __config.server;

app.listen(port, ip, () => console.log(`EasyOneWeb Short URLs server has started on ${ip}:${port}`));