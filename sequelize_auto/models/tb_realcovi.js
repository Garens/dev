/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_realcovi', {
    Id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DeviceType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RealTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COValue: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ViValue: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_realcovi'
  });
};
