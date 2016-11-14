/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_road', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    RoadCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DeptId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LaneCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StartStakeNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EndStakeNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BeginStr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EndStr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_road'
  });
};
