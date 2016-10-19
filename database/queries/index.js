
var promise = require('mpromise')

function Query(resource) {
  var self = this
  this.resource = resource
  this.queryResponse = function (err, res) {
    if(err) {
      self.response = err
    } else  {
      self.response = res
    }
  }

  this.queryResult = function (err, doc, result) {
    if(err){
      self.result = err
    } else {
      self.result = [doc, result]
    }
  }
}


// CRUD

Query.prototype.writeOne = function (doc) {

  var resource = new this.resource(doc)

  promise = resource.save(this.queryResponse)

  return promise

}

Query.prototype.writeMany = function(docs) {
  promise = resource.insertMany(docs, this.queryResponse)

  return promise
}

Query.prototype.readAll = function(param) {
  param = param || {}

  promise = this.resource.find(param, this.queryResponse)

  return promise

}

Query.prototype.readOne = function(param) {
  promise = this.resource.findOne(param, this.queryResponse)

  return promise
}

Query.prototype.deleteMany = function(param) {
  param = param || {}

  promise = this.resource.remove(param, this.queryResponse)

  return promise

}

Query.prototype.deleteOne = function(id) {

  promise = this.resource.findOneAndRemove(
    {
      id: id
    },
    {
      passRawResult: true
    },
    this.queryResult
  )

  return promise

}

module.exports = Query

