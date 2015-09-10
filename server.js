var express = require('express'),
	http = require('http'),
    path = require('path'),

    app = express();

app.set('port', process.env.PORT || 3300);

app.use(express.static(path.join(__dirname, './www')));

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500, err.message);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});