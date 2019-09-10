//var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
var handlebars = require('express3-handlebars')
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var index = require('./routes/index');
var photos = require('./routes/photos')
//var usersRouter = require('./routes/users');

var app = express();
console.log(module);
// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/', photos);
app.get("/index", function (req, res) {
   res.sendFile('index.handlebars', { root : VIEWS });

 });
 app.get('/photos', function(req, res){
 res.sendFile('photos.handlebars', {root: VIEWS});
});


//app.use('/users', usersRouter);

// catch 404 and forward to error handler
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

module.exports = app;
app.get('/', index.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
