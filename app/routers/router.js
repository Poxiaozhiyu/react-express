'use strict';

const Index = require('../controllers/index_controller');

module.exports = function(app) {

  app.get('/', Index.index);

  // catch 404 and forward to error handler
  app.use(function(request, response, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, request, response, next) {
    // set locals, only providing error in development
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};

    // render the error page
    response.status(err.status || 500);
    response.render('error');
  });

};