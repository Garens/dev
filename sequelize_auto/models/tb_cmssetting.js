/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_cmssetting', {
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Brightness: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TextCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Manufactory: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CMSModel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Width: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Height: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MaxRecord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Address: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Color: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_cmssetting'
  });
};
