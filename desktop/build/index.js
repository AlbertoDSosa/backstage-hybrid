var mongoose = require('mongoose')
var models = require('../../database/models')
var Query = require('../../database/queries')

// Variables de entorno y globales
var env = process.env.NODE_ENV || 'production'

// Conexión base de datos
mongoose.connect('mongodb://localhost/backstage', function (err) {
	if (err) {
		console.log(err)
	}
})

var Person = models.person

var person = new Query(Person)

var add = document.getElementById('add')
var nameAdd = document.getElementById('add_name')
var idAdd = document.getElementById('add_id')
var remove = document.getElementById('delete')
var idRemove = document.getElementById('delete_id')
var find = document.getElementById('find')
var nameFind = document.getElementById('find_name')

find.addEventListener('submit', function (event) {
	var self = this
	var req = {
		id: idFind.value,
		name: nameFind.value
	}
	event.preventDefault()
	var query = person.readOne(req)
	query.then(function () {
		console.log(person.response)
		self.reset()
	})

},false)


add.addEventListener('submit', function (event) {
	var self = this
	var req = {
		id: idAdd.value,
		name: nameAdd.value
	}
	event.preventDefault()
	var query = person.writeOne(req)
	query.then(function () {
		console.log(person.response)
		self.reset()
	})
}, false)

remove.addEventListener('submit', function (event) {
	var self = this
	
	event.preventDefault()
	var query = person.deleteOne(idRemove.value)
	query.then(function () {
		console.log(person.result)
		self.reset()
	})
}, false)

