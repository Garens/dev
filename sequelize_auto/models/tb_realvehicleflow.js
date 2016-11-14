/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_realvehicleflow', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RealTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Direction: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VehicleType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Speed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VehicleFlow: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Occupancy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AvgSpeed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VehicleWidth: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VehicleLength: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VehicleLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_realvehicleflow'
  });
};
