const express = require('express');
const app = express();
require('dotenv').config();

const connection = require('./utils/connection');

app.get('/', function (req, res) {
    connection();
    res.send('Hello world');
})
 app.listen(5000, function () {
    console.log('Server is running..');
});