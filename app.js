var express = require('express');
// var ueditor = require("ueditor");
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var http = require('http');
var session=require('express-session');
var fs = require("fs");
var config = require('./config');

var app = express();


app.set('views', path.join(__dirname, 'dist'));
// app.engine('html', require('ejs').renderFile);
app.engine('html',require('ejs-mate'));
app.set('view engine', 'html');

app.use(session({ resave: true, saveUninitialized: true,  secret: 'prjuser'}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    limit:'50mb',
    extended: true,
    parameterLimit:50000
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'assets/dist')));

app.use('/', require('./router/index'));
app.use('/admin', require('./router/admin/index'));

var port = normalizePort(process.env.PORT || config.app.webPort);
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
console.log("server running on:" + port);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
