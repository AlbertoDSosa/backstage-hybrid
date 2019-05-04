
var express = require('express')
var db = require('database/queries')
var Equipament = require('database/models').equipament

var router = express.Router()

router.post('/equipament', function (req, res) {


})

router.get('/equipaments/:feature?', function (req, res) {

 

})

router.get('/equipament/:id?', function (req, res) {


})

router.put('/equipament/:id?', function (req, res) {

})

router.delete('/equipament/:id?', function (req, res) {
  var id = req.params.id

})

module.exports = router
