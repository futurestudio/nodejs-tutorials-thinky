var User = require('../models/user')
var _ = require('lodash')
var when = require('when')

var findUsersByCity = function (city) {
  // filter users by city name (in nested address object)
  return User.filter({
    address: {
      city: city
    }
  }).run().then(function (users) {
    if (_.isEmpty(users)) {
      // nothing found
      return when.reject('No user found for city: ' + city)
    }

    // return or perform desired operations on document(s)
    // we just return in a resolving Promise :)
    return when.resolve(users)
  })
}
