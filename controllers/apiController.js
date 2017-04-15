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

    app.get('/api/works/', function (req, res) {
        Work.find({}, 'work', function (err, docs) {
            res.send(docs);
        });
    });

    app.put('/api/work/:problem/:zipcode', function (req, res) {
        console.log(req.params.problem);
        console.log(req.params.zipcode);
    });

    app.post( '/api/cnt', function (req, res) {

    });
}

















