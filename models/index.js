var user = require('./user')
var subscription = require('./subscription')
var plan = require('./plan')


/**
 * Relation to the owner of this subscription
 *
 * @param  {Model}  User - user model
 * @param  {string}  user - field name
 * @param  {string}  user_id - foreign key, provides the owner id
 * @param  {string}  id - subscription id field
 */
user.hasOne(subscription, 'subscription', 'id', 'user_id')

/**
 * Relation to the owner of this subscription
 *
 * @param  {Model}  User - user model
 * @param  {string}  user - field name
 * @param  {string}  user_id - foreign key, provides the owner id
 * @param  {string}  id - subscription id field
 */
subscription.belongsTo(user, 'user', 'user_id', 'id')
subscription.hasOne(plan, 'plan', 'id', 'plan_id')

/**
 * Relation between subscription and plan
 */
plan.belongsTo(subscription, 'subscription', 'plan_id', 'id')


module.exports = {
  User: user,
  Subscription: subscription,
  Plan: plan
}
