const express = require('express');

const app = express();

app.get('/ping', (res, req) => {
  res.send('pong')
});

app.listen(8080, 'localhost');