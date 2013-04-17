
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , art = require('./routes/art')
    , http = require('http')
    , path = require('path')
    , mongoose = require('mongoose')
    , mongoURL;

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
    mongoURL = 'mongodb://localhost/art'
}

app.get('/', routes.index);
app.get('/art', art.list);
app.get('/art/new', art.createForm);
app.get('/art/:id/edit', art.editForm);
app.get('/art/:id', art.view);
app.put('/art/:id', art.update);
app.post('/art', art.create);
app.delete('/art/:id', art.destroy);

app.get('/:id', art.view);

mongoose.connect(mongoURL);
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
