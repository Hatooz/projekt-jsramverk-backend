var express = require('express');
var router = express.Router();
const path = require('path')
// const dbPath = path.resolve(__dirname, '../../db/database.js')
const sqlite3 = require('sqlite3').verbose();
let db = require('../../db/database.js')
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


router.post('/', (req, res) => {
    const myPlaintextPassword = req.body.password;
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);
    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
    req.body.email,
    hash, (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("success")
    res.send("201")
});
});

module.exports = router;


