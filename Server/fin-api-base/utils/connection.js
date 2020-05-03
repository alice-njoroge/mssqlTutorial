const Connection = require('tedious').Connection;
require('dotenv').config();

const config = {
    server: process.env.SERVER,
    authentication: {
        type: process.env.TYPE,
        options: {
            userName: process.env.USERNAME,
            password: process.env.PASSWORD,
            database:process.env.DATABASE
        }
    }
}
const connection = new Connection(config)
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Successful connection')
    }
});

module.exports = connection;