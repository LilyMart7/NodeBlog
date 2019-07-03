const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

//const pug = require('pug');


app.set("view engine", "pug");

const homePage = require('./router/homePage');
app.use(homePage);



console.log(`Server listen on http://localhost:3000/`);
app.listen(3000);

// npm start pug