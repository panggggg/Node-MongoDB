var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Display All Product');
});

router.get('/add', function (req, res, next) {
    res.send('Add Product');
});

router.get('/edit', function (req, res, next) {
    res.send('Edit Product');
});

router.get('/delete', function (req, res, next) {
    res.send('Delete Product');
});



module.exports = router;