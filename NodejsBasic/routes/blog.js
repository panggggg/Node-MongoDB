var express = require('express');
var router = express.Router();
const db = require('monk')("localhost:27017/BlogsDB"); //connect db


router.get('/', function (req, res, next) {
    res.render("blog");
});

router.get('/add', function (req, res, next) {
    res.render("addBlog");
});

router.post('/add', function (req, res, next) {
    var ct = db.get('blogs');
    ct.insert({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    }, function (err, blog) {
        if (err) {
            res.send(err);
        } else {
            res.location('/blog/add');
            res.redirect('/blog/add'); //ถ้าบันทึกแล้วจะ redirect มาที่หน้า add
        }
    });
});





module.exports = router;