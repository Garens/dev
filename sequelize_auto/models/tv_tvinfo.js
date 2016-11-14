/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tv_tvinfo', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    WallId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Indexs: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RowCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ColCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Row: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Col: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TvType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tv_tvinfo'
  });
};
