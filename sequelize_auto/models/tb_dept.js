/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_dept', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DeptCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ParentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Lat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Lng: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PileNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Direction: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_dept'
  });
};
