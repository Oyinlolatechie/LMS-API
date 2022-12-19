require('dotenv').config()
const createError = require('http-errors');
const {errorHandler, forwardError} = require('./middleware/errorMiddleware')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./config/db')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express(); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//connect mongoDB
db.connectMongoDB()

//defined routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

//errorMiddleware
app.use(forwardError)
app.use(errorHandler)

module.exports = app;
