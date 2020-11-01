var express = require('express');
var router = express.Router();
const path = require('path')
const dbPath = path.resolve(__dirname, '../../db/database.js')
const sqlite3 = require('sqlite3').verbose();
let db = require('../../db/database.js');

//Get personal presentation
router.get('/',(req, res) => {

    // let sql = `SELECT * FROM info`
    // let data;
    // let info;
    // db.all(sql, [], (err, rows) => {
    //     if (err) {
    //       throw err;
    //     }
    //     rows.forEach((row) => {          
    //       info = row.aboutme
    //     });
    //     data = {
    //       presentation: info
    //   };      
    //   res.json(data.presentation);
    
    //   });
    res.send("Hello")
      
});

module.exports = router;
