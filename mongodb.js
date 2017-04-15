var mongoose = require('mongoose');

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

	// var john = Person({
	//   firstname: 'John',
	//   lastname: 'Doe',
	//   address: '555 Main St.'
	// });
	//
	// // save the user
	// john.save(function(err) {
	//   if (err) throw err;
	//
	//   console.log('person saved!');
	// });
	//
	// var jane = Person({
	//   firstname: 'Jane',
	//   lastname: 'Doe',
	//   address: '555 Main St.'
	// });
	//
	// // save the user
	// jane.save(function(err) {
	//   if (err) throw err;
	//
	//   console.log('person saved!');
	// });

	// get all the worker
    Worker.find(function(err, workers) {
		if (err) throw err;

		// object of all the users
		console.log(workers);
	});
});
