'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_ticket_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Tickets',
        key: 'id'
      }
    },
    transaction_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Transactions',
        key: 'id'
      }
    },
    user_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    ticket_status: {
      allowNull: false,
      type: DataTypes.ENUM(
        'START',
        'ACCEPTED',
        'REJECTED',
        'PENDING',
        'NULL'
      ),
      defaultValue: 'START'
    },
    target_user_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    hooks: {
      beforeCreate: (ticket, options) => {
        if (!ticket.parent_ticket_id) ticket.parent_ticket_id = ticket.id;
      }
    }
  });
  Ticket.associate = function (models) {
    // associations can be defined here
  };
  return Ticket;
};
