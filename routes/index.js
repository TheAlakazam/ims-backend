'use strict';
const userRouter = require('./user');
const itemRouter = require('./item');
const transactionRouter = require('./transaction');

module.exports = app => {
  app.use(userRouter);
  app.use(itemRouter);
  app.use(transactionRouter);
};
