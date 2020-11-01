var express = require('express');
var router = express.Router();
const path = require('path')
const dbPath = path.resolve(__dirname, '../../db/database.js')
const sqlite3 = require('sqlite3').verbose();
let db = require('../../db/database.js');
const jwt = require('jsonwebtoken');

// const path = require('path')
// const dbPath = path.resolve(__dirname, '../../db/texts.sqlite')
// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database(dbPath);

//Get personal presentation
router.get('/week/:id', (req, res) => {
    let sql = `SELECT * FROM texts WHERE kmom = ?`
    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            throw err;
        }
        console.log(row)
        res.send(row)
    })
    
    // // const number = req.params.id;  
    // const week = weeks.find(week => week.id === number)    
    // res.send(week)
});

router.post('/', 
    (req, res, next) => checkToken(req, res, next),     
    (req, res) => {
        db.run("INSERT INTO texts (kmom, redovisning) VALUES (?, ?)",
        req.body.kmom,
        req.body.redovisning,
        (err) => {
        if (err) {
            console.log(err.message)
        }
        console.log("success")
        res.send("201")
    });
});
router.put('/', 
    (req, res, next) => checkToken(req, res, next),     
    (req, res) => {
        db.run(`UPDATE texts
        SET redovisning = ?
        WHERE kmom = ?`,        
        req.body.redovisning,
        req.body.kmom,
        (err) => {
        if (err) {
            console.log(err.message)
        }
        console.log("success")
        res.send("201")
    });
});

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];
    const secret = 'longsecret';
    console.log(token)
    console.log(secret)

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            // send error response
            res.sendStatus(403)
            return;
        }

        // Valid token send on the request
        next();
    });
}






module.exports = router;


