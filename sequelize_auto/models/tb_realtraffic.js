/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_realtraffic', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    RoadId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CamearId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direction: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LanNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RecTime: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Speed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CarLength: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CarWidth: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ExistTime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_realtraffic'
  });
};
