const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/about', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));

res.render('about', {
    title: "About us",
    mainheader: "About us"

});


});

module.exports = router;