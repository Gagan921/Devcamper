const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')
//Load env variables
dotenv.config({path:'./config/config.env'})
const app = express();

//Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');//Here we are fetching the data from bootcamps.js
const req = require('express/lib/request');


//Dev logging middleware
if (process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}
//Mount routers
app.use('/api/v1/bootcamps',bootcamps) //it will basically replace the complete path with /

const PORT = process.env.PORT||5000;
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))