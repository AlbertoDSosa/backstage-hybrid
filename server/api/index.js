var express = require('express')

//var users = require('./users')
var equipaments = require('./equipaments')
var shows = require('./shows')

// Express Router
var apiRouters = express.Router()

apiRouter.use('/', users)
apiRouters.use('/', equipaments)
apiRouters.use('/', shows)

module.exports = apiRouters
