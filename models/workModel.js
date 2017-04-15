var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workSchema = new Schema({
    work: String,
    skill: String,
    time: String,
    cost: String
});

var Work = mongoose.model('Work', workSchema);

module.exports = Work;
