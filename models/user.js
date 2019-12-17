'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_login: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false,
    },
    user_password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    hooks: {
      beforeCreate: async user => {
        const salt = await bcrypt.genSalt(10);
        user.user_password = await bcrypt.hash(user.user_password, salt);
      },
      afterUpdate: async user => {
        const salt = await bcrypt.genSalt(10);
        user.user_password = await bcrypt.hash(user.user_password, salt);
      } 
    },

    instanceMethods: {
      validPassword: async password => {
        return await bcrypt.compare(user.user_password, this.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};