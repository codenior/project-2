var express = require('express');
var router = express.Router();


var koneksi = require('../library/database.js');



router.get('/', function (req, res, next) {
    let sql = "SELECT * FROM posts ORDER BY desc";
    koneksi.query(sql, (err, rows) =>{
        if(err){
            req.flash('error', err);
            res.render('pots', {
                data: ''
            });
        }else{
            res.render('posts/index', {
                data: rows
            })
        }
    })
})


module.exports = router;