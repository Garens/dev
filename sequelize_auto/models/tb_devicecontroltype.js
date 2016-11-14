/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_devicecontroltype', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeviceType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ControlStyle: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_devicecontroltype'
  });
};
