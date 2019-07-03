const path = require('path');
const fs = require(`fs`);
const express = require('express');

const router = express.Router();

router.get('/contact', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
let contactData = JSON.parse(fs.readFileSync('./dataBase/contactData.txt', 'utf8'));
res.render('contact', {
    title: contactData.title,
    mainheader: contactData.capture

});

});

module.exports = router;