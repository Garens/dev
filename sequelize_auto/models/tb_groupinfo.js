/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_groupinfo', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ParentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Type: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PhoneNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Operate: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_groupinfo'
  });
};
