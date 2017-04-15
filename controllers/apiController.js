/**
 * Created by owen on 4/1/17.
 */
var Worker = require('../models/workerModel');
var Work = require('../models/workModel');

module.exports = function (app) {

    app.get('/api/', function (req, res) {

        Worker.find({}, function(err, worker) {
            if (err) throw err;
            res.send(worker);
        });

        /*Worker.find({ "firstname": "John" }, function(err, worker) {
            if (err) throw err;
            res.send(worker);
        });*/
    });

    app.get('/api/works/', function (req, res) {
        Work.find({}, 'work', function (err, docs) {
            res.send(docs);
        });
    });

    app.get('/api/work/:problem/:zipcode', function (req, res) {
        //console.log(req.params.problem);
        //console.log(req.params.zipcode);
        var result = {
            "cost" : "500",
            "hr" : "1",
            "min" : "33"
        }
        res.send(result);
    });

    app.get( '/api/worker', function (req, res) {
        var worker = {
            "name" : "The Rock",
            "occupation": "plumber",
            "ranking" : "3",
            "lat" : "37.354107",
            "log" : "-121.955238"
        };
        res.send(worker);
    });
}

















