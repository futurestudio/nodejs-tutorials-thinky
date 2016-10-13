var path = require('path')
var thinky = require(path.join(__dirname, '..', 'utils', 'thinky'))
var r = thinky.r
var type = thinky.type

/**
 * Define model and properties
 */
var Plan = thinky.createModel('Plan', {
  id: type.string().default(r.uuid()),
  user_id: type.string(),
  name: type.string(),
  price: type.number()
})

module.exports = Plan
