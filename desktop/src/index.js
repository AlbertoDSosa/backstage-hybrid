var mongoose = require('mongoose')
var models = require('../../libs/models')
var Query = require('../../libs/queries')

// Variables de entorno y globales
var env = process.env.NODE_ENV || 'production'

// Conexión base de datos
if(env === 'development'){
	mongoose.connect('mongodb://172.17.0.1/backstage-dev')
} else {
	mongoose.connect('mongodb://172.17.0.1/backstage')
}

var Person = models.person

var person = new Query(Person)


var query = person.readOne({ id: 1 })

query.then(function () {
	console.log(person)
})



