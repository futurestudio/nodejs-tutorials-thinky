var user = require('./user')
var subscription = require('./subscription')


/**
 * Relation to the owner of this subscription
 *
 * @param  {Model}  User - user model
 * @param  {string}  user - field name
 * @param  {string}  user_id - foreign key, provides the owner id
 * @param  {string}  id - subscription id field
 */
user.hasOne(subscription, 'subscriptions', 'id', 'user_id')

/**
 * Relation to the owner of this subscription
 *
 * @param  {Model}  User - user model
 * @param  {string}  user - field name
 * @param  {string}  user_id - foreign key, provides the owner id
 * @param  {string}  id - subscription id field
 */
subscription.belongsTo(user, 'user', 'user_id', 'id')


module.exports = {
  User: user,
  Subscription: subscription
}
