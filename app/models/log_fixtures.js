'use strict';
module.exports = (sequelize, DataTypes) => {
  const log_fixtures = sequelize.define('log_fixtures', {
  
    fixtureId: DataTypes.STRING,
    powermode: DataTypes.STRING,
    battery_level: DataTypes.STRING,
    xsr_power: DataTypes.INTEGER,
    led_power: DataTypes.STRING,
    battery_power: DataTypes.INTEGER,
    luminaries_opmode: DataTypes.STRING,
    fault_data: DataTypes.STRING,
    brightness_level: DataTypes.STRING
  }, {});
  log_fixtures.associate = function (models) {
    // associations can be defined here
    log_fixtures.belongsTo(models.fixtures,);


  };


  return log_fixtures;
};
