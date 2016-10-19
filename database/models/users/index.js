var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	//id: { type: Number, required: true, unique: true },
	name: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, required: true }
	//data: { type: objectId }
})

var User = mongoose.model('User', UserSchema)

module.exports = User
