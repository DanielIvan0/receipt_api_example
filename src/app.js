const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Not found!</h1>');
});

module.exports = app;