'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticker = sequelize.define('Ticker', {
    id: DataTypes.UUID,
    parent_ticker: DataTypes.UUID,
    transaction_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    ticket_status: DataTypes.ENUM,
    target_user: DataTypes.UUID
  }, {});
  Ticker.associate = function(models) {
    // associations can be defined here
  };
  return Ticker;
};