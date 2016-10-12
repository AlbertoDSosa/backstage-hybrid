
var express = require('express')
var db = require('libs/queries')
var Equipament = require('libs/models').equipament

var router = express.Router()

router.post('/equipament', function (req, res) {

	db.query(req, res, 'save', Equipament)

})

router.get('/equipaments/:feature?', function (req, res) {

  db.query(req, res, 'find', Equipament)

})

router.get('/equipament/:id?', function (req, res) {

  db.query(req, res, 'findOne', Equipament)

})

router.put('/equipament/:id?', function (req, res) {
  db.query(req, res, 'update', Equipament)

})

router.delete('/equipament/:id?', function (req, res) {
  var id = req.params.id

  db.query(req, res, 'delete', Equipament)

})

module.exports = router
