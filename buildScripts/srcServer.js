import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  //Hard coding for simplicity. Pretend this hits a real daabase
  res.json([
    {"id": 1, "firstName": "Marcos", "lastName": "Correia", "email": "marcosc@blanclabs.com"},
    {"id": 2, "firstName": "Milagros", "lastName": "Gómez", "email": "milagrosg@blanclabs.com"},
    {"id": 3, "firstName": "Jesús", "lastName": "Gónzalez", "email": "jesusg@blanclabs.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:'+ port);
  }
});
