'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_consumable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    item_unit: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Item.associate = function (models) {
    // associations can be defined here
  };
  return Item;
};
