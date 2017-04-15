/**
 * Created by owen on 4/1/17.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');

// connect to database
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect('mongodb://test:test@ds153710.mlab.com:53710/bornco_hackthon');
apiController(app);
setupController(app);

app.listen(port);
console.log("listen on port: " + port + "\n");


