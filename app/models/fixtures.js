'use strict';
module.exports = (sequelize, DataTypes) => {
  const fixtures = sequelize.define('fixtures',
    {
      id:{type: DataTypes.STRING,
        primaryKey:true},
      floorid: DataTypes.INTEGER,
      groupid: DataTypes.INTEGER,
      gatewayid: DataTypes.INTEGER
    }, {});



    fixtures.associate = function(models) {
      fixtures.hasOne(models.log_fixtures,)
    };

  return fixtures;
};
