/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_devicefault', {
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
    FaultType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FaultLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Descript: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_devicefault'
  });
};
