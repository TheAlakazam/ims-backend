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
      allowNull: false
    },
    user_login: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false
    },
    user_supervisor: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    user_password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_level: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
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
    }
  });
  User.prototype.validPassword = async function (password) {
    console.log(password);
    console.log(this);
    const auth = await bcrypt.compare(this.user_password, password);
    return auth;
  };
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
