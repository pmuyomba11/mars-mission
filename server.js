const express = require('express');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const missions = require('./models/missions');
const PORT = process.env.PORT;
//Initialization....
const app = express();


//Middleware..
app.use(morgan('dev'));

//Routes....
//Index route
app.get('/missions', (req, res) => {
    res.render('index.ejs', {
        allMissions: missions
    })
})


//Show route...
app.get('/missions/:id', (req, res) => {
    res.render('show.ejs', {
        mission: missions[req.params.id]
    })
})
//Listening...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on PORT: ${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})