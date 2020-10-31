const express = require('express');
const app = express();

const {config} = require('./config/index')
const moviesApi = require('./routes/movies.js');


// function isLeap(year) {
//     return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
// }

// app.get('/', function(req, res){

//     res.send("hello world");

// })

// app.get('/json', function(req, res){

//     res.json({ hello: 'world'});

// })

// app.get('/isleap/:year', function(req, res) {
//     const year = req.params.year
//     const esBisiesto = isLeap(year)
//     if (esBisiesto) {
//         res.send(`El año ${year} es bisiesto`)
//     } else {
//         res.send(`El año ${year} no es bisiesto`)
//     }
// })

moviesApi(app);

app.listen(config.port, () => {
    console.log('====================================');
    console.log(`Listening :${config.port}`);
    console.log('====================================');
});