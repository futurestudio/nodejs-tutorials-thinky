var path = require('path')
var thinky = require(path.join(__dirname, '..', 'utils', 'thinky'))
var r = thinky.r
var type = thinky.type
var when = require('when')
var bcrypt = require('bcrypt')

var User = thinky.createModel("User", {
  id: type.string().default(r.uuid()),
  username: type.string(),
  password: type.string(),
  address: {
    street: type.string(),
    zip: type.number(),
    city: type.string()
  }
})

User.define('comparePassword', function(candidate) {
  var self = this

  return when.promise(function(resolve, reject) {
    bcrypt.compare(candidate, self.password, function(err, isMatch) {
      if (isMatch) {
        resolve(self)
      }

      reject('Passwords does not match')
    })
  })
})

module.exports = User
