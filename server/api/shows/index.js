
var express = require('express')
var Show = require('libs/models').show
var db = require('libs/queries')

var router = express.Router()

router.post('/show', function (req, res) {
  db.query(req, res, 'save', Show)
})


module.exports = router
