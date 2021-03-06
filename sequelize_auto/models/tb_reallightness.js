/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_reallightness', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RealTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Lighteness: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_reallightness'
  });
};
