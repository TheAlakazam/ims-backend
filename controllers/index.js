'use strict';
const userController = require('./user');
const itemController = require('./item');
const transactionController = require('./transaction');
const ticketController = require('./ticket');
const authController = require('./auth');

module.exports = {
  userController,
  itemController,
  transactionController,
  ticketController,
  authController
};
