var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds153710.mlab.com:53710/bornco_hackthon');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	var Schema = mongoose.Schema;

	var personSchema = new Schema({
		firstname: String,
		lastname: String,
		address: String
	});

	var Person = mongoose.model('Person', personSchema);

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

	// get all the users
	Person.find(function(err, users) {
		if (err) throw err;

		// object of all the users
		console.log(users);
	});
});
