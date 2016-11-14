/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_counttraffic', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CameraId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direction: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LaneNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RecTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalFlow: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AverageSpeed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Occupancy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AverageLength: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VehicalPerKM: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SpaceBetweenVehicals: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QueueLength: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Type1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Type2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Type3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Type5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Type4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_counttraffic'
  });
};
