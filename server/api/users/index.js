
var express = require('express')
var User = require('libs/models').user
var db = require('libs/queries')

var router = express.Router()


// Peticiones http

router.post('/user', function (req, res) {
	
})

router.get('/user/:userId', function (req, res) {
	
})

router.put('/user/:userId?', function (req, res) {
  
})

router.delete('/user/:userId?', function (req, res) {
 
})


router.get('/users', function (req, res) {
	
})

module.exports = router
