/**
 * Created by owen on 4/14/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var werkerSchema = new Schema({
    firstname: String,
    lastname: String,
    licencenum: String,
    phone: String,
    review: String,
    rating: { type: Number, min: 1, max: 5 },
    skill:String

});

var Worker = mongoose.model('Worker', werkerSchema);

module.exports = Worker;
