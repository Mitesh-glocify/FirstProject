'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Userroles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
          field: 'active',
        },
        
        order_num: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            field: 'order_num',
        },
        enable_edit: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            field: 'enable_edit',
        },
        type: {
          type: Sequelize.ENUM(
              'super_administrator',
              'administrator',
              'operator',
              'maintaner',
              'guest'
          ),
          allowNull: false,
          field: 'type'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Userroles');
  }
};