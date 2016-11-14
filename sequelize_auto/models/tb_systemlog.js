/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_systemlog', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DeptId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProcessType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProcessDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProcessResult: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProcessTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_systemlog'
  });
};
