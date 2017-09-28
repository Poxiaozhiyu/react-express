'use strict';

const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon');

var port = process.env.PORT || 3000;
var app = express();

// 设置icon
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
// 设置模板引擎
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');
// 设置静态文件路径
app.use(express.static(path.join(__dirname, 'static')));


app.use(function(request, response, next) {
  response.locals = {
    title: require('./package.json').title
  };
  next();
});

// 引入路由文件
require(path.join(__dirname, 'app/routers/router'))(app);

app.listen(port);
console.log('Server is listening at', port, '...');