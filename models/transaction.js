'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      refereces: {
        model: 'Users',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.UUID,
      allowNull: false,
      refereces: {
        model: 'Items',
        key: 'id'
      }
    },
    transaction_type: {
      type: DataTypes.ENUM('ISSUE', 'RETURN', 'PURCHASE'),
      allowNull: false
    },
    pre_transaction: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Transaction.associate = function (models) {
    // associations can be defined here
  };
  return Transaction;
};
