
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
}


// CRUD

Query.prototype.write = function (object) {

  var resource = new this.resource(object)

  promise = resource.save(this.queryResponse)

  return promise

};

Query.prototype.readAll = function(param) {
  param = param || {}

  promise = this.resource.find(param, this.queryResponse)

  return promise

};

Query.prototype.deleteAll = function(param) {
  param = param || {}

  promise = this.resource.remove(param, this.queryResponse)

  return promise

};

Query.prototype.readOne = function(param) {
  promise = this.resource.findOne(param, this.queryResponse)
  return promise
};

module.exports = Query

