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

	// var john = Worker({
     //    firstname: 'John',
     //    lastname: 'Doe',
     //    licencenum: '00123',
     //    phone: '6692650012',
     //    review: 'He is cool!',
     //    rating: 4,
     //    skill:'plumb'
	// });
    //
	// // save the user
	// john.save(function(err) {
	//   if (err) throw err;
    //
	//   console.log('worker saved!');
	// });

	// get all the worker
    Worker.find(function(err, workers) {
		if (err) throw err;

		// object of all the users
		console.log(workers);
	});
});
