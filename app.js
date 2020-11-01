const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

const index = require('./routes/api/index');
const week = require('./routes/api/reports');
const register = require('./routes/api/register');
const login = require('./routes/api/login');
const dashboard = require('./routes/api/dashboard');

app.use('/', index)
app.use('/reports', week)
app.use('/register', register)
app.use('/login', login)
app.use('/dashboard', dashboard)

app.get('/', (req, res) => {
    res.send(`<h1>Plant World</h1><br>
    Route /all = whole json <br>
    Route /names = Names of all plants <br>
    Route /color/<color> = All plants that can have <color> as a color. <br>`);
});




const port = 1337;

// app.listen(port, () => console.log(`Example API listening on port ${port}!`));


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;
