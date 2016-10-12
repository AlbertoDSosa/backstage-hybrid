var mongoose = require('mongoose')
var models = require('../../libs/models')

// Variables de entorno y globales
var env = process.env.NODE_ENV || 'production'

// Conexión base de datos
if(env === 'development'){
	mongoose.connect('mongodb://172.17.0.1/backstage-dev')
} else {
	mongoose.connect('mongodb://172.17.0.1/backstage')
}

var Person = models.person
var persona = new Person({
	name: 'Alberto'
})

persona.save(function (err, res) {
	if (err) console.log(err)
	document.write(res.name)
})