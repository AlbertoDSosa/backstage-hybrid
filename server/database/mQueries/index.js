
const promise = require('mpromise')

function Query(resource) {
  var self = this
  this.resource = resource
  this.queryResponse = function (err, res) {
    if(err) {
      self.response = err
    } else {
      self.response = res
    }
  }

  this.queryResult = function (err, doc, result) {
    if(err){
      self.result = err
    } else {
      self.result = result
    }
  }
}


// CRUD

// Copy

Query.prototype.writeOne = function (doc) {

  var resource = new this.resource(doc)

  promise = resource.save(this.queryResponse)

  return promise

}

Query.prototype.writeMany = function(docs) {
  promise = this.resource.insertMany(docs, this.queryResponse)

  return promise
}

// Read

Query.prototype.readOne = function(id) {
  promise = this.resource.findOne(id, this.queryResponse)

  return promise
}

Query.prototype.readAll = function(params) {
  params = params || {}

  promise = this.resource.find(params, this.queryResponse)

  return promise

}

// Update

Query.prototype.update = function() {
  
};

Query.prototype.updateOne = function() {

};

// Delete

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

Query.prototype.deleteMany = function(params) {
  params = params || {}

  promise = this.resource.remove(params, this.queryResponse)

  return promise
}


module.exports = Query

