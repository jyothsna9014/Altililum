'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('log_fixtures', {
      id: {
        allowNull: false,
        autoIncrement: true,
       // primaryKey: true,
        type: Sequelize.INTEGER
      },
      fixture_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'fixtures',
          key: 'fixture_id'
        }
      },
      powermode: {
        type: Sequelize.STRING
      },
      battery_level: {
        type: Sequelize.STRING
      },
      xsr_power: {
        type: Sequelize.INTEGER
      },
      led_power: {
        type: Sequelize.STRING
      },
      battery_power: {
        type: Sequelize.INTEGER
      },
      luminaries_opmode: {
        type: Sequelize.STRING
      },
      fault_data: {
        type: Sequelize.STRING
      },
      brightness_level: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('log_fixtures');
  }
};