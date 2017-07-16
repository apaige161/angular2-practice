//server setup
//not wired up, not sure if I want to use this or another way
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
 
 //need to create these files/folders
const index = require('./routes/index');
const todos = require('./routes/todos');
 
const app = express();
 
/**** view engine setup *****/
//set path
app.set('views', path.join(__dirname, 'views')); //should this be?? app.set('views', path.join(__dirname, 'app')); 
//specify engine
app.set('view engine', 'ejs');
//render files with an html extention
app.engine('html', require('ejs').renderFile);

/***** set static folder ******/
app.use(express.static(path.join(__dirname, 'client')))

/***** body parser middleware ******/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/***** route ******/
app.use('/', index);
app.use('/api', todos);

/***** start server ******/
const server = app.listen(3000, function() {
    console.log('server is running on port 3000')
}










/*
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', index);
app.use('/api/v1/', todos);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
const server = app.listen(3000, function() {
    const host = 'localhost';
    const port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
 
module.exports = app;

*/