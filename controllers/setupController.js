/**
 * Created by owen on 4/14/17.
 */
var Workers = require('../models/workerModel');
var Works = require('../models/workModel');

module.exports = function (app) {

    app.get('/api/setupWorkers', function(req, res) {
        // seed database
        var starterWorkers = require('../fakeworkers');
        Workers.create(starterWorkers, function(err, results) {
            res.send(results);
        });
    });

    app.get('/api/setupWorks', function(req, res) {
        // seed database
        var starterWorks = require('../allworks');
        Works.create(starterWorks, function(err, results) {
            res.send(results);
        });
    });
}