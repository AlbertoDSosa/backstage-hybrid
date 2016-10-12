
var	express = require('express')
var app = express()
var mongoose = require('mongoose')
var api = require('./server/api')
var bodyParser = require('body-parser')
var cors = require('cors')

// Variables de entorno y globales
var env = process.env.NODE_ENV || 'production'

// Conexión base de datos
if(env === 'development'){
	mongoose.connect('mongodb://172.17.0.1/backstage-dev')
} else {
	mongoose.connect('mongodb://172.17.0.1/backstage')
}

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Servidor
app.use('/', api)

var server = app.listen(5000)
module.exports = app
