'use strict';
const userRouter = require('./user');
const itemRouter = require('./item');
const transactionRouter = require('./transaction');
const ticketRouter = require('./ticket');
const authRouter = require('./auth');

module.exports = app => {
  app.use(authRouter);
  app.use(userRouter);
  app.use(itemRouter);
  app.use(transactionRouter);
  app.use(ticketRouter);
};
