
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , art = require('./routes/art')
    , http = require('http')
    , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/art/new', art.createForm);
app.get('/art/:id/edit', art.editForm);
app.get('/art/:id', art.view);
app.put('/art/:id', art.update);
app.post('/art', art.create);
app.delete('/art/:id', art.destroy);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
