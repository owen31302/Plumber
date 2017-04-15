var mongoose = require('mongoose');
// var assert = require('assert');


mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);

mongoose.connect('mongodb://test:test@ds153710.mlab.com:53710/bornco_hackthon');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!

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

    // var john = Worker({
    //     firstname: 'Mary',
    //     lastname: 'Lol',
    //     licencenum: '00345',
    //     phone: '6692650099',
    //     review: 'She is awesome!',
    //     rating: 5,
    //     skill:'roof'
    // });
    //
    // // save the user
    // john.save(function (err) {
    //     if (err) return console.error(err);
    //     console.log('worker saved!');
    // });

	// get all the worker
    // Worker.find(function(err, workers) {
	// 	if (err) throw err;
    //
	// 	// object of all the users
	// 	console.log(workers);
	// });

    // find one worker

});
