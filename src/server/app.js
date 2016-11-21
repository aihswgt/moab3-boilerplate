var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')

var mongoose = require('mongoose')

var configDB = require('./config/database.js')

// configuration ===============================================================
mongoose.connect(configDB.urlLocal); // connect to our database
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', function() {
  console.log('DB CONNECTED!')
});

var app = express()

// view engine setup
//app.set('views', path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, '../client/'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('less-middleware')(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '../../public/')))
// This needs to be added because we want the server also serve static content from our 'client' directory
app.use(express.static(path.join(__dirname, '../client/')))

app.use('/', index)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  //res.render('index');
  res.send('500 - There was an error!')
})

module.exports = app;
