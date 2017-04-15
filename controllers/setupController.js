/**
 * Created by owen on 4/14/17.
 */
var Workers = require('../models/workerModel');

model.exports = function (app) {

    app.get('/api/setupWorkers', function(req, res) {
        // seed database
        var starterWorkers = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Workers.create(starterWorkers, function(err, results) {
            res.send(results);
        });
    });
}