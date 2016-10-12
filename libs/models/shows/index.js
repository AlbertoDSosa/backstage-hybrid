var mongoose = require('mongoose')

var objectId = mongoose.Schema.ObjectId

var ShowSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  place: { type: String, required: true },
  makedBy: { type: String, required: true },
  chekedBy: { type: String, required: true },
  // date: { type: Date, required: true },
  equipaments: [{
    type: objectId,
    ref: 'Equipament',
    required: true
  }],
  descripcion: String

}, { collection: 'shows' })

var Show = mongoose.model('Show', ShowSchema)


module.exports = Show
