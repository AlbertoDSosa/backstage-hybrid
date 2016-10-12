var mongoose = require('mongoose')


var EquipamentSchema = mongoose.Schema({
	id: { type: String, required: true, unique: true },
	//manual: { type: String }
	name: { type: String, required: true },
	feature: { type: String, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String },
	model: { type: String },
	description: { type: String }
	//photo: { type: String }

}, { collection: 'equipaments'})

var Equipament = mongoose.model('Equipament', EquipamentSchema)

module.exports = Equipament
