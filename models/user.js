var path = require('path')
var thinky = require(path.join(__dirname, '..', 'utils', 'thinky'))
var r = thinky.r
var type = thinky.type

var User = thinky.createModel("User", {
  id: type.string().default(r.uuid()),
  username: type.string(),
  password: type.number(),
  address: {
    street: type.string(),
    zip: type.number(),
    city: type.string()
  }
})

module.exports = User