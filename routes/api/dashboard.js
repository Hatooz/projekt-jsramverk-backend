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
router.post('/', (req, res) => {
    console.log("getting")
    let sql = `SELECT * FROM users WHERE email = ?`
    db.get(sql, [req.body.email], (err, rows) => {
        console.log(req.body.email)
        if (err) {
            throw err;
        }
        console.log(rows)
        res.send(rows)
    })
    
    // // const number = req.params.id;  
    // const week = weeks.find(week => week.id === number)    
    // res.send(week)
});
router.post('/buy', (req, res) => {
    console.log("buying")
    let sql;
    if (req.body.stock === 'chaos') {
        sql = 'UPDATE users SET chaos  = chaos + ?, assets = assets - ? WHERE email = ?' 
    } else if (req.body.stock === 'exalts') {
        sql = 'UPDATE users SET exalts = exalts + ?, assets = assets - ? WHERE email = ?' 
    }
    
    db.run(sql,        
    req.body.amount,
    req.body.price,
    req.body.email,
    (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("success")
    res.send("201")
    });
})
router.post('/insertmoney', (req, res) => {
    console.log("inserting money")
    let sql = 'UPDATE users SET assets = assets + ? WHERE email = ?'
    db.run(sql,        
    req.body.amount,     
    req.body.email,
    (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("success")
    res.send("201")
    });
})
    
    // // const number = req.params.id;  
    // const week = weeks.find(week => week.id === number)    
    // res.send(week)


// router.post('/', 
//     (req, res, next) => checkToken(req, res, next),     
//     (req, res) => {
//         db.run("INSERT INTO texts (kmom, redovisning) VALUES (?, ?)",
//         req.body.kmom,
//         req.body.redovisning,
//         (err) => {
//         if (err) {
//             console.log(err.message)
//         }
//         console.log("success")
//         res.send("201")
//     });
// });
// router.put('/', 
//     (req, res, next) => checkToken(req, res, next),     
//     (req, res) => {
//         db.run(`UPDATE texts
//         SET redovisning = ?
//         WHERE kmom = ?`,        
//         req.body.redovisning,
//         req.body.kmom,
//         (err) => {
//         if (err) {
//             console.log(err.message)
//         }
//         console.log("success")
//         res.send("201")
//     });
// });

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


