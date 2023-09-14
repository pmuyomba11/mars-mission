const express = require('express');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT;
//Initialization....
const app = express();


//Middleware..
app.use(morgan('dev'));

//Routes....


//Listening...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on PORT: ${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})