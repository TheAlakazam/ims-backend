'use strict';
const userRouter = require('./user');
const itemRouter = require('./item');

module.exports = app => {
    app.use(userRouter);
    app.use(itemRouter);
}