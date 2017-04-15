/**
 * Created by owen on 4/1/17.
 */
var Worker = require('../models/workerModel');

module.exports = function (app) {

    app.get('/api/', function (req, res) {
        Worker.find({ "firstname": "John" }, function(err, worker) {
            if (err) throw err;
            res.send(worker);
        });
    });

    app.get('/api/:id/:name', function (req, res) {

    });

    app.put('/api/:id/:val', function (req, res) {

    });

    app.post( '/api/cnt', function (req, res) {

    });
}

















