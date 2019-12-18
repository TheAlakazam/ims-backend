'use strict';
const userRouter = require('./user');
const itemRouter = require('./item');
const transactionRouter = require('./transaction');
const ticketRouter = require('./ticket');

module.exports = app => {
  app.use(userRouter);
  app.use(itemRouter);
  app.use(transactionRouter);
  app.use(ticketRouter);
};
