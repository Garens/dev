/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_userinfo', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DeptId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RealName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    R_Id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SignState: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SignCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LastSingTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UserDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_userinfo'
  });
};
