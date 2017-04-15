/**
 * Created by owen on 4/14/17.
 */
var Workers = require('../models/workerModel');

module.exports = function (app) {

    app.get('/api/setupWorkers', function(req, res) {
        // seed database
        var starterWorkers = require('../fakeworkers');
        Workers.create(starterWorkers, function(err, results) {
            res.send(results);
        });
    });
}