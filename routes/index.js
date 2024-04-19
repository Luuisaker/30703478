var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Curriculum',
        Name: 'Luis',
        Lastname: 'Ayala',
        Mail: 'Luisjqayala98@gmail.com',
        School: 'U.E.C.A "Angel De La Guarda" ',
        Phone: '04145861216',
    });
});

module.exports = router;